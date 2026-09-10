import { NextResponse, type NextRequest } from "next/server";
import { isAdminSession } from "@/lib/funnel/admin";
import { FUNNEL_PATHS } from "@/lib/funnel/config";
import {
  cancelScheduledEmails,
  removeResendContact,
  sendSequenceStep,
  syncResendContact,
} from "@/lib/funnel/emails";
import { funnelDateKey, getFunnelStore } from "@/lib/funnel/store";

export const runtime = "nodejs";

/**
 * Actions du back-office sur un inscrit (formulaires POST classiques) :
 * renvoyer l'email d'accès, désinscrire, supprimer (RGPD).
 */
export async function POST(req: NextRequest) {
  if (!(await isAdminSession())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const form = await req.formData();
  const action = String(form.get("action") ?? "");
  const email = String(form.get("email") ?? "").trim().toLowerCase();
  const store = getFunnelStore();
  const detail = new URL(
    `${FUNNEL_PATHS.admin}/inscrits/${encodeURIComponent(email)}`,
    req.nextUrl.origin,
  );
  const list = new URL(`${FUNNEL_PATHS.admin}/inscrits`, req.nextUrl.origin);

  const sub = email ? await store.getSubscriber(email) : null;
  if (!sub) {
    list.searchParams.set("message", "introuvable");
    return NextResponse.redirect(list, 303);
  }
  const now = new Date().toISOString();

  if (action === "resend-access") {
    const res = await sendSequenceStep(email, sub.firstName, "acces");
    await store.saveSubscriber({
      ...sub,
      emails: {
        ...(sub.emails ?? {}),
        acces: {
          id: res.id ?? undefined,
          subject: res.subject,
          status: res.error ? "erreur" : "envoye",
          updatedAt: now,
        },
      },
    });
    await store.appendSubscriberLog(
      email,
      res.error
        ? `Renvoi de l'email d'accès : erreur (${res.error})`
        : "Email d'accès renvoyé depuis le back-office",
    );
    if (!res.error) {
      await store.recordEvent({ event: "email_sent", date: funnelDateKey(), source: "acces", detail: email });
    }
    detail.searchParams.set("message", res.error ? "erreur-envoi" : "renvoye");
    return NextResponse.redirect(detail, 303);
  }

  if (action === "unsubscribe") {
    if (sub.status !== "unsubscribed") {
      const emails = Object.fromEntries(
        Object.entries(sub.emails ?? {}).map(([k, v]) => [
          k,
          v.status === "programme" ? { ...v, status: "annule" as const, updatedAt: now } : v,
        ]),
      );
      await store.saveSubscriber({ ...sub, emails, status: "unsubscribed", unsubscribedAt: now });
      await store.recordEvent({ event: "unsubscribe", date: funnelDateKey(), detail: email });
      if (sub.scheduledEmailIds.length) await cancelScheduledEmails(sub.scheduledEmailIds);
      try {
        await syncResendContact(email, sub.firstName, true);
      } catch (err) {
        console.error("[funnel] désinscription audience Resend", err);
      }
      await store.appendSubscriberLog(email, "Désinscription depuis le back-office");
    }
    detail.searchParams.set("message", "desinscrit");
    return NextResponse.redirect(detail, 303);
  }

  if (action === "delete") {
    if (sub.scheduledEmailIds.length) await cancelScheduledEmails(sub.scheduledEmailIds);
    try {
      await removeResendContact(email);
    } catch (err) {
      console.error("[funnel] suppression contact Resend", err);
    }
    await store.deleteSubscriber(email);
    list.searchParams.set("message", "supprime");
    return NextResponse.redirect(list, 303);
  }

  detail.searchParams.set("message", "action-inconnue");
  return NextResponse.redirect(detail, 303);
}
