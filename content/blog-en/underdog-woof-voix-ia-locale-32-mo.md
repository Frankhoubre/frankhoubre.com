---
title: "Underdog Woof: a 32 MB AI voice that runs locally"
date: "2026-11-07"
time: "09:40"
category: "actualite"
excerpt: "Underdog released Woof, a 31.7 MB text-to-speech model that works offline. What it really does, its non-commercial licence, and where it fits in an AI film."
thumbnail: "/images/blog/underdog-woof-voix-ia-locale-32-mo/hero.webp"
---

The American startup **Underdog** has released **Woof**, a text-to-speech model that weighs **31.7 MB**. It runs in your browser, on your own machine, and keeps talking once the Wi-Fi is off. To show it, Underdog published a small game, **Underdog Escape**, where every voice is generated live on your computer. [TechCrunch](https://techcrunch.com/2026/11/06/underdog-shows-off-a-32mb-speech-model-in-new-demo/) covered it on November 6.

For an AI filmmaker, the question isn't "is it better than ElevenLabs". It's this: can a voice this light help while you make a film, with no subscription and without sending your script to a server? Short answer: yes for scratch voices, no for the final voice. Here's why.

What follows comes from the [official Woof page](https://underdog.ai/woof), dated October 26, 2026, the [Escape demo](https://underdog.ai/escape) and the TechCrunch article by Ivan Mehta. I read them on November 7. I haven't tested Woof on a real project: the quality figures are Underdog's.

![An animator with curly grey hair and headphones edits an animatic at her desk at night, under a lamp and in front of a wall covered in storyboards, while a dog sleeps under the table](/images/blog/underdog-woof-voix-ia-locale-32-mo/hero.webp)

## What Underdog released

Woof comes in two sizes. The **one-voice** version is 31.7 MB for 30.7 million parameters, and it's the one that runs in the web page. The **two-voice** version is 40.6 MB and downloads from Hugging Face. It only needs Python and numpy.

![Header of Underdog's official Woof page, titled Woof speaks in 31.7 MB, dated October 26, 2026, with a field to type a sentence and hear it](/images/blog/underdog-woof-voix-ia-locale-32-mo/woof-page.webp)

*Source: underdog.ai/woof, captured on November 7, 2026.*

What the page announces, point by point:

| Point | What Underdog says |
|---|---|
| Size | 31.7 MB (one voice), 40.6 MB (two voices) |
| Where it runs | In the browser with WebGPU, or in Python on your computer |
| Offline | Yes, once the model is loaded |
| Speed | 18 times faster than real time on a single CPU thread |
| Licence | CC BY-NC 4.0, non-commercial use only |
| Language | Every demo is in English, French isn't mentioned |

The headline feature is reading numbers. Woof runs every sentence through its own normalizer: a phone number, a date, a price or a code is read the way a person would say it, not as one giant figure. Underdog is aiming first at voice assistants and phone agents.

## The numbers, and where they come from

Underdog compares Woof with **Fish Audio Drama 3**, a 41.5 GB model. On 500 sentences packed with phone numbers, dates, prices and codes, the two-voice version gets **1.42%** of words wrong, the one-voice version **2.06%**, and Drama 3 **1.89%**. On everyday sentences, the one-voice version drops to 2.05% errors.

![Table from the Woof page comparing one-voice Woof (31.7 MB, 30.7 million parameters), two-voice Woof (40.6 MB, 38.2 million) and Fish Audio Drama 3 (41.5 GB, 35.9 billion parameters)](/images/blog/underdog-woof-voix-ia-locale-32-mo/woof-comparaison.webp)

*Source: underdog.ai/woof, captured on November 7, 2026.*

Two caveats. First, Underdog does the measuring, on its own protocol: a transcription model writes down what it hears, then another model counts the errors. No one independent has rerun the test yet. Second, an error rate measures whether the words are right, not whether the voice sounds good or acts well. For a film, the second part is what matters.

Woof isn't Underdog's first model. TechCrunch notes that a few weeks earlier the startup released **Bark**, a 167 MB transcription model, then a 27-billion-parameter model that runs on a laptop. Its founder, Sigil Wen, wants "private" AI, where your data stays on your machine.

![Headline of the TechCrunch article of November 6, 2026, Underdog shows off a 32MB speech model in new demo, next to an image from the demo with a retro screen showing a green waveform](/images/blog/underdog-woof-voix-ia-locale-32-mo/techcrunch.webp)

*Source: TechCrunch, article by Ivan Mehta, captured on November 7, 2026.*

## Where a 32 MB voice fits in an AI film

When I cut an animatic, I need voices right away, to feel the rhythm of a scene. Not the final voice: just enough to hear whether the dialogue fits in eight seconds or fifteen. That's exactly where a small local model becomes useful.

![Two-column diagram: yes, locally and without paid release (scratch voices for an animatic, reading the shot list during the edit, dialogue rhythm tests, internal trailer mock-ups); no, or not yet (film, ad or monetized channel because of the CC BY-NC licence, French voices, cloning an actor's voice, a character's final voice), with the figures 31.7 MB, 40.6 MB, 30.7 million parameters and 2.06% errors](/images/blog/underdog-woof-voix-ia-locale-32-mo/schema-en.webp)

What works on paper:

- **Scratch voices.** You have your whole shot list read during the edit, without paying credits for every rewrite.
- **A script that never leaves your machine.** If you work on a confidential project, nothing goes online.
- **Rhythm tests.** You change a line, you hear it a second later.

What blocks it today:

- **The licence.** CC BY-NC 4.0 forbids commercial use. A short on a monetized channel, an ad for a client or a film you sell: no. Underdog stresses it itself: this is not an Apache 2.0 licence.
- **French.** Every demo is in English. Nothing says Woof speaks French.
- **Acting.** One or two voices, with no cloning announced. To direct a character, with its emotions and its timbre, you need another tool, or better, a real actor.

> 💡 **Frank's cut:** I would never put Woof in a finished film. But a free, offline voice that reads my animatics while I edit is something I've wanted for a long time. If a model this size comes out in French with a commercial licence, it changes my workshop.

## What it changes for you as a creator

The trend matters more than the model. A year ago, decent text-to-speech needed a server and a subscription. Today an English version fits in 32 MB. Scratch voices are going to become free and local, and what stays paid is the voice that acts.

That backs up advice I give often: keep the final voice for a human, or for a tool you really direct. My guide on [dubbing and directing voice-over](/en/blog/doublage-voix-off-cloner-diriger-voix-film) explains how I go about it. And if you're thinking of cloning an actor's voice, read [my article on AI actors and their rights](/en/blog/acteurs-ia-clones-droits-opportunites) first.

## What I would do this week

1. **Open the Woof page** and type three lines from your next short in English. Listen to the rhythm, not the beauty of the timbre.
2. **Note the length of each line.** It's the most useful information for your animatic.
3. **Reread the licence** before any release. CC BY-NC means no revenue, not even indirect.
4. **Watch for a French version.** Underdog doesn't mention one, and it's the real question to follow.

## FAQ

### What is Underdog Woof?

Woof is a text-to-speech model released by the American startup Underdog, presented on its official page on October 26, 2026. It turns text into a voice and weighs only 31.7 MB in its one-voice version, or 40.6 MB in its two-voice version. It runs in the browser or on your computer, with no server, and keeps working offline once loaded. TechCrunch covered it on November 6 alongside the Underdog Escape demo.

### Does Woof really work without internet?

Yes, according to Underdog. The one-voice version downloads once in the web page, then works with the Wi-Fi off, using your machine's graphics processor through WebGPU. The two-voice version downloads from Hugging Face and runs in Python with numpy. Underdog claims a speed of 18 times real time on a single CPU thread. What you type stays on your computer and is sent nowhere, according to the model's page.

### Can I use Woof for a film or a monetized video?

No, not under the current licence. Woof is released under CC BY-NC 4.0, which allows use, modification and sharing, but not commercial use. A film you sell, an ad for a client or a channel that earns money are therefore ruled out. Underdog says so on its page: this is not an Apache 2.0 licence. For personal use, tests or internal scratch voices, the licence allows it.

### Does Woof speak French?

Nothing suggests it does. Every demo Underdog has published, on the Woof page and in the Escape game, is in English, and the number normalizer reads figures the English way. The page mentions no other language. If you work in French, Woof won't help you today, except on projects made in English. It's the point to watch in the next versions.

### Is Woof better than a 41 GB model?

On one specific point, according to Underdog. On 500 sentences full of numbers, dates and codes, the two-voice version gets 1.42% of words wrong, against 1.89% for Fish Audio Drama 3, a 41.5 GB model. The one-voice version scores 2.06%. These figures come from Underdog, not from an independent test, and they judge whether the words are right, not emotion or acting. For a character's voice, a large model or an actor is still ahead.

### What can an AI filmmaker do with Woof?

Mostly scratch voices. You can have your shot list read while you cut an animatic, test the rhythm of a dialogue or build an internal trailer mock-up, without paying credits and without sending your script online. For the final voice, the non-commercial licence, the lack of French and the lack of cloning make it unsuitable today. Keep it as a workshop tool, not as a release voice.
