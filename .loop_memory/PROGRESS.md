# PROGRESS.md — Loop state (read at start of every run, update at end)

## Last run: 2026-06-28 (Run 9 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-06-26 (batch 8: 3 articles).
- WebSearch for real news in last 72h: found Anthropic Mythos 5 partial unblock (June 26-27, 2026
  via CNN, Bloomberg, CNBC, NBC News, Fortune, Federal News Network, The Hill) and OpenAI GPT-5.6
  Sol/Terra/Luna launch under federal supervision (June 26, 2026 via TechTimes, FindSkill.ai, Releasebot).
- Wrote 2 actualite + 1 tutoriels/evergreen directly in worktree agent-a457609e.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API, tmp-new-articles-queue.json).
- SEO audit: 0 errors. Thin-content warnings on news articles expected per STYLE_GUIDE.
- Build: PASS (456 pages, 3 new articles prerendered, up from 451).
- Staged explicit paths only (3 .md + 3 hero.webp + queue file), committed c10e5b2, pushed origin/main.

### Articles published this run
1. `anthropic-mythos-5-reautorisation-cybersecurite-juin-2026` (actualite)
2. `openai-gpt-56-sol-terra-luna-modeles-juin-2026` (actualite)
3. `creer-broll-ia-plans-coupe-convaincants` (tutoriels/evergreen)

### Technical note this run
- Working tree: agent-a457609e (current worktree). Articles committed directly.
- Image generation: tmp-new-articles-queue.json with dest/prompt format. Confirmed correct.
- Build went 451 -> 456 pages (+3 articles +2 EN translations from translation loop).
- node_modules hard-linked again (cp -rl from main repo) as worktree had empty node_modules dir.

### Next run should
1. Evergreen candidates: "devis et template de quote pour projet vidéo IA client" (business),
   "présenter un projet vidéo IA à un client non-tech" (business),
   "vertical vs horizontal format for AI clips" (confirm no cannibalization first).
2. News to watch: GPT-5.6 general availability date, Fable 5 reauthorization status,
   Runway Gen-4.5 practical tips, ElevenLabs Music v2 launch, Apple iOS 27 beta updates.
3. Check if new articles got EN translations (translation loop may handle).
4. Verify Vercel CDN has cleared and all 3 new articles are 200 OK.

## Previous run: 2026-06-26 (Run 8 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-06-25 (batch 7: 3 articles).
- WebSearch for real news in last 72h: found OpenAI/Broadcom Jalapeño chip reveal (June 24, 2026
  via TechCrunch, CNBC, VentureBeat, Bloomberg, Tom's Hardware) and Google $75M investment
  in A24 for AI filmmaking tools (June 22, 2026 via Variety, Deadline, IndieWire, HollywoodReporter).
- Wrote 2 actualite + 1 comparatifs/evergreen directly in main working tree (agent-a4a11153).
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API, tmp-new-articles-queue.json).
- SEO audit: 0 errors. Pre-existing warnings only (thin-content on news expected per STYLE_GUIDE).
- Build: PASS (451 pages, 3 new articles prerendered, up from 446).
- Staged explicit paths only (3 .md + 3 hero.webp + queue file), committed 2398a4d, pushed origin/main.

### Articles published this run
1. `openai-broadcom-jalapeno-chip-inference-ia-2026` (actualite)
2. `google-a24-partenariat-ia-outils-cinema-2026` (actualite)
3. `video-ia-talking-head-presentations-quel-outil-choisir` (comparatifs/evergreen)

### Technical note this run
- Working tree: agent-a4a11153 (current worktree). Articles committed directly.
- Image generation: tmp-new-articles-queue.json with dest/prompt format. Confirmed correct.
- Build went 446 -> 451 pages (+3 articles +2 EN translations from translation loop).

### Next run should
1. Evergreen candidates: "devis et template de quote pour projet vidéo IA client" (business),
   "B-roll IA : créer des plans de coupe convaincants" (tutoriels),
   "présenter un projet vidéo IA à un client non-tech" (business).
2. News to watch: OpenAI Jalapeño deployment updates, Apple iOS 27 AI features,
   Runway Gen-5 announcements, ElevenLabs new model releases, Anthropic IPO timeline.
3. Check if new articles got EN translations (translation loop may handle).
4. Verify Vercel CDN has cleared and all 3 new articles are 200 OK.

## Previous run: 2026-06-25 (Run 7 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-06-23 (batch 6: 3 articles).
- WebSearch for real news in last 72h: found Sora API shutdown (September 24, 2026 confirmed
  via OpenAI Help Center + TechCrunch) and Anthropic confidential IPO S-1 filing (June 1, 2026
  via Anthropic.com official + CNBC + TechCrunch + Fortune at $965B valuation).
- Wrote 2 actualite + 1 business/evergreen directly in main working tree (agent-a1ee818d).
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API, queue format
  with dest/prompt fields). Images generated to main repo public/ correctly.
- SEO audit: 0 errors. Title/excerpt warnings fixed on 2 articles. Word depth warnings on
  news articles are expected (STYLE_GUIDE: 900-1500 acceptable for fast news).
- Build: PASS (446 pages, 3 new articles prerendered, up from 427).
- Staged explicit paths only (3 .md + 3 hero.webp), committed cb0a08b, pushed origin/main.

### Articles published this run
1. `sora-api-arret-septembre-2026-alternatives-createurs` (actualite)
2. `anthropic-ipo-confidential-965-milliards-valorisation-2026` (actualite)
3. `livrer-fichiers-sources-projet-video-ia-client` (business/evergreen)

### Technical note this run
- Working tree: agent-a1ee818d (current worktree). Articles committed directly.
- Image generation: tmp-new-articles-queue.json with dest/prompt format (not hero/workflow_1/2
  format). The render_blog_queue_gemini.py uses {dest, prompt, slug} format. Confirmed correct.
- The tmp-blog-local-stills-prompts.json uses a different format (hero/workflow_1/workflow_2)
  and goes through a different pipeline. Don't confuse the two.
- Build went 427 -> 446 pages (+3 articles +16 EN translations from translation loop).

### Next run should
1. Set up fresh worktree for content work if translation loop is active.
2. Evergreen candidates: "quote template for AI video projects" (business, scope + devis),
   "vertical vs horizontal format for AI clips" (confirm no cannibalization first),
   "AI video for talking-head presentations" comparatif.
3. News to watch: Apple iOS 27 beta developer releases, Runway Gen-5 announcements,
   ElevenLabs new model releases, any Kling 3.1 update, Anthropic IPO timeline updates.
4. Check if new articles got EN translations (translation loop may handle).
5. Verify Vercel CDN has cleared and all 3 new articles are 200 OK (avoid checking < 15min
   after push due to CDN 404 caching behavior).

## Previous run: 2026-06-23 (Run 6 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-06-22 (batch 5: 3 articles).
- WebSearch for real news in last 72h: found Lionsgate equity stake in Runway AI
  (Variety, June 2026) and MiniMax Hub platform launch at Shanghai Film Festival
  (Variety, June 15, 2026).
- Wrote 2 actualite + 1 comparatif/evergreen in worktree agent-adb79a3f.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API, queue-swap technique).
  Images copied from main repo to worktree before git add.
- SEO audit: 0 errors on new articles. Pre-existing style/thin-content warnings only (news expected).
- Build from worktree: PASS (427 pages, 3 new articles prerendered). Hard-linked node_modules.
- Fast-forward merged worktree-agent-adb79a3f into main, pushed origin/main (63f3ce5).

### Articles published this run
1. `lionsgate-runway-ai-series-courtes-ip-hollywood-2026` (actualite)
2. `minimax-hub-plateforme-video-ia-shanghai-juin-2026` (actualite)
3. `meilleur-outil-ia-video-publicite-produit-comparatif` (comparatifs/evergreen)

### Technical note this run
- Worktree was agent-adb79a3f (pre-existing from the run setup). Works correctly.
- Images generated in main repo, then cleared from main repo before merge to avoid
  untracked file conflict (same pattern as previous runs).
- Build went 419 -> 427 pages (+3 articles +5 EN translations from translation loop).

### Next run should
1. Set up fresh worktree for content work.
2. Evergreen candidates: "delivering source files to client for AI video project" (business),
   "vertical vs horizontal format for AI clips" (may be covered - check first),
   "AI video for talking-head presentations" comparatif,
   "quote template for AI video projects" (scope + devis).
3. News to watch: Runway Gen-5 announcements, ElevenLabs new model releases,
   Sora ChatGPT integration update, any Kling 3.1 update, Apple Intelligence updates.
4. Check if new articles got EN translations (translation loop may handle).
5. Verify Vercel CDN has cleared and all 3 new articles are 200 OK.

## Previous run: 2026-06-22 (Run 5 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-06-21 (batch 4: 3 articles).
- WebSearch for real news in last 72h: found Dreamina Seedance 2.0 Mini launch
  (ByteDance/CapCut, June 17, 2026, via Manila Times + digitalphablet.com + aijourn.com)
  and Google Flow + Veo 3.1 update with audio on all features (blog.google).
- Wrote 2 actualite + 1 evergreen in worktree loop/content-2026-06-22.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API, queue-swap technique).
  Note: script writes to main repo ROOT (not worktree), so images copied manually after generation.
- SEO audit: 0 errors on new articles. Pre-existing warnings only (thin-content on news expected).
- Build from worktree: PASS (419 pages, 3 new articles prerendered). Hard-linked node_modules.
- Fast-forward merged loop/content-2026-06-22 into main, pushed origin/main (fa99c89).
- CDN propagation: Vercel CDN cache held 404s from first check (08:12 UTC, before build finish).
  New build confirmed via homepage cache date 08:31 UTC. Articles live once CDN revalidates.

### Articles published this run
1. `seedance-2-mini-bytedance-video-rapide-juin-2026` (actualite)
2. `google-flow-veo-31-edition-audio-juin-2026` (actualite)
3. `corriger-erreurs-anatomiques-video-ia-corps-mains` (evergreen, tutoriels)

### Technical note this run
- CRITICAL FORMAT BUG FIXED: blog.ts getSlugs() reads ONLY flat files (.md / .mdx)
  in content/blog/. It does NOT recurse into subdirectories. Articles created as
  dir/index.mdx are INVISIBLE to the site. Always use content/blog/slug.md format.
  Never content/blog/slug/index.mdx. (Fix commit 6e66a82 renamed all 3 articles.)
- Image generation script (scripts/render_blog_queue_gemini.py) writes to main repo ROOT,
  not the active worktree. Workaround: run script from worktree dir (it still writes to main),
  then cp images from main to worktree before git add. This is the correct workflow.
- CDN 404 caching: Vercel CDN caches 404 responses. If you check a new URL before the
  new Vercel build finishes, you get a 404 that stays cached for ~30min. Avoid checking
  new article URLs until 15-20min after push.

### Next run should
1. Set up fresh worktree for content work.
2. Evergreen candidates: "best AI video for product ads" comparatif,
   "delivering source files to clients for AI video" business article,
   "vertical vs horizontal format for AI clips" format article.
3. News to watch: ElevenLabs Music v2 developments, Runway Gen-5 announcements,
   any Kling 3.1 update, Apple WWDC Siri/Gemini integration details.
4. Check if new articles got EN translations (translation loop may handle).
5. Verify Vercel CDN has cleared and all 3 new articles are 200 OK.

## Previous run: 2026-06-21 (Run 4 — 3 articles published)

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
