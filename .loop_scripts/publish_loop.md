# Publish Loop (git + deploy)

## Preconditions (all must be true)
- `npm run build` passes.
- No broken route introduced (build output shows the new slugs).
- Articles complete (frontmatter valid, checker passed, images exist or
  thumbnail omitted).
- Audit fixes are safe and logged.
- CONTENT_LEDGER, SEO_AUDIT_LOG, KEYWORD_MAP, PROGRESS updated.

## Concurrency rule (see ERRORS_AND_BLOCKERS B1)
A separate translation loop also commits to `main`. Therefore:
- NEVER `git add -A` or `git add .`. Stage explicit paths only:
  ```
  git add .loop_memory .loop_scripts SETUP_LOOP.md
  git add content/blog/<new-slug>.md
  git add public/images/blog/<new-slug>   # if images generated
  ```
- `git status` and confirm ONLY intended paths are staged before committing.
- If `.git/index.lock` exists, the other loop is mid-commit. Wait and retry.
  Do not delete the lock.

## Commit
- Branch: the repo works on `main` (the translation loop commits there too). A
  local commit on `main` is fine. If the human prefers isolation, use
  `loop/daily-content-YYYY-MM-DD` or a git worktree.
- Message example:
  ```
  Daily loop YYYY-MM-DD: 2 news + 1 evergreen, SEO fixes

  - news: <slug>, <slug>
  - evergreen: <slug>
  - seo: <what was fixed>
  ```
  End with the Co-Authored-By trailer.

## Deploy
- Vercel auto-deploys on push to `main`. Push only when the deploy decision is
  confirmed (SETUP_LOOP). A local commit deploys nothing until pushed.
- After push, VERIFY: the production build succeeded and the new slugs are
  reachable on https://frankhoubre.com/blog/<slug> (and /en if applicable).
  If deploy fails, log it in ERRORS_AND_BLOCKERS and PUBLISH_LOG. Do not
  pretend it worked.

## Record
- Append to PUBLISH_LOG.md: timestamp, branch, sha, summary, build, deploy.
