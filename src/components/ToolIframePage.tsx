import type { OutilContent } from "@/lib/outils-content";

type ToolIframePageProps = {
  title: string;
  subtitle: string;
  iframeTitle: string;
  iframeSrc: string;
  /** Contenu éditorial unique rendu sous l'iframe (intro, guide, FAQ). */
  content?: OutilContent;
};

export function ToolIframePage({
  title,
  subtitle,
  iframeTitle,
  iframeSrc,
  content,
}: ToolIframePageProps) {
  return (
    <div className="ds-page">
      <section className="ds-cinematic-frame p-6 sm:p-8">
        <div className="relative z-10">
          <p className="ds-eyebrow text-white/70">Outil interactif</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/85 sm:text-base">
            {subtitle}
          </p>
        </div>
      </section>

      <section className="mt-8">
        <iframe
          title={iframeTitle}
          src={iframeSrc}
          loading="lazy"
          className="h-[75svh] min-h-[480px] w-full rounded-2xl border border-zinc-200 bg-white shadow-lg shadow-zinc-900/5 sm:h-[80vh]"
        />
      </section>

      {content ? (
        <div className="mx-auto mt-14 max-w-3xl space-y-12">
          <section className="prose-cinema max-w-none text-neutral-800">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
              {`À propos de ${title}`}
            </h2>
            {content.intro.map((paragraph, i) => (
              <p key={i} className="mt-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
              Comment ça marche
            </h2>
            <ol className="mt-6 space-y-4">
              {content.how.map((step, i) => (
                <li key={i} className="ds-card flex gap-4 p-5">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white"
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold text-neutral-950">
                      {step.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-700">
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
              Questions fréquentes
            </h2>
            <div className="mt-6 space-y-3">
              {content.faq.map((item, i) => (
                <details key={i} className="ds-card p-5">
                  <summary className="cursor-pointer font-semibold text-neutral-950">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </div>
      ) : null}
    </div>
  );
}
