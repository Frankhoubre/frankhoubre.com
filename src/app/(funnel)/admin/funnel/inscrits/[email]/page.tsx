import type { Metadata } from "next";
import Link from "next/link";
import { AdminLogin } from "@/components/funnel/admin/AdminLogin";
import { AdminShell } from "@/components/funnel/admin/AdminShell";
import { Notice, Panel, SEQUENCE_STEPS, StatusBadge, fmtDate } from "@/components/funnel/admin/Widgets";
import { isAdminSession } from "@/lib/funnel/admin";
import { FUNNEL_PATHS } from "@/lib/funnel/config";
import { getFunnelStore } from "@/lib/funnel/store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Fiche inscrit",
  robots: { index: false, follow: false },
};

const MESSAGES: Record<string, string> = {
  renvoye: "Email d’accès renvoyé.",
  "erreur-envoi": "Resend a refusé l’envoi : voir le journal ci-dessous.",
  desinscrit: "Inscrit désinscrit, emails restants annulés.",
  "action-inconnue": "Action inconnue.",
};

export default async function SubscriberPage({
  params,
  searchParams,
}: {
  params: Promise<{ email: string }>;
  searchParams: Promise<{ message?: string; erreur?: string }>;
}) {
  const { email: raw } = await params;
  const { message, erreur } = await searchParams;
  if (!(await isAdminSession())) return <AdminLogin error={erreur} />;

  const email = decodeURIComponent(raw).toLowerCase();
  const store = getFunnelStore();
  const [sub, log] = await Promise.all([store.getSubscriber(email), store.getSubscriberLog(email)]);

  if (!sub) {
    return (
      <AdminShell active="subscribers" title="Inscrit introuvable" eyebrow="Inscrits">
        <p className="mt-6 text-sm text-fog">
          Aucune fiche pour {email}.{" "}
          <Link href={`${FUNNEL_PATHS.admin}/inscrits`} className="link">
            Retour à la liste
          </Link>
        </p>
      </AdminShell>
    );
  }

  const active = sub.status === "active";
  const facts: Array<[string, string]> = [
    ["Email", sub.email],
    ["Statut", active ? "Actif" : `Désinscrit le ${fmtDate(sub.unsubscribedAt)}`],
    ["Inscrit le", fmtDate(sub.createdAt)],
    ["Source", sub.source],
    ["UTM", [sub.utmSource, sub.utmMedium, sub.utmCampaign].filter(Boolean).join(" · ") || "aucun"],
    ["Referrer", sub.referrer || "aucun"],
  ];

  return (
    <AdminShell
      active="subscribers"
      eyebrow={`Inscrits · ${active ? "actif" : "désinscrit"}`}
      title={sub.firstName || sub.email}
      actions={
        <Link href={`${FUNNEL_PATHS.admin}/inscrits`} className="btn btn-sm">
          <span>Retour à la liste</span>
        </Link>
      }
    >
      {message && MESSAGES[message] ? (
        <div className="mt-6">
          <Notice tone={message === "erreur-envoi" ? "warn" : "info"}>{MESSAGES[message]}</Notice>
        </div>
      ) : null}

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Panel index="01" title="Identité et origine" id="identite">
          <dl>
            {facts.map(([k, v]) => (
              <div key={k} className="spec-row">
                <dt className="spec-label">{k}</dt>
                <dd className="spec-value break-all !text-left sm:!text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </Panel>

        <Panel index="02" title="Séquence d’emails" id="sequence">
          {!sub.emails ? (
            <p className="mb-3 text-sm leading-relaxed text-fog">
              Pas de suivi détaillé pour cet inscrit (inscription antérieure au suivi par étape).
              Le journal ci-dessous et les événements Resend restent disponibles.
            </p>
          ) : null}
          <ol>
            {SEQUENCE_STEPS.map((step, i) => {
              const state = sub.emails?.[step.key];
              return (
                <li key={step.key} className="grid grid-cols-[2rem_1fr_auto] items-center gap-3 border-t border-line py-3 first:border-t-0">
                  <span className="meta tabular">0{i + 1}</span>
                  <div className="min-w-0">
                    <p className="text-sm text-cream">{step.label}</p>
                    <p className="mt-0.5 text-xs text-fog">
                      {state?.subject ?? "Envoi"} · {step.when}
                      {state?.scheduledAt ? ` (prévu le ${fmtDate(state.scheduledAt)})` : ""}
                      {state?.updatedAt ? ` · mis à jour le ${fmtDate(state.updatedAt)}` : ""}
                    </p>
                  </div>
                  <StatusBadge status={state?.status} />
                </li>
              );
            })}
          </ol>
          {sub.lastEmailEvent ? (
            <p className="meta mt-4 border-t border-line pt-3 text-[10px]">
              Dernier événement Resend · {sub.lastEmailEvent} le {fmtDate(sub.lastEmailEventAt)}
            </p>
          ) : null}
        </Panel>
      </div>

      <Panel index="03" title="Actions" id="actions" className="mt-6">
        <div className="flex flex-wrap gap-3">
          <form method="post" action="/api/funnel/admin/subscriber">
            <input type="hidden" name="email" value={sub.email} />
            <input type="hidden" name="action" value="resend-access" />
            <button type="submit" className="btn btn-primary">
              <span>Renvoyer l’email d’accès</span>
            </button>
          </form>
          {active ? (
            <form method="post" action="/api/funnel/admin/subscriber">
              <input type="hidden" name="email" value={sub.email} />
              <input type="hidden" name="action" value="unsubscribe" />
              <button type="submit" className="btn">
                <span>Désinscrire (annule les emails restants)</span>
              </button>
            </form>
          ) : null}
          <form method="post" action="/api/funnel/admin/subscriber">
            <input type="hidden" name="email" value={sub.email} />
            <input type="hidden" name="action" value="delete" />
            <button
              type="submit"
              className="btn !border-[#b5533b] !text-[#e08a75] hover:!bg-[#b5533b] hover:!text-cream"
            >
              <span>Supprimer définitivement (RGPD)</span>
            </button>
          </form>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-fog">
          La suppression efface la fiche, son journal et le contact Resend. Elle est immédiate et
          sans confirmation : à utiliser pour une demande d’effacement.
        </p>
      </Panel>

      <Panel index="04" title="Journal" id="journal" className="mt-6">
        {log.length === 0 ? (
          <p className="text-sm text-fog">Aucune entrée pour cet inscrit.</p>
        ) : (
          <ul className="text-sm">
            {log.map((entry, i) => (
              <li key={`${entry.at}-${i}`} className="flex flex-wrap gap-x-4 gap-y-0.5 border-t border-line py-2 first:border-t-0">
                <span className="meta w-28 shrink-0 text-[10px] tabular-nums">{fmtDate(entry.at)}</span>
                <span className="text-stone">{entry.label}</span>
              </li>
            ))}
          </ul>
        )}
      </Panel>
    </AdminShell>
  );
}
