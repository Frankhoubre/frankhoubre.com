<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes: APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Editorial rules (mandatory for all content work)

Any article creation, rewrite, page update or SEO optimization MUST follow the
permanent editorial charter in `GUIDE_EDITORIAL.md` (French, canonical). The
technical voice contract enforced by the loop checker is
`.loop_memory/STYLE_GUIDE.md` (run `node .loop_scripts/seo_audit.mjs`). Hard
rule above all: never use em dashes; write human, not like an AI.

# Technical SEO rules (mandatory for routes, metadata, listings)

Site-level SEO invariants live in `SEO-GUIDELINES.md` (canonical: host,
hreflang, canonicals, 301 map for legacy WordPress URLs, 410 spam handlers,
payload budgets, JSON-LD FR/EN parity, llms.txt, internal linking). Read it
BEFORE touching any route, metadata helper, listing page, or before writing
articles with internal links. Its §8 checklist gives the runnable
verification commands; run them after such changes.
