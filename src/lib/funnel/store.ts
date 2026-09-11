import { Redis } from "@upstash/redis";
import {
  FUNNEL_EVENTS,
  UNIQUE_EVENTS,
  type FunnelEvent,
} from "@/lib/funnel/config";

/**
 * Persistance du funnel. En production : Upstash Redis (variables
 * UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN, ou KV_REST_API_URL /
 * KV_REST_API_TOKEN si la base vient de la marketplace Vercel). Sans ces
 * variables, un stockage mémoire prend le relais : pratique en local, mais
 * tout disparaît au redémarrage.
 */

export type SubscriberStatus = "active" | "unsubscribed";

export type Subscriber = {
  email: string;
  firstName: string;
  createdAt: string;
  status: SubscriberStatus;
  unsubscribedAt?: string;
  source: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  /** Emails programmés chez Resend (annulés en cas de désinscription). */
  scheduledEmailIds: string[];
  /** Suivi de chaque email de la séquence, par étape (acces, jour-2, …). */
  emails?: Record<string, SequenceEmailState>;
  lastEmailEvent?: string;
  lastEmailEventAt?: string;
};

export type SequenceEmailStatus =
  | "programme"
  | "envoye"
  | "delivre"
  | "ouvert"
  | "clique"
  | "bounce"
  | "spam"
  | "annule"
  | "erreur";

export type SequenceEmailState = {
  /** Identifiant Resend de l'email (sert au webhook et aux annulations). */
  id?: string;
  subject: string;
  /** Date d'envoi prévue (ISO) ; absente pour l'email d'accès envoyé tout de suite. */
  scheduledAt?: string;
  status: SequenceEmailStatus;
  updatedAt: string;
};

/** Ligne du journal d'un inscrit (affiché sur sa fiche). */
export type SubscriberLogEntry = {
  at: string;
  label: string;
};

export type DayStats = {
  date: string;
  counts: Partial<Record<FunnelEvent, number>>;
  uniques: Partial<Record<FunnelEvent, number>>;
};

export type RecentEvent = {
  at: string;
  event: FunnelEvent;
  source?: string;
  detail?: string;
};

export type FunnelStore = {
  recordEvent(input: {
    event: FunnelEvent;
    date: string;
    visitorHash?: string;
    source?: string;
    detail?: string;
  }): Promise<void>;
  getSubscriber(email: string): Promise<Subscriber | null>;
  saveSubscriber(sub: Subscriber): Promise<void>;
  /** Inscrits du plus récent au plus ancien, avec décalage pour la pagination. */
  listSubscribers(limit: number, offset?: number): Promise<Subscriber[]>;
  countSubscribers(): Promise<number>;
  deleteSubscriber(email: string): Promise<void>;
  appendSubscriberLog(email: string, label: string): Promise<void>;
  getSubscriberLog(email: string): Promise<SubscriberLogEntry[]>;
  getTotals(): Promise<Partial<Record<FunnelEvent, number>>>;
  getDays(dates: string[]): Promise<DayStats[]>;
  getSources(event: FunnelEvent): Promise<Record<string, number>>;
  getRecent(limit: number): Promise<RecentEvent[]>;
  /** Compteur avec expiration (limitation de débit). Retourne la valeur. */
  bump(key: string, ttlSeconds: number): Promise<number>;
  /**
   * Efface tous les compteurs d'événements email (totaux, jours, sources,
   * fil récent) puis les reconstruit à partir de l'état de séquence de chaque
   * inscrit. Sert quand le webhook a compté des emails d'un autre projet.
   */
  rebuildEmailStats(): Promise<{ subscribers: number; events: number }>;
};

const EMAIL_EVENTS: FunnelEvent[] = [
  "email_sent",
  "email_delivered",
  "email_opened",
  "email_clicked",
  "email_bounced",
  "email_complained",
];

/** Événements à recréer pour un email de la séquence, d'après son statut. */
function eventsForStatus(status: SequenceEmailStatus): FunnelEvent[] {
  switch (status) {
    case "programme":
    case "annule":
    case "envoye":
      return ["email_sent"];
    case "delivre":
      return ["email_sent", "email_delivered"];
    case "ouvert":
      return ["email_sent", "email_delivered", "email_opened"];
    case "clique":
      return ["email_sent", "email_delivered", "email_opened", "email_clicked"];
    case "bounce":
      return ["email_sent", "email_bounced"];
    case "spam":
      return ["email_sent", "email_delivered", "email_complained"];
    default:
      return [];
  }
}

type RebuiltEvent = { event: FunnelEvent; date: string; source: string };

/** Liste des événements email à recréer pour un inscrit. */
function rebuildFromSubscriber(sub: Subscriber): RebuiltEvent[] {
  const out: RebuiltEvent[] = [];
  const sentDate = funnelDateKey(new Date(sub.createdAt));
  for (const [step, state] of Object.entries(sub.emails ?? {})) {
    const when = state.updatedAt ? funnelDateKey(new Date(state.updatedAt)) : sentDate;
    for (const event of eventsForStatus(state.status)) {
      out.push({ event, date: event === "email_sent" ? sentDate : when, source: step });
    }
  }
  return out;
}

const KEY = {
  day: (d: string) => `funnel:d:${d}`,
  uniq: (d: string, e: string) => `funnel:u:${d}:${e}`,
  totals: "funnel:t",
  src: (e: string) => `funnel:src:${e}`,
  sub: (email: string) => `funnel:sub:${email}`,
  sublog: (email: string) => `funnel:sublog:${email}`,
  subs: "funnel:subs",
  recent: "funnel:recent",
  rate: (k: string) => `funnel:rate:${k}`,
};

const RECENT_MAX = 200;

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

function toNumberMap(raw: Record<string, unknown> | null) {
  const out: Record<string, number> = {};
  if (!raw) return out;
  for (const [k, v] of Object.entries(raw)) {
    const n = Number(v);
    if (!Number.isNaN(n)) out[k] = n;
  }
  return out;
}

function pickEventCounts(
  map: Record<string, number>,
): Partial<Record<FunnelEvent, number>> {
  const out: Partial<Record<FunnelEvent, number>> = {};
  for (const e of FUNNEL_EVENTS) {
    if (map[e]) out[e] = map[e];
  }
  return out;
}

/* ----------------------------- Upstash Redis ----------------------------- */

function redisFromEnv(): Redis | null {
  const url =
    process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

function createRedisStore(redis: Redis): FunnelStore {
  return {
    async recordEvent({ event, date, visitorHash, source, detail }) {
      const p = redis.pipeline();
      p.hincrby(KEY.day(date), event, 1);
      p.hincrby(KEY.totals, event, 1);
      if (visitorHash && UNIQUE_EVENTS.includes(event)) {
        p.pfadd(KEY.uniq(date, event), visitorHash);
        p.expire(KEY.uniq(date, event), 60 * 60 * 24 * 400);
      }
      if (source) p.hincrby(KEY.src(event), source, 1);
      const entry: RecentEvent = {
        at: new Date().toISOString(),
        event,
        ...(source ? { source } : {}),
        ...(detail ? { detail } : {}),
      };
      p.lpush(KEY.recent, JSON.stringify(entry));
      p.ltrim(KEY.recent, 0, RECENT_MAX - 1);
      await p.exec();
    },

    async getSubscriber(email) {
      const raw = await redis.get<Subscriber>(KEY.sub(normalizeEmail(email)));
      return raw ?? null;
    },

    async saveSubscriber(sub) {
      const email = normalizeEmail(sub.email);
      const p = redis.pipeline();
      p.set(KEY.sub(email), { ...sub, email });
      p.zadd(KEY.subs, {
        score: new Date(sub.createdAt).getTime(),
        member: email,
      });
      await p.exec();
    },

    async listSubscribers(limit, offset = 0) {
      const emails = await redis.zrange<string[]>(
        KEY.subs,
        offset,
        offset + limit - 1,
        { rev: true },
      );
      if (!emails.length) return [];
      const rows = await redis.mget<(Subscriber | null)[]>(
        ...emails.map((e) => KEY.sub(e)),
      );
      return rows.filter((r): r is Subscriber => Boolean(r));
    },

    async countSubscribers() {
      return redis.zcard(KEY.subs);
    },

    async deleteSubscriber(email) {
      const e = normalizeEmail(email);
      const p = redis.pipeline();
      p.del(KEY.sub(e));
      p.del(KEY.sublog(e));
      p.zrem(KEY.subs, e);
      await p.exec();
    },

    async appendSubscriberLog(email, label) {
      const e = normalizeEmail(email);
      const entry: SubscriberLogEntry = { at: new Date().toISOString(), label };
      const p = redis.pipeline();
      p.lpush(KEY.sublog(e), JSON.stringify(entry));
      p.ltrim(KEY.sublog(e), 0, 99);
      await p.exec();
    },

    async getSubscriberLog(email) {
      const rows = await redis.lrange<SubscriberLogEntry | string>(
        KEY.sublog(normalizeEmail(email)),
        0,
        99,
      );
      return rows
        .map((r) => {
          if (typeof r === "string") {
            try {
              return JSON.parse(r) as SubscriberLogEntry;
            } catch {
              return null;
            }
          }
          return r;
        })
        .filter((r): r is SubscriberLogEntry => Boolean(r));
    },

    async getTotals() {
      const raw = await redis.hgetall<Record<string, string>>(KEY.totals);
      return pickEventCounts(toNumberMap(raw));
    },

    async getDays(dates) {
      if (!dates.length) return [];
      const p = redis.pipeline();
      for (const d of dates) {
        p.hgetall(KEY.day(d));
        for (const e of UNIQUE_EVENTS) p.pfcount(KEY.uniq(d, e));
      }
      const res = await p.exec<unknown[]>();
      const stride = 1 + UNIQUE_EVENTS.length;
      return dates.map((date, i) => {
        const base = i * stride;
        const counts = pickEventCounts(
          toNumberMap(res[base] as Record<string, unknown> | null),
        );
        const uniques: Partial<Record<FunnelEvent, number>> = {};
        UNIQUE_EVENTS.forEach((e, j) => {
          const n = Number(res[base + 1 + j] ?? 0);
          if (n) uniques[e] = n;
        });
        return { date, counts, uniques };
      });
    },

    async getSources(event) {
      const raw = await redis.hgetall<Record<string, string>>(KEY.src(event));
      return toNumberMap(raw);
    },

    async getRecent(limit) {
      const rows = await redis.lrange<RecentEvent | string>(
        KEY.recent,
        0,
        limit - 1,
      );
      return rows
        .map((r) => {
          if (typeof r === "string") {
            try {
              return JSON.parse(r) as RecentEvent;
            } catch {
              return null;
            }
          }
          return r;
        })
        .filter((r): r is RecentEvent => Boolean(r));
    },

    async bump(key, ttlSeconds) {
      const p = redis.pipeline();
      p.incr(KEY.rate(key));
      p.expire(KEY.rate(key), ttlSeconds, "NX");
      const [n] = await p.exec<[number, unknown]>();
      return Number(n);
    },

    async rebuildEmailStats() {
      // 1. Purge : champs email des totaux et de chaque jour, sources, fil récent.
      const dayKeys = await redis.keys("funnel:d:*");
      const purge = redis.pipeline();
      purge.hdel(KEY.totals, ...EMAIL_EVENTS);
      for (const k of dayKeys) purge.hdel(k, ...EMAIL_EVENTS);
      for (const e of EMAIL_EVENTS) purge.del(KEY.src(e));
      await purge.exec();
      const recent = await this.getRecent(RECENT_MAX);
      const kept = recent.filter((r) => !EMAIL_EVENTS.includes(r.event));
      const rp = redis.pipeline();
      rp.del(KEY.recent);
      if (kept.length) rp.rpush(KEY.recent, ...kept.map((r) => JSON.stringify(r)));
      await rp.exec();

      // 2. Reconstruction depuis l'état de séquence de chaque inscrit.
      let subscribers = 0;
      let events = 0;
      const page = 200;
      for (let offset = 0; ; offset += page) {
        const batch = await this.listSubscribers(page, offset);
        if (!batch.length) break;
        const p = redis.pipeline();
        let n = 0;
        for (const sub of batch) {
          subscribers += 1;
          for (const ev of rebuildFromSubscriber(sub)) {
            n += 1;
            p.hincrby(KEY.day(ev.date), ev.event, 1);
            p.hincrby(KEY.totals, ev.event, 1);
            p.hincrby(KEY.src(ev.event), ev.source, 1);
          }
        }
        if (n) await p.exec();
        events += n;
        if (batch.length < page) break;
      }
      return { subscribers, events };
    },
  };
}

/* ------------------------------ Mémoire (dev) ----------------------------- */

type MemoryState = {
  days: Map<string, Record<string, number>>;
  uniques: Map<string, Set<string>>;
  totals: Record<string, number>;
  sources: Map<string, Record<string, number>>;
  subs: Map<string, Subscriber>;
  sublogs: Map<string, SubscriberLogEntry[]>;
  recent: RecentEvent[];
  rate: Map<string, { n: number; exp: number }>;
};

function createMemoryStore(): FunnelStore {
  const g = globalThis as typeof globalThis & { __funnelMemory?: MemoryState };
  const state: MemoryState = (g.__funnelMemory ??= {
    days: new Map(),
    uniques: new Map(),
    totals: {},
    sources: new Map(),
    subs: new Map(),
    sublogs: new Map(),
    recent: [],
    rate: new Map(),
  });

  return {
    async recordEvent({ event, date, visitorHash, source, detail }) {
      const day = state.days.get(date) ?? {};
      day[event] = (day[event] ?? 0) + 1;
      state.days.set(date, day);
      state.totals[event] = (state.totals[event] ?? 0) + 1;
      if (visitorHash && UNIQUE_EVENTS.includes(event)) {
        const k = KEY.uniq(date, event);
        const set = state.uniques.get(k) ?? new Set<string>();
        set.add(visitorHash);
        state.uniques.set(k, set);
      }
      if (source) {
        const s = state.sources.get(event) ?? {};
        s[source] = (s[source] ?? 0) + 1;
        state.sources.set(event, s);
      }
      state.recent.unshift({
        at: new Date().toISOString(),
        event,
        ...(source ? { source } : {}),
        ...(detail ? { detail } : {}),
      });
      state.recent.length = Math.min(state.recent.length, RECENT_MAX);
    },
    async getSubscriber(email) {
      return state.subs.get(normalizeEmail(email)) ?? null;
    },
    async saveSubscriber(sub) {
      const email = normalizeEmail(sub.email);
      state.subs.set(email, { ...sub, email });
    },
    async listSubscribers(limit, offset = 0) {
      return [...state.subs.values()]
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        .slice(offset, offset + limit);
    },
    async countSubscribers() {
      return state.subs.size;
    },
    async deleteSubscriber(email) {
      state.subs.delete(normalizeEmail(email));
      state.sublogs.delete(normalizeEmail(email));
    },
    async appendSubscriberLog(email, label) {
      const e = normalizeEmail(email);
      const list = state.sublogs.get(e) ?? [];
      list.unshift({ at: new Date().toISOString(), label });
      state.sublogs.set(e, list.slice(0, 100));
    },
    async getSubscriberLog(email) {
      return state.sublogs.get(normalizeEmail(email)) ?? [];
    },
    async getTotals() {
      return pickEventCounts(state.totals);
    },
    async getDays(dates) {
      return dates.map((date) => {
        const uniques: Partial<Record<FunnelEvent, number>> = {};
        for (const e of UNIQUE_EVENTS) {
          const n = state.uniques.get(KEY.uniq(date, e))?.size ?? 0;
          if (n) uniques[e] = n;
        }
        return {
          date,
          counts: pickEventCounts(state.days.get(date) ?? {}),
          uniques,
        };
      });
    },
    async getSources(event) {
      return { ...(state.sources.get(event) ?? {}) };
    },
    async getRecent(limit) {
      return state.recent.slice(0, limit);
    },
    async bump(key, ttlSeconds) {
      const now = Date.now();
      const cur = state.rate.get(key);
      if (!cur || cur.exp < now) {
        state.rate.set(key, { n: 1, exp: now + ttlSeconds * 1000 });
        return 1;
      }
      cur.n += 1;
      return cur.n;
    },
    async rebuildEmailStats() {
      for (const e of EMAIL_EVENTS) {
        delete state.totals[e];
        for (const day of state.days.values()) delete day[e];
        state.sources.delete(e);
      }
      state.recent = state.recent.filter((r) => !EMAIL_EVENTS.includes(r.event));
      let events = 0;
      for (const sub of state.subs.values()) {
        for (const ev of rebuildFromSubscriber(sub)) {
          events += 1;
          const day = state.days.get(ev.date) ?? {};
          day[ev.event] = (day[ev.event] ?? 0) + 1;
          state.days.set(ev.date, day);
          state.totals[ev.event] = (state.totals[ev.event] ?? 0) + 1;
          const src = state.sources.get(ev.event) ?? {};
          src[ev.source] = (src[ev.source] ?? 0) + 1;
          state.sources.set(ev.event, src);
        }
      }
      return { subscribers: state.subs.size, events };
    },
  };
}

/* --------------------------------- Accès --------------------------------- */

let cached: FunnelStore | null = null;

export function getFunnelStore(): FunnelStore {
  if (cached) return cached;
  const redis = redisFromEnv();
  cached = redis ? createRedisStore(redis) : createMemoryStore();
  return cached;
}

export function isPersistentStoreConfigured(): boolean {
  return redisFromEnv() !== null;
}

/** Date locale Europe/Paris au format YYYY-MM-DD (jour de reporting). */
export function funnelDateKey(d: Date = new Date()): string {
  const parts = new Intl.DateTimeFormat("fr-CA", {
    timeZone: "Europe/Paris",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(d);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  return `${get("year")}-${get("month")}-${get("day")}`;
}

/** Les N derniers jours (du plus ancien au plus récent), clés YYYY-MM-DD. */
export function lastDays(n: number): string[] {
  const out: string[] = [];
  const now = Date.now();
  for (let i = n - 1; i >= 0; i--) {
    out.push(funnelDateKey(new Date(now - i * 86_400_000)));
  }
  return out;
}
