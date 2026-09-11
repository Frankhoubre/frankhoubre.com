import Link from "next/link";
import type { ReactNode } from "react";
import type { DayStats, SequenceEmailStatus, Subscriber } from "@/lib/funnel/store";

export function pct(num: number, den: number): string {
  if (!den) return "";
  return `${((num / den) * 100).toFixed(1).replace(".", ",")} %`;
}

export function fmtDate(iso: string | undefined): string {
  if (!iso) return "";
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

export function shortDay(key: string): string {
  const [, m, d] = key.split("-");
  return `${d}/${m}`;
}

/** Étapes de la séquence dans l'ordre d'envoi. */
export const SEQUENCE_STEPS = [
  { key: "acces", label: "Accès (Jour 1)", when: "tout de suite" },
  { key: "jour-2", label: "Jour 2", when: "J+1, 9 h" },
  { key: "jour-3", label: "Jour 3", when: "J+2, 9 h" },
  { key: "ai-studios", label: "AI Studios", when: "J+3, 9 h" },
] as const;

export const STATUS_LABELS: Record<SequenceEmailStatus, string> = {
  programme: "Programmé",
  envoye: "Envoyé",
  delivre: "Délivré",
  ouvert: "Ouvert",
  clique: "Cliqué",
  bounce: "Bounce",
  spam: "Spam",
  annule: "Annulé",
  erreur: "Erreur",
};

const STATUS_STYLES: Record<SequenceEmailStatus, string> = {
  programme: "border-line text-fog",
  envoye: "border-line-strong text-stone",
  delivre: "border-stone text-cream",
  ouvert: "border-amber text-amber",
  clique: "border-amber bg-amber text-charcoal",
  bounce: "border-[#b5533b] text-[#e08a75]",
  spam: "border-[#b5533b] text-[#e08a75]",
  annule: "border-line text-fog/70 line-through",
  erreur: "border-[#b5533b] text-[#e08a75]",
};

export function StatusBadge({ status }: { status: SequenceEmailStatus | undefined }) {
  if (!status) {
    return (
      <span className="meta inline-flex border border-dashed border-line-strong px-2 py-0.5 text-[10px]">
        Aucun
      </span>
    );
  }
  return (
    <span className={`meta inline-flex border px-2 py-0.5 text-[10px] ${STATUS_STYLES[status]}`}>
      {STATUS_LABELS[status]}
    </span>
  );
}

export function subscriberHref(email: string): string {
  return `/admin/funnel/inscrits/${encodeURIComponent(email)}`;
}

/** Résumé d'un inscrit en une ligne : où en est sa séquence. */
export function sequenceSummary(sub: Subscriber): string {
  const steps = SEQUENCE_STEPS.map((s) => sub.emails?.[s.key]?.status);
  const sent = steps.filter((s) => s && !["programme", "annule", "erreur"].includes(s)).length;
  const opened = steps.filter((s) => s === "ouvert" || s === "clique").length;
  if (!sub.emails) return "Séquence non suivie";
  return `${sent}/${SEQUENCE_STEPS.length} envoyés · ${opened} ouverts`;
}

/* ------------------------------------------------------------------ */
/* Briques de mise en page du back-office                               */
/* ------------------------------------------------------------------ */

/** Panneau : numéro et titre en capitales sur une ligne fine, contenu dessous. */
export function Panel({
  index,
  title,
  id,
  actions,
  className = "",
  children,
}: {
  index?: string;
  title: string;
  id?: string;
  actions?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={`border border-line ${className}`} aria-labelledby={id}>
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-3">
        <h2 id={id} className="meta meta-strong flex items-center gap-3">
          {index ? <span className="text-fog tabular">{index}</span> : null}
          <span>{title}</span>
        </h2>
        {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
      </header>
      <div className="px-5 py-5">{children}</div>
    </section>
  );
}

/** Tuile chiffre clé : grand nombre tabulaire, libellé, taux ou note. */
export function KpiTile({
  label,
  value,
  rate,
  hint,
}: {
  label: string;
  value: number | string;
  rate?: string;
  hint?: string;
}) {
  return (
    <div className="border border-line px-5 py-4">
      <p className="meta">{label}</p>
      <p className="display mt-3 text-[2.4rem] leading-none tabular-nums text-cream">
        {typeof value === "number" ? value.toLocaleString("fr-FR") : value}
      </p>
      {rate || hint ? (
        <p className="meta mt-3 text-[10px] normal-case tracking-[0.06em]">
          {rate ? <span className="text-stone">{rate}</span> : null}
          {rate && hint ? <span className="text-fog/50"> · </span> : null}
          {hint ? <span className="text-fog">{hint}</span> : null}
        </p>
      ) : null}
    </div>
  );
}

/** Message d'état (succès, avertissement) sur une ligne fine, ambre = à traiter. */
export function Notice({ tone = "info", children }: { tone?: "info" | "warn"; children: ReactNode }) {
  return (
    <p
      role="status"
      className={`flex gap-3 border px-4 py-3 text-sm leading-relaxed ${
        tone === "warn" ? "border-amber/70 bg-amber/10 text-cream" : "border-line bg-graphite text-stone"
      }`}
    >
      <span className={`meta mt-0.5 shrink-0 text-[10px] ${tone === "warn" ? "text-amber" : "text-fog"}`}>
        {tone === "warn" ? "Attention" : "Info"}
      </span>
      <span>{children}</span>
    </p>
  );
}

/** Étape du parcours : libellé, valeur et taux par rapport à l'étape précédente. */
export function StepRow({
  index,
  label,
  value,
  rate,
  hint,
}: {
  index?: string;
  label: string;
  value: number;
  rate?: string;
  hint?: string;
}) {
  return (
    <div className="grid grid-cols-[2rem_1fr_auto] items-baseline gap-4 border-t border-line py-3 first:border-t-0">
      <span className="meta tabular">{index}</span>
      <div className="min-w-0">
        <p className="text-sm text-cream">{label}</p>
        {hint ? <p className="mt-0.5 text-xs text-fog">{hint}</p> : null}
      </div>
      <div className="text-right">
        <p className="display text-2xl leading-none tabular-nums text-cream">{value.toLocaleString("fr-FR")}</p>
        {rate ? <p className="meta mt-1 text-[10px] normal-case tracking-[0.06em] text-fog">{rate} de l’étape précédente</p> : null}
      </div>
    </div>
  );
}

export function DailyChart({ days }: { days: DayStats[] }) {
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
          <line x1={padL} x2={w - 8} y1={y(0)} y2={y(0)} stroke="rgba(238,236,229,0.26)" />
          <line x1={padL} x2={w - 8} y1={y(max)} y2={y(max)} stroke="rgba(238,236,229,0.12)" strokeDasharray="3 4" />
          <line x1={padL} x2={w - 8} y1={y(max / 2)} y2={y(max / 2)} stroke="rgba(238,236,229,0.07)" strokeDasharray="3 4" />
          <text x={padL - 6} y={y(max) + 4} fontSize="10" textAnchor="end" fill="#9ca3a8" fontFamily="Inter Tight, Inter, sans-serif">
            {max}
          </text>
          <text x={padL - 6} y={y(0) + 4} fontSize="10" textAnchor="end" fill="#9ca3a8" fontFamily="Inter Tight, Inter, sans-serif">
            0
          </text>
          {days.map((d, i) => {
            const x = padL + i * slot + (slot - bar) / 2;
            const views = d.uniques.optin_view ?? 0;
            const subs = d.counts.subscribe ?? 0;
            return (
              <g key={d.date}>
                <title>{`${d.date} : ${views} visiteurs, ${subs} inscrits`}</title>
                <rect x={x} y={y(views)} width={bar} height={y(0) - y(views)} fill="#3f5b6c" />
                <rect x={x} y={y(subs)} width={bar} height={y(0) - y(subs)} fill="#d8d6ce" />
                {i % labelEvery === 0 || i === days.length - 1 ? (
                  <text x={x + bar / 2} y={h - 6} fontSize="10" textAnchor="middle" fill="#9ca3a8" fontFamily="Inter Tight, Inter, sans-serif">
                    {shortDay(d.date)}
                  </text>
                ) : null}
              </g>
            );
          })}
        </svg>
      </div>
      <figcaption className="meta mt-3 flex flex-wrap gap-x-6 gap-y-1 text-[10px]">
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 bg-steel" aria-hidden />
          Visiteurs uniques de la page d’inscription
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 bg-stone" aria-hidden />
          Nouveaux inscrits
        </span>
      </figcaption>
    </figure>
  );
}

export function SourcesTable({ title, data }: { title: string; data: Record<string, number> }) {
  const rows = Object.entries(data)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12);
  const total = rows.reduce((a, [, n]) => a + n, 0);
  return (
    <div>
      <h3 className="meta">{title}</h3>
      {rows.length === 0 ? (
        <p className="mt-3 text-sm leading-relaxed text-fog">
          Rien à attribuer pour l’instant. Ajoutez utm_source à vos liens (TikTok,
          YouTube, newsletter) pour voir d’où viennent les inscrits.
        </p>
      ) : (
        <table className="mt-3 w-full text-sm">
          <thead className="sr-only">
            <tr>
              <th>Source</th>
              <th>Nombre</th>
              <th>Part</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([src, n]) => (
              <tr key={src} className="border-t border-line">
                <td className="py-2 pr-3 text-stone">
                  <span className="mr-3 inline-block h-px w-3 bg-fog/60 align-middle" aria-hidden />
                  {src}
                </td>
                <td className="py-2 pr-3 text-right tabular-nums text-cream">{n}</td>
                <td className="meta py-2 text-right text-[10px] tabular-nums">{pct(n, total)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

/** En-tête de tableau : capitales espacées sur une ligne fine. */
export function Th({ children, right = false, className = "" }: { children: ReactNode; right?: boolean; className?: string }) {
  return (
    <th className={`meta py-2 pr-4 text-[10px] font-medium ${right ? "text-right" : "text-left"} ${className}`}>
      {children}
    </th>
  );
}

export function SubscriberRow({ sub }: { sub: Subscriber }) {
  const active = sub.status === "active";
  return (
    <tr className="border-t border-line transition-colors hover:bg-graphite/60">
      <td className="py-2.5 pr-4">
        <Link href={subscriberHref(sub.email)} className="line-link text-cream">
          {sub.firstName || "Sans prénom"}
        </Link>
      </td>
      <td className="py-2.5 pr-4 text-stone">{sub.email}</td>
      <td className="py-2.5 pr-4 tabular-nums text-fog">{fmtDate(sub.createdAt)}</td>
      <td className="py-2.5 pr-4 text-fog">
        {sub.source}
        {sub.utmCampaign ? ` · ${sub.utmCampaign}` : ""}
      </td>
      <td className="py-2.5 pr-4">
        <span className={`meta inline-flex items-center gap-2 text-[10px] ${active ? "text-cream" : "text-fog"}`}>
          <span className={`inline-block h-1.5 w-1.5 ${active ? "bg-cream" : "bg-fog/50"}`} aria-hidden />
          {active ? "Actif" : "Désinscrit"}
        </span>
      </td>
      <td className="py-2.5 text-xs text-fog">{sequenceSummary(sub)}</td>
    </tr>
  );
}
