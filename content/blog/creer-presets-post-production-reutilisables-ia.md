---
title: "Créer des presets de post production réutilisables IA"
date: "2026-06-19"
category: "tutoriels"
excerpt: "Comment construire des presets robustes qui accélèrent les projets sans uniformiser tous les rendus."
thumbnail: "/images/blog/creer-presets-post-production-reutilisables-ia/hero.webp"
---
Tu appliques une LUT « ciné » sur vingt plans IA. Vingt teintes orange, visages cadavériques, ciels qui hurlent. Le preset n'est pas le problème : c'est le preset **mal calibré pour du footage IA**.

**Créer des presets de post production réutilisables IA** demande une architecture modulaire : correction, peau, grain, look léger. Pas un clic magique unique. Ce guide te montre comment construire une bibliothèque qui accélère sans écraser la diversité de tes plans.

![Timeline DaVinci Resolve avec presets étalonnage grain et LUT modulaires pour footage IA](/images/blog/creer-presets-post-production-reutilisables-ia/hero.webp)

## Pourquoi les LUTs ciné classiques cassent le footage IA

Le footage tourné caméra obéit à une courbe de captation relativement stable. Le footage IA obéit à un moteur qui change selon le prompt, le seed, la version du modèle. Appliquer une LUT conçue pour du log caméra sur de l'IA, c'est souvent amplifier des défauts déjà présents : peau plastique, ciel surexposé, ombres violettes.

Les presets réutilisables pour l'IA doivent être **modulaires** et **faibles en intensité**. Chaque couche corrige une dette identifiée. La couche suivante ne compense pas une couche précédente mal réglée.

Architecture recommandée en quatre nodes ou calques :

1. **Normalisation** : balance des blancs, ajustement des noirs et des hautes sans look créatif.
2. **Peau** : masque doux, désaturation sélective des rouges agressifs, remontée légère de luminance.
3. **Grain** : harmonisation des textures trop propres entre plans.
4. **Look** : LUT ou courbe stylistique à 20-40 % d'intensité maximum.

| Couche preset | Rôle sur footage IA | Erreur fréquente |
| --- | --- | --- |
| Normalisation | Égaliser la base avant style | Sauter et aller direct au LUT |
| Peau | Éviter orange/magenta IA | LUT plein sur visages |
| Grain | Coller les plans entre eux | Grain lourd qui masque les artefacts |
| Look | Signature légère | Look à 100 % sur tous les plans |

Pour le socle étalonnage, appuie-toi sur [comment étalonner une vidéo IA dans DaVinci Resolve](/blog/comment-etalonner-video-ia-davinci-resolve) et [comment corriger les couleurs d'une vidéo IA](/blog/comment-corriger-couleurs-video-ia).

## Construire ta bibliothèque preset étape par étape

### Étape 1 : choisir dix plans témoins

Pas tes meilleurs plans. Tes plans **représentatifs** : intérieur jour, extérieur nuit, visage serré, plan large, néon, nature, peau claire, peau foncée. Si ton preset tient sur ces dix, il tiendra sur un court métrage. Si il ne tient que sur un plan héros, c'est un preset décoratif, pas un outil.

### Étape 2 : créer le preset normalisation

Sur chaque plan témoin, note ce qui diverge avant tout look : température, tint, lift des ombres. Construis un node PowerGrade qui ramène les plans vers une base neutre commune **sans** écraser la dynamique. Exporte `IA_Normalize_v01`. Teste sur les dix plans. Si un plan casse, ce plan sort du preset global ou reçoit une variante documentée.

### Étape 3 : preset peau séparé

Masque qualifié ou HSL sur rouges/oranges peau. Baisse saturation 10 à 25 % selon moteur. Remonte luminance légèrement si les visages IA sont cireux. Nomme `IA_Skin_Fix_Light`. Ne mélange pas peau et ciel dans le même node. Le ciel a son propre traitement.

![Bibliothèque presets modulaires couches normalisation peau grain LUT](/images/blog/creer-presets-post-production-reutilisables-ia/workflow-1.webp)

### Étape 4 : grain harmonisateur

Même famille de grain sur tous les plans : 16 mm fin pour fiction, plus grossier pour docu si c'est ton monde. Le grain cache les micro-différences de texture IA entre plans adjacents. Reste léger. Si tu vois le grain avant l'image, c'est trop. Teste sur mobile : le grain disparaît souvent sur téléphone, donc valide sur deux écrans.

### Étape 5 : look optionnel faible

LUT ou courbe créative. Intensité 20 à 40 %. Un preset look nommé `IA_Look_TealSoft_30` vaut mieux qu'un « BLOCKBUSTER.cube » à plein régime. Documente sur quels types de plans il fonctionne. Extérieur nuit oui, intérieur bougie peut-être non.

### Étape 6 : packager et versionner

Dossier `Presets_IA_ProjetX_v01` avec `.drx` ou `.look` selon Resolve, plus un PDF d'une page : ordre des nodes, intensités, plans témoins utilisés. Quand tu changes un slider, `v02`. Jamais « final_final ».

### Scénario A : série pub 15 s, douze plans, un jour de post

Normalisation appliquée en lot sur les douze. Skin fix sur les trois plans avec visage. Grain global. Look à 25 % sur l'ensemble. Ajustements manuels uniquement sur deux plans B. Gain de temps : quatre heures au lieu de huit. Cohérence : les plans se suivent sans saut de température.

### Scénario B : court métrage, deux séquences jour/nuit

Deux packs : `IA_Day_v01` et `IA_Night_v01`. Même grain, looks différents. La normalisation peut être partagée. Ne force pas un seul LUT jour-nuit : tu grises la nuit ou tu crames le jour.

### Scénario C : client change de moteur en cours de projet

Les plans Runway et les plans Kling n'ont pas la même signature couleur. Preset normalisation par **source** (`IA_Norm_Runway`, `IA_Norm_Kling`), puis couches peau/grain/look communes. La modularité sauve quand la stack technique change.

## Dépannage : quand tes presets trahissent le projet

**Visages orange après preset look.** Le look est trop fort ou appliqué avant le skin fix. Ordre : normalisation, peau, grain, look. Baisse l'intensité du look sur les plans visage via key secondaire.

**Plans adjacents ne matchent plus.** Le preset a été créé sur un seul moteur ou une seule version. Retour aux dix plans témoins. Split par source si nécessaire.

**Grain boueux sur écran calibré.** Tu as compensé un écran trop lumineux. Teste sur moniteur neutre et mobile. Réduis l'intensité.

**Preset « uniformise » trop.** C'est le signe d'un look unique à 100 %. Réduis l'intensité ou limite le look aux séquences où la stylisation est voulue. Les presets accélèrent, ils ne remplacent pas les choix de réalisateur.

**Export web détruit le preset.** Compression agressive sur des hautes lumières IA déjà fragiles. Prévois un léger rolloff des hautes dans le preset normalisation. Voir [comment passer d'un rendu amateur à cinéma en IA](/blog/comment-passer-rendu-amateur-a-cinema-ia) pour la chaîne complète.

**Preset créé sur écran laptop trop saturé.** Tout paraît bon chez toi, terne chez le client. Fix : étalonne sur deux écrans ou exporte une référence vers un iPad neutre. Documente le profil d'écran utilisé au calibrage.

**Nodes dans le mauvais ordre après import.** Le skin fix avant la normalisation crée des teintes zombies. Fix : checklist d'ordre collée sur le moniteur. Normalisation, peau, grain, look. Toujours.

## Maintenir la bibliothèque sur six mois

Les presets IA vieillissent quand les moteurs changent. Planifie une revue trimestrielle : régénère cinq plans témoins avec les versions actuelles des outils, réapplique les presets, note les écarts. Si la normalisation ne tient plus, fork `v02` sans supprimer `v01`. Les anciens projets peuvent encore en avoir besoin.

Documente dans un README : date de calibrage, moteurs testés, intensités par node, captures avant/après. Un preset sans doc est un fichier mystère que tu éviteras dans six mois par peur. Le temps de documentation est rentabilisé à la première série pub où tu réutilises la stack.

Partage la bibliothèque en équipe via un dossier cloud versionné, pas par email pièce jointe. Les `.drx` et LUTs se multiplient sinon. Un responsable preset valide les ajouts. Les monteurs proposent, le responsable merge. Sinon tu te retrouves avec douze variantes `IA_Skin_Fix` quasi identiques.

Quand tu livres un projet client, attache la version preset utilisée au dossier livrable. Le client qui revient six mois plus tard pour un pick-up doit pouvoir retrouver la même chaîne. C'est du professionnalisme, pas de la bureaucratie.

Je décortique ce point directement en vidéo sur ma chaîne Business Dynamite.

[Voir l'explication en vidéo](https://www.youtube.com/watch?v=TBBkUSFAGSU)

![Avant après preset modulaire IA plan visage et extérieur](/images/blog/creer-presets-post-production-reutilisables-ia/workflow-2.webp)

> 💡 **Frank's Cut:** nomme par **fonction** (`IA_Skin_Fix_Light`), pas par réalisateur. Tu retrouveras ce qui marche dans six mois. `Nolan_Vibe` ne te dit rien quand tu dois livrer une pub cosmétique.

La doc [Blackmagic DaVinci Resolve PowerGrades](https://documents.blackmagicdesign.com/UserManuals/DaVinci-Resolve-18-Power-Grades.pdf) détaille l'export et l'import de grades. Pour la science des LUTs, [Colour Science for Film and Video](https://www.amazon.com/Colour-Science-Film-Video-Workflow/dp/1138849030) reste une référence, même si tu simplifies pour l'IA.

## FAQ

### Resolve, Premiere ou After Effects pour des presets IA ?

DaVinci Resolve pour l'étalonnage modulaire et les PowerGrades réutilisables. Premiere pour les presets Lumetri rapides si l'équipe est déjà dedans. After Effects pour les looks avec grain et vignette sur des plans courts isolés. L'important est l'ordre des couches et le nommage, pas l'outil. Exporte des LUTs seulement quand tu dois passer entre apps. Si ton équipe mixte Resolve et Premiere, crée la normalisation et le skin fix dans Resolve, exporte des LUTs 33x33 pour Premiere, garde le look faible en dernier. Teste la conversion : certains LUTs perdent de la précision sur les peaux IA déjà fragiles.

### Quelle intensité pour un LUT look sur footage IA ?

20 à 40 % en règle générale. Monte progressivement plan par plan. Au-delà de 50 %, les visages IA souffrent. Si tu dois monter à 80 % pour que « ça ressemble à quelque chose », le problème est en génération ou en normalisation, pas dans le LUT. Note l'intensité utilisée par plan dans les métadonnées Resolve ou dans un fichier texte lié au projet. Au pick-up, tu ne devines pas. Tu réappliques `IA_Look_TealSoft_30` et tu ajustes seulement les exceptions documentées.

### Comment créer un preset peau sans masque manuel sur chaque plan ?

Utilise une qualification HSL large sur les oranges et rouges peau, affine avec une fenêtre de teinte restrictive après test sur trois carnations différentes dans tes plans témoins. Exporte le node en PowerGrade. Sur un plan où le masque attrape le bois ou le sable, ajuste localement sans changer le preset global. Le preset peau est un point de départ, pas une finition aveugle. Les plans avec forte lumière néon demandent souvent une seconde passe manuelle légère sur les joues.

### Faut-il un preset par moteur de génération ?

Idéalement oui pour la couche normalisation. Les couches peau, grain et look peuvent être partagées si tu les as calibrées sur des plans témoins multi-sources. Documente quelle version de modèle a servi au calibrage. Une mise à jour moteur peut invalider la normalisation sans toucher au grain.

### Comment ne pas uniformiser tous les rendus d'un projet ?

Le preset couvre la **cohérence**, pas l'identité de chaque scène. Garde des exceptions nommées : scène rêve, flashback, pub dans la fiction. Ces séquences ont un pack preset séparé ou pas de look, seulement normalisation. Écris les exceptions sur la feuille de montage.

### Peut-on vendre ou partager ses presets IA ?

Oui si tu les as construits sur ton travail. Précise pour quels moteurs et quels types de plans ils sont calibrés. Un preset « universel IA » vendu comme magie est une arnaque. La valeur est dans la documentation et les plans témoins, pas dans le fichier seul.

### Grain avant ou après le LUT ?

Après la normalisation, souvent avant ou après le look selon le rendu. Teste sur deux plans. Grain avant LUT : le look colore le grain, plus organique. Grain après LUT : grain plus neutre. L'IA a souvent besoin que le grain unifie avant le look léger. Essaie grain puis look à faible intensité en premier.

### Les presets remplacent-ils une étalonnage plan par plan ?

Non. Ils réduisent le travail sur les plans A. Les plans B et les héros reçoivent encore du travail manuel. Un preset qui élimine 70 % du temps plan par plan est un succès. Viser 100 % automatique sur de l'IA, c'est viser la médiocrité.

### Comment tester un nouveau preset avant de l'imposer au client ?

Applique-le aux dix plans témoins. Montre avant/après en grille. Fais valider la peau en gros plan. Teste un export compressé type YouTube. Si le client valide sur stills zoomés et sur preview compressée, tu peux lancer le lot.

## Scénario long : série web huit épisodes

Tu calibres les presets sur l'épisode pilote. Chaque épisode suivant réutilise la stack avec ajustements manuels sur les plans B uniquement. Entre épisodes, tu ne recrées pas les presets sauf si le moteur de génération change. Si un nouvel épisode introduit un lieu néon non présent au pilote, tu ajoutes une variante `IA_Night_Neon_v01` documentée, tu ne modifies pas le preset jour qui fonctionne déjà.

Le showrunner voit la cohérence. L'étalonneur garde sa santé mentale. Le client qui commande l'épisode 7 bénéficie du travail de calibration de l'épisode 1. C'est là que les presets IA deviennent un actif commercial, pas un raccourci personnel.

Archive chaque fin d'épisode un export « preset snapshot » : copie des PowerGrades + capture d'écran des nodes avec intensités. Si un freelance reprend le montage épisode 9, il ne réinvente pas ta chaîne depuis zéro.

Les presets modulaires fonctionnent aussi pour les créateurs solo qui publient chaque semaine sur YouTube. Tu n'as pas besoin d'une équipe pour bénéficier de la normalisation et du skin fix. Tu as besoin de discipline : même stack sur dix vidéos, ajustements manuels seulement sur les plans qui crient. Ton audience sent la cohérence avant de savoir pourquoi. C'est la même logique qu'une identité visuelle de chaîne, appliquée à du footage IA qui dérive par nature.

<!-- PUBLICATION DATE: 2026-06-19 -->
