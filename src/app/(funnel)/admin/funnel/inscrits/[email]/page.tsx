import type { Metadata } from "next";
import Link from "next/link";
import { AdminLogin } from "@/components/funnel/admin/AdminLogin";
import { AdminShell } from "@/components/funnel/admin/AdminShell";
import { SEQUENCE_STEPS, StatusBadge, fmtDate } from "@/components/funnel/admin/Widgets";
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

  return (
    <AdminShell
      active="subscribers"
      eyebrow="Inscrits"
      title={sub.firstName}
      actions={
        <Link href={`${FUNNEL_PATHS.admin}/inscrits`} className="btn btn-sm">
          Retour à la liste
        </Link>
      }
    >
      {message && MESSAGES[message] ? (
        <p role="status" className="mt-6 border border-line bg-graphite px-4 py-3 text-sm text-cream">
          {MESSAGES[message]}
        </p>
      ) : null}

      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <section className="card card-surface p-5 sm:p-6" aria-labelledby="identite">
          <h2 id="identite" className="h-item text-cream">
            Identité et origine
          </h2>
          <dl className="mt-3 grid grid-cols-[9rem_1fr] gap-y-2 text-sm">
            <dt className="text-fog">Email</dt>
            <dd className="break-all text-cream">{sub.email}</dd>
            <dt className="text-fog">Statut</dt>
            <dd className="text-cream">
              {active ? "Actif" : `Désinscrit le ${fmtDate(sub.unsubscribedAt)}`}
            </dd>
            <dt className="text-fog">Inscrit le</dt>
            <dd className="text-cream">{fmtDate(sub.createdAt)}</dd>
            <dt className="text-fog">Source</dt>
            <dd className="text-cream">{sub.source}</dd>
            <dt className="text-fog">UTM</dt>
            <dd className="text-cream">
              {[sub.utmSource, sub.utmMedium, sub.utmCampaign].filter(Boolean).join(" · ") || "aucun"}
            </dd>
            <dt className="text-fog">Referrer</dt>
            <dd className="break-all text-cream">{sub.referrer || "aucun"}</dd>
          </dl>
        </section>

        <section className="card card-surface p-5 sm:p-6" aria-labelledby="sequence">
          <h2 id="sequence" className="h-item text-cream">
            Séquence d’emails
          </h2>
          {!sub.emails ? (
            <p className="mt-2 text-sm leading-relaxed text-fog">
              Pas de suivi détaillé pour cet inscrit (inscription antérieure au suivi par étape).
              Le journal ci-dessous et les événements Resend restent disponibles.
            </p>
          ) : null}
          <ol className="mt-3 divide-y divide-line">
            {SEQUENCE_STEPS.map((step) => {
              const state = sub.emails?.[step.key];
              return (
                <li key={step.key} className="flex flex-wrap items-center justify-between gap-2 py-3">
                  <div className="min-w-0">
                    <p className="text-sm text-cream">{step.label}</p>
                    <p className="text-xs text-fog">
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
            <p className="mt-3 text-xs text-fog">
              Dernier événement Resend : {sub.lastEmailEvent} le {fmtDate(sub.lastEmailEventAt)}
            </p>
          ) : null}
        </section>
      </div>

      <section className="card card-surface mt-6 p-5 sm:p-6" aria-labelledby="actions">
        <h2 id="actions" className="h-item text-cream">
          Actions
        </h2>
        <div className="mt-3 flex flex-wrap gap-3">
          <form method="post" action="/api/funnel/admin/subscriber">
            <input type="hidden" name="email" value={sub.email} />
            <input type="hidden" name="action" value="resend-access" />
            <button type="submit" className="btn btn-primary">
              Renvoyer l’email d’accès
            </button>
          </form>
          {active ? (
            <form method="post" action="/api/funnel/admin/subscriber">
              <input type="hidden" name="email" value={sub.email} />
              <input type="hidden" name="action" value="unsubscribe" />
              <button type="submit" className="btn">
                Désinscrire (annule les emails restants)
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
              Supprimer définitivement (RGPD)
            </button>
          </form>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-fog">
          La suppression efface la fiche, son journal et le contact Resend. Elle est immédiate et
          sans confirmation : à utiliser pour une demande d’effacement.
        </p>
      </section>

      <section className="card card-surface mt-6 p-5 sm:p-6" aria-labelledby="journal">
        <h2 id="journal" className="h-item text-cream">
          Journal
        </h2>
        {log.length === 0 ? (
          <p className="mt-2 text-sm text-fog">Aucune entrée pour cet inscrit.</p>
        ) : (
          <ul className="mt-3 divide-y divide-line text-sm">
            {log.map((entry, i) => (
              <li key={`${entry.at}-${i}`} className="flex flex-wrap gap-x-3 gap-y-0.5 py-1.5">
                <span className="w-28 shrink-0 tabular-nums text-fog">{fmtDate(entry.at)}</span>
                <span className="text-cream">{entry.label}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </AdminShell>
  );
}
