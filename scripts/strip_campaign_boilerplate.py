#!/usr/bin/env python3
"""Retire les blocs génériques enrich/rebuild des articles campagne."""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BLOG = ROOT / "content" / "blog"
sys.path.insert(0, str(ROOT / "scripts"))

from enrich_blog_posts_min_2000_words import parse_frontmatter, word_count_body  # noqa: E402

STRIP_HEADINGS = (
    "## Approfondissement terrain",
    "## Prolongement série B",
    "## Pratique Frank Houbre (terrain)",
)

PUB_MARKER = re.compile(r"\n<!-- PUBLICATION DATE:.*", re.S)


def strip_body(body: str) -> str:
    # Remove generic sections before publication marker (or EOF)
    m = PUB_MARKER.search(body)
    tail = m.group(0) if m else ""
    main = body[: m.start()] if m else body

    for heading in STRIP_HEADINGS:
        idx = main.find(heading)
        if idx != -1:
            main = main[:idx]

    lines = []
    for line in main.splitlines():
        if "Applique cette discipline sur **" in line:
            continue
        lines.append(line)

    main = "\n".join(lines).rstrip() + "\n"
    return main + tail


def main() -> None:
    slugs = sys.argv[1:] or [p.stem for p in sorted(BLOG.glob("*.md"))]
    changed = 0
    for slug in slugs:
        path = BLOG / f"{slug}.md"
        if not path.is_file():
            continue
        raw = path.read_text(encoding="utf-8")
        parsed = parse_frontmatter(raw)
        if not parsed:
            continue
        fm, body, block = parsed
        before = word_count_body(body)
        new_body = strip_body(body)
        if new_body == body:
            continue
        path.write_text(block + new_body, encoding="utf-8")
        after = word_count_body(new_body)
        print(f"{slug}: {before} -> {after}")
        changed += 1
    print(f"Stripped: {changed}")


if __name__ == "__main__":
    main()
