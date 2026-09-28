import { NextResponse, type NextRequest } from "next/server";
import { isAdminSession } from "@/lib/funnel/admin";
import { FUNNEL_PATHS } from "@/lib/funnel/config";
import { cancelScheduledEmails } from "@/lib/funnel/emails";
import { getFunnelStore } from "@/lib/funnel/store";

export const runtime = "nodejs";
export const maxDuration = 300;

/**
 * Recalcule les statistiques email à partir des fiches des inscrits. Utile
 * après une période où le webhook Resend a compté des emails d'un autre
 * projet du même compte.
 */
export async function POST(req: NextRequest) {
  if (!(await isAdminSession())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const form = await req.formData();
  const back = new URL(`${FUNNEL_PATHS.admin}/emails`, req.nextUrl.origin);
  const action = String(form.get("action") ?? "");
  if (action === "cancel-unsubscribed") {
    // Rattrapage : jusqu'au 2026-09-28, l'annulation échouait (clé d'envoi
    // seule), les désinscrits recevaient donc la suite de la séquence.
    const store = getFunnelStore();
    const total = await store.countSubscribers();
    const subs = await store.listSubscribers(total || 1, 0);
    let people = 0;
    let cancelled = 0;
    for (const sub of subs) {
      if (sub.status !== "unsubscribed" || !sub.scheduledEmailIds.length) continue;
      people++;
      const res = await cancelScheduledEmails(sub.scheduledEmailIds);
      cancelled += res.cancelled;
      await store.saveSubscriber({ ...sub, scheduledEmailIds: [] });
      if (res.cancelled) {
        await store.appendSubscriberLog(sub.email, `${res.cancelled} emails programmés annulés (rattrapage)`);
      }
    }
    back.searchParams.set("message", `annule:${people}:${cancelled}`);
    return NextResponse.redirect(back, 303);
  }
  if (action !== "rebuild") {
    back.searchParams.set("message", "action-inconnue");
    return NextResponse.redirect(back, 303);
  }
  const { subscribers, events } = await getFunnelStore().rebuildEmailStats();
  back.searchParams.set("message", `recalcule:${subscribers}:${events}`);
  return NextResponse.redirect(back, 303);
}
