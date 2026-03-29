"use client";

type Props = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  id?: string;
};

export function SearchInput({
  value,
  onChange,
  placeholder = "Rechercher…",
  id = "blog-search",
}: Props) {
  return (
    <input
      id={id}
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-950 shadow-sm outline-none ring-neutral-400 placeholder:text-neutral-600 focus:ring-2"
      autoComplete="off"
    />
  );
}
