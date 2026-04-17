---
title: "Comment corriger un mauvais lighting en IA"
date: "2026-04-30"
category: "tutoriels"
excerpt: "Motivation des sources, hiérarchie clé fill rim, et reprompt vs post : quand sauver en génération et quand finir en étalo."
thumbnail: "/images/blog/comment-corriger-mauvais-lighting-ia/hero.webp"
---
Un mauvais lighting IA n’est pas seulement « trop sombre ». C’est souvent **sans direction** : tout est éclairé pareil, les ombres ne tombent pas où la géométrie l’exige, ou trois soleils se battent dans le cadre. Corriger, c’est d’abord **décider quelle source domine**, puis aligner prompt, regénération ciblée, ou post-traitement.

La bible vocabulaire lumière : [comment décrire la lumière comme un directeur photo dans un prompt](/blog/comment-decrire-lumiere-directeur-photo-prompt). Pour les intérieurs naturels : [comment créer des lumières naturelles en image IA](/blog/comment-creer-lumieres-naturelles-image-ia).

## Étape 1 : nommer la clé en une phrase

« Fenêtre latérale gauche, dure, fin d’après-midi » bat dix adjectifs poétiques. Le modèle a besoin d’**axe** et de **dureté**.

## Étape 2 : couper les sources fantômes

Si le prompt mentionne néon + soleil + projecteur scène + lampe pratique sans hiérarchie, tu obtiens du gris boueux.

**Correctif :** une clé, un fill, un rim optionnel. Rien de plus au début.

![Repère de workflow : schéma clé fill rim.](workflow-1.webp)

## Étape 3 : regen partielle ou img2img léger

Quand la composition est bonne mais la lumière ment, **img2img** faible avec un prompt lumière renforcé peut sauver plus vite qu’un pavé neuf.

## Étape 4 : post en dernier recours honnête

Courbe de tonalité locale, masque sur peau, masque sur fond : acceptable si tu assumes la chaîne « photo retouchée ».

Pour le contraste global sans cramer les mids, [pourquoi tes images IA manquent de contraste et comment corriger](/blog/pourquoi-images-ia-manquent-contraste-comment-corriger).

## Tableau : problème, levier prompt, levier post

| Problème | Prompt | Post |
| --- | --- | --- |
| plat global | direction + ratio clé/fill | courbe S légère |
| peau lave | motiver fill | masque peau |
| arrière-plan brûlé | exposer pour le sujet | rideau sur fond |
| incohérence multi-plans | même brief lumière | grade par séquence |

## Vidéo YouTube à intégrer

Référence `@BusinessDynamite` :  
[https://www.youtube.com/watch?v=KJbLaSGOPPk](https://www.youtube.com/watch?v=KJbLaSGOPPk)

Pour la méthode : une loi physique par plan.

![Second repère : avant après masque local.](workflow-2.webp)

## FAQ

### Je dois tout refaire ?
Pas si la géométrie est bonne : img2img ou post ciblé.

### HDR dans le prompt ?
Souvent inutile, parfois contre-productif.

### Ambiance sombre ?
[comment créer une ambiance sombre et cinématique avec l’IA](/blog/comment-creer-ambiance-sombre-cinematique-avec-ia).

### Vidéo ?
Même loi lumière entre frames : [pourquoi mes vidéos IA manquent de réalisme](/blog/pourquoi-videos-ia-manquent-de-realisme).

### Anamorphique ?
[comment simuler un objectif anamorphique en génération IA](/blog/comment-simuler-objectif-anamorphique-generation-ia).

### Cadrage mauvais aussi ?
[comment corriger une mauvaise composition visuelle](/blog/comment-corriger-mauvaise-composition-visuelle-ia).

### Effet image IA ?
[comment éviter l’effet « image générée »](/blog/comment-eviter-effet-image-generee-ia).

{/* PUBLICATION DATE: 2026-04-30 */}
