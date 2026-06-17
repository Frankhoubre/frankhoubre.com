---
title: "How to Frame an AI Image Like a Cinema Pro"
date: "2026-04-11"
dateModified: "2026-06-10"
category: "tutoriels"
excerpt: "Concrete framing methods to give your AI images a clear, cinematic visual reading."
---

You may have already experienced this. You generate an image that seems impressive to you. Then you show it to someone and the reaction is cold, "yes, it's pretty, but I do not understand what I am supposed to look at".

Framing is exactly that: telling the viewer where to look, in what order, and why.
Without this steering, even a technically clean image becomes confusing.

![Hero image, cinematic framing.](/images/blog/comment-cadrer-image-ia-comme-pro-cinema/hero.webp)


In this masterclass, you will learn a framing method designed for local generation, Flux, SDXL, ComfyUI, with clear decisions, concrete settings, and above all a narrative logic.

## Hook, the real beginner frustration

You spend 3 hours generating portraits.
You keep 12.
None of them cut together well.

Why? Because your frame has no reproducible intention. A tight shot with no gaze logic, then a wide shot with a different horizon, then an impossible angle, and your brain feels the cheat.

The audience does not say "the axis is wrong".
The audience says "it looks fake".

## Core concepts, the 8 basics that change everything

### 1) A single main subject

One shot, one priority. If the eye hesitates between three strong zones, your frame has failed.

### 2) A line of force

Each shot must contain a dominant direction, diagonal, horizontal, vertical, that pushes the eye.

### 3) Useful scale

Wide, medium, tight are not styles. They are narrative functions:
- wide to situate
- medium for action
- tight for emotion

### 4) Gaze space

Always leave air in front of the direction of the gaze or the movement, unless you deliberately want to create oppression.

### 5) Controlled horizon

An unintentionally unstable horizon gives an immediate amateur effect. Tilt only if you want to signal a mental or physical imbalance.

### 6) Depth in layers

Foreground, subject, background.
Three layers minimum, otherwise the image flattens.

### 7) Edge management

The edges of the frame tell as much as the center. A dirty edge, an object cut with no intention, and you lose the viewer's trust.

### 8) Inter-shot continuity

The framing of one shot prepares the next. It is the basis of a credible sequence.

To build this continuity in a complete scene, continue with [how to build a cinematic scene shot by shot](/en/blog/comment-construire-scene-cinematique-plan-par-plan). To decide how the subject occupies the frame without falling into decorative centering, cross-reference with [how to use the rule of thirds in AI generation](/en/blog/comment-utiliser-regle-des-tiers-generation-ia).

## Mandatory prompt template

```text
```

In `[SCENE DESCRIPTION]`, you must add precise framing information:
- shot type (wide, medium, close-up)
- subject position (left third, center low, upper third)
- gaze direction
- intended empty zone
- subject/background ratio

## 3 detailed beginner scenarios

### Scenario 1, subject centered everywhere

A real case. A beginner frames everything in the center because they are afraid of "missing". Over 15 images, the narrative stays flat.

Signs:
- everything seems symmetric
- no lateral tension
- no visual surprise

Fix:
1. Put the subject on the left third in the anticipation shots.
2. Keep the center for the moments of frontal confrontation.
3. Reserve the right third for the exit or isolation shots.

Effect: your edit breathes, the scene gains emotional nuances.

### Scenario 2, permanent spectacular angle

Another frequent case, everything is in a dramatic low angle or a stylized top shot.

Signs:
- fast visual fatigue
- generic commercial-clip impression
- loss of narrative anchoring

Fix:
1. Set a "neutral" reference height for 60 percent of the shots.
2. Use the extreme angles only at moments of rupture.
3. Check that each angle answers a narrative question.

### Scenario 3, neglected edges

The center is good, the edges are messy, cut hands, parasitic objects, vanishing lines.

Signs:
- a technically beautiful but "dirty" image
- a perception of a lack of finishing
- gazes that exit the frame

Fix:
1. Do a scan of the four edges before validation.
2. Remove or reframe the objects with no function.
3. Reinforce a readable guiding line toward the subject.

> **Pro insight**
> A good frame is judged in 2 seconds. If the eye does not find its way immediately, you have to simplify.

## Ultra-granular workflow, production-ready framing

### Step 1, write the shot's mission

Before any prompt, note one sentence:
"This shot must make you feel what."

Examples:
- "isolate the character"
- "show an off-frame threat"
- "anchor the place"

### Step 2, choose the useful scale

A quick decision:
- wide if you are setting the geography
- medium if you are showing an action
- close-up if you are seeking an emotional shift

Do not mix three goals in a single frame.

### Step 3, lay the reading grid

Define:
- the main focal point
- the secondary breathing point
- the gaze trajectory

### Step 4, lock the axis

If the sequence contains dialogue or interaction, set a main axis and respect it to avoid spatial confusion.

### Step 5, local generation settings

Recommended starting point for beginners:

| Parameter | Starting value | Practical adjustment |
| --- | --- | --- |
| Ratio | 16:9 | constant across the whole scene |
| Resolution | 1536x864 | raise if you need to reframe |
| Steps | 30 to 42 | increase if details are soft |
| CFG | 5 to 7 | lower if the render is too rigid |
| Seed | fixed per shot | change only for a variant |
| Denoise img2img | 0.28 to 0.42 | lower to preserve the composition |

### Step 6, generate 3 targeted variants max

No more:
1. a balanced version
2. a more tense version (less space)
3. a more breathing version (more emptiness)

You compare, you decide, you move on.

![Contextual image 1, frame diagrams.](/images/blog/comment-cadrer-image-ia-comme-pro-cinema/workflow-1.webp)


### Step 7, quick reading test

Show the image for 1 second to a person.
Ask "where did you look first".

If the answer does not match your intention, correct the frame before generating the rest.

### Step 8, sequence consistency

When you align the shots:
- keep a scale progression
- avoid unmotivated violent focal jumps
- keep a gaze-direction logic

### Step 9, cleanup pass

Final check:
- clean edges
- controlled horizon
- owned empty zone
- no parasitic element competing

To reinforce the lighting work in your frame, also use [how to describe light like a director of photography in a prompt](/en/blog/comment-decrire-lumiere-directeur-photo-prompt). If your frame is clean but the geometry stays confusing, go through [how to fix a bad visual composition](/en/blog/comment-corriger-mauvaise-composition-visuelle-ia) before multiplying the renders.

## Massive trench warfare, beginner mistakes and fixes

### 1) Automatic center

Mistake: subject centered by reflex.
Fix: center only when you want a frontal confrontation.

### 2) "Beautiful" but narratively empty shot

Mistake: priority to decorative aesthetics.
Fix: each shot must answer a clear mission.

### 3) Too much information in the frame

Mistake: overload of objects and textures.
Fix: remove any element that does not serve the action.

### 4) Forgetting the edges

Mistake: cut objects, truncated hands, parasitic lines.
Fix: edge-to-edge scan before validation.

### 5) No breathing

Mistake: subject stuck everywhere, no negative space.
Fix: reserve a useful empty zone.

### 6) Random angle variation

Mistake: high shot then low with no reason.
Fix: stable angle, variation only on a dramatic shift.

### 7) Inconsistent horizon

Mistake: unintentional tilt.
Fix: straight horizon unless an explicit intention.

### 8) Brutal focal change

Mistake: a collage feel.
Fix: a logical focal progression.

### 9) Identical framing across the whole scene

Mistake: monotony.
Fix: a wide-to-tight progression according to the emotional rise.

### 10) Ignoring the gaze direction

Mistake: immediate spatial confusion.
Fix: a simple gaze map before generating.

### 11) Validation only at zoom

Mistake: beautiful details but bad overall reading.
Fix: check at 100 percent zoom then the whole view.

### 12) Reframing in post to "save" a weak shot

Mistake: loss of quality and consistency.
Fix: correct at the source, in the prompt and the composition.

## Validation in editing

![Contextual image 2, checking frame readability in editing.](/images/blog/comment-cadrer-image-ia-comme-pro-cinema/workflow-2.webp)


## Complete practical case, a 30-second ad framed like a film

Let us take a simple case. An ad for an artisanal drink, end-of-day mood, a character alone in a workshop. Emotional goal: convey tiredness then relief.

### Proposed framing breakdown

Shot 1, a wide establishing shot, subject on the left third, workshop depth visible.
Shot 2, a medium action, a hand opening the bottle, subject still on the left third.
Shot 3, a tight insert, drops and texture, controlled center for impact.
Shot 4, a face close-up, gaze toward the right with empty space.
Shot 5, a medium of relaxation, subject slightly recentered.
Shot 6, a final wide, subject small in the frame for a breathing effect.

What is important here is the frame trajectory. We start with a lateral tension, we recenter on the key moment, then we reopen the space.

### Shot-by-shot control table

| Shot | Subject position | Emotional function | Frequent mistake | Fix |
| --- | --- | --- | --- | --- |
| 1 | left third | establish solitude | too much set | simplify the background |
| 2 | left third | prepare the action | unreadable hands | bring the camera closer |
| 3 | center | product impact | too many effects | keep the real material |
| 4 | upper left third | intimacy | gaze off axis | fix the gaze direction |
| 5 | soft center | release | visual flatness | add a foreground |
| 6 | subject small on a third | conclusion | too dramatic | stay sober |

### Mini validation protocol

Before exporting:
1. Watch the scene with no sound, is it readable.
2. Watch the scene at x2, the intention stays clear.
3. Watch the scene frame by frame, the edges are clean.
4. Check that there are not two competing focal points in a shot.

If a single step breaks, you correct the framing, not only the grading.

## 7-day training method

Day 1, study 20 film frames, note only the subject position and the gaze space.
Day 2, reproduce 5 frames in local AI without changing the style.
Day 3, do the same scene in 3 versions, centered, left third, right third.
Day 4, quick human test with 3 people.
Day 5, optimization of the weak shots with a single variable at a time.
Day 6, a mini edit of 20 to 30 seconds.
Day 7, a written critical review, what is readable, what is confusing, what sounds fake.

This plan is deliberately simple. It is exactly what lets you progress fast.

## Express debug, when a frame does not work

You look at a shot and you feel it does not work.
Do not touch ten parameters. Use this short protocol.

### Protocol in 5 questions

1. Where does the eye look first.
2. Is it the right zone.
3. Does the subject have air to look or move.
4. Do the edges tell the same story as the center.
5. Does this shot really prepare the next one.

If the answer "no" appears twice, the framing has to be redone.

### The most effective quick fixes

- reduce the density of the background
- shift the subject onto a useful third
- add a discreet foreground for depth
- realign the horizon and the lines of force
- remove the parasitic object that attracts more than the subject

### Recommended progression log

After each session, note:
- 1 repeated framing mistake
- 1 fix that really worked
- 1 test to do tomorrow

This ritual makes you progress faster than a new preset.

## Final checklist before client delivery

A last pass, fast, brutal:
- the shot tells an intention in 2 seconds
- the visual hierarchy is unambiguous
- the gaze direction prepares the next shot
- the edges contain no parasitic noise
- the shot scale serves the emotion of the moment
- the composition holds even read on mobile

If one of these points is not validated, it is not "almost ready". It is not ready.

A last set tip: print your framing shotlist and keep it visible during the whole session. When fatigue rises, the brain returns to automatisms. Your sheet brings you back to the intention.

## Core addendum

Framing is not decoration: it is a promise about what the viewer must discover first, then second. The reference entries on [visual composition](https://en.wikipedia.org/wiki/Composition_(visual_arts)) often remind us that a shot acts as a moral window as much as a spatial one: what you exclude from the frame speaks as much as what you include. For a broader technical and cultural base, the [BFI](https://www.bfi.org.uk/) collects analyses and reading contexts that help you avoid empty "Netflix look" citations with no structure. Finally, the publications of [theasc.com](https://theasc.com/) show how teams treat the writing of the frame as a series of lighting and geometric decisions, not as an aesthetic accident.

Your practical addendum for AI: set a shared frame vocabulary in your team (wide, medium, close, depth, axis), and impose a mission sentence before each prompt. The frame becomes reproducible when it is named, not when it is only felt afterward.

## Troubleshooting addendum

When a shot seems "almost good", start with the mobile test: if the hierarchy disappears on a small screen, your framing is too dependent on unreadable details. Then, check the eye line and the edges: a hand cut with no motif, a reflection too strong in a corner, or a floating horizon can ruin a theoretically balanced framing. If you correct with an aggressive reframe, you change the apparent focal length and you lose consistency with the next shot.

In local generation, separate the composition problems from the material problems. A more sober prompt on the texture sometimes restores the reading before you even retouch the subject placement. Document the "clean edge" version as a series reference: it is the one that defines your standard, not the most spectacular version of the day.

## Scenarios

**Fictional AI interview scenario.** You set the subject on a third, with gaze space on the opposite side, and a soft side light that sculpts the face without burning the background. The frequent mistake is a set too rich that steals the spot where the eyes are supposed to land first.

**Short chase sequence scenario.** You progress from the wide (geography) to the medium (action) to the tight (decision), keeping the running direction and the right-left axis constant. If you mix extreme angles with no motif, the narrative speed collapses even if each image is beautiful on its own.

**Premium packshot scenario.** You use a controlled center for the hero moment, but you surround that moment with shots on a third to tell the material, the context, and the hand manipulating the product. Without this alternation, the center becomes a habit, not a one-off shock.

## FAQ

### Is the rule of thirds enough to frame well

No, the rule-of-thirds grid is one tool among others, not an end in itself. It helps you get out of automatic centering and organize the attention, but complete framing also requires a correct shot scale, a clear line of force, edge management, and continuity with the neighboring shots. An image can follow the thirds and stay confusing if two zones compete, if the depth is absent, or if the gaze direction lies relative to the action. So you have to treat the rule of thirds as a calibration step: useful to stabilize the reading, then dissolved in finer choices according to the dramaturgy.

### Can I break the framing rules

Yes, and it is often necessary when you want unease, a rupture, or a strong subjectivity. The difference between a choice and a mistake is the readability of your intention: if the viewer understands that the instability belongs to the scene, you speak the language of cinema; if the instability looks like a line or horizon accident, you lose the trust. Before breaking, make sure your "clean" base holds on a control shot: it is that control that authorizes the transgression. Also note why you break in one sentence, otherwise you will not be able to reproduce the effect across the series.

### What is the difference between photo framing and sequence framing

A photo has to hold on its own, while a film shot also has to prepare the next one by keeping the geography, rhythm, and material credibility. In a sequence, you sometimes accept a less "heroic" shot because it clarifies the space or announces a camera movement. In editorial photography, you often optimize an instant of maximum impact without worrying about the next cut. In AI, mixing these two logics without knowing it produces brilliant but inconsistent images in the edit. So write on your shotlist whether the shot is autobiographical or relational: it changes the pressure on the framing.

### How do I know if I should go to a tight shot

Go tight when the main information becomes interior: hesitation, lie, decision, fear, contained desire. Stay wider when the information is spatial: where the obstacles are, what the geometry of the danger is, what the relationship is between several bodies or objects. If you go tight too early, you sacrifice the understanding; if you stay too wide too long, you dilute the emotion. A good landmark is the viewer's question: do they still need to map the scene, or are they starting to want to read a truth on the face.

### What is the mistake that looks the most fake

It is not a single bad shot, it is the inconsistency between successive shots: axis jumps, a gaze that does not find its space, a light that changes with no motif, focal whims that tell nothing. The human eye tolerates hyperrealism if the mental geography stays stable; it quickly rejects what looks like a montage of tests with no dramaturgy. In AI, this problem is aggravated because each render can be appealing in isolation. The discipline consists in refusing the pretty image that lies about the scene, even if it costs a lot in compute time.

### I am a beginner, where do I start today

Choose a short scene, write the mission of each shot before any prompt, then limit yourself to six takes maximum with the same constraints of ratio and dominant light. First validate the reading in two seconds, then the detail. Have an external person watch the edit and forbid yourself from explaining: if you have to defend your intention aloud, the framing is not at the level yet. Reduce the variables for a week: you will learn faster than by accumulating different styles every evening.

### Which article should I read next

Move on to [how to use the rule of thirds in AI generation](/en/blog/comment-utiliser-regle-des-tiers-generation-ia) to solidify your geometric decisions, then continue with [how to think like a director with AI](/en/blog/comment-penser-comme-realisateur-avec-ia) to connect framing, rhythm, and overall intention. If you are already working on a dialogue sequence, keep handy [how to choose the right camera angles in AI](/en/blog/comment-choisir-bons-angles-camera-ia) to align camera height and gaze dynamics.
