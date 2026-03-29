#!/usr/bin/env python3
"""Copie les PNG générés (assets Cursor) vers public/images/blog/... en WebP."""
from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public" / "images" / "blog"

DEFAULT_ASSETS = Path(
    "/Users/frankhoubre/.cursor/projects/Users-frankhoubre-Documents-frankhoubre-com/assets",
)

sys.path.insert(0, str(ROOT / "scripts"))
from ai_studio_rest_data import ARTICLES  # noqa: E402


def main() -> None:
    assets = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_ASSETS
    if not assets.is_dir():
        print(f"Dossier assets introuvable : {assets}", file=sys.stderr)
        sys.exit(1)

    mapping = (
        ("hero", "hero.webp"),
        ("w1", "workflow-1.webp"),
        ("w2", "workflow-2.webp"),
    )
    for idx, meta in enumerate(ARTICLES):
        slug = meta["slug"]
        dest_dir = PUBLIC / slug
        dest_dir.mkdir(parents=True, exist_ok=True)
        stem = f"blog-{idx:02d}"
        for suf, out_name in mapping:
            src = assets / f"{stem}-{suf}.png"
            if not src.is_file():
                print(f"Fichier manquant : {src}", file=sys.stderr)
                sys.exit(2)
            dst = dest_dir / out_name
            Image.open(src).convert("RGB").save(dst, "WEBP", quality=88, method=6)
            print(dst.relative_to(ROOT))


if __name__ == "__main__":
    main()
