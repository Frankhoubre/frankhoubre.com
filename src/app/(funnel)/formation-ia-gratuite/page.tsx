import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FunnelBeacon } from "@/components/funnel/FunnelBeacon";
import { FilmStrip } from "@/components/funnel/FilmStrip";
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
import { formatMinutes, getVimeoThumbnail, isoMinutes } from "@/lib/funnel/vimeo";
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
  const eyebrow = ["Formation offerte", "3 vidéos", totalLabel, "accessible aux débutants"]
    .filter(Boolean)
    .join(" · ");

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

      {/* Hero : promesse et preuves à gauche, formulaire (point focal) à droite. */}
      <section className="relative overflow-hidden" aria-labelledby="hero-title">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(60% 50% at 78% 20%, rgba(224,112,32,0.14), transparent 70%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-12 pt-10 sm:px-6 sm:pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:pb-16 lg:pt-20">
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--label)]">
              {eyebrow}
            </p>
            <h1 id="hero-title" className="cyber-title mt-4 text-[clamp(1.85rem,5.4vw,3.35rem)]">
              Je fais des films IA pro,
              <br />
              <span className="text-[var(--orange)]">voici comment.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
              Ce processus utilisé par les professionnels, et que peu partagent,
              permet d’économiser jusqu’à 80 % de vos crédits IA.
            </p>

            <ul className="mt-8 space-y-3">
              {outcomes.map((o, i) => (
                <li key={o} className="flex gap-3 text-[15px] leading-relaxed text-[var(--cream)] sm:text-base">
                  <span className="heading-font mt-0.5 w-14 shrink-0 text-xs uppercase tracking-[0.08em] text-[var(--orange)]">
                    Jour {i + 1}
                  </span>
                  <span>{o}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-xl border-l-2 border-[var(--orange)] pl-4 text-sm leading-relaxed text-[var(--muted)]">
              La méthode derrière Ronces, VOIDBORN et Lost Garden, primés ou
              sélectionnés dans {FUNNEL_AWARDS.length} festivals internationaux.
            </p>
          </div>

          <div id={FORM_ID} className="cyber-card scroll-mt-6 self-start p-5 sm:p-7 lg:sticky lg:top-6">
            <p className="heading-font text-xs uppercase tracking-[0.1em] text-[var(--cream)]">
              Recevoir les 3 vidéos
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
              Gratuit. Accès immédiat à la formation, puis un email par jour
              pendant trois jours.
            </p>
            <div className="mt-5">
              <OptInForm />
            </div>
          </div>
        </div>

        {/* Extraits des films et séries de Frank, sous le hero. */}
        <div className="relative mx-auto max-w-6xl px-4 pb-4 sm:px-6">
          <FilmStrip
            stills={LANDING_STILLS}
            caption="Extraits de mes films et séries IA, tous produits avec cette méthode"
            priority
          />
        </div>
      </section>

      {/* Le renversement : pourquoi la plupart des gens brûlent leurs crédits. */}
      <section className="cyber-divider" aria-labelledby="insight-title">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-20">
          <div>
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
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.12em] text-[var(--label)]">
              La méthode en quatre temps
            </p>
            <MethodPipeline />
          </div>
        </div>
      </section>

      {/* Programme : trois jours, durées réelles, missions. */}
      <section className="cyber-divider" aria-labelledby="programme-title">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
          <div className="max-w-2xl">
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
              const minutes = formatMinutes(metas[i]?.duration);
              return (
                <li
                  key={d.slug}
                  className={`cyber-card flex flex-col p-6 ${i === 2 ? "lg:col-span-1" : ""}`}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="heading-font text-3xl leading-none text-[var(--orange)]">
                      0{d.n}
                    </span>
                    {minutes ? (
                      <span className="rounded-full border border-[rgba(17,17,17,0.14)] px-2.5 py-1 text-[11px] uppercase tracking-[0.1em] text-[var(--label)]">
                        Vidéo · {minutes}
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
          <p className="mt-8">
            <a href={`#${FORM_ID}`} className="ds-cta-dark !px-6 !py-3.5">
              Recevoir les 3 vidéos gratuites
            </a>
          </p>
        </div>
      </section>

      {/* Preuves : palmarès et avis des membres. */}
      <section className="cyber-divider" aria-labelledby="proof-title">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--label)]">
                Palmarès
              </p>
              <h2 id="proof-title" className="cyber-title mt-3 text-2xl sm:text-3xl">
                Des films IA récompensés en festivals
              </h2>
              <p className="mt-4 leading-relaxed text-[var(--muted)]">
                Ronces, VOIDBORN et Lost Garden sont sortis de cette méthode,
                pas d’une théorie.
              </p>
              <ul className="mt-6 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {FUNNEL_AWARDS.map((a) => (
                  <li key={`${a.label}-${a.festival}`} className="flex gap-3 text-sm leading-snug">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--orange)]" aria-hidden />
                    <span>
                      <span className="text-[var(--cream)]">{a.label}</span>
                      <span className="text-[var(--label)]"> · {a.festival}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
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

      {/* Qui parle. */}
      <section className="cyber-divider" aria-labelledby="frank-title">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
          <div className="grid gap-8 md:grid-cols-[minmax(0,13rem)_1fr] md:items-center md:gap-12">
            <div className="relative aspect-square w-40 overflow-hidden rounded-2xl border border-[rgba(17,17,17,0.12)] md:w-full">
              <Image
                src={person.image}
                alt={`Portrait de ${person.name}`}
                fill
                sizes="(max-width: 768px) 160px, 208px"
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
              <p className="mt-4 max-w-xl leading-relaxed text-[var(--muted)]">
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
        </div>
      </section>

      {/* Questions fréquentes sur la formation gratuite. */}
      <section className="cyber-divider" aria-labelledby="faq-title">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
          <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--label)]">
            Avant de vous inscrire
          </p>
          <h2 id="faq-title" className="cyber-title mt-3 text-2xl sm:text-3xl">
            Questions fréquentes
          </h2>
          <div className="mt-6 divide-y divide-[rgba(17,17,17,0.12)] border-y border-[rgba(17,17,17,0.12)]">
            {FUNNEL_FAQ.map((f) => (
              <details key={f.q} className="group">
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 text-[15px] font-medium text-[var(--cream)] [&::-webkit-details-marker]:hidden">
                  <span>{f.q}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="shrink-0 text-[var(--orange)] transition-transform duration-200 group-open:rotate-45" aria-hidden>
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

      {/* Dernier appel. */}
      <section className="cyber-divider" aria-labelledby="final-title">
        <div className="mx-auto max-w-xl px-4 py-14 sm:px-6 lg:py-20">
          <div className="cyber-card p-5 sm:p-7">
            <h2 id="final-title" className="cyber-title text-xl sm:text-2xl">
              Recevoir les trois jours
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
              Le film que vous imaginez peut exister. On commence par l’idée,
              pas par le bouton générer.
            </p>
            <div className="mt-5">
              <OptInForm compact />
            </div>
          </div>
        </div>
      </section>

      <StickyCta targetId={FORM_ID} label="Recevoir les 3 vidéos gratuites" />
    </FunnelFrame>
  );
}
