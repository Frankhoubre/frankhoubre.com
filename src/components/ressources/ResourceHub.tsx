import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { resourcePath, resourcesFor, type ResourceLocale } from "@/lib/ressources";

const UI = {
  fr: {
    kicker: "Ressources",
    title: "Un mot, une méthode.",
    lede: "Sous chaque reel, je vous propose un mot à commenter. Chaque mot ouvre sa page : un vrai cas, les étapes dans l'ordre et la leçon vidéo de chaque geste.",
  },
  en: {
    kicker: "Resources",
    title: "One word, one method.",
    lede: "Under every reel there is a word to comment. Each word opens its own page: a real case, the steps in order and the video lesson for each one.",
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
                  <p className="meta meta-strong">{r.word}</p>
                  <p className="h-block mt-4 text-cream">
                    {r.title} <span className="or">{r.titleGold}</span>
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-fog">{r.metaDescription}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
