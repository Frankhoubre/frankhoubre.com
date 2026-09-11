import type { Metadata } from "next";
import Image from "next/image";
import { RevealObserver } from "@/components/motion/RevealObserver";
import { AwardsMarquee } from "@/components/funnel/AwardsMarquee";
import { CineHero } from "@/components/funnel/CineHero";
import { FilmStrip } from "@/components/funnel/FilmStrip";
import { FunnelBeacon } from "@/components/funnel/FunnelBeacon";
import { FunnelFrame } from "@/components/funnel/FunnelFrame";
import { OptInForm } from "@/components/funnel/OptInForm";
import { StickyCta } from "@/components/funnel/StickyCta";
import { JsonLd } from "@/components/JsonLd";
import { Stars } from "@/components/ui/Stars";
import {
  FUNNEL_AWARDS,
  FUNNEL_DAYS,
  FUNNEL_PATHS,
  SKOOL_OFFER,
} from "@/lib/funnel/config";
import { LANDING_STILLS } from "@/lib/funnel/stills";
import { formatMinutes, getVimeoThumbnail, isoMinutes } from "@/lib/funnel/vimeo";
import { homeHeroImages } from "@/lib/home-hero";
import {
  ORGANIZATION_ID,
  PERSON_ID,
  absoluteUrl,
  buildBreadcrumbList,
  buildGraphJsonLd,
  buildPageMetadata,
  pageUrl,
} from "@/lib/metadata";
import { siteName } from "@/lib/site";

const title = "Formation vidéo IA gratuite : votre premier film IA cohérent en 3 jours";
const description =
  "Comment réaliser un film IA cohérent en 3 jours sans jeter vos crédits par les fenêtres. La méthode de Frank Houbre en 3 vidéos (24 min), accès immédiat, sans carte bancaire.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: FUNNEL_PATHS.optin,
  keywords: [
    "formation vidéo IA gratuite",
    "formation IA gratuite",
    "créer un film IA",
    "storyboard IA",
    "générer une vidéo IA",
    "Frank Houbre",
  ],
  openGraph: {
    title: `${title} | ${siteName}`,
    description,
    images: [
      {
        path: "/images/formation/og.jpg",
        width: 1200,
        height: 630,
        alt: "Formation vidéo IA gratuite de Frank Houbre : extraits de films IA",
      },
    ],
  },
});

const FORM_ID = "inscription";

export default async function FormationOptInPage() {
  const metas = await Promise.all(FUNNEL_DAYS.map((d) => getVimeoThumbnail(d.vimeoId)));
  const totalSeconds = metas.reduce((acc, m) => acc + (m?.duration ?? 0), 0);
  const totalLabel = formatMinutes(totalSeconds) ?? "24 min";

  const jsonLd = buildGraphJsonLd(
    {
      "@type": "WebPage",
      "@id": `${pageUrl(FUNNEL_PATHS.optin)}#webpage`,
      url: pageUrl(FUNNEL_PATHS.optin),
      name: `${title} | ${siteName}`,
      description,
      inLanguage: "fr-FR",
      primaryImageOfPage: absoluteUrl("/images/formation/og.jpg"),
      about: { "@id": PERSON_ID },
    },
    {
      "@type": "Course",
      name: "Challenge film IA en 3 jours",
      description,
      url: pageUrl(FUNNEL_PATHS.optin),
      image: absoluteUrl("/images/formation/og.jpg"),
      inLanguage: "fr-FR",
      isAccessibleForFree: true,
      educationalLevel: "Beginner",
      teaches: FUNNEL_DAYS.map((d) => d.shortTitle),
      provider: { "@id": ORGANIZATION_ID },
      instructor: { "@id": PERSON_ID },
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", category: "Free" },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        courseWorkload: isoMinutes(totalSeconds) ?? "PT24M",
      },
      ...(isoMinutes(totalSeconds) ? { timeRequired: isoMinutes(totalSeconds) } : {}),
    },
    buildBreadcrumbList([
      { name: "Accueil", path: "/" },
      { name: "Formation vidéo IA gratuite", path: FUNNEL_PATHS.optin },
    ]),
  );

  return (
    <FunnelFrame minimal>
      <JsonLd data={jsonLd} />
      <FunnelBeacon event="optin_view" />
      <RevealObserver />

      {/* Accroche, promesse, formulaire : tout tient dans le premier écran. */}
      <CineHero base={homeHeroImages.base} reveal={homeHeroImages.reveal}>
        <div className="container-x grid flex-1 gap-10 pb-12 pt-12 sm:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:pb-16 lg:pt-16">
          <div className="min-w-0">
            <p className="meta meta-strong reveal">
              Formation offerte · 3 vidéos · {totalLabel} · sans carte bancaire
            </p>
            <h1
              id="hero-title"
              className="reveal mt-6 text-[clamp(2rem,4.8vw,4.25rem)] leading-[0.98] tracking-[-0.03em] text-cream"
              data-delay="0.1"
            >
              Réalisez un film IA cohérent en 3 jours,{" "}
              <span className="text-fog">sans jeter vos crédits par les fenêtres.</span>
            </h1>
            <p className="lede reveal mt-8 max-w-xl" data-delay="0.2">
              La méthode que j’utilise sur mes propres films, en trois vidéos :
              l’idée en une phrase, le storyboard validé en image, le montage.
              Des personnages qui restent les mêmes d’un plan à l’autre, et
              jusqu’à 80 % de crédits IA économisés.
            </p>
            <p className="reveal mt-8 max-w-xl text-[15px] leading-relaxed text-stone" data-delay="0.3">
              La méthode derrière Ronces, VOIDBORN et Lost Garden, primés ou
              sélectionnés dans {FUNNEL_AWARDS.length} festivals internationaux.
            </p>
          </div>

          <div
            id={FORM_ID}
            className="reveal scroll-mt-6 border border-line-strong bg-charcoal/85 p-5 backdrop-blur-md sm:p-7"
            data-delay="0.25"
          >
            <p className="meta">Où envoyer vos accès ?</p>
            <p className="h-block mt-3 text-cream">
              Recevez les 3 vidéos et commencez la première tout de suite.
            </p>
            <div className="mt-6">
              <OptInForm />
            </div>
          </div>
        </div>
      </CineHero>

      <AwardsMarquee />

      {/* La preuve : les films, les avis, les trois vidéos. */}
      <section className="section" aria-labelledby="proof-title">
        <div className="container-x">
          <div className="grid-12 gap-y-12">
            <div className="col-span-12 reveal lg:col-span-4">
              <p className="meta">La preuve</p>
              <h2 id="proof-title" className="h-section mt-5">
                Des films qui sortent en festival, pas des tests
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-fog">
                Ronces, VOIDBORN et Lost Garden ont été construits exactement
                comme dans les trois vidéos : l’idée, le storyboard, puis la
                génération. Lost Garden est un épisode d’animé de 17 minutes,
                réalisé seul.
              </p>
              <ul className="mt-8">
                {SKOOL_OFFER.reviews.map((r) => (
                  <li key={r.author} className="border-t border-line py-4 last:border-b">
                    <Stars label={`${r.author} : 5 étoiles sur 5`} />
                    <p className="serif mt-2 text-[1.15rem] leading-snug text-cream">« {r.text} »</p>
                    <p className="meta mt-2">
                      {r.author} · membre AI Studios · {SKOOL_OFFER.trustpilotScore} sur Trustpilot
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 reveal lg:col-span-7 lg:col-start-6" data-delay="0.15">
              <FilmStrip
                stills={LANDING_STILLS}
                caption="Extraits de mes films et séries IA, tous produits avec cette méthode"
                priority
              />
              <ol className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-3">
                {FUNNEL_DAYS.map((d, i) => {
                  const m = formatMinutes(metas[i]?.duration);
                  return (
                    <li key={d.slug} className="bg-charcoal p-5">
                      <p className="meta tabular">
                        Vidéo {d.n}
                        {m ? ` · ${m}` : ""}
                      </p>
                      <p className="h-item mt-3 text-cream">{d.shortTitle}</p>
                      <p className="mt-2 text-sm leading-relaxed text-fog">{d.mission}</p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Dernier appel : la promesse, et le formulaire. */}
      <section className="band grain vignette relative border-t border-line" aria-labelledby="final-title">
        <div className="layer" aria-hidden>
          <Image src="/images/formation/hero.webp" alt="" fill sizes="100vw" className="opacity-60" />
        </div>
        <div className="scrim" aria-hidden />
        <div className="glow drift" style={{ width: 560, height: 560, right: "-8%", top: "-30%" }} aria-hidden />
        <div className="container-x relative z-[5] section">
          <div className="grid-12 items-end gap-y-10">
            <div className="col-span-12 lg:col-span-6">
              <p className="meta meta-strong reveal">Dernière séquence</p>
              <h2 id="final-title" className="h-section reveal mt-5 text-cream" data-delay="0.1">
                Votre premier film IA cohérent commence par une phrase.
              </h2>
              <p className="reveal mt-5 max-w-md text-[15px] leading-relaxed text-fog" data-delay="0.2">
                Inscrivez-vous, la vidéo 1 s’ouvre tout de suite. Accès
                immédiat, 0 €, rien à installer.
              </p>
            </div>
            <div className="reveal col-span-12 border border-line-strong bg-charcoal/85 p-5 backdrop-blur-md sm:p-7 lg:col-span-5 lg:col-start-8" data-delay="0.2">
              <OptInForm compact cta="Recevoir mes 3 vidéos" />
            </div>
          </div>
        </div>
      </section>

      <StickyCta targetId={FORM_ID} label="Recevoir mes 3 vidéos" />
    </FunnelFrame>
  );
}
