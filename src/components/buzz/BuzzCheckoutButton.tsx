"use client";

import { useState } from "react";
import { Arrow } from "@/components/ui/Cta";
import { readUtm } from "@/components/funnel/track";

type Status = "idle" | "sending" | "error";

type Props = {
  label: string;
  sendingLabel: string;
  soonLabel: string;
  errorLabel: string;
  /** Faux tant que Frank n'a pas rempli la méthode ou que Stripe manque. */
  ready: boolean;
  compact?: boolean;
};

/**
 * Bouton de paiement : demande une session Stripe Checkout à l'API puis
 * envoie l'acheteur sur la page de paiement hébergée par Stripe.
 */
export function BuzzCheckoutButton({
  label,
  sendingLabel,
  soonLabel,
  errorLabel,
  ready,
  compact = false,
}: Props) {
  const [status, setStatus] = useState<Status>("idle");

  async function start() {
    if (status === "sending" || !ready) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/buzz/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(readUtm()),
      });
      const json = (await res.json().catch(() => null)) as
        | { ok: true; url: string }
        | { ok: false; error?: string }
        | null;
      if (!json || !json.ok || !json.url) {
        setStatus("error");
        return;
      }
      window.location.assign(json.url);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={start}
        disabled={!ready || status === "sending"}
        aria-disabled={!ready}
        className={`btn w-full ${ready ? "btn-primary" : "btn-quiet"} ${compact ? "" : "btn-lg"}`}
      >
        <span>{!ready ? soonLabel : status === "sending" ? sendingLabel : label}</span>
        {ready ? <Arrow /> : null}
      </button>
      {status === "error" ? (
        <p role="alert" className="mt-3 border border-amber/70 bg-amber/10 px-3 py-2 text-sm text-cream">
          {errorLabel}
        </p>
      ) : null}
    </div>
  );
}
