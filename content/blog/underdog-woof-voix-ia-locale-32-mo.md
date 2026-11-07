---
title: "Underdog Woof : une voix IA de 32 Mo qui tourne en local"
date: "2026-11-07"
time: "09:40"
category: "actualite"
excerpt: "Underdog publie Woof, une synthèse vocale de 31,7 Mo qui marche sans internet. Ce qu'elle fait vraiment, sa licence non commerciale, et où elle sert dans un film IA."
thumbnail: "/images/blog/underdog-woof-voix-ia-locale-32-mo/hero.webp"
---

La start-up américaine **Underdog** a mis en ligne **Woof**, un modèle de synthèse vocale qui pèse **31,7 Mo**. Il tourne dans ton navigateur, sur ta propre machine, et continue de parler une fois le Wi-Fi coupé. Pour le montrer, Underdog a publié un petit jeu, **Underdog Escape**, où chaque voix est générée en direct sur ton ordinateur. [TechCrunch](https://techcrunch.com/2026/11/06/underdog-shows-off-a-32mb-speech-model-in-new-demo/) en a parlé le 6 novembre.

Pour un créateur de films IA, la question n'est pas « est-ce mieux qu'ElevenLabs ». C'est : est-ce qu'une voix aussi légère peut servir pendant la fabrication d'un film, sans abonnement et sans envoyer ton scénario sur un serveur ? Réponse courte : oui pour les voix de travail, non pour la voix finale. Je t'explique pourquoi.

Ce qui suit vient de la [page officielle de Woof](https://underdog.ai/woof), datée du 26 octobre 2026, de la [démo Escape](https://underdog.ai/escape) et de l'article de TechCrunch signé Ivan Mehta. Je les ai lus ce 7 novembre. Je n'ai pas testé Woof sur un vrai projet : les chiffres de qualité sont ceux d'Underdog.

![Une animatrice aux cheveux gris bouclés, casque audio sur les oreilles, monte une animatique la nuit à son bureau, sous une lampe et devant un mur couvert de storyboards, pendant qu'un chien dort sous la table](/images/blog/underdog-woof-voix-ia-locale-32-mo/hero.webp)

## Ce qu'Underdog a publié

Woof existe en deux tailles. La version **une voix** fait 31,7 Mo pour 30,7 millions de paramètres, et c'est elle qui tourne dans la page web. La version **deux voix** fait 40,6 Mo et se télécharge sur Hugging Face. Elle ne demande que Python et numpy.

![En-tête de la page officielle de Woof chez Underdog, titrée Woof speaks in 31.7 MB, datée du 26 octobre 2026, avec un champ pour taper une phrase et l'entendre](/images/blog/underdog-woof-voix-ia-locale-32-mo/woof-page.webp)

*Source : underdog.ai/woof, capture du 7 novembre 2026.*

Ce que la page annonce, point par point :

| Point | Ce que dit Underdog |
|---|---|
| Taille | 31,7 Mo (une voix), 40,6 Mo (deux voix) |
| Où ça tourne | Dans le navigateur avec WebGPU, ou en Python sur ton ordinateur |
| Hors ligne | Oui, une fois le modèle chargé |
| Vitesse | 18 fois plus rapide que le temps réel sur un seul thread de processeur |
| Licence | CC BY-NC 4.0, usage non commercial seulement |
| Langue | Toutes les démos sont en anglais, le français n'est pas mentionné |

Le point fort mis en avant, c'est la lecture des chiffres. Woof passe chaque phrase dans son propre normaliseur : un numéro de téléphone, une date, un prix ou un code sont lus comme une personne les dirait, pas comme un nombre géant. Underdog vise d'abord les assistants vocaux et les agents téléphoniques.

## Les chiffres, et d'où ils viennent

Underdog compare Woof à **Fish Audio Drama 3**, un modèle de 41,5 Go. Sur 500 phrases chargées de numéros, de dates, de prix et de codes, la version deux voix se trompe sur **1,42 %** des mots, la version une voix sur **2,06 %**, et Drama 3 sur **1,89 %**. Sur des phrases ordinaires, la version une voix tombe à 2,05 % d'erreurs.

![Tableau de la page Woof comparant Woof une voix (31,7 Mo, 30,7 millions de paramètres), Woof deux voix (40,6 Mo, 38,2 millions) et Fish Audio Drama 3 (41,5 Go, 35,9 milliards de paramètres)](/images/blog/underdog-woof-voix-ia-locale-32-mo/woof-comparaison.webp)

*Source : underdog.ai/woof, capture du 7 novembre 2026.*

Deux précautions. D'abord, c'est Underdog qui mesure, sur son propre protocole : un modèle de transcription réécrit ce qu'il entend, puis un autre modèle compte les erreurs. Personne d'indépendant n'a encore refait le test. Ensuite, un taux d'erreur mesure si les mots sont justes, pas si la voix est belle ou si elle joue bien. Pour un film, c'est le deuxième point qui compte.

Woof n'est pas le premier modèle d'Underdog. TechCrunch rappelle que la start-up a sorti quelques semaines plus tôt **Bark**, un modèle de transcription de 167 Mo, puis un modèle de 27 milliards de paramètres qui tourne sur un portable. Son fondateur, Sigil Wen, veut une IA « privée », où tes données restent sur ta machine.

![Titre de l'article de TechCrunch du 6 novembre 2026, Underdog shows off a 32MB speech model in new demo, à côté d'une image de la démo avec un écran rétro qui affiche une onde verte](/images/blog/underdog-woof-voix-ia-locale-32-mo/techcrunch.webp)

*Source : TechCrunch, article d'Ivan Mehta, capture du 7 novembre 2026.*

## Où une voix de 32 Mo a sa place dans un film IA

Quand je monte une animatique, j'ai besoin de voix tout de suite, pour sentir le rythme d'une scène. Pas de la voix finale : juste de quoi entendre si le dialogue tient en huit secondes ou en quinze. C'est exactement là qu'un petit modèle local devient utile.

![Schéma en deux colonnes : oui, en local et sans diffusion payante (voix temporaires d'une animatique, lecture du découpage pendant le montage, tests de rythme de dialogue, maquettes de bande-annonce en interne) ; non, ou pas encore (film, pub ou chaîne monétisée à cause de la licence CC BY-NC, voix en français, clone de la voix d'un comédien, voix finale d'un personnage), avec les chiffres 31,7 Mo, 40,6 Mo, 30,7 millions de paramètres et 2,06 % d'erreurs](/images/blog/underdog-woof-voix-ia-locale-32-mo/schema.webp)

Ce qui marche sur le papier :

- **Les voix temporaires.** Tu fais lire tout ton découpage pendant le montage, sans payer de crédits à chaque réécriture.
- **Le scénario qui ne sort pas de ta machine.** Si tu travailles sur un projet confidentiel, rien n'est envoyé en ligne.
- **Les tests de rythme.** Tu changes une réplique, tu l'entends dans la seconde.

Ce qui bloque aujourd'hui :

- **La licence.** CC BY-NC 4.0 interdit l'usage commercial. Un court diffusé sur une chaîne monétisée, une pub pour un client ou un film vendu, c'est non. Underdog insiste lui-même : ce n'est pas une licence Apache 2.0.
- **Le français.** Toutes les démos sont en anglais. Rien ne dit que Woof parle français.
- **Le jeu.** Une ou deux voix, sans clonage annoncé. Pour diriger un personnage, avec ses émotions et son timbre, il te faut un autre outil, ou mieux, un vrai comédien.

> 💡 **Le cut de Frank :** je ne mettrais jamais Woof dans un film fini. Mais une voix gratuite, hors ligne, qui lit mes animatiques pendant que je monte, j'en rêve depuis longtemps. Si un modèle de cette taille sort en français avec une licence commerciale, ça change mon atelier.

## Ce que ça change pour toi, créateur

La tendance compte plus que le modèle. Il y a un an, une synthèse vocale correcte demandait un serveur et un abonnement. Aujourd'hui, une version anglaise tient dans 32 Mo. Les voix de travail vont devenir gratuites et locales, et ce qui restera payant, c'est la voix qui joue.

Ça renforce un conseil que je donne souvent : garde la voix finale pour un humain, ou pour un outil que tu diriges vraiment. Mon guide sur [le doublage et la direction de voix off](/blog/doublage-voix-off-cloner-diriger-voix-film) détaille comment je m'y prends. Et si tu penses cloner la voix d'un comédien, lis d'abord [mon article sur les acteurs IA et leurs droits](/blog/acteurs-ia-clones-droits-opportunites).

## Ce que je ferais cette semaine

1. **Ouvrir la page Woof** et taper trois répliques de ton prochain court en anglais. Écoute le rythme, pas la beauté du timbre.
2. **Noter le temps de chaque réplique.** C'est l'info la plus utile pour ton animatique.
3. **Relire la licence** avant toute diffusion. CC BY-NC veut dire : pas de revenus, même indirects.
4. **Garder un œil sur une version française.** Underdog n'en parle pas, c'est la vraie question à suivre.

## FAQ

### Qu'est-ce qu'Underdog Woof ?

Woof est un modèle de synthèse vocale publié par la start-up américaine Underdog, présenté sur sa page officielle le 26 octobre 2026. Il transforme un texte en voix et ne pèse que 31,7 Mo dans sa version une voix, ou 40,6 Mo dans sa version deux voix. Il tourne dans le navigateur ou sur ton ordinateur, sans serveur, et continue de fonctionner hors ligne une fois chargé. TechCrunch l'a présenté le 6 novembre à l'occasion de la démo Underdog Escape.

### Woof fonctionne-t-il vraiment sans internet ?

Oui, d'après Underdog. La version une voix se télécharge une fois dans la page web, puis elle marche avec le Wi-Fi coupé, en utilisant le processeur graphique de ta machine via WebGPU. La version deux voix se télécharge sur Hugging Face et tourne en Python avec numpy. Underdog annonce une vitesse de 18 fois le temps réel sur un seul thread de processeur. Ce que tu tapes reste sur ton ordinateur et n'est envoyé nulle part, selon la page du modèle.

### Peut-on utiliser Woof pour un film ou une vidéo monétisée ?

Non, pas avec la licence actuelle. Woof est publié sous licence CC BY-NC 4.0, qui autorise l'usage, la modification et le partage, mais pas l'usage commercial. Un film vendu, une publicité pour un client ou une chaîne qui gagne de l'argent sont donc exclus. Underdog le précise sur sa page : ce n'est pas une licence Apache 2.0. Pour un usage personnel, des tests ou des voix temporaires en interne, la licence le permet.

### Woof parle-t-il français ?

Rien ne l'indique. Toutes les démos publiées par Underdog, sur la page Woof comme dans le jeu Escape, sont en anglais, et le normaliseur de chiffres lit les nombres à l'anglaise. La page ne mentionne aucune autre langue. Si tu travailles en français, Woof ne te servira pas aujourd'hui, sauf pour des projets tournés en anglais. C'est le point à surveiller dans les prochaines versions.

### Woof est-il meilleur qu'un modèle de 41 Go ?

Sur un point précis, selon Underdog. Sur 500 phrases remplies de numéros, de dates et de codes, la version deux voix se trompe sur 1,42 % des mots, contre 1,89 % pour Fish Audio Drama 3, un modèle de 41,5 Go. La version une voix fait 2,06 %. Ces mesures viennent d'Underdog, pas d'un test indépendant, et elles jugent la justesse des mots, pas l'émotion ni le jeu. Pour la voix d'un personnage, un gros modèle ou un comédien reste devant.

### À quoi sert Woof pour un créateur de films IA ?

Surtout aux voix de travail. Tu peux faire lire ton découpage pendant le montage d'une animatique, tester le rythme d'un dialogue ou monter une maquette de bande-annonce en interne, sans payer de crédits et sans envoyer ton scénario en ligne. Pour la voix finale, la licence non commerciale, l'absence de français et l'absence de clonage le rendent inadapté aujourd'hui. Garde-le comme outil d'atelier, pas comme voix de diffusion.
