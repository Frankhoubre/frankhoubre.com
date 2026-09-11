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

/* L'enfer actuel, en trois situations que les personnes reconnaissent. */
const PAINS = [
  {
    title: "Des dizaines de clips, aucun film",
    text: "Vous générez, vous regénérez, et vous finissez avec des dizaines de vidéos qui ne racontent rien ensemble.",
  },
  {
    title: "Un personnage qui change de visage",
    text: "D’un plan à l’autre, votre héros n’a plus le même nez ni le même manteau, et chaque nouvel essai vous coûte des crédits.",
  },
  {
    title: "De belles images, pas d’histoire",
    text: "Vous avez des plans magnifiques et rien à monter, parce que l’histoire n’existait pas avant de cliquer sur générer.",
  },
] as const;

/* Ce qui s'ajoute aux trois vidéos dans ce que la personne reçoit. */
const EXTRAS = [
  {
    title: "Les coulisses réelles de Lost Garden",
    text: "Pas une démonstration sur un exemple inventé : le vrai projet, ses rushs, sa timeline, mes choix de prises.",
  },
  {
    title: "Un email par jour pour tenir le rythme",
    text: "Chaque matin, l’accès du jour et sa mission. Vous avancez sans avoir à y penser, et vous pouvez tout regarder d’un coup si vous préférez.",
  },
  {
    title: "Une mission courte par vidéo",
    text: "Une phrase pour votre idée, un storyboard de quatre à six plans, un projet de montage. À la fin, vous avez un film sur les rails, pas des notes.",
  },
] as const;

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
    <FunnelFrame minimal>
      <JsonLd data={jsonLd} />
      <FunnelBeacon event="optin_view" />
      <RevealObserver />

      {/* Ouverture : le hook, ce qu'on obtient, en combien de temps, à quel prix, et le formulaire. */}
      <CineHero base={homeHeroImages.base} reveal={homeHeroImages.reveal}>
        <div className="mx-auto grid w-full max-w-6xl flex-1 gap-10 px-4 pb-10 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14 lg:pb-16 lg:pt-20">
          <div className="min-w-0">
            <p className="cine-timecode fade-up-reveal">
              Formation offerte · 3 vidéos · {totalLabel} · débutants bienvenus
            </p>
            <h1
              id="hero-title"
              className="cyber-title fade-up-reveal mt-5 text-[clamp(1.45rem,3.4vw,2.5rem)] text-white"
              data-delay="0.1"
            >
              Comment réaliser un film IA cohérent en 3 jours,
              <br className="hidden sm:block" />{" "}
              <span className="text-[var(--orange)]">
                sans jeter vos crédits par les fenêtres.
              </span>
            </h1>
            <p
              className="cine-text-muted fade-up-reveal mt-6 max-w-xl text-lg leading-relaxed sm:text-xl"
              data-delay="0.2"
            >
              La méthode que j’utilise sur mes propres films : l’idée en une
              phrase, le storyboard validé en image, et seulement ensuite la
              génération. Des personnages qui restent les mêmes d’un plan à
              l’autre, et jusqu’à 80 % de crédits IA économisés.
            </p>

            <dl className="fade-up-reveal mt-8 grid max-w-xl grid-cols-3 gap-3" data-delay="0.3">
              {[
                ["Accès immédiat", "La vidéo 1 s’ouvre dès l’inscription"],
                [totalLabel, "de vidéo, une mission courte par jour"],
                ["0 €", "Sans carte bancaire, rien à installer"],
              ].map(([k, v]) => (
                <div key={k} className="min-w-0 border-l-2 border-[var(--orange)] pl-3">
                  <dt className="heading-font text-base text-white sm:text-lg">{k}</dt>
                  <dd className="cine-text-label mt-1 text-[11px] leading-snug sm:text-xs">{v}</dd>
                </div>
              ))}
            </dl>

            <p
              className="cine-text-muted fade-up-reveal mt-8 max-w-xl text-sm leading-relaxed"
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
            <p className="cine-timecode">Où envoyer vos accès ?</p>
            <p className="mt-2 text-lg leading-snug text-white">
              Recevez les 3 vidéos et commencez la première tout de suite.
            </p>
            <div className="mt-5">
              <OptInForm tone="dark" />
            </div>
          </div>
        </div>
      </CineHero>

      {/* L'enfer actuel, puis ce qu'on fait à la place. */}
      <section className="relative overflow-hidden" aria-labelledby="pain-title">
        <div className="cine-leak cine-leak-blue" style={{ width: 520, height: 520, left: "-12%", top: "-20%" }} aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="max-w-2xl fade-up-reveal">
            <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--label)]">
              Le problème
            </p>
            <h2 id="pain-title" className="cyber-title mt-3 text-2xl sm:text-3xl">
              Pourquoi vos vidéos IA ne ressemblent pas à un film
            </h2>
          </div>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {PAINS.map((p, i) => (
              <li
                key={p.title}
                className="cyber-card fade-up-reveal p-5 sm:p-6"
                data-delay={String(0.1 * i)}
              >
                <p className="heading-font text-[11px] tracking-[0.12em] text-[var(--label)]">
                  0{i + 1}
                </p>
                <p className="heading-font mt-3 text-sm uppercase tracking-[0.04em] text-[var(--cream)]">
                  {p.title}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--muted)]">{p.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="fade-up-reveal">
              <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--label)]">
                Ce qu’on fait à la place
              </p>
              <h3 className="cyber-title mt-3 text-xl sm:text-2xl">
                On construit le film avant de générer.
              </h3>
              <p className="mt-5 leading-relaxed text-[var(--muted)]">
                L’IA n’est pas trop chère. Vous lui demandez de réfléchir à
                votre place, et chaque tentative se paie en crédits. Générer une
                image coûte bien moins cher qu’une vidéo : on valide donc chaque
                plan en image avant d’animer quoi que ce soit. C’est la chaîne
                que j’utilise sur mes propres films, et c’est ce que vous mettez
                en place en trois jours.
              </p>
            </div>
            <div className="fade-up-reveal" data-delay="0.15">
              <p className="mb-4 text-[11px] uppercase tracking-[0.12em] text-[var(--label)]">
                La méthode en quatre temps
              </p>
              <MethodPipeline />
            </div>
          </div>
        </div>
      </section>

      {/* Ce que la personne reçoit, poste par poste, et à quel prix. */}
      <section className="cyber-divider relative overflow-hidden" aria-labelledby="stack-title">
        <div className="cine-leak cine-leak-orange" style={{ width: 620, height: 620, right: "-14%", top: "10%" }} aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="max-w-2xl fade-up-reveal">
            <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--label)]">
              Ce que vous recevez
            </p>
            <h2 id="stack-title" className="cyber-title mt-3 text-2xl sm:text-3xl">
              Trois vidéos, trois missions, un film sur les rails
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--muted)]">
              Chaque vidéo vous fait faire une chose précise. À la fin des trois
              jours, vous avez une idée tenue en une phrase, un storyboard
              validé et un projet de montage organisé comme sur une vraie
              production.
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
                    Vidéo {d.n} · {d.shortTitle}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[var(--muted)]">
                    {d.intro}
                  </p>
                  <p className="mt-4 rounded-xl bg-[rgba(17,17,17,0.04)] px-4 py-3 text-sm leading-relaxed text-[var(--cream)]">
                    <span className="text-[var(--label)]">Votre mission : </span>
                    {d.mission}
                  </p>
                </li>
              );
            })}
          </ol>

          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {EXTRAS.map((x, i) => (
              <li
                key={x.title}
                className="fade-up-reveal border-t border-[rgba(17,17,17,0.14)] pt-4"
                data-delay={String(0.1 * i)}
              >
                <p className="heading-font text-xs uppercase tracking-[0.06em] text-[var(--cream)]">
                  {x.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{x.text}</p>
              </li>
            ))}
          </ul>

          <div className="fade-up-reveal mt-10 flex flex-col gap-5 rounded-2xl border border-[rgba(17,17,17,0.14)] bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--label)]">
                Prix
              </p>
              <p className="mt-1 flex items-baseline gap-2">
                <span className="heading-font text-3xl text-[var(--cream)]">0 €</span>
                <span className="text-sm text-[var(--muted)]">
                  Sans carte bancaire. Accès immédiat.
                </span>
              </p>
            </div>
            <a href={`#${FORM_ID}`} className="ds-cta-dark !px-6 !py-3.5">
              Recevoir mes 3 vidéos
            </a>
          </div>
        </div>
      </section>

      {/* Bande sombre : la preuve que la méthode produit des films qui sortent. */}
      <section className="cine-band cine-grain cine-letterbox" aria-labelledby="proof-title">
        <div className="cine-glow cine-glow-orange cine-drift-slow" style={{ width: 560, height: 560, left: "-10%", top: "-20%" }} aria-hidden />
        <div className="relative z-[5] mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="fade-up-reveal">
              <p className="cine-timecode">La preuve</p>
              <h2 id="proof-title" className="cyber-title mt-3 text-2xl text-white sm:text-3xl">
                Des films IA qui sortent en festival, pas des tests
              </h2>
              <p className="cine-text-muted mt-4 leading-relaxed">
                Ronces, VOIDBORN et Lost Garden ont été construits exactement
                comme ça : l’idée, le storyboard, puis la génération. Voici où
                ils sont passés.
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

      {/* Qui parle, et ce qu'en disent les membres. */}
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
                  indépendants et des équipes en entreprise. Ce que je vous
                  envoie est ma façon de travailler, avec ses contraintes
                  réelles de budget et de cohérence. Aucune promesse de film en
                  un clic : une méthode qui tient quand le projet grossit.
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

      {/* Les objections, une par une. */}
      <section className="cyber-divider" aria-labelledby="faq-title">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="fade-up-reveal">
            <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--label)]">
              Avant de vous inscrire
            </p>
            <h2 id="faq-title" className="cyber-title mt-3 text-2xl sm:text-3xl">
              Les questions qu’on me pose
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

      {/* Dernier appel : le hook, et le formulaire. */}
      <section className="cine-band cine-grain cine-vignette cine-letterbox" aria-labelledby="final-title">
        <div className="cine-glow cine-glow-orange cine-drift" style={{ width: 640, height: 640, right: "-8%", top: "-30%" }} aria-hidden />
        <div className="cine-glow cine-glow-blue cine-drift-slow" style={{ width: 520, height: 520, left: "-12%", bottom: "-40%" }} aria-hidden />
        <div className="relative z-[5] mx-auto max-w-xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="cine-card p-5 sm:p-7 fade-up-reveal">
            <p className="cine-timecode">Dernière séquence</p>
            <h2 id="final-title" className="cyber-title mt-3 text-xl text-white sm:text-2xl">
              Votre premier film IA cohérent commence par une phrase.
            </h2>
            <p className="cine-text-muted mt-2 text-sm leading-relaxed">
              Inscrivez-vous, la vidéo 1 s’ouvre tout de suite. Les deux
              suivantes arrivent chaque matin.
            </p>
            <div className="mt-5">
              <OptInForm compact tone="dark" cta="Recevoir mes 3 vidéos" />
            </div>
          </div>
        </div>
      </section>

      <StickyCta targetId={FORM_ID} label="Recevoir mes 3 vidéos" />
    </FunnelFrame>
  );
}
