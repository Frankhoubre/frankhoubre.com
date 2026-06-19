# News Research Loop (2 articles/day)

Goal: 2 fresh, real, sourced news articles in the site theme (cinematic AI:
video, image, audio, production). Category `actualite`. FR primary.

## Research
1. Use WebSearch with queries from `NEWS_SOURCES.md`. Prioritize last 24-72h;
   fall back to the freshest important update in the last 7 days.
2. Prefer Tier 1 official sources. Open the primary announcement, not a reblog.
3. Require 2+ corroborating sources per article when possible. If only one weak
   source exists, do not publish it as news. Log and pick another story or skip.
4. Capture for each story: what happened, the primary URL(s), the date, the
   concrete facts (verbatim numbers only if sourced), and what is rumor vs fact.

## Cannibalization check
- Scan CONTENT_INDEX + KEYWORD_MAP. If a near-identical story exists, update the
  old article instead, or take a different angle (e.g. "what it means for
  freelancers" vs a straight announcement).

## Write (FR, ~900-1500 words is fine for news)
Each article must answer, in Frank's voice (STYLE_GUIDE):
- What happened (facts, sourced, no copied paragraphs).
- Why it matters.
- Who is affected.
- What a creator/founder/user should learn.
- How it connects to cinematic AI creation.
- A concrete practical takeaway.
Separate fact / analysis / opinion clearly. Link 2+ internal pages with varied
anchors. Link the primary source(s) externally. Soft ScreenWeaver bridge only
if it genuinely fits.

## Frontmatter
```
---
title: "<=60 chars, specific"
date: "<today YYYY-MM-DD>"
category: "actualite"
excerpt: "120-160 chars meta description"
thumbnail: "/images/blog/<slug>/hero.webp"   # or omit until image exists
---
```
Clean slug: short, hyphenated, keyword-bearing, no stop-word soup.

## Checker (must pass before publish)
- Real angle, not generic. Not copied. Sources cited and linked (2+). Fact vs
  opinion separated. No cannibalization. Title/slug/meta present and sized.
  2+ internal links. Style guide respected (NO em dash). Build passes.
- Up to 3 revision cycles. If still failing, skip and log the blocker.

## Image
- If the story is about a specific tool/site, ALSO capture a real screenshot of
  its page and use it as a contextual image (see STYLE_GUIDE "Real product
  screenshots"): `.loop_scripts/screenshot_url.sh <url> public/images/blog/<slug>/screenshot.webp`.
  The screenshot is also a fact-check: match the article to what the live site
  actually shows (version, pricing, features).
- Ideal: generate a hero under `public/images/blog/<slug>/hero.webp` (see the
  python image scripts + GEMINI_API_KEY). If not available this run, omit
  `thumbnail` (the site falls back to the default OG image) and queue the image
  brief in PROGRESS. Never reference an image file that does not exist (the
  audit will error).
