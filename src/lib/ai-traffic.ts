/**
 * Trafic venu des IA, deux familles distinctes :
 * - les visiteurs humains envoyes par un assistant (ChatGPT, Perplexity...),
 *   reconnus au referrer ou a l'utm_source que l'assistant ajoute au lien ;
 * - les crawlers des editeurs de modeles, reconnus au user-agent.
 *
 * Angle mort connu : les apps ChatGPT et Gemini, ainsi que les AI Overviews
 * de Google, n'envoient souvent aucun referrer exploitable. Ces visites
 * restent comptees en direct ou en google.
 */

export type AiEngine =
  | "chatgpt"
  | "perplexity"
  | "claude"
  | "gemini"
  | "copilot"
  | "meta-ai"
  | "mistral"
  | "grok"
  | "deepseek"
  | "you"
  | "phind"
  | "kagi"
  | "duckduckgo-ai";

const REFERRER_HOSTS: ReadonlyArray<readonly [AiEngine, RegExp]> = [
  ["chatgpt", /(^|\.)(chatgpt\.com|chat\.openai\.com|openai\.com)$/],
  ["perplexity", /(^|\.)perplexity\.ai$/],
  ["claude", /(^|\.)(claude\.ai|anthropic\.com)$/],
  ["gemini", /(^|\.)(gemini\.google\.com|bard\.google\.com)$/],
  ["copilot", /(^|\.)copilot\.microsoft\.com$/],
  ["meta-ai", /(^|\.)meta\.ai$/],
  ["mistral", /(^|\.)(chat\.mistral\.ai|mistral\.ai)$/],
  ["grok", /(^|\.)(grok\.com|x\.ai)$/],
  ["deepseek", /(^|\.)deepseek\.com$/],
  ["you", /(^|\.)you\.com$/],
  ["phind", /(^|\.)phind\.com$/],
  ["kagi", /(^|\.)kagi\.com$/],
  ["duckduckgo-ai", /(^|\.)duck\.ai$/],
];

/** ChatGPT ajoute utm_source=chatgpt.com aux liens qu'il cite. */
const UTM_SOURCES: ReadonlyArray<readonly [AiEngine, RegExp]> = [
  ["chatgpt", /chatgpt|openai/i],
  ["perplexity", /perplexity/i],
  ["claude", /claude|anthropic/i],
  ["gemini", /gemini/i],
  ["copilot", /copilot/i],
  ["grok", /grok/i],
  ["deepseek", /deepseek/i],
  ["mistral", /mistral/i],
  ["meta-ai", /meta\.ai|metaai/i],
];

export function detectAiEngine(input: {
  referrer?: string | null;
  utmSource?: string | null;
}): AiEngine | null {
  const utm = input.utmSource?.trim();
  if (utm) {
    for (const [engine, re] of UTM_SOURCES) if (re.test(utm)) return engine;
  }
  const ref = input.referrer?.trim();
  if (!ref) return null;
  let host = "";
  try {
    host = new URL(ref).hostname.toLowerCase();
  } catch {
    return null;
  }
  for (const [engine, re] of REFERRER_HOSTS) if (re.test(host)) return engine;
  return null;
}

/** Version navigateur : lit document.referrer et l'URL courante. */
export function detectAiEngineFromWindow(): AiEngine | null {
  if (typeof window === "undefined") return null;
  let utmSource: string | null = null;
  try {
    utmSource = new URLSearchParams(window.location.search).get("utm_source");
  } catch {
    /* URL illisible */
  }
  return detectAiEngine({ referrer: document.referrer, utmSource });
}

/**
 * Crawlers IA identifies par leur user-agent, l'ordre compte (les variantes
 * "-User" et "-SearchBot" passent avant le crawler d'entrainement).
 */
const AI_CRAWLERS: ReadonlyArray<readonly [string, RegExp]> = [
  ["chatgpt-user", /ChatGPT-User/i],
  ["oai-searchbot", /OAI-SearchBot/i],
  ["gptbot", /GPTBot/i],
  ["claude-user", /Claude-User/i],
  ["claude-searchbot", /Claude-SearchBot/i],
  ["claudebot", /ClaudeBot/i],
  ["anthropic-ai", /anthropic-ai/i],
  ["perplexity-user", /Perplexity-User/i],
  ["perplexitybot", /PerplexityBot/i],
  ["googleother", /GoogleOther/i],
  ["google-cloudvertexbot", /Google-CloudVertexBot/i],
  ["bytespider", /Bytespider/i],
  ["ccbot", /CCBot/i],
  ["amazonbot", /Amazonbot/i],
  ["applebot-extended", /Applebot-Extended/i],
  ["meta-externalagent", /meta-externalagent/i],
  ["meta-externalfetcher", /meta-externalfetcher/i],
  ["cohere-ai", /cohere-ai/i],
  ["youbot", /YouBot/i],
  ["duckassistbot", /DuckAssistBot/i],
  ["mistralai-user", /MistralAI-User/i],
  ["ai2bot", /AI2Bot/i],
  ["diffbot", /Diffbot/i],
  ["omgili", /omgili/i],
  ["timpibot", /Timpibot/i],
  ["imagesiftbot", /ImagesiftBot/i],
  ["webzio", /webzio/i],
];

export function detectAiCrawler(userAgent: string | null | undefined): string | null {
  if (!userAgent) return null;
  for (const [bot, re] of AI_CRAWLERS) if (re.test(userAgent)) return bot;
  return null;
}
