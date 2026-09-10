import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { FUNNEL_PATHS, SUBSCRIBED_COOKIE } from "@/lib/funnel/config";
import {
  isResendConfigured,
  sendFunnelSequence,
  syncResendContact,
} from "@/lib/funnel/emails";
import { cleanShort, clientIp, resolveSource } from "@/lib/funnel/request";
import {
  funnelDateKey,
  getFunnelStore,
  type SequenceEmailState,
  type Subscriber,
} from "@/lib/funnel/store";

export const runtime = "nodejs";

const bodySchema = z.object({
  firstName: z.string().trim().min(1).max(60),
  email: z.string().trim().toLowerCase().email().max(120),
  consent: z.literal(true),
  /** Champ piège : un humain le laisse vide. */
  website: z.string().max(0).optional(),
  referrer: z.string().max(500).optional(),
  utmSource: z.string().max(80).optional(),
  utmMedium: z.string().max(80).optional(),
  utmCampaign: z.string().max(80).optional(),
});

const RATE_LIMIT = 8;
const RATE_WINDOW_S = 15 * 60;

export async function POST(req: NextRequest) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    const consentMissing = parsed.error.issues.some((i) => i.path[0] === "consent");
    return NextResponse.json(
      { ok: false, error: consentMissing ? "consent" : "invalid" },
      { status: 400 },
    );
  }
  const input = parsed.data;
  const store = getFunnelStore();
  const date = funnelDateKey();
  const ip = clientIp(req);

  const hits = await store.bump(`subscribe:${ip}`, RATE_WINDOW_S);
  if (hits > RATE_LIMIT) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const source = resolveSource({
    utmSource: input.utmSource,
    referrer: input.referrer,
    ownHost: req.nextUrl.hostname,
  });

  await store.recordEvent({ event: "optin_submit", date, source });

  const existing = await store.getSubscriber(input.email);
  const isRepeat = Boolean(existing);

  let sequence = {
    sent: 0,
    scheduledIds: [] as string[],
    steps: [] as Awaited<ReturnType<typeof sendFunnelSequence>>["steps"],
    errors: [] as string[],
  };
  if (isResendConfigured()) {
    // Une personne déjà active ne reçoit pas une deuxième séquence complète ;
    // une personne désinscrite qui revient la reçoit à nouveau.
    if (!existing || existing.status === "unsubscribed") {
      sequence = await sendFunnelSequence(input.email, input.firstName);
    }
  } else {
    sequence.errors.push("resend_not_configured");
  }

  const subscriber: Subscriber = {
    email: input.email,
    firstName: input.firstName,
    createdAt: existing?.createdAt ?? new Date().toISOString(),
    status: "active",
    source: existing?.source ?? source,
    referrer: cleanShort(input.referrer, 200) ?? existing?.referrer,
    utmSource: cleanShort(input.utmSource) ?? existing?.utmSource,
    utmMedium: cleanShort(input.utmMedium) ?? existing?.utmMedium,
    utmCampaign: cleanShort(input.utmCampaign) ?? existing?.utmCampaign,
    scheduledEmailIds: sequence.scheduledIds.length
      ? sequence.scheduledIds
      : (existing?.scheduledEmailIds ?? []),
    emails: sequence.steps.length
      ? Object.fromEntries(
          sequence.steps.map((st): [string, SequenceEmailState] => [
            st.key,
            {
              id: st.id ?? undefined,
              subject: st.subject,
              scheduledAt: st.scheduledAt ?? undefined,
              status: st.error ? "erreur" : st.scheduledAt ? "programme" : "envoye",
              updatedAt: new Date().toISOString(),
            },
          ]),
        )
      : existing?.emails,
  };
  await store.saveSubscriber(subscriber);
  await store.appendSubscriberLog(
    input.email,
    isRepeat
      ? `Réinscription (source : ${source})`
      : `Inscription (source : ${source})`,
  );
  for (const st of sequence.steps) {
    await store.appendSubscriberLog(
      input.email,
      st.error
        ? `Email « ${st.subject} » : erreur d'envoi (${st.error})`
        : st.scheduledAt
          ? `Email « ${st.subject} » programmé`
          : `Email « ${st.subject} » envoyé`,
    );
  }
  await store.recordEvent({
    event: isRepeat ? "subscribe_repeat" : "subscribe",
    date,
    source,
    detail: input.email,
  });
  for (const st of sequence.steps) {
    if (!st.error) {
      await store.recordEvent({
        event: "email_sent",
        date,
        source: st.key,
        detail: input.email,
      });
    }
  }

  try {
    await syncResendContact(input.email, input.firstName, false);
  } catch (err) {
    console.error("[funnel] audience Resend", err);
  }

  if (sequence.errors.length) {
    console.error("[funnel] envoi email", input.email, sequence.errors);
  }

  const res = NextResponse.json({
    ok: true,
    redirect: `${FUNNEL_PATHS.course}?bienvenue=${isRepeat && existing?.status === "active" ? "retour" : "1"}`,
    emailSent: sequence.sent > 0,
  });
  res.cookies.set(SUBSCRIBED_COOKIE, "1", {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
  return res;
}
