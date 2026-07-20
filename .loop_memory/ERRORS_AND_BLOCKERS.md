# ERRORS_AND_BLOCKERS.md

Open issues that stop or constrain the loop. Resolve, then move to a "Resolved"
note with the date. Newest on top.

## Run 23 — 2026-07-20 : MDX bug fix (mastering-loudness)
Pre-existing article mastering-loudness-pub-reseaux-sociaux-ia (FR+EN) had `<=` inside a
Markdown table cell. MDX parser interpreted it as a JSX tag opening, causing prerender error.
Fixed to "max -1 dBTP". Build passed after fix. No new blockers from this run.

## Run 21 — 2026-07-16 : RAS
Aucun blocage. 0 erreurs SEO. Build 539 pages PASS. Merge sans conflit. Push OK.
Images générées dans worktree (script écrit dans worktree public/ directement quand lancé depuis worktree).

## Run 20 — 2026-07-14 : RAS
Aucun blocage. 0 erreurs SEO. Build 532 pages PASS. Merge fast-forward.
Push rejeté (translation loop commit ahead) : git stash + pull --rebase + stash pop + push OK.

## Run 19 — 2026-07-13 : RAS
Aucun blocage. 0 erreurs SEO. Build 527 pages PASS. Merge fast-forward. Push OK.

## Run 18 — 2026-07-12 : RAS
Aucun blocage. 0 erreurs SEO. Build 521 pages PASS. Merge fast-forward. Push OK.

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

### B3 — Site-wide duplicate H1 on FR articles (RESOLVED 2026-06-17)
Every FR `/blog/<slug>` rendered two `<h1>`: the hero title (frontmatter) plus
the body markdown `# Title`. Fixed by stripping a single leading level-1 ATX
heading from the body in `src/lib/mdx-pipeline.ts` (`stripLeadingH1`, called in
`prepareArticleMdxParts`). No-op for EN bodies (they start with prose).
Verified live: FR articles (existing + the 3 new ones) went 2 -> 1 `<h1>`, title
preserved, intros intact, EN unchanged. typecheck + build PASS. Shipped via
worktree -> branch 7e399b5 -> merge eb77f47 -> origin/main, Vercel deployed and
confirmed live.
