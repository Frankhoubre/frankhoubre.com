import { buildPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

type OutilPageConfig = {
  title: string;
  description: string;
  path: string;
};

const outilPages = {
  annuaireAudio: {
    title: "Annuaire IA audio, SFX et musicales",
    description:
      "Comparez musique, voix, bruitages et sound design IA avec filtres et score intelligent. Trouvez l’outil audio adapté à votre projet — gratuit, en ligne.",
    path: "/outils/annuaire-ia-audio-sfx-musicales",
  },
  annuaireImages: {
    title: "Annuaire générateurs d’images IA gratuits",
    description:
      "Comparez les meilleurs générateurs d’images IA gratuits : filtres, tri, score et notation locale. Choisissez l’outil image adapté à votre style.",
    path: "/outils/annuaire-generateurs-images-ia-gratuits",
  },
  storyboard: {
    title: "Générateur de storyboard PDF IA",
    description:
      "Collez vos images IA, ajoutez vos notes de plan et exportez un storyboard PDF paginé pour présenter votre projet — outil gratuit en ligne.",
    path: "/outils/generateur-storyboard-pdf",
  },
  budget: {
    title: "Calculateur budget production IA",
    description:
      "Estimez le coût réel d’un projet vidéo IA : abonnements, crédits, révisions. Convertissez les crédits Midjourney, Runway ou ElevenLabs en euros.",
    path: "/outils/calculateur-budget-production-ia",
  },
  reversePrompt: {
    title: "Reverse prompting image IA",
    description:
      "Uploadez une image : analysez composition, lumière et style pour reconstruire un prompt IA exploitable. Outil gratuit de reverse prompting.",
    path: "/outils/reverse-prompting-image-ia",
  },
  promptCinema: {
    title: "Générateur de prompt cinéma IA",
    description:
      "Créez un prompt cinéma IA en anglais : caméra, objectif, réalisateur, éclairage. Prompt prêt pour image et vidéo IA — gratuit, en 30 secondes.",
    path: "/outils/generateur-prompt-cinema",
  },
} as const satisfies Record<string, OutilPageConfig>;

export function buildOutilPageMetadata(
  key: keyof typeof outilPages,
): Metadata {
  const page = outilPages[key];
  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
  });
}

export function getOutilStructuredData(key: keyof typeof outilPages) {
  const page = outilPages[key];
  return {
    name: page.title,
    path: page.path,
    description: page.description,
    breadcrumbs: [
      { name: "Accueil", path: "/" },
      { name: "Outils", path: "/outils" },
      { name: page.title, path: page.path },
    ],
  };
}

export { outilPages };
