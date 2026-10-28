import { NextResponse, type NextRequest } from "next/server";
import {
  VOTE_COOKIE,
  VOTE_TTL_S,
  checkToken,
  getStats,
  hashIp,
  looksLikeBot,
  makeToken,
  recordVote,
  type VoteChoice,
} from "@/lib/out-of-frame/votes";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function clientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  return (fwd?.split(",")[0] ?? req.headers.get("x-real-ip") ?? "unknown").trim();
}

function sameOrigin(req: NextRequest): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return false;
  try {
    return new URL(origin).host === req.nextUrl.host;
  } catch {
    return false;
  }
}

/** Statistiques actuelles, vote déjà fait ou non, et jeton pour voter. */
export async function GET(req: NextRequest) {
  const voted = req.cookies.get(VOTE_COOKIE)?.value ?? null;
  const stats = await getStats();
  return NextResponse.json(
    { stats, voted: voted === "yes" || voted === "no" ? voted : null, token: makeToken() },
    { headers: { "Cache-Control": "no-store" } },
  );
}

/** Un vote par navigateur et par période de 30 jours. */
export async function POST(req: NextRequest) {
  const already = req.cookies.get(VOTE_COOKIE)?.value;
  if (already === "yes" || already === "no") {
    return NextResponse.json({ stats: await getStats(), voted: already }, { status: 200 });
  }

  let body: { choice?: string; token?: string; website?: string } = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  const choice = body.choice === "yes" || body.choice === "no" ? (body.choice as VoteChoice) : null;
  const refused =
    !choice ||
    !sameOrigin(req) ||
    Boolean(body.website) ||
    looksLikeBot(req.headers.get("user-agent")) ||
    !checkToken(body.token ?? null);
  if (refused) {
    return NextResponse.json({ error: "refused", stats: await getStats() }, { status: 403 });
  }

  const counted = await recordVote(choice, hashIp(clientIp(req)));
  const res = NextResponse.json(
    { stats: await getStats(), voted: choice, counted },
    { status: counted ? 200 : 429 },
  );
  res.cookies.set(VOTE_COOKIE, choice, {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: VOTE_TTL_S,
  });
  return res;
}
