#!/usr/bin/env python3
"""Rendu local des stills blog via API Automatic1111 + post-traitement pellicule.

Prérequis : WebUI lancé avec --api (souvent http://127.0.0.1:7860).

  python3 scripts/export_blog_local_stills_prompts.py
  python3 scripts/render_blog_stills_local_a1111.py --input tmp-blog-local-stills-prompts.json

Les images sont ultra réalistes si ton checkpoint / LoRA est adapté ; ce script force
le langage cinéma dans les prompts et applique grain + CA + vignette en post.
"""
from __future__ import annotations

import argparse
import base64
import json
import random
import sys
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from blog_cinematic_prompts import NEGATIVE_CINEMATIC  # noqa: E402
from cinematic_still_post import apply_cinematic_post  # noqa: E402

OUT_ROOT = ROOT / "public" / "images" / "blog"
OUT_W, OUT_H = 1376, 768


def _post_json(url: str, payload: dict) -> dict:
    req = urllib.request.Request(
        url,
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=300) as resp:
        return json.loads(resp.read().decode("utf-8"))


def _png_bytes_from_base64(s: str) -> bytes:
    if "," in s and s.split(",", 1)[0].startswith("data:image"):
        s = s.split(",", 1)[1]
    return base64.b64decode(s)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--input",
        type=Path,
        default=ROOT / "tmp-blog-local-stills-prompts.json",
    )
    parser.add_argument("--api", default="http://127.0.0.1:7860")
    parser.add_argument("--steps", type=int, default=36)
    parser.add_argument("--cfg", type=float, default=5.0)
    parser.add_argument("--sampler", default="DPM++ 2M Karras")
    parser.add_argument("--width", type=int, default=1536)
    parser.add_argument("--height", type=int, default=864)
    parser.add_argument("--seed", type=int, default=-1, help="-1 = aléatoire")
    parser.add_argument(
        "--no-post",
        action="store_true",
        help="désactive grain/CA/vignette (déconseillé)",
    )
    args = parser.parse_args()

    if not args.input.is_file():
        raise SystemExit(
            f"Fichier introuvable: {args.input}\n"
            "Génère les prompts avec: python3 scripts/export_blog_local_stills_prompts.py",
        )

    records = json.loads(args.input.read_text(encoding="utf-8"))
    endpoint = f"{args.api.rstrip('/')}/sdapi/v1/txt2img"
    rng = random.Random()

    written = 0
    for rec in records:
        slug = rec["slug"]
        out_dir = OUT_ROOT / slug
        out_dir.mkdir(parents=True, exist_ok=True)
        for slot, filename in (
            ("hero", "hero.webp"),
            ("workflow_1", "workflow-1.webp"),
            ("workflow_2", "workflow-2.webp"),
        ):
            if slot not in rec:
                continue
            seed = args.seed if args.seed >= 0 else rng.randint(0, 2**31 - 1)
            payload = {
                "prompt": rec[slot],
                "negative_prompt": NEGATIVE_CINEMATIC,
                "steps": args.steps,
                "cfg_scale": args.cfg,
                "sampler_name": args.sampler,
                "width": args.width,
                "height": args.height,
                "restore_faces": False,
                "enable_hr": False,
                "batch_size": 1,
                "n_iter": 1,
                "seed": seed,
            }
            try:
                data = _post_json(endpoint, payload)
            except urllib.error.URLError as e:
                raise SystemExit(
                    f"API locale indisponible ({endpoint}). "
                    f"Lance Automatic1111 avec --api. Détail: {e}",
                )
            images = data.get("images") or []
            if not images:
                raise SystemExit(f"Aucune image pour {slug}:{slot}")

            from PIL import Image

            png = _png_bytes_from_base64(images[0])
            tmp_png = out_dir / f"_{slot}.png"
            tmp_png.write_bytes(png)
            im = Image.open(tmp_png).convert("RGB")
            tmp_png.unlink(missing_ok=True)

            if not args.no_post:
                im = apply_cinematic_post(im, seed=seed)
            im = im.resize((OUT_W, OUT_H), Image.Resampling.LANCZOS)

            out_path = out_dir / filename
            im.save(out_path, "WEBP", quality=90, method=6)
            print(out_path.relative_to(ROOT))
            written += 1

    print(f"Images rendues: {written}")


if __name__ == "__main__":
    main()
