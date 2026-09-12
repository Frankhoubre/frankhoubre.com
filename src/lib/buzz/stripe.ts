import Stripe from "stripe";
import {
  BUZZ_PATHS,
  BUZZ_PRICE,
  BUZZ_PRODUCT_DESCRIPTION,
  BUZZ_PRODUCT_NAME,
} from "@/lib/buzz/config";

/**
 * Stripe Checkout hébergé : la page de paiement est chez Stripe, le site ne
 * voit jamais la carte. Variables : STRIPE_SECRET_KEY (obligatoire),
 * STRIPE_WEBHOOK_SECRET (confirmation d'achat), BUZZ_STRIPE_PRICE_ID
 * (optionnel : un prix créé dans le tableau de bord Stripe, sinon le prix
 * est déclaré à la volée à partir de BUZZ_PRICE).
 */

let client: Stripe | null = null;

export function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  client ??= new Stripe(key);
  return client;
}

export function isStripeConfigured(): boolean {
  return Boolean(process.env.STRIPE_SECRET_KEY);
}

export function isStripeWebhookConfigured(): boolean {
  return Boolean(process.env.STRIPE_WEBHOOK_SECRET);
}

export async function createBuzzCheckoutSession(input: {
  origin: string;
  source: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}): Promise<Stripe.Checkout.Session> {
  const stripe = getStripe();
  if (!stripe) throw new Error("STRIPE_SECRET_KEY manquant");
  const priceId = process.env.BUZZ_STRIPE_PRICE_ID;

  return stripe.checkout.sessions.create({
    mode: "payment",
    locale: "en",
    line_items: [
      priceId
        ? { price: priceId, quantity: 1 }
        : {
            quantity: 1,
            price_data: {
              currency: BUZZ_PRICE.currency,
              unit_amount: BUZZ_PRICE.amount,
              product_data: {
                name: BUZZ_PRODUCT_NAME,
                description: BUZZ_PRODUCT_DESCRIPTION,
              },
            },
          },
    ],
    allow_promotion_codes: true,
    // La page d'accès est ouverte par notre API après vérification du
    // paiement : elle pose le cookie et envoie l'email de livraison.
    success_url: `${input.origin}/api/buzz/access?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${input.origin}${BUZZ_PATHS.sales}?checkout=cancelled`,
    metadata: {
      product: "buzz",
      source: input.source,
      ...(input.utmSource ? { utmSource: input.utmSource } : {}),
      ...(input.utmMedium ? { utmMedium: input.utmMedium } : {}),
      ...(input.utmCampaign ? { utmCampaign: input.utmCampaign } : {}),
    },
    payment_intent_data: { description: BUZZ_PRODUCT_NAME },
  });
}

export async function retrieveCheckoutSession(
  sessionId: string,
): Promise<Stripe.Checkout.Session | null> {
  const stripe = getStripe();
  if (!stripe) return null;
  try {
    return await stripe.checkout.sessions.retrieve(sessionId);
  } catch {
    return null;
  }
}

export function isSessionPaid(session: Stripe.Checkout.Session): boolean {
  return (
    session.metadata?.product === "buzz" &&
    (session.payment_status === "paid" ||
      session.payment_status === "no_payment_required")
  );
}

/** Vérifie la signature d'un webhook Stripe et renvoie l'événement. */
export function readStripeWebhook(rawBody: string, signature: string): Stripe.Event {
  const stripe = getStripe();
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!stripe || !secret) throw new Error("Stripe webhook non configuré");
  return stripe.webhooks.constructEvent(rawBody, signature, secret);
}
