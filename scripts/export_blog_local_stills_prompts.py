#!/usr/bin/env python3
"""Exporte tmp-blog-local-stills-prompts.json pour articles à partir du 2026-04-11.

Exclut les lignes `Prompt:` template ([SCENE DESCRIPTION]).
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from blog_cinematic_prompts import prompts_for_slug  # noqa: E402

BLOG = ROOT / "content" / "blog"
OUT_JSON = ROOT / "tmp-blog-local-stills-prompts.json"


def _slugs_from_date(min_date: str) -> list[str]:
    slugs: list[tuple[str, str]] = []
    for path in BLOG.glob("*.md"):
        txt = path.read_text(encoding="utf-8")
        m = re.search(r'^date:\s*"([0-9\-]+)"', txt, re.M)
        if not m:
            continue
        if m.group(1) >= min_date:
            slugs.append((m.group(1), path.stem))
    slugs.sort(key=lambda x: (x[0], x[1]))
    return [s for _, s in slugs]


def main() -> None:
    # Articles « campagne » avril 2026 (still manquants / à régénérer en local)
    slugs = _slugs_from_date("2026-04-11")
    records = []
    for slug in slugs:
        try:
            records.append(prompts_for_slug(slug, ROOT))
        except (OSError, ValueError) as e:
            print(f"skip {slug}: {e}", file=sys.stderr)

    OUT_JSON.write_text(json.dumps(records, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"{len(records)} articles -> {OUT_JSON.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
