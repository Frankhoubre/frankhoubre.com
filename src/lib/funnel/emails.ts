import { Resend } from "resend";
import {
  AI_STUDIOS_ANNUAL_URL,
  ANNUAL_OFFER,
  FUNNEL_DAYS,
  FUNNEL_PATHS,
  IMAGINODE_FACTS,
  IMAGINODE_URL,
  LOST_GARDEN_URL,
  REELS,
  SCREENWEAVER_FACTS,
  SCREENWEAVER_URL,
  SKOOL_OFFER,
  SKOOL_URL,
  SUPPORT_EMAIL,
} from "@/lib/funnel/config";
import { makeUnsubscribeToken } from "@/lib/funnel/security";
import {
  SEQUENCE_META,
  SEQUENCE_SEND_HOUR,
  type SequenceKey,
} from "@/lib/funnel/sequence";
import { baseUrl } from "@/lib/site";

/**
 * Séquence email du challenge, envoyée par Resend. L'email d'accès part tout
 * de suite ; les suivants sont programmés (Resend accepte une date d'envoi
 * jusqu'à 30 jours) : pas de cron à maintenir. Les identifiants renvoyés
 * permettent d'annuler les envois restants si la personne se désinscrit.
 *
 * Objectif de la séquence : donner la méthode (jours 1 à 3), prouver qu'elle
 * produit des films, puis ouvrir trois portes : AI Studios sur Skool,
 * ScreenWeaver (écriture, storyboard, continuité) et imaginode (génération).
 */

export type SequenceEmail = {
  key: SequenceKey;
  subject: string;
  /** Décalage en jours (0 = tout de suite, N = à 9 h heure de Paris J+N). */
  dayOffset: number;
  html: string;
  text: string;
};

function resendClient(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  return key ? new Resend(key) : null;
}

export function isResendConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY && process.env.RESEND_FROM);
}

function fromAddress(): string {
  return process.env.RESEND_FROM ?? "Frank Houbre <no-reply@frankhoubre.com>";
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function courseUrl(campaign: string, anchor?: string): string {
  const u = new URL(FUNNEL_PATHS.course, baseUrl);
  u.searchParams.set("utm_source", "email");
  u.searchParams.set("utm_medium", "funnel");
  u.searchParams.set("utm_campaign", campaign);
  if (anchor) u.hash = anchor;
  return u.toString();
}

/** Lien sortant marqué pour retrouver l'email d'origine dans les outils. */
function outUrl(base: string, campaign: string): string {
  const u = new URL(base);
  u.searchParams.set("utm_source", "frankhoubre");
  u.searchParams.set("utm_medium", "email");
  u.searchParams.set("utm_campaign", campaign);
  return u.toString();
}

function unsubscribeUrl(email: string): string {
  const u = new URL("/api/funnel/unsubscribe", baseUrl);
  u.searchParams.set("t", makeUnsubscribeToken(email));
  return u.toString();
}

type Block =
  | { type: "image"; src: string; alt: string }
  | { type: "p"; text: string }
  | { type: "cta"; label: string; href: string }
  | { type: "link"; label: string; href: string }
  | { type: "list"; items: string[] };

const FONT = "'Inter Tight', Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif";
const C = {
  bg: "#0b0b0c",
  panel: "#111214",
  line: "#2a2c30",
  cream: "#eeece5",
  stone: "#d8d6ce",
  fog: "#9ca3a8",
} as const;

const TOTAL = SEQUENCE_META.length;

function stepIndex(key: SequenceKey): string {
  const i = SEQUENCE_META.findIndex((m) => m.key === key) + 1;
  return `${String(i).padStart(2, "0")} / ${String(TOTAL).padStart(2, "0")}`;
}

/**
 * Gabarit HTML : même direction que le site (charbon, blanc chaud, lignes
 * fines, capitales espacées), en tableaux et styles inline pour les clients
 * mail. Couleurs fixées sur fond sombre : les modes sombres des messageries
 * n'ont rien à inverser.
 */
function renderHtml(opts: {
  firstName: string;
  blocks: Block[];
  unsubscribe: string;
  step: SequenceKey;
  kicker: string;
  /** Photogramme d'ouverture, sous l'en-tête et avant le titre. */
  image?: { src: string; alt: string };
}): string {
  const opening = opts.image
    ? `<tr><td style="padding:22px 0 4px;border:0;line-height:0;"><img src="${opts.image.src}" alt="${escapeHtml(opts.image.alt)}" width="600" style="display:block;width:100%;max-width:600px;height:auto;border:1px solid ${C.line};" /></td></tr>`
    : "";
  const p = (text: string) =>
    `<p style="margin:0 0 18px;font-family:${FONT};font-size:16px;line-height:1.65;color:${C.stone};">${text}</p>`;
  const body = opts.blocks
    .map((b) => {
      switch (b.type) {
        case "image":
          return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 26px;"><tr><td style="border:1px solid ${C.line};line-height:0;"><img src="${b.src}" alt="${escapeHtml(b.alt)}" width="598" style="display:block;width:100%;max-width:598px;height:auto;" /></td></tr></table>`;
        case "p":
          return p(escapeHtml(b.text));
        case "cta":
          return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:26px 0 28px;"><tr><td bgcolor="${C.cream}" style="background:${C.cream};border:1px solid ${C.cream};"><a href="${b.href}" style="display:inline-block;padding:15px 22px;font-family:${FONT};font-size:12px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:${C.bg};text-decoration:none;">${escapeHtml(b.label)} &nbsp;&rarr;</a></td></tr></table>`;
        case "link":
          return `<p style="margin:0 0 18px;font-family:${FONT};font-size:12px;letter-spacing:0.14em;text-transform:uppercase;line-height:1.6;"><a href="${b.href}" style="color:${C.cream};text-decoration:underline;">${escapeHtml(b.label)} &rarr;</a></p>`;
        case "list":
          return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 18px;">${b.items
            .map(
              (i) =>
                `<tr><td style="padding:10px 0;border-top:1px solid ${C.line};font-family:${FONT};font-size:15px;line-height:1.55;color:${C.stone};"><span style="color:${C.fog};">&mdash;&nbsp;&nbsp;</span>${escapeHtml(i)}</td></tr>`,
            )
            .join("")}</table>`;
      }
    })
    .join("");

  return `<!doctype html>
<html lang="fr">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="color-scheme" content="dark"><meta name="supported-color-schemes" content="dark"><title>${escapeHtml(opts.kicker)}</title></head>
<body style="margin:0;padding:0;background:${C.bg};" bgcolor="${C.bg}">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="${C.bg}" style="background:${C.bg};">
<tr><td align="center" style="padding:36px 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">
<tr><td style="padding:0 0 18px;border-bottom:1px solid ${C.line};">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
<td style="font-family:${FONT};font-size:13px;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;color:${C.cream};">Frank Houbre</td>
<td align="right" style="font-family:${FONT};font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:${C.fog};">${stepIndex(opts.step)}</td>
</tr></table>
</td></tr>
${opening}
<tr><td style="padding:26px 0 6px;font-family:${FONT};font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:${C.fog};">${escapeHtml(opts.kicker)}</td></tr>
<tr><td style="padding:0 0 26px;font-family:${FONT};font-size:16px;line-height:1.65;color:${C.stone};">Bonjour${opts.firstName ? ` ${escapeHtml(opts.firstName)}` : ""},</td></tr>
<tr><td>
${body}
<p style="margin:26px 0 0;font-family:${FONT};font-size:16px;line-height:1.65;color:${C.cream};">Frank</p>
<p style="margin:4px 0 0;font-family:${FONT};font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:${C.fog};">Réalisateur IA, formateur</p>
</td></tr>
<tr><td style="padding:30px 0 0;border-top:1px solid ${C.line};font-family:${FONT};font-size:12px;line-height:1.6;color:${C.fog};">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:26px;"><tr>
<td style="font-family:${FONT};font-size:12px;line-height:1.6;color:${C.fog};">Vous recevez cet email parce que vous avez demandé la formation gratuite sur frankhoubre.com. Une question : <a href="mailto:${escapeHtml(SUPPORT_EMAIL)}" style="color:${C.stone};">${escapeHtml(SUPPORT_EMAIL)}</a>.<br>
<a href="${opts.unsubscribe}" style="color:${C.fog};text-decoration:underline;">Ne plus recevoir ces emails</a></td>
</tr></table>
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}

function renderText(opts: {
  firstName: string;
  blocks: Block[];
  unsubscribe: string;
}): string {
  const lines = [`Bonjour${opts.firstName ? ` ${opts.firstName}` : ""},`, ""];
  for (const b of opts.blocks) {
    switch (b.type) {
      case "image":
        break;
      case "p":
        lines.push(b.text, "");
        break;
      case "cta":
      case "link":
        lines.push(`${b.label} : ${b.href}`, "");
        break;
      case "list":
        lines.push(...b.items.map((i) => `- ${i}`), "");
        break;
    }
  }
  lines.push(
    "Frank",
    "",
    "--",
    `Vous recevez cet email parce que vous avez demandé la formation gratuite sur frankhoubre.com. Une question : ${SUPPORT_EMAIL}.`,
    `Ne plus recevoir ces emails : ${opts.unsubscribe}`,
  );
  return lines.join("\n");
}

type Spec = { key: SequenceKey; subject: string; blocks: Block[] };

/**
 * Les quinze emails. Chaque email donne quelque chose avant de demander, et
 * ne porte qu'un seul appel à l'action principal. Les chiffres viennent de
 * config.ts (offres relevées sur les pages publiques), jamais d'ici.
 */
/** Photogramme d'ouverture de chaque email, généré pour le tunnel (FLUX.2, 80 mm, bokeh). */
const EMAIL_IMAGES: Record<SequenceKey, string> = {
  acces: "Un réalisateur écrit une phrase dans un carnet, à l'aube, devant de grandes fenêtres",
  "jour-2": "Une main épingle une case de storyboard sur un mur déjà couvert de croquis",
  "jour-3": "Silhouette d'un monteur devant deux écrans de timeline dans une salle sombre",
  preuve: "Salle de projection vide, faisceau du projecteur vers l'écran",
  offre: "Trois créateurs autour d'un écran dans un petit studio de nuit",
  personnages: "Un personnage en long manteau devant un fond gris de studio, son profil dans un miroir",
  credits: "Une main tient un photogramme 35 mm devant la lumière d'une fenêtre",
  decors: "Maquette d'une rue sous la pluie sur un établi de décorateur, petites lumières allumées",
  prompts: "Machine à écrire et page à demi tapée sous une lampe, pluie sur la vitre",
  montage: "Bandes de pellicule sur une table lumineuse, une main marque un photogramme",
  "30-jours": "Une jeune femme regarde son propre court-métrage sur une tablette, lumières de la ville derrière",
  objections: "Un ordinateur portable ouvert sur une table de cuisine la nuit, tasse de café, carnet",
  annuel: "Un mur de studio couvert de centaines de cases de storyboard, un réalisateur en bas",
  outils: "Établi de réalisateur vu de haut : ordinateur, tablette, carnet, clap",
  derniere: "Couloir de béton sombre, trois portes fermées, la lumière filtre sous une seule",
};

function opening(key: SequenceKey): { src: string; alt: string } {
  return {
    src: new URL(`/images/formation/emails/${key}.jpg`, baseUrl).toString(),
    alt: EMAIL_IMAGES[key],
  };
}

function specs(): Spec[] {
  const [d1, d2, d3] = FUNNEL_DAYS;
  const skool = (c: string) => outUrl(SKOOL_URL, c);
  const sw = (c: string) => outUrl(SCREENWEAVER_URL, c);
  const im = (c: string) => outUrl(IMAGINODE_URL, c);
  const annual = (c: string) => outUrl(AI_STUDIOS_ANNUAL_URL, c);

  return [
    {
      key: "acces",
      subject: "Vos 3 vidéos sont ouvertes (commencez par celle-ci)",
      blocks: [
        {
          type: "p",
          text: "Bienvenue dans le challenge. Les trois vidéos sont déjà en ligne, sans attendre. Je vous conseille quand même un jour à la fois : chaque étape prépare la suivante, et la mission du jour tient en une demi-heure.",
        },
        { type: "cta", label: "Ouvrir la vidéo 1 (12 min)", href: courseUrl("acces", d1.slug) },
        {
          type: "p",
          text: `Jour 1, la vision. La plupart des gens ouvrent un générateur, tapent une idée vague et cherchent leur film dans les résultats. C'est le meilleur moyen de jeter vos crédits par les fenêtres. On fait l'inverse : l'émotion, le concept, l'image finale, puis les quelques plans qui méritent d'exister.`,
        },
        { type: "p", text: `Votre mission du jour : ${d1.mission}` },
        {
          type: "p",
          text: "Où l'écrire ? Dans ScreenWeaver, mon outil d'écriture et de storyboard. La partie écriture est gratuite, projets illimités, format scénario professionnel. Créez votre projet, posez votre phrase dedans, et gardez-le ouvert : on y revient demain.",
        },
        { type: "link", label: "Créer mon projet gratuit dans ScreenWeaver", href: sw("acces") },
        { type: "p", text: "Demain matin, 9 h : le storyboard." },
      ],
    },
    {
      key: "jour-2",
      subject: "Jour 2 : votre film en six images, avant le moindre crédit vidéo",
      blocks: [
        {
          type: "p",
          text: "Hier, vous avez posé votre idée en une phrase. Aujourd'hui, on la rend visible. Le storyboard est l'étape que presque tout le monde saute, et c'est précisément là que se joue le coût de votre film : une image coûte une fraction d'une vidéo, alors on valide chaque plan en image avant d'animer quoi que ce soit.",
        },
        { type: "cta", label: "Voir la vidéo du Jour 2 (6 min)", href: courseUrl("jour-2", d2.slug) },
        { type: "list", items: [...d2.points] },
        { type: "p", text: `Votre mission du jour : ${d2.mission}` },
        {
          type: "p",
          text: "Dans ScreenWeaver, le storyboard se construit à partir de vos scènes : chaque image reste reliée au plan qu'elle illustre, et quand vous changez le texte, vous savez exactement quelle image refaire. Le module storyboard est en bêta ; l'écriture et le découpage en plans restent gratuits.",
        },
        { type: "link", label: "Construire mon storyboard dans ScreenWeaver", href: sw("jour-2") },
        { type: "p", text: "Demain, je vous ouvre le projet de montage de Lost Garden, avec les vrais fichiers." },
      ],
    },
    {
      key: "jour-3",
      subject: "Jour 3 : je vous ouvre le montage de Lost Garden",
      blocks: [
        {
          type: "p",
          text: "Dernier jour du challenge. Vous avez une vision et un storyboard, il reste à assembler. Dans cette vidéo, vous êtes dans mon vrai projet : comment je classe des dizaines de rushs IA, comment je construis la timeline, et comment je choisis les prises pour que l'épisode tienne debout.",
        },
        { type: "cta", label: "Voir le montage de Lost Garden (6 min)", href: courseUrl("jour-3", d3.slug) },
        { type: "list", items: [...d3.points] },
        { type: "p", text: `Votre mission du jour : ${d3.mission}` },
        {
          type: "p",
          text: "Si vous avez fait les trois missions, vous avez déjà une méthode de production. Pas une théorie : une phrase, six images validées, un projet de montage organisé. Demain, je vous montre ce que cette méthode donne à l'échelle d'un épisode entier.",
        },
      ],
    },
    {
      key: "preuve",
      subject: "17 minutes d'animé, seul, avec l'IA (la preuve)",
      blocks: [
        {
          type: "p",
          text: "Vous voulez créer un film, un animé, une pub ou un univers visuel avec l'IA ? Alors regardez d'abord ça.",
        },
        { type: "cta", label: "Regarder Lost Garden (17 min)", href: outUrl(LOST_GARDEN_URL, "preuve") },
        {
          type: "p",
          text: "J'ai réalisé cet épisode d'animé de 17 minutes avec un workflow IA. Seul. Sans studio, sans équipe d'animation, sans attendre qu'un producteur me donne la permission.",
        },
        {
          type: "p",
          text: "Et dites-vous bien une chose : je n'ai rien fait d'autre que ce que vous avez vu en trois jours, répété plan après plan. Une idée tenue en une phrase. Un storyboard validé en image. La génération seulement ensuite. Puis le montage, avec des rushs classés par scène.",
        },
        {
          type: "p",
          text: "Depuis, des entreprises m'appellent pour former leurs équipes de production. Ronces, VOIDBORN et Lost Garden sont passés dans neuf festivals internationaux. Alors certes, ça demande du travail. Mais il y a trois ans, cet épisode aurait demandé une équipe et un budget que je n'avais pas.",
        },
        {
          type: "p",
          text: "Ceux qui vont tirer leur épingle du jeu ne tapent pas trois prompts au hasard. Ils apprennent à diriger : choisir, recommencer quand le résultat est mauvais, tenir un personnage sur quarante plans. C'est exactement ce que je vous apprends, et demain je vous explique comment, et pour combien.",
        },
        { type: "link", label: "Revoir les trois vidéos du challenge", href: courseUrl("preuve") },
      ],
    },
    {
      key: "offre",
      subject: "AI Studios à 7 € par mois : ce que vous débloquez exactement",
      blocks: [
        {
          type: "p",
          text: "Vous avez la méthode. Ce qui vous manque maintenant, ce sont deux choses : la suite du programme, et un regard extérieur sur vos plans. C'est à ça que sert AI Studios, ma communauté sur Skool. Voici ce que vous débloquez, poste par poste.",
        },
        {
          type: "list",
          items: [
            "Le module Étape 1 de la formation complète, « De l'idée à l'image et vidéo IA », débloqué dès votre arrivée.",
            "La Méthode Film Mental IA, offerte. Vendue 67 € à part : comment tirer d'une seule idée une source de prompts adaptés à votre univers.",
            `Une communauté privée de ${SKOOL_OFFER.members} créateurs IA qui postent leurs plans, leurs prompts et leurs ratés, tous les jours.`,
            "Mes coulisses chaque semaine : ce que j'ai produit, ce qui a marché, ce que j'ai jeté.",
            "Des retours personnalisés sur vos créations, par écrit ou en vidéo.",
          ],
        },
        {
          type: "p",
          text: `Le prix : ${SKOOL_OFFER.priceLabel} ${SKOOL_OFFER.period}. Sans engagement, vous partez en un clic. Pourquoi si peu ? Parce que je veux que le maximum de créateurs rejoignent, et qu'une communauté ne vit que si elle est nombreuse et active.`,
        },
        { type: "cta", label: `Rejoindre AI Studios à ${SKOOL_OFFER.priceLabel} par mois`, href: skool("offre") },
        {
          type: "p",
          text: "Une seule chose que je vous demande en arrivant : postez le storyboard de votre challenge. Vous aurez un retour dessus, et c'est souvent là que le projet décolle.",
        },
      ],
    },
    {
      key: "personnages",
      subject: "Votre personnage change de visage à chaque plan ? Voici le vrai coupable",
      blocks: [
        {
          type: "p",
          text: "C'est le problème numéro un en vidéo IA. Le personnage est parfait sur un plan. Au plan suivant, le nez a changé, le manteau aussi, et toute la crédibilité de votre film s'effondre. Beaucoup accusent l'outil. Le vrai coupable, dans la majorité des cas : le personnage n'a jamais été verrouillé.",
        },
        {
          type: "p",
          text: "Quand vous décrivez votre héros avec des mots, l'IA sort la moyenne de tous les héros qu'elle connaît, et cette moyenne change à chaque génération. Ce qu'il lui faut, c'est ce qu'on appelle une character sheet : la même personne vue de face, de profil et de dos, en lumière neutre.",
        },
        {
          type: "list",
          items: [
            "Générez la fiche une fois : trois vues, même tenue, fond simple.",
            "Donnez-la en référence à chaque génération, image comme vidéo. Sans référence, l'IA imagine l'arrière de votre personnage, et il change à chaque fois.",
            "Ne retouchez jamais la description de base en cours de projet. Une tenue qui change, c'est une nouvelle fiche.",
          ],
        },
        {
          type: "p",
          text: `Pour faire ça sans jongler entre dix outils, j'ai construit imaginode, mon studio image et vidéo en ligne : ${IMAGINODE_FACTS.models} modèles dans un seul abonnement, et un système de références pensé pour garder le même personnage d'une image à l'autre. Vous avez ${IMAGINODE_FACTS.freeImages} images offertes à l'inscription, sans carte bancaire : de quoi générer votre première fiche.`,
        },
        { type: "cta", label: `Créer ma fiche personnage (${IMAGINODE_FACTS.freeImages} images offertes)`, href: im("personnages") },
        { type: "link", label: "Voir le reel sur les personnages cohérents", href: REELS.personnages },
      ],
    },
    {
      key: "credits",
      subject: "1 crédit pour une image, 26 pour cinq secondes de vidéo",
      blocks: [
        {
          type: "p",
          text: `Un chiffre qui change la manière de travailler. Sur imaginode, une image coûte à partir de ${IMAGINODE_FACTS.imageMinCredits} crédit. Cinq secondes de vidéo, à partir de ${IMAGINODE_FACTS.videoMinCredits}. Autrement dit, vous pouvez valider les six plans de votre storyboard en image pour moins qu'une seule vidéo ratée.`,
        },
        {
          type: "p",
          text: "C'est toute la logique du challenge : on ne lance une génération vidéo que sur une image déjà validée. Le cadrage est bon, le personnage est le bon, la lumière est la bonne. La vidéo n'a plus qu'à animer. Faites l'inverse, et chaque essai vidéo devient un pari à 26 crédits.",
        },
        {
          type: "p",
          text: `Deux détails qui comptent quand on teste beaucoup : sur imaginode, une génération qui échoue est remboursée automatiquement, et vous pouvez commencer sans abonnement, ${IMAGINODE_FACTS.payAsYouGo}. L'abonnement Starter est à ${IMAGINODE_FACTS.starterPrice} par mois pour ${IMAGINODE_FACTS.starterCredits} crédits, si vous produisez régulièrement.`,
        },
        { type: "cta", label: `Tester imaginode avec ${IMAGINODE_FACTS.freeImages} images offertes`, href: im("credits") },
        {
          type: "p",
          text: "Ma règle, celle que j'applique sur mes propres films : je n'anime jamais un plan que je ne serais pas prêt à encadrer en image.",
        },
      ],
    },
    {
      key: "decors",
      subject: "Vos décors changent d'un plan à l'autre ? La bible de projet règle ça",
      blocks: [
        {
          type: "p",
          text: "On pense d'abord aux personnages. Puis on se rend compte que les décors dérivent tout autant : la pièce change de forme, la rue ne ressemble plus à celle du plan d'avant, la lumière et les matières bougent sans raison. Le spectateur ne sait pas le formuler, mais il le sent : le film paraît moins maîtrisé.",
        },
        {
          type: "p",
          text: "La cause est la même que pour les personnages. Le décor n'a jamais été posé comme une base de continuité. Sur mes projets, chaque lieu a sa fiche dans ce qu'on appelle la bible de projet.",
        },
        {
          type: "list",
          items: [
            "Une image de référence par lieu, validée avant le premier plan.",
            "Une description fixe : matières, époque, lumière dominante, deux ou trois éléments reconnaissables.",
            "La liste des objets qui reviennent (une voiture, une lampe, une arme), avec leur image.",
          ],
        },
        {
          type: "p",
          text: "C'est exactement pour ça que ScreenWeaver suit la continuité des personnages, des lieux et des objets à l'échelle du projet, et relie chaque image de storyboard à sa scène. Vous ouvrez la scène, vous voyez ce qui doit rester identique. La partie écriture et bible est gratuite.",
        },
        { type: "cta", label: "Ouvrir ma bible de projet dans ScreenWeaver", href: sw("decors") },
      ],
    },
    {
      key: "prompts",
      subject: "N'achetez jamais de prompts (faites ça à la place)",
      blocks: [
        {
          type: "p",
          text: "Beaucoup de gens achètent encore des packs de prompts. Le problème, c'est qu'ils ont été écrits pour le projet, le style et les références de quelqu'un d'autre. Au début, ça va plus vite. Très vite, on est bloqué, parce qu'un vrai projet demande des prompts adaptés à votre univers, à votre ton, à vos personnages.",
        },
        {
          type: "p",
          text: "La bonne nouvelle : si vous avez fait le challenge, vous avez déjà la matière. Une phrase, une émotion, une image finale, une fiche personnage, une bible de lieux. À partir de là, les prompts se déduisent, presque sans limite, et ils restent cohérents entre eux.",
        },
        {
          type: "p",
          text: "C'est ce que j'ai formalisé dans la Méthode Film Mental IA : comment partir d'une idée simple et en tirer une source de prompts professionnels, à la demande, sans jamais repartir de zéro. Je la vends 67 € à part. Elle est offerte quand vous rejoignez AI Studios.",
        },
        { type: "cta", label: `Récupérer la Méthode Film Mental avec AI Studios (${SKOOL_OFFER.priceLabel} par mois)`, href: skool("prompts") },
        {
          type: "p",
          text: "Et si vous préférez continuer avec vos outils, gardez au moins ceci : un prompt n'est jamais bon en soi. Il est bon pour un projet.",
        },
      ],
    },
    {
      key: "montage",
      subject: "Ce que je coupe en premier au montage",
      blocks: [
        {
          type: "p",
          text: "Vous pouvez avoir de très bons plans. Si le montage ne suit pas, le film reste plat. Voici les décisions que je prends sur chaque projet, dans l'ordre, telles que vous les avez vues sur Lost Garden.",
        },
        {
          type: "list",
          items: [
            "Je classe avant de monter. Un dossier par scène, les rushs nommés par plan. Sinon, je passe plus de temps à chercher qu'à choisir.",
            "Je coupe un plan pour ce qu'il apporte à l'émotion, jamais parce qu'il a coûté des crédits. Un plan cher et inutile reste inutile.",
            "Un mouvement de caméra qui tournoie sans raison, je le coupe entièrement. Le spectateur retient l'image forte, pas l'effet.",
            "Je garde une seule prise par plan dans la timeline. Les autres restent dans le dossier, pas sous les yeux.",
          ],
        },
        { type: "cta", label: "Revoir le montage de Lost Garden", href: courseUrl("montage", d3.slug) },
        {
          type: "p",
          text: "Dans AI Studios, vous voyez ce travail chaque semaine dans mes coulisses : ce que je monte, ce que je jette, et pourquoi. C'est là que le regard se forme.",
        },
        { type: "link", label: `Rejoindre AI Studios (${SKOOL_OFFER.priceLabel} par mois)`, href: skool("montage") },
      ],
    },
    {
      key: "30-jours",
      subject: "Ce que vous pouvez avoir en main dans 30 jours",
      blocks: [
        {
          type: "p",
          text: "Quand on débute, on imagine qu'il faut des mois avant d'obtenir quelque chose de montrable. Avec un cadre, 30 jours suffisent pour un premier résultat réel. Pas un long-métrage. Mais quelque chose que vous pouvez envoyer à un client ou poster sans rougir.",
        },
        {
          type: "list",
          items: [
            "Un teaser cinématique de trente secondes, avec un personnage qui reste le même du début à la fin.",
            "Une publicité pour un produit, un restaurant, un service, peu importe.",
            "Une scène d'animé, dans un style que vous tenez d'un plan à l'autre.",
            "Un mini-univers cohérent : trois lieux, deux personnages, une bible, prêt à grandir.",
          ],
        },
        {
          type: "p",
          text: "Ce premier mois change tout, parce que vous cessez de regarder vos idées comme des envies floues. Vous les voyez comme des projets possibles, avec un pipeline, des réflexes, et une méthode qui vous évite de tourner en rond.",
        },
        {
          type: "p",
          text: `C'est ce qu'on fait ensemble dans AI Studios : vous postez votre avancée, vous avez un retour, vous corrigez, vous avancez. ${SKOOL_OFFER.priceLabel} ${SKOOL_OFFER.period}, sans engagement.`,
        },
        { type: "cta", label: "Commencer mes 30 jours dans AI Studios", href: skool("30-jours") },
      ],
    },
    {
      key: "objections",
      subject: "« Je débute », « pas le temps », « pas de gros PC » : mes réponses",
      blocks: [
        {
          type: "p",
          text: "Voici les trois freins qu'on m'écrit le plus souvent, et ce que je réponds, sans langue de bois.",
        },
        {
          type: "p",
          text: "« Je débute totalement. » Tant mieux. Vous n'avez pas de mauvaises habitudes à désapprendre. Le module Étape 1 part de l'idée, pas de l'outil, et la Méthode Film Mental vous donne les bases pas à pas. Les membres qui progressent le plus vite sont rarement ceux qui connaissaient déjà dix logiciels.",
        },
        {
          type: "p",
          text: "« Je n'ai pas le temps. » Le challenge, c'est 24 minutes de vidéo et trois missions courtes. Dans AI Studios, vous avancez à votre rythme, une vidéo à la fois, et la communauté répond quand vous êtes bloqué, pas à heure fixe.",
        },
        {
          type: "p",
          text: "« Je n'ai pas un ordinateur puissant. » Peu importe la puissance de votre ordinateur : les outils que j'utilise tournent dans le navigateur, imaginode fonctionne même sur téléphone. Votre machine ne génère rien, elle affiche.",
        },
        {
          type: "p",
          text: `Et le prix : ${SKOOL_OFFER.priceLabel} ${SKOOL_OFFER.period}, sans engagement, résiliable en un clic. Vous restez le temps que vous voulez, vous partez quand vous voulez.`,
        },
        { type: "cta", label: "Rejoindre AI Studios", href: skool("objections") },
        {
          type: "p",
          text: `Une autre question ? Répondez à cet email, il arrive directement chez moi.`,
        },
      ],
    },
    {
      key: "annuel",
      subject: `L'accès annuel AI Studios : ${ANNUAL_OFFER.videos} vidéos et ${ANNUAL_OFFER.guaranteeDays} jours pour changer d'avis`,
      blocks: [
        {
          type: "p",
          text: `L'abonnement à ${SKOOL_OFFER.priceLabel} ouvre l'Étape 1 et la communauté. Certains d'entre vous veulent tout le chemin, tout de suite. C'est l'accès annuel.`,
        },
        {
          type: "list",
          items: [
            "Les cinq étapes de la formation : de l'idée à l'image et la vidéo, la mise en scène, le montage, le son, jusqu'au portfolio et aux clients.",
            `Plus de ${ANNUAL_OFFER.videos} vidéos, et de nouvelles vidéos ajoutées chaque semaine pendant vos douze mois.`,
            "Les masterclass, les bonus, les workflows prêts à l'emploi, et mes coulisses.",
            "La communauté Skool, avec mes retours sur vos créations.",
          ],
        },
        {
          type: "p",
          text: `Le tarif affiché aujourd'hui sur la page est de ${ANNUAL_OFFER.price} au lieu de ${ANNUAL_OFFER.regularPrice}, en un seul paiement pour douze mois. Et vous avez ${ANNUAL_OFFER.guaranteeDays} jours pour changer d'avis : si la formation ne vous convient pas, vous êtes remboursé.`,
        },
        { type: "cta", label: "Voir l'accès annuel", href: annual("annuel") },
        {
          type: "p",
          text: `Si ${SKOOL_OFFER.priceLabel} par mois vous suffit pour l'instant, restez-y, c'est très bien aussi. L'annuel est pour celles et ceux qui savent déjà qu'ils veulent en vivre.`,
        },
      ],
    },
    {
      key: "outils",
      subject: "Mon pipeline complet, outil par outil (et ce que ça coûte)",
      blocks: [
        {
          type: "p",
          text: "On me demande souvent quels outils j'utilise. Voici la chaîne exacte, dans l'ordre du challenge, avec ce que chaque étape coûte réellement.",
        },
        {
          type: "list",
          items: [
            "Écriture, découpage en plans, bible de projet : ScreenWeaver. Gratuit pour l'écriture, projets illimités, export PDF et Final Draft.",
            `Storyboard : ScreenWeaver aussi, module en bêta à ${SCREENWEAVER_FACTS.storyboardBeta}, chaque image reliée à sa scène.`,
            `Génération image et vidéo : imaginode. ${IMAGINODE_FACTS.models} modèles dans un seul abonnement, références pour tenir les personnages, échec remboursé. ${IMAGINODE_FACTS.freeImages} images offertes pour tester.`,
            "Montage : un logiciel de montage classique, avec les rushs classés par scène, comme dans la vidéo du Jour 3.",
          ],
        },
        {
          type: "p",
          text: "Vous ne payez que l'IA et l'outil. Pas de pack de prompts, pas de plugin miracle, pas de machine à 3 000 €. La différence se fait sur la méthode, et vous l'avez.",
        },
        { type: "cta", label: "Ouvrir imaginode", href: im("outils") },
        { type: "link", label: "Ouvrir ScreenWeaver", href: sw("outils") },
      ],
    },
    {
      key: "derniere",
      subject: "Trois portes, une seule à ouvrir aujourd'hui",
      blocks: [
        {
          type: "p",
          text: "C'est mon dernier email de cette série. En deux semaines, vous avez reçu la méthode complète : l'idée, le storyboard, la génération sur image validée, le montage. Il reste trois portes, et je vous conseille de n'en ouvrir qu'une aujourd'hui.",
        },
        {
          type: "list",
          items: [
            `AI Studios, ${SKOOL_OFFER.priceLabel} ${SKOOL_OFFER.period} : le programme, la Méthode Film Mental offerte, et des retours sur vos plans.`,
            "ScreenWeaver, gratuit : votre projet, vos personnages, vos lieux, votre découpage au même endroit.",
            `imaginode, ${IMAGINODE_FACTS.freeImages} images offertes : générer sur des références, valider en image, animer ensuite.`,
          ],
        },
        {
          type: "p",
          text: "À choisir, je prendrais AI Studios. Les outils, vous les apprendrez de toute façon. Ce qui vous fera gagner des mois, c'est un regard extérieur sur vos premiers plans, avant d'avoir brûlé vos crédits dessus.",
        },
        { type: "cta", label: `Rejoindre AI Studios à ${SKOOL_OFFER.priceLabel} par mois`, href: skool("derniere") },
        {
          type: "p",
          text: "Quoi qu'il se passe, gardez les trois vidéos, elles restent accessibles. Prenez soin de vous et de vos projets.",
        },
        { type: "link", label: "Revoir le challenge", href: courseUrl("derniere") },
      ],
    },
  ];
}

export function buildSequence(email: string, firstName: string): SequenceEmail[] {
  const unsubscribe = unsubscribeUrl(email);
  const name = firstName.trim();
  const byKey = new Map(specs().map((s) => [s.key, s]));

  return SEQUENCE_META.map((meta) => {
    const spec = byKey.get(meta.key);
    if (!spec) throw new Error(`Email de séquence manquant : ${meta.key}`);
    return {
      key: meta.key,
      subject: spec.subject,
      dayOffset: meta.dayOffset,
      html: renderHtml({ firstName: name, blocks: spec.blocks, unsubscribe, step: meta.key, kicker: meta.kicker, image: opening(meta.key) }),
      text: renderText({ firstName: name, blocks: spec.blocks, unsubscribe }),
    };
  });
}

/** Instant UTC correspondant à `hour` h (heure de Paris) dans `days` jours. */
export function parisMorning(days: number, hour = SEQUENCE_SEND_HOUR, now = new Date()): Date {
  const target = new Date(now.getTime() + days * 86_400_000);
  const parts = new Intl.DateTimeFormat("fr-CA", {
    timeZone: "Europe/Paris",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(target);
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value);
  // Première estimation en UTC, puis correction par le décalage Paris réel.
  const guess = new Date(Date.UTC(get("year"), get("month") - 1, get("day"), hour));
  const parisHour = Number(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Paris",
      hour: "2-digit",
      hourCycle: "h23",
    })
      .formatToParts(guess)
      .find((p) => p.type === "hour")?.value,
  );
  const offsetHours = ((parisHour - hour + 36) % 24) - 12;
  return new Date(guess.getTime() - offsetHours * 3_600_000);
}

export type SequenceStepResult = {
  key: SequenceKey;
  subject: string;
  id: string | null;
  scheduledAt: string | null;
  error: string | null;
};

export type SequenceResult = {
  sent: number;
  scheduledIds: string[];
  steps: SequenceStepResult[];
  errors: string[];
};

/** Étapes prévues, sans envoi : sert à afficher « programmé » avant que Resend ait répondu. */
export function plannedSteps(email: string, firstName: string, part: "immediate" | "scheduled"): SequenceStepResult[] {
  return buildSequence(email, firstName)
    .filter((m) => (part === "immediate" ? m.dayOffset === 0 : m.dayOffset > 0))
    .map((m) => ({
      key: m.key,
      subject: m.subject,
      id: null,
      scheduledAt: m.dayOffset > 0 ? parisMorning(m.dayOffset).toISOString() : null,
      error: null,
    }));
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * Envoie la séquence. `part: "immediate"` n'envoie que l'email d'accès (à
 * faire avant de répondre au formulaire) ; `part: "scheduled"` programme les
 * suivants, espacés pour respecter la limite de débit de Resend (à faire
 * après la réponse). Sans `part`, tout est envoyé d'un bloc.
 */
export async function sendFunnelSequence(
  email: string,
  firstName: string,
  opts: { part?: "immediate" | "scheduled" } = {},
): Promise<SequenceResult> {
  const resend = resendClient();
  const result: SequenceResult = { sent: 0, scheduledIds: [], steps: [], errors: [] };
  if (!resend || !process.env.RESEND_FROM) {
    result.errors.push("Resend non configuré (RESEND_API_KEY / RESEND_FROM)");
    return result;
  }

  const unsubscribe = unsubscribeUrl(email);
  const sequence = buildSequence(email, firstName).filter((m) =>
    opts.part === "immediate" ? m.dayOffset === 0 : opts.part === "scheduled" ? m.dayOffset > 0 : true,
  );

  let first = true;
  for (const mail of sequence) {
    if (!first) await sleep(550);
    first = false;
    const scheduledAt =
      mail.dayOffset > 0 ? parisMorning(mail.dayOffset).toISOString() : undefined;
    const payload = {
      from: fromAddress(),
      to: email,
      replyTo: process.env.RESEND_REPLY_TO ?? SUPPORT_EMAIL,
      subject: mail.subject,
      html: mail.html,
      text: mail.text,
      headers: {
        "List-Unsubscribe": `<${unsubscribe}>`,
        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
      },
      tags: [
        { name: "funnel", value: "formation-ia-gratuite" },
        { name: "step", value: mail.key },
      ],
      ...(scheduledAt ? { scheduledAt } : {}),
    };
    let { data, error } = await resend.emails.send(payload);
    if (error && /rate/i.test(error.message)) {
      // Limite de débit atteinte : une seconde tentative après une pause.
      await sleep(1200);
      ({ data, error } = await resend.emails.send(payload));
    }
    result.steps.push({
      key: mail.key,
      subject: mail.subject,
      id: data?.id ?? null,
      scheduledAt: scheduledAt ?? null,
      error: error ? error.message : null,
    });
    if (error) {
      result.errors.push(`${mail.key}: ${error.message}`);
      continue;
    }
    result.sent += 1;
    if (scheduledAt && data?.id) result.scheduledIds.push(data.id);
  }
  return result;
}

/** Renvoie tout de suite une seule étape de la séquence (action du back-office). */
export async function sendSequenceStep(
  email: string,
  firstName: string,
  key: SequenceKey,
): Promise<SequenceStepResult> {
  const resend = resendClient();
  const mail = buildSequence(email, firstName).find((m) => m.key === key);
  if (!resend || !process.env.RESEND_FROM || !mail) {
    return {
      key,
      subject: mail?.subject ?? key,
      id: null,
      scheduledAt: null,
      error: "Resend non configuré",
    };
  }
  const { data, error } = await resend.emails.send({
    from: fromAddress(),
    to: email,
    replyTo: process.env.RESEND_REPLY_TO ?? SUPPORT_EMAIL,
    subject: mail.subject,
    html: mail.html,
    text: mail.text,
    headers: {
      "List-Unsubscribe": `<${unsubscribeUrl(email)}>`,
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
    },
    tags: [
      { name: "funnel", value: "formation-ia-gratuite" },
      { name: "step", value: mail.key },
    ],
  });
  return {
    key,
    subject: mail.subject,
    id: data?.id ?? null,
    scheduledAt: null,
    error: error ? error.message : null,
  };
}

/** Supprime le contact de l'audience Resend (suppression RGPD), sans erreur bloquante. */
export async function removeResendContact(email: string): Promise<void> {
  const resend = resendClient();
  if (!resend) return;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  await resend.contacts.remove(audienceId ? { audienceId, email } : { email });
}

/** Annule les emails encore programmés (désinscription). */
export async function cancelScheduledEmails(ids: string[]): Promise<void> {
  const resend = resendClient();
  if (!resend) return;
  await Promise.allSettled(ids.map((id) => resend.emails.cancel(id)));
}

/**
 * Ajoute ou met à jour le contact dans l'audience Resend (optionnel).
 * RESEND_SEGMENT_ID range le contact dans un segment dédié à la formation
 * (nouveau modèle Resend) ; RESEND_AUDIENCE_ID reste accepté pour l'ancien.
 */
export async function syncResendContact(
  email: string,
  firstName: string,
  unsubscribed: boolean,
): Promise<void> {
  const resend = resendClient();
  const segmentId = process.env.RESEND_SEGMENT_ID;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!resend || (!segmentId && !audienceId)) return;

  if (segmentId) {
    const created = await resend.contacts.create({
      email,
      firstName: firstName || undefined,
      unsubscribed,
      segments: [{ id: segmentId }],
    });
    if (created.error) {
      await resend.contacts.update({ email, unsubscribed });
    }
    return;
  }

  const created = await resend.contacts.create({
    audienceId: audienceId as string,
    email,
    firstName: firstName || undefined,
    unsubscribed,
  });
  if (created.error) {
    await resend.contacts.update({ audienceId, email, unsubscribed });
  }
}
