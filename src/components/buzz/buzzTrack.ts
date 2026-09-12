import type { BuzzEvent } from "@/lib/buzz/config";
import { readUtm } from "@/components/funnel/track";

/** Envoi non bloquant vers la balise du tunnel payant. */
export function sendBuzzEvent(event: BuzzEvent, detail?: string) {
  const utm = readUtm();
  const payload = JSON.stringify({
    event,
    referrer: utm.referrer,
    utmSource: utm.utmSource,
    detail,
  });
  try {
    if (navigator.sendBeacon) {
      const blob = new Blob([payload], { type: "application/json" });
      if (navigator.sendBeacon("/api/buzz/event", blob)) return;
    }
    void fetch("/api/buzz/event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
      keepalive: true,
    });
  } catch {
    /* la mesure ne doit jamais casser la page */
  }
}
