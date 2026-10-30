import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import { detectAiCrawler } from "@/lib/ai-traffic";
import { OPTIN_AB, drawVariant, parseVariant } from "@/lib/funnel/ab";
import { FUNNEL_PATHS } from "@/lib/funnel/config";
import { looksLikeBot } from "@/lib/funnel/request";
import { funnelDateKey, getFunnelStore } from "@/lib/funnel/store";

/**
 * Test A/B de la page d'inscription : tirage à la première visite, gardé
 * 30 jours dans un cookie, version B servie sous l'URL de la page A. Les
 * robots voient toujours A. `?version=b` force une version (aperçu).
 */
function optInAbTest(request: NextRequest): NextResponse | null {
  if (!OPTIN_AB.active) return null;
  const { pathname, searchParams } = request.nextUrl;

  // La page B ne s'ouvre pas en direct : on repasse par l'URL publique.
  if (pathname === FUNNEL_PATHS.optinB) {
    const url = request.nextUrl.clone();
    url.pathname = FUNNEL_PATHS.optin;
    url.searchParams.set(OPTIN_AB.forceParam, "b");
    return NextResponse.redirect(url);
  }
  if (pathname !== FUNNEL_PATHS.optin) return null;

  const forced = parseVariant(searchParams.get(OPTIN_AB.forceParam));
  const ua = request.headers.get("user-agent");
  if (!forced && (looksLikeBot(ua) || detectAiCrawler(ua))) return null;

  const stored = parseVariant(request.cookies.get(OPTIN_AB.cookie)?.value);
  const variant = forced ?? stored ?? drawVariant();
  const response =
    variant === "b"
      ? NextResponse.rewrite(new URL(`${FUNNEL_PATHS.optinB}${request.nextUrl.search}`, request.url))
      : NextResponse.next();
  if (variant !== stored) {
    response.cookies.set({
      name: OPTIN_AB.cookie,
      value: variant,
      path: "/",
      maxAge: OPTIN_AB.maxAgeSeconds,
      sameSite: "lax",
      secure: request.nextUrl.protocol === "https:",
    });
  }
  return response;
}

/**
 * Passage d'un crawler IA (GPTBot, ClaudeBot, PerplexityBot...) : une ligne
 * JSON dans les logs Vercel et un compteur `ai_crawler` par robot dans le
 * tableau de bord du funnel (sans passer par le fil des evenements recents).
 */
export function proxy(request: NextRequest, event: NextFetchEvent) {
  const bot = detectAiCrawler(request.headers.get("user-agent"));
  if (bot) {
    const path = request.nextUrl.pathname;
    console.log(
      JSON.stringify({
        ai_crawler: bot,
        path,
        ua: (request.headers.get("user-agent") ?? "").slice(0, 160),
        at: new Date().toISOString(),
      }),
    );
    try {
      event.waitUntil(
        getFunnelStore()
          .recordEvent({ event: "ai_crawler", date: funnelDateKey(), source: bot, quiet: true })
          .catch(() => undefined),
      );
    } catch {
      /* la mesure ne doit jamais bloquer une reponse */
    }
  }
  return optInAbTest(request) ?? NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)", "/llms.txt", "/llms-full.txt", "/robots.txt", "/sitemap.xml"],
};
