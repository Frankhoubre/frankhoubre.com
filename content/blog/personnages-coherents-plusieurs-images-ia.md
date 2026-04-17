---
title: "Tutoriel complet : comment créer des personnages cohérents sur plusieurs images"
date: "2026-04-24"
category: "tutoriels"
excerpt: "Fiche personnage, prompts stables, seeds, LoRA, et QA visuelle : une méthode de studio appliquée à l’IA image."
thumbnail: "/images/blog/personnages-coherents-plusieurs-images-ia/hero.webp"
---
La cohérence n’est pas une case à cocher du modèle. C’est une **chaîne** : description figée, variations contrôlées, rejet explicite des plans qui glissent sur le costume ou la morphologie. Ce tutoriel te donne un workflow reproductible, du premier portrait à la série de trois quarts et demi-profil.

Si tu utilises déjà un outil orienté personnages, croise avec [Dzine : l’IA crée des personnages cohérents et des films d’animation](/blog/dzine-ia) pour voir où automatiser et où garder la main.

## Étape 1 : la fiche personnage en dix lignes max

Avant le moindre prompt long, écris une fiche **non poétique** : âge apparent, silhouette, coupe, couleur de manteau, bijou identifiable, marque de fabrique (cicatrice, tatouage discret, montre). Une seule phrase sur l’émotion dominante.

Évite les synonymes changeants entre les images (« trench » puis « pardessus »). Le modèle lit des tokens, pas ton intention littéraire.

Pour la base théorique des prompts personnage, [comment écrire un prompt pour un personnage réaliste et constant](/blog/comment-ecrire-prompt-personnage-realiste-constant).

## Étape 2 : le prompt « squelette » figé

Tu construis un bloc **identité** identique d’une image à l’autre, et un bloc **scène** qui change (lumière, arrière-plan, action). Ne permute pas l’ordre au hasard entre deux générations si ton outil est sensible à la position des tokens.

Exemple de structure logique :

```text
IDENTITÉ (copier-coller strict)
SCÈNE (varier : angle, expression légère, décor)
CONTRAINTES (mains, cadrage, objectif)
```

## Étape 3 : seeds, versions, et journal

Quand une image est validée, archive **seed** (si disponible), **modèle**, **résolution**, et **prompt complet** dans un fichier texte daté. C’est ta continuity de plateau.

Si la seed « saute » entre deux sessions, ne panique pas : repars de l’image validée en **img2img** léger plutôt que de retenter zéro depuis le texte seul.

![Repère de workflow : fiche + squelette prompt + journal.](workflow-1.webp)

## Étape 4 : angles et mains

Les mains et les demi-profils sont les deux tueurs de série. Stratégie simple : **mains hors champ** sur les plans difficiles, ou props qui occupent les mains (tasse, sac).

Pour les angles, enchaîne large puis serré. Si le nez ou les oreilles glissent, corrige tôt : une série entière sur une base fausse coûte plus cher que deux regénérations au début.

Voir aussi [comment éviter les visages déformés en génération IA](/blog/comment-eviter-visages-deformes-generation-ia).

## Étape 5 : LoRA et styles

Un LoRA personnage ou costume peut verrouiller une texture. La contrepartie : rigidité et besoin de doser le poids. Documente le poids gagnant dans ton fichier texte.

Si le style global dérive, reviens à [comment contrôler le style visuel dans une génération IA](/blog/comment-controler-style-visuel-generation-ia).

## Tableau QA rapide entre deux images

| Zone | Tolérance zéro | Tolérance légère |
| --- | --- | --- |
| Coupe et couleur cheveux | incohérence | brillance différente |
| Vêtement signature | bouton manquant | pli du tissu |
| Bijou | disparu | reflet |
| Morphologie | nez qui migre | micro grain |

## Vidéo YouTube à intégrer

Référence `@BusinessDynamite` :  
[https://www.youtube.com/watch?v=KJbLaSGOPPk](https://www.youtube.com/watch?v=KJbLaSGOPPk)

Pour la discipline : une série pro se juge sur la continuité, pas sur le meilleur plan isolé.

![Second repère : grille QA visage et costume.](workflow-2.webp)

## FAQ

### Combien d’images pour verrouiller un personnage ?
Souvent trois à cinq angles utiles : face, trois quarts, profil léger, plan moyen, détail accessoire.

### La seed suffit-elle ?
Rarement seule. Elle aide, mais la fiche et le prompt stable comptent plus.

### Puis-je changer de manteau au milieu de la série ?
Oui, mais annonce-le comme **variante B** dans ton fichier, pas comme la même ligne temporelle narrative.

### img2img casse-t-il la netteté ?
Un peu. Garde un dénoise faible et une image source propre.

### Les mains doivent-elles toujours être visibles ?
Non. Mieux un bon hors champ qu’une main reconstructrice loupée.

### LoRA obligatoire ?
Non, mais utile quand le visage glisse malgré tout.

### Et pour la vidéo ensuite ?
Tu prépares des keyframes cohérents : [comment créer des scènes cohérentes avec plusieurs plans en IA](/blog/comment-creer-scenes-coherentes-plusieurs-plans-ia).

{/* PUBLICATION DATE: 2026-04-24 */}
