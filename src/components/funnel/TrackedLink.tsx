"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import type { FunnelEvent } from "@/lib/funnel/config";
import { sendFunnelEvent } from "@/components/funnel/track";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: FunnelEvent;
  detail?: string;
  children: ReactNode;
};

/** Lien sortant (Skool, ScreenWeaver) dont le clic est compté. */
export function TrackedLink({ event, detail, children, onClick, ...rest }: Props) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
      onClick={(e) => {
        sendFunnelEvent(event, detail);
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
