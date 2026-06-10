#!/usr/bin/env python3
"""Copie assets Cursor (0001.png = queue[0]) vers public/ selon tmp-blog-gen-queue.json.

Usage:
  python3 scripts/ingest_blog_queue_assets.py 14 21

Chemins assets par défaut:
  ~/.cursor/projects/.../frankhoubre-com/assets/NNNN.png
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_QUEUE = ROOT / "tmp-blog-gen-queue.json"
PUBLIC = ROOT / "public"
DEFAULT_ASSETS = Path(
    "/Users/frankhoubre/.cursor/projects/Users-frankhoubre-Documents-frankhoubre-com/assets",
)


def _save(src: Path, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    im = Image.open(src).convert("RGB")
    im = im.resize((1600, 900), Image.Resampling.LANCZOS)
    suf = dest.suffix.lower()
    if suf == ".webp":
        im.save(dest, "WEBP", quality=90, method=6)
    elif suf in (".jpg", ".jpeg"):
        im.save(dest, "JPEG", quality=92, optimize=True)
    else:
        im.save(dest, "PNG", optimize=True)


def main() -> None:
    if len(sys.argv) < 3:
        raise SystemExit(
            "Usage: ingest_blog_queue_assets.py <queue_start> <queue_end> [assets_dir] [queue_json]",
        )
    start = int(sys.argv[1])
    end = int(sys.argv[2])
    assets = Path(sys.argv[3]) if len(sys.argv) > 3 and not str(sys.argv[3]).endswith(".json") else DEFAULT_ASSETS
    queue_path = DEFAULT_QUEUE
    if len(sys.argv) > 3 and str(sys.argv[3]).endswith(".json"):
        queue_path = Path(sys.argv[3])
    elif len(sys.argv) > 4:
        queue_path = Path(sys.argv[4])

    records = json.loads(queue_path.read_text(encoding="utf-8"))
    skipped = 0
    for i in range(start, end + 1):
        if i < 0 or i >= len(records):
            raise SystemExit(f"Index hors limites: {i}")
        src = assets / f"{i + 1:04d}.png"
        if not src.is_file():
            print(f"SKIP manquant: {src.name}", file=sys.stderr)
            skipped += 1
            continue
        dest = PUBLIC / records[i]["dest"].lstrip("/")
        _save(src, dest)
        print(dest.relative_to(ROOT))
    if skipped:
        print(f"Ignorés (fichier absent): {skipped}", file=sys.stderr)


if __name__ == "__main__":
    main()
