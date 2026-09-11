import type { OutilContent } from "@/lib/outils-content";
import { Breadcrumb, PageHeader } from "@/components/ui/PageHeader";
import { Plus } from "@/components/FaqSection";

type ToolIframePageProps = {
  title: string;
  subtitle: string;
  iframeTitle: string;
  iframeSrc: string;
  /** Contenu éditorial unique rendu sous l'iframe (intro, guide, FAQ). */
  content?: OutilContent;
};

/**
 * Page d'outil : en-tête éditorial, l'outil lui-même dans un cadre
 * « moniteur » (l'iframe garde son interface claire), puis le contenu
 * indexable : intro, mode d'emploi numéroté, FAQ.
 */
export function ToolIframePage({
  title,
  subtitle,
  iframeTitle,
  iframeSrc,
  content,
}: ToolIframePageProps) {
  return (
    <>
      <PageHeader
        kicker="Outil interactif"
        size="lg"
        title={title}
        lede={subtitle}
        breadcrumb={
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Outils", href: "/outils" },
              { label: title },
            ]}
          />
        }
        aside={<p className="meta">Gratuit · sans inscription</p>}
      />

      <section className="container-x section-sm" aria-label={iframeTitle}>
        <div className="frame frame-marks bg-charcoal-2 p-1.5 sm:p-2">
          <iframe
            title={iframeTitle}
            src={iframeSrc}
            loading="lazy"
            className="h-[75svh] min-h-[480px] w-full bg-white sm:h-[80vh]"
          />
        </div>
        <p className="meta mt-3 flex items-center justify-between">
          <span>Moniteur · {iframeTitle}</span>
          <a href={iframeSrc} target="_blank" rel="noopener noreferrer" className="link-muted">
            Ouvrir en plein écran
          </a>
        </p>
      </section>

      {content ? (
        <div className="container-x pb-20 sm:pb-28">
          <div className="grid-12 gap-y-14 border-t border-line pt-14">
            <div className="col-span-12 lg:col-span-3">
              <p className="meta"><span className="meta-strong">01</span> &nbsp;/&nbsp; À propos de l’outil</p>
            </div>
            <section className="prose-cinema col-span-12 lg:col-span-7 lg:col-start-5">
              <h2 className="!mt-0 !border-0 !pt-0">{`À propos de ${title}`}</h2>
              {content.intro.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </section>
          </div>

          <div className="grid-12 mt-14 gap-y-10 border-t border-line pt-14">
            <div className="col-span-12 lg:col-span-3">
              <p className="meta"><span className="meta-strong">02</span> &nbsp;/&nbsp; Comment ça marche</p>
            </div>
            <ol className="col-span-12 lg:col-span-7 lg:col-start-5">
              {content.how.map((step, i) => (
                <li key={i} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-line py-5 last:border-b">
                  <span className="meta meta-strong tabular pt-1">0{i + 1}</span>
                  <div className="min-w-0">
                    <p className="h-item text-cream">{step.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-fog">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid-12 mt-14 gap-y-10 border-t border-line pt-14">
            <div className="col-span-12 lg:col-span-3">
              <p className="meta"><span className="meta-strong">03</span> &nbsp;/&nbsp; Questions fréquentes</p>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-5">
              {content.faq.map((item, i) => (
                <details key={i} className="faq-item">
                  <summary>
                    <span>{item.question}</span>
                    <Plus />
                  </summary>
                  <p className="text-[15px] leading-relaxed text-fog">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
