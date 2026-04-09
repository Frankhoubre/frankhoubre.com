---
title: "Comment utiliser les objectifs caméra dans un prompt IA"
date: "2026-04-02"
category: "tutoriels"
excerpt: "Focales, anamorphique, profondeur de champ, et erreurs classiques de compression de visage."
thumbnail: "/images/blog/comment-utiliser-objectifs-camera-dans-prompt-ia/hero.webp"
---
La focale est l’un des leviers les plus sous-estimes en prompt IA.  
Tu peux avoir une bonne lumiere, une bonne texture, un bon sujet, si la focale est incoherente avec le cadre, ton image semblera artificielle.

La plupart des debutants ecrivent “cinematic lens” en esperant un miracle.  
Ce n’est pas assez.  
Il faut decrire une geometrie, pas une intention vague.

![Hero image, choix d'objectifs camera en prompt.](hero.webp)

Prompt: cinematic still, ultra photorealistic, shot on ARRI Alexa 65, anamorphic lens, shallow depth of field, filmmaker comparing lens focal length notes and generated frame references on desk in moody studio, practical tungsten lamp and realistic paper texture, natural skin texture, subtle imperfections, film grain, volumetric lighting, realistic color grading, no CGI look, no artificial sharpness --ar 16:9

## Pourquoi la focale change tout

La focale influence:
- perspective
- deformation du visage
- separation sujet/fond
- sensation “docu” ou “cinema”

Quand ce choix est flou, le modele improvise. Et l’improvisation finit souvent en rendu faux.

Pour ancrer ces decisions dans une image coherente, combine ce guide avec [comment decrire la lumiere comme un directeur photo dans un prompt](/blog/comment-decrire-lumiere-directeur-photo-prompt), parce que focale et lumiere doivent raconter la meme scene.

## 3 scenarios debutants, et le fix direct

### Scenario 1, visages deformes en plan rapproche
Cause: grand-angle trop proche du visage.  
Fix: passer en 50mm ou 85mm, reculer la camera.

### Scenario 2, plan large impossible avec focale longue
Cause: contradiction entre 85mm et “wide establishing shot”.  
Fix: 24-35mm pour l’etablissement, puis 50-85mm pour les portraits.

### Scenario 3, profondeur de champ incoherente
Cause: focales et distances non decrites.  
Fix: ajouter distance sujet-camera et sujet-fond.

## Tableau pratique des focales

| Focale | Usage principal | Risque si mal utilisee |
| --- | --- | --- |
| 24mm | etablir un lieu, dynamique d’espace | deformation du visage |
| 35mm | plan polyvalent, interieur, docu cine | mains allongees si trop proche |
| 50mm | portrait naturel, rendu stable | peut sembler “plat” sans lumiere |
| 85mm | gros plans et separation du fond | contradiction sur plans larges |

## Template strict a conserver

```text
Prompt: cinematic still, ultra photorealistic, shot on ARRI Alexa 65, anamorphic lens, shallow depth of field, [SCENE DESCRIPTION], natural skin texture, subtle imperfections, film grain, volumetric lighting, realistic color grading, no CGI look, no artificial sharpness --ar 16:9
```

Dans `[SCENE DESCRIPTION]`, ajoute:
- focale
- hauteur camera
- type de plan
- distance approximative

## Workflow pro, focales en 6 etapes

1. Choisir le role du plan (etablir, suivre, isoler).  
2. Choisir la focale compatible avec ce role.  
3. Definir la hauteur camera (eye-level, low, high).  
4. Definir la distance sujet-camera.  
5. Definir distance sujet-fond pour le bokeh.  
6. Verifier coherence avec lumiere et mouvement.

## Exemples utilisables

### Plan narratif naturel 35mm

```text
Prompt: cinematic still, ultra photorealistic, shot on ARRI Alexa 65, anamorphic lens, shallow depth of field, 35mm eye-level medium shot of a woman in rainy bus shelter at night, subject two meters from camera and wet street lights six meters behind, natural skin texture, subtle imperfections, film grain, volumetric lighting, realistic color grading, no CGI look, no artificial sharpness --ar 16:9
```

### Portrait emotion 85mm

```text
Prompt: cinematic still, ultra photorealistic, shot on ARRI Alexa 65, anamorphic lens, shallow depth of field, 85mm close-up portrait of a tired father in dawn kitchen near window key with practical lamp in soft background bokeh, natural skin texture, subtle imperfections, film grain, volumetric lighting, realistic color grading, no CGI look, no artificial sharpness --ar 16:9
```

Quand tu veux renforcer l’aspect anamorphique sans tomber dans le flare artificiel, la logique detaillee est dans [comment simuler un objectif anamorphique en generation IA](/blog/comment-simuler-objectif-anamorphique-generation-ia).

![Image contextuelle 1, comparaison 24mm 35mm 50mm 85mm.](workflow-1.webp)

Prompt: cinematic still, ultra photorealistic, shot on ARRI Alexa 65, anamorphic lens, shallow depth of field, side-by-side lens comparison board showing same subject framed at 24mm 35mm 50mm and 85mm in studio notes, practical desk light and realistic textures, natural skin texture, subtle imperfections, film grain, volumetric lighting, realistic color grading, no CGI look, no artificial sharpness --ar 16:9

## Video YouTube a integrer dans l'article

Reference `@BusinessDynamite`:
[https://www.youtube.com/watch?v=KJbLaSGOPPk](https://www.youtube.com/watch?v=KJbLaSGOPPk)

Ce qu’il faut observer:
- comment le cadrage influe sur la perception d’une scene
- comment une preparation precise evite des erreurs de tournage
- comment le choix d’angle et d’echelle guide l’attention

Application immediate:
- prends un prompt actuel
- genere le meme plan en 24mm, 35mm, 50mm
- compare uniquement perspective et lisibilite

## Trench warfare, erreurs frequentes

- **Mettre plusieurs focales dans le meme prompt**: une seule focale par image.
- **Focale longue sur plan large**: contradiction structurelle.
- **Grand-angle sur visage proche**: deformation quasi garantie.
- **Anamorphique partout**: effet marqueur trop visible si pas motive.
- **Aucune distance indiquee**: bokeh et perspective deviennent aleatoires.
- **Changer focale + lumiere + sujet en meme temps**: impossible de diagnostiquer.
- **Ne pas penser au ratio final**: en vertical, la perception de focale change vite.
- **Croire que la focale suffit**: elle travaille avec la lumiere, le mouvement, la composition.

Pour corriger les prompts qui deviennent artificiels a cause d’un mauvais mix style/focale, reconnecte aussi avec [les erreurs de prompt qui rendent une image IA artificielle](/blog/erreurs-prompt-qui-rendent-image-ia-artificielle).

> **Insight plateau**  
> Une focale bien choisie simplifie tout le reste du pipeline.

![Image contextuelle 2, verification geometrie et profondeur au montage.](workflow-2.webp)

Prompt: cinematic still, ultra photorealistic, shot on ARRI Alexa 65, anamorphic lens, shallow depth of field, editor checking lens consistency and depth relationships across sequence on timeline in dark suite with practical monitor light, natural skin texture, subtle imperfections, film grain, volumetric lighting, realistic color grading, no CGI look, no artificial sharpness --ar 16:9

## Checklist QA avant validation

- focale unique et coherente avec le plan
- distance sujet-camera explicite
- distance sujet-fond explicite
- pas de deformation visage evidente
- coherence focale entre plans relies
- rendu optique compatible avec l’intention

## FAQ

### Quelle focale choisir quand on debute ?
35mm ou 50mm, c’est la zone la plus stable.

### Pourquoi mon 24mm parait “fake” ?
Souvent parce que le sujet est trop proche et le visage deform e.

### Le 85mm est-il toujours plus cinematic ?
Non, seulement si le plan et la distance le justifient.

### Dois-je mentionner “full frame” ?
Optionnel, utile si tu veux verrouiller une interpretation precise.

### Faut-il decrire l’ouverture ?
Oui si tu veux controler la profondeur, sinon le modele improvise.

### Anamorphique ou spherique pour debuter ?
Spherique est souvent plus simple pour apprendre la coherence.

### Comment tester vite plusieurs focales ?
Prompt identique, seule la focale change, puis comparaison objective.

### Comment eviter les mains monstrueuses ?
Focale plus longue, cadrage plus prudent, mains hors champ partiel si besoin.
