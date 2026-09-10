import { NextResponse, type NextRequest } from "next/server";
import { ADMIN_COOKIE } from "@/lib/funnel/admin";
import { FUNNEL_PATHS } from "@/lib/funnel/config";
import { adminCookieValue, isAdminTokenValid } from "@/lib/funnel/security";
import { getFunnelStore } from "@/lib/funnel/store";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const token = String(form.get("token") ?? "");
  const target = new URL(FUNNEL_PATHS.admin, req.nextUrl.origin);

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "0.0.0.0";
  const attempts = await getFunnelStore().bump(`admin:${ip}`, 15 * 60);
  if (attempts > 10) {
    target.searchParams.set("erreur", "trop-de-tentatives");
    return NextResponse.redirect(target, 303);
  }

  const cookieValue = adminCookieValue();
  if (!cookieValue || !isAdminTokenValid(token)) {
    target.searchParams.set("erreur", cookieValue ? "jeton" : "non-configure");
    return NextResponse.redirect(target, 303);
  }

  const res = NextResponse.redirect(target, 303);
  res.cookies.set(ADMIN_COOKIE, cookieValue, {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
}

/** Déconnexion : /api/funnel/admin-login?logout=1 */
export async function GET(req: NextRequest) {
  const target = new URL(FUNNEL_PATHS.admin, req.nextUrl.origin);
  const res = NextResponse.redirect(target, 303);
  if (req.nextUrl.searchParams.get("logout")) {
    res.cookies.set(ADMIN_COOKIE, "", { path: "/", maxAge: 0 });
  }
  return res;
}
