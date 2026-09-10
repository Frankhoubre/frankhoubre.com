"use client";

import { useSearchParams } from "next/navigation";

/** Bandeau affiché juste après l'inscription (?bienvenue=1). */
export function CourseWelcome() {
  const params = useSearchParams();
  const state = params.get("bienvenue");
  if (!state) return null;
  const message =
    state === "1"
      ? "Vous êtes inscrit. Votre email d’accès arrive dans quelques minutes, puis un email par jour pour les jours 2 et 3. Vous pouvez déjà commencer ici."
      : "Vous êtes bien inscrit. Les trois jours sont ici, et vos emails du challenge sont en route ou déjà dans votre boîte.";
  return (
    <div
      role="status"
      className="mx-auto mb-8 max-w-3xl rounded-xl border border-[rgba(224,112,32,0.55)] bg-[rgba(224,112,32,0.12)] px-4 py-3 text-sm leading-relaxed text-[var(--cream)]"
    >
      {message}
    </div>
  );
}
