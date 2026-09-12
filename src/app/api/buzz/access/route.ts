import { NextResponse, type NextRequest } from "next/server";
import { BUZZ_ACCESS_COOKIE, BUZZ_PATHS } from "@/lib/buzz/config";
import { fulfilBuzzSession } from "@/lib/buzz/fulfil";
import { isSessionPaid, retrieveCheckoutSession } from "@/lib/buzz/stripe";
import { makeBuzzAccessToken } from "@/lib/funnel/security";

export const runtime = "nodejs";

/**
 * Retour de Stripe après paiement (success_url). Vérifie la session chez
 * Stripe, livre si le webhook n'est pas encore passé, pose le cookie d'accès
 * et ouvre la page de la méthode avec le lien personnel.
 */
export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get("session_id");
  const sales = new URL(BUZZ_PATHS.sales, req.nextUrl.origin);
  if (!sessionId) return NextResponse.redirect(sales, 303);

  const session = await retrieveCheckoutSession(sessionId);
  if (!session || !isSessionPaid(session)) {
    sales.searchParams.set("checkout", "unpaid");
    return NextResponse.redirect(sales, 303);
  }

  const { purchase, fresh } = await fulfilBuzzSession(session);
  const token = makeBuzzAccessToken(purchase.email);
  const target = new URL(BUZZ_PATHS.access, req.nextUrl.origin);
  target.searchParams.set("t", token);
  target.searchParams.set("welcome", fresh ? "1" : "back");

  const res = NextResponse.redirect(target, 303);
  res.cookies.set(BUZZ_ACCESS_COOKIE, token, {
    path: BUZZ_PATHS.access,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 365,
  });
  return res;
}
