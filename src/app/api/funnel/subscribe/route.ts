import { NextResponse, after, type NextRequest } from "next/server";
import { z } from "zod";
import { FUNNEL_PATHS, SUBSCRIBED_COOKIE } from "@/lib/funnel/config";
import {
  isResendConfigured,
  plannedSteps,
  sendFunnelSequence,
  syncResendContact,
  type SequenceStepResult,
} from "@/lib/funnel/emails";
import { cleanShort, clientIp, resolveSource } from "@/lib/funnel/request";
import {
  funnelDateKey,
  getFunnelStore,
  type SequenceEmailState,
  type Subscriber,
} from "@/lib/funnel/store";

export const runtime = "nodejs";
/** La programmation des emails suivants continue après la réponse (after). */
export const maxDuration = 60;

const bodySchema = z.object({
  firstName: z.string().trim().max(60).optional().default(""),
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

function stepState(st: SequenceStepResult, now: string): SequenceEmailState {
  return {
    id: st.id ?? undefined,
    subject: st.subject,
    scheduledAt: st.scheduledAt ?? undefined,
    status: st.error ? "erreur" : st.scheduledAt ? "programme" : "envoye",
    updatedAt: now,
  };
}

function stepLogLabel(st: SequenceStepResult): string {
  if (st.error) return `Email « ${st.subject} » : erreur d'envoi (${st.error})`;
  return st.scheduledAt ? `Email « ${st.subject} » programmé` : `Email « ${st.subject} » envoyé`;
}

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
  const email = input.email;
  const firstName = input.firstName || existing?.firstName || "";
  const now = new Date().toISOString();

  // Une personne déjà active ne reçoit pas une deuxième séquence complète ;
  // une personne désinscrite qui revient la reçoit à nouveau.
  const startSequence = !existing || existing.status === "unsubscribed";

  let immediate: SequenceStepResult[] = [];
  let emails = existing?.emails;
  if (startSequence) {
    if (isResendConfigured()) {
      // L'email d'accès part avant la réponse : la personne l'a dans sa boîte
      // en arrivant sur la formation. Les suivants sont programmés après.
      const first = await sendFunnelSequence(email, firstName, { part: "immediate" });
      immediate = first.steps;
      if (first.errors.length) console.error("[funnel] email d'accès", email, first.errors);
    } else {
      console.error("[funnel] Resend non configuré : aucun email envoyé pour", email);
    }
    const planned = plannedSteps(email, firstName, "scheduled");
    emails = Object.fromEntries(
      [...immediate, ...planned].map((st): [string, SequenceEmailState] => [st.key, stepState(st, now)]),
    );
  }

  const subscriber: Subscriber = {
    email,
    firstName,
    createdAt: existing?.createdAt ?? now,
    status: "active",
    source: existing?.source ?? source,
    referrer: cleanShort(input.referrer, 200) ?? existing?.referrer,
    utmSource: cleanShort(input.utmSource) ?? existing?.utmSource,
    utmMedium: cleanShort(input.utmMedium) ?? existing?.utmMedium,
    utmCampaign: cleanShort(input.utmCampaign) ?? existing?.utmCampaign,
    scheduledEmailIds: startSequence ? [] : (existing?.scheduledEmailIds ?? []),
    emails,
  };
  await store.saveSubscriber(subscriber);
  await store.appendSubscriberLog(
    email,
    isRepeat ? `Réinscription (source : ${source})` : `Inscription (source : ${source})`,
  );
  for (const st of immediate) {
    await store.appendSubscriberLog(email, stepLogLabel(st));
    if (!st.error) {
      await store.recordEvent({ event: "email_sent", date, source: st.key, detail: email });
    }
  }
  await store.recordEvent({
    event: isRepeat ? "subscribe_repeat" : "subscribe",
    date,
    source,
    detail: email,
  });

  if (startSequence && isResendConfigured()) {
    // Programmation des emails suivants une fois la réponse partie : une
    // quinzaine d'appels espacés, que le formulaire n'a pas à attendre.
    after(async () => {
      try {
        const rest = await sendFunnelSequence(email, firstName, { part: "scheduled" });
        const current = (await store.getSubscriber(email)) ?? subscriber;
        if (current.status === "unsubscribed") {
          // Désinscription entre-temps : on annule ce qu'on vient de programmer.
          const { cancelScheduledEmails } = await import("@/lib/funnel/emails");
          await cancelScheduledEmails(rest.scheduledIds);
          return;
        }
        const at = new Date().toISOString();
        const merged = { ...(current.emails ?? {}) };
        for (const st of rest.steps) merged[st.key] = stepState(st, at);
        await store.saveSubscriber({
          ...current,
          emails: merged,
          scheduledEmailIds: rest.scheduledIds,
        });
        const errors = rest.steps.filter((st) => st.error);
        await store.appendSubscriberLog(
          email,
          errors.length
            ? `${rest.sent} emails programmés, ${errors.length} en erreur (${errors.map((e) => e.key).join(", ")})`
            : `${rest.sent} emails programmés (J+1 à J+${rest.steps.length})`,
        );
        for (const st of rest.steps) {
          if (!st.error) {
            await store.recordEvent({ event: "email_sent", date, source: st.key, detail: email });
          }
        }
        if (rest.errors.length) console.error("[funnel] programmation", email, rest.errors);
      } catch (err) {
        console.error("[funnel] programmation de la séquence", email, err);
        await store.appendSubscriberLog(email, "Programmation des emails suivants : erreur, à renvoyer depuis le back-office");
      }
    });
  }

  try {
    await syncResendContact(email, firstName, false);
  } catch (err) {
    console.error("[funnel] audience Resend", err);
  }

  const res = NextResponse.json({
    ok: true,
    redirect: `${FUNNEL_PATHS.course}?bienvenue=${isRepeat && existing?.status === "active" ? "retour" : "1"}`,
    emailSent: immediate.some((st) => !st.error),
  });
  res.cookies.set(SUBSCRIBED_COOKIE, "1", {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
  return res;
}
