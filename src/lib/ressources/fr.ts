import type { Resource } from "./types";
import {
  ACADEMY_FR,
  HIGGSFIELD_AFF,
  SW_START_FR,
  lessonFr as L,
  lessonVideo,
  lostGardenEp2,
  theSeam,
  utm,
} from "./links";

const SW = "https://www.screenweaver.ai";

function start(word: string) {
  return { href: utm(SW_START_FR, word, "fr"), label: "Ouvrir ScreenWeaver" };
}

export const RESOURCES_FR: Resource[] = [
  {
    word: "STORYBOARD",
    slug: "storyboard",
    twinSlug: "storyboard",
    locale: "fr",
    metaTitle: "Du script au storyboard IA : la méthode pas à pas",
    metaDescription:
      "La méthode pour passer de votre script à un storyboard IA qui tient : import, personnages, découpage, valeurs de plan. Chaque étape avec sa leçon vidéo.",
    title: "Votre script devient un storyboard,",
    titleGold: "plan par plan.",
    lede:
      "Vous avez commenté STORYBOARD sous le reel. Voici la méthode que j'utilise sur mes films, dans l'ordre, avec la vidéo qui montre chaque geste dans l'app.",
    case: {
      title: "The Seam, du script au film dans le même projet",
      text:
        "Un monde fait de tissu, un recouseur qui passe sa vie à fermer les déchirures. Le script, les personnages, les 40 plans du storyboard et la production sont sortis du même projet ScreenWeaver. Seuls la musique et le montage final ont été faits ailleurs.",
      video: theSeam("Court métrage IA"),
    },
    steps: [
      {
        title: "Importez votre script, ou écrivez-le",
        text:
          "PDF, même scanné, Final Draft, Fountain ou simple texte : le fichier arrive en une fois, avec un aperçu avant l'import. Si vous partez d'une page blanche, l'éditeur pose le format pro à votre place.",
        lesson: L("importez-un-scenario-existant"),
      },
      {
        title: "Sortez vos personnages, lieux et objets",
        text:
          "Tout ce qui revient dans le script devient une fiche. C'est cette fiche qui garde le même visage d'une case à l'autre, alors décrivez chaque personnage comme une caméra le verrait.",
        lesson: L("creez-vos-personnages-lieux-et-objets"),
      },
      {
        title: "Générez le storyboard d'une traite",
        text:
          "La génération automatique découpe chaque scène en plans et dessine les cases. Sur The Seam, les 40 plans sont sortis d'un seul lancement, et le travail continue même si vous fermez l'onglet.",
        lesson: L("generez-tout-votre-storyboard-en-une-fois"),
      },
      {
        title: "Reprenez la main scène par scène",
        text:
          "Le bouton Auto d'une scène accepte vos consignes, par exemple « en 4 plans, du plus large au plus serré ». Ensuite vous corrigez une valeur de plan, un mouvement, et vous regardez le tout en animatique.",
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
      text: "Les 50 leçons du cours, dans l'ordre, de la page blanche au film monté. Tout est tourné sur le projet The Seam.",
      link: { href: ACADEMY_FR, label: "Ouvrir le cours" },
    },
    cta: {
      title: "Lancez votre storyboard",
      text: "Créez votre projet, importez votre script, puis suivez les quatre étapes ci-dessus.",
      link: start("STORYBOARD"),
    },
  },
  {
    word: "SCRIPT",
    slug: "script",
    twinSlug: "script",
    locale: "fr",
    metaTitle: "Écrire un scénario qui tient debout, avec l'IA à côté",
    metaDescription:
      "Format pro, structure, rythme, relecture par l'IA : la méthode pour écrire un scénario solide avant le moindre plan généré, avec les leçons vidéo de chaque étape.",
    title: "Une bonne histoire se joue",
    titleGold: "avant la première image.",
    lede:
      "Vous avez commenté SCRIPT. Presque tout ce qui rate à l'écran se voyait déjà dans le scénario : un héros qui ne veut rien, une scène qui ne change rien. Voici comment j'écris, et ce que je laisse faire à l'IA.",
    case: {
      title: "Les 11 scènes de The Seam sur une seule ligne",
      text:
        "Avant d'écrire une réplique, je regarde le film entier dans la vue séquencier : séquences, temps forts, scènes. Si une carte ne change rien à l'histoire, elle saute. On la glisse, on la fusionne, on la coupe, et le script suit.",
      video: lessonVideo(L("voyez-la-structure-de-votre-film"), "Leçon 1.6"),
    },
    steps: [
      {
        title: "Écrivez au format pro sans y penser",
        text:
          "Entrée et Tab passent de l'action au personnage, puis au dialogue. L'autocomplétion connaît vos lieux et vos noms. Vous écrivez l'histoire, l'éditeur s'occupe de la mise en page.",
        lesson: L("ecrivez-une-scene-au-format-pro"),
      },
      {
        title: "Étiquetez chaque scène",
        text:
          "Incident déclencheur, point bas, climax : posez un label sur chaque scène. Une scène qui ne trouve aucun label est souvent une scène dont le film peut se passer.",
        lesson: L("marquez-le-rythme-et-le-ton"),
      },
      {
        title: "Faites relire, gardez la décision",
        text:
          "L'assistant relit une scène et propose des pistes. Vous choisissez. Quand il réécrit, une version est créée et l'original reste dans l'historique.",
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
      title: "Écrivez votre script",
      text: "L'écriture du script est gratuite dans ScreenWeaver.",
      link: { href: utm(SW_START_FR, "SCRIPT", "fr"), label: "Écrire mon script" },
    },
  },
  {
    word: "FILM",
    slug: "film",
    twinSlug: "film",
    locale: "fr",
    metaTitle: "Court métrage IA : faire du cinéma, pas une suite de clips",
    metaDescription:
      "Ce qui sépare un court métrage IA qui a l'air de cinéma d'une suite de clips : un seul style, les mêmes visages, le bon modèle par plan. La méthode de The Seam.",
    title: "Un film IA qui a l'air",
    titleGold: "de cinéma.",
    lede:
      "Vous avez commenté FILM. Un festival ne retient pas le plan le plus spectaculaire, il retient le film qui tient d'un plan à l'autre : une lumière, des visages, un rythme. Voici comment j'ai fabriqué The Seam.",
    case: {
      title: "The Seam, 5 minutes 14, produit dans ScreenWeaver",
      text:
        "Script, storyboard, images et vidéo : tout a été généré dans le projet, avec Seedream pour les images et Seedance pour l'animation, en nœuds dans le canvas de production. Seuls la musique et l'étalonnage ont été faits à part.",
      video: theSeam("Court métrage IA"),
    },
    steps: [
      {
        title: "Un seul style pour tout le film",
        text:
          "La direction artistique tient en un texte et une image. Elle s'applique à chaque génération, du premier plan au dernier. C'est elle qui donne au film son air de famille.",
        lesson: L("donnez-un-seul-style-a-tout-votre-film"),
      },
      {
        title: "Les mêmes visages dans chaque plan",
        text:
          "Chaque personnage, lieu et objet a sa fiche de production, et chaque plan la reçoit en référence. Le Stitcher de The Seam est le même dans les 40 plans.",
        lesson: L("gardez-les-memes-visages-d-un-plan-a-l-autre"),
      },
      {
        title: "Le bon modèle pour chaque plan",
        text:
          "Le nœud vidéo propose Seedance, Veo, Kling, MiniMax, Wan et Grok. Un dialogue, une course et un plan contemplatif ne demandent pas le même. La leçon explique pourquoi The Seam est animé avec Seedance.",
        lesson: L("choisissez-le-bon-modele-video"),
      },
      {
        title: "Récupérez vos rushs, montez à part",
        text:
          "Le regroupeur média sort tous les plans d'une scène dans un ZIP. Le montage, le son et l'étalonnage se font ensuite dans votre logiciel habituel.",
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
      text: "La leçon qui reprend tout dans l'ordre : script, éléments, format, storyboard, direction artistique, pipelines, rushs, montage.",
      link: { href: L("methode-lancez-votre-projet-de-a-a-z").href, label: "Voir la leçon" },
    },
    cta: {
      title: "Commencez votre film",
      text: "Créez le projet, écrivez ou importez le script, et suivez les étapes dans l'ordre.",
      link: start("FILM"),
    },
  },
  {
    word: "ANIME",
    slug: "anime",
    twinSlug: "anime",
    locale: "fr",
    metaTitle: "Créer un animé avec l'IA : le cas Lost Garden",
    metaDescription:
      "Comment une seule personne fabrique une série animée avec l'IA : écriture par épisodes, style fixe, fiches qui tiennent, cases animées. Le cas Lost Garden, pas à pas.",
    title: "Un animé fait par une seule personne,",
    titleGold: "étape par étape.",
    lede:
      "Vous avez commenté ANIME. Lost Garden est la série que je fabrique seul : l'écriture et le storyboard dans ScreenWeaver, puis l'animation. L'épisode 2 dure 21 minutes. Voici le chemin.",
    case: {
      title: "Lost Garden, épisode 2",
      text:
        "Un sanctuaire, un roi enfoui sous une voûte, une équipe de personnages qui doivent rester les mêmes d'une scène à l'autre pendant 21 minutes. C'est le vrai test d'un animé : la cohérence sur la durée.",
      video: lostGardenEp2("Série animée IA"),
    },
    steps: [
      {
        title: "Écrivez la série épisode par épisode",
        text:
          "Passez le projet en Série / TV : les pistes Épisode et Acte apparaissent dans le séquencier. Chaque épisode garde les mêmes personnages, lieux et objets.",
        lesson: L("ecrivez-une-serie"),
      },
      {
        title: "Fixez le style une fois pour toutes",
        text:
          "Le trait, la palette et la lumière tiennent dans la direction artistique du projet. Toutes les images de la série partent de là.",
        lesson: L("donnez-un-seul-style-a-tout-votre-film"),
      },
      {
        title: "Des fiches qui tiennent de face, de profil, de dos",
        text:
          "Une fiche de référence par personnage, régénérée jusqu'à ce qu'elle soit juste. En animé, c'est elle qui empêche le visage de dériver d'un épisode à l'autre.",
        lesson: L("storyboard-generez-des-fiches-de-reference-qui-tiennent"),
      },
      {
        title: "Animez directement les cases",
        text:
          "Le pipeline des vignettes du storyboard vers la vidéo prend une scène entière et anime chaque case avec ses références.",
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
      title: "Lancez votre série animée",
      text: "Créez un projet en Série / TV, écrivez l'épisode 1, puis suivez les étapes.",
      link: start("ANIME"),
    },
  },
  {
    word: "WEBTOON",
    slug: "webtoon",
    twinSlug: "webtoon",
    locale: "fr",
    metaTitle: "Transformer un webtoon en animé avec l'IA, pas à pas",
    metaDescription:
      "Vos planches de webtoon ou de BD deviennent des plans animés : import des cases, passage en 16:9, fiches des personnages, animation. La méthode pas à pas, en vidéo.",
    title: "Vos cases sont déjà",
    titleGold: "un storyboard.",
    lede:
      "Vous avez commenté WEBTOON. Un webtoon est déjà une liste de plans : une case par temps fort, dans un ordre de lecture précis. Il lui manque le temps. Voici comment j'ai transformé mon webtoon Imaginarium en animé.",
    case: {
      title: "Imaginarium, du webtoon à l'animé",
      text:
        "L'épisode part en PDF, chaque page est découpée en cases, chaque case devient un plan avec son dessin en référence. Ensuite on génère les images du storyboard, puis la vidéo.",
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
          "PDF ou images : chaque page est découpée en cases et chaque case devient un plan. Vous gardez vos dessins tels quels ou vous les faites redessiner dans le style du projet.",
        lesson: L("importez-un-storyboard-que-vous-avez-deja"),
      },
      {
        title: "Choisissez 16:9 ou vertical",
        text:
          "Un animé classique passe en 16:9, une version pour téléphone reste en 9:16. Le format se choisit au niveau du projet et change tout le cadrage des cases.",
        lesson: L("choisissez-le-format-d-image-de-votre-film"),
      },
      {
        title: "Verrouillez vos personnages",
        text:
          "Vos personnages ont été dessinés des centaines de fois : c'est une bible gratuite. Tirez-en une fiche de référence par personnage avant de générer.",
        lesson: L("storyboard-generez-des-fiches-de-reference-qui-tiennent"),
      },
      {
        title: "Animez les cases",
        text: "Le pipeline des vignettes vers la vidéo anime la scène case par case, avec les fiches en référence.",
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
      title: "Adaptez votre webtoon",
      text: "Créez un projet, déposez votre épisode en PDF, et suivez les quatre étapes.",
      link: start("WEBTOON"),
    },
  },
  {
    word: "SERIE",
    slug: "serie",
    twinSlug: "drama",
    locale: "fr",
    metaTitle: "Écrire et produire une série verticale avec l'IA",
    metaDescription:
      "Short drama, micro-drama, série verticale : des épisodes courts qui finissent sur une question, le passage en 9:16 et les mêmes personnages sur toute la série.",
    title: "Une série verticale,",
    titleGold: "une question par épisode.",
    lede:
      "Vous avez commenté SERIE. Une série verticale se regarde sur un téléphone, par épisodes d'une à deux minutes, et chaque fin doit donner envie de lancer la suivante. Voici comment je l'écris et comment je la storyboarde en 9:16.",
    case: {
      title: "Une série découpée en épisodes et en actes",
      text:
        "Dans la leçon, The Seam est redécoupé comme le premier épisode d'une série : pistes Épisode et Acte, fins d'épisode repérées dans le séquencier.",
      video: lessonVideo(L("ecrivez-une-serie"), "Leçon 1.8"),
    },
    steps: [
      {
        title: "Planifiez vos épisodes avant d'écrire",
        text:
          "Combien d'épisodes, quelle durée, où tombe chaque retournement. Le planificateur gratuit pose la grille de toute la série en quelques minutes.",
        link: { href: `${SW}/fr/tools/short-drama-episode-planner`, label: "Ouvrir le planificateur" },
      },
      {
        title: "Marquez chaque fin d'épisode",
        text:
          "Posez un label sur la scène qui ferme l'épisode. En relisant le séquencier, vous voyez tout de suite les épisodes qui finissent à plat.",
        lesson: L("marquez-le-rythme-et-le-ton"),
      },
      {
        title: "Passez le projet en 9:16",
        text: "Le format vertical change le cadrage de chaque case : moins de décor, plus de visage. Choisissez-le avant le storyboard.",
        lesson: L("choisissez-le-format-d-image-de-votre-film"),
      },
      {
        title: "Gardez les mêmes visages sur toute la série",
        text:
          "Les fiches de production des personnages servent à tous les épisodes. Le public d'une série verticale suit des visages, pas des décors.",
        lesson: L("gardez-les-memes-visages-d-un-plan-a-l-autre"),
      },
    ],
    trap: {
      title: "Un épisode qui finit sur une réponse",
      text:
        "En vertical, on coupe sur une question : une porte qui s'ouvre, un message qui arrive, un regard. La réponse vient au début de l'épisode suivant.",
    },
    extra: {
      title: "Planificateur d'épisodes",
      text: "La grille de votre série, épisode par épisode, avec les retournements placés.",
      link: { href: `${SW}/fr/tools/short-drama-episode-planner`, label: "Ouvrir l'outil" },
    },
    cta: {
      title: "Écrivez votre série",
      text: "Créez un projet en Série / TV au format 9:16 et commencez par l'épisode 1.",
      link: start("SERIE"),
    },
  },
  {
    word: "PERSONNAGE",
    slug: "personnage",
    twinSlug: "character",
    locale: "fr",
    metaTitle: "Garder le même personnage IA d'un plan à l'autre",
    metaDescription:
      "Pourquoi votre personnage IA change de visage à chaque plan, et comment le fixer : description de caméra, fiches de référence, appel par @. Avec les leçons vidéo.",
    title: "Le même visage",
    titleGold: "dans chaque plan.",
    lede:
      "Vous avez commenté PERSONNAGE. Un modèle vidéo ne se souvient de rien : à chaque plan, il repart de zéro. La cohérence ne vient pas d'un prompt parfait, elle vient d'une référence qu'on lui redonne à chaque fois. Voici comment je la construis.",
    case: {
      title: "Le Stitcher, identique dans les 40 plans",
      text:
        "Dans The Seam, chaque plan reçoit la fiche de production du personnage en référence. Le visage, la cicatrice et le manteau ne bougent pas d'une scène à l'autre.",
      video: lessonVideo(L("gardez-les-memes-visages-d-un-plan-a-l-autre"), "Leçon 3.3"),
    },
    steps: [
      {
        title: "Décrivez-le comme une caméra le verrait",
        text:
          "Forme du visage, signes distinctifs, vêtements, matière. Rien sur son humeur. Le bouton qui remplit la description depuis le script donne un premier jet à corriger.",
        lesson: L("decrivez-un-personnage-pour-l-ia"),
      },
      {
        title: "Générez des fiches qui tiennent",
        text: "De face, de côté, de dos. Régénérez jusqu'à ce que la fiche soit juste : tous les plans vont s'appuyer dessus.",
        lesson: L("storyboard-generez-des-fiches-de-reference-qui-tiennent"),
      },
      {
        title: "Appelez-le avec @ dans chaque plan",
        text:
          "Dans l'action du plan, @LE NOM attache la fiche à la case. Sans mention, le modèle ne sait pas qui il doit dessiner.",
        lesson: L("ecrivez-l-action-d-un-plan-et-appelez-vos-personnages-avec-arobase"),
      },
    ],
    trap: {
      title: "Décrire l'émotion au lieu du visage",
      text:
        "« Un homme triste et mystérieux » donne un visage différent à chaque essai. « Tête de lin en forme d'œuf, cicatrice cousue, manteau noir » donne le même. L'émotion, on la joue dans le plan.",
    },
    extra: {
      title: "Générateur de fiche personnage",
      text: "Décrivez votre personnage une fois, l'outil écrit le bloc à coller en tête de chaque prompt.",
      link: { href: `${SW}/fr/tools/ai-character-consistency-sheet`, label: "Ouvrir l'outil" },
    },
    cta: {
      title: "Créez vos personnages",
      text: "Importez votre script : vos personnages sont repérés, il reste à les décrire.",
      link: start("PERSONNAGE"),
    },
  },
  {
    word: "CAMERA",
    slug: "camera",
    twinSlug: "camera",
    locale: "fr",
    metaTitle: "Valeurs de plan et mouvements de caméra en vidéo IA",
    metaDescription:
      "Plan large, gros plan, travelling, dolly : choisir la bonne valeur et le bon mouvement pour chaque plan, puis l'écrire pour un modèle vidéo IA. Avec les leçons.",
    title: "Chaque mouvement de caméra",
    titleGold: "raconte quelque chose.",
    lede:
      "Vous avez commenté CAMERA. Un travelling n'est pas un effet, c'est une décision : on suit quelqu'un, on se rapproche d'un secret, on découvre un lieu. Voici comment je choisis le cadre et le mouvement de chaque plan avant de générer.",
    case: {
      title: "Le travelling qui suit le Stitcher sur la plaine",
      text:
        "Fixe, panoramique, travelling, dolly, grue, épaule, steadicam, zoom, et le texte libre quand la liste ne suffit pas. La leçon règle un vrai plan de The Seam.",
      video: lessonVideo(L("storyboard-reglez-le-mouvement-de-camera"), "Leçon 2.7"),
    },
    steps: [
      {
        title: "Choisissez la valeur de plan",
        text:
          "Dix valeurs, du très gros plan au plan d'ensemble, plus l'amorce, le subjectif et l'insert. L'aperçu au survol montre ce que chaque valeur garde dans le cadre.",
        lesson: L("choisissez-la-bonne-valeur-de-plan"),
      },
      {
        title: "Changez l'angle d'une case",
        text: "Plongée, contre-plongée, angle libre, recadrage, miroir : la même case vue autrement, sans réécrire le plan.",
        lesson: L("changez-l-angle-de-camera-d-une-case"),
      },
      {
        title: "Faites écrire le prompt vidéo",
        text:
          "Le directeur de prompt lit les plans d'une scène, leur valeur et leur mouvement, et écrit le prompt pour le modèle vidéo.",
        lesson: L("faites-ecrire-vos-prompts-video-par-le-directeur-de-prompt"),
      },
    ],
    trap: {
      title: "Faire bouger la caméra à chaque plan",
      text:
        "Si tout bouge, plus rien ne compte. Gardez le mouvement pour le plan qui en a besoin et laissez les autres fixes : c'est le contraste qui donne de la force au travelling.",
    },
    extra: {
      title: "Tous les mouvements de caméra, animés",
      text: "Chaque mouvement en animation, avec le prompt exact à copier dans votre modèle vidéo.",
      link: { href: `${SW}/fr/tools/camera-movement-prompts`, label: "Ouvrir l'outil" },
    },
    cta: {
      title: "Réglez vos plans",
      text: "Dans le storyboard, chaque plan a sa valeur et son mouvement en un clic.",
      link: start("CAMERA"),
    },
  },
  {
    word: "MCP",
    slug: "mcp",
    twinSlug: "mcp",
    locale: "fr",
    metaTitle: "Brancher ScreenWeaver à Claude ou ChatGPT avec le MCP",
    metaDescription:
      "Une adresse, une connexion, et votre assistant lit votre script, crée vos personnages et découpe vos plans dans ScreenWeaver. Le MCP expliqué pas à pas, sans clé API.",
    title: "Votre assistant IA",
    titleGold: "dans votre projet de film.",
    lede:
      "Vous avez commenté MCP. Le MCP de ScreenWeaver branche Claude, ChatGPT, Cursor ou VS Code sur votre projet. Vous lui donnez un roman, un webtoon ou une page de croquis : il écrit le script, crée les personnages et découpe les plans. Les images et la vidéo, c'est vous qui les générez dans l'app.",
    case: {
      title: "Une BD griffonnée devenue un film",
      text: "Le tutoriel complet : la connexion, puis une page de croquis transformée en plans, puis le film généré dans l'app.",
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
          "Collez l'adresse https://app.screenweaver.ai/api/mcp dans les connecteurs de votre assistant, puis connectez-vous avec votre compte ScreenWeaver. Aucune clé API.",
        lesson: L("branchez-screenweaver-a-claude-avec-le-mcp"),
      },
      {
        title: "Donnez-lui votre matière",
        text:
          "Un PDF, un épisode de webtoon, une photo de croquis. Sur Dracula, Claude a lu tout le roman et créé 11 personnages, 16 lieux, 8 objets, 32 scènes et 177 plans.",
        lesson: L("faites-travailler-claude-sur-votre-projet"),
      },
      {
        title: "Générez dans l'app",
        text:
          "L'assistant lit, écrit et organise. Il ne génère pas de vidéo et ne supprime pas de projet. Vous ouvrez le storyboard et vous lancez les images.",
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
      title: "Branchez votre assistant",
      text: "Créez votre compte ScreenWeaver, puis ajoutez le serveur MCP dans Claude ou ChatGPT.",
      link: start("MCP"),
    },
  },
  {
    word: "OUTIL",
    slug: "outil",
    twinSlug: "tool",
    locale: "fr",
    metaTitle: "Tester un nouveau modèle vidéo IA sur vos propres plans",
    metaDescription:
      "Un nouveau modèle vidéo sort chaque semaine. La méthode pour le tester sur vos propres plans dans Higgsfield, le comparer à celui que vous utilisez, et garder le meilleur.",
    title: "Le modèle du reel,",
    titleGold: "testé sur vos propres plans.",
    lede:
      "Vous avez commenté OUTIL. Un nouveau modèle se juge mal sur sa démo : elle est choisie pour briller. Le seul vrai test, c'est votre plan, avec votre personnage. Je le fais dans Higgsfield, qui réunit la plupart des modèles vidéo sous un seul compte.",
    case: {
      title: "Ce que je garde et ce que je jette dans Higgsfield",
      text:
        "Mon avis complet de réalisateur : les modèles disponibles, Cinema Studio, Elements, et l'endroit où l'outil s'arrête pour un film.",
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
          "Une case de votre storyboard ou une image de votre film, avec votre personnage dedans. Vous jugerez ce qui compte vraiment : le mouvement, le visage, la lumière.",
      },
      {
        title: "Lancez le même plan sur deux modèles",
        text:
          "Même image de départ, même consigne : le modèle du reel contre celui que vous utilisez déjà. Seedance, Kling, Veo, Sora et une vingtaine d'autres sont disponibles sous le même compte.",
      },
      {
        title: "Réglez la caméra dans Cinema Studio",
        text:
          "Caméra, objectif, ouverture, étalonnage. Et Elements garde vos personnages, lieux et accessoires d'un plan à l'autre.",
      },
      {
        title: "Gardez le meilleur, rangez-le dans le film",
        text:
          "Le plan retenu part au montage. En amont, le script, les personnages et le storyboard, je les prépare dans ScreenWeaver.",
      },
    ],
    trap: {
      title: "Changer de modèle à chaque sortie",
      text:
        "Un nouveau modèle vaut le coup s'il règle un problème que vous avez sur un vrai plan. Sinon, restez sur celui que vous maîtrisez : vous irez plus vite.",
    },
    extra: {
      title: "Mon avis complet sur Higgsfield",
      text: "Les forces, les limites et les petites lignes à lire avant de s'abonner.",
      link: { href: "/blog/higgsfield-avis-realisateur", label: "Lire l'avis" },
    },
    cta: {
      title: "Essayez Higgsfield",
      text: "Lien affilié : il soutient mon travail, sans surcoût pour vous.",
      link: { href: HIGGSFIELD_AFF, label: "Ouvrir Higgsfield" },
      affiliate: true,
      secondary: { href: utm(SW_START_FR, "OUTIL", "fr"), label: "Préparer le film dans ScreenWeaver" },
    },
  },
];
