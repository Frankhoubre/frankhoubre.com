# Evergreen Article Loop (1 article/day)

Goal: one evergreen article that builds topical authority WITHOUT
cannibalizing. Useful even without any product.

## Pick the topic
0. PRIMARY SOURCE: `seo-90-day-plan.md` (repo root, GSC-backed plan
   2026-07-10 → 2026-10-07). Read its "État d'avancement" section, take the
   next unpublished day and use its title/slug/keyword/intent/links/
   anti-cannibalization parade as the brief. Rules:
   - Days marked UPDATE refresh the named existing article (new sections,
     internal links, `dateModified`), no new file.
   - Days marked [données Frank] need real numbers from Frank: SKIP to the
     next day and log the skip in the plan tracker.
   - After publishing, update the plan's "État d'avancement" (day, slug,
     date) and add the required INBOUND link from the cluster page listed
     in the plan row.
   Also read `seo-content-map.md` + `seo-cross-domain-strategy.md` (root):
   they override KEYWORD_MAP on reserved/forbidden keywords.
1. FALLBACK ONLY (plan exhausted or day impossible): read KEYWORD_MAP
   (gaps + "topics to AVOID") and IDEAS_BACKLOG.
2. Prefer the thin clusters (audio, end-to-end pipeline, troubleshooting long
   tail, job-to-be-done comparators).
3. If Ahrefs/GSC is connected, validate with real volume + existing GSC queries
   (impressions with low CTR = update candidate; see SETUP_LOOP).

## Cannibalization gate (mandatory)
- grep the repo for the primary keyword. Read CONTENT_INDEX for near matches.
- If a similar post exists with the SAME intent: UPDATE it (refresh, add depth,
  add internal links, set `dateModified`) instead of publishing a duplicate.
- If overlap but DIFFERENT intent: proceed, and state the distinction in the
  ledger's `cannibalization_notes`.
- If too close and no distinct angle: skip, log in IDEAS_BACKLOG.

## Types to choose from
How-to, mistakes-to-avoid, workflow breakdown, comparison, glossary, beginner
guide, advanced guide, use-case, problem/solution, opinion-with-examples,
template, checklist, case-study style.

## Write (FR, 2000+ words)
Follow STYLE_GUIDE anatomy: painful concrete hook, H1 + clean H2/H3, real
examples and exact settings, 1+ comparison table when it fits, a FAQ (6-8 Q,
80-120 word answers), 2+ internal links with varied anchors, 2-3 authoritative
external links, soft CTA / ScreenWeaver bridge when natural. NO em dash.

## Frontmatter
```
---
title: "<=60 chars"
date: "<today>"
category: "tutoriels | guides | comparatifs | analyses | business | postproduction"
excerpt: "120-160 chars"
thumbnail: "/images/blog/<slug>/hero.webp"   # or omit until image exists
---
```

## Checker (must pass)
Real angle, genuinely helpful, not generic, not cannibalizing (note the check),
clean title/slug/meta, 2+ internal links, style guide respected, build passes.
Up to 3 cycles, else skip + log.

## Images
Ideal 1 hero + up to 2 contextual, local webp under
`public/images/blog/<slug>/`, descriptive alt text. If not generated this run,
omit thumbnail and queue the brief. Never reference a missing file.
- If the article is about a specific tool/site (guide, comparison, review),
  capture a real screenshot as a contextual image (STYLE_GUIDE "Real product
  screenshots"): `.loop_scripts/screenshot_url.sh <url> public/images/blog/<slug>/screenshot.webp`.
  Use it to verify the article matches the current product (version/pricing).
