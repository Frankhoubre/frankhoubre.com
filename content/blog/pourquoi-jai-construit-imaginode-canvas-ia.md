---
title: "Pourquoi j'ai construit Imaginode, mon canvas IA à nodes"
date: "2026-08-17"
category: "analyses"
excerpt: "Je fais des films IA en jonglant entre dix outils dispersés. J'ai fini par construire mon propre canvas à nodes. Voici pourquoi, et comment je m'en sers."
thumbnail: "/images/blog/pourquoi-jai-construit-imaginode-canvas-ia/hero.webp"
metaTitle: "Pourquoi j'ai construit Imaginode, mon canvas IA à nodes"
metaDescription: "Frank Houbre raconte pourquoi il a construit Imaginode, son canvas IA à nodes : le workflow du prompt texte au plan vidéo, les coûts réels et les limites."
tags: ["imaginode", "canvas ia nodes", "workflow video ia", "node caméra", "frank houbre"]
author: "Frank Houbre"
readingTime: 12
published: true
---

# Pourquoi j'ai construit Imaginode, mon canvas IA à nodes

Sur [Ronces](/blog/ronces-coulisses-court-film-ia), mon court-métrage IA, j'ai compté un soir le nombre d'onglets ouverts pour produire un seul plan. Onze. Un générateur d'images ici, un moteur vidéo là, un dossier local pour les références, un fichier texte avec mes fiches de décor, un tableur pour suivre ce que chaque génération me coûtait. Le plan faisait quatre secondes.

Ce soir-là, je n'ai pas eu une idée de génie. J'ai eu une frustration précise, accumulée plan après plan sur des mois de production. Et comme je passe aussi mes journées à construire des produits, j'ai fini par faire ce que font les artisans quand l'outil n'existe pas : je l'ai fabriqué.

Cet outil s'appelle [Imaginode](https://imaginode.ai). C'est mon produit, je le dis d'entrée. Cet article n'est pas un test faussement neutre écrit par un inconnu : c'est le récit de pourquoi je l'ai construit, comment je m'en sers sur mes propres films, ce que ça coûte vraiment, et ce que ça ne fait pas. Vous aurez les deux faces.

![Univers visuel d'Imaginode, le canvas créatif IA à nodes avec sa mascotte flamme verte](/images/blog/pourquoi-jai-construit-imaginode-canvas-ia/hero.webp)

## Le vrai problème : un film IA se fabrique dans dix outils qui s'ignorent

Quand on débute en vidéo IA, on croit que le problème est la qualité des modèles. Ce n'est plus vrai depuis un moment. Kling, Veo, Seedance produisent des plans utilisables dès qu'on sait les diriger. Le vrai problème, celui qui mange les soirées, c'est la fragmentation.

Concrètement, produire un plan cohérent demande de faire circuler la même intention à travers plusieurs outils. Le prompt écrit dans un onglet doit être recopié dans un autre. L'image générée doit être téléchargée, puis re-téléversée dans le moteur vidéo. La fiche de décor vit dans un fichier texte que rien ne relie aux générations. Et le budget, lui, n'existe nulle part : chaque plateforme a son propre système d'abonnement, ses propres crédits, ses propres règles de facturation en cas d'échec.

Sur Ronces, j'avais fini par créer une image de référence par décor, avec sa description de lumière et d'angle, que je relisais avant chaque génération. Une bible visuelle en fichier texte. Ça fonctionnait, mais c'était de la discipline pure, pas de l'outillage. Et la discipline craque toujours à 1 h du matin, au trentième plan.

Sur [VOIDBORN](/blog/voidborn-anime-ia-festival-coulisses), le problème a changé d'échelle : un film soumis en festival exige une cohérence visuelle stricte sur toute sa durée. Chaque rupture de continuité entre deux outils devient un risque de dérive du rendu.

Des canvas à nodes existaient déjà, je les ai utilisés : Weavy, Flora, Higgsfield Canvas. De bons produits. Mais aucun ne cochait mes trois cases à la fois : la simplicité pour quelqu'un qui débute, un coût affiché avant chaque clic, et un node dédié au langage de la caméra. Alors j'ai construit le mien.

## Ce que j'ai construit : un canvas où le plan s'assemble comme un plan de tournage

Imaginode est un canvas infini sur lequel on pose des nodes et on les relie. Cinq types de nodes portent l'essentiel du travail :

- **Texte** : le prompt, écrit une fois, réutilisable partout.
- **Image** : la génération d'images, avec choix du modèle.
- **Vidéo** : la génération vidéo, à partir de texte ou d'une image.
- **Média** : l'upload d'une image ou d'une vidéo à vous, utilisée comme référence.
- **Caméra** : le cadrage, l'objectif, l'ouverture, l'angle et le mouvement, injectés dans les prompts des nodes connectés.

![Animation du canvas Imaginode montrant un node texte connecté à un node image et un node vidéo](/images/blog/pourquoi-jai-construit-imaginode-canvas-ia/workflow-1.webp)

La logique est celle d'un plan de tournage, pas d'un chatbot. Vous ne décrivez pas votre film à une boîte de dialogue qui oublie tout. Vous construisez un graphe : ce prompt alimente cette image, cette image alimente cette vidéo, cette référence de décor reste branchée sur tous les plans de la séquence. Le graphe est sauvegardé automatiquement. Votre bible visuelle n'est plus un fichier texte que vous relisez de mémoire : elle est câblée.

Côté modèles, je n'ai rien réinventé et c'est volontaire. Imaginode passe par le [Vercel AI Gateway](https://vercel.com/ai-gateway) et donne accès aux mêmes moteurs que vous utilisez peut-être déjà : Flux 2, Nano Banana, Imagen 4, Seedream 5 et GPT Image côté image, Kling, Veo 3.1, Seedance 2.5, Wan 2.7, MiniMax ou Grok Imagine côté vidéo. Il n'y a aucun moteur secret là-dedans : ce qui change, c'est que le même canvas parle à tous, et que vous choisissez le moteur plan par plan.

C'est une leçon qui vient directement de mes films : sur Ronces, Kling était meilleur sur la végétation en mouvement, Wan plus stable sur l'architecture intérieure. Choisir l'outil par plan, pas par habitude. Un canvas multi-modèles rend ce réflexe naturel au lieu de le rendre pénible.

> 💡 **Le cut de Frank :** sur une séquence, je duplique le même groupe texte + caméra et je ne change que le node vidéo pour comparer deux moteurs sur un plan identique. Deux générations, même prompt, même cadrage : vous voyez immédiatement quel modèle sert votre plan, au lieu de débattre dans l'abstrait.

## Le node Caméra : parler cadrage plutôt que réciter des formules magiques

C'est le node pour lequel j'ai construit le reste. Si vous venez du cinéma, c'est celui qui va vous parler. Si vous débutez, c'est celui qui va vous faire progresser le plus vite.

Le constat de départ : la majorité des prompts vidéo que je vois passer chez mes élèves accumulent des mots-clés décoratifs, et zéro décision de mise en scène. Or les modèles actuels comprennent très bien le vocabulaire technique du plateau. Encore faut-il l'écrire, à chaque prompt, sans se tromper, et de façon identique sur tous les plans d'une même séquence. J'en parle en détail dans [ma méthode de réalisateur IA : diriger avant de générer](/blog/methode-realisateur-ia-diriger-avant-generer).

Le node Caméra transforme cette rigueur en réglages. Cinq molettes :

- **Cadrage** : du très gros plan au plan large d'exposition, en passant par le plan moyen et le plan américain.
- **Objectif** : 14, 24, 35, 50, 85 ou 135 mm.
- **Ouverture** : de f/1.4 à f/16.
- **Angle** : hauteur d'œil, contre-plongée, plongée, vue zénithale, angle hollandais.
- **Mouvement** : caméra verrouillée, dolly avant ou arrière, panoramique, grue, orbite, caméra portée, zoom lent.

Vous branchez ce node sur un node Image ou Vidéo, et ses réglages sont traduits en langage cinématographique directement injecté dans le prompt du node connecté. Un exemple réel : cadrage plan moyen, 50 mm, f/2, hauteur d'œil, dolly avant lente. Le node écrit pour vous quelque chose comme "cinematic photography, medium shot, shot on a 50mm lens, aperture f/2, shallow depth of field, eye-level angle, camera movement: slow dolly in". À chaque génération. Sans faute de frappe. Sans variation involontaire entre le plan 4 et le plan 12.

Le bénéfice caché, c'est la constance. Une séquence tient visuellement quand la focale et la hauteur de caméra ne sautent pas d'un plan à l'autre sans raison. Avec un node Caméra partagé entre plusieurs nodes de génération, cette cohérence devient structurelle. Vous décidez une grammaire de séquence une fois, elle s'applique partout.

> 💡 **Le cut de Frank :** pour un dialogue ou une scène intime, je verrouille **85 mm, f/2, hauteur d'œil** sur toute la séquence et je ne fais varier que le cadrage entre plan moyen et gros plan. C'est la recette du champ contrechamp classique, et les modèles vidéo la respectent étonnamment bien quand la focale reste stable.

## Du prompt texte au plan vidéo : mon workflow complet en cinq étapes

Voici comment je produis un plan aujourd'hui, du texte à la vidéo. C'est le workflow que j'utilise réellement, pas une démo idéale.

**Étape 1 : le node Texte.** J'écris le prompt du plan comme un brief de tournage : sujet, action, décor, lumière, ambiance. Pas de vocabulaire caméra ici, c'est le rôle du node suivant. Ce découpage force une hygiène d'écriture : le contenu du plan d'un côté, sa mise en scène de l'autre.

**Étape 2 : le node Caméra.** Je règle cadrage, focale, ouverture, angle. Je le branche sur le node Image qui suit. Si le plan appartient à une séquence, je réutilise le node Caméra déjà posé pour cette séquence.

**Étape 3 : le node Image.** Je génère d'abord une image fixe, presque jamais une vidéo directement. Une image se juge en quelques secondes et coûte une fraction du prix d'une vidéo. Je fais mes itérations là : sur un modèle rapide pour dégrossir, puis sur un modèle plus haut de gamme pour l'image finale qui servira de première frame. Si j'ai une référence de décor ou de personnage, je la branche via un node Média sur un modèle qui accepte l'édition, comme Flux Kontext ou Nano Banana.

**Étape 4 : le node Vidéo.** L'image validée devient l'entrée du node Vidéo. Le node Caméra y ajoute le mouvement : dolly avant, orbite, caméra portée. Je choisis le moteur selon le plan : Kling pour le mouvement organique, Veo 3.1 quand je veux de l'audio natif, Seedance quand j'ai besoin de références multiples ou d'un format 21:9.

**Étape 5 : itération et bibliothèque.** Chaque génération est conservée dans la bibliothèque du projet. Je compare, je rebranche, je régénère. Le coût exact en crédits s'affiche sur le bouton avant chaque clic, et si une génération échoue côté fournisseur, les crédits sont remboursés automatiquement.

Pour les moments où on ne sait pas par où commencer, un assistant intégré peut proposer un workflow complet, déjà câblé, qu'on ajoute au canvas en un clic. Je m'en sers peu, mes élèves s'en servent beaucoup. Ce workflow s'inscrit dans une chaîne plus large qui va du scénario au montage : je l'ai détaillée dans [mon pipeline IA de A à Z, du script au storyboard jusqu'à la production](/blog/pipeline-ia-script-storyboard-production-de-a-z).

![Page d'accueil d'imaginode.ai, le canvas créatif IA à nodes de Frank Houbre](/images/blog/pourquoi-jai-construit-imaginode-canvas-ia/workflow-2.webp)

*Capture de la page d'accueil d'imaginode.ai en août 2026.*

## Combien ça coûte vraiment : le pari du prix affiché avant le clic

Parlons argent, franchement, parce que c'est la deuxième raison d'exister d'Imaginode. Les abonnements vidéo IA classiques vendent des "générations illimitées" avec des files d'attente, ou des crédits dont on ne sait jamais ce qu'ils valent. Je voulais l'inverse : un crédit vaut environ 0,01 euro, et le coût exact de chaque génération s'affiche avant de cliquer.

Les offres au moment où j'écris :

| Offre | Prix | Crédits mensuels | Équivalent indicatif |
| --- | --- | --- | --- |
| Starter | 13 € HT/mois | 900 crédits | environ 9 € de générations |
| Créateur | 42 € HT/mois | 3 100 crédits | environ 31 € de générations |
| Studio | 145 € HT/mois | 10 500 crédits | environ 105 € de générations |
| Recharges one-shot | de 15 à 135 € HT | de 1 000 à 10 000 crédits | sans abonnement supplémentaire |

Pour donner des ordres de grandeur réels, relevés sur l'outil au moment où j'écris : une image Flux Schnell coûte 1 crédit, une image Flux 2 Pro 7 crédits, une image Nano Banana 2 environ 10 crédits. En vidéo, un plan Kling 2.5 Turbo de 5 secondes revient à 26 crédits, soit environ 0,26 euro. Un plan Veo 3.1 Fast de 8 secondes en 720p avec audio monte à 144 crédits. Ces prix suivent ceux des modèles chez les fournisseurs, ils évoluent donc avec le marché.

Soyons honnêtes sur le modèle économique, puisque c'est le mien : il n'y a pas de crédits gratuits. Pas d'essai illimité, pas de plan découverte subventionné. Les crédits s'achètent, une marge est incluse dans le coût de chaque génération, et c'est ce qui finance l'outil sans publicité ni revente de données. En contrepartie, vous savez toujours ce que vous dépensez avant de le dépenser, et un échec est remboursé sans ticket au support.

> 💡 **Le cut de Frank :** faites vos itérations exploratoires sur les modèles à 1 ou 2 crédits, et ne passez sur les modèles chers qu'au moment de produire l'image finale qui part en vidéo. Sur un court-métrage complet, cette simple discipline divise le budget par deux ou trois, sur Imaginode comme partout ailleurs.

## Ce qu'Imaginode ne fait pas

Un article écrit par le fondateur n'a de valeur que si cette section existe. Voici les limites, sans détour.

**Imaginode ne monte pas votre film.** C'est un atelier de fabrication de plans, pas une timeline. Le montage, l'étalonnage final et le mixage se font ailleurs, dans DaVinci Resolve ou l'équivalent de votre choix. Je n'ai aucune intention d'y mettre un montage au rabais.

**Le son reste à part.** Certains modèles vidéo comme Veo 3.1 ou Kling V3 génèrent de l'audio natif avec le plan, mais la vraie bande-son d'un film, musique, ambiances, mixage, se construit dans des outils dédiés.

**Les modèles sont les mêmes qu'ailleurs.** Si vous cherchez un moteur de génération exclusif, il n'y en a pas. La valeur est dans l'assemblage, la constance de la caméra et la transparence du coût, pas dans un modèle propriétaire.

**Ce n'est pas un ComfyUI.** Pas de custom nodes, pas de contrôle bas niveau des samplers, pas d'exécution locale. Les utilisateurs avancés de ComfyUI garderont leur pipeline pour certains besoins pointus, et ils auront raison. Imaginode vise le créateur qui veut la logique nodale sans l'administration système.

**Et l'outil ne remplace pas la direction.** Un canvas bien câblé avec une intention faible produit des plans propres et vides. La hiérarchie reste : intention, direction, puis outil.

Face à Weavy, Flora ou Higgsfield Canvas, la différence que je revendique tient en deux points : la simplicité d'entrée, pensée pour quelqu'un qui n'a jamais touché un graphe de nodes, et le coût affiché avant chaque clic. Si votre priorité est ailleurs, ces produits sont de vraies alternatives et je vous encourage à comparer.

## Ce que ça a changé sur mes propres films

Le test le plus honnête d'un outil, c'est de regarder si son créateur s'en sert quand personne ne le regarde.

Ce que je constate sur mes productions en cours, c'est d'abord un déplacement du temps. Le temps de manutention, copier des prompts, télécharger et re-téléverser des images, retrouver quelle référence allait avec quel plan, a presque disparu. Ce temps est reparti où il doit être : sur la décision. Quel cadrage, quelle focale, quel moteur pour ce plan précis.

Ensuite, une conséquence que je n'avais pas anticipée : le canvas devient une mémoire du film. Des semaines après, le graphe montre encore comment chaque plan a été fabriqué, avec quelles références et quels réglages caméra. Sur un film de festival qu'on retouche après des retours, cette traçabilité vaut de l'or. C'est exactement ce qui m'avait manqué sur VOIDBORN au moment de régénérer des plans plusieurs semaines après la première passe.

Enfin, il y a l'effet sur mes élèves. Voir un débutant comprendre en dix minutes que son image change du tout au tout entre un 24 mm en contre-plongée et un 85 mm à hauteur d'œil, parce qu'il vient de tourner deux molettes au lieu de réécrire deux prompts, ça confirme l'intuition de départ : le langage de la caméra devait devenir un objet manipulable.

Imaginode est en production sur [imaginode.ai](https://imaginode.ai), en cinq langues, avec une documentation et un blog. Si vous testez, faites-le avec un regard critique : c'est le produit d'un créateur qui a construit son propre outil, et cet article est la version longue de pourquoi.

## FAQ : Imaginode et le canvas IA à nodes

### Qu'est-ce qu'Imaginode exactement ?

Imaginode est un canvas créatif IA à nodes, accessible dans le navigateur sur imaginode.ai. On y crée des projets sous forme de graphes : des nodes Texte, Image, Vidéo, Média et Caméra que l'on relie entre eux pour générer des images et des vidéos avec les grands modèles du marché, Flux, Imagen, Kling, Seedance ou Veo 3.1, via le Vercel AI Gateway. Chaque génération affiche son coût en crédits avant le clic, les échecs sont remboursés automatiquement, et tout est sauvegardé projet par projet. C'est un outil que j'ai construit d'abord pour mes propres productions de films IA, puis ouvert en produit public.

### En quoi un canvas à nodes est-il meilleur qu'un chatbot pour créer des vidéos IA ?

Un chatbot traite chaque demande comme une conversation qui finit par se perdre. Un canvas traite votre projet comme une structure. La différence devient flagrante dès que vous dépassez le plan unique : sur une séquence de dix plans, le canvas garde vos références branchées, vos réglages caméra partagés et votre historique visible, là où le chatbot vous oblige à tout re-préciser à chaque message. Le graphe agit comme une mémoire du film : des semaines plus tard, vous voyez encore comment chaque plan a été fabriqué. Pour un travail ponctuel et rapide, un chatbot suffit. Pour un film, la structure gagne.

### À quoi sert concrètement le node Caméra ?

Le node Caméra traduit des réglages de plateau, cadrage, objectif de 14 à 135 mm, ouverture de f/1.4 à f/16, angle et mouvement de caméra, en langage cinématographique injecté automatiquement dans le prompt des nodes Image ou Vidéo connectés. Vous choisissez par exemple plan moyen, 50 mm, f/2, dolly avant lente, et le node écrit la formulation technique que les modèles comprennent, identique à chaque génération. L'intérêt est double : les débutants apprennent le vocabulaire du cadrage en manipulant des réglages visuels, et les créateurs exigeants obtiennent une cohérence de mise en scène stricte sur tous les plans d'une séquence.

### Combien coûte Imaginode et y a-t-il des crédits gratuits ?

Trois abonnements existent : Starter à 13 € HT par mois avec 900 crédits, Créateur à 42 € HT avec 3 100 crédits, et Studio à 145 € HT avec 10 500 crédits, plus des recharges ponctuelles de 1 000 à 10 000 crédits. Un crédit vaut environ 0,01 euro et le coût exact de chaque génération s'affiche avant de cliquer. Il n'y a pas de crédits gratuits : c'est un choix assumé pour financer l'outil sans publicité, avec en contrepartie le remboursement automatique de toutes les générations qui échouent, sans avoir à contacter le support.

### Quels modèles d'IA sont disponibles sur Imaginode ?

Côté image, on trouve notamment la famille Flux de Black Forest Labs, du très rapide Flux Schnell au haut de gamme Flux 2 Max, les Nano Banana de Google, Imagen 4, Seedream 5, GPT Image, Recraft et Grok Imagine. Côté vidéo : Kling 2.5 Turbo et Kling V3, Veo 3.1 Lite et Fast, Seedance 2.0 Fast et 2.5, Wan 2.7, MiniMax et Grok Imagine Video. Des modèles de langage alimentent aussi les nodes Texte et l'assistant. Le catalogue suit le marché via le Vercel AI Gateway, avec les tarifs fournisseurs répercutés dans le coût en crédits affiché sur chaque node.

### Imaginode remplace-t-il ComfyUI ?

Non, et il n'essaie pas. ComfyUI reste l'outil roi du contrôle bas niveau : custom nodes, samplers, exécution locale, pipelines sur mesure. Imaginode prend la logique nodale de ComfyUI et en retire l'administration : rien à installer, pas de GPU à gérer, pas de dépendances à réparer un dimanche soir. La cible n'est pas la même. Si vous vivez dans ComfyUI et que votre pipeline local vous convient, gardez-le. Si vous voulez la puissance du graphe avec des modèles hébergés, un coût affiché et une prise en main en dix minutes, c'est exactement le créneau d'Imaginode.

### Est-ce adapté aux débutants complets en vidéo IA ?

C'est le public pour lequel je l'ai conçu, avec mes élèves en tête. L'interface se limite à cinq types de nodes, la documentation couvre le démarrage, le canvas, la caméra, les crédits et les modèles en cinq langues, et un assistant intégré peut proposer un workflow complet déjà câblé à ajouter au canvas en un clic. Le node Caméra sert aussi d'école de cadrage : tourner les molettes et regarder l'image changer apprend plus vite le rôle d'une focale ou d'une ouverture que n'importe quel cours théorique. La vraie courbe d'apprentissage reste la direction artistique, et elle, aucun outil ne l'automatise.

### Peut-on faire un film complet uniquement avec Imaginode ?

Non, et je préfère le dire moi-même. Imaginode couvre la fabrication des plans : écriture des prompts, génération d'images, mise en mouvement en vidéo, gestion des références et de la caméra. Un film complet demande en plus un scénario structuré, un montage, un étalonnage et une bande-son, qui se font dans des outils dédiés. Ma chaîne complète relie l'écriture, le storyboard, la génération des plans sur Imaginode, puis le montage classique. Le canvas est l'atelier central de production d'images et de plans, pas une usine à films en un clic, qui de toute façon n'existe pas.

<!-- PUBLICATION DATE: 2026-08-17 -->
