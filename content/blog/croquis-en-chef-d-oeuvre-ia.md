---
title: "Transformer un simple croquis (dessin) en chef-d’œuvre avec l’IA"
date: "2026-04-26"
category: "tutoriels"
excerpt: "ControlNet, img2img, conservation des masses, et reprise main : du trait utile au rendu final sans perdre l’âme du dessin."
thumbnail: "/images/blog/croquis-en-chef-d-oeuvre-ia/hero.webp"
---
Un croquis fort porte déjà **les masses** et le rythme. L’IA peut amplifier la matière, la lumière, et le détail, mais si tu lui donnes un gribouillis sans intention, tu obtiens un gribouillis HD. Ce tutoriel part d’un dessin scanné ou photo propre, et monte une chaîne **img2img** + contrôle de contours, puis une passe humaine ciblée.

Pour le contrôle du style global après la première passe, [comment contrôler le style visuel dans une génération IA](/blog/comment-controler-style-visuel-generation-ia).

## Préparer le croquis source

**Contraste maîtrisé**, fond neutre, lignes fermées quand tu veux du volume lisible. Corrige la perspective au crayon avant la machine : l’IA ne devine pas une structure que tu n’as pas posée.

Exporte en PNG suffisamment grand pour garder les micro-accidents de trait utiles.

## img2img : le bon dénoise

Trop fort : tu perds le dessin. Trop faible : tu n’ajoutes rien. Commence conservateur, monte par petits paliers. Compare toujours avec **overlay** à 50 % sur le calque source.

Pour des photos hyper réalistes si tu passes en rendu photo, [comment utiliser l’IA pour générer des photos hyper-réalistes](/blog/photos-hyper-realistes-ia).

![Repère de workflow : scan, dénoise, overlay.](workflow-1.webp)

## ControlNet ou équivalent : quoi verrouiller

**Scribble / soft edge** pour suivre le geste. **Depth** si tu veux poser un volume architectural. **Canny** si les contours doivent rester secs (BD, props techniques).

Ne cumule pas cinq contrôleurs sans raison : chaque contrainte vole de la liberté ailleurs.

## Matière et lumière : une passe à la fois

D’abord volume et lumière, ensuite texture, enfin grain. Si tu mélanges, tu brûles des détails sur des zones encore fausses.

Pour le grain final crédible, [comment ajouter du grain cinéma sur une image IA](/blog/comment-ajouter-grain-cinema-image-ia).

## Reprise main : où l’IA doit s’arrêter

Yeux, mains, symétrie du visage : trois zones où une retouche rapide au stylet fixe plus vite que dix regénérations aveugles.

## Vidéo YouTube à intégrer

Référence `@BusinessDynamite` :  
[https://www.youtube.com/watch?v=KJbLaSGOPPk](https://www.youtube.com/watch?v=KJbLaSGOPPk)

Pour la méthode : une intention claire, puis itération disciplinée.

![Second repère : ordre des passes lumière puis texture.](workflow-2.webp)

## FAQ

### Photo du carnet ou scan ?
Scan plat si possible. Photo ok si parallèle et sans vignette forte.

### Mon trait disparaît en img2img ?
Baisse le dénoise, renforce légèrement le prompt sur le trait, ou repasse par contour.

### Peut-on rester en « illustration » sans photo ?
Oui, ajuste le vocabulaire et évite les mots photo contradictoires.

### Faut-il un GPU puissant ?
Utile mais pas obligatoire au début : travaille résolution modeste puis upscale ciblé.

### Copyright du croquis ?
Le tien reste le tien. Documente la chaîne si client.

### ControlNet obligatoire ?
Non, mais très utile pour respecter le dessin.

### Et pour animer ensuite ?
Prépare des calques propres : [comment transformer une image IA en vidéo fluide et crédible](/blog/comment-transformer-image-ia-video-fluide-credible).

{/* PUBLICATION DATE: 2026-04-26 */}
