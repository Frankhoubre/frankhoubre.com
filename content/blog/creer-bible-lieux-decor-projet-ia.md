---
title: "Creer une bible de lieux et decors pour projet IA"
date: "2026-06-06"
dateModified: "2026-06-10"
category: "tutoriels"
excerpt: "Comment documenter chaque decor pour garder la meme ambiance visuelle du pilote a la livraison finale."
thumbnail: "/images/blog/creer-bible-lieux-decor-projet-ia/hero.webp"
---

Scène 4, le café a des murs en briques rouges. Scène 9, les mêmes murs sont gris. Scène 14, le café est devenu une galerie blanche. **Créer une bible de lieux et décors pour projet IA** transforme des décors probabilistes en espaces reconnaissables.

J'ai reconstruit des séquences entières parce que le « même » appartement ne matchait plus entre deux sessions.

![Plan de travail IA en studio avec notes de production et ecrans de controle](/images/blog/creer-bible-lieux-decor-projet-ia/hero.webp)

## Ce qu'une bible de lieux doit capturer

Architecture, palette, éclairage naturel, props récurrents, échelle, texture. Le spectateur ressent la cohérence via trois à cinq ancres visuelles par lieu.

Vois [Notion IA : organiser la bible de production](/blog/notion-ia-bible-production-film-serie), [construire une shotlist vidéo IA](/blog/construire-liste-plans-shotlist-video-ia) et [calibrer la lumière intérieur extérieur](/blog/calibrer-lumiere-interieur-exterieur-ia).

> 💡 **Frank's Cut:** pour chaque lieu, génère une « carte de lieu » : plan large, détail prop signature, plan fenêtre/lumière. Trois images minimum.

## Structure d'une fiche lieu

**Code** : `LOC-CAFE-01`

**Description stable** : *« Small Parisian corner café, exposed red brick back wall, dark wood counter, green subway tiles, two round marble tables, large south-facing window »*

**Interdits** : *no white gallery walls, no industrial concrete*

**Palette** : briques #8B4513, carrelage #2F5D50

| Élément | Verrouillage | Méthode |
|---------|--------------|---------|
| Architecture | Strict | Description + plan large |
| Couleurs | Strict | Codes hex + référence |
| Props majeurs | Modéré | Liste dans prompt |
| Props mineurs | Libre | Peuvent varier |
| Lumière | Strict par heure | Bible lumière liée |

## Workflow terrain

### Étape 1 : inventaire des lieux

Fusionne les doublons. Court-métrage 5 min : 3-6 lieux.

### Étape 2 : priorité de verrouillage

Le lieu le plus visible d'abord.

### Étape 3 : cartes de lieu

Six variations, choisis la meilleure, trois angles. Vois [workflow Flux pour images ultra détaillées](/blog/workflow-flux-images-ultra-detaillees).

### Étape 4 : fiche complète

Interdits inclus : ce que le modèle invente à tort.

### Étape 5 : tests de dérive

Régénère une semaine après. Compare.

### Étape 6 : shotlist avec code lieu

`SC02-PL03 | LOC-CAFE-01`. Pas de description libre.

![Comparaison de versions A B C sur une timeline de montage avec annotations visuelles](/images/blog/creer-bible-lieux-decor-projet-ia/workflow-1.webp)

### Étape 7 : maintenance

Nouveau lieu = fiche complète avant génération.

Vois [comment utiliser l'IA pour le repérage de décors](/blog/utiliser-ia-reperage-decors-cinema).

## Relier bible lieux et bible lumière

`LOC-CAFE-01` utilise `LIGHT-CAFE-MATIN` et `LIGHT-CAFE-SOIR`. Lieu = espace. Lumière = comment l'espace est éclairé.

## Scénarios réels

**Série 6 épisodes, même appartement.** Un lieu, variations lumière par heure.

**Pub multi-décors 30s.** Deux lieux max.

**Clip musical symbolique.** Palette et texture fixes, détails libres.

**Saison complète.** Versionne chaque modification validée.

## Erreurs fréquentes

**Décrire différemment à chaque prompt.** Fix : bloc copiable.

**Trop de lieux court format.** Fix : fusionne.

**Oublier l'échelle.** Fix : élément d'échelle dans la référence.

**Lieu sans interdits.** Fix : liste les dérives fréquentes.

**Bible figée sans version.** Fix : `LOC-CAFE-01 v2`.

[Ressources BFI production design](https://www.bfi.org.uk/) pour la rigueur documentaire.

![Validation finale d un master video IA sur ecran mobile et moniteur etalonne](/images/blog/creer-bible-lieux-decor-projet-ia/workflow-2.webp)

[🎥 WATCH: Check out this breakdown on the Business Dynamite YouTube channel: https://www.youtube.com/@BusinessDynamite - Specifically look at the segment on documenter chaque décor IA dans une bible de lieux réutilisable.]

## FAQ

**Combien d'images par lieu ?**

Minimum trois, idéal six pour lieux héros.

**Modéliser en 3D ?**

Pas obligatoire. Références 2D + depth suffisent souvent.

**Lieu qui évolue narrativement ?**

Versionne : `LOC-APT-01-JOUR` vs `LOC-APT-01-SACCAGE`.

**Bible et audio ?**

Documente l'ambiance sonore par lieu.

**Réutiliser entre projets ?**

Structure oui, références visuelles non.

**Décors réels et IA ?**

Fiche hybride : ce qui est plate, ce qui est IA.

**Extérieur urbain ?**

Ancre un repère architectural unique.

**Qui maintient la bible ?**

Responsable bible unique. Générateurs mettent à jour statuts.

**Lieu suffisamment verrouillé ?**

Test trois angles une semaine après. Inconnu doit reconnaître sans hésiter.

**Intégration shotlist ?**

Code `LOC-XXX` obligatoire sur chaque ligne.

Un lieu en IA n'existe que si tu le documentes. Applique cette méthode sur **créer une bible de lieux et décors pour projet IA**.

## Props, dérive et lien lumière

Les props signatures (plante monstera, machine espresso) doivent être listés dans le bloc copiable du décor. Les props mineurs peuvent varier. `LOC-CAFE-01` pointe vers `LIGHT-CAFE-MATIN` et `LIGHT-CAFE-SOIR`.

### Test de verrouillage

Une semaine après création de la fiche, régénère trois angles. Si un inconnu dit « même endroit » sans hésiter, la bible tient.

### Extérieurs urbains

Évite « Paris street » générique. Ancre un repère : fontaine, enseigne fictive, escalier.

## Props, lumière et test de dérive

Les props signatures (plante, machine espresso, affiche) doivent figurer dans le bloc copiable du décor. Les props mineurs peuvent varier. Chaque fiche lieu pointe vers les états lumineux : `LOC-CAFE-01` utilise `LIGHT-CAFE-MATIN`.

Une semaine après création de la fiche, régénère trois angles. Si un inconnu dit « même endroit » sans hésiter, la bible tient. Sinon renforce les références.

Les extérieurs urbains génériques dérivent : ancre un repère architectural unique. « Paris street » devient n'importe quelle ville sans ancrage.

### Intégration shotlist obligatoire

Chaque ligne référence `LOC-XXX`. Impossible de générer sans ouvrir la fiche lieu. Cette règle a éliminé la majorité de mes dérives décor en production récurrente.

## Workflow complet bible de lieux

Étape 1 : inventaire des lieux du script, fusion des doublons. Étape 2 : priorité au lieu le plus visible. Étape 3 : six variations, choix, carte de lieu (large, détail, lumière). Étape 4 : fiche complète avec interdits. Étape 5 : test dérive une semaine après. Étape 6 : code lieu dans chaque ligne shotlist.

Pour les images de référence still, vois [workflow Flux pour des images ultra détaillées](/blog/workflow-flux-images-ultra-detaillees). Pour le repérage amont, [comment utiliser l'IA pour le repérage de décors de cinéma](/blog/utiliser-ia-reperage-decors-cinema).

Un café qui devient une galerie blanche entre scène 4 et 14 n'est pas un bug du modèle : c'est l'absence de bible. Le spectateur ne lit pas ta fiche lieu, il ressent l'incohérence.

Le décor est un personnage silencieux. Quand il change sans raison narrative, l'histoire perd une béquille. La bible de lieux n'est pas de la bureaucratie : c'est la mémoire externe que le modèle n'a pas. Investis une heure en amont, économise une journée de montage incohérent.

## Fiche lieu type

Code `LOC-CAFE-01`. Description stable en bloc copiable. Interdits explicites (no white gallery, no nightclub). Palette hex. Props signatures. Références 3-6 images. Sons associés. Scènes utilisées.

Pour les lieux qui évoluent narrativement : `LOC-APT-01-JOUR` vs `LOC-APT-01-SACCAGE`. Deux fiches, deux états assumés.

Croise avec [Notion IA : organiser la bible de production](/blog/notion-ia-bible-production-film-serie) et [calibrer la lumière intérieur extérieur](/blog/calibrer-lumiere-interieur-exterieur-ia).

## Scénarios bible lieux

**Série 6 épisodes, même appartement.** Un lieu, variations lumière par heure. Meubles fixes sauf beat narratif.

**Pub multi-décors 30s.** Deux lieux max. Transition par match cut couleur.

**Clip symbolique.** Palette et texture fixes, détails libres.

**Saison longue.** Versionne chaque modification validée client.

Génère six variations par lieu, choisis, produis carte de lieu trois angles. Archive prompts et seeds. Test dérive une semaine après.

Maintenance en production : nouveau lieu = fiche complète avant génération. Mise à jour scènes utilisées à chaque ajout. La bible vit avec le projet, elle n'est pas un PDF mort après le pilote.

## Tableau verrouillage décor

| Élément | Niveau | Méthode |
|---------|--------|---------|
| Architecture | Strict | Description + ref large |
| Couleurs | Strict | Hex + image |
| Props majeurs | Modéré | Liste prompt |
| Lumière | Strict/heure | Bible lumière liée |
| Foule | Libre | Silhouettes |

Les ressources [BFI production design](https://www.bfi.org.uk/) inspirent la rigueur documentaire même en génération. Un lieu sans bible n'existe qu'une fois par prompt. Inventaire lieux, priorité héros, cartes de lieu, fiches complètes, tests dérive, codes shotlist. Chaque étape prend moins d'une heure si tu ne sautes aucune. Sauter l'inventaire coûte une journée de montage incohérent.

Applique cette méthode sur **créer une bible de lieux et décors pour projet IA**, et tes spectateurs croiront à tes espaces. Un décor verrouillé libère ton énergie créative sur l'action et l'émotion au lieu de la réparation de fonds incohérents.

Bloc copiable décor identique à chaque prompt. Interdits explicites. Test dérive hebdomadaire. Code lieu obligatoire en shotlist. La bible est vivante ou inutile.

Pour la lumière par lieu, [calibrer la lumière intérieur extérieur en génération IA](/blog/calibrer-lumiere-interieur-exterieur-ia). Lieu et lumière sont indissociables : le même café à 8h et 18h demande deux états lumineux documentés, pas un seul prompt réutilisé.


## Synthèse opérationnelle

Pour chaque projet série ou pub multi-scènes, retiens trois lignes dans ton carnet : intention du lieu en une phrase, bloc prompt décor en une phrase, preuve visuelle en une image de référence. Si l'une manque, tu n'es pas prêt à générer massivement : tu es prêt à diagnostiquer. La bible de lieux n'est pas un document mort après le pilote. Elle vit, versionne, et te sauve quand tu rouvres le projet dans trois semaines.

Un café, un bureau, un appartement : chacun mérite sa fiche avant le premier plan. Le spectateur ne lira jamais ta fiche. Il croira à ton monde parce que les murs, les props et la lumière ne mentent plus entre les scènes.




Documente, génère, compare, versionne. La bible de lieux est la mémoire que le modèle n'a pas. Sans elle, chaque prompt est une roulette. Avec elle, chaque scène renforce la suivante au lieu de la contredire.

Applique cette méthode sur **créer une bible de lieux et décors pour projet IA**. Tes décors tiendront du pilote à la livraison finale.

Investis une heure en bible. Économise une journée de montage incohérent. C'est le calcul que j'applique sur chaque série IA.

Le décor crédible ne s'improvise pas. Il se documente.

C'est la règle. Pas l'exception. Ta bible de lieux est ton assurance qualité visuelle sur tout le projet.

## Conclusion

Un lieu en IA n'existe que si tu le documentes. Sans fiche, chaque prompt est une roulette : le modèle invente une version du café, du bureau, de l'appartement. Le spectateur ne lit pas ta bible, mais il ressent quand les murs changent de couleur entre deux scènes consécutives.

Investis une heure en inventaire et fiches avant le premier batch de génération. Six variations par lieu héros, carte trois angles, bloc prompt copiable, interdits explicites, code `LOC-XXX` dans chaque ligne shotlist. Test de dérive une semaine après : trois angles, un regard neuf. Si l'inconnu hésite, renforce les références.

La bible vit avec le projet. Nouveau lieu = fiche complète avant génération. Modification validée client = version V2 archivée. Lieu et lumière restent indissociables : deux états pour le même café matin et soir, pas un seul prompt réutilisé.

Applique cette méthode sur **créer une bible de lieux et décors pour projet IA**. Tes décors tiendront du pilote à la livraison finale. Le décor crédible ne s'improvise pas : il se documente.

### Responsable bible et gouvernance

Désigne une personne responsable de la bible sur les projets en équipe. Les générateurs mettent à jour les statuts et les scènes utilisées, mais une seule personne valide les modifications de fiche. Sinon le café devient bleu sur un épisode et vert sur l'autre sans que personne ne s'en rende compte.

### Audio et ambiance par lieu

Documente l'ambiance sonore associée à chaque lieu : rumeur de rue, machine à café, ventilation de bureau. Le mix final gagne en cohérence quand l'image et le son racontent le même espace. La bible lieu n'est pas que visuelle.

### Réutilisation entre projets

Réutilise la structure de fiche et les interdits types, pas les références visuelles d'un client à l'autre. Régénère les images de référence pour chaque projet. Copier-coller un décor validé sur une autre marque crée des collisions de propriété intellectuelle et des incohérences de registre.

Pour organiser le tout, [Notion IA : organiser la bible de production](/blog/notion-ia-bible-production-film-serie) reste mon setup préféré sur les séries longues. Un café, un bureau, un appartement : chacun mérite sa fiche avant le premier plan.

Documente, génère, compare, versionne. Sans bible, chaque prompt est une roulette. Avec elle, chaque scène renforce la suivante au lieu de la contredire. Investis une heure en amont. Économise une journée de montage incohérent. C'est le calcul que j'applique sur chaque série IA que je livre. Le décor est un personnage silencieux : traite-le avec le même respect que ton protagoniste. Quand les murs tiennent, l'histoire respire. Retiens trois lignes dans ton carnet avant chaque batch : intention du lieu, bloc prompt copiable, image de référence validée. Si l'une manque, tu n'es pas prêt à générer massivement : tu es prêt à diagnostiquer des dérives coûteuses en post.

## Bible lieu : minimum viable

Une page par décor : palette, matériaux dominants, sources lumineuses fixes, objets immuables, axes de caméra autorisés. **Interdits :** ce qui ne doit jamais apparaître (affiche lisible, logo, fenêtre impossible). **Références :** trois stills validés collés en tête de dossier. **Version :** `LIEU_v02` après chaque changement client. Quand tu génères un nouveau plan, ouvre la bible avant le prompt : tu évites le salon qui devient bureau entre deux cuts.


> 💡 **Frank's Cut:** le décor qui change de mur sans raison, c'est le cousin du visage qui change. Documente les murs.

Documente la version validée avec la date : la mémoire du projet vaut plus que le dernier prompt gagnant.


Seuil publication : ne valide pas tant que le test mobile sans son n'est pas passé.


Relis la bible à voix haute avant chaque session de génération : les incohérences sautent à l'oreille avant l'écran.

<!-- PUBLICATION DATE: 2026-06-06 -->
