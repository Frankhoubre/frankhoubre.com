---
title: "How to Write a Prompt for a Realistic, Consistent Character"
date: "2026-04-03"
dateModified: "2026-06-10"
category: "tutoriels"
excerpt: "Character sheet, invariants, safe angles, and handling hands and the profile."
thumbnail: "/images/blog/comment-ecrire-prompt-personnage-realiste-constant/hero.webp"
---

The same face becoming a different cousin at each regeneration is not bad luck, it is the normal defect of a tool that optimizes an image, not an identity, and that has no obligation to remember for you. If you want a **realistic** and **consistent** character, you have to treat the prompt as a shooting contract, not as a wish list. The model does not have your memory. You have to replace it with written invariants, angles that limit the lies, and a file discipline that lets you go back without guessing.

This guide comes from the field. You will find concrete **scenarios**, a **workflow** in passes, a decision **table**, a **trench warfare** section on what beginners break first, references to useful image culture, and a **FAQ** at the end of the page. The goal is simple, to move from random shooting to a reproducible method, even at the cost of producing fewer but more useful images.

**Scenario A.** A creator wants a protagonist for three shots of a mini fiction. She copies an "ultra detailed portrait" prompt found online. The first shot is convincing. The second changes the shape of the nose. The third invents a watch she never asked for. She concludes that "AI cannot hold a character". In reality, she never froze the invariants or reduced the cognitive load of the frame.

**Scenario B.** An independent director wants a character type for a poster. He sets twenty traits in a single paragraph. The model mixes two styles, the jacket becomes leather then cotton, the hairstyle slips. He thinks he needs "even more details". The right direction is the opposite, **fewer contradictory traits**, more hierarchy, and a stable visual reference if the tool supports it.

**Scenario C.** A small agency prepares visuals for a campaign. The client wants "the same hero" on five adaptations. The team regenerates until it gets five close faces, then retouches by hand. It holds for a one-off delivery, but it does not scale. The durable method is a short character sheet, noted seeds or references, and framings that avoid the fragile anatomical zones.

The neighboring blog articles cover the multi-shot, the difficult faces, and photorealism with no plastic, you will find them in the links section at the end of the guide.

## Reading the "AI signature" defects before blaming the character

When the face seems "fake", the viewer often blames the eyes or the skin. In practice, the list of suspects is longer and more banal. **The highlights** too clean on the forehead create a studio reading even if you wanted natural. **The bokeh** inconsistent, ovals that change size between two images of the same fictional lens, breaks the optical illusion. **The cast shadows** too black with no interior bounce give a cut-out collage. **The reflections in the eyes** perfectly symmetric on an everyday scene signal a packshot light.

Correcting the character without correcting the light is painting on a foundation that moves. For each almost-good image, ask yourself four questions. Is the main source in the same place as in the prompt? Do the skin tones have a credible red undertone or only a smoothed beige? Does the hair have a micro variation of shine or a uniform helmet? Do the clothes have a fold that follows the body or a 3D mannequin surface?

**Noise and grain** are not a fashion. On a series, a grain too different from one shot to another becomes an unexplained "camera" variation. Choose a target grain density for the project, note it, and bring the shots closer before delivery. Same thing for the **sharpness**. An ultra-sharp shot next to a soft shot with no focal-length or movement justification looks like a montage of disparate sources.

## What "consistent" means for a model

Consistency is not the pixel-by-pixel copy. It is a **correlation** between images: face proportions in a range, same hair family, same clothing silhouette, same age cues, same discreet memorable markers. If you change three invariants at once between two prompts, you will have no idea what broke the continuity.

**Age and physiognomy.** Give a range, "early thirties", rather than a magic number. Add a stable characteristic, dimple, fine scar, a discreet gap tooth, but avoid stacking five. Each addition is a new variable.

**Hairstyle and beard.** They are strong visual anchors. "Mid-length brown hair, side part, slight wave" beats "beautiful hair". If you change the length between two shots, the viewer reads a casting jump.

**Outfit.** A simple, typed garment, work blues, beige peacoat, plain gray sweater, holds better than an outfit loaded with logos and layers. Complex patterns attract fabric hallucinations.

**A rare but repeated accessory.** A sober watch, a worn badge, a local tote bag, it helps the viewer's memory. Avoid reflective glasses if you do not need the reflection, it is an open door to inconsistencies.

> Consistency is not repeating the same wordy prompt. It is repeating the same three decisions that define the identity, and changing only the framing or the action.

## A "promptable" character sheet in one page

Keep a text document next to your exports. One line for the stable identity, one line for the day's outfit if it deliberately changes, one line for the scene, one line for the prohibitions.

**Identity line.** Perceived or neutral sex according to your need, approximate age, phenotypic origin if you use it with respect and narrative consistency, hairstyle, beard or not, stable marker.

**Outfit line.** Top, bottom, shoes, dominant color, material, light wear if you want realism.

**Scene line.** Place, time, weather if exterior, mood.

**Prohibitions line.** No hands in the foreground if your pipeline degrades them, no visible teeth in extreme close-up, no text on the clothes, what you refuse is also a pillar of the contract.

![Workflow, light and texture landmark to set your eye.](/images/blog/comment-ecrire-prompt-personnage-realiste-constant/workflow-1.webp)

## Geometry and angles that reduce errors

Hands, teeth, strict profiles and ears are sensitive zones. It is not a shame to **put them out of frame** when the story allows it.

**Medium-wide and chest shots** often give a better realism/consistency ratio than the full frontal close-up if you have no retouching planned. If you have to show the face's emotion, a slight three-quarter helps more than a perfect symmetric mask.

**Focal length and distance.** A "full-frame equivalent" 35mm or 50mm is a language the models often understand better than "magnificent portrait". Write the camera height, eye level, slight low angle, slight high angle, to avoid the floating camera.

**Gaze direction.** Set a simple point, looks toward the window, toward the lens, toward an off-frame interlocutor. A vague gaze in the prompt becomes a vague gaze in the image.

## Eight-pass workflow

### Pass 1: silhouette and light

You first look for the reading in shadow and light, not the pores. A character readable from afar holds better than a "perfect" face in an inconsistent set.

### Pass 2: face and hairstyle

You lock the identity without adding ten adjectives. Three strong traits, then stop.

### Pass 3: outfit and material

You describe the textile with material words, wool, worn cotton, raw denim, rather than "stylish".

### Pass 4: deliberately simple background

Less competing geometry, less identity slipping. A wall, a window, a simple street, according to your story.

### Pass 5: sharpness, grain, imperfections

You add fine grain, a micro skin asperity, a light dust if the world allows it. The goal is to break the default plastic.

### Pass 6: targeted negatives

Four to eight precise prohibitions, extra hands, fused fingers, fused teeth, absurd catchlight symmetry, unreadable text on the clothes.

### Pass 7: reference image or seed depending on the tool

If your flow allows it, a reference image of the character beats a thousand words. Otherwise, note the seed when an image is close to the goal, and then change only one layer at a time.

### Pass 8: file locking

You export, you name, you copy the final prompt into the same folder. Your future self should not have to guess which variant was the right one.

## Multi-shot chaining without losing the identity

Imagine a short sequence: entering a café, ordering at the counter, a gaze toward the street. Three images, the same character. The method that fails is three independent prompts "in the same style". The method that holds starts with **a continuity sheet**: key direction, dominant color temperature, unchanged outfit except for narrative intention, and three framings written in black and white.

**Shot 1, establishing.** You describe the place and the character's silhouette before the face. The model anchors the world, you reduce the surprises on the proportions.

**Shot 2, action.** You reinject the same identity line, you change only the action and the framing. If you modify the light and the jacket at the same time, you will not know which of the two killed the resemblance.

**Shot 3, reaction.** You keep the key, you play on the gaze and the camera proximity. If you have to get closer, prefer a realistic framing jump, from a waist shot to a shoulder shot, rather than going directly to the frontal mouth.

When you export to video later, these three images already share a compatible **lighting geometry**. You avoid the studio jump between two shots that should be continuous.

## Minimal post-production to save the consistency

Even a light retouch can synchronize a series. **Curve** first, to set the blacks and highlights on a fixed reference. **Saturation** next, protecting the skin reds if you push a look. **Local sharpness** on textile or background, never as a global mask on the face, except for an owned advertising intention.

If two faces are close but not identical, sometimes a slight **harmonization** of the skin tones and the shadows is enough to sell the continuity, especially in a medium shot. In a close-up, the brain is less forgiving, hence the value of locking the framing and the invariants early rather than relying on the retouch.

The **LUTs** or color presets must serve as glue between shots, not as a mask. If the base light lies, a LUT turns the lie into a consistent style but still false for whoever looks at the shadows of the nose and the cheeks.

![Second landmark, depth and grain, before moving to video or post.](/images/blog/comment-ecrire-prompt-personnage-realiste-constant/workflow-2.webp)

### Quick decision table

| Problem | Probable cause | Action |
| --- | --- | --- |
| Face that changes between shots | too many variable traits at once | reduce to three invariants, freeze the hairstyle and age |
| Implausible hands | hands in the foreground with no control | off-frame or a wider shot |
| Plastic skin | global sharp and flat light | curve before saturation, light grain |
| "AI" teeth | smile too tight in close-up | almost-closed mouth or a wider shot |
| Set that steals the show | background too cluttered | simplify the walls and vanishing lines |

## Trench warfare: frequent mistakes and repairs

**Copying a real actor's sheet into the prompt.** Even for a fictional character, pasting biometric details of an identifiable person is an ethical and often legal red line. Work consistent visual archetypes, costume markers, and **lighting** references, not digital doubles of real people with no clear framework.

**Multiplying "cinema" adjectives with no camera.** Replace them with shot, focal length, height, time of day, key direction. The model needs a physical scene, not a marketing trailer.

**Changing the hairstyle to "vary".** It is a new person for the human brain. Vary the action and the framing instead.

**Forgetting the light between two shots.** The same character with an opposite key with no narrative justification, the viewer reads a continuity error. Note the light direction on your sheet, like on a shooting report.

**Sharpening to death.** Sharpening on the skin crystallizes video-game textures. Mask the face if you post-process.

**Neglecting the mobile monitoring.** On a phone, the contrasts lie. Check on a small screen before validating a series for a campaign.

**Giving up after an "almost" shot.** Keep that image as a written negative reference: note three precise defects, then regenerate by touching only one layer, light only, or framing only. Consistency is learned by separating the variables, not by spinning the roulette at each frustration.

For the **depth of field** and the link between focal length and plane separation, the encyclopedic sheet on [depth of field](https://en.wikipedia.org/wiki/Depth_of_field) helps calibrate the vocabulary. On the classic portrait language, see also [three-point lighting](https://en.wikipedia.org/wiki/Three-point_lighting). For the vocabulary of shots and framings as they are named on a set, the page [shot (filmmaking)](https://en.wikipedia.org/wiki/Shot_(filmmaking)) avoids the mixes between "medium-wide" and "medium close" depending on the schools. These pages are vocabulary landmarks, not magic rules for a precise model.

**Session log, minimal format.** One line date, one line tool and model version, one line frozen prompt, one line seed, one line "what I changed since yesterday". In two weeks, this log is worth more than a folder of two hundred unsorted captures. You can also note the **CFG** or equivalent and the number of steps at the moment the texture tips toward plastic, so you no longer redo the exploration at random.

## Useful links in the AI Studio series

- [How to create consistent scenes with several shots in AI](/en/blog/comment-creer-scenes-coherentes-plusieurs-plans-ia)
- [How to avoid distorted faces in AI generation](/en/blog/comment-eviter-visages-deformes-generation-ia)
- [How to generate photorealistic AI images without the plastic look](/en/blog/comment-generer-images-ia-photorealistes-sans-effet-plastique)
- [How to turn an AI image into fluid, credible video](/en/blog/comment-transformer-image-ia-video-fluide-credible)

## FAQ

**Do I always need a reference image?** No, but with no reference you have to be stricter on the sheet and the angles. With a reference, you gain stability if the tool handles img2img or the IP-Adapter of the moment.

**How many traits on the character sheet?** Three to five strong invariants. Beyond that, the contradictions increase.

**Is the seed enough?** Alone, no. It is a partial lock. Combine a stable seed, a stable prompt, and ideally a reference or the same model and the same settings.

**Why do my hands always fail?** Hands are rare and complex in the data. Put them off-frame, distant, or occupy them with a simple, bulky object.

**English or French in the prompt?** Both can work. Keep the photo terms in English if your model is sensitive to them, key, fill, rim, bokeh, and write the rest in the language that gives you the best results on your stack.

**I absolutely need a mouth close-up?** It is a risky request. Plan a local retouch or targeted inpainting, or step back a framing notch.

**How do I deliver "the same hero" to a client?** Document the prompt, seed, settings, and provide a board of three validated angles rather than five "close" random shots.

**The hairstyle changes between two images of the same fictional shooting day, is it serious?** For the viewer, yes, unless your story explicitly shows a passage of time or a different scene.

## Editorial compliance section

![Cinematic illustration, editorial compliance section.](/images/blog/comment-ecrire-prompt-personnage-realiste-constant/comment-ecrire-prompt-personnage-realiste-constant-section-conformite.jpg)

Useful internal links:
- [how to write an ultra-realistic cinematic prompt](/en/blog/comment-ecrire-prompt-cinematic-ultra-realiste-ia)
- [how to structure an AI video like a real film](/en/blog/comment-structurer-video-ia-comme-vrai-film)
