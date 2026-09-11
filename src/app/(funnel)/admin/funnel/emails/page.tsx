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
  searchParams: Promise<{ erreur?: string; apercu?: string; message?: string }>;
}) {
  const { erreur, apercu, message } = await searchParams;
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
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fog">
        Quatre emails sont programmés chez Resend au moment de l’inscription. Les compteurs
        ci-dessous viennent du webhook Resend
        {webhook ? "" : " (non configuré : seuls les envois programmés sont comptés)"}. Les
        textes vivent dans le code, fichier src/lib/funnel/emails.ts.
      </p>
      {message?.startsWith("recalcule:") ? (
        <p role="status" className="mt-4 border border-amber/70 bg-amber/10 px-4 py-3 text-sm text-cream">
          Statistiques recalculées à partir de {message.split(":")[1]} fiche(s) d’inscrit,
          {" "}{message.split(":")[2]} événement(s) email reconstitués.
        </p>
      ) : null}

      <section className="card card-surface mt-6 p-5 sm:p-6" aria-labelledby="steps-title">
        <h2 id="steps-title" className="h-item text-cream">
          Résultats par étape (depuis le début)
        </h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="text-left meta">
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
                  <tr key={step.key} className="border-t border-line">
                    <td className="py-2 pr-3 text-cream">{step.label}</td>
                    <td className="py-2 pr-3 text-fog">{step.when}</td>
                    <td className="py-2 pr-3 text-right tabular-nums">{s}</td>
                    <td className="py-2 pr-3 text-right tabular-nums">
                      {d} <span className="text-xs text-fog">{pct(d, s)}</span>
                    </td>
                    <td className="py-2 pr-3 text-right tabular-nums">
                      {o} <span className="text-xs text-fog">{pct(o, d)}</span>
                    </td>
                    <td className="py-2 pr-3 text-right tabular-nums">
                      {c} <span className="text-xs text-fog">{pct(c, d)}</span>
                    </td>
                    <td className="py-2 text-right tabular-nums">{b}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-fog">
          Taux : délivrés sur programmés, ouverts et cliqués sur délivrés. Les ouvertures
          dépendent du chargement des images par le lecteur mail (Apple Mail les gonfle, Gmail
          les masque parfois).
        </p>
        <form
          method="post"
          action="/api/funnel/admin/email-stats"
          className="mt-4 flex flex-wrap items-center gap-3 border-t border-line pt-4"
        >
          <input type="hidden" name="action" value="rebuild" />
          <button
            type="submit"
            className="btn btn-sm"
          >
            Recalculer les statistiques email
          </button>
          <span className="text-xs text-fog">
            Efface les compteurs email (y compris ceux comptés par erreur pour un autre projet du
            compte Resend) et les reconstruit depuis les fiches des inscrits.
          </span>
        </form>
      </section>

      <section className="card card-surface mt-6 p-5 sm:p-6" aria-labelledby="preview-title">
        <h2 id="preview-title" className="h-item text-cream">
          Aperçu des emails
        </h2>
        <nav aria-label="Étape à prévisualiser" className="mt-3 flex flex-wrap gap-2">
          {SEQUENCE_STEPS.map((step) => (
            <a
              key={step.key}
              href={`?apercu=${step.key}`}
              aria-current={previewStep === step.key ? "page" : undefined}
              className={`chip ${previewStep === step.key ? "is-active" : ""}`}
            >
              {step.label}
            </a>
          ))}
        </nav>
        <ul className="mt-4 space-y-1 text-sm text-fog">
          {sequence.map((m) => (
            <li key={m.key}>
              <span className="text-cream">{m.subject}</span>
              <span className="text-fog">
                {" "}
                · {m.dayOffset === 0 ? "envoyé tout de suite" : `J+${m.dayOffset} à 9 h (heure de Paris)`}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-4 frame bg-white">
          <iframe
            title={`Aperçu de l’email ${previewStep}`}
            src={`/api/funnel/admin/email-preview?step=${previewStep}`}
            className="h-[720px] w-full"
          />
        </div>
        <p className="mt-3 text-xs text-fog">
          Aperçu rendu avec le prénom « Camille » et un lien de désinscription factice.
        </p>
      </section>
    </AdminShell>
  );
}
