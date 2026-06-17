# Daily Content Loop (orchestrator playbook)

The top-level routine. Run once per day. Max 10 iterations, then stop and log.
This is a playbook for an agent (or a human) to follow, not an executable.

## 0. Boot (always)
1. Read all of `.loop_memory/`: PROGRESS, ERRORS_AND_BLOCKERS, CONTENT_LEDGER,
   CONTENT_INDEX, KEYWORD_MAP, NEWS_SOURCES, STYLE_GUIDE, IDEAS_BACKLOG.
2. `git status` and `git log --oneline -5`. Check whether the concurrent
   translation loop is active (recent `Add EN translation` commits, recent
   mtimes in `content/blog-en/`). If active, follow B1 in ERRORS_AND_BLOCKERS:
   stage explicit paths only, never `git add -A`.
3. `node .loop_scripts/build_ledger.mjs` to refresh CONTENT_INDEX.

## 1. SEO audit first (cheap, informs everything)
- Follow `seo_audit_loop.md`. Fix safe issues. Note what you deferred.

## 2. News (2 articles) — see `news_research_loop.md`
- Research last 24-72h. Two distinct stories, two distinct intents.
- Write FR (primary). Category `actualite`. Date today.
- Run the checker (writer/checker split). Max 3 revision cycles each.

## 3. Evergreen (1 article) — see `evergreen_article_loop.md`
- Pick from gaps in KEYWORD_MAP / IDEAS_BACKLOG. Confirm no cannibalization.
- Write FR. Category per intent. Date today. Checker. Max 3 cycles.

## 4. Build + validate
- `npm run lint` (eslint), `npm run typecheck`, `npm run build`. Content is
  markdown so type/lint rarely affects it, but build validates frontmatter and
  MDX. Fix issues. Max 3 build-fix attempts, then stop and log (hard stop).

## 5. Publish — see `publish_loop.md`
- Only if build passes, articles complete, audit fixes safe, memory updated.
- Stage explicit paths. Commit with a clear message. Push `main` only per the
  deploy decision in ERRORS_AND_BLOCKERS / SETUP_LOOP.

## 6. Close out (always)
- Update CONTENT_LEDGER (one block per new article), PUBLISH_LOG,
  SEO_AUDIT_LOG, KEYWORD_MAP (used keywords), PROGRESS (next steps),
  ERRORS_AND_BLOCKERS, and write DAILY_REPORT.md.

## Hard stops (stop, log in ERRORS_AND_BLOCKERS, do not force)
- Build fails after 3 fix attempts.
- Deploy fails.
- Missing credential needed to proceed.
- News source quality too weak (then skip news, do evergreen only, log it).
- Major merge conflict / risk of deleting real content.
- Legal, factual, or sensitive/political uncertainty (pause for human).
- 10 iterations reached.
