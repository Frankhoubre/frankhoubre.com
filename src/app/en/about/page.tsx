import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/metadata";
import { baseUrl, person, siteName } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "About Frank Houbre",
  description:
    "AI filmmaker, trainer and creative director. Frank Houbre helps creators produce believable, cinematic AI images, videos and films.",
  path: "/en/about",
  openGraph: { type: "profile" },
  alternateLanguages: { en: "/en/about", fr: "/a-propos", "x-default": "/a-propos" },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  url: `${baseUrl}/en/about`,
  jobTitle: "AI trainer, AI filmmaker and image & video creator",
  description:
    "Frank Houbre is an AI video and image trainer, AI filmmaker and entrepreneur.",
  image: `${baseUrl}${person.image}`,
  sameAs: [...person.sameAs],
};

export default function EnAboutPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="ds-page max-w-3xl">
        <section className="ds-cinematic-frame p-6 sm:p-8">
          <div className="relative z-10">
            <p className="ds-eyebrow text-white/70">About</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {person.name}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85">
              AI trainer, AI filmmaker and image &amp; video creator.
            </p>
          </div>
        </section>

        <div className="prose-cinema mt-8 max-w-none space-y-5 text-neutral-800">
          <p>
            I write on this site to share concrete workflows around generative
            AI: prompts structured like a photo or video brief, art direction,
            the mistakes that produce a plastic look, and how to keep visual
            consistency across multiple shots.
          </p>
          <p>
            My goal is to help creators produce more believable AI images,
            videos and films, using a real language of filmmaking: light,
            framing, motion, editing and visual continuity. I reject generic,
            plastic, Midjourney-style output, and I teach from the trenches.
          </p>
          <p>
            New here? Start with{" "}
            <Link href="/en/blog" className="ds-link text-neutral-950">
              the blog
            </Link>
            , or read the French version of this site for the full library of
            articles.
          </p>
        </div>
      </div>
    </>
  );
}
