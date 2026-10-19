---
title: "LTX Studio Review 2026: Does Script to Film Hold Up?"
date: "2026-10-17"
dateModified: "2026-10-17"
category: "analyses"
excerpt: "A filmmaker's LTX Studio review: prices checked October 17, credits, storyboards from a script, refunds, and what's still missing to carry a whole film."
thumbnail: "/images/blog/ltx-studio-avis/hero.webp"
---

LTX Studio delivers on its "script to final cut" pitch on one condition: you pay for Standard, at €35 a month. That's the plan that unlocks storyboards generated from a script, Elements to keep your characters stable from shot to shot, the Kling and Seedance models, and the right to use your footage for a client. Below that, you get a good in-house generator (LTX-2.5) and blank storyboard pages. If you're a director prototyping a short or an ad, it's a real workshop. If you want to write a film, the writing part is still missing.

I co-founded ScreenWeaver, which also sells a script, storyboard and production pipeline, so LTX Studio is our most direct competitor. I didn't run a single generation in LTX for this review. Everything below comes from the official pages I checked on October 17, 2026, the help center and public reviews, and I flag it every time something is my own read.

![Grey-haired projectionist threading film into a 35mm projector at dawn, with a strip of storyboard sketches taped to the booth window](/images/blog/ltx-studio-avis/hero.webp)

<Verdict tool="LTX Studio" forWhom="Directors, agencies and ad creators who want to go from a script or a concept to an animated mockup in one workspace, and who are willing to pay for Standard to get the tools that matter." link="https://ltx.io/studio" linkLabel="See LTX Studio">
<Strengths>

- One workspace for storyboard, generation, timeline and sound
- Elements: character, object, location, style and color, called by name in the prompt
- In-house LTX-2.5 model on every plan, free included
- Lightricks publishes the LTX-2 model as open source, weights included

</Strengths>
<Weaknesses>

- Script-to-storyboard, Elements and the commercial license start at Standard (€35)
- Veo 3.1 only on Pro, at €125 a month
- The pricing page doesn't say how many credits a generation costs
- 1.6 on Trustpilot from 77 reviews, mostly about refunds

</Weaknesses>

A solid pick for mocking up an ad, a music video or a teaser with a small team and real camera control. For a written short film, keep your screenwriting software open next to it: LTX reads a script, it doesn't help you write one.

</Verdict>

## What LTX Studio is in October 2026

LTX Studio is the video platform from Lightricks, the Israeli company behind Facetune and Videoleap. It [launched in February 2024](https://en.wikipedia.org/wiki/LTX_Studio) and now lives on ltx.io, with the old ltx.studio domain redirecting there. The tagline at the bottom of the homepage sums up the idea: "Write it. Board it. Cut it." Write, board, edit, all in one workspace.

<Screenshot src="ltx-studio-accueil-2026-10-17.webp" alt="LTX Studio homepage with the headline Video creation for filmmakers, advertisers and creative teams, a Start now button and three tiles for Gaming, VFX and Advertising Agencies" caption="The homepage on October 17: LTX talks to filmmakers, advertisers and teams first, under a banner about the LTX-2.5 release." source="https://ltx.io/studio" capturedAt="2026-10-17" />

Lightricks also builds its own model. LTX-2.5 came out on August 11, 2026 and runs on every plan. The company publishes a family of open models too, plus LTX Desktop for generating locally. The online studio itself isn't open source, as the homepage FAQ points out.

It's desktop only. The help center says plainly that there's no app and no mobile version.

## From script to storyboard: what actually happens

The script-to-film promise is what made me open LTX first. On the homepage, you pick one of four starting points.

<Screenshot src="ltx-studio-points-de-depart-2026-10-17.webp" alt="LTX Studio Choose your starting point section with four entries: From Script, With a Concept, From an Image and From a Video" caption="Four ways to start a project. From Script promises scenes and a storyboard as soon as you upload your script." source="https://ltx.io/studio" capturedAt="2026-10-17" />

"From Script": you upload your script and the tool generates scenes and a storyboard. The other options start from a concept in a few lines, an image or a video. On paper, it fills the gap most generators leave between script and image.

The plan table adds a condition. The free plan gives you "Blank Storyboards", empty boards. "AI Storyboards", the ones that fill themselves from your text, only show up from Standard. Same for Pitch Decks. So the feature that sells LTX to a screenwriter costs €35 a month, or €28 billed yearly.

Watch the verb as well: "upload". LTX takes in a script written somewhere else. Neither the homepage, the pricing page nor the help center describes a screenplay editor in standard format, with scenes, dialogue and version history. I couldn't find a help article explaining how the breakdown stays tied to the text when you rewrite it either. If sequence 12 changes, nothing in the public docs tells you what happens to the shots you already generated. That's the first thing I'd check during the 14-day refund window, before going past 1,200 credits.

> 💡 **Frank's cut:** before you import a script into any tool that breaks it down for you, freeze a version and write down its number. When you rewrite, you'll know which shots came from which draft. Skip that and you end up redoing good shots while keeping ones that no longer match.

If you want to know what a shot breakdown should contain before you even open a tool, I went through the method in [preparing your shot breakdown before generating](/en/blog/preparer-decoupage-technique-avant-generation-video-ia).

## Elements, camera and LTX-2.5: the solid part

Elements are the first thing I look at in this kind of tool. Here's how they work according to the help article updated on September 11, 2026: you create a character, object, location, style or color (as a HEX code) once, then call it by name in any prompt. A character can even get a voice, so narration stays the same from one shot to the next.

<Screenshot src="ltx-studio-elements-aide-2026-10-17.webp" alt="LTX help article Introduction to Elements with a Plan Availability box listing Standard, Pro and Enterprise" caption="The official help page on Elements. The dark box is the part that matters: the feature starts at Standard, and the shared Brand Kit is Enterprise only." source="https://help.ltx.io/hc/en-us/articles/33578393195922-Introduction-to-Elements" capturedAt="2026-10-17" />

That's the right method. Character consistency comes from the reference, and I walk through it step by step in [why characters change from one scene to the next](/en/blog/pourquoi-personnages-changent-chaque-scene-ia). LTX built it into the tool. It isn't available on Free or Lite.

On the model side, the August 11 release note describes an LTX-2.5 built for production: several connected shots generated in one pass ("Native Multishot"), with character, set, lighting and voice meant to hold across cuts, a Gemma 4 12B text encoder to follow dense prompts, clip length predicted from the scene, and EXR in and out.

<Screenshot src="ltx-studio-ltx-2-5-notes-2026-10-17.webp" alt="LTX-2.5 release note from August 11, 2026 listing Native Multishot, Custom Gemma 4 12B Text Encoder, Auto Duration and Native EXR Workflow" caption="The LTX-2.5 release note. Native Multishot is the promise a director cares about: several connected shots, generated together." source="https://ltx.io/release-notes" capturedAt="2026-10-17" />

I haven't checked those claims in a test, so I'm passing them on the way the company describes them. Shot length is documented: according to the FAQ, a shot runs 3 to 20 seconds depending on the model, 20 for LTX-2, and you assemble shots in the timeline to go longer.

The rest of the toolbox looks strong on paper: camera control, keyframes to define motion, visual references, preset styles, audio to video, video to video, SDR to HDR conversion, and node-based automations called Flows. The April release notes add a collaborative Canvas, an image editing space and video upscaling up to 8K.

## How much LTX Studio costs in October 2026

The pricing page shows euros for a visitor from France. Here's what it displayed on October 17, 2026, logged out.

<ComparisonTable caption="LTX Studio plans, prices shown to a visitor from France" source="https://ltx.io/studio/pricing" checkedOn="2026-10-17">

| Plan | Monthly | Yearly (per month) | Credits | What matters for a director |
|---|---|---|---|---|
| Free | €0 | €0 | 800, one time | LTX-2.5 and 2.3, blank storyboards, personal use |
| Lite | €15 | €12 (€144 a year) | 8,000 a month | Upscales, editing tools, no watermark, personal use |
| Standard | €35 | €28 (€336 a year) | 28,000 a month | AI storyboards, Elements, Kling 3.0, Seedance 2.0, Nano Banana, commercial license |
| Pro | €125 | €100 (€1,200 a year) | 110,000 a month | Veo 3.1, 3 collaborators per project, on-demand top-ups |
| Enterprise | custom | custom | custom | Unlimited collaborators, custom-trained LTX-2.3 model, SSO |

</ComparisonTable>

<Screenshot src="ltx-studio-tarifs-2026-10-17.webp" alt="LTX Studio pricing page on yearly billing: Free at 0 euros with 800 one-time credits, Lite at 12 euros, Standard at 28 euros with 28000 credits, Pro at 100 euros with 110000 credits" caption="The October 17 grid on yearly billing (20% off). Every feature a director cares about sits in the Standard column." source="https://ltx.io/studio/pricing" capturedAt="2026-10-17" />

Pay attention to the license. Free and Lite are for personal use only: the help center limits them to your own social accounts and website, with no business promotion, no sponsored content and no paid work. So Lite at €15 looks like the perfect way in, but you can't deliver what you make there to a client. LTX's general FAQ muddies this by saying paid plans "for commercial projects" start at $15. The pricing page and the commercial license help article both put the line at Standard.

<Screenshot src="ltx-studio-modeles-par-offre-2026-10-17.webp" alt="LTX pricing page model comparison by plan: LTX-2.5 and Z-Image checked everywhere, Veo 3.1 checked only in the last two columns" caption="The Models section of the comparison, columns in order Free, Lite, Standard, Pro, Enterprise. Veo 3.1 is only checked for Pro and Enterprise, Kling and Seedance from Standard." source="https://ltx.io/studio/pricing" capturedAt="2026-10-17" />

On models, LTX offers Seedance 2.0, not 2.5. Kling 3.0 Pro and Kling 2.6 Pro come with Standard, Veo 3.1 with Pro only. A note at the bottom of the page says Lightricks may swap the available models with no guarantee they'll stay.

Then comes the question every producer asks: how many shots fit in 28,000 credits? The pricing page won't say. It explains that each action (rendering a video, changing a character's look, creating a shot) uses a different amount, and that your balance shows at the top of the app. Without a paid account I can't give you a reliable number, and I won't make one up. Two rules from the help center are worth remembering: unused credits don't roll over to the next month, and a generation blocked by moderation isn't charged.

## Refunds, free plan, cancelling: the written rules

Almost every negative review of LTX is about money, so I read the rules before reading the complaints.

<Screenshot src="ltx-studio-remboursement-2026-10-17.webp" alt="LTX Studio pricing FAQ opened on the refund policy: request within 14 days and usage under 1200 credits" caption="The refund rule on the pricing page: 14 days and fewer than 1,200 credits used. The help center adds that renewals are never refunded." source="https://ltx.io/studio/pricing" capturedAt="2026-10-17" />

Getting a Studio subscription refunded takes three conditions: a first purchase, within 14 days, with fewer than 1,200 credits used. Renewals and upgrades aren't refundable, according to the refund policy help article updated in July. The help center says every eligible request gets approved and that others are looked at case by case.

Put 1,200 credits next to Standard's 28,000: you can use about 4% of your month before you lose the refund. That's a short runway to judge a production tool, and it matches the complaint that keeps coming up in reviews.

The free plan gives you 800 credits once. They don't expire, but they never renew, and the help center warns that not every region gets them. If you move to a paid plan before using them, your plan's allowance replaces them. Spend them before you subscribe.

You cancel from "Manage account", with the "Cancel Plan" button. Your subscription stays active until the end of the paid period. An upgrade applies right away, prorated, and a downgrade only at the end of the cycle.

## Working on a project with other people

The LTX FAQ talks about "real time" collaboration. The help center is more specific.

<Screenshot src="ltx-studio-collaborateurs-aide-2026-10-17.webp" alt="LTX help article Adding collaborators to your project saying Pro plans allow up to 3 collaborators and Enterprise unlimited" caption="Three collaborators per project on Pro, you included, and each one pays for their own plan. Unlimited is Enterprise only." source="https://help.ltx.io/hc/en-us/articles/33650434265362-Adding-collaborators-to-your-project" capturedAt="2026-10-17" />

To add collaborators with edit rights you need Pro, and that means three people per project counting yourself. Each collaborator needs their own account and works with their own plan's credits and features. A four-person team on an ad, say director, writer, editor and designer, is already squeezed, or talking to sales about Enterprise.

## What users say

On Trustpilot, LTX.Studio had a score of 1.6 from 77 reviews on October 17, 2026, with 87% one-star ratings and 41 reviews in the past twelve months. Trustpilot notes that the company hasn't invited reviews recently, which usually tilts things toward unhappy customers, and that it replied to 97% of negative reviews.

<Screenshot src="ltx-studio-trustpilot-2026-10-17.webp" alt="Header of the LTX.Studio Trustpilot page with a 1.6 score from 77 reviews and a dominant one-star bar" caption="The Trustpilot score on October 17. The small number of reviews and the lack of recent invitations call for caution, in both directions." source="https://www.trustpilot.com/review/ltx.studio" capturedAt="2026-10-17" />

Reading the recent reviews on [the Trustpilot page](https://www.trustpilot.com/review/ltx.studio), three topics keep showing up: refunds refused after a few hours of use, credits burned on generations people considered failed, and homepage promises the tool doesn't keep in a specific case, like a full music video when shots cap at 20 seconds. These are public reviews, not established facts. They do line up with the written refund rules.

G2 tells a different story: the LTX listing showed 4.3 from 123 reviews in Google results on October 17 (G2 blocks direct access, so I couldn't open the page). [TechRadar's review](https://www.techradar.com/pro/software-services/ltx-studio-ai-video-production-review) lists AI output that often comes out weird among the downsides. My interpretation, which I can't prove: the gap comes down to who's paying. A team on Standard or Pro mocking up a campaign spends credits without thinking about it. Someone paying alone to test an idea hits the 1,200-credit line on the first evening.

## LTX Studio vs ScreenWeaver

This is where my conflict of interest weighs the most, so I'll stick to facts you can check on both sides.

| | LTX Studio | ScreenWeaver |
|---|---|---|
| Starting point | Uploaded script, concept, image or video | Screenplay written in the tool (or imported from Final Draft, Fountain, WriterDuet) |
| Free plan | 800 credits once, personal use | Screenwriter, a free screenplay editor with no time limit |
| First commercial plan | Standard, €35 a month | Auteur, $39.99 a month before tax, 6,000 credits |
| Team work | Pro: 3 collaborators per project | Studio ($149.99): real time, unlimited seats |
| Video models | LTX-2.5 and 2.3, Kling 3.0, Seedance 2.0, Veo 3.1 on Pro | Seedance 2.5 and 2.0, Veo 3.1, Kling 3.0, MiniMax H3, Grok Imagine Video 1.5 |
| Own strengths | Open-source model, local LTX Desktop, HDR and EXR, timeline and sound design | Breakdown and storyboard generated from the screenplay, MCP for Claude and ChatGPT |

*ScreenWeaver prices checked on screenweaver.ai on October 17, 2026. Credits from the two tools don't compare one to one: neither publishes the cost of a generation.*

LTX beats us on several points, and I'd rather say so: an in-house open model, local generation, fuller post-production tools, a cheaper way in with Lite, a structured Enterprise offer, more image models. We made another choice, putting screenwriting at the center, because a film changes while you write it. Lost Garden, our series, was made entirely in ScreenWeaver, from script to production, and the 17-minute first episode took me 63 hours. That's why I think the text has to stay the source of every shot. For the full side-by-side, refunds and teamwork included, read [ScreenWeaver vs LTX Studio](/en/blog/screenweaver-vs-ltx-studio).

If you're weighing several pipelines, my piece on [the script, storyboard, production workflow from A to Z](/en/blog/pipeline-ia-script-storyboard-production-de-a-z) lists the steps any tool has to cover.

## When to pick LTX Studio, when to pick something else

Go with LTX Studio if you make ads, music videos or teasers, often start from a concept rather than a dialogue script, and need a timeline and real camera control in the same place. Go straight to Standard, not Lite: without Elements or a commercial license, you'll miss what the tool is for.

Look elsewhere if you just want to generate shots across lots of different models. An aggregator does that job better, and I reviewed the best-known one in [my Higgsfield review](/en/blog/higgsfield-avis-realisateur). To pick an engine before picking a platform, my [roundup of AI video tools](/en/blog/meilleurs-outils-ia-video) is still a good place to start.

And if your project is a written film, with dialogue and three planned rewrites, start with the tool where your screenplay lives, then bring in LTX for the shots that need its timeline or its HDR. To see LTX next to Saga, Flow, Runway and ScreenWeaver, with prices checked the same day, read [my comparison of Higgsfield alternatives](/en/blog/alternatives-higgsfield-film).

<Methodology date="2026-10-17">

Sources checked on October 17, 2026: homepage, pricing page (euro prices seen from France, logged out), FAQ and release notes on ltx.io, help.ltx.io articles on Elements, the free plan, credits, the commercial license, refunds, moderation and collaborators, the LTX.Studio Trustpilot page, Google.fr results for "ltx studio avis" and "ltx studio prix".

- Checked: every price, limit and feature mentioned, on the official page, on the day of publication. All 9 screenshots were taken that day, without an account.
- Not tested: no generation was run in LTX Studio for this review. Image quality, character consistency and the real credit cost of a shot are not judged from a test.
- User feedback: Trustpilot, G2 (score read in Google) and TechRadar, presented as opinions.
- Conflict of interest: the author co-founded ScreenWeaver, a direct competitor of LTX Studio. There are no affiliate links in this article.

</Methodology>

<CtaScreenWeaver title="Your film starts with a script" text="ScreenWeaver starts from your screenplay: you write it, it breaks it into shots, builds the storyboard, then the video is generated in the same project." destination="script" />

## FAQ

### How much does LTX Studio cost?

On October 17, 2026, for a visitor from France, the pricing page showed four plans. Free at €0 with 800 credits, once. Lite at €15 a month, or €12 billed yearly, with 8,000 credits. Standard at €35 a month, or €28 billed yearly, with 28,000 credits. Pro at €125 a month, or €100 billed yearly, with 110,000 credits. Enterprise is priced on request. For a director, the real entry price is Standard, because it's the first plan with a commercial license, storyboards generated from a script and Elements to keep characters consistent. Prices may display in another currency depending on where you are.

### What is LTX?

LTX means two things at Lightricks. On one side, LTX-2, LTX-2.3 and LTX-2.5, an in-house family of video generation models. LTX-2 is published as open source with its weights, and you can run it locally with LTX Desktop or through the API. On the other side, LTX Studio, the web platform that combines those models with partner models like Kling, Seedance and Veo, plus production tools: storyboard, Elements, timeline, sound design. The official FAQ frames it this way: LTX-2 is an engine, LTX Studio is the full workshop. The online studio itself isn't open source.

### Is LTX Studio free?

There's a free plan, but it's for trying the tool out. You get 800 credits once, which don't expire but never renew, access to the LTX-2.5 and LTX-2.3 models, camera controls and blank storyboards. Use is strictly personal: no clients, no business promotion, no sponsored content. The help center also says that not every region gets free credits. If you plan to subscribe, spend those 800 credits first, because your plan's allowance replaces them the moment you upgrade. Think of it as a demo with a budget rather than a plan you can work on.

### Can I use LTX Studio for commercial work?

Yes, from the Standard plan at €35 a month. According to the help center, Standard, Pro and Enterprise include a commercial license, while Free and Lite don't. The definition is broad: content that promotes a business, product or service, sponsored content, client work, and any video you get paid for, directly or indirectly. Be careful with the site's general FAQ, which suggests plans for commercial projects start at $15. The pricing page and the license help article say otherwise. If you have any doubt, start with Standard and keep a screenshot of the plan you paid for.

### How do I get a refund from LTX Studio?

You can get a refund on a first subscription purchase, within 14 days, as long as you've used fewer than 1,200 credits. Renewals and upgrades are never refunded. You email support from the address tied to your account. The help center says LTX processes it in 1 to 3 business days, then your bank takes another 5 to 10. Several Trustpilot reviews describe refusals past the threshold. So run your tests on the 800 free credits before paying, and keep an eye on your balance during the first two weeks of your subscription.

### Can LTX Studio write my screenplay?

Going by the public documentation, no. LTX Studio lets you upload an existing script to generate scenes and a storyboard automatically, or start from a concept in a few lines. I couldn't find a description of a screenplay editor in standard format, with scenes, dialogue and version history, anywhere on the site or in the help center. Storyboards generated from a script require the Standard plan. If your project depends on the writing, keep a screenwriting tool next to it, or use one where the screenplay and the breakdown stay linked inside the same project.

### Does LTX Studio work on mobile?

No. The help center and the homepage FAQ both say LTX Studio is built for desktop use and doesn't exist as a mobile version or an app. You use it from a desktop browser. For local generation, Lightricks offers LTX Desktop, open-source software that runs LTX models on your own machine, with an API mode. Its October 9, 2026 update lets you monitor a generation started on your desktop from a phone on the same Wi-Fi network, but the creative work itself stays on a computer. Plan your sessions around a desk.
