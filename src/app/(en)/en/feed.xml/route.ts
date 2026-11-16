import { buildRssFeed } from "@/lib/rss";

export const revalidate = 3600;

/** Flux RSS des articles en anglais (le flux FR vit sur /feed.xml). */
export function GET() {
  return new Response(buildRssFeed("en"), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
