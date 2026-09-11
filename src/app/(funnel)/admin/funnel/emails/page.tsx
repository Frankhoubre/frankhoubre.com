import type { Metadata } from "next";
import { AdminLogin } from "@/components/funnel/admin/AdminLogin";
import { AdminShell } from "@/components/funnel/admin/AdminShell";
import { Notice, Panel, SEQUENCE_STEPS, Th, pct } from "@/components/funnel/admin/Widgets";
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
  const previewMail = sequence.find((m) => m.key === previewStep);

  return (
    <AdminShell active="emails" title="Séquence d’emails">
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fog">
        {SEQUENCE_STEPS.length} emails : l’accès part tout de suite, les suivants sont programmés chez Resend juste après l’inscription. Les compteurs
        ci-dessous viennent du webhook Resend
        {webhook ? "" : " (non configuré : seuls les envois programmés sont comptés)"}. Les
        textes vivent dans le code, fichier src/lib/funnel/emails.ts.
      </p>
      {message?.startsWith("recalcule:") ? (
        <div className="mt-4">
          <Notice>
            Statistiques recalculées à partir de {message.split(":")[1]} fiche(s) d’inscrit,{" "}
            {message.split(":")[2]} événement(s) email reconstitués.
          </Notice>
        </div>
      ) : null}

      <Panel index="01" title="Résultats par étape (depuis le début)" id="steps-title" className="mt-8">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr>
                <Th>Étape</Th>
                <Th>Envoi</Th>
                <Th right>Programmés</Th>
                <Th right>Délivrés</Th>
                <Th right>Ouverts</Th>
                <Th right>Cliqués</Th>
                <Th right className="pr-0">Bounce / spam</Th>
              </tr>
            </thead>
            <tbody>
              {SEQUENCE_STEPS.map((step, i) => {
                const s = sent[step.key] ?? 0;
                const d = delivered[step.key] ?? 0;
                const o = opened[step.key] ?? 0;
                const c = clicked[step.key] ?? 0;
                const b = (bounced[step.key] ?? 0) + (complained[step.key] ?? 0);
                const cell = "py-2.5 pr-4 text-right tabular-nums text-cream";
                const rate = (v: string) => (v ? <span className="meta ml-2 text-[10px]">{v}</span> : null);
                return (
                  <tr key={step.key} className="border-t border-line">
                    <td className="py-2.5 pr-4 text-cream">
                      <span className="meta mr-3 text-[10px] tabular-nums">0{i + 1}</span>
                      {step.label}
                    </td>
                    <td className="py-2.5 pr-4 text-fog">{step.when}</td>
                    <td className={cell}>{s}</td>
                    <td className={cell}>{d}{rate(pct(d, s))}</td>
                    <td className={cell}>{o}{rate(pct(o, d))}</td>
                    <td className={cell}>{c}{rate(pct(c, d))}</td>
                    <td className="py-2.5 text-right tabular-nums text-cream">{b}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-fog">
          Taux : délivrés sur programmés, ouverts et cliqués sur délivrés. Les ouvertures
          dépendent du chargement des images par le lecteur mail (Apple Mail les gonfle, Gmail
          les masque parfois).
        </p>
        <form
          method="post"
          action="/api/funnel/admin/email-stats"
          className="mt-5 flex flex-wrap items-center gap-4 border-t border-line pt-5"
        >
          <input type="hidden" name="action" value="rebuild" />
          <button type="submit" className="btn btn-sm">
            <span>Recalculer les statistiques email</span>
          </button>
          <span className="max-w-xl text-xs leading-relaxed text-fog">
            Efface les compteurs email (y compris ceux comptés par erreur pour un autre projet du
            compte Resend) et les reconstruit depuis les fiches des inscrits.
          </span>
        </form>
      </Panel>

      <Panel
        index="02"
        title="Aperçu des emails"
        id="preview-title"
        className="mt-6"
        actions={
          <nav aria-label="Étape à prévisualiser" className="flex flex-wrap gap-2">
            {SEQUENCE_STEPS.map((step) => (
              <a
                key={step.key}
                href={`?apercu=${step.key}`}
                aria-current={previewStep === step.key ? "page" : undefined}
                className="chip"
              >
                {step.label}
              </a>
            ))}
          </nav>
        }
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div>
            <p className="meta">Calendrier d’envoi</p>
            <ol className="mt-3">
              {sequence.map((m, i) => (
                <li key={m.key} className={`grid grid-cols-[2rem_1fr] gap-3 border-t border-line py-3 ${m.key === previewStep ? "text-cream" : "text-stone"}`}>
                  <span className="meta tabular">0{i + 1}</span>
                  <span>
                    <span className="block text-sm">{m.subject}</span>
                    <span className="meta mt-1 block text-[10px]">
                      {m.dayOffset === 0 ? "Envoyé tout de suite" : `J+${m.dayOffset} à 9 h, heure de Paris`}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-xs leading-relaxed text-fog">
              Aperçu rendu avec le prénom « Camille » et un lien de désinscription factice.
            </p>
          </div>
          <div>
            <p className="meta flex items-center justify-between">
              <span>Aperçu · {previewMail?.subject}</span>
              <a href={`/api/funnel/admin/email-preview?step=${previewStep}`} target="_blank" rel="noopener noreferrer" className="link-muted">
                Ouvrir seul
              </a>
            </p>
            <div className="frame frame-marks mt-3 bg-charcoal p-1.5">
              <iframe
                title={`Aperçu de l’email ${previewStep}`}
                src={`/api/funnel/admin/email-preview?step=${previewStep}`}
                className="h-[760px] w-full bg-charcoal"
              />
            </div>
          </div>
        </div>
      </Panel>
    </AdminShell>
  );
}
