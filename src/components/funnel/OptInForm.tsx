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
export function OptInForm({ compact = false }: { compact?: boolean }) {
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

  const inputClass =
    "w-full rounded-xl border border-[rgba(251,219,175,0.32)] bg-[rgba(251,219,175,0.06)] px-4 py-3 text-base text-[var(--cream)] placeholder:text-[rgba(251,219,175,0.5)] transition-colors duration-200 focus:border-[var(--orange)] focus:bg-[rgba(251,219,175,0.1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--orange)]";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={compact ? "space-y-3" : "space-y-4"}
      aria-describedby={`${id}-note`}
    >
      <div>
        <label
          htmlFor={`${id}-firstName`}
          className="mb-1.5 block text-xs font-medium uppercase tracking-[0.1em] text-[rgba(251,219,175,0.72)]"
        >
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
        <label
          htmlFor={`${id}-email`}
          className="mb-1.5 block text-xs font-medium uppercase tracking-[0.1em] text-[rgba(251,219,175,0.72)]"
        >
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

      <label
        htmlFor={`${id}-consent`}
        className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-[var(--muted)]"
      >
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
          className="rounded-lg border border-[rgba(224,112,32,0.6)] bg-[rgba(224,112,32,0.12)] px-3 py-2 text-sm text-[var(--cream)]"
        >
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status !== "idle"}
        className="heading-font flex w-full cursor-pointer items-center justify-center rounded-xl bg-[var(--cream)] px-5 py-4 text-sm uppercase tracking-[0.08em] text-[#0a0807] transition-[background-color,transform] duration-200 hover:bg-white disabled:cursor-wait disabled:opacity-80"
      >
        {status === "idle"
          ? "Je veux la méthode gratuite"
          : status === "sending"
            ? "Inscription en cours…"
            : "C'est bon, on y va"}
      </button>
      <p id={`${id}-note`} className="text-center text-xs leading-relaxed text-[rgba(251,219,175,0.62)]">
        Pas de spam : nous vous envoyons les accès et le processus pour réussir
        dans l’IA par email.
      </p>
    </form>
  );
}
