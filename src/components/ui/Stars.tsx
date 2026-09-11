type Props = {
  /** Nombre d'étoiles pleines, sur cinq. */
  value?: number;
  label?: string;
  className?: string;
};

/** Cinq étoiles fines, ambre, pour les avis. Lisible par les lecteurs d'écran via `label`. */
export function Stars({ value = 5, label, className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 text-amber ${className}`}
      role="img"
      aria-label={label ?? `${value} étoiles sur 5`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill={i < value ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M12 2.8l2.9 6.1 6.7.8-4.9 4.6 1.3 6.6L12 17.6 6 20.9l1.3-6.6-4.9-4.6 6.7-.8z" />
        </svg>
      ))}
    </span>
  );
}
