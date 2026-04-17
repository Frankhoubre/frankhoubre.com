---
title: "Pourquoi mes personnages changent à chaque scène"
date: "2026-04-29"
category: "tutoriels"
excerpt: "Prompt instable, seed non maîtrisée, costume synonyme, et absence de fiche : la continuité est un protocole, pas une option du modèle."
thumbnail: "/images/blog/pourquoi-personnages-changent-chaque-scene-ia/hero.webp"
---
Si le visage, la veste, ou la morphologie glissent dès que tu changes de plan, ce n’est pas « parce que l’IA est nulle ». C’est presque toujours parce que **le brief n’est pas verrouillé** : tu réécris le personnage à chaque prompt, tu permutes des synonymes, ou tu changes de modèle sans archiver la ligne gagnante.

La méthode complète est ici : [tutoriel : personnages cohérents sur plusieurs images](/blog/personnages-coherents-plusieurs-images-ia). Cette page résume les causes les plus fréquentes en tournage.

## Erreur 1 : le bloc identité n’est pas copié-collé à l’identique

Tu « reformules » entre deux scènes. Pour un humain, c’est la même intention. Pour le modèle, ce sont deux personnages proches.

**Correctif :** un paragraphe **IDENTITÉ** figé, un paragraphe **SCÈNE** variable. Jamais l’inverse.

## Erreur 2 : la seed est traitée comme magie

Sans même prompt stable, la seed ne sauve pas. Avec prompt stable, elle aide à varier légèrement, pas à inventer la continuité.

**Correctif :** journal texte : prompt, seed, modèle, date.

![Repère de workflow : fiche + bloc identité figé.](workflow-1.webp)

## Erreur 3 : le costume a trois noms différents

« Trench », « pardessus », « manteau long » : trois distributions de tokens.

**Correctif :** un seul mot matière + une couleur + un détail signature (bouton, fermeture).

## Erreur 4 : tu changes d’outil entre plan A et plan B

Même brief, moteur différent : distribution différente.

**Correctif :** verrouille la chaîne pour une séquence, documente la conversion si tu dois changer.

## Tableau : signal, cause, fix

| Signal | Cause | Fix |
| --- | --- | --- |
| nez différent | prompt instable | bloc identité |
| cheveux plus courts | synonymes | terme unique |
| âge flotte | adjectifs vagues | âge apparent fixe |
| costume change | détail non répété | signature objet |

## Vidéo YouTube à intégrer

Référence `@BusinessDynamite` :  
[https://www.youtube.com/watch?v=KJbLaSGOPPk](https://www.youtube.com/watch?v=KJbLaSGOPPk)

Pour la discipline : continuité = process, pas chance.

![Second repère : journal de seeds et versions.](workflow-2.webp)

## FAQ

### Les mains cassent aussi ?
Souvent : [comment éviter les visages déformés en génération IA](/blog/comment-eviter-visages-deformes-generation-ia) et cadrage mains.

### LoRA obligatoire ?
Non mais utile quand le visage refuse de se stabiliser.

### Vidéo et personnage ?
Même fiche, moins de changements entre keyframes.

### Dzine ou outils dédiés ?
[Dzine : personnages cohérents](/blog/dzine-ia) peut aider selon ton pipeline.

### Plusieurs personnages ?
Une fiche par tête, couleurs de vêtement contrastées.

### Style et identité ?
[comment contrôler le style visuel dans une génération IA](/blog/comment-controler-style-visuel-generation-ia).

### Scènes longues ?
[comment créer des scènes cohérentes avec plusieurs plans en IA](/blog/comment-creer-scenes-coherentes-plusieurs-plans-ia).

{/* PUBLICATION DATE: 2026-04-29 */}
