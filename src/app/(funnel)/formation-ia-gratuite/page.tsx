import type { Metadata } from "next";
import Image from "next/image";
import { FunnelBeacon } from "@/components/funnel/FunnelBeacon";
import { FunnelFrame } from "@/components/funnel/FunnelFrame";
import { MethodPipeline } from "@/components/funnel/MethodPipeline";
import { OptInForm } from "@/components/funnel/OptInForm";
import { JsonLd } from "@/components/JsonLd";
import { FUNNEL_AWARDS, FUNNEL_DAYS, FUNNEL_PATHS } from "@/lib/funnel/config";
import {
  ORGANIZATION_ID,
  PERSON_ID,
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
    "film IA",
    "storyboard IA",
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
        alt: "Formation vidéo IA gratuite de Frank Houbre",
      },
    ],
  },
});

const jsonLd = buildGraphJsonLd(
  {
    "@type": "WebPage",
    "@id": `${pageUrl(FUNNEL_PATHS.optin)}#webpage`,
    url: pageUrl(FUNNEL_PATHS.optin),
    name: `${title} | ${siteName}`,
    description,
    inLanguage: "fr-FR",
    about: { "@id": PERSON_ID },
  },
  {
    "@type": "Course",
    name: "Challenge film IA en 3 jours",
    description,
    url: pageUrl(FUNNEL_PATHS.optin),
    inLanguage: "fr-FR",
    isAccessibleForFree: true,
    provider: { "@id": ORGANIZATION_ID },
    instructor: { "@id": PERSON_ID },
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "PT1H",
    },
  },
  buildBreadcrumbList([
    { name: "Accueil", path: "/" },
    { name: "Formation vidéo IA gratuite", path: FUNNEL_PATHS.optin },
  ]),
);

export default function FormationOptInPage() {
  return (
    <FunnelFrame>
      <JsonLd data={jsonLd} />
      <FunnelBeacon event="optin_view" />

      {/* Hero : copy de Frank à gauche, formulaire (point focal) à droite. */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(60% 50% at 75% 30%, rgba(224,112,32,0.14), transparent 70%)",
          }}
        />
        <div className="relative mx-auto grid max-w-5xl gap-10 px-4 pb-14 pt-10 sm:px-6 sm:pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:pb-20 lg:pt-20">
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-[0.12em] text-[rgba(17,17,17,0.62)]">
              Formation offerte · 3 vidéos · accessible aux débutants
            </p>
            <h1 className="cyber-title mt-4 text-[clamp(1.75rem,5.2vw,3rem)]">
              Je fais des films IA pro,
              <br />
              <span className="text-[var(--orange)]">voici comment.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
              Ce processus utilisé par les professionnels, et que peu partagent,
              permet d’économiser jusqu’à 80 % de vos crédits IA.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)]">
              Vous recevez la méthode pour transformer une simple idée écrite en
              storyboard clair, puis en vidéo IA. Trois jours, trois vidéos,
              une mission concrète par jour.
            </p>

            <figure className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-[rgba(17,17,17,0.12)] shadow-[0_18px_40px_rgba(17,17,17,0.12)]">
              <Image
                src="/images/formation/hero.webp"
                alt="Photogramme : une silhouette en manteau au bord d’une terrasse de béton monumentale au-dessus de la ville, à l’aube"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </figure>
          </div>

          <div className="cyber-card self-start p-5 sm:p-7 lg:sticky lg:top-6">
            <p className="heading-font text-xs uppercase tracking-[0.1em] text-[var(--cream)]">
              Recevoir la méthode gratuite
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
              Accès immédiat à la page de formation, puis les trois jours
              détaillés par email.
            </p>
            <div className="mt-5">
              <OptInForm />
            </div>
          </div>
        </div>
      </section>

      {/* Programme : liste numérotée, pas trois cartes identiques. */}
      <section className="cyber-divider">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:py-20">
          <div className="lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div>
              <p className="text-[11px] uppercase tracking-[0.12em] text-[rgba(17,17,17,0.62)]">
                Le programme
              </p>
              <h2 className="cyber-title mt-3 text-2xl sm:text-3xl">
                Arrêtez de générer au hasard
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-[var(--muted)]">
                En trois jours, vous construisez votre film avant de générer :
                des personnages plus cohérents, des plans plus forts, et bien
                moins d’essais qui brûlent votre temps et vos crédits.
              </p>
              <div className="mt-8">
                <MethodPipeline />
              </div>
            </div>
            <ol className="mt-8 space-y-6 lg:mt-0">
              {FUNNEL_DAYS.map((d) => (
                <li
                  key={d.slug}
                  className="grid grid-cols-[3rem_1fr] gap-4 border-t border-[rgba(17,17,17,0.14)] pt-5"
                >
                  <span className="heading-font text-2xl leading-none text-[var(--orange)]">
                    0{d.n}
                  </span>
                  <div className="min-w-0">
                    <p className="heading-font text-sm uppercase tracking-[0.06em] text-[var(--cream)]">
                      {d.shortTitle}
                    </p>
                    <p className="mt-2 text-[15px] leading-relaxed text-[var(--muted)]">
                      {d.intro}
                    </p>
                    <p className="mt-3 text-sm text-[var(--cream)]">
                      <span className="text-[rgba(17,17,17,0.62)]">Mission : </span>
                      {d.mission}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Qui parle : portrait, palmarès réel. */}
      <section className="cyber-divider">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:py-20">
          <div className="grid gap-8 md:grid-cols-[minmax(0,14rem)_1fr] md:items-start md:gap-12">
            <div className="relative aspect-square w-40 overflow-hidden rounded-2xl border border-[rgba(17,17,17,0.14)] md:w-full">
              <Image
                src={person.image}
                alt={`Portrait de ${person.name}`}
                fill
                sizes="(max-width: 768px) 160px, 224px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] uppercase tracking-[0.12em] text-[rgba(17,17,17,0.62)]">
                Méthode utilisée par Frank Houbre
              </p>
              <h2 className="cyber-title mt-3 text-2xl sm:text-3xl">
                Des créations IA récompensées en festivals internationaux
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-[var(--muted)]">
                Je suis réalisateur et formateur IA. Mes films Ronces, VOIDBORN
                et Lost Garden ont été sélectionnés et primés dans les festivals
                ci-dessous. La méthode que je vous envoie est celle que
                j’utilise sur ces projets, pas une théorie.
              </p>
              <ul className="mt-6 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {FUNNEL_AWARDS.map((a) => (
                  <li
                    key={`${a.label}-${a.festival}`}
                    className="flex gap-3 text-sm leading-snug"
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--orange)]" aria-hidden />
                    <span>
                      <span className="text-[var(--cream)]">{a.label}</span>
                      <span className="text-[rgba(17,17,17,0.62)]"> · {a.festival}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Rappel du formulaire en bas de page pour ceux qui ont tout lu. */}
      <section className="cyber-divider">
        <div className="mx-auto max-w-xl px-4 py-14 sm:px-6 lg:py-20">
          <div className="cyber-card p-5 sm:p-7">
            <h2 className="cyber-title text-xl sm:text-2xl">
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
    </FunnelFrame>
  );
}
