/**
 * Registre des liens d'affiliation autorisés (source : seo-multisites/affiliation.md,
 * liste fournie par Frank le 16/10/2026). Un outil absent d'ici n'a pas de
 * programme pour nous : lien officiel simple, jamais d'identifiant inventé.
 *
 * Tout lien affilié sort en rel="sponsored nofollow noopener". Les liens
 * éditoriaux vers des sources officielles restent suivis (rel="noopener").
 */

export type AffiliateTool = {
  id: string;
  name: string;
  /** Lien à utiliser dans les nouveaux contenus. */
  url: string;
  /** Autres liens affiliés déjà publiés pour le même programme. */
  legacyUrls?: string[];
};

export const AFFILIATE_TOOLS: readonly AffiliateTool[] = [
  {
    id: "higgsfield",
    name: "Higgsfield",
    url: "https://goto.higgsfield.ai/YRxK5O",
    legacyUrls: ["https://higgsfield.ai/?fpr=frank70"],
  },
  { id: "flora", name: "Flora", url: "https://dub.florafauna.ai/frank-houbre" },
  { id: "heygen", name: "HeyGen", url: "https://www.heygen.com/?sid=rewardful&via=frank-houbre" },
  { id: "elevenlabs", name: "ElevenLabs", url: "https://try.elevenlabs.io/4zj8lv8ns556" },
  { id: "dzine", name: "Dzine", url: "https://www.dzine.ai/?via=frank-houbre" },
  { id: "opusclip", name: "OpusClip", url: "https://www.opus.pro/?via=fdbcab" },
  { id: "krotos", name: "Krotos", url: "https://krotos.studio/?rfsn=8772126.2bc91b" },
  { id: "wisprflow", name: "Wispr Flow", url: "https://wisprflow.ai/r?BUSINESSDY1" },
  { id: "metricool", name: "Metricool", url: "https://f.mtr.cool/JKAANJ" },
  { id: "proton", name: "Proton", url: "https://go.getproton.me/aff_c?offer_id=26&aff_id=11173" },
];

export const SPONSORED_REL = "sponsored nofollow noopener";
export const EDITORIAL_REL = "noopener noreferrer";

/** Préfixe à écrire dans un article : `[Higgsfield](aff:higgsfield)`. */
export const AFFILIATE_HREF_PREFIX = "aff:";

const byId = new Map(AFFILIATE_TOOLS.map((t) => [t.id, t]));

function canonical(url: string): string {
  try {
    const u = new URL(url);
    u.hash = "";
    return `${u.host.replace(/^www\./, "")}${u.pathname.replace(/\/+$/, "")}${u.search}`.toLowerCase();
  } catch {
    return url.trim().toLowerCase();
  }
}

const knownUrls = new Map<string, AffiliateTool>();
for (const tool of AFFILIATE_TOOLS) {
  for (const u of [tool.url, ...(tool.legacyUrls ?? [])]) knownUrls.set(canonical(u), tool);
}

export function getAffiliateTool(id: string): AffiliateTool | null {
  return byId.get(id.trim().toLowerCase()) ?? null;
}

/** Retrouve l'outil quand un lien affilié du registre est collé tel quel. */
export function findAffiliateByUrl(href: string): AffiliateTool | null {
  if (!/^https?:\/\//i.test(href)) return null;
  return knownUrls.get(canonical(href)) ?? null;
}

export type ResolvedLink = {
  href: string;
  external: boolean;
  sponsored: boolean;
  /** Identifiant `aff:` inconnu : on n'invente pas de lien. */
  unknownAffiliate?: string;
};

/**
 * Résout un href d'article : `aff:<id>` donne le lien du registre, une URL du
 * registre est reconnue et marquée sponsorisée, `forceSponsored` couvre les
 * liens payants hors registre.
 */
export function resolveArticleLink(rawHref: string, forceSponsored = false): ResolvedLink {
  const href = rawHref.trim();
  if (href.toLowerCase().startsWith(AFFILIATE_HREF_PREFIX)) {
    const id = href.slice(AFFILIATE_HREF_PREFIX.length);
    const tool = getAffiliateTool(id);
    if (!tool) return { href: "#", external: false, sponsored: false, unknownAffiliate: id };
    return { href: tool.url, external: true, sponsored: true };
  }
  const external = /^https?:\/\//i.test(href);
  return {
    href,
    external,
    sponsored: external && (forceSponsored || findAffiliateByUrl(href) !== null),
  };
}

/** Pour les pages hors blog (ex. /liens) : rel adapté à un lien sortant. */
export function relForExternal(href: string): string {
  return findAffiliateByUrl(href) ? SPONSORED_REL : EDITORIAL_REL;
}
