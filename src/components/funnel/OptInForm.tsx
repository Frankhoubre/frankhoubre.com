"use client";

import { useId, useState, type FormEvent } from "react";
import { readUtm } from "@/components/funnel/track";
import { Arrow } from "@/components/ui/Cta";

type Status = "idle" | "sending" | "done";

const ERRORS: Record<string, string> = {
  consent: "Cochez la case pour recevoir vos accès par email.",
  invalid: "Vérifiez votre adresse email.",
  rate_limited:
    "Trop de tentatives depuis votre connexion. Réessayez dans quelques minutes.",
  network:
    "L'inscription n'a pas pu partir. Vérifiez votre connexion puis réessayez.",
};

/**
 * Formulaire d'inscription à la formation : un seul champ (l'email) pour
 * réduire la friction, la case de consentement, et l'accès immédiat à la page
 * de formation après envoi (les accès partent aussi par email).
 * `tone` est conservé pour compatibilité : un seul registre désormais.
 */
export function OptInForm({
  compact = false,
  cta = "Recevoir mes 3 vidéos maintenant",
}: {
  compact?: boolean;
  tone?: "light" | "dark";
  /** Texte du bouton, orienté sur ce que la personne obtient. */
  cta?: string;
}) {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const consent = data.get("consent") === "on";
    if (!consent) {
      setError(ERRORS.consent);
      return;
    }
    setError(null);
    setStatus("sending");
    const utm = readUtm();
    try {
      const res = await fetch("/api/funnel/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: String(data.get("email") ?? ""),
          consent,
          website: String(data.get("website") ?? ""),
          ...utm,
        }),
      });
      const json = (await res.json().catch(() => null)) as
        | { ok: true; redirect: string }
        | { ok: false; error?: string }
        | null;
      if (!json || !json.ok) {
        setStatus("idle");
        setError(ERRORS[(json && !json.ok && json.error) || "network"] ?? ERRORS.network);
        return;
      }
      setStatus("done");
      window.location.assign(json.redirect);
    } catch {
      setStatus("idle");
      setError(ERRORS.network);
    }
  }

  const label = status === "idle" ? cta : status === "sending" ? "Un instant" : "Ouverture de vos vidéos";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={compact ? "space-y-3" : "space-y-4"}
      aria-describedby={`${id}-note`}
    >
      <div>
        <label htmlFor={`${id}-email`} className="meta mb-2 block">
          Votre adresse email
        </label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          maxLength={120}
          placeholder="prenom@exemple.fr"
          className="input !min-h-[3.25rem] text-base"
        />
      </div>

      {/* Champ piège pour les robots : caché aux humains et aux lecteurs d'écran. */}
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
        <label htmlFor={`${id}-website`}>Site web</label>
        <input
          id={`${id}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button type="submit" disabled={status !== "idle"} className="btn btn-primary btn-lg w-full">
        <span>{label}</span>
        <Arrow />
      </button>

      <label htmlFor={`${id}-consent`} className="flex cursor-pointer items-start gap-3 text-[13px] leading-relaxed text-fog">
        <input
          id={`${id}-consent`}
          name="consent"
          type="checkbox"
          className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer"
        />
        <span>
          J’accepte de recevoir mes accès et les conseils de Frank Houbre par
          email. Désinscription en un clic.
        </span>
      </label>

      {error ? (
        <p role="alert" className="border border-amber/70 bg-amber/10 px-3 py-2 text-sm text-cream">
          {error}
        </p>
      ) : null}

      <p id={`${id}-note`} className="meta text-[10px] leading-relaxed text-fog/80">
        Accès immédiat aux vidéos. Aucune carte bancaire, aucun logiciel à installer.
      </p>
    </form>
  );
}
