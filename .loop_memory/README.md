# .loop_memory — persistent memory for the growth loop

Read these at the START of every run, update them at the END. Start with
`PROGRESS.md`.

- **PROGRESS.md** — run-to-run state: last run, in progress, failed, fixed, next.
- **CONTENT_LEDGER.md** — rich, append-only log of articles THIS loop publishes.
- **CONTENT_INDEX.md** — auto-generated map of ALL existing articles
  (`node .loop_scripts/build_ledger.mjs`). Do not hand-edit.
- **KEYWORD_MAP.md** — clusters, saturated topics, gaps. Anti-cannibalization.
- **NEWS_SOURCES.md** — sources + queries for the news loop.
- **STYLE_GUIDE.md** — the voice contract (the checker enforces it).
- **SEO_AUDIT_LOG.md** — daily audit history.
- **PUBLISH_LOG.md** — git/deploy record.
- **ERRORS_AND_BLOCKERS.md** — open issues + credentials needed.
- **IDEAS_BACKLOG.md** — evergreen/news angles to pull from.
- **DAILY_REPORT.md** — pointer to the root `DAILY_REPORT.md`.

Playbooks and runnable scripts are in `../.loop_scripts/`. Orientation for
humans is in `../SETUP_LOOP.md`.
