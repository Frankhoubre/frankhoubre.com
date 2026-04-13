import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { HomeLatestPostGrid } from "@/components/HomeLatestPostGrid";
import { getHomeLatestPosts } from "@/lib/blog";
import { baseUrl, person, siteName, socialLinks } from "@/lib/site";

export const revalidate = 3600;

const homeDescription = `${siteName} : entrepreneur, réalisateur et créateur autour de l’IA et du cinéma. Présentation, articles et tutoriels image & vidéo.`;

export const metadata: Metadata = {
  title: "Accueil",
  description: homeDescription,
  alternates: { canonical: `${baseUrl}/` },
};

const LATEST_COUNT = 6;

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      name: siteName,
      url: baseUrl,
      description: homeDescription,
      publisher: { "@id": `${baseUrl}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      name: person.name,
      url: baseUrl,
      jobTitle: person.jobTitle,
      description: person.description,
      image: `${baseUrl}/images/frank-houbre-about.png`,
      sameAs: [...person.sameAs],
    },
  ],
};

export default function HomePage() {
  const latestPosts = getHomeLatestPosts(LATEST_COUNT);
  const hasActualiteOnly =
    latestPosts.length > 0 &&
    latestPosts.every((p) => p.frontmatter.category === "actualite");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      <div className="relative overflow-hidden">
        {/* Fond : grain léger + halos */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_55%_at_15%_-10%,rgba(120,90,60,0.09),transparent_55%),radial-gradient(ellipse_70%_50%_at_100%_15%,rgba(40,60,90,0.06),transparent_50%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] [background-image:linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] [background-size:48px_48px]"
          aria-hidden
        />

        {/* Hero / Présentation */}
        <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden border-b border-neutral-200/80 bg-neutral-950">
          <Image
            src="/images/home-hero-banner-4k.webp"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={100}
            priority
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25"
            aria-hidden
          />
          <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 sm:py-28">
            <div className="mx-auto max-w-3xl min-w-0">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-white/75">
                Présentation
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl xl:text-[3.25rem] xl:leading-[1.08]">
                {siteName}
              </h1>
              <p className="mt-4 text-lg font-medium text-white/90 sm:text-xl">
                {person.jobTitle}
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">
                Entrepreneur français, réalisateur et créateur, j’explore les{" "}
                <span className="text-white">
                  nouvelles formes de narration
                </span>{" "}
                à l’ère de l’intelligence artificielle, entre cinéma,
                storytelling et workflows d’image &amp; vidéo crédibles.
              </p>
              <p className="mt-4 max-w-2xl leading-relaxed text-white/80">
                J’y partage méthodes, tutoriels et retours d’expérience :
                prompts pensés comme un brief réalisateur, lumière, grain,
                cohérence des plans, pas seulement des effets « IA ».
              </p>

              <div className="mt-10">
                <a
                  href="https://www.skool.com/ai-studios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-neutral-950 shadow-lg shadow-black/25 transition hover:bg-neutral-100"
                >
                  Formation gratuite 7 jours
                </a>
              </div>

              <div className="mt-10 border-t border-white/25 pt-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/70">
                  Ailleurs sur le web
                </p>
                <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                  {socialLinks.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-white/90 underline decoration-white/35 underline-offset-4 transition hover:text-white hover:decoration-white/60"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Piliers */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
              Mon approche
            </h2>
            <p className="mt-3 text-neutral-700">
              Trois entrées pour comprendre mon travail et ce que vous pouvez
              tirer des articles.
            </p>
          </div>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <li>
              <article className="flex h-full flex-col rounded-2xl border border-neutral-200/90 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition hover:border-neutral-300 hover:shadow-md">
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-amber-900/80">
                  01 - Cinéma &amp; fiction
                </span>
                <h3 className="mt-3 text-lg font-semibold text-neutral-950">
                  Narration et réalisation
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-700">
                  De la conception à l’image : projets comme VOIDBORN, festivals,
                  et une approche où l’outil sert l’histoire, pas l’inverse.
                </p>
              </article>
            </li>
            <li>
              <article className="flex h-full flex-col rounded-2xl border border-neutral-200/90 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition hover:border-neutral-300 hover:shadow-md">
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-sky-900/75">
                  02 - Méthode &amp; IA
                </span>
                <h3 className="mt-3 text-lg font-semibold text-neutral-950">
                  Workflows et outils
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-700">
                  Chaînes image → vidéo, cohérence des personnages, erreurs qui
                  trahissent le « fake » : des guides pour travailler comme en
                  tournage.
                </p>
              </article>
            </li>
            <li className="sm:col-span-2 lg:col-span-1">
              <article className="flex h-full flex-col rounded-2xl border border-neutral-200/90 bg-gradient-to-br from-neutral-950 to-neutral-900 p-6 text-white shadow-lg shadow-neutral-900/20 sm:min-h-0">
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/55">
                  03 - Blog
                </span>
                <h3 className="mt-3 text-lg font-semibold">
                  Tutoriels &amp; actualités
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/85">
                  Articles récents : prompts, comparaisons de modèles, veille
                  sur les outils, toujours avec un angle réalisation.
                </p>
                <Link
                  href="/blog"
                  className="mt-5 inline-flex w-fit text-sm font-medium text-white underline decoration-white/35 underline-offset-4 transition hover:decoration-white"
                >
                  Ouvrir le blog
                </Link>
              </article>
            </li>
          </ul>
        </section>

        {/* Projets */}
        <section className="border-t border-neutral-200/80 bg-neutral-50/60">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                Projets
              </h2>
              <p className="mt-3 text-neutral-700">
                Deux œuvres IA récentes entre court film et animé.
              </p>
            </div>

            <ul className="mt-10 grid gap-5 md:grid-cols-2">
              <li>
                <article className="flex h-full flex-col rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-sm transition hover:border-neutral-300 hover:shadow-md">
                  <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-neutral-500">
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
                    Un short film IA orienté narration visuelle et ambiance cinématographique.
                  </p>
                  <a
                    href="https://vimeo.com/1164434045?fl=ip&fe=ec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-fit text-sm font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-4 transition hover:decoration-neutral-600"
                  >
                    Voir sur Vimeo
                  </a>
                </article>
              </li>
              <li>
                <article className="flex h-full flex-col rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-sm transition hover:border-neutral-300 hover:shadow-md">
                  <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-neutral-500">
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
                    Un projet d’animation IA avec une direction artistique orientée fiction.
                  </p>
                  <a
                    href="https://youtu.be/TaoYARoU7Lc?si=csVLgOV_wuQs4uA0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-fit text-sm font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-4 transition hover:decoration-neutral-600"
                  >
                    Voir sur YouTube
                  </a>
                </article>
              </li>
            </ul>
          </div>
        </section>

        {/* Derniers articles */}
        <section className="border-t border-neutral-200/80 bg-white/50">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                  {hasActualiteOnly
                    ? "Derniers articles d’actualité"
                    : "Derniers articles"}
                </h2>
                <p className="mt-2 max-w-xl text-neutral-700">
                  {hasActualiteOnly
                    ? "Nouveautés et tendances autour de l’IA créative."
                    : "Les publications les plus récentes : actualités lorsqu’elles sont publiées, complétées par les derniers tutoriels."}
                </p>
              </div>
              <Link
                href="/blog"
                className="shrink-0 text-sm font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-4 hover:decoration-neutral-600"
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
                Les articles arrivent bientôt. En attendant, vous pouvez
                consulter le{" "}
                <Link
                  href="/blog"
                  className="font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-2"
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
