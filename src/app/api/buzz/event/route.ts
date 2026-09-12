import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { BUZZ_CLIENT_EVENTS, type BuzzEvent } from "@/lib/buzz/config";
import { getBuzzStore } from "@/lib/buzz/store";
import { clientIp, looksLikeBot, resolveSource } from "@/lib/funnel/request";
import { dailyVisitorHash } from "@/lib/funnel/security";
import { funnelDateKey, getFunnelStore } from "@/lib/funnel/store";

export const runtime = "nodejs";

const bodySchema = z.object({
  event: z.enum(BUZZ_CLIENT_EVENTS as [BuzzEvent, ...BuzzEvent[]]),
  referrer: z.string().max(500).optional(),
  utmSource: z.string().max(80).optional(),
  detail: z.string().max(120).optional(),
});

/** Balise de mesure du tunnel payant (vues, clics sortants). */
export async function POST(req: NextRequest) {
  const ua = req.headers.get("user-agent");
  if (looksLikeBot(ua)) return new NextResponse(null, { status: 204 });

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return new NextResponse(null, { status: 204 });
  }
  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) return new NextResponse(null, { status: 204 });

  const ip = clientIp(req);
  const hits = await getFunnelStore().bump(`buzz-event:${ip}`, 60);
  if (hits > 120) return new NextResponse(null, { status: 204 });

  const date = funnelDateKey();
  const { event, referrer, utmSource, detail } = parsed.data;
  await getBuzzStore().recordEvent({
    event,
    date,
    visitorHash: dailyVisitorHash(ip, ua ?? "", date),
    source: resolveSource({ utmSource, referrer, ownHost: req.nextUrl.hostname }),
    detail,
  });
  return new NextResponse(null, { status: 204 });
}
