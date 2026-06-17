# ERRORS_AND_BLOCKERS.md

Open issues that stop or constrain the loop. Resolve, then move to a "Resolved"
note with the date. Newest on top.

## OPEN

### B1 — Concurrent translation loop sharing the repo (HIGH, structural)
Discovered 2026-06-17. Another Claude Code session is running an EN-translation
loop in this same working directory, committing to `main` every ~90s, writing
`content/blog-en/*.md`.
- Risk: `git add -A` would sweep its in-progress files into our commit; racing
  `git commit`/`push` on a shared HEAD can hit `index.lock` errors or interleave
  unrelated changes.
- Mitigation (mandatory for this loop):
  - Only stage explicit paths: `git add .loop_memory .loop_scripts SETUP_LOOP.md`
    plus the specific content files this loop authors. Never `git add -A`/`.`.
  - Before committing, `git status` and confirm only intended paths are staged.
  - If `index.lock` exists, wait and retry; do not delete it (the other process
    may be mid-commit).
  - Do not `git push` content changes while the translation loop is pushing,
    unless coordinating; a local commit is fine and the other loop's next push
    will carry it (our files are inert `.loop_*` and do not affect the build).
- Needs human: confirm both loops writing to `main` is acceptable, or give this
  loop its own branch / worktree.

### B2 — Em-dash + boilerplate in 25 FR articles (MEDIUM, ready to fix)
The audit flags 25 em-dash errors, all inside a templated
"gouvernance + risques + livrables" filler block that also violates the
"no empty SEO filler" rule. Safe fix exists but was deferred from the setup run.
- Action next run: remove the boilerplate block (preferred) or replace the em
  dash with a period/colon. There is an existing helper
  `scripts/strip_campaign_boilerplate.py` that may already target this pattern;
  inspect it before writing a new fixer. Verify `npm run build` after.

## NEEDS HUMAN INPUT / CREDENTIALS

- **Deploy model**: Vercel auto-deploys from `main`. The loop assumes pushing
  `main` deploys production. Confirm. (vercel.json present; remote is
  github.com/Frankhoubre/frankhoubre.com.)
- **Image generation**: new articles want local cinematic images under
  `public/images/blog/<slug>/`. The python scripts use `GEMINI_API_KEY` (present
  in `.env.local`). Confirm the loop may invoke them, or news ships with the
  default OG image until images land. Bash is available in THIS session; the
  translation session has Bash disabled.
- **Analytics / SEO data**: Ahrefs MCP + GSC tools are available in this
  environment. Confirm the frankhoubre.com Ahrefs project id / GSC property so
  the loop can pull real keyword + traffic data instead of guessing.

## RESOLVED

(none yet)
