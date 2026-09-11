"use client";

import { useSearchParams } from "next/navigation";

/** Bandeau affiché juste après l'inscription (?bienvenue=1). */
export function CourseWelcome() {
  const params = useSearchParams();
  const state = params.get("bienvenue");
  if (!state) return null;
  const message =
    state === "1"
      ? "C’est bon, vous êtes inscrit. Lancez la vidéo 1 ci-dessous (12 minutes). Votre email d’accès arrive dans quelques minutes, puis un email chaque matin : les jours 2 et 3, et la suite de la méthode."
      : "Vous êtes déjà inscrit, les trois vidéos sont ici. Vos emails du challenge sont en route ou déjà dans votre boîte.";
  return (
    <div
      role="status"
      className="mx-auto mb-8 max-w-3xl border border-amber/60 bg-charcoal/70 px-4 py-3 text-left text-sm leading-relaxed text-cream backdrop-blur-sm"
    >
      <span className="meta meta-amber mr-3">Inscription</span>
      {message}
    </div>
  );
}
