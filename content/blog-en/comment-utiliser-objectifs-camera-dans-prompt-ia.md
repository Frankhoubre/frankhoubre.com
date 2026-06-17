---
title: "How to Use Camera Lenses in an AI Prompt"
date: "2026-04-02"
dateModified: "2026-06-10"
category: "tutoriels"
excerpt: "Focal lengths, anamorphic, depth of field, and the classic face-compression mistakes."
thumbnail: "/images/blog/comment-utiliser-objectifs-camera-dans-prompt-ia/hero.webp"
---

The focal length is one of the most underestimated levers in an AI prompt.  
You can have a good light, a good texture, a good subject, but if the focal length is inconsistent with the frame, your image will look artificial.

Most beginners write "cinematic lens" hoping for a miracle.  
It is not enough.  
You must describe a geometry, not a vague intention.

![Hero image, choosing camera lenses in a prompt.](/images/blog/comment-utiliser-objectifs-camera-dans-prompt-ia/hero.webp)


## Why the focal length changes everything

The focal length influences:
- perspective
- face deformation
- subject/background separation
- "docu" or "cinema" feeling

When this choice is fuzzy, the model improvises. And improvisation often ends in a fake render.

To anchor these decisions in a coherent image, combine this guide with [how to describe light like a director of photography in a prompt](/en/blog/comment-decrire-lumiere-directeur-photo-prompt), because focal length and light must tell the same scene.

## 3 beginner scenarios, and the direct fix

### Scenario 1, faces deformed in a close shot
Cause: wide-angle too close to the face.  
Fix: switch to 50mm or 85mm, pull the camera back.

### Scenario 2, impossible wide shot with a long focal length
Cause: contradiction between 85mm and "wide establishing shot".  
Fix: 24-35mm for the establishment, then 50-85mm for the portraits.

### Scenario 3, inconsistent depth of field
Cause: focal lengths and distances not described.  
Fix: add the subject-camera and subject-background distance.

## Practical focal length table

| Focal length | Main use | Risk if badly used |
| --- | --- | --- |
| 24mm | establish a place, space dynamic | face deformation |
| 35mm | versatile shot, interior, docu cine | elongated hands if too close |
| 50mm | natural portrait, stable render | can seem "flat" with no light |
| 85mm | close-ups and background separation | contradiction on wide shots |

## Strict template to keep

```text
```

In `[SCENE DESCRIPTION]`, add:
- focal length
- camera height
- shot type
- approximate distance

## Pro workflow, focal lengths in 6 steps

1. Choose the role of the shot (establish, follow, isolate).  
2. Choose the focal length compatible with this role.  
3. Define the camera height (eye-level, low, high).  
4. Define the subject-camera distance.  
5. Define the subject-background distance for the bokeh.  
6. Check the consistency with light and movement.

## Usable examples

### Natural narrative shot 35mm

```text
```

### Emotion portrait 85mm

```text
```

When you want to reinforce the anamorphic aspect without falling into the artificial flare, the detailed logic is in [how to simulate an anamorphic lens in AI generation](/en/blog/comment-simuler-objectif-anamorphique-generation-ia).

![Contextual image 1, comparison 24mm 35mm 50mm 85mm.](/images/blog/comment-utiliser-objectifs-camera-dans-prompt-ia/workflow-1.webp)


## Immediate application

Take a current prompt and run the same shot in 24mm, 35mm, 50mm, then compare only the perspective and the readability. What to observe:
- how the framing influences the perception of a scene
- how a precise preparation avoids shooting mistakes
- how the choice of angle and scale guides the attention

## Trench warfare, frequent mistakes

- **Putting several focal lengths in the same prompt**: a single focal length per image.
- **Long focal length on a wide shot**: a structural contradiction.
- **Wide-angle on a close face**: deformation almost guaranteed.
- **Anamorphic everywhere**: a too-visible marker effect if not motivated.
- **No distance indicated**: bokeh and perspective become random.
- **Changing focal length + light + subject at the same time**: impossible to diagnose.
- **Not thinking about the final ratio**: in vertical, the focal length perception changes fast.
- **Believing that the focal length is enough**: it works with the light, the movement, the composition.

To fix the prompts that become artificial because of a bad style/focal-length mix, also reconnect with [the prompt mistakes that make an AI image look artificial](/en/blog/erreurs-prompt-qui-rendent-image-ia-artificielle).

> **Set insight**  
> A well-chosen focal length simplifies the rest of the pipeline.

![Contextual image 2, geometry and depth check at the edit.](/images/blog/comment-utiliser-objectifs-camera-dans-prompt-ia/workflow-2.webp)


## QA checklist before validation

- single focal length consistent with the shot
- explicit subject-camera distance
- explicit subject-background distance
- no obvious face deformation
- focal length consistency between linked shots
- optical render compatible with the intention

## FAQ

### Which focal length to choose when starting?
35mm or 50mm, it is the most stable zone. In practice, treat this decision as a narrative parameter, not as a simple technical setting, otherwise the render quickly becomes inconsistent from one shot to the next. The most reliable method consists of testing two close variants with the same conditions (seed, light, framing), then keeping the one that stays readable after several reviews. If you hesitate, favor the global consistency of the sequence and document your choice, because that is what gives a credible result over time.

### Why does my 24mm look "fake"?
Often because the subject is too close and the face is deformed. The main reason is that the model fills the ambiguous zones with approximations, which creates visible inconsistencies when the scene becomes complex. The most reliable method consists of testing two close variants with the same conditions (seed, light, framing), then keeping the one that stays readable after several reviews. If you hesitate, favor the global consistency of the sequence and document your choice, because that is what gives a credible result over time.

### Is the 85mm always more cinematic?
No, only if the shot and the distance justify it. In practice, treat this decision as a narrative parameter, not as a simple technical setting, otherwise the render quickly becomes inconsistent from one shot to the next. The most reliable method consists of testing two close variants with the same conditions (seed, light, framing), then keeping the one that stays readable after several reviews. If you hesitate, favor the global consistency of the sequence and document your choice, because that is what gives a credible result over time.

### Should I mention "full frame"?
Optional, useful if you want to lock a precise interpretation. The right answer depends above all on the scene intention and the consistency between the shots, not on an absolute rule applied everywhere. The most reliable method consists of testing two close variants with the same conditions (seed, light, framing), then keeping the one that stays readable after several reviews. If you hesitate, favor the global consistency of the sequence and document your choice, because that is what gives a credible result over time.

### Should I describe the aperture?
Yes if you want to control the depth, otherwise the model improvises. The right answer depends above all on the scene intention and the consistency between the shots, not on an absolute rule applied everywhere. The most reliable method consists of testing two close variants with the same conditions (seed, light, framing), then keeping the one that stays readable after several reviews. If you hesitate, favor the global consistency of the sequence and document your choice, because that is what gives a credible result over time.

### Anamorphic or spherical to start?
Spherical is often simpler to learn the consistency. In practice, treat this decision as a narrative parameter, not as a simple technical setting, otherwise the render quickly becomes inconsistent from one shot to the next. The most reliable method consists of testing two close variants with the same conditions (seed, light, framing), then keeping the one that stays readable after several reviews. If you hesitate, favor the global consistency of the sequence and document your choice, because that is what gives a credible result over time.

### How to test several focal lengths fast?
Identical prompt, only the focal length changes, then an objective comparison. Start with a simple and stable version, then add a single constraint at a time to see clearly what improves or worsens the result. The most reliable method consists of testing two close variants with the same conditions (seed, light, framing), then keeping the one that stays readable after several reviews. If you hesitate, favor the global consistency of the sequence and document your choice, because that is what gives a credible result over time.

### How to avoid monstrous hands?
Longer focal length, more cautious framing, hands partially off-frame if needed. Start with a simple and stable version, then add a single constraint at a time to see clearly what improves or worsens the result. The most reliable method consists of testing two close variants with the same conditions (seed, light, framing), then keeping the one that stays readable after several reviews. If you hesitate, favor the global consistency of the sequence and document your choice, because that is what gives a credible result over time.

## Advanced block, focal length and narration

The focal length does not only serve to "make it pretty".  
It carries the emotion.

A 24mm can give a feeling of spatial tension.  
A 50mm can give a human closeness.  
An 85mm can isolate a dramatic decision.

> **Pro insight**  
> Choose the focal length according to the intention of the shot, not according to the buzzword.

## Focal length test protocol

1. Same scene, same light, same subject.  
2. Three renders, 24, 35, 50mm.  
3. Compare perspective, face, background.  
4. Lock the reference focal length for the sequence.

## Advanced table, focal length and intention

| Intention | Focal length | Risk | Correction |
| --- | --- | --- | --- |
| Isolation | 85mm | background too flat | increase background distance |
| Immersion | 24-35mm | face deformation | move the camera away |
| Dialogue | 35-50mm | neutral render | reinforce the light axis |
| Tension | 50mm | lack of relief | play on the camera angle |

## Complementary trench warfare

### 11) Mixing several focal lengths in a single prompt
Fix: one focal length per shot.

### 12) Focal length/framing contradiction
Fix: wide in a short focal length, emotion in a medium/long focal length.

### 13) Forgetting the distances
Fix: specify subject-camera and subject-background.

### 14) Changing focal length with no narrative reason
Fix: only use the change in an owned rupture.

### 15) Depending on the word "cinematic lens"
Fix: indicate the value and the context, not only a label.

### 16) Ignoring the final ratio
Fix: validate in 16:9 and 9:16 depending on the distribution.

### 17) Macro used by default
Fix: keep macro for object inserts.

### 18) Long focal length and too-aggressive tracking shot
Fix: reduce the movement or come back to a medium focal length.

## Additional FAQ

### 35 or 50 to start?
35 for versatility, 50 for a stable portrait. In practice, treat this decision as a narrative parameter, not as a simple technical setting, otherwise the render quickly becomes inconsistent from one shot to the next. The most reliable method consists of testing two close variants with the same conditions (seed, light, framing), then keeping the one that stays readable after several reviews. If you hesitate, favor the global consistency of the sequence and document your choice, because that is what gives a credible result over time.

### Is the focal length enough for a cinema render?
No, it must align with light, frame and story. In practice, treat this decision as a narrative parameter, not as a simple technical setting, otherwise the render quickly becomes inconsistent from one shot to the next. The most reliable method consists of testing two close variants with the same conditions (seed, light, framing), then keeping the one that stays readable after several reviews. If you hesitate, favor the global consistency of the sequence and document your choice, because that is what gives a credible result over time.

### Should I indicate the camera axis?
Yes, it strongly improves the consistency. The right answer depends above all on the scene intention and the consistency between the shots, not on an absolute rule applied everywhere. The most reliable method consists of testing two close variants with the same conditions (seed, light, framing), then keeping the one that stays readable after several reviews. If you hesitate, favor the global consistency of the sequence and document your choice, because that is what gives a credible result over time.

### Can you keep the same focal length for the whole film?
Yes, it is even a very good consistency base. In practice, treat this decision as a narrative parameter, not as a simple technical setting, otherwise the render quickly becomes inconsistent from one shot to the next. The most reliable method consists of testing two close variants with the same conditions (seed, light, framing), then keeping the one that stays readable after several reviews. If you hesitate, favor the global consistency of the sequence and document your choice, because that is what gives a credible result over time.

## Advanced workshop, focal lengths per sequence

For a 4-shot sequence, you can use this progression:
- shot 1 establishment: 35mm
- shot 2 action: 50mm
- shot 3 emotion: 85mm
- shot 4 consequence: 50mm

You keep the consistency and you make the perception progress.

### Operational example

Scene:
- bus stop at night
- character hesitates
- decision to leave

Rules:
- stable angle
- stable light
- motivated focal length variation

Effect:
- readable wide shot
- more intense emotion at the close-up
- stable return on the consequence

> **Pro insight**  
> The focal length variation must serve a narrative progression, never a gratuitous effect.

## Additional troubleshooting block

### 21) Subject too "flat" in 50mm
Fix: increase the depth of the set and the local contrast.

### 22) Inconsistent bokeh
Fix: specify the subject-background distance.

### 23) Strange perspective in 35mm
Fix: pull the camera back, keep the same frame.

### 24) Unwanted "fish-eye" impression
Fix: avoid too-short focal lengths in portrait.

### 25) Inconsistency between successive shots
Fix: focal length sheet per shot in the shotlist.

### 26) Too much compression in 85mm
Fix: add background space.

### 27) Difficulty in vertical format
Fix: adapt the frame and the focal length to 9:16 from the generation.

### 28) Invisibly useless focal length change
Fix: come back to the baseline focal length and judge objectively.

### 29) "Smooth advertising" look
Fix: reduce sharpness + material texture.

### 30) Non-reproducible pipeline
Fix: document prompt/focal length/seed systematically.

## Complementary FAQ 2

### Which focal length combo for a credible interview?
35mm for context, 50mm for the main speech. In practice, treat this decision as a narrative parameter, not as a simple technical setting, otherwise the render quickly becomes inconsistent from one shot to the next. The most reliable method consists of testing two close variants with the same conditions (seed, light, framing), then keeping the one that stays readable after several reviews. If you hesitate, favor the global consistency of the sequence and document your choice, because that is what gives a credible result over time.

### Can you do 85mm in a small interior?
Yes, if you adapt the distance and the frame. In practice, treat this decision as a narrative parameter, not as a simple technical setting, otherwise the render quickly becomes inconsistent from one shot to the next. The most reliable method consists of testing two close variants with the same conditions (seed, light, framing), then keeping the one that stays readable after several reviews. If you hesitate, favor the global consistency of the sequence and document your choice, because that is what gives a credible result over time.

### Why do my shots seem "with no depth"?
Insufficient background distance or too-flat light. The main reason is that the model fills the ambiguous zones with approximations, which creates visible inconsistencies when the scene becomes complex. The most reliable method consists of testing two close variants with the same conditions (seed, light, framing), then keeping the one that stays readable after several reviews. If you hesitate, favor the global consistency of the sequence and document your choice, because that is what gives a credible result over time.

### How to train a team on this subject?
Comparative tests 24-35-50 on an identical scene. Start with a simple and stable version, then add a single constraint at a time to see clearly what improves or worsens the result. The most reliable method consists of testing two close variants with the same conditions (seed, light, framing), then keeping the one that stays readable after several reviews. If you hesitate, favor the global consistency of the sequence and document your choice, because that is what gives a credible result over time.

## Production appendix, focal length consistency across projects

When you work in a series, the consistency becomes an enormous advantage.  
You must be able to relaunch a shot three weeks later without breaking the style.

Create a "focal length bible" document with:
- base focal length per shot type
- authorized exceptions
- target distribution ratio
- camera angle landmarks

Then, each new shot is validated against this bible.

> **Pro insight**  
> A consistent focal length gives a project identity, like a visual signature.

## Focal length QA, final checklist

- focal length justified by the intention
- explicit subject-camera distance
- explicit subject-background distance
- consistent camera angle
- focal length match between neighboring shots
- 16:9 and 9:16 validation if necessary

If two points are red, regeneration.

## Complementary FAQ 3

### Can you standardize the focal lengths across a whole team?
Yes, and it is even recommended for the consistency. In practice, treat this decision as a narrative parameter, not as a simple technical setting, otherwise the render quickly becomes inconsistent from one shot to the next. The most reliable method consists of testing two close variants with the same conditions (seed, light, framing), then keeping the one that stays readable after several reviews. If you hesitate, favor the global consistency of the sequence and document your choice, because that is what gives a credible result over time.

### Which mistake costs the most in post?
The focal length/framing contradiction. In practice, treat this decision as a narrative parameter, not as a simple technical setting, otherwise the render quickly becomes inconsistent from one shot to the next. The most reliable method consists of testing two close variants with the same conditions (seed, light, framing), then keeping the one that stays readable after several reviews. If you hesitate, favor the global consistency of the sequence and document your choice, because that is what gives a credible result over time.

### How to keep a cinema render without overloading the prompt?
Use a clear focal length, a clear angle, a clear light. Start with a simple and stable version, then add a single constraint at a time to see clearly what improves or worsens the result. The most reliable method consists of testing two close variants with the same conditions (seed, light, framing), then keeping the one that stays readable after several reviews. If you hesitate, favor the global consistency of the sequence and document your choice, because that is what gives a credible result over time.

### The biggest beginner gain?
Moving from the vague "cinematic lens" to an explicitly chosen focal length. In practice, treat this decision as a narrative parameter, not as a simple technical setting, otherwise the render quickly becomes inconsistent from one shot to the next. The most reliable method consists of testing two close variants with the same conditions (seed, light, framing), then keeping the one that stays readable after several reviews. If you hesitate, favor the global consistency of the sequence and document your choice, because that is what gives a credible result over time.

## Operational extension, weekly production method

Typical week:
- Monday, focal length tests 24/35/50 on a fixed scene
- Tuesday, focal length + angle tests
- Wednesday, focal length + light tests
- Thursday, comparative edit
- Friday, validation of a project focal length charter

You accumulate solid decisions.

### Recommended logbook

For each test:
- date
- scene
- focal length
- angle
- subject distance
- background distance
- perceived result

After 3 weeks, you see very clear patterns.

> **Pro insight**  
> The focal length becomes a narration reflex when you document it methodically.

## Additional expert troubleshooting

### 41) Matched shots but a feeling of rupture
Fix: check the angle difference before blaming the focal length.

### 42) Involuntary "compressed" set
Fix: reduce the focal length or increase the set depth.

### 43) Subject too dominant in a wide shot
Fix: pull the camera back and rebalance the composition.

### 44) Inconsistent perspective between shots/reverse shots
Fix: keep a close focal length and a consistent axis.

### 45) Too "flat social" render
Fix: directional light + narrative focal length.

### 46) Subject deformed in movement
Fix: reduce the camera amplitude with a short focal length.

### 47) Natural face but fake background
Fix: rework the distance and the material of the background.

### 48) Too much scale variation
Fix: establish a stable focal length progression.

### 49) Aggressive vertical framing on a face
Fix: switch to a longer focal length or reframe.

### 50) Difficulty explaining the choices to a client
Fix: show a visual focal length comparison on the same shot.

## Final FAQ

### Which focal length for a product + human ad?
Often 35 for context, 50 for use, 85 for emotion. In practice, treat this decision as a narrative parameter, not as a simple technical setting, otherwise the render quickly becomes inconsistent from one shot to the next. The most reliable method consists of testing two close variants with the same conditions (seed, light, framing), then keeping the one that stays readable after several reviews. If you hesitate, favor the global consistency of the sequence and document your choice, because that is what gives a credible result over time.

### Can you totally avoid the 24mm?
No, it is useful to establish the space, but with caution. In practice, treat this decision as a narrative parameter, not as a simple technical setting, otherwise the render quickly becomes inconsistent from one shot to the next. The most reliable method consists of testing two close variants with the same conditions (seed, light, framing), then keeping the one that stays readable after several reviews. If you hesitate, favor the global consistency of the sequence and document your choice, because that is what gives a credible result over time.

### How to know a focal length is "fake"?
When the perception of the subject contradicts the intention of the shot. Start with a simple and stable version, then add a single constraint at a time to see clearly what improves or worsens the result. The most reliable method consists of testing two close variants with the same conditions (seed, light, framing), then keeping the one that stays readable after several reviews. If you hesitate, favor the global consistency of the sequence and document your choice, because that is what gives a credible result over time.

### How many focal lengths max per scene?
Two or three well-justified ones are enough. This figure is a reliable starting point, but adjust it according to the type of movement, the density of the frame and the expected level of realism. The most reliable method consists of testing two close variants with the same conditions (seed, light, framing), then keeping the one that stays readable after several reviews. If you hesitate, favor the global consistency of the sequence and document your choice, because that is what gives a credible result over time.

### Which reflex keeps the global consistency?
Always check focal length + angle + light together. In practice, treat this decision as a narrative parameter, not as a simple technical setting, otherwise the render quickly becomes inconsistent from one shot to the next. The most reliable method consists of testing two close variants with the same conditions (seed, light, framing), then keeping the one that stays readable after several reviews. If you hesitate, favor the global consistency of the sequence and document your choice, because that is what gives a credible result over time.

### How to decide fast in AI shooting when you hesitate?
Come back to the narrative question, what this shot must make you feel, then choose the simplest focal length that serves this emotion. Start with a simple and stable version, then add a single constraint at a time to see clearly what improves or worsens the result. The most reliable method consists of testing two close variants with the same conditions (seed, light, framing), then keeping the one that stays readable after several reviews. If you hesitate, favor the global consistency of the sequence and document your choice, because that is what gives a credible result over time.

### Should I adapt the focal length to the skin type and the makeup?
Indirectly yes, some focal lengths and distances accentuate shiny textures too much, you must balance with the light. The right answer depends above all on the scene intention and the consistency between the shots, not on an absolute rule applied everywhere. The most reliable method consists of testing two close variants with the same conditions (seed, light, framing), then keeping the one that stays readable after several reviews. If you hesitate, favor the global consistency of the sequence and document your choice, because that is what gives a credible result over time.

### Does the same focal length prompt work on all the models?
No, but the logic stays stable, that is the strength of this method. In practice, treat this decision as a narrative parameter, not as a simple technical setting, otherwise the render quickly becomes inconsistent from one shot to the next. The most reliable method consists of testing two close variants with the same conditions (seed, light, framing), then keeping the one that stays readable after several reviews. If you hesitate, favor the global consistency of the sequence and document your choice, because that is what gives a credible result over time.

### What is the best mastery indicator?
When you can explain in 10 seconds why each focal length is in its place in the sequence. This clarity creates trust, for you, for your team, and for the client who validates the final render. And it lets you repeat a consistent visual style over complete series, with no chance. In practice, treat this decision as a narrative parameter, not as a simple technical setting, otherwise the render quickly becomes inconsistent from one shot to the next. The most reliable method consists of testing two close variants with the same conditions (seed, light, framing), then keeping the one that stays readable after several reviews. If you hesitate, favor the global consistency of the sequence and document your choice, because that is what gives a credible result over time.
