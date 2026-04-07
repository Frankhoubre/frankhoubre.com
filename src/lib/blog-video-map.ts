import type { Post } from "@/lib/blog";

const DEFAULT_VIDEO_IDS = [
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
  "comment-creer-une-video-cinematique-avec-l-ia-etape-par-etape":
    "TBBkUSFAGSU",
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
};

export function getRecommendedYouTubeVideoId(post: Post): string {
  const fromMap = VIDEO_BY_SLUG[post.slug];
  if (fromMap) return fromMap;

  let hash = 0;
  for (const c of post.slug) hash += c.charCodeAt(0);
  return DEFAULT_VIDEO_IDS[hash % DEFAULT_VIDEO_IDS.length];
}
