---
title: "Comment éviter les visages déformés en génération IA"
date: "2026-04-03"
category: "tutoriels"
excerpt: "Cadrage, résolution, négatifs utiles, inpainting et itérations sans tout casser."
thumbnail: "/images/blog/comment-eviter-visages-deformes-generation-ia/hero.webp"
---

Un visage déformé n’est pas une fatalité ni une preuve que « l’IA ne sait pas ». C’est un signal que le problème est mal posé : trop de contraintes contradictoires, pas assez de pixels sur la zone critique, ou un angle que le modèle tente de deviner au lieu de recevoir une instruction claire.

Quand tu travailles pour un client, un visage raté coûte plus cher qu’un décor raté. Le public pardonne parfois une chaise bizarre ; il ne pardonne presque jamais une bouche qui fond. Priorise donc la géométrie du visage dans ton ordre de contrôle qualité, même si tu dois simplifier le décor. C’est presque toujours un **mauvais compromis** entre résolution, angle, complexité du prompt, et surcharge de détail. Les modèles ont des zones sensibles : yeux, bouche, dents, oreilles, mains près du visage. Ton travail consiste à **réduire la pression** sur ces zones avant de cliquer cinquante fois au hasard.

Ce guide liste des gestes concrets : cadrage, lumière, résolution de travail, négatifs ciblés, inpainting, et moments où il vaut mieux changer d’angle que forcer.

Tu peux l’utiliser comme checklist avant chaque session : cinq cases à cocher (cadrage, lumière, résolution, négatifs, plan B angle). Si une case manque, tu acceptes volontairement un risque plus élevé sur le visage.

Le vocabulaire « qualité ultime » autour de l’image générée n’aide pas à diagnostiquer une oreille manquante. Ici, on nomme des **symptômes** et des **leviers**, pas des jugements de valeur sur ton talent.

## Pourquoi le visage casse en premier

Le cerveau humain est **spécialisé** dans la lecture des visages. Une légère asymétrie naturelle passe. Une asymétrie incohérente entre les deux yeux, une bouche qui fond dans la joue, ou une dent qui fusionne avec la lèvre déclenche le rejet immédiat. Tu es un critique sévère sans formation, parce que ton espèce a passé des millénaires à lire des regards.

Les générateurs optimisent des statistiques globales. Quand tu pousses trop de détail, trop de style, ou un angle difficile, la distribution statistique se **casse** localement sur le visage. D’où l’intérêt de simplifier le problème.

Pour stabiliser l’identité sur une série, [comment écrire un prompt pour un personnage réaliste et constant](/blog/comment-ecrire-prompt-personnage-realiste-constant) reste la référence complémentaire : moins de traits contradictoires, plus d’ancrage répétable.

## Angles et cadrage : le levier gratuit

**Face caméra** avec une lumière douce latérale est souvent plus stable que **profil complet** ou **trois quarts extrême**. Si tu n’as pas besoin du profil, ne le demande pas. Si tu en as besoin pour le récit, prévois un **chapeau**, une **mèche**, ou une **ombre** qui simplifie la zone problématique. Ce n’est pas tricher : c’est du cadrage de plateau.

Le **gros plan extrême** révèle les erreurs de peau et de bouche. Recule d’un cran de cadrage : plan américain ou poitrine. Tu gagnes en stabilité et tu perds peu en émotion si la lumière et le regard tiennent.

Pour que le style global ne sabote pas les traits, [comment contrôler le style visuel dans une génération IA](/blog/comment-controler-style-visuel-generation-ia) aide à séparer look graphique et lecture du visage.

## Résolution, guidance, et checkpoints

Travaille à une résolution où le visage a assez de pixels pour exister, mais pas tant que le modèle invente des micro structures. Si tu es trop bas, les yeux deviennent des taches. Si tu es trop haut trop tôt, la surdéfinition transforme la peau en grille.

**Guidance** trop haute fige des traits impossibles. Baisse par paliers. **Checkpoints** orientés « beauty » ou « fantasy » peuvent déformer les proportions réalistes. Teste une base plus neutre sur le même prompt court.

Le choix du moteur importe. [Flux vs SDXL : quelle IA choisir pour des images réalistes](/blog/flux-vs-sdxl-quelle-ia-choisir-images-realistes) encourage un test A B honnête sur **ton** angle et **ton** éclairage.

## Lumière et ombres du visage

Une key latérale avec ombre sous le nez lisible structure le volume. Une lumière frontale dure aplatit puis fait **fondre** les transitions sous les yeux quand le modèle cherche du contraste. Pour du naturel, [comment créer des lumières naturelles en image IA](/blog/comment-creer-lumieres-naturelles-image-ia) donne des repères de fenêtre et de fill.

Les catchlights doivent correspondre aux sources. Un reflet rectangulaire sur une scène « bougie seule » ment. Harmonise ou simplifie.

Les ombres sous les yeux trop **vectorielles** donnent un look maquillage 3D. Demande des transitions douces, une micro variation de couleur dans les cernes, pas une bande dure. Les joues ont des couches, pas des calques.

La **symétrie parfaite** du visage est rare chez les humains. Une légère asymétrie crédible peut aider à éviter le mannequin. Par contre, des yeux de tailles différentes ou une bouche décalée de façon incohérente cassent l’image : là, tu n’es plus dans l’asymétrie naturelle, tu es dans l’erreur.

## Expression et performance

**Neutre** ou **légère** expression est plus stable que rire ou cri au premier essai. Si tu veux une émotion forte, obtiens d’abord une structure faciale stable en expression calme, puis pousse l’émotion par img2img ou inpainting avec une force modérée.

Le **regard caméra** versus **regard hors champ** change la pression sur les yeux. Le hors champ peut cacher une asymétrie, mais si tu montres trop de blanc des yeux sans raison, le résultat part en caricature.

## Âge, proportions, et « morphing » involontaire

Les très jeunes et les très âgés ont des proportions que certains checkpoints rendent mal : joues trop lisses ou trop marquées, yeux trop grands. Si ton sujet est sensible, utilise des références textuelles **mesurées** : « adulte », « quarante ans environ », plutôt qu’une pile d’adjectifs.

Quand tu mélanges « enfant » et « détail extrême », tu augmentes le risque de proportions animées. Simplifie le décor et la lumière avant d’ajouter du détail sur le visage.

## Mains, cheveux, accessoires

Les **mains près du visage** multiplient les erreurs. Éloigne les mains, mets les hors champ, ou floute légèrement l’avant plan. Les **lunettes** ajoutent reflets et géométrie fine : angle de caméra où le reflet ne montre pas un décor impossible.

Les **cheveux** sur le visage demandent une transition propre. Si le modèle mélange mèche et peau, change de coiffure dans le prompt ou recadre.

## Workflow

### Étape 1 : géométrie du plan

Plan, focale, hauteur de caméra, direction du regard. Retire les adjectifs « cinematic » si la géométrie disparaît avec eux.

### Étape 2 : lumière en trois lignes

Key, fill, fond. Une phrase chacune.

### Étape 3 : génération à résolution de labo

Itère vite. Choisis la meilleure structure de visage avant beauté.

### Étape 4 : zoom yeux bouche

Rejette tôt les images où les yeux ne partagent pas la même géométrie. Vérifie aussi la **cohérence des paupières** : une paupière qui coupe l’iris de façon différente de l’autre côté est un défaut fréquent avant même que la bouche ne bouge.

### Étape 5 : inpainting ciblé

Yeux ou bouche seulement si le reste tient. Masque doux, prompt court.

### Étape 6 : upscale tardif

Quand les traits sont stables.

### Étape 7 : sélection rapide avec critères

Sur un batch, élimine d’abord tout ce qui a une **erreur de géométrie faciale**, même si la lumière est belle. Ensuite seulement compare l’esthétique. Sinon tu retombes sur une image séduisante mais fausse que tu essaieras de sauver pendant une heure.

### Étape 8 : plan B angle

Si trois itérations honnêtes échouent sur un profil, change l’angle ou le storytelling : montrer le personnage dans un miroir, derrière une vitre, en silhouette. Le récit peut porter l’absence de profil parfait.

```text
50mm eye-level medium close-up, single soft window key camera left.
Adult face, relaxed expression, eyes open toward lens, natural asymmetry.
Natural skin texture, subtle pores, no beauty retouch.
Negative: deformed eyes, melted mouth, fused teeth, extra fingers near face, plastic skin, watermark, text.
```

```text
35mm medium shot, subject turned 30 degrees, hat brim shadows upper eyes slightly (stylized but stable).
Soft fill from opposite side, low contrast shadows on cheeks.
Negative: profile collapse, duplicated ears, warped jaw, cartoon features.
```

## Négatifs utiles

Cible ce que **ton** modèle produit souvent : yeux de tailles différentes, bouche trop basse, dents fusionnées. Évite une liste de trente négatifs qui se contredisent.

Quand tu ajoutes « perfect face » ou « symmetrical face » comme positif, tu peux paradoxalement forcer une **sur régularisation** qui ressemble à une poupée. Préfère des formulations physiques : deux yeux ouverts, bouche fermée, lèvres humides naturelles, paupières relaxed.

## Sommeil, fatigue visuelle, et relecture

Après trente minutes sur des visages, tu acceptes des erreurs que tu verrais en dix secondes le matin. Fais une pause ou change de tâche. Le contrôle qualité visage est **fatigant** ; ce n’est pas de la procrastination que de dormir sur une sélection.

![Repère de workflow, lumière et texture pour caler ton œil.](workflow-1.webp)

## Références, contrôle, et limites des outils

Si ton pipeline permet une **image de référence** pour l’identité, garde la stable et bien cadrée. Si la référence est floue ou de profil alors que tu génères face, tu mélanges des signaux. Documente le poids de la référence : trop fort fige parfois des défauts de la source, trop faible ne tient pas l’identité.

Les outils de pose peuvent aider, mais une pose extrême sur un modèle statique peut **forcer** des torsions faciales impossibles. Préfère des poses sobres pour les premiers essais.

## Cas difficiles : foule, miroir, écran

**Foule.** Plus il y a de visages, plus la probabilité d’erreur monte. Réduis le nombre de visages nets, éloigne la foule, ou floute les arrière plans.

**Miroir.** Le reflet doit correspondre au sujet. Si tu n’as pas besoin du miroir, retire le. Si tu en as besoin, simplifie l’angle pour que le reflet montre moins de géométrie.

**Écrans et téléphones** devant le visage : surfaces réfléchissantes et texte illisible. Souvent plus simple de les retirer du prompt.

## Post léger

Tu peux corriger une légère asymétrie des sclères ou une micro ombre sous une paupière en retouche locale. Tu ne sauveras pas une mâchoire liquide par du sharp. **Sépare** les problèmes de géométrie des problèmes de grade couleur.

![Second repère, profondeur et grain, avant passage vidéo ou post.](workflow-2.webp)

### Table de diagnostic visage

| Défaut | Cause fréquente | Premier levier |
| --- | --- | --- |
| Yeux différents | gros plan + CFG haut | recule, baisse guidance |
| Bouche fondue | key frontale dure | key latérale |
| Dents en fusion | sourire large demandé | bouche presque fermée |
| Oreille manquante | profil extrême | trois quarts modéré |
| Main sur joue | contact peau peau | éloigne la main |

> Un visage crédible tient souvent par un cadrage plus sage et une lumière plus claire, pas par vingt adjectifs.

Si tu livres une série d’images pour une campagne, garde une **référence visage** interne : une capture du personnage validé. Chaque nouvelle image se compare à cette référence avant validation. Sinon tu obtiens « le même personnage » avec cinq mâchoires différentes à la fin de la semaine.

## Éthique courte : ressemblance et stéréotypes

Évite les prompts qui ciblent des personnes réelles par nom pour obtenir une copie. Évite aussi les chaînes de stéréotypes « ethniques » réducteurs : décris la lumière sur la peau, la coiffure, les vêtements, le contexte, sans transformer l’identité en liste de clichés. Ce n’est pas seulement une question morale : les clichés produisent souvent des visages **génériques** et instables parce que le modèle mélange des motifs contradictoires.

## Trench warfare

**Changer de seed en boucle sans changer le prompt.** Tu tires à la roulette.

**Demander « hyper realistic » sans géométrie.** Le modèle compense par du plastique.

**Profil + sourire large + mains + lunettes** au premier essai. Tu empiles les risques.

**Sharp global sur une bouche déjà fragile.** Tu cristallises l’erreur.

**Croire qu’un upscaler « répare » une mâchoire liquide.** L’upscale extrapole ; il ne reconstruit pas une anatomie cohérente.

La vallée de l’[étrange](nf:https://en.wikipedia.org/wiki/Uncanny_valley) décrit ce rejet quand une figure humaine est presque convaincante mais pas tout à fait. En génération, tu la traverses souvent quand les traits sont presque bons mais les micro incohérences s’accumulent. Réduis une couche de complexité à la fois pour revenir sur le rivage du « presque vrai mais stable ».

Quand tu montres une image à un non initié, observe **où** il regarde en premier. Si ce n’est pas le regard du personnage alors que l’histoire le demande, ton cadrage ou ton contraste guide mal l’attention, et les défauts faciaux deviennent secondaires mais réels.

## Frequently Asked Questions (FAQ)

**Je dois toujours du face caméra ?**

Non, mais c’est plus stable pour commencer. Introduis les angles difficiles quand la base tient. Si ton histoire exige un profil, prévois du temps supplémentaire ou un plan de secours stylistique.

**L’inpainting détruit la lumière : pourquoi ?**

Force trop haute ou masque trop large. Réduis les deux. Copie la partie du prompt qui décrit la key dans le prompt d’inpainting pour ré ancrer la lumière.

**Les fixeurs externes ?**

Utiles en post ciblé. Ils ne remplacent pas un mauvais cadrage. Utilise les comme dernier kilomètre, pas comme première ligne.

**Pourquoi les yeux « brillent » trop ?**

Catchlights durs et saturation élevée sur le blanc. Adoucis localement. Vérifie aussi si le modèle ajoute un contour noir trop marqué autour de l’iris : c’est un signal fréquent de faux regard.

**Les dents ?**

Souvent : demander moins de sourire, ou bouche presque fermée, ou ombre sur les dents. Évite les rangées complètes visibles en très gros plan au début.

**Résolution minimale pour un portrait ?**

Assez pour que chaque œil ait une structure, pas seulement une tache. Teste sur ton outil. Si tu es trop bas, monte la résolution avant d’ajouter du détail dans le prompt.

**Plusieurs visages ?**

Réduis le nombre, augmente la distance entre sujets, ou traite chaque visage en inpainting séparé si nécessaire. Sinon, accepte que le second plan soit légèrement moins parfait que le premier.

**La vidéo après ?**

Fige le visage en image pilote stable, mouvement modeste, amplitude basse. Si le visage pulse, reviens à l’image fixe : la vidéo ne corrige pas une géométrie déjà fausse. Pour du dialogue, préfère des plans courts et des réactions plutôt qu’un seul long plan qui expose les micro dérives.
