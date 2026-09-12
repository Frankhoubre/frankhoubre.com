import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { isBuzzOfferReady } from "@/lib/buzz/content";
import { getBuzzStore } from "@/lib/buzz/store";
import { createBuzzCheckoutSession, isStripeConfigured } from "@/lib/buzz/stripe";
import { cleanShort, clientIp, resolveSource } from "@/lib/funnel/request";
import { funnelDateKey, getFunnelStore } from "@/lib/funnel/store";

export const runtime = "nodejs";

const bodySchema = z.object({
  referrer: z.string().max(500).optional(),
  utmSource: z.string().max(80).optional(),
  utmMedium: z.string().max(80).optional(),
  utmCampaign: z.string().max(80).optional(),
});

/** Ouvre une session Stripe Checkout et renvoie son URL. */
export async function POST(req: NextRequest) {
  if (!isBuzzOfferReady()) {
    return NextResponse.json({ ok: false, error: "not_ready" }, { status: 503 });
  }
  if (!isStripeConfigured()) {
    return NextResponse.json({ ok: false, error: "stripe_not_configured" }, { status: 503 });
  }

  let json: unknown = {};
  try {
    json = await req.json();
  } catch {
    /* corps vide accepté */
  }
  const parsed = bodySchema.safeParse(json ?? {});
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }
  const input = parsed.data;

  const ip = clientIp(req);
  const hits = await getFunnelStore().bump(`buzz-checkout:${ip}`, 15 * 60);
  if (hits > 20) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const source = resolveSource({
    utmSource: input.utmSource,
    referrer: input.referrer,
    ownHost: req.nextUrl.hostname,
  });

  try {
    const session = await createBuzzCheckoutSession({
      origin: req.nextUrl.origin,
      source,
      utmSource: cleanShort(input.utmSource),
      utmMedium: cleanShort(input.utmMedium),
      utmCampaign: cleanShort(input.utmCampaign),
    });
    if (!session.url) throw new Error("session sans url");
    await getBuzzStore().recordEvent({
      event: "buzz_checkout",
      date: funnelDateKey(),
      source,
    });
    return NextResponse.json({ ok: true, url: session.url });
  } catch (err) {
    console.error("[buzz] checkout", err);
    return NextResponse.json({ ok: false, error: "stripe_error" }, { status: 502 });
  }
}
