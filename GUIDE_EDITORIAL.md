# Guide éditorial frankhoubre.com (règles permanentes)

> Charte de référence pour tout nouvel article, toute réécriture, toute mise à
> jour de page et toute optimisation SEO du site. Ces règles sont permanentes.
> Elles complètent et priment sur l'ancien `BLOG_WORKFLOW.md`. Le contrat de
> voix technique pour le loop reste `.loop_memory/STYLE_GUIDE.md` (lu par le
> checker `node .loop_scripts/seo_audit.mjs`).

## Objectif

Chaque article doit être utile, agréable à lire, bien structuré, optimisé SEO,
crédible, humain, et écrit dans le style de Frank Houbre. Pas de contenu
générique. Pas de texte qui sonne IA. Pas de remplissage. On veut des articles
qui résolvent vraiment le problème du lecteur et qui peuvent se positionner sur
Google.

Avant d'écrire ou de modifier un article, se poser ces questions :

- Pourquoi quelqu'un chercherait cet article ?
- Quel problème veut il résoudre ?
- Qu'est ce qu'il doit comprendre après lecture ?
- Qu'est ce que cet article apporte de mieux qu'un contenu moyen sur Google ?
- Quels exemples concrets le rendent plus utile ?
- Quels conseils peuvent être appliqués immédiatement ?

## Style obligatoire

Écrire comme une vraie personne, pas comme une IA. Style simple, naturel,
fluide, humain, direct, vivant. Le texte doit donner l'impression qu'un créateur
expérimenté parle au lecteur avec honnêteté et recul.

Ton Frank Houbre : humain, clair, utile, passionné, concret, accessible. Pas
professoral, pas froid, pas marketing forcé, pas rédaction SEO bas de gamme.

À bannir :

- Phrases corporate vides.
- Intros creuses du type "Dans un monde où...".
- Débuts IA du type "Il est important de noter que...".
- Formules mécaniques type "En conclusion, il est essentiel de...".
- Tournures trop parfaites, trop symétriques, scolaires.
- Phrases longues qui n'apportent rien, répétitions d'idées.
- Keyword stuffing, promesses exagérées.
- **Tirets longs ou tirets cadratins.** Pour séparer deux idées : virgule,
  point, deux points, ou reformuler. Cette règle est un échec bloquant au
  checker.
- Listes trop propres qui sonnent généré automatiquement.
- Fautes d'orthographe, de grammaire, de typographie.

## SEO obligatoire (chaque article)

- Un mot clé principal clair, des mots clés secondaires naturels.
- Title SEO optimisé (<= 60 caractères idéalement).
- Meta description engageante (120 à 160 caractères).
- Un H1 unique, structure H2 et H3 claire (viser 5+ H2).
- Intro qui accroche vite, paragraphes courts.
- Listes à puces quand c'est utile, gras sur les idées fortes, italique avec
  modération pour nuancer.
- Liens internes naturels vers d'autres articles pertinents (viser 2 à 4).
- Liens externes vers des sources fiables quand le sujet s'y prête.
- Citations ou références crédibles quand le sujet le nécessite.
- Images pertinentes avec balises alt descriptives.
- Conclusion utile, pas générique.
- FAQ si le sujet s'y prête.
- Slug propre et lisible, intention de recherche clairement respectée.

Le SEO doit rester naturel. Ne jamais sacrifier la lecture pour placer un mot
clé.

## Crédibilité et sources

Quand on affirme un fait, une donnée chiffrée, un point technique ou
stratégique, ajouter une source fiable si possible : études, articles reconnus,
documentation officielle, données publiques, sites d'autorité, exemples
concrets, références sectorielles.

Ne jamais inventer de chiffres, citations, études ou sources. Si une information
n'est pas vérifiable, la formuler comme hypothèse, observation ou opinion.
Chaque article inclut quelques liens externes utiles, sauf si le sujet ne s'y
prête vraiment pas. Les liens externes doivent enrichir, pas décorer.

## Valeur pour le lecteur

Chaque article doit contenir au moins une partie vraiment utile : une méthode,
une checklist, un exemple concret, une comparaison, une erreur fréquente à
éviter, une mini analyse, un plan d'action, un cas pratique, ou l'explication
simple d'un concept compliqué.

## Mise en forme

Agréable à scanner : titres clairs, sous titres précis, paragraphes courts,
listes à puces utiles, gras pour les idées fortes, italique avec modération,
citations quand elles apportent de la crédibilité, liens internes naturels,
liens externes utiles. Ne pas mettre du gras ou de l'italique partout. La mise
en forme sert la lecture, pas l'inverse.

## Anti cannibalisation

Avant de créer ou optimiser un article, vérifier s'il existe déjà un article
proche. Si deux articles ciblent la même intention :

- Fusionner les contenus si nécessaire.
- Différencier clairement les angles.
- Changer le mot clé principal de l'un des deux.
- Ajouter des liens internes entre eux si les angles sont complémentaires.

Chaque article doit avoir un rôle clair dans l'architecture du site. Cartographie
des intentions : `.loop_memory/KEYWORD_MAP.md`.

## Optimisation des anciens articles

Pour chaque article repris : analyser l'intention, vérifier le mot clé
principal, améliorer title et meta si besoin, vérifier H1/H2/H3, réécrire les
intros génériques, supprimer les formulations IA et les tirets longs, corriger
les fautes, ajouter exemples concrets, listes, gras et italique utiles, ajouter
liens internes et externes pertinents, ajouter citations vérifiables, vérifier
images et alt, ajouter une FAQ si elle aide le SEO, améliorer la conclusion,
vérifier l'absence de cannibalisation.

Préserver l'URL existante si elle est déjà indexée, sauf si elle est vraiment
mauvaise. Ne supprimer aucun article sans raison solide. Si un article est trop
faible, trop générique ou trop court, le réécrire en profondeur plutôt que
corriger à la marge.

## Checklist finale avant publication

- L'article répond il vraiment à l'intention de recherche ?
- Le titre donne t il envie de cliquer ? L'intro donne t elle envie de lire ?
- Le texte sonne t il humain ? Reste t il des formulations IA ou des tirets longs ?
- SEO optimisé sans être forcé ? Liens internes utiles ? Liens externes crédibles ?
- Citations vérifiables ? Structure claire ? Paragraphes agréables ?
- Plus de valeur qu'un article moyen sur le sujet ? Conclusion utile ?
- Fautes corrigées ? Images avec alt corrects ? La page aide t elle vraiment ?

Ne jamais publier un article qui a l'air écrit à la chaîne.
