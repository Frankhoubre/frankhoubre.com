/**
 * La méthode en quatre temps, en typographie plutôt qu'en image : c'est le
 * contenu réel de la formation (idée, personnage, storyboard, film), lisible
 * sans chargement et fidèle quel que soit l'écran.
 */
const STEPS = [
  {
    n: "01",
    title: "L'idée écrite",
    text: "Une phrase, une émotion, une image finale.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M6 3h9l4 4v14H6z" />
        <path d="M15 3v4h4" />
        <path d="M9 12h7M9 16h7" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Le personnage",
    text: "Une character sheet, face, profil, dos.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 21c0-4 3-6.5 7-6.5s7 2.5 7 6.5" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Le storyboard",
    text: "Quatre à six plans validés en image.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="4" width="8" height="7" rx="1" />
        <rect x="13" y="4" width="8" height="7" rx="1" />
        <rect x="3" y="13" width="8" height="7" rx="1" />
        <rect x="13" y="13" width="8" height="7" rx="1" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Le film",
    text: "Génération, montage, rythme.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="6" width="13" height="12" rx="2" />
        <path d="M16 10l5-3v10l-5-3z" />
      </svg>
    ),
  },
] as const;

export function MethodPipeline() {
  return (
    <ol className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[rgba(17,17,17,0.14)] bg-[rgba(17,17,17,0.14)]">
      {STEPS.map((s) => (
        <li key={s.n} className="bg-white p-4 sm:p-5">
          <div className="flex items-center justify-between text-[rgba(17,17,17,0.62)]">
            <span className="heading-font text-[11px] tracking-[0.12em]">{s.n}</span>
            {s.icon}
          </div>
          <p className="heading-font mt-4 text-[11px] uppercase tracking-[0.04em] text-[var(--cream)] [overflow-wrap:anywhere] sm:text-xs">
            {s.title}
          </p>
          <p className="mt-1.5 text-[13px] leading-snug text-[var(--muted)]">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
