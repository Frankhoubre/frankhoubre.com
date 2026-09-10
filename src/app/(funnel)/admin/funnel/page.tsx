import type { Metadata } from "next";
import Link from "next/link";
import { AdminLogin } from "@/components/funnel/admin/AdminLogin";
import { AdminShell } from "@/components/funnel/admin/AdminShell";
import {
  DailyChart,
  SourcesTable,
  StepRow,
  SubscriberRow,
  fmtDate,
  pct,
} from "@/components/funnel/admin/Widgets";
import { isAdminSession } from "@/lib/funnel/admin";
import { FUNNEL_EVENT_LABELS, FUNNEL_PATHS, type FunnelEvent } from "@/lib/funnel/config";
import { isResendConfigured } from "@/lib/funnel/emails";
import {
  getFunnelStore,
  isPersistentStoreConfigured,
  lastDays,
  type DayStats,
  type RecentEvent,
  type Subscriber,
} from "@/lib/funnel/store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Back-office du funnel",
  robots: { index: false, follow: false },
};

const PERIODS = [7, 30, 90] as const;
type Period = (typeof PERIODS)[number];

function sum(days: DayStats[], event: FunnelEvent, unique = false): number {
  return days.reduce(
    (acc, d) => acc + ((unique ? d.uniques[event] : d.counts[event]) ?? 0),
    0,
  );
}

type Data = {
  days: DayStats[];
  totals: Partial<Record<FunnelEvent, number>>;
  sources: Record<string, number>;
  viewSources: Record<string, number>;
  subscribers: Subscriber[];
  subscriberCount: number;
  recent: RecentEvent[];
};

async function loadData(period: Period): Promise<Data> {
  const store = getFunnelStore();
  const [days, totals, sources, viewSources, subscribers, subscriberCount, recent] =
    await Promise.all([
      store.getDays(lastDays(period)),
      store.getTotals(),
      store.getSources("subscribe"),
      store.getSources("optin_view"),
      store.listSubscribers(8),
      store.countSubscribers(),
      store.getRecent(30),
    ]);
  return { days, totals, sources, viewSources, subscribers, subscriberCount, recent };
}

function Overview({ period, data }: { period: Period; data: Data }) {
  const { days, totals } = data;
  const views = sum(days, "optin_view", true);
  const viewsRaw = sum(days, "optin_view");
  const submits = sum(days, "optin_submit");
  const subs = sum(days, "subscribe");
  const repeats = sum(days, "subscribe_repeat");
  const courseViews = sum(days, "course_view", true);
  const skool = sum(days, "click_skool");
  const sw = sum(days, "click_screenweaver");
  const unsub = sum(days, "unsubscribe");
  const delivered = sum(days, "email_delivered");
  const opened = sum(days, "email_opened");
  const clicked = sum(days, "email_clicked");
  const bounced = sum(days, "email_bounced");
  const hasAnything = Object.keys(totals).length > 0;

  const persistent = isPersistentStoreConfigured();
  const resend = isResendConfigured();
  const webhook = Boolean(process.env.RESEND_WEBHOOK_SECRET);
  const audience = Boolean(process.env.RESEND_SEGMENT_ID ?? process.env.RESEND_AUDIENCE_ID);

  return (
    <AdminShell
      active="overview"
      title="Vue d’ensemble"
      actions={
        <nav aria-label="Période" className="flex gap-1 rounded-full border border-[rgb(226_226_230/0.9)] bg-white p-1">
          {PERIODS.map((p) => (
            <Link
              key={p}
              href={`${FUNNEL_PATHS.admin}?periode=${p}`}
              aria-current={p === period ? "page" : undefined}
              className={`inline-flex min-h-9 items-center rounded-full px-3 text-sm transition-colors duration-200 ${
                p === period ? "bg-[#111111] text-white" : "text-neutral-800 hover:bg-[#ececef]"
              }`}
            >
              {p} jours
            </Link>
          ))}
        </nav>
      }
    >
      {(!persistent || !resend) && (
        <div role="status" className="mt-6 rounded-xl border border-[rgb(224_112_32/0.6)] bg-[rgb(224_112_32/0.08)] px-4 py-3 text-sm leading-relaxed text-neutral-900">
          {!persistent ? (
            <p>
              <strong>Stockage mémoire</strong> : aucune base Upstash Redis configurée, les
              compteurs et les inscrits disparaîtront au prochain redéploiement.
            </p>
          ) : null}
          {!resend ? (
            <p className={!persistent ? "mt-1" : ""}>
              <strong>Resend non configuré</strong> : les inscrits sont enregistrés mais ne
              reçoivent aucun email.
            </p>
          ) : null}
        </div>
      )}

      {!hasAnything ? (
        <div className="ds-surface mt-8 p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Aucune donnée pour l’instant</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-neutral-700">
            Les compteurs se remplissent dès la première visite sur{" "}
            <Link href={FUNNEL_PATHS.optin} className="ds-link font-medium text-neutral-950">
              la page d’inscription
            </Link>
            . Partagez le lien avec un paramètre utm_source pour voir d’où viennent les visiteurs.
          </p>
        </div>
      ) : null}

      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <section className="ds-surface p-5 sm:p-6" aria-labelledby="funnel-steps">
          <h2 id="funnel-steps" className="text-lg font-semibold">
            Parcours sur {period} jours
          </h2>
          <div className="mt-3">
            <StepRow
              label="Visiteurs uniques sur la page d’inscription"
              value={views}
              hint={`${viewsRaw.toLocaleString("fr-FR")} vues au total`}
            />
            <StepRow label="Formulaires envoyés" value={submits} rate={pct(submits, views)} />
            <StepRow
              label="Nouveaux inscrits"
              value={subs}
              rate={pct(subs, views)}
              hint={repeats ? `${repeats} réinscription${repeats > 1 ? "s" : ""} d’adresses déjà connues` : undefined}
            />
            <StepRow
              label="Visiteurs uniques sur la formation"
              value={courseViews}
              hint="Inscrits qui ouvrent (ou rouvrent) les vidéos"
            />
            <StepRow label="Clics vers AI Studios (Skool)" value={skool} rate={pct(skool, courseViews)} />
            <StepRow label="Clics vers ScreenWeaver" value={sw} rate={pct(sw, courseViews)} />
            <StepRow label="Désinscriptions" value={unsub} />
          </div>
        </section>

        <div className="space-y-6">
          <section className="ds-surface p-5 sm:p-6" aria-labelledby="emails-title">
            <h2 id="emails-title" className="text-lg font-semibold">
              Emails sur {period} jours
            </h2>
            {!webhook ? (
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                Les ouvertures et clics n’arrivent qu’avec le webhook Resend (RESEND_WEBHOOK_SECRET).
                Emails programmés sur la période : {sum(days, "email_sent").toLocaleString("fr-FR")}.
              </p>
            ) : (
              <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                <div>
                  <dt className="text-neutral-600">Délivrés</dt>
                  <dd className="text-xl font-semibold tabular-nums">{delivered}</dd>
                </div>
                <div>
                  <dt className="text-neutral-600">Ouverts</dt>
                  <dd className="text-xl font-semibold tabular-nums">
                    {opened} <span className="text-xs font-normal text-neutral-600">{pct(opened, delivered)}</span>
                  </dd>
                </div>
                <div>
                  <dt className="text-neutral-600">Cliqués</dt>
                  <dd className="text-xl font-semibold tabular-nums">
                    {clicked} <span className="text-xs font-normal text-neutral-600">{pct(clicked, delivered)}</span>
                  </dd>
                </div>
                <div>
                  <dt className="text-neutral-600">En erreur</dt>
                  <dd className="text-xl font-semibold tabular-nums">{bounced}</dd>
                </div>
              </dl>
            )}
            <p className="mt-3 text-sm">
              <Link href={`${FUNNEL_PATHS.admin}/emails`} className="ds-link font-medium text-neutral-950">
                Détail par étape de la séquence
              </Link>
            </p>
          </section>

          <section className="ds-surface p-5 sm:p-6" aria-labelledby="totals-title">
            <h2 id="totals-title" className="text-lg font-semibold">
              Depuis le début
            </h2>
            <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-neutral-600">Inscrits (base)</dt>
                <dd className="text-xl font-semibold tabular-nums">{data.subscriberCount}</dd>
              </div>
              <div>
                <dt className="text-neutral-600">{FUNNEL_EVENT_LABELS.subscribe}</dt>
                <dd className="text-xl font-semibold tabular-nums">{totals.subscribe ?? 0}</dd>
              </div>
              <div>
                <dt className="text-neutral-600">{FUNNEL_EVENT_LABELS.click_skool}</dt>
                <dd className="text-xl font-semibold tabular-nums">{totals.click_skool ?? 0}</dd>
              </div>
            </dl>
            <p className="mt-3 text-xs text-neutral-600">
              Configuration : base {persistent ? "Upstash Redis" : "mémoire (temporaire)"} ·
              Resend {resend ? "actif" : "absent"} · segment {audience ? "relié" : "non relié"} ·
              webhook {webhook ? "actif" : "absent"}.
            </p>
          </section>
        </div>
      </div>

      <section className="ds-surface mt-6 p-5 sm:p-6" aria-labelledby="chart-title">
        <h2 id="chart-title" className="text-lg font-semibold">
          Jour par jour : visiteurs et inscrits
        </h2>
        <div className="mt-4">
          <DailyChart days={days} />
        </div>
      </section>

      <section className="ds-surface mt-6 grid gap-8 p-5 sm:p-6 md:grid-cols-2" aria-label="Sources">
        <SourcesTable title="D’où viennent les inscrits (depuis le début)" data={data.sources} />
        <SourcesTable title="D’où viennent les visiteurs (depuis le début)" data={data.viewSources} />
      </section>

      <section className="ds-surface mt-6 p-5 sm:p-6" aria-labelledby="subs-title">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 id="subs-title" className="text-lg font-semibold">
            Derniers inscrits
          </h2>
          <Link href={`${FUNNEL_PATHS.admin}/inscrits`} className="ds-link text-sm font-medium text-neutral-950">
            Tous les inscrits ({data.subscriberCount})
          </Link>
        </div>
        {data.subscribers.length === 0 ? (
          <p className="mt-2 text-sm text-neutral-700">
            Personne pour l’instant. Le premier inscrit apparaîtra ici avec sa source.
          </p>
        ) : (
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-[0.08em] text-neutral-600">
                  <th className="py-2 pr-3 font-medium">Prénom</th>
                  <th className="py-2 pr-3 font-medium">Email</th>
                  <th className="py-2 pr-3 font-medium">Inscrit le</th>
                  <th className="py-2 pr-3 font-medium">Source</th>
                  <th className="py-2 pr-3 font-medium">Statut</th>
                  <th className="py-2 font-medium">Séquence</th>
                </tr>
              </thead>
              <tbody>
                {data.subscribers.map((s) => (
                  <SubscriberRow key={s.email} sub={s} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="ds-surface mt-6 p-5 sm:p-6" aria-labelledby="recent-title">
        <h2 id="recent-title" className="text-lg font-semibold">
          Derniers événements
        </h2>
        {data.recent.length === 0 ? (
          <p className="mt-2 text-sm text-neutral-700">Aucun événement enregistré.</p>
        ) : (
          <ul className="mt-3 divide-y divide-[rgb(226_226_230/0.9)] text-sm">
            {data.recent.map((e, i) => (
              <li key={`${e.at}-${i}`} className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 py-1.5">
                <span className="w-28 shrink-0 tabular-nums text-neutral-600">{fmtDate(e.at)}</span>
                <span className="text-neutral-950">{FUNNEL_EVENT_LABELS[e.event] ?? e.event}</span>
                {e.source ? <span className="text-neutral-600">via {e.source}</span> : null}
                {e.detail ? <span className="text-neutral-600">· {e.detail}</span> : null}
              </li>
            ))}
          </ul>
        )}
      </section>
    </AdminShell>
  );
}

function ErrorView({ message }: { message: string }) {
  return (
    <AdminShell active="overview" title="Impossible de lire les données">
      <div className="ds-surface mt-8 max-w-2xl p-6 sm:p-8">
        <p className="text-sm leading-relaxed text-neutral-700">
          La base de données n’a pas répondu. Vérifiez les variables Upstash (URL et jeton) dans
          Vercel, puis rechargez la page.
        </p>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-[#ececef] p-3 text-xs text-neutral-800">{message}</pre>
      </div>
    </AdminShell>
  );
}

export default async function FunnelAdminPage({
  searchParams,
}: {
  searchParams: Promise<{ periode?: string; erreur?: string }>;
}) {
  const { periode, erreur } = await searchParams;
  if (!(await isAdminSession())) return <AdminLogin error={erreur} />;

  const period: Period = PERIODS.includes(Number(periode) as Period)
    ? (Number(periode) as Period)
    : 30;

  let data: Data | null = null;
  let failure: string | null = null;
  try {
    data = await loadData(period);
  } catch (err) {
    failure = err instanceof Error ? err.message : String(err);
  }
  if (!data) return <ErrorView message={failure ?? "Erreur inconnue"} />;
  return <Overview period={period} data={data} />;
}
