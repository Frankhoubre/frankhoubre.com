/**
 * Résidus d'un ancien hack (pages spam indexées sous /detail/<id> —
 * visibles dans l'export GSC 2026-07-03). 410 Gone pour accélérer la
 * désindexation côté Google/Bing.
 */
export function GET() {
  return new Response("Gone", { status: 410 });
}
