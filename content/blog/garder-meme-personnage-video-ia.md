---
title: "Garder le même personnage en vidéo IA, plan après plan"
date: "2026-10-20"
category: "guides"
excerpt: "La méthode de réalisateur pour garder le même personnage d'un plan à l'autre en vidéo IA : référence, Elements Kling, Seedance, Flow, Runway, découpage."
thumbnail: "/images/blog/garder-meme-personnage-video-ia/hero.webp"
---

Pour garder le même personnage d'un plan à l'autre en vidéo IA, il te faut trois choses, dans cet ordre : une référence fixe du personnage avant le premier plan (une image maître et deux ou trois angles), la fonction de référence du modèle vidéo plutôt que le simple texte (Elements chez Kling, référence vers vidéo chez Seedance, Composants dans Google Flow, références chez Runway), et un découpage qui évite les plans où le visage dérive. Le prompt seul ne suffit pas. Chaque clip est une nouvelle génération, et le modèle ne se souvient de rien.

J'ai écrit [pourquoi les personnages changent à chaque scène](/blog/pourquoi-personnages-changent-chaque-scene-ia) au printemps, côté diagnostic. Cet article-ci est la méthode de production, en vidéo, avec ce que les éditeurs documentent aujourd'hui. Tout ce qui concerne les outils vient de leurs pages officielles relevées le 20 octobre 2026. Je n'ai lancé aucune génération pour cet article.

![Cheffe costumière qui accroche trois blousons de cuir usés identiques sur un portant, pendant qu'une habilleuse ajuste le col d'un quatrième blouson porté par un jeune comédien](/images/blog/garder-meme-personnage-video-ia/hero.webp)

## Pourquoi ton personnage change entre deux clips

Sur un vrai tournage, la costumière prépare trois ou quatre exemplaires du même blouson, usés au même endroit. Si le comédien tache le premier, le deuxième prend le relais et personne ne voit la différence à l'écran. La continuité se fabrique avant le clap.

Un modèle vidéo n'a pas de costumière. Quand tu génères le plan 2, il ne sait pas à quoi ressemblait le plan 1. Il relit ton prompt, il tire au sort une interprétation, et « une femme de quarante ans aux cheveux courts » peut devenir dix femmes différentes. En image fixe, tu peux relancer jusqu'à tomber sur la bonne. En vidéo, le problème se multiplie : le visage bouge, tourne, passe dans l'ombre, et chaque image du clip est une occasion de dériver.

Trois moments font casser la ressemblance plus que les autres :

- le profil et le trois quarts dos, parce que le modèle doit inventer une partie du visage qu'il n'a jamais vue sur ta référence ;
- les changements de lumière forts, où la forme du nez et des pommettes se redessine ;
- les clips longs, où l'écart s'accumule de seconde en seconde.

Les trois se préparent avant de générer quoi que ce soit, comme la costumière qui achète ses quatre blousons avant le premier jour de tournage.

## Étape 1 : fabrique la référence avant le premier plan

Tout part d'une image maître : ton personnage de face, lumière neutre, expression calme, tenue complète visible. C'est l'équivalent de la photo d'essayage que la costumière épingle au mur. Runway le recommande d'ailleurs pour ses références : une photo de bonne qualité du sujet, une lumière égale et naturelle, une expression neutre comme point de départ.

À partir de cette image, prépare deux ou trois vues de plus : un trois quarts, un profil, un plan taille qui montre la silhouette et les chaussures. Ces vues serviront à nourrir les modèles qui acceptent plusieurs images. Pour les fabriquer proprement en image, j'ai détaillé la méthode dans [créer des personnages cohérents sur plusieurs images](/blog/personnages-coherents-plusieurs-images-ia) et, avec un outil précis, dans [le workflow Nano Banana pour personnages cohérents](/blog/workflow-nano-banana-personnages-coherents).

Écris aussi une fiche texte courte, que tu recopieras mot pour mot dans chaque prompt : âge, coupe et couleur de cheveux, un ou deux signes distinctifs, la tenue décrite toujours avec les mêmes mots. Si tu écris « veste en cuir » au plan 1 et « blouson » au plan 4, le modèle entend deux vêtements.

> 💡 **Le cut de Frank :** donne à ton personnage un détail visible dans tous les cadres, un foulard rouge, une cicatrice au sourcil, des lunettes rondes. Quand le visage dérive un peu, ce détail tient le spectateur. C'est un vieux truc de costumier, et il marche aussi sur un modèle vidéo.

## Étape 2 : passe par la bonne porte du modèle vidéo

La plupart des modèles proposent trois entrées : le texte seul, l'image de départ (et parfois de fin), et une entrée dédiée aux références. Avec le texte seul, rien ne passe d'un plan à l'autre. Avec une image de départ, le premier instant est juste, puis le modèle improvise dès que la tête bouge. L'entrée par références sert précisément à replacer un personnage donné dans une nouvelle scène, et c'est celle que je prends dès que l'outil la propose.

<TableauComparatif legende="Fonctions de référence de personnage dans quatre outils vidéo" source="https://kling.ai/quickstart/klingai-element-library-3-user-guide" verifieLe="2026-10-20">

| Outil | Nom de la fonction | Ce que la doc officielle annonce | Limite à connaître |
|---|---|---|---|
| Kling | Elements (Element Library) | 2 à 4 images par élément, jusqu'à 7 personnages de référence en vidéo, voix liée au personnage en 3.0 Omni | Guide écrit pour Kling 3.0, 3.0 Omni et O1, rien sur la 4.0 dans cette page |
| Seedance 2.5 | Référence vers vidéo (R2V) | Lecture des vidéos de référence (intention, cadrage, langage cinéma), jusqu'à 30 s | Dans Dreamina : jusqu'à 50 entrées multimodales, nombre exact côté ByteDance non publié |
| Google Flow | Composants / Références vers vidéo | Disponible avec Veo 3.1 Lite, Veo 3.1 Rapide et Gemini Omni Flash 1.1 | Absent de Veo 3.1 Qualité ; 8 s seulement sur Veo 3.1 |
| Runway | References | Références sauvegardées, appelées avec @ dans le prompt, partageables avec l'équipe | Les types de références dépendent du modèle choisi |

</TableauComparatif>

*Sources : guide Kling Element Library, page Seedance 2.5 de ByteDance Seed, page Dreamina Seedance 2.5, aide Google Flow, centre d'aide Runway, tous consultés le 20 octobre 2026.*

### Kling : les Elements

Kling a poussé l'idée le plus loin, et son [guide de l'Element Library](https://kling.ai/quickstart/klingai-element-library-3-user-guide) est le plus détaillé des quatre. Tu crées un « élément » une fois (un personnage, un objet, un décor) avec une image principale et jusqu'à trois images complémentaires, puis tu l'appelles par son nom dans tes prompts, plan après plan.

<Capture src="kling-elements-bibliotheque-2026-10-20.webp" alt="Guide officiel Kling Element Library avec cinq points forts surlignés en vert : voix liée aux personnages, éléments liés en image vers vidéo, sept personnages de référence, réutilisation et vues générées par l'IA" legende="Les cinq nouveautés de l'Element Library listées par Kling. Le point 2 compte le plus pour la continuité : jusqu'à 3 éléments liés à une image de départ." source="https://kling.ai/quickstart/klingai-element-library-3-user-guide" captureLe="2026-10-20" />

Le point le plus utile pour un réalisateur est le deuxième : Kling 3.0 accepte jusqu'à trois éléments liés en génération depuis une image de départ, ou une image de départ et de fin. Kling écrit que cela corrige les sujets qui « perdent leur forme » quand la perspective ou le plan change. C'est là que la ressemblance lâche en premier, et le texte de Kling le reconnaît.

<Capture src="kling-elements-multi-images-2026-10-20.webp" alt="Section Multi-Image Elements du guide Kling : un élément contient de 2 à 4 images de référence, une principale et jusqu'à trois complémentaires, avec un tableau d'exemples de personnages" legende="La règle des 2 à 4 images par élément. Tes vues de face, trois quarts et profil de l'étape 1 trouvent leur place ici." source="https://kling.ai/quickstart/klingai-element-library-3-user-guide" captureLe="2026-10-20" />

Kling a aussi une fonction à part, Motion Control, pour un cas précis : tu as une image fixe de ton personnage et une vidéo de mouvement (un comédien, toi devant ta webcam), et tu veux que le personnage reprenne ce jeu. L'option « Bind Face Subject » verrouille le visage à partir de photos sous plusieurs angles.

<Capture src="kling-motion-control-visage-2026-10-20.webp" alt="Page Kling Motion Control avec les trois étapes Upload Your Assets, Bind Face Subject et Generate and Export, puis le bloc Flawless Facial Consistency in Any Angle" legende="Motion Control et son option Bind Face Subject. La FAQ de la même page précise qu'un seul sujet principal est pris en charge par vidéo : s'il y a plusieurs visages, le dominant l'emporte." source="https://kling.ai/feature/ai-motion-control" captureLe="2026-10-20" />

### Seedance 2.5 : la référence vers vidéo

Sur [sa page officielle](https://seed.bytedance.com/en/seedance2_5), ByteDance présente Seedance 2.5 comme un modèle « construit pour raconter en 30 secondes », avec un contrôle précis par références. La nouveauté qui t'intéresse : le modèle lit mieux les vidéos de référence, leur intention et leur cadrage, au-delà du simple transfert de mouvement.

<Capture src="seedance-2-5-reference-2026-10-20.webp" alt="Page officielle Seedance 2.5 de ByteDance Seed, section Smarter Reference and Editing Capabilities, avec deux exemples R2V : des images de référence d'un chien en papier transformées en plan vidéo, et un couple identique dans deux décors" legende="Les exemples R2V de ByteDance. À droite, le même couple passe d'une allée de parc à une vigne sans changer de visage ni de silhouette." source="https://seed.bytedance.com/en/seedance2_5" captureLe="2026-10-20" />

Dans Dreamina, l'application de ByteDance qui donne accès au modèle, la page Seedance 2.5 annonce jusqu'à 50 entrées multimodales dans une seule génération : photos, vidéos, musique, scripts, guides de style. Ta planche personnage entière peut donc partir en une seule génération.

<Capture src="dreamina-seedance-50-references-2026-10-20.webp" alt="Section Combine multiple references up to 50 inputs de la page Dreamina Seedance 2.5, avec le texte qui liste prompts, scripts, photos, vidéos, musique et guides de style" legende="La promesse des 50 entrées sur Dreamina. ByteDance ne publie pas ce chiffre sur sa propre page modèle, d'où la prudence." source="https://dreamina.capcut.com/seedance/seedance-2-5" captureLe="2026-10-20" />

Seedance fait partie des modèles que j'utilise pour Lost Garden, ma série animée (aucun modèle n'a fait un épisode seul), et Seedance 2.5 tourne par défaut dans ScreenWeaver. Pour régler le rendu image lui-même, j'ai écrit [comment obtenir un rendu cinéma avec Seedance](/blog/comment-obtenir-rendu-cinema-avec-seedance-2).

### Google Flow : attention au modèle choisi

Flow appelle ses références des « Composants ». Le piège est dans [la page d'aide sur les modèles et fonctionnalités](https://support.google.com/flow/answer/16352836?hl=fr) : Veo 3.1 Qualité, le modèle le plus beau de Flow, ne prend pas les Composants. Seuls Veo 3.1 Lite, Veo 3.1 Rapide (en 8 secondes uniquement) et Gemini Omni Flash 1.1 (de 4 à 10 secondes) les acceptent.

<Capture src="google-flow-references-modeles-2026-10-20.webp" alt="Aide Google Flow en français : liste des fonctionnalités prises en charge par Veo 3.1 Qualité, puis la mention Composants/Références vers vidéo dans les fonctionnalités non prises en charge, puis Gemini Omni Flash 1.1" legende="Sur l'aide de Flow, « Composants/Références vers vidéo » apparaît dans les fonctionnalités non prises en charge de Veo 3.1 Qualité." source="https://support.google.com/flow/answer/16352836?hl=fr" captureLe="2026-10-20" />

En pratique, tu as deux options sur Flow. Soit tu passes par Veo 3.1 Lite ou Rapide avec tes Composants, et tu acceptes un rendu un cran en dessous. Soit tu restes sur Qualité et tu tiens la cohérence par l'image de départ (première image, ou première et dernière), que tous les modèles de Flow acceptent.

### Runway : des références qu'on garde et qu'on partage

Chez Runway, d'après [l'article d'aide sur les références](https://help.runwayml.com/hc/en-us/articles/52963720640275-Using-reference-media-to-guide-your-generations), une référence téléversée n'existe que le temps de la session. Si tu lui donnes un nom, elle reste disponible dans les sessions suivantes, et tu peux la partager avec ton espace de travail. Dans le prompt, tu l'appelles avec @. Pour une équipe qui travaille sur le même personnage, c'est la fonction la plus pratique des quatre.

<Capture src="runway-references-personnages-2026-10-20.webp" alt="Centre d'aide Runway, section Example use cases de l'article sur les références : personnages cohérents à partir d'une seule image, transfert de style, fonds, combinaison de références" legende="Le premier cas d'usage cité par Runway : des personnages cohérents d'une scène, d'une lumière ou d'un style à l'autre, à partir d'une seule image." source="https://help.runwayml.com/hc/en-us/articles/52963720640275-Using-reference-media-to-guide-your-generations" captureLe="2026-10-20" />

Pour aller plus loin sur la technique de référence côté image, avec poids et angles sûrs, lis [IP-Adapter et références pour verrouiller un visage](/blog/reference-ipadapter-visage-coherent-plans).

## Étape 3 : découpe la scène pour protéger le visage

Les modèles ont des plans faciles et des plans risqués. Construis ta scène autour des premiers, et garde les seconds pour les moments qui en ont besoin.

Les plans sûrs : face et trois quarts face, plans rapprochés et plans taille, lumière qui ne change pas en cours de plan, clips courts. Les plans risqués : le profil strict, le personnage qui se retourne vers la caméra, le passage de l'ombre à la lumière, et la durée. Plus le clip est long, plus le visage a de temps pour glisser. Seedance 2.5 sait aller jusqu'à 30 secondes, ça ne veut pas dire que ton plan de dialogue doit les faire.

Pour un plan de visage, vise quelques secondes. Chaque coupe remet le compteur à zéro. Quand un plan risqué est indispensable (le retournement, la révélation), place-le juste après un gros plan bien tenu : le spectateur a le visage en tête et pardonne un léger écart.

> 💡 **Le cut de Frank :** si un plan de dos ou un plan large suffit à raconter le moment, prends-le. Le visage n'a pas besoin d'être là à chaque plan. Un plan sans visage ne peut pas rater sur la ressemblance.

Pour les costumes et accessoires qui doivent suivre le personnage, j'ai une méthode dédiée dans [gérer la continuité des costumes entre les scènes](/blog/comment-gerer-continuite-costume-scenes-ia).

## Étape 4 : raccorde les plans entre eux

Une fois le visage tenu, il reste la scène : la position du personnage, la direction du regard, la lumière d'un plan au suivant.

La technique la plus simple : prends la dernière image du plan 1 et donne-la comme image de départ du plan 2 quand les deux plans sont dans la continuité directe. Flow, Kling et la plupart des modèles acceptent une image de départ, et souvent une image de fin. Tu peux aussi générer d'abord l'image clé de chaque plan, la corriger en image fixe (où c'est plus facile), puis l'animer.

Une fois les plans générés, fais une passe de raccord comme le ferait une scripte : mets les plans côte à côte sur ta timeline, image par image au point de coupe, et regarde la coiffure, le col, les mains, la lumière. Mieux vaut trouver l'erreur à ce moment-là qu'au montage final, quand le plan est déjà calé sur la musique.

## Dépannage : le symptôme, la cause, le correctif

<TableauComparatif legende="Les dérives de personnage les plus fréquentes en vidéo IA et leur correctif" source="https://kling.ai/quickstart/klingai-element-library-3-user-guide" verifieLe="2026-10-20">

| Symptôme | Cause probable | Correctif |
|---|---|---|
| Le visage change dès le plan 2 | Plan généré en texte seul | Passer par l'entrée références ou l'image de départ |
| Le visage casse quand il tourne la tête | Référence de face uniquement | Ajouter trois quarts et profil à l'élément |
| La tenue change de couleur | Vêtement décrit avec des mots différents | Fiche texte recopiée mot pour mot |
| Le personnage vieillit ou rajeunit | Clip trop long ou lumière qui change | Couper en plans plus courts, lumière stable |
| Deux personnages se mélangent | Une seule référence pour deux sujets | Un élément ou une référence nommée par personnage |
| Flow ignore tes Composants | Veo 3.1 Qualité sélectionné | Passer sur Veo 3.1 Lite, Rapide ou Omni Flash |

</TableauComparatif>

*Le tableau croise les documentations citées plus haut avec mon analyse de réalisateur. La colonne « cause » reste une hypothèse à vérifier sur ton propre plan.*

Reste une cause qu'on oublie : la référence elle-même. Une image maître déjà un peu floue, ou retouchée avec un style différent de la scène, transmet ses défauts à chaque plan. Refais-la avant d'accuser le modèle.

## Sur une série, la continuité devient un problème d'organisation

Sur un clip de trente secondes, un dossier de références sur ton bureau suffit. Sur une série, le dossier devient vite un cimetière de versions. Lost Garden, ma série animée de dark fantasy, suit un chevalier silencieux à tête de lanterne et une enfant mystérieuse ; l'épisode 1 dure 17 minutes et m'a pris 63 heures de production, l'épisode 2 dure 21 minutes. Sur cette longueur, la question devient : où vit la référence du personnage, et comment arrive-t-elle dans chaque plan sans que je la recopie à la main ?

Lost Garden a été fait dans ScreenWeaver, l'outil que j'ai cofondé : le scénario écrit dans l'outil, le storyboard généré scène par scène, puis chaque plan produit dans l'interface de production. Je le cite parce qu'il répond à cette question précise, et je suis évidemment juge et partie.

<Capture src="screenweaver-continuite-personnages-2026-10-20.webp" alt="Accueil ScreenWeaver en français, quatre cartes dont Continuité et cohérence : personnages, décors et références circulent d'un plan à l'autre et préservent l'identité visuelle de l'œuvre" legende="La carte « Continuité et cohérence » de notre accueil. Les fiches personnages vivent dans le projet et suivent chaque plan du storyboard à la production." source="https://www.screenweaver.ai/fr" captureLe="2026-10-20" />

Concrètement, les personnages, décors et références circulent d'un plan à l'autre depuis le projet. Depuis le 19 octobre, un node Vidéo accepte aussi des vidéos de référence sur les modèles qui le permettent (Seedance 2.0 et 2.5, Wan 3.0, MiniMax H3) et une vidéo de mouvement avec Kling 3.0 Motion Control. Veo 3.1 n'en prend pas, là non plus. Le reste de la méthode ne change pas : une bonne image maître, des plans courts, une passe de raccord.

Si tu compares les outils pensés pour un film entier, mon [comparatif ScreenWeaver et LTX Studio](/blog/screenweaver-vs-ltx-studio) détaille aussi comment LTX gère ses propres Elements.

<CtaScreenWeaver titre="Tes personnages, rangés dans ton scénario" texte="Écris la scène, découpe-la en plans, et garde les fiches personnages attachées à chaque plan jusqu'à la production." destination="script" />

<Methodologie date="2026-10-20">

Sources consultées le 20/10/2026 : guide Kling Element Library (publié par Kling le 5 février 2026), guide Kling Elements, page Kling Motion Control, page Seedance 2.5 de ByteDance Seed, page Dreamina Seedance 2.5, aide Google Flow sur les modèles et fonctionnalités, centre d'aide Runway sur les références, accueil ScreenWeaver et fiche produit interne ScreenWeaver.

- Testé : rien. Aucune génération lancée pour cet article, aucune comparaison de rendu entre modèles.
- Pas vérifié : le comportement des Elements avec Kling 4.0, le nombre exact de références accepté par Seedance 2.5 côté ByteDance, le nombre de références vidéo chez Runway.
- Conflit d'intérêts : je suis cofondateur de ScreenWeaver, cité dans la dernière partie.

</Methodologie>

## FAQ

### Peut-on garder le même personnage en vidéo IA avec un simple prompt ?

Pas de façon fiable. À chaque génération, le modèle relit la même description et en tire une personne un peu différente. Tu peux limiter l'écart en recopiant une fiche texte identique dans chaque prompt, avec les mêmes mots pour les cheveux, l'âge et la tenue, mais le visage changera quand même d'un plan à l'autre. Pour une vraie continuité, il faut donner au modèle une image : une image de départ pour chaque plan, ou mieux, une fonction de référence comme les Elements de Kling, la référence vers vidéo de Seedance ou les Composants de Google Flow.

### Quelle IA vidéo garde le mieux le même personnage ?

Je n'ai pas fait de test comparatif consigné, donc je ne te donnerai pas de classement. Je peux en revanche comparer les documentations. Kling a la fonction la plus détaillée publiquement, avec des éléments de 2 à 4 images et jusqu'à 7 personnages de référence en vidéo. Seedance 2.5 mise sur la lecture des références vidéo et, dans Dreamina, jusqu'à 50 entrées. Runway rend les références réutilisables et partageables en équipe. Flow les accepte, mais pas sur Veo 3.1 Qualité. Le bon choix dépend de ton plan, et un test sur ta propre scène vaut mieux qu'un classement.

### Combien d'images de référence faut-il pour un personnage ?

Une image maître de face suffit pour démarrer, et Runway affirme qu'une seule image permet déjà des personnages cohérents. Pour les plans où la tête tourne, ajoute un trois quarts et un profil. Kling demande d'ailleurs entre 2 et 4 images par élément : une principale et jusqu'à trois complémentaires. Au-delà, l'intérêt baisse si les images ne se ressemblent pas parfaitement entre elles. Une planche de quatre vues propres, faites dans la même lumière et le même style, vaut mieux que dix photos disparates.

### Pourquoi le visage change quand le personnage tourne la tête ?

Parce que le modèle doit inventer la partie du visage qu'il ne voit pas sur ta référence. Avec une seule image de face, le profil est une supposition, et la supposition change à chaque génération. Kling le dit lui-même dans son guide : les sujets perdent leur forme quand la perspective ou le plan change. Deux parades : donner une vue de profil dans tes références, et éviter de faire tourner le personnage pendant le plan. Si le retournement compte pour l'histoire, coupe avant, puis repars d'un nouveau plan déjà de profil.

### Les Composants de Google Flow marchent-ils avec Veo 3.1 Qualité ?

Non, selon l'aide officielle de Google Flow consultée le 20 octobre 2026. La fonction « Composants/Références vers vidéo » est listée dans les fonctionnalités non prises en charge de Veo 3.1 Qualité. Elle fonctionne avec Veo 3.1 Lite et Veo 3.1 Rapide, en vidéos de 8 secondes uniquement, et avec Gemini Omni Flash 1.1, de 4 à 10 secondes. Si tu tiens au rendu de Qualité, passe par l'image de départ, ou par la première et la dernière image, que tous les modèles de Flow acceptent.

### Comment garder deux personnages cohérents dans la même scène ?

Donne une référence séparée à chacun, avec un nom. Une seule image qui montre les deux personnages ensemble pousse le modèle à mélanger leurs traits. Chez Kling, crée un élément par personnage : la vidéo en accepte jusqu'à 7. Chez Runway, enregistre chaque référence sous son nom et appelle-la avec @ dans le prompt. Côté découpage, alterne les plans serrés sur chacun avec quelques plans à deux, plus risqués, et vérifie au montage qu'aucun détail ne passe d'un personnage à l'autre, une couleur de veste par exemple.
