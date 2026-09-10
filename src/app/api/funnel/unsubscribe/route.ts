import { NextResponse, type NextRequest } from "next/server";
import { FUNNEL_PATHS } from "@/lib/funnel/config";
import { cancelScheduledEmails, syncResendContact } from "@/lib/funnel/emails";
import { readUnsubscribeToken } from "@/lib/funnel/security";
import { funnelDateKey, getFunnelStore } from "@/lib/funnel/store";

export const runtime = "nodejs";

async function unsubscribe(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("t") ?? "";
  const email = readUnsubscribeToken(token);
  const target = new URL(FUNNEL_PATHS.unsubscribed, req.nextUrl.origin);

  if (!email) {
    target.searchParams.set("etat", "lien-invalide");
    return NextResponse.redirect(target, 303);
  }

  const store = getFunnelStore();
  const sub = await store.getSubscriber(email);
  if (sub && sub.status !== "unsubscribed") {
    const now = new Date().toISOString();
    const emails = Object.fromEntries(
      Object.entries(sub.emails ?? {}).map(([k, v]) => [
        k,
        v.status === "programme" ? { ...v, status: "annule" as const, updatedAt: now } : v,
      ]),
    );
    await store.saveSubscriber({
      ...sub,
      emails,
      status: "unsubscribed",
      unsubscribedAt: now,
    });
    await store.appendSubscriberLog(email, "Désinscription (lien dans un email)");
    await store.recordEvent({
      event: "unsubscribe",
      date: funnelDateKey(),
      detail: email,
    });
    if (sub.scheduledEmailIds.length) {
      await cancelScheduledEmails(sub.scheduledEmailIds);
    }
    try {
      await syncResendContact(email, sub.firstName, true);
    } catch (err) {
      console.error("[funnel] désinscription audience Resend", err);
    }
  }

  target.searchParams.set("etat", "ok");
  return NextResponse.redirect(target, 303);
}

export async function GET(req: NextRequest) {
  return unsubscribe(req);
}

/** Désinscription en un clic (en-tête List-Unsubscribe-Post). */
export async function POST(req: NextRequest) {
  return unsubscribe(req);
}
