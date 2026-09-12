"use client";

import { useSearchParams } from "next/navigation";

type Props = {
  /** Paramètre d'URL lu (checkout, welcome) et messages par valeur. */
  param: string;
  messages: Record<string, string>;
};

/** Bandeau contextuel piloté par l'URL, sans rendre la page dynamique. */
export function BuzzNotice({ param, messages }: Props) {
  const params = useSearchParams();
  const value = params.get(param);
  const message = value ? messages[value] : undefined;
  if (!message) return null;
  return (
    <div role="status" className="mb-8 border border-amber/70 bg-amber/10 px-4 py-3 text-sm leading-relaxed text-cream">
      {message}
    </div>
  );
}
