import { outilPages } from "@/lib/outils-metadata";

/** Étape d'un mini-guide « comment ça marche » affiché sous l'outil. */
export type OutilStep = { title: string; desc: string };

/** Paire question/réponse, réutilisée pour l'affichage et le FAQPage JSON-LD. */
export type OutilFaqItem = { question: string; answer: string };

export type OutilContent = {
  /** Paragraphes d'introduction (contenu unique, indexable côté serveur). */
  intro: string[];
  /** Mini-guide d'utilisation. */
  how: OutilStep[];
  /** FAQ — rendue visuellement et exposée en FAQPage JSON-LD. */
  faq: OutilFaqItem[];
};

/**
 * Contenu éditorial unique par outil. Rendu server-side sous l'iframe pour
 * sortir ces pages du « thin content » : le contenu interactif vit dans une
 * iframe (donc faiblement attribué à l'URL parente), ce texte donne au moteur
 * de la matière réelle à indexer et alimente le FAQPage.
 */
const outilContent = {
  storyboard: {
    intro: [
      "Le storyboard reste l'étape qui transforme une suite d'images IA en véritable intention de mise en scène. Cet outil gratuit vous permet d'assembler vos plans générés (Midjourney, Flux, Seedream…), de les annoter et d'exporter un PDF paginé prêt à présenter à un client, une équipe ou un jury.",
      "Pensé pour un workflow de réalisation, il conserve l'ordre de vos plans, associe à chaque case une note de cadrage, de mouvement ou de lumière, et produit un document propre — sans inscription ni logiciel à installer.",
    ],
    how: [
      {
        title: "Importez vos plans",
        desc: "Ajoutez les images générées par vos outils IA dans l'ordre de votre séquence.",
      },
      {
        title: "Annotez chaque case",
        desc: "Indiquez la valeur de plan, le mouvement caméra, l'intention de lumière ou un dialogue.",
      },
      {
        title: "Exportez en PDF",
        desc: "Générez un storyboard paginé, prêt à partager ou imprimer pour valider votre direction artistique.",
      },
    ],
    faq: [
      {
        question: "Le générateur de storyboard est-il gratuit ?",
        answer:
          "Oui, l'outil est entièrement gratuit et fonctionne directement dans votre navigateur, sans inscription ni installation.",
      },
      {
        question: "Mes images sont-elles envoyées sur un serveur ?",
        answer:
          "Non : le montage et l'export PDF se font localement dans votre navigateur, vos plans ne quittent pas votre machine.",
      },
      {
        question: "Quels formats d'images puis-je importer ?",
        answer:
          "Les formats courants (PNG, JPG, WebP) issus de n'importe quel générateur d'images IA sont pris en charge.",
      },
      {
        question: "Puis-je ajouter des notes de réalisation sur chaque plan ?",
        answer:
          "Oui, chaque case dispose d'un champ texte pour la valeur de plan, le mouvement caméra, la lumière ou un dialogue.",
      },
      {
        question: "À quoi sert un storyboard pour un projet vidéo IA ?",
        answer:
          "Il fixe l'intention de mise en scène avant la génération vidéo (continuité, rythme, cadrage), ce qui évite de gaspiller des crédits sur des plans mal pensés.",
      },
    ],
  },
  budget: {
    intro: [
      "Produire une vidéo IA semble bon marché… jusqu'à ce qu'on additionne les abonnements, les crédits brûlés en essais et les révisions. Ce calculateur gratuit estime le coût réel d'un projet en convertissant les crédits Midjourney, Runway, Kling ou ElevenLabs en euros.",
      "Conçu pour cadrer un devis ou arbitrer entre deux outils, il vous évite les mauvaises surprises et vous aide à présenter un budget crédible à un client.",
    ],
    how: [
      {
        title: "Décrivez votre projet",
        desc: "Nombre de plans, durée, outils image, vidéo et audio envisagés.",
      },
      {
        title: "Renseignez abonnements et crédits",
        desc: "L'outil convertit les crédits de chaque plateforme en coût euro réel.",
      },
      {
        title: "Obtenez une estimation",
        desc: "Visualisez le budget total, le coût par plan et la marge à prévoir pour les révisions.",
      },
    ],
    faq: [
      {
        question: "Comment estimer le coût d'une vidéo générée par IA ?",
        answer:
          "Additionnez les abonnements mensuels, les crédits consommés par génération et une marge pour les essais ratés. Le calculateur fait cette addition pour vous.",
      },
      {
        question: "L'outil convertit-il les crédits en euros ?",
        answer:
          "Oui, il traduit les crédits Midjourney, Runway, Kling, ElevenLabs et d'autres plateformes en coût euro estimé.",
      },
      {
        question: "Faut-il créer un compte ?",
        answer:
          "Non, le calculateur est gratuit et fonctionne sans inscription, directement dans le navigateur.",
      },
      {
        question: "Pourquoi prévoir une marge de révisions ?",
        answer:
          "La génération IA implique des essais : un plan validé coûte souvent 3 à 10 générations. Intégrer cette marge évite de sous-estimer un devis.",
      },
      {
        question: "Le calcul est-il adapté à un usage client ?",
        answer:
          "Oui, il est pensé pour bâtir un devis crédible et expliquer la répartition des coûts à un client.",
      },
    ],
  },
  reversePrompt: {
    intro: [
      "Vous avez une image dont le rendu vous plaît, mais vous ne savez pas comment le reproduire ? Le reverse prompting analyse une image pour en reconstruire un prompt exploitable : composition, lumière, objectif, ambiance et style.",
      "Plutôt qu'une description vague, l'outil restitue un brief structuré comme une fiche de plan, que vous pouvez réutiliser et affiner dans votre générateur d'images IA préféré.",
    ],
    how: [
      {
        title: "Uploadez une image",
        desc: "Importez la référence visuelle dont vous voulez comprendre la recette.",
      },
      {
        title: "Analysez les composantes",
        desc: "L'outil isole le cadrage, la lumière, la palette, l'objectif et l'atmosphère.",
      },
      {
        title: "Récupérez un prompt",
        desc: "Copiez le prompt reconstruit et adaptez-le à votre sujet dans votre générateur IA.",
      },
    ],
    faq: [
      {
        question: "Qu'est-ce que le reverse prompting ?",
        answer:
          "C'est l'opération inverse de la génération : à partir d'une image, on reconstitue le prompt et les paramètres visuels qui permettent d'obtenir un rendu similaire.",
      },
      {
        question: "L'outil fonctionne-t-il avec toutes les images ?",
        answer:
          "Il fonctionne avec la plupart des images, générées par IA ou issues d'une photo, tant que le rendu visuel est lisible.",
      },
      {
        question: "Le prompt obtenu est-il en anglais ?",
        answer:
          "Le prompt est pensé pour être directement exploitable dans les générateurs d'images IA, qui répondent mieux à l'anglais ; vous pouvez l'adapter ensuite.",
      },
      {
        question: "Mes images sont-elles conservées ?",
        answer:
          "L'analyse vise un usage ponctuel : aucune image n'est publiée ni partagée par l'outil.",
      },
      {
        question: "Pourquoi reconstruire un prompt plutôt que copier l'image ?",
        answer:
          "Comprendre la recette (lumière, cadre, objectif) vous permet de l'appliquer à vos propres sujets avec cohérence, au lieu de dépendre d'une seule image.",
      },
    ],
  },
  annuaireImages: {
    intro: [
      "Le paysage des générateurs d'images IA change chaque mois. Cet annuaire interactif compare les plateformes gratuites — Midjourney et ses alternatives, modèles open source, outils en ligne — avec filtres, notes et limites gratuites pour trouver vite l'outil adapté à votre style.",
      "Chaque fiche résume les modèles supportés, les quotas gratuits et les cas d'usage, pour choisir sans tester dix outils à l'aveugle.",
    ],
    how: [
      {
        title: "Filtrez selon vos besoins",
        desc: "Style visuel, modèles supportés, limite gratuite ou niveau de prise en main.",
      },
      {
        title: "Comparez les fiches",
        desc: "Notes, quotas gratuits et points forts de chaque générateur, côte à côte.",
      },
      {
        title: "Choisissez votre outil",
        desc: "Identifiez le générateur d'images IA gratuit le plus adapté à votre projet.",
      },
    ],
    faq: [
      {
        question: "Quel est le meilleur générateur d'images IA gratuit ?",
        answer:
          "Cela dépend de votre style : certains excellent en photoréalisme, d'autres en illustration. L'annuaire vous laisse comparer notes, quotas et modèles pour trancher selon votre besoin.",
      },
      {
        question: "Ces générateurs d'images IA sont-ils vraiment gratuits ?",
        answer:
          "Chaque fiche précise la limite gratuite (nombre d'images, file d'attente, résolution). Beaucoup offrent un palier gratuit, parfois complété par une offre payante.",
      },
      {
        question: "L'annuaire est-il mis à jour ?",
        answer:
          "Oui, il est actualisé régulièrement pour suivre l'apparition de nouveaux modèles et l'évolution des offres gratuites.",
      },
      {
        question: "Existe-t-il des alternatives gratuites à Midjourney ?",
        answer:
          "Oui, plusieurs outils proposent une qualité proche avec un palier gratuit ; ils sont comparés dans l'annuaire avec leurs limites.",
      },
      {
        question: "Faut-il s'inscrire pour utiliser l'annuaire ?",
        answer: "Non, la comparaison est libre, gratuite et sans inscription.",
      },
    ],
  },
  annuaireAudio: {
    intro: [
      "Le son fait la moitié de l'émotion d'un film. Cet annuaire compare les IA audio — musique, voix, bruitages et sound design — avec filtres et score intelligent pour trouver l'outil adapté à votre projet vidéo IA.",
      "Voix off, nappe musicale, ambiance ou effet ponctuel : chaque fiche précise le type de rendu, la qualité et les conditions d'usage gratuit.",
    ],
    how: [
      {
        title: "Choisissez le type de son",
        desc: "Musique, voix de synthèse, bruitages (SFX) ou design sonore.",
      },
      {
        title: "Filtrez et comparez",
        desc: "Score intelligent, qualité, langues et limites gratuites par outil.",
      },
      {
        title: "Sélectionnez l'outil",
        desc: "Trouvez l'IA audio adaptée à l'ambiance de votre projet.",
      },
    ],
    faq: [
      {
        question: "Quelle IA choisir pour la musique d'une vidéo ?",
        answer:
          "Selon que vous cherchez une nappe d'ambiance ou une composition rythmée, l'annuaire compare les outils musicaux IA par qualité et usage gratuit.",
      },
      {
        question: "Peut-on générer des voix off réalistes avec l'IA ?",
        answer:
          "Oui, plusieurs outils de synthèse vocale proposent des voix naturelles multilingues ; ils sont comparés dans l'annuaire avec leurs limites gratuites.",
      },
      {
        question: "Qu'est-ce qu'un outil de SFX IA ?",
        answer:
          "C'est une IA qui génère des effets sonores et bruitages (pas, impacts, ambiances) à partir d'une description texte, utile pour habiller un plan.",
      },
      {
        question: "Ces outils audio sont-ils gratuits ?",
        answer:
          "Chaque fiche indique le palier gratuit disponible ; beaucoup proposent un quota gratuit complété par une offre payante.",
      },
      {
        question: "L'annuaire couvre-t-il la musique libre de droits ?",
        answer:
          "Il se concentre sur les IA génératives ; les conditions d'usage (commercial, attribution) sont signalées par fiche quand elles sont connues.",
      },
    ],
  },
} as const satisfies Partial<Record<keyof typeof outilPages, OutilContent>>;

export function getOutilContent(key: keyof typeof outilContent): OutilContent {
  return outilContent[key];
}

export { outilContent };
