import { buildRssFeed } from "@/lib/rss";

export const revalidate = 3600;

export function GET() {
  const body = buildRssFeed();
  return new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
