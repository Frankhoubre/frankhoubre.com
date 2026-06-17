---
title: "How to Write an Ultra-Realistic Cinematic Prompt for AI"
date: "2026-04-01"
dateModified: "2026-06-10"
category: "tutoriels"
excerpt: "Structure, light, focal length, imperfections and locking for images that hold up at cinema level."
thumbnail: "/images/blog/comment-ecrire-prompt-cinematic-ultra-realiste-ia/hero.webp"
---

The word "cinematic" in a prompt is often a sticker stuck on an image that stays flat, and the viewer has already seen that label a thousand times on demo thumbnails. The models have seen it millions of times next to neon, background blur and pushed contrasts. If you want a credible **cinema** render, you have to move the weight of the text toward the **camera**, the **light**, the **depth**, and the measured **imperfections**. It is not a question of poetic talent, it is a question of a list of coherent decisions.

You will read here three blocking **scenarios**, a **workflow** in passes, a **table** to decide fast, a **trench warfare** section, encyclopedic links for the vocabulary, four internal references, and a **FAQ**. No single formula, a grid you reuse from one project to another, with mental checkboxes before each generation.

**Scenario A.** A motion designer wants a pilot image "like a film" for a pitch. He stacks "8K, hyper detailed, cinematic, hollywood color grading". The result looks like a game HDR thumbnail. He adds even more resolution. The problem was not the resolution, it was the absence of lighting hierarchy and a plausible focal length.

**Scenario B.** A photographer moves to the generative for moodboards. She writes a precise scene but forgets the apparent size of the sources. The face is lit as if by a giant softbox and a violent side neon at the same time, with no logic. The "cinematic" does not hold because the light tells two different studios.

**Scenario C.** A director tests several models with the same wordy prompt. The outputs diverge totally. He concludes that "prompts are useless". In reality, he mixes five intentions, interior drama, action, rainy night, grain, anamorphic. One intention per pass would have isolated what works on **his** tool.

## Reading an image like a DP, not like a fan

Before writing, train yourself to **describe** a film image you love without showing it to the model. First note the direction of the key relative to the nose. Note if the fill exists or if the shadow is owned. Note the relative temperature between foreground and background. Note the shot, wide enough to see the hands or tight enough to isolate the gaze. Note a material detail, dust, grain, wall texture.

This exercise gives you a reusable **template**. When you move to the prompt, you do not copy the image, you copy the lighting and geometric structure. It is the difference between "I want the same vibe" and "I want a wide side window, minimal fill, a background colder than the face, a medium-wide shot, 35mm".

**The viewer reads the intention before the detail.** If the geometry of the light is credible, a small texture imperfection passes. If the light lies, no resolution saves the shot. That is why "8K" prompts with no source direction often produce sharp faces on worlds that do not hold.

## Gray day, wet night, tungsten interior, three worlds to master separately

**Nordic gray day.** Dominant sky, soft shadows, contained saturation. Explicitly write the lack of direct sun otherwise the model injects dramatic rays. Add a micro variation on the concrete, the stone, the dirty windows, to avoid the latent HDR.

**Wet night with reflections.** Rain is not just a filter, it is a series of specular surfaces. Indicate a wet floor, halos around the sources, a face partially lit by a distant sign. Limit the number of signs if you do not want a rainbow of neons.

**Tungsten interior.** Skin warmer than the night blue out the window. Balance the interior/exterior: either almost-closed curtains, or a visible window with owned contrast. Otherwise you get an impossible mix where the window and the lamp fight with no hierarchy.

Work these three **families** in three distinct sessions. When you master them, you will be able to hybridize them with a bridge sentence, "tungsten interior, blue street reflection on the glass of the painting".

## Where the "cinema" breaks on generative models

**Mixing illustration and photography without saying so.** If you want photorealistic, avoid the words that pull toward demo 3D, unless intended. If you want painterly, own the brushstroke, the canvas, the detail limit. The worst is the middle, neither real enough nor stylized enough.

**Contradiction between depth of field and multiple subjects.** A tight group with extreme bokeh on everything except six sharp faces is rare in real optics. Write who is the sharpness target, or accept a wider depth.

**Camera movement too loaded for a single image.** "Fast circular tracking shot with rack focus" frozen in one frame looks like a weird blur. For the image, choose a moment of the movement, a light pan with moderate motion blur, or a static camera.

**Mobile under-framing.** In vertical, the center of gravity rises. In 2.39, the horizontal framing has to own the bars. Generate in the final ratio when possible.

## Breaking down "cinema" into measurable layers

**Camera layer.** Shot, height, focal length or equivalent, subject-background distance, a possible very simple movement, slow pan, light subjective tracking. If you do not know what the camera is doing, the model invents a demo camera.

**Light layer.** One dominant key, a fill or its owned absence, a possible rim, visible practicals or not. Temperature in simple words, tungsten, slightly bluish daylight, green neon as a backlight. Source size, wide window, small door opening, diffuse drape.

**Space layer.** Depth of field consistent with the focal length. An 85mm must not give an 18mm geometry with no narrative reason. Write the separation of the planes even approximately.

**Material and era layer.** Fine grain, dust in a sunbeam, light halation on a window if the world allows it. Avoid adding ten contradictory textures.

**Implicit sound layer.** Even for an image, cinema is coupled to sound in the viewer's head. A rain scene with reflections on the ground prepares an ambience that the brain completes. You can note "rain ambience, no shouting characters" to avoid theatrical poses off-tone.

> A "cinematic" prompt with no geometry is a slogan. A prompt with key, shot and focal length is a shooting intention.

## A prompt structure that stands when you remove the adjectives

**Sentence 1, geometry and subject.** Who or what, where, the chosen shot.

**Sentence 2, light in three parts.** Source, hardness or softness, relative color.

**Sentence 3, camera.** Focal length, height, movement or static.

**Sentence 4, prohibitions.** What you refuse, social-clip HDR, porcelain skin, global sharp, symmetric catchlights if the world is natural.

Test by reading aloud. If a sentence changes nothing in the image you visualize, cut it.

When you reuse a prompt between two different checkpoints, also copy the **list of prohibitions** and the **camera sentence** as is before adapting. Many people keep the adjectives and throw away the geometry, then are surprised that the second model "does not do the same". The models do not share a common soul, they sometimes share neighboring statistics. Your job is to make the geometry explicit for each engine.

![Workflow, light and texture landmark to set your eye.](/images/blog/comment-ecrire-prompt-cinematic-ultra-realiste-ia/workflow-1.webp)

## Seven-step workflow

### Step 1, dramatic intention in five words

"Isolation", "social pressure", "domestic warmth", "cold threat". It is not gratuitous romanticism, it orients the contrast and space choices without imposing a catalog style.

### Step 2, choose a lighting reference, not a whole film

Instead of "like X", describe two elements, rain and neon in the background, face under a soft close source, hard shadow on the wall behind. Title references are useful for you, not for the model if they stay vague.

### Step 3, anchor the focal length

35mm for an interior with a visible body, 50mm for a sober portrait, 85mm for a soft compression. If you play anamorphic, own the oval bokeh and the falloff, otherwise you add dirty blur with no control.

### Step 4, one contrast decision

A soft curve with a shoulder on the highlights, or strong contrast but consistent with the hard key. Mixing the two with no hierarchy gives the AI clip look.

### Step 5, imperfections in three items

Grain, a light optical micro-vignette, controlled halation or not. Three, not fifteen.

### Step 6, generation and cold critical reading

You wait ten minutes, you reopen the image. You note three precise defects. You change only one layer for the next pass.

### Step 7, locking

Final prompt, settings, seed if useful, a capture of the metadata in a text file. You prepare what follows, storyboard or video, without losing the recipe.

![Second landmark, depth and grain, before moving to video or post.](/images/blog/comment-ecrire-prompt-cinematic-ultra-realiste-ia/workflow-2.webp)

### Quick decision table

| Visual symptom | Frequent cause | Prompt fix |
| --- | --- | --- |
| Cheap HDR | too much dynamic with no key | darken the background or compress the highlights |
| Plastic skin | sharp and flat light | curve, grain, side key |
| Forced wide geometry | absent focal length | add an explicit 35 or 50mm |
| Inconsistent bokeh | depth not written | subject-background distance + focal length |
| Neon everywhere | unbounded mood | one neon, the rest neutral |

## From the prompt to the color suite, without breaking the intention

A generated image is often a **semi-final**. If you plan a strong color label, generate slightly flatter than the final look, to keep material in the skin and the shadows. If you push the contrast already in the prompt, the rest risks burning the highlights or crushing the blacks.

**Sober steps in post.** A master curve, a gray balance, selective saturation, grain. Avoid five stacked LUTs. A fixed reference stuck on the edge of the screen is enough to align three images of the same sequence.

**Sharpening.** As in classic photo retouching, mask the face. Cinema is not a poster of skin detail everywhere, except for a documentary or ad intention.

**Reframing.** If you reframe aggressively, check that the grain and the blur stay consistent with a simulated longer focal length. Sometimes it is better to regenerate in the right framing.

## Iterating like in grading, one layer at a time

Across three passes, impose a strict rule on yourself: **a single variable modified** between two comparable generations. Pass A, you change only the height of the key. Pass B, you change only the temperature of the background. Pass C, you change only the camera-subject distance.

If you modify light and focal length and grain together, you will not know what worked. Real image teams isolate the tests for a reason, to measure the effect of a decision. You do not need a laboratory, you need note discipline.

When an image is "almost", make an **annotated capture**, circles on three zones, acting, sharp-blur transition, background, skin texture. Ask yourself if the problem is local or global. Local problems can sometimes go with inpainting or retouching, global problems require a new generation with the lighting sentence rewritten.

## Trench warfare

**Believing that "ultra realistic" is a style.** It is a requirement of physical consistency. Start with a banal, well-read scene, gray-day interior, before aiming for the blockbuster.

**Stacking marketing stopwords.** Reserve the superlatives for the client presentation, not for the model.

**Forgetting the final aspect ratio.** Generating square then reframing assaults the composition. Choose the frame early.

**Neglecting the platforms' compression noise.** Export with headroom on the highlights if you aim for social.

**Underestimating the role of black.** Modern cinema often keeps velvety black, not muddy gray everywhere. Write "deep blacks but detailed in the open shadows" if that is what you want.

**Confusing "beautiful" and "consistent".** An aesthetically smooth portrait can be less cinematic than a rougher but lighting-honest shot. The cinema viewer is used to controlled imperfections, flare, grain, a slight desynchronization of the sources if the story carries it.

**Forgetting the sound even when you only deliver an image.** Note on your sheet what the character hears, a quiet street, a distant rumble, rain on the sill. It often influences your framing and negative-space choices without you realizing it.

For the vocabulary of **staging** and frame choices, the page [long take](https://en.wikipedia.org/wiki/Long_take) reminds us that a "cinema" image is often a decision of duration and movement, even if here you only make a frame. For **contrast** and curves, see [contrast (vision)](https://en.wikipedia.org/wiki/Contrast_(vision)). For **anamorphic** with no mythology, [anamorphic format](https://en.wikipedia.org/wiki/Anamorphic_format). For the **grayscale** and the reading of tonalities, [grayscale](https://en.wikipedia.org/wiki/Grayscale) stays a simple landmark when you write "open shadows" or "deliberately crushed blacks".

If you come from a photo shoot and you want to talk like on a set, keep the same habits: a call sheet for the light, a sheet for the camera. The generative does not like chaos any more than a real team.

## Useful links in the AI Studio series

- [How to describe light like a director of photography in a prompt](/en/blog/comment-decrire-lumiere-directeur-photo-prompt)
- [How to control visual style in AI generation](/en/blog/comment-controler-style-visuel-generation-ia)
- [How to simulate an anamorphic lens in AI generation](/en/blog/comment-simuler-objectif-anamorphique-generation-ia)
- [How to structure an AI video like a real film](/en/blog/comment-structurer-video-ia-comme-vrai-film)

## FAQ

**"Cinematic" in French or in English?** Test both on your model. Often the English term is over-represented in the data, but a precise French description can gain in clarity. Compare on the same seed if the tool allows.

**Should I always add grain?** No. Grain sometimes hides defects but can also mask a good texture. Use it when the image is too clean for your world, or when you have to bring a generated image closer to a real stock.

**Anamorphic from the start?** Only if you master the trade-offs. Otherwise first lock the light in spherical, then add the anamorphic as a stylistic layer when the scene holds.

**Does high CFG or guidance help?** It depends on the model. Guidance that is too high can plasticize. Look for a window, note it, and do not change it between two comparable tests.

**Is a single image enough for a client board?** For a board, plan three light variants, not three different world styles. Show that you control the key, not that you drew three random shots.

**How do I avoid the AI look on the eyes?** Simple catchlights, slight asymmetry, no pure white on the whole cornea, a slight variation of veining in the white if it is a close-up.

**I have no photo vocabulary, where do I start?** Key, fill, rim, source size, temperature, shot, focal length. Six tool words, repeated until natural, then add a notion of direction, lateral, from the back, from the ceiling.

**Does post-processing cheat?** No, it is the end of the chain. Real cinema goes through a color suite, why not you, as long as you document what is generated and what is retouched for the client.

**Is "cinematic lighting" enough?** Rarely. It is a cliché magnet. Replace it with a source sentence and a contrast sentence.

**Should I describe the camera lens even if I know nothing about it?** Yes, with simple equivalents, 35mm, 50mm, or "light telephoto portrait". The model needs a scale, not a lecture.

## Editorial compliance section

![Cinematic illustration, editorial compliance section.](/images/blog/comment-ecrire-prompt-cinematic-ultra-realiste-ia/comment-ecrire-prompt-cinematic-ultra-realiste-ia-section-conformite.jpg)

Useful internal links:
- [how to describe light like a director of photography in a prompt](/en/blog/comment-decrire-lumiere-directeur-photo-prompt)
- [how to structure an AI video like a real film](/en/blog/comment-structurer-video-ia-comme-vrai-film)
