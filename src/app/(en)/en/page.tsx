import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { CyberHero } from "@/components/cyber/CyberHero";
import { RevealObserver } from "@/components/cyber/RevealObserver";
import { HomeLatestPostGrid } from "@/components/HomeLatestPostGrid";
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

const sectionTitle =
  "cyber-title text-xl sm:text-2xl normal-case tracking-[0.01em]";

export default function EnHomePage() {
  const posts = getAllEnPosts();
  const latest = posts.slice(0, 6);
  const tools = Object.values(outilPages);

  return (
    <>
      <JsonLd data={jsonLd} />
      <RevealObserver />

      <CyberHero
        titleLines={["Frank Houbre //", "AI Filmmaker", "AI Trainer & Creative Director"]}
        intro="I help creators, freelancers, agencies and brands make AI images, videos and films that look believable, with a real method for art direction and production."
        icons={[
          { label: "AI Studios training", href: "https://www.skool.com/ai-studios", icon: "core", external: true },
          { label: "About Frank", href: "/en/about", icon: "vision" },
          { label: "Read the blog", href: "/en/blog", icon: "force" },
        ]}
        card={{
          title: "AI Studios: AI video training",
          text: "The complete method to go from a written idea to a believable AI film, from storyboard to edit.",
          ctaLabel: "Join AI Studios",
          ctaHref: "https://www.skool.com/ai-studios",
          external: true,
          thumb: homeHeroImages.thumb,
        }}
        counter={`${posts.length} articles`}
        specsTitle="At a glance"
        specs={[
          { label: "Training", value: "AI Studios, ScreenWeaver" },
          { label: "Films", value: "Ronces, VOIDBORN, Lost Garden" },
          { label: "Awards", value: "SIAFF Seoul, Chroma Awards" },
          { label: "Channel", value: "Business Dynamite" },
        ]}
        images={{ base: homeHeroImages.base, reveal: homeHeroImages.reveal }}
      />

      <div className="cyber-page relative overflow-x-hidden">
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="max-w-2xl">
            <p className="cyber-label">The approach</p>
            <h2 className={`${sectionTitle} mt-3`}>
              Make AI images and videos that don&apos;t look like AI
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              I&apos;m Frank Houbre, an AI filmmaker and trainer. I share concrete workflows to
              direct AI like a real set: light, lens, framing, motion and continuity. The goal is
              simple, kill the plastic AI look and get believable, cinematic frames.
            </p>
          </div>

          <ul className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              {
                title: "Cinematic prompting",
                body: "Write prompts like a photo or video brief: lens, light, framing and intention, not keyword soup.",
              },
              {
                title: "Real workflows",
                body: "Step-by-step pipelines for image, video and sound that hold up across multiple shots.",
              },
              {
                title: "Honest analysis",
                body: "What actually works in 2026 across the fast-moving AI image and video models, tested in the trenches.",
              },
            ].map((card, i) => (
              <li key={card.title}>
                <article
                  className="cyber-card fade-up-reveal h-full p-6"
                  data-delay={(0.05 * i).toFixed(2)}
                >
                  <h3 className="text-[13px] leading-snug text-[var(--cream)]">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{card.body}</p>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section className="cyber-divider">
          <div className="mx-auto grid max-w-5xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
            <div>
              <p className="cyber-label">Free AI tools</p>
              <h2 className={`${sectionTitle} mt-3`}>Tools to produce faster</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                A cinematic prompt generator, a storyboard PDF builder, a production budget
                calculator and curated directories of free image and audio AI tools. The tool
                pages are in French, the tools themselves are self-explanatory.
              </p>
              <ul className="mt-6">
                {tools.map((tool) => (
                  <li key={tool.path} className="cyber-spec-row">
                    <Link href={tool.path} className="cyber-link text-sm" hrefLang="fr">
                      {tool.title}
                    </Link>
                    <span className="cyber-spec-label">Free</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="cyber-label">FAQ</p>
              <h2 className={`${sectionTitle} mt-3`}>Quick answers</h2>
              <div className="mt-6 space-y-4">
                {enFaq.map((entry) => (
                  <article key={entry.question} className="cyber-card p-5">
                    <h3 className="text-[13px] leading-snug text-[var(--cream)]">
                      {entry.question}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                      {entry.answer}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cyber-divider">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="cyber-label">Blog</p>
                <h2 className={`${sectionTitle} mt-3`}>Latest articles</h2>
                <p className="mt-2 max-w-xl text-[var(--muted)]">
                  Tutorials, workflows and honest tool analysis for AI filmmaking, image and video.
                </p>
              </div>
              <Link href="/en/blog" className="cyber-btn shrink-0">
                All articles
              </Link>
            </div>
            {latest.length > 0 ? (
              <div className="mt-12">
                <HomeLatestPostGrid posts={latest} basePath="/en/blog" locale="en" />
              </div>
            ) : null}
            <p className="mt-10 text-sm text-[var(--muted)]">
              Want the full library? The{" "}
              <Link href="/blog" className="cyber-link" hrefLang="fr">
                French blog
              </Link>{" "}
              has every article, and the{" "}
              <Link href="/en/about" className="cyber-link">
                about page
              </Link>{" "}
              tells the story.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
