"use client";

import { useId, useState, type FormEvent } from "react";

type Props = { label: string; cta: string; done: string; error: string };

/** « Lien perdu » : renvoie l'email d'accès à un acheteur. */
export function ResendAccessForm({ label, cta, done, error }: Props) {
  const id = useId();
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const data = new FormData(e.currentTarget);
    setStatus("sending");
    try {
      const res = await fetch("/api/buzz/resend-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: String(data.get("email") ?? ""),
          website: String(data.get("website") ?? ""),
        }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-3 sm:flex-row sm:items-end">
      <div className="flex-1">
        <label htmlFor={`${id}-email`} className="meta mb-2 block">
          {label}
        </label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          maxLength={120}
          className="input"
        />
      </div>
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
        <label htmlFor={`${id}-website`}>Website</label>
        <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <button type="submit" disabled={status === "sending" || status === "done"} className="btn">
        <span>{cta}</span>
      </button>
      {status === "done" || status === "error" ? (
        <p role="status" className="basis-full text-sm leading-relaxed text-fog">
          {status === "done" ? done : error}
        </p>
      ) : null}
    </form>
  );
}
