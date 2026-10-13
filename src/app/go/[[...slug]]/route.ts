import type { NextRequest } from "next/server";

// Clé de destination (utm_campaign) vers le chemin du site : la formation gratuite est la cible principale.
const DESTINATIONS: Record<string, string> = {
  formation: "/formation-ia-gratuite",
  gratuit: "/formation-ia-gratuite",
  ia: "/formation-ia-gratuite",
  musique: "/formation-ia-gratuite",
  "3d": "/formation-ia-gratuite",
  google: "/formation-ia-gratuite",
  animation: "/formation-ia-gratuite",
  editeur: "/formation-ia-gratuite",
  home: "/",
  en: "/en",
  blog: "/blog",
  outils: "/outils",
  prestation: "/prestation",
  viral: "/en/viral-ai-videos",
};

const SOURCES: Record<string, string> = {
  tt: "tiktok",
  yt: "youtube",
  li: "linkedin",
  x: "x",
  th: "threads",
  rd: "reddit",
  qa: "quora",
  md: "medium",
  sb: "substack",
  hn: "hackernoon",
  hf: "higgsfield",
  ig: "instagram",
  ud: "udemy",
  sk: "skool",
  em: "email",
  fb: "facebook",
  dc: "discord",
  bl: "blog",
};

const FORMATS: Record<string, string> = {
  c: "comment",
  m: "dm",
  p: "post",
  a: "article",
  b: "bio",
  s: "story",
  v: "video_description",
};

const ORIGIN = "https://frankhoubre.com";

function clean(value: string | undefined): string {
  if (!value) return "";
  let decoded = value;
  try {
    decoded = decodeURIComponent(value);
  } catch {
    /* segment mal encodé : on garde la forme brute */
  }
  return decoded.toLowerCase().replace(/[^a-z0-9_-]/g, "").slice(0, 80);
}

/** /go/<source>-<destination>[-<format>][/<contenu>] vers la page cible avec ses UTM. */
function buildTarget(slug: string[]): string {
  const parts = clean(slug[0]).split("-").filter(Boolean);
  const sourceKey = parts[0] ?? "";
  let rest = parts.slice(1);
  let formatKey = "";
  if (rest.length >= 2) {
    formatKey = rest[rest.length - 1];
    rest = rest.slice(0, -1);
  }
  const destKey = rest.join("-") || "home";
  const path = DESTINATIONS[destKey] ?? "/";

  const params = new URLSearchParams();
  params.set("utm_source", SOURCES[sourceKey] ?? (sourceKey || "direct"));
  params.set("utm_medium", formatKey ? (FORMATS[formatKey] ?? formatKey) : "social");
  params.set("utm_campaign", destKey);
  const content = clean(slug[1]);
  if (content) params.set("utm_content", content);

  return `${ORIGIN}${path}?${params.toString()}`;
}

export async function GET(
  _req: NextRequest,
  ctx: { params: Promise<{ slug?: string[] }> },
) {
  const { slug } = await ctx.params;
  return new Response(null, {
    status: 302,
    headers: {
      Location: buildTarget(slug ?? []),
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex",
    },
  });
}

export const HEAD = GET;
