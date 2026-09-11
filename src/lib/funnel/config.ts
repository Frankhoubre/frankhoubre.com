/**
 * Funnel « formation IA gratuite » : remplace l'ancien tunnel systeme.io.
 * Tout ce qui est partagé entre les pages, les emails et le tableau de bord
 * vit ici (chemins, liens sortants, vidéos, contenu des trois jours).
 */

export const FUNNEL_PATHS = {
  optin: "/formation-ia-gratuite",
  course: "/formation-ia-gratuite/cours",
  unsubscribed: "/formation-ia-gratuite/desinscription",
  admin: "/admin/funnel",
} as const;

export const SKOOL_URL = "https://www.skool.com/ai-studios";
export const SCREENWEAVER_URL = "https://screenweaver.ai/";
export const SUPPORT_EMAIL = "hello@businessdynamite.xyz";

/** Cookie posé après inscription : évite de re-proposer la formation. */
export const SUBSCRIBED_COOKIE = "fh_funnel_sub";

/** Événements comptés par le tableau de bord (ordre = ordre d'affichage). */
export const FUNNEL_EVENTS = [
  "optin_view",
  "optin_submit",
  "subscribe",
  "subscribe_repeat",
  "course_view",
  "click_screenweaver",
  "click_skool",
  "email_sent",
  "email_delivered",
  "email_opened",
  "email_clicked",
  "email_bounced",
  "email_complained",
  "unsubscribe",
] as const;

export type FunnelEvent = (typeof FUNNEL_EVENTS)[number];

export const FUNNEL_EVENT_LABELS: Record<FunnelEvent, string> = {
  optin_view: "Vues page d'inscription",
  optin_submit: "Formulaires envoyés",
  subscribe: "Nouveaux inscrits",
  subscribe_repeat: "Réinscriptions",
  course_view: "Vues page formation",
  click_screenweaver: "Clics ScreenWeaver",
  click_skool: "Clics AI Studios (Skool)",
  email_sent: "Emails programmés",
  email_delivered: "Emails délivrés",
  email_opened: "Emails ouverts",
  email_clicked: "Clics dans les emails",
  email_bounced: "Emails en erreur (bounce)",
  email_complained: "Signalés comme spam",
  unsubscribe: "Désinscriptions",
};

/** Événements dont on compte aussi les visiteurs uniques (par jour). */
export const UNIQUE_EVENTS: FunnelEvent[] = ["optin_view", "course_view"];

/** Événements acceptés depuis le navigateur (le reste vient du serveur). */
export const CLIENT_EVENTS: FunnelEvent[] = [
  "optin_view",
  "course_view",
  "click_screenweaver",
  "click_skool",
];

export type FunnelDay = {
  n: 1 | 2 | 3;
  slug: "jour-1" | "jour-2" | "jour-3";
  kicker: string;
  shortTitle: string;
  title: string;
  intro: string;
  points: readonly string[];
  mission: string;
  vimeoId: string;
  screenweaverCta: string;
  skoolCta: string;
};

export const FUNNEL_DAYS: readonly FunnelDay[] = [
  {
    n: 1,
    slug: "jour-1",
    kicker: "Jour 1 · La vision",
    shortTitle: "La vision",
    title: "Vous créez vos vidéos IA à l'envers.",
    intro:
      "Si vous commencez par générer, vous payez l'IA pour chercher votre idée. Aujourd'hui, vous allez définir l'émotion, le concept, l'image finale et les quelques plans qui méritent réellement d'exister.",
    points: [
      "Transformer une idée vague en promesse de film claire.",
      "Choisir une émotion, une révélation et une image finale forte.",
      "Construire votre premier projet directement dans ScreenWeaver.",
    ],
    mission:
      "Définir votre idée en une phrase et limiter votre film à six plans maximum.",
    vimeoId: "1210520480",
    screenweaverCta: "Créer mon projet dans ScreenWeaver",
    skoolCta: "Découvrir AI Studios",
  },
  {
    n: 2,
    slug: "jour-2",
    kicker: "Jour 2 · Le storyboard",
    shortTitle: "Le storyboard",
    title: "Voyez votre film avant de générer la moindre vidéo.",
    intro:
      "Le storyboard est l'étape qui transforme une idée en film visible. Vous allez apprendre à découper votre histoire plan par plan, à choisir les bons cadrages et à vérifier que chaque image sert réellement l'émotion avant de dépenser dans la génération vidéo.",
    points: [
      "Transformer votre scénario en une suite de plans clairs et cinématographiques.",
      "Choisir le cadrage, la composition et l'intention de chaque image.",
      "Tester le rythme, la lisibilité et la puissance de votre film avant de l'animer.",
    ],
    mission:
      "Créer dans ScreenWeaver un storyboard complet de quatre à six plans, puis sélectionner l'image qui définira toute la direction visuelle de votre projet.",
    vimeoId: "1210520481",
    screenweaverCta: "Construire mon storyboard",
    skoolCta: "Progresser avec AI Studios",
  },
  {
    n: 3,
    slug: "jour-3",
    kicker: "Jour 3 · Le montage de Lost Garden",
    shortTitle: "Le montage de Lost Garden",
    title: "Entrez dans le véritable montage de Lost Garden.",
    intro:
      "Je vous ouvre les coulisses du projet et vous montre concrètement comment j'ai transformé des dizaines de fichiers vidéo IA en un épisode cohérent : création du projet, classement des rushs, construction de la timeline, choix des prises et assemblage final.",
    points: [
      "Créer une structure de dossiers claire pour retrouver instantanément chaque plan.",
      "Importer, nommer et organiser les fichiers vidéo de Lost Garden dans le projet.",
      "Construire la timeline, sélectionner les meilleures prises et donner du rythme au film.",
    ],
    mission:
      "Créer votre propre projet de montage, organiser vos fichiers vidéo par scène et commencer à assembler votre première séquence comme une véritable production.",
    vimeoId: "1210520482",
    screenweaverCta: "Ouvrir mon projet dans ScreenWeaver",
    skoolCta: "Passer au niveau supérieur",
  },
] as const;

/** Distinctions affichées sur la page d'inscription (source : palmarès de Frank). */
export const FUNNEL_AWARDS = [
  { label: "Award Winner", festival: "Seoul International AI Film Festival" },
  { label: "Award Winner", festival: "Hollywood Indie Festival" },
  { label: "Award Winner", festival: "Australian AI Festival" },
  { label: "Finalist", festival: "Bangkok Movie Awards" },
  { label: "Selected", festival: "Top Shorts" },
  { label: "Selected", festival: "Los Angeles Film Awards" },
  { label: "Selected", festival: "Pulse Of Animation Festival" },
  { label: "1st Place Silver", festival: "Mondial Chroma Awards" },
  { label: "2nd Place Dreamina", festival: "Mondial Chroma Awards" },
] as const;

/** Questions posées sur la formation gratuite elle-même (page d'inscription). */
export const FUNNEL_FAQ = [
  {
    q: "C'est vraiment gratuit ? Pourquoi ?",
    a: "Oui, sans carte bancaire. Ces trois vidéos sont la première étape de ma formation complète AI Studios. Si la méthode vous parle, vous saurez exactement ce que vous rejoignez ensuite. Sinon, vous gardez les vidéos et la méthode, et on en reste là.",
  },
  {
    q: "Combien de temps ça prend ?",
    a: "Environ 24 minutes de vidéo en tout (12, 6 et 6 minutes), plus vos missions : une phrase pour votre idée, un storyboard de quatre à six plans, un projet de montage. Un jour par étape si vous suivez les emails, ou tout d'un coup si vous préférez.",
  },
  {
    q: "Je débute, je n'ai jamais fait de vidéo IA. C'est pour moi ?",
    a: "Oui. La méthode part de l'idée et du plan, pas de l'outil. Vous n'avez besoin d'aucune compétence en montage ni en prompt pour suivre les trois jours. C'est même mieux de commencer par là avant d'avoir pris de mauvaises habitudes.",
  },
  {
    q: "Il faut un ordinateur puissant ou des outils payants ?",
    a: "Non. Les vidéos se regardent en ligne et les missions sont de l'écriture et du storyboard. Elles s'appuient sur ScreenWeaver, mon outil d'écriture et de storyboard, mais vous pouvez aussi les faire avec vos outils habituels. Rien à installer.",
  },
  {
    q: "Quelle différence avec AI Studios ?",
    a: "Le challenge, c'est la méthode en trois jours, gratuite. AI Studios est la communauté et la formation complète sur Skool, à 7 euros par mois sans engagement. Vous n'avez aucune obligation de la rejoindre pour suivre le challenge.",
  },
  {
    q: "Que faites-vous de mon adresse email ?",
    a: "Elle sert à vous envoyer les accès et les emails du challenge, puis mes conseils pour réussir en IA. Chaque email contient un lien de désinscription en un clic. Le détail est dans la politique de confidentialité du site.",
  },
] as const;

/** Offre AI Studios telle qu'affichée sur l'ancien tunnel (à tenir à jour). */
export const SKOOL_OFFER = {
  priceLabel: "7 €",
  period: "par mois",
  members: "200+",
  trustpilotScore: "4,6/5",
  includes: [
    "Le module Étape 1 débloqué : « De l'idée à l'image et vidéo IA »",
    "La Méthode Film Mental IA offerte (valeur 67 €)",
    "L'accès à la communauté privée de 200+ créateurs IA",
    "Les échanges quotidiens et l'inspiration avec les membres",
  ],
  reviews: [
    {
      author: "Mickael L",
      text: "Excellente formation et formateur de talent. Une formation vivante, ultra concrète, évolutive et de haute qualité. Un réel plaisir de progresser leçon après leçon.",
    },
    {
      author: "Yves Yola",
      text: "Le top du top. Merci pour ta pédagogie Frank !",
    },
    {
      author: "Adekemi",
      text: "AI Studios vous détaille tout, une formation excellente.",
    },
  ],
  faq: [
    {
      q: "C'est fait pour moi si je débute ?",
      a: "Oui. La Méthode Film Mental offerte vous donne les bases pas à pas, et la communauté vous accompagne pour vos premières créations, même en partant de zéro.",
    },
    {
      q: "Qu'est-ce que je trouve concrètement à l'intérieur ?",
      a: "Le module Étape 1 de la formation (« De l'idée à l'image et vidéo IA ») débloqué, la Méthode Film Mental offerte, l'accès à la communauté privée de 200 créateurs IA et les échanges au quotidien.",
    },
    {
      q: "Est-ce que j'ai accès à toute la formation AI Studios ?",
      a: "À 7 € par mois, vous débloquez le module Étape 1, la Méthode Film Mental et la communauté. Les modules suivants (Étapes 2 à 5, masterclass et bonus) font partie de l'accès annuel complet, que vous pourrez prendre quand vous voudrez aller plus loin.",
    },
    {
      q: "Je peux annuler quand je veux ?",
      a: "Oui, en un clic, à tout moment. Aucun engagement. Vous gardez l'accès tant que vous êtes membre.",
    },
    {
      q: "Pourquoi seulement 7 € par mois ?",
      a: "Pour que le maximum de créateurs puissent rejoindre et que la communauté reste vivante et active. Plus on est nombreux à partager, plus chacun progresse vite.",
    },
  ],
} as const;
