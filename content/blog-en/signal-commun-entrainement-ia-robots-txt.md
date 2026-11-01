---
title: "AI training opt-out: OpenAI and Google back one robots.txt"
date: "2026-11-01"
dateModified: "2026-11-01"
category: "actualite"
excerpt: "On October 30, OpenAI, Google, Microsoft and Anthropic pledged to honor one robots.txt signal against AI training. What it changes for creators."
thumbnail: "/images/blog/signal-commun-entrainement-ia-robots-txt/hero.webp"
---

On Friday, October 30, 2026, four of the companies training the biggest models on the market said the same thing on the same day. Google, Microsoft, OpenAI and Anthropic will honor one shared signal in robots.txt that tells them whether a site accepts, or refuses, having its pages used to train generative AI. One line, `User-Agent: __usage_ai-training`, instead of one rule per bot.

If you publish your images, films, scripts or behind-the-scenes work on your own site, this is about you. Until now you had to know every crawler by name (GPTBot, Google-Extended, ClaudeBot...) and hope you didn't miss one. The new signal is meant to fix that. It won't fix everything, and the four companies are switching it on at different times.

![In a glass greenhouse turned into a photographer's archive at midday, a gray-haired photographer in an indigo work jacket locks a flat-file drawer full of black and white prints, while the drawer below stays open on a few contact sheets](/images/blog/signal-commun-entrainement-ia-robots-txt/hero.webp)

## What was announced on October 30

- **Google**, on its [Search Central blog](https://developers.google.com/search/blog/2026/10/ai-training-control), in a post by John Mueller: Google plans to support this shared "policy token" and is aiming for 2027.
- **Microsoft**, on the [Bing blog](https://blogs.bing.com/search/2026/10/your-content-your-choice-clearer-preferences-for-training-and-grounding/), in a post by Krishna Madhavan: the new preferences take effect on February 1, 2027.
- **OpenAI**, in a post titled [Making it easier for websites to express AI training preferences](https://openai.com/index/helping-websites-express-ai-training-preferences/): implementation is planned "in the coming months," with details to follow.
- **Anthropic**, through Kevin Kelley, who wrote the technical draft filed with the IETF that same day. In his [message to the working group list](https://mailarchive.ietf.org/arch/msg/ai-control/mddjatOxSR0h6GmLRBWlc839c7w/), sent at 15:39 UTC, he wrote that Anthropic "has already started implementing support for this draft."

The reference text is [draft-kelley-aipref-training-preference-signal-00](https://datatracker.ietf.org/doc/draft-kelley-aipref-training-preference-signal/). It's an individual draft: the IETF hasn't endorsed it, it has no formal standing, and it expires on May 3, 2027 unless someone revises it. It builds on the vocabulary from the AIPREF working group, which is working on a shared definition of "AI training."

![Google Search Central blog post from October 30, 2026 announcing support for a shared AI training control in robots.txt](/images/blog/signal-commun-entrainement-ia-robots-txt/capture-google-search-central-2026-11-01.webp)
*Screenshot of the Google Search Central post "Supporting a shared AI training control for websites," dated October 30, 2026. Source: developers.google.com, captured November 1, 2026.*

## How the signal actually works

There's no new directive to learn. You write an ordinary robots.txt group, except the `User-Agent` line doesn't name a bot. It names a use.

To refuse training across your whole site:

```
User-Agent: __usage_ai-training
Disallow: /
```

To refuse everything except your press kit, which is the example the draft itself uses:

```
User-Agent: __usage_ai-training
Disallow: /
Allow: /press-kit/
```

First trap: the wildcard doesn't count. A `User-Agent: *` with `Disallow: /` expresses no training preference under this signal, so you have to spell out `__usage_ai-training`. And if your file has no group with that name, you haven't said anything at all (Microsoft treats that as "Allow").

The signal also describes what you accept people doing with your pages. Bots can still crawl them. To stop crawling itself, you still target each bot by name, same as before.

> 💡 **Frank's cut:** the press kit case is the one creators should care about. You can close your portfolio, boards and rushes to training, and leave your bio, poster and synopsis open. Those are exactly the pages you want quoted when someone asks an AI who directed your film.

## The four companies side by side

Same signal, four calendars. The table sums up what each announcement says, read on November 1, 2026.

| Company | Announced support date | In-house control that stays | What else changes |
|---|---|---|---|
| Google | 2027, no exact day | Google-Extended (since 2023) | Opting out with the shared signal, without naming Google-Extended, will count as a Google-Extended disallow |
| Microsoft | February 1, 2027 | Bingbot for crawling | Separate page-level "AI Grounding" preference; NoArchive and NoCache stop counting for AI after March 1, 2027 |
| OpenAI | "In the coming months" | Existing robots.txt controls | The signal covers training of foundational generative models |
| Anthropic | Implementation started, no date | ClaudeBot, Claude-User, Claude-SearchBot | Wrote the IETF draft |

Google adds a point European publishers will care about. According to its post, the approach lines up with the EU Code of Practice for General Purpose AI model providers under the AI Act, which recognizes robots.txt as a primary way for web publishers to express machine-readable preferences.

## Training vs grounding: Microsoft's split

Microsoft separates two uses that the others leave fuzzy.

**Training** (AI Training) means changing a model's parameters with your content. You set it in robots.txt with the shared signal, or page by page.

**Grounding** (AI Grounding) means using your page to feed a generated answer, like a source cited in Copilot. You can only set it page by page, with three options: Allow, DisallowExtended (Microsoft's own products only, not the services it sells to third parties) and Disallow.

![Excerpt from the Bing blog post of October 30, 2026 detailing the AI Grounding options and the robots.txt example using the __usage_ai-training signal](/images/blog/signal-commun-entrainement-ia-robots-txt/capture-bing-blog-2026-11-01.webp)
*Screenshot of the Bing post "Your content, your choice: clearer preferences for training and grounding," published October 30, 2026, section on publishing your settings before March 1, 2027. Source: blogs.bing.com, captured November 1, 2026.*

Microsoft spells it out: refusing grounding significantly cuts your visibility in its AI experiences, and no option guarantees traffic, inclusion or payment. Your place in classic Bing results stays the same.

So if you're a director or an illustrator, you can refuse to have a model learn from your style and still accept being cited as a source. On Google's side, the post notes that sites which allow Google-Extended stay eligible to appear and get clicks through grounding in Gemini Apps.

## What the signal won't do

OpenAI calls the commitment voluntary, and the draft points back to RFC 9309, the robots.txt spec, which was never a lock. A scraper that ignores robots.txt will ignore this signal too.

Nothing changes for the past either. Data already collected and models already trained stay as they are. You're stating a preference for what comes next.

The last limit is the one illustrators hate most: your robots.txt covers your domain and nothing else. An image reposted on Pinterest, a forum or an aggregator depends on those sites' robots.txt. For the rights question itself, our guide to [copyright on AI-generated images](/en/blog/droits-auteur-images-generees-ia) is the right place to start.

## What I'd do on my site this week

There's no technical rush: none of the four reads the signal in production yet, except maybe Anthropic, which gave no date. But adding the group now costs nothing and breaks nothing, since a bot that doesn't know the name just ignores it.

1. List what your site exposes: portfolio, high-res galleries, scripts, behind-the-scenes, press pages.
2. Decide folder by folder. What you want kept out of training goes under `Disallow`, what you want picked up (bio, synopsis, poster) stays under `Allow`.
3. Add the `__usage_ai-training` group to your robots.txt and leave your GPTBot or Google-Extended rules alone. They keep working.
4. If your spot in Copilot matters to you, look at Microsoft's grounding tags before March 1, 2027.
5. Put February 1, 2027 in your calendar and check then what Google and OpenAI have actually switched on.

If you sell your images or videos, read this alongside our piece on [selling AI-generated images and the legal side](/en/blog/vendre-images-generees-ia-legalite): your licenses stay the same, and your robots.txt keeps a dated record of what you accept.

## FAQ

### What is the __usage_ai-training signal?

It's a "policy token," a special name you put on the User-Agent line of a robots.txt group. Instead of naming a specific bot, it names a use: training generative AI models. The Allow and Disallow rules under it say, path by path, whether you accept or refuse having your content used to train a model. The mechanism comes from a draft filed with the IETF on October 30, 2026 by Kevin Kelley of Anthropic. Google, Microsoft, OpenAI and Anthropic said the same day that they would honor it, each on its own timeline, between late 2026 and 2027.

### Does it work today?

Not really, or not everywhere. Microsoft says it will start applying it on February 1, 2027, as its bots recrawl pages. Google is aiming for 2027 with no exact day. OpenAI talks about "the coming months" and promises details later. Anthropic says it has started implementing support without giving a date. You can add the group right now and nothing will break, because a bot that doesn't know the name ignores it. For a few months, though, per-bot rules (GPTBot, Google-Extended, ClaudeBot) are still what counts for the companies that read them.

### Should I delete my GPTBot and Google-Extended rules?

No. All four companies say the shared signal sits alongside existing controls and doesn't replace them. Google even says an explicit Google-Extended rule keeps the upper hand. If your file refuses training through the shared signal and doesn't mention Google-Extended, Google will treat that as a Google-Extended disallow. If you explicitly allow Google-Extended, your specific choice wins. The IETF draft also says specific expressions should take precedence over general ones. So keep your current rules and add the new group on top, to cover the companies you haven't listed by name.

### Is User-Agent: * with Disallow: / enough?

No, and that's the trap most people will fall into. The draft says wildcard groups don't apply to the policy token. A `User-Agent: *` followed by `Disallow: /` blocks crawling by every bot that respects robots.txt, which also pulls your site out of Google and Bing. It still expresses no training preference under the new signal. To refuse training while staying visible in search engines, you need a dedicated group that names `__usage_ai-training`, and you leave your other crawling rules exactly as they are.

### Will refusing training hurt my SEO?

Not in classic search. Microsoft writes that eligibility for traditional Bing results doesn't change, whatever your training or grounding preference. Google frames its signal as a training control, separate from search. The real question is generated answers. At Microsoft, refusing grounding significantly cuts your visibility in Copilot and its other AI experiences, and Google points out that sites allowing Google-Extended stay eligible for grounding in Gemini. Refusing training and refusing to be cited are two separate decisions, and it's worth making them one at a time.

### Will my already-scraped images come out of the models?

No. The signal expresses a preference for future collection. It doesn't remove anything from existing datasets or already trained models, and none of the October 30 announcements claims otherwise. The draft says the preference that applies is the one in the robots.txt that was in effect when the content was retrieved. If an image was collected in 2025 with no restriction in place, your 2026 refusal doesn't cover it. Getting something removed means going through each company's own process, or a legal route, which is a different story altogether.

### Does the signal protect my images on Instagram or YouTube?

No. A robots.txt only applies to the domain that hosts it. Your images on Instagram, YouTube, Behance or ArtStation depend on those platforms' rules, their robots.txt and their terms of service. The shared signal is mainly useful for creators who run their own site: portfolio, film site, blog. That's one more reason to keep a home base you control, where you decide what's open and what's closed, instead of handing everything to social networks. Copies of your work reposted on third-party sites fall outside your file too.

### Can the draft still change?

Yes. It's an individual draft, filed on October 30, 2026, not endorsed by the IETF and with no formal standing. It expires on May 3, 2027 unless revised, and the definition of "AI training" it uses comes from another AIPREF working group draft that is also still under discussion. Microsoft itself writes that the standard isn't final. The token name and its basic syntax will probably hold, since four large companies have publicly committed to them. The details can still move, so reread the official announcements before February 2027.
