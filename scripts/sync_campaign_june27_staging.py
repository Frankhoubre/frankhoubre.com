#!/usr/bin/env python3
"""Copy campaign-june27 PNGs from Cursor assets into staging folder."""
from __future__ import annotations

import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ASSETS = Path(
    "/Users/frankhoubre/.cursor/projects/Users-frankhoubre-Documents-frankhoubre-com/assets",
)
STAGING = ASSETS / "campaign-june27"


def main() -> None:
    STAGING.mkdir(parents=True, exist_ok=True)
    copied = 0
    for src in ASSETS.glob("*--*.png"):
        dst = STAGING / src.name
        if not dst.is_file() or src.stat().st_mtime > dst.stat().st_mtime:
            shutil.copy2(src, dst)
            copied += 1
    total = len(list(STAGING.glob("*--*.png")))
    print(f"Copiés: {copied}, total staging: {total}")


if __name__ == "__main__":
    main()
