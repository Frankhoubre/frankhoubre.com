import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import { detectAiCrawler } from "@/lib/ai-traffic";
import { funnelDateKey, getFunnelStore } from "@/lib/funnel/store";

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
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)", "/llms.txt", "/llms-full.txt", "/robots.txt", "/sitemap.xml"],
};
