import type Stripe from "stripe";
import { BUZZ_PATHS } from "@/lib/buzz/config";
import { sendBuzzAccessEmail } from "@/lib/buzz/emails";
import { getBuzzStore, type Purchase } from "@/lib/buzz/store";
import { makeBuzzAccessToken } from "@/lib/funnel/security";
import { funnelDateKey } from "@/lib/funnel/store";
import { baseUrl } from "@/lib/site";

/** Lien personnel permanent vers la méthode. */
export function buzzAccessUrl(email: string): string {
  const u = new URL(BUZZ_PATHS.access, baseUrl);
  u.searchParams.set("t", makeBuzzAccessToken(email));
  return u.toString();
}

function firstNameFrom(name: string | null | undefined): string {
  const first = (name ?? "").trim().split(/\s+/)[0] ?? "";
  return first.slice(0, 60);
}

/**
 * Livraison d'un achat vérifié : enregistre l'achat, envoie l'email d'accès,
 * compte l'événement. Idempotent sur l'identifiant de session Stripe, donc
 * appelable depuis le webhook ET depuis le retour de paiement sans doublon.
 */
export async function fulfilBuzzSession(
  session: Stripe.Checkout.Session,
): Promise<{ purchase: Purchase; fresh: boolean }> {
  const store = getBuzzStore();
  const existing = await store.getPurchase(session.id);
  if (existing) return { purchase: existing, fresh: false };

  const email = (session.customer_details?.email ?? session.customer_email ?? "")
    .trim()
    .toLowerCase();
  if (!email) throw new Error(`session ${session.id} sans email`);

  const purchase: Purchase = {
    sessionId: session.id,
    email,
    firstName: firstNameFrom(session.customer_details?.name),
    amount: session.amount_total ?? 0,
    currency: session.currency ?? "usd",
    createdAt: new Date((session.created ?? Date.now() / 1000) * 1000).toISOString(),
    source: session.metadata?.source ?? "direct",
    paymentIntentId:
      typeof session.payment_intent === "string"
        ? session.payment_intent
        : (session.payment_intent?.id ?? undefined),
  };

  const date = funnelDateKey();
  const sent = await sendBuzzAccessEmail({
    to: email,
    firstName: purchase.firstName,
    accessUrl: buzzAccessUrl(email),
  });
  if (sent.ok) {
    purchase.emailSentAt = new Date().toISOString();
    await store.recordEvent({ event: "buzz_email_sent", date, detail: email });
  } else {
    purchase.emailError = sent.error;
    console.error("[buzz] email d'accès", email, sent.error);
  }

  await store.savePurchase(purchase);
  await store.recordEvent({
    event: "buzz_purchase",
    date,
    source: purchase.source,
    detail: email,
  });
  return { purchase, fresh: true };
}
