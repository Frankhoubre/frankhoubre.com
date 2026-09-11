import type { Metadata } from "next";
import Link from "next/link";
import { AdminLogin } from "@/components/funnel/admin/AdminLogin";
import { AdminShell } from "@/components/funnel/admin/AdminShell";
import {
  DailyChart,
  KpiTile,
  Notice,
  Panel,
  SourcesTable,
  StepRow,
  SubscriberRow,
  Th,
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
        <nav aria-label="Période" className="flex gap-2">
          {PERIODS.map((p) => (
            <Link
              key={p}
              href={`${FUNNEL_PATHS.admin}?periode=${p}`}
              aria-current={p === period ? "page" : undefined}
              className="chip"
            >
              {p} jours
            </Link>
          ))}
        </nav>
      }
    >
      {(!persistent || !resend) && (
        <div className="mt-6 space-y-2">
          {!persistent ? (
            <Notice tone="warn">
              <strong className="text-cream">Stockage mémoire</strong> : aucune base Upstash Redis configurée, les
              compteurs et les inscrits disparaîtront au prochain redéploiement.
            </Notice>
          ) : null}
          {!resend ? (
            <Notice tone="warn">
              <strong className="text-cream">Resend non configuré</strong> : les inscrits sont enregistrés mais ne
              reçoivent aucun email.
            </Notice>
          ) : null}
        </div>
      )}

      {!hasAnything ? (
        <div className="mt-8 border border-line px-6 py-10">
          <p className="meta">Aucune donnée pour l’instant</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-fog">
            Les compteurs se remplissent dès la première visite sur{" "}
            <Link href={FUNNEL_PATHS.optin} className="link">
              la page d’inscription
            </Link>
            . Partagez le lien avec un paramètre utm_source pour voir d’où viennent les visiteurs.
          </p>
        </div>
      ) : null}

      {/* Chiffres clés de la période */}
      <div className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-charcoal">
          <KpiTile label={`Visiteurs uniques · ${period} j`} value={views} hint={`${viewsRaw.toLocaleString("fr-FR")} vues`} />
        </div>
        <div className="bg-charcoal">
          <KpiTile label="Nouveaux inscrits" value={subs} rate={pct(subs, views)} hint="des visiteurs" />
        </div>
        <div className="bg-charcoal">
          <KpiTile label="Clics AI Studios" value={skool} rate={pct(skool, courseViews)} hint="des vues formation" />
        </div>
        <div className="bg-charcoal">
          <KpiTile label="Inscrits en base" value={data.subscriberCount} hint="depuis le début" />
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <Panel index="01" title={`Parcours sur ${period} jours`} id="funnel-steps">
          <StepRow
            index="01"
            label="Visiteurs uniques sur la page d’inscription"
            value={views}
            hint={`${viewsRaw.toLocaleString("fr-FR")} vues au total`}
          />
          <StepRow index="02" label="Formulaires envoyés" value={submits} rate={pct(submits, views)} />
          <StepRow
            index="03"
            label="Nouveaux inscrits"
            value={subs}
            rate={pct(subs, views)}
            hint={repeats ? `${repeats} réinscription${repeats > 1 ? "s" : ""} d’adresses déjà connues` : undefined}
          />
          <StepRow
            index="04"
            label="Visiteurs uniques sur la formation"
            value={courseViews}
            hint="Inscrits qui ouvrent (ou rouvrent) les vidéos"
          />
          <StepRow index="05" label="Clics vers AI Studios (Skool)" value={skool} rate={pct(skool, courseViews)} />
          <StepRow index="06" label="Clics vers ScreenWeaver" value={sw} rate={pct(sw, courseViews)} />
          <StepRow index="07" label="Désinscriptions" value={unsub} />
        </Panel>

        <div className="space-y-6">
          <Panel
            index="02"
            title={`Emails sur ${period} jours`}
            id="emails-title"
            actions={
              <Link href={`${FUNNEL_PATHS.admin}/emails`} className="nav-link !min-h-0">
                Détail par étape
              </Link>
            }
          >
            {!webhook ? (
              <p className="text-sm leading-relaxed text-fog">
                Les ouvertures et clics n’arrivent qu’avec le webhook Resend (RESEND_WEBHOOK_SECRET).
                Emails programmés sur la période : {sum(days, "email_sent").toLocaleString("fr-FR")}.
              </p>
            ) : (
              <dl className="grid grid-cols-2 gap-x-6 gap-y-4">
                {[
                  ["Délivrés", delivered, ""],
                  ["Ouverts", opened, pct(opened, delivered)],
                  ["Cliqués", clicked, pct(clicked, delivered)],
                  ["En erreur", bounced, ""],
                ].map(([k, v, r]) => (
                  <div key={String(k)}>
                    <dt className="meta">{k}</dt>
                    <dd className="mt-1 flex items-baseline gap-2">
                      <span className="display text-2xl leading-none tabular-nums text-cream">{v}</span>
                      {r ? <span className="meta text-[10px]">{r}</span> : null}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </Panel>

          <Panel index="03" title="Depuis le début" id="totals-title">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
              {[
                ["Inscrits (base)", data.subscriberCount],
                [FUNNEL_EVENT_LABELS.subscribe, totals.subscribe ?? 0],
                [FUNNEL_EVENT_LABELS.click_skool, totals.click_skool ?? 0],
              ].map(([k, v]) => (
                <div key={String(k)}>
                  <dt className="meta">{k}</dt>
                  <dd className="display mt-1 text-2xl leading-none tabular-nums text-cream">{v}</dd>
                </div>
              ))}
            </dl>
            <dl className="meta mt-5 grid grid-cols-2 gap-x-6 gap-y-1 border-t border-line pt-4 text-[10px] sm:grid-cols-4">
              <div><dt className="inline text-fog/70">Base </dt><dd className="inline text-stone">{persistent ? "Upstash Redis" : "mémoire"}</dd></div>
              <div><dt className="inline text-fog/70">Resend </dt><dd className="inline text-stone">{resend ? "actif" : "absent"}</dd></div>
              <div><dt className="inline text-fog/70">Segment </dt><dd className="inline text-stone">{audience ? "relié" : "non relié"}</dd></div>
              <div><dt className="inline text-fog/70">Webhook </dt><dd className="inline text-stone">{webhook ? "actif" : "absent"}</dd></div>
            </dl>
          </Panel>
        </div>
      </div>

      <Panel index="04" title="Jour par jour : visiteurs et inscrits" id="chart-title" className="mt-6">
        <DailyChart days={days} />
      </Panel>

      <Panel index="05" title="Sources (depuis le début)" id="sources-title" className="mt-6">
        <div className="grid gap-8 md:grid-cols-2">
          <SourcesTable title="D’où viennent les inscrits" data={data.sources} />
          <SourcesTable title="D’où viennent les visiteurs" data={data.viewSources} />
        </div>
      </Panel>

      <Panel
        index="06"
        title="Derniers inscrits"
        id="subs-title"
        className="mt-6"
        actions={
          <Link href={`${FUNNEL_PATHS.admin}/inscrits`} className="nav-link !min-h-0">
            Tous les inscrits ({data.subscriberCount})
          </Link>
        }
      >
        {data.subscribers.length === 0 ? (
          <p className="text-sm text-fog">
            Personne pour l’instant. Le premier inscrit apparaîtra ici avec sa source.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr>
                  <Th>Prénom</Th>
                  <Th>Email</Th>
                  <Th>Inscrit le</Th>
                  <Th>Source</Th>
                  <Th>Statut</Th>
                  <Th>Séquence</Th>
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
      </Panel>

      <Panel index="07" title="Derniers événements" id="recent-title" className="mt-6">
        {data.recent.length === 0 ? (
          <p className="text-sm text-fog">Aucun événement enregistré.</p>
        ) : (
          <ul className="text-sm">
            {data.recent.map((e, i) => (
              <li key={`${e.at}-${i}`} className="flex flex-wrap items-baseline gap-x-4 gap-y-0.5 border-t border-line py-2 first:border-t-0">
                <span className="meta w-28 shrink-0 text-[10px] tabular-nums">{fmtDate(e.at)}</span>
                <span className="text-cream">{FUNNEL_EVENT_LABELS[e.event] ?? e.event}</span>
                {e.source ? <span className="text-fog">via {e.source}</span> : null}
                {e.detail ? <span className="text-fog">· {e.detail}</span> : null}
              </li>
            ))}
          </ul>
        )}
      </Panel>
    </AdminShell>
  );
}

function ErrorView({ message }: { message: string }) {
  return (
    <AdminShell active="overview" title="Impossible de lire les données">
      <div className="mt-8 max-w-2xl border border-line p-6 sm:p-8">
        <p className="text-sm leading-relaxed text-fog">
          La base de données n’a pas répondu. Vérifiez les variables Upstash (URL et jeton) dans
          Vercel, puis rechargez la page.
        </p>
        <pre className="mt-4 overflow-x-auto border border-line bg-charcoal-2 p-3 text-xs text-stone">{message}</pre>
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
