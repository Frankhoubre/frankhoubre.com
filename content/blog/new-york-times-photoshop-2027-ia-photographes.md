---
title: "Le New York Times interdit Photoshop 2027 à ses photographes"
date: "2026-11-25"
time: "09:00"
category: "actualite"
excerpt: "Le New York Times demande à ses photographes indépendants de ne pas utiliser Photoshop 2027, de peur d'une étiquette IA dans les métadonnées. Ce que ça t'apprend."
thumbnail: "/images/blog/new-york-times-photoshop-2027-ia-photographes/hero.webp"
---

Le **New York Times** demande à ses photographes indépendants de ne pas utiliser la dernière version de **Photoshop**. La raison : certaines fonctions de la version 2027 utilisent l'IA « d'une façon qui peut ne pas être visible », et peuvent laisser dans les **métadonnées** une mention indiquant que la photo est générée par IA.

C'est la première fois que je vois un grand média refuser une mise à jour pour ça. Et le problème ne vient pas de ce que les photographes font avec l'IA, mais de ce que le logiciel écrit dans le fichier sans qu'ils s'en rendent compte.

Ce qui suit vient de [l'article d'Emma Roth pour The Verge](https://www.theverge.com/ai-artificial-intelligence/1041227/the-new-york-times-warns-photographers-not-to-update-photoshop-over-ai-features), publié le 24 novembre et lu le 25 novembre 2026. Les citations du courriel sont traduites de l'anglais. Je n'ai pas vu le courriel complet, et la page de notes de version d'Adobe ne s'est pas ouverte depuis mon outil de lecture.

![Un photographe de presse d'une quarantaine d'années, à son bureau dans une petite rédaction le soir, regarde avec hésitation une fenêtre de mise à jour sur son ordinateur portable, deux boîtiers photo et un objectif à côté, des tirages de photos de rue épinglés sur un panneau de liège](/images/blog/new-york-times-photoshop-2027-ia-photographes/hero.webp)

## Ce que le Times demande

![Article de The Verge du 24 novembre 2026 : le New York Times déconseille à ses photographes de mettre Photoshop à jour à cause de fonctions IA, un courriel envoyé aux photographes indépendants dit que la dernière version utilise l'IA de façon peu visible](/images/blog/new-york-times-photoshop-2027-ia-photographes/verge.webp)

*Source : The Verge, capturé le 25 novembre 2026.*

Le courriel est signé par deux responsables photo du Times, **Meaghan Looram** et **Josh Haner**. The Verge l'a lu, et il a aussi circulé sur Threads. Il dit que l'usage de ces fonctions « peut aboutir à des métadonnées identifiant les photographies comme générées par IA ».

![Extrait de The Verge : le New York Times demande aux photographes indépendants de ne pas utiliser la nouvelle version de Photoshop, dont les fonctions utilisent l'IA de façon peu visible ; dans un courriel, Meaghan Looram et Josh Haner écrivent que ces fonctions peuvent produire des métadonnées identifiant les photos comme générées par IA](/images/blog/new-york-times-photoshop-2027-ia-photographes/email.webp)

*Source : The Verge, capturé le 25 novembre 2026.*

La consigne est précise : « Nous demandons à tous les photographes contributeurs d'éviter d'utiliser **Adobe Photoshop 2027 (version 28.0.0 et mises à jour suivantes)** lorsqu'ils travaillent pour le Times. » Un porte-parole du journal, Graham James, l'a confirmée à The Verge.

![Extrait de The Verge : Adobe a commencé en août à déployer les métadonnées C2PA dans ses applications, qui indiquent si une image est générée ou retouchée avec l'IA ; le Times veut éviter que ces étiquettes apparaissent par erreur, d'où la consigne d'éviter Photoshop 2027, version 28.0.0 et suivantes](/images/blog/new-york-times-photoshop-2027-ia-photographes/consigne.webp)

*Source : The Verge, capturé le 25 novembre 2026.*

## D'où vient le problème

Depuis août, Adobe ajoute des métadonnées **C2PA** dans ses applications. Elles indiquent si une image a été générée ou modifiée avec des fonctions d'IA. Sur le principe, c'est une bonne chose : j'en parlais déjà à propos de [l'idée d'Adobe d'étiqueter l'original plutôt que l'IA](/blog/c2pa-etiqueter-originalite-pas-ia-adobe).

Le souci, c'est qu'on ne sait plus très bien quel outil est « de l'IA ». The Verge note que même des outils anciens, comme la sélection automatique, peuvent désormais être rangés dans la famille IA. La mise à jour de novembre ajoute aussi un nouvel affichage, **AI Assisted Editor**, qui regroupe toutes les fonctions IA dans une barre d'outils, un assistant qui guide l'édition pas à pas, la retouche par prompt, de nouvelles options d'agrandissement et un recadrage IA pour d'autres formats.

Résultat : un photographe qui ajuste une sélection peut se retrouver avec une photo marquée « modifiée par IA ». Pour le Times, qui dit ne pas « retoucher ni manipuler numériquement » ses photos, hormis de légers réglages de couleur, c'est un risque direct pour la confiance des lecteurs.

The Verge précise qu'on ne sait pas encore quelles fonctions exactes sont visées, et qu'Adobe n'avait pas répondu au moment de la publication.

![Schéma en trois cartes : la consigne, pas de Photoshop 28.0.0 ni des versions suivantes pour les photographes du Times ; la raison, des fonctions qui utilisent l'IA de façon peu visible et peuvent écrire dans les métadonnées que la photo est générée par IA ; le fond, la confiance du lecteur, car le Times dit ne pas retoucher ses photos](/images/blog/new-york-times-photoshop-2027-ia-photographes/schema.webp)

## Ce que j'en pense

Je trouve la décision logique, et un peu inquiétante pour Adobe. Logique, parce qu'une étiquette IA sur une photo de presse, même posée par erreur, coûte plus cher que n'importe quel gain de temps. Inquiétante, parce que l'étiquetage devait rassurer, et il finit par faire fuir des professionnels qui ne génèrent rien.

Le vrai sujet, c'est la **lisibilité**. Un outil qui marque tes fichiers doit te dire clairement quand et pourquoi il le fait. Tant que ce n'est pas le cas, les clients exigeants préféreront rester sur une ancienne version.

## Ce que ça change pour toi

- **Sache ce que tes outils écrivent dans tes fichiers.** Ouvre les métadonnées d'un export (avec un vérificateur C2PA ou un lecteur EXIF) avant de livrer à un client sensible.
- **Lis les consignes de tes clients.** Presse, institutions, concours photo : beaucoup vont fixer des règles sur les versions et les outils autorisés.
- **Ne mets pas à jour en pleine commande.** Garde une version stable le temps d'un projet, et teste la nouvelle à côté.
- **Sépare tes usages.** Pour du reportage, édition minimale et sans fonctions génératives. Pour de la création, assume l'IA et dis-le. J'ai détaillé la frontière entre [retouche, inpainting et génération en photographie](/blog/ia-photographie-retouche-inpainting-generation).

## Ce qu'on ne sait pas

- **Les fonctions exactes** qui déclenchent l'étiquette IA dans Photoshop 2027.
- **La réponse d'Adobe**, qui n'avait pas réagi au moment de l'article de The Verge.
- **Si d'autres médias suivront**, en France comme ailleurs.

## FAQ

### Pourquoi le New York Times déconseille-t-il Photoshop 2027 ?

Parce que certaines fonctions utilisent l'IA de façon peu visible et peuvent faire apparaître dans les métadonnées que la photo est générée par IA, selon le courriel envoyé à ses photographes indépendants.

### Quelles versions de Photoshop sont concernées ?

Photoshop 2027, version 28.0.0, et toutes les mises à jour suivantes, d'après le courriel cité par The Verge.

### Qu'est-ce que les métadonnées C2PA ?

Ce sont des informations intégrées au fichier qui décrivent son origine et ses modifications, notamment l'usage de l'IA. Adobe a commencé à les déployer dans ses applications en août 2026.

### Quelles nouveautés IA apporte Photoshop 2027 ?

Un affichage AI Assisted Editor qui regroupe les fonctions IA, un assistant d'édition pas à pas, la retouche par prompt, de nouvelles options d'agrandissement et un recadrage IA pour d'autres formats, selon The Verge.

### La consigne a-t-elle été confirmée par le Times ?

Oui. Le porte-parole Graham James l'a confirmée à The Verge.

### Comment savoir si mes photos portent une étiquette IA ?

Inspecte les métadonnées de tes exports avec un vérificateur C2PA ou un lecteur EXIF avant de les livrer, surtout pour un client de presse.
