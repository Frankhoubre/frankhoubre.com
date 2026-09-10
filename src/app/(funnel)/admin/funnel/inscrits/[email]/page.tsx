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
        <p className="mt-6 text-sm text-neutral-700">
          Aucune fiche pour {email}.{" "}
          <Link href={`${FUNNEL_PATHS.admin}/inscrits`} className="ds-link font-medium text-neutral-950">
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
        <Link href={`${FUNNEL_PATHS.admin}/inscrits`} className="ds-button-secondary !py-2 text-sm">
          Retour à la liste
        </Link>
      }
    >
      {message && MESSAGES[message] ? (
        <p role="status" className="mt-6 rounded-xl border border-[rgb(226_226_230/0.9)] bg-white px-4 py-3 text-sm text-neutral-900">
          {MESSAGES[message]}
        </p>
      ) : null}

      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <section className="ds-surface p-5 sm:p-6" aria-labelledby="identite">
          <h2 id="identite" className="text-lg font-semibold">
            Identité et origine
          </h2>
          <dl className="mt-3 grid grid-cols-[9rem_1fr] gap-y-2 text-sm">
            <dt className="text-neutral-600">Email</dt>
            <dd className="break-all text-neutral-950">{sub.email}</dd>
            <dt className="text-neutral-600">Statut</dt>
            <dd className="text-neutral-950">
              {active ? "Actif" : `Désinscrit le ${fmtDate(sub.unsubscribedAt)}`}
            </dd>
            <dt className="text-neutral-600">Inscrit le</dt>
            <dd className="text-neutral-950">{fmtDate(sub.createdAt)}</dd>
            <dt className="text-neutral-600">Source</dt>
            <dd className="text-neutral-950">{sub.source}</dd>
            <dt className="text-neutral-600">UTM</dt>
            <dd className="text-neutral-950">
              {[sub.utmSource, sub.utmMedium, sub.utmCampaign].filter(Boolean).join(" · ") || "aucun"}
            </dd>
            <dt className="text-neutral-600">Referrer</dt>
            <dd className="break-all text-neutral-950">{sub.referrer || "aucun"}</dd>
          </dl>
        </section>

        <section className="ds-surface p-5 sm:p-6" aria-labelledby="sequence">
          <h2 id="sequence" className="text-lg font-semibold">
            Séquence d’emails
          </h2>
          {!sub.emails ? (
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">
              Pas de suivi détaillé pour cet inscrit (inscription antérieure au suivi par étape).
              Le journal ci-dessous et les événements Resend restent disponibles.
            </p>
          ) : null}
          <ol className="mt-3 divide-y divide-[rgb(226_226_230/0.9)]">
            {SEQUENCE_STEPS.map((step) => {
              const state = sub.emails?.[step.key];
              return (
                <li key={step.key} className="flex flex-wrap items-center justify-between gap-2 py-3">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-neutral-950">{step.label}</p>
                    <p className="text-xs text-neutral-600">
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
            <p className="mt-3 text-xs text-neutral-600">
              Dernier événement Resend : {sub.lastEmailEvent} le {fmtDate(sub.lastEmailEventAt)}
            </p>
          ) : null}
        </section>
      </div>

      <section className="ds-surface mt-6 p-5 sm:p-6" aria-labelledby="actions">
        <h2 id="actions" className="text-lg font-semibold">
          Actions
        </h2>
        <div className="mt-3 flex flex-wrap gap-3">
          <form method="post" action="/api/funnel/admin/subscriber">
            <input type="hidden" name="email" value={sub.email} />
            <input type="hidden" name="action" value="resend-access" />
            <button type="submit" className="ds-cta-dark !py-2.5 text-sm">
              Renvoyer l’email d’accès
            </button>
          </form>
          {active ? (
            <form method="post" action="/api/funnel/admin/subscriber">
              <input type="hidden" name="email" value={sub.email} />
              <input type="hidden" name="action" value="unsubscribe" />
              <button type="submit" className="ds-button-secondary !py-2.5 text-sm">
                Désinscrire (annule les emails restants)
              </button>
            </form>
          ) : null}
          <form method="post" action="/api/funnel/admin/subscriber">
            <input type="hidden" name="email" value={sub.email} />
            <input type="hidden" name="action" value="delete" />
            <button
              type="submit"
              className="inline-flex min-h-10 items-center rounded-xl border border-red-700 px-4 py-2.5 text-sm font-medium text-red-800 hover:bg-red-50"
            >
              Supprimer définitivement (RGPD)
            </button>
          </form>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-neutral-600">
          La suppression efface la fiche, son journal et le contact Resend. Elle est immédiate et
          sans confirmation : à utiliser pour une demande d’effacement.
        </p>
      </section>

      <section className="ds-surface mt-6 p-5 sm:p-6" aria-labelledby="journal">
        <h2 id="journal" className="text-lg font-semibold">
          Journal
        </h2>
        {log.length === 0 ? (
          <p className="mt-2 text-sm text-neutral-700">Aucune entrée pour cet inscrit.</p>
        ) : (
          <ul className="mt-3 divide-y divide-[rgb(226_226_230/0.9)] text-sm">
            {log.map((entry, i) => (
              <li key={`${entry.at}-${i}`} className="flex flex-wrap gap-x-3 gap-y-0.5 py-1.5">
                <span className="w-28 shrink-0 tabular-nums text-neutral-600">{fmtDate(entry.at)}</span>
                <span className="text-neutral-950">{entry.label}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </AdminShell>
  );
}
