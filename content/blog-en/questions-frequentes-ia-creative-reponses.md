---
title: "Creative AI questions: my 12 answers from the trenches"
date: "2026-09-27"
dateModified: "2026-09-27"
category: "guides"
excerpt: "Rights, costs, timelines, jobs, festivals, monetization: the twelve questions I get after every workshop, with sources and the grey areas."
thumbnail: "/images/blog/questions-frequentes-ia-creative-reponses/hero.webp"
---

# Creative AI questions: my 12 answers from the trenches

The room empties out and four people are still standing around the table. They waited for everyone else to leave so they could ask the thing they did not want to ask in front of the group. I have been writing those questions down for a year now. After workshops, in private messages, under videos, on calls with clients who are still on the fence.

Twelve of them keep coming back.

And for a long time I answered them badly. Too fast, jacket already half on, with the reflex of someone who knows the answer and is mentally three steps ahead. Someone asks "am I allowed to sell this" and gets back a "depends on the terms of service" that helps nobody. So here they are, written out properly, with sources where sources exist and an honest shrug where they do not. There is a full article on this blog for each of these topics, and I point at them as we go. What you get here is the short answer, the one I would give you standing next to that table.

![End of an AI workshop in a public library room, four attendees around the trainer asking their last questions](/images/blog/questions-frequentes-ia-creative-reponses/hero.webp)

## Which tool should I start with?

This is question number one, and it is almost always the wrong question. People want a name. Runway or Kling, Midjourney or Flux, as if picking right opens the door.

The order you learn things in matters more than the brand on the invoice. Until you can produce two images of the same character in two different locations, moving to video will just burn credits. Still image generation costs a few cents and answers in ten seconds. Video costs twenty to fifty times more and answers in three minutes. Fail your first few hundred attempts on the thing that is slow to learn and fast to fix.

| Tool family | What you actually learn on it | When to move to it | The classic trap |
| --- | --- | --- | --- |
| Image generators | Framing, light, lens, art direction | Day one | Mistaking a pretty still for a shot in a film |
| Writing and structure | Scene, intent, continuity between shots | Before you generate anything | Writing after generating, to justify the images you already have |
| Image to video | Motion, real shot duration, cutting points | Once your character survives two images | The per second meter running while you fumble |
| Voice and sound design | Performance intent, rhythm, presence | As soon as you cut your first sequence | A flawless voice sitting on a limp edit |
| Editing and grading | The film, for real | Right after your first batch of shots | Believing a grade rescues inconsistent lighting |

> 💡 **Frank's cut:** if you can only afford one subscription in month one, take the one that gives you several models rather than the single best model. You do not know what look you are chasing yet, and you will change your mind three times.

## Why do my shots always look "AI"?

Three causes, in order of how often I see them.

The light has no source. The subject is lit from everywhere, prettily, and you cannot say where it comes from. A trained eye catches that in half a second, even without being able to name it. Decide where the light comes from, write it into the prompt, and half the problem goes away.

The lens is missing. A cinema shot carries a distance, a compression, a depth of field that tell you where the camera is standing. Default outputs all share the same average depth, that decorative background blur matching no real lens.

And every shot runs the same length. Four seconds, four seconds, four seconds. That is what the tools render by default, and nobody thinks to break it in the edit. A cut where every shot lasts the same feels wrong even to a viewer who knows nothing about film.

I went through the exact settings and phrasings that fix this in [the prompt mistakes that make an image look artificial](/en/blog/erreurs-prompt-qui-rendent-image-ia-artificielle) and in [how to move from an amateur render to a cinema one](/en/blog/comment-passer-rendu-amateur-a-cinema-ia).

## Who owns what I generate?

Most people stop at the first of the two layers that decide the answer.

The first one is the contract you accepted by ticking a box. The tool's terms of service define what you may do commercially with your outputs, whether the service can reuse your images for training, and what changes depending on your plan. On several platforms, commercial use is tied to a paid tier. This layer governs your daily life, and it takes ten minutes to read.

The second one is copyright, and that part is still moving. The clearest public position to date comes from the [US Copyright Office](https://www.copyright.gov/newsnet/2025/1060.html), in part two of its AI report, released on January 29, 2025. Generative AI outputs are protectable only where a human author determined sufficient expressive elements. The announcement names two cases that work, a human authored work perceptible in the output, or a human making creative arrangements or modifications of that output, and it explicitly rules out "the mere provision of prompts".

![Official US Copyright Office announcement on part 2 of its AI report, with the line ruling out the mere provision of prompts](/images/blog/questions-frequentes-ia-creative-reponses/workflow-1.webp)

*Screenshot of copyright.gov, NewsNet issue 1060 dated January 29, 2025, captured on September 27, 2026.*

The same text says that using AI to assist creation, or including AI generated material in a larger human generated work, does not bar copyrightability. So a film you wrote, directed, cut and graded is not disqualified because some shots came out of a model.

In France, no decision says the same thing with that clarity, and the intellectual property code still reasons in terms of a work carrying its author's imprint, which assumes a human somewhere in the chain. I am not a lawyer, and on any file with money attached you get it checked by someone who is. The full reading map sits in [my article on copyright and AI generated images](/en/blog/droits-auteur-images-generees-ia).

> 💡 **Frank's cut:** keep your working files. Edit project, storyboard, successive versions, directing notes. The day someone challenges your authorship on a film, those files show the human input. Your prompt history does not.

## What does it cost per month?

Budget is calculated per delivered second, not per subscription. And it hangs on one thing nobody talks about: how much footage you keep.

Take a figure you can check. On my own platform, [imaginode.ai](https://imaginode.ai/fr/pricing), the European entry plan is 13 euros excluding tax for 900 credits a month, which works out to roughly 173 seconds of generated video. That is 0.075 euro per second, so about 4.50 euros per minute of raw footage. Top ups run 5 euros excluding tax for 300 credits with no expiry date, and a failed generation gives its credits back.

Out of that footage, how much survives? Early on you bin eleven shots out of twelve. With experience and a serious storyboard up front, you get down to keeping one in three.

| Keep rate | Generation cost per delivered minute | What it means |
| --- | --- | --- |
| 1 shot kept out of 12 | around 54 euros | Still hunting for your look, every shot is exploration |
| 1 in 6 | around 27 euros | You know what you want, the model still fights back |
| 1 in 3 | around 13.50 euros | Tight storyboard, stable prompts, characters holding |

The lever is never the price of a credit. It is preparation. A storyboard that locks the frame before the first generation cuts the bill by three or four, which is exactly the gap between the two ends of that table. The full map of budgets and revenue models lives in [making a living from AI video in 2026](/en/blog/vivre-video-ia-2026-modeles-revenus).

## How long does an AI film really take?

Far longer than what you read on LinkedIn, and I have numbers from my own projects.

Episode one of Lost Garden runs a little over seventeen minutes and took 63 hours of work. Not 63 hours of generation, 63 hours of total work, writing included. For that format it is still very fast compared to a traditional production. It is also a week and a half of full time work for seventeen minutes.

Episode two is the more interesting story. In June I publicly announced six weeks per episode. It came out on September 15, almost four months after the first one. In between there was the full script, the storyboard, new characters, the music, and the world consistency work. Getting a cadence wrong in public teaches you more than hitting it.

What I take from that, and what I now tell everyone: do not commit to a release rhythm until you have one complete episode behind you. Generation is fast. Deciding is slow.

## Do I have to say it was made with AI?

In Europe, yes in specific cases and no in plenty of others. Article 50 of the EU AI Act has applied since August 2, 2026, and that text is what counts.

![Official European Commission answer on when Article 50 applies and the absence of retroactive labelling](/images/blog/questions-frequentes-ia-creative-reponses/workflow-2.webp)

*Screenshot of the European Commission FAQ on the Article 50 transparency obligations, captured on September 27, 2026.*

Providers of generative systems have to mark their outputs in a machine readable way, with extra time until December 2, 2026 for systems placed on the market before August 2. Deployers, meaning you when you publish, have to clearly disclose a deepfake, defined as content closely resembling existing persons, places or events that would falsely appear authentic. And text published to inform the public on matters of public interest has to be labelled, unless it went through human review with editorial responsibility.

Two points change a director's life and get skipped in every summary. A work that is evidently artistic, creative, satirical or fictional gets a lighter regime: disclosure happens in an appropriate manner that does not hamper the display or enjoyment of the work. An end credit card satisfies that. A permanent banner across the image is not required. And content generated before August 2, 2026 does not need retroactive labelling, although the Commission encourages doing it where possible.

The [Commission's official FAQ](https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act) is short and readable, and worth twenty minutes of your time. I worked through the job by job consequences in [my analysis of screen industry roles facing AI](/en/blog/metiers-audiovisuel-ia-menaces-transformation-avis).

## Can I sell this to a client?

Yes. The blockage shows up later, when you write the quote.

A professional client buys a guarantee as much as a file. They want to know whether the image can air on television, whether it will resemble a competitor's campaign, whether anyone will contest a face on screen. Those questions get handled by contract, not by prompt. A clause that splits responsibility clearly beats an exclusivity promise you do not control.

Three things never to write in a quote: "royalty free", "exclusive" and "guaranteed legally safe". The wording I use instead is in [the contract clauses for AI generated content](/en/blog/clause-contrat-client-contenu-genere-ia), and the image selling side is in [selling AI generated images](/en/blog/vendre-images-generees-ia-legalite).

## Is AI going to take my job?

This one almost always arrives in a lower voice, and it deserves data rather than an opinion.

The French observatory on culture and media professions in the age of AI, run by Audiens, Afdas and the CNC, publishes job by job briefs based on payroll actually declared in France. Three of them say uncomfortable things for both camps. Storyboard artists were still showing a slight headcount increase through 2024, with no net observable impact, and an anticipated split between originality driven studios and standardised productions. Dubbing actors were down slightly over two years, a decline attributed to fewer commissions rather than to AI. Sound editors and mixers gained 31 percent in headcount between 2018 and 2022, then held above pre pandemic levels.

That data has a limit I state every time: declared employment in France says nothing about the foreign freelance market, and stable headcount can hide a day rate collapsing. It still beats the round predictions you read everywhere. The briefs are published by the [Afdas observatories](https://observatoires.afdas.com/observatoires/audiovisuel).

My opinion, kept separate from the data: roles that decide disappear slowly, roles that execute a repeatable task change fast.

## Do festivals accept AI films?

The word festival covers two circuits that do not play by the same rules.

Festivals dedicated to AI films exist, there are many, and nearly all of them publish their scoring grid. The Runway AI Festival film track rules give the full scale, four criteria scored 1 to 10 by each juror. The Astana AI Film Festival requires generative AI to be integral to the creation rather than limited to VFX or upscaling, with models and pipeline declared at submission. Those rules are public and almost nobody opens them before sending a film.

General festivals have not all made up their minds. Plenty of regulations do not mention AI at all, which does not mean it is allowed, only that nobody has put the question in writing yet. When in doubt, declare. A selection pulled after the fact for non disclosure costs a young reputation far more than an ordinary rejection. Where and how to circulate the film afterwards is covered in [my guide to distributing an AI film](/en/blog/distribution-film-ia-strategies-visibilite-2026).

## Can I monetize AI content on YouTube?

The Partner Program asks for 1,000 subscribers with 4,000 valid watch hours over the past twelve months, or 1,000 subscribers with 10 million valid Shorts views over 90 days. Shorts views in the dedicated feed do not count toward those 4,000 hours, which trips up a lot of people who assume the two add up.

Once you clear the threshold, everything turns on what you actually publish. The monetization policy requires original creation and explicitly excludes mass produced, generic, repetitive or manipulative content. One category targets AI personas covering health, law, finance or politics, which happens to be exactly where the ad money is. Using AI is not banned. Shipping twenty identical videos a week is, whether AI is in the loop or not.

The platform by platform rules, TikTok included, are in [making a living from AI video in 2026](/en/blog/vivre-video-ia-2026-modeles-revenus).

## What computer do I need?

For generation, your machine barely matters. The models run on the platform's servers, your browser sends a prompt and receives a file. A decent laptop is enough.

For editing it flips, and that is where people spend their money wrong. You will be juggling dozens of clips, grading, exporting, re exporting. Comfort comes from fast storage, memory, and a screen you can calibrate. I have watched people buy a high end graphics card to generate, then edit off a saturated external drive and lose three hours a day to spinning wheels.

Running locally with ComfyUI and models installed on your own machine changes the equation. There, the graphics card and its dedicated memory become the real constraint. It pays off when you generate in very high volume or when you refuse to send anything to a third party server. For a first project, going through the cloud costs less than the hardware you would need to buy. My [ComfyUI guide for video creators](/en/blog/comfyui-guide-video-createurs-debutants) covers what that setup actually involves.

## Where do I start, concretely?

The end of session question, always asked with the same fear of losing another six months.

Monday, write one scene. Just one, two pages maximum, with a location, two characters and a stake that resolves. Tuesday and Wednesday, generate your lead character until they stay the same across three different locations, and write down the exact prompt that worked. Thursday, break the scene into eight shots on paper, with shot size and light direction for each. Friday, generate those eight shots and nothing else. Saturday, cut it, lay in sound, export.

What comes out will run thirty seconds and will be bad. You will still have gone through the entire chain, which most people never do because they stay stuck at the pretty isolated shot stage. The second lap is twice as fast. The detailed end to end workflow is in [the full path from idea to a realistic AI film](/en/blog/workflow-complet-idee-film-ia-realiste).

## What these twelve questions have in common

Read as a block, they are all about risk, time, money and legitimacy. Technique never shows up. Nobody asks me how a diffusion model works. Everybody asks whether it is worth their evenings.

That is the right instinct. The tools turn over every four months, the questions stay the same. If you want to know where I am speaking from and what I have produced, [the about page](/en/about) has the background.

And if your question is not on this list, send it to me. That is how these twelve got picked.

## FAQ

### Does a very detailed prompt give me copyright over the image?

According to the public position of the US Copyright Office in part two of its report, no. The text explicitly rules out "the mere provision of prompts" as a basis for protection, including long and precise prompts, because a prompt reflects the creator's idea without controlling how that idea is expressed. What does open protection is a human authored work perceptible in the output, or a human creative arrangement of the generated material. In practice, a film you wrote, boarded, cut and graded falls on the right side of that line. A single image pulled straight out of a generator, much less so. No French decision states the same thing with that clarity to date.

### Do I have to label AI content published before August 2, 2026?

No. The European Commission states plainly that content generated before that date does not need retroactive labelling. It does encourage relevant deployers to do it where possible, since it serves the purpose of the rule. So if you have two years of published videos, you are under no obligation to go back through them. Adding a line in the descriptions as you update them costs almost nothing and saves you an awkward conversation with a cautious advertiser. The machine readable marking obligations sit with the tool providers, not with you.

### Is fiction exempt from AI disclosure?

Not exempt, lightened. The regulation provides that for an evidently artistic, creative, satirical or fictional work, disclosure happens in an appropriate manner that does not hamper the display or enjoyment of the work. In practice, an end credit card or a line in the video description satisfies the condition. Lawmakers stepped back from a permanent on screen banner that would wreck the viewing experience. Watch the scope though: this flexibility concerns the deepfake regime. It does not lift the other obligations, in particular the ones that fall on system providers regarding technical marking of files.

### Should I tell my client I use AI?

Nothing generally obliges you to, and I do it every time anyway. The reason is contractual before it is moral. Many large advertisers now run internal policies on generative AI, and finding out at the end of a production that the campaign was built this way triggers a legal freeze far more expensive than an upfront conversation. Saying it in the first meeting also lets you negotiate the right clauses, especially around liability if a face or a location gets contested. An informed client who signs carries part of the risk. A surprised client makes you carry all of it.

### How long before I get a first shot that holds up?

A week for a decent isolated shot, two to three months for a full sequence that works. That estimate comes from what I see in the people I coach, not from measured data. The first shot arrives fast because you can relaunch fifty times until one lands. The sequence is harder because character, light and set have to survive from one shot to the next, and that consistency does not happen by luck. It is exactly the stage where most people quit, concluding the tool is bad when what is missing is a method.

### Is ComfyUI mandatory for AI video?

No, and starting there wastes a lot of people's time. Online platforms cover everything you need for your first projects, with no install and no dedicated graphics card. ComfyUI becomes interesting when you generate at very high volume, when you want fine control over steps that consumer interfaces hide, or when you refuse to send images to a third party server for client confidentiality reasons. Those are three real needs, and they are all second year needs. A first project runs perfectly well on a browser and an editing suite.

### Can an AI film compete in a general festival?

Read the regulations before you pay the entry fee, because the answer is written in them. AI dedicated festivals publish explicit criteria, sometimes with the numeric scale, and some require the pipeline and models used to be declared at submission. On the general festival side, many regulations still do not mention AI, which leaves the call to the selection committee. My own rule is simple: I always declare, even when nothing requires it. A selection cancelled after the fact for non disclosure costs much more than a rejection on first read.

### How many credits does one delivered minute of video take?

Whatever you throw away is what drives the number. Starting from a checkable price, 13 euros excluding tax for 900 credits and roughly 173 seconds of generated video, a second of raw footage costs 0.075 euro. Keep one shot in three and a delivered minute costs around 13.50 euros of generation. Keep one in twelve, which is what beginnings look like, and it climbs to around 54 euros. The deciding factor is never the credit price, it is how precise your preparation was. A storyboard that locks framing and light before the first generation divides the bill by three or four.
