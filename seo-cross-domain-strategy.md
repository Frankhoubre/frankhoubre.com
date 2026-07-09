# Stratégie SEO cross-domain (frankhoubre.com et sites liés)

Document de référence pour éviter la cannibalisation entre les propriétés de
Frank Houbre. À relire avant de créer un article qui touche à la formation, au
storyboard, au business en ligne ou aux produits. Basé sur l'export GSC du
2026-07-09 (16 mois) et l'audit du site du même jour.

## 1. Rôle de chaque site

| Site | Rôle SEO | Intentions à capter |
| --- | --- | --- |
| **frankhoubre.com** | Hub d'autorité personnelle. Preuve, expertise, vision, méthode. | « frank houbre » et variantes, « réalisateur IA », « filmmaker IA », tests et avis d'outils créatifs, méthodes de production vidéo/image IA, cinéma IA, consulting IA production. |
| **AI Studios** (skool.com/ai-studios + ai-studios.fr) | Produit formation. | « formation IA vidéo », « apprendre vidéo IA », « formation création vidéo IA », « cours IA générative ». |
| **ScreenWeaver** (screenweaver.ai) | Produit SaaS. | « AI storyboard generator », « script to storyboard », « AI filmmaking software », « screenwriting AI tool ». |
| **businessdynamite.xyz** | Média business en ligne. | « business en ligne », « gagner de l'argent avec l'IA », « marketing IA », « dropshipping », « e-commerce », entrepreneuriat généraliste. |
| **Outerframe Studio** | Entité de production (vitrine). | Requêtes de marque « outerframe studio » uniquement. |
| **Lost Garden** | Œuvre (série IA). | Requêtes de marque « lost garden » ; le récit de production vit sur frankhoubre.com. |

## 2. Règle de partage des mots-clés

**frankhoubre.com se réserve :**
- Toutes les requêtes de marque personnelle : frank houbre, franck houbre, qui
  est frank houbre, frank houbre avis, frank houbre formation (page de
  présentation qui renvoie vers AI Studios), frank ia.
- Autorité métier : réalisateur IA, filmmaker IA, AI filmmaker, expert IA
  vidéo, consultant IA production, conférencier IA (le jour où des conférences
  documentées existent).
- Craft et production : tout ce qui est test/avis d'outils créatifs (Topaz,
  Dzine, Kling, WAN, Midjourney...), workflows, direction artistique,
  prompting cinéma, post-production. C'est le cœur du blog actuel (240+
  articles) et des données GSC.
- Vision et opinion : futur du cinéma IA, métiers de l'audiovisuel, éthique de
  la création.
- Preuve : études de cas Ronces, VOIDBORN, Lost Garden, coulisses
  ScreenWeaver, kit presse.

**Laissé à AI Studios (ne jamais cibler frontalement ici) :**
- formation ia video, formation création vidéo ia, apprendre la vidéo ia,
  cours ia, programme formation ia.
- Quand frankhoubre.com aborde la formation : angle pédagogique personnel
  (« ma méthode », « pourquoi se former », curriculum commenté) avec un lien
  sortant vers AI Studios comme réponse commerciale. Jamais de page de vente.

**Laissé à ScreenWeaver :**
- ai storyboard generator, script to storyboard, storyboard software,
  screenwriting app. Les deux articles existants
  (`screenweaver-ai-ecriture-scenario-storyboard`, `screenweaver-vs-final-draft`)
  restent des articles de présentation/comparaison éditoriale ; ne pas en
  créer d'autres qui ciblent les mots-clés produit en anglais.
- frankhoubre.com garde l'angle fondateur : coulisses, choix produit, leçons
  de build in public. Ces articles renvoient vers screenweaver.ai.
- Attention : la requête « screenweaver » (17 imp, pos 6.3) doit à terme être
  gagnée par screenweaver.ai, pas par frankhoubre.com. Ne pas sur-optimiser la
  marque produit ici.

**Laissé à businessdynamite.xyz :**
- business en ligne, gagner de l'argent avec l'ia, marketing ia, dropshipping
  ia, assistant virtuel ia, email marketing ia, référencement local ia, idée
  business ia. L'ancien contenu WordPress de frankhoubre.com sur ces sujets a
  déjà été redirigé vers /blog (voir next.config.ts) : ne pas le recréer.
- Les requêtes GSC résiduelles de cette famille (« ia et assistante
  virtuelle » 96 imp, « dropshipping ia », « ia email marketing ») sont un
  héritage : les ignorer ici, éventuellement créer le contenu sur
  businessdynamite.xyz.
- Frontière fine : la monétisation du métier de créateur vidéo IA (tarifs,
  clients, agence de prod) reste sur frankhoubre.com car c'est du métier
  créatif, pas du business en ligne généraliste.

## 3. Règles de maillage entre les sites

1. frankhoubre.com → AI Studios : lien sortant depuis l'accueil (CTA), la page
   à propos, l'article « frank houbre formation », et en fin d'articles
   tutoriels quand c'est naturel. Ancre : « AI Studios » ou « formation AI
   Studios », jamais « formation IA vidéo » (garder l'ancre exact-match pour
   les pages internes d'AI Studios).
2. frankhoubre.com → ScreenWeaver : depuis les coulisses produit et les
   articles écriture/storyboard. Ancre de marque.
3. frankhoubre.com → businessdynamite.xyz : uniquement depuis la page à
   propos et les articles de parcours. C'est un signal d'entité (même
   fondateur), pas un levier de ranking.
4. Dans l'autre sens (à mettre en place hors repo) : chaque site produit doit
   avoir une page « À propos du fondateur » qui pointe vers frankhoubre.com
   (bio canonique + kit presse). C'est ce qui consolide le knowledge graph
   autour de l'entité Person.
5. JSON-LD : le nœud Person de frankhoubre.com liste déjà AI Studios,
   ScreenWeaver et Business Dynamite dans sameAs/worksFor. Toute nouvelle
   propriété (Outerframe, Lost Garden) doit y entrer aussi (src/lib/site.ts +
   press.ts).

## 4. Arbitrages en cas de doute

- Le sujet est « comment faire X en vidéo IA » : frankhoubre.com.
- Le sujet est « apprends X avec nous » : AI Studios.
- Le sujet est « l'outil qui fait X » (écriture/storyboard) : ScreenWeaver.
- Le sujet est « gagner sa vie sur internet » : businessdynamite.xyz.
- Le sujet est « ce que Frank pense / a fait / a appris » : frankhoubre.com,
  toujours.
