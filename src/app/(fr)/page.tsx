import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { HomeHero } from "@/components/home/HomeHero";
import { RevealObserver } from "@/components/motion/RevealObserver";
import { HomeFilmGallery } from "@/components/HomeFilmGallery";
import { HomeLatestPostGrid } from "@/components/HomeLatestPostGrid";
import { VideoFacade } from "@/components/VideoFacade";
import { Plus } from "@/components/FaqSection";
import { ArrowLink, Cta } from "@/components/ui/Cta";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechnicalDiagram } from "@/components/ui/TechnicalDiagram";
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

const pillars = [
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
] as const;

const approach = [
  {
    n: "01",
    kicker: "Pour apprendre",
    title: "Une formation IA orientée exécution",
    text: "L’accent est mis sur la compréhension des systèmes, pas sur la simple consommation de nouveautés. Le but est de savoir quoi faire, dans quel ordre, et pourquoi cela fonctionne.",
  },
  {
    n: "02",
    kicker: "Pour créer",
    title: "Une approche de réalisateur IA",
    text: "Chaque image ou séquence est pensée comme un choix de mise en scène : focale, composition, lumière, texture, continuité et rapport entre les plans.",
  },
  {
    n: "03",
    kicker: "Pour se positionner",
    title: "Un parcours entre tech, pédagogie et production",
    text: "Entrepreneuriat, enseignement, création de contenus, outils et projets de fiction : cet ensemble donne un cadre plus solide pour parler d’IA que la seule mode du moment.",
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
  const [featuredFilm, ...otherFilms] = films;

  return (
    <>
      <JsonLd data={homeJsonLd} />
      <RevealObserver />

      <HomeHero
        kicker="01 / Formateur IA · Réalisateur IA · Créateur vidéo"
        name="Frank Houbre"
        roles="Formateur IA, réalisateur IA et créateur vidéo."
        intro="J’aide les créateurs, indépendants, agences et marques à produire des images, vidéos et films IA crédibles, avec une vraie méthode de direction artistique et de production."
        notes={["Image", "Vidéo", "Film", "Méthode"]}
        counter={String(allPosts.length)}
        counterLabel="articles publiés"
        primary={{ label: "Formation AI Studios", href: "https://www.skool.com/ai-studios", external: true }}
        secondary={{ label: "Voir les films IA", href: "#projets" }}
        specsTitle="Repères"
        specs={[
          { label: "Formation", value: "AI Studios, ScreenWeaver" },
          { label: "Films", value: "Ronces, VOIDBORN, Lost Garden" },
          { label: "Prix", value: "SIAFF Séoul, Chroma Awards" },
          { label: "Chaîne", value: "Business Dynamite" },
        ]}
        scrollLabel="Défiler"
        images={{ base: homeHeroImages.base, reveal: homeHeroImages.reveal }}
      />

      {galleryImages.length > 0 ? (
        <section className="border-b border-line py-6 sm:py-8" aria-label="Extraits visuels de projets IA">
          <div className="container-x mb-4 flex items-center justify-between">
            <p className="meta">Extraits · films et séries IA</p>
            <p className="meta meta-dim hidden sm:block">{galleryImages.length} photogrammes</p>
          </div>
          <HomeFilmGallery images={galleryImages} />
        </section>
      ) : null}

      {/* 02 · Positionnement */}
      <section className="section" aria-labelledby="positionnement">
        <div className="container-x">
          <div className="grid-12 gap-y-12">
            <div className="col-span-12 lg:col-span-3">
              <p className="meta"><span className="meta-strong">02</span> &nbsp;/&nbsp; Positionnement</p>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <h2 id="positionnement" className="h-section reveal">
                Formation IA, création vidéo et réalisation : un seul métier.
              </h2>
              <div className="reveal mt-8 space-y-5 text-[1.05rem] leading-relaxed text-fog" data-delay="0.1">
                <p>
                  Mon travail se situe à la croisée de la{" "}
                  <strong className="font-medium text-cream">formation IA vidéo et image</strong>, de la
                  création de projets narratifs et de la direction artistique. L’objectif n’est pas de
                  produire plus de contenu médiocre, mais de comprendre comment tirer de l’IA un rendu
                  plus cohérent, plus cinématographique et plus utile pour un vrai projet.
                </p>
                <p>
                  Si vous cherchez un <strong className="font-medium text-cream">formateur IA</strong>{" "}
                  capable de parler autant de structure, de pipeline, de production et de mise en scène
                  que d’outils, vous êtes au bon endroit. Vous trouverez ici des ressources pour
                  apprendre, des projets pour juger le niveau créatif, et un blog pour suivre
                  l’évolution rapide de l’IA.
                </p>
                <p>
                  Les entreprises et boîtes de production peuvent solliciter une{" "}
                  <Link href="/prestation" className="link">
                    mission de conseil IA en production vidéo et image
                  </Link>
                  . Journalistes et organisateurs d’événements trouveront bio, visuels et références
                  dans le{" "}
                  <Link href="/presse" className="link">
                    kit presse
                  </Link>
                  .
                </p>
              </div>
            </div>
            <aside className="col-span-12 reveal lg:col-span-3" data-delay="0.2" aria-label="Signaux publics">
              <p className="meta">Signaux publics</p>
              <ul className="mt-4">
                {[
                  "Entrepreneuriat tech, création de contenus et pédagogie autour de l’IA.",
                  "Projets visibles en court film IA et animation IA avec Ronces et VOIDBORN.",
                  "Présence publique via LinkedIn, YouTube, IMDb, Instagram et TikTok.",
                  "Distinctions et sélections citées publiquement sur les sites AI Studios.",
                ].map((item, i) => (
                  <li key={item} className="grid grid-cols-[2rem_1fr] gap-3 border-t border-line py-3 text-sm leading-relaxed text-stone last:border-b">
                    <span className="meta tabular pt-1">0{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="meta mt-6">Festivals</p>
              <ul className="mt-3 space-y-1.5">
                {awardHighlights.map((award) => (
                  <li key={award} className="meta meta-strong text-[10px] leading-relaxed">
                    {award}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* 03 · Le site, en quatre entrées numérotées */}
      <section className="section border-t border-line" aria-labelledby="le-site">
        <div className="container-x">
          <SectionHeader
            index="03"
            kicker="Le site"
            id="le-site"
            title="Ce que vous trouverez sur frankhoubre.com"
            lede="Une base solide pour comprendre le positionnement, apprendre une méthode et explorer des projets de réalisation IA."
          />
          <ol className="mt-14 border-t border-line">
            {pillars.map((card, i) => (
              <li key={card.n} className="reveal border-b border-line" data-delay={(0.05 * i).toFixed(2)}>
                <Link href={card.href} className="group grid-12 items-baseline gap-y-3 py-7 no-underline sm:py-9">
                  <span className="meta meta-strong tabular col-span-2 lg:col-span-1">{card.n}</span>
                  <span className="meta col-span-10 lg:col-span-2">{card.kicker}</span>
                  <span className="h-block col-span-12 text-cream lg:col-span-4">{card.title}</span>
                  <span className="col-span-12 text-[15px] leading-relaxed text-fog lg:col-span-4">{card.text}</span>
                  <span className="arrow-link col-span-12 mt-2 justify-self-start text-fog transition-colors duration-200 group-hover:text-cream lg:col-span-1 lg:mt-0 lg:justify-self-end">
                    <span className="lg:sr-only">{card.cta}</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="arrow" aria-hidden>
                      <path d="M1.5 7h11M8 2.5L12.5 7 8 11.5" />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 04 · Explorer : catégories et outils (hub de maillage interne) */}
      <section className="section border-t border-line" aria-labelledby="explorer">
        <div className="container-x">
          <div className="grid-12 gap-y-14">
            <div className="col-span-12 lg:col-span-5">
              <p className="meta"><span className="meta-strong">04</span> &nbsp;/&nbsp; Explorer par thème</p>
              <h2 id="explorer" className="h-block mt-5 text-cream">Les catégories du blog</h2>
              <p className="mt-3 text-sm leading-relaxed text-fog">
                Chaque catégorie regroupe les articles publiés sur le sujet, du plus récent au plus
                ancien.
              </p>
              <ul className="mt-8">
                {categories.map((c) => (
                  <li key={c.slug} className="spec-row">
                    <Link href={`/blog/category/${c.slug}`} className="line-link text-[15px] text-cream">
                      {c.label}
                    </Link>
                    <span className="spec-value">
                      {categoryCounts.get(c.slug)} article
                      {(categoryCounts.get(c.slug) ?? 0) > 1 ? "s" : ""}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-8">
              <p className="meta">Outils IA gratuits</p>
              <h2 className="h-block mt-5 text-cream">Des outils pour produire plus vite</h2>
              <p className="mt-3 text-sm leading-relaxed text-fog">
                Générateur de prompts cinéma, storyboard PDF, calculateur de budget, annuaires
                d’outils image et audio : tout est gratuit et fonctionne dans le navigateur.
              </p>
              <ul className="mt-8">
                {tools.map((tool, i) => (
                  <li key={tool.path} className="spec-row">
                    <Link href={tool.path} className="line-link text-[15px] text-cream">
                      {tool.title}
                    </Link>
                    <span className="spec-label">0{i + 1} · Gratuit</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 05 · Films */}
      <section className="section border-t border-line" id="projets" aria-labelledby="projets-titre">
        <div className="container-x">
          <SectionHeader
            index="05"
            kicker="Réalisation"
            id="projets-titre"
            title="Projets de réalisation IA"
            lede="Trois exemples visibles de création IA orientée narration, direction artistique et mise en scène. Le lecteur vidéo ne se charge qu’au clic."
            aside={<p className="meta">{films.length} films · 2024 – 2026</p>}
          />
          <div className="grid-12 mt-14 gap-y-12">
            <article className="col-span-12 reveal lg:col-span-8">
              <VideoFacade
                provider={featuredFilm.provider}
                videoId={featuredFilm.videoId}
                title={`${featuredFilm.title} : ${featuredFilm.kind.toLowerCase()} de Frank Houbre`}
                poster={featuredFilm.poster}
                posterAlt={`Aperçu vidéo du projet ${featuredFilm.title}`}
                caption={`01 · ${featuredFilm.kind}`}
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <h3 className="h-block text-cream">{featuredFilm.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-fog">{featuredFilm.text}</p>
                </div>
                <ArrowLink href={featuredFilm.watchHref}>{featuredFilm.watchLabel}</ArrowLink>
              </div>
            </article>
            <div className="col-span-12 grid gap-10 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
              {otherFilms.map((film, i) => (
                <article key={film.title} className="reveal" data-delay={(0.1 * (i + 1)).toFixed(1)}>
                  <VideoFacade
                    provider={film.provider}
                    videoId={film.videoId}
                    title={`${film.title} : ${film.kind.toLowerCase()} de Frank Houbre`}
                    posterAlt={`Aperçu vidéo du projet ${film.title}`}
                    caption={`0${i + 2} · ${film.kind}`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="mt-4">
                    <h3 className="h-item text-cream">{film.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-fog">{film.text}</p>
                    <ArrowLink href={film.watchHref} className="mt-3 text-fog hover:text-cream">
                      {film.watchLabel}
                    </ArrowLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 06 · Citation et diagramme */}
      <section className="band band-navy grain border-t border-line" aria-labelledby="vision-titre">
        <div className="container-x relative z-[4] section">
          <div className="grid-12 items-center gap-y-14">
            <div className="col-span-12 lg:col-span-7">
              <p className="meta"><span className="meta-strong">06</span> &nbsp;/&nbsp; Vision</p>
              <QuoteBlock className="reveal mt-8" cite="Frank Houbre" meta="Réalisateur IA">
                <span id="vision-titre">
                  Un bon résultat ne dépend pas seulement du prompt. Il dépend du cadre, de la lumière,
                  du rythme et de ce qu’on choisit de ne pas montrer.
                </span>
              </QuoteBlock>
            </div>
            <div className="col-span-8 col-start-3 text-stone/80 sm:col-span-6 sm:col-start-4 lg:col-span-3 lg:col-start-10">
              <TechnicalDiagram
                className="reveal mx-auto max-w-[280px]"
                labels={["Idée", "Image", "Film", "Montage"]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 07 · Approche */}
      <section className="section border-t border-line" aria-labelledby="approche">
        <div className="container-x">
          <SectionHeader index="07" kicker="Approche" id="approche" title="Apprendre, créer, se positionner" />
          <div className="mt-14 grid gap-10 border-t border-line pt-10 md:grid-cols-3 md:gap-8">
            {approach.map((item, i) => (
              <article key={item.kicker} className="reveal" data-delay={(0.08 * i).toFixed(2)}>
                <p className="meta"><span className="meta-strong tabular">{item.n}</span> &nbsp;/&nbsp; {item.kicker}</p>
                <h3 className="h-item mt-5 text-cream">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fog">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 08 · FAQ */}
      <section className="section border-t border-line" aria-labelledby="faq-titre">
        <div className="container-x">
          <div className="grid-12 gap-y-10">
            <div className="col-span-12 lg:col-span-4">
              <p className="meta"><span className="meta-strong">08</span> &nbsp;/&nbsp; FAQ</p>
              <h2 id="faq-titre" className="h-section mt-5">
                Questions fréquentes sur Frank Houbre et la formation IA
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-fog">
                Quelques réponses directes pour clarifier le positionnement du site et les sujets
                traités.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              {faqEntries.map((entry, i) => (
                <details key={entry.question} className="faq-item" open={i === 0}>
                  <summary>
                    <span className="flex gap-5">
                      <span className="meta tabular pt-1.5">0{i + 1}</span>
                      <span>{entry.question}</span>
                    </span>
                    <Plus />
                  </summary>
                  <p className="pl-[calc(2ch+1.25rem)] text-[15px] leading-relaxed text-fog">{entry.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 09 · Journal */}
      <section className="section border-t border-line" aria-labelledby="blog-titre">
        <div className="container-x">
          <SectionHeader
            index="09"
            kicker="Journal"
            id="blog-titre"
            title={hasActualiteOnly ? "Derniers articles d’actualité" : "Derniers articles"}
            lede={
              hasActualiteOnly
                ? "Nouveautés et tendances autour de l’IA créative, de la vidéo IA et des workflows de production."
                : "Les publications les plus récentes couvrent formation IA, actualités, outils, direction artistique et tutoriels image et vidéo."
            }
            aside={<Cta href="/blog" size="sm">Tout le blog</Cta>}
          />
          {latestPosts.length > 0 ? (
            <div className="mt-14">
              <HomeLatestPostGrid posts={latestPosts} />
            </div>
          ) : (
            <p className="mt-10 text-fog">
              Les articles arrivent bientôt. En attendant, vous pouvez consulter le{" "}
              <Link href="/blog" className="link">
                blog
              </Link>
              .
            </p>
          )}
        </div>
      </section>
    </>
  );
}
