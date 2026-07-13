---
title: "Ronces : les coulisses de mon court-métrage IA"
date: "2026-07-13"
category: "guides"
excerpt: "Comment j'ai fait Ronces, un court-métrage entièrement généré par IA. Les outils, les décisions, les erreurs que j'aurais pu éviter, et ce que ça m'a appris."
thumbnail: "/images/blog/ronces-coulisses-court-film-ia/hero.webp"
metaTitle: "Ronces : coulisses du court-métrage IA de Frank Houbre"
metaDescription: "Découvrez les coulisses de Ronces, court-métrage IA de Frank Houbre : outils, erreurs, méthode et leçons pour vos propres projets cinéma IA."
tags: ["court-métrage ia", "ronces film ia", "coulisses production", "cinéma ia", "frank houbre"]
author: "Frank Houbre"
readingTime: 10
published: true
---

# Ronces : les coulisses de mon court-métrage IA

Les coulisses d'un projet, c'est souvent ce qu'on ne montre pas. On publie le rendu final. On présente une version propre de la méthode. On tait les impasses, les nuits à relancer des générations ratées, les décisions arbitraires qui auraient pu être meilleures.

Ronces est mon court-métrage IA. Pas une démo de pipeline. Pas un test technique. Un film avec une histoire, un ton, une intention. Et comme tout projet qui cherche quelque chose de précis, il a demandé des choix que je n'anticipais pas au départ.

Voici ce qui s'est vraiment passé.

## Pourquoi Ronces

L'idée vient d'une image. Une vieille maison avec des buissons épineux qui ont repris leurs droits sur une terrasse dallée. Je n'avais pas de scénario. J'avais une sensation : l'absence, quelque chose qui a appartenu à quelqu'un et qui s'est refermé sur lui-même. Ce genre d'image qui reste.

J'ai commencé sans être sûr d'aller au bout. C'est souvent comme ça que naissent les projets honnêtes. Si vous avez trop de certitude au départ sur ce que vous allez faire, vous suivez un plan plutôt qu'un film.

Le titre Ronces est venu tôt. Il concentre tout : végétal, défensif, légèrement douloureux, naturel. Les ronces sont belles en photo et désagréables au toucher. Cette tension, c'est le film.

## Le pipeline : ce que j'ai utilisé et pourquoi

Je ne vais pas faire une liste d'outils pour que vous sachiez lesquels j'ai utilisés. Je vais expliquer les choix que j'ai faits et pourquoi.

**Pour les images fixes de pré-production.** J'ai commencé par créer une bible visuelle avec Midjourney, pas pour générer les plans finaux, mais pour fixer le ton. L'objectif : sortir une palette visuelle claire que je pourrais donner à un prompting vidéo cohérent ensuite. Lumière hivernale basse, béton mouillé, végétation dense qui obstrue les ouvertures.

Le problème que j'ai rencontré : Midjourney tend vers le beau. Je voulais du dur, pas du mélancolique carte postale. J'ai dû travailler sur des prompts négatifs agressifs et itérer plus que prévu pour sortir du registre esthétisant.

**Pour la génération vidéo.** Le gros morceau. J'ai testé plusieurs moteurs. Kling 3.0 a donné les mouvements les plus convaincants sur les plans larges de végétation, particulièrement sur les plans où les branches bougent dans le vent. La physique des plantes dans Kling à ce moment-là était nettement meilleure que sur les concurrents sur ce type de sujet.

Pour les plans intérieurs avec architecture figée, WAN d'Alibaba m'a donné plus de contrôle sur la stabilité de l'image. Moins de dérive de texture.

Je n'ai pas utilisé un seul outil sur tout le film. C'est une leçon que j'avais apprise sur des projets précédents : chaque moteur a des zones de force. Choisir l'outil par plan, pas par habitude.

**Pour le son.** Le son a été composé séparément avec ElevenLabs Music pour les nappes atmosphériques, et des sons d'ambiance traités manuellement. Je voulais éviter la musique "cinématique IA" qui colle à tout. Le silence travaille dans Ronces. Les sons de végétation, le vent, quelques craquements.

## Les décisions qui ont compté

**Choisir de ne pas montrer de personnage.** Ronces est un film sans personnage visible. C'était une décision narrative, mais aussi une décision pratique. En 2026, les corps humains en vidéo IA restent fragiles sur les gestes lents et les mains. Plutôt que de passer du temps à corriger des artefacts corporels, j'ai décidé tôt de construire une narration par l'absence. L'habitant est suggéré par les objets, les traces, les angles de vue.

Ce n'est pas du contournement. C'est de la mise en scène. On cadre ce qu'on ne peut pas filmer pour que l'imagination complète. Le cinéma classique fait ça depuis toujours.

**Travailler sur la durée courte.** Ronces dure moins de deux minutes. J'aurais pu tirer ça vers quatre ou cinq. J'ai délibérément resserré. Une durée courte avec une intention claire est toujours supérieure à une durée longue qui s'étire. Le montage a éliminé des plans que j'aimais bien parce qu'ils ralentissaient le rythme.

C'est peut-être la leçon la plus importante du film : l'IA génère facilement de la matière. Le vrai travail est de couper ce qui dilue.

**Maintenir la cohérence des tons du béton.** Le décor principal change d'une génération à l'autre. La surface du béton, l'angle de lumière, la densité des ombres : tout peut dériver entre deux plans d'un même espace. J'ai passé du temps à créer des images de référence très précises avec des descriptions de texture que je réinjectais dans chaque prompt vidéo.

La technique concrète : j'ai gardé une image de référence par décor dans un fichier texte avec sa description de lumière, de texture et d'angle de caméra. Avant chaque génération, je relisais cette fiche.

## Ce qui a mal tourné

**La première semaine.** J'ai perdu beaucoup de temps à partir dans trop de directions visuelles. J'avais des plans gothiques, des plans presque documentaires, des plans très stylisés. Rien ne formait un ensemble cohérent. Ce n'est pas un problème d'outil, c'est un problème de brief insuffisant.

La solution : j'ai tout arrêté et j'ai écrit un document d'une page appelé "Qu'est-ce que Ronces ?". Pas un synopsis. Une description sensorielle : quelle lumière, quelle sensation dans l'air, quel rythme, quel niveau de détail dans les textures, quelle couleur est interdite dans ce film. Ça m'a pris deux heures. Ça a économisé trois semaines.

**Les transitions.** Le raccord entre deux plans générés par des moteurs différents peut trahir immédiatement le changement de source. Les textures ne matshent pas. La chaleur de la lumière est différente. J'ai résolu ça principalement par des coupes sèches sur des sons d'ambiance, et par le recours à des plans neutres de végétation dense qui servent de respiration entre les espaces.

**Un plan que j'ai abandonné.** Il y avait un plan prévu avec de l'eau qui courait le long d'une pierre. L'eau en vidéo IA reste un sujet compliqué sur des textures de pierre. Après une dizaine de générations ratées, j'ai choisi de couper le plan du montage. Ce n'est pas une défaite. C'est de la réalisation : on écrit parfois pour la contrainte, pas malgré elle.

## Ce que le film m'a appris sur la mise en scène IA

Ronces m'a confirmé une chose que j'enseigne depuis le début : la mise en scène IA, c'est d'abord une décision humaine sur ce qu'on veut voir.

L'IA exécute. Elle le fait avec une efficacité impressionnante sur certains types de plans. Mais la décision de cadrer, de couper, de choisir entre deux prises, de réorganiser l'ordre des scènes, de décider qu'un plan est trop long : ça reste une décision de réalisateur.

Ce que j'ai développé sur ce projet, c'est une méthode que j'appelle "diriger avant de générer". Avant de lancer une génération, je me pose trois questions :

- Qu'est-ce que le spectateur doit ressentir dans ce plan ?
- Quelle est la position de caméra qui crée cette sensation ?
- Quel est l'élément dans le cadre qui porte le sens ?

Ces trois décisions faites avant la génération changent radicalement la qualité des outputs. Ce n'est pas de la magie. C'est du brief précis.

> 💡 **Le cut de Frank :** La question que je me pose toujours avant d'appuyer sur "Generate" : est-ce que je saurais décrire ce plan à un directeur de la photographie ? Si la réponse est non, le prompt n'est pas assez précis. L'IA ne devine pas vos intentions. Elle exécute votre description.

## Où voir Ronces

Ronces a été présenté en avant-première. Pour les projections et les actualités autour du projet, la page [/presse](/presse) est à jour. Le film est aussi disponible sur la chaîne YouTube Business Dynamite avec des commentaires sur les choix de mise en scène.

Si vous voulez comprendre l'architecture technique plus large d'un projet de court-métrage IA, l'article [Créer un court-métrage 100 % IA sans caméra ni acteurs](/blog/creer-court-metrage-100-ia-sans-camera-acteurs) détaille la structure générale que j'applique sur tous mes projets.

## Ce que vous pouvez réutiliser

Pas la peine de reproduire exactement ce que j'ai fait. Voici les éléments de méthode qui sont transférables à votre prochain projet :

- Écrire une "fiche sensorielle" du film avant de générer quoi que ce soit : lumière, textures interdites, rythme cible, couleur dominante.
- Choisir les outils par plan, pas par habitude. Kling sur les plans de mouvement végétal, WAN sur les plans statiques architecturaux : c'est un exemple. L'arbitrage dépend de votre projet.
- Couper tôt et brutalement. La matière IA est facile à produire en volume. La rareté vient du montage.
- Garder une fiche de référence par décor avec les paramètres de lumière et de texture. La relire avant chaque génération.
- Si un plan résiste après plusieurs générations, envisager de l'éliminer du montage. La contrainte est une instruction de mise en scène.

La prochaine étape pour moi, c'est VOIDBORN et Lost Garden. Deux projets avec des formats et des intentions différents. Je documenterai les coulisses avec le même niveau de détail.

## FAQ

**Ronces est-il un vrai court-métrage ou une démo technique ?**

C'est un vrai film, avec une structure narrative, une intention artistique, un montage délibéré. Pas une démo de pipeline. La technique est au service de l'histoire, pas l'inverse.

**Combien de temps a pris Ronces de l'idée au rendu final ?**

Plusieurs semaines de travail non linéaire. La première semaine a été perdue à manquer de brief. Une fois la fiche sensorielle établie, le rythme de production a accéléré significativement.

**Quels outils ont été utilisés sur Ronces ?**

Principalement Midjourney pour les références image, Kling pour les plans de végétation en mouvement, WAN d'Alibaba pour les plans d'architecture stables, ElevenLabs Music pour les nappes sonores. Le montage final dans DaVinci Resolve.

**Pourquoi ne pas montrer de personnage dans le film ?**

Décision narrative et pratique. Narrative : l'absence est un sujet du film. Pratique : les corps humains en vidéo IA sur des mouvements lents restent techniquement fragiles. J'ai fait de la contrainte un choix de mise en scène.

**Comment avez-vous géré la cohérence visuelle entre les plans ?**

Par des fiches de référence par décor avec des descriptions précises de lumière, texture et angle de caméra. Et par des plans de végétation dense utilisés comme transitions entre les espaces.

**Ronces a-t-il été sélectionné dans des festivals ?**

Pour les sélections et projections, consultez la page [/presse](/presse) qui est mise à jour régulièrement.

**Comment apprendre à faire ce type de projet de A à Z ?**

C'est exactement ce que j'enseigne dans AI Studios. L'accès au programme se fait via la page [/a-propos](/a-propos). Le format combine méthode, retours de projet réels et accompagnement sur les outils actuels.

**Qu'est-ce que "diriger avant de générer" veut dire concrètement ?**

C'est la pratique de répondre à trois questions avant chaque génération : quelle sensation, quelle position de caméra, quel élément porte le sens dans le cadre. Ces décisions en amont changent radicalement la qualité des outputs et réduisent le nombre de générations nécessaires.
