import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { sendBuzzAccessEmail } from "@/lib/buzz/emails";
import { buzzAccessUrl } from "@/lib/buzz/fulfil";
import { getBuzzStore } from "@/lib/buzz/store";
import { clientIp } from "@/lib/funnel/request";
import { funnelDateKey, getFunnelStore } from "@/lib/funnel/store";

export const runtime = "nodejs";

const bodySchema = z.object({
  email: z.string().trim().toLowerCase().email().max(120),
  /** Champ piège : un humain le laisse vide. */
  website: z.string().max(0).optional(),
});

/**
 * « Lien perdu » : renvoie l'email d'accès si l'adresse correspond à un
 * achat. La réponse est identique dans tous les cas (pas d'énumération).
 */
export async function POST(req: NextRequest) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }
  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const ip = clientIp(req);
  const hits = await getFunnelStore().bump(`buzz-resend:${ip}`, 15 * 60);
  if (hits > 5) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const store = getBuzzStore();
  const purchase = await store.getPurchaseByEmail(parsed.data.email);
  if (purchase) {
    const sent = await sendBuzzAccessEmail({
      to: purchase.email,
      firstName: purchase.firstName,
      accessUrl: buzzAccessUrl(purchase.email),
    });
    if (sent.ok) {
      await store.recordEvent({
        event: "buzz_link_resent",
        date: funnelDateKey(),
        detail: purchase.email,
      });
    } else {
      console.error("[buzz] renvoi lien", purchase.email, sent.error);
    }
  }
  return NextResponse.json({ ok: true });
}
