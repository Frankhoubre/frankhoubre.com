---
title: "AI pipeline from A to Z: from idea to shot list in one day"
date: "2026-06-21"
category: "tutoriels"
excerpt: "How to chain AI tools to go from a raw idea to a complete shot list in a single workday. A concrete method, with the tools that actually slot together."
thumbnail: "/images/blog/pipeline-ia-script-storyboard-production-de-a-z/hero.webp"
---

# AI pipeline from A to Z: from idea to shot list in one day

A few months ago, a client sent me a brief for an ad: 30 seconds, high-end cosmetics product, "something elegant and cinematic." The next morning I had a 12-frame storyboard with framing descriptions, a technical breakdown, a budget estimate, and the video prompts for each shot. All of that without setting foot on a set.

It was not magic. It was a pipeline.

Most AI creators work in silos: they open Midjourney, generate images at random, then try to make something coherent out of them. Or they open Kling, generate videos at random, and hope it sticks. The result is hours lost in disordered attempts and a deliverable that looks like a compilation of tests rather than a production.

A pipeline forces cinematic thinking before generation. This tutorial describes how it works.

## The logic of the pipeline

An AI production pipeline follows the same logic as a classic production pipeline, just compressed in time. The order of the steps is not arbitrary, it reflects the causal chain between the decisions:

1. **Intention**: what are we telling and to whom?
2. **Narrative structure**: how do we break it down?
3. **Visual vision**: what does it look like?
4. **Shot list**: how do we produce it?
5. **Budget**: is it feasible?

Skipping a step means building on sand. Starting with video generation without a storyboard is like shooting without a breakdown. It can work for experimentation, not for a client commission.

> 💡 **Frank's Cut:** The real power of AI in this pipeline is not to replace each step, it is to make the back-and-forth between steps almost free. Changing a framing decision in the storyboard phase takes 10 seconds with AI. Changing the same decision after generating 40 video clips means starting over.

## Step 1: turn the raw idea into a narrative structure (30 minutes)

The starting point can be a client brief, a personal idea, or a technical constraint ("30 seconds, vertical format, no dialogue").

The first task is to turn that into a **narrative structure**: a sequence of emotional intentions and information to convey, in order. Not shots yet. Moments.

For a 30-second cosmetics ad, that gives something like:
- 0-5s: hook (tension, desire, question)
- 5-15s: development (the product in context, the details)
- 15-25s: emotional resolution (transformation, result, emotion)
- 25-30s: signature (logo, product, CTA)

It is simple. But having written it forces you to make decisions that most creators push back to the editing phase, when it is too late.

AI can help you here by generating several variations of narrative structure from a short brief. Test 3-4 different structures before choosing. It is fast and it saves a lot of generation time.

## Step 2: build the cinematic prompts (45 minutes)

Once the narrative structure is set, you move to the shot level. Each moment of your structure becomes one or several shots with a precise cinematic description.

The cinematic description includes:
- **Framing**: close-up, medium shot, wide shot, point of view
- **Movement**: static, dolly-in, rotation, dolly, drone
- **Light**: natural/artificial, direction, color temperature
- **Mood**: dense/airy, contrasty/soft
- **Duration**: 3 seconds, 5 seconds, 10 seconds
- **Transition**: hard cut, dissolve, cut on movement

For a cosmetics ad:
> "Macro shot of a glass perfume bottle. Translucent surface, cold side light, bluish reflections. Black background, very shallow depth of field. Slight rotation movement of the bottle, imperceptible, 4 seconds."

The [cinematic prompt generator](/outils/generateur-prompt-cinema) lets you structure these descriptions by following a methodical grid. The advantage: you get prompts that are consistent from one shot to the next, not a collection of disparate attempts.

> 💡 **Frank's Cut:** The most effective video prompt I have ever written is 4 lines. Framing. Movement. Light. Duration. Everything else is noise. Precision beats length every time.

## Step 3: the storyboard (1h)

The storyboard turns your prompts into a production document. It is the first artifact you show to a client or your team.

Two options:

**Option A: image storyboard.** You send each cinematic prompt to Midjourney or an image model to generate a reference thumbnail per shot. You do not need a perfect image, just a visual reference that communicates the intention. Midjourney's V8.1 is particularly good here: fast, precise on the framing descriptions, and the `--sref` lets you maintain style consistency across the frames.

**Option B: structured PDF storyboard.** The [PDF storyboard generator](/outils/generateur-storyboard-pdf) produces a document with frames, technical descriptions, and production information. More professional for the client handover, and directly usable as a brief for the video generators.

The two options are not mutually exclusive. Option A for the internal visual validation phase, Option B for the handover.

## Step 4: from image to video (variable)

You have your visual references, your prompts, your storyboard. You move to video generation.

The choice of model depends on the type of shot:

| Type of shot | Current recommendation |
|---|---|
| Narrative shot with character | Kling 3.0 (movement control) |
| Atmospheric shot, landscape, macro | Veo 3.1 (visual quality, native audio) |
| Shot with complex camera move | Runway Gen-4.5 (motion brush, fine control) |
| Fast preview before selection | Kling 3.0 Turbo (0.8¥/s, fast) |

The basic rule: preview first with a fast and economical model to select the shots that deserve a high-quality generation. Do not generate all your final shots in the first pass, you will lose time and budget on shots you are going to recut or discard.

For each shot of the storyboard, the workflow is:
1. Turbo/fast to select the angle and the timing
2. High-quality model for the chosen shot
3. Upscale if necessary (Topaz Video AI for 4K)

## Step 5: check the budget before generating (30 minutes)

This step often comes too late. Before launching mass generation, set the numbers.

For a client project:
- How many shots?
- What target resolution?
- Which model per type of shot?
- How many takes per shot (selection ratio)?

The [AI production budget calculator](/outils/calculateur-budget-production-ia) lets you estimate the total generation cost depending on the model and the volume. For a 30-second ad, the generation budget typically varies between 15 and 120 euros depending on the target quality and the chosen model.

Knowing this figure before starting changes how you organize your workflow. If your budget is tight, you will spend more time on the prompts and fewer takes. If you have margin, you can afford several variations per shot.

> 💡 **Frank's Cut:** I always quote my clients a "generation budget" separate from the creative fee. It is transparent, it is professional, and it protects your profitability. Generation credits are not time spent on the tool, they are a real production cost.

## Step 6: the final shot list

Once you have:
- the validated narrative structure,
- the prompts per shot,
- the storyboard,
- and a budget estimate,

you can put together the **final shot list**: the ordered list of all the shots to generate, with, for each one, the target model, the final prompt, the expected duration, and the reference assets (starting image if Image-to-Video, style reference for consistency).

This document is your production roadmap. You only open the generation tools at this stage. Everything that precedes is preparation.

## Why preparation changes everything

AI generation is fast. Thinking is what takes time, but it is what determines the quality of the result.

A well-built storyboard reduces the volume of generation needed to reach a professional result by 60 to 70%. Without a storyboard, you generate at random and converge toward something decent after many attempts. With a storyboard, you know exactly what you are looking for at each step.

It is also what lets you deliver on time. When a client gives you 48h for a first pass, you cannot afford to discover your concept by generating. You have to arrive with a precise brief and a clear structure, and use the available time for execution.

ScreenWeaver is built around this logic: it helps you see the film while you write it, before launching the slightest generation. It is the part of the pipeline that most often stays implicit among AI creators, and it is often where the difference between an amateur deliverable and a professional one is decided.

## The mistakes to avoid in this pipeline

**Generating storyboard images at final quality.** Your storyboard references do not need to be perfect. Midjourney's Draft Mode (24 images in one click) is made for this. Keep the energy for the video generation.

**Choosing the video model before having the prompt.** The prompt often determines which model is best suited. Write first, choose afterward.

**Skipping the narrative structure step.** It is only 30 minutes, but it saves you hours of drift in the generation phase.

**Mixing client storyboard and working storyboard.** The client storyboard is clean, numbered, exported as PDF. The working storyboard can be rougher, annotated, with variants. Do not present your working document as a deliverable.

**Ignoring the budget before generating.** It seems obvious, but it is the decision that commits the most cost in the workflow. Estimate first.

## The pipeline in summary (one workday)

| Phase | Time | Output |
|---|---|---|
| Narrative structure | 30 min | Sequence of moments |
| Cinematic prompts | 45 min | List of described shots |
| Storyboard | 60 min | Visual document |
| Budget estimate | 30 min | Generation budget |
| Shot list | 30 min | Production roadmap |
| Generation (preview) | 2-3h | Shot selection |
| Final generation | 2-3h | Final shots |
| Export + delivery | 30 min | Final files |

About 8 hours of structured work for a professional result. Chaos produces the same thing in 16 hours with a less solid result.

---

## FAQ: AI production pipeline

**Does this pipeline work for a solo creator or only for teams?**
It is designed for solo. In a team, some steps (storyboard validation, client brief) involve other people, but the logic stays the same. The main difference in a team: you formalize the storyboard and the shot list more so they are readable by others.

**Can I compress the pipeline for an urgent project (4 hours instead of a day)?**
Yes, by sacrificing the variants and the tests. Choose the simplest narrative structure, write shorter but more precise prompts, and skip the preview phase by going directly to the final-quality model. The risk: you will have less margin if a shot does not work.

**How do I manage visual consistency between shots generated by different models?**
That is the real difficulty of the multi-model pipeline. Two solutions: a color palette fixed in post-production (consistent LUT applied to everything), and shared visual references for the light and color mood in each prompt. For characters, cross-shot consistency is still hard without dedicated references or a consistency tool like Kling's Character Reference.

**Is this workflow compatible with a very tight budget (less than 50 euros of generation)?**
Yes. With 50 euros of generation, you can produce a 30-second ad at decent quality if you use Kling Turbo for the preview and Kling standard or Veo for the chosen shots. The budget is mostly spent on the selection takes; a solid storyboard reduces the number of takes needed.

**How do I integrate voice-over or music into this pipeline?**
In parallel, not in series. The voice-over is produced on the finalized script (ElevenLabs for the voice, directly from the text of your narrative structure). The music is composed on Suno or Udio from a description of the emotional mood of each sequence. You synchronize in editing with the final video render.

**Is the PDF storyboard mandatory or is a list of prompts enough?**
For personal use, the list of prompts is enough. For a client, the PDF storyboard is nearly mandatory: it shows you have a built vision, not just attempts. It is also what justifies your creative fee: you sell the art direction, not just the time to click "generate".

**How do I know which video model to choose if I am a beginner?**
Start with Kling 3.0 Turbo to test your prompts (very low cost, fast). Once the prompt gives something interesting, move to Kling 3.0 standard or Veo 3.1 for the final quality. Avoid Runway Gen-4.5 at the start of a project unless you need precise camera control: it is a powerful tool but one that rewards experienced users.
