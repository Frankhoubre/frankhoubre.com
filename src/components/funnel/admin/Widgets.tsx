import Link from "next/link";
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
  programme: "border-neutral-300 text-neutral-700",
  envoye: "border-neutral-400 text-neutral-800",
  delivre: "border-neutral-900 text-neutral-900",
  ouvert: "border-[#c45a18] text-[#c45a18]",
  clique: "border-[#c45a18] bg-[#c45a18] text-white",
  bounce: "border-red-700 text-red-800",
  spam: "border-red-700 text-red-800",
  annule: "border-neutral-300 text-neutral-500 line-through",
  erreur: "border-red-700 text-red-800",
};

export function StatusBadge({ status }: { status: SequenceEmailStatus | undefined }) {
  if (!status) {
    return (
      <span className="inline-flex rounded-full border border-dashed border-neutral-300 px-2 py-0.5 text-[11px] uppercase tracking-[0.08em] text-neutral-500">
        Aucun
      </span>
    );
  }
  return (
    <span
      className={`inline-flex rounded-full border px-2 py-0.5 text-[11px] uppercase tracking-[0.08em] ${STATUS_STYLES[status]}`}
    >
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

export function StepRow({
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
    <div className="grid grid-cols-[1fr_auto] items-baseline gap-4 border-t border-[rgb(226_226_230/0.9)] py-3 first:border-t-0">
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
          <line x1={padL} x2={w - 8} y1={y(0)} y2={y(0)} stroke="#d4d4d8" />
          <line x1={padL} x2={w - 8} y1={y(max)} y2={y(max)} stroke="#e4e4e8" strokeDasharray="3 4" />
          <text x={padL - 6} y={y(max) + 4} fontSize="11" textAnchor="end" fill="#444444">
            {max}
          </text>
          <text x={padL - 6} y={y(0) + 4} fontSize="11" textAnchor="end" fill="#444444">
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
                  <text x={x + bar / 2} y={h - 6} fontSize="10" textAnchor="middle" fill="#444444">
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

export function SourcesTable({ title, data }: { title: string; data: Record<string, number> }) {
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
              <tr key={src} className="border-t border-[rgb(226_226_230/0.9)]">
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

export function SubscriberRow({ sub }: { sub: Subscriber }) {
  return (
    <tr className="border-t border-[rgb(226_226_230/0.9)]">
      <td className="py-2 pr-3">
        <Link href={subscriberHref(sub.email)} className="ds-link font-medium text-neutral-950">
          {sub.firstName}
        </Link>
      </td>
      <td className="py-2 pr-3 text-neutral-900">{sub.email}</td>
      <td className="py-2 pr-3 tabular-nums text-neutral-700">{fmtDate(sub.createdAt)}</td>
      <td className="py-2 pr-3 text-neutral-700">
        {sub.source}
        {sub.utmCampaign ? ` · ${sub.utmCampaign}` : ""}
      </td>
      <td className="py-2 pr-3 text-neutral-700">
        {sub.status === "active" ? "Actif" : "Désinscrit"}
      </td>
      <td className="py-2 text-neutral-700">{sequenceSummary(sub)}</td>
    </tr>
  );
}
