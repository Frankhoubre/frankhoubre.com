# ERRORS_AND_BLOCKERS.md

Open issues that stop or constrain the loop. Resolve, then move to a "Resolved"
note with the date. Newest on top.

## OUVERT 2026-08-28 — les deux checkers perdent tout le frontmatter sur un worktree CRLF

**Symptôme.** `node .loop_scripts/seo_audit.mjs` rapporte 1990 erreurs sur 531
fichiers, dont « Missing title / Invalid date / Missing category / Missing
excerpt » sur quasiment TOUS les articles, y compris ceux publiés depuis des
mois et jamais touchés. `editorial_audit.mjs` a le même défaut.

**Cause identifiée.** Le repo a `core.autocrlf=true`, donc tout le worktree est
en CRLF (le contenu commité, lui, reste en LF). Les deux scripts découpent le
frontmatter avec `split("\n")` puis testent `line.match(/^([A-Za-z0-9_]+):\s*(.*)$/)`.
Chaque ligne garde alors un `\r` final, et en JS hors mode multiligne `$` ne
tolère pas ce `\r` : le match échoue. Seule la dernière ligne du bloc (celle que
`.trim()` a nettoyée, en pratique `thumbnail`) est lue. D'où 4 erreurs de méta
par article, sur tout le site.

**Preuve.** Les deux audits rejoués sur des copies patchées (une seule ligne
changée, normaliser les CRLF à la lecture) donnent **0 erreur** au lieu de 1990,
pour 537 warnings.

**Le correctif existe déjà ailleurs dans le repo.** `.loop_scripts/build_ledger.mjs`
utilise `split(/\r?\n/)` et porte même un commentaire qui décrit exactement ce
piège. Il n'a simplement jamais été reporté sur `seo_audit.mjs` et
`editorial_audit.mjs`.

**Pourquoi ce n'est pas corrigé aujourd'hui.** Modifier les scripts de gate est
hors périmètre d'un run de publication quotidien : ça change le comportement de
la porte pour tous les runs suivants. À décider par Frank. Deux options :
aligner les deux scripts sur `build_ledger.mjs` (une ligne chacun), ou ajouter
un `.gitattributes` avec `*.md text eol=lf` pour normaliser le worktree.

**Contournement en place.** Les articles neufs sont écrits en LF (J17 et J18),
ce qui les rend lisibles par le checker et permet de vérifier réellement le
travail du jour. Tant que le reste du site est en CRLF, le total global d'erreurs
reste du bruit : ne juger un run que sur les lignes qui concernent son slug.
## RESOLVED 2026-08-03 (same day, Frank's instruction) — image pipeline switched to Nano Banana 2

Frank gave a Vercel AI Gateway key and instructed: never use the Higgsfield
MCP for blog images again, use only this. New default:
`scripts/render_blog_queue_nanobanana.py`, model
`google/gemini-3.1-flash-image-preview` (Nano Banana 2), called via
`/v1/chat/completions` on `https://ai-gateway.vercel.sh` with
`AI_GATEWAY_API_KEY` (in `.env.local`, gitignored, never commit it). Tested
end to end (generation + cinematic post-processing + webp save), works.
Supersedes the note below for all runs from now on; the note is kept for
history (why J9's image was made via Higgsfield).

## Run 24 — 2026-08-03 : /presse page missing, GEMINI image pipeline unavailable

- **`/presse` route does not exist** anywhere in `src/app` (confirmed: no
  directory, no redirect in `next.config.ts`), even though `/a-propos`
  (`src/app/a-propos/page.tsx`, "Réseaux, profils et sites" section) already
  links to it, and `seo-90-day-plan.md` references it as a link target for
  many future days (J4, J7, J27, J32, J42, J58, J67, J75, J82, J85, J87, J89,
  J90...). This is a pre-existing gap, not introduced by this run. Action
  needed: either build a real `/presse` page (kit presse: bio, visuels,
  références festival, as `/a-propos` already promises) or remove/redirect the
  dangling links until it exists. Until resolved, future days that call for a
  `/presse` link should omit it rather than ship a broken link (done for J9).
- **`.env.local` / `GEMINI_API_KEY` do not exist** in this environment, so the
  documented Python/Imagen image pipeline (`scripts/render_blog_queue_gemini.py`)
  is unavailable. Used the Higgsfield MCP (`generate_image`, model `soul_2`,
  16:9) instead for J9's hero image, then `ffmpeg` to convert to
  1600x900 webp (quality 90) to match the site's existing convention. Works
  fine as a substitute; flagging so future runs know why the hero image for
  this article wasn't produced via the usual script.
  [UPDATE 2026-08-17: note historique. Depuis 2026-08-03 le pipeline officiel
  est `scripts/render_blog_queue_nanobanana.py` (clé `AI_GATEWAY_API_KEY` dans
  `.env.local`). Higgsfield et `render_blog_queue_gemini.py` sont interdits.]

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
- **Image generation**: RESOLVED. Images are generated by script ONLY; ALL
  article writing/rédaction is done by Claude directly in-session, never by
  Gemini or any other model. Since 2026-08-03 the official pipeline is
  `scripts/render_blog_queue_nanobanana.py` (Nano Banana 2 via the Vercel AI
  Gateway, key `AI_GATEWAY_API_KEY` in `.env.local`) producing
  `public/images/blog/<slug>/hero.webp` etc.; the old direct-Gemini script
  (`render_blog_queue_gemini.py`, `GEMINI_API_KEY`) and Higgsfield are
  forbidden going forward. Do all prose here.
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
