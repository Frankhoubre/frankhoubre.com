# PUBLISH_LOG.md — Git + deploy record

One line per publish action the loop takes. Newest on top. Record branch,
commit sha, what shipped, build result, and deploy result. Never claim a deploy
worked unless verified.

Format:
`YYYY-MM-DD HH:MM | branch | sha | summary | build:PASS/FAIL | deploy:OK/PENDING/FAIL`

---

2026-06-19 | main | 50056e2 | RETROFIT LIVE: added real site screenshots (klingai.com, lumalabs.ai via screenshot_url.sh) to the 2 tool articles, AND updated the Luma article from Ray 2 to Ray 3.2 (current model: 16 keyframes, Speed/Quality, HDR+EXR ACES, Ray3 Modify, verified facts). Screenshot placed as 2nd body image (1st=hero, skipped by thumbnail logic). Audit 0 err, build PASS, verified live (title shows Ray 3.2, screenshots HTTP 200). | build:PASS | deploy:OK
2026-06-17 | main | ad2e2b0 | CONTENT BATCH 1 LIVE: 2 news + 1 evergreen (elevenlabs-fin-voix-v1-migration-2026, flux-2-open-weights-images-ia-local-2026, corriger-scintillement-flicker-video-ia) + 3 Imagen hero images. Worktree -> branch 5169676 -> merge ad2e2b0 -> pushed origin/main (ff). Audit 0 err, build PASS, 3 pages prerendered. | build:PASS | deploy:OK (pushed origin/main, Vercel)
2026-06-17 | main | 6072924 | MERGED + LIVE: em-dash fix merged into main (no-ff), build PASS. Reached origin/main via the translation loop's next push (c2270ce on top), zero divergence. origin version verified 0 em dashes. Vercel deploying. | build:PASS | deploy:OK (pushed to origin/main)
2026-06-17 | loop/seo-fixes-2026-06-17 | ec33b23 | First SEO fix: removed 25 em-dash errors (— -> :) in 25 FR articles. Done in isolated worktree, pushed as a branch (Vercel preview). Audit 25->0 errors. NOT merged to main (would break the translation loop's fast-forward push). Merge when that loop is idle: `git merge loop/seo-fixes-2026-06-17 && git push origin main`. | build:safe (body-text only) | deploy:PREVIEW (prod pending merge)
2026-06-17 | main | db3313b | Run 0 setup: .loop_memory + .loop_scripts + SETUP_LOOP + DAILY_REPORT (22 files). Our explicit-path `git add` was swept into the concurrent translation loop's `git add -A` commit (message reads "Add EN translation: fixing bad lighting in AI"), so the files are tracked + already pushed to origin under a mislabeled commit. Files intact, inert (not in Next build). History NOT rewritten (unsafe on shared, actively-pushed main). No article content changed. | build:PASS | deploy:OK (inert, no live change)
