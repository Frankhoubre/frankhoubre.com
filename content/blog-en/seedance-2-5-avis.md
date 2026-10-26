---
title: "Seedance 2.5 review: what it changes for a series"
date: "2026-10-23"
dateModified: "2026-10-23"
category: "analyses"
excerpt: "Seedance 2.5 review from an AI series director: 30-second takes, 50 references, official prices from October 23, real limits and where to use it safely."
thumbnail: "/images/blog/seedance-2-5-avis/hero.webp"
---

Seedance 2.5 is the best video model I know of for a series with recurring characters, on one condition: you show up with your character bible already built. A single take can run 30 seconds, one generation accepts 50 references (30 images, 10 videos, 10 audio tracks), and the model hands back the last frame so you can chain the next shot. The downsides are real: no real faces as input, 1080p max on the API despite the "4K" on the Dreamina and CapCut pages, and a second of 1080p costs about two and a half times a second of 720p.

Before we go further: Seedance 2.5 is the default video model in ScreenWeaver, which I co-founded, and my series Lost Garden is produced in ScreenWeaver. So I have every reason to want you to like this model. To offset that, every number below links to an official page I checked on October 23, 2026, and I didn't run a single test generation for this article.

![White-haired choreographer kneeling in a rehearsal hall, pressing numbered tape marks onto the floor while a barefoot actor waits on his mark, a grey clay figure standing on a stool](/images/blog/seedance-2-5-avis/hero.webp)

<Verdict tool="Seedance 2.5" forWhom="Directors of series, short films and fiction who prepare their characters and sets ahead of time and want long, consistent takes." link="https://seed.bytedance.com/en/seedance2_5" linkLabel="See the official page">
<Strengths>

- Up to 30 seconds per generation, versus 15 on 2.0
- 50 references per request, including 10 audio tracks
- Last-frame return, plus extending and editing an existing video
- Draft mode in 480p to approve a take before the final render

</Strengths>
<Weaknesses>

- No real human faces accepted as reference images or videos
- 1080p max on the API, 4K stays on 2.0
- $10.70 per million tokens, versus $7 for 2.0
- Official pages disagree depending on the channel (30 s, 180 s, 4K)

</Weaknesses>

For fiction with characters who come back episode after episode, this is the model I'd reach for first. For short ads or look tests, 2.0 or 2.0 Mini cost far less and are often enough.

</Verdict>

## What is Seedance 2.5, exactly?

Seedance 2.5 is a video generation model from ByteDance Seed, the group's research team. It's a model, so you never buy "Seedance" on its own. You reach it through Dreamina or CapCut as a consumer, through the BytePlus ModelArk API as a developer, or through a tool that integrates it (ScreenWeaver, Higgsfield, fal.ai, OpenRouter and others). The official page describes it as a model that generates picture and sound together, built to tell a story in 30 seconds.

<Screenshot src="seedance-2-5-page-officielle-2026-10-23.webp" alt="Official Seedance 2.5 page on the ByteDance Seed site, with the model name over a dancer in a red dress behind flames and the Get API, Try now and Compare now buttons" caption="The official ByteDance Seed page. It points to the API and to the group's own apps, never to a site named after the model." source="https://seed.bytedance.com/en/seedance2_5" capturedAt="2026-10-23" />

Search for Seedance 2.5 pricing and you'll land on seedance.fr, seedance.tv or seadance.io. None of these sites appear on the ByteDance Seed page or in the BytePlus docs. They resell access to the model (or say they do) with their own credits. On Reddit, the answer Google highlights under "Is Seedance 2 Unlimited a legit site?" already pointed people to Dreamina as the official route. If you're paying, pay ByteDance or a tool whose publisher you know.

## What 2.5 changes compared with 2.0

The BytePlus tutorial for Seedance 2.5 lists the changes plainly. I put them side by side with 2.0, because that comparison decides your budget.

<ComparisonTable caption="Seedance 2.5 and Seedance 2.0 on the official BytePlus ModelArk API" source="https://docs.byteplus.com/en/docs/ModelArk/2607688" checkedOn="2026-10-23">

| Spec | Seedance 2.5 | Seedance 2.0 |
|---|---|---|
| Length per generation | 4 to 30 s | 4 to 15 s |
| References per request | 50 (30 images, 10 videos, 10 audio) | 15 (9 images, 3 videos, 3 audio) |
| Audio-only reference | Yes | No, needs an image or video |
| Output resolution | 480p, 720p, 1080p (10-bit) | 480p, 720p, 1080p, 4K |
| Draft mode | Yes | No |
| Last-frame return | Yes | Yes |
| Output format | mp4 and mov | mp4 |
| API price at 720p (per million tokens) | $10.70 | $7 |

</ComparisonTable>

<Gallery caption="The capabilities table and output specs in the official documentation">
<Screenshot src="seedance-2-5-byteplus-capacites-2026-10-23.webp" alt="Capabilities table in the BytePlus docs: 50 references for Seedance 2.5 versus 15 for the 2.0 versions, Draft mode only on 2.5, last-frame return on all of them" caption="The row I care about most for a series: 50 references versus 15. Draft mode only exists on 2.5." source="https://docs.byteplus.com/en/docs/ModelArk/2607688" capturedAt="2026-10-23" />
<Screenshot src="seedance-2-5-byteplus-limites-2026-10-23.webp" alt="Seedance output specs in the BytePlus docs: 1080p at 10-bit for 2.5, 4K only on 2.0, length of 4 to 30 seconds versus 4 to 15" caption="4K sits in the 2.0 column, not the 2.5 one. Length goes from 15 to 30 seconds." source="https://docs.byteplus.com/en/docs/ModelArk/2607688" capturedAt="2026-10-23" />
</Gallery>

4K exists on 2.0 and not on 2.5, even though Dreamina and CapCut put "4K" in the headline of their Seedance 2.5 pages. 2.5's 1080p does go 10-bit, which leaves more room in the grade. The other addition is mov output, H.264 with yuv444p chroma and PCM audio. ByteDance pitches it as a format for editing and extending, which tells you the model is aimed at people who cut their footage afterwards.

## What it changes when you're making a series

I've been producing Lost Garden, a dark fantasy animated series, with AI. Episode 2 runs 21 minutes and took me 75 hours, with about $1,850 in generation costs. The series site credits Seedance 2 and other models: no single model made an episode. What follows comes from the documentation and from that practice. I didn't run any benchmark.

Start with length. At 15 seconds, a dialogue exchange gets split across three or four generations, and every cut is a chance for a coat to change color. At 30 seconds, a line and its reply fit in one take. Fewer cuts, less drift. ByteDance adds that a video can be extended twice, and the API takes a 4 to 30 second reference video to continue or edit.

The reference count matters even more. With 9 images you had to choose: face front-on, a profile, the costume, the set, and you were out. With 30 images you can give three angles of every character in a three-hander, the set under two lighting setups, and still have room to spare. It's the same method I describe for [keeping the same character from shot to shot](/en/blog/garder-meme-personnage-video-ia), except the model finally takes the whole folder at once. The 10 audio slots also let you pass a character's voice as a reference, which 2.0 only allowed alongside an image.

The API also returns the clip's last frame. You feed it in as the first frame of the next shot and the motion carries on instead of restarting. Over a 20-minute episode, you'll do that dozens of times.

<Screenshot src="seedance-2-5-page-officielle-production-2026-10-23.webp" alt="Aiming for Professional Production section of the official Seedance 2.5 page, with a grey-block render of a bedroom turned into an animated scene and an actress on green screen placed on a jungle staircase" caption="White-model control and green-screen compositing, as ByteDance shows them. It's the AI version of blocking actors on set." source="https://seed.bytedance.com/en/seedance2_5" capturedAt="2026-10-23" />

The white model is for blocking. You build a scene in grey volumes (in Blender or any 3D tool), move the camera and some silhouettes through it, and Seedance 2.5 dresses it with your character and set references. For a fight or a scene with several characters, that's far more reliable than describing positions in text. I cover this in [the anatomy of a successful AI shot](/en/blog/anatomie-plan-ia-reussi-analyse): you think a shot through in camera and blocking before you think it in prompts.

Then there's Draft mode, for rehearsing without going broke. 2.5 renders a 480p draft at the 480p rate, then you run the final 1080p render from that draft with the same settings. On a series, where most takes end up in the bin, that's the feature that protects your budget the most.

> 💡 **Frank's Cut:** before the first generation of an episode, build one folder per character with three face angles, a full-length costume shot and a ten-second voice clip. Name the files after the characters. On the day you shoot scene 40, you drop the whole folder into the request instead of rebuilding a reference from memory.

## The flaws you can spot before generating anything

I haven't logged a test for this article. So all of these come from official pages or public feedback, and they're the ones I'd check before paying.

First, faces. The BytePlus docs say it in a warning box: Seedance 2.5 doesn't accept reference images or videos that contain a real human face. ByteDance offers three workarounds: reuse a face already generated by a model on the same account, pick from a library of digital characters, or provide a portrait you have permission to use.

<Screenshot src="seedance-2-5-byteplus-visages-2026-10-23.webp" alt="Warning box in the BytePlus Seedance 2.5 docs stating the model does not accept reference images or videos with real human faces, followed by the image requirements" caption="The real-face warning. If your series starts from real actors, you'll have to go through the authorized-portrait process." source="https://docs.byteplus.com/en/docs/ModelArk/2607688" capturedAt="2026-10-23" />

For an animated series like Lost Garden, that's fine: the characters are invented. For fiction with real actors, plan an extra step for every performer. After Seedance 2.0 came out in February 2026, Disney and other studios threatened ByteDance with legal action over intellectual property, and [ByteDance announced stronger safeguards](https://variety.com/2026/film/news/bytedance-safeguards-seedance-disney-legal-threat-ip-violations-1236664395/), according to Variety.

Next, the pages contradict each other. The API docs say 30 seconds and 1080p. The Dreamina page talks about 4K and a long-video beta mode up to 180 seconds. CapCut writes "native 30-second 4K videos". I can't tell you which one holds in your account, and that's the whole problem: before paying for 4K or 180 seconds, check them on the exact plan you're buying.

<Screenshot src="seedance-2-5-dreamina-duree-2026-10-23.webp" alt="Section of the Dreamina Seedance 2.5 page announcing 30-second videos in standard mode and up to 180 seconds in the long-video beta, next to a character turnaround sheet" caption="Dreamina claims 180 seconds in beta. The API documentation stops at 30 seconds per generation." source="https://dreamina.capcut.com/seedance/seedance-2-5" capturedAt="2026-10-23" />

At the bottom of the Dreamina Seedance 2.5 page, the user testimonials are dated May 18 to June 5. Seedance 2.5 came out on July 31, 2026. Those reviews can't tell you anything about 2.5, and I wouldn't let them weigh on your decision.

<Gallery caption="What the review pages say, on Dreamina and on Trustpilot">
<Screenshot src="seedance-2-5-dreamina-temoignages-2026-10-23.webp" alt="What users say block on the Dreamina Seedance 2.5 page with reviews signed Sophia Taylor on June 3, Ethan Clark on May 18 and Michael Scott on June 4" caption="Reviews of Seedance 2.5 dated May and June, before the model shipped on July 31." source="https://dreamina.capcut.com/seedance/seedance-2-5" capturedAt="2026-10-23" />
<Screenshot src="seedance-2-5-trustpilot-dreamina-2026-10-23.webp" alt="Trustpilot page for Dreamina Capcut showing a 1.6 rating from 28 reviews, unclaimed profile, mostly one-star reviews" caption="On Trustpilot, Dreamina sits at 1.6 from 28 reviews. The complaints are about the app and billing, not the model itself." source="https://fr.trustpilot.com/review/dreamina.capcut.com" capturedAt="2026-10-23" />
</Gallery>

As for public feedback, the model doesn't have its own Trustpilot page. [Dreamina's](https://www.trustpilot.com/review/dreamina.capcut.com) showed 1.6 from 28 reviews on October 23, with an unclaimed profile. Recent complaints are about credits burned on failed generations, slow support and billing. Those reviews judge the app more than the engine. But if you go through Dreamina, the app is what you'll live with.

Last point, money. To enable Seedance 2.5 on BytePlus, the docs recommend an account balance above $30, a savings plan of at least $30 or a dedicated resource pack. The pricing page lists no free quota for video models.

## How much does Seedance 2.5 cost in October 2026?

The API bills per token, Dreamina bills credits inside a subscription. Here's the official API grid as of October 23.

<ComparisonTable caption="Official BytePlus ModelArk API prices for Seedance, video generated without input video" source="https://docs.byteplus.com/en/docs/ModelArk/1544106" checkedOn="2026-10-23">

| Model | 480p and 720p (per million tokens) | 1080p | Example: 5 s at 720p | Example: 5 s at 1080p |
|---|---|---|---|---|
| Seedance 2.5 | $10.70 | $11.70 | $1.156 | $2.843 |
| Seedance 2.0 | $7 | $7.70 | $0.76 | $1.87 |
| Seedance 2.0 Fast | $5.60 | Not offered | $0.60 | Not offered |
| Seedance 2.0 Mini | $3.50 | Not offered | $0.38 | Not offered |

</ComparisonTable>

<Gallery caption="The official price grid and the per-video examples">
<Screenshot src="seedance-2-5-byteplus-tarifs-2026-10-23.webp" alt="BytePlus video model price grid: dreamina-seedance-2-5 at 10.70 dollars for 480p and 720p, 11.7 for 1080p, 4K not supported, Seedance 2.0 at 7 dollars" caption="Price per million tokens. 4K on 2.5 is marked Not supported." source="https://docs.byteplus.com/en/docs/ModelArk/1544106" capturedAt="2026-10-23" />
<Screenshot src="seedance-2-5-byteplus-exemples-2026-10-23.webp" alt="BytePlus billing examples for Seedance 2.5 at 16:9 and 5 seconds: 0.514 dollars at 480p, 1.156 at 720p, 2.843 at 1080p, or 0.231 dollars per second at 720p" caption="The official examples for a 5-second clip. At 1080p, a second costs $0.569." source="https://docs.byteplus.com/en/docs/ModelArk/1544106" capturedAt="2026-10-23" />
</Gallery>

Run the numbers on an episode. Lost Garden episode 2 is 21 minutes, so 1,260 seconds. At the official rate, 1,260 seconds of Seedance 2.5 cost about $291 at 720p and $717 at 1080p, assuming you keep every take on the first try. That never happens. The real $1,850 for the episode covers all generation (images, sound, several video models, failed takes), but the gap gives you a feel for the ratio between what you shoot and what you keep. I break this kind of budget down line by line in [how much an AI short film costs](/en/blog/combien-coute-court-metrage-ia-2026).

Draft mode changes that math. A 5-second draft at 480p costs $0.514 versus $2.843 at 1080p. If you approve in draft and only push the keepers to 1080p, you pay full price only on what makes the edit.

On Dreamina, the model comes with the subscriptions. The Seedance 2.5 page showed a very aggressive launch offer on October 23, priced in euros for a visitor from France.

<Screenshot src="seedance-2-5-dreamina-tarifs-2026-10-23.webp" alt="Dreamina price grid on October 23, 2026 in euros: Basic 0.27 euros the first month then 13.99, Standard 18.60 then 31, Advanced 82.80 then 138, Ultra 270 then 450, Seedance 2.5 from 0.01 and from 0.04 euros per second banners" caption="The teaser prices only apply to the first month. Look at the crossed-out price: that's what you'll pay after." source="https://dreamina.capcut.com/seedance/seedance-2-5" capturedAt="2026-10-23" />

Basic costs €0.27 for the first month (by credit card, debit card or PayPal), then €13.99 a month for 1,361 credits. Standard goes from €18.60 to €31 (3,336 credits), Advanced from €82.80 to €138 (15,234 credits at the default tier), Ultra from €270 to €450 (51,067 credits). Standard and Advanced advertise 59% credit savings on Seedance 2.5 at 720p, Ultra 75%. Basic's "from €0.01/sec" banner relies on the first-month promo price, so don't build a budget on it.

## Is Seedance 2.5 free?

Not really. The BytePlus API has no free quota for video models and asks for a deposit before you can enable 2.5. Dreamina lets you get started for free (the "Get started for free" buttons on its Seedance 2.5 page), but that page doesn't say how many credits you get, and watermark removal is listed as a paid perk. "Seedance unlimited" offers on third-party sites aren't ByteDance offers.

## Where to use Seedance 2.5 without getting burned

Pick the route by what happens to the shot after you generate it.

- **Dreamina** if you want to generate shots without writing code. It's ByteDance's official app, with a free start and the plans above.
- **CapCut** if you already edit in CapCut. The dedicated page puts Seedance 2.5 right inside the editor, with an "Intelligent Edit Mode".
- **The BytePlus ModelArk API** if you automate, want Draft mode and mov output, or need the exact price grid.
- **A tool that integrates it** if you want your shots tied to something else (a script, a canvas, other models).

<Screenshot src="seedance-2-5-capcut-page-2026-10-23.webp" alt="CapCut Seedance 2.5 for Filmmaker Content page announcing native 30-second 4K videos, up to 50 multimodal references and an Intelligent Edit Mode in the editor" caption="CapCut puts Seedance 2.5 in its editor and also claims 4K." source="https://www.capcut.com/features/seedance-2-5-for-filmmaker-content" capturedAt="2026-10-23" />

That last case is ours, and it's where my conflict of interest is strongest. In ScreenWeaver, Seedance 2.5 is the default model on a Video node, alongside Seedance 2.0, Veo 3.1, Kling 3.0, MiniMax H3, Wan 3.0 and Grok Imagine Video 1.5. The shot starts from the script and the storyboard, and since October 19 a Video node accepts reference videos with 2.5. What ScreenWeaver won't give you is the API's per-token price: you pay in ScreenWeaver credits, and the per-generation rate isn't published. If you want to see how a series goes from script to shot, the [Seedance page on ScreenWeaver](https://www.screenweaver.ai/go/bl-seedance-a/seedance-2-5-avis) shows the idea.

<Screenshot src="seedance-2-5-screenweaver-page-2026-10-23.webp" alt="ScreenWeaver Seedance page presenting video generation from the screenplay, with multiple shots per scene and consistent characters" caption="ScreenWeaver's Seedance page, which starts from the script rather than the prompt." source="https://www.screenweaver.ai/seedance-2" capturedAt="2026-10-23" />

## When to pick another model

If you make 10-second ads or look tests, 2.0 Mini costs $0.38 for 5 seconds at 720p, a third of 2.5. I covered [Seedance 2.0 Mini when it launched](/en/blog/seedance-2-mini-bytedance-video-rapide-juin-2026): for a one-off shot with no continuity at stake, it's enough.

If your film starts from real actors, the real-face block will slow you down. Look at the other engines in [my roundup of AI video tools](/en/blog/meilleurs-outils-ia-video) before you commit.

If you want one subscription for several models, Higgsfield offers Seedance 2.5 next to about twenty other engines, though not on its entry plan according to its October 16 pricing. I read its terms closely in [my Higgsfield review](/en/blog/higgsfield-avis-realisateur).

If your project is an anime, Vidu Q4 costs less per second and leans into the 2D look. I ranked it right behind Seedance 2.5 in my [list of the best AI tools to make an anime](/en/blog/meilleure-ia-anime-2026).

And if you just want a more cinematic look from the previous generation, my methods for [getting a cinema render with Seedance 2](/en/blog/comment-obtenir-rendu-cinema-avec-seedance-2) and the [complete Seedance 2 workflow](/en/blog/workflow-complet-seedance-2-rendu-cinema) still apply to 2.5: an honest pilot image, modest motion, rejection criteria written down before you generate.

<Methodology date="2026-10-23">

Sources checked on October 23, 2026: the official Seedance 2.5 page from ByteDance Seed, the Seedance 2.5 tutorial and price grid in the BytePlus ModelArk docs, Dreamina's Seedance 2.5 page, CapCut's Seedance 2.5 page, Dreamina's Trustpilot page, ScreenWeaver's Seedance page, Variety's piece on ByteDance's safeguards. Google search the same day for "seedance 2.5 avis" and "seedance 2.5 prix". The Dreamina prices were served in euros to a visitor from France.

- Not tested: no generation run for this article, no account created. Draft mode, 4K, 180 seconds and actual output quality were not checked in an account.
- From my own practice: producing Lost Garden in ScreenWeaver, with Seedance 2 and other models (episode 2: 21 minutes, 75 hours, about $1,850 in generation).
- Conflict of interest: I co-founded ScreenWeaver, which ships Seedance 2.5 as its default video model. No affiliate links in this article.

</Methodology>

<CtaScreenWeaver title="Your series, from script to Seedance shot" destination="seedance" />

## FAQ

### Is Seedance 2.5 free?

No, not in the sense of unlimited access. The official BytePlus API offers no free quota for its video models and recommends a balance of at least $30 to enable 2.5. Dreamina, ByteDance's app, lets you get started for free, but its Seedance 2.5 page doesn't publish how many credits you get, and watermark removal is reserved for paid plans. Sites promising "unlimited Seedance" aren't run by ByteDance. For a first risk-free try, Dreamina's free start is still the simplest way in, followed by a single paid month if the model suits you.

### How much does a second of Seedance 2.5 cost?

On the official API, the example BytePlus published on October 23, 2026 works out to $0.103 per second at 480p, $0.231 at 720p and $0.569 at 1080p, for a 16:9 video with no input video. A 5-second clip therefore costs $1.156 at 720p. Dreamina shows "from €0.01/sec" on its Basic plan and "from €0.04/sec" on Ultra, but those figures rest on first-month promo prices. After that, Basic goes back to €13.99 a month for 1,361 credits. Always count failed takes in your budget, because you'll have plenty of them.

### Where can I use Seedance 2.5?

The official routes are Dreamina and CapCut for consumers, and the BytePlus ModelArk API for developers. The model is also built into third-party tools like ScreenWeaver, Higgsfield, fal.ai and OpenRouter, each with its own credits. Be wary of domains named after the model (seedance.fr, seedance.tv, seadance.io): they don't appear on the ByteDance Seed page or in the BytePlus docs. Pay a publisher you can identify. If you only want to test, start on Dreamina; if you need to automate or control costs to the cent, go to the API.

### Does Seedance 2.5 really generate 4K?

Not on the API. The BytePlus API docs cap Seedance 2.5 at 480p, 720p and 1080p in 10-bit, and mark 4K as not supported in the price grid. It's Seedance 2.0 that outputs 4K on the API. Dreamina and CapCut still advertise 4K on their Seedance 2.5 pages. I haven't checked it in an account. If 4K matters for your project, test it on the exact plan you intend to buy before you commit to several months, and keep a record of what you get.

### Can I use real faces with Seedance 2.5?

Not directly. The official docs say Seedance 2.5 doesn't accept reference images or videos that contain a real human face. ByteDance offers three options: reuse a face already generated by a model on the same account, pick a character from a library of preset digital characters, or go through portraits you've been authorized to use. For an animated series or invented characters, it's not an issue. For fiction built on real actors, put that step in your schedule and check the process before you start shooting anything.

### What's the difference between Seedance 2.5 and Seedance 2.0?

2.5 doubles the length of a generation (30 seconds versus 15), triples the reference count (50 versus 15, including 30 images and 10 audio tracks), accepts an audio track on its own as a reference, and adds a 480p Draft mode and mov output. 2.0 keeps 4K, which 2.5 doesn't have on the API, and costs less: $7 per million tokens at 720p versus $10.70. For a long scene with several characters, 2.5 is worth the difference. For a short, standalone shot, 2.0 or 2.0 Mini will do just fine.

### Can Seedance 2.5 make a 3-minute video?

Not in a single generation on the API: the docs set length between 4 and 30 seconds, with the option to extend a video over several rounds. Dreamina advertises a long-video beta mode up to 180 seconds, which I couldn't verify. For a series, I wouldn't count on a three-minute take anyway: an episode is built shot by shot, from a breakdown. The last frame the model returns is what lets you chain one 30-second take into the next without breaking the motion.
