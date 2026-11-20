import { NextResponse, type NextRequest } from "next/server";
import { isAdminSession } from "@/lib/funnel/admin";
import { FUNNEL_PATHS } from "@/lib/funnel/config";
import { OFFER_STEP_KEYS, cancelScheduledEmails, reprogramSequenceStep } from "@/lib/funnel/emails";
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
  if (action === "refresh-offer") {
    // Rattrapage du 20/11/2026 : l'offre AI Studios passe de 7 € par mois à
    // 97 $ par mois avec 7 jours d'essai. Les emails déjà programmés gardaient
    // l'ancien texte : on les remplace par la version actuelle, même date.
    const store = getFunnelStore();
    const total = await store.countSubscribers();
    const subs = await store.listSubscribers(total || 1, 0);
    const now = Date.now();
    // Les emails mis à jour après ce moment sont déjà au bon texte : un
    // second clic reprend là où le premier s'est arrêté (limite de 300 s).
    const offerChangedAt = Date.parse("2026-11-20T15:00:00Z");
    const deadline = now + 240_000;
    let pending = 0;
    let people = 0;
    let replaced = 0;
    let failed = 0;
    for (const sub of subs) {
      if (sub.status !== "active" || !sub.emails) continue;
      const due = OFFER_STEP_KEYS.filter((k) => {
        const st = sub.emails?.[k];
        return (
          st?.status === "programme" &&
          st.id &&
          st.scheduledAt &&
          Date.parse(st.scheduledAt) > now + 120_000 &&
          Date.parse(st.updatedAt) < offerChangedAt
        );
      });
      if (!due.length) continue;
      if (Date.now() > deadline) {
        pending += due.length;
        continue;
      }
      people++;
      const emails = { ...sub.emails };
      const ids = new Set(sub.scheduledEmailIds);
      for (const key of due) {
        const st = emails[key];
        const res = await reprogramSequenceStep(sub.email, sub.firstName, key, st.id!, st.scheduledAt!);
        const stamp = new Date().toISOString();
        if (res.cancelled) ids.delete(st.id!);
        if (res.cancelled && res.id && !res.error) {
          ids.add(res.id);
          emails[key] = { id: res.id, subject: res.subject, scheduledAt: st.scheduledAt, status: "programme", updatedAt: stamp };
          replaced++;
        } else {
          if (res.cancelled) emails[key] = { ...st, status: "erreur", updatedAt: stamp };
          failed++;
        }
      }
      await store.saveSubscriber({ ...sub, emails, scheduledEmailIds: [...ids] });
      await store.appendSubscriberLog(sub.email, `${due.length} email(s) programmé(s) mis à jour avec la nouvelle offre AI Studios`);
    }
    back.searchParams.set("message", `offre:${people}:${replaced}:${failed}:${pending}`);
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
