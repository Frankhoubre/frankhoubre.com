import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { baseUrl, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Outils",
  description: `Sélection d'outils IA recommandés par ${siteName}.`,
  alternates: { canonical: `${baseUrl}/outils` },
  openGraph: {
    title: `Outils | ${siteName}`,
    description: `Sélection d'outils IA recommandés par ${siteName}.`,
    url: `${baseUrl}/outils`,
    siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Outils | ${siteName}`,
    description: `Sélection d'outils IA recommandés par ${siteName}.`,
  },
};

export default function OutilsPage() {
  const pageUrl = `${baseUrl}/outils`;
  const items = [
    {
      name: "Annuaire des IA audio, SFX et musicales",
      url: `${baseUrl}/outils/annuaire-ia-audio-sfx-musicales`,
    },
    {
      name: "Annuaire interactif des générateurs d'images IA gratuits",
      url: `${baseUrl}/outils/annuaire-generateurs-images-ia-gratuits`,
    },
    {
      name: "Generateur de storyboard PDF IA",
      url: `${baseUrl}/outils/generateur-storyboard-pdf`,
    },
    {
      name: "Calculateur budget production IA",
      url: `${baseUrl}/outils/calculateur-budget-production-ia`,
    },
    {
      name: "Reverse Prompting Image IA",
      url: `${baseUrl}/outils/reverse-prompting-image-ia`,
    },
    {
      name: "Generateur de prompt cinema IA",
      url: `${baseUrl}/outils/generateur-prompt-cinema`,
    },
  ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Outils",
        description: `Sélection d'outils IA recommandés par ${siteName}.`,
        isPartOf: {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
        },
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Outils",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "Outils IA",
        numberOfItems: items.length,
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          url: item.url,
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="ds-page max-w-5xl">
        <header className="ds-surface max-w-3xl p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
            Ressources
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
            Outils
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-neutral-800">
            Cette section regroupe des outils utiles pour la création IA (image, vidéo, workflow
            et production).
          </p>
        </header>
        <section className="mt-10">
          <ul className="grid gap-4">
            <li>
              <article className="ds-card p-6 motion-safe:transition-all motion-safe:duration-200 motion-safe:hover:-translate-y-0.5">
                <p className="text-[11px] uppercase tracking-[0.15em] text-neutral-500">
                  Mini outil interactif
                </p>
                <h2 className="mt-2 text-xl font-semibold text-neutral-950">
                  Annuaire des IA audio, SFX et musicales
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                  Comparez un catalogue ultra complet d&apos;outils IA audio: musique, voix, bruitages,
                  stems, mastering et sound design, avec filtres et score intelligent.
                </p>
                <Link
                  href="/outils/annuaire-ia-audio-sfx-musicales"
                  className="ds-link mt-4 inline-flex cursor-pointer text-sm font-medium text-neutral-950"
                >
                  Ouvrir l&apos;outil
                </Link>
              </article>
            </li>
            <li>
              <article className="ds-card p-6 motion-safe:transition-all motion-safe:duration-200 motion-safe:hover:-translate-y-0.5">
                <p className="text-[11px] uppercase tracking-[0.15em] text-neutral-500">
                  Mini outil interactif
                </p>
                <h2 className="mt-2 text-xl font-semibold text-neutral-950">
                  Annuaire interactif des générateurs d&apos;images IA gratuits
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                  Comparez les meilleurs générateurs d&apos;images IA gratuits avec filtres, tri,
                  score global et notation personnelle sauvegardée en localStorage.
                </p>
                <Link
                  href="/outils/annuaire-generateurs-images-ia-gratuits"
                  className="ds-link mt-4 inline-flex cursor-pointer text-sm font-medium text-neutral-950"
                >
                  Ouvrir l&apos;outil
                </Link>
              </article>
            </li>
            <li>
              <article className="ds-card p-6 motion-safe:transition-all motion-safe:duration-200 motion-safe:hover:-translate-y-0.5">
                <p className="text-[11px] uppercase tracking-[0.15em] text-neutral-500">
                  Mini outil interactif
                </p>
                <h2 className="mt-2 text-xl font-semibold text-neutral-950">
                  Generateur de storyboard PDF IA
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                  Collez vos images generees, ajoutez vos notes de plan, puis exportez un storyboard PDF
                  pagine avec cases de texte pour presenter votre projet.
                </p>
                <Link
                  href="/outils/generateur-storyboard-pdf"
                  className="ds-link mt-4 inline-flex cursor-pointer text-sm font-medium text-neutral-950"
                >
                  Ouvrir l&apos;outil
                </Link>
              </article>
            </li>
            <li>
              <article className="ds-card p-6 motion-safe:transition-all motion-safe:duration-200 motion-safe:hover:-translate-y-0.5">
                <p className="text-[11px] uppercase tracking-[0.15em] text-neutral-500">
                  Mini outil interactif
                </p>
                <h2 className="mt-2 text-xl font-semibold text-neutral-950">
                  Calculateur budget production IA
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                  Estimez le cout reel d&apos;un projet video IA (abonnements, credits, revisions) et
                  convertissez les credits Midjourney, Runway ou ElevenLabs en euros.
                </p>
                <Link
                  href="/outils/calculateur-budget-production-ia"
                  className="ds-link mt-4 inline-flex cursor-pointer text-sm font-medium text-neutral-950"
                >
                  Ouvrir l&apos;outil
                </Link>
              </article>
            </li>
            <li>
              <article className="ds-card p-6 motion-safe:transition-all motion-safe:duration-200 motion-safe:hover:-translate-y-0.5">
                <p className="text-[11px] uppercase tracking-[0.15em] text-neutral-500">
                  Mini outil interactif
                </p>
                <h2 className="mt-2 text-xl font-semibold text-neutral-950">
                  Reverse Prompting Image IA
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                  Uploadez une image et laissez l&apos;outil analyser composition, lumiere et style pour
                  reconstruire automatiquement un prompt IA exploitable.
                </p>
                <Link
                  href="/outils/reverse-prompting-image-ia"
                  className="ds-link mt-4 inline-flex cursor-pointer text-sm font-medium text-neutral-950"
                >
                  Ouvrir l&apos;outil
                </Link>
              </article>
            </li>
            <li>
              <article className="ds-card p-6 motion-safe:transition-all motion-safe:duration-200 motion-safe:hover:-translate-y-0.5">
                <p className="text-[11px] uppercase tracking-[0.15em] text-neutral-500">
                  Mini outil interactif
                </p>
                <h2 className="mt-2 text-xl font-semibold text-neutral-950">
                  Générateur de prompt cinéma IA
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                  Créez en quelques clics un prompt en anglais avec caméra, objectif, style de
                  réalisateur et éclairage pour des rendus image/vidéo plus crédibles.
                </p>
                <Link
                  href="/outils/generateur-prompt-cinema"
                  className="ds-link mt-4 inline-flex cursor-pointer text-sm font-medium text-neutral-950"
                >
                  Ouvrir l&apos;outil
                </Link>
              </article>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
