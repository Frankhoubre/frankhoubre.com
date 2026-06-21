# PROGRESS.md — Loop state (read at start of every run, update at end)

## Last run: 2026-06-21 (Run 4 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-06-20 (batch 3: 3 articles).
- WebSearch for real news in last 72h: found Midjourney Medical Scanner announcement
  (Bloomberg June 18, 2026) and Google Gemini/Imagen API preview model deprecations
  (deadline June 24-25, 2026, from ai.google.dev/gemini-api/docs/changelog).
- Wrote 2 actualite + 1 evergreen in worktree loop/content-2026-06-21.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API, queue-swap technique).
- SEO audit: 1 error (multiple H1 in Google article from code block comments) -> fixed -> 0 errors.
- Build from worktree: PASS (417 pages, 3 new articles prerendered). Hard-linked node_modules.
- Fast-forward merged loop/content-2026-06-21 into main, pushed origin/main (0af03f0).
- Live verification: 200 OK on all 3 new article URLs.

### Articles published this run
1. `midjourney-medical-scanner-pivot-hardware-juin-2026` (actualite)
2. `google-imagen-gemini-image-preview-depreciation-juin-2026` (actualite)
3. `pipeline-ia-script-storyboard-production-de-a-z` (evergreen, tutoriels)

### Technical note this run
- node_modules: must use `cp -rl` (hard-link), NOT `ln -s` (symlink). Turbopack rejects
  symlinked node_modules that point outside its project root. Had to remove soft link and
  redo with `cp -rl`. Confirmed the `cp -rl` approach works.
- Image generation: temporarily swap tmp-blog-gen-queue.json with 3-item queue, run with
  --force, then restore the original 249-item queue.

### Next run should
1. Set up fresh worktree for content work.
2. Evergreen candidates: "best AI video tool for product ads" comparatif,
   "hands and eyes still breaking: current fixes" troubleshooting,
   "AI project quote template + scope" business article,
   "getting a clean loop for social" format article.
3. News to watch: ElevenLabs Music v2 API (launched June 8 changelog, underreported),
   Runway Gen-4.5 practical workflow for creators (released Dec 2025, still evergreen material),
   any Sora ChatGPT video integration update.
4. Check if new articles got EN translations (translation loop may handle).
5. Verify Google Imagen articles stay live as Imagen models actually shut down June 24-25.

## Previous run: 2026-06-20 (Run 3 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-06-19 (batch 2: 3 articles).
- WebSearch for real news in last 72h: found Grok Imagine Video 1.5 (xAI, June 17, 2026, GA release)
  and Higgsfield Creative OS (June 6, 2026, Claude MCP + Adobe/Figma integrations).
- Wrote 2 actualite + 1 evergreen in worktree agent-ae6e44dd.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API).
- SEO audit: 0 errors (news thin-content warnings are expected per STYLE_GUIDE).
- Build from main repo: PASS (3 new articles prerendered).
- Fast-forward merged worktree-agent-ae6e44dd into main, pushed origin/main (58f7c54).

### Articles published this run
1. `grok-imagine-video-1-5-xai-generation-video-ia` (actualite) - slug sans date prefix
2. `higgsfield-creative-os-claude-adobe-juin-2026` (actualite)
3. `gerer-versions-projets-video-ia` (evergreen, tutoriels)

### Next run should
1. Set up fresh worktree for content work.
2. Evergreen candidates: script-to-screen pipeline (tie all pillar tools together),
   "best AI video for music videos" comparatif extension (product-ads, talking-head),
   quote template / scope creep on AI projects.
3. Consider thin-article rewrites from IDEAS_BACKLOG.
4. Verify new articles have EN translations (translation loop may handle).

---

## Previous run: 2026-06-19 (Run 2 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-06-17 (batch 1: 3 articles).
- WebSearch for real news in last 72h: found Kling 3.0 Turbo (June 17, 2026)
  and CNC rapport IA cinéma/audiovisuel (presented June 9, 2026 at Assemblée nationale).
- Wrote 2 actualite + 1 evergreen in worktree agent-a11e082e.
- Generated 3 hero images via render_blog_queue_gemini.py (Imagen API).
- SEO audit: 2 em-dash errors in source anchors -> fixed -> 0 errors.
- Build from main repo: PASS (409 pages, 3 new articles prerendered).
- Merged worktree-agent-a11e082e into main, pushed origin/main (450bbf8).

### Articles published this run
1. `2026-06-19-kling-3-turbo-previsualisation-video-ia` (actualite)
2. `2026-06-19-cnc-rapport-ia-cinema-audiovisuel-2026` (actualite)
3. `2026-06-19-luma-ray-2-guide-pratique-settings-workflow` (evergreen, tutoriels)

### Next run should
1. Set up fresh worktree for content work.
2. Evergreen candidates: business quote template / scope creep on AI projects;
   comparator "best AI video tool for product ads"; version-control for AI projects.
3. Consider thin-article rewrites from IDEAS_BACKLOG.
4. Check if Kling 3.0 Turbo articles got EN translations (translation loop may handle).

---

## Previous run: 2026-06-17 (Run 0 — SETUP, no content published)

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

### Automation installed 2026-06-19
- launchd LaunchAgent `com.frankhoubre.growthloop` (loaded) + runner
  `.loop_scripts/daily_run.sh`: runs the daily loop at login + 10:00, idempotent,
  notifies "X articles le DATE", loop pushes main. Logs in
  ~/Library/Logs/frankhoubre-growthloop/.
- BLOCKER for unattended runs: the launchd `claude` CLI is NOT logged in (the
  desktop app login does not carry over). User must run ONCE: `claude setup-token`
  (Terminal). Until then the runner notifies "action requise" and does nothing.
  The runner detects this case (greps "not logged in") and notifies the fix.
- Today (2026-06-19) is stamped done to avoid a duplicate same-day batch (a batch
  was already published this session). First auto-run = next login after auth is
  fixed; or `bash .loop_scripts/daily_run.sh --force` to run today.

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
