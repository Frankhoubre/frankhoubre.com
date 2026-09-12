import { Redis } from "@upstash/redis";
import { BUZZ_EVENTS, BUZZ_UNIQUE_EVENTS, type BuzzEvent } from "@/lib/buzz/config";

/**
 * Persistance du tunnel payant : achats et compteurs. Même base Upstash que
 * le tunnel gratuit (variables KV_REST_API_* ou UPSTASH_REDIS_REST_*),
 * clés préfixées `buzz:`. Sans base, stockage mémoire (dev uniquement).
 */

export type Purchase = {
  /** Identifiant de la session Stripe Checkout (clé d'idempotence). */
  sessionId: string;
  email: string;
  firstName: string;
  /** Montant payé, en cents, et devise Stripe. */
  amount: number;
  currency: string;
  createdAt: string;
  source: string;
  paymentIntentId?: string;
  emailSentAt?: string;
  emailError?: string;
};

export type BuzzDayStats = {
  date: string;
  counts: Partial<Record<BuzzEvent, number>>;
  uniques: Partial<Record<BuzzEvent, number>>;
};

export type BuzzRecentEvent = {
  at: string;
  event: BuzzEvent;
  source?: string;
  detail?: string;
};

export type BuzzStore = {
  recordEvent(input: {
    event: BuzzEvent;
    date: string;
    visitorHash?: string;
    source?: string;
    detail?: string;
  }): Promise<void>;
  getPurchase(sessionId: string): Promise<Purchase | null>;
  savePurchase(p: Purchase): Promise<void>;
  /** Dernier achat d'une adresse (pour renvoyer le lien d'accès). */
  getPurchaseByEmail(email: string): Promise<Purchase | null>;
  listPurchases(limit: number): Promise<Purchase[]>;
  countPurchases(): Promise<number>;
  getTotals(): Promise<Partial<Record<BuzzEvent, number>>>;
  getDays(dates: string[]): Promise<BuzzDayStats[]>;
  getSources(event: BuzzEvent): Promise<Record<string, number>>;
  getRecent(limit: number): Promise<BuzzRecentEvent[]>;
};

const KEY = {
  day: (d: string) => `buzz:d:${d}`,
  uniq: (d: string, e: string) => `buzz:u:${d}:${e}`,
  totals: "buzz:t",
  src: (e: string) => `buzz:src:${e}`,
  purchase: (id: string) => `buzz:p:${id}`,
  byEmail: (email: string) => `buzz:e:${email}`,
  purchases: "buzz:purchases",
  recent: "buzz:recent",
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

function pickEventCounts(map: Record<string, number>) {
  const out: Partial<Record<BuzzEvent, number>> = {};
  for (const e of BUZZ_EVENTS) {
    if (map[e]) out[e] = map[e];
  }
  return out;
}

function redisFromEnv(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

function createRedisStore(redis: Redis): BuzzStore {
  return {
    async recordEvent({ event, date, visitorHash, source, detail }) {
      const p = redis.pipeline();
      p.hincrby(KEY.day(date), event, 1);
      p.hincrby(KEY.totals, event, 1);
      if (visitorHash && BUZZ_UNIQUE_EVENTS.includes(event)) {
        p.pfadd(KEY.uniq(date, event), visitorHash);
        p.expire(KEY.uniq(date, event), 60 * 60 * 24 * 400);
      }
      if (source) p.hincrby(KEY.src(event), source, 1);
      const entry: BuzzRecentEvent = {
        at: new Date().toISOString(),
        event,
        ...(source ? { source } : {}),
        ...(detail ? { detail } : {}),
      };
      p.lpush(KEY.recent, JSON.stringify(entry));
      p.ltrim(KEY.recent, 0, RECENT_MAX - 1);
      await p.exec();
    },
    async getPurchase(sessionId) {
      return (await redis.get<Purchase>(KEY.purchase(sessionId))) ?? null;
    },
    async savePurchase(purchase) {
      const email = normalizeEmail(purchase.email);
      const p = redis.pipeline();
      p.set(KEY.purchase(purchase.sessionId), { ...purchase, email });
      p.set(KEY.byEmail(email), purchase.sessionId);
      p.zadd(KEY.purchases, {
        score: new Date(purchase.createdAt).getTime(),
        member: purchase.sessionId,
      });
      await p.exec();
    },
    async getPurchaseByEmail(email) {
      const id = await redis.get<string>(KEY.byEmail(normalizeEmail(email)));
      if (!id) return null;
      return (await redis.get<Purchase>(KEY.purchase(id))) ?? null;
    },
    async listPurchases(limit) {
      const ids = await redis.zrange<string[]>(KEY.purchases, 0, limit - 1, { rev: true });
      if (!ids.length) return [];
      const rows = await redis.mget<(Purchase | null)[]>(...ids.map((id) => KEY.purchase(id)));
      return rows.filter((r): r is Purchase => Boolean(r));
    },
    async countPurchases() {
      return redis.zcard(KEY.purchases);
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
        for (const e of BUZZ_UNIQUE_EVENTS) p.pfcount(KEY.uniq(d, e));
      }
      const res = await p.exec<unknown[]>();
      const stride = 1 + BUZZ_UNIQUE_EVENTS.length;
      return dates.map((date, i) => {
        const base = i * stride;
        const counts = pickEventCounts(
          toNumberMap(res[base] as Record<string, unknown> | null),
        );
        const uniques: Partial<Record<BuzzEvent, number>> = {};
        BUZZ_UNIQUE_EVENTS.forEach((e, j) => {
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
      const rows = await redis.lrange<BuzzRecentEvent | string>(KEY.recent, 0, limit - 1);
      return rows
        .map((r) => {
          if (typeof r === "string") {
            try {
              return JSON.parse(r) as BuzzRecentEvent;
            } catch {
              return null;
            }
          }
          return r;
        })
        .filter((r): r is BuzzRecentEvent => Boolean(r));
    },
  };
}

type MemoryState = {
  days: Map<string, Record<string, number>>;
  uniques: Map<string, Set<string>>;
  totals: Record<string, number>;
  sources: Map<string, Record<string, number>>;
  purchases: Map<string, Purchase>;
  byEmail: Map<string, string>;
  recent: BuzzRecentEvent[];
};

function createMemoryStore(): BuzzStore {
  const g = globalThis as typeof globalThis & { __buzzMemory?: MemoryState };
  const state: MemoryState = (g.__buzzMemory ??= {
    days: new Map(),
    uniques: new Map(),
    totals: {},
    sources: new Map(),
    purchases: new Map(),
    byEmail: new Map(),
    recent: [],
  });
  return {
    async recordEvent({ event, date, visitorHash, source, detail }) {
      const day = state.days.get(date) ?? {};
      day[event] = (day[event] ?? 0) + 1;
      state.days.set(date, day);
      state.totals[event] = (state.totals[event] ?? 0) + 1;
      if (visitorHash && BUZZ_UNIQUE_EVENTS.includes(event)) {
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
    async getPurchase(sessionId) {
      return state.purchases.get(sessionId) ?? null;
    },
    async savePurchase(purchase) {
      const email = normalizeEmail(purchase.email);
      state.purchases.set(purchase.sessionId, { ...purchase, email });
      state.byEmail.set(email, purchase.sessionId);
    },
    async getPurchaseByEmail(email) {
      const id = state.byEmail.get(normalizeEmail(email));
      return id ? (state.purchases.get(id) ?? null) : null;
    },
    async listPurchases(limit) {
      return [...state.purchases.values()]
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        .slice(0, limit);
    },
    async countPurchases() {
      return state.purchases.size;
    },
    async getTotals() {
      return pickEventCounts(state.totals);
    },
    async getDays(dates) {
      return dates.map((date) => {
        const uniques: Partial<Record<BuzzEvent, number>> = {};
        for (const e of BUZZ_UNIQUE_EVENTS) {
          const n = state.uniques.get(KEY.uniq(date, e))?.size ?? 0;
          if (n) uniques[e] = n;
        }
        return { date, counts: pickEventCounts(state.days.get(date) ?? {}), uniques };
      });
    },
    async getSources(event) {
      return { ...(state.sources.get(event) ?? {}) };
    },
    async getRecent(limit) {
      return state.recent.slice(0, limit);
    },
  };
}

let cached: BuzzStore | null = null;

export function getBuzzStore(): BuzzStore {
  if (cached) return cached;
  const redis = redisFromEnv();
  cached = redis ? createRedisStore(redis) : createMemoryStore();
  return cached;
}
