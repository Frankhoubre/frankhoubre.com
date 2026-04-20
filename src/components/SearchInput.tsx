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
      className="ds-input shadow-sm"
      autoComplete="off"
    />
  );
}
