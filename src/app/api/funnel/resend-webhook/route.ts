import { createHmac, timingSafeEqual } from "node:crypto";
import { NextResponse, type NextRequest } from "next/server";
import type { FunnelEvent } from "@/lib/funnel/config";
import { funnelDateKey, getFunnelStore } from "@/lib/funnel/store";

export const runtime = "nodejs";

const EVENT_MAP: Record<string, FunnelEvent> = {
  "email.delivered": "email_delivered",
  "email.opened": "email_opened",
  "email.clicked": "email_clicked",
  "email.bounced": "email_bounced",
  "email.complained": "email_complained",
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

  let payload: { type?: string; data?: { to?: string[]; tags?: Record<string, string> } };
  try {
    payload = JSON.parse(body);
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const event = payload.type ? EVENT_MAP[payload.type] : undefined;
  if (!event) return NextResponse.json({ ok: true, ignored: payload.type });

  // Seuls les emails du funnel comptent (le tag est posé à l'envoi).
  const tags = payload.data?.tags ?? {};
  if (tags.funnel && tags.funnel !== "formation-ia-gratuite") {
    return NextResponse.json({ ok: true, ignored: "other-funnel" });
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
      await store.saveSubscriber({
        ...sub,
        lastEmailEvent: `${event}${tags.step ? ` (${tags.step})` : ""}`,
        lastEmailEventAt: new Date().toISOString(),
      });
    }
  }
  return NextResponse.json({ ok: true });
}
