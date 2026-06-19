---
title: "Luma Ray 3.2 : guide pratique des settings et du workflow vidéo"
date: "2026-06-19"
dateModified: "2026-06-19"
category: "tutoriels"
excerpt: "Luma Ray 3.2 ajoute le contrôle image par image, le HDR natif et l'export EXR. Voici les settings concrets, les modes Speed et Quality, et quand le choisir plutôt que Kling."
thumbnail: "/images/blog/2026-06-19-luma-ray-2-guide-pratique-settings-workflow/hero.webp"
---

# Luma Ray 3.2 : guide pratique des settings et du workflow vidéo

Tu as vu les démos de Luma Ray 3.2. Tu as lancé ta première génération. Et le résultat ressemblait à une démo pré-scriptée plutôt qu'à ce que tu avais en tête.

Ce n'est pas le modèle. C'est le workflow.

Ray 3.2 est le modèle vidéo actuel de la famille Ray 3 chez Luma AI. Son intérêt n'est pas seulement la qualité du mouvement, c'est le niveau de contrôle qu'il met entre tes mains : direction image par image, HDR natif, export pensé pour la post-production pro. Mais ce contrôle ne sert à rien si tu l'utilises comme un générateur text-to-video basique.

![Workflow vidéo IA Luma Ray 3.2, direction image par image et rendu cinématographique](/images/blog/2026-06-19-luma-ray-2-guide-pratique-settings-workflow/hero.webp)

![Page d'accueil de Luma Ray 3.2 montrant le modèle de génération vidéo IA](/images/blog/2026-06-19-luma-ray-2-guide-pratique-settings-workflow/screenshot.webp)

*Capture de la page officielle Luma Ray (lumalabs.ai). Le modèle courant affiché est Ray 3.2.*

## Ce qu'est Luma Ray 3.2 et ce que ce n'est pas

Ray 3.2 fait partie de la famille Ray 3 de Luma AI. Le point qui le distingue vraiment des générateurs grand public, c'est le passage en logique de production : Luma le présente comme le premier modèle vidéo génératif à produire du vrai HDR 10, 12 et 16 bits dans le standard EXR ACES2065-1, celui qu'utilisent les chaînes de finition cinéma et publicité.

En clair : ce n'est plus juste un outil pour faire une jolie vidéo. C'est un outil dont la sortie est conçue pour entrer dans un pipeline Nuke ou Resolve sans bricolage.

Ce que ce n'est pas : une solution universelle. Comme tous les modèles vidéo IA actuels, Ray 3.2 reste plus à l'aise sur le mouvement organique et la continuité que sur l'action très rapide et chaotique. Le bon usage, c'est tout ce qui demande de la direction : un visage dans la lumière du matin, un mouvement chorégraphié précis, une scène d'intérieur avec une intention de montage claire.

## Les deux modes : Speed et Quality

Ray 3.2 propose deux modes d'inférence, et comprendre la différence évite beaucoup de frustration.

**Speed Mode** est plus rapide, pensé pour l'exploration et les revues rapides. C'est ton mode d'itération.

**Quality Mode** est le mode par défaut pour les rendus finaux. Il prend plus de temps mais c'est lui qui sort le livrable.

Détail important : selon la documentation Luma, le mode change le temps de calcul, pas le coût. Ce qui fait varier le prix, c'est surtout la durée du clip (un clip de 10 secondes coûte deux fois un clip de 5 secondes à résolution égale) et la résolution choisie.

Le workflow logique reste le même que sur n'importe quel bon outil :

1. Explorer en basse résolution et en Speed Mode pour trouver la direction.
2. Sélectionner les 2 ou 3 meilleurs candidats.
3. Refaire en Quality Mode et en résolution finale pour le rendu.

## Les settings clés

### Résolution

Ray 3.2 propose quatre résolutions : **360p (draft)**, **540p**, **720p** et **1080p**. La logique recommandée par Luma est simple : explore en basse résolution pour maîtriser les coûts, monte en 1080p seulement sur les plans validés. Le 360p draft existe précisément pour itérer sans brûler du budget.

### Durée des clips

Ray 3.2 génère des clips jusqu'à 20 secondes en 1080p. C'est plus long que la plupart des concurrents sur une seule génération. Mais comme le coût grimpe avec la durée, le réflexe production reste de tester court et de ne payer du long que sur les plans retenus.

### Contrôle image par image (keyframes)

C'est l'apport central de Ray 3.2. Tu peux placer jusqu'à **16 keyframes dans un seul clip**. Concrètement, tu choisis des images clés et le modèle gère le mouvement entre elles. Tu passes de "je décris une ambiance et j'espère" à "je pose mes temps forts et je dirige le rythme". Pour un créateur qui pense en plans et en montage, c'est le changement le plus utile.

### Réglages d'adhérence : Motion et Structure

Ray 3.2 expose deux curseurs sur une échelle de 1 à 9. **Motion** contrôle la préservation du mouvement, **Structure** celle de la disposition spatiale. 9 = adhérence maximale à la source. Tu montes pour rester fidèle, tu baisses pour laisser le modèle réinterpréter.

### Verrous de personnage

Tu peux verrouiller séparément les **visages** (identité et expression), les **corps** (silhouette et proportions), et le squelette via deux modes : **Poses** pour une adhérence stricte, **Blocking** pour une transformation plus souple. C'est ce qui permet de garder un personnage cohérent tout en changeant le reste de la scène.

### HDR et export EXR

Le HDR est **désactivé par défaut**. Tu l'actives pour le travail premium : pub auto, mode, broadcast, streaming, livraison OLED. Et l'export EXR, qui demande le HDR activé, te donne une séquence d'images en données de couleur linéaires flottantes, exactement ce qu'attend un étalonneur sous Resolve ou un compositeur sous Nuke. Si tu livres à un studio, c'est la fonctionnalité qui te fait passer pour un pro.

## Comment structurer un prompt pour Ray 3.2

Un prompt qui performe ici n'est pas un prompt Midjourney. Il faut penser **mouvement** dès le départ.

La structure qui fonctionne : `[Sujet] + [Action ou état physique] + [Environnement avec texture] + [Qualité de lumière] + [Mouvement de caméra si pertinent]`.

Pas ça : *"Beautiful woman walking in Paris, cinematic"*

Plutôt : *"Femme en robe de lin beige marche lentement sur un pavé mouillé, reflets de lampadaire sur le sol, lumière de fin de journée chaude et latérale, légère brise sur le tissu, caméra fixe légèrement en contre-plongée"*

Le premier prompt est vague sur ce qui doit bouger. Le second donne des points d'ancrage de mouvement précis : le tissu, les reflets, la lumière directionnelle.

> 💡 **Le cut de Frank :** Si le résultat est plat, le problème n'est presque jamais le modèle. C'est l'absence de texture physique dans le prompt. L'eau, le tissu, les cheveux, la vapeur, la fumée : ce sont les déclencheurs naturels de mouvement. Sans eux, tu obtiens du générique. Et maintenant que tu as les keyframes, pose des points clés au lieu d'espérer.

## Ray3 Modify : transformer une vidéo en gardant le jeu

Au-delà de la génération, la famille Ray 3 inclut **Ray3 Modify**, un modèle pensé pour les workflows hybrides autour du jeu d'acteur. Le principe : tu pars d'une vidéo source (générée ou tournée), et tu la transformes en préservant le mouvement et la performance.

Le pipeline documenté : tu exportes des frames de la source, tu peins ou génères les images voulues, et tu les rattaches comme keyframes. Le mouvement d'origine est conservé, l'habillage visuel change.

Cas d'usage concrets :

**Changement de décor.** Un plan tourné dans un bureau ordinaire transformé en intérieur haussmannien, sans toucher à la personne à l'écran.

**Changement de saison ou de lumière.** Une scène d'été adaptée en hiver, le timing et les gestes restent identiques.

**Style visuel.** Un plan réaliste converti vers un look stylisé, grain film ou palette froide, à partir d'un seul tournage.

La limite reste la même que partout : sur un mouvement source très rapide, la fidélité baisse. Sur du mouvement maîtrisé, c'est précis.

## Recadrer après coup : Reframe

Ray 3.2 améliore aussi le **Reframe**. Tu peux ajuster le ratio pour différentes plateformes, étendre le cadre, ou remplacer un arrière-plan, en post. Utile quand un même plan doit vivre en 16:9 sur YouTube et en 9:16 en story sans tout regénérer.

## Ray 3.2 vs Kling 3.0 : quand choisir quoi

Ce n'est pas une guerre de modèles. Ce sont des outils aux forces différentes.

| Critère | Ray 3.2 | Kling 3.0 |
|---|---|---|
| Contrôle image par image | Fort (jusqu'à 16 keyframes) | Limité |
| Sortie pro (HDR, EXR) | Fort (HDR natif, EXR ACES) | Partiel |
| Lip-sync et audio natif | Absent | Fort (3.0 complet) |
| Modification vidéo source | Fort (Ray3 Modify) | Fort (Omni) |
| Mode rapide d'exploration | Speed Mode + 360p draft | Turbo (480-720p) |
| Cohérence personnage sur plan long | Bonne, avec verrous | Forte |

Ray 3.2 prend le dessus quand tu veux **diriger** précisément et livrer dans un pipeline pro. Kling 3.0 reste devant dès qu'il faut de l'audio natif, du lip-sync ou une cohérence de personnage sur une séquence dialoguée longue.

Pour un court métrage IA, l'approche hybride reste souvent la plus intelligente : Ray 3.2 pour les plans dirigés et l'ambiance, Kling 3.0 pour les scènes dialoguées.

## Intégrer Ray 3.2 dans un pipeline de production

Une pipeline réaliste pour un spot de 30 secondes :

1. **Storyboard et images pilotes** (Midjourney ou Flux) : une image par plan clé, qui deviennent tes keyframes.
2. **Exploration** (Speed Mode, 360p ou 540p) : plusieurs variantes par plan. Tu rejettes vite.
3. **Rendu** (Quality Mode, 1080p, HDR si livraison premium) : les candidats retenus.
4. **Scènes dialoguées** (Kling 3.0) : les plans avec personnage parlant et audio synchronisé.
5. **Finition** (EXR vers Resolve ou Nuke) : étalonnage et raccord des looks entre sources.

Cette approche tire le meilleur de chaque modèle sans forcer l'un là où il est faible.

## Ce que Ray 3.2 ne fait pas pour toi

Quelques garde-fous qui font gagner du temps :

- L'**audio natif** n'existe pas. Si ton plan a besoin d'un dialogue synchronisé, c'est Kling ou Runway.
- L'**action très rapide** (sport, cascade, explosion) produit toujours des artefacts. Aucun modèle n'est encore vraiment bon là-dessus.
- Le **contrôle ne remplace pas la direction artistique**. 16 keyframes mal pensés donnent un mauvais plan plus vite. L'outil exécute ton intention, il ne l'invente pas.

## FAQ

**Luma Ray 3.2 est-il gratuit ?**
Luma AI propose un accès gratuit avec un quota limité. Les plans payants débloquent les résolutions hautes, le HDR, l'export EXR et l'usage sans limite de quota. Les tarifs exacts sont sur le site de Luma. À noter : le coût d'une génération dépend surtout de la durée et de la résolution, pas du mode Speed ou Quality.

**Quelle différence entre Ray 2 et Ray 3.2 ?**
Ray 3.2 est la version actuelle de la famille Ray 3. Par rapport à Ray 2, elle ajoute le contrôle image par image (jusqu'à 16 keyframes), le HDR natif, l'export EXR pour la post pro, le suivi de performance jusqu'à huit visages, et une API complète. C'est un saut de contrôle, pas seulement de qualité d'image.

**Quelle est la différence entre Luma Dream Machine et Ray 3.2 ?**
Dream Machine est la plateforme de Luma AI. Ray 3.2 est le modèle vidéo disponible dedans. Les deux termes sont souvent mélangés dans la communauté, mais techniquement Ray 3.2 est le modèle et Dream Machine l'interface.

**Ray 3.2 génère-t-il en 4K ?**
La sortie native documentée monte jusqu'à 1080p, avec quatre paliers : 360p draft, 540p, 720p, 1080p. Pour du 4K, il faut passer par un upscaling en post. La vraie nouveauté côté qualité n'est pas la résolution brute, c'est le HDR et l'export EXR pour la finition pro.

**À quoi servent les keyframes sur Ray 3.2 ?**
À diriger le rythme. Tu places jusqu'à 16 images clés dans un clip, et le modèle gère le mouvement entre elles. Au lieu de décrire une ambiance en espérant le bon timing, tu poses tes temps forts. C'est l'outil le plus utile pour qui pense en plans et en montage plutôt qu'en prompts isolés.

**Peut-on utiliser Ray 3.2 pour animer une image Midjourney ?**
Oui, et c'est un usage courant. Une image bien construite sert de point d'ancrage que le modèle anime. Avec les keyframes, tu peux même enchaîner plusieurs images pilotes dans un seul plan pour contrôler la progression. C'est plus prévisible que l'animation text-only.

**Ray 3.2 est-il meilleur que Sora ?**
OpenAI a arrêté Sora en 2026 (fermeture de l'app le 26 avril). La comparaison n'a plus d'objet. En juin 2026, les concurrents actifs côté vidéo IA sont Ray 3.2, Kling 3.0 et Runway Gen-4.

---

Pour poser les bases d'un projet vidéo IA avant même de toucher à un générateur, l'outil [storyboard PDF](/outils/generateur-storyboard-pdf) aide à visualiser la structure des plans. Et si tu veux comparer plusieurs générateurs sur un même brief, le [calculateur de budget production IA](/outils/calculateur-budget-production-ia) intègre les coûts des différents modèles.

<!-- PUBLICATION DATE: 2026-06-19 -->
