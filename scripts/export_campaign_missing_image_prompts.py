#!/usr/bin/env python3
"""Export prompts for campaign articles still missing images.

Reads prompts directly from markdown articles (lines starting with `Prompt:`),
then emits JSON + TXT files for local batch rendering.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BLOG = ROOT / "content" / "blog"
PUBLIC = ROOT / "public" / "images" / "blog"
OUT_JSON = ROOT / "tmp-ai-studio-missing-prompts.json"
OUT_TXT = ROOT / "tmp-ai-studio-missing-prompts.txt"


def _campaign_files() -> list[Path]:
    files: list[tuple[str, str, Path]] = []
    for path in BLOG.glob("*.md"):
        txt = path.read_text(encoding="utf-8")
        m = re.search(r'^date:\s*"([0-9\-]+)"', txt, re.M)
        if not m:
            continue
        date = m.group(1)
        if date >= "2026-04-09":
            files.append((date, path.stem, path))
    files.sort(key=lambda x: (x[0], x[1]))
    return [p for _, _, p in files]


def _missing_slots(slug: str) -> list[str]:
    out: list[str] = []
    for slot, file_name in (
        ("hero", "hero.webp"),
        ("workflow_1", "workflow-1.webp"),
        ("workflow_2", "workflow-2.webp"),
    ):
        if not (PUBLIC / slug / file_name).is_file():
            out.append(slot)
    return out


def main() -> None:
    records = []
    lines = []
    for md in _campaign_files():
        slug = md.stem
        text = md.read_text(encoding="utf-8")
        prompts = re.findall(r"^Prompt:\s*(.+)$", text, re.M)
        if len(prompts) < 3:
            continue
        missing = _missing_slots(slug)
        if not missing:
            continue
        mapping = {
            "hero": prompts[0],
            "workflow_1": prompts[1],
            "workflow_2": prompts[2],
        }
        rec = {"slug": slug, "missing": missing}
        for slot in missing:
            rec[slot] = mapping[slot]
            lines.append(f"[{slug}] {slot}\n{mapping[slot]}\n")
        records.append(rec)

    OUT_JSON.write_text(json.dumps(records, ensure_ascii=False, indent=2), encoding="utf-8")
    OUT_TXT.write_text("\n".join(lines), encoding="utf-8")
    print(f"{len(records)} articles avec images manquantes")
    print(f"JSON: {OUT_JSON.relative_to(ROOT)}")
    print(f"TXT:  {OUT_TXT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
