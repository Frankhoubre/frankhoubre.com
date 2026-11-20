import type { ResourceLesson, ResourceVideo } from "./types";

/** Paramètres de suivi : on sait quel mot a amené le clic (aucune donnée personnelle). */
export function utm(url: string, word: string, locale: "fr" | "en"): string {
  const u = new URL(url);
  u.searchParams.set("utm_source", "instagram");
  u.searchParams.set("utm_medium", "manychat");
  u.searchParams.set("utm_campaign", `${word.toLowerCase()}-${locale}`);
  return u.toString();
}

export const SW_START_FR = "https://www.screenweaver.ai/fr/start";
export const SW_START_EN = "https://www.screenweaver.ai/start";
/** Lien affilié Higgsfield imposé par Frank le 14 nov. 2026 pour les reels et les DM. */
export const HIGGSFIELD_AFF = "https://higgsfield.ai/?fpr=frank70";

const SW = "https://www.screenweaver.ai";
const FR_COURSE = `${SW}/fr/academy/courses/realisez-votre-film-ia-screenweaver`;
const EN_FILM_COURSE = `${SW}/academy/courses/ai-filmmaking-course`;
const EN_SCRIPT_COURSE = `${SW}/academy/courses/screenwriting-course`;

export const ACADEMY_FR = FR_COURSE;
export const ACADEMY_EN_FILM = EN_FILM_COURSE;
export const ACADEMY_EN_SCRIPT = EN_SCRIPT_COURSE;

/** Leçons du cours FR « Réalisez votre film avec l'IA dans ScreenWeaver » (projet The Seam). */
const FR: Record<string, [string, string]> = {
  "importez-un-scenario-existant": ["6fsN6AjjNBs", "Importez un scénario que vous avez déjà"],
  "ecrivez-une-scene-au-format-pro": ["iOnE98WpOZ8", "Écrivez une scène au format pro"],
  "voyez-la-structure-de-votre-film": ["_dwXMGBXgBQ", "Voyez la structure de votre film d'un coup d'œil"],
  "marquez-le-rythme-et-le-ton": ["Y5Vb-hfnE1M", "Marquez le rythme et le ton de chaque scène"],
  "ecrivez-une-serie": ["EH3NvgTczzg", "Écrivez une série avec ses épisodes et ses actes"],
  "creez-vos-personnages-lieux-et-objets": ["Q6zl_kD6vks", "Créez vos personnages, lieux et objets"],
  "decrivez-un-personnage-pour-l-ia": ["t57r88G5c3Q", "Décrivez un personnage pour que l'IA le dessine toujours pareil"],
  "faites-relire-votre-scenario": ["z_5PkXGOEVw", "Faites relire votre scénario par l'assistant IA"],
  "choisissez-le-format-d-image-de-votre-film": ["mFMfeSQD6o8", "Choisissez le format d'image de votre film"],
  "generez-tout-votre-storyboard-en-une-fois": ["11MGOtMDr54", "Générez tout votre storyboard en une fois"],
  "decoupez-une-scene-avec-vos-propres-consignes": ["OugAm_XxxVE", "Découpez une scène avec vos propres consignes"],
  "choisissez-la-bonne-valeur-de-plan": ["jUcCrB2d1DU", "Choisissez la bonne valeur de plan"],
  "storyboard-reglez-le-mouvement-de-camera": ["MGJ2MXreRcQ", "Réglez le mouvement de caméra"],
  "changez-l-angle-de-camera-d-une-case": ["kA86DgrbY04", "Changez l'angle de caméra d'une case"],
  "ecrivez-l-action-d-un-plan-et-appelez-vos-personnages-avec-arobase": ["X1Rw7EO1OUE", "Écrivez l'action d'un plan et appelez vos personnages avec @"],
  "storyboard-generez-des-fiches-de-reference-qui-tiennent": ["CM8GCOipdiM", "Générez des fiches de référence qui tiennent"],
  "importez-un-storyboard-que-vous-avez-deja": ["Efig7xTglyc", "Importez un storyboard que vous avez déjà"],
  "branchez-screenweaver-a-claude-avec-le-mcp": ["k-MZpWfE7Kk", "Branchez ScreenWeaver à Claude avec le MCP"],
  "faites-travailler-claude-sur-votre-projet": ["9S2Ic3p-Ew4", "Faites travailler Claude sur votre projet"],
  "donnez-un-seul-style-a-tout-votre-film": ["So7TiZBaOWY", "Donnez un seul style à tout votre film"],
  "gardez-les-memes-visages-d-un-plan-a-l-autre": ["dBEOto3STBo", "Gardez les mêmes visages d'un plan à l'autre"],
  "choisissez-le-bon-modele-video": ["ymFrhRzD3pA", "Choisissez le bon modèle vidéo"],
  "faites-ecrire-vos-prompts-video-par-le-directeur-de-prompt": ["zGmRqjcTiaw", "Faites écrire vos prompts vidéo par le directeur de prompt"],
  "animez-directement-les-cases-du-storyboard": ["JfT0PRPjTG8", "Animez directement les cases du storyboard"],
  "production-recuperez-vos-rushs-pour-le-montage": ["wkZrZf2yDHo", "Récupérez vos rushs pour le montage"],
  "methode-lancez-votre-projet-de-a-a-z": ["zxV-lct8HLQ", "Lancez votre projet de A à Z, étape par étape"],
};

/** Leçons des deux cours EN (filmmaking et screenwriting). */
const EN: Record<string, [string, string, "film" | "script"]> = {
  "ai-slop-vs-ai-cinema-five-signatures": ["Roi8K_eNdPs", "AI Slop vs AI Cinema: What Professionals Do Differently", "film"],
  "visual-bible-ai-film-style": ["BtLXWE1lmnk", "Building Your Visual Bible: Style, Light and Lens", "film"],
  "consistent-ai-characters-reference-sheets": ["yVXpx3kzhBk", "Consistent Characters: Reference Sheets That Hold Across Every Shot", "film"],
  "shot-list-ai-film-breakdown": ["NatsxA-Cpz8", "Breaking Down Your Script into a Shot List", "film"],
  "choose-ai-video-model-for-each-shot": ["4CxmlP9VeVE", "Choosing the Right Video Model for Each Shot", "film"],
  "ai-video-prompts-like-a-director": ["KazCpVr0nlE", "Prompting Like a Director: Camera, Action, Performance", "film"],
  "reference-to-video-consistent-characters": ["r1dhKBNQdjs", "Reference-to-Video: Keeping Characters and Sets On Model", "film"],
  "fix-bad-ai-video-shots": ["1IHjS4Lrb6M", "Fixing Bad Shots: Repair, Reframe, Regenerate", "film"],
  "ai-storyboard-from-script-workshop": ["ujvGhf8DKeY", "Workshop, Part 1: Script & Storyboard, Step by Step", "film"],
  "storyboard-to-ai-video-production-workshop": ["HqrDx647oPw", "Workshop, Part 2: Production, Step by Step", "film"],
  "ai-anime-series-lost-garden-case-study": ["TH6KH7WcZBk", "Case Study: How Lost Garden Was Made", "film"],
  "ai-film-festivals-distribution-career": ["FY_O0hQczms", "Festivals, Distribution and Building Your AI Film Career", "film"],
  "logline-template-idea-premise-examples": ["ZlnhJ8B0vZQ", "Idea, Premise and Logline", "script"],
  "story-beats-explained-structure-labels": ["xlaCI-w_20o", "Story Beats Explained", "script"],
  "turn-outline-beats-into-scenes": ["AMcM8BfivOY", "From Beats to Scenes", "script"],
  "write-rewrite-scenes-with-ai": ["a7xDsEKlKw0", "Write and Rewrite Scenes with AI", "script"],
  "import-screenplay-pdf-final-draft": ["CHuYelS3dZY", "Import an Existing Script", "script"],
  "how-to-write-tv-series-episode": ["hLuoUDtT87o", "Writing a Series Episode", "script"],
  "how-to-write-vertical-short-drama": ["s53e4I8Bvys", "Writing a Short Drama", "script"],
  "character-descriptions-ai-storyboard": ["OFXlSxRUV-w", "Story Elements, Straight from Your Script", "script"],
};

export function lessonFr(slug: string): ResourceLesson {
  const entry = FR[slug];
  if (!entry) throw new Error(`Leçon FR inconnue : ${slug}`);
  return { youtubeId: entry[0], title: entry[1], href: `${FR_COURSE}/${slug}` };
}

export function lessonEn(slug: string): ResourceLesson {
  const entry = EN[slug];
  if (!entry) throw new Error(`Unknown EN lesson: ${slug}`);
  const course = entry[2] === "film" ? EN_FILM_COURSE : EN_SCRIPT_COURSE;
  return { youtubeId: entry[0], title: entry[1], href: `${course}/${slug}` };
}

/** Une leçon montrée en vidéo principale (le cas). */
export function lessonVideo(lesson: ResourceLesson, caption: string, meta?: string): ResourceVideo {
  return { provider: "youtube", id: lesson.youtubeId, title: lesson.title, caption, meta };
}

/** The Seam, 5 min 14, fait entièrement dans ScreenWeaver (Vimeo public). */
export function theSeam(caption: string): ResourceVideo {
  return {
    provider: "vimeo",
    id: "1242418559",
    title: "The Seam",
    poster:
      "https://i.vimeocdn.com/video/2221045018-2a983c77bd15df41a2e30c4d6f65de43dda6317fa83d4274910bd102d0d2b2c9-d_1280x720",
    caption,
    meta: "5 min 14",
  };
}

export function lostGardenEp2(caption: string): ResourceVideo {
  return {
    provider: "youtube",
    id: "z-YRrutXaFE",
    title: "Lost Garden, The King Beneath the Vault, Episode 2",
    caption,
    meta: "21 min",
  };
}

/** Visuels « avant / après » (public/images/ressources). */
const R = "/images/ressources";
export const IMG = {
  storyboard40: `${R}/seam-storyboard-40.webp`,
  casePlaine: `${R}/seam-case-plaine.webp`,
  planPlaine: `${R}/seam-plan-film.webp`,
  caseInsert: `${R}/seam-case-insert.webp`,
  ficheStitcher: `${R}/seam-fiche-stitcher.webp`,
  stillDome: `${R}/seam-still-dome.webp`,
  stillDechirure: `${R}/seam-still-dechirure.webp`,
  stillPlaine: `${R}/seam-still-plaine.webp`,
  stillCoeur: `${R}/seam-still-coeur.webp`,
  imaginariumPlanche: `${R}/imaginarium-case.webp`,
  imaginariumAnime: `${R}/imaginarium-anime.webp`,
  mcpCroquis: `${R}/mcp-croquis.webp`,
  mcpPlan: `${R}/mcp-plan.webp`,
  serieVerticale: `${R}/serie-verticale.webp`,
} as const;

/** Les premières lignes du vrai scénario de The Seam (en anglais dans le projet). */
export const SEAM_SCRIPT = [
  "EXT. THE FABRIC PLAIN - DAY",
  "A pale world made of cloth. Quilted hills of charcoal wool roll toward a tiny wooden house. A long black tear runs across the ivory ground.",
  "Far away, a thin figure in a black coat: THE STITCHER.",
];
