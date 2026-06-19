# STYLE_GUIDE.md — How to write like Frank Houbre

This is the voice contract for every article the loop produces. The checker
rejects drafts that break it. Read it before writing, check against it after.

## Who is writing

Frank Houbre. Senior creative director, AI filmmaker, trainer. He teaches
beginners how to use AI to make cinematic video, image, sound and music for
ads, series and films. He has made the mistakes himself and writes from the
set, not from a marketing deck. He openly rejects plastic, generic,
"Midjourney-look" AI output.

The reader must feel a real person who actually builds things wrote this.

## The voice in one breath

Simple. Direct. Curious. Useful. Opinionated when it earns it. Concrete.
Human. Fluid. A little cinematic when it helps. Never robotic, never a content
farm, never fake-excited.

## Who writes what (locked by Frank, 2026-06-17)

ALL writing is done by Claude directly, in-session. No prose is ever generated
by Gemini or any other model. The `GEMINI_API_KEY` is used ONLY to generate
images. Everything runs locally on Frank's machine.

## Language

- FR articles in `content/blog/` are the primary site, written in French.
- EN articles in `content/blog-en/` mirror FR slugs, written in English.
- Match the language fully. No franglais in FR beyond accepted tool names
  (ComfyUI, Flux, prompt, workflow). Keep tool names as-is.

## Hard rules (the checker fails the draft on these)

1. **No em dash. Ever.** Not `—`, not `–`. Use a comma, a colon, or a full
   stop. This is the single most-violated rule on the site; the audit catches
   it. (`node .loop_scripts/seo_audit.mjs` flags em dashes as errors.)
2. **No invented facts, numbers, dates, benchmarks, prices or quotes.** If you
   did not verify it from a real source, do not state it as fact. Mark opinion
   as opinion.
3. **No banned filler phrases.** Never: "game changer", "seamless",
   "revolutionary", "leverage", "delve", "landscape", "robust", "unlock the
   power of", "in today's fast paced world", "as an AI", "in conclusion",
   "it's important to note", "firstly/moreover/furthermore" as transitions.
4. **No fake CTA spam, no keyword stuffing, no empty SEO filler sections.**
   The site already carries a templated "gouvernance + risques + livrables"
   boilerplate block in some old articles. Never reproduce that pattern.
5. **No copied paragraphs from sources.** News is source material, not a draft
   to rewrite. Always add original analysis.

## Voice mechanics

- **Burstiness.** Mix ultra-short punchy lines with longer rich paragraphs.
- **Real transitions.** Instead of "Moreover": "Here's the thing.", "But this
  is where it breaks.", "Watch what happens when you do this.", "Let's be
  real." (FR: "Le vrai problème, c'est…", "Et c'est là que ça casse.",
  "Concrètement…", "Soyons honnêtes.")
- **From the trenches.** Use concrete examples, before/after, specific settings
  (a slider value, a node, a prompt tweak), small personal anecdotes.
- **Bold** only for UI buttons, exact settings, and core concepts. *Italics*
  for light emphasis. Blockquotes for real citations.
- Pro-tip device (FR): `> 💡 **Le cut de Frank :**` for insider tips.

## Required article anatomy

- Strong, specific title (a real search intent, not a slogan).
- A first paragraph that opens on a concrete beginner frustration. No generic
  intro, no "in this article we will".
- Clear H1 (FR body leads with `# `), then H2/H3 hierarchy. Aim 5+ H2.
- Short readable paragraphs, helpful examples, at least one comparison table
  when it fits.
- 2+ internal links to relevant existing pages, varied natural anchor text.
- A soft CTA when relevant (see ScreenWeaver positioning below).
- FAQ (PAA) section, 6-8 questions, each answer a full 80-120 word paragraph.
- Frontmatter: `title`, `date`, `category`, `excerpt`, `thumbnail`. Optional
  `dateModified`.
- Meta title <= 60 chars, meta description (excerpt) 120-160 chars, clean slug.
- **Slug convention: NO date prefix.** Use `kling-3-turbo-previsualisation-video-ia`,
  NOT `2026-06-19-kling-3-turbo-...`. The whole site uses keyword-only slugs; the
  date lives in frontmatter. (Auto-run on 2026-06-19 used date prefixes by
  mistake; do not repeat. Renaming the 3 live ones later needs redirects, so
  leave them; just stop doing it.)
- Depth target: 2000+ words for evergreen, 900-1500 acceptable for fast news.

## Categories (must match src/lib/site.ts)

`actualite` (news), `tutoriels`, `guides`, `comparatifs`, `analyses`,
`business`, `postproduction`, `notes`. News articles use **actualite**.

## Images

- Exactly 1 hero + up to 2 contextual images for evergreen; news can ship with
  1 hero. Store under `public/images/blog/<slug>/` as `hero.webp`,
  `workflow-1.webp`, `workflow-2.webp`. Set `thumbnail` to the hero path.
- Use only local `/images/blog/...` URLs in published markdown.
- Every image needs keyword-aware, descriptive alt text (8+ chars).
- The internal `[IMAGE PROMPT: ...]` template must never appear in the
  published file. If an image is not generated yet, leave an image brief in the
  loop notes, not in the article body, and do not reference a missing file.

## YouTube / video

- FR articles: the pipeline auto-embeds a Business Dynamite video. Never paste
  the literal `[🎥 WATCH: ...]` placeholder or the bare channel URL as text.
- EN articles: no YouTube embed at all.

## ScreenWeaver positioning (soft CTA only)

ScreenWeaver is not a magic button that makes a film. It is the workspace
between writing and production: it helps creators see the film while they
write it, connecting screenplay, structure, storyboard and production
workflow. Mention it naturally, as an example or a bridge from script to
storyboard, never as an ad in every article. Value first.
