---
title: "Optimiser export et codecs pour livraison video IA"
date: "2026-06-11"
category: "tutoriels"
excerpt: "Checklist export pour livrer des fichiers propres au client selon plateforme, usage et niveau de compression."
thumbnail: "/images/blog/optimiser-export-codecs-livraison-video-ia/hero.webp"
---
Le client ouvre ton master sur son laptop. Les noirs bougent en gris, la peau devient plastique, les détails du produit fondent en bouillie. Tu as passé douze heures sur l'étalonnage. Il voit une soupe MPEG. Le problème n'était pas la génération IA : c'était un **export H.264 à 5 Mbps** destiné à un écran 4K, ou un **ProRes mal nommé** qui n'est pas du vrai ProRes, ou pire : tu as livré le même fichier pour YouTube, broadcast et archivage.

**Optimiser export et codecs pour livraison vidéo IA** impose une règle simple : **un usage = un profil d'export**. Les clips IA ont souvent du grain ajouté, des textures fines et des dégradés ciel qui punissent la compression agressive. Ce guide pose les presets par destination, la checklist pré-livraison, et les pièges spécifiques au contenu généré.

![Export codec vidéo IA, paramètres livraison et waveform sur workstation](/images/blog/optimiser-export-codecs-livraison-video-ia/hero.webp)

## Pourquoi l'IA punît les mauvais exports

Les modèles image et vidéo produisent des micro-textures (peau, tissu, feuillage) que les encodeurs interprètent comme du bruit. Un encodeur trop agressif **mange le grain intentionnel** et laisse des banding dans les ciels. À l'inverse, un débit trop élevé pour les réseaux sociaux est recompressé par la plateforme : double compression, couleurs qui driftent.

Le workflow pro : **master haute qualité archivé** + **dérivés par plateforme**. Jamais un seul fichier « pour tout ».

Pour la QA finale avant export, lis [vérifier qualité mobile et desktop vidéo IA](/blog/verifier-qualite-mobile-desktop-video-ia). Pour le loudness qui accompagne l'export, vois [mastering loudness pub réseaux sociaux IA](/blog/mastering-loudness-pub-reseaux-sociaux-ia).

> 💡 **Frank's Cut:** exporte toujours un **master sans bandeau texte** et applique titres/sous-titres sur les dérivés. Le client qui demande « juste le fichier sans logo » te remerciera. Archive le master non burn-in.

## Comprendre codec, conteneur et débit

**Codec** : algorithme de compression (H.264, H.265/HEVC, ProRes, DNxHR). **Conteneur** : fichier (.mp4, .mov). **Débit** : quantité de données par seconde (Mbps). **Profil** : contraintes du codec (Baseline, High, 422).

Pour la livraison client web et broadcast modeste, **H.264 High Profile** reste le standard de compatibilité. Pour l'archivage et l'étalonnage client exigeant, **ProRes 422 HQ** ou **DNxHR HQX**. Pour la diffusion streaming moderne à débit maîtrisé, **H.265** si le client accepte la compatibilité variable.

### Tableau presets par destination

| Destination | Codec | Résolution | Débit vidéo indicatif | Audio | Notes IA |
| --- | --- | --- | --- | --- | --- |
| Master archive | ProRes 422 HQ | Timeline native | N/A (léger) | PCM 48 kHz 24-bit | Grain préservé |
| Client review web | H.264 High | 1080p ou 4K | 20-50 Mbps 1080p / 50-80 Mbps 4K | AAC 320 kbps | Éviter sous 15 Mbps |
| YouTube upload | H.264 ou H.265 | 4K si dispo | 35-68 Mbps 4K recommandé | AAC-LC 384+ | Laisser YT recompresser une fois |
| Instagram / Meta feed | H.264 | 1080x1350 ou 1080p | 15-25 Mbps | AAC 256 | Contraste modéré, pas sharpening export |
| TikTok / Reels | H.264 | 1080x1920 | 15-30 Mbps | AAC 256 | Vérifier safe zones texte |
| Broadcast léger | MPEG-2 ou H.264 selon spec | Selon grille | Selon fiche technique | PCM ou AAC selon spec | Demander fiche AV client |

## Workflow export en six étapes

### Étape 1 : verrouiller la timeline

Tout en place : étalonnage final, mix audio loudness validé (-14 LUFS intégré typique web), pas de clips offline. Nomme la timeline `PROJET_master_v1`.

### Étape 2 : export master archive

ProRes 422 HQ ou équivalent DNxHR. Pas de limiteur destructif sur ce fichier. Stockage froid + backup. C'est ta source de vérité si le client revient dans six mois.

### Étape 3 : dérivés par usage

À partir du master ou de la timeline, exporte chaque profil du tableau. Nommage strict : `PROJET_youtube_4k_h264_v1.mp4`, `PROJET_meta_1080x1350_v1.mp4`.

### Étape 4 : contrôle qualité automatisé + œil

Vérifie : banding ciel, blocking ombres, clipping audio, sync. Ouvre chaque dérivé sur laptop milieu de gamme et téléphone. Les artefacts IA + compression se voient sur écran moyen, pas sur ton écran étalonné seul.

![Paramètres export codec H.264 et ProRes pour livraison vidéo IA client](/images/blog/optimiser-export-codecs-livraison-video-ia/workflow-1.webp)

### Étape 5 : fiche livraison

PDF ou mail avec : liste fichiers, codec, résolution, débit, loudness audio, usage prévu, checksum ou lien drive. Le client ne devine pas quel fichier va où.

### Étape 6 : archivage projet

Garde projet NLE + master + dérivés + 30 j minimum. Les regens IA sont coûteuses à reproduire.

## Paramètres Resolve / Premiere (point de départ)

**DaVinci Resolve Deliver H.264 :** format MP4, codec H.264, encoder selon GPU dispo, **quality Restrict to 40 Mbps** pour 1080p master web, **60-80 Mbps** pour 4K. Audio AAC 320 kbps. Coche **Render at source resolution**.

**ProRes master :** QuickTime, ProRes 422 HQ, pas de limite débit. Timeline en float si étalonnage poussé.

**Premiere H.264 :** VBR 2 passes, target 30 Mbps / max 40 Mbps 1080p. **Max render quality** activé. **Use previews** désactivé pour livraison finale.

Ajuste selon ton matériel ; ces valeurs sont des floors, pas des plafonds. Un client broadcast te donnera sa fiche ; ne devine jamais.

## Livraison cloud et intégrité fichier

Upload **Frame.io**, **Drive** ou **Dropbox** selon client. Nomme le dossier `PROJET_livraison_YYYYMMDD`. Inclus `README_livraison.txt` avec tableau codec/résolution/usage. Pour gros fichiers ProRes, vérifie que le client peut télécharger (limite IT entreprise).

Option : checksum MD5 sur master pour archives longues. Le client rarement ; toi oui pour sleep at night.

## Double compression : stratégie

Toute plateforme recompresse. Ton job : **être légèrement au-dessus** du minimum recommandé, pas au minimum. Si YouTube suggère 35 Mbps 4K, vise 45-50 sur contenu IA grainé. Si tu livres déjà ultra compressé, la 2e passe détruit les visages.

Ne pas confondre « fichier léger pour mail » et « master qualité ». Deux fichiers, deux noms.

## Spécificités contenu IA à l'export

**Grain ajouté en post :** ne pas sharpener après grain. Le sharp avant export H.264 aggrave les artefacts autour des contours IA. **Textes et logos composés :** exportez en résolution native, évitez upscale logiciel dernier moment. **Dégradés ciel :** si banding apparaît à l'export, léger bruit dans les ombres avant encodage (très subtil) ou montée débit. **Visages :** débit trop bas = peau cire ; montez 5 Mbps avant de toucher à l'étalonnage.

Pour sous-titres accessibles : [sous-titres burn-in et fichiers .srt séparés](/blog/sous-titres-burn-in-accessibles-video-ia). Livre les deux si le brief le prévoit.

## Scénarios réels

**Agence livre spot 30 s + bannières.** Master ProRes + H.264 1080p 40 Mbps client + 9:16 25 Mbps Meta + WAV VO stems. Fiche technique une page.

**Créateur YouTube seul.** Export 4K H.264 45 Mbps, pas de ProRes (stockage). Vérifie sur téléphone avant upload. Garde projet DaVinci.

**Client TV régionale.** Demande fiche MPEG-2 spécifique. Tu exportes depuis master, tu ne livres pas le fichier YouTube.

**Batch 10 Shorts.** Preset DaVinci sauvegardé `SHORTS_1080x1920_20Mbps`. Même loudness -14 LUFS tous fichiers. Cohérence perçue sur le fil.

## Erreurs fréquentes et correctifs

**Un seul MP4 « universel ».** Fix : master + dérivés.

**Bitrate trop bas sur visages IA.** Fix : +5 à 10 Mbps ou H.265 meilleur rendement.

**Double sharpening (post + export).** Fix : sharp uniquement en étalonnage, modéré.

**Audio -6 LUFS « fort ».** Fix : -14 à -16 selon plateforme, voir article loudness.

**Recadrage vertical après export horizontal.** Fix : timeline dédiée 9:16, pas crop destructif.

**HDR export sans écran HDR.** Fix : SDR master pour web ; HDR seulement si pipeline et client validés.

## Checklist export jour J (à cocher)

1. Timeline verrouillée, pas de offline media rouge.
2. Loudness mesuré et noté (-14 LUFS web typique).
3. Master ProRes exporté et vérifié lecture.
4. Chaque dérivé plateforme exporté avec preset nommé.
5. Test laptop + téléphone par dérivé.
6. README livraison avec tableau codec/résolution.
7. Archive projet + masters sur backup.
8. Mail client avec liens et usage par fichier.

Huit cases. Si tu en sautes une, le client ou la plateforme te la rappellera douloureusement.

## Cas limites : alpha, transparence, ProRes 4444

Logos animés avec transparence : **ProRes 4444** ou PNG sequence si intégration client en post. H.264 ne gère pas l'alpha proprement. Pour overlays texte client qui composera en interne, livre aussi PNG séquence ou MOV alpha.

Les vidéos IA avec fond vert mal keyé : ne livre pas le vert au client « pour qu'ils gèrent ». Key propre ou fond neutre. Un export vert cheap passe la dette technique au client et ternit ta réputation.

**Nom fichier `final_FINAL2.mp4`.** Fix : convention `PROJET_usage_codec_vX`.

## Frame rate, color space et sous-titres à l'export

**Frame rate** : exporte au fps de la timeline (24, 25 ou 30). Mélanger 23,976 et 25 dans un même projet puis livrer en 25 sans conversion propre crée micro-saccades sur mouvements IA déjà fragiles. Si le client impose 25 fps et ta timeline est 24, convertis une fois avec interpolation qualité, pas en laissant le lecteur client deviner.

**Color space** : pour le web SDR, Rec.709 est le défaut raisonnable. N'exporte pas HDR10 « parce que c'est mieux » sans écran HDR de validation et sans demande client. Les vidéos IA étalonnées en SDR sur moniteur calibré deviennent imprévisibles en HDR automatique des TV récentes.

**Sous-titres** : livre `.srt` séparé en plus du burn-in si le brief prévoit réutilisation multi-plateformes. Vérifie encodage UTF-8 et timecodes alignés sur le dérivé livré, pas sur le ProRes si les durées divergent d'une frame.

**Fast start / moov atom** : pour preview web et certains players corporate, active **fast start** (moov en tête du MP4) afin que la lecture démarre avant téléchargement complet. Un master ProRes n'a pas ce besoin ; un H.264 review oui.

## Test A/B export rapide (10 minutes)

Exporte 10 secondes identiques du plan le plus difficile (visage + ciel dégradé) en trois débits : 12 Mbps, 25 Mbps, 45 Mbps H.264 1080p. Ouvre sur laptop milieu de gamme. Note le premier débit où la peau et le ciel restent acceptables. Ce débit devient ton floor projet, pas la valeur générique d'un article blog.

Références : [YouTube recommended encoding](https://support.google.com/youtube/answer/1722171), [Apple ProRes white paper](https://www.apple.com/final-cut-pro/docs/Apple_ProRes_White_Paper.pdf), [Vimeo compression guidelines](https://help.vimeo.com/hc/en-us/articles/12426043233169-Video-compression-guidelines).

![Contrôle qualité export vidéo IA sur moniteur et smartphone avant livraison client](/images/blog/optimiser-export-codecs-livraison-video-ia/workflow-2.webp)

Je décortique ce point directement en vidéo sur ma chaîne Business Dynamite.

[Voir l'explication en vidéo](https://www.youtube.com/watch?v=MKefYergHoA)

## FAQ

**Quel codec choisir pour livrer à un client corporate ?**

Master ProRes 422 HQ (ou DNxHR HQX) pour archivage et flexibilité, plus un H.264 High Profile 1080p ou 4K entre 25 et 50 Mbps pour diffusion interne et web. Précise dans la fiche livraison quel fichier est prévu pour quelle usage. Le client qui met le H.264 sur un écran salon 4K doit avoir assez de débit ; sinon fournis aussi une version 4K. Ne livre jamais uniquement un fichier social 15 Mbps comme master unique.

**H.264 ou H.265 pour YouTube en 2026 ?**

Les deux fonctionnent. H.264 reste le plus compatible en amont. H.265 offre meilleure qualité à débit égal pour les textures fines typiques de l'IA. Si tu exportes H.265, teste un upload privé et vérifie la rétention visuelle après traitement YouTube. Garde toujours un master ProRes ou H.264 haut débit en archive. YouTube recompressera de toute façon une fois.

**Quel débit minimum pour une vidéo IA 1080p sans effet bouillie ?**

En pratique, ne descends pas sous 15-18 Mbps pour du contenu avec visages et détails, sauf contrainte extrême. Vise 25-40 Mbps pour livraison client pro 1080p. Les plans avec ciel dégradé et peau en gros plan punissent les 8 Mbps. Fais un test A/B export 15 vs 35 Mbps sur la même séquence 10 s : la différence sur laptop milieu de gamme te convaincra.

**Dois-je exporter en 4K si la timeline est en 1080p ?**

Upscale 4K n'améliore pas une IA native 1080p pour la qualité réelle ; ça augmente la taille et peut donner une fausse netteté. Exporte à la résolution native de production sauf si le client impose 4K pour grille broadcast. Si tu as généré en 4K, livre 4K. Si tout est 1080p, livre 1080p propre plutôt qu'un upscale vide.

**Comment nommer les fichiers pour éviter le chaos ?**

`PROJET_usage_dimensions_codec_version.extension`. Exemple : `ACME_spot30_meta_1080x1920_h264_v2.mp4`. Pas d'espaces, pas de « final ». Le numéro de version incrémente à chaque livraison client. Le client retrouve le bon fichier six mois plus tard ; toi aussi quand il demande « la version sans logo ».

**L'audio doit-il être exporté séparément ?**

Pour les projets pro avec VO, musique ou mix complexe : oui, livre stems (VO, M&E, mix complet). Format WAV 48 kHz 24-bit ou AAC 320 kbps minimum sur le mix stéréo livré. Le loudness cible dépend de la plateforme (-14 LUFS intégré typique streaming). Documente le niveau mesuré sur la fiche livraison.

**Que faire si le client se plaint après compression sur sa plateforme ?**

Demande quelle plateforme, quel fichier utilisé, capture écran si possible. Souvent ils ont uploadé le mauvais dérivé ou un outil interne a recompressé. Fournis le profil adapté (souvent plus haut débit pour laisser la marge à la 2e compression). Rappelle que double compression est normale : ton export doit être légèrement au-dessus du minimum plateforme, pas au minimum.

**Faut-il livrer le projet DaVinci / Premiere au client ?**

Sauf clause contractuelle, non par défaut. Livre masters et dérivés. Le projet NLE reste ton outil de travail et contient tes presets, tes corrections et parfois des assets sous licence. Si le client exige le projet, facture la passation et nettoie les médias non licenciables. Précise au brief ce qui est inclus dans la livraison.

<!-- PUBLICATION DATE: 2026-06-11 -->
