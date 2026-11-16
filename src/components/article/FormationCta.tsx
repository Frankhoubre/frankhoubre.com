import Link from "next/link";
import { Arrow } from "@/components/ui/Cta";
import {
  FORMATION_COPY,
  formationHref,
  type FormationPlacement,
} from "@/lib/formation-promo";

type Props = {
  locale?: "fr" | "en";
  /** Emplacement du bloc (identifiant du titre, suivi éventuel au clic). */
  placement: Extract<FormationPlacement, "article-end" | "listing">;
  className?: string;
};

/**
 * Bloc « formation gratuite » de fin d'article et de bas de liste : ce que
 * contient la formation jour par jour, un seul bouton plein, la ligne de
 * réassurance. Rendu serveur, aucun JavaScript.
 */
export function FormationCta({ locale = "fr", placement, className = "" }: Props) {
  const c = FORMATION_COPY[locale].end;
  const id = `formation-cta-${placement}`;

  return (
    <aside className={`not-prose carte-noir p-6 sm:p-9 ${className}`} aria-labelledby={id}>
      <div className="grid gap-8 md:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] md:gap-10">
        <div className="min-w-0">
          <p className="meta meta-strong">{c.kicker}</p>
          <h2 id={id} className="h-block mt-4 text-cream">
            {c.title} <span className="or">{c.titleAccent}</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-stone">{c.text}</p>
        </div>
        <div className="min-w-0">
          <ol>
            {c.days.map(([day, label]) => (
              <li
                key={day}
                className="grid grid-cols-[4.25rem_minmax(0,1fr)] items-baseline gap-4 border-t border-line py-3 last:border-b"
              >
                <span className="meta meta-strong">{day}</span>
                <span className="text-sm leading-snug text-stone">{label}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6">
            <Link
              href={formationHref(placement)}
              className="btn btn-primary btn-lg w-full"
              {...(locale === "en" ? { hrefLang: "fr" } : {})}
            >
              <span>{c.button}</span>
              <Arrow />
            </Link>
          </p>
          <p className="mt-4 text-xs leading-relaxed text-fog">{c.note}</p>
        </div>
      </div>
    </aside>
  );
}
