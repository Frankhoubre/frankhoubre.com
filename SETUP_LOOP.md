# SETUP_LOOP.md — Autonomous content + SEO growth loop

This repo runs an autonomous editorial + SEO loop for **frankhoubre.com**
("AI Studio" — cinematic AI creation: video, image, audio, production). This
file explains what the loop is, how it is wired, and the safest way to run it
every day.

It was bootstrapped on 2026-06-17. The first run was a SETUP run: it inspected
the site, built the system, and published NO content (by design).

---

## 1. What the site is (verified)

- **Framework:** Next.js 16.2.1, App Router, React 19, TypeScript, Tailwind 4.
- **Content model:** Markdown with `gray-matter` frontmatter, rendered via
  `next-mdx-remote`. No external CMS.
  - FR (primary): `content/blog/*.md` -> `/blog/<slug>` (219 articles)
  - EN: `content/blog-en/*.md` -> `/en/blog/<slug>` (47, mirrors FR slugs)
  - Frontmatter: `title, date, category, excerpt, thumbnail?, dateModified?`
  - Categories (must match `src/lib/site.ts`): actualite, tutoriels, guides,
    comparatifs, analyses, business, postproduction, notes.
- **Publishing:** date-gated. An article dated in the future is hidden until
  that calendar day, then auto-appears (see `src/lib/blog.ts isPublishedDate`).
  This means the loop can write ahead and let articles self-publish.
- **SEO plumbing (healthy):** dynamic `src/app/sitemap.ts`, `src/app/robots.ts`,
  RSS at `/feed.xml`, canonical + hreflang (en/fr/x-default) + OG + Twitter +
  BlogPosting/Breadcrumb/FAQ JSON-LD via `src/lib/metadata.ts` and page files.
- **Deploy:** Vercel, `framework: nextjs` (`vercel.json`), auto-deploys on push
  to `main`. Remote: `github.com/Frankhoubre/frankhoubre.com`.
- **Package manager:** npm. Node 20.20.2 (`.nvmrc`).
- **Image pipeline:** python scripts in `scripts/` generate cinematic webp via
  Gemini/Imagen/local A1111; `GEMINI_API_KEY` is in `.env.local`. Images live
  under `public/images/blog/<slug>/{hero,workflow-1,workflow-2}.webp`.

## 2. The loop's job

Every day: **2 news articles** (category `actualite`, real + sourced), **1
evergreen** SEO article (no cannibalization), and **1 SEO/technical audit**
with safe fixes pushed live. All in Frank's voice (see
`.loop_memory/STYLE_GUIDE.md`).

## 3. Files

```
.loop_memory/         persistent memory (read at start, update at end of run)
  PROGRESS.md             run-to-run state
  CONTENT_LEDGER.md       rich log of loop-published articles
  CONTENT_INDEX.md        auto-generated map of ALL existing articles
  KEYWORD_MAP.md          clusters, saturated topics, gaps (anti-cannibalization)
  NEWS_SOURCES.md         where the news loop looks
  STYLE_GUIDE.md          the voice contract
  SEO_AUDIT_LOG.md        daily audit history
  PUBLISH_LOG.md          git/deploy record
  ERRORS_AND_BLOCKERS.md  open issues + needed credentials
  IDEAS_BACKLOG.md        evergreen/news angles
  DAILY_REPORT.md         latest run report (also see repo-root copy)
.loop_scripts/
  seo_audit.mjs           runnable audit (read-only)           node .loop_scripts/seo_audit.mjs
  build_ledger.mjs        regenerates CONTENT_INDEX             node .loop_scripts/build_ledger.mjs
  daily_content_loop.md   orchestrator playbook
  news_research_loop.md   news playbook
  evergreen_article_loop.md evergreen playbook
  seo_audit_loop.md       audit playbook
  publish_loop.md         git/deploy playbook
  checklist.md            per-run checklist
SETUP_LOOP.md          this file
DAILY_REPORT.md        latest run report (repo root)
```

## 4. How to run it daily

The loop is a playbook executed by a Claude Code agent. Start a session in this
repo and say: **"Run the daily content loop"** (follow
`.loop_scripts/daily_content_loop.md`). The agent reads memory, audits, writes
2 news + 1 evergreen, validates the build, publishes safely, updates memory,
writes the report.

### Automated daily run (installed 2026-06-19)

A macOS launchd LaunchAgent runs the loop automatically every day:

- **Agent:** `~/Library/LaunchAgents/com.frankhoubre.growthloop.plist`
  Fires at login (`RunAtLoad`) and daily at 10:00 (safety net).
- **Runner:** `.loop_scripts/daily_run.sh`
  Idempotent (one real run per calendar day via a date marker in
  `~/Library/Logs/frankhoubre-growthloop/last_run_date`). It invokes Claude Code
  headless (`claude -p --dangerously-skip-permissions --max-budget-usd 10`) to
  execute `daily_content_loop.md`, then sends a macOS notification
  ("X article(s) publié(s) le DATE") and the loop pushes to `main`.
- **Logs:** `~/Library/Logs/frankhoubre-growthloop/run-<date>.log` and
  `launchd.{out,err}.log`.

Commands:
```
bash .loop_scripts/daily_run.sh --status   # is today done? how many articles?
bash .loop_scripts/daily_run.sh --force    # run now regardless
launchctl unload ~/Library/LaunchAgents/com.frankhoubre.growthloop.plist  # disable
launchctl load -w ~/Library/LaunchAgents/com.frankhoubre.growthloop.plist # enable
```

**ONE-TIME REQUIRED STEP — authenticate the CLI.** The launchd job runs the
`claude` CLI outside the desktop app, which is NOT logged in by default. Until
this is done, the daily run notifies "action requise" and does nothing:
```
claude setup-token      # in Terminal, once. Long-lived token tied to your subscription.
```
After that, the daily automation runs unattended. (Alternative: export
`ANTHROPIC_API_KEY` for the launchd job, which bills via API instead.)

### Scheduling options (manual alternatives)

1. **Claude Code scheduled agent / `/schedule`** (recommended). Create a daily
   cron routine that opens this repo and runs the daily content loop playbook.
   Morning run = research + write + audit + publish. Optional evening run =
   verify deployed pages + log.
2. **System cron + Claude Code headless.** A `cron` entry (or launchd on macOS)
   that invokes Claude Code non-interactively against the daily playbook.
3. **Manual.** Run the playbook yourself each morning. Everything is logged so
   any cadence is safe to resume.

The minimum-viable runnable pieces today (no agent needed):
`node .loop_scripts/seo_audit.mjs` and `node .loop_scripts/build_ledger.mjs`.

## 5. Concurrency warning (important)

A SEPARATE Claude Code session currently runs an **EN-translation loop** in
this same working directory and commits to `main` roughly every 90 seconds. The
two loops share one git HEAD. Rules:
- This growth loop NEVER does `git add -A`/`git add .`. It stages explicit
  paths only and verifies `git status` before committing.
- If `.git/index.lock` exists, the other loop is mid-commit. Wait and retry;
  never delete the lock.
- CONFIRMED on 2026-06-17: the translation loop uses `git add -A`, so even
  separately-staged files get swept into its commits. **Give this loop its own
  git worktree** before it publishes content:
  `git worktree add ../frankhoubre-loop main`, then run the loop from there.
  Do NOT switch/create branches in the shared working tree (changes HEAD for
  the other process too).

## 6. Credentials / decisions still needed

- **Deploy confirmation:** confirm pushing `main` is the intended production
  deploy path (assumed yes via Vercel).
- **Image generation:** confirm the loop may run the python image scripts
  (`GEMINI_API_KEY` present), or accept news shipping with the default OG image
  until images are generated. (Note: the translation session has Bash disabled;
  a Bash-enabled session is needed to run image generation and `npm`.)
- **SEO data:** an Ahrefs MCP and Google Search Console tools are available in
  the agent environment. Provide / confirm the frankhoubre.com Ahrefs project id
  and GSC property to drive keyword choice and find low-CTR pages to update.
  Until then the loop uses KEYWORD_MAP judgment + WebSearch.

## 7. Safety rules (enforced by the playbooks)

First run never publishes. Never invent facts/numbers. Never copy source
paragraphs. Never `git add -A`. Never delete real content. Never commit
`.env*`. Stop and ask a human on legal/factual/sensitive uncertainty, missing
credentials, deletion/migration needs, or after 10 iterations / 3 failed
builds.
