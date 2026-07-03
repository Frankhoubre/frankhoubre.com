# SEO Guidelines frankhoubre.com (règles techniques permanentes)

Complément technique du `GUIDE_EDITORIAL.md` (qui régit le contenu d'un
article) et du checker `.loop_scripts/seo_audit.mjs` (métadonnées d'article).
Ce document régit la **santé SEO du site** : à relire avant toute création de
page, modification de route, campagne de contenu, ou audit. Issu de l'audit
complet du 2026-07-03 (données GSC 16 mois + crawl live).

## 1. Invariants du site (ne jamais casser)

- **Hôte canonique** : `https://frankhoubre.com` (non-www). www → apex en 308
  via `next.config.ts`. Ne jamais générer de lien interne en www.
- **hreflang** : chaque page FR avec jumelle EN déclare `fr`, `en` et
  `x-default` (= FR) via `alternateLanguages` de `buildPageMetadata`. Toute
  nouvelle page EN DOIT déclarer sa jumelle FR et réciproquement.
- **Canonical** : self-canonical partout via `buildPageMetadata({ path })`.
  Jamais de page indexable sans canonical.
- **`lang`** : le root layout sert `lang="fr"` ; `HtmlLangSync` corrige en
  `en` côté client sur `/en`. `og:locale` est dérivée du path dans
  `buildPageMetadata`. Backlog connu : servir `lang="en"` dans le HTML initial
  via deux root layouts (bloqué tant que `press/`/`presse/` non trackés vivent
  à la racine de `src/app`).
- **robots.txt** : tout autorisé sauf `/api/`. Les crawlers IA (GPTBot,
  ClaudeBot, PerplexityBot…) sont volontairement autorisés. Ne pas les bloquer.
- **llms.txt / llms-full.txt** : générés dynamiquement
  (`src/app/llms.txt/route.ts`). Ils se mettent à jour seuls avec le contenu ;
  si on ajoute un hub (nouvelle catégorie, nouvel outil), l'ajouter dans
  `llms.txt`.
- **Sitemap** : `src/app/sitemap.ts` couvre FR + EN + catégories + outils.
  Toute nouvelle famille de routes indexables doit y entrer.

## 2. Redirections et pages mortes

- **Jamais de 404 sur une URL qui a eu du trafic.** Avant de supprimer ou
  renommer un slug : 301 dans `next.config.ts` vers le contenu le plus proche
  (fusion éditoriale = déjà pratiqué, voir bloc « anti-cannibalisation »).
- **Legacy WordPress** : une carte 301 des anciennes URLs (export GSC
  2026-07-03) vit dans `next.config.ts`. Si GSC révèle de nouvelles URLs
  legacy avec impressions : les ajouter (cible thématique proche, sinon
  `/blog`).
- **Spam hack (héritage)** : `/shopdetail/*` et `/detail/*` renvoient 410
  (route handlers dédiés). Ne pas supprimer ces handlers tant que GSC montre
  des impressions sur ces patterns.

## 3. Performance (Core Web Vitals = signal de ranking)

- **Interdit de passer `Post.content` (markdown complet) à un composant
  client.** Utiliser `PostSummary` / `toPostSummary()` de
  `src/lib/blog-thumbnail.ts`. C'est ce qui avait gonflé `/blog` à 4,2 Mo.
- **Listes paginées** : `/en/blog` pagine côté serveur
  (`/en/blog/page/N`, 24 posts/page, composant `EnBlogGrid`). Toute nouvelle
  liste longue (>30 cartes) doit paginer en vraies URLs, pas en scroll infini.
- **Images** : toujours `next/image` (jamais `<img>` pour un asset local).
  Poids cible d'un hero **≤ 300 KB** à la génération ; les fichiers bruts
  servent d'og:image et sont chargés tels quels par les réseaux sociaux et
  certains fetchers IA. Alt descriptif obligatoire (≥ 8 mots utiles).
- Budget indicatif par page : HTML ≤ 300 KB, LCP image optimisée ≤ 100 KB.

## 4. Métadonnées (rappel des seuils, appliqués par le checker)

- Title ≤ 60 caractères, unique par locale, mot-clé en tête.
- Meta description 120–155 caractères (Google tronque ~160).
- H1 unique ; 5+ H2 ; FAQ en `## FAQ` avec questions en gras ou `###`
  (elle alimente le FAQPage JSON-LD automatiquement, FR **et** EN).
- Excerpt du frontmatter = meta description : le soigner comme tel.

## 5. JSON-LD (parité FR/EN obligatoire)

- Article FR : BlogPosting + BreadcrumbList + FAQPage (+ VideoObject si
  vidéo). Article EN : **même graphe** (implémenté dans
  `src/app/en/blog/[slug]/page.tsx`). Toute évolution du graphe FR doit être
  portée côté EN dans le même commit.
- Listings : `Blog` + `blogPost[]` sur `/blog` ET `/en/blog`.
- Home : WebSite + SearchAction + Person + FAQPage — ne pas dégrader, c'est
  l'ancrage entité (knowledge graph + LLM).

## 6. Maillage interne (à chaque article)

- 3–6 liens internes contextuels minimum ; FR pointe vers `/blog/…`,
  EN pointe vers `/en/blog/…` (jamais l'inverse, sauf outils : `/outils/`
  n'existe qu'en FR).
- Chaque nouvel article doit recevoir au moins un lien entrant depuis un
  article existant du même cluster (sinon il ne vit que par le sitemap).
- Vidéos @BusinessDynamite : articles FR uniquement, jamais EN.

## 7. GEO / LLM (visibilité dans les réponses IA)

- FAQ + tableaux comparatifs + définitions nettes en début de section :
  c'est ce que les moteurs IA citent. Maintenir ce format.
- `llms.txt` à jour ; ne jamais bloquer les crawlers IA dans robots.txt.
- Entité « Frank Houbre » : bio cohérente (Person schema, à-propos, press
  kit) — toute nouvelle réalisation/prix s'ajoute aussi dans le JSON-LD.

## 8. Checklist de vérification (commandes runnables)

Après tout changement touchant routes, metadata ou listings :

```bash
# Audit contenu (checker du loop)
node .loop_scripts/seo_audit.mjs

# Santé HTTP (attendu : 308 → 200/404 selon cas)
curl -sI https://www.frankhoubre.com/ | head -3          # 308 → apex
curl -s -o /dev/null -w '%{http_code}\n' https://frankhoubre.com/llms.txt   # 200
curl -s -o /dev/null -w '%{http_code}\n' https://frankhoubre.com/shopdetail/x.html  # 410

# Poids HTML des listings (attendu ≤ ~300 KB)
curl -s -o /dev/null -w '%{size_download}\n' https://frankhoubre.com/blog
curl -s -o /dev/null -w '%{size_download}\n' https://frankhoubre.com/en/blog

# hreflang + canonical sur une paire FR/EN (grep insensible à la casse !)
curl -s https://frankhoubre.com/blog/<slug> | grep -io '<link[^>]*alternate[^>]*>'

# JSON-LD présent (FR et EN doivent lister les mêmes types)
curl -s https://frankhoubre.com/en/blog/<slug> | grep -oE '"@type":\s*"[^"]*"' | sort | uniq -c
```

## 9. Backlog SEO connu (état 2026-07-03)

- [ ] `lang="en"` dans le HTML initial (route groups — bloqué par press/ non tracké).
- [ ] Pagination serveur du blog FR (`/blog/page/N`, comme l'EN).
- [ ] Catégories EN (`/en/blog/category/*`) quand le trafic EN le justifie.
- [ ] Compression batch des images blog > 400 KB (og:image bruts lourds).
- [ ] GSC : demander la suppression des patterns spam `/shopdetail/`, `/detail/`
  (outil de retrait) et surveiller la couverture des ~211 URLs EN.
- [ ] Ancien contenu WP à réévaluer : si GSC montre de nouvelles URLs legacy
  à impressions, enrichir la carte 301.
