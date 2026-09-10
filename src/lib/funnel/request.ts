import type { NextRequest } from "next/server";

const BOT_UA =
  /bot|crawl|spider|slurp|headless|lighthouse|pagespeed|preview|facebookexternalhit|embedly|quora|pinterest|vkshare|whatsapp|telegram|curl|wget|python-requests|httpclient/i;

export function looksLikeBot(userAgent: string | null): boolean {
  if (!userAgent) return true;
  return BOT_UA.test(userAgent);
}

export function clientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "0.0.0.0";
}

/**
 * Source d'acquisition lisible pour le tableau de bord : utm_source en
 * priorité, sinon le domaine du referrer, sinon « direct ».
 */
export function resolveSource(input: {
  utmSource?: string | null;
  referrer?: string | null;
  ownHost?: string;
}): string {
  const utm = input.utmSource?.trim().toLowerCase();
  if (utm) return utm.slice(0, 40);
  const ref = input.referrer?.trim();
  if (ref) {
    try {
      const host = new URL(ref).hostname.replace(/^www\./, "");
      if (host && host !== input.ownHost) return host.slice(0, 60);
      if (host === input.ownHost) return "site";
    } catch {
      /* referrer illisible */
    }
  }
  return "direct";
}

export function cleanShort(value: unknown, max = 80): string | undefined {
  if (typeof value !== "string") return undefined;
  const v = value.trim();
  return v ? v.slice(0, max) : undefined;
}
