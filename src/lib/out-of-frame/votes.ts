import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { Redis } from "@upstash/redis";

/**
 * Vote de la page /out-of-frame-ai-movie (« Will you turn off the console? »).
 *
 * Stockage : Upstash Redis (mêmes variables que le funnel), sinon mémoire en
 * local. Garde-fous contre les doublons et les robots :
 * - un cookie httpOnly de 30 jours par navigateur ;
 * - au plus MAX_VOTES_PER_IP votes par adresse IP (hachée) sur 30 jours ;
 * - un jeton signé délivré par le GET, valable entre MIN_DELAY_MS et 1 h
 *   (un robot qui poste directement, ou trop vite, est refusé) ;
 * - un champ piège invisible et un filtre sur les user-agents de robots.
 */

export type VoteChoice = "yes" | "no";
export type VoteStats = { yes: number; no: number; total: number };

export const VOTE_COOKIE = "oof_vote";
export const VOTE_TTL_S = 60 * 60 * 24 * 30;
export const MIN_DELAY_MS = 2500;
const TOKEN_MAX_AGE_MS = 60 * 60 * 1000;
const MAX_VOTES_PER_IP = 3;

const KEY = {
  totals: "oof:votes",
  ip: (hash: string) => `oof:ip:${hash}`,
};

function redisFromEnv(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

const memory = { yes: 0, no: 0, ips: new Map<string, number>() };

export async function getStats(): Promise<VoteStats> {
  const redis = redisFromEnv();
  let yes = memory.yes;
  let no = memory.no;
  if (redis) {
    const map = (await redis.hgetall<Record<string, number | string>>(KEY.totals)) ?? {};
    yes = Number(map.yes ?? 0);
    no = Number(map.no ?? 0);
  }
  return { yes, no, total: yes + no };
}

/** Enregistre le vote ; renvoie false si l'IP a déjà atteint sa limite. */
export async function recordVote(choice: VoteChoice, ipHash: string): Promise<boolean> {
  const redis = redisFromEnv();
  if (!redis) {
    const n = memory.ips.get(ipHash) ?? 0;
    if (n >= MAX_VOTES_PER_IP) return false;
    memory.ips.set(ipHash, n + 1);
    memory[choice] += 1;
    return true;
  }
  const key = KEY.ip(ipHash);
  const n = await redis.incr(key);
  if (n === 1) await redis.expire(key, VOTE_TTL_S);
  if (n > MAX_VOTES_PER_IP) return false;
  await redis.hincrby(KEY.totals, choice, 1);
  return true;
}

function secret(): string {
  return (
    process.env.OOF_VOTE_SECRET ??
    process.env.KV_REST_API_TOKEN ??
    process.env.UPSTASH_REDIS_REST_TOKEN ??
    "out-of-frame-local-secret"
  );
}

export function hashIp(ip: string): string {
  return createHash("sha256").update(`${secret()}:${ip}`).digest("hex").slice(0, 32);
}

export function makeToken(now = Date.now()): string {
  const ts = String(now);
  const sig = createHmac("sha256", secret()).update(ts).digest("hex").slice(0, 32);
  return `${ts}.${sig}`;
}

export function checkToken(token: string | null, now = Date.now()): boolean {
  if (!token) return false;
  const [ts, sig] = token.split(".");
  if (!ts || !sig) return false;
  const expected = createHmac("sha256", secret()).update(ts).digest("hex").slice(0, 32);
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return false;
  const age = now - Number(ts);
  return age >= MIN_DELAY_MS && age <= TOKEN_MAX_AGE_MS;
}

const BOT_UA =
  /bot|crawl|spider|slurp|curl|wget|python|httpclient|axios|node-fetch|go-http|java\/|headless|phantom|puppeteer|playwright|scrapy|facebookexternalhit|preview/i;

export function looksLikeBot(userAgent: string | null): boolean {
  if (!userAgent || userAgent.length < 20) return true;
  return BOT_UA.test(userAgent);
}
