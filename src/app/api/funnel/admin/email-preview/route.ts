import { NextResponse, type NextRequest } from "next/server";
import { isAdminSession } from "@/lib/funnel/admin";
import { buildSequence } from "@/lib/funnel/emails";

export const runtime = "nodejs";

/** Aperçu HTML d'un email de la séquence, avec un prénom d'exemple (admin). */
export async function GET(req: NextRequest) {
  if (!(await isAdminSession())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const step = req.nextUrl.searchParams.get("step") ?? "acces";
  const mail = buildSequence("apercu@exemple.fr", "Camille").find((m) => m.key === step);
  if (!mail) return NextResponse.json({ error: "unknown_step" }, { status: 404 });
  return new NextResponse(mail.html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex",
    },
  });
}
