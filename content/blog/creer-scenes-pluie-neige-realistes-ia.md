---
title: "Créer des scènes pluie et neige réalistes avec IA"
date: "2026-06-09"
dateModified: "2026-06-10"
category: "tutoriels"
excerpt: "Approche couche par couche pour rendre météo, matières et mouvements plus crédibles sans surcharge de prompt."
thumbnail: "/images/blog/creer-scenes-pluie-neige-realistes-ia/hero.webp"
---
« Heavy rain cinematic » donne une soupe numérique : gouttes figées, bitume plastique, cheveux secs sous le déluge. La pluie n'est pas un mot-clé. C'est une **stack de couches**.

**Créer des scènes pluie et neige réalistes avec IA** : plan sec validé d'abord, météo et son ensuite. Pas l'inverse. Ce guide détaille l'approche couche par couche que j'utilise pour des pubs, clips et courts métrages où la météo doit vendre l'émotion sans trahir la physique.

![Rue nocturne sous pluie fine avec reflets au sol et personnage éclairé par néon crédible](/images/blog/creer-scenes-pluie-neige-realistes-ia/hero.webp)

## La météo IA est un problème de couches, pas d'adjectifs

Quand tu demandes « pluie cinématique » en une passe, le modèle optimise une image figée. Il peint des traits blancs, assombrit le ciel, lisse le bitume. Le mouvement vidéo révèle aussitôt les gouttes qui ne tombent pas, les cheveux qui ne collent pas, le sol sec sous les pieds.

La pluie crédible combine au minimum : décor et lumière cohérents, sol **humide** avec reflets, particules de pluie en profondeur (foreground, midground, background), personnage avec wet look sur cheveux et vêtements, son de pluie calibré. La neige ajoute : flocons de tailles variées, accumulation crédible sur les épaules, pas de tempête uniforme sauf intention.

La neige a ses pièges : flocons identiques, ciel et sol même luminance, personnage en parka parfaite sans vapeur de souffle en froid extrême. Même logique de couches : plan froid validé, puis météo, puis détails wet/froid.

| Couche | Pluie | Neige |
| --- | --- | --- |
| Base | Plan sec, lumière verrouillée | Plan froid, key froide |
| Sol | Bitume mouillé, reflets néon | Sol enneigé ou mixte boue/neige |
| Particules | Fine + medium + gros plan | Flocons proches flous, lointains fins |
| Sujet | Cheveux collés, épaules sombres | Accumulation épaules, souffle optionnel |
| Son | Pluie foreground + room tone | Vent léger + craquement pas |

Pour la lumière extérieure, croise avec [calibrer la lumière intérieur extérieur en IA](/blog/calibrer-lumiere-interieur-exterieur-ia). Pour les ambiances sombres humides, voir [comment créer une ambiance sombre cinématique avec l'IA](/blog/comment-creer-ambiance-sombre-cinematique-avec-ia).

## Workflow couche par couche

### Étape 1 : générer le plan sans météo

Rue, personnage, néons, cadrage, focale. Valide tout sauf la pluie. Si le plan sec ne tient pas, la pluie ne le sauvera pas. C'est la règle que tout le monde contourne et que tout le monde regrette.

### Étape 2 : verrouiller le sol humide en image ou inpainting

Inpaint le sol pour bitume mouillé avec reflets des sources lumineuses présentes. Ne demande pas des reflets d'une ville différente. Les reflets doivent **citer** les néons du plan. Sinon le cerveau crie composite raté.

### Étape 3 : ajouter les particules par profondeur

Foreground : quelques gouttes ou flocons larges, légèrement flous. Midground : pluie fine visible devant le personnage. Background : bruine ou flocons petits. En vidéo, overlay de stock pluie/neige tourné ou généré séparément, blend mode Screen ou Add, opacité modérée. Clips courts bouclés si besoin.

![Workflow couches pluie décor humide particules overlay correction personnage](/images/blog/creer-scenes-pluie-neige-realistes-ia/workflow-1.webp)

### Étape 4 : wet look sur le personnage

Img2img léger ou inpaint ciblé : cheveux plus foncés, épaules mouillées, tissu collé si l'intensité le demande. Un seul levier par passe. Si tu changes cadrage et wet look ensemble, tu ne sauras pas ce qui a cassé.

### Étape 5 : vidéo si nécessaire

Génère le mouvement sur le plan déjà humide, pas sur le plan sec + prompt pluie. Clips courts. Mouvement caméra modeste. Si les gouttes figent, overlay particules en post sur la vidéo plutôt que regénération complète.

### Étape 6 : son et mix

Pluie en foreground (plus présente), ambiance rue en mid, musique ou dialogue au-dessus. Sans son, la pluie IA reste un fond d'écran. Voir [gérer la profondeur sonore pour court métrage IA](/blog/gerer-profondeur-sons-ambiances-court-metrage-ia).

### Scénario A : rue nuit, pluie fine, personnage seul

Plan sec 35 mm validé. Sol inpainté mouillé avec reflets néon rose et bleu. Overlay pluie fine 15 % opacité. Cheveux assombris en inpaint. Son : pluie + distant traffic. Résultat : clip 8 s crédible pour reel. Temps total : moins qu'une après-midi à regénérer « heavy rain » en une passe.

### Scénario B : jour gris, pluie moyenne, dialogue serré

Plan serré visage, fond flou. Moins de particules visibles, plus de wet look subtil. Gouttes sur épaule du manteau en inpaint. Son pluie plus bas pour laisser le dialogue. Évite le plan large jour sous pluie IA si tu n'as pas le temps : la géométrie du ciel et des immeubles dérive vite.

### Scénario C : neige, parking extérieur, tension

Plan froid, key bleue, ombres douces. Sol neige avec traces de pas cohérentes vers le personnage. Flocons overlay trois profondeurs. Souffle visible optionnel si froid narratif. Pas de tempête sauf si le récit l'exige : la neige fine vend mieux la solitude que le blizzard générique.

## Dépannage

**Gouttes figées en vidéo.** Overlay particules animé. Ou clip très court sans mouvement caméra fort. La pluie native vidéo IA reste le point faible en 2026.

**Sol sec sous les pieds.** Le sol n'a pas été traité. Retour étape 2. Les reflets au sol font 50 % de la crédibilité.

**Cheveux secs.** Wet look manquant. Inpaint ciblé ou second passage img2img léger sur la zone cheveux/épaules.

**Reflets néon incohérents.** Tu as copié une ref pluie d'une autre ville. Reprends les sources lumineuses du plan.

**Neige = points blancs uniformes.** Varie taille et opacité des flocons. Flous au premier plan, fins à l'arrière.

**Image trop sombre « parce que pluie ».** La pluie n'excuse pas une key mal posée. Corrige la lumière du plan sec. Voir [comment corriger un mauvais lighting en IA](/blog/comment-corriger-mauvais-lighting-ia).

**Vent fort absent en neige.** Le flocon tombe verticalement comme en studio. Fix : incline légèrement la direction des particules, ajoute un souffle de vent en son. La cohérence météo image + son vend le froid.

**Vapeur de souffle oubliée en froid extrême.** Optionnel mais puissant en gros plan. Overlay léger ou inpaint. Un seul beat, pas sur tout le film.

## Intégrer la météo dans le montage, pas seulement en génération

Le monteur est le dernier gardien de la crédibilité pluie. Quand tu enchaînes plan large et gros plan, l'intensité des particules doit suivre une logique, pas un hasard de fichiers sources. Note sur la timeline : opacité overlay, version de fichier pluie, direction. Si tu changes de clip overlay entre deux plans adjacents, le spectateur sent la couture même s'il ne peut pas la nommer.

Les fondus enchaînés entre scènes sous pluie et scènes sèches demandent une transition sonore. Fais monter la pluie en audio avant que l'image ne montre la rue mouillée, ou l'inverse selon le suspense. L'oreille prépare le corps à croire l'image.

Pour la neige, la continuité des traces de pas est un détail de montage. Si le personnage marche dans la neige au plan 3, le plan 4 doit montrer des traces cohérentes ou un plan où les pieds ne sont pas visibles. L'IA oublie les traces. Tu les gères en inpaint ou en évitement de cadrage.

Les inserts mains (gouttes sur doigts, gants humides) sauvent des scènes météo où le plan large faiblit. Génère ou filme ces inserts séparément. Deux secondes d'insert bien placées valent dix secondes de pluie overlay sur un plan large menteur.

Je décortique ce point directement en vidéo sur ma chaîne Business Dynamite.

[Voir l'explication en vidéo](https://www.youtube.com/watch?v=z22_SY0SOi4)

![Comparaison pluie native IA vs workflow couches overlay sol humide](/images/blog/creer-scenes-pluie-neige-realistes-ia/workflow-2.webp)

> 💡 **Frank's Cut:** génère le plan **sans pluie** d'abord. Valide cadrage et lumière. Météo en overlay ensuite. Quand un client dit « il manque de la pluie », tu ajoutes une couche sans tout casser.

Pour les overlays météo, des bibliothèques comme [Artgrid](https://artgrid.io) ou [Pexels](https://www.pexels.com) fournissent du stock pluie/neige tourné, souvent plus crédible que la génération native en mouvement. La doc [Foundry Nuke on compositing rain](https://learn.foundry.com/nuke/content/comp_environment/rain_snow.html) explique la logique de profondeur même si tu restes dans Resolve ou After Effects.

## FAQ

### Faut-il tout générer en une passe avec le mot pluie ?

Non, sauf pour des stills rapides où le mouvement n'existe pas. Pour la vidéo et les plans héros, la passe unique produit des artefacts que tu passeras des heures à corriger. Plan sec, sol humide, overlay, wet look : l'ordre est non négociable pour un rendu pro. Les débutants choisissent la passe unique parce qu'elle donne un aperçu immédiat « wow ». Les pros choisissent les couches parce qu'elles livrent sans pick-up le lendemain. Le wow qui coûte huit heures de fix en post n'est pas un wow rentable.

### Quelle intensité d'overlay pluie ?

Commence à 10-15 % d'opacité. Monte par paliers de 5 %. Sur un gros plan, moins de particules visibles, plus de wet look. Sur un plan large, plus de profondeur de particules, wet look sur le sol prioritaire. L'excès d'overlay donne l'effet confetti.

### Comment faire tenir la pluie sur une séquence de plusieurs plans ?

Même famille d'overlay, même direction de chute, même intensité relative par type de plan (serré vs large). Note sur la feuille de montage : « pluie fine, overlay v02, opacité 12 % plans larges, 8 % serrés ». La cohérence météo est une décision de montage, pas un hasard de génération.

### La neige demande-t-elle une lumière différente de la pluie ?

Oui. La neige réfléchit beaucoup. Key souvent plus diffuse, ombres plus douces, risque de surexposition du sol. La pluie assombrit et spéculise le bitume. Ne copie pas les réglages lumière d'une scène pluie sur une scène neige sans adaptation.

### Peut-on utiliser uniquement du stock sans IA pour la météo ?

Sur un plan tourné ou généré sans météo, oui. C'est souvent le meilleur compromis qualité/temps pour la vidéo. L'IA sert au décor et au personnage. Le stock sert aux particules. Le métier est dans l'intégration et le son.

### Comment éviter le bitume plastique sous la pluie ?

Inpaint ou prompt sol avec « wet asphalt texture, subtle reflections ». Ajoute du grain léger en post. Évite le sharpening global sur le sol mouillé qui révèle le bruit numérique en traînées.

### Wet look trop fort : comment corriger ?

Masque inversé sur cheveux et vêtements, baisse contraste local ou désature légèrement. Le wet look doit suggérer l'humidité, pas un produit brillant pour pub shampoing sauf brief explicite.

### Pluie et néon : comment gérer les reflets ?

Liste les sources néon du plan. Les reflets au sol citent uniquement ces couleurs. Pas de magenta si le plan n'a que du bleu et de l'ambre. Cette règle simple élimine la moitié des composites ratés que je vois en review client.

### La neige en intérieur (fenêtre) demande-t-elle le même workflow ?

Oui en logique de couches, mais l'intensité baisse. Plan intérieur chaud validé. Flocons visibles à travers la vitre en overlay léger. Pas de tempête sur la vitre sauf intention. Condensation optionnelle sur le verre en inpaint pour vendre le contraste chaud/froid. Le son extérieur étouffé par la vitre : vent bas, pas de pluie sauf si les deux sont dans le récit. L'erreur classique : mettre une tempête fullscreen alors que le cadre ne montre qu'une fenêtre.

## Budget temps réaliste par scène météo

Plan sec validé : 30 à 60 minutes selon complexité. Sol humide inpaint : 20 minutes. Overlay particules calibré : 15 minutes. Wet look personnage : 20 minutes. Son calé : 30 minutes. Total honnête pour une scène rue nuit pluie crédible : demi-journée, pas une génération « heavy rain » de quinze minutes. Quand tu chiffres un devis client, utilise ces fourchettes. Tu évites de brûler ta marge en corrigeant une soupe numérique le soir de la livraison.

### Pluie battante vs bruine : même workflow ?

Non. La bruine vend la texture au sol et le wet look discret. La pluie battante demande des particules foreground plus denses et un son plus présent. Pour la battante en IA vidéo, reste sur des plans courts ou inserts. Le plan large sous déluge reste le point de rupture des moteurs actuels. La bruine est ton amie pour les séquences longues.

### Peut-on mélanger IA et stock pluie sur le même personnage ?

Oui, c'est le workflow recommandé. Personnage et décor en IA ou tournage, pluie en overlay stock calibré. Harmonise la direction de chute avec le vent du décor si les cheveux bougent. Désaccord vent cheveux / pluie verticale = alerte immédiate pour le spectateur.

La neige demande souvent plus de travail son que la pluie : le silence apparent, le craquement des pas, le vent qui monte entre les plans. Prévois cette ligne dans ton sound brief. Une image neige sans son froid vend à moitié l'hiver. Prévois toujours cinq minutes de calibration son météo après la dernière couche visuelle. Inversement, une pluie visuelle forte avec un son orage cartoon détruit le travail de couches. Image et son météo doivent être briefés ensemble dès le storyboard, pas en dernière minute dans la librairie stock.

<!-- PUBLICATION DATE: 2026-06-09 -->
