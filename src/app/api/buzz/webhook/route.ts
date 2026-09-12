import { NextResponse, type NextRequest } from "next/server";
import type Stripe from "stripe";
import { fulfilBuzzSession } from "@/lib/buzz/fulfil";
import {
  isSessionPaid,
  isStripeWebhookConfigured,
  readStripeWebhook,
  retrieveCheckoutSession,
} from "@/lib/buzz/stripe";

export const runtime = "nodejs";

/**
 * Webhook Stripe : confirme l'achat même si l'acheteur ferme la page avant
 * le retour, et déclenche la livraison (email + enregistrement). Événements
 * attendus : checkout.session.completed et
 * checkout.session.async_payment_succeeded.
 */
export async function POST(req: NextRequest) {
  if (!isStripeWebhookConfigured()) {
    return NextResponse.json({ error: "webhook non configuré" }, { status: 501 });
  }
  const signature = req.headers.get("stripe-signature");
  if (!signature) return NextResponse.json({ error: "signature manquante" }, { status: 400 });

  let event: Stripe.Event;
  try {
    event = readStripeWebhook(await req.text(), signature);
  } catch (err) {
    console.error("[buzz] webhook signature", err);
    return NextResponse.json({ error: "signature invalide" }, { status: 400 });
  }

  if (
    event.type === "checkout.session.completed" ||
    event.type === "checkout.session.async_payment_succeeded"
  ) {
    const raw = event.data.object as Stripe.Checkout.Session;
    // On relit la session chez Stripe : customer_details y est complet.
    const session = (await retrieveCheckoutSession(raw.id)) ?? raw;
    if (isSessionPaid(session)) {
      try {
        await fulfilBuzzSession(session);
      } catch (err) {
        console.error("[buzz] livraison", session.id, err);
        return NextResponse.json({ error: "livraison échouée" }, { status: 500 });
      }
    }
  }

  return NextResponse.json({ received: true });
}
