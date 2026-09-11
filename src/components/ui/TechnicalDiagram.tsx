type Props = {
  className?: string;
  /** Quatre repères posés autour des orbites. */
  labels?: readonly [string, string, string, string];
};

/**
 * Orbites et axes : un élément graphique abstrait, très fin, qui évoque
 * les trajectoires et les instruments de mesure. Une orbite tourne
 * lentement quand JS est actif (désactivé en mouvement réduit).
 */
export function TechnicalDiagram({
  className = "",
  labels,
}: Props) {
  return (
    <div className={`relative ${className}`} aria-hidden>
      <svg viewBox="0 0 400 400" className="h-auto w-full" fill="none">
        <g stroke="currentColor" strokeWidth="0.6" opacity="0.5">
          <line x1="200" y1="8" x2="200" y2="392" />
          <line x1="8" y1="200" x2="392" y2="200" strokeDasharray="2 6" />
        </g>
        <g stroke="currentColor" strokeWidth="0.7">
          <circle cx="200" cy="200" r="150" opacity="0.35" />
          <circle cx="200" cy="200" r="98" opacity="0.5" />
          <circle cx="200" cy="200" r="46" opacity="0.7" />
        </g>
        <g className="orbit-spin" stroke="currentColor" strokeWidth="0.7">
          <ellipse cx="200" cy="200" rx="176" ry="62" opacity="0.4" />
          <circle cx="376" cy="200" r="2.4" fill="currentColor" stroke="none" />
        </g>
        <g className="orbit-spin-reverse" stroke="currentColor" strokeWidth="0.6">
          <ellipse cx="200" cy="200" rx="122" ry="122" opacity="0.18" strokeDasharray="1 5" />
          <circle cx="200" cy="78" r="1.8" fill="currentColor" stroke="none" />
        </g>
        <circle cx="200" cy="200" r="3" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="0.7" opacity="0.6">
          <path d="M190 8h20M190 392h20M8 190v20M392 190v20" />
        </g>
      </svg>
      {labels ? (
        <ul className="meta absolute inset-0 text-[10px]">
          <li className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full pb-2">{labels[0]}</li>
          <li className="absolute right-0 top-1/2 translate-x-full -translate-y-1/2 pl-3">{labels[1]}</li>
          <li className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full pt-2">{labels[2]}</li>
          <li className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 pr-3">{labels[3]}</li>
        </ul>
      ) : null}
    </div>
  );
}
