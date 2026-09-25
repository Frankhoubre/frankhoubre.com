"use client";

import { useEffect } from "react";
import { detectAiEngineFromWindow } from "@/lib/ai-traffic";
import { rememberUtm, sendFunnelEvent } from "@/components/funnel/track";

const SESSION_KEY = "fh-ai-referral";

/**
 * Une fois par session, si le visiteur arrive depuis un assistant IA :
 * evenement `ai_referral` compte dans le tableau de bord du funnel, avec le
 * moteur en source et la page d'entree en detail.
 */
export function AiReferralBeacon() {
  useEffect(() => {
    if (navigator.webdriver) return;
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
    } catch {
      /* navigation privee : on tente quand meme l'envoi */
    }
    const engine = detectAiEngineFromWindow();
    if (!engine) return;
    try {
      sessionStorage.setItem(SESSION_KEY, engine);
    } catch {
      /* ignore */
    }
    rememberUtm();
    sendFunnelEvent("ai_referral", window.location.pathname.slice(0, 120));
  }, []);
  return null;
}
