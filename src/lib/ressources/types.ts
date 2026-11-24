/**
 * Pages « ressources » : une page par sujet de reel (Frank Houbre en français,
 * Frank Houbre AI en anglais). Chaque page vend un résultat : elle montre
 * l'état de départ (A), l'état d'arrivée (B), la preuve, puis le chemin.
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

/** Ce qu'on voit dans une case « avant » ou « après ». */
export type ResourceTile =
  | { kind: "image"; src: string; alt: string; fit?: "contain"; position?: string }
  /** Matière brute : une idée, une description, une phrase. */
  | { kind: "note"; text: string }
  /** Une page de scénario au format pro. */
  | { kind: "script"; lines: string[] };

export type ResourceState = {
  /** L'état en une phrase courte. */
  title: string;
  points: string[];
  tile: ResourceTile;
};

/** Une illustration du gabarit court : image réelle ou schéma dessiné en code. */
export type ResourceArt =
  | {
      kind: "image";
      src: string;
      alt: string;
      /** Proportions du cadre, en CSS : « 16 / 9 », « 4 / 5 ». */
      aspect: string;
      position?: string;
      /** Image verticale : cadre plus étroit. */
      narrow?: boolean;
    }
  /** Matière brute : une idée, une description, une phrase. */
  | { kind: "note"; text: string }
  /** Une page de scénario au format pro. */
  | { kind: "script"; lines: string[] }
  /** Le plan en grand (et sa version verticale), puis la timeline des plans. */
  | {
      kind: "timeline";
      main: { src: string; alt: string };
      /** Cadrage de la version 9:16 du même plan ; absent = pas de version verticale. */
      vertical?: string;
      thumbs: { src: string; alt: string }[];
      selected: number;
    }
  /** Des blocs reliés, le dernier mis en avant. Un bloc porte une image ou un texte. */
  | {
      kind: "flow";
      nodes: { label: string; src?: string; alt?: string; position?: string; text?: string }[];
      /** false : blocs posés côte à côte, sans lien ni bouton lecture. */
      link?: boolean;
    }
  /** Des cartes courtes : épisodes, scènes, réglages. */
  | { kind: "cards"; items: { text: string; tag?: string; on?: boolean }[] }
  /** Un échange avec l'assistant. */
  | { kind: "chat"; user: string; reply: string };

/**
 * Version courte et visuelle de la page : la transformation en ouverture,
 * puis une illustration et une phrase par étape, puis l'appel. Aucune vidéo.
 * Quand ce bloc existe, il remplace le gabarit long.
 */
export type ResourceVisual = {
  title: string;
  titleGold: string;
  lede: string;
  before: { label: string; art: ResourceArt };
  after: { label: string; art: ResourceArt };
  steps: { title: string; text: string; art: ResourceArt }[];
  cta: { title: string; text: string };
};

export type Resource = {
  /** Mot commenté sous le reel (sert au suivi, jamais affiché tel quel). */
  word: string;
  /** Nom du sujet affiché sur la page : « Storyboard », « Série verticale ». */
  label: string;
  slug: string;
  /** Slug de la page jumelle dans l'autre langue. */
  twinSlug: string;
  locale: ResourceLocale;
  metaTitle: string;
  metaDescription: string;
  title: string;
  titleGold: string;
  lede: string;
  /** Image de fond de l'ouverture. */
  hero?: { src: string; position?: string };
  from: ResourceState;
  to: ResourceState;
  case: {
    title: string;
    text: string;
    /** Vidéo du cas, ou à défaut une image fixe. */
    video?: ResourceVideo;
    image?: { src: string; alt: string };
    link?: ResourceLink;
  };
  steps: ResourceStep[];
  visual?: ResourceVisual;
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
