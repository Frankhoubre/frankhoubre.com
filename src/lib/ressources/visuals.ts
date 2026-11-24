import { IMG, SEAM_SCRIPT } from "./links";
import type { ResourceArt, ResourceLocale, ResourceVisual } from "./types";

/**
 * Gabarit court de chaque page ressource : la transformation en ouverture,
 * puis une illustration et une phrase par étape. Chaque étape dit ce que
 * l'outil fait pour la personne. Aucune vidéo, aucun prix.
 * Clé : le slug de la page dans sa langue.
 */

const HF = "/images/blog/higgsfield-avis-realisateur";

function img(src: string, alt: string, aspect = "16 / 10", extra: { position?: string; narrow?: boolean } = {}): ResourceArt {
  return { kind: "image", src, alt, aspect, ...extra };
}

const WIDE = "1920 / 804";

/* ------------------------------------------------------------------ */
/* Français                                                             */
/* ------------------------------------------------------------------ */

const FR: Record<string, ResourceVisual> = {
  storyboard: {
    title: "Transformez votre script",
    titleGold: "en storyboard.",
    lede: "Voici comment faire, en quatre étapes.",
    before: { label: "Votre script", art: { kind: "script", lines: SEAM_SCRIPT } },
    after: { label: "Votre storyboard", art: img(IMG.storyboard40, "Les 40 cases du storyboard de The Seam") },
    steps: [
      {
        title: "Déposez votre script",
        text: "Collez-le ou importez le fichier dans ScreenWeaver. Vous pouvez aussi l'écrire sur place : la mise en page pro se fait toute seule.",
        art: { kind: "script", lines: SEAM_SCRIPT },
      },
      {
        title: "Vos personnages sortent du texte",
        text: "ScreenWeaver repère les personnages, les lieux et les objets de votre script, et dessine une fiche pour chacun.",
        art: img(IMG.ficheStitcher, "La fiche de référence du Stitcher : face, trois quarts, profil, dos"),
      },
      {
        title: "Générez tout le storyboard d'un coup",
        text: "Chaque scène est découpée en plans, chaque plan est dessiné, avec les mêmes visages du premier au dernier.",
        art: {
          kind: "timeline",
          main: { src: IMG.casePlaine, alt: "Une case du storyboard : la plaine de tissu et le Stitcher" },
          selected: 0,
          thumbs: [
            { src: IMG.casePlaine, alt: "Plan 1 : la plaine" },
            { src: IMG.caseInsert, alt: "Plan 2 : les mains et l'aiguille" },
            { src: IMG.stillCoeur, alt: "Plan 3 : le cœur" },
            { src: IMG.stillDome, alt: "Plan 4 : le dôme" },
          ],
        },
      },
      {
        title: "Reprenez la main, plan par plan",
        text: "Un cadrage à changer, une action à réécrire ? Vous régénérez la case, le reste du film ne bouge pas.",
        art: {
          kind: "flow",
          link: false,
          nodes: [
            { label: "Plan large", src: IMG.casePlaine, alt: "La plaine en plan large", position: "0% 100%" },
            { label: "Insert", src: IMG.caseInsert, alt: "Les mains du Stitcher en insert" },
          ],
        },
      },
    ],
    cta: {
      title: "Votre film n'attend que son premier plan.",
      text: "Tout se fait dans ScreenWeaver, à partir de votre script.",
    },
  },

  script: {
    title: "Transformez votre idée",
    titleGold: "en scénario.",
    lede: "Voici comment faire, en trois étapes.",
    before: {
      label: "Votre idée",
      art: { kind: "note", text: "Un recouseur passe sa vie à fermer les déchirures d'un monde de tissu. Et après ?" },
    },
    after: { label: "Votre scénario", art: { kind: "script", lines: SEAM_SCRIPT } },
    steps: [
      {
        title: "Écrivez, la mise en page suit",
        text: "Dans ScreenWeaver, vous tapez votre histoire et le format pro se fait tout seul : scènes, personnages, dialogues.",
        art: { kind: "script", lines: SEAM_SCRIPT },
      },
      {
        title: "Voyez tout votre film sur une ligne",
        text: "Un label par scène, et ScreenWeaver vous montre la structure entière : là où l'histoire avance, là où elle traîne.",
        art: {
          kind: "cards",
          items: [
            { text: "La plaine de tissu", tag: "Ouverture" },
            { text: "La première déchirure", tag: "Déclencheur", on: true },
            { text: "Le cœur", tag: "Point de bascule" },
            { text: "Le dôme", tag: "Fin" },
          ],
        },
      },
      {
        title: "Faites relire par l'IA",
        text: "Elle pointe les longueurs et propose des réécritures, scène par scène. La décision reste la vôtre.",
        art: {
          kind: "chat",
          user: "Relis la scène 2. Où est-ce que ça traîne ?",
          reply: "Le dialogue répète ce que l'image montre déjà. Voici une version plus courte.",
        },
      },
    ],
    cta: {
      title: "La première page est la plus dure. Écrivez-la aujourd'hui.",
      text: "L'écriture du script est gratuite dans ScreenWeaver.",
    },
  },

  film: {
    title: "Transformez votre storyboard",
    titleGold: "en court métrage.",
    lede: "Voici comment faire, en quatre étapes.",
    before: { label: "Votre case", art: img(IMG.casePlaine, "Une case du storyboard de The Seam : la plaine de tissu") },
    after: { label: "Votre plan filmé", art: img(IMG.planPlaine, "Le même plan dans le film The Seam") },
    steps: [
      {
        title: "Un seul style pour tout le film",
        text: "Vous réglez la direction artistique une fois. ScreenWeaver l'applique à chaque image, de la première à la dernière.",
        art: {
          kind: "timeline",
          main: { src: IMG.stillDome, alt: "The Seam : le dôme de tissu" },
          selected: 3,
          thumbs: [
            { src: IMG.stillPlaine, alt: "La plaine" },
            { src: IMG.stillDechirure, alt: "La déchirure" },
            { src: IMG.stillCoeur, alt: "Le cœur" },
            { src: IMG.stillDome, alt: "Le dôme" },
          ],
        },
      },
      {
        title: "Les mêmes visages dans chaque plan",
        text: "Une fiche par personnage, attachée à chaque plan. Et vous la retouchez avec l'IA quand vous voulez.",
        art: img(IMG.ficheStitcher, "La fiche de référence du Stitcher"),
      },
      {
        title: "Générez toutes vos vidéos",
        text: "ScreenWeaver prépare la chaîne de production de chaque plan. Vous la lancez, vous la modifiez si vous voulez, et vos vidéos sortent.",
        art: {
          kind: "flow",
          nodes: [
            { label: "Vos fiches", src: IMG.ficheStitcher, alt: "La fiche du Stitcher", position: "12% 50%" },
            { label: "Votre case", src: IMG.casePlaine, alt: "La case du storyboard", position: "0% 100%" },
            { label: "Votre vidéo", src: IMG.planPlaine, alt: "Le plan filmé", position: "0% 100%" },
          ],
        },
      },
      {
        title: "Récupérez vos rushs, montez",
        text: "Tous les plans d'une scène sortent ensemble, prêts pour votre logiciel de montage.",
        art: img(IMG.stillDechirure, "The Seam : la déchirure qui s'ouvre sur la lumière", WIDE),
      },
    ],
    cta: {
      title: "Le prochain film dont on parle peut être le vôtre.",
      text: "Tout se fait dans ScreenWeaver, du script à la vidéo.",
    },
  },

  anime: {
    title: "Transformez votre univers",
    titleGold: "en série animée.",
    lede: "Voici comment faire, en quatre étapes.",
    before: {
      label: "Votre univers",
      art: { kind: "note", text: "Un sanctuaire, un roi enfoui sous une voûte, des héros que je vois très bien. Dans ma tête." },
    },
    after: { label: "Votre épisode", art: img(IMG.lgLanterne, "Lanterne, héros de la série animée Lost Garden", "1200 / 515") },
    steps: [
      {
        title: "Écrivez épisode par épisode",
        text: "Dans ScreenWeaver, un projet Série range tous vos épisodes et toutes vos scènes au même endroit.",
        art: {
          kind: "cards",
          items: [
            { text: "Épisode 1", tag: "En cours d'écriture", on: true },
            { text: "Épisode 2" },
            { text: "Épisode 3" },
            { text: "Épisode 4" },
          ],
        },
      },
      {
        title: "Fixez le style une fois",
        text: "Le trait, la palette, la lumière : vous les réglez une fois, ScreenWeaver les applique à toutes les images de la série.",
        art: {
          kind: "timeline",
          main: { src: IMG.lgTombeau, alt: "Lost Garden : Lanterne endormi sur son tombeau" },
          selected: 0,
          thumbs: [
            { src: IMG.lgTombeau, alt: "Le tombeau" },
            { src: IMG.lgRosace, alt: "La rosace" },
            { src: IMG.lgFille, alt: "La fille aux cheveux roses" },
            { src: IMG.lgPrairie, alt: "La prairie de lys" },
          ],
        },
      },
      {
        title: "Vos personnages ne changent plus",
        text: "Une fiche par personnage : de face, de profil, de dos. Et vous la retouchez avec l'IA quand vous voulez.",
        art: img(IMG.lgFiche, "La fiche de référence de Lanterne : face, profil, dos", "1128 / 630"),
      },
      {
        title: "Générez toutes vos vidéos",
        text: "ScreenWeaver prépare la chaîne de production de chaque plan. Vous la lancez, vous la modifiez si vous voulez, et vos vidéos sortent.",
        art: {
          kind: "flow",
          nodes: [
            { label: "Vos fiches", src: IMG.lgFiche, alt: "La fiche de Lanterne", position: "0% 50%" },
            { label: "Votre plan", src: IMG.lgLanterne, alt: "Le plan de Lanterne" },
            { label: "Votre vidéo", src: IMG.lgTombeau, alt: "Un plan animé de Lost Garden" },
          ],
        },
      },
    ],
    cta: {
      title: "Votre univers mérite son premier épisode.",
      text: "Tout se fait dans ScreenWeaver, de l'écriture à la vidéo.",
    },
  },

  webtoon: {
    title: "Transformez votre webtoon",
    titleGold: "en animé.",
    lede: "Voici comment faire, en quatre étapes.",
    before: {
      label: "Votre case",
      art: img(IMG.imaginariumPlanche, "Une case du webtoon Imaginarium : Lucy tient une orange, bulles de dialogue"),
    },
    after: { label: "Votre plan animé", art: img(IMG.webtoonPlanAnime, "Lucy en animé, devant une plaine en feu", "16 / 9") },
    steps: [
      {
        title: "Déposez votre épisode",
        text: "Un PDF ou vos images, directement dans ScreenWeaver. Ou depuis Claude, connecté à ScreenWeaver par son MCP.",
        art: img(IMG.webtoonPlanche, "Une page du webtoon Imaginarium, avec ses cases et ses bulles", "4 / 5", { position: "top", narrow: true }),
      },
      {
        title: "Vos cases deviennent des plans",
        text: "ScreenWeaver redessine chaque case en 16:9 ou en 9:16 et la pose sur une timeline. Vous voyez tout votre épisode, plan par plan.",
        art: {
          kind: "timeline",
          main: { src: IMG.webtoonPlanAnime, alt: "Le plan de Lucy, redessiné depuis sa case" },
          vertical: "24% 50%",
          selected: 1,
          thumbs: [
            { src: IMG.webtoonPlanPlaine, alt: "Plan 1 : la plaine en feu" },
            { src: IMG.webtoonPlanAnime, alt: "Plan 2 : Lucy" },
            { src: IMG.webtoonPlanDirigeables, alt: "Plan 3 : les dirigeables touchés" },
            { src: IMG.webtoonPlanRegard, alt: "Plan 4 : le regard de Lucy" },
          ],
        },
      },
      {
        title: "Vos personnages restent les vôtres",
        text: "Une fiche par personnage, tirée de vos dessins : le même visage d'un plan à l'autre. Et vous les retouchez avec l'IA quand vous voulez.",
        art: img(IMG.webtoonFiches, "Les fiches de référence de Lucy et d'Ethan", "6 / 7", { narrow: true }),
      },
      {
        title: "Générez toutes vos vidéos",
        text: "ScreenWeaver prépare la chaîne de production de chaque plan. Vous la lancez, vous la modifiez si vous voulez, et vos vidéos sortent.",
        art: {
          kind: "flow",
          nodes: [
            { label: "Vos fiches", src: IMG.webtoonFiches, alt: "La fiche de référence de Lucy", position: "50% 0%" },
            { label: "Votre plan", src: IMG.webtoonPlanAnime, alt: "Le plan de Lucy dans le storyboard", position: "22% 50%" },
            { label: "Votre vidéo", src: IMG.webtoonPlanAnime, alt: "Le même plan devenu une vidéo", position: "62% 50%" },
          ],
        },
      },
    ],
    cta: {
      title: "Vos lecteurs attendent l'animé. Donnez-leur le pilote.",
      text: "Tout se fait dans ScreenWeaver, à partir de vos planches.",
    },
  },

  serie: {
    title: "Transformez votre histoire",
    titleGold: "en série verticale.",
    lede: "Voici comment faire, en trois étapes.",
    before: {
      label: "Votre histoire",
      art: { kind: "note", text: "Une histoire de deux heures, racontée d'une traite, pour un écran de cinéma." },
    },
    after: {
      label: "Votre épisode 1",
      art: img(IMG.serieVerticale, "Image verticale d'un short drama : une femme sous un parapluie jaune, rue de néons", "4 / 5", {
        position: "center 30%",
        narrow: true,
      }),
    },
    steps: [
      {
        title: "Posez la grille de vos épisodes",
        text: "Combien d'épisodes, quelle durée, où tombe chaque retournement : le planificateur gratuit de ScreenWeaver le pose pour vous.",
        art: {
          kind: "cards",
          items: [
            { text: "Épisode 1", tag: "La rencontre" },
            { text: "Épisode 2", tag: "Le mensonge" },
            { text: "Épisode 3", tag: "Le retournement", on: true },
            { text: "Épisode 4", tag: "La fuite" },
          ],
        },
      },
      {
        title: "Finissez chaque épisode sur une question",
        text: "Un label sur la scène de fin, et ScreenWeaver vous montre d'un coup d'œil les épisodes qui finissent à plat.",
        art: {
          kind: "cards",
          items: [
            { text: "Elle ouvre la lettre", tag: "Scène 4" },
            { text: "Il n'est pas celui qu'elle croit", tag: "Fin d'épisode", on: true },
          ],
        },
      },
      {
        title: "Passez tout le projet en 9:16",
        text: "Un réglage, et chaque plan se cadre pour le téléphone, avec les mêmes visages d'un épisode à l'autre.",
        art: img(IMG.serieVerticale, "Un plan vertical : une femme sous un parapluie jaune", "9 / 14", { narrow: true }),
      },
    ],
    cta: {
      title: "Votre épisode 1 peut exister cette semaine.",
      text: "Tout se fait dans ScreenWeaver, de la grille des épisodes au storyboard vertical.",
    },
  },

  personnage: {
    title: "Gardez le même personnage",
    titleGold: "dans tous vos plans.",
    lede: "Voici comment faire, en trois étapes.",
    before: {
      label: "Votre description",
      art: { kind: "note", text: "Un homme en manteau noir, l'air triste et mystérieux." },
    },
    after: { label: "Votre personnage", art: img(IMG.ficheStitcher, "La fiche de référence du Stitcher : face, trois quarts, profil, dos") },
    steps: [
      {
        title: "Décrivez ce que la caméra voit",
        text: "ScreenWeaver repère vos personnages dans le script. Il vous reste à décrire le visage, les signes distinctifs, les vêtements.",
        art: { kind: "note", text: "Tête de tissu blanc, couture noire sur un œil, long manteau noir à pièce rouge." },
      },
      {
        title: "Générez sa fiche",
        text: "De face, de profil, de dos. Vous la retouchez avec l'IA jusqu'à ce qu'elle soit juste : tout le film s'appuie dessus.",
        art: img(IMG.ficheStitcher, "La fiche du Stitcher"),
      },
      {
        title: "Appelez-le avec @ dans chaque plan",
        text: "Tapez @ et son nom dans l'action du plan : ScreenWeaver attache sa fiche à la case. Le visage ne change plus.",
        art: {
          kind: "flow",
          nodes: [
            { label: "Sa fiche", src: IMG.ficheStitcher, alt: "La fiche du Stitcher", position: "12% 50%" },
            { label: "Un plan", src: IMG.caseInsert, alt: "Les mains du Stitcher" },
            { label: "Un autre plan", src: IMG.casePlaine, alt: "Le Stitcher sur la plaine", position: "0% 100%" },
          ],
        },
      },
    ],
    cta: {
      title: "Donnez un visage à votre héros. Un seul.",
      text: "Tout se fait dans ScreenWeaver, à partir de votre script.",
    },
  },

  camera: {
    title: "Donnez une intention",
    titleGold: "à chaque plan.",
    lede: "Voici comment faire, en trois étapes.",
    before: { label: "Une belle image", art: img(IMG.casePlaine, "Un plan large : la plaine de tissu et le Stitcher minuscule") },
    after: { label: "Une mise en scène", art: img(IMG.caseInsert, "Un insert : les mains du Stitcher, l'aiguille et le fil rouge") },
    steps: [
      {
        title: "Choisissez la valeur de plan",
        text: "Dix valeurs dans ScreenWeaver, du très gros plan au plan d'ensemble. Un clic par plan, et le dessin suit.",
        art: {
          kind: "flow",
          link: false,
          nodes: [
            { label: "Plan d'ensemble", src: IMG.stillDome, alt: "Le dôme en plan d'ensemble" },
            { label: "Insert", src: IMG.caseInsert, alt: "Les mains en insert" },
          ],
        },
      },
      {
        title: "Changez l'angle sans tout refaire",
        text: "Plongée, contre-plongée, recadrage : ScreenWeaver redessine la même case vue autrement, sans réécrire le plan.",
        art: img(IMG.stillDechirure, "The Seam : la déchirure vue de près", WIDE),
      },
      {
        title: "Faites écrire le prompt vidéo",
        text: "Le directeur de prompt lit vos plans, leur valeur, leur mouvement, et écrit le prompt pour le modèle vidéo.",
        art: {
          kind: "flow",
          nodes: [
            { label: "Votre plan", src: IMG.casePlaine, alt: "La case de la plaine", position: "0% 100%" },
            { label: "Le prompt", text: "Plan large. Travelling avant, lent, vers la silhouette." },
            { label: "Votre vidéo", src: IMG.planPlaine, alt: "Le plan filmé", position: "0% 100%" },
          ],
        },
      },
    ],
    cta: {
      title: "Vous avez l'œil. Donnez-lui une caméra.",
      text: "Tout se règle dans ScreenWeaver, plan par plan.",
    },
  },

  mcp: {
    title: "Transformez vos croquis",
    titleGold: "en film.",
    lede: "Voici comment faire, en trois étapes.",
    before: { label: "Votre croquis", art: img(IMG.mcpCroquisReveil, "Un croquis au crayon : un personnage endormi, son réveil qui sonne", "330 / 138") },
    after: { label: "Votre plan", art: img(IMG.mcpPlan, "Le plan généré à partir du croquis : une souris réveillée par son réveil", "674 / 372", { position: "bottom" }) },
    steps: [
      {
        title: "Branchez ScreenWeaver à Claude",
        text: "Un lien à coller dans Claude ou ChatGPT. Pas de clé API, pas d'installation.",
        art: {
          kind: "flow",
          nodes: [
            { label: "Votre assistant", text: "Claude ou ChatGPT" },
            { label: "Votre projet", text: "ScreenWeaver" },
          ],
        },
      },
      {
        title: "Donnez-lui votre matière",
        text: "Un croquis, un roman, un webtoon. Votre assistant écrit le script, crée les personnages et découpe les plans dans ScreenWeaver.",
        art: {
          kind: "chat",
          user: "Voici ma page de croquis. Fais-en un storyboard.",
          reply: "C'est fait. Les plans sont dans votre projet, avec leurs personnages.",
        },
      },
      {
        title: "Ouvrez le projet, générez",
        text: "Tout est déjà rangé dans ScreenWeaver : scènes, personnages, plans. Il vous reste à lancer les images.",
        art: img(IMG.mcpPlan, "Le plan généré : une souris dans son lit", "674 / 372", { position: "bottom" }),
      },
    ],
    cta: {
      title: "Ce roman que vous rêvez d'adapter : commencez ce soir.",
      text: "Créez votre compte ScreenWeaver, puis branchez Claude ou ChatGPT.",
    },
  },

  outil: {
    title: "Testez le nouveau modèle",
    titleGold: "sur vos propres plans.",
    lede: "Voici comment faire, en quatre étapes.",
    before: { label: "La démo", art: { kind: "note", text: "Ce modèle change tout." } },
    after: { label: "Votre verdict", art: { kind: "note", text: "Sur mon plan, le second garde le visage. Je garde le second." } },
    steps: [
      {
        title: "Partez d'une image à vous",
        text: "Dans Higgsfield, déposez une image que vous connaissez par cœur. Vous verrez tout de suite ce que le modèle en fait.",
        art: img(`${HF}/hero.webp`, "Une réalisatrice penchée sur un storyboard, dans une rue pavée", "16 / 9"),
      },
      {
        title: "Lancez le même plan sur deux modèles",
        text: "Higgsfield réunit les modèles vidéo au même endroit. Même image, même consigne : la comparaison devient honnête.",
        art: {
          kind: "cards",
          items: [
            { text: "Modèle A", tag: "Même image, même consigne" },
            { text: "Modèle B", tag: "Même image, même consigne", on: true },
          ],
        },
      },
      {
        title: "Réglez la caméra",
        text: "Dans Cinema Studio, vous choisissez la caméra, l'objectif, l'ouverture et l'étalonnage, comme sur un plateau.",
        art: {
          kind: "cards",
          items: [{ text: "Caméra" }, { text: "Objectif", on: true }, { text: "Ouverture" }, { text: "Étalonnage" }],
        },
      },
      {
        title: "Gardez le meilleur plan",
        text: "Le plan retenu part au montage. Le script, les personnages et le storyboard, je les prépare en amont dans ScreenWeaver.",
        art: {
          kind: "flow",
          nodes: [
            { label: "Vos essais", text: "Modèle A, modèle B" },
            { label: "Votre film", text: "Le plan retenu" },
          ],
        },
      },
    ],
    cta: {
      title: "Arrêtez de regarder les démos. Faites la vôtre.",
      text: "Lien affilié : il soutient mon travail, sans surcoût pour vous.",
    },
  },
};

/* ------------------------------------------------------------------ */
/* English                                                              */
/* ------------------------------------------------------------------ */

const EN: Record<string, ResourceVisual> = {
  storyboard: {
    title: "Turn your script",
    titleGold: "into a storyboard.",
    lede: "Here is how, in four steps.",
    before: { label: "Your script", art: { kind: "script", lines: SEAM_SCRIPT } },
    after: { label: "Your storyboard", art: img(IMG.storyboard40, "The 40 panels of The Seam's storyboard") },
    steps: [
      {
        title: "Drop in your script",
        text: "Paste it or import the file into ScreenWeaver. You can also write it there: the pro formatting takes care of itself.",
        art: { kind: "script", lines: SEAM_SCRIPT },
      },
      {
        title: "Your characters come out of the text",
        text: "ScreenWeaver finds the characters, places and props in your script and draws a reference sheet for each one.",
        art: img(IMG.ficheStitcher, "The Stitcher's reference sheet: front, three-quarter, side, back"),
      },
      {
        title: "Generate the whole storyboard at once",
        text: "Every scene is broken into shots, every shot is drawn, with the same faces from the first to the last.",
        art: {
          kind: "timeline",
          main: { src: IMG.casePlaine, alt: "A storyboard panel: the fabric plain and the Stitcher" },
          selected: 0,
          thumbs: [
            { src: IMG.casePlaine, alt: "Shot 1: the plain" },
            { src: IMG.caseInsert, alt: "Shot 2: the hands and the needle" },
            { src: IMG.stillCoeur, alt: "Shot 3: the heart" },
            { src: IMG.stillDome, alt: "Shot 4: the dome" },
          ],
        },
      },
      {
        title: "Take back control, shot by shot",
        text: "A framing to change, an action to rewrite? You regenerate that panel and the rest of the film stays put.",
        art: {
          kind: "flow",
          link: false,
          nodes: [
            { label: "Wide shot", src: IMG.casePlaine, alt: "The plain in a wide shot", position: "0% 100%" },
            { label: "Insert", src: IMG.caseInsert, alt: "The Stitcher's hands in an insert" },
          ],
        },
      },
    ],
    cta: {
      title: "Your film is one shot away from existing.",
      text: "It all happens in ScreenWeaver, starting from your script.",
    },
  },

  script: {
    title: "Turn your idea",
    titleGold: "into a screenplay.",
    lede: "Here is how, in three steps.",
    before: {
      label: "Your idea",
      art: { kind: "note", text: "A stitcher spends his life closing the tears in a world made of cloth. And then?" },
    },
    after: { label: "Your screenplay", art: { kind: "script", lines: SEAM_SCRIPT } },
    steps: [
      {
        title: "Write, the formatting follows",
        text: "In ScreenWeaver you type your story and the pro format takes care of itself: scenes, characters, dialogue.",
        art: { kind: "script", lines: SEAM_SCRIPT },
      },
      {
        title: "See your whole film on one line",
        text: "One label per scene, and ScreenWeaver shows you the full structure: where the story moves, where it drags.",
        art: {
          kind: "cards",
          items: [
            { text: "The fabric plain", tag: "Opening" },
            { text: "The first tear", tag: "Inciting incident", on: true },
            { text: "The heart", tag: "Turning point" },
            { text: "The dome", tag: "Ending" },
          ],
        },
      },
      {
        title: "Get an AI read",
        text: "It points out the slow spots and offers rewrites, scene by scene. The decision stays yours.",
        art: {
          kind: "chat",
          user: "Read scene 2. Where does it drag?",
          reply: "The dialogue repeats what the image already shows. Here is a shorter version.",
        },
      },
    ],
    cta: {
      title: "The first page is the hardest. Write it today.",
      text: "Writing your script is free in ScreenWeaver.",
    },
  },

  film: {
    title: "Turn your storyboard",
    titleGold: "into a short film.",
    lede: "Here is how, in four steps.",
    before: { label: "Your panel", art: img(IMG.casePlaine, "A storyboard panel from The Seam: the fabric plain") },
    after: { label: "Your finished shot", art: img(IMG.planPlaine, "The same shot in the film The Seam") },
    steps: [
      {
        title: "One style for the whole film",
        text: "You set the art direction once. ScreenWeaver applies it to every image, from the first to the last.",
        art: {
          kind: "timeline",
          main: { src: IMG.stillDome, alt: "The Seam: the fabric dome" },
          selected: 3,
          thumbs: [
            { src: IMG.stillPlaine, alt: "The plain" },
            { src: IMG.stillDechirure, alt: "The tear" },
            { src: IMG.stillCoeur, alt: "The heart" },
            { src: IMG.stillDome, alt: "The dome" },
          ],
        },
      },
      {
        title: "The same faces in every shot",
        text: "One reference sheet per character, attached to every shot. And you can retouch it with AI whenever you want.",
        art: img(IMG.ficheStitcher, "The Stitcher's reference sheet"),
      },
      {
        title: "Generate all your videos",
        text: "ScreenWeaver sets up the production pipeline for every shot. You run it, edit it if you like, and your videos come out.",
        art: {
          kind: "flow",
          nodes: [
            { label: "Your sheets", src: IMG.ficheStitcher, alt: "The Stitcher's sheet", position: "12% 50%" },
            { label: "Your panel", src: IMG.casePlaine, alt: "The storyboard panel", position: "0% 100%" },
            { label: "Your video", src: IMG.planPlaine, alt: "The finished shot", position: "0% 100%" },
          ],
        },
      },
      {
        title: "Grab your footage and edit",
        text: "All the shots of a scene come out together, ready for your editing software.",
        art: img(IMG.stillDechirure, "The Seam: the tear opening onto the light", WIDE),
      },
    ],
    cta: {
      title: "The next film people talk about can be yours.",
      text: "It all happens in ScreenWeaver, from script to video.",
    },
  },

  anime: {
    title: "Turn your world",
    titleGold: "into an anime series.",
    lede: "Here is how, in four steps.",
    before: {
      label: "Your world",
      art: { kind: "note", text: "A sanctuary, a king buried under a vault, heroes I can see perfectly. In my head." },
    },
    after: { label: "Your episode", art: img(IMG.lgLanterne, "Lantern, hero of the anime series Lost Garden", "1200 / 515") },
    steps: [
      {
        title: "Write it episode by episode",
        text: "In ScreenWeaver, a Series project keeps all your episodes and scenes in one place.",
        art: {
          kind: "cards",
          items: [
            { text: "Episode 1", tag: "Being written", on: true },
            { text: "Episode 2" },
            { text: "Episode 3" },
            { text: "Episode 4" },
          ],
        },
      },
      {
        title: "Lock the style once",
        text: "Line, palette, light: you set them once and ScreenWeaver applies them to every image in the series.",
        art: {
          kind: "timeline",
          main: { src: IMG.lgTombeau, alt: "Lost Garden: Lantern asleep on his tomb" },
          selected: 0,
          thumbs: [
            { src: IMG.lgTombeau, alt: "The tomb" },
            { src: IMG.lgRosace, alt: "The rose window" },
            { src: IMG.lgFille, alt: "The pink-haired girl" },
            { src: IMG.lgPrairie, alt: "The field of lilies" },
          ],
        },
      },
      {
        title: "Your characters stop changing",
        text: "One sheet per character: front, side, back. And you can retouch it with AI whenever you want.",
        art: img(IMG.lgFiche, "Lantern's reference sheet: front, side, back", "1128 / 630"),
      },
      {
        title: "Generate all your videos",
        text: "ScreenWeaver sets up the production pipeline for every shot. You run it, edit it if you like, and your videos come out.",
        art: {
          kind: "flow",
          nodes: [
            { label: "Your sheets", src: IMG.lgFiche, alt: "Lantern's sheet", position: "0% 50%" },
            { label: "Your shot", src: IMG.lgLanterne, alt: "Lantern's shot" },
            { label: "Your video", src: IMG.lgTombeau, alt: "An animated shot from Lost Garden" },
          ],
        },
      },
    ],
    cta: {
      title: "Your world deserves its first episode.",
      text: "It all happens in ScreenWeaver, from writing to video.",
    },
  },

  webtoon: {
    title: "Turn your webtoon",
    titleGold: "into an anime.",
    lede: "Here is how, in four steps.",
    before: {
      label: "Your panel",
      art: img(IMG.imaginariumPlanche, "A panel from the webtoon Imaginarium: Lucy holding an orange, speech bubbles"),
    },
    after: { label: "Your animated shot", art: img(IMG.webtoonPlanAnime, "Lucy as an anime character, in front of a burning plain", "16 / 9") },
    steps: [
      {
        title: "Drop in your episode",
        text: "A PDF or your images, straight into ScreenWeaver. Or from Claude, connected to ScreenWeaver through its MCP.",
        art: img(IMG.webtoonPlanche, "A page of the webtoon Imaginarium, with its panels and bubbles", "4 / 5", { position: "top", narrow: true }),
      },
      {
        title: "Your panels become shots",
        text: "ScreenWeaver redraws each panel in 16:9 or 9:16 and lays it on a timeline. You see your whole episode, shot by shot.",
        art: {
          kind: "timeline",
          main: { src: IMG.webtoonPlanAnime, alt: "Lucy's shot, redrawn from its panel" },
          vertical: "24% 50%",
          selected: 1,
          thumbs: [
            { src: IMG.webtoonPlanPlaine, alt: "Shot 1: the burning plain" },
            { src: IMG.webtoonPlanAnime, alt: "Shot 2: Lucy" },
            { src: IMG.webtoonPlanDirigeables, alt: "Shot 3: the airships hit" },
            { src: IMG.webtoonPlanRegard, alt: "Shot 4: Lucy's eyes" },
          ],
        },
      },
      {
        title: "Your characters stay yours",
        text: "One sheet per character, built from your own art: the same face from shot to shot. And you can retouch them with AI whenever you want.",
        art: img(IMG.webtoonFiches, "The reference sheets of Lucy and Ethan", "6 / 7", { narrow: true }),
      },
      {
        title: "Generate all your videos",
        text: "ScreenWeaver sets up the production pipeline for every shot. You run it, edit it if you like, and your videos come out.",
        art: {
          kind: "flow",
          nodes: [
            { label: "Your sheets", src: IMG.webtoonFiches, alt: "Lucy's reference sheet", position: "50% 0%" },
            { label: "Your shot", src: IMG.webtoonPlanAnime, alt: "Lucy's shot in the storyboard", position: "22% 50%" },
            { label: "Your video", src: IMG.webtoonPlanAnime, alt: "The same shot as a video", position: "62% 50%" },
          ],
        },
      },
    ],
    cta: {
      title: "Your readers are waiting for the anime. Give them the pilot.",
      text: "It all happens in ScreenWeaver, starting from your pages.",
    },
  },

  drama: {
    title: "Turn your story",
    titleGold: "into a vertical series.",
    lede: "Here is how, in three steps.",
    before: {
      label: "Your story",
      art: { kind: "note", text: "A two-hour story, told in one go, for a cinema screen." },
    },
    after: {
      label: "Your episode 1",
      art: img(IMG.serieVerticale, "Vertical frame from a short drama: a woman under a yellow umbrella on a neon street", "4 / 5", {
        position: "center 30%",
        narrow: true,
      }),
    },
    steps: [
      {
        title: "Lay out your episode grid",
        text: "How many episodes, how long, where each twist lands: ScreenWeaver's free planner lays it out for you.",
        art: {
          kind: "cards",
          items: [
            { text: "Episode 1", tag: "The meeting" },
            { text: "Episode 2", tag: "The lie" },
            { text: "Episode 3", tag: "The twist", on: true },
            { text: "Episode 4", tag: "The escape" },
          ],
        },
      },
      {
        title: "End every episode on a question",
        text: "One label on the closing scene, and ScreenWeaver shows you at a glance which episodes end flat.",
        art: {
          kind: "cards",
          items: [
            { text: "She opens the letter", tag: "Scene 4" },
            { text: "He is not who she thinks", tag: "Episode ending", on: true },
          ],
        },
      },
      {
        title: "Switch the whole project to 9:16",
        text: "One setting, and every shot is framed for the phone, with the same faces from episode to episode.",
        art: img(IMG.serieVerticale, "A vertical shot: a woman under a yellow umbrella", "9 / 14", { narrow: true }),
      },
    ],
    cta: {
      title: "Your episode 1 can exist this week.",
      text: "It all happens in ScreenWeaver, from the episode grid to the vertical storyboard.",
    },
  },

  character: {
    title: "Keep the same character",
    titleGold: "in every shot.",
    lede: "Here is how, in three steps.",
    before: {
      label: "Your description",
      art: { kind: "note", text: "A man in a black coat, sad and mysterious." },
    },
    after: { label: "Your character", art: img(IMG.ficheStitcher, "The Stitcher's reference sheet: front, three-quarter, side, back") },
    steps: [
      {
        title: "Describe what the camera sees",
        text: "ScreenWeaver finds your characters in the script. All you do is describe the face, the distinctive marks, the clothes.",
        art: { kind: "note", text: "White cloth head, black stitches over one eye, long black coat with a red patch." },
      },
      {
        title: "Generate the sheet",
        text: "Front, side, back. You retouch it with AI until it is right: the whole film leans on it.",
        art: img(IMG.ficheStitcher, "The Stitcher's sheet"),
      },
      {
        title: "Call them with @ in every shot",
        text: "Type @ and the name in the shot's action: ScreenWeaver attaches the sheet to the panel. The face stops changing.",
        art: {
          kind: "flow",
          nodes: [
            { label: "The sheet", src: IMG.ficheStitcher, alt: "The Stitcher's sheet", position: "12% 50%" },
            { label: "One shot", src: IMG.caseInsert, alt: "The Stitcher's hands" },
            { label: "Another shot", src: IMG.casePlaine, alt: "The Stitcher on the plain", position: "0% 100%" },
          ],
        },
      },
    ],
    cta: {
      title: "Give your hero a face. Just one.",
      text: "It all happens in ScreenWeaver, starting from your script.",
    },
  },

  camera: {
    title: "Give every shot",
    titleGold: "an intention.",
    lede: "Here is how, in three steps.",
    before: { label: "A nice image", art: img(IMG.casePlaine, "A wide shot: the fabric plain and the tiny Stitcher") },
    after: { label: "A directed scene", art: img(IMG.caseInsert, "An insert: the Stitcher's hands, the needle and the red thread") },
    steps: [
      {
        title: "Pick the shot size",
        text: "Ten sizes in ScreenWeaver, from extreme close-up to establishing shot. One click per shot, and the drawing follows.",
        art: {
          kind: "flow",
          link: false,
          nodes: [
            { label: "Establishing shot", src: IMG.stillDome, alt: "The dome in an establishing shot" },
            { label: "Insert", src: IMG.caseInsert, alt: "The hands in an insert" },
          ],
        },
      },
      {
        title: "Change the angle without starting over",
        text: "High angle, low angle, reframing: ScreenWeaver redraws the same panel from another view, without rewriting the shot.",
        art: img(IMG.stillDechirure, "The Seam: the tear seen up close", WIDE),
      },
      {
        title: "Have the video prompt written for you",
        text: "The prompt director reads your shots, their size, their movement, and writes the prompt for the video model.",
        art: {
          kind: "flow",
          nodes: [
            { label: "Your shot", src: IMG.casePlaine, alt: "The plain panel", position: "0% 100%" },
            { label: "The prompt", text: "Wide shot. Slow dolly in toward the figure." },
            { label: "Your video", src: IMG.planPlaine, alt: "The finished shot", position: "0% 100%" },
          ],
        },
      },
    ],
    cta: {
      title: "You have the eye. Give it a camera.",
      text: "It is all set in ScreenWeaver, shot by shot.",
    },
  },

  mcp: {
    title: "Turn your sketches",
    titleGold: "into a film.",
    lede: "Here is how, in three steps.",
    before: { label: "Your sketch", art: img(IMG.mcpCroquisReveil, "A pencil sketch: a character asleep, the alarm clock ringing", "330 / 138") },
    after: { label: "Your shot", art: img(IMG.mcpPlan, "The shot generated from the sketch: a mouse woken by its alarm clock", "674 / 372", { position: "bottom" }) },
    steps: [
      {
        title: "Connect ScreenWeaver to Claude",
        text: "One link to paste into Claude or ChatGPT. No API key, nothing to install.",
        art: {
          kind: "flow",
          nodes: [
            { label: "Your assistant", text: "Claude or ChatGPT" },
            { label: "Your project", text: "ScreenWeaver" },
          ],
        },
      },
      {
        title: "Hand it your material",
        text: "A sketch, a novel, a webtoon. Your assistant writes the script, creates the characters and breaks down the shots in ScreenWeaver.",
        art: {
          kind: "chat",
          user: "Here is my page of sketches. Turn it into a storyboard.",
          reply: "Done. The shots are in your project, with their characters.",
        },
      },
      {
        title: "Open the project and generate",
        text: "Everything is already filed in ScreenWeaver: scenes, characters, shots. All that is left is to run the images.",
        art: img(IMG.mcpPlan, "The generated shot: a mouse in its bed", "674 / 372", { position: "bottom" }),
      },
    ],
    cta: {
      title: "That novel you dream of adapting: start tonight.",
      text: "Create your ScreenWeaver account, then connect Claude or ChatGPT.",
    },
  },

  tool: {
    title: "Test the new model",
    titleGold: "on your own shots.",
    lede: "Here is how, in four steps.",
    before: { label: "The demo", art: { kind: "note", text: "This model changes everything." } },
    after: { label: "Your verdict", art: { kind: "note", text: "On my shot, the second one keeps the face. I keep the second one." } },
    steps: [
      {
        title: "Start from an image of yours",
        text: "In Higgsfield, drop in an image you know by heart. You will see right away what the model does with it.",
        art: img(`${HF}/hero.webp`, "A director bent over a storyboard on a cobbled street", "16 / 9"),
      },
      {
        title: "Run the same shot on two models",
        text: "Higgsfield gathers the video models in one place. Same image, same prompt: the comparison becomes fair.",
        art: {
          kind: "cards",
          items: [
            { text: "Model A", tag: "Same image, same prompt" },
            { text: "Model B", tag: "Same image, same prompt", on: true },
          ],
        },
      },
      {
        title: "Set the camera",
        text: "In Cinema Studio you choose the camera, the lens, the aperture and the grade, like on a set.",
        art: {
          kind: "cards",
          items: [{ text: "Camera" }, { text: "Lens", on: true }, { text: "Aperture" }, { text: "Grade" }],
        },
      },
      {
        title: "Keep the best shot",
        text: "The shot you keep goes to the edit. The script, the characters and the storyboard, I prepare upstream in ScreenWeaver.",
        art: {
          kind: "flow",
          nodes: [
            { label: "Your tests", text: "Model A, model B" },
            { label: "Your film", text: "The shot you keep" },
          ],
        },
      },
    ],
    cta: {
      title: "Stop watching demos. Make your own.",
      text: "Affiliate link: it supports my work at no extra cost to you.",
    },
  },
};

const VISUALS: Record<ResourceLocale, Record<string, ResourceVisual>> = { fr: FR, en: EN };

export function visualFor(locale: ResourceLocale, slug: string): ResourceVisual | undefined {
  return VISUALS[locale][slug];
}
