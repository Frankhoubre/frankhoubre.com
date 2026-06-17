---
title: "Avoiding Glass and Metal Artifacts in AI Video"
date: "2026-06-05"
dateModified: "2026-06-10"
category: "tutoriels"
excerpt: "Virtual shooting settings and tricks to limit fake reflections on shiny objects and complex surfaces."
thumbnail: "/images/blog/eviter-artefacts-reflets-verre-metal-video-ia/hero.webp"
---
The bottle turns. A reflection of a non-existent forest. A window that ripples. Metal that melts between two frames. Specular materials are the moment of truth for AI video.

**Avoiding glass and metal artifacts in AI video**: angle, boring light, short clips, compositing when you must. This guide covers shiny surfaces in motion, not just packshot stills.

![Studio glass and brushed-metal bottle with controlled softbox reflections and no artifacts](/images/blog/eviter-artefacts-reflets-verre-metal-video-ia/hero.webp)

## Why glass and metal break first

Video models interpolate between frames. Specular surfaces change their highlight frame to frame because the model "reinvents" the reflected environment. Glass ripples when the geometry is not held. Brushed metal becomes mirror chrome. Glasses on a face show an impossible set.

The strategy is not "prompt better" alone. It is **reduce the visible specular surface**, **control what can be reflected**, **limit the duration and amplitude of movement**, and **composite** when the brief demands the impossible.

| Material | Typical artifact | Main lever |
| --- | --- | --- |
| Glass | Ghost set inside the bottle | Neutral background, tilted angle |
| Brushed metal | Brushing direction that jumps | Stable side light, short clip |
| Glasses | Landscape in the lenses | Camera angle, remove the glasses |
| Window pane | Walls that breathe | Reduced dolly, motion blur |
| Chrome | Highlights that dance | Avoid or composite a still |

For static packshots, see [creating product packshots for AI advertising](/en/blog/creer-packshots-produit-publicite-ia). For hands holding a shiny object, [inserting a product in an actor's hand without artifacts](/en/blog/inserer-produit-main-acteur-sans-artefacts). For the overall render, [how to avoid the AI-generated image look](/en/blog/comment-eviter-effet-image-generee-ia).

## A virtual-shooting workflow for shiny surfaces

### Step 1: shot audit: which surfaces, what movement

List every specular surface in the frame. Note the camera and subject movement. If you have glass plus dolly plus wide shot, you chose maximum difficulty. Simplify before generating: tighten the framing, shorten the clip, reduce the dolly.

### Step 2: reduce the visible reflective surface

One facet of the bottle, not the full-glass front. Glasses removed or an angle where the lenses do not capture the set. Brushed metal seen at an angle, not as a front mirror. **Less specular surface equals less lying per frame.**

### Step 3: boring light and a controlled background

A large softbox, a gray or soft-gradient background. One or two predictable highlights. Prompt: `controlled studio reflection, no environment in glass, soft single key`. The creative drama happens in post or in layout, not in the generative reflection.

### Step 4: short clips with modest movement

Two to four seconds. A 5 percent push in rather than an orbit. Product rotation: consider a 3D rotation of the cut-out still rather than full generative AI video on glass.

![Object/neutral-background separation workflow with composited reflections](/images/blog/eviter-artefacts-reflets-verre-metal-video-ia/workflow-1.webp)

### Step 5: object / background separation if compositing

Generate the object on a neutral background. Generate or shoot the background separately. Composite in post with painted or light CG reflections. A standard ad approach when native AI video fails on glass.

### Step 6: frame-by-frame touch-up on the hero

A short hero shot where the glass must hold: export the problematic frames, inpaint or replace on 3 to 5 keyframes, reimport. Surgical, not redoing everything.

### Scenario A: perfume ad, slow rotation

A validated still packshot, cut out. 3D rotation in After Effects or Blender on the PNG. Reflection added on a layer with a controlled gradient. Zero glass ripple. 10s delivery. The client sees turning glass. You see a smart composite.

### Scenario B: a character with glasses, bar interior

An angle where the glasses reflect the dark wall behind the camera, not the row of bottles. A tight shot, 3s clip. If the lenses still lie, remove the glasses for this shot and add an insert shot of hands on a glass set down. Reduce the complexity.

### Scenario C: car metal (product shot, not driving)

A tight framing on a door, brushed metal, stable side light. No dolly. 2s clip. A single highlight. If the metal melts, a still plus light parallax. Do not ask for a complete road with consistent reflections in long AI video if you do not have the composite budget.

## Troubleshooting

**Glass ripples.** Unstable geometry. Shorten the clip. Img2img from a stable still. Or composite.

**Forest reflection in the studio bottle.** Background and prompt not neutral enough. Go back to step 3. Inpaint the reflection.

**Metal that changes its brushing.** Light or angle unstable between frames. Freeze the key, a shorter clip.

**Glasses equals two landscapes.** Change the angle or remove them. Simplify the set visible in the lenses.

**Window pane behind a subject that breathes.** Reduced dolly, light motion blur in post to mask without lying too much, or a static shot.

**Flickering highlights.** Often too many sources in the prompt. One key, one rim max on shiny surfaces.

**TV or smartphone screen in the shot.** A specular surface plus invented content. Fix: screen off, or content composited in post, or an angle where the screen is out of the light.

**Jewelry and watches.** Small surfaces, big problems. Fix: hands off-frame or a discreet matte piece. The watch reflecting a forest kills a wrist close-up.

## When to switch to a hybrid pipeline without shame

The hybrid pipeline is not an AI failure. It is the advertising norm on difficult materials. A validated AI still or photo, cut-out, light 3D animation or parallax, painted or photographed reflections on a sphere. You deliver the requested movement. The client does not bill the method. They bill the result.

Document internally: "shot 03 hybrid, source still v02, AE rotation, reflection plate studio_01". At pick-up, you do not redo a native AI video that already failed. You update the still if the packaging changes.

For sequences with several shiny objects, prioritize: which one is the hero? A single specular hero per shot. The others matte or out of focus. AI and compositing have a limited capacity of truth per frame. Spread it over the edit.

Client A/B tests on turning glass: show a short native AI version and a hybrid version. The choice becomes obvious with no technical jargon. You win the trust and the composite budget for the rest of the campaign.

![Frame-by-frame comparison of native glass reflections vs a controlled composite](/images/blog/eviter-artefacts-reflets-verre-metal-video-ia/workflow-2.webp)

> 💡 **Frank's Cut:** reduce the visible **specular surface**. A single reflective facet beats a full-glass front. When a brief requires the glass front, switch to a still plus 3D motion or composite. Do not burn the budget on a native AI rotation.

The [Blender documentation on glass materials](https://docs.blender.org/manual/en/latest/render/shader_nodes/shader/glass.html) helps you understand what a physical reflection should do. For real product photography, [Karl Taylor Education on glass reflections](https://www.karltayloreducation.com) stays a reference that translates into a prompt.

## FAQ

### Can glass hold in long AI video in 2026?

Short hero shots yes, with extreme discipline. Long sequences with the glass as protagonist: plan for compositing or a still plus motion hybrid. Native AI video on long glass stays the most predictable weak point of client reviews.

### Should I avoid all glass and metal in AI?

No. You must **treat them as special shots** with a dedicated protocol. Static, neutral background, short clip, or composite. The problem is treating them as a generic "cinematic" shot.

### How do I handle glasses on a recurring character?

A character sheet without glasses if possible. If the story requires them, a locked camera angle, a simplified set behind the subject, tight shots. Document the angle that minimizes the fake reflections. A reverse with no visible glasses if continuity allows.

### Does motion blur hide glass artifacts?

Slightly, on a modest dolly. Too much blur equals a mushy look. Use it as a last resort after reducing the specular surface and shortening the clip. Do not mask an extreme ripple: the pro viewer sees it.

### Does image-to-image help glass?

Yes from a stable still of the product or the set. A moderate weight to preserve the geometry. Useful to animate a slight light variation without reinventing the whole reflection.

### What is the difference between glass and metal in a prompt?

Glass: `thick glass, controlled softbox reflection, no background inside`. Brushed metal: `brushed aluminum, directional highlight, not mirror chrome`. The model defaults to chrome. You must name the matte or brushed finish explicitly.

### Compositing: is it cheating?

No in advertising and professional fiction. It is the standard when physics exceeds the engine. Document it for the client. Deliver clean. AI serves to speed up, not to forbid compositing.

### How do I QA the reflections before delivery?

Frame-by-frame playback at 100 percent on the specular zones. Check that the highlights do not jump between adjacent frames. Test on a light background and a dark background in layout. A reflection that changes color with no light change equals a rejection.

## Pre-generation checklist for shiny surfaces

Tick before each batch: minimal specular surface in the frame, neutral or controlled background, one named key, clip duration under four seconds, modest camera movement, a hybrid plan B identified if it fails. If one box stays empty, you are not ready to generate. You are ready to pay for fix time.

This checklist lives in my project Notion next to the moodboard. The juniors who use it stop sending me bottles that breathe. The seniors sometimes ignore it and regret it on Friday night.

### Watches and jewelry in luxury ads: a dedicated workflow?

A jewelry product still on a neutral background, a 100mm equivalent macro, 3D motion or an ultra-short morph. No hand wearing the watch in long AI video unless there is a composite budget. The hand plus metal plus movement equals a triple trap. If the brief requires the wrist, a two-second clip max, an angle where the dial reflects a dark wall, not the whole set.

## Talking reflections with the client without jargon

Show two images side by side: a controlled studio reflection vs a ghost forest reflection. Ask which one matches the brand. The client understands in five seconds why you refuse a "cinematic glass rotation" prompt over ten seconds. You sell the hybrid method as a quality choice, not a technical limitation.

Quantify the time: a native AI rotation that fails equals 6h of fixing. A still plus 3D motion equals 2h delivered. The quote writes itself. Many client refusals on compositing come from a lack of transparency about past failures, not a preference for suffering.

Keep an internal library of reflection "plates": gray softbox, studio gradient, dark wall. When you composite, you apply the plate on the glass instead of inventing. These plates are ten-minute real photos. They beat AI reflections across entire campaigns.

In fiction, if a character holds a wine glass, the liquid and the glass are two problems. Simplify: a half-full glass out of hard light, or a close-up where the glass is blurred in the foreground. The audience wants the scene, not the perfect refraction. Save the perfection for product ads where the bottle is the hero.

In training, I have people do a simple exercise: generate the same bottle in full-glass front and in a reduced 3/4 angle. Beginners see in two minutes why the visible surface matters more than the "8k ultra glass" prompt. Keep this comparison in your project folder for each new collaborator. It avoids hours of collective fixing.

When you export for the web, specular artifacts sometimes compress into MPEG flickering. If you see flickering after upload, lighten the highlights in post on the glass zones before re-exporting, rather than regenerating the whole sequence. It is a QA step many forget because they only test the local ProRes master. Add a private YouTube or Vimeo test upload on every deliverable with protagonist glass. Five minutes that avoid a public client return.

### Runway, Kling or Pika for glass in motion?

Test on two seconds before launching a long batch. Each engine has different signatures on the specular. Document the winner for the file. Do not change engine between two shots that must match in the edit. If no engine holds on the test, the hybrid workflow is the answer, not the tenth native attempt.

### Sunglasses outdoors?

A mirror equals hell. Dark gradient lenses partially mask the problem. Prefer slightly tinted lenses with no strong mirror, an angle where the reflected sky is consistent with the shot. Or remove the glasses for the dialogue shot and put them back in a product insert.

For shop windows and facades in fiction, reduce the visible glazed surface or shoot the scene as if the windows were dirty or off at night. The reflected city in long AI video is a narrative trap if you do not have the VFX budget. The writer often prefers a less exposed window to a window that lies.

<!-- PUBLICATION DATE: 2026-06-05 -->
