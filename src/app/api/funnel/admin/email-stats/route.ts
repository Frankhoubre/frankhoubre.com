import { NextResponse, type NextRequest } from "next/server";
import { isAdminSession } from "@/lib/funnel/admin";
import { FUNNEL_PATHS } from "@/lib/funnel/config";
import { getFunnelStore } from "@/lib/funnel/store";

export const runtime = "nodejs";

/**
 * Recalcule les statistiques email à partir des fiches des inscrits. Utile
 * après une période où le webhook Resend a compté des emails d'un autre
 * projet du même compte.
 */
export async function POST(req: NextRequest) {
  if (!(await isAdminSession())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const form = await req.formData();
  const back = new URL(`${FUNNEL_PATHS.admin}/emails`, req.nextUrl.origin);
  if (String(form.get("action") ?? "") !== "rebuild") {
    back.searchParams.set("message", "action-inconnue");
    return NextResponse.redirect(back, 303);
  }
  const { subscribers, events } = await getFunnelStore().rebuildEmailStats();
  back.searchParams.set("message", `recalcule:${subscribers}:${events}`);
  return NextResponse.redirect(back, 303);
}
