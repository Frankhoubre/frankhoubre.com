/**
 * Pages « ressources » : une page par mot à commenter sous les reels de
 * Frank Houbre (FR) et Frank Houbre AI (EN). Le DM ManyChat du mot envoie
 * vers la page du même mot, dans la langue du compte.
 * Carte des mots : ~/Claude/manychat/STRATEGIE-MOTS-CLES-2026-11-20.md.
 */

export type ResourceLocale = "fr" | "en";

export type ResourceVideo = {
  provider: "youtube" | "vimeo";
  id: string;
  title: string;
  /** Affiche (obligatoire pour Vimeo). */
  poster?: string;
  caption?: string;
  meta?: string;
};

export type ResourceLesson = {
  title: string;
  youtubeId: string;
  href: string;
};

export type ResourceStep = {
  title: string;
  text: string;
  lesson?: ResourceLesson;
  /** Lien d'outil quand l'étape n'a pas de leçon vidéo. */
  link?: { href: string; label: string };
};

export type ResourceLink = { href: string; label: string };

export type Resource = {
  /** Mot à commenter, en capitales. */
  word: string;
  slug: string;
  /** Slug de la page jumelle dans l'autre langue. */
  twinSlug: string;
  locale: ResourceLocale;
  metaTitle: string;
  metaDescription: string;
  title: string;
  titleGold: string;
  lede: string;
  case: {
    title: string;
    text: string;
    /** Vidéo du cas, ou à défaut une image fixe. */
    video?: ResourceVideo;
    image?: { src: string; alt: string };
    link?: ResourceLink;
  };
  steps: ResourceStep[];
  trap: { title: string; text: string };
  extra?: { title: string; text: string; link: ResourceLink };
  cta: {
    title: string;
    text: string;
    link: ResourceLink;
    /** Lien affilié : rel sponsored. */
    affiliate?: boolean;
    secondary?: ResourceLink;
  };
};
