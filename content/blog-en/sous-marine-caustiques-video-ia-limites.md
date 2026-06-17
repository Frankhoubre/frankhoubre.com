---
title: "Underwater Shots: Caustics, Limits and AI Workarounds"
date: "2026-07-11"
category: "tutoriels"
excerpt: "What the engines hold underwater, when to prefer hybrid compositing, and a validation workflow."
thumbnail: "/images/blog/sous-marine-caustiques-video-ia-limites/hero.webp"
---

The underwater is one of the most seductive settings in AI video, and one of the most merciless. Water imposes a complex optical physics: scattering, absorption, particles, [caustics](https://en.wikipedia.org/wiki/Caustic_(optics)), buoyancy, distortion. If a single one of these elements is inconsistent, the image loses its anchor.

Many creators try to get everything in a single prompt: character, realistic water, fauna, dynamic caustics, moving camera. It is the recipe for the fake. In production, solid underwater shots are built in layers and in owned compromises.

This guide gives you the pragmatic method: what the engines know how to do, what to work around, and when to switch to hybrid compositing.

![Underwater scene with credible caustics and mastered blue depth](/images/blog/sous-marine-caustiques-video-ia-limites/hero.webp)

## Why the underwater breaks so fast

Three major constraints:

1. **Complex volumetric optics**  
   Water is not blue air. It filters and scatters differently according to depth.

2. **Multi-scale movement**  
   Subject, particles, hair, fabrics, bubbles, background: everything moves at different rhythms.

3. **Demanding caustics**  
   The light patterns must be consistent with the surface and the light angle.

With no strict hierarchy, you get a synthetic aquarium scene.

## What the AI engines hold well today

- short atmospheric shots;
- silhouettes in semi-backlight;
- fine particles in soft movement;
- discreet caustics on simple settings.

## What they hold badly

- complex physical interactions between characters;
- long close-ups with detailed floating hair;
- fast camera-axis changes;
- very contrasted caustics on multiple surfaces;
- dense fauna + complex setting + main subject.

Knowing these limits avoids losing a day.

## Underwater brief in production: 9 decisions

- perceived depth (shallow, medium, deep);
- water clarity;
- main light source;
- particle level;
- presence or not of bubbles;
- type of subject (human, object, animal);
- camera movement speed;
- color dominant;
- possible hybrid strategy.

If you skip this step, the engine improvises an inconsistent universe.

## Caustics: how to make them credible

Realistic caustics are subtle. The trap is to render them too strong.

Rules:

- moderate intensity;
- consistent direction;
- slow movement;
- localized application.

Example of formulation:

```text
subtle underwater caustic light patterns on rocks and suit, soft shifting, no harsh strobe
```

The caustics must never steal the shot.

## Recommended workflow in 6 steps

### Step 1: fixed pilot

Validate:

- subject silhouette;
- visual depth;
- credible palette.

### Step 2: short animation

3 to 4 seconds, light movement.

### Step 3: technical sorting

Reject the shots with:

- anatomical distortion;
- inconsistent particles;
- flickering caustics.

### Step 4: local correction

- reduce the caustics contrast;
- stabilize the subject contour;
- balance the particle density.

### Step 5: hybrid compositing if needed

Add separate elements:

- bubbles;
- particles;
- discreet underwater flare.

### Step 6: final harmonization

Global grade + mobile test + client validation.

## When to switch to hybrid

Switch to hybrid if:

- you have to hold a long shot;
- the subject is complex;
- the scene requires a lot of interactions;
- the caustics become inconsistent.

Hybrid does not mean cheating. It means control.

## Underwater QA table

| Criterion | Question | Verdict |
| --- | --- | --- |
| Depth | Is the distance readable? | OK/Reject |
| Caustics | Consistent and not aggressive? | OK/Reject |
| Particles | Natural movement? | OK/Reject |
| Subject | Stable anatomy? | OK/Reject |
| Palette | Credible water tint? | OK/Reject |
| Continuity | Match with other shots? | OK/Reject |

## Practical case 1: diver exploring a wreck

Goal: mystery with no fake sensation.

Initial failure:

- strobing caustics;
- too-big bubbles;
- suit that undulates.

Correction:

- reduction of the caustics intensity;
- bubbles added in compositing;
- shot shortened to 3 seconds.

Result: a calmer shot, much more credible.

## Practical case 2: cosmetic product underwater

Goal: luxury, purity, sensuality.

Approach:

- clear water;
- slow movement;
- soft reflections;
- simplified background.

The product must stay readable. The atmosphere comes second.

## Practical case 3: stylized marine creature

Risk: too many elements at the same time.

Fix:

- creature in partial silhouette;
- weak caustics;
- marked depth;
- discreet immersive sound.

We suggest more than we show.

## Underwater grading with no cliché

Classic mistake: passing everything in uniform cyan.

Method:

1. balance the luminance;
2. keep the blue/green nuances;
3. protect the subject's neutral tones;
4. dose the desaturation;
5. add fine grain.

Real water is not a single filter.

## Immersion sound design

The sound helps sell the liquid material:

- light muffling;
- discreet bubbles;
- subtle low resonance;
- absence of dry terrestrial noise.

With no sound work, even a beautiful shot stays flat.

## Client management and owned limits

Explain from the start:

- what will be 100% generated;
- what will go through compositing;
- what is risky in a long shot.

This transparency avoids the unrealistic feedback.

## Final checklist

- subject anatomically stable;
- credible caustics;
- consistent particles;
- readable depth;
- mastered palette;
- immersive sound;
- mobile test validated.

## FAQ

**Why do my caustics look fake?**  
Often because they are too strong and too fast. Slow the movement and lower the contrast.

**Should you avoid long underwater shots?**  
At the start, yes. The short shots are more stable and simpler to edit.

**How to keep credible hair underwater?**  
Avoid the long close-ups and favor soft movements with a partial silhouette.

**Is hybrid compositing mandatory?**  
Not always, but it becomes very useful as soon as the scene becomes complex.

**Why does everything become uniform blue?**  
Lack of nuances and light hierarchy. The water must keep variations.

**What is the first rejection signal?**  
The floating anatomy of the subject, especially at the shoulders and arms.

A successful underwater shot is not the one that shows the most. It is the one that makes credible the sensation of being underwater, with technical limits intelligently managed.

## Advanced workshop: surface, half immersion, transitions

The surface/underwater transitions are very risky. In AI, they often generate brutal distortions. Robust solution:

- separate into two shots;
- make a cut on sound or movement;
- recreate the continuity in the edit.

The viewer accepts the cut if the rhythm is good. They do not accept an optically false transition.

## Particle management by depth

The particles do not behave the same according to perceived depth:

- shallow depth: more details and contrast;
- medium depth: moderate density;
- great depth: fine particles, less visible.

Adapting this logic reinforces the credibility.

## Pro delivery pipeline

Prepare three outputs:

- horizontal master;
- vertical adaptation;
- short teaser version.

On each output, revalidate:

- subject readability;
- caustics level;
- contour stability.

A shot stable in 16:9 can break in 9:16 if the subject fills the frame too much.

## Complementary FAQ

**How to avoid the too-clean aquarium effect?**  
Add slight controlled imperfections: fine particles, contrast variation, moderate camera movement.

**Can you integrate real filmed elements?**  
Yes, it is often the best option for bubbles or complex particles. The hybrid increases the credibility.

**What to do if the diver's suit changes texture?**  
Shorten the shot, limit the rotations and stabilize the lighting. If needed, recut into two shots.

**Should the sound be realistic or stylized?**  
Both are possible, but the base must stay immersive and consistent with the density of the scene.

## Defining an underwater visual grammar

Before generating, decide the grammar of your universe:

- naturalist;
- stylized;
- documentary hybrid.

### Naturalist

Contained palette, fine particles, realistic movements.

### Stylized

More marked palette, more graphic silhouettes, owned caustics.

### Documentary hybrid

Realistic base with discreet artistic accents.

With no this decision, you mix incompatible codes.

## Perceived depth: how to sell it

Underwater, the depth reads through:

- loss of contrast;
- loss of saturation;
- light scattering;
- particle density.

If your background is as sharp and saturated as the foreground, the scene looks flat and fake.

## Water surface: implicit or explicit presence

You are not obliged to show the surface permanently, but its logic must exist.

Useful cues:

- caustics direction;
- shadow orientation;
- vertical light gradation.

Even with no visible surface, the viewer must feel where "up" is.

## Bubble management with no aquarium effect

The bubbles are efficient but dangerous.

Rules:

- varied sizes;
- non-uniform trajectories;
- moderate density;
- behavior linked to the subject.

Too many bubbles = cheap decorative effect.

## Human subject underwater: anatomy and movement

The body underwater does not move like in open air.

To watch:

- arm speed;
- leg inertia;
- torso buoyancy;
- hair/water relationship.

A too-dry movement is immediately rejected.

## Costumes, fabrics and accessories

The underwater textiles quickly cause problems:

- inconsistent folds;
- rigid floating;
- textures that mutate.

Tips:

- choose simple fabrics;
- limit floating accessories;
- favor clear silhouettes.

The more complex the outfit, the more the stability drops.

## Underwater lighting by scenario

### Shallow dawn

- soft descending light;
- light caustics;
- moderate turquoise palette.

### Clear midday

- stronger intensity;
- more readable contrasts;
- watch the burned highs.

### Dark depth

- very localized light;
- controlled contrast;
- more discreet particles.

The scenario choice guides all the rest.

## Editing pipeline to mask the limits

Do not try to prove that everything comes from a single shot.

Smart cutting:

- wide atmosphere shot;
- subject shot;
- detail insert;
- reaction shot.

The edit gives narrative continuity and hides the technical fragilities.

## Advanced underwater color grading

Treat in three blocks:

1. global luminance;
2. water dominant;
3. subject material.

Only then:

- accents;
- grain;
- final look.

If you stylize too early, you lose the physics of the shot.

## Immersive sound: recommended architecture

Layer 1:

- global aquatic noise.

Layer 2:

- breathing or bubbles linked to the subject.

Layer 3:

- light dramatic accent according to the narration.

This architecture keeps immersion with no over-design.

## Hybrid compositing: simple roadmap

When to switch to hybrid:

- unstable caustics;
- inconsistent bubbles;
- fragile subject contours.

Roadmap:

1. stabilize the base;
2. add particles in a layer;
3. add separate bubbles;
4. harmonize the color;
5. check the global movement.

You better control each component.

## Advanced case: product object underwater

The products require brand readability.

Approach:

- simplified background;
- slow rotation;
- mastered reflections;
- little-exposed labels.

Better a credible partial readability than a mutating text.

## Advanced case: secondary fauna

Adding fish or living elements:

- stays in the background;
- few individuals;
- simple trajectories.

A too-dense fauna draws the eye onto the defects.

## Credibility QA in real conditions

Test your shot:

- with no sound;
- with sound;
- on mobile;
- on a big screen.

The shot must hold in all the contexts.

## Structured client validation

Ask for three scores:

- immersion;
- subject readability;
- visual consistency.

Then an open question: "which element breaks the underwater sensation?"

You get usable feedback.

## Complementary FAQ 2

**How to avoid the "swimming pool" effect?**  
Reduce the excessive clarity, add a particle variation and a depth gradation.

**Should you always use caustics?**  
No. In some deep scenes, weak or absent caustics are more credible.

**How to treat an underwater face?**  
Short shots, soft movement, and simple light. The long close-ups are riskier.

**Can you do a fast action scene underwater?**  
Possible, but prefer to suggest the speed in the edit rather than execute it in a single shot.

**What is the main color trap?**  
Uniformizing the whole scene in cyan with no depth nuances.

**How to keep the continuity between several shots?**  
Fix a reference shot, align all the others on it before the final stylization.

## Final workshop: operational checklist before publication

Before delivery:

1. check the subject anatomy;
2. check the light direction;
3. check the particle density;
4. check the caustics stability;
5. check the mobile readability;
6. validate the sonic atmosphere.

If the six points pass, your scene is ready.

The credible AI underwater comes from modest and precise choices. It is not the quantity of effects that convinces, it is the consistency of sensation.

## Extension: face readability under mask and respirator

The diving equipment can help the credibility because it masks certain fragile zones, but it creates other constraints:

- reflections on the mask;
- simulated condensation;
- face-contour distortion.

Tips:

- slightly angled view;
- controlled reflections;
- short duration;
- consistent breathing sound.

The mask must reinforce the immersion, not become a central artifact.

## Shot transitions in an underwater scene

To keep the continuity:

- cut on the subject's movement;
- keep a consistent light direction;
- maintain a similar particle density;
- use a discreet sound bridge.

These simple transitions give a feeling of fluidity without requiring impossible shots.

## Complementary FAQ 3

**How to avoid the bubbles looking like sprites?**  
Lower their density, vary the sizes, and link their appearance to a precise action of the subject.

**Should you show the fauna in the foreground?**  
Rarely at the start. Keep the fauna secondary as long as the subject/water base is not perfectly stable.

**How to handle a metallic product shot underwater?**  
Strict control of the reflections and the highs. The metal amplifies the light inconsistencies.

**Can you simulate extreme depths?**  
Yes, but with fewer visible elements and a more contained contrast. Too much detail at great depth looks fake.

## Final delivery check

Before delivering, check:

1. global optical consistency;
2. subject contour stability;
3. non-aggressive caustics;
4. sonic immersion;
5. mobile readability.

If these five points hold, your underwater shot is ready for a serious distribution.

## Final block: visual-mission consistency

On underwater projects, the global consistency comes through a clear visual mission. You must be able to summarize the scene in one sentence:

- calm exploration;
- dramatic tension;
- poetic contemplation;
- product demonstration.

This sentence guides all the decisions of density, light, movement, sound.

If you do not have this sentence, you multiply the contradictory effects.

## Table of drifts to watch on long sequences

| Drift | Symptom | Action |
| --- | --- | --- |
| Excessive caustics | aggressive shimmer | reduce intensity and speed |
| Uniform palette | everything becomes flat cyan | reintroduce depth nuances |
| Floating subject | absence of anchor | reinforce local shadow/particles |
| Artificial bubbles | visible repetitions | vary sizes and density |

This table can be used in a fast team review.

## Last check before delivery

Do a complete reading with no pause, then a technical reading:

- narrative reading for immersion;
- technical reading for artifacts.

If both pass, do not touch it anymore. On the underwater, the last-minute retouches can quickly break the obtained balance.

A convincing underwater shot is not an effects contest. It is a consistent sensation of material, depth, and movement.

A last useful test consists of lowering the sound slightly by 20% and rereading the sequence. If the visual immersion still holds with no strong audio support, your image is really solid. If everything collapses, go back to the consistency of the visual layers before publication.

With this discipline, you turn a technically risky subject into a reliable and broadcastable render.

Always archive a clean intermediate export before the last style pass. Underwater, this backup is precious, because an excessive late correction on the caustics or the color can quickly degrade a shot that was already solid.

With this backup, you can quickly come back to a healthy base in case of drift, without losing the consistency acquired during the whole production.

This simple reflex often makes the difference between a serene end of project and a series of costly retakes a few hours before delivery.

It secures the quality and protects your schedule.

On such a sensitive subject, this safety margin is largely worth a few minutes of organization.

And it protects the perceived quality up to the final master.

This level of rigor is the base of a professional underwater render.

And it is what lets you deliver reliable shots, even under strong deadline constraint.

This consistency makes all the difference in real production.

And in client delivery.

<!-- PUBLICATION DATE: 2026-07-11 -->
