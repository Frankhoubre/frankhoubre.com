import { NextResponse } from "next/server";
import { isAdminSession } from "@/lib/funnel/admin";
import { getFunnelStore } from "@/lib/funnel/store";

export const runtime = "nodejs";

function csvCell(v: unknown): string {
  const s = v == null ? "" : String(v);
  return /[",;\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

/** Export CSV des inscrits (réservé à la session admin). */
export async function GET() {
  if (!(await isAdminSession())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const subs = await getFunnelStore().listSubscribers(10_000);
  const header = [
    "email",
    "prenom",
    "inscrit_le",
    "statut",
    "desinscrit_le",
    "source",
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "referrer",
    "dernier_evenement_email",
  ];
  const rows = subs.map((s) =>
    [
      s.email,
      s.firstName,
      s.createdAt,
      s.status,
      s.unsubscribedAt,
      s.source,
      s.utmSource,
      s.utmMedium,
      s.utmCampaign,
      s.referrer,
      s.lastEmailEvent,
    ]
      .map(csvCell)
      .join(";"),
  );
  const csv = `﻿${[header.join(";"), ...rows].join("\r\n")}`;
  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="inscrits-formation-ia-${new Date().toISOString().slice(0, 10)}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
