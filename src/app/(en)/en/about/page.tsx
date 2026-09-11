import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { ArrowLink } from "@/components/ui/Cta";
import { buildPageMetadata } from "@/lib/metadata";
import { baseUrl, person, socialLinks } from "@/lib/site";

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
      <PageHeader
        index="03"
        kicker="About"
        title={person.name}
        lede="AI trainer, AI filmmaker and image & video creator."
        aside={
          <ul className="meta space-y-1 lg:text-right">
            <li>France · Paris / Strasbourg</li>
            <li>FR / EN</li>
            <li>Since 2014</li>
          </ul>
        }
      />
      <div className="container-x section-sm">
        <div className="grid-12 gap-y-12">
          <div className="col-span-12 sm:col-span-5 lg:col-span-4">
            <div className="frame frame-grain frame-marks relative aspect-[4/5]">
              <Image
                src={person.image}
                alt={`Portrait of ${person.name}`}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                priority
              />
            </div>
            <p className="meta mt-3">Fig. 01 · Portrait</p>
          </div>
          <div className="prose-cinema col-span-12 sm:col-span-7 lg:col-span-6 lg:col-start-6">
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
              <Link href="/en/blog">the blog</Link>, or read the French version of
              this site for the full library of articles.
            </p>
            <div className="not-prose mt-10 border-t border-line pt-6">
              <p className="meta">Elsewhere</p>
              <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {socialLinks.map((item) => (
                  <li key={item.href}>
                    <ArrowLink href={item.href} className="text-fog hover:text-cream">
                      {item.label}
                    </ArrowLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
