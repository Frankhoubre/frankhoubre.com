import type { Metadata } from "next";
import { CinemaPromptGenerator } from "@/components/CinemaPromptGenerator";
import { JsonLd } from "@/components/JsonLd";
import { baseUrl, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Generateur de Prompt Cinema IA Gratuit",
  description:
    "Creez un prompt cinema IA ultra precis en quelques clics. Choisissez camera, objectif, realisateur et eclairage pour obtenir un prompt en anglais pret a l'emploi.",
  alternates: { canonical: `${baseUrl}/outils/generateur-prompt-cinema` },
  openGraph: {
    title: `Generateur de Prompt Cinema IA Gratuit | ${siteName}`,
    description:
      "Un mini-outil gratuit pour generer des prompts cinema puissants pour l'image et la video IA.",
    url: `${baseUrl}/outils/generateur-prompt-cinema`,
    siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Generateur de Prompt Cinema IA Gratuit | ${siteName}`,
    description:
      "Generez un prompt cinema en anglais en 30 secondes avec des reglages visuels professionnels.",
  },
};

const faqEntries = [
  {
    question: "Ce generateur fonctionne-t-il pour l'image ET la video IA ?",
    answer:
      "Oui. Le prompt est redige pour rester compatible avec les generateurs d'image et de video. Vous pouvez ensuite ajouter des parametres propres a votre plateforme comme la duree, le mouvement camera, le ratio ou la seed.",
  },
  {
    question: "Pourquoi le prompt est-il genere en anglais ?",
    answer:
      "La plupart des modeles visuels interpretent mieux les descriptions techniques en anglais. Vous obtenez en general plus de precision sur la camera, les focales, la lumiere et le style cinematographique.",
  },
  {
    question: "Est-ce que mes preferences sont sauvegardees ?",
    answer:
      "Oui. Vos choix sont memorises automatiquement dans votre navigateur via localStorage. Cela permet de reprendre rapidement votre workflow lors de votre prochaine visite.",
  },
  {
    question: "Comment ameliorer encore la qualite des rendus ?",
    answer:
      "Ajoutez des details narratifs concrets: emotion du personnage, type d'action, periode, ambiance meteo, texture de l'image, et dynamique de camera. Plus le contexte est precis, plus le resultat sera coherent.",
  },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@id": `${baseUrl}/outils/generateur-prompt-cinema#graph`,
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${baseUrl}/outils/generateur-prompt-cinema#webpage`,
      name: "Generateur de Prompt Cinema IA",
      url: `${baseUrl}/outils/generateur-prompt-cinema`,
      description: "Mini-outil interactif gratuit pour generer des prompts cinema en anglais.",
      isPartOf: {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${baseUrl}/outils/generateur-prompt-cinema#app`,
      name: "Generateur de Prompt Cinema IA",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      description:
        "Mini-outil interactif gratuit pour generer des prompts cinema en anglais.",
      url: `${baseUrl}/outils/generateur-prompt-cinema`,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqEntries.map((entry) => ({
        "@type": "Question",
        name: entry.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: entry.answer,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${baseUrl}/outils/generateur-prompt-cinema#breadcrumb`,
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
          item: `${baseUrl}/outils`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Generateur de Prompt Cinema IA",
          item: `${baseUrl}/outils/generateur-prompt-cinema`,
        },
      ],
    },
  ],
};

export default function CinemaPromptGeneratorPage() {
  return (
    <main className="ds-page max-w-6xl !pt-8">
      <JsonLd data={jsonLd} />

      <CinemaPromptGenerator />

      <article className="max-w-none space-y-8">
        <section className="ds-card p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
            Comment utiliser cet outil ?
          </h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-neutral-700">
            <li>Choisissez votre camera pour definir la texture globale de l&apos;image.</li>
            <li>Selectionnez un objectif pour controler la profondeur de champ et la perspective.</li>
            <li>Reglez l&apos;ouverture et l&apos;ISO pour piloter profondeur de champ et grain.</li>
            <li>Choisissez un style visuel puis l&apos;eclairage pour obtenir l&apos;ambiance voulue.</li>
            <li>Generez puis copiez le prompt en anglais dans votre IA preferee.</li>
          </ol>
          <p className="mt-4 leading-relaxed text-neutral-700">
            Le prompt est pense pour rester propre, exploitable et facilement iterable. Vous pouvez
            remplacer uniquement le sujet de scene pour produire des variantes coherentes en serie
            sans casser votre direction artistique.
          </p>
        </section>

        <section className="ds-card p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
            Pourquoi utiliser l&apos;IA pour structurer un prompt cinema ?
          </h2>
          <p className="mt-4 leading-relaxed text-neutral-700">
            Beaucoup de creations paraissent artificielles car les prompts restent trop vagues:
            sujet sans mise en scene, lumiere sans intention, style sans coherence optique. En
            combinant des parametres professionnels (camera, objectif, ouverture, ISO, style et
            eclairage),
            vous donnez au modele IA des signaux plus riches et mieux interpretes.
          </p>
          <h3 className="mt-5 text-xl font-semibold text-neutral-950">Un gain de temps operationnel</h3>
          <p className="mt-2 leading-relaxed text-neutral-700">
            Au lieu de reecrire vos prompts de zero a chaque iteration, vous partez d&apos;une base
            fiable. Vous accedez plus vite a une qualite exploitable pour vos maquettes client,
            vos tests de direction artistique ou vos productions video.
          </p>
          <h3 className="mt-5 text-xl font-semibold text-neutral-950">Un rendu plus credible</h3>
          <p className="mt-2 leading-relaxed text-neutral-700">
            Les modeles IA repondent tres bien aux marqueurs cinematographiques precis. Une bonne
            structure reduit l&apos;effet plastique, stabilise les textures, et ameliore la coherence
            globale des plans ou des images.
          </p>
        </section>

        <section className="ds-card p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">Foire Aux Questions (FAQ)</h2>
          <div className="mt-4 space-y-3">
            {faqEntries.map((entry) => (
              <details
                key={entry.question}
                className="rounded-xl border border-neutral-200 bg-neutral-50 p-4"
              >
                <summary className="cursor-pointer font-medium text-neutral-950">{entry.question}</summary>
                <p className="mt-2 leading-relaxed text-neutral-700">{entry.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
