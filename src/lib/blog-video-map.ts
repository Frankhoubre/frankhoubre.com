import type { Post } from "@/lib/blog";

/** Référence récurrente dans les articles (chaîne Business Dynamite) — préférée pour l’embed principal quand elle est citée. */
export const CANONICAL_CHANNEL_VIDEO_ID = "KJbLaSGOPPk";

const DEFAULT_VIDEO_IDS = [
  CANONICAL_CHANNEL_VIDEO_ID,
  "60RXHCo3d84",
  "x1avmtj3Gyc",
  "TBBkUSFAGSU",
  "MKefYergHoA",
  "Jm_PEEWPTsY",
  "z22_SY0SOi4",
];

const VIDEO_BY_SLUG: Record<string, string> = {
  "comment-obtenir-rendu-cinema-avec-seedance-2": "60RXHCo3d84",
  "workflow-complet-idee-film-ia-realiste": "x1avmtj3Gyc",
  "comment-creer-video-cinematique-ia-etape-par-etape": "TBBkUSFAGSU",
  "comment-transformer-image-ia-video-fluide-credible": "G8vvBNPslDY",
  "comment-ameliorer-realisme-mouvements-video-ia": "H9rVqbLLljc",
  "comment-structurer-video-ia-comme-vrai-film": "03YtZqcE6ro",
  "creer-court-metrage-100-ia-sans-camera-acteurs": "vx45CFB2wKk",
  "pourquoi-mes-videos-ia-ont-l-air-fake-comment-rendre-realistes":
    "TBBkUSFAGSU",
  "comment-creer-pub-video-avec-ia-comme-agence-pro": "dssWAnF1caQ",
  "comment-ecrire-script-efficace-video-generee-par-ia": "W3ygk9QJ4ks",
  "screenweaver-ai-ecriture-scenario-storyboard": "XwgBGThPyjM",
  "prompt-chatgpt": "Jm_PEEWPTsY",
  "pourquoi-ton-prompt-ne-marche-pas-comment-corriger": "bshuJgY3zUM",
  "comment-ecrire-prompt-cinematic-ultra-realiste-ia": "bshuJgY3zUM",
  "comment-ecrire-prompt-personnage-realiste-constant": "MKefYergHoA",
  "comment-controler-style-visuel-generation-ia": "2p1XkRvT560",
  "flux-vs-sdxl-quelle-ia-choisir-images-realistes": "z22_SY0SOi4",
  "comment-generer-images-ia-photoréalistes-sans-effet-plastique":
    "MKefYergHoA",
  "erreurs-prompt-qui-rendent-image-ia-artificielle": "bshuJgY3zUM",
  "comment-creer-portrait-ia-digne-film": "2p1XkRvT560",
  "comment-creer-univers-visuel-coherent-avec-ia": "MKefYergHoA",
  "comment-generer-scene-realiste-profondeur-champ": "MKefYergHoA",
  "comment-creer-scenes-coherentes-plusieurs-plans-ia": "03YtZqcE6ro",
  "comment-utiliser-objectifs-camera-dans-prompt-ia": "MKefYergHoA",
  "comment-simuler-objectif-anamorphique-generation-ia": "MKefYergHoA",
  "comment-decrire-lumiere-directeur-photo-prompt": "MKefYergHoA",
  "comment-creer-lumieres-naturelles-image-ia": "MKefYergHoA",
  "comment-creer-ambiance-sombre-cinematique-avec-ia": "2p1XkRvT560",
  "pourquoi-images-ia-manquent-contraste-comment-corriger": "2p1XkRvT560",
  "comment-ajouter-grain-cinema-image-ia": "2p1XkRvT560",
  "comment-ameliorer-texture-peau-image-ia": "2p1XkRvT560",
  "comment-eviter-visages-deformes-generation-ia": "2p1XkRvT560",
  "dzine-ia": "59dem68lFNo",
  "meilleur-generateur-image-ia-gratuit": "z22_SY0SOi4",
  "midjourney-vs-dalle-3-concept-art": "MKefYergHoA",
  "personnages-coherents-plusieurs-images-ia": "2p1XkRvT560",
  "photos-hyper-realistes-ia": "bshuJgY3zUM",
  "secrets-prompts-rendu-photographique-ia": "bshuJgY3zUM",
  "creation-logo-ia-outils-gratuits-astuces": "dssWAnF1caQ",
  "croquis-en-chef-d-oeuvre-ia": "G8vvBNPslDY",
  "generateur-image-ia-sans-inscription": "z22_SY0SOi4",
  "canva-ia-creation-visuels-rapides": "W3ygk9QJ4ks",
  "droits-auteur-images-generees-ia": "03YtZqcE6ro",
  "textures-3d-intelligence-artificielle": "x1avmtj3Gyc",
  "ia-photographie-retouche-inpainting-generation": "60RXHCo3d84",
  "illustrations-manga-anime-ia": "MKefYergHoA",
  "vendre-images-generees-ia-legalite": "dssWAnF1caQ",
  "stable-diffusion-installation-debutants": "z22_SY0SOi4",
  "pourquoi-images-ia-floues-comment-corriger": "bshuJgY3zUM",
  "pourquoi-videos-ia-manquent-de-realisme": "TBBkUSFAGSU",
  "pourquoi-personnages-changent-chaque-scene-ia": "MKefYergHoA",
  "comment-corriger-mauvais-lighting-ia": "2p1XkRvT560",
  "comment-eviter-rendu-cartoon-non-voulu-ia": "MKefYergHoA",
  "pourquoi-rendu-ia-manque-de-profondeur": "60RXHCo3d84",
  "comment-corriger-mauvaise-composition-visuelle-ia": "03YtZqcE6ro",
  "comment-rendre-scene-ia-plus-credible": "x1avmtj3Gyc",
  "comment-eviter-effet-image-generee-ia": "bshuJgY3zUM",
  "comment-passer-rendu-amateur-a-cinema-ia": "TBBkUSFAGSU",
  "topaz-video-ai-test-avis-restauration-video": "60RXHCo3d84",
};

export function getRecommendedYouTubeVideoId(post: Post): string {
  const fromMap = VIDEO_BY_SLUG[post.slug];
  if (fromMap) return fromMap;

  let hash = 0;
  for (const c of post.slug) hash += c.charCodeAt(0);
  return DEFAULT_VIDEO_IDS[hash % DEFAULT_VIDEO_IDS.length];
}

/**
 * ID pour le lecteur en tête d’article : entrée dédiée par slug si présente,
 * sinon la vidéo canonique du site si elle est citée dans le texte (souvent la seule fiable en embed),
 * sinon la première URL YouTube dans l’ordre de lecture.
 */
export function getHeroYouTubeVideoId(post: Post, contentIds: string[]): string {
  const mapped = VIDEO_BY_SLUG[post.slug];
  if (mapped) return mapped;
  if (contentIds.length === 0) return getRecommendedYouTubeVideoId(post);
  if (contentIds.includes(CANONICAL_CHANNEL_VIDEO_ID))
    return CANONICAL_CHANNEL_VIDEO_ID;
  return contentIds[0];
}
