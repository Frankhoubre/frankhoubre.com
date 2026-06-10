import { CinemaPromptGenerator } from "@/components/CinemaPromptGenerator";
import { JsonLd } from "@/components/JsonLd";
import {
  buildGraphJsonLd,
  buildWebApplicationJsonLd,
  pageUrl,
} from "@/lib/metadata";
import {
  buildOutilPageMetadata,
  getOutilStructuredData,
} from "@/lib/outils-metadata";

export const metadata = buildOutilPageMetadata("promptCinema");

const faqEntries = [
  {
    question: "Ce générateur fonctionne-t-il pour l'image ET la vidéo IA ?",
    answer:
      "Oui. Le prompt est rédigé pour rester compatible avec les générateurs d'image et de vidéo. Vous pouvez ensuite ajouter des paramètres propres à votre plateforme comme la durée, le mouvement caméra, le ratio ou la seed.",
  },
  {
    question: "Pourquoi le prompt est-il généré en anglais ?",
    answer:
      "La plupart des modèles visuels interprètent mieux les descriptions techniques en anglais. Vous obtenez en général plus de précision sur la caméra, les focales, la lumière et le style cinématographique.",
  },
  {
    question: "Est-ce que mes préférences sont sauvegardées ?",
    answer:
      "Oui. Vos choix sont mémorisés automatiquement dans votre navigateur via localStorage. Cela permet de reprendre rapidement votre workflow lors de votre prochaine visite.",
  },
  {
    question: "Comment améliorer encore la qualité des rendus ?",
    answer:
      "Ajoutez des détails narratifs concrets : émotion du personnage, type d'action, période, ambiance météo, texture de l'image, et dynamique de caméra. Plus le contexte est précis, plus le résultat sera cohérent.",
  },
] as const;

const toolData = getOutilStructuredData("promptCinema");
const toolJsonLd = buildWebApplicationJsonLd(toolData);
const jsonLd = buildGraphJsonLd(
  ...(toolJsonLd["@graph"] as object[]),
  {
    "@type": "FAQPage",
    url: pageUrl(toolData.path),
    mainEntity: faqEntries.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.answer,
      },
    })),
  },
);

export default function CinemaPromptGeneratorPage() {
  return (
    <div className="ds-page max-w-6xl !pt-8">
      <JsonLd data={jsonLd} />

      <CinemaPromptGenerator />

      <article className="max-w-none space-y-8">
        <section className="ds-card p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
            Comment utiliser cet outil ?
          </h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-neutral-700">
            <li>Choisissez votre caméra pour définir la texture globale de l&apos;image.</li>
            <li>Sélectionnez un objectif pour contrôler la profondeur de champ et la perspective.</li>
            <li>Réglez l&apos;ouverture et l&apos;ISO pour piloter profondeur de champ et grain.</li>
            <li>Choisissez un style visuel puis l&apos;éclairage pour obtenir l&apos;ambiance voulue.</li>
            <li>Générez puis copiez le prompt en anglais dans votre IA préférée.</li>
          </ol>
          <p className="mt-4 leading-relaxed text-neutral-700">
            Le prompt est pensé pour rester propre, exploitable et facilement itérable. Vous pouvez
            remplacer uniquement le sujet de scène pour produire des variantes cohérentes en série
            sans casser votre direction artistique.
          </p>
        </section>

        <section className="ds-card p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
            Pourquoi utiliser l&apos;IA pour structurer un prompt cinéma ?
          </h2>
          <p className="mt-4 leading-relaxed text-neutral-700">
            Beaucoup de créations paraissent artificielles car les prompts restent trop vagues :
            sujet sans mise en scène, lumière sans intention, style sans cohérence optique. En
            combinant des paramètres professionnels (caméra, objectif, ouverture, ISO, style et
            éclairage),
            vous donnez au modèle IA des signaux plus riches et mieux interprétés.
          </p>
          <h3 className="mt-5 text-xl font-semibold text-neutral-950">Un gain de temps opérationnel</h3>
          <p className="mt-2 leading-relaxed text-neutral-700">
            Au lieu de réécrire vos prompts de zéro à chaque itération, vous partez d&apos;une base
            fiable. Vous accédez plus vite à une qualité exploitable pour vos maquettes client,
            vos tests de direction artistique ou vos productions vidéo.
          </p>
          <h3 className="mt-5 text-xl font-semibold text-neutral-950">Un rendu plus crédible</h3>
          <p className="mt-2 leading-relaxed text-neutral-700">
            Les modèles IA répondent très bien aux marqueurs cinématographiques précis. Une bonne
            structure réduit l&apos;effet plastique, stabilise les textures, et améliore la cohérence
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
    </div>
  );
}
