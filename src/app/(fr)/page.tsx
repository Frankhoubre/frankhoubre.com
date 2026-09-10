import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { CyberHero } from "@/components/cyber/CyberHero";
import { RevealObserver } from "@/components/cyber/RevealObserver";
import { HomeFilmGallery } from "@/components/HomeFilmGallery";
import { HomeLatestPostGrid } from "@/components/HomeLatestPostGrid";
import { VideoFacade } from "@/components/VideoFacade";
import { getAllPosts } from "@/lib/blog";
import { getHomeGalleryImages } from "@/lib/home-gallery";
import { homeHeroImages } from "@/lib/home-hero";
import {
  DEFAULT_OG_IMAGE,
  ORGANIZATION_ID,
  PERSON_ID,
  WEBSITE_ID,
  buildPageMetadata,
} from "@/lib/metadata";
import { outilPages } from "@/lib/outils-metadata";
import { baseUrl, blogCategories, person, siteName } from "@/lib/site";

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
      "Frank Houbre est un formateur IA, réalisateur IA et entrepreneur français. Il a fondé la formation AI Studios, l’outil d’écriture ScreenWeaver et la plateforme Business Dynamite. Ses films IA Ronces et VOIDBORN ont été primés dans des festivals internationaux comme le SIAFF de Séoul et les Chroma Awards.",
  },
  {
    question: "Que trouve-t-on sur frankhoubre.com ?",
    answer:
      "Le site regroupe des tutoriels IA, des analyses d’outils, des méthodes de direction artistique, des workflows image vers vidéo, des outils gratuits ainsi que des projets créatifs comme Ronces et VOIDBORN.",
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

const films = [
  {
    title: "Ronces",
    kind: "Court film IA",
    provider: "vimeo" as const,
    videoId: "1164434045",
    poster: "/images/home/gallery/shot-01.webp",
    watchHref: "https://vimeo.com/1164434045",
    watchLabel: "Voir sur Vimeo",
    text: "Un court film IA centré sur l’ambiance, le rythme et une narration visuelle cinématographique.",
  },
  {
    title: "VOIDBORN",
    kind: "Animé IA",
    provider: "youtube" as const,
    videoId: "TaoYARoU7Lc",
    watchHref: "https://youtu.be/TaoYARoU7Lc",
    watchLabel: "Voir sur YouTube",
    text: "Un projet d’animation IA de fiction qui montre une approche de réalisation, d’univers visuel et de cohérence de direction artistique.",
  },
  {
    title: "Lost Garden",
    kind: "Court film IA",
    provider: "youtube" as const,
    videoId: "eZ_JlaLDJ-8",
    watchHref: "https://youtu.be/eZ_JlaLDJ-8",
    watchLabel: "Voir sur YouTube",
    text: "Un court film IA qui travaille l’ambiance, l’univers visuel et une narration portée par l’image.",
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
      "@id": ORGANIZATION_ID,
      name: siteName,
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/frank-houbre-about.png`,
        width: 1024,
        height: 1024,
      },
      sameAs: [...person.sameAs],
      founder: { "@id": PERSON_ID },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: siteName,
      url: baseUrl,
      description: homeDescription,
      publisher: { "@id": ORGANIZATION_ID },
      inLanguage: ["fr-FR", "en-US"],
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
      "@id": PERSON_ID,
      name: person.name,
      url: baseUrl,
      jobTitle: person.jobTitle,
      description: person.description,
      image: `${baseUrl}/images/frank-houbre-about.png`,
      nationality: { "@type": "Country", name: "France" },
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
      knowsLanguage: ["fr", "en"],
      award: [...awardHighlights],
      worksFor: {
        "@type": "Organization",
        name: "AI Studios",
        url: "https://www.ai-studios.fr/",
      },
      sameAs: [...person.sameAs],
    },
    {
      "@type": "WebPage",
      "@id": `${baseUrl}/#webpage`,
      url: `${baseUrl}/`,
      name: homeTitle,
      description: homeDescription,
      inLanguage: "fr-FR",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": PERSON_ID },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${baseUrl}${DEFAULT_OG_IMAGE.path}`,
        width: DEFAULT_OG_IMAGE.width,
        height: DEFAULT_OG_IMAGE.height,
      },
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

const sectionTitle =
  "cyber-title text-xl sm:text-2xl normal-case tracking-[0.01em]";

export default function HomePage() {
  const allPosts = getAllPosts();
  const latestPosts = allPosts.slice(0, LATEST_COUNT);
  const hasActualiteOnly =
    latestPosts.length > 0 &&
    latestPosts.every((p) => p.frontmatter.category === "actualite");
  const galleryImages = getHomeGalleryImages();
  const categoryCounts = new Map<string, number>();
  for (const post of allPosts) {
    const c = post.frontmatter.category;
    categoryCounts.set(c, (categoryCounts.get(c) ?? 0) + 1);
  }
  const categories = blogCategories.filter(
    (c) => (categoryCounts.get(c.slug) ?? 0) > 0,
  );
  const tools = Object.values(outilPages);

  return (
    <>
      <JsonLd data={homeJsonLd} />
      <RevealObserver />

      <CyberHero
        titleLines={["Frank Houbre //", "Formateur IA", "Réalisateur IA & créateur vidéo"]}
        intro="J’aide les créateurs, indépendants, agences et marques à produire des images, vidéos et films IA crédibles, avec une vraie méthode de direction artistique et de production."
        icons={[
          { label: "Formation AI Studios", href: "https://www.skool.com/ai-studios", icon: "core", external: true },
          { label: "Voir les films IA", href: "#projets", icon: "vision" },
          { label: "Lire le blog", href: "/blog", icon: "force" },
        ]}
        card={{
          title: "AI Studios : formation IA vidéo",
          text: "La méthode complète pour passer d’une idée écrite à un film IA crédible, du storyboard au montage.",
          ctaLabel: "Rejoindre AI Studios",
          ctaHref: "https://www.skool.com/ai-studios",
          external: true,
          thumb: homeHeroImages.thumb,
        }}
        counter={`${allPosts.length} articles`}
        specsTitle="Repères"
        specs={[
          { label: "Formation", value: "AI Studios, ScreenWeaver" },
          { label: "Films", value: "Ronces, VOIDBORN, Lost Garden" },
          { label: "Prix", value: "SIAFF Séoul, Chroma Awards" },
          { label: "Chaîne", value: "Business Dynamite" },
        ]}
        images={{ base: homeHeroImages.base, reveal: homeHeroImages.reveal }}
      />

      <div className="cyber-page relative overflow-x-hidden">
        {galleryImages.length > 0 ? (
          <section
            className="border-b border-[rgba(251,219,175,0.1)] py-8 sm:py-10"
            aria-label="Extraits visuels de projets IA"
          >
            <HomeFilmGallery images={galleryImages} />
          </section>
        ) : null}

        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="max-w-2xl">
              <p className="cyber-label">Positionnement</p>
              <h2 className={`${sectionTitle} mt-3`}>
                Formation IA, création vidéo et réalisation : un seul métier
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                Mon travail se situe à la croisée de la{" "}
                <strong className="font-medium text-[var(--cream)]">formation IA vidéo et image</strong>,
                de la création de projets narratifs et de la direction artistique. L’objectif n’est
                pas de produire plus de contenu médiocre, mais de comprendre comment tirer de l’IA un
                rendu plus cohérent, plus cinématographique et plus utile pour un vrai projet.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                Si vous cherchez un{" "}
                <strong className="font-medium text-[var(--cream)]">formateur IA</strong> capable de
                parler autant de structure, de pipeline, de production et de mise en scène que
                d’outils, vous êtes au bon endroit. Vous trouverez ici des ressources pour apprendre,
                des projets pour juger le niveau créatif, et un blog pour suivre l’évolution rapide de
                l’IA.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                Les entreprises et boîtes de production peuvent solliciter une{" "}
                <Link href="/prestation" className="cyber-link">
                  mission de conseil IA en production vidéo et image
                </Link>
                . Journalistes et organisateurs d’événements trouveront bio, visuels et références
                dans le{" "}
                <Link href="/presse" className="cyber-link">
                  kit presse
                </Link>
                .
              </p>
            </div>

            <aside className="cyber-card fade-up-reveal p-6" data-delay="0.1">
              <p className="cyber-label">Signaux publics</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--muted)]">
                <li>Entrepreneuriat tech, création de contenus et pédagogie autour de l’IA.</li>
                <li>Projets visibles en court film IA et animation IA avec Ronces et VOIDBORN.</li>
                <li>Présence publique via LinkedIn, YouTube, IMDb, Instagram et TikTok.</li>
                <li>Distinctions et sélections citées publiquement sur les sites AI Studios.</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {awardHighlights.map((award) => (
                  <span
                    key={award}
                    className="rounded-full border border-[rgba(251,219,175,0.2)] px-3 py-1 text-[11px] uppercase tracking-[0.06em] text-[var(--cream)]"
                  >
                    {award}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="cyber-divider">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="max-w-2xl">
              <p className="cyber-label">Le site</p>
              <h2 className={`${sectionTitle} mt-3`}>Ce que vous trouverez sur frankhoubre.com</h2>
              <p className="mt-3 text-[var(--muted)]">
                Une base solide pour comprendre le positionnement, apprendre une méthode et explorer
                des projets de réalisation IA.
              </p>
            </div>

            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  n: "01",
                  kicker: "Formation IA",
                  title: "Image, vidéo et prompts",
                  text: "Tutoriels pour apprendre les fondamentaux utiles : structurer un prompt, maintenir une cohérence visuelle, comprendre les outils et éviter les erreurs qui trahissent le faux.",
                  href: "/blog/category/tutoriels",
                  cta: "Voir les tutoriels",
                },
                {
                  n: "02",
                  kicker: "Réalisation IA",
                  title: "Direction artistique et narration",
                  text: "Cadre, lumière, caméra, rythme, montage et intention visuelle : une approche où l’IA sert la mise en scène au lieu de la remplacer.",
                  href: "/blog/category/analyses",
                  cta: "Lire les analyses",
                },
                {
                  n: "03",
                  kicker: "Workflows",
                  title: "De l’idée au film IA",
                  text: "Passer d’une intuition à un rendu exploitable grâce à des pipelines concrets : préproduction, génération, itérations, sélection, montage et finition.",
                  href: "/blog/category/guides",
                  cta: "Ouvrir les guides",
                },
                {
                  n: "04",
                  kicker: "Ressources",
                  title: "Blog, outils et parcours",
                  text: "Articles récents, outils IA gratuits, page à propos et liens publics pour vérifier le parcours, les projets et les plateformes associées.",
                  href: "/outils",
                  cta: "Voir les outils",
                },
              ].map((card, i) => (
                <li key={card.n}>
                  <article
                    className="cyber-card fade-up-reveal flex h-full flex-col p-6"
                    data-delay={(0.05 * i).toFixed(2)}
                  >
                    <span className="cyber-label">
                      {card.n} · {card.kicker}
                    </span>
                    <h3 className="mt-3 text-[13px] leading-snug text-[var(--cream)]">
                      {card.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                      {card.text}
                    </p>
                    <Link href={card.href} className="cyber-btn mt-5 w-fit">
                      {card.cta}
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="cyber-divider" aria-labelledby="explorer">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="cyber-label">Explorer par thème</p>
                <h2 id="explorer" className={`${sectionTitle} mt-3`}>
                  Les catégories du blog
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  Chaque catégorie regroupe les articles publiés sur le sujet, du plus récent au plus
                  ancien.
                </p>
                <ul className="mt-6">
                  {categories.map((c) => (
                    <li key={c.slug} className="cyber-spec-row">
                      <Link
                        href={`/blog/category/${c.slug}`}
                        className="cyber-link text-sm"
                      >
                        {c.label}
                      </Link>
                      <span className="cyber-spec-value">
                        {categoryCounts.get(c.slug)} article
                        {(categoryCounts.get(c.slug) ?? 0) > 1 ? "s" : ""}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="cyber-label">Outils IA gratuits</p>
                <h2 className={`${sectionTitle} mt-3`}>Des outils pour produire plus vite</h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  Générateur de prompts cinéma, storyboard PDF, calculateur de budget, annuaires
                  d’outils image et audio : tout est gratuit et fonctionne dans le navigateur.
                </p>
                <ul className="mt-6">
                  {tools.map((tool) => (
                    <li key={tool.path} className="cyber-spec-row">
                      <Link href={tool.path} className="cyber-link text-sm">
                        {tool.title}
                      </Link>
                      <span className="cyber-spec-label">Gratuit</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="cyber-divider" id="projets" aria-labelledby="projets-titre">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="max-w-2xl">
              <p className="cyber-label">Réalisation</p>
              <h2 id="projets-titre" className={`${sectionTitle} mt-3`}>
                Projets de réalisation IA
              </h2>
              <p className="mt-3 text-[var(--muted)]">
                Trois exemples visibles de création IA orientée narration, direction artistique et
                mise en scène. Le lecteur vidéo ne se charge qu’au clic.
              </p>
            </div>

            <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {films.map((film, i) => (
                <li key={film.title}>
                  <article
                    className="cyber-card fade-up-reveal flex h-full flex-col p-5"
                    data-delay={(0.05 * i).toFixed(2)}
                  >
                    <p className="cyber-label">{film.kind}</p>
                    <h3 className="mt-3 text-base text-[var(--cream)]">{film.title}</h3>
                    <div className="mt-4">
                      <VideoFacade
                        provider={film.provider}
                        videoId={film.videoId}
                        title={`${film.title} : ${film.kind.toLowerCase()} de Frank Houbre`}
                        poster={"poster" in film ? film.poster : undefined}
                        posterAlt={`Aperçu vidéo du projet ${film.title}`}
                      />
                    </div>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                      {film.text}
                    </p>
                    <a
                      href={film.watchHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cyber-link mt-4 w-fit text-sm"
                    >
                      {film.watchLabel}
                    </a>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="cyber-divider">
          <div className="mx-auto grid max-w-5xl gap-6 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-3">
            {[
              {
                kicker: "Pour apprendre",
                title: "Une formation IA orientée exécution",
                text: "L’accent est mis sur la compréhension des systèmes, pas sur la simple consommation de nouveautés. Le but est de savoir quoi faire, dans quel ordre, et pourquoi cela fonctionne.",
              },
              {
                kicker: "Pour créer",
                title: "Une approche de réalisateur IA",
                text: "Chaque image ou séquence est pensée comme un choix de mise en scène : focale, composition, lumière, texture, continuité et rapport entre les plans.",
              },
              {
                kicker: "Pour se positionner",
                title: "Un parcours entre tech, pédagogie et production",
                text: "Entrepreneuriat, enseignement, création de contenus, outils et projets de fiction : cet ensemble donne un cadre plus solide pour parler d’IA que la seule mode du moment.",
              },
            ].map((item, i) => (
              <article
                key={item.kicker}
                className="cyber-card fade-up-reveal p-6"
                data-delay={(0.05 * i).toFixed(2)}
              >
                <p className="cyber-label">{item.kicker}</p>
                <h2 className="mt-3 text-[13px] leading-snug text-[var(--cream)]">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cyber-divider" aria-labelledby="faq-titre">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
            <div className="max-w-2xl">
              <p className="cyber-label">FAQ</p>
              <h2 id="faq-titre" className={`${sectionTitle} mt-3`}>
                Questions fréquentes sur Frank Houbre et la formation IA
              </h2>
              <p className="mt-3 text-[var(--muted)]">
                Quelques réponses directes pour clarifier le positionnement du site et les sujets
                traités.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {faqEntries.map((entry) => (
                <article key={entry.question} className="cyber-card p-6">
                  <h3 className="text-[13px] leading-snug text-[var(--cream)]">{entry.question}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{entry.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cyber-divider">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="cyber-label">Blog</p>
                <h2 className={`${sectionTitle} mt-3`}>
                  {hasActualiteOnly ? "Derniers articles d’actualité" : "Derniers articles"}
                </h2>
                <p className="mt-2 max-w-xl text-[var(--muted)]">
                  {hasActualiteOnly
                    ? "Nouveautés et tendances autour de l’IA créative, de la vidéo IA et des workflows de production."
                    : "Les publications les plus récentes couvrent formation IA, actualités, outils, direction artistique et tutoriels image et vidéo."}
                </p>
              </div>
              <Link href="/blog" className="cyber-btn shrink-0">
                Tout le blog
              </Link>
            </div>

            {latestPosts.length > 0 ? (
              <div className="mt-12">
                <HomeLatestPostGrid posts={latestPosts} />
              </div>
            ) : (
              <p className="mt-10 text-[var(--muted)]">
                Les articles arrivent bientôt. En attendant, vous pouvez consulter le{" "}
                <Link href="/blog" className="cyber-link">
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
