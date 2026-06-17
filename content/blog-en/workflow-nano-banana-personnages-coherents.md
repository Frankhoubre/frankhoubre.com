---
title: "Nano Banana workflow to create consistent characters"
date: "2026-05-15"
category: "tutoriels"
excerpt: "Identity sheet, frozen prompts, visual QA and disciplined iterations: the Nano Banana pipeline for consistent characters over a whole series of images."
thumbnail: "/images/blog/workflow-nano-banana-personnages-coherents/hero.webp"
---

You generate a magnificent hero. Next shot: another face, another nose, another coat. You retouch by feeling. Three hours later, your "series" looks like four different castings. *It is not that Nano Banana "does not know".* It is that you do not yet have a **Nano Banana workflow for consistent characters**: sheet, prompt skeleton, log, and systematic rejection of the drifts.

Nano Banana (and its Pro-type variants) is often cited for fast iterations. Speed with no frame kills the consistency in ten clicks. This guide gives you the studio method I apply on campaigns, storyboards, and character bibles even before moving to the video.

![Three consistent portraits of the same character hung on the wall, soft studio light](/images/blog/workflow-nano-banana-personnages-coherents/hero.webp)

## Why consistency is not a magic button

An image model reads **tokens**, not your narrative intention. If you write "trench" then "overcoat" then "long coat", you have three costumes for the same statistical brain. Consistency is a **chain**: frozen description, controlled variations, seed archive, and visual QA before adding a shot to the bible.

**Nano Banana** can speed up the tries. **Your workflow** decides what enters the official bible. With no bible, you collect pretty errors.

I have seen teams publish a campaign where the "same" protagonist had three jaw morphologies between the 16:9 and 9:16 formats. The client did not say "the AI is bad". He said "your casting is inconsistent". It is always a workflow failure, not a model one.

For the generic multi-image theory, cross [tutorial: consistent characters over several images](/en/blog/personnages-coherents-plusieurs-images-ia). Here, we specialize the pipeline for **Nano Banana** and the speed traps.

The alternatives like [Dzine for consistent characters](/en/blog/dzine-ia) can automate part of the chain. Keep the sheet and the QA: the automation with no systematic rejection recreates the multiple casting faster.

> 💡 **Frank's Cut:** forbid yourself to validate a shot "because it is beautiful". Validate only if **five anatomical points + one accessory** match the sheet. Otherwise you build a series on sand.

## Phase 0: character sheet (ten lines max, non-poetic)

Before the first long prompt:

1. Apparent age (e.g.: 34 years old).
2. Silhouette (slim, broad shoulders).
3. Hair (color, length, tied or not).
4. Eyes (color, shape if relevant).
5. Skin (tone, visible grain yes/no).
6. **Locked** costume (beige trench horn buttons, no synonyms).
7. Identity accessory (left watch, right eyebrow scar).
8. Dominant emotion of the series (tired, determined).
9. Bans (no glasses if not in the bible).
10. Internal reference (`HEROINE_A_v01`).

One emotional sentence is enough. No literary paragraph in the technical sheet.

For character prompts in depth, [how to write a prompt for a realistic and constant character](/en/blog/comment-ecrire-prompt-personnage-realiste-constant) completes the writing layer.

## Phase 1: the frozen prompt skeleton

Copy-paste structure:

```text
=== IDENTITY (never modify) ===
woman 34, slim build, shoulder-length dark brown hair,
light olive skin with visible pores, beige trench coat horn buttons,
small scar above right eyebrow, silver watch left wrist

=== SCENE (vary) ===
three-quarter view, overcast street, soft diffused light

=== CONSTRAINTS ===
50mm lens, hands visible but not extreme close-up,
natural skin texture, no plastic beauty, no text on clothes
```

**Golden rule**: the identity block is **sacred**. You change scene and angle, not the synonyms of the costume.

## Phase 2: disciplined Nano Banana session

The speed of Nano Banana is a trap. Impose a **quota**: 8 variations max per new angle, then a QA pause.

**Before opening the tool**, read the sheet aloud. If you cannot recite the costume and the accessory without hesitating, you are not ready to generate. It seems childish. It avoids evenings.

**During the session**, one single variable at a time: angle OR set OR light expression. Mixing "now rain and smile and profile" on variation 5 is going back to the roulette.

**After the session**, export only the VALIDATED ones into a `official_bible/` folder. Forbid yourself to send the client images from the `tries/` folder. The temptation is real when an "almost" image is prettier than an "exact" image.

| Step | Action | Indicative duration |
|-------|--------|------------------|
| Front portrait | Validate identity | 30 min |
| Three-quarter | Same identity | 20 min |
| Profile | Same identity | 20 min |
| Cowboy shot | Set context | 25 min |
| Cross QA | Compare 5 points | 15 min |

**Log** (`log_HEROINE_A.txt`):

```text
2026-04-14 front portrait seed 88421 VALIDATED v03
2026-04-14 three-quarter seed 88421 green coat drift REJECTED
```

If the tool exposes a seed, note it. If it jumps, start again from the validated image in light **img2img** (10 to 25% strength depending on UI) rather than regenerating from scratch.

![Three angles of the same character on a reference wall, costume and face consistency](/images/blog/workflow-nano-banana-personnages-coherents/workflow-1.webp)

## Phase 3: visual QA (five points + accessory)

On each candidate image, check:

1. **Interocular distance** (eye/nose ratio).
2. **Nose shape** (bridge, tip).
3. **Jaw line**.
4. **Hair color** (no reflections out of the bible).
5. **Costume** (cut, color, buttons).
6. **Accessory** (watch, scar).

A single no = **rejection**, not "we keep it for the ambiance". The ambiance with another face destroys the series.

To avoid distorted faces upstream, [how to avoid distorted faces in AI generation](/en/blog/comment-eviter-visages-deformes-generation-ia) lists useful safeguards even outside Nano Banana.

## Phase 4: angles, hands, and sets

Consistency is often played on the **angle sequence**, not on the magic of a single perfect prompt. The recommended order is not trivial: front first (morphological contract), three-quarter (costume test under oblique light), profile (nose and jaw test), cowboy (silhouette and leg/torso proportion test). Skipping the front and starting with a cowboy shot in full sun is inviting the model to invent a face that "holds" from afar but collapses in close-up.

**Angles**: once the front portrait is validated, chain three-quarter then profile **without touching the identity**. Change only the scene block.

**Hands**: cowboy shots before hand close-ups. If the fingers fuse, recrop wider, do not "repair" ten times in close-up.

**Sets**: one complex set per session. Mixing street + interior + beach the same day dilutes your QA attention.

> 💡 **Frank's Cut:** print (or display full screen) your **validated portrait** next to each new generation. The human brain detects the drifts faster than the tool's sidebar.

## Phase 5: deliverable bible and video step

Export a **bible PDF** or folder:

- 4 to 6 validated images (front, 3/4, profile, cowboy).
- Identity text sheet.
- Complete copyable prompts.
- List of seeds and tool versions.

When you move to Seedance or Kling, this bible becomes your pilots. The video workflow inherits the image consistency. With no bible, the video **amplifies** the chaos.

For photorealistic images with no plastic, [generate photorealistic AI images with no plastic effect](/en/blog/comment-generer-images-ia-photorealistes-sans-effet-plastique) avoids sabotaging the bible from the base.

![Creator annotating a character sheet and dress codes on a desk, warm lamp](/images/blog/workflow-nano-banana-personnages-coherents/workflow-2.webp)

## Table: Nano Banana mistakes vs fix

| Symptom | Frequent cause | Workflow fix |
|----------|-----------------|--------------|
| "Almost" the same face | Costume synonyms | Lock the identity tokens |
| Age that varies | Contradictory adjectives | One age line in the sheet |
| Jewelry that appears | Scene prompt too rich | Negative + bans sheet |
| Plastic skin | "beautiful flawless" | pores, grain, no beauty |
| Set that steals the light | Set HDR | Simplify the scene |
| 40 variations with no sorting | Nano Banana speed | Quota 8 + QA |

## Three real scenarios

### Scenario A: ad campaign (same model, 4 visuals)

**Day 1**: front portrait + three-quarter validated, bible exported.

**Day 2**: four sets (office, street, café, staircase) with the **same identity**, QA each time.

**Deliverable**: `HEROINE_A_campaign/` folder with only the VALIDATED ones.

### Scenario B: fiction storyboard (12 boxes)

First generate **3 references** (front, 3/4, silhouette). For each storyboard box, img2img from the reference closest to the angle, not text alone. See [complete professional storyboard with AI](/en/blog/generer-storyboard-professionnel-complet-ia) for the project scale.

### Scenario C: resumption after a week

Open `log_HEROINE_A.txt`, take back the seed + identity prompt, **do not rewrite from memory**. The memory changes the adjectives. The log does not.

## Nano Banana vs Flux for the bible

Nano Banana: iteration speed, drift risk if you skip the QA. Flux: often heavier per image, sometimes better on fine textures for video pilots. Many teams do the **identity bible** on disciplined Nano Banana, then a Flux "hero" pilot for the video. The comparison [Flux vs SDXL](/en/blog/flux-vs-sdxl-quelle-ia-choisir-images-realistes) helps decide according to your deliverable.

### Prompt variants to avoid (synonyms that kill)

| You think you specify | The model hears | Fix |
|-------------------|------------------|-----|
| trench / coat / overcoat | three jackets | a single token "beige trench coat horn buttons" |
| pretty / beautiful / stunning | plastic beauty | "visible skin pores, natural texture" |
| young woman / girl / female | unstable age | "woman 34" once |
| dark hair / brunette / brown hair | variable tone | "dark brown hair shoulder-length" |

### "Recalibration" session after drift

If you got carried away and the last ten images drift: **stop**. Open the oldest VALIDATED portrait. Regenerate in img2img from this one only, identity copied to the character, simplified scene (gray background, soft light). Recalibrate. Then only retry the complex sets.

### Emotional consistency (often forgotten)

The morphology can hold while the soul of the face changes too much. If your series is "fatigue", forbid "big smile" in the scene block. A micro-expression ("slight tired eyes") is enough. The inconsistent emotion does as much harm as a different nose on a series ad.

### Export for the motion team

Deliver to the motion designer: 4-page PDF (front, 3/4, profile, cowboy), identity TXT, PNG with no destructive compression. No JPEG quality 60 mix: the artifacts become ghost "pores" in video.

### Checklist before moving to Kling or Seedance

- [ ] 4 VALIDATED angles in official_bible
- [ ] log up to date with seeds
- [ ] same light temperature on the 4
- [ ] accessory visible on at least 2 angles
- [ ] light img2img test from the VALIDATED front if doubt

The [Google AI Principles](https://ai.google/principles/) guides do not describe Nano Banana, but recall the importance of transparency when you deliver synthetic characters to brands. Document what is generated and what is retouched.

## Consistency troubleshooting

**"Almost the same person" over the whole series.** You accepted "almosts". Take back the sheet, reject, regenerate from the validated portrait in img2img.

**The coat changes tint.** A single color token in the identity. No "beige or camel".

**The eyes change from blue to green.** Eye color in the identity + negative "heterochromia" if needed.

**You confuse speed and progress.** 30 unsorted images < 6 bible images. Slow down.

**You modify the identity to "repair" a scene.** Forbidden. Change the scene, not the nose.

**Inconsistent video afterward.** The video pilot was not in the bible. Export only the VALIDATED ones to Kling/Seedance.

**Client asks for "a younger version" mid-way.** New `v02` sheet, no opportunistic retouch on v01. Otherwise you lose the traceability and you recreate the chaos.

**Night series + day series same character.** Two subfolders `bible_day/` and `bible_night/` with the same textual identity, light adapted to the scene block only. Do not change the morphology to "compensate" the night.

The research in [computer vision](https://en.wikipedia.org/wiki/Computer_vision) on face recognition recalls that humans are hypersensitive to the micro changes of proportions. Your QA must be as demanding as a casting director, not as an Instagram scroll.

### Scenario D: fictional influencer (30 posts)

Week 1: bible 6 images. Week 2: "lifestyle" posts from img2img of the VALIDATED ones. Week 3: a single new set per day, strict QA. Never 30 text-only prompts from scratch. The consistency is a rejection marathon, not a generation sprint.

### Palette and makeup: lock with no over-prompt

Note in the sheet: natural lip tint, no bright lipstick except for a dedicated campaign. The lips are a consistency trap between two sessions. An explicit "no makeup look" in the identity beats five contradictory beauty adjectives. If the brand imposes a strong makeup, create a **sub-sheet** `HEROINE_A_makeup_v01` and do not mix with the bare-face version.

### File naming (avoid the chaos)

`HEROINE_A_face_VALID_v03.png` not `final_final2.png`. The name tells the validation state. In six months, you find the truth without opening a hundred thumbnails.

Also keep a read-only cloud copy for the client: he sees the bible, he does not mix it with non-validated tries shared by mistake.

## FAQ

**Nano Banana or Nano Banana Pro: which one for a bible?**

Pro if you need more control or resolution on the costume details. The essential remains the workflow: sheet, frozen identity, log, QA. With no that, Pro does not save an inconsistent series.

**Can I mix Nano Banana and Midjourney on the same character?**

Not advised for a strict bible. The engines "interpret" the tokens differently. If you mix, use img2img from a validated reference and accept recalibration sessions. For Midjourney alone, see [complete Midjourney guide](/en/blog/midjourney-guide-complet) as a parallel reference, not as an automatic mix.

**How many images minimum in a bible?**

Four: front, three-quarter, profile, cowboy shot. Six if the hand or a complex accessory is central. Below that, the video and the new angles guess too much.

**How to handle several characters in the same scene?**

One sheet + one log per character. Generate separately, compose in post or with controlled staging tools. Two identities in a single prompt = Russian roulette.

**LoRA or custom references?**

If your stack allows it, a LoRA trained on your VALIDATED ones locks even more. The Nano Banana workflow remains the base: with no clean images, the LoRA learns from noise.

**What to do if the client changes the costume mid-project?**

New version `HEROINE_A_v02`, new log line, no mix with v01 in the same deliverable folder. The transparency avoids the "it is not the same actress" feedback.

**Is the consistency enough for the video?**

No. It is necessary, not sufficient. Chain with [complete Seedance 2 workflow for a cinema render](/en/blog/workflow-complet-seedance-2-rendu-cinema) or the Kling 3 workflow when you animate the bible.

**Rights and commercial use?**

Check the conditions of your account and the client contract. Archive the proofs of the creation chain. The technical consistency does not replace the legal compliance.

**How much time for a complete bible?**

Count half a focus day for a main character (4 angles + QA), plus half a day if a complex set or a second character. The beginners who promise "bible in 1 h" forget the recalibration. Better announce half a day and deliver a holdable bible than a pretty inconsistent gallery.

**Should you retouch in Photoshop after Nano Banana?**

Yes to remove a local artifact, no to "sculpt" another nose. If you retouch the morphology, update the sheet and regenerate the angles from the documented retouch, otherwise the next video will break everything again.

**Nano Banana in a team: who validates?**

A single "bible keeper" person per project. Two validators with different standards recreate the accepted "almost". In a meeting, project front + candidate side by side, not in a fast scroll on a phone.

The **Nano Banana workflow to create consistent characters** is not clicking faster. It is rejecting faster everything that is not the same person. Do that, and Nano Banana becomes an accelerator again, not a multiple-casting generator.

<!-- PUBLICATION DATE: 2026-05-15 -->
