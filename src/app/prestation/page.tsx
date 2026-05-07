import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { baseUrl, siteName } from "@/lib/site";

const pageTitle = "Prestation conseil IA pour entreprises et boites de prod";
const pageDescription =
  "Accompagnement conseil IA pour entreprises et boites de production : optimisation des workflows, des couts et de la vitesse d'execution. Tarif fixe 4200EUR HT / jour, en distanciel ou sur Paris et Strasbourg, avec deplacements possibles.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${baseUrl}/prestation` },
  openGraph: {
    title: `${pageTitle} | ${siteName}`,
    description: pageDescription,
    url: `${baseUrl}/prestation`,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: `${baseUrl}/images/home-hero-frank-houbre.png`,
        width: 1024,
        height: 434,
        alt: "Conseil IA pour production video et image",
      },
    ],
  },
};

const keyBenefits = [
  {
    title: "Production",
    description:
      "Structuration d'un pipeline IA clair pour passer plus vite de l'idee au rendu livrable, sans degrader la qualite percue.",
  },
  {
    title: "Couts",
    description:
      "Identification des postes de depense compressibles et des taches a automatiser pour reduire les couts de production.",
  },
  {
    title: "Vitesse",
    description:
      "Mise en place de methodes operationnelles pour accelerer les iterations creatives et raccourcir les delais de livraison.",
  },
] as const;

const interventions = [
  "Audit de vos workflows IA image/video actuels",
  "Recommandations concrètes et prioritisees",
  "Optimisation du process pre-prod, prod et post-prod",
  "Structuration des prompts, styles et standards qualite",
  "Formation des equipes aux bonnes pratiques executables",
] as const;

export default function PrestationPage() {
  return (
    <div className="relative overflow-hidden bg-background text-foreground">
      <section className="relative isolate overflow-hidden border-b border-zinc-800 bg-zinc-950">
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/55"
          aria-hidden
        />
        <div className="ds-cinematic-beam" aria-hidden />
        <div className="absolute inset-y-0 right-0 hidden w-[44%] lg:block">
          <Image
            src="/images/home-hero-frank-houbre.png"
            alt="Direction artistique et production IA"
            fill
            priority
            className="object-cover object-center opacity-45"
            sizes="44vw"
          />
        </div>

        <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/75">
              Prestation conseil IA
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              J&apos;accompagne les entreprises et boites de prod pour optimiser leur production avec
              l&apos;IA
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
              Intervention orientee resultat pour ameliorer trois leviers strategiques:{" "}
              <strong>qualite de production</strong>, <strong>maitrise des couts</strong> et{" "}
              <strong>vitesse d&apos;execution</strong>.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="ds-cta-primary ds-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              >
                Demander une disponibilite
              </Link>
              <Link
                href="/a-propos"
                className="ds-cta-ghost-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                Voir mon parcours
              </Link>
            </div>
          </div>

          <aside className="ds-card rounded-3xl p-6 sm:p-7">
            <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">
              Conditions d&apos;intervention
            </p>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="font-medium text-zinc-900">Tarif journalier</dt>
                <dd className="mt-1 text-zinc-700">4200EUR HT / jour (tarif fixe)</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900">Modalites</dt>
                <dd className="mt-1 text-zinc-700">Distanciel, sur Paris ou Strasbourg</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900">Deplacements</dt>
                <dd className="mt-1 text-zinc-700">Possibles selon mission et planning</dd>
              </div>
            </dl>
            <p className="mt-6 text-sm leading-relaxed text-zinc-700">
              Objectif: deployer une strategie IA claire et actionnable pour obtenir des gains
              mesurables rapidement.
            </p>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-950">
            Une prestation orientee performance operationnelle
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-800">
            Je travaille avec des equipes dirigeantes, des studios, des agences et des boites de
            production qui veulent integrer l&apos;IA sans improvisation. L&apos;accompagnement se
            concentre
            sur les decisions qui ont un impact direct sur les delais, le budget et la qualite.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {keyBenefits.map((item) => (
            <li key={item.title}>
              <article className="ds-card flex h-full flex-col rounded-3xl p-6">
                <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">
                  Axe prioritaire
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700">{item.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-zinc-50/70">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
            <Image
              src="/images/frank-houbre-about.png"
              alt="Frank Houbre en prestation conseil IA"
              width={520}
              height={520}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 520px"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Ce que comprend la mission
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950">
              Conseil strategique + execution terrain
            </h2>
            <ul className="mt-6 space-y-3 text-base leading-relaxed text-neutral-800">
              {interventions.map((item) => (
                <li key={item} className="rounded-2xl border border-zinc-200 bg-white px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-neutral-700">
              Vous repartez avec une feuille de route directement utilisable par vos equipes.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Demande de mission
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950">
            Parlons de vos enjeux de production IA
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-800">
            Si vous cherchez un accompagnement senior, structure et orienté ROI, je peux vous aider a
            cadrer et accelerer votre execution.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/contact" className="ds-cta-primary">
              Me contacter pour une mission
            </Link>
            <p className="text-sm text-zinc-600">
              Tarif fixe: <strong>4200EUR HT / jour</strong> - distanciel, Paris, Strasbourg,
              deplacements possibles.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
