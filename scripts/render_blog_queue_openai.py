#!/usr/bin/env python3
"""Génère toutes les images du blog listées dans tmp-blog-gen-queue.json via OpenAI Images.

Prérequis:
  export OPENAI_API_KEY=...

Usage:
  python3 scripts/render_blog_queue_openai.py
  python3 scripts/render_blog_queue_openai.py --start 14 --end 100
  python3 scripts/render_blog_queue_openai.py --force

Les entrées sont produites par un export (tmp-blog-gen-queue.json à la racine du repo).
"""
from __future__ import annotations

import argparse
import json
import os
import sys
import time
from io import BytesIO
from pathlib import Path

import requests
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
QUEUE = ROOT / "tmp-blog-gen-queue.json"
PUBLIC = ROOT / "public"

sys.path.insert(0, str(ROOT / "scripts"))
from cinematic_still_post import apply_cinematic_post  # noqa: E402


def _save_rgba_to_dest(im: Image.Image, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    im = im.convert("RGB")
    im = im.resize((1600, 900), Image.Resampling.LANCZOS)
    suf = dest.suffix.lower()
    if suf == ".webp":
        im.save(dest, "WEBP", quality=90, method=6)
    elif suf in (".jpg", ".jpeg"):
        im.save(dest, "JPEG", quality=92, optimize=True)
    else:
        im.save(dest, "PNG", optimize=True)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--start", type=int, default=0)
    parser.add_argument("--end", type=int, default=10**9)
    parser.add_argument(
        "--force",
        action="store_true",
        help="Régénère même si le fichier existe déjà",
    )
    parser.add_argument(
        "--no-post",
        action="store_true",
        help="Désactive grain / vignette (post cinéma léger)",
    )
    parser.add_argument("--sleep", type=float, default=1.2, help="Pause entre requêtes")
    parser.add_argument(
        "--min-bytes",
        type=int,
        default=150_000,
        help="Si le fichier existe et dépasse ce poids, on saute (sauf --force)",
    )
    args = parser.parse_args()

    if not os.getenv("OPENAI_API_KEY"):
        raise SystemExit(
            "OPENAI_API_KEY manquant. Exporte la clé puis relance.\n"
            "  export OPENAI_API_KEY=...",
        )

    if not QUEUE.is_file():
        raise SystemExit(f"Fichier queue introuvable: {QUEUE}")

    from openai import OpenAI

    client = OpenAI()
    records = json.loads(QUEUE.read_text(encoding="utf-8"))
    written = 0
    skipped = 0

    for i, rec in enumerate(records):
        if i < args.start or i > args.end:
            continue
        rel = rec["dest"].lstrip("/")
        dest = PUBLIC / rel
        if dest.is_file() and not args.force:
            if dest.stat().st_size > args.min_bytes:
                skipped += 1
                continue

        prompt = rec["prompt"]
        if len(prompt) > 3500:
            prompt = prompt[:3490] + "…"

        resp = client.images.generate(
            model="dall-e-3",
            prompt=prompt,
            size="1792x1024",
            quality="hd",
            n=1,
        )
        url = resp.data[0].url
        if not url:
            raise SystemExit(f"Pas d'URL pour l'index {i}")

        raw = requests.get(url, timeout=120).content
        im = Image.open(BytesIO(raw))
        if not args.no_post:
            im = apply_cinematic_post(im.convert("RGB"), seed=i)
        else:
            im = im.convert("RGB")
        _save_rgba_to_dest(im, dest)
        print(dest.relative_to(ROOT))
        written += 1
        time.sleep(args.sleep)

    print(f"Écrits: {written}, ignorés (déjà présents): {skipped}")


if __name__ == "__main__":
    main()
