import type { Resource } from "./types";
import {
  ACADEMY_FR,
  HIGGSFIELD_AFF,
  IMG,
  SEAM_SCRIPT,
  SW_START_FR,
  lessonFr as L,
  lessonVideo,
  lostGardenEp2,
  theSeam,
  utm,
} from "./links";

const SW = "https://www.screenweaver.ai";

function start(word: string, label = "Ouvrir ScreenWeaver") {
  return { href: utm(SW_START_FR, word, "fr"), label };
}

export const RESOURCES_FR: Resource[] = [
  {
    word: "STORYBOARD",
    label: "Storyboard",
    slug: "storyboard",
    twinSlug: "storyboard",
    locale: "fr",
    metaTitle: "Du script au storyboard IA : la méthode pas à pas",
    metaDescription:
      "La méthode pour passer de votre script à un storyboard IA qui tient : import, personnages, découpage, valeurs de plan. Chaque étape avec sa leçon vidéo.",
    title: "Le film que vous avez en tête,",
    titleGold: "enfin visible plan par plan.",
    lede:
      "Vous le voyez depuis des mois, et vous êtes seul à le voir. À la fin de cette méthode, il est devant vous : chaque scène découpée, chaque plan dessiné, les mêmes personnages du premier au dernier.",
    hero: { src: IMG.stillDome },
    from: {
      title: "Un script que vous êtes seul à voir",
      points: [
        "Des scènes qui n'existent que dans votre tête",
        "Des images générées une par une, jamais raccord",
        "Rien à montrer à une équipe ou à un producteur",
      ],
      tile: { kind: "script", lines: SEAM_SCRIPT },
    },
    to: {
      title: "Un film qui se regarde déjà",
      points: [
        "Chaque scène découpée en plans",
        "Les mêmes visages d'une case à l'autre",
        "Une animatique à faire lire, à présenter, à produire",
      ],
      tile: { kind: "image", src: IMG.storyboard40, alt: "Les 40 cases du storyboard de The Seam, de la plaine de tissu au dôme final" },
    },
    case: {
      title: "The Seam : 40 plans sortis d'un seul script",
      text:
        "Un monde de tissu, un recouseur qui passe sa vie à fermer les déchirures. Le script, les personnages, le storyboard et la production viennent du même projet ScreenWeaver. Seuls la musique et le montage final ont été faits ailleurs.",
      video: theSeam("Court métrage IA"),
    },
    steps: [
      {
        title: "Importez votre script, ou écrivez-le",
        text:
          "PDF, même scanné, Final Draft, Fountain ou simple texte : le fichier arrive en une fois. Si vous partez d'une page blanche, l'éditeur pose le format pro à votre place.",
        lesson: L("importez-un-scenario-existant"),
      },
      {
        title: "Faites sortir vos personnages, lieux et objets",
        text:
          "Tout ce qui revient dans le script devient une fiche. C'est elle qui garde le même visage d'une case à l'autre.",
        lesson: L("creez-vos-personnages-lieux-et-objets"),
      },
      {
        title: "Générez tout le storyboard d'une traite",
        text:
          "Chaque scène est découpée en plans, chaque case est dessinée. Sur The Seam, les 40 plans sont sortis d'un seul lancement.",
        lesson: L("generez-tout-votre-storyboard-en-une-fois"),
      },
      {
        title: "Reprenez la main, scène par scène",
        text:
          "Vous donnez vos consignes (« en 4 plans, du plus large au plus serré »), vous corrigez un cadre, puis vous regardez le film défiler en animatique.",
        lesson: L("decoupez-une-scene-avec-vos-propres-consignes"),
      },
    ],
    trap: {
      title: "Générer avant d'avoir décrit les personnages",
      text:
        "Sans description, l'IA invente un visage par case et vous passez la soirée à régénérer. Deux lignes précises par personnage, écrites avant le premier lancement, évitent la plupart des retouches.",
    },
    extra: {
      title: "Le cours complet, en accès libre",
      text: "Les 50 leçons dans l'ordre, de la page blanche au film monté, toutes tournées sur The Seam.",
      link: { href: ACADEMY_FR, label: "Ouvrir le cours" },
    },
    cta: {
      title: "Votre film n'attend que son premier plan.",
      text: "Créez le projet, importez votre script, et regardez-le prendre forme scène après scène.",
      link: start("STORYBOARD", "Lancer mon storyboard"),
    },
  },
  {
    word: "SCRIPT",
    label: "Scénario",
    slug: "script",
    twinSlug: "script",
    locale: "fr",
    metaTitle: "Écrire un scénario qui tient debout, avec l'IA à côté",
    metaDescription:
      "Format pro, structure, rythme, relecture par l'IA : la méthode pour écrire un scénario solide avant le moindre plan généré, avec les leçons vidéo de chaque étape.",
    title: "L'histoire qu'on lit",
    titleGold: "jusqu'à la dernière page.",
    lede:
      "Une idée, tout le monde en a une. Un scénario qui tient debout, structuré, au format pro, prêt à devenir un film : c'est ce que vous aurez entre les mains à la fin.",
    hero: { src: IMG.stillCoeur },
    from: {
      title: "Une idée et des notes éparses",
      points: [
        "Un début fort, puis l'histoire s'essouffle",
        "Des scènes qui ne changent rien",
        "Un texte que personne ne peut tourner",
      ],
      tile: { kind: "note", text: "Un recouseur passe sa vie à fermer les déchirures d'un monde de tissu. Et après ?" },
    },
    to: {
      title: "Un scénario prêt à devenir un film",
      points: [
        "Une structure qui tient du début à la fin",
        "Chaque scène a une raison d'être là",
        "Le format pro, prêt pour le storyboard",
      ],
      tile: { kind: "script", lines: SEAM_SCRIPT },
    },
    case: {
      title: "Tout un film sur une seule ligne",
      text:
        "Avant d'écrire une réplique, je regarde le film entier dans le séquencier : séquences, temps forts, scènes. Si une carte ne change rien à l'histoire, elle saute. Voici les 11 scènes de The Seam.",
      video: lessonVideo(L("voyez-la-structure-de-votre-film"), "Leçon 1.6"),
    },
    steps: [
      {
        title: "Écrivez au format pro sans y penser",
        text:
          "Entrée et Tab passent de l'action au personnage, puis au dialogue. Vous écrivez l'histoire, l'éditeur s'occupe de la mise en page.",
        lesson: L("ecrivez-une-scene-au-format-pro"),
      },
      {
        title: "Donnez un rôle à chaque scène",
        text:
          "Incident déclencheur, point bas, climax : posez un label sur chaque scène. Celle qui n'en trouve aucun est souvent celle dont le film peut se passer.",
        lesson: L("marquez-le-rythme-et-le-ton"),
      },
      {
        title: "Faites relire, gardez la décision",
        text:
          "L'assistant relit une scène et propose des pistes. Vous choisissez. Quand il réécrit, l'original reste dans l'historique.",
        lesson: L("faites-relire-votre-scenario"),
      },
    ],
    trap: {
      title: "Demander à l'IA d'écrire l'histoire à votre place",
      text:
        "Elle propose bien, elle choisit mal. Écrivez vous-même, en une phrase, ce que veut votre héros et ce qui l'en empêche. L'IA peut ensuite travailler tout le reste autour de cette phrase.",
    },
    extra: {
      title: "Atelier logline",
      text: "Un outil gratuit pour resserrer votre idée en une seule phrase, avant d'ouvrir le script.",
      link: { href: `${SW}/fr/tools/logline-workshop`, label: "Ouvrir l'atelier" },
    },
    cta: {
      title: "La première page est la plus dure. Écrivez-la aujourd'hui.",
      text: "L'écriture du script est gratuite dans ScreenWeaver.",
      link: start("SCRIPT", "Écrire mon scénario"),
    },
  },
  {
    word: "FILM",
    label: "Court métrage",
    slug: "film",
    twinSlug: "film",
    locale: "fr",
    metaTitle: "Court métrage IA : faire du cinéma, pas une suite de clips",
    metaDescription:
      "Ce qui sépare un court métrage IA qui a l'air de cinéma d'une suite de clips : un seul style, les mêmes visages, le bon modèle par plan. La méthode de The Seam.",
    title: "Votre court métrage,",
    titleGold: "avec une vraie allure de cinéma.",
    lede:
      "Pas une suite de clips impressionnants. Un film : une lumière, des visages qui restent, un rythme. Celui que vous envoyez en festival sans vous excuser.",
    hero: { src: IMG.stillDechirure },
    from: {
      title: "Des cases, des essais, des clips séparés",
      points: [
        "Un style différent à chaque plan",
        "Un héros qui change de visage",
        "Rien qui tienne au montage",
      ],
      tile: { kind: "image", src: IMG.casePlaine, alt: "Case du storyboard de The Seam : la plaine de tissu, le Stitcher minuscule devant la déchirure" },
    },
    to: {
      title: "Un film qui tient d'un bout à l'autre",
      points: [
        "Un seul regard, du premier plan au dernier",
        "Des personnages qu'on reconnaît",
        "Des rushs prêts pour le montage",
      ],
      tile: { kind: "image", src: IMG.planPlaine, alt: "Le même plan dans le film The Seam : la plaine en tissu réel, la couture, la lumière" },
    },
    case: {
      title: "The Seam, 5 minutes 14, produit dans ScreenWeaver",
      text:
        "Script, storyboard, images et vidéo : tout a été généré dans le projet, avec Seedream pour les images et Seedance pour l'animation. Seuls la musique et l'étalonnage ont été faits à part.",
      video: theSeam("Court métrage IA"),
    },
    steps: [
      {
        title: "Un seul style pour tout le film",
        text:
          "La direction artistique tient en un texte et une image. Elle s'applique à chaque génération, du premier plan au dernier.",
        lesson: L("donnez-un-seul-style-a-tout-votre-film"),
      },
      {
        title: "Les mêmes visages dans chaque plan",
        text:
          "Chaque personnage a sa fiche de production, et chaque plan la reçoit en référence. Le Stitcher est le même dans les 40 plans.",
        lesson: L("gardez-les-memes-visages-d-un-plan-a-l-autre"),
      },
      {
        title: "Le bon modèle pour chaque plan",
        text:
          "Un dialogue, une course et un plan contemplatif ne demandent pas le même modèle vidéo. La leçon explique pourquoi The Seam est animé avec Seedance.",
        lesson: L("choisissez-le-bon-modele-video"),
      },
      {
        title: "Récupérez vos rushs, montez",
        text: "Tous les plans d'une scène sortent dans un ZIP. Le montage, le son et l'étalonnage se font dans votre logiciel.",
        lesson: L("production-recuperez-vos-rushs-pour-le-montage"),
      },
    ],
    trap: {
      title: "Enchaîner les plans spectaculaires sans raccord",
      text:
        "Un spectateur pardonne une image un peu moins belle. Il ne pardonne pas un personnage qui change de manteau entre deux plans. Vérifiez les raccords en animatique avant de lancer la vidéo.",
    },
    extra: {
      title: "Le chemin complet, de la page blanche au film",
      text: "La leçon qui reprend tout dans l'ordre : script, storyboard, direction artistique, production, montage.",
      link: { href: L("methode-lancez-votre-projet-de-a-a-z").href, label: "Voir la leçon" },
    },
    cta: {
      title: "Le prochain film dont on parle peut être le vôtre.",
      text: "Créez le projet, posez votre script, et suivez les étapes dans l'ordre.",
      link: start("FILM", "Commencer mon film"),
    },
  },
  {
    word: "ANIME",
    label: "Animé",
    slug: "anime",
    twinSlug: "anime",
    locale: "fr",
    metaTitle: "Créer un animé avec l'IA : le cas Lost Garden",
    metaDescription:
      "Comment une seule personne fabrique une série animée avec l'IA : écriture par épisodes, style fixe, fiches qui tiennent, cases animées. Le cas Lost Garden, pas à pas.",
    title: "Votre série animée,",
    titleGold: "sans attendre un studio.",
    lede:
      "Un animé demandait une équipe et des années. Lost Garden, je le fabrique seul, épisode après épisode. Voici le chemin, pour votre univers à vous.",
    hero: { src: "https://i.ytimg.com/vi/z-YRrutXaFE/maxresdefault.jpg" },
    from: {
      title: "Un univers qui dort dans vos carnets",
      points: [
        "Des personnages jamais deux fois pareils",
        "Un style qui bouge d'une image à l'autre",
        "Un épisode 1 toujours repoussé",
      ],
      tile: { kind: "note", text: "Un sanctuaire, un roi enfoui sous une voûte, des héros que je vois très bien. Dans ma tête." },
    },
    to: {
      title: "Un premier épisode à montrer",
      points: [
        "Un style verrouillé pour toute la série",
        "Des personnages fidèles, de face comme de dos",
        "Des scènes animées, case par case",
      ],
      tile: {
        kind: "image",
        src: "https://i.ytimg.com/vi/z-YRrutXaFE/maxresdefault.jpg",
        alt: "Image de l'épisode 2 de la série animée Lost Garden",
      },
    },
    case: {
      title: "Lost Garden, épisode 2 : 21 minutes, une seule personne",
      text:
        "Écrit et storyboardé dans ScreenWeaver, puis animé. Les personnages restent les mêmes d'une scène à l'autre pendant tout l'épisode : c'est le vrai test d'un animé.",
      video: lostGardenEp2("Série animée IA"),
    },
    steps: [
      {
        title: "Écrivez la série épisode par épisode",
        text:
          "Le projet passe en Série / TV : épisodes et actes apparaissent dans le séquencier, et tous partagent les mêmes personnages, lieux et objets.",
        lesson: L("ecrivez-une-serie"),
      },
      {
        title: "Fixez le style une fois pour toutes",
        text: "Le trait, la palette et la lumière tiennent dans la direction artistique. Toutes les images de la série partent de là.",
        lesson: L("donnez-un-seul-style-a-tout-votre-film"),
      },
      {
        title: "Des fiches qui tiennent de face, de profil, de dos",
        text: "Une fiche de référence par personnage. C'est elle qui empêche le visage de dériver d'un épisode à l'autre.",
        lesson: L("storyboard-generez-des-fiches-de-reference-qui-tiennent"),
      },
      {
        title: "Animez directement les cases",
        text: "Le pipeline prend une scène entière et anime chaque case du storyboard avec ses références.",
        lesson: L("animez-directement-les-cases-du-storyboard"),
      },
    ],
    trap: {
      title: "Changer de style en cours de route",
      text:
        "En animé, le public repère tout de suite un trait qui bouge. Verrouillez la direction artistique avant la première scène, et ne la touchez plus jusqu'à la fin de l'épisode.",
    },
    extra: {
      title: "Le tutoriel complet de Lost Garden",
      text: "Comment la série a été fabriquée, outil par outil, de l'écriture à l'épisode monté.",
      link: { href: `${SW}/fr/blog/how-i-made-japanese-style-anime-with-ai`, label: "Lire le tutoriel" },
    },
    cta: {
      title: "Votre univers mérite son premier épisode.",
      text: "Créez un projet en Série / TV, écrivez l'épisode 1, et suivez les étapes.",
      link: start("ANIME", "Lancer ma série"),
    },
  },
  {
    word: "WEBTOON",
    label: "Webtoon",
    slug: "webtoon",
    twinSlug: "webtoon",
    locale: "fr",
    metaTitle: "Transformer un webtoon en animé avec l'IA, pas à pas",
    metaDescription:
      "Vos planches de webtoon ou de BD deviennent des plans animés : import des cases, passage en 16:9, fiches des personnages, animation. La méthode pas à pas, en vidéo.",
    title: "Votre webtoon",
    titleGold: "se met à bouger.",
    lede:
      "Vos cases sont déjà un storyboard : un temps fort par case, dans le bon ordre. Il leur manque le mouvement. À la fin, votre épisode est un pilote animé, et vos droits sont restés chez vous.",
    hero: { src: IMG.imaginariumAnime },
    from: {
      title: "Des planches immobiles",
      points: [
        "Des lecteurs qui réclament l'animé",
        "Une adaptation qui dépend d'un studio",
        "Des années avant la première image animée",
      ],
      tile: { kind: "image", src: IMG.imaginariumPlanche, alt: "Une case du webtoon Imaginarium : Lucy tient une orange, bulles de dialogue" },
    },
    to: {
      title: "Un pilote animé, signé de vous",
      points: [
        "Vos cases devenues des plans",
        "Vos personnages fidèles à votre dessin",
        "Un épisode à publier, en 16:9 ou en vertical",
      ],
      tile: { kind: "image", src: IMG.imaginariumAnime, alt: "Le même personnage en animé : gros plan sur le regard de Lucy" },
    },
    case: {
      title: "Imaginarium : mon webtoon devenu un animé",
      text:
        "L'épisode part en PDF, chaque page est découpée en cases, chaque case devient un plan avec son dessin en référence. Ensuite viennent les images du storyboard, puis la vidéo.",
      video: {
        provider: "youtube",
        id: "z8KLCiypko4",
        title: "J'ai transformé mon webtoon en animé avec l'IA",
        caption: "Tutoriel complet",
        meta: "8 min",
      },
    },
    steps: [
      {
        title: "Importez l'épisode",
        text:
          "PDF ou images : chaque page est découpée en cases et chaque case devient un plan. Vous gardez vos dessins ou vous les faites redessiner dans le style du projet.",
        lesson: L("importez-un-storyboard-que-vous-avez-deja"),
      },
      {
        title: "Choisissez 16:9 ou vertical",
        text: "Un animé classique passe en 16:9, une version pour téléphone reste en 9:16. Le format se choisit pour tout le projet.",
        lesson: L("choisissez-le-format-d-image-de-votre-film"),
      },
      {
        title: "Verrouillez vos personnages",
        text:
          "Vous les avez dessinés des centaines de fois : c'est une bible toute prête. Tirez-en une fiche de référence par personnage.",
        lesson: L("storyboard-generez-des-fiches-de-reference-qui-tiennent"),
      },
      {
        title: "Animez les cases",
        text: "La scène s'anime case par case, avec vos fiches en référence.",
        lesson: L("animez-directement-les-cases-du-storyboard"),
      },
    ],
    trap: {
      title: "Animer la case telle quelle",
      text:
        "Une case n'a pas de durée, et une bulle ne dit pas combien de temps dure la réplique. Donnez une durée à chaque plan et ajoutez les plans de passage qui manquent entre deux cases.",
    },
    extra: {
      title: "Le guide complet : voie studio ou voie IA",
      text: "Ce qu'il faut pour qu'un webtoon devienne un animé, pourquoi si peu y arrivent, et ce que la voie IA change pour vos droits.",
      link: { href: `${SW}/fr/webtoon-vers-anime`, label: "Lire le guide" },
    },
    cta: {
      title: "Vos lecteurs attendent l'animé. Donnez-leur le pilote.",
      text: "Créez un projet, déposez votre épisode en PDF, et suivez les quatre étapes.",
      link: start("WEBTOON", "Adapter mon webtoon"),
    },
  },
  {
    word: "SERIE",
    label: "Série verticale",
    slug: "serie",
    twinSlug: "drama",
    locale: "fr",
    metaTitle: "Écrire et produire une série verticale avec l'IA",
    metaDescription:
      "Short drama, micro-drama, série verticale : des épisodes courts qui finissent sur une question, le passage en 9:16 et les mêmes personnages sur toute la série.",
    title: "La série qu'on enchaîne",
    titleGold: "sans pouvoir s'arrêter.",
    lede:
      "Un épisode d'une minute, une fin qui oblige à lancer le suivant. À la fin de cette méthode, votre série verticale est écrite, découpée et prête à produire.",
    hero: { src: IMG.serieVerticale, position: "center 30%" },
    from: {
      title: "Une bonne histoire, en un seul bloc",
      points: [
        "Aucun découpage en épisodes",
        "Des fins qui laissent partir le spectateur",
        "Un cadre pensé pour le grand écran",
      ],
      tile: { kind: "note", text: "Une histoire de deux heures, racontée d'une traite, pour un écran de cinéma." },
    },
    to: {
      title: "Une série taillée pour le téléphone",
      points: [
        "Tous les épisodes planifiés",
        "Une question en suspens à chaque fin",
        "Un storyboard en 9:16, les mêmes visages partout",
      ],
      tile: {
        kind: "image",
        src: IMG.serieVerticale,
        alt: "Image verticale du short drama The Yellow Umbrella : une femme sous un parapluie jaune dans une rue de néons",
        fit: "contain",
      },
    },
    case: {
      title: "Un film redécoupé en épisodes et en actes",
      text:
        "Dans la leçon, The Seam est redécoupé comme le premier épisode d'une série : épisodes, actes, fins d'épisode repérées dans le séquencier.",
      video: lessonVideo(L("ecrivez-une-serie"), "Leçon 1.8"),
    },
    steps: [
      {
        title: "Planifiez vos épisodes avant d'écrire",
        text: "Combien d'épisodes, quelle durée, où tombe chaque retournement. Le planificateur gratuit pose la grille de toute la série.",
        link: { href: `${SW}/fr/tools/short-drama-episode-planner`, label: "Ouvrir le planificateur" },
      },
      {
        title: "Marquez chaque fin d'épisode",
        text: "Posez un label sur la scène qui ferme l'épisode. En relisant le séquencier, vous voyez tout de suite ceux qui finissent à plat.",
        lesson: L("marquez-le-rythme-et-le-ton"),
      },
      {
        title: "Passez le projet en 9:16",
        text: "Le format vertical change chaque case : moins de décor, plus de visage. Choisissez-le avant le storyboard.",
        lesson: L("choisissez-le-format-d-image-de-votre-film"),
      },
      {
        title: "Gardez les mêmes visages sur toute la série",
        text: "Les fiches des personnages servent à tous les épisodes. Le public d'une série verticale suit des visages, pas des décors.",
        lesson: L("gardez-les-memes-visages-d-un-plan-a-l-autre"),
      },
    ],
    trap: {
      title: "Un épisode qui finit sur une réponse",
      text:
        "En vertical, on coupe sur une question : une porte qui s'ouvre, un message qui arrive, un regard. La réponse vient au début de l'épisode suivant.",
    },
    cta: {
      title: "Votre épisode 1 peut exister cette semaine.",
      text: "Créez un projet en Série / TV au format 9:16 et commencez par la première fin d'épisode.",
      link: start("SERIE", "Écrire ma série"),
    },
  },
  {
    word: "PERSONNAGE",
    label: "Personnage",
    slug: "personnage",
    twinSlug: "character",
    locale: "fr",
    metaTitle: "Garder le même personnage IA d'un plan à l'autre",
    metaDescription:
      "Pourquoi votre personnage IA change de visage à chaque plan, et comment le fixer : description de caméra, fiches de référence, appel par @. Avec les leçons vidéo.",
    title: "Un héros qu'on reconnaît",
    titleGold: "à chaque plan.",
    lede:
      "Le spectateur s'attache à un visage. S'il change, le film s'écroule. À la fin de cette méthode, votre personnage est le même dans tous les plans, sous tous les angles.",
    hero: { src: IMG.stillDome },
    from: {
      title: "Un visage différent à chaque génération",
      points: [
        "Des heures à relancer le même plan",
        "Un costume qui change entre deux scènes",
        "Un film impossible à monter",
      ],
      tile: { kind: "note", text: "Un homme en manteau noir, l'air triste et mystérieux." },
    },
    to: {
      title: "Un personnage qui tient tout le film",
      points: [
        "Une description que l'IA suit à la lettre",
        "Une fiche de face, de profil, de dos",
        "Le même héros dans chaque plan",
      ],
      tile: { kind: "image", src: IMG.ficheStitcher, alt: "Fiche de référence du Stitcher : face, trois quarts, profil, dos, détails de la tête et des mains" },
    },
    case: {
      title: "Le Stitcher, identique dans les 40 plans",
      text:
        "Dans The Seam, chaque plan reçoit la fiche du personnage en référence. Le visage, la cicatrice et le manteau ne bougent pas d'une scène à l'autre.",
      video: lessonVideo(L("gardez-les-memes-visages-d-un-plan-a-l-autre"), "Leçon 3.3"),
    },
    steps: [
      {
        title: "Décrivez-le comme une caméra le verrait",
        text: "Forme du visage, signes distinctifs, vêtements, matière. Rien sur son humeur : l'émotion, on la joue dans le plan.",
        lesson: L("decrivez-un-personnage-pour-l-ia"),
      },
      {
        title: "Générez une fiche qui tient",
        text: "De face, de côté, de dos. Régénérez jusqu'à ce qu'elle soit juste : tous les plans vont s'appuyer dessus.",
        lesson: L("storyboard-generez-des-fiches-de-reference-qui-tiennent"),
      },
      {
        title: "Appelez-le avec @ dans chaque plan",
        text: "Dans l'action du plan, @LE NOM attache la fiche à la case. Sans mention, le modèle ne sait pas qui dessiner.",
        lesson: L("ecrivez-l-action-d-un-plan-et-appelez-vos-personnages-avec-arobase"),
      },
    ],
    trap: {
      title: "Décrire l'émotion au lieu du visage",
      text:
        "« Un homme triste et mystérieux » donne un visage différent à chaque essai. « Tête de lin en forme d'œuf, cicatrice cousue, manteau noir » donne le même.",
    },
    extra: {
      title: "Générateur de fiche personnage",
      text: "Décrivez votre personnage une fois, l'outil écrit le bloc à coller en tête de chaque prompt.",
      link: { href: `${SW}/fr/tools/ai-character-consistency-sheet`, label: "Ouvrir l'outil" },
    },
    cta: {
      title: "Donnez un visage à votre héros. Un seul.",
      text: "Importez votre script : vos personnages sont repérés, il reste à les décrire.",
      link: start("PERSONNAGE", "Créer mon personnage"),
    },
  },
  {
    word: "CAMERA",
    label: "Caméra",
    slug: "camera",
    twinSlug: "camera",
    locale: "fr",
    metaTitle: "Valeurs de plan et mouvements de caméra en vidéo IA",
    metaDescription:
      "Plan large, gros plan, travelling, dolly : choisir la bonne valeur et le bon mouvement pour chaque plan, puis l'écrire pour un modèle vidéo IA. Avec les leçons.",
    title: "Des plans qui racontent,",
    titleGold: "pas des plans qui bougent.",
    lede:
      "Ce qui sépare une vidéo IA d'une scène de cinéma tient souvent au cadre. À la fin de cette méthode, vous choisissez chaque valeur de plan et chaque mouvement comme un réalisateur, et le modèle vous suit.",
    hero: { src: IMG.stillPlaine },
    from: {
      title: "De belles images, sans intention",
      points: [
        "Le même plan large partout",
        "Une caméra qui bouge parce qu'elle peut",
        "Des scènes plates malgré de beaux rendus",
      ],
      tile: { kind: "image", src: IMG.casePlaine, alt: "Un plan large : la plaine de tissu et le Stitcher minuscule" },
    },
    to: {
      title: "Une mise en scène qui se sent",
      points: [
        "La bonne valeur pour chaque moment",
        "Un mouvement quand il a un sens",
        "Des prompts écrits pour être suivis",
      ],
      tile: { kind: "image", src: IMG.caseInsert, alt: "Un insert : les mains du Stitcher, l'aiguille et le fil rouge sur la déchirure" },
    },
    case: {
      title: "Le travelling qui suit le Stitcher sur la plaine",
      text:
        "Fixe, panoramique, travelling, dolly, grue, épaule, steadicam, zoom, et le texte libre quand la liste ne suffit pas. La leçon règle un vrai plan de The Seam.",
      video: lessonVideo(L("storyboard-reglez-le-mouvement-de-camera"), "Leçon 2.7"),
    },
    steps: [
      {
        title: "Choisissez la valeur de plan",
        text: "Dix valeurs, du très gros plan au plan d'ensemble, plus l'amorce, le subjectif et l'insert.",
        lesson: L("choisissez-la-bonne-valeur-de-plan"),
      },
      {
        title: "Changez l'angle d'une case",
        text: "Plongée, contre-plongée, angle libre, recadrage : la même case vue autrement, sans réécrire le plan.",
        lesson: L("changez-l-angle-de-camera-d-une-case"),
      },
      {
        title: "Faites écrire le prompt vidéo",
        text: "Le directeur de prompt lit les plans d'une scène, leur valeur et leur mouvement, et écrit le prompt pour le modèle vidéo.",
        lesson: L("faites-ecrire-vos-prompts-video-par-le-directeur-de-prompt"),
      },
    ],
    trap: {
      title: "Faire bouger la caméra à chaque plan",
      text:
        "Si tout bouge, plus rien ne compte. Gardez le mouvement pour le plan qui en a besoin et laissez les autres fixes : c'est le contraste qui donne sa force au travelling.",
    },
    extra: {
      title: "Tous les mouvements de caméra, animés",
      text: "Chaque mouvement en animation, avec le prompt exact à copier dans votre modèle vidéo.",
      link: { href: `${SW}/fr/tools/camera-movement-prompts`, label: "Ouvrir l'outil" },
    },
    cta: {
      title: "Vous avez l'œil. Donnez-lui une caméra.",
      text: "Dans le storyboard, chaque plan reçoit sa valeur et son mouvement en un clic.",
      link: start("CAMERA", "Régler mes plans"),
    },
  },
  {
    word: "MCP",
    label: "MCP",
    slug: "mcp",
    twinSlug: "mcp",
    locale: "fr",
    metaTitle: "Brancher ScreenWeaver à Claude ou ChatGPT avec le MCP",
    metaDescription:
      "Une adresse, une connexion, et votre assistant lit votre script, crée vos personnages et découpe vos plans dans ScreenWeaver. Le MCP expliqué pas à pas, sans clé API.",
    title: "Donnez un croquis à votre assistant,",
    titleGold: "récupérez un film découpé.",
    lede:
      "Un roman en PDF, un webtoon, une page griffonnée. Votre assistant lit, écrit le script, crée les personnages et découpe les plans dans votre projet. Les images et la vidéo, c'est vous qui les lancez.",
    from: {
      title: "Une pile de matière brute",
      points: [
        "Un roman, des notes, des croquis",
        "Des semaines d'adaptation devant vous",
        "Un assistant IA qui ne voit pas votre projet",
      ],
      tile: { kind: "image", src: IMG.mcpCroquis, alt: "Une page de croquis au crayon : un personnage réveillé par son réveil", fit: "contain" },
    },
    to: {
      title: "Un projet de film construit",
      points: [
        "Le script écrit et organisé",
        "Les personnages et les lieux créés",
        "Chaque scène découpée, prête à générer",
      ],
      tile: { kind: "image", src: IMG.mcpPlan, alt: "Le plan généré à partir du croquis : une souris dans son lit, réveillée par le réveil" },
    },
    case: {
      title: "Une BD griffonnée devenue un film",
      text: "Le tutoriel complet : la connexion, la page de croquis transformée en plans, puis le film généré dans l'app.",
      video: {
        provider: "youtube",
        id: "A8DbyF8BXxk",
        title: "J'ai donné une BD griffonnée à l'IA, elle en a fait un film",
        caption: "Tutoriel complet",
      },
    },
    steps: [
      {
        title: "Ajoutez le serveur à votre assistant",
        text:
          "Collez l'adresse https://app.screenweaver.ai/api/mcp dans les connecteurs de Claude ou ChatGPT, puis connectez-vous avec votre compte. Aucune clé API.",
        lesson: L("branchez-screenweaver-a-claude-avec-le-mcp"),
      },
      {
        title: "Donnez-lui votre matière",
        text:
          "Un PDF, un épisode de webtoon, une photo de croquis. Sur Dracula, Claude a lu tout le roman et créé 11 personnages, 16 lieux, 32 scènes et 177 plans.",
        lesson: L("faites-travailler-claude-sur-votre-projet"),
      },
      {
        title: "Générez dans l'app",
        text: "L'assistant lit, écrit et organise. Vous ouvrez le storyboard et vous lancez les images.",
        lesson: L("generez-tout-votre-storyboard-en-une-fois"),
      },
    ],
    trap: {
      title: "Lui demander « fais-moi un film »",
      text:
        "Donnez-lui une matière et une consigne de réalisateur : « adapte ce chapitre en 8 scènes, un plan par moment fort, plan large en ouverture ». Plus la demande est précise, meilleur est le découpage.",
    },
    extra: {
      title: "Les demandes à copier-coller",
      text: "Une pièce de théâtre en scénario, une chanson en clip, un roman en série verticale : les demandes prêtes à l'emploi.",
      link: { href: `${SW}/fr/mcp`, label: "Voir les demandes" },
    },
    cta: {
      title: "Ce roman que vous rêvez d'adapter : commencez ce soir.",
      text: "Créez votre compte ScreenWeaver, puis ajoutez le serveur MCP dans Claude ou ChatGPT.",
      link: start("MCP", "Brancher mon assistant"),
    },
  },
  {
    word: "OUTIL",
    label: "Modèles vidéo",
    slug: "outil",
    twinSlug: "tool",
    locale: "fr",
    metaTitle: "Tester un nouveau modèle vidéo IA sur vos propres plans",
    metaDescription:
      "Un nouveau modèle vidéo sort chaque semaine. La méthode pour le tester sur vos propres plans dans Higgsfield, le comparer à celui que vous utilisez, et garder le meilleur.",
    title: "Le nouveau modèle,",
    titleGold: "jugé sur vos propres plans.",
    lede:
      "Chaque semaine, une démo promet la révolution. À la fin de cette méthode, une seule comparaison vous dit ce qu'un modèle vaut pour votre film, et vous repartez avec le meilleur plan.",
    hero: { src: "/images/blog/higgsfield-avis-realisateur/hero.webp" },
    from: {
      title: "Une démo qui fait rêver",
      points: [
        "Impossible de savoir ce qu'elle vaut pour vous",
        "Un abonnement de plus à chaque sortie",
        "Des heures de tests sans conclusion",
      ],
      tile: { kind: "note", text: "Ce modèle change tout." },
    },
    to: {
      title: "Un verdict sur votre film",
      points: [
        "Le même plan comparé sur deux modèles",
        "Tous les modèles sous un seul compte",
        "Le meilleur rush, rangé dans votre montage",
      ],
      tile: { kind: "note", text: "Sur mon plan, le second garde le visage. Je garde le second." },
    },
    case: {
      title: "Ce que je garde et ce que je jette dans Higgsfield",
      text: "Mon avis complet de réalisateur : les modèles disponibles, Cinema Studio, Elements, et l'endroit où l'outil s'arrête pour un film.",
      image: {
        src: "/images/blog/higgsfield-avis-realisateur/hero.webp",
        alt: "Une scripte aligne huit photos de plans sur une caisse en bois pour vérifier un costume",
      },
      link: { href: "/blog/higgsfield-avis-realisateur", label: "Lire mon avis complet" },
    },
    steps: [
      {
        title: "Partez d'une image que vous connaissez",
        text:
          "Une case de votre storyboard ou une image de votre film, avec votre personnage dedans. Vous jugerez ce qui compte : le mouvement, le visage, la lumière.",
      },
      {
        title: "Lancez le même plan sur deux modèles",
        text:
          "Même image de départ, même consigne : le modèle du reel contre celui que vous utilisez déjà. Seedance, Kling, Veo, Sora et une vingtaine d'autres sont sous le même compte.",
      },
      {
        title: "Réglez la caméra dans Cinema Studio",
        text: "Caméra, objectif, ouverture, étalonnage. Et Elements garde vos personnages, lieux et accessoires d'un plan à l'autre.",
      },
      {
        title: "Gardez le meilleur, rangez-le dans le film",
        text: "Le plan retenu part au montage. En amont, le script, les personnages et le storyboard, je les prépare dans ScreenWeaver.",
      },
    ],
    trap: {
      title: "Changer de modèle à chaque sortie",
      text:
        "Un nouveau modèle vaut le coup s'il règle un problème que vous avez sur un vrai plan. Sinon, restez sur celui que vous maîtrisez : vous irez plus vite.",
    },
    cta: {
      title: "Arrêtez de regarder les démos. Faites la vôtre.",
      text: "Lien affilié : il soutient mon travail, sans surcoût pour vous.",
      link: { href: HIGGSFIELD_AFF, label: "Essayer Higgsfield" },
      affiliate: true,
      secondary: { href: utm(SW_START_FR, "OUTIL", "fr"), label: "Préparer le film dans ScreenWeaver" },
    },
  },
];
