import type { Metadata } from "next";
import { AdminLogin } from "@/components/funnel/admin/AdminLogin";
import { AdminShell } from "@/components/funnel/admin/AdminShell";
import { SEQUENCE_STEPS, pct } from "@/components/funnel/admin/Widgets";
import { isAdminSession } from "@/lib/funnel/admin";
import { buildSequence } from "@/lib/funnel/emails";
import { getFunnelStore } from "@/lib/funnel/store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Emails de la séquence",
  robots: { index: false, follow: false },
};

export default async function EmailsPage({
  searchParams,
}: {
  searchParams: Promise<{ erreur?: string; apercu?: string }>;
}) {
  const { erreur, apercu } = await searchParams;
  if (!(await isAdminSession())) return <AdminLogin error={erreur} />;

  const store = getFunnelStore();
  const [sent, delivered, opened, clicked, bounced, complained] = await Promise.all([
    store.getSources("email_sent"),
    store.getSources("email_delivered"),
    store.getSources("email_opened"),
    store.getSources("email_clicked"),
    store.getSources("email_bounced"),
    store.getSources("email_complained"),
  ]);
  const webhook = Boolean(process.env.RESEND_WEBHOOK_SECRET);
  const sequence = buildSequence("apercu@exemple.fr", "Camille");
  const previewStep = SEQUENCE_STEPS.some((s) => s.key === apercu) ? apercu : "acces";

  return (
    <AdminShell active="emails" title="Séquence d’emails">
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-700">
        Quatre emails sont programmés chez Resend au moment de l’inscription. Les compteurs
        ci-dessous viennent du webhook Resend
        {webhook ? "" : " (non configuré : seuls les envois programmés sont comptés)"}. Les
        textes vivent dans le code, fichier src/lib/funnel/emails.ts.
      </p>

      <section className="ds-surface mt-6 p-5 sm:p-6" aria-labelledby="steps-title">
        <h2 id="steps-title" className="text-lg font-semibold">
          Résultats par étape (depuis le début)
        </h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-[0.08em] text-neutral-600">
                <th className="py-2 pr-3 font-medium">Étape</th>
                <th className="py-2 pr-3 font-medium">Envoi</th>
                <th className="py-2 pr-3 text-right font-medium">Programmés</th>
                <th className="py-2 pr-3 text-right font-medium">Délivrés</th>
                <th className="py-2 pr-3 text-right font-medium">Ouverts</th>
                <th className="py-2 pr-3 text-right font-medium">Cliqués</th>
                <th className="py-2 text-right font-medium">Bounce / spam</th>
              </tr>
            </thead>
            <tbody>
              {SEQUENCE_STEPS.map((step) => {
                const s = sent[step.key] ?? 0;
                const d = delivered[step.key] ?? 0;
                const o = opened[step.key] ?? 0;
                const c = clicked[step.key] ?? 0;
                const b = (bounced[step.key] ?? 0) + (complained[step.key] ?? 0);
                return (
                  <tr key={step.key} className="border-t border-[rgb(226_226_230/0.9)]">
                    <td className="py-2 pr-3 text-neutral-950">{step.label}</td>
                    <td className="py-2 pr-3 text-neutral-700">{step.when}</td>
                    <td className="py-2 pr-3 text-right tabular-nums">{s}</td>
                    <td className="py-2 pr-3 text-right tabular-nums">
                      {d} <span className="text-xs text-neutral-600">{pct(d, s)}</span>
                    </td>
                    <td className="py-2 pr-3 text-right tabular-nums">
                      {o} <span className="text-xs text-neutral-600">{pct(o, d)}</span>
                    </td>
                    <td className="py-2 pr-3 text-right tabular-nums">
                      {c} <span className="text-xs text-neutral-600">{pct(c, d)}</span>
                    </td>
                    <td className="py-2 text-right tabular-nums">{b}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-neutral-600">
          Taux : délivrés sur programmés, ouverts et cliqués sur délivrés. Les ouvertures
          dépendent du chargement des images par le lecteur mail (Apple Mail les gonfle, Gmail
          les masque parfois).
        </p>
      </section>

      <section className="ds-surface mt-6 p-5 sm:p-6" aria-labelledby="preview-title">
        <h2 id="preview-title" className="text-lg font-semibold">
          Aperçu des emails
        </h2>
        <nav aria-label="Étape à prévisualiser" className="mt-3 flex flex-wrap gap-2">
          {SEQUENCE_STEPS.map((step) => (
            <a
              key={step.key}
              href={`?apercu=${step.key}`}
              aria-current={previewStep === step.key ? "page" : undefined}
              className={`inline-flex min-h-9 items-center rounded-full border px-3 text-sm ${
                previewStep === step.key
                  ? "border-[#111111] bg-[#111111] text-white"
                  : "border-[rgb(226_226_230/0.9)] bg-white text-neutral-800 hover:bg-[#ececef]"
              }`}
            >
              {step.label}
            </a>
          ))}
        </nav>
        <ul className="mt-4 space-y-1 text-sm text-neutral-700">
          {sequence.map((m) => (
            <li key={m.key}>
              <span className="font-medium text-neutral-950">{m.subject}</span>
              <span className="text-neutral-600">
                {" "}
                · {m.dayOffset === 0 ? "envoyé tout de suite" : `J+${m.dayOffset} à 9 h (heure de Paris)`}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-4 overflow-hidden rounded-xl border border-[rgb(226_226_230/0.9)] bg-white">
          <iframe
            title={`Aperçu de l’email ${previewStep}`}
            src={`/api/funnel/admin/email-preview?step=${previewStep}`}
            className="h-[720px] w-full"
          />
        </div>
        <p className="mt-3 text-xs text-neutral-600">
          Aperçu rendu avec le prénom « Camille » et un lien de désinscription factice.
        </p>
      </section>
    </AdminShell>
  );
}
