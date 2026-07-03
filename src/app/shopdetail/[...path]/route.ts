/**
 * Résidus d'un ancien hack (pages e-commerce japonaises indexées sous
 * /shopdetail/*.html|.shtml — visibles dans l'export GSC 2026-07-03).
 * On renvoie 410 Gone : signal de désindexation plus fort qu'un 404.
 */
export function GET() {
  return new Response("Gone", { status: 410 });
}
