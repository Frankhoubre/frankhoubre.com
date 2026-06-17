---
title: "Directing the Gaze and Micro-Expressions of AI Characters"
date: "2026-05-31"
dateModified: "2026-06-10"
category: "tutoriels"
excerpt: "Acting direction technique applied to prompts to get accurate gazes and stable expressions."
thumbnail: "/images/blog/diriger-regards-micro-expressions-personnages-ia/hero.webp"
---
Beautiful character. Gaze into the void. Stock-photo smile during a grief. With no direction in the prompt, the engine delivers the LinkedIn catalog.

**Directing the gaze and micro-expressions of AI characters** means writing the director's intention: who looks at what, with which physical micro-reaction. This guide transposes onto prompts what I learn on a set with real actors: the goal of the gaze, the emotional beat, the bodily constraint.

![AI actor close-up, lateral gaze, restrained micro-expression, natural lighting](/images/blog/diriger-regards-micro-expressions-personnages-ia/hero.webp)

## The engine does not guess your emotional screenplay

Image and video models optimize a "pleasant" human figure by default. A neutral smile, a gaze slightly above the camera, symmetrical shiny eyes. It is the opposite of a dramatic scene where the character avoids contact, holds back a tear, or stares at an object with a micro-tension in the jaw.

Acting direction in AI goes through three concrete writings. **The object of the gaze**: not "looking sad", but `looking down at coffee cup in hands`. **The beat**: what just happened in one sentence (`just heard bad news, holding back tears`). **The physical micro-constraint**: `slight jaw tension, lips pressed, no smile`.

With no object of the gaze, the eyes go to roulette. With no beat, the expression stays generic. With no micro-constraint, you get the LinkedIn mask.

The viewer reads the eyes first, then the mouth. If the eyes are sharp but the mouth melts or has an inappropriate smile, it is over. Prioritize the face triangle in the framing and in the prompt.

| Direction element | Bad prompt | Directed prompt |
| --- | --- | --- |
| Gaze | "emotional face" | `eyes fixed on letter on table, not at camera` |
| Beat | "sad scene" | `moment after rejection, suppressing reaction` |
| Micro | "realistic" | `subtle nostril flare, brow slightly drawn` |
| Ban | (absent) | `no stock smile, no glamour pose` |

For character continuity, see [consistent characters across multiple AI images](/en/blog/personnages-coherents-plusieurs-images-ia). For shot-reverse-shot, [over-the-shoulder shot and gaze continuity in AI](/en/blog/plan-over-epaule-continuite-regard-ia). For the character sheet, [how to write a realistic, consistent character prompt](/en/blog/comment-ecrire-prompt-personnage-realiste-constant).

## A direction workflow in the prompt

### Step 1: write the scene sheet in one line

Who, what just happened, where the gaze goes, what is expressively banned. Example: "Marie, just hung up, stares at the phone on the table, not crying yet, no smile." This line precedes any technical light/framing prompt.

### Step 2: choose the gaze axis

Three classic axes. **Toward an off-screen object**: believable, avoids the aggressive camera contact. **Toward another character** (off-screen or visible): a living dialogue. **Toward the camera**: rare, to be narratively justified (an accusation, a confession). Note the angle: `looking 30 degrees off camera left`.

### Step 3: add the physical micro-expression

One or two constraints, not ten. `slight lower lip tension`, `eyes slightly wet not crying`, `one eyebrow barely raised`. Models over-interpret strong emotions. Restraint photographs better.

![Gaze axis diagram, shot-reverse-shot, acting direction prompt annotations](/images/blog/diriger-regards-micro-expressions-personnages-ia/workflow-1.webp)

### Step 4: lock the framing and focal length

An 85mm close-up for micro-expressions. A 50mm chest shot for dialogue. Avoid a 24mm on a face if you want nuance: the distortion caricatures the expressions. See [how to direct an AI character like an actor](/en/blog/comment-diriger-personnage-ia-comme-acteur) for the body/language link.

### Step 5: batch and sort by gaze

Four variations, the same scene sheet. Sort: does the gaze land on the object? Does the expression match the beat? Does the mouth stay consistent? A gaze 20 degrees off the lens is enough to classify it B.

### Step 6: reverse and reaction

Generate the reaction shot with the same scene sheet from the other character's or an observer's point of view. Same light, same temporal beat. The edit carries the dialogue, not a single shot that talks for thirty seconds.

### Scenario A: breakup scene, close-up, silence

Sheet: "He just said he is leaving, she stares at a point on the wall, jaw clenched." Prompt: 85mm, side window key, `looking past camera at wall`, `jaw clenched subtly`, `no tears yet`, `no smile`. Six variations, one A. Reverse on her hands dropping a cup. Edit: face shot 4s, hands shot 2s. The emotion holds with no dialogue.

### Scenario B: cafe dialogue, two characters

Shot A: character 1 looks at the `coffee cup`, listens. Shot B: character 2 looks at the `person opposite`, speaks (lips if video). Same palette, same fictional hour. Crossed or avoided gazes depending on the subtext. If the model puts both in a commercial smile, reinforce the bans and lower the "beauty" weight.

### Scenario C: AI documentary, on-camera testimony

A justified camera gaze. Micro-expression: `thoughtful, not performing`, `slight pause before answer`, `natural blink`. Avoid `confident presenter smile`. The audience detects the fake testimony in three seconds.

## Troubleshooting

**Symmetrical shiny AI-type eyes.** Lower the eye saturation in post, a micro shadow under the eyelid, a single catchlight not a perfect double.

**Unwanted gaze toward camera.** Add `not looking at camera` and a precise object. Recrop if the model insists.

**Stock smile in a grave scene.** An explicit ban zone: `no smile, no teeth visible`. Reinforce the negative beat.

**Mouth that melts between video frames.** A short clip, a more stable face, or a less wide close-up. Separate face and set in the movement strategy.

**Contradictory expressions** (smile plus tears with no intention). Reduce to one dominant emotion and one micro-constraint. The model does not play complex human paradox in one pass.

**Inconsistent reverse gaze.** Same eye height, same light direction, same gaze line noted on the edit sheet (`180 line respected`).

**Symmetrical double catchlight.** An immediate AI tell. Fix: light inpaint or the prompt `single natural catchlight from window left`. Lower the eye shininess in post.

**Frozen expression over ten seconds of video.** The face does not live. Fix: cut into shorter shots, add a hands or object shot, accept restraint rather than a moving grimace.

## The 180 line and dialogue axes in AI

Even with no physical set, the 180 line exists in the edit. If character A looks left off-screen toward B, B must look right toward A. Note on your edit sheet: `A eyeline screen left`, `B eyeline screen right`. When you generate B without this note, the model often puts both in a camera gaze by default. The dialogue dies.

For three-way scenes, the geometry gets complicated. Simplify: generate the two shots of the main duo first, validate the axis, then the third character as an insert or in a wide shot where the axis is less critical. Do not generate three tight close-ups with three different gazes with no storyboard.

The reaction shots with no dialogue are your secret weapon. A character who listens with a micro-constraint (`slight nod withheld`, `jaw set`) sells the scene better than a monologue on a single face. Generate these reactions in a batch with the same scene sheet as the speaker. The edit alternates. The emotion rises.

When you work in French but prompt in English for the direction, keep a fixed glossary: `looking off-camera left` always translated the same way in your team. Synonyms sometimes change the model's behavior. Vocabulary consistency is a form of direction.

![Before/after correction of off-screen gaze and micro-expression in an AI close-up](/images/blog/diriger-regards-micro-expressions-personnages-ia/workflow-2.webp)

> 💡 **Frank's Cut:** write **the object of the gaze** (`looking at coffee cup`). With no target, the eyes go to roulette. It is the first line I check on every portrait prompt before the light.

For acting theory, the work of [Sanford Meisner on attention and reaction](https://www.sanfordmeisner.com) inspires the beat plus object structure. On the technical gaze side, the [ASC articles on the language of close-ups](https://www.theasc.com) help name what you want to get.

## FAQ

### Should I write direction prompts in English?

Often yes for the technical terms (`looking at`, `jaw tension`, `off-camera eyeline`). You can write your scene sheet in French then translate the direction lines. Models have more data on English tags for photo and cinema. Keep consistency: once English is chosen for the direction, do not mix at random.

### How do I direct a gaze toward an off-screen character?

Specify the angle and the height: `looking at standing person at camera right, eye level`. If possible, generate a blurred silhouette or a shoulder of the second character to anchor the eyeline. The reverse-shot edit confirms what the viewer guesses. With no anchor, the gaze floats.

### Do micro-expressions hold in AI video?

Less well than in a still. Favor short clips, minimal movement, restrained expressions rather than wide ones. An eyebrow that moves too much between frames betrays the generative. For a strong reaction, cut to a still or a very short shot.

### How do I avoid the "dead eyes" gaze?

Object of the gaze plus micro-constraint plus light with a consistent catchlight. Dead eyes often come from an emotionally empty prompt and a flat frontal key. A soft side key with a reflection in the eyes citing the source helps. No symmetrical double catchlight.

### Can I fix a bad gaze in post?

Slightly by inpaint on a still. In video, it is costly and rarely clean. Better to regenerate with a reinforced scene sheet. Eye inpainting on three frames can be enough for a short static shot.

### How many expressive bans in a prompt?

Two to three maximum. `no smile`, `no glamour pose`, `no direct camera stare` if relevant. Beyond that, the model gets lost or ignores them. The bans complete the positive beat, they do not replace it.

### How do I keep the same expression across several shots?

A character sheet plus a scene sheet per narrative beat plus a fixed reference image reinjected. The expression changes when the beat changes, not when the shot changes. Document the direction prompt in a log. See the consistent character guide.

### Camera gaze for an ad: same technique?

Yes, but the beat is commercial: `friendly but not stock`, `product glance down`, `return to lens`. The object can be the product. The bans avoid the catalog smile. Test on mobile: the intention must read in one second.

## Express direction sheet (to copy)

Before each portrait batch, fill: **Beat** (one sentence), **Object of the gaze** (a concrete noun), **Micro-constraint** (one or two), **Expressive ban** (two max), **Focal length**, **Key light**. Filled example: "She just read the message, stares at the phone on the coffee table, lower lip slightly pressed, no smile no tears, 85mm, soft left window." This block fits in six lines. It replaces twenty "emotional cinematic portrait" adjectives.

Teams that use this sheet halve the portrait regenerations on dialogue projects. It is not paperwork. It is written direction.

In video, the gaze direction changes per shot, not per thirty-second clip. Cut: shot A looks at the object, shot B micro-reaction, shot C return to the object. Three short generations with the same scene sheet and micro-variations. The edit assembles a performance the model does not hold continuously. It is the same trick as coverage on a real set.

For action scenes, expressive direction sometimes gives way to physical direction: `eyes squinting against wind`, `jaw clenched against impact`. The beat remains. The object of the gaze can become secondary if the body dominates. But avoid the void: even in action, `looking toward explosion off-screen right` anchors the head.

Film references for AI direction are not Pinterest captures. They are working notes you translate into object, beat and micro-constraint.

In a team, share the scene sheet before the batch, not only the technical prompt. The editor who knows the gaze intention chooses shot A among six variants faster than the generator alone. Direction continues after generation. It is not finished when the image leaves the engine. It is finished when the gaze tells the scene in the edit.

For group scenes, generate the duos first before the three-character wide shot. AI loses the eyelines in a group. The wide shot serves to establish the place. The duos carry the emotion. It is the opposite of the beginner instinct that starts with the general shot "to see".

Test each direction prompt on a still before the video. The gaze is more stable in an image. You lock the eyeline, then animate with minimal movement. The video inherits the still like an actor returning to a starting position. This habit alone reduces the lost gazes on half the portrait projects I review in training. They are notes: "shot 12 De Niro Taxi Driver, mirror gaze, no smile". You then translate into object and micro-constraint, you do not paste the film name in the prompt alone. The model does not know your reference. You do.

### How do I direct a crying scene without an AI caricature?

Beat: `holding back tears, not crying yet`. Micro: `wet lower eyelids, no streams down cheeks`, `slight chin tremor optional`. Ban: `crying heavily`, `mouth open wailing`. AI overplays the pain. Restraint photographs better. If you need visible tears, an inpaint pass on a key frame in a short edit, not a "bawling" generation.

### Camera gaze in a fake documentary?

Beat: `uncomfortable awareness of camera` or `ignoring camera completely` depending on the intention. For ignoring the camera: `looking at interviewer off left`, not `looking at lens`. For the direct confession: `steady eye contact, not smiling`, a micro-constraint of vulnerability, no influencer pose.

### Children and older characters in AI: same method?

Yes, with adapted micro-constraints. Child: avoid stock adult expressions, favor `curious look at object`, no catalog pose. Older character: `natural skin texture`, micro-wrinkles consistent with the beat, no beauty smoothing that erases the emotion. The gaze stays anchored on an object. AI shiny eyes are even more visible on young skin. Lower the ocular saturation in post systematically on these shots.

<!-- PUBLICATION DATE: 2026-05-31 -->
