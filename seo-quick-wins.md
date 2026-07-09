# Quick wins SEO : réalisés et à surveiller

Basé sur l'export GSC du 2026-07-09 (16 mois : ~658 clics, ~36 000
impressions, position moyenne en nette amélioration : ~8 sur les 7 derniers
jours contre ~19-22 en mars 2025).

## 1. Réalisés le 2026-07-09 (dans ce repo)

| Fichier | Problème | Donnée GSC | Modification | Impact attendu |
| --- | --- | --- | --- | --- |
| `content/blog/topaz-video-ai-test-avis-restauration-video.md` | ~40 requêtes Topaz (~3 400 imp) en pos 9-19 avec CTR quasi nul ; intentions « prix » (74 imp), « essai gratuit » (76+49 imp), « avis » (180 imp pos 14.6) non couvertes ; title 64 caractères | topaz video ai 525 imp pos 9.8 ; topaz video ai avis 180 imp pos 14.6 ; topaz video ai prix 74 imp pos 15 | Title réécrit « Topaz Video AI : avis, prix et test réel de restauration » (56 c.), excerpt orienté avis+prix, nouvelle section « Prix de Topaz Video AI » (tarifs vérifiés le 2026-07-09 sur topazlabs.com), nouvelle question FAQ prix, dateModified | CTR en hausse sur les requêtes avis/prix, couverture des requêtes prix/essai aujourd'hui perdues |
| `content/blog/dzine-ia.md` | 6 039 imp sur la legacy URL pos 6.75 avec CTR 0.84 % ; title orienté « personnages cohérents » alors que les requêtes sont « dzine », « dzine ia », « dzine ai avis » | dzine 2 503 imp CTR 0.12 % ; dzine ia 432 imp pos 5.7 ; dzine ai avis 38 imp pos 5.9 | Title « Dzine IA : avis, test et pipeline personnages cohérents » (55 c.), excerpt orienté avis, dateModified | CTR en hausse sur les requêtes navigation+avis Dzine |
| `src/app/page.tsx` | Réponse FAQ « Qui est Frank Houbre ? » trop générique pour viser le featured snippet | « qui est frank houbre » 327 imp, pos 5.06, 0 clic | Réponse enrichie : AI Studios, ScreenWeaver, Business Dynamite, films primés (SIAFF Séoul, Chroma Awards) ; alimente aussi le FAQPage JSON-LD | Featured snippet / PAA sur la requête bio, meilleure réponse entité pour les moteurs IA |
| `src/app/page.tsx` | `/prestation` et `/presse` orphelines de maillage contextuel (aucun lien depuis le corps des pages fortes) | /prestation : 26 imp, 0 clic, pos 8-14.5 | Paragraphe accueil avec liens contextuels vers `/prestation` (missions conseil) et `/presse` (kit presse) | Découverte + equity vers les 2 pages de conversion |
| `src/app/a-propos/page.tsx` | Même problème : la bio ne route pas vers la conversion | idem | Paragraphe final avec liens vers `/prestation` et `/presse` | idem |
| `src/app/liens/page.tsx` | Tiret cadratin dans le title (interdit par la charte) | conformité charte | « Liens : podcast, réseaux et outils IA » | Cohérence éditoriale |
| `src/app/en/page.tsx` | Tiret cadratin dans le title EN | conformité charte | « Frank Houbre \| AI Filmmaker & Creative Director » | idem |

Vérifications passées : `node .loop_scripts/seo_audit.mjs` (0 erreur),
`npx tsc --noEmit`, rendu contrôlé sur le dev server (titles, section prix,
liens, FAQPage JSON-LD).

Décision négative documentée : PAS de nouvelle redirection
`/topaz-video-ai` : l'export GSC ne montre aucune URL legacy de ce type, les
impressions viennent de l'article de blog lui-même.

## 2. Quick wins restants (hors périmètre du 2026-07-09)

1. **Créer le pilier WAN** (J1 du plan) puis repointer la 301
   `/wan-2-1-alibaba` de `next.config.ts` vers ce guide : la cible actuelle
   (article « WAN 2.7 décevant ») ne matche pas l'intention des 2 717 imp.
2. **Article Claude Code créateurs** (J5 du plan) : « claude code tarif »
   est déjà en position 9.5 sans page dédiée ; « claude code » 105 imp.
3. **Mettre à jour `adobe-firefly-avis`** pour couvrir Firefly 5
   (« adobe firefly 5 testé » 45 imp pos 17.4) : J17 du plan.
4. **Renforcer `metiers-audiovisuel-ia-menaces-transformation-avis`** :
   meilleure page hors marque (CTR 10.9 %). Ajouter FAQ + liens vers les
   satellites métiers du plan : J20.
5. **Requête « réalisateur ia »** (pos 7.8) : l'accueil et l'à-propos la
   portent ; l'article J2 du plan (méthode de réalisateur IA) doit consolider.
6. **iOS 27** : l'article beta publique performe (32 clics, pos 7.4). Prévoir
   la suite « version finale » à la sortie (population d'actualité du loop).
7. **EN dzine-ia** : title 67 caractères + phrase bannie « as an ai »
   détectées par le checker. À corriger lors du prochain passage du loop de
   traduction (attention au partage du working tree).
8. **Images blog > 400 KB** : backlog du SEO-GUIDELINES.md §9 toujours ouvert.

## 3. À surveiller dans GSC (2 à 4 semaines après déploiement)

- CTR de `/blog/topaz-video-ai-test-avis-restauration-video` sur « topaz
  video ai avis / prix / gratuit » (attendu : > 2 %).
- CTR de `/blog/dzine-ia` sur « dzine » et « dzine ia » (attendu : > 1.5 %).
- Apparition d'un featured snippet sur « qui est frank houbre ».
- Impressions de `/prestation` et `/presse` (effet du maillage).
- Position de « frank houbre formation » (article J3 du plan).
- Couverture : les ~211 URLs EN, et la disparition progressive des patterns
  spam `/shopdetail/` (encore 14 clics fantômes dans l'export).
