import type { Metadata } from "next";
import Link from "next/link";
import { AdminLogin } from "@/components/funnel/admin/AdminLogin";
import { AdminShell } from "@/components/funnel/admin/AdminShell";
import { SubscriberRow } from "@/components/funnel/admin/Widgets";
import { isAdminSession } from "@/lib/funnel/admin";
import { FUNNEL_PATHS } from "@/lib/funnel/config";
import { getFunnelStore, type Subscriber } from "@/lib/funnel/store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Inscrits",
  robots: { index: false, follow: false },
};

const PAGE_SIZE = 50;

const MESSAGES: Record<string, string> = {
  supprime: "Inscrit supprimé, ainsi que son journal et son contact Resend.",
  introuvable: "Cet inscrit n’existe pas (ou plus).",
};

type Filter = "tous" | "actifs" | "desinscrits";

function matches(sub: Subscriber, q: string, filter: Filter): boolean {
  if (filter === "actifs" && sub.status !== "active") return false;
  if (filter === "desinscrits" && sub.status !== "unsubscribed") return false;
  if (!q) return true;
  const hay = `${sub.email} ${sub.firstName} ${sub.source} ${sub.utmCampaign ?? ""}`.toLowerCase();
  return hay.includes(q);
}

export default async function SubscribersPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; page?: string; filtre?: string; message?: string; erreur?: string }>;
}) {
  const params = await searchParams;
  if (!(await isAdminSession())) return <AdminLogin error={params.erreur} />;

  const store = getFunnelStore();
  const q = (params.q ?? "").trim().toLowerCase();
  const filter: Filter =
    params.filtre === "actifs" || params.filtre === "desinscrits" ? params.filtre : "tous";
  const page = Math.max(1, Number(params.page) || 1);

  const total = await store.countSubscribers();
  // Recherche et filtre : on parcourt toute la base (quelques milliers de
  // lignes au plus), puis on pagine le résultat.
  const filtering = Boolean(q) || filter !== "tous";
  let rows: Subscriber[];
  let matched: number;
  if (filtering) {
    const all = await store.listSubscribers(10_000);
    const found = all.filter((s) => matches(s, q, filter));
    matched = found.length;
    rows = found.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  } else {
    matched = total;
    rows = await store.listSubscribers(PAGE_SIZE, (page - 1) * PAGE_SIZE);
  }
  const pages = Math.max(1, Math.ceil(matched / PAGE_SIZE));

  const link = (p: number, f: Filter = filter) => {
    const u = new URLSearchParams();
    if (q) u.set("q", q);
    if (f !== "tous") u.set("filtre", f);
    if (p > 1) u.set("page", String(p));
    const s = u.toString();
    return `${FUNNEL_PATHS.admin}/inscrits${s ? `?${s}` : ""}`;
  };

  return (
    <AdminShell active="subscribers" title={`Inscrits (${total})`}>
      {params.message && MESSAGES[params.message] ? (
        <p role="status" className="mt-6 rounded-xl border border-[rgb(226_226_230/0.9)] bg-white px-4 py-3 text-sm text-neutral-900">
          {MESSAGES[params.message]}
        </p>
      ) : null}

      <form method="get" className="mt-6 flex flex-wrap items-end gap-3">
        <div className="min-w-[16rem] flex-1">
          <label htmlFor="q" className="mb-1.5 block text-sm font-medium text-neutral-900">
            Rechercher (email, prénom, source, campagne)
          </label>
          <input id="q" name="q" type="search" defaultValue={q} className="ds-input" placeholder="ex. gmail, tiktok, Camille" />
        </div>
        {filter !== "tous" ? <input type="hidden" name="filtre" value={filter} /> : null}
        <button type="submit" className="ds-cta-dark !py-3">
          Rechercher
        </button>
      </form>

      <nav aria-label="Filtre" className="mt-4 flex flex-wrap gap-2">
        {(
          [
            ["tous", "Tous"],
            ["actifs", "Actifs"],
            ["desinscrits", "Désinscrits"],
          ] as const
        ).map(([key, label]) => (
          <Link
            key={key}
            href={link(1, key)}
            aria-current={filter === key ? "page" : undefined}
            className={`inline-flex min-h-9 items-center rounded-full border px-3 text-sm ${
              filter === key
                ? "border-[#111111] bg-[#111111] text-white"
                : "border-[rgb(226_226_230/0.9)] bg-white text-neutral-800 hover:bg-[#ececef]"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>

      <section className="ds-surface mt-6 p-5 sm:p-6">
        {rows.length === 0 ? (
          <p className="text-sm text-neutral-700">
            {filtering
              ? "Aucun inscrit ne correspond à cette recherche."
              : "Personne pour l’instant. Le premier inscrit apparaîtra ici."}
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-sm">
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
                {rows.map((s) => (
                  <SubscriberRow key={s.email} sub={s} />
                ))}
              </tbody>
            </table>
          </div>
        )}
        {pages > 1 ? (
          <nav aria-label="Pagination" className="mt-4 flex items-center justify-between text-sm">
            <span className="text-neutral-600">
              Page {page} sur {pages} · {matched} inscrit{matched > 1 ? "s" : ""}
            </span>
            <div className="flex gap-2">
              {page > 1 ? (
                <Link href={link(page - 1)} className="ds-button-secondary !py-2 text-sm">
                  Précédent
                </Link>
              ) : null}
              {page < pages ? (
                <Link href={link(page + 1)} className="ds-button-secondary !py-2 text-sm">
                  Suivant
                </Link>
              ) : null}
            </div>
          </nav>
        ) : null}
      </section>
    </AdminShell>
  );
}
