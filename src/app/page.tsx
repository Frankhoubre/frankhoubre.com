import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { HomeLatestPostGrid } from "@/components/HomeLatestPostGrid";
import { getHomeLatestPosts } from "@/lib/blog";
import { baseUrl, siteName } from "@/lib/site";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Accueil",
  description: `${siteName} : actualités et tutoriels sur l’IA générative pour l’image et la vidéo cinématographiques. Derniers articles et parcours sur le blog.`,
  alternates: { canonical: `${baseUrl}/` },
};

const LATEST_COUNT = 6;

export default function HomePage() {
  const latestPosts = getHomeLatestPosts(LATEST_COUNT);
  const hasActualiteOnly =
    latestPosts.length > 0 &&
    latestPosts.every((p) => p.frontmatter.category === "actualite");

  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,rgba(20,20,20,0.06),transparent),radial-gradient(ellipse_50%_40%_at_100%_0%,rgba(120,100,80,0.07),transparent)]"
        aria-hidden
      />

      <section className="mx-auto max-w-5xl px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-16">
        <div className="relative flex min-h-[min(72vh,560px)] w-full flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:min-h-[min(62vh,480px)]">
          <Image
            src="/images/home-hero-cinematic.webp"
            alt="Ambiance cinéma : bureau de travail image, écran de référence et lumière chaude, style plateau et étalonnage."
            fill
            priority
            className="object-cover object-[center_38%]"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.52)_42%,rgba(0,0,0,0.22)_100%),linear-gradient(to_top,rgba(0,0,0,0.65)_0%,transparent_55%)]"
            aria-hidden
          />
          <div className="relative z-10 p-6 sm:p-10 sm:pb-12">
            <p className="text-sm font-medium uppercase tracking-widest text-white/75">
              Image & vidéo IA
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl sm:leading-[1.1]">
              Idées et tutoriels pour un rendu cinéma, sans l’effet « plastique ».
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
              Bienvenue sur le site de{" "}
              <span className="font-medium text-white">{siteName}</span> :
              articles sur les workflows d’IA générative, le prompting et le
              réalisme visuel, du portrait à la vidéo.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-100"
              >
                Voir le blog
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/55 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-[2px] transition hover:border-white/80 hover:bg-white/15"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200/80 bg-white/60">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 lg:items-start">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
                Frank Houbre et l’IA
              </h2>
              <p className="mt-4 leading-relaxed text-neutral-800">
                {siteName} explore l’IA comme outil de création visuelle : génération
                d’images photoréalistes, montée vers la vidéo, lumière et
                cinématographie dans les prompts, cohérence des personnages et des
                plans. L’objectif est simple : des résultats crédibles, avec un
                vocabulaire de réalisateur et de photographe, pas seulement des
                boutons magiques.
              </p>
              <p className="mt-4 leading-relaxed text-neutral-800">
                Sur ce site, vous trouverez des guides concrets (prompts,
                erreurs fréquentes, workflows film) et, à terme, des billets
                d’actualité sur les outils et les modèles.
              </p>
              <Link
                href="/a-propos"
                className="mt-6 inline-flex text-sm font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-4 hover:decoration-neutral-600"
              >
                En savoir plus
              </Link>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-[var(--background)] p-8 lg:col-span-7">
              <p className="font-mono text-xs text-neutral-600">
                Sur le blog en ce moment
              </p>
              <p className="mt-3 text-lg font-medium leading-snug text-neutral-950">
                Tutoriels pas à pas : lumière naturelle, grain cinéma,
                mouvements vidéo crédibles, comparaisons de modèles…
              </p>
              <ul className="mt-6 space-y-3 text-sm text-neutral-800">
                <li className="flex gap-2">
                  <span className="text-neutral-400" aria-hidden>
                    •
                  </span>
                  Prompts structurés pour un rendu « tournage » plutôt que rendu 3D.
                </li>
                <li className="flex gap-2">
                  <span className="text-neutral-400" aria-hidden>
                    •
                  </span>
                  Chaînes image → vidéo et erreurs qui font « fake ».
                </li>
                <li className="flex gap-2">
                  <span className="text-neutral-400" aria-hidden>
                    •
                  </span>
                  Univers visuels cohérents sur plusieurs générations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
              {hasActualiteOnly
                ? "Derniers articles d’actualité"
                : "Derniers articles"}
            </h2>
            <p className="mt-2 max-w-xl text-neutral-800">
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
          <p className="mt-10 text-neutral-800">
            Les articles arrivent bientôt. En attendant, vous pouvez consulter le{" "}
            <Link
              href="/blog"
              className="font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-2"
            >
              blog
            </Link>
            .
          </p>
        )}
      </section>
    </div>
  );
}
