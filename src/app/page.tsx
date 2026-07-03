import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { HomeFilmGallery } from "@/components/HomeFilmGallery";
import { HomeLatestPostGrid } from "@/components/HomeLatestPostGrid";
import { getHomeLatestPosts } from "@/lib/blog";
import { getHomeGalleryImages } from "@/lib/home-gallery";
import { DEFAULT_OG_IMAGE, buildPageMetadata } from "@/lib/metadata";
import { baseUrl, person, siteName } from "@/lib/site";

export const revalidate = 3600;

const homeTitle = `${siteName} | Formateur IA, Réalisateur IA et Créateur vidéo`;
const homeDescription =
  // ≤155 caractères : au-delà, Google tronque la description en SERP.
  "Frank Houbre, formateur IA et réalisateur IA : tutoriels, workflows image et vidéo, prompts et méthodes pour produire des contenus IA crédibles.";
const homeKeywords = [
  "Frank Houbre",
  "formateur IA",
  "formation IA",
  "réalisateur IA",
  "créateur IA",
  "créateur vidéo IA",
  "vidéo IA",
  "image IA",
  "film IA",
  "tutoriel IA",
  "workflow IA",
  "prompt image IA",
  "prompt vidéo IA",
  "direction artistique IA",
] as const;
const awardHighlights = [
  "Seoul International AI Film Festival",
  "Hollywood Indie Festival",
  "Australian AI Festival",
  "Mondial Chroma Awards",
] as const;
const faqEntries = [
  {
    question: "Qui est Frank Houbre ?",
    answer:
      "Frank Houbre est un formateur IA, réalisateur IA et entrepreneur français spécialisé dans la création d’images, de vidéos et de films assistés par intelligence artificielle.",
  },
  {
    question: "Que trouve-t-on sur frankhoubre.com ?",
    answer:
      "Le site regroupe des tutoriels IA, des analyses d’outils, des méthodes de direction artistique, des workflows image vers vidéo, ainsi que des projets créatifs comme Ronces et VOIDBORN.",
  },
  {
    question: "À qui s’adressent les contenus de Frank Houbre ?",
    answer:
      "Les contenus s’adressent aux créateurs, freelances, indépendants, agences, marques et passionnés qui veulent produire des images et vidéos IA plus crédibles avec une vraie méthode.",
  },
  {
    question: "Pourquoi parler de réalisation pour l’IA ?",
    answer:
      "Parce qu’un bon résultat ne dépend pas seulement du prompt. Il faut aussi penser cadre, lumière, rythme, continuité visuelle, montage et direction artistique comme dans une vraie production.",
  },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: siteName,
  titleAbsolute: homeTitle,
  description: homeDescription,
  path: "/",
  alternateLanguages: { fr: "/", en: "/en", "x-default": "/" },
  keywords: [...homeKeywords],
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    images: [
      {
        path: DEFAULT_OG_IMAGE.path,
        width: DEFAULT_OG_IMAGE.width,
        height: DEFAULT_OG_IMAGE.height,
        alt: DEFAULT_OG_IMAGE.alt,
      },
    ],
  },
  twitter: {
    title: homeTitle,
    description: homeDescription,
  },
});

const LATEST_COUNT = 6;

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: siteName,
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/frank-houbre-about.png`,
        width: 1024,
        height: 1024,
      },
      sameAs: [...person.sameAs],
      founder: { "@id": `${baseUrl}/#person` },
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      name: siteName,
      url: baseUrl,
      description: homeDescription,
      publisher: { "@id": `${baseUrl}/#organization` },
      inLanguage: "fr-FR",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${baseUrl}/blog?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      name: person.name,
      url: baseUrl,
      jobTitle: person.jobTitle,
      description: person.description,
      image: `${baseUrl}/images/frank-houbre-about.png`,
      knowsAbout: [
        "Formation IA",
        "Vidéo IA",
        "Image IA",
        "Films IA",
        "Narration visuelle",
        "Direction artistique",
        "Prompts",
        "Workflows image et vidéo",
      ],
      award: [...awardHighlights],
      worksFor: {
        "@type": "Organization",
        name: "AI Studios",
        url: "https://www.ai-studios.fr/",
      },
      sameAs: [...person.sameAs],
    },
    {
      "@type": "FAQPage",
      "@id": `${baseUrl}/#faq`,
      mainEntity: faqEntries.map((entry) => ({
        "@type": "Question",
        name: entry.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: entry.answer,
        },
      })),
    },
  ],
};

export default function HomePage() {
  const latestPosts = getHomeLatestPosts(LATEST_COUNT);
  const hasActualiteOnly =
    latestPosts.length > 0 &&
    latestPosts.every((p) => p.frontmatter.category === "actualite");
  const galleryImages = getHomeGalleryImages();

  return (
    <>
      <JsonLd data={homeJsonLd} />

      <div className="relative overflow-x-hidden bg-background text-foreground motion-safe:[--reveal:reveal-up_700ms_ease-out_both]">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_55%_at_15%_-10%,rgba(120,90,60,0.09),transparent_55%),radial-gradient(ellipse_70%_50%_at_100%_15%,rgba(40,60,90,0.06),transparent_50%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] [background-image:linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] [background-size:48px_48px]"
          aria-hidden
        />

        <section className="relative isolate min-h-[100svh] w-full overflow-hidden border-b border-zinc-800 bg-zinc-950">
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/75 to-black/55"
            aria-hidden
          />
          <div className="ds-cinematic-beam" aria-hidden />
          <div className="relative mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col px-4 py-24 sm:px-6 sm:py-28">
            <div className="mx-auto flex w-full max-w-4xl min-w-0 flex-1 flex-col justify-center">
              <Image
                src="/images/frank-houbre-about.png"
                alt="Photo de Frank Houbre"
                width={72}
                height={72}
                className="mb-6 h-16 w-16 rounded-full border border-white/20 object-cover object-center sm:h-[72px] sm:w-[72px]"
                priority
              />
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/75">
                Formateur IA vidéo &amp; image • Réalisateur IA
              </p>
              <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl xl:text-[3.45rem] xl:leading-[1.05]">
                <span className="ds-title-line">
                  <span>Frank Houbre, formateur IA</span>
                </span>
                <span className="ds-title-line delay-1">
                  <span>créateur vidéo IA</span>
                </span>
                <span className="ds-title-line delay-2">
                  <span>et réalisateur orienté cinéma</span>
                </span>
              </h1>
              <p className="ds-reveal ds-reveal-delay-1 mt-5 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl">
                J’aide les créateurs, indépendants, agences et marques à produire des{" "}
                <span className="text-white">images, vidéos et films IA plus crédibles</span>,
                avec une vraie méthode de direction artistique, de narration visuelle et de
                workflow de production.
              </p>

              <div className="ds-reveal ds-reveal-delay-2 mt-10">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://www.skool.com/ai-studios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ds-cta-primary ds-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                  >
                    Rejoindre AI Studios
                  </a>
                  <Link
                    href="/liens"
                    className="ds-cta-ghost-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  >
                    Voir tous mes liens
                  </Link>
                </div>
              </div>
            </div>

            {galleryImages.length > 0 ? (
              <div className="relative mt-10 w-screen max-w-[100vw] shrink-0 -translate-x-1/2 left-1/2 sm:mt-14">
                <HomeFilmGallery images={galleryImages} />
              </div>
            ) : null}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                Un positionnement clair entre formation IA, création vidéo et réalisation
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-800">
                Mon travail se situe à la croisée de la <strong>formation IA vidéo et image</strong>,
                de la création de projets narratifs et de la direction artistique. L’objectif n’est
                pas de produire plus de contenu médiocre, mais de comprendre comment tirer de l’IA un
                rendu plus cohérent, plus cinématographique et plus utile pour un vrai projet.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-neutral-800">
                Si vous cherchez un <strong>formateur IA</strong> capable de parler autant de
                structure, de pipeline, de production et de mise en scène que d’outils, vous êtes au
                bon endroit. Vous trouverez ici des ressources pour apprendre, des projets
                pour juger le niveau créatif, et un blog pour suivre l’évolution rapide de l’IA.
              </p>
            </div>

            <aside className="ds-card ds-reveal ds-reveal-delay-1 rounded-3xl p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                Signaux publics
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-700">
                <li>Entrepreneuriat tech, création de contenus et pédagogie autour de l’IA.</li>
                <li>Projets visibles en court film IA et animation IA avec Ronces et VOIDBORN.</li>
                <li>Présence publique via LinkedIn, YouTube, IMDb, Instagram et TikTok.</li>
                <li>Distinctions et sélections citées publiquement sur les sites AI Studios.</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {awardHighlights.map((award) => (
                  <span
                    key={award}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700"
                  >
                    {award}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="ds-section bg-white/70">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                Ce que vous trouverez sur frankhoubre.com
              </h2>
              <p className="mt-3 text-neutral-700">
                Une base solide pour comprendre le positionnement, apprendre une méthode et explorer
                des projets de réalisation IA.
              </p>
            </div>

            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <li>
                <article className="ds-card ds-reveal flex h-full flex-col p-6">
                  <span className="text-[11px] uppercase tracking-[0.15em] text-amber-900/80">
                    01 - Formation IA
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-neutral-950">
                    Image, vidéo et prompts
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-700">
                    Tutoriels pour apprendre les fondamentaux utiles : structurer un prompt,
                    maintenir une cohérence visuelle, comprendre les outils et éviter les erreurs qui
                    trahissent le faux.
                  </p>
                </article>
              </li>
              <li>
                <article className="ds-card ds-reveal ds-reveal-delay-1 flex h-full flex-col p-6">
                  <span className="text-[11px] uppercase tracking-[0.15em] text-sky-900/75">
                    02 - Réalisation IA
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-neutral-950">
                    Direction artistique et narration
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-700">
                    Cadre, lumière, caméra, rythme, montage et intention visuelle : une approche où
                    l’IA sert la mise en scène au lieu de la remplacer.
                  </p>
                </article>
              </li>
              <li>
                <article className="ds-card ds-reveal ds-reveal-delay-2 flex h-full flex-col p-6">
                  <span className="text-[11px] uppercase tracking-[0.15em] text-emerald-900/75">
                    03 - Workflows
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-neutral-950">
                    De l’idée au film IA
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-700">
                    Passer d’une intuition à un rendu exploitable grâce à des pipelines concrets :
                    préproduction, génération, itérations, sélection, montage et finition.
                  </p>
                </article>
              </li>
              <li>
                <article className="flex h-full flex-col rounded-2xl border border-zinc-800/90 bg-gradient-to-br from-zinc-950 to-zinc-900 p-6 text-white shadow-lg shadow-zinc-900/20">
                  <span className="text-[11px] uppercase tracking-[0.15em] text-white/55">
                    04 - Ressources
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">
                    Blog, veille et parcours
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/85">
                    Articles récents, analyses d’outils IA, page à propos et liens publics pour
                    vérifier le parcours, les projets et les plateformes associées.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-4">
                    <Link
                      href="/blog"
                      className="inline-flex w-fit cursor-pointer text-sm font-medium text-white underline decoration-white/35 underline-offset-4 transition-colors duration-200 hover:decoration-white"
                    >
                      Ouvrir le blog
                    </Link>
                    <Link
                      href="/a-propos"
                      className="inline-flex w-fit cursor-pointer text-sm font-medium text-white underline decoration-white/35 underline-offset-4 transition-colors duration-200 hover:decoration-white"
                    >
                      Lire le parcours
                    </Link>
                  </div>
                </article>
              </li>
            </ul>
          </div>
        </section>

        <section className="ds-section bg-zinc-50/60">
          <div className="mx-auto grid max-w-5xl gap-6 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-3">
                <article className="ds-card ds-reveal rounded-3xl p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                Pour apprendre
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950">
                Une formation IA orientée exécution
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                L’accent est mis sur la compréhension des systèmes, pas sur la simple consommation de
                nouveautés. Le but est de savoir quoi faire, dans quel ordre, et pourquoi cela
                fonctionne.
              </p>
            </article>
            <article className="ds-card rounded-3xl p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                Pour créer
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950">
                Une approche de réalisateur IA
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                Chaque image ou séquence est pensée comme un choix de mise en scène : focale,
                composition, lumière, texture, continuité et rapport entre les plans.
              </p>
            </article>
            <article className="ds-card rounded-3xl p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                Pour se positionner
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950">
                Un parcours entre tech, pédagogie et production
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                Entrepreneuriat, enseignement, création de contenus, outils et projets de fiction :
                cet ensemble donne un cadre plus solide pour parler d’IA que la seule mode du moment.
              </p>
            </article>
          </div>
        </section>

        <section className="ds-section bg-white">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                Projets de réalisation IA
              </h2>
              <p className="mt-3 text-neutral-700">
                Trois exemples visibles de création IA orientée narration, direction artistique et
                mise en scène.
              </p>
            </div>

            <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <li>
                <article className="ds-card ds-reveal flex h-full flex-col p-6">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-neutral-500">
                    Court film IA
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-neutral-950">Ronces</h3>
                  <div className="mt-4 overflow-hidden rounded-xl border border-neutral-200">
                    <div className="relative aspect-video w-full bg-neutral-100">
                      <iframe
                        src="https://player.vimeo.com/video/1164434045"
                        title="Ronces - court film IA"
                        className="absolute inset-0 h-full w-full"
                        loading="lazy"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-700">
                    Un court film IA centré sur l’ambiance, le rythme et une narration visuelle
                    cinématographique.
                  </p>
                  <a
                    href="https://vimeo.com/1164434045?fl=ip&fe=ec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ds-link mt-5 inline-flex w-fit cursor-pointer text-sm font-medium text-neutral-950"
                  >
                    Voir sur Vimeo
                  </a>
                </article>
              </li>
              <li>
                <article className="ds-card ds-reveal ds-reveal-delay-1 flex h-full flex-col p-6">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-neutral-500">
                    Animé IA
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-neutral-950">VOIDBORN</h3>
                  <div className="mt-4 overflow-hidden rounded-xl border border-neutral-200">
                    <div className="relative aspect-video w-full bg-neutral-100">
                      <iframe
                        src="https://www.youtube.com/embed/TaoYARoU7Lc"
                        title="VOIDBORN - animé IA"
                        className="absolute inset-0 h-full w-full"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-700">
                    Un projet d’animation IA de fiction qui montre une approche de réalisation,
                    d’univers visuel et de cohérence de direction artistique.
                  </p>
                  <a
                    href="https://youtu.be/TaoYARoU7Lc?si=csVLgOV_wuQs4uA0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ds-link mt-5 inline-flex w-fit cursor-pointer text-sm font-medium text-neutral-950"
                  >
                    Voir sur YouTube
                  </a>
                </article>
              </li>
              <li>
                <article className="ds-card ds-reveal ds-reveal-delay-2 flex h-full flex-col p-6">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-neutral-500">
                    Court film IA
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-neutral-950">Lost Garden</h3>
                  <div className="mt-4 overflow-hidden rounded-xl border border-neutral-200">
                    <div className="relative aspect-video w-full bg-neutral-100">
                      <iframe
                        src="https://www.youtube.com/embed/eZ_JlaLDJ-8"
                        title="Lost Garden - court film IA"
                        className="absolute inset-0 h-full w-full"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-700">
                    Un court film IA qui travaille l’ambiance, l’univers visuel et une
                    narration portée par l’image.
                  </p>
                  <a
                    href="https://youtu.be/eZ_JlaLDJ-8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ds-link mt-5 inline-flex w-fit cursor-pointer text-sm font-medium text-neutral-950"
                  >
                    Voir sur YouTube
                  </a>
                </article>
              </li>
            </ul>
          </div>
        </section>

        <section className="ds-section bg-zinc-50/60">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                Questions fréquentes sur Frank Houbre et la formation IA
              </h2>
              <p className="mt-3 text-neutral-700">
                Quelques réponses directes pour clarifier le positionnement du site et les sujets
                traités.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {faqEntries.map((entry) => (
                <article
                  key={entry.question}
                  className="ds-card p-6"
                >
                  <h3 className="text-lg font-semibold text-neutral-950">{entry.question}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-700">{entry.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ds-section bg-white/70">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                  {hasActualiteOnly
                    ? "Derniers articles d’actualité"
                    : "Derniers articles"}
                </h2>
                <p className="mt-2 max-w-xl text-neutral-700">
                  {hasActualiteOnly
                    ? "Nouveautés et tendances autour de l’IA créative, de la vidéo IA et des workflows de production."
                    : "Les publications les plus récentes couvrent formation IA, actualités, outils, direction artistique et tutoriels image et vidéo."}
                </p>
              </div>
              <Link
                href="/blog"
                className="ds-link shrink-0 cursor-pointer text-sm font-medium text-neutral-950"
              >
                Tout le blog
              </Link>
            </div>

            {latestPosts.length > 0 ? (
              <div className="mt-12">
                <HomeLatestPostGrid posts={latestPosts} />
              </div>
            ) : (
              <p className="mt-10 text-neutral-700">
                Les articles arrivent bientôt. En attendant, vous pouvez consulter le{" "}
                <Link
                  href="/blog"
                  className="ds-link cursor-pointer font-medium text-neutral-950"
                >
                  blog
                </Link>
                .
              </p>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
