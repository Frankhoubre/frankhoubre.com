"use client";

import { useId, useState, type FormEvent } from "react";
import { readUtm } from "@/components/funnel/track";

type Status = "idle" | "sending" | "done";

const ERRORS: Record<string, string> = {
  consent: "Cochez la case de consentement pour recevoir vos accès par email.",
  invalid: "Vérifiez votre prénom et votre adresse email.",
  rate_limited:
    "Trop de tentatives depuis votre connexion. Réessayez dans quelques minutes.",
  network:
    "L'inscription n'a pas pu partir. Vérifiez votre connexion puis réessayez.",
};

/**
 * Formulaire d'inscription à la formation. Envoie en JSON à l'API du funnel,
 * puis redirige vers la page de formation (les accès partent aussi par email).
 */
export function OptInForm({
  compact = false,
  tone = "light",
}: {
  compact?: boolean;
  /** « dark » : posé sur une bande cinéma sombre (textes clairs, bouton lumineux). */
  tone?: "light" | "dark";
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
          firstName: String(data.get("firstName") ?? ""),
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
    ? "w-full rounded-xl border border-white/25 bg-white/[0.06] px-4 py-3 text-base text-white placeholder:text-white/50 transition-colors duration-200 focus:border-[var(--orange)] focus:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--orange)]"
    : "w-full rounded-xl border border-[rgba(17,17,17,0.32)] bg-[rgba(17,17,17,0.06)] px-4 py-3 text-base text-[var(--cream)] placeholder:text-[rgba(17,17,17,0.5)] transition-colors duration-200 focus:border-[var(--orange)] focus:bg-[rgba(17,17,17,0.1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--orange)]";
  const labelClass = dark
    ? "mb-1.5 block text-xs font-medium uppercase tracking-[0.1em] text-white/70"
    : "mb-1.5 block text-xs font-medium uppercase tracking-[0.1em] text-[rgba(17,17,17,0.72)]";
  const consentClass = dark
    ? "flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-white/75"
    : "flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-[var(--muted)]";
  const noteClass = dark
    ? "text-center text-xs leading-relaxed text-white/60"
    : "text-center text-xs leading-relaxed text-[rgba(17,17,17,0.62)]";
  const buttonClass = dark
    ? "cine-cta w-full"
    : "heading-font flex w-full cursor-pointer items-center justify-center rounded-xl bg-[#111111] px-5 py-4 text-sm uppercase tracking-[0.08em] text-white transition-[background-color,transform] duration-200 hover:bg-[#2a2a2a] disabled:cursor-wait disabled:opacity-80";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={compact ? "space-y-3" : "space-y-4"}
      aria-describedby={`${id}-note`}
    >
      <div>
        <label htmlFor={`${id}-firstName`} className={labelClass}>
          Votre prénom
        </label>
        <input
          id={`${id}-firstName`}
          name="firstName"
          type="text"
          autoComplete="given-name"
          required
          maxLength={60}
          placeholder="Prénom"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor={`${id}-email`} className={labelClass}>
          Votre e-mail
        </label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          maxLength={120}
          placeholder="vous@exemple.fr"
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

      <label htmlFor={`${id}-consent`} className={consentClass}>
        <input
          id={`${id}-consent`}
          name="consent"
          type="checkbox"
          className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-[var(--orange)]"
        />
        <span>
          Oui, je consens à recevoir mes accès par email, ainsi que les méthodes
          et conseils de Frank Houbre pour réussir en IA. Désinscription en un
          clic dans chaque email.
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

      <button type="submit" disabled={status !== "idle"} className={buttonClass}>
        {status === "idle"
          ? "Je veux la méthode gratuite"
          : status === "sending"
            ? "Inscription en cours…"
            : "C'est bon, on y va"}
      </button>
      <p id={`${id}-note`} className={noteClass}>
        Pas de spam : nous vous envoyons les accès et le processus pour réussir
        dans l’IA par email.
      </p>
    </form>
  );
}
