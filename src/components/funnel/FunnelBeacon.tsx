"use client";

import { useEffect, useRef } from "react";
import type { FunnelEvent } from "@/lib/funnel/config";
import { rememberUtm, sendFunnelEvent } from "@/components/funnel/track";

/**
 * Compte une vue de page du funnel. Les pages sont statiques, donc la mesure
 * part du navigateur ; les robots sont filtrés côté serveur.
 */
export function FunnelBeacon({ event }: { event: FunnelEvent }) {
  const fired = useRef(false);
  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    if (navigator.webdriver) return;
    rememberUtm();
    sendFunnelEvent(event);
  }, [event]);
  return null;
}
