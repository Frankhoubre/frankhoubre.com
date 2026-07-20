---
title: "Dzine Image Animator : animer un portrait photo en vidéo pas à pas"
date: "2026-07-20"
category: "tutoriels"
excerpt: "Dzine Image Animator transforme un portrait fixe en clip vidéo animé grâce à Wan 2.2. Voici le flux complet, les réglages qui marchent, et ce qu'il ne faut pas faire."
thumbnail: "/images/blog/dzine-image-animator-tutoriel/hero.webp"
author: "Frank Houbre"
tags: ["dzine", "image animator", "portrait animation", "wan 2.2", "image to video", "animation ia"]
---

![Dzine Image Animator : transformer un portrait en vidéo animée avec Wan 2.2](/images/blog/dzine-image-animator-tutoriel/hero.webp)

# Dzine Image Animator : animer un portrait photo en vidéo pas à pas

Tu as une belle image fixe. Un portrait. Une scène de rue rendue avec Midjourney ou Flux. Et tu veux que ça bouge, juste un peu, comme si le personnage respirait, tournait légèrement la tête, ou que la lumière dans la scène vivait.

Le problème classique : les outils d'animation générale te demandent un prompt texte complet et tu te retrouves avec quelque chose qui n'a plus grand-chose à voir avec ton image source. Le personnage change de visage, les vêtements mutent, la lumière se retourne.

**Dzine Image Animator** prend l'image comme point de départ strict. Le moteur derrière, c'est Wan 2.2 Animate, et c'est un outil conçu spécifiquement pour cette contrainte : garder ce qui existe, animer ce qui doit bouger.

Voici comment l'utiliser correctement.

## Ce qu'est Dzine Image Animator (et ce qu'il n'est pas)

L'Image Animator de Dzine est un outil mono-fonction dans l'écosystème Dzine. Ce n'est pas le générateur vidéo texte-to-video, ni le Video Animation Agent, ni l'AI Movie Generator. C'est spécifiquement le module qui prend une image immobile et la transforme en clip animé.

Le moteur Wan 2.2 gère le transfert de mouvement. Concrètement, il analyse ta photo source et génère le mouvement de manière à respecter au maximum la structure, les couleurs et les formes de l'image d'origine. Il peut animer depuis un prompt texte de mouvement ou depuis une vidéo de référence de mouvement.

Ce que ça fait bien :
- Portraits avec des mouvements subtils (respiration, regard)
- Scènes avec des éléments atmosphériques (fumée légère, eau, végétation)
- Personnages avec des mouvements lisibles depuis une vidéo de référence

Ce que ça fait moins bien :
- Mouvements complexes sur les mains (ça reste le point faible de toute l'IA vidéo)
- Grandes actions physiques qui déforment beaucoup le corps
- Images avec trop d'éléments en premier plan superposés

## Le flux de base, étape par étape

### Étape 1 : préparer ton image source

C'est l'étape qu'on zappe trop vite. La qualité de l'animation dépend directement de la qualité et de la lisibilité de l'image source.

**Format.** PNG ou JPEG à haute résolution. Minimum 1024x1024 pixels recommandé. Les images trop compressées ou floues donnent des résultats déformés.

**Composition.** L'Image Animator marche mieux avec une composition lisible : un sujet principal clair, un fond pas trop chargé. Si ton image est très complexe avec beaucoup de détails entrelacés, le modèle a du mal à isoler ce qui doit bouger de ce qui doit rester fixe.

**Le piège du portrait coupé.** Si tu animes un portrait, évite les cadrages qui coupent le personnage en plein milieu d'un geste. Un cadrage épaules-tête fonctionne mieux qu'un cadrage qui coupe les bras à mi-chemin.

> 💡 **Le cut de Frank :** Génère ton image source en gardant en tête que tu vas l'animer. Un fond légèrement hors focus derrière le sujet, un espace autour des mains si elles sont visibles, une lumière directionnelle claire (pas multi-sources diffuses). Ça fait une différence.

### Étape 2 : choisir ton mode d'animation

Dans l'interface Dzine Image Animator, tu as deux approches principales :

**Mode texte (prompt de mouvement).** Tu décris le mouvement que tu veux en quelques mots. Quelques exemples qui marchent bien :
- "slow head turn to the right, natural breathing"
- "gentle wind in hair, eyes blinking slowly"
- "subtle smile appearing, warm ambient light"

Le prompt doit décrire le mouvement, pas le sujet. Le modèle sait ce qu'est ton sujet (c'est ton image). Dis-lui juste ce qui doit bouger et comment.

**Mode vidéo de référence.** Tu fournis une courte vidéo comme référence de mouvement. Le modèle transfère le pattern de mouvement depuis la vidéo de référence vers ton image source.

C'est le mode le plus puissant pour un résultat précis. Si tu veux qu'un personnage effectue un mouvement spécifique, filmer toi-même (ou utiliser un clip libre de droits) avec le bon geste, puis le passer en référence.

### Étape 3 : régler la durée et la résolution

Dzine Image Animator supporte jusqu'à 1080p à 24 FPS. Ce sont les réglages que je recommande pour un résultat utilisable.

**Durée.** Pour un premier test, reste sur 3 à 5 secondes. C'est suffisant pour valider que l'animation ressemble à ce que tu veux avant de générer une version longue. Les clips longs consomment plus de crédits et si le mouvement part dans la mauvaise direction, tu l'as vu vite.

**Résolution.** 1080p si tu veux utiliser le résultat en production. 720p pour les tests rapides. La résolution ne change pas beaucoup la qualité de l'animation elle-même, surtout la taille du fichier et la clarté des détails.

### Étape 4 : évaluer le premier résultat

Regarde en boucle. Pas une fois : en boucle. C'est comme ça qu'on repère les problèmes.

**Ce qu'on cherche :** le sujet reste lui-même sur toute la durée du clip, le mouvement est lisible et cohérent, les zones de fond ne se déforment pas de manière aberrante.

**Les signes d'un problème :**
- La texture du visage change entre frames (signe que l'image source manquait de détails ou que le prompt était trop ambitieux)
- Un membre se déforme dans une direction non naturelle (souvent un prompt trop flou sur la direction du mouvement)
- Le fond "brille" ou présente des artefacts (image source trop compressée, ou modèle qui hallucine dans les zones périphériques)

### Étape 5 : corriger et relancer

Dzine Image Animator n'offre pas de retouche frame par frame dans l'interface. Si le résultat ne convient pas, tu ajustes le prompt ou la référence et tu relances.

Si la déformation concerne une zone spécifique (une main, un fond), ça vaut le coup de retravailler l'image source dans Dzine's image editor (ou Photoshop) pour simplifier cette zone, puis de relancer.

## Cas d'usage réels

**Portrait de personnage pour une séquence titre.** Tu as un personnage généré pour un court métrage IA. Plutôt qu'un titre sur fond statique, l'Image Animator te donne un plan vivant en quelques minutes. Pas besoin de passer par un outil de génération vidéo complet si c'est juste une image qui doit respirer.

**Illustration éditoriale animée.** Pour des contenus destinés aux réseaux sociaux, une image qui bouge (même légèrement) retient plus longtemps l'attention qu'une image fixe. L'Image Animator transforme une illustration en loop court, utile pour les stories ou les posts.

**Test de cohérence de personnage.** Avant de lancer une génération vidéo complète, animer ton image canon de personnage est un bon test de robustesse. Si l'Image Animator réussit à le faire bouger sans que les traits changent, c'est que l'image source est assez solide pour la suite du pipeline.

## Ce que Dzine Image Animator ne remplace pas

L'Image Animator est un outil de animation d'image existante. Si tu veux générer une scène entière en vidéo depuis un texte, tu regardes le générateur vidéo texte-to-video de Dzine ou des outils comme Kling, WAN ou Veo.

Si tu as besoin de cohérence sur de nombreux plans d'un même personnage sur une longue production, l'approche pipeline complète dans [l'avis complet sur Dzine IA](/blog/dzine-ia) est le bon point de départ. L'Image Animator est un outil mono-plan, pas un outil de série.

Et pour les transitions fluides entre deux images fixes, la technique de [transformation d'image IA en vidéo fluide](/blog/comment-transformer-image-ia-video-fluide-credible) couvre les approches au niveau technique, sans être limité à un seul outil.

## Crédits et tarifs

Dzine utilise un système de crédits. Les générations via l'Image Animator consomment des crédits proportionnellement à la durée et à la résolution. Dzine propose une offre gratuite avec des crédits limités : suffisant pour tester, pas pour une production régulière.

Pour un usage professionnel régulier, les abonnements payants Dzine sont calculés par nombre de crédits mensuels. Les tarifs exacts sont sur dzine.ai et changent périodiquement. Vérifie toujours la page officielle avant de t'engager.

## FAQ

**Quelle différence entre Dzine Image Animator et le générateur vidéo texte-to-video ?**
L'Image Animator prend une image existante et l'anime. Le générateur vidéo crée une vidéo depuis un prompt texte sans image de départ. Si tu veux contrôler exactement à quoi ressemble ton sujet, l'Image Animator est le bon choix. Si tu pars de zéro, le text-to-video est plus flexible.

**Quel format d'image fonctionne le mieux avec Dzine Image Animator ?**
PNG à haute résolution donne généralement les meilleurs résultats. JPEG fonctionne aussi, mais avec une compression élevée (artifacts JPEG visibles), la qualité d'animation souffre. Visez minimum 1024x1024 pixels.

**Peut-on animer plusieurs personnages dans la même image ?**
Oui, mais c'est plus difficile à contrôler. Avec deux personnages ou plus, le modèle doit décider lequel bouge, dans quel sens. Un prompt très précis sur quel sujet doit bouger aide, mais les résultats sont moins prévisibles que sur un personnage unique.

**Combien de temps prend une génération ?**
Sur un clip de 5 secondes en 1080p, comptez entre 1 et 3 minutes selon la charge des serveurs. Les tests courts en 720p sont plus rapides. Rien de comparable à une génération de film complet.

**Peut-on utiliser Dzine Image Animator pour des images de produits ?**
Oui, avec de bons résultats sur des produits simples. Animer une bouteille avec une légère rotation, un produit cosmétique avec une mise en lumière dynamique. Les limites sont les mêmes : éviter les compositions trop complexes ou les reflets très élaborés.

**Dzine Image Animator est-il adapté au portrait avec mains visibles ?**
Les mains restent le point faible de l'IA vidéo en général, y compris ici. Si les mains sont au premier plan ou dans une position complexe, le résultat peut présenter des déformations. La solution pratique : si tu peux éviter d'inclure les mains dans le cadrage source, le résultat sera plus propre.

**Quel type de mouvement fonctionne le mieux en mode prompt texte ?**
Les mouvements subtils et directionnels : rotation de tête lente, mouvement de caméra doux, respiration, vent sur les cheveux. Les mouvements amples ou complexes (sauter, courir, gestes larges des bras) fonctionnent mieux avec une vidéo de référence plutôt qu'un prompt texte.

**Peut-on combiner Dzine Image Animator avec d'autres outils ?**
Absolument. Un workflow typique : générer l'image source dans Midjourney ou Flux pour la qualité maximale, l'animer dans Dzine Image Animator, puis finir en post dans DaVinci Resolve ou Premiere pour l'audio et la colorimétrie. L'Image Animator n'a pas besoin d'être le seul outil de la chaîne.
