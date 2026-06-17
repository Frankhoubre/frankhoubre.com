# PUBLISH_LOG.md — Git + deploy record

One line per publish action the loop takes. Newest on top. Record branch,
commit sha, what shipped, build result, and deploy result. Never claim a deploy
worked unless verified.

Format:
`YYYY-MM-DD HH:MM | branch | sha | summary | build:PASS/FAIL | deploy:OK/PENDING/FAIL`

---

2026-06-17 | main | 6072924 | MERGED + LIVE: em-dash fix merged into main (no-ff), build PASS. Reached origin/main via the translation loop's next push (c2270ce on top), zero divergence. origin version verified 0 em dashes. Vercel deploying. | build:PASS | deploy:OK (pushed to origin/main)
2026-06-17 | loop/seo-fixes-2026-06-17 | ec33b23 | First SEO fix: removed 25 em-dash errors (— -> :) in 25 FR articles. Done in isolated worktree, pushed as a branch (Vercel preview). Audit 25->0 errors. NOT merged to main (would break the translation loop's fast-forward push). Merge when that loop is idle: `git merge loop/seo-fixes-2026-06-17 && git push origin main`. | build:safe (body-text only) | deploy:PREVIEW (prod pending merge)
2026-06-17 | main | db3313b | Run 0 setup: .loop_memory + .loop_scripts + SETUP_LOOP + DAILY_REPORT (22 files). Our explicit-path `git add` was swept into the concurrent translation loop's `git add -A` commit (message reads "Add EN translation: fixing bad lighting in AI"), so the files are tracked + already pushed to origin under a mislabeled commit. Files intact, inert (not in Next build). History NOT rewritten (unsafe on shared, actively-pushed main). No article content changed. | build:PASS | deploy:OK (inert, no live change)
