---
title: "ChatGPT Prompt: Essential, but What Is It?"
date: "2026-03-30"
dateModified: "2026-04-23"
category: "tutoriels"
excerpt: "Breaking a prompt down like a shooting brief, locking the context, iterating without going in circles, and stopping begging the tool with vague sentences."
thumbnail: "/images/blog/prompt-chatgpt/hero.png"
---

You open a conversation with ChatGPT, at OpenAI, in the browser or a dedicated app. You want something pro. You write three vague words. You wait for it to read your mind. Then you blame it when the output is hollow. The rarely named problem: **a prompt is a brief**, not a prayer. As in shooting, if you do not write the frame, the dominant light and what is off-frame, someone else decides in your place: except that here "someone" is the statistical average of the model.

This guide explains what a useful prompt with ChatGPT is: short role, measurable task, constraints, output format, iteration **one variable at a time**. We link this to your creative use (image brief, breakdown, script, list of negatives for distribution) with no promising that the text replaces a human in responsibility. ChatGPT is a **language assistant**: it assembles plausible formulations from your visible context; it does not "know" your project if it is not written, and it can **hallucinate** facts if you ask it for numbers or history with no guardrail. The interface can display suggestions or fast answers: it is up to you to keep the **brief** as the source of truth, not the first comfortable sentence of the model.

Three silhouettes. **Sarah**, a social freelancer, wants an image brief for three shots; she gets nothing because she wrote "draw inspiration from Instagram". **Marc**, a film student, wants a breakdown; he receives eight impossible shots because he did not say he has no travelling. **Agency K**, pitch on Monday, lets ChatGPT be complacent; they gain comfort and lose the critique. The workflows below fix that with the same rigor as a **shooting board**: columns, deliverables, risks.

## What ChatGPT really receives (with no magic)

**Tokens, not intentions.** The model drags a context window: visible text, possible system instructions, recent messages. What is **old** in the conversation can be partially forgotten or mentally compressed by the model. The critical constraints (16:9 format, neon prohibition, dry tone): **reinject them** when you change subject or move from writing to critique.

**Role, task, constraints.** The role ("you help a solo creator") calibrates the tone. The task ("deliver a five-line table") calibrates the form. The constraints ("no legal jargon, no moralizing") calibrate the edges. If you mix everything into a poem, the model sorts and discards.

**Explicit format.** "Explain" produces prose. "Give **five bullets**", "**a table** Shot / Action / Risk", "**two paragraphs** then **six control questions**" produce useful density. The format is an **intention compressor**.

**Short examples.** A mini-example of an image prompt line or a framed line of dialogue is worth ten adjectives. It is not an instruction to plagiarize: it is a **form anchor**.

For the link with pure visual prompts, see [how to write an ultra-realistic cinematic prompt for AI](/en/blog/comment-ecrire-prompt-cinematic-ultra-realiste-ia) and [the prompt mistakes that make an AI image artificial](/en/blog/erreurs-prompt-qui-rendent-image-ia-artificielle).

**Disciplined iteration.** When you change three parameters between two messages (tone, length, structure), you do not know what improved the answer. Note mentally: "this round, I change only the **length**". It is the same logic as in image generation: one variable at a time.

**Visual connectors.** You can explicitly ask: "for each shot, give a **copyable** line for an image generator like SDXL/Flux" with the camera / light / material / prohibitions fields. ChatGPT then becomes a **translator** between your narrative intention and a technical format: provided you validate the result in the real engine.

**Honest limits.** The exact capabilities (web browsing, file analysis, max length, available models) **change** according to your subscription and the date. What stays stable is the method: clear brief, format, human validation.

### Three beginner scenarios (with pivot)

**Three-shot image brief.** Before: "make something creative for a coffee brand". After: audience, tone, visual prohibitions, ratio, then "table: Shot, Intention, Light, Focal length, Movement, Mistake to avoid". The deliverable becomes a **checklist** you can paste into another tool.

**Breakdown with field constraints.** Before: "break down my scene". After: real location, two actors, no travelling; "**two** proposals max, one justification sentence per shot, signal where the sound saves a cut".

**Storyboard pitch.** Before: a "smooth" version. After: "list **three possible inconsistencies** between the three key images, then correct the text". You force a **critical** pass, not a complacent one.

## Practical workflow: the prompt as a mini-contract

### Step 0: Four frame lines

- **A**: Who you are in the user story (solo, student, creative).  
- **B**: What you really deliver (script, brief, critique, negatives).  
- **C**: Language and precision level.  
- **D**: Output prohibitions (clichés, judgments on competitors, etc.).

If you use **Custom instructions** or a custom **GPT** in the OpenAI ecosystem, invest this frame there: you do not rewrite a novel on each message.

### Step 1: Name the deliverable + format

Avoid "improve". Prefer "rewrite in **40 words max**" or "give **A/B** with a consequence sentence".

### Step 2: Paste the raw material

An ugly draft beats an absolute void. If you have no text, give three **observable** references (light, rhythm), not three film titles with no precision.

### Step 3: "Risk" pass

"What could make this output **unusable** for a real shoot?" Then targeted correction. You get a free guardrail.

### Step 4: Lock the useful version

Copy the best output into a file, date it, note what worked in your instruction.

### Step 5: Short loop: one variable

Next message: shorter, more technical, another point of view: **not the three**. Compare two versions like two takes.

### Step 6: Export to the visual tool

Ask for a **minimalist version**: actionable lines alone. Then, if needed, "copy-paste image prompt" with a camera, light, material, prohibitions line. You turn the conversation into a **technical sheet**.

### Step 7: "Hurried client" review

"Adopt the role of a client who says no three times." You get short objections and you revise. A silly role-play, efficient solo late at night.

### Step 8: Bridge to video

If you chain toward a video pipeline, ask for a **list of sounds** expected per shot (atmosphere, effects, indicative music) and an **indicative duration** per beat. It aligns the text with [how to structure an AI video like a real film](/en/blog/comment-structurer-video-ia-comme-vrai-film) without you rewriting everything in the edit.

Here is a visual marker for the "write before chaining" step, same documentary spirit.

```text
```

![Hands on the keyboard and morning light, marker for iterative writing work.](/images/blog/prompt-chatgpt/workflow-1.png)

### Reading table: replace begging with instruction

| Your current sentence | What is missing | Replacement action |
| --- | --- | --- |
| Make a beautiful script | beauty criteria | "12 lines max, dry tone, one visible action per sentence" |
| Like a pro | level | "agency brief, owned camera jargon" |
| Be creative | frame | "**two** opposite directions, then decide according to budget" |
| Correct everything | unknown variable | "correct **only** the temporal logic" |
| Draw inspiration from X | fuzzy reference | "north window, fine rain, neons far behind" |

Second visual marker, "shot choice" spirit.

```text
```

![Sheets and pencil on a table, "shot choice" spirit rather than dispersion.](/images/blog/prompt-chatgpt/workflow-2.png)

> When you ask to "structure", force an explicit **final choice** (A or B) with a consequence sentence. Structure with no decision is comfortable filler that simulates work without advancing the project by a single shot.

## Trench warfare: frequent mistakes

**Introductory novel.** Twenty lines of context before the question: the useful signal dilutes. **Fix:** five lines max, then the request, then an example.

**"You know what I want".** No. **Fix:** a **visible** or **testable** result in one sentence.

**Task mix.** Writing + translation + critique in a single message. **Fix:** three messages, three passes.

**Absence of an audience level.** **Fix:** "for someone who already knows editing" or the opposite.

**Creative rush forward.** Variations with no validated base. **Fix:** lock the V1 that holds, then detail variants.

**Fear of pasting your own brief.** It is your raw material: own it.

**Forgetting the sound** even when you prepare an image. **Fix:** one line "what do we hear in the foreground?"

**Numbered, legal, medical facts** taken without human verification. **Fix:** ChatGPT is not a base of truth; always cross-check primary sources. For fiction and the creative brief, aim for the **internal consistency**; do not confuse a plausible answer with a verified encyclopedic sheet, and do not rely on an online encyclopedia as an authority with no critical reading of the original sources.

**Output too long for the next tool.** **Fix:** ask for a compression to the **target format** (e.g. forty words for an overlay).

**Abuse of "cinematic".** **Fix:** replace it with decisions: camera height, focal length, source hardness, subject-background distance.

**Confusing text failure and image failure.** Note in two columns what comes from the **language** and from the **visual engine**.

## Useful links in the AI Studio series

- [Why your prompt does not work, and how to fix it](/en/blog/pourquoi-ton-prompt-ne-marche-pas-comment-corriger)
- [How to write an ultra-realistic cinematic prompt for AI](/en/blog/comment-ecrire-prompt-cinematic-ultra-realiste-ia)
- [The prompt mistakes that make an AI image artificial](/en/blog/erreurs-prompt-qui-rendent-image-ia-artificielle)
- [How to write an efficient script for an AI-generated video](/en/blog/comment-ecrire-script-efficace-video-generee-par-ia)

## FAQ

**Is a ChatGPT prompt always in English?**  
No, you can perfectly structure in your own language if it is your working language. English can help on certain technical terms, but the important thing is mostly the clarity of the format and the constraints. A good practice is to keep the logic in your language and inject the useful technical tags in English.

**"System" and "user", concretely?**  
Think "permanent frame" for the system, and "task of the day" for the user. The first sets your style, the limits and the method; the second gives the concrete need of the moment. If you have only a single field, write the charter at the top then repeat the critical constraints before each important request.

**ChatGPT invents facts: what do I do?**  
You treat any factual output as a draft to verify, especially for legal, health, numbers, history or quotes. Explicitly ask for the uncertainty zones and cross-check with primary sources. For fiction and the creative brief, aim for the internal consistency, not the factual authority.

**What is a good prompt in one sentence?**  
A good prompt holds in one clear sentence: expected deliverable, output format, constraints, and evaluation criterion. Example: "deliver X in format Y under constraints Z and add the major risks". This frame avoids the vague answers and speeds up the useful iterations.

**The temperature / the variability setting?**  
For a creative brief, often the middle: controlled variety. For strict lists, a bit lower. The exact name of the setting depends on the OpenAI interface of the moment; the idea is less randomness when you want **repeatability**.

**Does it replace a screenwriter?**  
No, ChatGPT assists the writing, it does not replace an author's eye. It is excellent to structure, reformulate, propose variants and speed up drafts. But the emotional intention, the final dramatic consistency and the editorial responsibility stay human.

**I lose my conversations: tip?**  
Archive: date, version, exact prompt that worked. Like a stable image seed you want to reproduce tomorrow.

**Custom instructions vs single message?**  
The custom instructions carry what is **stable** across all your projects; the message carries what is **specific** to the task of the day.

**What do custom GPTs change?**  
They can embed instructions, files, tools: useful for a repeated workflow. You stay responsible for the brief and the validation.

**ChatGPT and sensitive data?**  
Do not paste secrets, third-party personal data, or confidential client info with no clear legal frame with your organization and the OpenAI terms of the moment.

**How to generate negatives for distribution?**  
Paste a description of a failed image, ask "what sounds false to a cinema eye?" then "translate into short negatives". Pass the result into ComfyUI / SD / other; see [how to generate photorealistic AI images with no plastic effect](/en/blog/comment-generer-images-ia-photorealistes-sans-effet-plastique).

**The model refuses my request: why?**  
Safety policies and guardrails evolve; reformulate the goal (education, fiction, technical brief) without circumventing in bad faith.

**Several accounts or teams?**  
Align a shared **prompt charter** (table format, prohibitions, camera glossary) to avoid each member reinventing an incompatible dialect.

**I want code / JSON to automate.**  
Ask for a strict schema and examples; check in a linter. The model can shift a comma: keep a human re-reading for anything that goes to production.

**How to avoid the "too enthusiastic assistant" tone?**  
Add: "dry tone, no compliments, no transition sentences". The style is a constraint like any other.

**Attachments (PDF, images): good idea?**  
Yes to summarize or extract tables **if** your offer allows it; check a sample against the source for the numbers.

**Difference with a search engine?**  
The engine lists pages; ChatGPT **generates** coherent text that can be false. For facts, you often want both: search, then assisted writing from open sources that **you** judge reliable.

**How to brief a scene for a consistent character?**  
Use the same character sheet at the top of each sub-task; link to [how to write a prompt for a realistic and consistent character](/en/blog/comment-ecrire-prompt-personnage-realiste-constant).

**I am preparing a team workshop: where to start?**  
Set three mandatory output formats (table, risk list, short "paste into Slack" version) and a common camera glossary; do a live exercise on **one** scene and compare the deliverables on the whiteboard, then vote on the most **shootable** version tomorrow morning.

<!-- PUBLICATION DATE: 2026-03-30 -->
