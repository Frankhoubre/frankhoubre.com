"use client";

import { useId, useState, type FormEvent } from "react";
import { readUtm } from "@/components/funnel/track";

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
 */
export function OptInForm({
  compact = false,
  tone = "light",
  cta = "Recevoir mes 3 vidéos maintenant",
}: {
  compact?: boolean;
  /** « dark » : posé sur une bande cinéma sombre (textes clairs, bouton lumineux). */
  tone?: "light" | "dark";
  /** Texte du bouton, orienté sur ce que la personne obtient. */
  cta?: string;
}) {
  const dark = tone === "dark";
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

  const inputClass = dark
    ? "w-full min-w-0 rounded-xl border border-white/25 bg-white/[0.06] px-4 py-3.5 text-base text-white placeholder:text-white/50 transition-colors duration-200 focus:border-[var(--orange)] focus:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--orange)]"
    : "w-full min-w-0 rounded-xl border border-[rgba(17,17,17,0.32)] bg-white px-4 py-3.5 text-base text-[var(--cream)] placeholder:text-[rgba(17,17,17,0.5)] transition-colors duration-200 focus:border-[var(--orange)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--orange)]";
  const consentClass = dark
    ? "flex cursor-pointer items-start gap-3 text-[13px] leading-relaxed text-white/75"
    : "flex cursor-pointer items-start gap-3 text-[13px] leading-relaxed text-[var(--muted)]";
  const noteClass = dark
    ? "text-xs leading-relaxed text-white/60"
    : "text-xs leading-relaxed text-[rgba(17,17,17,0.62)]";
  const buttonClass = dark
    ? "cine-cta w-full"
    : "heading-font flex w-full cursor-pointer items-center justify-center rounded-xl bg-[#111111] px-5 py-4 text-sm uppercase tracking-[0.08em] text-white transition-[background-color,transform] duration-200 hover:bg-[#2a2a2a] disabled:cursor-wait disabled:opacity-80";

  const label = status === "idle" ? cta : status === "sending" ? "Un instant…" : "Ouverture de vos vidéos…";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={compact ? "space-y-3" : "space-y-4"}
      aria-describedby={`${id}-note`}
    >
      <div>
        <label htmlFor={`${id}-email`} className="sr-only">
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
          placeholder="Votre adresse email"
          className={inputClass}
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

      <button type="submit" disabled={status !== "idle"} className={buttonClass}>
        {label}
      </button>

      <label htmlFor={`${id}-consent`} className={consentClass}>
        <input
          id={`${id}-consent`}
          name="consent"
          type="checkbox"
          className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-[var(--orange)]"
        />
        <span>
          J’accepte de recevoir mes accès et les conseils de Frank Houbre par
          email. Désinscription en un clic.
        </span>
      </label>

      {error ? (
        <p
          role="alert"
          className={`rounded-lg border border-[rgba(224,112,32,0.6)] bg-[rgba(224,112,32,0.12)] px-3 py-2 text-sm ${dark ? "text-white" : "text-[var(--cream)]"}`}
        >
          {error}
        </p>
      ) : null}

      <p id={`${id}-note`} className={noteClass}>
        Accès immédiat aux vidéos. Aucune carte bancaire, aucun logiciel à
        installer.
      </p>
    </form>
  );
}
