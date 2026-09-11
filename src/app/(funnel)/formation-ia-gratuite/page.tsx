import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RevealObserver } from "@/components/motion/RevealObserver";
import { CineHero } from "@/components/funnel/CineHero";
import { FilmStrip } from "@/components/funnel/FilmStrip";
import { FunnelBeacon } from "@/components/funnel/FunnelBeacon";
import { FunnelFrame } from "@/components/funnel/FunnelFrame";
import { MethodPipeline } from "@/components/funnel/MethodPipeline";
import { OptInForm } from "@/components/funnel/OptInForm";
import { StickyCta } from "@/components/funnel/StickyCta";
import { JsonLd } from "@/components/JsonLd";
import { Plus } from "@/components/FaqSection";
import { Arrow } from "@/components/ui/Cta";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
        <div className="container-x grid flex-1 gap-12 pb-12 pt-12 sm:pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16 lg:pb-16 lg:pt-20">
          <div className="min-w-0">
            <p className="meta meta-strong reveal">
              00 / Formation offerte · 3 vidéos · {totalLabel} · débutants bienvenus
            </p>
            <h1
              id="hero-title"
              className="reveal mt-6 text-[clamp(2rem,4.8vw,4.25rem)] leading-[0.98] tracking-[-0.03em] text-cream"
              data-delay="0.1"
            >
              Comment réaliser un film IA cohérent en 3 jours,{" "}
              <span className="text-fog">sans jeter vos crédits par les fenêtres.</span>
            </h1>
            <p className="lede reveal mt-8 max-w-xl" data-delay="0.2">
              La méthode que j’utilise sur mes propres films : l’idée en une
              phrase, le storyboard validé en image, et seulement ensuite la
              génération. Des personnages qui restent les mêmes d’un plan à
              l’autre, et jusqu’à 80 % de crédits IA économisés.
            </p>

            <dl className="reveal mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-line pt-6" data-delay="0.3">
              {[
                ["Accès immédiat", "La vidéo 1 s’ouvre dès l’inscription"],
                [totalLabel, "de vidéo, une mission courte par jour"],
                ["0 €", "Sans carte bancaire, rien à installer"],
              ].map(([k, v]) => (
                <div key={k} className="min-w-0">
                  <dt className="display text-[clamp(1.1rem,2vw,1.6rem)] normal-case leading-none text-cream">{k}</dt>
                  <dd className="meta mt-2 text-[10px] leading-snug normal-case tracking-[0.06em]">{v}</dd>
                </div>
              ))}
            </dl>

            <p className="meta reveal mt-8 max-w-xl text-[10px] leading-relaxed" data-delay="0.4">
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

      {/* L'enfer actuel, puis ce qu'on fait à la place. */}
      <section className="section" aria-labelledby="pain-title">
        <div className="container-x">
          <SectionHeader
            index="01"
            kicker="Le problème"
            id="pain-title"
            title="Pourquoi vos vidéos IA ne ressemblent pas à un film"
          />
          <ol className="mt-14 grid gap-10 border-t border-line pt-10 md:grid-cols-3 md:gap-8">
            {PAINS.map((p, i) => (
              <li key={p.title} className="reveal" data-delay={String(0.1 * i)}>
                <p className="meta meta-strong tabular">0{i + 1}</p>
                <p className="h-item mt-5 text-cream">{p.title}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-fog">{p.text}</p>
              </li>
            ))}
          </ol>

          <div className="grid-12 mt-20 gap-y-12 border-t border-line pt-14">
            <div className="col-span-12 reveal lg:col-span-5">
              <p className="meta">Ce qu’on fait à la place</p>
              <h3 className="h-section mt-5">On construit le film avant de générer.</h3>
              <p className="mt-6 text-[1.05rem] leading-relaxed text-fog">
                L’IA n’est pas trop chère. Vous lui demandez de réfléchir à
                votre place, et chaque tentative se paie en crédits. Générer une
                image coûte bien moins cher qu’une vidéo : on valide donc chaque
                plan en image avant d’animer quoi que ce soit. C’est la chaîne
                que j’utilise sur mes propres films, et c’est ce que vous mettez
                en place en trois jours.
              </p>
            </div>
            <div className="col-span-12 reveal lg:col-span-6 lg:col-start-7" data-delay="0.15">
              <p className="meta mb-4">La méthode en quatre temps</p>
              <MethodPipeline />
            </div>
          </div>
        </div>
      </section>

      {/* Ce que la personne reçoit, poste par poste, et à quel prix. */}
      <section className="section border-t border-line" aria-labelledby="stack-title">
        <div className="container-x">
          <SectionHeader
            index="02"
            kicker="Ce que vous recevez"
            id="stack-title"
            title="Trois vidéos, trois missions, un film sur les rails"
            lede="Chaque vidéo vous fait faire une chose précise. À la fin des trois jours, vous avez une idée tenue en une phrase, un storyboard validé et un projet de montage organisé comme sur une vraie production."
            aside={<p className="meta">{totalLabel} au total</p>}
          />
          <ol className="mt-14 grid gap-px border border-line bg-line lg:grid-cols-3">
            {FUNNEL_DAYS.map((d, i) => {
              const tc = formatTimecode(metas[i]?.duration);
              return (
                <li key={d.slug} className="reveal flex flex-col bg-charcoal p-6 sm:p-7" data-delay={String(0.1 * i)}>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="display text-4xl leading-none text-cream">0{d.n}</span>
                    {tc ? <span className="meta tabular">{tc}</span> : null}
                  </div>
                  <h3 className="h-item mt-6 text-cream">
                    Vidéo {d.n} · {d.shortTitle}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-fog">{d.intro}</p>
                  <p className="mt-5 border-t border-line pt-4 text-sm leading-relaxed text-stone">
                    <span className="meta mr-2">Mission</span>
                    {d.mission}
                  </p>
                </li>
              );
            })}
          </ol>

          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {EXTRAS.map((x, i) => (
              <li key={x.title} className="reveal border-t border-line pt-5" data-delay={String(0.1 * i)}>
                <p className="meta"><span className="meta-strong tabular">0{i + 4}</span> &nbsp;/&nbsp; Inclus</p>
                <p className="h-item mt-3 text-cream">{x.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-fog">{x.text}</p>
              </li>
            ))}
          </ul>

          <div className="reveal mt-14 flex flex-col gap-6 border-y border-line py-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="meta">Prix</p>
              <p className="mt-2 flex items-baseline gap-3">
                <span className="display text-4xl leading-none text-cream">0 €</span>
                <span className="text-sm text-fog">Sans carte bancaire. Accès immédiat.</span>
              </p>
            </div>
            <a href={`#${FORM_ID}`} className="btn btn-primary btn-lg">
              <span>Recevoir mes 3 vidéos</span>
              <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* Bande sombre : la preuve que la méthode produit des films qui sortent. */}
      <section className="band band-navy grain border-t border-line" aria-labelledby="proof-title">
        <div className="container-x relative z-[4] section">
          <div className="grid-12 gap-y-12">
            <div className="col-span-12 reveal lg:col-span-4">
              <p className="meta"><span className="meta-strong">03</span> &nbsp;/&nbsp; La preuve</p>
              <h2 id="proof-title" className="h-section mt-5">
                Des films IA qui sortent en festival, pas des tests
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-fog">
                Ronces, VOIDBORN et Lost Garden ont été construits exactement
                comme ça : l’idée, le storyboard, puis la génération. Voici où
                ils sont passés.
              </p>
              <ul className="mt-8">
                {FUNNEL_AWARDS.map((a, i) => (
                  <li key={`${a.label}-${a.festival}`} className="grid grid-cols-[2.5rem_1fr] gap-3 border-t border-line py-3 text-sm leading-snug last:border-b">
                    <span className="meta tabular pt-0.5">0{i + 1}</span>
                    <span>
                      <span className="text-cream">{a.label}</span>
                      <span className="block text-xs text-fog">{a.festival}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 reveal lg:col-span-7 lg:col-start-6" data-delay="0.15">
              <FilmStrip
                stills={LANDING_STILLS}
                caption="Planche 01 · Extraits de mes films et séries IA, tous produits avec cette méthode"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Qui parle, et ce qu'en disent les membres. */}
      <section className="section border-t border-line" aria-labelledby="frank-title">
        <div className="container-x">
          <div className="grid-12 gap-y-14">
            <div className="col-span-12 reveal lg:col-span-6">
              <div className="grid gap-8 sm:grid-cols-[10rem_1fr] sm:items-start">
                <div className="frame frame-grain frame-marks relative aspect-square w-40 sm:w-full">
                  <Image
                    src={person.image}
                    alt={`Portrait de ${person.name}`}
                    fill
                    sizes="160px"
                  />
                </div>
                <div className="min-w-0">
                  <p className="meta"><span className="meta-strong">04</span> &nbsp;/&nbsp; Qui vous parle</p>
                  <h2 id="frank-title" className="h-block mt-4 text-cream">
                    Frank Houbre, réalisateur et formateur IA
                  </h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-fog">
                    Je réalise des films IA et je forme des créateurs, des
                    indépendants et des équipes en entreprise. Ce que je vous
                    envoie est ma façon de travailler, avec ses contraintes
                    réelles de budget et de cohérence. Aucune promesse de film en
                    un clic : une méthode qui tient quand le projet grossit.
                  </p>
                  <p className="mt-5">
                    <Link href="/a-propos" className="arrow-link text-fog hover:text-cream">
                      <span>Parcours complet et projets</span>
                      <Arrow />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 reveal lg:col-span-5 lg:col-start-8" data-delay="0.15">
              <p className="meta">
                Membres d’AI Studios · {SKOOL_OFFER.trustpilotScore} sur Trustpilot
              </p>
              <ul className="mt-6">
                {SKOOL_OFFER.reviews.map((r) => (
                  <li key={r.author} className="border-t border-line py-5 last:border-b">
                    <p className="serif text-[1.25rem] leading-snug text-cream">« {r.text} »</p>
                    <p className="meta mt-3">{r.author} · membre AI Studios</p>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-fog">
                Avis publiés par des membres de la formation complète AI Studios.
                Le challenge gratuit en reprend la première étape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Les objections, une par une. */}
      <section className="section border-t border-line" aria-labelledby="faq-title">
        <div className="container-x">
          <div className="grid-12 gap-y-10">
            <div className="col-span-12 reveal lg:col-span-4">
              <p className="meta"><span className="meta-strong">05</span> &nbsp;/&nbsp; Avant de vous inscrire</p>
              <h2 id="faq-title" className="h-section mt-5">Les questions qu’on me pose</h2>
            </div>
            <div className="col-span-12 reveal lg:col-span-7 lg:col-start-6" data-delay="0.1">
              {FUNNEL_FAQ.map((f) => (
                <details key={f.q} className="faq-item">
                  <summary>
                    <span>{f.q}</span>
                    <Plus />
                  </summary>
                  <p className="text-[15px] leading-relaxed text-fog">
                    {f.a}
                    {f.q.startsWith("Que faites-vous") ? (
                      <>
                        {" "}
                        <Link href="/politique-confidentialite" className="link">
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
        </div>
      </section>

      {/* Dernier appel : le hook, et le formulaire. */}
      <section className="band grain vignette relative border-t border-line" aria-labelledby="final-title">
        <div className="layer" aria-hidden>
          <Image src="/images/formation/hero.webp" alt="" fill sizes="100vw" className="opacity-60" />
        </div>
        <div className="scrim" aria-hidden />
        <div className="glow drift" style={{ width: 560, height: 560, right: "-8%", top: "-30%" }} aria-hidden />
        <div className="container-x relative z-[5] section">
          <div className="grid-12 items-end gap-y-10">
            <div className="col-span-12 lg:col-span-6">
              <p className="meta meta-strong reveal">06 / Dernière séquence</p>
              <h2 id="final-title" className="h-section reveal mt-5 text-cream" data-delay="0.1">
                Votre premier film IA cohérent commence par une phrase.
              </h2>
              <p className="reveal mt-5 max-w-md text-[15px] leading-relaxed text-fog" data-delay="0.2">
                Inscrivez-vous, la vidéo 1 s’ouvre tout de suite. Les deux
                suivantes arrivent chaque matin.
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
