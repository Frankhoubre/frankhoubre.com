---
title: "Comment cadrer une image IA comme un pro du cinéma"
date: "2026-04-11"
category: "tutoriels"
excerpt: "Méthodes concrètes de cadrage pour donner à tes images IA une lecture visuelle claire et cinématographique."
thumbnail: "/images/blog/comment-cadrer-image-ia-comme-pro-cinema/hero.webp"
---
Tu as peut-être déjà vécu ça. Tu génères une image qui te semble impressionnante. Puis tu la montres à quelqu’un et la réaction est froide, "oui, c’est joli, mais je ne comprends pas ce que je dois regarder".

Le cadrage, c’est exactement ça, dire au spectateur où regarder, dans quel ordre, et pourquoi.  
Sans ce pilotage, même une image techniquement propre devient confuse.

![Hero image, cadrage cinematographique.](/images/blog/comment-cadrer-image-ia-comme-pro-cinema/hero.webp)


Dans ce masterclass, tu vas apprendre une méthode de cadrage pensée pour la génération locale, Flux, SDXL, ComfyUI, avec des décisions claires, des réglages concrets, et surtout une logique de récit.

## Hook, la vraie frustration débutant

Tu passes 3 heures à générer des portraits.  
Tu en gardes 12.  
Aucune ne s’enchaîne bien.

Pourquoi, parce que ton cadre n’a pas d’intention reproductible. Un plan serré sans logique de regard, puis un plan large avec horizon différent, puis un angle impossible, et ton cerveau sent la triche.

Le public ne dit pas "l’axe est faux".  
Le public dit "ça fait fake".

## Core concepts, les 8 bases qui changent tout

### 1) Sujet principal unique

Un plan, une priorité. Si l’œil hésite entre trois zones fortes, ton cadre est raté.

### 2) Ligne de force

Chaque plan doit contenir une direction dominante, diagonale, horizontale, verticale, qui pousse le regard.

### 3) Échelle utile

Large, moyen, serré ne sont pas des styles. Ce sont des fonctions narratives:
- large pour situer
- moyen pour action
- serré pour émotion

### 4) Espace de regard

Toujours laisser de l’air devant la direction du regard ou du déplacement, sauf si tu veux volontairement créer une oppression.

### 5) Horizon contrôlé

Un horizon instable involontaire donne un effet amateur immédiat. Incline uniquement si tu veux signaler un déséquilibre mental ou physique.

### 6) Profondeur en couches

Premier plan, sujet, arrière-plan.  
Trois couches minimum, sinon l’image s’écrase.

### 7) Gestion des bords

Les bords du cadre racontent autant que le centre. Un bord sale, un objet coupé sans intention, et tu perds la confiance du spectateur.

### 8) Continuité inter-plans

Le cadrage d’un plan prépare le suivant. C’est la base d’une séquence crédible.

Pour construire cette continuité dans une scène complète, enchaîne avec [comment construire une scène cinématique plan par plan](/blog/comment-construire-scene-cinematique-plan-par-plan).

## Prompt template obligatoire

```text
```

Dans `[SCENE DESCRIPTION]`, tu dois ajouter des informations de cadrage précises:
- plan type (wide, medium, close-up)
- position du sujet (left third, center low, upper third)
- direction regard
- zone de vide voulue
- rapport sujet/fond

## 3 scénarios débutants détaillés

### Scénario 1, sujet centré partout

Cas réel. Un débutant cadre tout au centre parce qu’il a peur de "rater". Sur 15 images, la narration reste plate.

Signes:
- tout semble symétrique
- pas de tension latérale
- aucune surprise visuelle

Correction:
1. Mets le sujet sur tiers gauche dans les plans d’anticipation.
2. Garde le centre pour les moments de confrontation frontale.
3. Réserve le tiers droit pour les plans de sortie ou d’isolement.

Effet: ton montage respire, la scène gagne des nuances émotionnelles.

### Scénario 2, angle spectaculaire permanent

Autre cas fréquent, tout est en low angle dramatique ou en top shot stylisé.

Signes:
- fatigue visuelle rapide
- impression clip publicitaire générique
- perte d’ancrage narratif

Correction:
1. Fixe une hauteur "neutre" de référence pour 60 pour cent des plans.
2. Utilise les angles extrêmes uniquement aux moments de rupture.
3. Vérifie que chaque angle répond à une question narrative.

### Scénario 3, bords négligés

Le centre est bon, les bords sont brouillons, mains coupées, objets parasites, lignes qui fuient.

Signes:
- image techniquement belle mais "sale"
- perception d’un manque de finition
- regards qui sortent du cadre

Correction:
1. Fais un scan des quatre bords avant validation.
2. Supprime ou recadre les objets sans fonction.
3. Renforce une ligne directrice lisible vers le sujet.

> **Pro insight**  
> Un bon cadre se juge en 2 secondes. Si l’œil ne trouve pas sa route immédiatement, tu dois simplifier.

## Workflow ultra granulaire, cadrage prêt prod

### Étape 1, écrire la mission du plan

Avant tout prompt, note une phrase:
"Ce plan doit faire sentir quoi."

Exemples:
- "isoler le personnage"
- "montrer une menace hors champ"
- "ancrer le lieu"

### Étape 2, choisir l’échelle utile

Décision rapide:
- large si tu poses la géographie
- medium si tu montres une action
- close-up si tu cherches une bascule émotionnelle

Ne mélange pas trois objectifs dans un seul cadre.

### Étape 3, poser la grille de lecture

Définis:
- point focal principal
- point de respiration secondaire
- trajectoire de regard

### Étape 4, verrouiller l’axe

Si la séquence contient dialogue ou interaction, fixe un axe principal et respecte-le pour éviter la confusion spatiale.

### Étape 5, réglages de génération locale

Repère recommandé pour débuter:

| Paramètre | Valeur de départ | Ajustement pratique |
| --- | --- | --- |
| Ratio | 16:9 | constant sur toute la scène |
| Résolution | 1536x864 | monter si besoin de recadrage |
| Steps | 30 à 42 | augmenter si détails mous |
| CFG | 5 à 7 | baisser si rendu trop rigide |
| Seed | fixe par plan | changer uniquement en variante |
| Denoise img2img | 0.28 à 0.42 | plus bas pour préserver composition |

### Étape 6, générer 3 variantes ciblées max

Pas plus:
1. version équilibrée
2. version plus tendue (moins d’espace)
3. version plus respirante (plus de vide)

Tu compares, tu décides, tu avances.

![Image contextuelle 1, schémas de cadre.](/images/blog/comment-cadrer-image-ia-comme-pro-cinema/workflow-1.webp)


### Étape 7, test de lecture rapide

Montre l’image 1 seconde à une personne.  
Demande "tu as regardé où d’abord."

Si la réponse ne correspond pas à ton intention, corrige le cadre avant de générer la suite.

### Étape 8, cohérence de séquence

Quand tu alignes les plans:
- garde une progression d’échelle
- évite les sauts de focales violents non motivés
- conserve une logique de direction de regard

### Étape 9, passe de nettoyage

Check final:
- bords propres
- horizon maîtrisé
- zone de vide assumée
- aucun élément parasite en concurrence

## Vidéo YouTube à regarder

Référence `@BusinessDynamite`:
[https://www.youtube.com/watch?v=pLDTXnovoBc](https://www.youtube.com/watch?v=pLDTXnovoBc)

Regarde surtout:
- comment le cadre guide l’attention sans effet forcé
- comment un plan simple peut porter une émotion forte
- comment la cohérence des plans augmente la crédibilité globale

Pour renforcer le travail de lumière dans ton cadre, utilise aussi [comment décrire la lumière comme un directeur photo dans un prompt](/blog/comment-decrire-lumiere-directeur-photo-prompt).

## Trench warfare massif, erreurs débutants et fixes

### 1) Centre automatique

Erreur: sujet centré par réflexe.  
Fix: centre uniquement quand tu veux une confrontation frontale.

### 2) Plan "beau" mais narrativement vide

Erreur: priorité à l’esthétique décorative.  
Fix: chaque plan doit répondre à une mission claire.

### 3) Trop d’informations dans le cadre

Erreur: surcharge d’objets et textures.  
Fix: retire tout élément qui ne sert pas l’action.

### 4) Oubli des bords

Erreur: objets coupés, mains tronquées, lignes parasites.  
Fix: scan bord à bord avant validation.

### 5) Aucune respiration

Erreur: sujet collé partout, pas d’espace négatif.  
Fix: réserve une zone de vide utile.

### 6) Variation d’angle aléatoire

Erreur: plan haut puis bas sans raison.  
Fix: angle stable, variation seulement sur bascule dramatique.

### 7) Horizon incohérent

Erreur: inclinaison involontaire.  
Fix: horizon droit sauf intention explicite.

### 8) Changement brutal de focale

Erreur: sensation de collage.  
Fix: progression logique de focales.

### 9) Cadrage identique sur toute la scène

Erreur: monotonie.  
Fix: progression large vers serré selon la montée émotionnelle.

### 10) Ignorer la direction de regard

Erreur: confusion spatiale immédiate.  
Fix: carte de regard simple avant génération.

### 11) Validation uniquement en zoom

Erreur: détails beaux mais lecture globale mauvaise.  
Fix: vérifier en zoom 100 pour cent puis vue entière.

### 12) Recadrer en post pour "sauver" un plan faible

Erreur: perte de qualité et cohérence.  
Fix: corriger à la source, dans le prompt et la composition.

## Validation en montage

![Image contextuelle 2, verification lisibilite du cadre en montage.](/images/blog/comment-cadrer-image-ia-comme-pro-cinema/workflow-2.webp)


## Cas pratique complet, pub de 30 secondes cadrée comme un film

On prend un cas simple. Une pub de boisson artisanale, ambiance fin de journée, personnage seul dans un atelier. Objectif émotionnel, faire sentir la fatigue puis le soulagement.

### Découpage de cadrage proposé

Plan 1, large d’installation, sujet sur tiers gauche, profondeur d’atelier visible.  
Plan 2, medium action, main qui ouvre la bouteille, sujet toujours tiers gauche.  
Plan 3, insert serré, gouttes et texture, centre contrôlé pour impact.  
Plan 4, close-up visage, regard vers la droite avec espace vide.  
Plan 5, medium de détente, sujet recentré légèrement.  
Plan 6, large final, sujet petit dans cadre pour effet de respiration.

Ce qui est important ici, c’est la trajectoire de cadre. On commence avec une tension latérale, on recentre sur l’instant clé, puis on rouvre l’espace.

### Tableau de contrôle plan par plan

| Plan | Position sujet | Fonction émotionnelle | Erreur fréquente | Correction |
| --- | --- | --- | --- | --- |
| 1 | tiers gauche | installer solitude | trop de décor | simplifier arrière-plan |
| 2 | tiers gauche | préparer action | mains illisibles | rapprocher caméra |
| 3 | centre | impact produit | trop d’effets | garder matière réelle |
| 4 | tiers gauche haut | intimité | regard hors axe | fixer direction regard |
| 5 | centre doux | relâchement | plat visuel | ajouter premier plan |
| 6 | sujet petit tiers | conclusion | trop dramatique | rester sobre |

### Mini protocole de validation

Avant d’exporter:
1. Regarde la scène sans son, est-ce lisible.
2. Regarde la scène en x2, l’intention reste claire.
3. Regarde la scène image par image, les bords sont propres.
4. Vérifie qu’il n’y a pas deux points focaux concurrents dans un plan.

Si une seule étape casse, tu corriges le cadrage, pas seulement l’étalonnage.

## Méthode d’entraînement sur 7 jours

Jour 1, étude de 20 frames de films, noter uniquement position sujet et espace de regard.  
Jour 2, reproduire 5 cadres en IA locale sans changer de style.  
Jour 3, faire la même scène en 3 versions, centrée, tiers gauche, tiers droit.  
Jour 4, test humain rapide avec 3 personnes.  
Jour 5, optimisation des plans faibles avec une seule variable à la fois.  
Jour 6, mini montage de 20 à 30 secondes.  
Jour 7, revue critique écrite, ce qui est lisible, ce qui est confus, ce qui sonne fake.

Ce plan est volontairement simple. C’est exactement ce qui te permet de progresser vite.

## Debug express, quand un cadre ne fonctionne pas

Tu regardes un plan et tu sens que ça ne marche pas.  
Ne touche pas à dix paramètres. Utilise ce protocole court.

### Protocole en 5 questions

1. Où l’œil regarde en premier.  
2. Est-ce la bonne zone.  
3. Le sujet a-t-il de l’air pour regarder ou bouger.  
4. Les bords racontent-ils la même histoire que le centre.  
5. Ce plan prépare-t-il vraiment le suivant.

Si la réponse "non" apparaît deux fois, le cadrage est à refaire.

### Correctifs rapides les plus efficaces

- réduire la densité du fond  
- décaler le sujet sur un tiers utile  
- ajouter un premier plan discret pour profondeur  
- réaligner horizon et lignes de force  
- supprimer l’objet parasite qui attire plus que le sujet

### Journal de progression recommandé

Après chaque session, note:
- 1 erreur de cadrage répétée
- 1 correction qui a vraiment marché
- 1 test à faire demain

Ce rituel te fait progresser plus vite qu’un nouveau preset.

## Checklist finale avant rendu client

Dernier passage, rapide, brutal:
- le plan raconte une intention en 2 secondes
- la hiérarchie visuelle est sans ambiguïté
- la direction du regard prépare le plan suivant
- les bords ne contiennent aucun bruit parasite
- l’échelle de plan sert l’émotion du moment
- la composition tient même en lecture sur mobile

Si un de ces points n’est pas validé, ce n’est pas "presque prêt". Ce n’est pas prêt.

Dernier conseil de plateau, imprime ta shotlist de cadrage et garde-la visible pendant toute la session. Quand la fatigue monte, le cerveau revient aux automatismes. Ta feuille te ramène à l’intention.

## FAQ

### Est-ce que la règle des tiers suffit pour bien cadrer

Non. C’est une base puissante, mais pas une formule magique. Tu dois aussi gérer l’échelle de plan, la direction du regard, les bords du cadre, la profondeur, et surtout la mission narrative du plan. La règle des tiers sans intention reste mécanique.

### Je peux casser les règles de cadrage

Oui, et c’est souvent nécessaire. Mais il faut les casser consciemment. Si tu casses une règle pour créer un malaise ou une rupture, c’est du langage visuel. Si tu la casses par hasard, c’est une erreur de fabrication.

### Quelle différence entre cadrage photo et cadrage de séquence

En photo isolée, l’image doit tenir seule. En séquence, chaque cadre doit préparer le suivant. C’est pour ça qu’un plan peut être "moins spectaculaire" mais beaucoup plus utile dans un montage.

### Comment savoir si je dois passer en plan serré

Quand l’enjeu devient intérieur, décision, peur, hésitation, mensonge. Si l’information est émotionnelle, rapproche-toi. Si l’information est spatiale, recule.

### Quelle est l’erreur qui fait le plus fake

Le manque de cohérence inter-plans. Pas seulement un mauvais plan, mais une série de plans sans logique de regard, d’échelle et de lumière. L’œil humain le détecte immédiatement.

### Je suis débutant, par quoi commencer dès aujourd’hui

Choisis une scène de 30 secondes. Fais 6 plans maximum. Écris la mission de chaque plan avant de générer. Garde un ratio, une charte lumière, et une progression d’échelle. Tu verras la différence dès le premier montage.

### Quel article lire ensuite

Passe sur [comment utiliser la règle des tiers en génération IA](/blog/comment-utiliser-regle-des-tiers-generation-ia) pour renforcer ta composition, puis enchaîne avec [comment penser comme un réalisateur avec l’IA](/blog/comment-penser-comme-realisateur-avec-ia) pour verrouiller l’intention globale.
