import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { HomeHero } from "@/components/home/HomeHero";
import { RevealObserver } from "@/components/motion/RevealObserver";
import { HomeLatestPostGrid } from "@/components/HomeLatestPostGrid";
import { Plus } from "@/components/FaqSection";
import { Cta } from "@/components/ui/Cta";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechnicalDiagram } from "@/components/ui/TechnicalDiagram";
import { getAllEnPosts } from "@/lib/blog-en";
import { homeHeroImages } from "@/lib/home-hero";
import {
  ORGANIZATION_ID,
  PERSON_ID,
  WEBSITE_ID,
  buildPageMetadata,
} from "@/lib/metadata";
import { outilPages } from "@/lib/outils-metadata";
import { baseUrl, person, siteName } from "@/lib/site";

export const revalidate = 3600;

const enTitle = `${siteName} | AI Filmmaker, AI Trainer & Creative Director`;
const enDescription =
  "Frank Houbre teaches creators how to make AI images, videos and films that actually look cinematic. Tutorials, workflows and analysis, minus the plastic AI look.";

export const metadata: Metadata = buildPageMetadata({
  title: "AI filmmaking, image & video, done with a cinematic standard",
  titleAbsolute: enTitle,
  description: enDescription,
  path: "/en",
  openGraph: { type: "website", title: enTitle, description: enDescription },
  twitter: { title: enTitle, description: enDescription },
  alternateLanguages: { en: "/en", fr: "/", "x-default": "/" },
});

const enFaq = [
  {
    question: "Who is Frank Houbre?",
    answer:
      "Frank Houbre is a French AI trainer, AI filmmaker and entrepreneur. He founded the AI Studios training program, the ScreenWeaver writing tool and the Business Dynamite platform. His AI films Ronces and VOIDBORN won awards at international festivals such as the Seoul International AI Film Festival and the Chroma Awards.",
  },
  {
    question: "What will I find on this site?",
    answer:
      "Tutorials on AI image and video, honest tool analysis, art direction methods, image-to-video workflows and free tools. The French site carries the full library; the English blog mirrors a growing selection.",
  },
  {
    question: "Who is this for?",
    answer:
      "Creators, freelancers, agencies, brands and anyone who wants believable AI images and videos with a real method instead of keyword soup.",
  },
] as const;

const approach = [
  {
    n: "01",
    title: "Cinematic prompting",
    body: "Write prompts like a photo or video brief: lens, light, framing and intention, not keyword soup.",
  },
  {
    n: "02",
    title: "Real workflows",
    body: "Step-by-step pipelines for image, video and sound that hold up across multiple shots.",
  },
  {
    n: "03",
    title: "Honest analysis",
    body: "What actually works in 2026 across the fast-moving AI image and video models, tested in the trenches.",
  },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: siteName,
      url: baseUrl,
      inLanguage: ["fr-FR", "en-US"],
      publisher: { "@id": ORGANIZATION_ID },
    },
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: siteName,
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/frank-houbre-about.png`,
        width: 1024,
        height: 1024,
      },
      sameAs: [...person.sameAs],
      founder: { "@id": PERSON_ID },
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: person.name,
      url: baseUrl,
      jobTitle: "AI trainer, AI filmmaker and image & video creator",
      description:
        "Frank Houbre is an AI video and image trainer, AI filmmaker and entrepreneur sharing workflows to create believable AI images, videos and films.",
      image: `${baseUrl}${person.image}`,
      nationality: { "@type": "Country", name: "France" },
      knowsLanguage: ["fr", "en"],
      sameAs: [...person.sameAs],
    },
    {
      "@type": "WebPage",
      "@id": `${baseUrl}/en#webpage`,
      url: `${baseUrl}/en`,
      name: enTitle,
      description: enDescription,
      inLanguage: "en-US",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": PERSON_ID },
    },
    {
      "@type": "FAQPage",
      "@id": `${baseUrl}/en#faq`,
      mainEntity: enFaq.map((entry) => ({
        "@type": "Question",
        name: entry.question,
        acceptedAnswer: { "@type": "Answer", text: entry.answer },
      })),
    },
  ],
};

export default function EnHomePage() {
  const posts = getAllEnPosts();
  const latest = posts.slice(0, 6);
  const tools = Object.values(outilPages);

  return (
    <>
      <JsonLd data={jsonLd} />
      <RevealObserver />

      <HomeHero
        kicker="01 / AI filmmaker · AI trainer · Creative director"
        name="Frank Houbre"
        roles="AI filmmaker, AI trainer and creative director."
        intro="I help creators, freelancers, agencies and brands make AI images, videos and films that look believable, with a real method for art direction and production."
        notes={["Image", "Video", "Film", "Method"]}
        counter={String(posts.length)}
        counterLabel="articles in English"
        primary={{ label: "AI Studios training", href: "https://www.skool.com/ai-studios", external: true }}
        secondary={{ label: "Read the blog", href: "/en/blog" }}
        specsTitle="At a glance"
        specs={[
          { label: "Training", value: "AI Studios, ScreenWeaver" },
          { label: "Films", value: "Ronces, VOIDBORN, Lost Garden" },
          { label: "Awards", value: "SIAFF Seoul, Chroma Awards" },
          { label: "Channel", value: "Business Dynamite" },
        ]}
        scrollLabel="Scroll"
        images={{ base: homeHeroImages.base, reveal: homeHeroImages.reveal }}
      />

      {/* 02 · The approach */}
      <section className="section" aria-labelledby="approach">
        <div className="container-x">
          <div className="grid-12 gap-y-12">
            <div className="col-span-12 lg:col-span-3">
              <p className="meta"><span className="meta-strong">02</span> &nbsp;/&nbsp; The approach</p>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <h2 id="approach" className="h-section reveal">
                Make AI images and videos that don&apos;t look like AI.
              </h2>
              <p className="reveal mt-8 max-w-2xl text-[1.05rem] leading-relaxed text-fog" data-delay="0.1">
                I&apos;m Frank Houbre, an AI filmmaker and trainer. I share concrete workflows to
                direct AI like a real set: light, lens, framing, motion and continuity. The goal is
                simple, kill the plastic AI look and get believable, cinematic frames.
              </p>
            </div>
          </div>
          <div className="mt-14 grid gap-10 border-t border-line pt-10 md:grid-cols-3 md:gap-8">
            {approach.map((card, i) => (
              <article key={card.title} className="reveal" data-delay={(0.08 * i).toFixed(2)}>
                <p className="meta"><span className="meta-strong tabular">{card.n}</span></p>
                <h3 className="h-item mt-5 text-cream">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fog">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 03 · Quote */}
      <section className="band band-navy grain border-t border-line" aria-labelledby="vision">
        <div className="container-x relative z-[4] section">
          <div className="grid-12 items-center gap-y-14">
            <div className="col-span-12 lg:col-span-7">
              <p className="meta"><span className="meta-strong">03</span> &nbsp;/&nbsp; Vision</p>
              <QuoteBlock className="reveal mt-8" cite="Frank Houbre" meta="AI filmmaker">
                <span id="vision">
                  A good result never comes from the prompt alone. It comes from the frame, the
                  light, the rhythm, and what you choose not to show.
                </span>
              </QuoteBlock>
            </div>
            <div className="col-span-8 col-start-3 text-stone/80 sm:col-span-6 sm:col-start-4 lg:col-span-3 lg:col-start-10">
              <TechnicalDiagram className="reveal mx-auto max-w-[280px]" labels={["Idea", "Image", "Film", "Edit"]} />
            </div>
          </div>
        </div>
      </section>

      {/* 04 · Tools and FAQ */}
      <section className="section border-t border-line" aria-labelledby="tools">
        <div className="container-x">
          <div className="grid-12 gap-y-14">
            <div className="col-span-12 lg:col-span-5">
              <p className="meta"><span className="meta-strong">04</span> &nbsp;/&nbsp; Free AI tools</p>
              <h2 id="tools" className="h-block mt-5 text-cream">Tools to produce faster</h2>
              <p className="mt-3 text-sm leading-relaxed text-fog">
                A cinematic prompt generator, a storyboard PDF builder, a production budget
                calculator and curated directories of free image and audio AI tools. The tool
                pages are in French, the tools themselves are self-explanatory.
              </p>
              <ul className="mt-8">
                {tools.map((tool, i) => (
                  <li key={tool.path} className="spec-row">
                    <Link href={tool.path} className="line-link text-[15px] text-cream" hrefLang="fr">
                      {tool.title}
                    </Link>
                    <span className="spec-label">0{i + 1} · Free</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <p className="meta">FAQ</p>
              <h2 className="h-block mt-5 text-cream">Quick answers</h2>
              <div className="mt-8">
                {enFaq.map((entry, i) => (
                  <details key={entry.question} className="faq-item" open={i === 0}>
                    <summary>
                      <span className="flex gap-5">
                        <span className="meta tabular pt-1.5">0{i + 1}</span>
                        <span>{entry.question}</span>
                      </span>
                      <Plus />
                    </summary>
                    <p className="pl-[calc(2ch+1.25rem)] text-[15px] leading-relaxed text-fog">{entry.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 · Journal */}
      <section className="section border-t border-line" aria-labelledby="latest">
        <div className="container-x">
          <SectionHeader
            index="05"
            kicker="Journal"
            id="latest"
            title="Latest articles"
            lede="Tutorials, workflows and honest tool analysis for AI filmmaking, image and video."
            aside={<Cta href="/en/blog" size="sm">All articles</Cta>}
          />
          {latest.length > 0 ? (
            <div className="mt-14">
              <HomeLatestPostGrid posts={latest} basePath="/en/blog" locale="en" />
            </div>
          ) : null}
          <p className="mt-12 border-t border-line pt-6 text-sm text-fog">
            Want the full library? The{" "}
            <Link href="/blog" className="link" hrefLang="fr">
              French blog
            </Link>{" "}
            has every article, and the{" "}
            <Link href="/en/about" className="link">
              about page
            </Link>{" "}
            tells the story.
          </p>
        </div>
      </section>
    </>
  );
}
