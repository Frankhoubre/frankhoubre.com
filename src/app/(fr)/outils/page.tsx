import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Arrow } from "@/components/ui/Cta";
import {
  buildBreadcrumbList,
  buildGraphJsonLd,
  buildPageMetadata,
  pageUrl,
} from "@/lib/metadata";
import { outilPages } from "@/lib/outils-metadata";
import { siteName } from "@/lib/site";

const outilsDescription = `Outils IA gratuits : annuaires image et audio, storyboard PDF, calculateur budget, reverse prompting et générateur de prompts cinéma par ${siteName}.`;

export const metadata: Metadata = buildPageMetadata({
  title: "Outils IA gratuits",
  description: outilsDescription,
  path: "/outils",
  openGraph: {
    title: `Outils IA gratuits | ${siteName}`,
    description: outilsDescription,
  },
});

const tools = [
  {
    key: "annuaireAudio",
    kind: "Annuaire",
    title: "Annuaire des IA audio, SFX et musicales",
    text: "Comparez un catalogue complet d’outils IA audio : musique, voix, bruitages, stems, mastering et sound design, avec filtres et score intelligent.",
  },
  {
    key: "annuaireImages",
    kind: "Annuaire",
    title: "Annuaire interactif des générateurs d’images IA gratuits",
    text: "Comparez les meilleurs générateurs d’images IA gratuits avec filtres, tri, score global et notation personnelle sauvegardée en localStorage.",
  },
  {
    key: "storyboard",
    kind: "Générateur",
    title: "Générateur de storyboard PDF IA",
    text: "Collez vos images générées, ajoutez vos notes de plan, puis exportez un storyboard PDF paginé avec cases de texte pour présenter votre projet.",
  },
  {
    key: "budget",
    kind: "Calculateur",
    title: "Calculateur budget production IA",
    text: "Estimez le coût réel d’un projet vidéo IA (abonnements, crédits, révisions) et convertissez les crédits Midjourney, Runway ou ElevenLabs en euros.",
  },
  {
    key: "reversePrompt",
    kind: "Analyse",
    title: "Reverse Prompting Image IA",
    text: "Uploadez une image et laissez l’outil analyser composition, lumière et style pour reconstruire automatiquement un prompt IA exploitable.",
  },
  {
    key: "promptCinema",
    kind: "Générateur",
    title: "Générateur de prompt cinéma IA",
    text: "Créez en quelques clics un prompt en anglais avec caméra, objectif, style de réalisateur et éclairage pour des rendus image/vidéo plus crédibles.",
  },
] as const;

export default function OutilsPage() {
  return (
    <>
      <JsonLd
        data={buildGraphJsonLd(
          buildBreadcrumbList([
            { name: "Accueil", path: "/" },
            { name: "Outils", path: "/outils" },
          ]),
          {
            "@type": "CollectionPage",
            name: `Outils IA gratuits | ${siteName}`,
            url: pageUrl("/outils"),
            description: outilsDescription,
            inLanguage: "fr-FR",
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: Object.values(outilPages).length,
              itemListElement: Object.values(outilPages).map((tool, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: pageUrl(tool.path),
                name: tool.title,
                description: tool.description,
              })),
            },
          },
        )}
      />
      <PageHeader
        index="04"
        kicker="Ressources"
        title={
          <>
            Outils
            <span className="block text-fog">gratuits, dans le navigateur</span>
          </>
        }
        lede="Des outils utiles pour la création IA : image, vidéo, workflow et production. Aucune inscription, tout fonctionne en local."
        aside={
          <p className="meta">
            <span className="meta-strong tabular">{tools.length}</span> outils · 0 €
          </p>
        }
      />
      <section className="container-x section-sm">
        <ol className="border-t border-line">
          {tools.map((tool, i) => (
            <li key={tool.key} className="border-b border-line">
              <Link href={outilPages[tool.key].path} className="group grid-12 items-baseline gap-y-3 py-7 no-underline sm:py-9">
                <span className="meta meta-strong tabular col-span-2 lg:col-span-1">0{i + 1}</span>
                <span className="meta col-span-10 lg:col-span-2">{tool.kind}</span>
                <h2 className="h-block col-span-12 text-cream lg:col-span-4">{tool.title}</h2>
                <span className="col-span-12 text-[15px] leading-relaxed text-fog lg:col-span-4">{tool.text}</span>
                <span className="arrow-link col-span-12 mt-2 justify-self-start text-fog transition-colors duration-200 group-hover:text-cream lg:col-span-1 lg:mt-0 lg:justify-self-end">
                  <span className="lg:sr-only">Ouvrir l’outil</span>
                  <Arrow />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
