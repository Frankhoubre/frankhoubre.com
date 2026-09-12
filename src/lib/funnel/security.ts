import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Secret unique du funnel : signe les liens de désinscription, le cookie
 * admin et le hachage quotidien des visiteurs. FUNNEL_SECRET en priorité,
 * sinon le jeton admin (pour ne pas casser un déploiement minimal).
 */
function secret(): string {
  const s = process.env.FUNNEL_SECRET ?? process.env.FUNNEL_ADMIN_TOKEN;
  if (!s) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("FUNNEL_SECRET (ou FUNNEL_ADMIN_TOKEN) manquant");
    }
    return "dev-only-funnel-secret";
  }
  return s;
}

function hmac(value: string): string {
  return createHmac("sha256", secret()).update(value).digest("base64url");
}

function safeEqual(a: string, b: string): boolean {
  const ba = Buffer.from(a);
  const bb = Buffer.from(b);
  return ba.length === bb.length && timingSafeEqual(ba, bb);
}

/** Jeton signé générique : valeur encodée + HMAC lié à un usage (scope). */
export function makeSignedToken(scope: string, value: string): string {
  const e = Buffer.from(value).toString("base64url");
  return `${e}.${hmac(`${scope}:${e}`)}`;
}

export function readSignedToken(scope: string, token: string): string | null {
  const [e, sig] = token.split(".");
  if (!e || !sig) return null;
  if (!safeEqual(sig, hmac(`${scope}:${e}`))) return null;
  try {
    return Buffer.from(e, "base64url").toString("utf8");
  } catch {
    return null;
  }
}

/** Jeton de désinscription : email encodé + signature. Sans expiration. */
export function makeUnsubscribeToken(email: string): string {
  return makeSignedToken("unsub", email.trim().toLowerCase());
}

export function readUnsubscribeToken(token: string): string | null {
  return readSignedToken("unsub", token);
}

/**
 * Jeton d'accès au tunnel payant : délivré uniquement après un paiement
 * vérifié chez Stripe. Lien personnel permanent (email) et cookie.
 */
export function makeBuzzAccessToken(email: string): string {
  return makeSignedToken("buzz", email.trim().toLowerCase());
}

export function readBuzzAccessToken(token: string): string | null {
  return readSignedToken("buzz", token);
}

/** Valeur du cookie admin : HMAC du jeton, jamais le jeton lui-même. */
export function adminCookieValue(): string | null {
  const token = process.env.FUNNEL_ADMIN_TOKEN;
  if (!token) return null;
  return hmac(`admin:${token}`);
}

export function isAdminTokenValid(candidate: string): boolean {
  const token = process.env.FUNNEL_ADMIN_TOKEN;
  if (!token || !candidate) return false;
  return safeEqual(candidate, token);
}

export function isAdminCookieValid(cookie: string | undefined): boolean {
  const expected = adminCookieValue();
  if (!expected || !cookie) return false;
  return safeEqual(cookie, expected);
}

/**
 * Identifiant de visiteur sans cookie ni stockage : hachage (IP + user agent
 * + sel du jour). Il change chaque jour et ne permet pas de retrouver la
 * personne, ce qui suffit pour compter des visiteurs uniques.
 */
export function dailyVisitorHash(ip: string, ua: string, date: string): string {
  return hmac(`visitor:${date}:${ip}:${ua}`).slice(0, 24);
}
