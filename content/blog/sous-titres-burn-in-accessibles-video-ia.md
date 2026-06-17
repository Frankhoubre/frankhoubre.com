---
title: "Sous-titres burn-in accessibles sur vidéo IA"
date: "2026-07-16"
category: "tutoriels"
excerpt: "Lisibilité, contrastes, safe zones et export multi plateformes pour sous-titres qui survivent à la compression."
thumbnail: "/images/blog/sous-titres-burn-in-accessibles-video-ia/hero.webp"
---

Tu exportes ta vidéo IA avec des sous-titres blancs fins en bas. Sur TikTok en plein soleil, personne ne lit. Sur Reels, le texte passe sous l'UI. *Accessibilité ratée*, message perdu, et algorithme qui pénalise la rétention. Les **sous-titres burn-in** ne sont pas une option « si on a le temps » : sur le social, ils sont souvent le seul canal de compréhension.

Ce guide couvre lisibilité, contrastes, safe zones, rythme de lecture et exports multi plateformes pour des sous-titres qui survivent à la compression et servent vraiment les spectateurs sourds, malentendants, et ceux qui regardent sans son.

![Sous-titres burn-in contrastés, safe zone et lisibilité mobile](/images/blog/sous-titres-burn-in-accessibles-video-ia/hero.webp)

## Principes d'accessibilité (sans bullshit)

Un sous-titre accessible est **lisible**, **synchronisé**, **complet** sur l'essentiel, et **non envahissant** visuellement. En pratique social : taille suffisante, contraste fort, fond semi-transparent si besoin, pas plus de deux lignes, vitesse 14 à 17 caractères par seconde pour le français.

Les guidelines [WCAG](https://www.w3.org/WAI/WCAG22/quickref/) recommandent un contraste élevé pour le texte. Sur vidéo, le fond change frame par frame : d'où l'usage d'un **fond boîte** ou d'une ombre portée contrôlée.

> 💡 **Frank's Cut:** teste toujours burn-in sur **fond clair ET fond sombre** de ta vidéo. Un blanc pur qui marche sur le noir disparaît sur une fenêtre lumineuse.

## Tableau réglages burn-in

| Paramètre | Valeur départ | Objectif | Erreur fréquente |
| --- | --- | --- | --- |
| Taille | 4,5 à 5,5 % hauteur | Lecture mobile | Texte microscopique |
| Contraste | Blanc 90 % + ombre 40 % | Séparation du fond | Blanc pur sans contour |
| Lignes max | 2 | Scan rapide | Paragraphes 4 lignes |
| CPS | 14 à 17 (FR) | Confort | Blocs trop longs |
| Safe zone | 80 % central | Éviter UI plateforme | Texte collé au bord |

## Workflow sous-titres sur vidéo IA

### Étape 1 : transcription et script

Partir d'un script validé ou transcription humaine corrigée. Pas de STT brut non relu sur termes techniques. Segmente par **unité de sens**, pas par longueur fixe.

### Étape 2 : style et template

Crée un preset Premiere / AE / CapCut : police sans serif bold, contour ou box, position bas tiers **au-dessus** de la zone UI TikTok (environ 15 % du bas libre en 9:16).

### Étape 3 : calage sur la vidéo

Les vidéos IA ont parfois des micro décalages audio. Ajuste manuellement les entrées sur les temps forts. Évite les sous-titres qui arrivent 200 ms avant la voix.

![Montage sous-titres, safe zones plateformes verticales](/images/blog/sous-titres-burn-in-accessibles-video-ia/workflow-1.webp)

### Étape 4 : exports

Master avec burn-in pour social. Version sans sous-titres + fichier .srt pour YouTube si besoin. Teste upload privé, regarde sur téléphone.

## Scénarios

**Interview verticale** : box semi-opaque, 2 lignes max. **Pub mode sans voix** : sous-titres portent 100 % du message, taille max. **Tutoriel** : termes techniques en couleur secondaire, pas plus de 3 couleurs.

## Troubleshooting

**Illisible en extérieur** : épaisseur contour + box. **Cache par UI** : remonter safe zone. **Surcharge** : couper mots parasites, garder sens. **Désync** : recaler sur waveform voix.

Je décortique ce point directement en vidéo sur ma chaîne Business Dynamite.

[Voir l'explication en vidéo](https://www.youtube.com/watch?v=Jm_PEEWPTsY)

![Test A/B sous-titres sur fond clair et sombre](/images/blog/sous-titres-burn-in-accessibles-video-ia/workflow-2.webp)

- [workflow complet Seedance 2](/blog//blog/workflow-complet-seedance-2-rendu-cinema)
- [scène dialogue à deux sans raccord cassé](/blog//blog/scene-dialogue-deux-personnages-raccord-ia)
- [transformer une image IA en vidéo fluide](/blog//blog/comment-transformer-image-ia-video-fluide-credible)
- [structurer une vidéo IA comme un vrai film](/blog//blog/comment-structurer-video-ia-comme-vrai-film)

## FAQ

**Burn-in ou fichier séparé ?**

Burn-in pour TikTok/Reels/Stories où le spectateur ne charge pas de .srt. Garde .srt pour YouTube long et accessibilité.

**Quelle police éviter ?**

Les ultra-fines et les scriptes décoratives. Bold sans serif lisible.

**Faut-il traduire les burn-in ?**

Un master par langue cible, pas de traduction auto non relue sur le texte à l'écran.

**Comment gérer les noms propres ?**

Relecture humaine, liste de noms en amont, pas de STT seul.

**Les sous-titres masquent-ils l'image IA ?**

Positionne-les dans les zones peu informatives (ciel, mur), jamais sur le visage si évitable.

**CPS trop rapide : symptôme ?**

Spectateur qui pause. Coupe les segments ou simplifie le texte.

**Accessibilité légale ?**

Dépend du pays et du diffuseur. Même sans obligation, la rétention social justifie l'effort.

**Même style que les titres film ?**

Non. Titres = design brand. Sous-titres = lisibilité max, style plus neutre.

Des sous-titres burn-in réussis sur vidéo IA, c'est de l'UX audiovisuelle. Tu ne « colles pas du texte », tu sécurises la compréhension sur chaque écran et chaque luminosité.


## Pratique terrain : brief client en une page

Quand tu travailles **sous-titres accessibles vidéo IA** en conditions réelles, le chaos arrive des deadlines, pas des tutoriels. Cette section brief client en une page est ce que je mets dans le dossier livrable pour que l'équipe retombe sur ses pieds une semaine plus tard sans moi.

Avant chaque batch, relis le brief en cinq lignes. Un changement « rapide » de prompt sans relire le brief crée des plans magnifiques mais inutilisables au montage. Le monteur te remerciera si chaque fichier porte un nom logique et une note A/B/C.

Pour la validation, impose deux écrans : téléphone lumineux + moniteur neutre. Beaucoup de défauts sur Sous-titres burn-in accessibles sur vidéo IA n'apparaissent que sur l'un des deux. Si ça tient sur les deux, tu peux passer à la suite. Sinon, un seul levier change, pas cinq.

En réunion client, montre un extrait de dix secondes avec son, pas une galerie de stills. Le mouvement et l'audio vendent la crédibilité. Les images fixes mentent sur la qualité finale des vidéos IA.

Documente les dettes assumées (grain, micro dérive, texte composité en post). La transparence évite le « refaire tout » quand le directeur créatif voit le master sur grand écran.

> 💡 **Frank's Cut:** si tu n'as pas envie d'expliquer un choix technique au client, ce choix est probablement une dette à assumer noir sur blanc, pas à cacher.

Croise toujours avec [pourquoi mes vidéos IA ont l'air fake](/blog/pourquoi-mes-videos-ia-ont-l-air-fake-comment-rendre-realistes) quand tu doutes du réalisme global. Souvent le problème n'est pas le sujet de l'article, mais une pilote ou un son manquant en amont.

**Session type (45 min)** : brief 10 min, génération 20 min, QA 10 min, post 10 min, export mobile 5 min. Si tu n'as pas de plan A en une heure, pivote le brief, pas la caféine.

**Checklist finale** : message lisible sans son (si sous-titres), message audible avec son (si VO), cohérence avec la charte, export plateforme testé en privé, fichiers nommés et archivés.


## Pratique terrain : grille QA partagée en équipe

Quand tu travailles **sous-titres accessibles vidéo IA** en conditions réelles, le chaos arrive des deadlines, pas des tutoriels. Cette section grille QA partagée en équipe est ce que je mets dans le dossier livrable pour que l'équipe retombe sur ses pieds une semaine plus tard sans moi.

Avant chaque batch, relis le brief en cinq lignes. Un changement « rapide » de prompt sans relire le brief crée des plans magnifiques mais inutilisables au montage. Le monteur te remerciera si chaque fichier porte un nom logique et une note A/B/C.

Pour la validation, impose deux écrans : téléphone lumineux + moniteur neutre. Beaucoup de défauts sur Sous-titres burn-in accessibles sur vidéo IA n'apparaissent que sur l'un des deux. Si ça tient sur les deux, tu peux passer à la suite. Sinon, un seul levier change, pas cinq.

En réunion client, montre un extrait de dix secondes avec son, pas une galerie de stills. Le mouvement et l'audio vendent la crédibilité. Les images fixes mentent sur la qualité finale des vidéos IA.

Documente les dettes assumées (grain, micro dérive, texte composité en post). La transparence évite le « refaire tout » quand le directeur créatif voit le master sur grand écran.

> 💡 **Frank's Cut:** si tu n'as pas envie d'expliquer un choix technique au client, ce choix est probablement une dette à assumer noir sur blanc, pas à cacher.

Croise toujours avec [pourquoi mes vidéos IA ont l'air fake](/blog/pourquoi-mes-videos-ia-ont-l-air-fake-comment-rendre-realistes) quand tu doutes du réalisme global. Souvent le problème n'est pas le sujet de l'article, mais une pilote ou un son manquant en amont.

**Session type (50 min)** : brief 10 min, génération 20 min, QA 10 min, post 10 min, export mobile 5 min. Si tu n'as pas de plan A en une heure, pivote le brief, pas la caféine.

**Checklist finale** : message lisible sans son (si sous-titres), message audible avec son (si VO), cohérence avec la charte, export plateforme testé en privé, fichiers nommés et archivés.


## Pratique terrain : archive seeds et prompts

Quand tu travailles **sous-titres accessibles vidéo IA** en conditions réelles, le chaos arrive des deadlines, pas des tutoriels. Cette section archive seeds et prompts est ce que je mets dans le dossier livrable pour que l'équipe retombe sur ses pieds une semaine plus tard sans moi.

Avant chaque batch, relis le brief en cinq lignes. Un changement « rapide » de prompt sans relire le brief crée des plans magnifiques mais inutilisables au montage. Le monteur te remerciera si chaque fichier porte un nom logique et une note A/B/C.

Pour la validation, impose deux écrans : téléphone lumineux + moniteur neutre. Beaucoup de défauts sur Sous-titres burn-in accessibles sur vidéo IA n'apparaissent que sur l'un des deux. Si ça tient sur les deux, tu peux passer à la suite. Sinon, un seul levier change, pas cinq.

En réunion client, montre un extrait de dix secondes avec son, pas une galerie de stills. Le mouvement et l'audio vendent la crédibilité. Les images fixes mentent sur la qualité finale des vidéos IA.

Documente les dettes assumées (grain, micro dérive, texte composité en post). La transparence évite le « refaire tout » quand le directeur créatif voit le master sur grand écran.

> 💡 **Frank's Cut:** si tu n'as pas envie d'expliquer un choix technique au client, ce choix est probablement une dette à assumer noir sur blanc, pas à cacher.

Croise toujours avec [pourquoi mes vidéos IA ont l'air fake](/blog/pourquoi-mes-videos-ia-ont-l-air-fake-comment-rendre-realistes) quand tu doutes du réalisme global. Souvent le problème n'est pas le sujet de l'article, mais une pilote ou un son manquant en amont.

**Session type (55 min)** : brief 10 min, génération 20 min, QA 10 min, post 10 min, export mobile 5 min. Si tu n'as pas de plan A en une heure, pivote le brief, pas la caféine.

**Checklist finale** : message lisible sans son (si sous-titres), message audible avec son (si VO), cohérence avec la charte, export plateforme testé en privé, fichiers nommés et archivés.


## Pratique terrain : test compression mobile

Quand tu travailles **sous-titres accessibles vidéo IA** en conditions réelles, le chaos arrive des deadlines, pas des tutoriels. Cette section test compression mobile est ce que je mets dans le dossier livrable pour que l'équipe retombe sur ses pieds une semaine plus tard sans moi.

Avant chaque batch, relis le brief en cinq lignes. Un changement « rapide » de prompt sans relire le brief crée des plans magnifiques mais inutilisables au montage. Le monteur te remerciera si chaque fichier porte un nom logique et une note A/B/C.

Pour la validation, impose deux écrans : téléphone lumineux + moniteur neutre. Beaucoup de défauts sur Sous-titres burn-in accessibles sur vidéo IA n'apparaissent que sur l'un des deux. Si ça tient sur les deux, tu peux passer à la suite. Sinon, un seul levier change, pas cinq.

En réunion client, montre un extrait de dix secondes avec son, pas une galerie de stills. Le mouvement et l'audio vendent la crédibilité. Les images fixes mentent sur la qualité finale des vidéos IA.

Documente les dettes assumées (grain, micro dérive, texte composité en post). La transparence évite le « refaire tout » quand le directeur créatif voit le master sur grand écran.

> 💡 **Frank's Cut:** si tu n'as pas envie d'expliquer un choix technique au client, ce choix est probablement une dette à assumer noir sur blanc, pas à cacher.

Croise toujours avec [pourquoi mes vidéos IA ont l'air fake](/blog/pourquoi-mes-videos-ia-ont-l-air-fake-comment-rendre-realistes) quand tu doutes du réalisme global. Souvent le problème n'est pas le sujet de l'article, mais une pilote ou un son manquant en amont.

**Session type (60 min)** : brief 10 min, génération 20 min, QA 10 min, post 10 min, export mobile 5 min. Si tu n'as pas de plan A en une heure, pivote le brief, pas la caféine.

**Checklist finale** : message lisible sans son (si sous-titres), message audible avec son (si VO), cohérence avec la charte, export plateforme testé en privé, fichiers nommés et archivés.


## Pratique terrain : dette visuelle documentée

Quand tu travailles **sous-titres accessibles vidéo IA** en conditions réelles, le chaos arrive des deadlines, pas des tutoriels. Cette section dette visuelle documentée est ce que je mets dans le dossier livrable pour que l'équipe retombe sur ses pieds une semaine plus tard sans moi.

Avant chaque batch, relis le brief en cinq lignes. Un changement « rapide » de prompt sans relire le brief crée des plans magnifiques mais inutilisables au montage. Le monteur te remerciera si chaque fichier porte un nom logique et une note A/B/C.

Pour la validation, impose deux écrans : téléphone lumineux + moniteur neutre. Beaucoup de défauts sur Sous-titres burn-in accessibles sur vidéo IA n'apparaissent que sur l'un des deux. Si ça tient sur les deux, tu peux passer à la suite. Sinon, un seul levier change, pas cinq.

En réunion client, montre un extrait de dix secondes avec son, pas une galerie de stills. Le mouvement et l'audio vendent la crédibilité. Les images fixes mentent sur la qualité finale des vidéos IA.

Documente les dettes assumées (grain, micro dérive, texte composité en post). La transparence évite le « refaire tout » quand le directeur créatif voit le master sur grand écran.

> 💡 **Frank's Cut:** si tu n'as pas envie d'expliquer un choix technique au client, ce choix est probablement une dette à assumer noir sur blanc, pas à cacher.

Croise toujours avec [pourquoi mes vidéos IA ont l'air fake](/blog/pourquoi-mes-videos-ia-ont-l-air-fake-comment-rendre-realistes) quand tu doutes du réalisme global. Souvent le problème n'est pas le sujet de l'article, mais une pilote ou un son manquant en amont.

**Session type (65 min)** : brief 10 min, génération 20 min, QA 10 min, post 10 min, export mobile 5 min. Si tu n'as pas de plan A en une heure, pivote le brief, pas la caféine.

**Checklist finale** : message lisible sans son (si sous-titres), message audible avec son (si VO), cohérence avec la charte, export plateforme testé en privé, fichiers nommés et archivés.


## Pratique terrain : son posé avant validation image

Quand tu travailles **sous-titres accessibles vidéo IA** en conditions réelles, le chaos arrive des deadlines, pas des tutoriels. Cette section son posé avant validation image est ce que je mets dans le dossier livrable pour que l'équipe retombe sur ses pieds une semaine plus tard sans moi.

Avant chaque batch, relis le brief en cinq lignes. Un changement « rapide » de prompt sans relire le brief crée des plans magnifiques mais inutilisables au montage. Le monteur te remerciera si chaque fichier porte un nom logique et une note A/B/C.

Pour la validation, impose deux écrans : téléphone lumineux + moniteur neutre. Beaucoup de défauts sur Sous-titres burn-in accessibles sur vidéo IA n'apparaissent que sur l'un des deux. Si ça tient sur les deux, tu peux passer à la suite. Sinon, un seul levier change, pas cinq.

En réunion client, montre un extrait de dix secondes avec son, pas une galerie de stills. Le mouvement et l'audio vendent la crédibilité. Les images fixes mentent sur la qualité finale des vidéos IA.

Documente les dettes assumées (grain, micro dérive, texte composité en post). La transparence évite le « refaire tout » quand le directeur créatif voit le master sur grand écran.

> 💡 **Frank's Cut:** si tu n'as pas envie d'expliquer un choix technique au client, ce choix est probablement une dette à assumer noir sur blanc, pas à cacher.

Croise toujours avec [pourquoi mes vidéos IA ont l'air fake](/blog/pourquoi-mes-videos-ia-ont-l-air-fake-comment-rendre-realistes) quand tu doutes du réalisme global. Souvent le problème n'est pas le sujet de l'article, mais une pilote ou un son manquant en amont.

**Session type (70 min)** : brief 10 min, génération 20 min, QA 10 min, post 10 min, export mobile 5 min. Si tu n'as pas de plan A en une heure, pivote le brief, pas la caféine.

**Checklist finale** : message lisible sans son (si sous-titres), message audible avec son (si VO), cohérence avec la charte, export plateforme testé en privé, fichiers nommés et archivés.


## Pratique terrain : règle de pivot après douze essais

Quand tu travailles **sous-titres accessibles vidéo IA** en conditions réelles, le chaos arrive des deadlines, pas des tutoriels. Cette section règle de pivot après douze essais est ce que je mets dans le dossier livrable pour que l'équipe retombe sur ses pieds une semaine plus tard sans moi.

Avant chaque batch, relis le brief en cinq lignes. Un changement « rapide » de prompt sans relire le brief crée des plans magnifiques mais inutilisables au montage. Le monteur te remerciera si chaque fichier porte un nom logique et une note A/B/C.

Pour la validation, impose deux écrans : téléphone lumineux + moniteur neutre. Beaucoup de défauts sur Sous-titres burn-in accessibles sur vidéo IA n'apparaissent que sur l'un des deux. Si ça tient sur les deux, tu peux passer à la suite. Sinon, un seul levier change, pas cinq.

En réunion client, montre un extrait de dix secondes avec son, pas une galerie de stills. Le mouvement et l'audio vendent la crédibilité. Les images fixes mentent sur la qualité finale des vidéos IA.

Documente les dettes assumées (grain, micro dérive, texte composité en post). La transparence évite le « refaire tout » quand le directeur créatif voit le master sur grand écran.

> 💡 **Frank's Cut:** si tu n'as pas envie d'expliquer un choix technique au client, ce choix est probablement une dette à assumer noir sur blanc, pas à cacher.

Croise toujours avec [pourquoi mes vidéos IA ont l'air fake](/blog/pourquoi-mes-videos-ia-ont-l-air-fake-comment-rendre-realistes) quand tu doutes du réalisme global. Souvent le problème n'est pas le sujet de l'article, mais une pilote ou un son manquant en amont.

**Session type (75 min)** : brief 10 min, génération 20 min, QA 10 min, post 10 min, export mobile 5 min. Si tu n'as pas de plan A en une heure, pivote le brief, pas la caféine.

**Checklist finale** : message lisible sans son (si sous-titres), message audible avec son (si VO), cohérence avec la charte, export plateforme testé en privé, fichiers nommés et archivés.

<!-- PUBLICATION DATE: 2026-07-16 -->
