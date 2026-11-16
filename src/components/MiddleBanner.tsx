import Image from "next/image";
import Link from "next/link";
import { FORMATION_COPY, formationHref } from "@/lib/formation-promo";
import { Arrow } from "@/components/ui/Cta";

/** Photogramme de fond de l'encart (extrait de film IA de Frank). */
const BANNER_STILL = {
  src: "/images/home/hero-base.webp",
  alt: "",
};

/**
 * Encart inséré au milieu des articles (composant MDX <MiddleBanner />) :
 * photogramme plein cadre sous un dégradé noir progressif, offre à gauche,
 * un bouton plein. Texte dans la langue de l'article.
 */
export function MiddleBanner({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const c = FORMATION_COPY[locale].mid;
  return (
    <aside
      className="not-prose frame frame-grain frame-marks relative my-12 overflow-hidden"
      aria-label={c.label}
    >
      <Image
        src={BANNER_STILL.src}
        alt={BANNER_STILL.alt}
        fill
        sizes="(max-width: 768px) 100vw, 720px"
        className="object-cover object-[70%_center]"
      />
      <span
        className="absolute inset-0 bg-[linear-gradient(90deg,rgb(11_11_12/0.96)_0%,rgb(11_11_12/0.88)_38%,rgb(11_11_12/0.45)_70%,rgb(11_11_12/0.15)_100%),linear-gradient(180deg,rgb(11_11_12/0.2)_0%,rgb(11_11_12/0)_40%,rgb(11_11_12/0.75)_100%)]"
        aria-hidden
      />
      <div className="relative z-[3] max-w-md p-6 sm:p-8">
        <p className="meta meta-strong">{c.kicker}</p>
        <p className="mt-4 text-[clamp(1.5rem,2.6vw,2rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-cream">
          {c.title}
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-stone">{c.text}</p>
        <p className="mt-6">
          <Link
            href={formationHref("article-mid")}
            className="btn btn-primary w-full sm:w-auto"
            {...(locale === "en" ? { hrefLang: "fr" } : {})}
          >
            <span>{c.button}</span>
            <Arrow />
          </Link>
        </p>
        <p className="mt-5 text-xs text-fog">{c.note}</p>
      </div>
      <span className="meta absolute bottom-4 right-5 z-[3] hidden text-[10px] sm:block">{c.caption}</span>
    </aside>
  );
}
