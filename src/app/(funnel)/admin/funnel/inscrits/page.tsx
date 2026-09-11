import type { Metadata } from "next";
import Link from "next/link";
import { AdminLogin } from "@/components/funnel/admin/AdminLogin";
import { AdminShell } from "@/components/funnel/admin/AdminShell";
import { Notice, Panel, SubscriberRow, Th } from "@/components/funnel/admin/Widgets";
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
        <div className="mt-6">
          <Notice>{MESSAGES[params.message]}</Notice>
        </div>
      ) : null}

      <form method="get" className="mt-8 grid gap-4 border border-line p-5 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <label htmlFor="q" className="meta mb-2 block">
            Rechercher · email, prénom, source, campagne
          </label>
          <input id="q" name="q" type="search" defaultValue={q} className="input" placeholder="ex. gmail, tiktok, Camille" />
        </div>
        {filter !== "tous" ? <input type="hidden" name="filtre" value={filter} /> : null}
        <button type="submit" className="btn btn-primary">
          <span>Rechercher</span>
        </button>
      </form>

      <nav aria-label="Filtre" className="mt-4 flex flex-wrap items-center gap-2">
        <span className="meta mr-2 text-[10px]">Filtre</span>
        {(
          [
            ["tous", "Tous"],
            ["actifs", "Actifs"],
            ["desinscrits", "Désinscrits"],
          ] as const
        ).map(([key, label]) => (
          <Link key={key} href={link(1, key)} aria-current={filter === key ? "page" : undefined} className="chip">
            {label}
          </Link>
        ))}
      </nav>

      <Panel
        index="01"
        title={filtering ? `Résultats · ${matched}` : `Tous les inscrits · ${total}`}
        id="list-title"
        className="mt-6"
        actions={<span className="meta text-[10px]">Page {page} / {pages}</span>}
      >
        {rows.length === 0 ? (
          <p className="text-sm text-fog">
            {filtering
              ? "Aucun inscrit ne correspond à cette recherche."
              : "Personne pour l’instant. Le premier inscrit apparaîtra ici."}
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-sm">
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
                {rows.map((s) => (
                  <SubscriberRow key={s.email} sub={s} />
                ))}
              </tbody>
            </table>
          </div>
        )}
        {pages > 1 ? (
          <nav aria-label="Pagination" className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
            <span className="meta text-[10px]">
              Page {page} / {pages} · {matched} inscrit{matched > 1 ? "s" : ""}
            </span>
            <div className="flex gap-2">
              {page > 1 ? (
                <Link href={link(page - 1)} className="chip">
                  Précédent
                </Link>
              ) : null}
              {page < pages ? (
                <Link href={link(page + 1)} className="chip">
                  Suivant
                </Link>
              ) : null}
            </div>
          </nav>
        ) : null}
      </Panel>
    </AdminShell>
  );
}
