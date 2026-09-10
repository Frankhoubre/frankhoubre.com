import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RevealObserver } from "@/components/cyber/RevealObserver";
import { CineHero } from "@/components/funnel/CineHero";
import { FilmStrip } from "@/components/funnel/FilmStrip";
import { FunnelBeacon } from "@/components/funnel/FunnelBeacon";
import { FunnelFrame } from "@/components/funnel/FunnelFrame";
import { MethodPipeline } from "@/components/funnel/MethodPipeline";
import { OptInForm } from "@/components/funnel/OptInForm";
import { StickyCta } from "@/components/funnel/StickyCta";
import { JsonLd } from "@/components/JsonLd";
import {
  FUNNEL_AWARDS,
  FUNNEL_DAYS,
  FUNNEL_FAQ,
  FUNNEL_PATHS,
  SKOOL_OFFER,
} from "@/lib/funnel/config";
import { LANDING_STILLS } from "@/lib/funnel/stills";
import {
  formatMinutes,
  formatTimecode,
  getVimeoThumbnail,
  isoMinutes,
} from "@/lib/funnel/vimeo";
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
import { person, siteName } from "@/lib/site";

const title = "Formation vidéo IA gratuite en 3 jours";
const description =
  "Recevez gratuitement la méthode de Frank Houbre pour passer d'une idée à un film IA : vision, storyboard, montage. Trois vidéos, accessibles aux débutants.";

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

const outcomes = [
  "Une idée de film claire, tenue en une phrase et six plans maximum.",
  "Un storyboard validé en image avant de dépenser un seul crédit vidéo.",
  "Le montage réel de Lost Garden, du classement des rushs à la timeline.",
] as const;

export default async function FormationOptInPage() {
  const metas = await Promise.all(FUNNEL_DAYS.map((d) => getVimeoThumbnail(d.vimeoId)));
  const totalSeconds = metas.reduce((acc, m) => acc + (m?.duration ?? 0), 0);
  const totalLabel = formatMinutes(totalSeconds);

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
        courseWorkload: isoMinutes(totalSeconds) ?? "PT1H",
      },
      ...(isoMinutes(totalSeconds) ? { timeRequired: isoMinutes(totalSeconds) } : {}),
    },
    {
      "@type": "FAQPage",
      mainEntity: FUNNEL_FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    buildBreadcrumbList([
      { name: "Accueil", path: "/" },
      { name: "Formation vidéo IA gratuite", path: FUNNEL_PATHS.optin },
    ]),
  );

  return (
    <FunnelFrame>
      <JsonLd data={jsonLd} />
      <FunnelBeacon event="optin_view" />
      <RevealObserver />

      {/* Ouverture : bande cinéma plein cadre, promesse et formulaire. */}
      <CineHero base={homeHeroImages.base} reveal={homeHeroImages.reveal}>
        <div className="mx-auto grid w-full max-w-6xl flex-1 gap-10 px-4 pb-10 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14 lg:pb-16 lg:pt-20">
          <div className="min-w-0">
            <p className="cine-timecode fade-up-reveal">
              Formation offerte · 3 vidéos{totalLabel ? ` · ${totalLabel}` : ""} · accessible aux débutants
            </p>
            <h1
              id="hero-title"
              className="cyber-title fade-up-reveal mt-5 text-[clamp(1.9rem,5.6vw,3.6rem)] text-white"
              data-delay="0.1"
            >
              Je fais des films IA pro,
              <br />
              <span className="text-[var(--orange)]">voici comment.</span>
            </h1>
            <p
              className="cine-text-muted fade-up-reveal mt-6 max-w-xl text-lg leading-relaxed sm:text-xl"
              data-delay="0.2"
            >
              Ce processus utilisé par les professionnels, et que peu partagent,
              permet d’économiser jusqu’à 80 % de vos crédits IA.
            </p>
            <ul className="fade-up-reveal mt-8 space-y-3" data-delay="0.3">
              {outcomes.map((o, i) => (
                <li key={o} className="flex gap-3 text-[15px] leading-relaxed text-white sm:text-base">
                  <span className="cine-timecode mt-1 w-14 shrink-0 !text-[var(--orange)]">
                    Jour {i + 1}
                  </span>
                  <span>{o}</span>
                </li>
              ))}
            </ul>
            <p
              className="cine-text-muted fade-up-reveal mt-8 max-w-xl border-l-2 border-[var(--orange)] pl-4 text-sm leading-relaxed"
              data-delay="0.4"
            >
              La méthode derrière Ronces, VOIDBORN et Lost Garden, primés ou
              sélectionnés dans {FUNNEL_AWARDS.length} festivals internationaux.
            </p>
            <div className="mt-10 hidden items-center gap-4 lg:flex" aria-hidden>
              <span className="cine-scroll-cue" />
              <span className="cine-timecode">Défiler</span>
            </div>
          </div>

          <div
            id={FORM_ID}
            className="cine-card fade-up-reveal scroll-mt-6 self-center p-5 sm:p-7"
            data-delay="0.25"
          >
            <p className="cine-timecode">Recevoir les 3 vidéos</p>
            <p className="cine-text-muted mt-2 text-sm leading-relaxed">
              Gratuit. Accès immédiat à la formation, puis un email par jour
              pendant trois jours.
            </p>
            <div className="mt-5">
              <OptInForm tone="dark" />
            </div>
          </div>
        </div>
      </CineHero>

      {/* Le renversement : pourquoi la plupart des gens brûlent leurs crédits. */}
      <section className="relative overflow-hidden" aria-labelledby="insight-title">
        <div className="cine-leak cine-leak-blue" style={{ width: 520, height: 520, left: "-12%", top: "-20%" }} aria-hidden />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-24">
          <div className="fade-up-reveal">
            <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--label)]">
              Le problème
            </p>
            <h2 id="insight-title" className="cyber-title mt-3 text-2xl sm:text-3xl">
              Vous créez vos vidéos IA à l’envers.
            </h2>
            <p className="mt-5 leading-relaxed text-[var(--muted)]">
              Si vous commencez par générer, vous payez l’IA pour chercher votre
              idée. Générer une image coûte bien moins cher qu’une vidéo : on
              valide donc chaque plan en image avant d’animer quoi que ce soit.
              C’est tout l’objet de ces trois jours, et c’est exactement la
              chaîne que j’utilise sur mes propres films.
            </p>
          </div>
          <div className="fade-up-reveal" data-delay="0.15">
            <p className="mb-4 text-[11px] uppercase tracking-[0.12em] text-[var(--label)]">
              La méthode en quatre temps
            </p>
            <MethodPipeline />
          </div>
        </div>
      </section>

      {/* Programme : trois chapitres, timecodes réels. */}
      <section className="cine-divider relative overflow-hidden" aria-labelledby="programme-title">
        <div className="cine-leak cine-leak-orange" style={{ width: 620, height: 620, right: "-14%", top: "10%" }} aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="max-w-2xl fade-up-reveal">
            <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--label)]">
              Le programme
            </p>
            <h2 id="programme-title" className="cyber-title mt-3 text-2xl sm:text-3xl">
              Arrêtez de générer au hasard
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--muted)]">
              En trois jours, vous construisez votre film avant de générer :
              des personnages plus cohérents, des plans plus forts, et bien
              moins d’essais qui brûlent votre temps et vos crédits.
            </p>
          </div>
          <ol className="mt-10 grid gap-6 lg:grid-cols-3">
            {FUNNEL_DAYS.map((d, i) => {
              const tc = formatTimecode(metas[i]?.duration);
              return (
                <li
                  key={d.slug}
                  className="cyber-card fade-up-reveal flex flex-col p-6"
                  data-delay={String(0.1 * i)}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="heading-font text-3xl leading-none text-[var(--orange-text)]">
                      0{d.n}
                    </span>
                    {tc ? (
                      <span className="heading-font rounded-full border border-[rgba(17,17,17,0.14)] px-2.5 py-1 text-[11px] tracking-[0.14em] text-[var(--label)]">
                        {tc}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="heading-font mt-4 text-sm uppercase tracking-[0.06em] text-[var(--cream)]">
                    {d.shortTitle}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[var(--muted)]">
                    {d.intro}
                  </p>
                  <p className="mt-4 rounded-xl bg-[rgba(17,17,17,0.04)] px-4 py-3 text-sm leading-relaxed text-[var(--cream)]">
                    <span className="text-[var(--label)]">Mission : </span>
                    {d.mission}
                  </p>
                </li>
              );
            })}
          </ol>
          <p className="mt-8 fade-up-reveal">
            <a href={`#${FORM_ID}`} className="ds-cta-dark !px-6 !py-3.5">
              Recevoir les 3 vidéos gratuites
            </a>
          </p>
        </div>
      </section>

      {/* Bande sombre : extraits et palmarès. */}
      <section className="cine-band cine-grain cine-letterbox" aria-labelledby="proof-title">
        <div className="cine-glow cine-glow-orange cine-drift-slow" style={{ width: 560, height: 560, left: "-10%", top: "-20%" }} aria-hidden />
        <div className="relative z-[5] mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="fade-up-reveal">
              <p className="cine-timecode">Palmarès</p>
              <h2 id="proof-title" className="cyber-title mt-3 text-2xl text-white sm:text-3xl">
                Des films IA récompensés en festivals
              </h2>
              <p className="cine-text-muted mt-4 leading-relaxed">
                Ronces, VOIDBORN et Lost Garden sont sortis de cette méthode,
                pas d’une théorie.
              </p>
              <ul className="mt-6 space-y-2">
                {FUNNEL_AWARDS.map((a) => (
                  <li key={`${a.label}-${a.festival}`} className="flex gap-3 text-sm leading-snug">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--orange)]" aria-hidden />
                    <span>
                      <span className="text-white">{a.label}</span>
                      <span className="cine-text-label"> · {a.festival}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="fade-up-reveal" data-delay="0.15">
              <FilmStrip
                stills={LANDING_STILLS}
                caption="Extraits de mes films et séries IA, tous produits avec cette méthode"
                tone="dark"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Avis des membres et qui parle. */}
      <section className="relative overflow-hidden" aria-labelledby="frank-title">
        <div className="cine-leak cine-leak-orange" style={{ width: 480, height: 480, right: "-10%", bottom: "-10%" }} aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="grid gap-8 sm:grid-cols-[minmax(0,10rem)_1fr] sm:items-start fade-up-reveal">
              <div className="relative aspect-square w-40 overflow-hidden rounded-2xl border border-[rgba(17,17,17,0.12)] sm:w-full">
                <Image
                  src={person.image}
                  alt={`Portrait de ${person.name}`}
                  fill
                  sizes="(max-width: 640px) 160px, 160px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--label)]">
                  Qui vous parle
                </p>
                <h2 id="frank-title" className="cyber-title mt-3 text-2xl sm:text-3xl">
                  Frank Houbre, réalisateur et formateur IA
                </h2>
                <p className="mt-4 leading-relaxed text-[var(--muted)]">
                  Je réalise des films IA et je forme des créateurs, des
                  indépendants et des équipes en entreprise. La méthode que je
                  vous envoie est celle que j’utilise sur mes projets, avec ses
                  contraintes réelles de budget et de cohérence. Pas de promesse
                  de film en un clic : une façon de travailler qui tient.
                </p>
                <p className="mt-4 text-sm">
                  <Link href="/a-propos" className="cyber-link">
                    Parcours complet et projets
                  </Link>
                </p>
              </div>
            </div>
            <div className="fade-up-reveal" data-delay="0.15">
              <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--label)]">
                Ce qu’en disent les membres d’AI Studios · {SKOOL_OFFER.trustpilotScore} sur Trustpilot
              </p>
              <ul className="mt-6 space-y-5">
                {SKOOL_OFFER.reviews.map((r) => (
                  <li key={r.author} className="cyber-card p-5">
                    <p className="text-[15px] leading-relaxed text-[var(--cream)]">« {r.text} »</p>
                    <p className="mt-2 text-xs text-[var(--label)]">{r.author}, membre AI Studios</p>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-[var(--label)]">
                Avis publiés par des membres de la formation complète AI Studios.
                Le challenge gratuit en reprend la première étape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Questions fréquentes sur la formation gratuite. */}
      <section className="cine-divider" aria-labelledby="faq-title">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="fade-up-reveal">
            <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--label)]">
              Avant de vous inscrire
            </p>
            <h2 id="faq-title" className="cyber-title mt-3 text-2xl sm:text-3xl">
              Questions fréquentes
            </h2>
          </div>
          <div className="mt-6 divide-y divide-[rgba(17,17,17,0.12)] border-y border-[rgba(17,17,17,0.12)] fade-up-reveal" data-delay="0.1">
            {FUNNEL_FAQ.map((f) => (
              <details key={f.q} className="group">
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 text-[15px] font-medium text-[var(--cream)] [&::-webkit-details-marker]:hidden">
                  <span>{f.q}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="shrink-0 text-[var(--orange-text)] transition-transform duration-200 group-open:rotate-45" aria-hidden>
                    <path d="M8 2v12M2 8h12" />
                  </svg>
                </summary>
                <p className="pb-4 text-[15px] leading-relaxed text-[var(--muted)]">
                  {f.a}
                  {f.q.startsWith("Que faites-vous") ? (
                    <>
                      {" "}
                      <Link href="/politique-confidentialite" className="cyber-link">
                        Politique de confidentialité
                      </Link>
                      .
                    </>
                  ) : null}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Dernier appel : bande sombre avec la lumière pratique. */}
      <section className="cine-band cine-grain cine-vignette cine-letterbox" aria-labelledby="final-title">
        <div className="cine-glow cine-glow-orange cine-drift" style={{ width: 640, height: 640, right: "-8%", top: "-30%" }} aria-hidden />
        <div className="cine-glow cine-glow-blue cine-drift-slow" style={{ width: 520, height: 520, left: "-12%", bottom: "-40%" }} aria-hidden />
        <div className="relative z-[5] mx-auto max-w-xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="cine-card p-5 sm:p-7 fade-up-reveal">
            <p className="cine-timecode">Dernière séquence</p>
            <h2 id="final-title" className="cyber-title mt-3 text-xl text-white sm:text-2xl">
              Recevoir les trois jours
            </h2>
            <p className="cine-text-muted mt-2 text-sm leading-relaxed">
              Le film que vous imaginez peut exister. On commence par l’idée,
              pas par le bouton générer.
            </p>
            <div className="mt-5">
              <OptInForm compact tone="dark" />
            </div>
          </div>
        </div>
      </section>

      <StickyCta targetId={FORM_ID} label="Recevoir les 3 vidéos gratuites" />
    </FunnelFrame>
  );
}
