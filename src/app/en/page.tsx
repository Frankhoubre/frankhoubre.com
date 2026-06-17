import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/metadata";
import { baseUrl, person, siteName } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "AI filmmaking, image & video, done with a cinematic standard",
  titleAbsolute: `${siteName} — AI Filmmaker & Creative Director`,
  description:
    "Frank Houbre teaches creators how to make AI images, videos and films that actually look cinematic. Tutorials, workflows and analysis, minus the plastic AI look.",
  path: "/en",
  openGraph: { type: "profile" },
  alternateLanguages: { en: "/en", fr: "/", "x-default": "/" },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: siteName,
      url: `${baseUrl}/en`,
      inLanguage: "en",
    },
    {
      "@type": "Person",
      name: person.name,
      url: `${baseUrl}/en`,
      jobTitle: "AI trainer, AI filmmaker and image & video creator",
      description:
        "Frank Houbre is an AI video and image trainer, AI filmmaker and entrepreneur sharing workflows to create believable AI images, videos and films.",
      image: `${baseUrl}${person.image}`,
      sameAs: [...person.sameAs],
    },
  ],
};

export default function EnHomePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="ds-page">
        <section className="ds-cinematic-frame p-6 sm:p-10">
          <div className="relative z-10 max-w-3xl">
            <p className="ds-eyebrow text-white/70">AI filmmaking, the cinematic way</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Make AI images and videos that don&apos;t look like AI
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              I&apos;m Frank Houbre, an AI filmmaker and trainer. I share concrete
              workflows to direct AI like a real set: light, lens, framing,
              motion and continuity. The goal is simple, kill the plastic AI
              look and get believable, cinematic frames.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/en/blog" className="ds-cta-primary">
                Read the blog
              </Link>
              <Link href="/en/about" className="ds-cta-ghost-light">
                About Frank
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-5 sm:grid-cols-3">
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
          ].map((card) => (
            <div key={card.title} className="ds-card p-6">
              <h2 className="text-lg font-semibold text-neutral-950">
                {card.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                {card.body}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-12 ds-hero p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
            Free AI tools
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-700">
            Interactive tools to speed up your AI production: a cinematic prompt
            generator, a storyboard PDF builder, a production budget calculator
            and curated directories of free image and audio AI tools.
          </p>
          <div className="mt-5">
            <Link href="/outils" className="ds-link font-medium text-neutral-950">
              Browse the tools →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
