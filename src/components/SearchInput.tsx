"use client";

type Props = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  id?: string;
  compact?: boolean;
};

export function SearchInput({
  value,
  onChange,
  placeholder = "Rechercher",
  id = "blog-search",
  compact = false,
}: Props) {
  return (
    <div className="relative">
      <input
        id={id}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`input pr-10 ${compact ? "!min-h-10 text-sm" : ""}`}
        autoComplete="off"
      />
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-fog"
        aria-hidden
      >
        <circle cx="6" cy="6" r="4.5" />
        <path d="M9.5 9.5L13 13" strokeLinecap="round" />
      </svg>
    </div>
  );
}
