---
title: "The New York Times sues Brave over AI scraping"
date: "2026-11-03"
dateModified: "2026-11-03"
time: "10:30"
category: "actualite"
excerpt: "On November 2, the New York Times and three dailies sued Brave over a 30 billion page index sold to AI companies. What the complaints say."
thumbnail: "/images/blog/new-york-times-plainte-brave-scraping/hero.webp"
---

On Monday, November 2, 2026, the New York Times sued Brave Software in federal court in Manhattan. The same day, the Daily News, the Chicago Tribune and the Orlando Sentinel filed a near-identical complaint. They accuse the company behind the Brave browser of copying their articles to build an index of more than 30 billion pages, then selling access to AI companies, Anthropic, Perplexity, Mistral, xAI and Cohere among them.

I'm covering it here because it hits anyone who publishes online, and that includes you if your scripts, making-of posts or images live on your own site. At the center of the case is a crawler that doesn't say its name, so you can't block it on its own. Three days after the big AI labs agreed on a shared anti-training signal, the timing stings.

![A November morning on the granite steps of a federal courthouse in Manhattan: a paralegal in a navy coat carries two archive boxes stuffed with printed newspapers while a lawyer in a camel overcoat holds the heavy bronze door](/images/blog/new-york-times-plainte-brave-scraping/hero.webp)

## What the two complaints say

Both cases sit in the Southern District of New York: 1:26-cv-09549 for the Times, 1:26-cv-09554 for the three other papers. [TechCrunch](https://techcrunch.com/2026/11/02/new-york-times-and-other-outlets-sue-web-browser-brave-over-alleged-content-scraping/) broke the story on November 2, [heise](https://www.heise.de/en/news/Copyright-infringement-New-York-Times-sues-Brave-Software-11508658.html) followed that evening, and the trade site [PPC Land](https://ppc.land/new-york-times-and-three-papers-sue-brave-over-ai-answers-and-ad-blocking/) published a close reading of both filings on November 3.

The Times calls Brave a "supplier, dealer, and distributor of stolen copyrighted content" for AI companies. The complaints go after four things:

- The Brave index, more than 30 billion pages by Brave's own count, built with a crawler that has no user agent of its own.
- The Brave Search API, sold to AI companies. The five customers named (Anthropic, Perplexity, Mistral, xAI, Cohere) are not defendants.
- Ask Brave, the search engine's AI answer feature, which allegedly spat out long passages of articles.
- The browser itself, with a filter that gets around paywalls, plus Brave blocking the papers' ads while selling its own.

According to PPC Land, each complaint has five counts: direct copyright infringement, contributory infringement, vicarious infringement, circumvention under the DMCA (for the paywall filter) and unjust enrichment under New York law. The papers want an injunction, damages and a jury trial. Neither complaint names a dollar figure.

![TechCrunch article from November 2, 2026 by Rebecca Bellan: the New York Times and other outlets sue Brave, accused of building an index of more than 30 billion pages with an unidentified crawler](/images/blog/new-york-times-plainte-brave-scraping/capture-techcrunch-plainte-2026-11-03.webp)
*The TechCrunch piece that broke the story. Source: techcrunch.com, captured November 3, 2026.*

## The part that bugs me: a crawler with no name

Brave's own help page, which I reread this morning, spells it out: the Brave Search crawler "does not advertise a differentiated user agent". Brave says that's to avoid being shut out by sites that only let Google in. In return, it promises never to crawl a page Googlebot isn't allowed to crawl.

In practice, if you want to shut Brave out in your robots.txt, you have to shut Google out too. No creator will do that, you'd vanish from search. The complaints use this to argue that blocking Brave is "impossible" and that the setup proves willful infringement.

![Brave Search Crawler help page: the crawler does not advertise a differentiated user agent, will not crawl what Googlebot cannot, and robots.txt is not used to prevent indexing](/images/blog/new-york-times-plainte-brave-scraping/capture-aide-crawler-brave-2026-11-03.webp)
*Brave's official crawler help page. Source: search.brave.com/help/brave-search-crawler, captured November 3, 2026.*

Same page, another line: at Brave, robots.txt isn't used to keep a page out of the index. To get a page delisted you need a noindex tag. Which also pulls it out of Google, so you're back where you started.

> 💡 **Frank's cut:** open your robots.txt tonight and check what it really says. If you only block GPTBot or ClaudeBot, you probably feel safe. This case shows an index can come in through another door. Ask yourself what someone can read on your site without logging in.

## Training versus real-time answers

On October 30, Google, Microsoft, OpenAI and Anthropic promised to honor one shared robots.txt signal against AI training. I broke it down [in full here](/en/blog/signal-commun-entrainement-ia-robots-txt). Brave isn't one of the four.

The lawsuit is mostly about what happens after training. An API like Brave's also feeds assistants live: a user asks a question, the model pulls fresh pages and answers with them. Microsoft calls that grounding, and it was already the weak spot of the October 30 signal, which only covers training.

The papers say they tested that route. Per PPC Land's write-up, one request to Brave's API returned 1,291 of the 1,295 words of a Times story, word for word. Ask Brave reportedly reproduced about 87% of a paywalled article. Those are the plaintiffs' claims, and Brave hasn't answered them in court yet.

| | Shared signal, October 30 | Brave lawsuit, November 2 |
|---|---|---|
| Who | Google, Microsoft, OpenAI, Anthropic | NYT, Daily News, Chicago Tribune, Orlando Sentinel |
| Target | Model training | Index, API, AI answers, paywall filter, ads |
| Creator's tool | One line in robots.txt | None: the crawler has no name of its own |
| Nature | Voluntary pledge | Court case, outcome unknown |

## What we don't know yet

Brave hadn't replied to TechCrunch when the story ran, so its defense is still unknown. It may lean on US fair use, the way OpenAI has against the Times, but that's my guess and nothing more.

The Times says it wrote twice to Brave CEO Brendan Eich, on August 11, 2025 and April 13, 2026, and got no answer. A Times spokesperson told Reuters, as quoted by heise, that Brave "has disregarded current copyright law". That's one side's account.

Be careful with the "more than $100 million" figure floating around some sites. PPC Land says it matches a third-party estimate of Brave's total 2025 revenue, with no proven link to the index.

Nobody knows the timeline either. The Times has been suing OpenAI and Microsoft since late 2023, and that case still hasn't been decided on the merits.

## What it means for you as a creator

If you're a filmmaker or an illustrator who shares work online, anything you leave open can end up in an index, then in an assistant's answer, and no robots.txt rule will stop it. The big labs' pledges only bind the labs that signed them.

What I'd do this week:

1. Reread your robots.txt and add the `__usage_ai-training` signal if you don't want your work used for training. It won't stop Brave, but it counts with the four companies that signed.
2. Keep working files (full scripts, high-res character sheets, rushes) behind a login or a private link, and publish excerpts.
3. Date and archive what you publish. If there's ever a dispute, you'll need to prove the work is yours and when it went out.

If you work with generated images, ownership is still messy. We laid it out in [our guide to copyright on AI-generated images](/en/blog/droits-auteur-images-generees-ia). For adapting a book or a comic, the rights part is covered in [the method for turning a book into an AI film](/en/blog/adapter-livre-film-ia-methode-droits).

## FAQ

### Who is suing Brave, and where?

The New York Times filed its complaint on November 2, 2026 in the US District Court for the Southern District of New York, in Manhattan (case 1:26-cv-09549). The same day, the Daily News, the Chicago Tribune and the Orlando Sentinel filed a separate but very similar complaint (case 1:26-cv-09554). According to PPC Land, the same lawyer, Steven Lieberman of Rothwell Figg, represents the plaintiffs in both. Anthropic, Perplexity, Mistral, xAI and Cohere are named as customers of the Brave API, but none of them is a defendant in either case.

### What exactly does the Times accuse Brave of?

The Times says Brave copied its articles to build an index of more than 30 billion pages, then sold access to that index to AI companies through the Brave Search API. The complaint also targets Ask Brave, the AI answer feature, which allegedly reproduced long passages of paywalled stories. It goes after two browser features too: a filter that gets around paywalls, and swapping the papers' ads for Brave's own. The paper calls Brave a "supplier, dealer, and distributor of stolen copyrighted content".

### Why can't you block Brave's crawler?

Brave's official help page says its crawler does not advertise a differentiated user agent. Brave explains that it wants to avoid being blocked by sites that only allow Google. In return, it promises not to crawl anything Googlebot isn't allowed to crawl. The result: to keep Brave out through robots.txt, you'd have to keep Google out as well, which means disappearing from search. The plaintiffs see that as proof of willful infringement. Brave hasn't responded on this point in court yet.

### How does this connect to the robots.txt anti-training signal?

On October 30, 2026, Google, Microsoft, OpenAI and Anthropic promised to honor one robots.txt line, `__usage_ai-training`, telling them whether a site refuses model training. Brave did not sign. And the signal only covers training, not the live use of pages to answer a question, which Microsoft calls grounding. A big part of the Brave lawsuit is about exactly that live use, through the API and Ask Brave. So the pledge and the lawsuit cover two different stages of the same pipeline.

### What are the papers asking for?

They want the court to stop the practices they describe, which could reach the index, the API, Ask Brave, the paywall filter and the ad replacement. They also want damages, disgorgement of profits and a jury trial. Neither complaint puts a total dollar figure on it. The $100 million number some sites repeat is, according to PPC Land, a third-party estimate of Brave's total 2025 revenue with no proven tie to the index. It's safer not to quote it as harm suffered.

### Does this change anything for an independent creator?

The case is in a US court and will take time. The Times has been suing OpenAI and Microsoft since late 2023 without a ruling on the merits. For an independent creator, the immediate takeaway is practical: whatever you publish in the open can feed indexes and assistants you don't control. Add the `__usage_ai-training` signal to your robots.txt if you refuse training, keep working files behind private access, and date what you publish so you can prove you were first if it ever comes to a dispute.
