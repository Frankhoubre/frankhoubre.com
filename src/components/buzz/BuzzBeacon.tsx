"use client";

import { useEffect, useRef } from "react";
import type { BuzzEvent } from "@/lib/buzz/config";
import { rememberUtm } from "@/components/funnel/track";
import { sendBuzzEvent } from "@/components/buzz/buzzTrack";

/** Compte une vue de page du tunnel payant (robots filtrés côté serveur). */
export function BuzzBeacon({ event }: { event: BuzzEvent }) {
  const fired = useRef(false);
  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    if (navigator.webdriver) return;
    rememberUtm();
    sendBuzzEvent(event);
  }, [event]);
  return null;
}
