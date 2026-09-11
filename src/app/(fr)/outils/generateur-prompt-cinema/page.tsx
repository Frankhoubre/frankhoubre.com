import { CinemaPromptGenerator } from "@/components/CinemaPromptGenerator";
import { JsonLd } from "@/components/JsonLd";
import { Plus } from "@/components/FaqSection";
import { Breadcrumb, PageHeader } from "@/components/ui/PageHeader";
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

const steps = [
  "Choisissez votre caméra pour définir la texture globale de l’image.",
  "Sélectionnez un objectif pour contrôler la profondeur de champ et la perspective.",
  "Réglez l’ouverture et l’ISO pour piloter profondeur de champ et grain.",
  "Choisissez un style visuel puis l’éclairage pour obtenir l’ambiance voulue.",
  "Générez puis copiez le prompt en anglais dans votre IA préférée.",
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
    <>
      <JsonLd data={jsonLd} />
      <PageHeader
        kicker="Outil interactif · gratuit"
        size="lg"
        title="Générateur de prompt cinéma IA"
        lede="Choisissez une caméra, un objectif, une ouverture, un ISO, un style visuel et un setup lumière. L’outil compose un prompt professionnel en anglais, prêt pour Midjourney, Runway, Kling, Sora ou Flux."
        breadcrumb={
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Outils", href: "/outils" },
              { label: "Générateur de prompt cinéma" },
            ]}
          />
        }
        aside={<p className="meta">Sauvegarde locale · sans compte</p>}
      />

      <CinemaPromptGenerator />

      <article className="container-x pb-20 sm:pb-28">
        <div className="grid-12 gap-y-10 border-t border-line pt-14">
          <div className="col-span-12 lg:col-span-3">
            <p className="meta"><span className="meta-strong">01</span> &nbsp;/&nbsp; Comment utiliser cet outil</p>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-5">
            <ol>
              {steps.map((step, i) => (
                <li key={step} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-line py-4 text-[15px] text-stone last:border-b">
                  <span className="meta meta-strong tabular pt-1">0{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm leading-relaxed text-fog">
              Le prompt est pensé pour rester propre, exploitable et facilement itérable. Vous pouvez
              remplacer uniquement le sujet de scène pour produire des variantes cohérentes en série
              sans casser votre direction artistique.
            </p>
          </div>
        </div>

        <div className="grid-12 mt-14 gap-y-10 border-t border-line pt-14">
          <div className="col-span-12 lg:col-span-3">
            <p className="meta"><span className="meta-strong">02</span> &nbsp;/&nbsp; Pourquoi structurer un prompt cinéma</p>
          </div>
          <div className="prose-cinema col-span-12 lg:col-span-7 lg:col-start-5">
            <p>
              Beaucoup de créations paraissent artificielles car les prompts restent trop vagues :
              sujet sans mise en scène, lumière sans intention, style sans cohérence optique. En
              combinant des paramètres professionnels (caméra, objectif, ouverture, ISO, style et
              éclairage), vous donnez au modèle IA des signaux plus riches et mieux interprétés.
            </p>
            <h3>Un gain de temps opérationnel</h3>
            <p>
              Au lieu de réécrire vos prompts de zéro à chaque itération, vous partez d’une base
              fiable. Vous accédez plus vite à une qualité exploitable pour vos maquettes client,
              vos tests de direction artistique ou vos productions vidéo.
            </p>
            <h3>Un rendu plus crédible</h3>
            <p>
              Les modèles IA répondent très bien aux marqueurs cinématographiques précis. Une bonne
              structure réduit l’effet plastique, stabilise les textures, et améliore la cohérence
              globale des plans ou des images.
            </p>
          </div>
        </div>

        <div className="grid-12 mt-14 gap-y-10 border-t border-line pt-14">
          <div className="col-span-12 lg:col-span-3">
            <p className="meta"><span className="meta-strong">03</span> &nbsp;/&nbsp; Questions fréquentes</p>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-5">
            {faqEntries.map((entry) => (
              <details key={entry.question} className="faq-item">
                <summary>
                  <span>{entry.question}</span>
                  <Plus />
                </summary>
                <p className="text-[15px] leading-relaxed text-fog">{entry.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
