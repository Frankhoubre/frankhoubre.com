import { FUNNEL_PATHS } from "@/lib/funnel/config";

/** Page d'inscription à la formation gratuite (tunnel interne, ex-systeme.io). */
export const FORMATION_PROMO_URL = FUNNEL_PATHS.optin;

/** Emplacements d'où part un lien vers la formation depuis le blog. */
export type FormationPlacement = "article-mid" | "article-end" | "listing" | "modal";

/**
 * Lien vers la page d'inscription. Volontairement SANS paramètre utm : un lien
 * interne garde l'URL canonique nue, pour que tout le maillage du blog pointe
 * sur une seule adresse (pas de variantes à explorer puis à canoniser).
 * `placement` reste dans la signature pour documenter l'emplacement et
 * permettre un suivi au clic plus tard, sans toucher aux URL.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- voir ci-dessus
export function formationHref(placement: FormationPlacement): string {
  return FORMATION_PROMO_URL;
}

type PromoCopy = {
  /** Encart au milieu de l'article. */
  mid: { label: string; kicker: string; title: string; text: string; button: string; note: string; caption: string };
  /** Bloc de fin d'article et bas des listes. */
  end: {
    kicker: string;
    title: string;
    titleAccent: string;
    text: string;
    days: readonly (readonly [string, string])[];
    button: string;
    note: string;
  };
};

/**
 * Textes des encarts « formation gratuite » du blog. Les faits (3 vidéos,
 * 24 min, le contenu des trois jours, Lost Garden) viennent de la page
 * d'inscription et de `src/lib/funnel/config.ts` : ne rien ajouter ici qui
 * n'y figure pas. La formation est en français, la version EN le dit.
 */
export const FORMATION_COPY: Record<"fr" | "en", PromoCopy> = {
  fr: {
    mid: {
      label: "Formation vidéo IA gratuite",
      kicker: "Méthode offerte · 3 vidéos · 24 min",
      title: "Le film que vous avez en tête peut enfin exister.",
      text: "Recevez gratuitement la méthode pour transformer une simple idée écrite en storyboard clair, puis en vidéo IA crédible. Séries, films ou publicités, dans tous les styles, même si vous débutez.",
      button: "Recevoir la méthode gratuite",
      note: "Accès immédiat · sans carte bancaire",
      caption: "Fig. · Extrait de film IA",
    },
    end: {
      kicker: "Formation gratuite · 3 vidéos · 24 min",
      title: "vous avez l'idée.",
      titleAccent: "voici la méthode pour en faire un film.",
      text: "Trois vidéos pour tenir votre idée en une phrase, valider chaque plan dans un storyboard, puis monter. C'est la méthode que j'utilise sur mes propres films, avec le vrai montage de Lost Garden.",
      days: [
        ["Jour 1", "La vision : votre idée en une phrase"],
        ["Jour 2", "Le storyboard : voir le film avant de générer"],
        ["Jour 3", "Le montage réel de Lost Garden"],
      ],
      button: "Recevoir les 3 vidéos",
      note: "Gratuit · accès immédiat · sans carte bancaire · désinscription en un clic",
    },
  },
  en: {
    mid: {
      label: "Free AI video training",
      kicker: "Free method · 3 videos · 24 min · in French",
      title: "The film you have in mind can finally exist.",
      text: "Get the free method to turn a simple written idea into a clear storyboard, then into a believable AI video. Series, films or ads, in any style, even if you are just starting. The videos are in French.",
      button: "Get the free method",
      note: "Instant access · no credit card",
      caption: "Fig. · AI film still",
    },
    end: {
      kicker: "Free training · 3 videos · 24 min · in French",
      title: "you have the idea.",
      titleAccent: "here is the method to turn it into a film.",
      text: "Three videos to pin your idea down in one sentence, validate every shot in a storyboard, then edit. It is the method I use on my own films, with the real edit of Lost Garden. The videos are in French.",
      days: [
        ["Day 1", "The vision: your idea in one sentence"],
        ["Day 2", "The storyboard: see the film before you generate"],
        ["Day 3", "The real edit of Lost Garden"],
      ],
      button: "Get the 3 videos",
      note: "Free · instant access · no credit card · unsubscribe in one click",
    },
  },
};

/** localStorage : date du dernier affichage (YYYY-MM-DD, fuseau local). */
export const FORMATION_PROMO_STORAGE_KEY = "fh-formation-promo-last-shown";

export function formationPromoTodayKey(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
