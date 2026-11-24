import type { ResourceLocale } from "@/lib/ressources/types";

const LABEL = {
  fr: { level: "Niveau", value: "Débutant" },
  en: { level: "Level", value: "Beginner" },
} as const;

/**
 * Niveau de difficulté, affiché en tête de chaque page ressource.
 * Toutes les méthodes sont pensées pour un débutant : la pastille rassure
 * avant même la lecture du titre.
 */
export function LevelBadge({ locale, className = "" }: { locale: ResourceLocale; className?: string }) {
  const t = LABEL[locale];
  return (
    <p
      className={`meta inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-black/40 px-3.5 py-2 backdrop-blur-sm ${className}`}
    >
      <span className="flex items-end gap-[3px]" aria-hidden>
        <span className="h-2 w-[3px] rounded-sm bg-[color:var(--gold)]" />
        <span className="h-3 w-[3px] rounded-sm bg-current opacity-30" />
        <span className="h-4 w-[3px] rounded-sm bg-current opacity-30" />
      </span>
      <span>
        {t.level} : <span className="meta-strong">{t.value}</span>
      </span>
    </p>
  );
}
