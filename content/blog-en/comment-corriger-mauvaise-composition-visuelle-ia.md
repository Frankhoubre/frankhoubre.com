---
title: "How to Fix a Bad Visual Composition"
date: "2026-05-01"
dateModified: "2026-06-10"
category: "tutoriels"
excerpt: "Horizon, lines of force, subject hierarchy, and frame breathing: fixing before regenerating endlessly."
---

A weak composition rarely survives the **reframe** or a **targeted regen**. Before blaming the model, check five classics: a vanishing horizon, a subject stuck in the center with no reason, parasitic lines that exit the frame, too many rival objects, and the absence of **breathing** (negative space).

The close framing guide: [how to frame an AI image like a cinema pro](/en/blog/comment-cadrer-image-ia-comme-pro-cinema). For depth: [why my AI render lacks depth](/en/blog/pourquoi-rendu-ia-manque-de-profondeur). When the geometry "holds" but the camera seems to lie, also check [how to choose the right camera angles in AI](/en/blog/comment-choisir-bons-angles-camera-ia).

## Step 1: horizon and verticality

Straighten it or deliberately own the tilt. An "almost straight" horizon kills the viewer's trust.

## Step 2: rule of thirds as a tool, not a religion

Place the eye or the narrative pivot on a third node, not because it is pretty, but because the **reading** gains from it.

See [how to use the rule of thirds in AI generation](/en/blog/comment-utiliser-regle-des-tiers-generation-ia).

![Workflow landmark: thirds grid + horizon.](/images/blog/comment-corriger-mauvaise-composition-visuelle-ia/workflow-1.webp)

## Step 3: cut a branch that flies off

An element that exits the frame with no intention pulls the eye off subject. Reframe or regen with "clean frame edges" if your engine understands.

## Step 4: one dominant idea

If two subjects fight, the viewer does not know where to start.

**Fix:** darken or simplify the intruder, or take it out of the prompt.

## Table: problem, quick tool

| Problem | Quick tool |
| --- | --- |
| small subject | reframe or regen |
| parasitic lines | reframe |
| background too cluttered | simplified prompt |
| dead center | thirds + depth |

## Core addendum

Composition is not only a matter of taste: it is the ordering of shapes according to perception principles that the design and cinema tradition has formalized. The entries on [visual composition](https://en.wikipedia.org/wiki/Composition_(visual_arts)) and the laws of [Gestalt](https://en.wikipedia.org/wiki/Gestalt_psychology) remind us that the eye looks for dominant figures, continuities, and rest zones. In AI, you can respect a grid while missing the hierarchy if two zones contrast too strongly. For a cinematic reading culture, the [BFI](https://www.bfi.org.uk/) stays a useful landmark: it invites you to think of the frame as part of a flow, not as an isolated thumbnail.

In practice, your core addendum consists in isolating **one dominant idea per image**, giving the viewer a **material proof** (shadow, reflection, texture of use) that supports this idea, and keeping an **oriented negative space**. Without this trio, you either correct with a scalpel at random, or you regenerate without knowing why.

## Troubleshooting addendum

When nothing "bites", start with the horizon and the edges: these are the least glamorous mistakes but the most lethal for the viewer's trust. Then, compare the same image as a thumbnail and full screen. If the hierarchy inverts between the two, your local contrast or your saturation sorts the planes badly. Before changing checkpoint, try a pass where you remove two elements from the prompt, then another where you only touch the light: a single layer corrected at a time.

If you oscillate between reframe and regen, write in black and white the **reason** for the choice, otherwise you will not be able to replicate the recipe on the next series. Finally, always archive A and B with a sentence of difference: your future self will thank you when a broadcaster asks again for "the previous version, but a bit warmer".

## Scenarios

**E-commerce scenario.** The product is readable but the scene looks like a studio render with no intention: add breathing on an empty third, a cast shadow consistent with a single source, and one fewer visual rival in the background. The center is not forbidden, but it must be won by the contrast hierarchy, not by default.

**Editorial AI portrait scenario.** The face is decent but the frame "floats": lock the eye line relative to the set's horizon, place a secondary element on the opposite third to balance without polluting, and lower the texture detail off subject. The correction is often geometric before being textural.

**Continuity-light scenario over 4 shots.** You correct each image alone, then the sequence breaks: impose a rules sheet (axis, density, grain, temperature) and run each correction through the filter "can the next shot exist after the same light". Otherwise you will fabricate four beauties, not a scene.

## Field deep dive: How to fix a bad visual composition

This chapter extends the angle "Horizon, lines of force, subject hierarchy, and frame breathing: fixing before regenerating endlessly." for the real subject behind `comment-corriger-mauvaise-composition-visuelle-ia`. The goal is not to stack adjectives, but to install a short **QA loop** you can reuse on every deliverable: capture, note, compare, decide, archive. Most creators waste time because they mix three variables in one session, then blame the model. When you separate light, composition, texture, intention, you get back an honest diagnosis and measurable progress.

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

Delivering two A/B versions with a sentence that names the difference avoids vague discussions; documenting at least the skeleton of the prompt is useful internal quality insurance; if the model changes, redo a test bench on a test brief before continuing a long series; manual retouching is not cheating as long as you own the chain; plan more validation time than raw generation in a quote; set resolution, color space, and headroom on the highlights before compression; check the terms of service and the rights on any reference integrated into the prompt.

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

For `comment-corriger-mauvaise-composition-visuelle-ia`, keep three lines in your notebook: intention in one sentence, lighting law in one sentence, material proof in one sentence. If one is missing, you are not ready to regenerate en masse: you are ready to diagnose. Long-term quality comes from that discipline, not from the latest model released on Tuesday.

## Series B extension: deliverables, risks and governance

**How to fix a bad visual composition**: the excerpt "Horizon, lines of force, subject hierarchy, and frame breathing: fixing before regenerating endlessly." often sets an implicit expectation: a stable, defensible, reproducible deliverable. The slug `comment-corriger-mauvaise-composition-visuelle-ia` serves as a guiding thread: each export must be linkable to an intention, a proof, a limit. This section adds a **governance + risks + deliverables** layer you can copy into your internal Notion or your project drive.

### Deliverables: what you really promise

A deliverable is not "an image": it is a **package** (master, social adaptations, light note, naming, date). For a series, set a convention: slug prefix, suffix `_v02_client`, an `exports_sociaux` folder separate from `masters`. If you deliver a video, add a line on the **target bitrate** and the **safety reframe** for stories. If you deliver AI shots, specify whether manual retouching is included or optional. These details avoid the discussions where everyone talks about a different object.

### Risks: contractual and technical blind spots

The risks are not theoretical: a broadcaster can ask for the provenance, a client can compare two differently compressed versions, a tool can change its pipeline overnight. Document the **service version** and the **date** in a text file in the folder. If you use external visual references, note whether they are authorized by your contract. If you work with faces, clarify whether you stay in **non-realistic** generations or whether you go through specific consents. For the `comment-corriger-mauvaise-composition-visuelle-ia` chain, the goal is simple: reduce the uncertainty when you reopen the project six months later.

### Governance: minimalist roles (even solo)

Even alone, you can wear three hats: **brief**, **execution**, **control**. The brief forbids touching the model until the intention is written. The execution forbids changing three variables at once. The control forbids validating without mobile. When you grow into a team, these hats become columns in a table: who validated, with what proof, at what time. Light governance beats theoretical governance: five mandatory fields are often enough.

### Export pipeline: zero surprise at upload

Before uploading, go through a short checklist: **metadata cleanup** if necessary, **color profile** consistent with the platform, **test on a cold screen** (low brightness). For long formats, check the **black chapters** and the **gray backgrounds** that reveal banding. For very textured visuals, a **light** even grain sometimes masks the artifacts better than aggressive sharpening. For `comment-corriger-mauvaise-composition-visuelle-ia`, think of the viewer who will first see the thumbnail, not the 4K version.

### Collaboration: how to avoid infinite loops

Infinite loops are born when no one decides. Set a rule: **two rounds of feedback** then a decision, except for a blocking bug. Each piece of feedback must name **one** criterion and propose **one** action. "I do not like it" is forbidden; "the subject is too low in the frame, raise it 8%" is allowed. If you are a service provider, write in black and white how many variants are included. If you are an internal creator, keep a decision log so you do not redo the same debates.

### Useful metrics (with no heavy spreadsheet)

You do not need complex analytics: count the **average time per iteration**, the **abandonment rate** (discarded images), and the **first-try validation rate**. If the first try is always rejected, your brief is probably vague. If you discard everything, your protocol mixes too many variables. For **How to fix a bad visual composition**, these metrics tell you whether you are progressing or moving sideways.

### Quality escalation: when to stop regenerating

Stop when you correct a detail that only appears at 400% zoom, except for giant print use. Stop when the geometry is good but only a micro-texture bothers you: go to targeted post. Stop when you change the model to flee a light problem: you reset all the rest. The slug `comment-corriger-mauvaise-composition-visuelle-ia` must stay a **mastered project**, not a spiral.

### Archiving: what a future you will thank you for

Archive: main prompts (even partial), **two** annotated A/B captures, the **list of tools** and versions, and a sentence "why we decided this way". If you deliver to a client, a clean zip with a short README beats ten badly named files. For the angle "Horizon, lines of force, subject hierarchy, and frame breathing: fixing before regenerating endlessly.", the archive proves you followed a process, not just a momentary intuition.

### Test bench: comparing without going wrong

When you compare two outputs, align them: same duration, same test framing, same screen. If you compare two different models, note that you are measuring **two chains**, not two settings of the same chain. For videos, sync on a fixed shot before judging the movement. For images, compare first in **full frame**, then in **detail** on a problem zone agreed in advance.

### "Ready to deliver" checklist

- Intention readable in three seconds on mobile.
- Light consistent with the action and the set.
- No useless "burned" zone on the main subject.
- Stable naming and clear version.
- Light note or delivery email that summarizes the known limits.

### Series B summary

For **How to fix a bad visual composition** and the scope `comment-corriger-mauvaise-composition-visuelle-ia`, keep in mind: deliverable = package, risk = written trace, governance = roles and dated decisions. The excerpt "Horizon, lines of force, subject hierarchy, and frame breathing: fixing before regenerating endlessly." becomes actionable when you link each sentence of the brief to a visual proof or an owned limit. This is not pessimism: it is what lets you deliver fast **with no** regret. A short email exchange on the scope and the number of back-and-forths avoids many tensions on micro-jobs; delivering the prompt depends on the contract, otherwise provide an equivalent functional description; anticipate the platform compression with a "worst case" export; for late out-of-scope feedback, propose a priced addendum rather than a vague negotiation.

![Second landmark: before/after reframe.](/images/blog/comment-corriger-mauvaise-composition-visuelle-ia/workflow-2.webp)

## FAQ

### Do I have to regenerate everything when the composition is bad

Often no. A light recentering, a reframe that respects the final resolution, or a grade that darkens an intruder can be enough if the subject's geometry is already credible and if the edges of the frame do not tell a different story. Regenerate when the structural perspective is wrong, when the relationship between the planes is inconsistent, or when the subject is drowned in a chaos you cannot remove without breaking the material. The simple rule, first correct what changes the reading in two seconds, then decide whether the detail deserves a new model pass. Documenting why you chose reframe rather than regen will save you time on the complete series, otherwise you will repeat the same mistakes with a different seed.

### How do I correct a multi-shot scene without losing consistency

You treat the composition as a chain: same edge rules, same axis logic, same grain density, same average temperature across the consecutive shots. Start with [how to build a cinematic scene shot by shot](/en/blog/comment-construire-scene-cinematique-plan-par-plan) to lay a stable geography, then apply the fixes shot by shot while checking the next cut before validating. If you correct shot 3 without looking at shot 4, you fabricate beautiful incompatible images. Keep a "state of truth" sheet with the reference horizon and the subject's scale; it is dull on paper, but it avoids the discreet jumps that look "fake" in the edit.

### Can the composition be good if the light is bad

Rarely, because our brain reads the scene in layers: a contradictory light can betray the same geometry that is yet correct on a grid. Before tackling the thirds and the narrative emptiness, go through [how to fix bad lighting in AI](/en/blog/comment-corriger-mauvais-lighting-ia) if the shadows and the reflections do not fit a plausible source. Once the light is simplified, the composition becomes readable again without you needing to move the subject. Conversely, a beautiful light will not save a floating horizon or two equal focal points: treat the geometry first if the eye still hesitates after a minute of observation.

### How do I reduce the "AI image" effect without breaking everything

The "generated" effect often comes from a homogeneity of sharpness, a generalized HDR contrast, and an overly perfect decoration. Read [how to avoid the "generated image" effect](/en/blog/comment-eviter-effet-image-generee-ia) for a gentle checklist: homogeneous grain, motivated micro imperfections, less "showroom" light. These choices support the composition because they reintroduce a natural hierarchy between foreground, subject, and background. Do not confuse stylization and correction: you can stay very aesthetic while making the scene more physically credible.

### Do camera angles matter as much as the grid

Yes, because they change the psychological relationship between the viewer and the subject even before the thirds organize the space. An inconsistent shooting height between two dialogue shots can invalidate a theoretically clean composition. Follow [how to choose the right camera angles in AI](/en/blog/comment-choisir-bons-angles-camera-ia) to decide when to stay neutral and when to shift toward a motivated extreme angle. If you only correct the lateral placement without the camera height, you can keep a collage or commercial-clip impression, even with perfect thirds.

### Why does my image seem soft or blurry despite a good structure

The problem can be technical or aesthetic: insufficient resolution for the planned reframe, detail attenuated by aggressive denoising, or a focal length too soft in the prompt. Read [why my AI images are blurry and how to fix it](/en/blog/pourquoi-images-ia-floues-comment-corriger) to separate real sharpness from local contrasts. Sometimes the composition is good but the subject lacks a focus plane: a slight directional contrast or a sharper shadow on the narrative pivot is enough, with no global sharpening that screams digital. Always test on the final display scale: the perceived blur changes with the compression.

### How do I make an AI scene more credible without overloading the prompt

Credibility is consistency between material, action and consequence. Check [how to make an AI scene more credible](/en/blog/comment-rendre-scene-ia-plus-credible) to align plausible details with what the viewer can verify in one second. For the composition, limit the simultaneous visual miracles: a scene that promises everything at once looks like a showroom, not an inhabited place. Choose one strong proof per shot, and let the other zones breathe. A sober composition that holds is better than three brilliant ideas that fight.

### Which internal articles should I cross-reference in priority

In addition to the links above, link this guide to [how to frame an AI image like a cinema pro](/en/blog/comment-cadrer-image-ia-comme-pro-cinema) and to [how to use the rule of thirds in AI generation](/en/blog/comment-utiliser-regle-des-tiers-generation-ia) so that composition correction, intentional framing, and grid become the same team vocabulary. You will save time when the brief, the prompt, and the client critique use the same problem names.

{/* PUBLICATION DATE: 2026-05-01 */}
