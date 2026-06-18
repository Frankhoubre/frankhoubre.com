# PROGRESS.md — Loop state (read at start of every run, update at end)

## Last run: 2026-06-17 (Run 0 — SETUP, no content published)

### What happened
- Inspected the repo end to end. It is a Next.js 16.2.1 App Router site,
  "AI Studio" by Frank Houbre, about cinematic AI creation. Content is markdown
  in `content/blog/` (FR, primary) and `content/blog-en/` (EN). Deploys to
  Vercel on push to `main`. Date-gated publishing (future dates auto-publish).
- Built the loop system: `.loop_memory/` (this folder) and `.loop_scripts/`
  (runnable audit + ledger generator + playbooks).
- Ran baseline `npm run build` -> PASS. Ran `seo_audit.mjs` -> 25 errors
  (all em dash), ~298 warnings. Captured in SEO_AUDIT_LOG.md.
- Generated CONTENT_INDEX.md (all 266 articles), seeded CONTENT_LEDGER.md,
  KEYWORD_MAP.md, NEWS_SOURCES.md, STYLE_GUIDE.md.

### Important discovery (affects everything)
- A SEPARATE Claude Code session (PID seen at setup) is ACTIVELY running an
  EN-translation loop: it writes `content/blog-en/*.md` and commits to `main`
  about every 90 seconds. We share one working directory and one git HEAD.
- Consequence: this loop must NOT do `git add -A` (it would capture the other
  loop's in-progress files) and must NOT race commits on `main`. Stage only
  this loop's own paths (`.loop_memory .loop_scripts SETUP_LOOP.md`) and only
  when safe. See ERRORS_AND_BLOCKERS.md.

### In progress / not done
- Loop system files (22) ARE committed + pushed to origin/main, but they were
  swept into the translation loop's `git add -A` commit `db3313b` (mislabeled
  "Add EN translation: fixing bad lighting in AI"). Files intact + inert.
  History left as-is (rewriting shared, actively-pushed main is unsafe).
- No news, evergreen, or content fixes published (correct for a setup run).
- LESSON: explicit-path staging is not enough against the other loop's
  `git add -A`. Before publishing ANY article content, set up a separate git
  worktree for this loop (see ERRORS_AND_BLOCKERS B1).

### What failed
- Nothing failed. Build green, audit green-enough.

### What was fixed
- First operational SEO fix applied in an isolated worktree: all 25 em-dash
  errors cleared (audit 25 -> 0) by replacing ` — ` with ` : ` in 25 FR
  articles. Committed on branch `loop/seo-fixes-2026-06-17`, pushed (preview).
  NOT merged to main (would break the translation loop's fast-forward push);
  merge when that loop is idle. See SEO_AUDIT_LOG + PUBLISH_LOG.
- Found quality debt: a subset of those 25 articles are mostly filler; queued
  for careful rewrite in IDEAS_BACKLOG (did NOT auto-strip, which gutted them).

### DONE this run (operational)
- Em-dash fix MERGED to main and VERIFIED LIVE on frankhoubre.com (the live
  midjourney-vs-dalle article renders ":" not "—"). Branch + worktree cleaned up.
- Confirmed the safe publish mechanism: work in a worktree, merge into local
  main, let the translation loop's next push carry it to origin (zero
  divergence). The translation loop is still active as of 15:57.

### Also done this run (content batch 1)
- Published 2 news + 1 evergreen, LIVE + verified on frankhoubre.com:
  elevenlabs-fin-voix-v1-migration-2026, flux-2-open-weights-images-ia-local-2026,
  corriger-scintillement-flicker-video-ia. 3 Imagen hero images. Merge ad2e2b0,
  pushed origin/main. Audit 0 errors, build PASS.
- Proven full content pipeline: worktree -> write -> Imagen images (Gemini key
  copied into worktree, gitignored) -> audit -> build (hard-link node_modules,
  NOT symlink: Turbopack rejects symlinked node_modules) -> commit -> merge ->
  push -> verify live -> cleanup worktree.

### Also done this run (B3 fix)
- FIXED the site-wide duplicate H1 on FR articles (src/lib/mdx-pipeline.ts
  stripLeadingH1). Verified live: 2 -> 1 H1 across FR, EN unchanged. Merge
  eb77f47, pushed, Vercel deployed. B3 moved to RESOLVED.

### Next run should
1. Set up a fresh worktree for content work
   (`git worktree add -b loop/content-YYYY-MM-DD ../frankhoubre-loop main`),
   copy `.env.local` into it for Imagen, hard-link node_modules for build.
2. Begin the daily content cycle: 2 news (actualite) + 1 evergreen, written by
   Claude, using WebSearch + NEWS_SOURCES.md, checked against KEYWORD_MAP.md for
   cannibalization. Write FR first (primary site). Date them today. Generate
   hero images via the Gemini scripts.
3. Careful rewrite of the thin filler articles (IDEAS_BACKLOG) — do NOT
   auto-strip; the strip script gutted them.
4. Re-run audit, fix new safe issues, update all memory files, write
   DAILY_REPORT.md.

### Open decisions for the human (see ERRORS_AND_BLOCKERS.md)
- Should the growth loop publish to `main` directly while the translation loop
  also pushes to `main`? Recommended: yes but stage explicit paths only, never
  `-A`. Confirm acceptable.
- Image generation for new articles uses GEMINI_API_KEY (present) via the
  python scripts. Confirm the loop may run those, or ship news with the default
  OG image until images are generated.
