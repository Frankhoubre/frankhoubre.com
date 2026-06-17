# Daily Loop Checklist (tick every run)

## Boot
- [ ] Read all `.loop_memory/` files
- [ ] `git status` + `git log -5`; is the translation loop active? stage paths only
- [ ] `node .loop_scripts/build_ledger.mjs` (refresh CONTENT_INDEX)

## SEO audit
- [ ] `node .loop_scripts/seo_audit.mjs`
- [ ] `npm run build` (frontmatter/MDX/route check)
- [ ] Fix safe issues; log deferred ones in SEO_AUDIT_LOG

## News x2 (actualite)
- [ ] Story 1 researched, 2+ sources, last 24-72h, cannibalization checked
- [ ] Story 1 written FR, checker passed (<=3 cycles)
- [ ] Story 2 researched, distinct intent, 2+ sources
- [ ] Story 2 written FR, checker passed

## Evergreen x1
- [ ] Topic from gaps, cannibalization gate passed (or chose to update old post)
- [ ] Written FR 2000+ words, FAQ, 2+ internal links, checker passed

## Validate
- [ ] `npm run lint` / `npm run typecheck` / `npm run build` all pass
- [ ] New slugs appear in build output; no broken route

## Publish
- [ ] Stage EXPLICIT paths only (never -A)
- [ ] `git status` confirms only intended files
- [ ] Commit with clear message + Co-Authored-By
- [ ] Push `main` only if deploy decision confirmed
- [ ] Verify live URLs (if pushed); else note local-only

## Close
- [ ] CONTENT_LEDGER: one block per new article
- [ ] PUBLISH_LOG line
- [ ] SEO_AUDIT_LOG entry
- [ ] KEYWORD_MAP: used keywords + new gaps
- [ ] PROGRESS: last run / in progress / failed / fixed / next
- [ ] ERRORS_AND_BLOCKERS updated
- [ ] DAILY_REPORT.md written

## Stop if
- [ ] Build fails 3x  /  deploy fails  /  missing credential
- [ ] Weak news sources  /  merge conflict  /  deletion risk
- [ ] Legal/factual/sensitive uncertainty  /  10 iterations reached
