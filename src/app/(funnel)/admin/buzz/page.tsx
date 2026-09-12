import type { Metadata } from "next";
import Link from "next/link";
import { AdminLogin } from "@/components/funnel/admin/AdminLogin";
import { AdminShell } from "@/components/funnel/admin/AdminShell";
import {
  KpiTile,
  Notice,
  Panel,
  SourcesTable,
  Th,
  fmtDate,
  pct,
} from "@/components/funnel/admin/Widgets";
import {
  BUZZ_EVENTS,
  BUZZ_EVENT_LABELS,
  BUZZ_PATHS,
  type BuzzEvent,
} from "@/lib/buzz/config";
import { isBuzzOfferReady } from "@/lib/buzz/content";
import { isBuzzEmailConfigured } from "@/lib/buzz/emails";
import { getBuzzStore, type BuzzDayStats, type Purchase } from "@/lib/buzz/store";
import { isStripeConfigured, isStripeWebhookConfigured } from "@/lib/buzz/stripe";
import { isAdminSession } from "@/lib/funnel/admin";
import { isPersistentStoreConfigured, lastDays } from "@/lib/funnel/store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Ventes Viral AI videos",
  robots: { index: false, follow: false },
};

const PERIODS = [7, 30, 90] as const;
type Period = (typeof PERIODS)[number];

function sum(days: BuzzDayStats[], event: BuzzEvent, unique = false): number {
  return days.reduce(
    (acc, d) => acc + ((unique ? d.uniques[event] : d.counts[event]) ?? 0),
    0,
  );
}

function money(cents: number, currency = "usd"): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(cents / 100);
}

type Data = {
  days: BuzzDayStats[];
  totals: Partial<Record<BuzzEvent, number>>;
  purchaseSources: Record<string, number>;
  viewSources: Record<string, number>;
  purchases: Purchase[];
  purchaseCount: number;
};

async function loadData(period: Period): Promise<Data> {
  const store = getBuzzStore();
  const [days, totals, purchaseSources, viewSources, purchases, purchaseCount] =
    await Promise.all([
      store.getDays(lastDays(period)),
      store.getTotals(),
      store.getSources("buzz_purchase"),
      store.getSources("buzz_view"),
      store.listPurchases(200),
      store.countPurchases(),
    ]);
  return { days, totals, purchaseSources, viewSources, purchases, purchaseCount };
}

function ConfigRow({ ok, label }: { ok: boolean; label: string }) {
  return (
    <li className="flex items-baseline gap-3 border-t border-line py-2 first:border-t-0">
      <span className={`meta text-[10px] ${ok ? "text-stone" : "text-amber"}`}>{ok ? "OK" : "Manquant"}</span>
      <span className="text-sm text-cream">{label}</span>
    </li>
  );
}

export default async function BuzzAdminPage({
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

  const revenue = data ? data.purchases.reduce((acc, p) => acc + (p.amount ?? 0), 0) : 0;
  const views = data ? sum(data.days, "buzz_view", true) : 0;
  const checkouts = data ? sum(data.days, "buzz_checkout") : 0;
  const purchases = data ? sum(data.days, "buzz_purchase") : 0;
  const ready = isBuzzOfferReady();

  return (
    <AdminShell
      active="buzz"
      eyebrow="Tunnel payant · anglais"
      title="Ventes Viral AI videos"
      actions={
        <nav aria-label="Période" className="flex gap-1">
          {PERIODS.map((p) => (
            <Link
              key={p}
              href={`${BUZZ_PATHS.admin}?periode=${p}`}
              aria-current={p === period ? "page" : undefined}
              className="nav-link"
            >
              {p} j
            </Link>
          ))}
        </nav>
      }
    >
      {!ready ? (
        <div className="mt-8">
          <Notice tone="warn">
            La méthode et le prompt ne sont pas encore remplis (passages [[…]] dans
            src/lib/buzz/content.ts). Le bouton de paiement reste désactivé sur la page de vente.
          </Notice>
        </div>
      ) : null}

      <Panel index="01" title="Configuration" id="config-title" className="mt-8">
        <ul>
          <ConfigRow ok={ready} label="Méthode et prompt remplis (src/lib/buzz/content.ts)" />
          <ConfigRow ok={isStripeConfigured()} label="STRIPE_SECRET_KEY" />
          <ConfigRow ok={isStripeWebhookConfigured()} label="STRIPE_WEBHOOK_SECRET" />
          <ConfigRow ok={isBuzzEmailConfigured()} label="Resend (email de livraison)" />
          <ConfigRow ok={isPersistentStoreConfigured()} label="Base Upstash (sinon mémoire)" />
        </ul>
      </Panel>

      {failure ? (
        <Panel index="02" title="Impossible de lire les données" className="mt-6">
          <pre className="overflow-x-auto border border-line bg-charcoal-2 p-3 text-xs text-fog">{failure}</pre>
        </Panel>
      ) : data ? (
        <>
          <div className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            <KpiTile label={`Visiteurs uniques (${period} j)`} value={views} />
            <KpiTile label="Paiements démarrés" value={checkouts} rate={`${pct(checkouts, views)} des visiteurs`} />
            <KpiTile label="Achats" value={purchases} rate={`${pct(purchases, views)} des visiteurs`} />
            <KpiTile
              label="Chiffre d’affaires (total)"
              value={money(revenue, data.purchases[0]?.currency)}
              hint={`${data.purchaseCount} achats au total`}
            />
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Panel index="02" title="Totaux depuis le lancement" id="totals-title">
              <table className="w-full text-sm">
                <tbody>
                  {BUZZ_EVENTS.map((e) => (
                    <tr key={e} className="border-t border-line first:border-t-0">
                      <td className="py-2 pr-3 text-cream">{BUZZ_EVENT_LABELS[e]}</td>
                      <td className="py-2 text-right tabular-nums text-stone">{data.totals[e] ?? 0}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Panel>
            <Panel index="03" title="Sources" id="sources-title">
              <div className="grid gap-8 md:grid-cols-2">
                <SourcesTable title="D’où viennent les achats" data={data.purchaseSources} />
                <SourcesTable title="D’où viennent les visiteurs" data={data.viewSources} />
              </div>
            </Panel>
          </div>

          <Panel index="04" title="Derniers acheteurs" id="buyers-title" className="mt-6">
            {data.purchases.length ? (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] text-sm">
                  <thead>
                    <tr>
                      <Th>Date</Th>
                      <Th>Email</Th>
                      <Th>Prénom</Th>
                      <Th right>Montant</Th>
                      <Th>Source</Th>
                      <Th>Email d’accès</Th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.purchases.map((p) => (
                      <tr key={p.sessionId} className="border-t border-line">
                        <td className="py-2 pr-3 tabular-nums text-stone">{fmtDate(p.createdAt)}</td>
                        <td className="py-2 pr-3 text-cream">{p.email}</td>
                        <td className="py-2 pr-3 text-stone">{p.firstName || "–"}</td>
                        <td className="py-2 pr-3 text-right tabular-nums text-cream">{money(p.amount, p.currency)}</td>
                        <td className="py-2 pr-3 text-stone">{p.source}</td>
                        <td className="py-2 text-stone">
                          {p.emailSentAt ? "envoyé" : p.emailError ? `erreur : ${p.emailError}` : "non envoyé"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-sm text-fog">Aucun achat pour l’instant.</p>
            )}
          </Panel>
        </>
      ) : null}
    </AdminShell>
  );
}
