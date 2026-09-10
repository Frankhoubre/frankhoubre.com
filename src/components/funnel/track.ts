import type { FunnelEvent } from "@/lib/funnel/config";

export const UTM_STORAGE_KEY = "fh-funnel-utm";

export type StoredUtm = {
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
};

/** Mémorise l'origine de la première visite (attribution de l'inscription). */
export function rememberUtm(): StoredUtm {
  const params = new URLSearchParams(window.location.search);
  const fresh: StoredUtm = {
    referrer: document.referrer || undefined,
    utmSource: params.get("utm_source") ?? undefined,
    utmMedium: params.get("utm_medium") ?? undefined,
    utmCampaign: params.get("utm_campaign") ?? undefined,
  };
  try {
    const prev = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (prev && !fresh.utmSource) return JSON.parse(prev) as StoredUtm;
    sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(fresh));
  } catch {
    /* navigation privée */
  }
  return fresh;
}

export function readUtm(): StoredUtm {
  try {
    const raw = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (raw) return JSON.parse(raw) as StoredUtm;
  } catch {
    /* ignore */
  }
  return { referrer: document.referrer || undefined };
}

/** Envoi non bloquant (sendBeacon, repli fetch keepalive). */
export function sendFunnelEvent(event: FunnelEvent, detail?: string) {
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
      if (navigator.sendBeacon("/api/funnel/event", blob)) return;
    }
    void fetch("/api/funnel/event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
      keepalive: true,
    });
  } catch {
    /* la mesure ne doit jamais casser la page */
  }
}
