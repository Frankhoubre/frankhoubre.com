---
title: "Why Your Prompt Does Not Work, and How to Fix It"
date: "2026-04-01"
dateModified: "2026-06-10"
category: "tutoriels"
excerpt: "Diagnosing contradictions, bad hierarchy, and three-pass tests to take back control."
thumbnail: "/images/blog/pourquoi-ton-prompt-ne-marche-pas-comment-corriger/hero.webp"
---

You copy a prompt that worked for someone else, you get a smooth face, an HDR sky, and a setting that looks like a generic postcard. The anger rises, you add adjectives, the situation gets worse. None of this proves you are bad at "prompting". It mostly proves that **your text contradicts itself**, or that it gives no priority to the model.

Here we talk diagnosis, not magic. Three real situations. **Nadia**, a wedding photographer in Brussels, wanted a "soft and dramatic" portrait with "strong contrast" and "perfect skin": the model chose the plastic glamour because the instructions neutralized each other. **Julien**, a motion designer in Lyon, piled five reference films into a single paragraph: each style took a bite of the frame. **Amina**, a community manager for an outdoor brand, wrote in poetic French with no camera or light term: the engine invented a neon by default.

The language models and the image pipelines follow statistics. When you write, you **order probabilities**. The encyclopedic article on [prompt engineering](https://en.wikipedia.org/wiki/Prompt_engineering) summarizes the idea: clearly formulating the intention improves the output, not because the text is pretty, but because it reduces the ambiguity. Your work therefore looks more like instruction editing than poetry, even when the final result must be poetic visually. To start from a consistent instruction base instead of a copied prompt, try our [cinema prompt generator](/outils/generateur-prompt-cinema).

## Hierarchy: what the model reads first in your head

Before the adjectives, place the **frame geometry**. American shot, waist, close-up. Camera height: eye level, slight low angle, or chest height for a soft tension. Then the **light in three lines**, as a director of photography would note it in a notebook.

Line A, main source: apparent size, color, direction. Example: large north window, soft light, slightly cold. Line B, fill or absence: no fill, sharp shadow under the nose, hard contrast. Line C, background: dark room, warm practical lamp in the back, wide bokeh.

If you remove all the words "cinematic" and "ultra realistic", does your prompt still describe a scene you can see? If not, it was hollow. For a film-render-oriented prompt structure, see also [how to write an ultra-realistic cinematic prompt for AI](/en/blog/comment-ecrire-prompt-cinematic-ultra-realiste-ia).

> **Pro tip:** a single dominant emotion per image. "Melancholic and euphoric" is not a nuance, it is two different films.

## Classic contradictions and how to see them

**Beauty versus truth.** You ask for perfect skin and visible pore texture. The model leans toward one or the other, rarely both with no human retouch.

**Hard light versus romantic softness.** You want a sharp shadow under the nose and at the same time a princess blur. Choose: magazine-fashion portrait with an owned hard key, or soft window portrait with long transitions on the skin.

**Wide angle and hands in the foreground.** You describe an 18 mm near the face and you are surprised by the long fingers. Switch to 35 mm or 50 mm, or move the subject back in the text.

**Too many film references.** "Like Blade Runner, Dune, and Amélie" mixes neons, sand, and pastel Paris. Take **one** light reference, not a synopsis.

For the language tics that push toward the plastic, the list of frequent mistakes is detailed in [the prompt mistakes that make an AI image artificial](/en/blog/erreurs-prompt-qui-rendent-image-ia-artificielle).

## The five crossed-out lines test

Before regenerating out of frustration, mentally print five lines of your prompt: camera, subject, place, light, prohibition. Cross out only one, regenerate. If nothing moves, it was not the line that steered the result, it was another conflict lower in the text. This silly game saves you from the addiction to the "again" button.

When you work for a client, add a sixth contractual line: **use** (social, print, internal pitch). It avoids pushing a ratio or an aesthetic that makes no sense for the final delivery.

## Three-pass workflow, concrete settings

**Pass 1, composition and light.** You add neither fine grain nor skin texture. You lock framing, focal length, sources. In the interface, you note the **number of steps** or equivalent at the first level where the geometry stabilizes, not at the displayed maximum.

**Pass 2, material and skin.** You add three real imperfections maximum: fine grain, micro-texture skin at zoom, light dust in a sunbeam. You avoid adding ten material adjectives at the same time.

**Pass 3, sharpness and finishing.** You lower the mental sharpen of the prompt, you add targeted prohibitions rather than an encyclopedic list.

Example of a base, to adapt:

```text
35mm spherical, eye level, medium close-up, man early 30s, stubble,
worn denim jacket, small apartment, window light from left, soft size large,
hard shadow under nose, cool fill very weak, warm practical lamp deep background,
natural skin, visible pores, no plastic skin, shallow depth of field
```

**Negatives:** four to eight precise targets beat thirty generic ones. Example: `extra fingers, fused teeth, symmetrical catchlights, oversharpened skin, waxy texture`.

### Typical clicks in a "classic" interface

Open your tool, create a `2026-04-05_test_prompt` folder. Paste the minimal base, **disable** any preset fantasy or anime style if you aim for photorealism. Set the ratio on 2:3 or 16:9 according to your output, not on square if you prepare a horizontal banner.

Launch a first image with steps at the lower third of the recommended range for your model. Observe: if the setting is muddy, go up one step level. If the skin becomes wax, **lower the guidance** by a notch or remove a beauty superlative.

Duplicate the scene, name `pass1_light`, `pass2_skin`, `pass3_grain`. Modify only one scene at a time when you compare. At the end of the session, copy the final prompt into `prompts.txt` with the date.

When you chain several framings, keep a **stable character sheet** and change only the shot and the action. The guide [how to write a prompt for a realistic and consistent character](/en/blog/comment-ecrire-prompt-personnage-realiste-constant) avoids the identity drifts.

> **Pro tip:** if you modify three layers at the same time between two generations, you will never know which one saved the image.

## English, French, and technical tags

Many checkpoints react better to **photo tags in English**: key light, fill, rim, bokeh, anamorphic, depth of field. You can write your intention in your own language in a notebook, then translate the technical terms in the prompt field. It is not a matter of elitism, it is a matter of training data.

For the multi-shot consistency, [how to create consistent scenes with several shots in AI](/en/blog/comment-creer-scenes-coherentes-plusieurs-plans-ia) complements this page on prompt stability.

![Workflow marker, light and texture to calibrate your eye.](/images/blog/pourquoi-ton-prompt-ne-marche-pas-comment-corriger/workflow-1.webp)

### Table: symptom, probable cause, correction

| Symptom | Probable cause | Correction |
| --- | --- | --- |
| Plastic skin | guidance too high + implicit beauty | lower CFG, remove "perfect skin" |
| HDR sky and flat face | no light hierarchy | describe key + roll off on the sky |
| Weird hands | close-up + wide angle | change focal length or off-frame |
| Generic setting | mood with no geometry | add shot, height, time |
| Mixed styles | five references | one light reference |
| Nothing changes between attempts | everything changes at once | one variable per pass |

> **Pro tip:** a long prompt that fights itself is worse than a short hierarchized prompt.

## Micro-adjustments before validating

Too-bright and too-blue eyes often signal AI. In the prompt, ask for a **micro shadow under the eyelid**, a simple catchlight, not a perfect double mirror. The too-clean shadows under the eyes give a 3D makeup: ask for a softer color transition, a bit of red under the blue.

Contrast is not saturation. If you raise the colors to save a flat image, you get a garish ad. Think **curve** first, saturation after.

When you have been looping on the same scene for three days, change the victory criterion: instead of "more beautiful", use "more readable in one second on a phone" or "less lying about the light". Often the winning prompt is less spectacular but more honest, and it is the one that stops making you lose time.

![Second marker, depth and grain, before the video transition or post.](/images/blog/pourquoi-ton-prompt-ne-marche-pas-comment-corriger/workflow-2.webp)

## Trench warfare: what beginners miss, and how to repair it

You believe that "more details" means "more words". You get a patchwork. **Fewer stable traits** is worth more than twenty unstable adjectives.

You ask for "natural" and "studio lighting three point" in the same sentence. The natural wants a dominant source and some chance, the studio three balanced sources. Choose a regime: **credible location** or **controlled set**, not the two mixed with no hierarchy.

You write "sunset" without specifying whether the sun is in the frame or only in the color of the sky. The model puts a giant sun that competes with your subject. Specify: **sun off-frame on the left**, grazing rays on the edge of a wall, no visible disk.

You want fog and hard shadows at the same time. The fog diffuses everything. If you want both, separate into **two planes** or accept a very localized fog in the background with a hard key on the face in the foreground, describe this separation explicitly.

You ignore the **ambient fill**. Even a night has a street reflection on the cheek. Add a mention of a light bounce or a distant practical, otherwise you get a black mask stuck on an HDR background.

You treat the negative prompt like a magic curse against bad taste. The negatives **orient**, they do not "delete" whole concepts if the positive asks for them again elsewhere. If you write "beautiful face" in the positive and "plastic skin" in the negative, the model hesitates and cheats.

You forget the **focal length** when you describe the bokeh. An 85 mm at two meters does not have the same background as a 35 mm in the same spot. A short line on the subject-background distance avoids the "cut-out subject" collage.

> **Pro tip:** when a prompt "no longer works" after a tool update, start again from the geometric base alone, with no adjectives. You rebuild the tower brick by brick.

> **Pro tip:** keep an "ugly reference", a failed image you corrected. It reminds you which lines of the prompt caused the problem.

You use "8K hyper detailed" as an amulet. The model over-defines the skin, the pores become a grid. Remove the superlative, raise the steps with parsimony, or accept a local retouch on a precise zone.

You ignore the hands because they are difficult, you put them in full frame in close-up. **Recrop** on the face, put the hands in the blurry distance, or in the shadow. It is not cowardice, it is professional framing.

You copy Discord prompts without decomposing them. You import CFG and steps settings that went with **another checkpoint**. Start again from a short prompt on your model, then reintroduce the options one by one.

You think the negative must list the whole universe. You create interference. **Four to eight negatives** linked to your real failures are enough.

You note neither seed nor prompt version. When an image works halfway, you cannot find it again. **Text file next to the exports**, capture of the sliders if needed.

You mix literary French and technical English in the same sentence with no structure. Separate: an intention line in your own language for you in the notebook, a structured prompt block in tags for the model.

> **Pro tip:** read your prompt aloud. If you gasp on a line, cut the line into two instructions.

## Frequently Asked Questions (FAQ)

**Why does the light not "follow" my idea?**

You described an atmosphere with no physical source. Add a window or a lamp, an approximate time, the hardness of the shadow, and what happens in the background. The model needs a hierarchy, not a mood alone. If you want backlight, write where the sun is relative to the frame, whether the face is filled by a bounce, and whether a rim separates the subject from the background. With no these three pieces of information, you often get a generic halo and a flat face.

**Is the word "film" enough?**

No. With no focal length, camera height, and light, "film" becomes a generic preset. Replace it with operator choices: 35 mm, eye level, side key.

**My faces "melt", what to do?**

Lower the aesthetic pressure, push a sharp side light, avoid the mouth close-up on a model that weakens on the oral. Recrop, or partially mask if the style allows it.

**My prompt is long, is it normal?**

A long prompt can be good if it is **ordered** and not contradictory. If it repeats the same idea with ten synonyms, shorten it. The length is not a virtue, the clarity is.

**Should I put everything in a single field?**

Often yes for a single image. For series, keep a stable base in a file and change only one line between the shots. You reduce the surprises.

**Anamorphic everywhere?**

Only if you own the oval bokeh and the typical sharpness falloff. Otherwise you add a dirty blur with no intention. Test spherical first.

**Why do my results change overnight with the same text?**

Model update, different seed, or reset settings. Document the seed, model, resolution, and interface version when you want to reproduce.

**The negatives, how many at the reasonable maximum?**

Aim for eight as a practical ceiling for most workflows. Beyond that, you risk conflicts between terms that eat each other's priority. If you use a tool that strongly weights the negative, start with four terms linked to your repeated failures (hands, teeth, text, horizon), observe, then add two terms maximum per session. The lists copied from Discord are often calibrated for another model: recycle them with caution.

**How to know whether I should split my prompt into two passes?**

When a single image mixes a complex setting, a precise hand action, and a difficult light, the model sacrifices a layer. First do the setting and the light with the subject static, then use inpainting or a second generation focused on the hands or the face if your pipeline allows it. You trade time for precision, it is often profitable.

<!-- PUBLICATION DATE: 2026-04-01 -->
