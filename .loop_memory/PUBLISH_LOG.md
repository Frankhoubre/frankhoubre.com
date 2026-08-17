# PUBLISH_LOG.md — Git + deploy record

One line per publish action the loop takes. Newest on top. Record branch,
commit sha, what shipped, build result, and deploy result. Never claim a deploy
worked unless verified.

Format:
`YYYY-MM-DD HH:MM | branch | sha | summary | build:PASS/FAIL | deploy:OK/PENDING/FAIL`

---

2026-08-17 | main | e164e15 | J10 LIVE: upscaling-video-gratuit-alternatives-topaz (plan 90j J10) publié, date frontmatter re-calée au 2026-08-17. Article + hero Nano Banana 2 déjà commités localement (b48ec8a), poussés ce jour avec e2d476b (switch pipeline) et f05d344 (mémoire). Purge des références legacy Gemini/Imagen dans daily_run.sh, news_research_loop.md, STYLE_GUIDE.md, SETUP_LOOP.md, ERRORS_AND_BLOCKERS.md ; seo-90-day-plan.md re-calé (J11 = 2026-08-18, 1 article/jour). Boucle quotidienne relancée via tâche planifiée Windows. | build:PASS (567 pages) | deploy:OK (pushed origin/main, Vercel)

2026-08-03 12:30 | main | b48ec8a | Run 25: 1 evergreen article (upscaling-video-gratuit-alternatives-topaz, plan 90j J10), reciprocal link added from the Topaz pillar article. First hero image generated via the new Nano Banana 2 / Vercel AI Gateway pipeline (scripts/render_blog_queue_nanobanana.py), Higgsfield MCP retired per Frank's instruction. Audit 0 err for this slug, typecheck PASS, lint 0 err, build PASS. Committed locally on main, NOT yet pushed: awaiting explicit user confirmation before pushing to origin/main. | build:PASS | deploy:PENDING (awaiting user go-ahead to push)

2026-08-03 11:40 | main | 2edcf4c | Run 24: 1 evergreen article (parcours-frank-houbre-guitare-cinema-ia, plan 90j J9), hero image via Higgsfield MCP (GEMINI_API_KEY unavailable locally), entrant link added from /a-propos. Audit 0 err for this slug, typecheck PASS, lint 0 err, build PASS (/blog/parcours-frank-houbre-guitare-cinema-ia prerendered). Link to /presse omitted (route doesn't exist, see ERRORS_AND_BLOCKERS.md). Committed locally on main, NOT yet pushed: waiting for explicit user confirmation before pushing to origin/main (production deploy). | build:PASS | deploy:PENDING (awaiting user go-ahead to push)

2026-06-19 | main | 50056e2 | RETROFIT LIVE: added real site screenshots (klingai.com, lumalabs.ai via screenshot_url.sh) to the 2 tool articles, AND updated the Luma article from Ray 2 to Ray 3.2 (current model: 16 keyframes, Speed/Quality, HDR+EXR ACES, Ray3 Modify, verified facts). Screenshot placed as 2nd body image (1st=hero, skipped by thumbnail logic). Audit 0 err, build PASS, verified live (title shows Ray 3.2, screenshots HTTP 200). | build:PASS | deploy:OK
2026-06-17 | main | ad2e2b0 | CONTENT BATCH 1 LIVE: 2 news + 1 evergreen (elevenlabs-fin-voix-v1-migration-2026, flux-2-open-weights-images-ia-local-2026, corriger-scintillement-flicker-video-ia) + 3 Imagen hero images. Worktree -> branch 5169676 -> merge ad2e2b0 -> pushed origin/main (ff). Audit 0 err, build PASS, 3 pages prerendered. | build:PASS | deploy:OK (pushed origin/main, Vercel)
2026-06-17 | main | 6072924 | MERGED + LIVE: em-dash fix merged into main (no-ff), build PASS. Reached origin/main via the translation loop's next push (c2270ce on top), zero divergence. origin version verified 0 em dashes. Vercel deploying. | build:PASS | deploy:OK (pushed to origin/main)
2026-06-17 | loop/seo-fixes-2026-06-17 | ec33b23 | First SEO fix: removed 25 em-dash errors (— -> :) in 25 FR articles. Done in isolated worktree, pushed as a branch (Vercel preview). Audit 25->0 errors. NOT merged to main (would break the translation loop's fast-forward push). Merge when that loop is idle: `git merge loop/seo-fixes-2026-06-17 && git push origin main`. | build:safe (body-text only) | deploy:PREVIEW (prod pending merge)
2026-06-17 | main | db3313b | Run 0 setup: .loop_memory + .loop_scripts + SETUP_LOOP + DAILY_REPORT (22 files). Our explicit-path `git add` was swept into the concurrent translation loop's `git add -A` commit (message reads "Add EN translation: fixing bad lighting in AI"), so the files are tracked + already pushed to origin under a mislabeled commit. Files intact, inert (not in Next build). History NOT rewritten (unsafe on shared, actively-pushed main). No article content changed. | build:PASS | deploy:OK (inert, no live change)
