---
title: "Bonsai 27B : PrismML compresse un modèle 27 milliards de paramètres sur iPhone"
date: "2026-07-17"
category: "actualite"
excerpt: "PrismML a lancé Bonsai 27B le 14 juillet 2026 : un modèle multimodal de 27 milliards de paramètres compressé à 3,9 Go, qui tourne à 11 tokens par seconde sur iPhone 17 Pro. Licence Apache 2.0."
thumbnail: "/images/blog/prismml-bonsai-27b-modele-ia-iphone-juillet-2026/hero.webp"
---

# Bonsai 27B : PrismML compresse un modèle 27 milliards de paramètres sur iPhone

Les modèles qui tournent en local sur un téléphone, ça existe depuis un moment. Mais jusqu'ici, le compromis était brutal : modèle de 1 à 7 milliards de paramètres, performances limitées, pas de multimodal sérieux. Bonsai 27B change la mise.

Le 14 juillet 2026, PrismML a publié sur son site officiel et confirmé sur 9to5Mac et MarkTechPost : **Bonsai 27B tourne sur iPhone 17 Pro**. 27 milliards de paramètres, compressés à 3,9 Go de mémoire, 11 tokens par seconde sur l'appareil. Licence Apache 2.0.

Ce n'est pas une démonstration de labo. Le modèle est téléchargeable maintenant.

![PrismML Bonsai 27B modèle IA 27 milliards paramètres tournant en local sur iPhone 17 Pro à 11 tokens par seconde](/images/blog/prismml-bonsai-27b-modele-ia-iphone-juillet-2026/hero.webp)

## Ce que Bonsai 27B est (et d'où il vient)

Bonsai 27B est construit sur **Qwen3.6-27B**, le modèle d'Alibaba. PrismML n'a pas entraîné un nouveau modèle de zéro : ils ont pris un modèle existant performant et appliqué leur architecture de quantification basse précision.

La version 1-bit (binaire) tient dans 3,9 Go. La version ternaire (1,58 bits) offre un meilleur compromis performance/taille selon les cas d'usage. Les deux sont multimodales : texte et image en entrée.

Selon les benchmarks publiés par PrismML, la version 1-bit conserve **90% des performances** du modèle en précision complète sur 15 benchmarks. Ce n'est pas une approximation grossière. C'est une compression chirurgicale.

Sur iPhone 17 Pro, le modèle génère 11 tokens par seconde. Ce n'est pas rapide comme un appel API. C'est utilisable pour des tâches comme le résumé, le raisonnement sur une image ou la complétion de code localement.

## Pourquoi 27B est différent de ce qu'on avait avant

Les modèles mobiles qui existaient avant Bonsai 27B étaient dans la gamme 1B-7B. À ces tailles, les capacités de raisonnement et de compréhension visuelle restent limitées.

27 milliards de paramètres, c'est la taille des modèles qui commencent à tenir des raisonnements complexes, à générer du code non trivial, et à analyser sérieusement une image plutôt que juste la décrire.

Mettre cette puissance dans 3,9 Go, c'est l'équivalent de faire rentrer une cylindrée de voiture dans un scooter. La comparaison à "un moment DeepSeek" que certains médias ont utilisé n'est pas exagérée. DeepSeek avait montré qu'on pouvait faire du très bon travail avec beaucoup moins de compute. Bonsai 27B montre qu'on peut faire du très bon travail sans aucun serveur.

## Ce que ça veut dire concrètement pour les workflows IA

Pour les créateurs qui travaillent avec des outils cloud comme Runway, Kling ou Midjourney, l'impact immédiat est limité. Ces plateformes ne basculent pas vers du on-device du jour au lendemain.

Mais si tu travailles dans ces trois cas d'usage, Bonsai 27B mérite ton attention :

**Analyse d'image en local.** Soumettre une image de référence à un modèle 27B sans envoyer cette image sur un serveur. Utile si tu travailles avec des clients qui ont des contraintes de confidentialité sur leurs assets visuels.

**Raisonnement sur storyboard ou script.** Passer un document textuel à un modèle capable de raisonnement complexe, sans connexion internet, dans un avion ou en tournage dans un endroit sans réseau.

**Prototypage rapide.** Tester des variations de prompt en local avant d'appeler une API payante. Bonsai 27B peut jouer le rôle de pré-filtre pour éviter de gaspiller des crédits sur des pistes qui ne fonctionnent pas.

> 💡 **Le cut de Frank :** Ce qui m'intéresse là-dedans, c'est moins "tourner Bonsai sur mon téléphone" que la trajectoire que ça trace. Si un 27B tient dans 3,9 Go aujourd'hui, dans 18 mois un modèle 70B tiendra peut-être dans 8 Go avec des architectures similaires. Le compute on-device va devenir une couche sérieuse dans les workflows IA, pas juste un gadget de démo.

## L'angle Apple

Le CEO de PrismML, Babak Hassibi, a confirmé à CNBC qu'Apple et d'autres entreprises évaluent activement les modèles Bonsai sur des critères de vitesse, d'efficacité énergétique et de performance sur leurs appareils.

Ce n'est pas une annonce de partenariat. Mais ça ne se lit pas comme un hasard non plus. Apple vient justement d'obtenir l'approbation réglementaire pour Apple Intelligence en Chine avec les modèles Qwen d'Alibaba. Bonsai 27B est lui-même basé sur Qwen3.6.

La stack Alibaba s'impose progressivement comme une référence dans l'écosystème on-device. Ce n'est pas une tendance à ignorer.

## Comment télécharger et tester Bonsai 27B

Le modèle est disponible gratuitement sous licence **Apache 2.0** depuis le 14 juillet 2026. Deux sources :

- Le site officiel **prismml.com** avec les deux variantes (1-bit et ternaire)
- Hugging Face pour l'intégration dans des pipelines existants

Pour faire tourner Bonsai 27B sur Mac (Apple Silicon) ou iPhone, il faut un runtime compatible avec les formats de quantification basse précision de PrismML. L'application de démonstration n'était pas encore publiquement disponible au moment de l'annonce, mais l'équipe a indiqué travailler sur des intégrations SDK.

Si tu veux explorer la génération locale avant de te lancer dans Bonsai 27B, l'article sur la [vidéo IA en local avec ComfyUI](/blog/comfyui-guide-debutant-creer-pipeline-image-video-ia) donne un bon contexte sur ce que veut dire "faire tourner un modèle en local" dans la pratique.

Et pour comprendre pourquoi les modèles Alibaba arrivent partout en ce moment, le [guide WAN Alibaba](/blog/wan-alibaba-guide-complet) reste la meilleure entrée dans la stack technique de l'entreprise côté vidéo.

## FAQ

**Bonsai 27B, c'est quoi exactement ?**
Un modèle de langage multimodal (texte + image) de 27 milliards de paramètres, développé par PrismML à partir de Qwen3.6-27B d'Alibaba. Il est disponible en deux versions quantifiées (1-bit et 1,58-bit ternaire) qui tiennent dans 3,9 Go de mémoire, permettant de faire tourner un modèle de cette taille sur un iPhone 17 Pro ou un Mac Apple Silicon.

**Quelle performance réelle sur iPhone ?**
11 tokens par seconde sur iPhone 17 Pro selon les mesures de PrismML. La version 1-bit conserve 90% des performances du modèle en précision complète sur 15 benchmarks publiés par l'équipe. Les benchmarks complets sont disponibles sur le site PrismML.

**Est-ce vraiment gratuit ?**
Oui. Bonsai 27B est publié sous licence Apache 2.0. Pas de restriction commerciale, pas de frais d'API. Tu peux l'intégrer dans un produit ou l'utiliser dans un workflow professionnel.

**Bonsai 27B peut-il générer des images ou des vidéos ?**
Non. C'est un modèle de compréhension d'image (il analyse des images en entrée) et de génération de texte. Il ne génère pas d'images ni de vidéos. Pour ça, tu as besoin d'un modèle de génération dédié comme Flux, Kling ou Runway.

**Quels appareils sont compatibles ?**
L'iPhone 17 Pro a été validé par PrismML. Les Mac Apple Silicon (M2 et supérieur) sont également ciblés. Les iPhones plus anciens ou les appareils Android ne sont pas officiellement supportés dans l'annonce initiale, en raison des contraintes mémoire.

**Quelle différence entre la version 1-bit et la version ternaire ?**
La version 1-bit (binaire) offre la plus petite empreinte mémoire (3,9 Go). La version ternaire (1,58-bit) a une empreinte légèrement supérieure mais peut offrir de meilleures performances sur certaines tâches de raisonnement. PrismML recommande de tester les deux selon le cas d'usage.

**PrismML, c'est qui ?**
Une startup d'IA focalisée sur la quantification basse précision et l'inférence on-device. Son CEO est Babak Hassibi. L'entreprise a attiré l'attention d'Apple et d'autres acteurs selon les déclarations de son dirigeant à CNBC en juillet 2026.

**Apple va-t-il intégrer Bonsai 27B dans iOS ?**
Rien de confirmé. Les déclarations de PrismML mentionnent qu'Apple évalue leurs modèles, pas qu'un partenariat est en place. Il y a une cohérence technique avec les modèles Qwen qu'Apple vient d'approuver pour la Chine, mais ce n'est pas une intégration annoncée.
