import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { RevealObserver } from "@/components/motion/RevealObserver";
import { BuzzBeacon } from "@/components/buzz/BuzzBeacon";
import { BuzzCheckoutButton } from "@/components/buzz/BuzzCheckoutButton";
import { BuzzNotice } from "@/components/buzz/BuzzNotice";
import { BuzzTrackedLink } from "@/components/buzz/BuzzTrackedLink";
import { CineHero } from "@/components/funnel/CineHero";
import { FunnelFrame } from "@/components/funnel/FunnelFrame";
import { JsonLd } from "@/components/JsonLd";
import { Plus } from "@/components/FaqSection";
import { Arrow } from "@/components/ui/Cta";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  BUZZ_PATHS,
  BUZZ_PRICE,
  BUZZ_PRODUCT_NAME,
  IMAGINODE_URL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
} from "@/lib/buzz/config";
import { buzzContent, isBuzzOfferReady } from "@/lib/buzz/content";
import { isStripeConfigured } from "@/lib/buzz/stripe";
import { FUNNEL_AWARDS } from "@/lib/funnel/config";
import { homeHeroImages } from "@/lib/home-hero";
import {
  ORGANIZATION_ID,
  PERSON_ID,
  buildBreadcrumbList,
  buildGraphJsonLd,
  buildPageMetadata,
  pageUrl,
} from "@/lib/metadata";
import { person, siteName } from "@/lib/site";

const c = buzzContent.sales;

/** Visuel de la vidéo du hamac, à déposer par Frank (facultatif). */
const HERO_IMAGE = "/images/buzz/hammock.jpg";
const hasHeroImage = fs.existsSync(path.join(process.cwd(), "public", HERO_IMAGE));

export const metadata: Metadata = buildPageMetadata({
  title: c.metaTitle,
  titleAbsolute: c.metaTitle,
  description: c.metaDescription,
  path: BUZZ_PATHS.sales,
  keywords: ["viral AI videos", "AI reels", "AI video prompt", "Imaginode", "Frank Houbre"],
  openGraph: {
    title: c.metaTitle,
    description: c.metaDescription,
    ...(hasHeroImage
      ? { images: [{ path: HERO_IMAGE, width: 1200, height: 630, alt: "The hammock AI video by Frank Houbre" }] }
      : {}),
  },
});

const jsonLd = buildGraphJsonLd(
  {
    "@type": "WebPage",
    "@id": `${pageUrl(BUZZ_PATHS.sales)}#webpage`,
    url: pageUrl(BUZZ_PATHS.sales),
    name: c.metaTitle,
    description: c.metaDescription,
    inLanguage: "en-US",
    about: { "@id": PERSON_ID },
  },
  {
    "@type": "Product",
    name: BUZZ_PRODUCT_NAME,
    description: c.metaDescription,
    url: pageUrl(BUZZ_PATHS.sales),
    brand: { "@id": ORGANIZATION_ID },
    offers: {
      "@type": "Offer",
      price: (BUZZ_PRICE.amount / 100).toFixed(2),
      priceCurrency: BUZZ_PRICE.currency.toUpperCase(),
      availability: "https://schema.org/InStock",
      url: pageUrl(BUZZ_PATHS.sales),
      seller: { "@id": ORGANIZATION_ID },
    },
  },
  buildBreadcrumbList([
    { name: "Home", path: "/en" },
    { name: "Viral AI videos", path: BUZZ_PATHS.sales },
  ]),
);

const CHECKOUT_ID = "checkout";

export default function ViralAiVideosPage() {
  const ready = isBuzzOfferReady() && isStripeConfigured();
  const checkout = (compact = false) => (
    <BuzzCheckoutButton
      label={c.cta}
      sendingLabel={c.ctaSending}
      soonLabel={c.ctaSoon}
      errorLabel={c.ctaUnavailable}
      ready={ready}
      compact={compact}
    />
  );

  return (
    <FunnelFrame minimal locale="en">
      <JsonLd data={jsonLd} />
      <BuzzBeacon event="buzz_view" />
      <RevealObserver />

      {/* Promesse à gauche, offre et paiement (point focal) à droite. */}
      <CineHero base={homeHeroImages.base} reveal={homeHeroImages.reveal}>
        <div className="container-x grid flex-1 gap-10 pb-12 pt-12 sm:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:pb-16 lg:pt-16">
          <div className="min-w-0">
            <Suspense fallback={null}>
              <BuzzNotice param="checkout" messages={{ cancelled: c.cancelled, unpaid: c.cancelled }} />
            </Suspense>
            <p className="meta meta-strong reveal">{c.kicker}</p>
            <h1
              id="hero-title"
              className="reveal mt-6 text-[clamp(2rem,4.8vw,4.25rem)] leading-[0.98] tracking-[-0.03em] text-cream"
              data-delay="0.1"
            >
              {c.h1a} <span className="text-fog">{c.h1b}</span>
            </h1>
            <p className="lede reveal mt-8 max-w-xl" data-delay="0.2">
              {c.lead}
            </p>
            <p className="reveal mt-8" data-delay="0.3">
              <BuzzTrackedLink event="click_instagram" href={INSTAGRAM_URL} className="btn">
                <span>
                  {c.proofCta} · @{INSTAGRAM_HANDLE}
                </span>
                <Arrow />
              </BuzzTrackedLink>
            </p>
          </div>

          <div
            id={CHECKOUT_ID}
            className="reveal scroll-mt-6 border border-line-strong bg-charcoal/85 p-5 backdrop-blur-md sm:p-7"
            data-delay="0.25"
          >
            <p className="meta">{c.getTitle}</p>
            <ul className="mt-4 border-t border-line">
              {c.getItems.map((item) => (
                <li key={item} className="flex gap-3 border-b border-line py-3 text-[14px] leading-relaxed text-stone">
                  <span className="mt-[0.7em] h-px w-4 shrink-0 bg-fog" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-baseline gap-3">
              <span className="display text-5xl leading-none text-cream">{BUZZ_PRICE.label}</span>
              <span className="text-sm text-fog">one-time payment</span>
            </p>
            <div className="mt-5">{checkout()}</div>
            <p className="meta mt-3 text-[10px] leading-relaxed text-fog/80">{c.priceNote}</p>
            <p className="mt-3 text-[11px] leading-relaxed text-fog/70">{c.legal}</p>
          </div>
        </div>
      </CineHero>

      {/* La preuve : ce qui s'est passé, et où le voir. */}
      <section className="section border-t border-line" aria-labelledby="proof-title">
        <div className="container-x">
          <div className="grid-12 gap-y-12">
            <div className="col-span-12 reveal lg:col-span-4">
              <p className="meta">Instagram · @{INSTAGRAM_HANDLE}</p>
              <h2 id="proof-title" className="h-section mt-5">
                {c.proofTitle}
              </h2>
            </div>
            <div className="col-span-12 reveal lg:col-span-7 lg:col-start-6" data-delay="0.15">
              {hasHeroImage ? (
                <div className="frame frame-grain frame-marks relative mb-8 aspect-[9/16] w-full max-w-[18rem]">
                  <Image src={HERO_IMAGE} alt="Still from the hammock AI video" fill sizes="288px" className="object-cover" />
                </div>
              ) : null}
              {c.proofBody.map((p) => (
                <p key={p} className="mt-4 text-[15px] leading-relaxed text-fog first:mt-0">
                  {p}
                </p>
              ))}
              <p className="mt-6">
                <BuzzTrackedLink event="click_imaginode" detail="sales-proof" href={IMAGINODE_URL} className="arrow-link">
                  Imaginode, the studio behind the reels
                </BuzzTrackedLink>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qui parle : portrait, palmarès réel. */}
      <section className="section border-t border-line" aria-labelledby="who-title">
        <div className="container-x">
          <div className="grid-12 gap-y-12">
            <div className="col-span-12 reveal sm:col-span-5 lg:col-span-4">
              <div className="frame frame-grain frame-marks relative aspect-[4/5]">
                <Image src={person.image} alt={`Portrait of ${person.name}`} fill sizes="(max-width: 640px) 100vw, 33vw" />
              </div>
              <p className="meta mt-3">Fig. 01 · {person.name}</p>
            </div>
            <div className="col-span-12 reveal sm:col-span-7 lg:col-span-7 lg:col-start-6" data-delay="0.15">
              <p className="meta">{c.whoTitle}</p>
              <h2 id="who-title" className="h-section mt-5">
                {c.whoKicker}
              </h2>
              {c.whoBody.map((p) => (
                <p key={p} className="mt-5 max-w-xl text-[15px] leading-relaxed text-fog">
                  {p}
                </p>
              ))}
              <ul className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2">
                {FUNNEL_AWARDS.map((a) => (
                  <li key={`${a.label}-${a.festival}`} className="bg-charcoal px-4 py-3">
                    <p className="text-sm text-cream">{a.label}</p>
                    <p className="meta mt-1 text-[10px] normal-case tracking-[0.06em]">{a.festival}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section border-t border-line" aria-labelledby="faq-title">
        <div className="container-x">
          <SectionHeader index="03" kicker="FAQ" id="faq-title" title={c.faqTitle} />
          <div className="mt-12 max-w-3xl">
            {c.faq.map((f) => (
              <details key={f.q} className="faq-item">
                <summary>
                  <span>{f.q}</span>
                  <Plus />
                </summary>
                <p className="pb-5 text-[15px] leading-relaxed text-fog">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Dernier appel : la promesse, et le paiement. */}
      <section className="band grain vignette relative border-t border-line" aria-labelledby="final-title">
        <div className="layer" aria-hidden>
          <Image src="/images/formation/hero.webp" alt="" fill sizes="100vw" className="opacity-60" />
        </div>
        <div className="scrim" aria-hidden />
        <div className="glow drift" style={{ width: 560, height: 560, right: "-8%", top: "-30%" }} aria-hidden />
        <div className="container-x relative z-[5] section">
          <div className="grid-12 items-end gap-y-10">
            <div className="col-span-12 lg:col-span-6">
              <p className="meta meta-strong reveal">Last sequence</p>
              <h2 id="final-title" className="h-section reveal mt-5 text-cream" data-delay="0.1">
                {c.bottomTitle}
              </h2>
              <p className="reveal mt-5 max-w-md text-[15px] leading-relaxed text-fog" data-delay="0.2">
                {c.bottomBody}
              </p>
            </div>
            <div className="reveal col-span-12 border border-line-strong bg-charcoal/85 p-5 backdrop-blur-md sm:p-7 lg:col-span-5 lg:col-start-8" data-delay="0.2">
              <p className="flex items-baseline gap-3">
                <span className="display text-4xl leading-none text-cream">{BUZZ_PRICE.label}</span>
                <span className="text-sm text-fog">one-time payment</span>
              </p>
              <div className="mt-5">{checkout(true)}</div>
              <p className="meta mt-3 text-[10px] leading-relaxed text-fog/80">
                {c.priceNote} · {siteName}
              </p>
            </div>
          </div>
        </div>
      </section>
    </FunnelFrame>
  );
}
