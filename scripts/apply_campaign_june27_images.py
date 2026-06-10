#!/usr/bin/env python3
"""Convert staged PNG/JPG assets into campaign blog WebP images."""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
QUEUE = ROOT / "tmp-campaign-june27-gen-queue.json"
DEFAULT_STAGING = Path(
    "/Users/frankhoubre/.cursor/projects/Users-frankhoubre-Documents-frankhoubre-com/assets/campaign-june27",
)

sys.path.insert(0, str(ROOT / "scripts"))
from cinematic_still_post import apply_cinematic_post  # noqa: E402


def _save_webp(im: Image.Image, dest: Path, *, seed: int, no_post: bool) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    im = im.convert("RGB")
    im = im.resize((1600, 900), Image.Resampling.LANCZOS)
    if not no_post:
        im = apply_cinematic_post(im, seed=seed)
    im.save(dest, "WEBP", quality=90, method=6)


def _staging_name(slug: str, slot: str) -> str:
    slot_key = {"hero": "hero", "workflow_1": "w1", "workflow_2": "w2"}[slot]
    return f"{slug}--{slot_key}.png"


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--staging", type=Path, default=DEFAULT_STAGING)
    parser.add_argument("--no-post", action="store_true")
    parser.add_argument("--start", type=int, default=0)
    parser.add_argument("--end", type=int, default=10**9)
    args = parser.parse_args()

    if not QUEUE.is_file():
        raise SystemExit(f"Queue introuvable: {QUEUE}")

    records = json.loads(QUEUE.read_text(encoding="utf-8"))
    written = 0
    missing = 0

    for i, rec in enumerate(records):
        if i < args.start or i > args.end:
            continue
        slug = rec["slug"]
        slot = rec.get("slot", "hero")
        src = args.staging / _staging_name(slug, slot)
        if not src.is_file():
            for ext in (".jpg", ".jpeg", ".webp", ".png"):
                alt = args.staging / f"{slug}--{slot.split('_')[-1] if '_' in slot else slot}{ext}"
                if alt.is_file():
                    src = alt
                    break
        if not src.is_file():
            print(f"MANQUANT: {src.name}", file=sys.stderr)
            missing += 1
            continue
        dest = PUBLIC / rec["dest"].lstrip("/")
        _save_webp(Image.open(src), dest, seed=i, no_post=args.no_post)
        print(dest.relative_to(ROOT))
        written += 1

    print(f"Écrits: {written}, manquants: {missing}")


if __name__ == "__main__":
    main()
