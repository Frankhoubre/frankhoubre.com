---
title: "How to Fix Bad Lighting in AI"
date: "2026-04-30"
dateModified: "2026-06-10"
category: "tutoriels"
excerpt: "Source motivation, key fill rim hierarchy, and reprompt vs post: when to save it in generation and when to finish in grading."
---

Bad AI lighting is not only "too dark". It is often **directionless**: everything is lit the same, the shadows do not fall where the geometry requires, or three suns fight in the frame. Correcting it means first **deciding which source dominates**, then aligning the prompt, a targeted regeneration, or post-processing.

The lighting vocabulary bible: [how to describe light like a director of photography in a prompt](/en/blog/comment-decrire-lumiere-directeur-photo-prompt). For natural interiors: [how to create natural light in an AI image](/en/blog/comment-creer-lumieres-naturelles-image-ia). To move to the sequence level when several shots must share the same law: [how to create consistent scenes with several shots in AI](/en/blog/comment-creer-scenes-coherentes-plusieurs-plans-ia).

To frame the classic key / fill / backlight vocabulary with no gratuitous jargon, a stable entry like [lighting in photography](https://en.wikipedia.org/wiki/Lighting) helps you name what you observe in your histogram.

## Step 1: name the key in one sentence

"Left side window, hard, late afternoon" beats ten poetic adjectives. The model needs an **axis** and a **hardness**.

## Step 2: cut the phantom sources

If the prompt mentions neon + sun + stage spotlight + practical lamp with no hierarchy, you get muddy gray.

**Fix:** one key, one fill, an optional rim. Nothing more at the start.

![Workflow landmark: key fill rim diagram.](/images/blog/comment-corriger-mauvais-lighting-ia/workflow-1.webp)

## Step 3: partial regen or light img2img

When the composition is good but the light lies, a low **img2img** with a reinforced light prompt can save it faster than a new wall of text.

### Diagnose before burning GPU

Four quick questions before img2img or a massive reprompt. First: does the geometry and the perspective still hold if you close your eyes to the values? If not, correct the framing or the depth before the light. Second: how many source directions does your prompt implicitly imply? Rewrite until a readable dominant key. Third: do your reflections announce a source that does not exist in the geometry? Cut the decorative mentions that invent neons or spots with no visible support. Fourth: are you trying to save an image whose subject is already burned or crushed? In that case, regenerate on a less contrasted base rather than pulling an extreme curve in post.

Keep an identical "lighting law" sentence in all the prompts of the same short scene: same key angle, same fill interpretation, same decision on the rim. Multi-shot consistency is often a problem of partial copy-paste, not of "bad model".

## Step 4: post as an honest last resort

Local tonal curve, mask on the skin, mask on the background: acceptable if you own the "retouched photo" chain.

For the global contrast without burning the mids, [why your AI images lack contrast and how to fix it](/en/blog/pourquoi-images-ia-manquent-contraste-comment-corriger).

## Table: problem, prompt lever, post lever

| Problem | Prompt | Post |
| --- | --- | --- |
| globally flat | direction + key/fill ratio | light S-curve |
| washed-out skin | motivate the fill | skin mask |
| burned background | expose for the subject | curtain on background |
| multi-shot inconsistency | same light brief | grade by sequence |

## Field deep dive: How to fix bad lighting in AI

This chapter extends the angle "Source motivation, key fill rim hierarchy, and reprompt vs post: when to save it in generation and when to finish in grading." for the real subject behind `comment-corriger-mauvais-lighting-ia`. The goal is not to stack adjectives, but to install a short **QA loop** you can reuse on every deliverable: capture, note, compare, decide, archive. Most creators waste time because they mix three variables in one session, then blame the model. When you separate light, composition, texture, intention, you get back an honest diagnosis and measurable progress.

### "One variable" protocol (30 minutes)

Minute 0 to 5: write the sentence "what the viewer must believe with no caption". Minute 5 to 12: list three possible visual proofs (cast shadow, prop in use, consistent reflection). Minute 12 to 22: generate two images that differ by only **one** of those proofs. Minute 22 to 28: test on a mobile thumbnail and full screen. Minute 28 to 30: choose A or B and name the winning criterion in the project file. This protocol avoids the drift where each regen changes everything except the initial problem.

### Scenarios A, B, C with pivots

**Scenario A.** Render too clean, too showroom. Pivot: add a localized trace of use and a more marked side light, without touching the subject if the geometry is good. **Scenario B.** Cluttered image with no hierarchy. Pivot: remove two objects from the prompt, recenter the contrast on the subject, or tighten the framing. **Scenario C.** Spectacular but cold image. Pivot: lower the global saturation slightly, add a fine, even grain in post, then regenerate only if the geometry or the perspective still lies.

### Trench warfare: ten frequent traps

1. **Fixing everything at once.** You no longer know what saved the image.
2. **Comparing only full screen.** Mobile often exposes fake luxury.
3. **Ignoring rhythm upstream of the video.** Even upstream, think about cutting and the breathing of shots.
4. **Copy-pasting prompts with no local brief.** The words must fit your real subject.
5. **Aggressive global sharpening.** Garish edges read as "digital".
6. **Too many contradictory adjectives.** One dominant intention is enough at the start.
7. **No archive text file.** You lose the seed, the version, and the reason for the choice.
8. **Validating while tired.** Fatigue makes "beautiful" out of what is only familiar.
9. **Stacking models on the same day.** You compare different chains, not settings.
10. **Delivering with no A/B.** The client or your future self will not know what was acceptable.

### Quick decision table

| If you observe | Priority action |
| --- | --- |
| inconsistent light | simplify the sources |
| subject drowned | framing or contrast hierarchy |
| plastic texture | fine grain or less HDR |
| impossible hands | off-frame or trivial action |
| catalog set | micro wear and a functional prop |
| empty sky | cloud volume or motivated haze |
| impossible reflections | reduce the contradictory sources |

### Client or commissioner workshop

Even for yourself, write a mini brief: audience, channel, expected reading time, prohibitions (violence, brands, real faces). For a team, add a "proof of compliance" column: capture of the service's terms, model version, export date. That column saves you when a broadcaster asks where the image comes from.

### Multi-screen control station

Minimum chain: main monitor, standard laptop, smartphone. If you only have two screens, send a test export to your phone through a clean channel (not a messenger that recompresses endlessly). Note the perceived difference on skin, edges, and micro-contrasts. Many "AI" images become so mostly after a second involuntary compression.

### Useful internal links

Cross-reference with [why your prompt does not work, and how to fix it](/en/blog/pourquoi-ton-prompt-ne-marche-pas-comment-corriger), [the prompt mistakes that make an AI image look artificial](/en/blog/erreurs-prompt-qui-rendent-image-ia-artificielle), and [how to control visual style in an AI generation](/en/blog/comment-controler-style-visuel-generation-ia). If your subject touches video, also link to [how to structure an AI video like a real film](/en/blog/comment-structurer-video-ia-comme-vrai-film) and to [how to improve motion realism in AI video](/en/blog/comment-ameliorer-realisme-mouvements-video-ia).

### End-of-session log (template)

```
Date:
Slug / file:
Hypothesis of the day:
Variable tested:
Result A vs B:
Decision:
Next test:
```

### Operational summary

For `comment-corriger-mauvais-lighting-ia`, keep three lines in your notebook: intention in one sentence, lighting law in one sentence, material proof in one sentence. If one is missing, you are not ready to regenerate en masse: you are ready to diagnose. Long-term quality comes from that discipline, not from the latest model released on Tuesday.

## Series B extension: deliverables, risks and governance

**How to fix bad lighting in AI** takes the excerpt "Source motivation, key fill rim hierarchy, and reprompt vs post: when to save it in generation and when to finish in grading" and often sets an implicit expectation: a stable, defensible, reproducible deliverable. The slug `comment-corriger-mauvais-lighting-ia` serves as a guiding thread: each export must be linkable to an intention, a proof, a limit. This section adds a **governance + risks + deliverables** layer you can copy into your internal Notion or your project drive.

### Deliverables: what you really promise

A deliverable is not "an image": it is a **package** (master, social adaptations, light note, naming, date). For a series, set a convention: slug prefix, suffix `_v02_client`, an `exports_sociaux` folder separate from `masters`. If you deliver a video, add a line on the **target bitrate** and the **safety reframe** for stories. If you deliver AI shots, specify whether manual retouching is included or optional. These details avoid the discussions where everyone talks about a different object.

### Risks: contractual and technical blind spots

The risks are not theoretical: a broadcaster can ask for the provenance, a client can compare two differently compressed versions, a tool can change its pipeline overnight. Document the **service version** and the **date** in a text file in the folder. If you use external visual references, note whether they are authorized by your contract. If you work with faces, clarify whether you stay in **non-realistic** generations or whether you go through specific consents. For the `comment-corriger-mauvais-lighting-ia` chain, the goal is simple: reduce the uncertainty when you reopen the project six months later.

### Governance: minimalist roles (even solo)

Even alone, you can wear three hats: **brief**, **execution**, **control**. The brief forbids touching the model until the intention is written. The execution forbids changing three variables at once. The control forbids validating without mobile. When you grow into a team, these hats become columns in a table: who validated, with what proof, at what time. Light governance beats theoretical governance: five mandatory fields are often enough.

### Export pipeline: zero surprise at upload

Before uploading, go through a short checklist: **metadata cleanup** if necessary, **color profile** consistent with the platform, **test on a cold screen** (low brightness). For long formats, check the **black chapters** and the **gray backgrounds** that reveal banding. For very textured visuals, a **light** even grain sometimes masks the artifacts better than aggressive sharpening. For `comment-corriger-mauvais-lighting-ia`, think of the viewer who will first see the thumbnail, not the 4K version.

### Collaboration: how to avoid infinite loops

Infinite loops are born when no one decides. Set a rule: **two rounds of feedback** then a decision, except for a blocking bug. Each piece of feedback must name **one** criterion and propose **one** action. "I do not like it" is forbidden; "the subject is too low in the frame, raise it 8%" is allowed. If you are a service provider, write in black and white how many variants are included. If you are an internal creator, keep a decision log so you do not redo the same debates.

### Useful metrics (with no heavy spreadsheet)

You do not need complex analytics: count the **average time per iteration**, the **abandonment rate** (discarded images), and the **first-try validation rate**. If the first try is always rejected, your brief is probably vague. If you discard everything, your protocol mixes too many variables. For **How to fix bad lighting in AI**, these metrics tell you whether you are progressing or moving sideways.

### Quality escalation: when to stop regenerating

Stop when you correct a detail that only appears at 400% zoom, except for giant print use. Stop when the geometry is good but only a micro-texture bothers you: go to targeted post. Stop when you change the model to flee a light problem: you reset all the rest. The slug `comment-corriger-mauvais-lighting-ia` must stay a **mastered project**, not a spiral.

### Archiving: what a future you will thank you for

Archive: main prompts (even partial), **two** annotated A/B captures, the **list of tools** and versions, and a sentence "why we decided this way". If you deliver to a client, a clean zip with a short README beats ten badly named files. For the angle "Source motivation, key fill rim hierarchy, and reprompt vs post: when to save it in generation and when to finish in grading.", the archive proves you followed a process, not just a momentary intuition.

### Test bench: comparing without going wrong

When you compare two outputs, align them: same duration, same test framing, same screen. If you compare two different models, note that you are measuring **two chains**, not two settings of the same chain. For videos, sync on a fixed shot before judging the movement. For images, compare first in **full frame**, then in **detail** on a problem zone agreed in advance.

### "Ready to deliver" checklist

- Intention readable in three seconds on mobile.
- Light consistent with the action and the set.
- No useless "burned" zone on the main subject.
- Stable naming and clear version.
- Light note or delivery email that summarizes the known limits.

### Series B summary

For **How to fix bad lighting in AI** and the scope `comment-corriger-mauvais-lighting-ia`, keep in mind: deliverable = package, risk = written trace, governance = roles and dated decisions. The excerpt "Source motivation, key fill rim hierarchy, and reprompt vs post: when to save it in generation and when to finish in grading." becomes actionable when you link each sentence of the brief to a visual proof or an owned limit. This is not pessimism: it is what lets you deliver fast **with no** regret.

![Second landmark: before/after local mask.](/images/blog/comment-corriger-mauvais-lighting-ia/workflow-2.webp)

## FAQ

### Should I redo everything when the light is bad but the pose is good

Not automatically. If the geometry holds, start with img2img or targeted inpainting with a prompt that only talks about the direction and the hardness of the key, then adjust the fill and rim in a second pass. You redo a complete prompt only if the cast shadows contradict the topology of the set or if several phantom sources have impregnated the mids too much. The good criterion: can you describe a single dominant source that would render roughly the same silhouette if you closed your eyes to the texture.

### Is the word HDR in the prompt a good idea

Often no at the start: "HDR" becomes a catch-all word that pushes halos and local contrasts inconsistent with your intention. Prefer to describe what you want to see in the highlights: a window that breathes with no explosion, skin that keeps a soft transition toward the shoulder, reflections on metal that announce a precise source. If you want punch, do it afterward with a local curve or a sequence grade rather than with three contradictory superlatives in the prompt.

### How do I save a dark mood without losing the reading of the face

Separate three value planes: a background that can fall, shoulders that carry a bit of subtle bounce, a face that keeps a small readable transition zone toward the cheek shadow. Reinject this intention into the prompt as "cold side key, very light fill only to keep the reading of the gaze". For a complete mood, link to [how to create a dark, cinematic mood with AI](/en/blog/comment-creer-ambiance-sombre-cinematique-avec-ia).

### Is the same correction enough for AI video

The lighting law must stay stable between the frames or change for an owned narrative reason. If you correct frame by frame with no common bible, you get direction jumps that read as "collage". Read [why my AI videos lack realism](/en/blog/pourquoi-videos-ia-manquent-de-realisme) before multiplying the sequential color transfers.

### Should I simulate an anamorphic lens to better "cinema" my light

Not mandatory: an anamorphic lens changes the reading of the flares and sometimes the way you expose the highlights. If you add optical artifacts with no motivation, you shift the problem toward fake luxury. If you want this language for a consistent series, start from [how to simulate an anamorphic lens in AI generation](/en/blog/comment-simuler-objectif-anamorphique-generation-ia) then come back to your key/fill law.

### What do I do if the composition is weak in addition to the light

Treat the main subject and the eye line before the flare details. A frame that does not breathe will look "incorrect" even with a technically plausible light. For the lines of force and the breathing of the frame, continue with [how to fix a bad visual composition](/en/blog/comment-corriger-mauvaise-composition-visuelle-ia).

### How do I keep my light corrections from revealing the AI effect

Keep natural tonal transitions on the skin, avoid masks that are too hard and create halos, and do not explode the micro-contrasts across the whole frame. For a global anti-plastic checklist, read [how to avoid the "generated image" effect](/en/blog/comment-eviter-effet-image-generee-ia).

### Which read after this article to solidify the complete workflow

Go back to [how to describe light like a director of photography in a prompt](/en/blog/comment-decrire-lumiere-directeur-photo-prompt) to enrich your vocabulary, then [how to go from an amateur render to a cinema render](/en/blog/comment-passer-rendu-amateur-a-cinema-ia) to lock the grain, rhythm and rejection downstream.
