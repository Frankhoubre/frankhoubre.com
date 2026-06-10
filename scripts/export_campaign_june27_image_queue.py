#!/usr/bin/env python3
"""Export image generation queue for June 27 – July 26 campaign articles."""
from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BLOG = ROOT / "content" / "blog"
PUBLIC = ROOT / "public" / "images" / "blog"
OUT = ROOT / "tmp-campaign-june27-gen-queue.json"

SUFFIX = (
    ", cinematic still, ultra photorealistic, shot on ARRI Alexa 65, anamorphic lens, "
    "shallow depth of field, natural skin texture, subtle imperfections, film grain, "
    "volumetric lighting, realistic color grading, no CGI look, no artificial sharpness, "
    "35mm photochemical film look, no text, no watermark, no logo, widescreen 16:9"
)


def _extract_alts(text: str) -> list[str]:
    alts: list[str] = []
    for m in re.finditer(r"!\[([^\]]*)\]\(/images/blog/[^)]+\)", text):
        alts.append(m.group(1).strip())
    return alts


def _full_prompt(alt: str, title: str, excerpt: str, slot: str) -> str:
    if slot == "hero":
        kind = "Cinematic hero still, wide composition, strong atmosphere."
    else:
        kind = (
            "Cinematic behind-the-scenes workflow still, monitors and production tools, "
            "realistic workspace."
        )
    scene = alt or title
    ctx = excerpt[:200].strip()
    return f"Article: {title}. {kind} Visual: {scene}. {ctx}{SUFFIX}"


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--start-date", default="2026-06-27")
    parser.add_argument(
        "--force",
        action="store_true",
        help="Include images that already exist (full regen).",
    )
    parser.add_argument(
        "--min-bytes",
        type=int,
        default=80_000,
        help="Treat smaller files as placeholders needing regen.",
    )
    args = parser.parse_args()

    queue: list[dict[str, str]] = []
    articles = 0
    for path in sorted(BLOG.glob("*.md")):
        text = path.read_text(encoding="utf-8")
        dm = re.search(r'^date:\s*"([0-9\-]+)"', text, re.M)
        if not dm or dm.group(1) < args.start_date:
            continue
        articles += 1
        slug = path.stem
        tm = re.search(r'^title:\s*"(.+)"', text, re.M)
        em = re.search(r'^excerpt:\s*"(.+)"', text, re.M)
        title = tm.group(1) if tm else slug
        excerpt = em.group(1) if em else ""
        alts = _extract_alts(text)
        while len(alts) < 3:
            alts.append(title)
        for fname, slot in (
            ("hero.webp", "hero"),
            ("workflow-1.webp", "workflow_1"),
            ("workflow-2.webp", "workflow_2"),
        ):
            dest = PUBLIC / slug / fname
            need = args.force or not dest.is_file() or dest.stat().st_size < args.min_bytes
            if not need:
                continue
            queue.append(
                {
                    "dest": f"/images/blog/{slug}/{fname}",
                    "prompt": _full_prompt(alts[{"hero.webp": 0, "workflow-1.webp": 1, "workflow-2.webp": 2}[fname]], title, excerpt, slot),
                    "slug": slug,
                    "slot": slot,
                }
            )

    OUT.write_text(json.dumps(queue, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"{articles} articles campagne, {len(queue)} images à générer")
    print(f"Queue: {OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
