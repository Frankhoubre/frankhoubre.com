import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { resourcePath, resourcesFor, type ResourceLocale } from "@/lib/ressources";

const UI = {
  fr: {
    kicker: "Ressources",
    title: "Un film, une méthode.",
    lede: "Chaque méthode part de là où vous êtes et vous amène à un résultat : un storyboard, un scénario, un pilote animé. Un vrai cas, les étapes dans l'ordre, la vidéo de chaque geste.",
  },
  en: {
    kicker: "Resources",
    title: "One film, one method.",
    lede: "Each method starts where you are and takes you to a result: a storyboard, a screenplay, an animated pilot. A real case, the steps in order, the video for each move.",
  },
} as const;

export function ResourceHub({ locale }: { locale: ResourceLocale }) {
  const t = UI[locale];
  return (
    <>
      <PageHeader kicker={t.kicker} title={t.title} lede={t.lede} />
      <section className="section">
        <div className="container-x">
          <ul className="grid gap-px border border-line bg-line sm:grid-cols-2">
            {resourcesFor(locale).map((r) => (
              <li key={r.slug} className="bg-charcoal">
                <Link href={resourcePath(locale, r.slug)} className="group block p-8 transition-colors hover:bg-white/[0.03]">
                  <p className="meta meta-strong">{r.label}</p>
                  <p className="h-block mt-4 text-cream">
                    {r.title} <span className="or">{r.titleGold}</span>
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-fog">{r.to.title}.</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
