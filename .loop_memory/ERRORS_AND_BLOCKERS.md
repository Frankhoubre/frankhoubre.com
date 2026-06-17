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
- CONFIRMED 2026-06-17: the translation loop runs `git add -A` (it swept our
  separately-staged `.loop_*` files into its own commit `db3313b`, mislabeled
  "Add EN translation: fixing bad lighting in AI"). Our files are tracked,
  intact, and pushed, just under the wrong message. We did NOT rewrite history
  (unsafe while the other loop is actively committing + pushing main).
- Mitigation (mandatory for this loop):
  - Staging explicit paths is NOT enough on its own, because the other loop's
    `git add -A` will grab anything untracked/modified in the tree before our
    commit fires. To truly isolate, use a **separate git worktree** for this
    loop (e.g. `git worktree add ../frankhoubre-loop main`) so the two loops do
    not share a working tree. STRONGLY RECOMMENDED for any content commits.
  - Until a worktree exists: accept that edits may be carried by the other
    loop's commits. That is acceptable for inert `.loop_*` files, but NOT for
    article content (we want our own clean, well-messaged commits for content).
  - Never `git add -A`/`.` ourselves. Never delete `.git/index.lock`.
  - Never switch/create branches in the shared working tree (it changes HEAD
    for the other process too). Use a worktree instead.
- Needs human: confirm both loops writing to `main` is acceptable, or approve
  giving this loop its own worktree (preferred) before it publishes content.

### B2 — Em-dash + boilerplate in 25 FR articles (MEDIUM, ready to fix)
The audit flags 25 em-dash errors, all inside a templated
"gouvernance + risques + livrables" filler block that also violates the
"no empty SEO filler" rule. Safe fix exists but was deferred from the setup run.
- Action next run: remove the boilerplate block (preferred) or replace the em
  dash with a period/colon. There is an existing helper
  `scripts/strip_campaign_boilerplate.py` that may already target this pattern;
  inspect it before writing a new fixer. Verify `npm run build` after.

### B3 — Site-wide duplicate H1 on every FR article (HIGH SEO, next run)
Found 2026-06-17. Every FR `/blog/<slug>` page renders TWO `<h1>`: the page
hero renders `post.frontmatter.title` as `<h1>` (src/app/blog/[slug]/page.tsx
~line 367), and the body markdown also starts with `# Title`, which
createBlogMdxComponents maps to a real `<h1>` (tag === "h1"). Verified on live
pages: adobe-firefly-avis and the new flicker article both return 2 `<h1>`.
- Impact: duplicate H1 across all ~219 FR articles. Suboptimal for SEO/a11y.
- Proposed fix (careful, affects all articles): strip the single leading
  `# ...` line from the body in `src/lib/mdx-pipeline.ts` before render (the
  page already provides the title H1), OR map body `h1` -> `h2` in
  createBlogMdxComponents. Then full `npm run build` + visual check that no
  article loses its title, and that the in-body TOC/anchors still work.
- NOT done this run: it is a shared-code change across the whole site and
  deserves its own focused pass + full build/visual verification, not a rushed
  end-of-session edit. Also update seo_audit.mjs to flag this (it currently
  counts body H1s and misses the page-rendered title H1).
- Note: EN pages have the same shape (frontmatter h1 + body), but EN bodies do
  NOT start with `# ` (they lead with prose), so EN is single-H1. The fix is FR-side.

## NEEDS HUMAN INPUT / CREDENTIALS

- **Deploy model**: Vercel auto-deploys from `main`. The loop assumes pushing
  `main` deploys production. Confirm. (vercel.json present; remote is
  github.com/Frankhoubre/frankhoubre.com.)
- **Image generation**: RESOLVED 2026-06-17 (Frank). The `GEMINI_API_KEY` is
  for IMAGE generation ONLY. ALL article writing/rédaction is done by Claude
  directly in-session, never by Gemini or any other model. Use the python image
  scripts (Gemini/Imagen) to produce `public/images/blog/<slug>/hero.webp` etc.;
  do all prose here.
- **Analytics / SEO data**: Ahrefs MCP + GSC tools are available in this
  environment. Confirm the frankhoubre.com Ahrefs project id / GSC property so
  the loop can pull real keyword + traffic data instead of guessing.

## RESOLVED

(none yet)
