import type { Metadata } from "next";
import Link from "next/link";
import { FunnelFrame } from "@/components/funnel/FunnelFrame";
import { isAdminSession } from "@/lib/funnel/admin";
import {
  FUNNEL_EVENT_LABELS,
  FUNNEL_PATHS,
  type FunnelEvent,
} from "@/lib/funnel/config";
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
  title: "Tableau de bord du funnel",
  robots: { index: false, follow: false },
};

const PERIODS = [7, 30, 90] as const;
type Period = (typeof PERIODS)[number];

const LOGIN_ERRORS: Record<string, string> = {
  jeton: "Jeton incorrect.",
  "non-configure":
    "FUNNEL_ADMIN_TOKEN n'est pas défini sur le serveur : ajoutez la variable puis redéployez.",
  "trop-de-tentatives": "Trop de tentatives. Réessayez dans un quart d'heure.",
};

function sum(days: DayStats[], event: FunnelEvent, unique = false): number {
  return days.reduce(
    (acc, d) => acc + ((unique ? d.uniques[event] : d.counts[event]) ?? 0),
    0,
  );
}

function pct(num: number, den: number): string {
  if (!den) return "";
  return `${((num / den) * 100).toFixed(1).replace(".", ",")} %`;
}

function fmtDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat("fr-FR", {
    timeZone: "Europe/Paris",
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(d);
}

function shortDay(key: string): string {
  const [, m, d] = key.split("-");
  return `${d}/${m}`;
}

/* --------------------------------- Login --------------------------------- */

function LoginView({ error }: { error?: string }) {
  return (
    <FunnelFrame tone="light">
      <div className="mx-auto max-w-md px-4 py-16 sm:px-6 sm:py-24">
        <div className="ds-surface p-6 sm:p-8">
          <p className="ds-eyebrow">Espace privé</p>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight">
            Tableau de bord du funnel
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Entrez le jeton défini dans la variable FUNNEL_ADMIN_TOKEN du
            déploiement.
          </p>
          <form method="post" action="/api/funnel/admin-login" className="mt-6 space-y-4">
            <div>
              <label htmlFor="token" className="mb-1.5 block text-sm font-medium text-neutral-900">
                Jeton d’accès
              </label>
              <input
                id="token"
                name="token"
                type="password"
                autoComplete="current-password"
                required
                className="ds-input"
              />
            </div>
            {error ? (
              <p role="alert" className="rounded-lg border border-[rgb(224_112_32/0.6)] bg-[rgb(224_112_32/0.1)] px-3 py-2 text-sm text-neutral-900">
                {LOGIN_ERRORS[error] ?? "Connexion impossible."}
              </p>
            ) : null}
            <button type="submit" className="ds-cta-dark w-full !py-3.5">
              Ouvrir le tableau de bord
            </button>
          </form>
        </div>
      </div>
    </FunnelFrame>
  );
}

/* -------------------------------- Dashboard ------------------------------ */

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
      store.listSubscribers(50),
      store.countSubscribers(),
      store.getRecent(30),
    ]);
  return { days, totals, sources, viewSources, subscribers, subscriberCount, recent };
}

function StepRow({
  label,
  value,
  rate,
  hint,
}: {
  label: string;
  value: number;
  rate?: string;
  hint?: string;
}) {
  return (
    <div className="grid grid-cols-[1fr_auto] items-baseline gap-4 border-t border-[rgb(228_220_210/0.9)] py-3 first:border-t-0">
      <div className="min-w-0">
        <p className="text-sm font-medium text-neutral-900">{label}</p>
        {hint ? <p className="text-xs text-neutral-600">{hint}</p> : null}
      </div>
      <div className="text-right">
        <p className="text-2xl font-semibold tabular-nums text-neutral-950">
          {value.toLocaleString("fr-FR")}
        </p>
        {rate ? (
          <p className="text-xs tabular-nums text-neutral-600">{rate} de l’étape précédente</p>
        ) : null}
      </div>
    </div>
  );
}

function DailyChart({ days }: { days: DayStats[] }) {
  const w = 720;
  const h = 200;
  const padL = 32;
  const padB = 24;
  const padT = 8;
  const max = Math.max(
    1,
    ...days.map((d) => Math.max(d.uniques.optin_view ?? 0, d.counts.subscribe ?? 0)),
  );
  const innerW = w - padL - 8;
  const innerH = h - padT - padB;
  const slot = innerW / days.length;
  const bar = Math.max(2, slot * 0.6);
  const y = (v: number) => padT + innerH - (v / max) * innerH;
  const labelEvery = days.length > 40 ? 15 : days.length > 10 ? 5 : 1;

  return (
    <figure>
      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${w} ${h}`}
          role="img"
          aria-label={`Visiteurs uniques de la page d'inscription et nouveaux inscrits par jour, maximum ${max}`}
          className="h-auto w-full min-w-[480px]"
        >
          <line x1={padL} x2={w - 8} y1={y(0)} y2={y(0)} stroke="#d4ccc2" />
          <line x1={padL} x2={w - 8} y1={y(max)} y2={y(max)} stroke="#e4dcd2" strokeDasharray="3 4" />
          <text x={padL - 6} y={y(max) + 4} fontSize="11" textAnchor="end" fill="#4a3f36">
            {max}
          </text>
          <text x={padL - 6} y={y(0) + 4} fontSize="11" textAnchor="end" fill="#4a3f36">
            0
          </text>
          {days.map((d, i) => {
            const x = padL + i * slot + (slot - bar) / 2;
            const views = d.uniques.optin_view ?? 0;
            const subs = d.counts.subscribe ?? 0;
            return (
              <g key={d.date}>
                <title>{`${d.date} : ${views} visiteurs, ${subs} inscrits`}</title>
                <rect x={x} y={y(views)} width={bar} height={y(0) - y(views)} fill="#e4d2bc" />
                <rect x={x} y={y(subs)} width={bar} height={y(0) - y(subs)} fill="#c45a18" />
                {i % labelEvery === 0 || i === days.length - 1 ? (
                  <text x={x + bar / 2} y={h - 6} fontSize="10" textAnchor="middle" fill="#4a3f36">
                    {shortDay(d.date)}
                  </text>
                ) : null}
              </g>
            );
          })}
        </svg>
      </div>
      <figcaption className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-xs text-neutral-700">
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm bg-[#e4d2bc]" aria-hidden />
          Visiteurs uniques de la page d’inscription
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm bg-[#c45a18]" aria-hidden />
          Nouveaux inscrits
        </span>
      </figcaption>
    </figure>
  );
}

function SourcesTable({
  title,
  data,
}: {
  title: string;
  data: Record<string, number>;
}) {
  const rows = Object.entries(data)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12);
  const total = rows.reduce((a, [, n]) => a + n, 0);
  return (
    <div>
      <h3 className="text-sm font-semibold text-neutral-900">{title}</h3>
      {rows.length === 0 ? (
        <p className="mt-2 text-sm text-neutral-600">
          Rien à attribuer pour l’instant. Ajoutez utm_source à vos liens (TikTok,
          YouTube, newsletter) pour voir d’où viennent les inscrits.
        </p>
      ) : (
        <table className="mt-2 w-full text-sm">
          <thead className="sr-only">
            <tr>
              <th>Source</th>
              <th>Nombre</th>
              <th>Part</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([src, n]) => (
              <tr key={src} className="border-t border-[rgb(228_220_210/0.9)]">
                <td className="py-1.5 pr-3 text-neutral-900">{src}</td>
                <td className="py-1.5 pr-3 text-right tabular-nums text-neutral-950">{n}</td>
                <td className="py-1.5 text-right tabular-nums text-neutral-600">{pct(n, total)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

function Dashboard({ period, data }: { period: Period; data: Data }) {
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
    <FunnelFrame tone="light">
      <div className="ds-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="ds-eyebrow">Formation IA gratuite</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">
              Tableau de bord du funnel
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <nav aria-label="Période" className="flex gap-1 rounded-full border border-[rgb(228_220_210/0.9)] bg-white p-1">
              {PERIODS.map((p) => (
                <Link
                  key={p}
                  href={`${FUNNEL_PATHS.admin}?periode=${p}`}
                  aria-current={p === period ? "page" : undefined}
                  className={`inline-flex min-h-9 items-center rounded-full px-3 text-sm transition-colors duration-200 ${
                    p === period
                      ? "bg-[#14100c] text-[var(--cream)]"
                      : "text-neutral-800 hover:bg-[#f3ece2]"
                  }`}
                >
                  {p} jours
                </Link>
              ))}
            </nav>
            <a href="/api/funnel/export" className="ds-button-secondary text-sm">
              Exporter les inscrits (CSV)
            </a>
            <a
              href="/api/funnel/admin-login?logout=1"
              className="inline-flex min-h-11 items-center px-2 text-sm text-neutral-700 underline underline-offset-4 hover:text-neutral-950"
            >
              Se déconnecter
            </a>
          </div>
        </div>

        {(!persistent || !resend) && (
          <div role="status" className="mt-6 rounded-xl border border-[rgb(224_112_32/0.6)] bg-[rgb(224_112_32/0.08)] px-4 py-3 text-sm leading-relaxed text-neutral-900">
            {!persistent ? (
              <p>
                <strong>Stockage mémoire</strong> : aucune base Upstash Redis
                configurée, les compteurs et les inscrits disparaîtront au prochain
                redéploiement. Voir FUNNEL_SETUP.md.
              </p>
            ) : null}
            {!resend ? (
              <p className={!persistent ? "mt-1" : ""}>
                <strong>Resend non configuré</strong> : les inscrits sont enregistrés
                mais ne reçoivent aucun email (RESEND_API_KEY et RESEND_FROM manquants).
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
              . Partagez le lien avec un paramètre utm_source pour voir d’où viennent les
              visiteurs.
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
                label="Visiteurs uniques sur la page d'inscription"
                value={views}
                hint={`${viewsRaw.toLocaleString("fr-FR")} vues au total`}
              />
              <StepRow label="Formulaires envoyés" value={submits} rate={pct(submits, views)} />
              <StepRow
                label="Nouveaux inscrits"
                value={subs}
                rate={pct(subs, views)}
                hint={repeats ? `${repeats} réinscription${repeats > 1 ? "s" : ""} d'adresses déjà connues` : undefined}
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
                  Les ouvertures et clics n’arrivent qu’avec le webhook Resend
                  (RESEND_WEBHOOK_SECRET). Pour l’instant, seul le nombre d’emails
                  programmés est connu : {sum(days, "email_sent").toLocaleString("fr-FR")}.
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
                Resend {resend ? "actif" : "absent"} · audience {audience ? "synchronisée" : "non reliée"} ·
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
          <SourcesTable title="D'où viennent les inscrits (depuis le début)" data={data.sources} />
          <SourcesTable title="D'où viennent les visiteurs (depuis le début)" data={data.viewSources} />
        </section>

        <section className="ds-surface mt-6 p-5 sm:p-6" aria-labelledby="subs-title">
          <h2 id="subs-title" className="text-lg font-semibold">
            Derniers inscrits
          </h2>
          {data.subscribers.length === 0 ? (
            <p className="mt-2 text-sm text-neutral-700">
              Personne pour l’instant. Le premier inscrit apparaîtra ici avec sa source.
            </p>
          ) : (
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-[0.08em] text-neutral-600">
                    <th className="py-2 pr-3 font-medium">Prénom</th>
                    <th className="py-2 pr-3 font-medium">Email</th>
                    <th className="py-2 pr-3 font-medium">Inscrit le</th>
                    <th className="py-2 pr-3 font-medium">Source</th>
                    <th className="py-2 pr-3 font-medium">Statut</th>
                    <th className="py-2 font-medium">Dernier événement email</th>
                  </tr>
                </thead>
                <tbody>
                  {data.subscribers.map((s) => (
                    <tr key={s.email} className="border-t border-[rgb(228_220_210/0.9)]">
                      <td className="py-2 pr-3 text-neutral-900">{s.firstName}</td>
                      <td className="py-2 pr-3 text-neutral-950">{s.email}</td>
                      <td className="py-2 pr-3 tabular-nums text-neutral-700">{fmtDate(s.createdAt)}</td>
                      <td className="py-2 pr-3 text-neutral-700">
                        {s.source}
                        {s.utmCampaign ? ` · ${s.utmCampaign}` : ""}
                      </td>
                      <td className="py-2 pr-3 text-neutral-700">
                        {s.status === "active" ? "Actif" : `Désinscrit ${s.unsubscribedAt ? fmtDate(s.unsubscribedAt) : ""}`}
                      </td>
                      <td className="py-2 text-neutral-700">
                        {s.lastEmailEvent ?? "aucun"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {data.subscriberCount > data.subscribers.length ? (
                <p className="mt-2 text-xs text-neutral-600">
                  {data.subscribers.length} affichés sur {data.subscriberCount}. L’export CSV
                  contient tout le monde.
                </p>
              ) : null}
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
            <ul className="mt-3 divide-y divide-[rgb(228_220_210/0.9)] text-sm">
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
      </div>
    </FunnelFrame>
  );
}

function ErrorView({ message }: { message: string }) {
  return (
    <FunnelFrame tone="light">
      <div className="ds-page max-w-2xl">
        <div className="ds-surface p-6 sm:p-8">
          <p className="ds-eyebrow">Tableau de bord</p>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight">
            Impossible de lire les données
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            La base de données n’a pas répondu. Vérifiez les variables Upstash
            (URL et jeton) dans Vercel, puis rechargez la page.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-[#f3ece2] p-3 text-xs text-neutral-800">{message}</pre>
        </div>
      </div>
    </FunnelFrame>
  );
}

export default async function FunnelAdminPage({
  searchParams,
}: {
  searchParams: Promise<{ periode?: string; erreur?: string }>;
}) {
  const { periode, erreur } = await searchParams;
  if (!(await isAdminSession())) return <LoginView error={erreur} />;

  const period: Period = PERIODS.includes(Number(periode) as Period)
    ? (Number(periode) as Period)
    : 30;

  // Le chargement peut échouer (base injoignable) : on capture l'erreur ici
  // et on rend ensuite, hors du try, pour ne pas masquer une erreur React.
  let data: Data | null = null;
  let failure: string | null = null;
  try {
    data = await loadData(period);
  } catch (err) {
    failure = err instanceof Error ? err.message : String(err);
  }
  if (!data) return <ErrorView message={failure ?? "Erreur inconnue"} />;
  return <Dashboard period={period} data={data} />;
}
