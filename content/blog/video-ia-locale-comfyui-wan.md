---
title: "Vidéo IA en local : ComfyUI et WAN sur ta machine"
date: "2026-09-08"
category: "tutoriels"
excerpt: "Ce que tu peux réellement télécharger et faire tourner chez toi avec WAN et ComfyUI : VRAM, fichiers, réglages, et le coût comparé au cloud."
thumbnail: "/images/blog/video-ia-locale-comfyui-wan/hero.webp"
metaTitle: "Vidéo IA en local : ComfyUI et WAN sur ta machine"
metaDescription: "Guide pratique pour générer de la vidéo IA en local avec WAN 2.2 et ComfyUI : versions ouvertes, VRAM, fichiers à télécharger, réglages et coût réel."
tags: ["vidéo ia locale", "wan comfyui", "wan 2.2", "comfyui", "open weights", "frank houbre"]
author: "Frank Houbre"
published: true
---

# Vidéo IA en local : ComfyUI et WAN sur ta machine

Le scénario revient toutes les semaines dans mes formations. Quelqu'un voit une démo WAN qui tourne sur les réseaux, lit qu'Alibaba publie ses modèles vidéo en open source, passe une soirée à télécharger cinquante-sept gigaoctets de fichiers, lance sa première génération dans ComfyUI et se prend un `CUDA out of memory` au bout de quarante secondes. Le lendemain, la question tombe : est-ce que ma machine est trop faible, ou est-ce que j'ai raté une étape ?

Souvent, ni l'un ni l'autre. La personne a téléchargé la mauvaise variante du modèle, et surtout elle croyait installer chez elle le moteur qu'elle avait vu en démo. Ce moteur-là n'est pas téléchargeable.

On va donc parler chaîne matérielle, et rien d'autre : ce que tu peux mettre sur ton disque en septembre 2026, ce que ça exige comme carte graphique, ce que ça pèse, et à partir de quel volume de plans le local revient moins cher que le cloud. Le modèle WAN lui-même, ses versions et sa licence, c'est [le guide complet sur WAN d'Alibaba](/blog/wan-alibaba-guide-complet) qui s'en charge. Apprendre à lire un graphe de noeuds, c'est [le guide ComfyUI pour débutants](/blog/comfyui-guide-video-createurs-debutants).

![Tour PC ouverte posée au sol dans un appartement, carte graphique à moitié insérée et ventilateur de bureau braqué sur le boîtier](/images/blog/video-ia-locale-comfyui-wan/hero.webp)

## Ce que tu peux vraiment télécharger en septembre 2026

Les poids ouverts de WAN s'arrêtent à la version 2.2. J'ai vérifié aujourd'hui, le 8 septembre 2026, sur les deux seules sources qui font foi : l'organisation officielle [Wan-AI sur Hugging Face](https://huggingface.co/Wan-AI) et l'organisation Wan-Video sur GitHub. Vingt-sept modèles publiés côté Hugging Face, triés par date de mise à jour. En haut de la liste : Wan2.2-Animate-2-14B, Wan-Dancer-14B, puis toute la famille Wan2.2. Aucune trace d'une version 2.5, 2.6, 2.7 ou 3.0 en téléchargement. Côté GitHub, six dépôts, et le plus récent est Wan-Animate-2, publié le 7 août 2026.

![Liste officielle des modèles Wan-AI sur Hugging Face, triée par date de mise à jour, sans version au-delà de Wan 2.2](/images/blog/video-ia-locale-comfyui-wan/workflow-1.webp)

*Capture de la page Wan-AI sur Hugging Face, relevée le 8 septembre 2026. Vingt-sept modèles, tri par mise à jour récente, rien au-dessus de la branche 2.2.*

Les versions plus récentes existent bel et bien, et elles sont impressionnantes. Elles vivent derrière une API. Quand tu compares ta sortie locale à une démo trouvée en ligne, tu compares donc souvent deux générations de modèles différentes, et tu conclus que ta machine est le problème. Elle ne l'est pas toujours.

Ce qui reste ouvert est loin d'être un lot de consolation. Le dépôt [Wan2.2 sur GitHub](https://github.com/Wan-Video/Wan2.2) est sous licence Apache 2.0, ce qui veut dire usage commercial et redistribution sans clause de réciprocité. La famille comprend un modèle texte vers vidéo A14B, un image vers vidéo A14B, un hybride TI2V-5B, un modèle son vers vidéo S2V-14B et la branche Animate. Le README annonce un entraînement élargi de 65,6 % d'images et 83,2 % de vidéos en plus par rapport à WAN 2.1, avec des données esthétiques étiquetées sur la lumière, la composition, le contraste et la dominante colorimétrique.

Pour un travail de fiction courte, de teaser ou de plan d'insert, la branche 2.2 fait le job. Elle demande juste qu'on la prenne pour ce qu'elle est.

> 💡 **Le cut de Frank :** avant d'accuser ton GPU, vérifie quelle version tu fais tourner. Un plan raté sur du 2.2 local face à une démo produite sur une API récente ne t'apprend rien sur ta machine. Tu as changé deux variables à la fois. Compare ton rendu local à d'autres rendus locaux.

## La question qui décide de tout : combien de VRAM

Deux sources officielles donnent deux chiffres différents pour le même modèle.

Le README de Wan2.2 dit que l'inférence mono-GPU du TI2V-5B réclame **au moins 24 Go de VRAM**, avec une RTX 4090 en exemple, et annonce une vidéo de 5 secondes en 720p en moins de 9 minutes sur ce type de carte. La [documentation ComfyUI sur Wan 2.2](https://docs.comfy.org/tutorials/video/wan/wan2_2) dit de son côté que la version 5B « devrait tenir confortablement sur 8 Go de VRAM avec l'offloading natif de ComfyUI ».

Les deux chiffres sont exacts parce qu'ils décrivent deux chemins de code. Les scripts du dépôt officiel chargent le modèle complet sur la carte. ComfyUI, lui, déplace en permanence des morceaux du modèle entre la VRAM et la RAM système pendant l'échantillonnage. Tu gagnes la capacité de lancer le rendu, tu paies en temps de calcul, et tu as besoin de RAM système en conséquence.

Traduction pratique, carte par carte :

| Ta carte | Ce qui est réaliste | Ce qui va te frustrer |
| --- | --- | --- |
| 8 à 12 Go de VRAM | TI2V-5B en 720p via ComfyUI, avec offloading et patience | Les modèles 14B en fp16 |
| 16 Go | TI2V-5B confortable, 14B en fp8 avec offloading | Le fp16 sur les 14B |
| 24 Go (RTX 4090 et équivalents) | TI2V-5B en mono-GPU comme dans le dépôt officiel, 14B en fp8 | Rien de bloquant en usage courant |
| 32 Go et plus | La famille 14B en fp8 sans acrobaties | Le fp16 complet reste lourd |

La RAM système compte autant que la VRAM dès que tu actives l'offloading, parce que c'est elle qui accueille ce que la carte ne peut pas garder. Le disque aussi : on y revient tout de suite, les chiffres surprennent.

Côté logiciel, la [page des prérequis système de ComfyUI](https://docs.comfy.org/installation/system_requirements) est plus large qu'on ne croit. Windows, Linux et macOS sur Apple Silicon sont pris en charge, comme les GPU NVIDIA, AMD, Intel et le CPU seul. Python 3.13 est recommandé, 3.12 accepté en repli, et PyTorch doit être en 2.7 ou plus. Sur AMD et sur Apple Silicon, la vidéo reste beaucoup plus laborieuse que l'image, mais la porte n'est pas fermée.

## Les fichiers à récupérer, et où les poser

C'est l'étape où la plupart des gens se plantent, et l'erreur est presque toujours la même : télécharger un seul fichier alors que le workflow en attend quatre.

ComfyUI publie quatre templates officiels pour WAN 2.2 : le 5B hybride TI2V, le 14B texte vers vidéo, le 14B image vers vidéo et le 14B première et dernière image. Chacun réclame un jeu de fichiers précis, à ranger dans un dossier précis.

![Page officielle de la documentation ComfyUI consacrée aux workflows natifs Wan 2.2, avec la liste des templates](/images/blog/video-ia-locale-comfyui-wan/workflow-2.webp)

*Capture de docs.comfy.org, page Wan2.2 Video Generation, relevée le 8 septembre 2026. La colonne de gauche liste toute la famille WAN prise en charge nativement.*

Pour le TI2V-5B, le plus accessible :

- `wan2.2_ti2v_5B_fp16.safetensors` dans `ComfyUI/models/diffusion_models/`
- `wan2.2_vae.safetensors` dans `ComfyUI/models/vae/`
- `umt5_xxl_fp8_e4m3fn_scaled.safetensors` dans `ComfyUI/models/text_encoders/`

Pour le 14B texte vers vidéo :

- `wan2.2_t2v_high_noise_14B_fp8_scaled.safetensors` dans `diffusion_models/`
- `wan2.2_t2v_low_noise_14B_fp8_scaled.safetensors` dans `diffusion_models/`
- `wan_2.1_vae.safetensors` dans `vae/`
- le même encodeur de texte umt5 dans `text_encoders/`

Regarde bien la ligne du VAE. Le 5B utilise `wan2.2_vae.safetensors`, les 14B utilisent `wan_2.1_vae.safetensors`. Deux noms proches, deux fichiers différents, et un message d'erreur qui ne dit pas franchement lequel manque. J'ai vu des gens réinstaller ComfyUI en entier pour ça.

Maintenant, le poids sur le disque. Les chiffres viennent du dépôt Comfy-Org qui reconditionne les modèles pour ComfyUI, et ils calment tout de suite les envies de tout télécharger.

| Modèle en poids ouverts | Paramètres | Résolutions | Fichiers de diffusion | Poids sur le disque |
| --- | --- | --- | --- | --- |
| Wan2.2 TI2V-5B | 5B | 720p | 1 fichier fp16 | 10 Go |
| Wan2.2 T2V-A14B | 27B au total, 14B actifs | 480p et 720p | 2 fichiers, high et low noise | 28,6 Go en fp8, 57,2 Go en fp16 |
| Wan2.2 I2V-A14B | 27B au total, 14B actifs | 480p et 720p | 2 fichiers, high et low noise | 28,6 Go en fp8, 57,2 Go en fp16 |
| Wan2.2 S2V-14B | 14B | 480p et 720p | 1 fichier | 16,4 Go en fp8, 32,6 Go en bf16 |
| Wan2.2 Animate-14B | 14B | non précisé | 1 fichier | 18,4 Go en int8, 34,5 Go en bf16 |

Ajoute l'encodeur de texte et le VAE, ajoute les variantes Fun Control ou Fun Camera si tu y touches, et tu passes les 150 Go sans t'en rendre compte. Prévois un disque dédié, ou fais le tri avant de lancer les téléchargements.

> 💡 **Le cut de Frank :** commence par le TI2V-5B et rien d'autre. Dix gigaoctets, un seul fichier de diffusion, 720p natif. Tu sauras en une soirée si ta machine tient la route, au lieu de découvrir le problème après trois jours de téléchargement.

## Deux experts, un seul modèle : le piège du 14B

La famille A14B n'est pas un modèle monolithique, et ça explique la ligne « 2 fichiers » du tableau précédent.

WAN 2.2 utilise une architecture de type mélange d'experts. Le README la décrit sans ambiguïté : un expert haut bruit pour les premières étapes du débruitage, qui gère la composition d'ensemble, et un expert bas bruit pour les étapes tardives, qui affine le détail. D'où les 27 milliards de paramètres au total pour 14 milliards actifs à chaque pas d'inférence.

Concrètement, ton graphe ComfyUI charge les deux fichiers et bascule de l'un à l'autre en cours d'échantillonnage. Si tu n'en télécharges qu'un, deux cas de figure. Soit le workflow refuse de démarrer, et c'est le meilleur scénario. Soit tu bricoles le graphe pour qu'il tourne quand même, et tu obtiens des plans mous ou des textures qui bavent, sans comprendre pourquoi. Le modèle fait la moitié du travail prévu.

Le TI2V-5B, lui, n'a pas cette structure. Il compense autrement, avec un VAE à forte compression : le taux annoncé est de 4×16×16 sur les axes temps, hauteur et largeur, ce qui monte à 64 fois au total une fois la patchification comptée. C'est ce qui lui permet de sortir du 720p en 1280×704 ou 704×1280, à 24 images par seconde, sur une seule carte grand public.

Ce détail de compression a une conséquence directe sur ton oeil. Le 5B encaisse mieux les plans larges et les mouvements amples que les gros plans sur un visage, parce que la compression spatiale mange justement le type de détail où le spectateur est le plus exigeant. Si tu construis une séquence, garde tes plans serrés pour un autre moteur, ou accepte de les retoucher en postproduction. La même logique de répartition que j'applique dans [le comparatif Kling contre Veo 3 plan par plan](/blog/kling-vs-veo-3-choisir-par-plan) vaut ici.

La branche Animate mérite une mention à part. Wan-Animate-2 est sorti le 7 août 2026 sous Apache 2.0, en version base 14B et en version distillée. Le dépôt est honnête sur ses exigences : les réglages par défaut sont calibrés pour huit GPU A800 et visent le 720p, et l'équipe indique avoir testé du 480p sur deux A800. On est hors du champ de la machine domestique. La version distillée descend à dix pas d'inférence sans guidage sans classificateur, ce qui change la donne côté vitesse, mais pas côté matériel d'entrée.

## Local, GPU loué, API : le calcul honnête

Le même plan de 5 secondes, généré de trois façons, avec des tarifs publics plutôt qu'une estimation au doigt mouillé.

| Scénario | Ce que tu paies | Un plan de 5 s en 720p |
| --- | --- | --- |
| Ta propre machine | la carte une fois, puis l'électricité et le bruit | aucune facture à la seconde |
| RTX 4090 louée à l'heure | 0,34 $ l'heure sur le community cloud de RunPod | environ 0,05 $ si le plan sort en 9 minutes |
| API fal, Wan 2.2 A14B | 0,08 $ par seconde de vidéo en 720p | 0,40 $ |

Les deux tarifs viennent des pages publiques de [RunPod](https://www.runpod.io/pricing) et de [fal pour Wan 2.2 A14B](https://fal.ai/models/fal-ai/wan/v2.2-a14b/text-to-video), relevées le 8 septembre 2026. Le reste, le calcul de la ligne du milieu, c'est mon arithmétique : neuf minutes font 0,15 heure, et 0,15 fois 0,34 donne un peu plus de cinq centimes.

Trois réserves, parce que ce tableau est plus séduisant qu'il n'est exact.

La comparaison n'oppose pas les mêmes modèles : les 5 centimes correspondent au TI2V-5B sur une carte louée, les 40 centimes au A14B servi par une API, et le second est plus gros. Un GPU loué facture aussi le temps où tu télécharges tes cinquante gigaoctets, où tu configures ton environnement, où tu vas boire un café en laissant l'instance allumée. Sur une session réelle, le coût par plan utile double ou triple facilement. Et aucune des trois lignes ne compte ton temps à toi.

Ce que je retiens après avoir fait tourner les trois : le local ne gagne jamais sur le coût unitaire du premier plan. Il gagne sur le volume, sur l'itération sans compteur, et sur les projets où tu ne veux envoyer aucune image à un service tiers. Si tu cherches à chiffrer une production entière, l'article sur [le coût réel d'un court-métrage IA en 2026](/blog/combien-coute-court-metrage-ia-2026) pose la méthode complète.

> 💡 **Le cut de Frank :** loue avant d'acheter. Une trentaine d'heures de RTX 4090 chez un loueur coûte moins de dix dollars et te dit exactement si ton workflow tient sur 24 Go. C'est le meilleur test d'achat que je connaisse, et il évite les cartes revendues trois mois plus tard.

## Ce qui casse chez les gens qui débutent

Les pannes ci-dessous sont classées dans l'ordre où elles tombent, de la première soirée d'installation aux semaines suivantes.

**Le `CUDA out of memory` dès le premier échantillonnage.** Neuf fois sur dix, c'est un fichier fp16 sur une carte qui demandait du fp8, ou une résolution poussée au-dessus de ce que le modèle sait faire. Redescends au TI2V-5B, garde le 720p natif, ne touche pas au nombre d'images tant que ça n'a pas tourné une fois proprement.

**L'erreur de VAE.** Tu as le bon modèle de diffusion et le mauvais autoencodeur. Rappel : `wan2.2_vae.safetensors` pour le 5B, `wan_2.1_vae.safetensors` pour les 14B. Vérifie le nom caractère par caractère, le point de version se lit mal.

**Un seul expert chargé sur un modèle A14B.** Le rendu part, mais il est mou et instable. Ouvre ton graphe et compte les chargeurs de modèle : il en faut deux, un high noise et un low noise.

**Le workflow importé qui réclame des noeuds fantômes.** Le graphe vient d'un dépôt tiers et dépend de noeuds personnalisés que tu n'as pas. Pars des templates natifs de ComfyUI, qui n'ont besoin d'aucune extension, et n'ajoute des noeuds tiers que quand tu sais exactement lequel te manque et pourquoi. Le principe du graphe minimal, je le détaille dans [le pipeline ComfyUI sans noeud inutile](/blog/comfyui-noeuds-debutant-pipeline-cinema).

**L'environnement Python bancal.** PyTorch en dessous de 2.7, ou une version de Python trop ancienne. Le message d'erreur ne parle jamais de ça directement, il te sort une exception dans une couche interne. Vérifie tes versions avant de chercher ailleurs.

**La machine qui chauffe et ralentit.** Une génération vidéo tient la carte à fond pendant plusieurs minutes d'affilée, ce qu'un jeu ne fait presque jamais. Si tes temps de rendu s'allongent au fil de la session, regarde du côté de ton boîtier avant d'accuser le modèle. Ouvre-le, dépoussière, surveille tes températures.

**La comparaison faussée dès le départ.** Tu juges ton rendu local en le mettant à côté d'une démo produite par un moteur commercial récent. On revient au premier point de l'article. Ce que tu tiens chez toi, c'est la branche 2.2, et la seule comparaison qui t'apprend quelque chose se fait entre deux réglages du même modèle.

## Quand le local vaut le coup, quand il ne le vaut pas

Quatre situations où le local est le bon choix, et je les ai vues fonctionner sur des projets réels.

Tu itères beaucoup sur un même plan, avec vingt ou trente essais avant de trouver le bon. Le compteur à la seconde d'une API transforme cette recherche en angoisse, ta machine non. Tu travailles sur du matériel que tu ne peux pas envoyer chez un tiers, contrat client ou projet confidentiel. Tu veux figer un moteur qui ne bougera plus, parce qu'une API se met à jour quand elle veut et casse ta continuité au milieu d'une série. Ou tu apprends, tout simplement, et tu veux voir ce que fait chaque paramètre sans regarder ton solde fondre.

Le local est un mauvais choix dans trois autres cas. Tu as une livraison client dans deux jours et tu n'as jamais installé ComfyUI. Tu as besoin de la meilleure qualité disponible aujourd'hui, auquel cas les versions récentes derrière API sortent autre chose que la 2.2. Ou ta carte a 8 Go de VRAM et tu comptais produire du 14B en fp16, ce qui n'arrivera pas.

Chez la plupart des gens que je forme, la bascule vers le local est arrivée par l'image, avec la vague des poids ouverts que j'ai décrite dans [l'article sur FLUX.2 et l'image IA en local](/blog/flux-2-open-weights-images-ia-local-2026). Ils installent ComfyUI pour l'image, prennent l'habitude du graphe, et la vidéo devient une extension naturelle de ce qu'ils savent déjà faire. C'est aussi l'ordre que je recommande. Image d'abord, vidéo ensuite.

Mon usage à moi est hybride et il le restera. Le local pour la recherche, les tests de cadre, les variantes, tout ce qui a besoin de tourner cinquante fois. Le cloud pour le plan final quand la qualité prime et que le budget le permet. Aucune des deux voies ne rend l'autre inutile, et prétendre le contraire ferait un titre plus vendeur qu'un conseil utile.

## FAQ : la vidéo IA en local avec WAN et ComfyUI

**Quelle carte graphique minimum pour faire de la vidéo IA en local ?**

Le seuil réaliste se situe autour de 8 Go de VRAM, et uniquement avec le modèle TI2V-5B servi par ComfyUI, qui déplace une partie du modèle vers la RAM système pendant le calcul. La documentation ComfyUI indique que cette version tient sur 8 Go grâce à cet offloading natif. Le dépôt officiel Wan2.2, lui, demande au moins 24 Go pour la même famille en mono-GPU, parce que ses scripts chargent le modèle entier sur la carte. En dessous de 8 Go, la génération vidéo devient un exercice de patience qui décourage la plupart des gens avant le premier plan exploitable.

**WAN 2.7 est-il téléchargeable pour tourner chez moi ?**

Non, pas au 8 septembre 2026. L'organisation officielle Wan-AI sur Hugging Face publie vingt-sept modèles et aucun ne dépasse la branche 2.2. Le compte GitHub Wan-Video héberge six dépôts, dont le plus récent est Wan-Animate-2 publié le 7 août 2026. Les versions plus récentes existent bel et bien, mais elles sont servies par API, sans poids publiés. C'est la confusion la plus fréquente sur ce sujet, et elle produit beaucoup de faux diagnostics matériels : les gens comparent leur rendu local à une démo produite par un moteur qu'ils ne peuvent pas installer.

**Combien de place sur le disque faut-il prévoir ?**

Compte 10 Go pour le seul fichier du TI2V-5B en fp16, environ 28,6 Go pour la paire d'experts d'un modèle 14B en fp8, et 57,2 Go pour la même paire en fp16. Ajoute l'encodeur de texte umt5 et le fichier VAE, puis multiplie si tu veux à la fois le texte vers vidéo, l'image vers vidéo et les variantes de contrôle. Une installation qui couvre plusieurs cas d'usage dépasse vite les 150 Go. Un disque dédié à ComfyUI et à ses modèles évite de saturer le disque système au pire moment.

**Combien de temps pour générer un plan de 5 secondes ?**

Le dépôt officiel Wan2.2 annonce moins de 9 minutes pour 5 secondes de 720p avec le TI2V-5B sur un GPU grand public de type RTX 4090. Ce chiffre suppose une carte de 24 Go qui charge le modèle en entier. Avec de l'offloading sur une carte plus modeste, compte nettement plus, parce que les allers-retours entre VRAM et RAM système coûtent du temps à chaque pas d'échantillonnage. Ajoute le premier chargement du modèle, quelques minutes selon ton disque, qui ne se répète pas sur les générations suivantes de la même session.

**Le local revient-il moins cher qu'une API ?**

Pas sur le premier plan, et rarement sur les dix premiers. Une seconde de vidéo en 720p coûte 0,08 dollar chez fal sur Wan 2.2 A14B, soit 40 centimes pour un plan de 5 secondes. Une RTX 4090 louée à 0,34 dollar l'heure sur le community cloud de RunPod ramène le même plan autour de 5 centimes si la génération prend 9 minutes, mais la location facture aussi les téléchargements, la configuration et les temps morts. Le local devient intéressant sur le volume, sur l'itération intensive et sur les projets où rien ne doit sortir de la machine.

**Peut-on utiliser commercialement les vidéos générées avec WAN 2.2 ?**

Les modèles du dépôt Wan2.2 sont publiés sous licence Apache 2.0, une licence permissive qui autorise l'usage commercial et la redistribution sans obligation de réciprocité. Wan-Animate-2 est sous la même licence. Cela dit, la licence du modèle ne règle pas toutes les questions d'un projet client : les droits sur ce que tu génères dépendent aussi du contenu lui-même, des personnes ou des marques représentées, et des obligations de transparence applicables à ta diffusion. Lis le texte de la licence dans le dépôt plutôt qu'un résumé trouvé sur un blog, y compris celui-ci.

**Faut-il un GPU NVIDIA, ou AMD et Apple Silicon suffisent ?**

ComfyUI prend officiellement en charge les GPU NVIDIA, AMD et Intel, Apple Silicon, les NPU Ascend, les MLU Cambricon et le CPU seul. Sur le papier, la porte est ouverte. En pratique, l'écosystème vidéo est écrit et optimisé pour CUDA en premier, et les workflows WAN se comportent nettement mieux sur NVIDIA. Sur Apple Silicon, la génération d'images reste tout à fait praticable, la vidéo devient très lente. Si ton objectif est la vidéo et que tu pars de zéro sur le matériel, une carte NVIDIA de 24 Go te fera gagner beaucoup plus de temps que n'importe quelle optimisation logicielle.

## Le test d'une soirée, avant de tout télécharger

Installe ComfyUI, prends le template natif Wan 2.2 5B, télécharge les trois fichiers de ce workflow et rien d'autre. Lance un plan large en 720p, sans rien toucher aux réglages par défaut. Regarde combien de temps il met et à quoi il ressemble.

Si ça sort en moins d'un quart d'heure et que le plan tient debout, tu as une chaîne locale qui fonctionne, et tu peux commencer à explorer les 14B. Si ça rame ou si ça casse, tu le sauras avec 10 Go téléchargés au lieu de 60, et tu pourras décider en connaissance de cause entre une carte plus grosse, un GPU loué à l'heure ou une API.

C'est la seule façon honnête de répondre à la question « est-ce que ma machine suffit ». Aucun tableau, y compris les miens, ne remplacera un premier rendu sur ton matériel.
