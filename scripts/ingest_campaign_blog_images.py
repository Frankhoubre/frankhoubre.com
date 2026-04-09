#!/usr/bin/env python3
"""Ingest local campaign PNG assets into public blog image folders.

Expected source naming:
  - blog-00-hero.png
  - blog-00-w1.png
  - blog-00-w2.png
  - ...

Destination:
  public/images/blog/<slug>/{hero,workflow-1,workflow-2}.webp
"""
from __future__ import annotations

import argparse
import re
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
BLOG_DIR = ROOT / "content" / "blog"
PUBLIC = ROOT / "public" / "images" / "blog"
DEFAULT_ASSETS = Path(
    "/Users/frankhoubre/.cursor/projects/Users-frankhoubre-Documents-frankhoubre-com/assets",
)


def _campaign_slugs(start_date: str) -> list[str]:
    slugs: list[tuple[str, str]] = []
    for path in BLOG_DIR.glob("*.md"):
        txt = path.read_text(encoding="utf-8")
        m = re.search(r'^date:\s*"([0-9\-]+)"', txt, re.M)
        if not m:
            continue
        date = m.group(1)
        if date >= start_date:
            slugs.append((date, path.stem))
    slugs.sort(key=lambda x: (x[0], x[1]))
    return [s for _, s in slugs]


def _count_asset_sets(assets_dir: Path) -> int:
    n = 0
    while True:
        stem = f"blog-{n:02d}"
        if not (assets_dir / f"{stem}-hero.png").is_file():
            break
        if not (assets_dir / f"{stem}-w1.png").is_file():
            break
        if not (assets_dir / f"{stem}-w2.png").is_file():
            break
        n += 1
    return n


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--assets", type=Path, default=DEFAULT_ASSETS)
    parser.add_argument("--start-date", default="2026-04-09")
    parser.add_argument(
        "--limit",
        type=int,
        default=0,
        help="Max number of article sets to ingest (0 = all available).",
    )
    args = parser.parse_args()

    if not args.assets.is_dir():
        raise SystemExit(f"Assets introuvables: {args.assets}")

    slugs = _campaign_slugs(args.start_date)
    available_sets = _count_asset_sets(args.assets)
    if available_sets == 0:
        raise SystemExit("Aucun set d'images blog-XX trouvé dans assets.")

    max_sets = available_sets if args.limit <= 0 else min(args.limit, available_sets)
    max_sets = min(max_sets, len(slugs))

    copied = 0
    for idx in range(max_sets):
        slug = slugs[idx]
        stem = f"blog-{idx:02d}"
        mapping = (
            (args.assets / f"{stem}-hero.png", PUBLIC / slug / "hero.webp"),
            (args.assets / f"{stem}-w1.png", PUBLIC / slug / "workflow-1.webp"),
            (args.assets / f"{stem}-w2.png", PUBLIC / slug / "workflow-2.webp"),
        )
        for src, dst in mapping:
            dst.parent.mkdir(parents=True, exist_ok=True)
            Image.open(src).convert("RGB").save(dst, "WEBP", quality=90, method=6)
            print(dst.relative_to(ROOT))
            copied += 1

    print(f"Sets ingestes: {max_sets}/{len(slugs)}")
    print(f"Images ecrites: {copied}")


if __name__ == "__main__":
    main()
