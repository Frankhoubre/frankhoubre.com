---
title: "B-roll IA : comment créer des plans de coupe qui tiennent vraiment"
date: "2026-06-28"
category: "tutoriels"
excerpt: "Le B-roll IA, c'est souvent l'angle oublié d'une production : on soigne le plan principal et on bâcle les inserts. Voici comment créer des plans de coupe cohérents, utiles et lisibles avec les outils actuels."
thumbnail: "/images/blog/creer-broll-ia-plans-coupe-convaincants/hero.webp"
---

# B-roll IA : comment créer des plans de coupe qui tiennent vraiment

La plupart des créateurs qui débutent avec la vidéo IA font la même erreur : ils passent 80 % de leur temps sur le plan principal et torchent les plans de coupe en cinq minutes. Résultat : un rendu A-list sur le héros, et des inserts qui cassent l'ambiance à chaque fois qu'ils apparaissent.

Le B-roll n'est pas un détail. Dans une production cinématique, c'est lui qui respire, qui oriente l'attention, qui couvre les raccords difficiles. Et avec l'IA, il a ses propres règles, ses propres pièges, et des techniques qui changent vraiment la donne.

## Qu'est-ce qu'un bon plan de coupe en vidéo IA

Avant de parler d'outils, une définition utile : un plan de coupe (ou B-roll) est tout plan qui n'est pas le plan principal de votre séquence. Il peut illustrer ce dont parle le narrateur, couvrir un raccord de montage difficile, apporter du contexte visuel, ou simplement laisser respirer une scène chargée.

En fiction cinématique IA, le B-roll typique inclut :

- **Les plans de détail :** mains, objets, textures, surfaces
- **Les plans d'ambiance :** décor, environnement, lieu sans personnage
- **Les plans de transition :** ciel, fenêtre, eau, fumée, lumière
- **Les plans d'action secondaire :** un personnage en arrière-plan, une foule floue

Ce qui rend le B-roll IA difficile, c'est la cohérence. Votre plan principal a une lumière, une palette, un rendu. Votre plan de coupe doit s'insérer dedans sans friction.

## Le piège de la liberté totale

Quand on génère un plan de coupe avec un outil comme Runway, Kling ou Luma, on a techniquement la liberté totale : n'importe quel angle, n'importe quelle texture, n'importe quel détail. C'est là que ça déraille.

La liberté sans contrainte donne des B-rolls qui semblent venir d'un autre film. La lumière ne correspond pas, la palette de couleurs tire vers un autre registre, le grain ou la net-teté détonnent avec le plan précédent.

La solution : **traiter le B-roll comme une contrainte, pas comme une opportunité créative.**

> 💡 **Le cut de Frank :** Je commence toujours par écrire une "bible de plan" en deux lignes pour chaque B-roll avant de toucher à un prompt. Lumière (direction, dureté, température), palette (trois couleurs max), grain ou netteté. Si mon plan principal est shot en lumière naturelle froide avec un fond urbain bokeh, mon insert de main ne peut pas être en lumière warm intérieure avec un fond net. C'est aussi simple que ça.

## Méthode concrète : partir du plan principal

La bonne façon de travailler, c'est de définir les paramètres visuels de votre plan A avant de générer quoi que ce soit d'autre.

### Étape 1 : extraire la signature visuelle du plan principal

Regardez votre plan A et notez :

- **Direction de la lumière :** gauche, droite, dessus, contre-jour
- **Température :** froide (bleu/gris), neutre, chaude (orange/ambre)
- **Profondeur de champ :** tout net, fond flou, avant-plan flou
- **Mouvement caméra :** statique, léger mouvement, travelling

Ces quatre paramètres doivent se retrouver dans chaque B-roll.

### Étape 2 : rédiger le prompt de B-roll avec ces contraintes

Voici un exemple concret. Plan A : personnage en intérieur, lumière naturelle venant d'une fenêtre à droite, palette froide bleue, fond légèrement flou, caméra statique.

Prompt B-roll pour un insert de mains :

```
Close-up of hands holding a worn leather notebook, 
soft natural window light from right side, 
cool blue color grading, shallow depth of field 
with background slightly out of focus, 
static camera, cinematic 24fps
```

Ce prompt n'invente rien. Il reproduit exactement les conditions du plan principal. C'est ça, la discipline du B-roll.

### Étape 3 : générer en série, pas à l'unité

Plutôt que de générer un plan à la fois, préparez une liste de 5 à 8 inserts en amont. Avec les mêmes paramètres visuels dans chaque prompt. Lancez-les en parallèle si l'outil le permet.

Avantage : vous aurez des variations à choisir au montage plutôt que de relancer des générations sous pression.

## Les outils et ce qu'ils font bien pour le B-roll

### Runway Gen-4.5 : pour les plans avec mouvement subtil

Runway excelle sur les plans d'ambiance avec du mouvement naturel : feuilles qui bougent, eau, fumée, lumière qui change. Son motion est particulièrement fluide sur les plans statiques avec du micro-mouvement, ce qui donne du vivant à des inserts qui auraient l'air gelés autrement.

**Paramètre utile :** utilisez une image de référence tirée de votre plan principal pour ancrer la palette couleur. La fonction "Image to Video" de Runway préserve mieux la cohérence visuelle qu'un prompt texte seul pour le B-roll.

### Kling 3.0 Turbo : pour les plans rapides de prévisualisation

Quand vous avez besoin de tester plusieurs angles ou compositions rapidement, Kling Turbo génère en quelques secondes. La qualité finale est en dessous de Kling 3.0 standard, mais pour valider une composition ou une idée de plan avant de lancer la génération finale, c'est imbattable en termes de rapidité.

**Usage typique :** générez 4-5 variantes d'un même insert en Turbo, sélectionnez la composition qui fonctionne, puis relancez en qualité normale avec exactement le même prompt.

### Luma Ray 2 : pour les plans de détail haute fidélité

Luma Ray 2 a une reproduction des matières particulièrement précise : cuir, tissu, métal, verre. Pour les inserts de détail où la texture compte (une montre, un objet, un tissu), Ray 2 donne des résultats que les autres modèles ont du mal à égaler en termes de fidélité des surfaces.

**Limitation :** le mouvement de Luma est moins fluide sur les plans longs. Cantonnez Ray 2 aux inserts courts (2-4 secondes) centrés sur le détail.

## Cohérence de personnage dans le B-roll

C'est le vrai défi. Si votre B-roll inclut des mains, une silhouette ou un détail corporel de votre personnage principal, vous avez un problème de cohérence.

Les outils actuels ne garantissent pas que les mains générées dans un B-roll correspondent à celles du plan principal. Voici les contournements pratiques :

**Contournement 1 : frame extrait**
Prenez une frame de votre plan principal, croppez sur la zone qui vous intéresse (les mains, le visage de profil, les épaules), et utilisez cette frame comme image de départ en mode Image to Video. Vous partez de la réalité du personnage plutôt que d'une description textuelle.

**Contournement 2 : plans non-corporels**
Structurez vos B-rolls autour d'objets, d'environnements et de détails qui n'impliquent pas de corps humains. Un objet tenu par une main générique est moins problématique qu'une main censée appartenir à un personnage spécifique. Si vous devez montrer des mains, gardez le cadrage très serré et la durée courte.

**Contournement 3 : angle de dos ou de profil flou**
Si vous avez besoin d'une silhouette de votre personnage en B-roll, utilisez un cadrage de dos ou un angle où le personnage est hors focus. Le spectateur complète mentalement la cohérence.

## Longueur et rythme des plans de coupe

Un B-roll trop long perd sa fonction. Un B-roll trop court ne s'inscrit pas visuellement.

Quelques durées pratiques par type d'insert :

| Type de plan | Durée recommandée |
|---|---|
| Détail objet (statique) | 1,5 à 2,5 secondes |
| Détail avec micro-mouvement | 2 à 4 secondes |
| Plan d'ambiance large | 3 à 6 secondes |
| Plan de transition (ciel, eau) | 2 à 4 secondes |

Ces durées s'entendent pour une vidéo au rythme normal. Pour du contenu social (reel, short), réduisez de 30 à 40 %.

## Construire une bibliothèque de B-roll réutilisables

Une pratique que peu de créateurs adoptent : construire une bibliothèque de plans de coupe génériques réutilisables.

Si vous travaillez régulièrement avec la même palette visuelle (un univers de marque, un style cinématique récurrent), générez une fois pour toutes :

- 5 à 8 plans d'ambiance dans votre palette
- 5 à 8 plans de détail neutres (mains, textures, objets génériques)
- 3 à 5 plans de transition (ciel, nature, lumière)

Ces plans peuvent servir dans plusieurs projets tant que la charte visuelle reste cohérente. Vous économisez du temps de génération sur chaque nouveau projet, et vos B-rolls ont une cohérence visuelle entre eux parce qu'ils ont été générés avec les mêmes contraintes.

## L'erreur de montage la plus fréquente

Beaucoup de créateurs insèrent leurs B-rolls sur des coupes de dialogue ou des silences. C'est correct, mais insuffisant.

Le B-roll le plus efficace est celui qui **anticipe ou confirme** quelque chose. Si votre personnage parle d'un contrat, vous montrez un contrat *avant* qu'il en parle, pas pendant. Le cerveau du spectateur fait le lien, et ça crée de l'intelligence dans le récit.

En vidéo IA, cette anticipation doit être préparée dès le storyboard. Vous savez ce que dit votre plan principal, donc vous pouvez préparer le B-roll d'anticipation avant de monter. C'est une façon de travailler qui sort du mode réactif ("je cherche un insert pour couvrir cette coupe") et passe au mode narratif.

## Workflow résumé

1. Définir la signature visuelle du plan principal en 4 paramètres
2. Écrire les prompts B-roll avec ces contraintes explicites
3. Générer en série (5-8 inserts en même temps)
4. Sélectionner et valider les compositions en Turbo si besoin
5. Relancer en qualité finale les plans sélectionnés
6. Vérifier au montage : cohérence lumière, palette, grain
7. Archiver les plans réutilisables dans une bibliothèque projet

Pour automatiser les étapes de brief et de storyboard en amont, l'outil de [génération de storyboard PDF](/outils/generateur-storyboard-pdf) peut aider à formaliser la liste de B-rolls dès la phase de préproduction, avant même de toucher à un outil de génération. Et pour construire le pipeline complet de l'idée au rendu final, l'article sur le [pipeline IA de A à Z](/blog/pipeline-ia-script-storyboard-production-de-a-z) détaille comment intégrer cette étape B-roll dans une chaîne de production cohérente.

## FAQ

**Quelle résolution utiliser pour les plans de coupe IA ?**
La même que votre plan principal. Si vous travaillez en 1080p, générez vos B-rolls en 1080p. Mélanger des résolutions source crée des problèmes à l'export et au scaling. La plupart des outils actuels (Runway, Kling, Luma) proposent la 1080p en standard, certains montent à 4K en mode premium.

**Combien de B-rolls prévoir pour une vidéo de 2 minutes ?**
Comptez environ un insert toutes les 8 à 15 secondes pour une vidéo au rythme narratif normal. Pour 2 minutes, prévoyez 8 à 15 plans de coupe. Générez-en 20 à 25 pour avoir de la matière au montage. Mieux vaut choisir que manquer.

**Peut-on réutiliser les mêmes B-rolls dans plusieurs vidéos ?**
Oui, si la charte visuelle est la même. C'est même recommandé pour créer une cohérence entre vos productions. Organisez votre bibliothèque par palette (froid/chaud/neutre) et par type (détail/ambiance/transition) pour retrouver rapidement ce dont vous avez besoin.

**Quel outil donne les meilleurs résultats pour les plans d'extérieur ?**
Runway Gen-4.5 sur les plans avec du mouvement naturel (vent, eau, lumière). Kling 3.0 sur les plans statiques avec une composition forte. Les deux outils peuvent être utilisés en complémentarité selon le type de plan.

**Comment éviter que mes B-rolls semblent venir d'une banque d'images générique ?**
Tout est dans les contraintes de prompt. Un B-roll qui semble générique est un B-roll prompté de façon générique. Chaque paramètre de votre plan A doit apparaître explicitement dans le prompt du B-roll. Et évitez les sujets trop courants dans les datasets d'entraînement : les mains sur un clavier, la vue de la ville au coucher du soleil, la tasse de café fumante. Allez plus loin dans la spécificité.

**Comment gérer la cohérence du son sur les plans de coupe ?**
Le son du B-roll suit le son du plan principal si c'est une voix off ou une musique continue. Si votre plan A a de la présence sonore (dialogue, ambiance de scène), le plan de coupe doit garder la même ambiance sonore en fond. Ne laissez pas le B-roll créer un vide sonore. En vidéo IA, le son est souvent traité séparément de la vidéo, ce qui donne plus de contrôle sur cet aspect.

**Est-ce que l'IA peut générer directement des séquences B-roll à partir de ma vidéo principale ?**
Pas encore de façon fiable. Certains outils comme Runway Aleph 2.0 permettent d'éditer une vidéo existante avec des instructions textuelles, mais générer un B-roll cohérent à partir d'une vidéo source reste expérimental. La méthode la plus fiable reste l'extraction de frames + Image to Video avec des prompts contraints.
