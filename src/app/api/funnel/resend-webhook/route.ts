import { createHmac, timingSafeEqual } from "node:crypto";
import { NextResponse, type NextRequest } from "next/server";
import type { FunnelEvent } from "@/lib/funnel/config";
import {
  funnelDateKey,
  getFunnelStore,
  type SequenceEmailStatus,
} from "@/lib/funnel/store";

export const runtime = "nodejs";

const EVENT_MAP: Record<string, FunnelEvent> = {
  "email.delivered": "email_delivered",
  "email.opened": "email_opened",
  "email.clicked": "email_clicked",
  "email.bounced": "email_bounced",
  "email.complained": "email_complained",
};

const STATUS_MAP: Record<string, SequenceEmailStatus> = {
  "email.delivered": "delivre",
  "email.opened": "ouvert",
  "email.clicked": "clique",
  "email.bounced": "bounce",
  "email.complained": "spam",
};

/** Un statut ne recule jamais : « cliqué » reste devant « délivré ». */
const STATUS_RANK: Record<SequenceEmailStatus, number> = {
  erreur: 0,
  annule: 0,
  programme: 1,
  envoye: 2,
  delivre: 3,
  ouvert: 4,
  clique: 5,
  bounce: 6,
  spam: 6,
};

const FUNNEL_TAG = "formation-ia-gratuite";

/** Resend renvoie les tags en objet ou en tableau {name, value} selon les versions. */
function normalizeTags(
  raw: Record<string, string> | { name: string; value: string }[] | undefined,
): Record<string, string> {
  if (!raw) return {};
  if (Array.isArray(raw)) {
    return Object.fromEntries(raw.map((t) => [t.name, t.value]));
  }
  return raw;
}

const LABELS: Record<string, string> = {
  "email.delivered": "délivré",
  "email.opened": "ouvert",
  "email.clicked": "cliqué",
  "email.bounced": "en erreur (bounce)",
  "email.complained": "signalé comme spam",
};

/**
 * Vérification de signature Svix (format utilisé par Resend) :
 * HMAC-SHA256 de `${id}.${timestamp}.${body}` avec le secret `whsec_...`.
 */
function verifySignature(
  secret: string,
  id: string,
  timestamp: string,
  signatureHeader: string,
  body: string,
): boolean {
  const ageSeconds = Math.abs(Date.now() / 1000 - Number(timestamp));
  if (!Number.isFinite(ageSeconds) || ageSeconds > 5 * 60) return false;
  const key = Buffer.from(secret.replace(/^whsec_/, ""), "base64");
  const expected = createHmac("sha256", key)
    .update(`${id}.${timestamp}.${body}`)
    .digest("base64");
  return signatureHeader.split(" ").some((part) => {
    const [, sig] = part.split(",");
    if (!sig) return false;
    const a = Buffer.from(sig);
    const b = Buffer.from(expected);
    return a.length === b.length && timingSafeEqual(a, b);
  });
}

export async function POST(req: NextRequest) {
  const secret = process.env.RESEND_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "webhook_not_configured" }, { status: 501 });
  }
  const body = await req.text();
  const id = req.headers.get("svix-id") ?? "";
  const ts = req.headers.get("svix-timestamp") ?? "";
  const sig = req.headers.get("svix-signature") ?? "";
  if (!verifySignature(secret, id, ts, sig, body)) {
    return NextResponse.json({ error: "bad_signature" }, { status: 401 });
  }

  let payload: {
    type?: string;
    data?: {
      email_id?: string;
      to?: string[];
      tags?: Record<string, string> | { name: string; value: string }[];
    };
  };
  try {
    payload = JSON.parse(body);
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const event = payload.type ? EVENT_MAP[payload.type] : undefined;
  if (!event) return NextResponse.json({ ok: true, ignored: payload.type });

  // Le compte Resend est partagé avec d'autres projets : seuls les emails
  // tagués par ce tunnel à l'envoi comptent, tout le reste est ignoré.
  const tags = normalizeTags(payload.data?.tags);
  if (tags.funnel !== FUNNEL_TAG) {
    return NextResponse.json({ ok: true, ignored: "not-this-funnel" });
  }

  const to = payload.data?.to?.[0]?.toLowerCase();
  const store = getFunnelStore();
  await store.recordEvent({
    event,
    date: funnelDateKey(),
    source: tags.step,
    detail: to,
  });
  if (to) {
    const sub = await store.getSubscriber(to);
    if (sub) {
      const now = new Date().toISOString();
      const emails = { ...(sub.emails ?? {}) };
      const step = tags.step;
      const nextStatus = STATUS_MAP[payload.type ?? ""];
      if (step && nextStatus) {
        const current = emails[step];
        if (!current || STATUS_RANK[nextStatus] >= STATUS_RANK[current.status]) {
          emails[step] = {
            ...(current ?? { subject: step }),
            id: current?.id ?? payload.data?.email_id,
            status: nextStatus,
            updatedAt: now,
          };
        }
      }
      await store.saveSubscriber({
        ...sub,
        emails,
        lastEmailEvent: `${event}${step ? ` (${step})` : ""}`,
        lastEmailEventAt: now,
      });
      const subject = step && emails[step]?.subject ? emails[step].subject : step ?? "email";
      await store.appendSubscriberLog(
        to,
        `Email « ${subject} » ${LABELS[payload.type ?? ""] ?? event}`,
      );
    }
  }
  return NextResponse.json({ ok: true });
}
