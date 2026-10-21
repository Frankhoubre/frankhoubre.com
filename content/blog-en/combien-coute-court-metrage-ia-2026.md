---
title: "How much does an AI short film cost in 2026?"
date: "2026-08-25"
dateModified: "2026-10-21"
category: "analyses"
excerpt: "What an AI short film really costs in 2026, line by line: tool prices checked on October 21 and the real numbers behind episode 2 of my series."
thumbnail: "/images/blog/combien-coute-court-metrage-ia-2026/hero.webp"
---

A six-minute AI short made by one person costs somewhere between $140 and $1,100 in actual spending in 2026, depending on the video model you pick and how many shots you throw away. The number I can show you is my own. Episode 2 of Lost Garden, my animated series, runs 21 minutes and cost me $1,852 in generation and 75 hours of work. That's $88 per finished minute. And the hours weigh more than the money.

Every price in this article was checked on the official pages on October 21, 2026, with screenshots. I didn't run a single generation to write it: the only production numbers here are the Lost Garden figures I've already made public.

![A director talking through the budget of an AI short film with the programmer of an independent cinema](/images/blog/combien-coute-court-metrage-ia-2026/hero.webp)

## What a real episode cost: Lost Garden in numbers

Most pages on this topic give you ranges without saying what's inside them. I'd rather start from a real bill, even if it only describes my project.

Episode 1 of Lost Garden, *The Awakening of the Lantern Knight*, came out on May 29, 2026. It runs 17 minutes and took me 63 hours. Episode 2, *The King Beneath the Vault*, released September 15, runs 21 minutes: 75 hours of work and $1,852 of generation. I wrote up the full making-of, tool by tool, on the ScreenWeaver blog.

<Screenshot src="screenweaver-blog-lost-garden-ep2-2026-10-21.webp" alt="ScreenWeaver blog article How I Made a Japanese-Style Anime With AI, with the standfirst stating two episodes, 38 minutes and an episode 2 at 1,850 dollars and 75 hours" caption="The Lost Garden making-of, published September 19, 2026. The rounded $1,850 is the exact $1,852 of episode 2." source="https://www.screenweaver.ai/blog/how-i-made-japanese-style-anime-with-ai" capturedAt="2026-10-21" />

Three ratios come out of those numbers, and they help me more than any range:

- **$88 per finished minute** on episode 2 (1,852 divided by 21);
- **about $25 spent per hour worked** (1,852 divided by 75);
- **3.6 to 3.7 hours of work per finished minute**, almost the same on both episodes (63 hours for 17 minutes, 75 for 21).

The third ratio is the steadiest one, and it's the one that should worry you: from one episode to the next, time per minute barely moved.

The tools are the ones I listed in the description of episode 1: ScreenWeaver for the script, the shot breakdown and the storyboard, Dreamina and Seedance 2 among other video models (no single model made an episode), Midjourney, ElevenLabs for voices, Suno for music, DaVinci Resolve and Filmora for the edit. I never published how the $1,852 splits across those tools, so I won't make it up here. What I can do is give you today's price for each piece, so you can price your own film.

> 💡 **Frank's cut:** remember the hours-per-minute ratio, not the dollar amount. Lost Garden is an animated series and your short may well be simpler. But if you've never finished a film, budget generously: my 3.6 hours per minute come from a world and a tool I know inside out.

## The six lines in the budget

A traditional producer never lumps everything under "shoot". They split prep, production, post, sound, delivery and overheads. An AI film breaks down the same way, and most people starting out only look at one line.

1. **Image and shot generation.** Subscriptions or API. The visible line, the one everybody compares.
2. **Sound.** Voice, music, effects, mix, often from three different vendors.
3. **Finishing.** Edit, grade, upscale, exports.
4. **Infrastructure.** Storage, backups, sometimes a machine or rented GPU time.
5. **Release.** Festival fees, subtitles, delivery masters.
6. **Your time.** The most expensive line, and the only one nobody bills themselves for.

A properly finished six-minute short goes through all six. A thirty-second test touches one. That's why the numbers on forums contradict each other: nobody says what they counted.

## Keep rate: the multiplier on your generation line

Call it your keep rate: how many generations you need for every shot you keep. Keep one in four and your generation line gets multiplied by four. One in eight, by eight. Nothing else in the budget multiplies like that.

Take a simple case: a six-minute short, 60 shots in the cut, 5 seconds each, so 300 finished seconds. The per-second prices come from [fal.ai's pricing page](https://fal.ai/pricing), a platform that sells API access to the models, checked on October 21, 2026.

<Screenshot src="fal-tarifs-video-2026-10-21.webp" alt="fal.ai Model APIs Pricing table, Video models section, with the per-second price of MiniMax H3 Max, Kling Video, Kling Video v3 Pro and Standard, Grok Imagine Video and Seedance 2.0 Fast" caption="fal.ai video prices on October 21, 2026. The late-August models (Wan 2.5, Veo 3) have dropped off this list, hence the updated table below." source="https://fal.ai/pricing" capturedAt="2026-10-21" />

<ComparisonTable caption="Generation cost of a 6-minute short (60 shots of 5 s) by model and keep rate" source="https://fal.ai/pricing" checkedOn="2026-10-21">

| Model (on fal.ai) | Price per second | Keep 1 in 4 (1,200 s generated) | Keep 1 in 8 (2,400 s generated) |
|---|---|---|---|
| MiniMax H3 Max | $0.05 | $60 | $120 |
| Kling Video | $0.07 | $84 | $168 |
| Kling Video v3 Pro | $0.14 | $168 | $336 |

</ComparisonTable>

Same film, same length, and $276 between the cheapest cell and the most expensive one. Model choice and discipline in the edit bay weigh more, together, than everything else in a small short. Meanwhile most people compare subscriptions while their keep rate drifts, because they never locked the shot before generating.

Two habits bring that multiplier down. First, approve a reference image for each shot before you generate video, which kills the rejects for framing and lighting. Second, test your prompt on the cheapest model and only move to the premium one once the description holds. On a film with recurring characters, rejects for a face that changes add up fast: I wrote up the method to [keep the same character across shots](/en/blog/garder-meme-personnage-video-ia).

![An actress in a recording booth during a voice session for an AI short film](/images/blog/combien-coute-court-metrage-ia-2026/workflow-1.webp)

## Subscription or pay per second: Runway and Google Flow

The table above thinks in API terms. Most creators go through a subscription, and the two only compare once you bring them back to cost per second of video.

Runway's [pricing page](https://runwayml.com/pricing) showed, on October 21: Free at $0 with 125 credits given once, Standard at $15 a month ($12 billed yearly) for 625 credits, Pro at $35 ($28 yearly) for 2,250 credits, Max at $95 ($76 yearly) for 9,500 credits. Runway translates those credits into seconds of its Gen-4.5 model itself: 52 seconds on Standard, 187 on Pro, 791 on Max. A second of Gen-4.5 therefore costs about $0.29 on Standard and $0.12 on Max, billed monthly.

<Screenshot src="runway-tarifs-2026-10-21.webp" alt="Runway pricing page on yearly billing, with Free at 0 dollars, Standard at 12 dollars, Pro at 28 dollars and Max at 76 dollars per month, and the Credits roll over 1 mo badge on Max" caption="Runway's individual plans, shown here on yearly billing. Only Max rolls unused credits over, and for one month only." source="https://runwayml.com/pricing" capturedAt="2026-10-21" />

Run the six-minute short again: 1,200 seconds of Gen-4.5 is about 14,400 credits, a month and a half of Max. Even on Max, a second of Gen-4.5 ($0.12) sits closer to fal.ai's Kling Video v3 Pro ($0.14) than to MiniMax H3 Max ($0.05). What you get in return is Runway's interface and tools around it.

At Google, video is paid in Flow credits bundled with the subscriptions. The [Gemini subscriptions page](https://gemini.google/subscriptions/) shows, from France, Google AI Plus at €4.99 a month, AI Pro at €21.99 and AI Ultra from €99.99.

<Screenshot src="gemini-abonnements-2026-10-21.webp" alt="Gemini subscriptions page in France with the four plans: free at 0 euros, Google AI Plus at 4.99 euros, Google AI Pro at 21.99 euros and Google AI Ultra from 99.99 euros per month" caption="Google's plans as displayed in France on October 21, 2026 (French-language page). Ultra also comes at €219.99 with limits twenty times higher than Pro." source="https://gemini.google/subscriptions/" capturedAt="2026-10-21" />

Flow's help center fills in the rest: 50 credits a day for everyone, 200 more a month with Plus, 1,000 with Pro, 10,000 with the $100 Ultra plan. One generation costs 10 credits on Veo 3.1 Lite, 20 on Veo 3.1 Fast and 100 on Veo 3.1 Quality, which only makes 8-second clips. With Pro's 1,000 credits, you get either ten Quality clips (80 seconds) or fifty Fast clips (up to 400 seconds).

<Screenshot src="flow-credits-generation-2026-10-21.webp" alt="Google Flow help page on managing credits, in French, listing 50 daily credits, 200 credits for Google AI Plus, 1,000 for Google AI Pro and 10,000 for Google AI Ultra at 100 dollars" caption="Flow credits by plan (French-language help page). The per-model cost, 10, 20 or 100 credits per generation, is listed further down the same page." source="https://support.google.com/flow/answer/16526234?hl=fr" capturedAt="2026-10-21" />

To decide, look at the rhythm of the project. A subscription pays off when you generate every month on the same tool. The API fits a project that comes in waves, and a short film almost always does: three weeks of writing where you spend nothing, then ten days where you burn through everything. Monthly credits don't roll over at Runway (except one month on Max) or at Suno. A month spent writing is a month of subscription paid for nothing.

> 💡 **Frank's cut:** open a spreadsheet, one row per production week, and tick the weeks where you'll actually generate. You'll see right away how many months of subscription you'd be paying for idle.

## Sound: voice, music and commercial rights

Online, people judge an AI film by its images. In a theater, they judge it by ear. Sound goes over budget more often than anything else because it's split across several vendors.

For voice, [ElevenLabs' pricing page](https://elevenlabs.io/pricing) showed on October 21, billed monthly: Free with 10,000 credits a month, Starter at $6 for 30,000 credits, Creator at $22 for 121,000 ($11 for the first month right now), Pro at $99 for 600,000, Scale at $299 for 1.8 million. The commercial license starts at Starter, so a film meant for release can't go out on the free plan.

<Screenshot src="elevenlabs-tarifs-2026-10-21.webp" alt="ElevenLabs ElevenCreative pricing on monthly billing, with Free at 0 dollars, Starter at 6 dollars with commercial license, Creator at 11 dollars for the first month instead of 22, and Pro at 99 dollars" caption="ElevenLabs plans. The Commercial License line under Starter matters more than the price for a film meant to be released." source="https://elevenlabs.io/pricing" capturedAt="2026-10-21" />

What really costs money is retakes. Every new version of a line eats credits again, and a dialogue re-recorded fifteen times costs fifteen times its price.

For music, [Suno](https://suno.com/pricing) shows, from France and billed yearly: Free at €0 with 50 credits a day and no commercial rights, Pro at €7.20 a month for 2,500 credits and 20 downloads, Premier at €22 a month for 10,000 credits and 60 downloads. Based on the savings Suno displays, monthly billing works out to €9 for Pro and €28 for Premier.

<Screenshot src="suno-tarifs-2026-10-21.webp" alt="Suno pricing page on yearly billing, with Free at 0 euros and no commercial rights, Pro at 7.20 euros a month with 2,500 credits and 20 downloads, Premier at 22 euros with 10,000 credits" caption="Suno plans as displayed from France. Easy to miss: a monthly download cap, 20 on Pro and 60 on Premier." source="https://suno.com/pricing" capturedAt="2026-10-21" />

Suno points to its terms of service for the limits on commercial use. Read them before you release your film, especially if you plan to cancel after delivery. I covered that ground in my piece on [copyright for AI music in a soundtrack](/en/blog/droits-auteur-musique-ia-bande-son).

Sound effects and the mix are the one line where I happily keep a human in the loop if the film is headed for a screen. A short-film mix is often priced by the day and the rate depends on your local market, so I won't give you a made-up range. Ask for two quotes and you'll have your number in two days.

## Edit, upscaling and storage

DaVinci Resolve is still free in a version that's enough to edit, grade and export a short. The Studio version, which adds the DaVinci Neural Engine, more Resolve FX and Fairlight effects and advanced HDR grading, is listed at $295 on [Blackmagic Design's site](https://www.blackmagicdesign.com/products/davinciresolve), on sale for $236 the day I checked. It's a license you buy once and keep for every film after.

<Screenshot src="davinci-resolve-studio-prix-2026-10-21.webp" alt="Blackmagic Design DaVinci Resolve 21 page with two cards: DaVinci Resolve 21 free and DaVinci Resolve Studio 21 shown as Was 295 dollars Now 236 dollars" caption="Free Resolve on the left, Studio on the right, 20% off on October 21, 2026. The regular price is still $295." source="https://www.blackmagicdesign.com/products/davinciresolve" capturedAt="2026-10-21" />

Topaz changed its model, and that line needs a second look in any budget written before the fall. In late August, its pricing page still offered monthly plans. On October 21, [Topaz Labs](https://www.topazlabs.com/pricing) only sells yearly subscriptions: Topaz Video at $299 a year on Mac and PC, Topaz for Web Video at $199 a year (with $299 struck through), and the Topaz Studio bundle with every app at $399 a year, $199.50 for the first year. Pro licenses, required for organizations above $1M in annual revenue, go up to $699 a year for Video.

<Screenshot src="topaz-tarifs-2026-10-21.webp" alt="Or buy a single app section of the Topaz Labs pricing page, with Topaz Video at 299 dollars a year and Topaz for Web Video at 199 dollars a year instead of 299" caption="Topaz apps sold on their own, all yearly. One year of Topaz Video costs about as much as a Resolve Studio license, except at the end you own nothing." source="https://www.topazlabs.com/pricing" capturedAt="2026-10-21" />

There are free ways to upscale, and on a first short I'd start there.

Storage, meanwhile, gets paid in installments. Keeping one shot in four, your 60 final shots come from 240 generations, and you can't delete the rejects until the edit is locked: half of them become useful again when you change a transition. Plan one drive per film and a mirrored backup. As long as the project lives on a single drive, you're betting the film on hardware that will eventually fail.

![A production coordinator working on the festival fees of an AI short film in a building courtyard](/images/blog/combien-coute-court-metrage-ia-2026/workflow-2.webp)

## After the film: festivals and delivery

A short exists once someone watches it, and getting it watched has a posted price. Sundance lists its fees on [its submission page](https://www.sundance.org/festivals/sundance-film-festival/submit/): for the 2027 edition, $55 early (July 13), $75 official (August 3), $95 late (August 31) for shorts.

<Screenshot src="sundance-frais-2027-2026-10-21.webp" alt="Sundance Film Festival 2027 Deadlines and Entry Fees table with Early, Official and Late dates and fees for features, shorts and episodic content" caption="Sundance 2027 fees. For shorts, all three deadlines had passed when I checked: a film finished in October is aiming at the following edition." source="https://www.sundance.org/festivals/sundance-film-festival/submit/" capturedAt="2026-10-21" />

All three 2027 deadlines are gone. So build your festival calendar before you start the film. Forty dollars separate the early deadline from the late one at Sundance, and one week of delay in the mix is enough to lose them.

Then come the less visible lines you can't skip:

- subtitles, in at least one language beyond yours if you're aiming abroad;
- delivery masters, since every festival has its own codec and loudness specs;
- archiving, once the production drive is freed up for the next film.

## A six-minute short, budgeted line by line

Two complete budgets for the same six-minute short, built only from prices checked on October 21. The first is tight, the second comfortable. Both assume one month of production and one festival.

<ComparisonTable caption="Two budgets for a 6-minute short (60 shots), official prices checked on 10/21/2026" source="https://fal.ai/pricing" checkedOn="2026-10-21">

| Line | Tight budget | Comfortable budget |
|---|---|---|
| Video | MiniMax H3 Max, keep 1 in 4: $60 | Kling Video v3 Pro, keep 1 in 8: $336 |
| Reference images | 150 Nano Banana 2 images ($0.08): $12 | 300 Nano Banana 2 images: $24 |
| Voice | ElevenLabs Starter: $6 | ElevenLabs Creator: $22 |
| Music | Suno Pro, monthly: €9 | Suno Premier, monthly: €28 |
| Edit and grade | DaVinci Resolve free: $0 | Resolve Studio: $295 ($236 on sale) |
| Upscaling | Free tool: $0 | Topaz Video, one year: $299 |
| Festival | Sundance, early: $55 | Sundance, late: $95 |
| **Total** | **$133 + €9, about $140** | **$1,071 + €28, about $1,100** |

</ComparisonTable>

*Sources: fal.ai, ElevenLabs, Suno, Blackmagic Design, Topaz Labs and Sundance pricing pages, checked on October 21, 2026. Prices exclude tax, in dollars except Suno.*

Resolve Studio and Topaz make up more than half of the comfortable budget, and the first one stays with you for the next films. Take those two purchases out and the comfortable budget drops to $477 plus €28. Most of the gap with the tight budget then comes from the video model and the keep rate.

Now compare with Lost Garden. Six minutes at $88 a minute, my episode 2 ratio, would come to $528. That lands between the two columns, which seems about right for an animated series.

> 💡 **Frank's cut:** build your own table with these seven lines before you pay for a single subscription. If a cell stays empty, you haven't decided yet, and that's where the budget will slip.

## Your time, the most expensive line in the budget

The seven lines in the table can be priced from public pages. Your time, nobody bills you for, and it dwarfs everything else.

At my pace on Lost Garden, one finished minute took between 3.6 and 3.7 hours. Six minutes would mean about twenty hours for someone who knows their tool and their world by heart. Writing, visual direction, prompts, sorting rushes, editing, sound, grading, exports, submissions: multiply those hours by the rate you charge a client and you get the real bill for the film.

Production cost and selling price are two different calculations, and mixing them up is the number one reason independent quotes go wrong. Here we're working out what the film costs you. To figure out what to charge a client, the grid is in my article on [how to price professional AI video work](/en/blog/combien-facturer-video-ia-professionnelle-grille-prix). And if you want to see what a full solo production day looks like hour by hour, I broke it down in [a day in a one-person AI studio](/en/blog/journee-production-studio-ia-solo).

A personal short doesn't need to make money. But you need to know what it cost you, or you'll never know whether the next one should be funded differently.

## What blows up a budget

Switching models mid-production costs you twice. A new engine comes out, it's better, you redo thirty approved shots: the video line doubles and the film's visual consistency takes a hit. Pick your main engine before the first shot and stick with it until the edit is locked.

Generating before writing creates the same waste. Every shot from a scene that gets cut in the edit is a shot paid for nothing. ScreenWeaver tackles that problem by keeping the script, the shot breakdown and the storyboard connected before production.

Shot counts are almost always underestimated. People count the shots in the script, not the ones in the final cut, which adds inserts, matches and breathing room. Add a 20% margin to that number.

Two dumb leaks remain: subscriptions running through weeks with no generation, and exchange rates. Almost every price quoted here is in dollars and before tax. If you get paid in another currency, your real cost depends on the rate of the day and on your local sales tax, which matters on a four-figure budget.

## How to price your film before you start

Five steps, one hour of work, and you have a budget you can defend.

1. **Count your shots.** Break your script into shots, add a 20% margin, write the number down.
2. **Measure your keep rate on one scene.** Take the hardest scene, actually produce it, and count how many generations each kept shot took. That ratio is yours, not a tutorial's.
3. **Multiply.** Shots, times keep rate, times average length, times your model's price per second: that's your video line.
4. **Add the fixed lines.** Sound, finishing, storage, festivals, using the amounts on today's official pages.
5. **Convert your time.** Estimate your hours per line, apply your rate and write the total on the same sheet, even if you never bill anyone.

Step two is the one everybody skips, and it decides everything else. A test scene costs a few dozen dollars. Being off by a factor of three on the whole film costs hundreds.

<CtaScreenWeaver title="Count your shots before you pay for credits" text="Write the script, break it into shots and build the storyboard in the same tool: you know your shot count before the first generation." destination="script" />

<Methodology date="2026-10-21">

Sources checked on 10/21/2026: pricing pages for fal.ai, Runway, ElevenLabs, Suno (displayed from France), Topaz Labs, Blackmagic Design (DaVinci Resolve), the Gemini subscriptions page (France), the Google Flow help page on credits, and the Sundance submission page. Lost Garden figures: the series' internal fact sheet and the making-of published on the ScreenWeaver blog on 09/19/2026.

- Tested: nothing. No generation was run for this article. The two budgets in the table are calculations based on posted prices, not invoices.
- Calculated by me: Runway's per-second prices (plan price divided by the Gen-4.5 seconds Runway lists), Suno's monthly prices (derived from the yearly savings shown), the Lost Garden ratios.
- Not verified: how episode 2's $1,852 splits by tool (never published), mixing rates, fees at festivals other than Sundance.
- Conflict of interest: I'm a co-founder of ScreenWeaver, mentioned in the Lost Garden case and at the end of the article.

</Methodology>

## FAQ

### How much does a five to ten minute AI short film cost?

For a six-minute short made solo, expect $140 to $1,100 in spending at prices checked on October 21, 2026. The low end assumes a video model at $0.05 per second on fal.ai, keeping one shot in four, and free software. The high end adds Kling Video v3 Pro, keeping one in eight, Resolve Studio and a year of Topaz Video. My Lost Garden episode 2 works out to $88 per finished minute, around $530 for six minutes. On top of that come your hours, which weigh more than all those lines combined.

### Is an AI short film really cheaper than a live-action shoot?

On the image side, yes, by a wide margin: no gear, no crew, no sets, no travel, no insurance. Everywhere else the gap shrinks. Mixing, subtitles, delivery masters and festival fees cost the same as for a shot film, and Sundance charges $55 to $95 for a short however it was made. Time often goes up, because sorting hundreds of generations takes hours. AI production mostly moves the spending around: less equipment, more fabrication time. My 75 hours on Lost Garden episode 2 are a good example.

### What's the most underestimated line in an AI film budget?

The keep rate. Everyone prices the shots that make the cut, almost nobody prices the ones thrown away. On a film of 60 five-second shots, going from keeping one in four to one in eight doubles the video line: from $168 to $336 with Kling Video v3 Pro on fal.ai. The drift happens shot by shot without you noticing. Sound comes right after, because every voice retake burns ElevenLabs credits again. Measure both on a test scene before you price the whole film.

### Should I subscribe or pay per second through an API?

Look at the project's rhythm more than its volume. A subscription pays off if you generate every month on the same tool. Per-second API billing suits projects that come in waves, with weeks of writing or editing where you use nothing, and a short film almost always works that way. Check credit rollover: at Runway, only Max carries unused credits over, for one month. And bring every plan back to cost per second of video: Gen-4.5 runs about $0.29 a second on Standard and $0.12 on Max, against $0.05 to $0.14 on fal.ai depending on the model.

### How much does sound cost for an AI short film?

The building blocks are cheap and publicly priced: ElevenLabs starts at $6 a month with a commercial license, Suno Pro costs €7.20 a month billed yearly or €9 monthly, with 20 downloads a month and commercial rights. What costs money is voice retakes, which burn credits again, and the mix, paid by the day at a rate that depends on your market. Watch out for Suno's free plan: it rules out any commercial use. For a film headed to a theater rather than a social feed, keep a human on the mix and get two quotes before you lock the budget.

### Do I need to pay for editing software?

Not to start. DaVinci Resolve is free in a version that's enough to edit, grade and export a short. The Studio version adds the DaVinci Neural Engine, extra effects and advanced HDR grading. It's listed at $295 as a perpetual license, and it was on sale for $236 on October 21, 2026. You buy it once and keep it for every film after. Compare that with Topaz Video, which costs $299 every year since Topaz dropped its monthly plans. On a first film, the free version plus a free upscaler is plenty.

### How much should I set aside for festivals?

Fees are public and add up fast. Sundance lists $55 early, $75 official and $95 late for shorts at its 2027 edition, and all three deadlines (July 13, August 3, August 31, 2026) have already passed. Ten festivals at that level means several hundred dollars, often more than your video line. Two habits bring the bill down: set your submission calendar before you start the film so you catch the early fees, and pick festivals that actually fit your film instead of submitting everywhere.

### Will these prices stay valid?

No, and you should write your budget accordingly. Between late August and October 21, 2026, fal.ai refreshed its list of video models, Topaz moved to yearly subscriptions only, and Resolve Studio went on sale. The structure of the calculation doesn't change: shots, times keep rate, times length, times price per second, then the fixed lines and your time. Keep that skeleton and swap in the day's prices when you run your numbers. I update mine here whenever something notable changes.

## The short version

What an AI short film costs in 2026 has little to do with the price on your generator's subscription page. It comes down to your keep rate, the sound nobody plans for, release fees that existed long before AI, and above all your hours: 75 of them for my 21 minutes of Lost Garden.

All of it can be measured. One test scene, one spreadsheet, seven lines, and within an hour you know whether your film fits what you can spend.
