---
title: "Stable Diffusion : guide d’installation et premiers pas pour les débutants"
date: "2026-04-28"
category: "tutoriels"
excerpt: "Windows ou macOS, GPU ou plan B, téléchargement des poids, première image, et erreurs classiques à éviter dès le jour 1."
thumbnail: "/images/blog/stable-diffusion-installation-debutants/hero.webp"
---
Stable Diffusion n’est pas « une app magique » : c’est un **écosystème** (moteur, interface, poids, extensions). Ce guide te fait arriver à **une première image propre** sans te perdre dans dix tutoriels contradictoires. Les versions exactes changent : note la date de lecture et les numéros de release que tu installes.

Pour décider ensuite quel famille de modèle te convient, [Flux vs SDXL : quelle IA choisir pour des images réalistes](/blog/flux-vs-sdxl-quelle-ia-choisir-images-realistes).

## Prérequis honnêtes

**GPU NVIDIA avec VRAM** : idéal. **Apple Silicon** : possible avec des outils adaptés, souvent plus lent selon résolution. **CPU seul** : possible pour expérimenter, frustrant pour itérer.

**Espace disque** : prévois des dizaines de Go si tu accumules checkpoints.

**Temps** : bloque une soirée complète plutôt que trente minutes entre deux réunions.

## Choisir une interface débutant

Trois familles courantes :

| Interface | Avantage | Inconvénient |
| --- | --- | --- |
| Forge / A1111 | rapide à lancer, extensions | moins flexible qu’un graphe |
| ComfyUI | contrôle fin, workflows exportables | courbe plus raide |
| SD.Next | terrain expérimental utile | moins « premier jour » |

Pour débuter vite, Forge ou **AUTOMATIC1111** restent souvent recommandés. ComfyUI peut venir en semaine 2 quand tu veux des pipelines sérieux.

## Installation : garde une trace

**Clone ou installe** selon la doc officielle du projet choisi. Crée un fichier `install_notes.txt` avec : version Python, version torch si affichée, chemin du dossier `models`.

Ne mélange pas cinq installs dans le même dossier utilisateur sans les renommer.

![Repère de workflow : dossier models + notes version.](workflow-1.webp)

## Télécharger un premier checkpoint

Prends **un seul** modèle documenté pour débutants (souvent SDXL ou SD 1.5 selon ton interface). Place-le dans `Stable-diffusion` ou équivalent selon l’outil.

Ajoute un **VAE** si la doc du checkpoint le demande : sinon couleurs parfois lavées.

## Première génération : prompt court

```text
eye level, 50mm, portrait woman early 30s, soft window light from left,
neutral background, natural skin texture, shallow depth of field
```

Steps modérés, résolution modeste, batch de 2 à 4 images. Observe mains et yeux.

Pour les prompts photo, [les secrets des prompts pour générer des images au rendu photographique](/blog/secrets-prompts-rendu-photographique-ia).

## Erreurs fréquentes jour 1

**Out of Memory** : baisse résolution, ferme le navigateur lourd, désactive le preview HD.

**Torch CUDA incompatible** : réinstalle le wheel indiqué par la doc pour ta version de driver.

**Checkpoint au mauvais endroit** : l’interface ne le voit pas, tu crois que « rien ne marche ».

## Passer à img2img et inpainting

Semaine 1 fin : une session img2img sur ta meilleure image, dénoise faible. Semaine 2 : inpainting avec masque serré.

Pour le croquis, [transformer un simple croquis en chef-d’œuvre avec l’IA](/blog/croquis-en-chef-d-oeuvre-ia).

## Vidéo YouTube à intégrer

Référence `@BusinessDynamite` :  
[https://www.youtube.com/watch?v=KJbLaSGOPPk](https://www.youtube.com/watch?v=KJbLaSGOPPk)

Pour la discipline : versions notées, résultats reproductibles.

![Second repère : première grille 2x2 et rejet.](workflow-2.webp)

## FAQ

### Mac M1/M2 ça marche ?
Oui avec branches adaptées : lis la doc du jour pour MPS / backends.

### Je n’ai pas NVIDIA ?
Cloud payant, ou CPU patience, ou autre machine.

### ComfyUI obligatoire ?
Non, mais puissant quand tu maîtrises.

### Où trouver les LoRA ?
Communautés documentées ; vérifie licence et usage.

### Légalité des poids ?
Télécharge depuis des pages qui affichent la licence du modèle.

### Mise à jour cassée ?
Garder une copie zip de l’install qui marchait.

### Après installation ?
[Comment utiliser l’IA pour générer des photos hyper-réalistes](/blog/photos-hyper-realistes-ia).

{/* PUBLICATION DATE: 2026-04-28 */}
