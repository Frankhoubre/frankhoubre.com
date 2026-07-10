---
title: "WAN d'Alibaba : guide complet du modèle vidéo open source"
date: "2026-07-10"
category: "guides"
excerpt: "WAN 2.7 d'Alibaba est le modèle vidéo open source le plus complet du marché : text-to-video, image-to-video, first+last frame, audio, ComfyUI. Guide pratique complet."
tags: ["WAN", "Alibaba", "vidéo IA open source", "ComfyUI", "image-to-video", "text-to-video"]
seoTitle: "WAN Alibaba : guide complet du modèle vidéo open source 2026"
seoDescription: "WAN 2.7 d'Alibaba expliqué de A à Z : installation ComfyUI, text-to-video, first+last frame, audio, benchmarks. Le guide pour créateurs IA."
slug: "wan-alibaba-guide-complet"
published: true
image: "/images/blog/wan-alibaba-guide-complet/hero.webp"
thumbnail: "/images/blog/wan-alibaba-guide-complet/hero.webp"
---

# WAN d'Alibaba : guide complet du modèle vidéo open source

WAN, c'est la famille de modèles vidéo open source développée par le Tongyi Laboratory d'Alibaba. Version après version depuis 2024, elle s'est imposée comme la référence en dehors des solutions cloud fermées. WAN 2.7, sorti en avril 2026, va plus loin que ses prédécesseurs : une architecture Mixture-of-Experts à 27 milliards de paramètres (14B actifs par inférence), intégrée dans ComfyUI, disponible gratuitement sous licence Apache 2.0.

Ce guide couvre ce que WAN fait vraiment, comment le configurer, quand l'utiliser à la place de Kling ou Runway, et où il reste en deçà.

## Les versions de WAN : de 2.1 à 2.7

Il est utile de savoir où vous en êtes, parce que les versions ne se valent pas et les ressources disponibles varient.

**WAN 2.1** : la première version à avoir vraiment attiré l'attention des créateurs. Disponible sur GitHub (Wan-Video/Wan2.1) sous Apache 2.0. Runs en local avec 16GB VRAM minimum sur les tâches text-to-video basiques.

**WAN 2.2** : upgrade notable sur la fluidité et la cohérence temporelle. Documentation officielle disponible sur docs.comfy.org. Toujours en production pour beaucoup d'utilisateurs qui ne veulent pas migrer.

**WAN 2.7** : la version actuelle recommandée. Architecture MoE (27B params, 14B actifs). Multimodal complet : texte, image, audio, vidéo en input. Premier modèle open source à intégrer le contrôle first+last frame et l'audio-driven generation dans un seul pipeline. Disponible via les Partner Nodes de ComfyUI depuis la version 0.18.5 de ComfyUI.

## Ce que WAN 2.7 peut faire

### Text-to-video

La base. Vous décrivez une scène, WAN génère un clip. Ce qui distingue WAN 2.7 de ses prédécesseurs, c'est le support de la multi-shot narration : vous pouvez décrire une séquence narrative (plan 1 : gros plan sur les mains, plan 2 : pull-back sur l'ensemble de la scène) et le modèle essaie de maintenir une logique visuelle entre les plans.

Sur les benchmarks VBench, WAN 2.7 score 86.22% overall, contre 84.28% pour Sora 2. Ce sont des benchmarks synthétiques, mais le chiffre indique une qualité sérieuse.

### Image-to-video (first frame)

Le mode le plus utilisé en production : vous donnez une image d'entrée, WAN l'anime. La première frame définit le personnage, le décor, le style. C'est le workflow standard pour maintenir la cohérence de personnage entre des plans distincts.

Pour ça dans ComfyUI : un nœud Load Image connecté au nœud WAN en mode first-frame. Le modèle extrapole le mouvement à partir de l'image statique.

### First+last frame control

C'est la vraie nouveauté de WAN 2.7 par rapport aux concurrents. Vous définissez l'image de début ET l'image de fin. WAN génère la transition entre les deux. Personne d'autre n'a ça dans un pipeline open source intégré.

L'utilisation concrète : vous avez votre personnage en position A (assis) et en position B (debout). WAN génère le lever. Vous gardez le contrôle des deux extrémités, le mouvement entre les deux est généré. Pour du storyboard-to-animatique, c'est une révolution.

> 💡 **Le cut de Frank :** Le first+last frame est le feature qui m'a le plus changé la façon de préparer un tournage IA. Je pose mes keyframes sur le storyboard, WAN remplit les transitions. C'est le travail qu'on faisait à la main dans un logiciel d'animation, en automatique.

### Audio-driven generation

WAN 2.7 peut générer une vidéo à partir d'un fichier audio : une voix, une musique, un effet sonore. Le mouvement généré est synchronisé avec l'audio. C'est particulièrement utile pour les clips musicaux et les talkings-head.

Un vocal timbre reference peut être passé pour guider l'animation des lèvres et des expressions. C'est encore expérimental sur ce modèle (les résultats varient selon la clarité de l'audio), mais c'est intégré nativement.

### Video continuation

Vous donnez un clip court à WAN, il en génère la suite. Utile pour allonger des plans existants ou créer des transitions qui s'enchaînent naturellement avec du footage réel ou généré.

## Configuration requise

| Tâche | VRAM minimum | VRAM recommandé |
|-------|-------------|----------------|
| Text-to-video (modèle base) | 16 GB | 24 GB |
| Image-to-video first frame | 16 GB | 24 GB |
| First+last frame complet | 20 GB | 24 GB+ |
| Audio-driven full pipeline | 24 GB | 32 GB+ |
| Multi-scene 3x3 grid input | 24 GB+ | 40 GB+ |

Sur un setup 16GB VRAM (RTX 4080 ou équivalent), les modes text-to-video et first-frame fonctionnent. Pour le first+last frame complet et l'audio, comptez 24GB (RTX 4090, A6000).

Le modèle peut aussi tourner sur des services cloud type ThunderCompute ou SiliconFlow si vous n'avez pas le matériel local.

## Installation dans ComfyUI

### Prérequis

- ComfyUI version 0.18.5 minimum
- Python 3.10+
- CUDA 12.1+ pour les cartes NVIDIA
- Espace disque : comptez 40-80 GB selon les variants du modèle que vous téléchargez

### Installation du nœud WAN

Dans ComfyUI Manager (si installé), recherchez "WAN" dans la section Custom Nodes. Le nœud officiel Wan-Video est listé parmi les Partner Nodes depuis la mise à jour 0.18.5.

Si vous préférez l'installation manuelle :

```bash
cd ComfyUI/custom_nodes
git clone https://github.com/kijai/ComfyUI-WanVideoWrapper
cd ComfyUI-WanVideoWrapper
pip install -r requirements.txt
```

### Téléchargement du modèle

Les poids WAN 2.7 sont disponibles via Hugging Face. Les versions antérieures (2.1, 2.2) restent disponibles sous Apache 2.0 sur GitHub (Wan-Video/Wan2.1, Wan-Video/Wan2.2).

Pour WAN 2.7, vérifiez la page Hugging Face officielle (Tongyi Lab) pour le statut exact des poids open-source. Au moment de ce guide, les poids 2.7 sont disponibles via ComfyUI Partner Nodes avec des droits d'usage commerciaux confirmés.

Placez les fichiers du modèle dans `ComfyUI/models/wan/`.

### Premier workflow text-to-video

Dans ComfyUI, ouvrez le workflow template WAN text-to-video (disponible dans la documentation officielle docs.comfy.org). Les nœuds principaux :

- **WAN Text Encoder** : votre prompt en entrée
- **WAN Model Loader** : charge les poids
- **WAN Sampler** : paramètres de génération (steps, CFG, seed)
- **WAN Video Decoder** : convertit les latents en frames
- **Video Combine** : assemble les frames en fichier vidéo

Pour débuter, gardez les paramètres par défaut. Ajustez ensuite steps (20-30 pour la qualité), CFG (5-7 est le sweet spot pour WAN), et résolution (512x512 pour les tests rapides, 720x480 pour la production).

## Comparaison avec Kling et Runway

WAN 2.7 n'est pas meilleur que Kling 3 ou Runway Gen-4.5 sur tous les plans. Voici où chacun gagne.

**WAN gagne quand :**
- Vous voulez contrôle total (pas de serveur, pas de limites d'usage, pas de modération)
- Vous avez besoin du first+last frame en open source
- Votre budget est serré (gratuit en local, pas d'abonnement)
- Votre workflow s'intègre dans ComfyUI avec d'autres nœuds custom
- Vous avez des données sensibles à ne pas envoyer vers le cloud

**Kling gagne quand :**
- Vous voulez de la qualité maximale sur des plans réalistes complexes sans setup technique
- Votre machine n'a pas 24GB VRAM
- Vous avez besoin de résultats rapides sans configuration

**Runway gagne quand :**
- Vous faites des campagnes pub avec Agent Skills (lancé le 2 juillet 2026)
- Vous travaillez en équipe sur une plateforme avec historique de projets
- La cohérence de personnage est critique et vous utilisez les outils de réinjection Runway

L'article [WAN 2.7 : retour de terrain face à Kling et Seedance](/blog/wan-27-video-decevant-kling-seedance) couvre les limites concrètes de WAN 2.7 en conditions de production. Lisez-le en complément de ce guide.

## Les paramètres qui changent vraiment la qualité

### CFG Scale (guidance)

Entre 5 et 7 pour WAN 2.7 sur la plupart des cas. En dessous de 4, la vidéo devient floue et incohérente. Au-dessus de 8, le modèle sur-sature les contrastes et produit des artefacts de mouvement.

Pour les plans naturalistes (paysage, quotidien), restez à 5-6. Pour les plans très stylisés ou avec des instructions précises, montez à 7.

### Steps

20 steps pour les previsualisations rapides. 30-35 pour les rendus finaux. Au-delà de 40, le gain est marginal sur WAN 2.7 et le temps de génération double.

### Seed

Fixez la seed si vous voulez reproduire un résultat. Variez-la si vous explorez. Notez les seeds qui produisent des résultats intéressants : avec le first+last frame, une seed peut donner des transitions très différentes sur la même paire d'images.

### Résolution

WAN 2.7 supporte plusieurs résolutions nativement. La 720p (1280x720) est la résolution production recommandée. La 480p est utile pour les itérations rapides. La 1080p est possible mais gourmande en VRAM (24GB minimum en pratique).

## La licence : ce que vous pouvez faire commercialement

WAN 2.1 et 2.2 sont sous Apache 2.0. Usage commercial explicitement autorisé, pas d'obligation de déclarer l'utilisation d'IA dans les livrables (contrairement aux outils soumis à la conformité EU AI Act).

Pour WAN 2.7, vérifiez les conditions spécifiques sur la page GitHub officielle (Wan-Video/Wan2.7 ou Tongyi Lab sur Hugging Face). Les versions antérieures Apache 2.0 sont sûres pour l'usage commercial.

C'est l'un des rares modèles vidéo IA où vous savez exactement ce que vous pouvez faire avec les outputs. Pas de clause "nous pouvons utiliser vos outputs pour réentraîner", pas de restriction géographique, pas de limite d'usage commercial.

## Intégrer WAN dans un pipeline de production

WAN est conçu pour ComfyUI, ce qui lui donne un avantage direct sur les outils cloud fermés : vous pouvez l'enchaîner avec d'autres nœuds. Un exemple de pipeline réaliste :

1. **Génération d'image** via un nœud Flux ou SDXL dans ComfyUI
2. **Sélection de la first frame** et de la last frame depuis le même session ComfyUI
3. **Passage à WAN 2.7** en mode first+last frame
4. **Post-processing** : upscaling via Real-ESRGAN, stabilisation temporelle
5. **Export** vers la bibliothèque de clips pour le montage

Tout ça dans une session ComfyUI, sans exporter et réimporter entre outils. C'est là que WAN a une proposition unique : l'intégration pipeline, pas juste la qualité du modèle isolé.

Pour l'upscaling et la stabilisation vidéo, l'article [Upscaling vidéo : les alternatives à Topaz](/blog/upscaling-video-passer-vieux-court-metrage-4k-ia) couvre les options disponibles dans ComfyUI.

---

## FAQ sur WAN d'Alibaba

**WAN 2.7 est-il gratuit pour un usage commercial ?**
Les versions WAN 2.1 et 2.2 sont sous Apache 2.0, usage commercial autorisé sans restriction. Pour WAN 2.7, vérifiez la licence sur la page GitHub officielle au moment où vous l'utilisez. Les premiers déploiements via ComfyUI Partner Nodes incluent des droits commerciaux, mais les conditions exactes des poids 2.7 méritent d'être vérifiées directement.

**Quelle GPU faut-il pour faire tourner WAN 2.7 ?**
16 GB VRAM minimum pour les modes text-to-video et first-frame basiques. 24 GB recommandé pour le premier+dernier frame complet et les résolutions 720p. Une RTX 4090 (24 GB) couvre la grande majorité des workflows courants. Pour les pipelines audio-driven complets, comptez 32 GB ou plus.

**Quelle est la différence entre WAN 2.1, 2.2 et 2.7 ?**
WAN 2.1 est la base, bien documentée sur GitHub, robuste pour les workflows simples. WAN 2.2 améliore la fluidité et la cohérence temporelle, encore largement utilisé. WAN 2.7 introduit l'architecture MoE, le first+last frame control, l'audio-driven generation, et la grille 3x3 multi-scènes. Si vous avez le matériel, 2.7 est le choix production.

**Comment installer WAN dans ComfyUI ?**
Via ComfyUI Manager en cherchant "WAN" dans les Custom Nodes, ou manuellement en clonant le dépôt kijai/ComfyUI-WanVideoWrapper et en installant ses dépendances. Requiert ComfyUI 0.18.5+. Les modèles se placent dans ComfyUI/models/wan/.

**WAN peut-il générer des vidéos avec de l'audio synchronisé ?**
Oui, c'est une fonctionnalité native de WAN 2.7 via le mode audio-driven generation. Vous passez un fichier audio (voix, musique) et le modèle génère un clip avec des mouvements synchronisés. C'est encore en développement actif, les résultats varient selon la qualité et la clarté de l'audio source.

**WAN 2.7 est-il meilleur que Kling 3 ?**
Sur les benchmarks VBench, WAN 2.7 score légèrement au-dessus de plusieurs modèles cloud. En conditions réelles de production, la qualité dépend du cas d'usage. Kling 3 est souvent préféré pour les plans réalistes complexes sans setup. WAN 2.7 gagne sur la flexibilité, le contrôle, le coût et le first+last frame. Les deux ont leurs domaines de force.

**Peut-on utiliser WAN 2.7 sans GPU puissant ?**
Oui, via des services cloud. SiliconFlow et ThunderCompute proposent WAN 2.7 en API ou en GPU cloud loué. C'est une bonne option si vous n'avez pas 16-24 GB VRAM en local et que vous voulez tester avant d'investir.
