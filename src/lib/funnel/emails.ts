import { Resend } from "resend";
import {
  FUNNEL_DAYS,
  FUNNEL_PATHS,
  SCREENWEAVER_URL,
  SKOOL_URL,
  SUPPORT_EMAIL,
} from "@/lib/funnel/config";
import { makeUnsubscribeToken } from "@/lib/funnel/security";
import { baseUrl } from "@/lib/site";

/**
 * Séquence email du challenge, envoyée par Resend. Tout est programmé au
 * moment de l'inscription (Resend accepte une date d'envoi jusqu'à 30 jours) :
 * pas de cron à maintenir. Les identifiants renvoyés permettent d'annuler
 * les envois restants si la personne se désinscrit.
 */

export type SequenceEmail = {
  key: "acces" | "jour-2" | "jour-3" | "ai-studios";
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

function unsubscribeUrl(email: string): string {
  const u = new URL("/api/funnel/unsubscribe", baseUrl);
  u.searchParams.set("t", makeUnsubscribeToken(email));
  return u.toString();
}

type Block =
  | { type: "p"; text: string }
  | { type: "cta"; label: string; href: string }
  | { type: "link"; label: string; href: string }
  | { type: "list"; items: string[] };

function renderHtml(opts: {
  firstName: string;
  blocks: Block[];
  unsubscribe: string;
}): string {
  const body = opts.blocks
    .map((b) => {
      switch (b.type) {
        case "p":
          return `<p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#14100c;">${escapeHtml(b.text)}</p>`;
        case "cta":
          return `<p style="margin:24px 0;"><a href="${b.href}" style="display:inline-block;background:#14100c;color:#fbdbaf;text-decoration:none;font-weight:600;font-size:16px;padding:14px 22px;border-radius:10px;">${escapeHtml(b.label)}</a></p>`;
        case "link":
          return `<p style="margin:0 0 16px;font-size:16px;line-height:1.6;"><a href="${b.href}" style="color:#c45a18;">${escapeHtml(b.label)}</a></p>`;
        case "list":
          return `<ul style="margin:0 0 16px;padding-left:20px;font-size:16px;line-height:1.6;color:#14100c;">${b.items.map((i) => `<li style="margin:0 0 6px;">${escapeHtml(i)}</li>`).join("")}</ul>`;
      }
    })
    .join("");

  return `<!doctype html>
<html lang="fr">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
<body style="margin:0;padding:0;background:#fbf7f1;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fbf7f1;">
<tr><td align="center" style="padding:32px 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid #e4dcd2;border-radius:16px;">
<tr><td style="padding:32px 28px;font-family:Inter,-apple-system,Segoe UI,Helvetica,Arial,sans-serif;">
<p style="margin:0 0 20px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#6b5b4e;">Frank Houbre · Challenge film IA</p>
<p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#14100c;">Bonjour${opts.firstName ? ` ${escapeHtml(opts.firstName)}` : ""},</p>
${body}
<p style="margin:24px 0 0;font-size:16px;line-height:1.6;color:#14100c;">Frank</p>
</td></tr>
<tr><td style="padding:18px 28px 26px;border-top:1px solid #e4dcd2;font-family:Inter,-apple-system,Segoe UI,Helvetica,Arial,sans-serif;font-size:12px;line-height:1.6;color:#6b5b4e;">
Vous recevez cet email parce que vous avez demandé la formation gratuite sur frankhoubre.com. Une question : ${escapeHtml(SUPPORT_EMAIL)}.<br>
<a href="${opts.unsubscribe}" style="color:#6b5b4e;">Ne plus recevoir ces emails</a>
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

export function buildSequence(email: string, firstName: string): SequenceEmail[] {
  const unsubscribe = unsubscribeUrl(email);
  const [d1, d2, d3] = FUNNEL_DAYS;
  const name = firstName.trim();

  const specs: Array<Omit<SequenceEmail, "html" | "text"> & { blocks: Block[] }> = [
    {
      key: "acces",
      subject: "Vos accès : Jour 1 du challenge film IA",
      dayOffset: 0,
      blocks: [
        {
          type: "p",
          text: "Bienvenue dans le challenge. Les trois jours sont déjà en ligne, vous avancez à votre rythme. Je vous conseille quand même un jour à la fois : chaque étape prépare la suivante.",
        },
        { type: "cta", label: "Ouvrir la formation", href: courseUrl("acces", d1.slug) },
        {
          type: "p",
          text: `Aujourd'hui, Jour ${d1.n} : ${d1.shortTitle.toLowerCase()}. La plupart des gens commencent par générer, puis cherchent leur idée dans les résultats. C'est le meilleur moyen de jeter vos crédits par les fenêtres. On fait l'inverse : l'émotion, le concept, l'image finale, puis les quelques plans qui méritent d'exister.`,
        },
        { type: "p", text: `Votre mission du jour : ${d1.mission}` },
        {
          type: "p",
          text: "Demain matin, vous recevez le Jour 2 : le storyboard.",
        },
        {
          type: "link",
          label: "Créer votre projet dans ScreenWeaver",
          href: SCREENWEAVER_URL,
        },
      ],
    },
    {
      key: "jour-2",
      subject: "Jour 2 : voyez votre film avant de générer",
      dayOffset: 1,
      blocks: [
        {
          type: "p",
          text: "Hier, vous avez posé votre idée en une phrase. Aujourd'hui, on la rend visible. Le storyboard, c'est l'étape que presque tout le monde saute, et c'est précisément là que se joue le coût de votre film : générer une image coûte bien moins cher qu'une vidéo, alors on valide chaque plan en image avant d'animer quoi que ce soit.",
        },
        { type: "cta", label: "Voir la vidéo du Jour 2", href: courseUrl("jour-2", d2.slug) },
        { type: "list", items: [...d2.points] },
        { type: "p", text: `Votre mission du jour : ${d2.mission}` },
        {
          type: "p",
          text: "Demain, je vous ouvre le projet de montage de Lost Garden, avec les vrais fichiers.",
        },
      ],
    },
    {
      key: "jour-3",
      subject: "Jour 3 : dans le montage de Lost Garden",
      dayOffset: 2,
      blocks: [
        {
          type: "p",
          text: "Dernier jour. Vous avez une vision et un storyboard, il reste à assembler. Dans cette vidéo, je vous montre le montage réel de Lost Garden : comment je classe des dizaines de rushs IA, comment je construis la timeline et comment je choisis les prises pour que l'épisode tienne debout.",
        },
        { type: "cta", label: "Voir le montage de Lost Garden", href: courseUrl("jour-3", d3.slug) },
        { type: "list", items: [...d3.points] },
        { type: "p", text: `Votre mission du jour : ${d3.mission}` },
        {
          type: "p",
          text: "Si vous faites ces trois missions, vous avez déjà une méthode de production. Je vous écris demain pour vous dire comment aller plus loin, sans pression.",
        },
      ],
    },
    {
      key: "ai-studios",
      subject: "Vous avez la carte. Et la suite ?",
      dayOffset: 3,
      blocks: [
        {
          type: "p",
          text: "En trois jours, vous avez vu où commencer, comment structurer un projet et pourquoi vos anciens workflows brûlaient votre budget. La suite, c'est la cohérence des personnages, la mise en scène, le mouvement, le son et un portfolio qui ne ressemble pas à une démo d'outil.",
        },
        {
          type: "p",
          text: "C'est ce qu'on travaille dans AI Studios, la communauté sur Skool. Pour 7 € par mois, vous débloquez le module Étape 1 de la formation, vous recevez la Méthode Film Mental, et vous rejoignez des créateurs qui partagent leurs créations et leurs prompts tous les jours.",
        },
        { type: "cta", label: "Rejoindre AI Studios à 7 € par mois", href: SKOOL_URL },
        {
          type: "p",
          text: "C'est sans engagement. Vous restez le temps que vous voulez, vous partez quand vous voulez, en un clic. Et si vous préférez continuer seul avec la méthode des trois jours, c'est très bien aussi : elle reste accessible.",
        },
        { type: "link", label: "Revoir les trois jours", href: courseUrl("ai-studios") },
      ],
    },
  ];

  return specs.map(({ blocks, ...rest }) => ({
    ...rest,
    html: renderHtml({ firstName: name, blocks, unsubscribe }),
    text: renderText({ firstName: name, blocks, unsubscribe }),
  }));
}

/** Instant UTC correspondant à `hour` h (heure de Paris) dans `days` jours. */
export function parisMorning(days: number, hour = 9, now = new Date()): Date {
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

export type SequenceResult = {
  sent: number;
  scheduledIds: string[];
  errors: string[];
};

/**
 * Envoie l'email d'accès tout de suite et programme les trois suivants.
 * Retourne les identifiants Resend des envois programmés.
 */
export async function sendFunnelSequence(
  email: string,
  firstName: string,
): Promise<SequenceResult> {
  const resend = resendClient();
  const result: SequenceResult = { sent: 0, scheduledIds: [], errors: [] };
  if (!resend || !process.env.RESEND_FROM) {
    result.errors.push("Resend non configuré (RESEND_API_KEY / RESEND_FROM)");
    return result;
  }

  const unsubscribe = unsubscribeUrl(email);
  const sequence = buildSequence(email, firstName);

  for (const mail of sequence) {
    const scheduledAt =
      mail.dayOffset > 0 ? parisMorning(mail.dayOffset).toISOString() : undefined;
    const { data, error } = await resend.emails.send({
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
