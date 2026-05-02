type ToolIframePageProps = {
  title: string;
  subtitle: string;
  iframeTitle: string;
  iframeSrc: string;
};

export function ToolIframePage({
  title,
  subtitle,
  iframeTitle,
  iframeSrc,
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
          className="h-[80vh] w-full rounded-2xl border border-zinc-200 bg-white shadow-lg shadow-zinc-900/5"
        />
      </section>
    </div>
  );
}
