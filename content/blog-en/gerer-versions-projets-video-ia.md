---
title: "Managing the versions of your AI video projects: a concrete method"
date: "2026-06-20"
category: "tutoriels"
excerpt: "Without a versioning system, AI video projects quickly become uncontrollable. Lost prompts, deleted iterations, deliveries that start from scratch. Here is the method I use to stay in control."
thumbnail: "/images/blog/gerer-versions-projets-video-ia/hero.webp"
---

# Managing the versions of your AI video projects: a concrete method

You restart a project for a client. The brief has changed slightly. You look for the prompts of the version approved three weeks ago. Nowhere to be found. You vaguely remember the model used, the style requested, the ratio of the key scene. But the exact parameters? Gone.

This is the problem of versioning in AI video. Unlike a traditional shoot where the rushes are there and the edit is in a Premiere file, the material of an AI project is volatile: the prompts, the seeds, the model parameters, the rejected iterations. If you do not record them, they disappear.

![Organized cinematic workspace with project folders, production notes and an AI render monitor, professional studio mood](/images/blog/gerer-versions-projets-video-ia/hero.webp)

## Why versioning in AI is not like classic versioning

On a development project, Git manages the versions of the code. On a human video project, the Premiere files are the assets. In AI video production, the complexity is different.

A shot generated with Grok Imagine Video 1.5, seed parameter 4829, a 180-word prompt, a specific reference image, temperature at 0.7: that is not a file, it is a configuration state. If you lose this state, you do not regenerate exactly the same shot. You generate something similar, not identical.

That is why classic project management tools (Notion, Trello) are not enough. They manage tasks and notes, not configuration states with dependencies.

Here is what I set up and what actually works.

## The folder structure I use

Each AI project has its own tree. No project without a dedicated folder.

```
[PROJECT_NAME]/
├── BRIEF.md
├── PROMPTS/
│   ├── v01/
│   │   ├── scene-01-description.txt
│   │   ├── scene-01-prompt.txt
│   │   └── scene-01-params.json
│   ├── v02/
│   └── v03_APPROVED/
├── RENDERS/
│   ├── v01/
│   ├── v02/
│   └── v03_APPROVED/
├── REFERENCES/
│   ├── images/
│   └── videos/
└── EDIT/
    ├── draft.prproj
    └── CLIENT_EXPORT/
```

The principle: each version has its numbered folder. The approved version is suffixed `_APPROVED`. Never overwrite a file, never replace directly.

It is rudimentary, but it is also what works. The complexity of a versioning system is an enemy: if the system takes too long to maintain, you abandon it.

## The params.json file: what you must capture

For each generation, I create a minimal parameters file. Example for a shot generated with Kling 3.0:

```json
{
  "date": "2026-06-15",
  "scene": "night_intro",
  "model": "Kling 3.0 Standard",
  "mode": "text-to-video",
  "duration_seconds": 5,
  "resolution": "1080p",
  "seed": 7241,
  "cfg_scale": 0.5,
  "motion_intensity": 0.7,
  "reference_image": "../REFERENCES/images/night-set-ref-02.jpg",
  "prompt_file": "scene-night-intro-v02.txt",
  "status": "client_review",
  "notes": "Camera movement too fast flagged by the client, to fix in v03"
}
```

The `seed` field is critical. It is what lets you reproduce a close result in case of client feedback. Without a seed, every regeneration is random.

The `notes` field is the one I forget the most often and always regret. That is where you note why this version was rejected or approved.

> 💡 **Frank's Cut:** Many AI interfaces do not show the seed by default. Go into the advanced settings or the metadata of the exported file to find it. Some tools like Kling or Luma mention it in the results panel. Copy it immediately, before closing the tab.

## Managing prompts as assets

The prompt is not a passing note. It is a production asset. It must be versioned, saved, annotated.

I store each prompt in a separate text file, named by scene and version: `scene-03-wide-shot-v02.txt`. Never in a Slack message or in the chat of an AI.

A few rules I apply:

**Keep the rejected prompts.** A prompt rejected for this scene can be perfect for the next one. If you have deleted it, you are going to rewrite it from scratch.

**Annotate the changes.** In the prompt file, a comment line at the top: `# Changed from v01: added warm light reference, removed camera movement`. At a glance, you see why v02 exists.

**Version the system prompts.** If you use a global style prompt (character, general mood) shared across several scenes, put it in a `GLOBAL_STYLE.txt` file at the project root. If you modify it, create a `GLOBAL_STYLE_v02.txt` and note which scene starts using it.

## The production log: 5 minutes per session

At the end of each work session, I write 5 lines in a `LOG.md` at the project root:

```markdown
## 2026-06-15

- Generated 4 shots scene 3 with Kling 3.0
- Shots 1 and 3: rejected (movement too jerky)
- Shot 4: approved for pre-production, seed 7241
- Next: pick scene 2 back up, review the light prompt
- Pending client question: they want to test the version without music
```

It is fast, blunt, and indispensable. When you come back to a project after a week, this log puts you back in context in 2 minutes.

Without it, you spend the first 20 minutes digging through the folders to remember where you were.

## Managing versions with a client

The client relationship adds an extra layer. The client approves a version, you generate the next one, the client reverses their decision and prefers "the previous one". Without clean versioning, it is a disaster.

A few rules for projects with a client:

**Number everything in front of them.** In your emails, your file sharing, your messages: "Here is version 3 of scene 2". Never "here is the latest version". If you say "latest version", the client will always say they want to go back to a version they have no name to designate.

**Keep the review links on your side.** Even if the client gives feedback via a Frame.io or Vimeo link, keep a record of which link corresponds to which version in your LOG.md.

**Written wording of approvals.** When a client approves a scene by message or email, capture that approval in your LOG.md. "Client approves v03 scene 2 on 06/15 - Slack message". If a disagreement arises later, you have a history.

**Define the number of revisions by contract.** No versioning holds without a clear contractual frame. If the client is entitled to 3 revisions per scene, it is written in the quote, and you record which revision is in progress in your log. For the basics of the contract, the article on [contractual clauses for AI projects](/en/blog/clauses-contrat-client-ia-video-production) covers the important points.

## Light tools to go further

I do not believe in "all-in-one" solutions for AI versioning. They are too heavy to maintain and get abandoned quickly. But a few light tools help.

**Obsidian or Notion for the notes.** An Obsidian vault per project with a session template: fast to fill, easy to find. Notion is more collaborative if you have a team.

**Git for the text files.** If you are comfortable with the command line, a Git repository for the prompts and the params.json is the cleanest solution. `git log` gives you a perfect history of all the changes. The renders themselves (heavy video files) do not go in Git: use separate cloud storage.

**Frame.io or Vimeo Review for the deliverables.** Not for internal versioning, but for the client review. These tools keep the history of comments per video version.

**An organized drive.** Google Drive or Dropbox with the same tree as described above. The key: name the folders explicitly from the creation of the project, never after the fact.

## The classic mistakes to avoid

**Overwriting a file "to save space".** The size of a JSON parameters file is negligible. So is a text prompt. Keep everything, delete nothing. The renders, on the other hand, can be archived on an external drive after approval.

**Trusting your memory.** "I'll remember the seed". No, you will not remember it in 3 weeks.

**Putting all the projects in the same folder.** An `AI_PROJECTS` folder with 20 badly named subfolders is as useless as no versioning.

**Naming files with vague dates.** `final_video_v2_NEW_corrected.mp4`: this name will not survive more than one project. Use `[CLIENT_NAME]_[PROJECT_NAME]_[SCENE]_v[N].mp4`.

**Not versioning the reference images.** If you change reference image between two versions, note it in params.json. A regeneration with the same reference image as before will give a different result from the one with your new reference, even with an identical prompt.

## Linking versioning to billing

Clean versioning also has a direct financial impact. If you can show a client the history of the 7 iterations done on a scene, the revision request number 8 ("completely redo the shot") positions itself differently.

Versioning is your work documentation. It justifies the time spent, it protects against out-of-contract requests, and it makes future estimates more precise ("this type of scene took us 4 iterations on project X, I plan the same volume").

On the [AI production budget calculator](/outils/calculateur-budget-production-ia), the number of iterations per shot is one of the variables that most influences the final estimate. A history of well-documented projects gives you real figures to set up this calculation.

## What you can set up today

If you are starting from nothing, begin with these 3 actions, in order:

1. Create the folder structure for your current project. Now. It takes 3 minutes.
2. For each generation you do today, note the seed and the name of the model in a text file.
3. At the end of the session, write 3 lines in a LOG.md.

That is the minimum. With that alone, you are already in a better situation than 80% of AI creators.

The complete params.json and the git come after, once the basic reflex is in place.

## FAQ

**Do you really have to keep the rejected versions of the renders?**
Not necessarily the complete video renders, which can be heavy. But always keep the parameters (params.json) and the corresponding prompts. If a client changes their mind, you can regenerate. If you have deleted the parameters, you start from scratch.

**Is Git really useful for AI video projects?**
Yes, for the text files (prompts, params.json, log). No, for the video files: Git is not made for large binaries. Use a Git repository for the documentation and the configurations, a cloud drive for the renders.

**How do you manage versioning when several people work on a project?**
A shared drive with the same tree, and a written, shared naming convention from the start. The production log then becomes a collaborative file: each member notes their sessions. Notion works well for that.

**Do some AI tools automatically save the parameters?**
Some platforms like Midjourney keep a history in the interface. But depending on this internal history is risky: if you change plan, close the account, or if the platform evolves, you lose everything. Exporting to your own file system remains indispensable.

**What is the difference between a seed and a prompt?**
The prompt is the descriptive text you give the model. The seed is a numerical value that initializes the random generation process. Two generations with the same prompt and the same seed will produce very close results (but not 100% identical depending on the model). Without the seed, the same prompt will give different results each time.

**How do you name the versions when the client does not understand the system?**
Use simple names on the client side: "Version A", "Version B", "Final proposal". Keep your internal numbering (v01, v02, v03) in your folders. The correspondence between the two is in your LOG.md.

**What do you do if the AI model I used is no longer available?**
It is a real risk. If a client asks for a modification on a project rendered with a model that has been removed or updated, you have to either accept a slight difference in style, or negotiate a partial redo. Documenting the exact model used (name + version) in params.json at least lets you have this conversation with the facts in hand.

**My client is asking me for the "source files" of the AI video project. What do I give them?**
It is a matter of contract. Define upfront what the "source files" cover in an AI project: the renders of individual scenes, the prompts, the parameters? In most cases, the renders of the separate shots are a reasonable base. The prompts can be included depending on the pricing agreement. See the article on [delivering source files for AI projects](/en/blog/livrer-fichiers-source-video-ia-client) for the contractual details.
