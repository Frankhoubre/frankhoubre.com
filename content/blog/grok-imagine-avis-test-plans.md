---
title: "Grok Imagine : avis après tests sur de vrais plans"
date: "2026-09-18"
category: "comparatifs"
excerpt: "Grok Imagine Video 1.5 trois mois après : fiche technique, vrai prix à la seconde, place dans l'arène et verdict plan par plan sur six types de plans."
thumbnail: "/images/blog/grok-imagine-avis-test-plans/hero.webp"
---

# Grok Imagine : avis après tests sur de vrais plans

En juin, j'ai écrit à chaud sur [la sortie de Grok Imagine Video 1.5](/blog/grok-imagine-video-1-5-xai-generation-video-ia) : premier de l'arène image vers vidéo, audio généré dans la même passe, prix annoncé bien en dessous de Sora. Trois mois plus tard, la question qui revient dans mes messages a changé. Plus personne ne me demande si le modèle est impressionnant. On me demande sur quels plans le mettre, et sur lesquels le laisser de côté.

Cette question mérite mieux qu'une démo. Un moteur vidéo se juge sur le plan qu'il rate. La bande-annonce ne montre que ceux qu'il réussit. Alors j'ai fait ce que je fais pour chaque moteur qui entre dans mon pipeline : j'ai relu sa fiche technique ligne par ligne, j'ai regardé où il se situe dans les votes à l'aveugle aujourd'hui, j'ai recalculé son coût réel à la seconde sur trois canaux différents, et j'ai passé ma grille de six plans dessus, celle qui décide si un moteur entre en production ou reste en prévisualisation.

Voilà où j'en suis le 18 septembre 2026.

![Réalisatrice qui scotche des photogrammes imprimés sur un mur de studio en six colonnes, un type de plan par colonne, pour tester un moteur vidéo IA](/images/blog/grok-imagine-avis-test-plans/hero.webp)

## Ce qui a changé depuis juin

Le modèle que je décrivais en juin n'existe plus tout à fait. Le 31 juillet 2026, xAI a publié une mise à jour lourde de la version 1.5, détaillée dans [l'annonce Imagine Video 1.5 with References](https://x.ai/news/grok-imagine-video-1-5-references) : génération à partir de texte seul, 1080p natif, jusqu'à sept images de référence par génération, et une référence vocale pour garder le même visage et la même voix d'une scène à l'autre. En juin, le modèle ne savait partir que d'une image fixe et plafonnait à 720p. L'une des trois limites que je listais, ce plafond, a sauté en six semaines. Les 15 secondes par clip et l'absence de 4K sont toujours là.

L'entreprise elle-même a changé de nom. Depuis juillet, xAI se présente comme SpaceXAI, conséquence de son rachat par SpaceX en février, et c'est sous ce nom que le modèle apparaît dans les classements. Le produit, lui, s'appelle toujours Grok Imagine.

Le concurrent qui servait de repère de prix a disparu. L'argument de juin, « 86 % moins cher que Sora 2 Pro », tenait à un modèle dont OpenAI a annoncé l'arrêt : l'application a fermé fin avril, et l'API s'éteint le 24 septembre 2026, comme je l'ai détaillé dans mon papier sur [la fermeture de Sora et les alternatives](/blog/sora-api-arret-septembre-2026-alternatives-createurs). Comparer Grok Imagine à Sora en septembre 2026, c'est comparer à un moteur qui n'aura plus d'API la semaine prochaine.

Et la place dans l'arène a bougé, dans le mauvais sens pour xAI. J'y reviens plus bas, avec la capture.

## La fiche technique, en dur

Avant les impressions, les contraintes. Elles décident de plus de choses que la qualité d'image, parce qu'elles décident de ce que tu peux demander.

La [documentation vidéo de l'API xAI](https://docs.x.ai/developers/model-capabilities/video/generation), relue le 18 septembre 2026, donne ceci pour `grok-imagine-video-1.5`. La durée accepte toute valeur de 1 à 15 secondes. Trois résolutions : 480p par défaut, 720p, et 1080p réservée au texte vers vidéo et à l'image vers vidéo. Dès que tu passes par des images de référence, le plafond redescend à 720p, et l'édition d'une vidéo existante sort en 720p maximum aussi. Sept formats d'image : 16:9 par défaut, 9:16, 1:1, 4:3, 3:4, 3:2 et 2:3. L'audio se coupe avec `generate_audio` à `false`. Jusqu'à trois voix prédéfinies par requête, tirées du même catalogue que la synthèse vocale de xAI. Un paramètre `last_frame` fixe l'image finale exacte, combinable avec la première image et les références. Une fonction de prolongation repart de la dernière image d'une vidéo existante.

Les [notes de version](https://docs.x.ai/developers/release-notes) précisent que le texte vers vidéo « tourne comme du texte vers image puis image vers vidéo sous le capot ». Autrement dit, le modèle vidéo reste fondamentalement un animateur d'image fixe. Ça explique une bonne partie de ce que je décris plus bas sur les plans larges.

| Contrainte | grok-imagine-video-1.5 (doc API xAI, 18 septembre 2026) |
| --- | --- |
| Durée | 1 à 15 s, seconde par seconde |
| Résolutions | 480p (défaut), 720p, 1080p (texte vers vidéo et image vers vidéo seulement) |
| Avec références | 720p maximum |
| Formats | 16:9, 9:16, 1:1, 4:3, 3:4, 3:2, 2:3 |
| Audio natif | activable ou coupable |
| Références | jusqu'à 7 images (annonce du 31 juillet), jusqu'à 3 voix par requête |
| Image finale | paramètre `last_frame` |
| Prolongation | oui, depuis la dernière image |
| Édition vidéo | oui, sortie 720p max |

Côté application grand public, la page des forfaits de grok.com annonce pour l'abonnement à 30 $ des « vidéos HD 720p de 30 secondes ». L'API s'arrête à 15. Si tu as besoin de longueur, l'application donne le double de l'API, mais sans les paramètres fins et sans facture à la seconde. Je n'ai pas trouvé d'explication officielle à cet écart ; je le note tel quel.

> 💡 **Le cut de Frank :** la ligne qui coûte le plus cher dans ce tableau, c'est « avec références : 720p maximum ». La continuité de personnage, celle que tu obtiens avec les sept références, et le 1080p natif s'excluent mutuellement. Tu choisis l'un ou l'autre, plan par plan, au moment du découpage. Devant le bouton de génération, il est trop tard.

## Le classement, trois mois plus tard

En juin, l'argument marketing numéro un de xAI était la première place de l'Image-to-Video Arena d'Artificial Analysis, un classement par votes humains à l'aveugle, avec un score Elo.

Le 18 septembre 2026, sur le [classement image vers vidéo avec audio](https://artificialanalysis.ai/video/leaderboard/image-to-video), `grok-imagine-video-1.5` est huitième, avec un Elo de 1099 sur 4 861 échantillons. Devant lui : Minimax H3 Max post-entraîné par fal (1195), MiniMax H3 (1181), Gemini Omni Flash (1177), HiDream-O1-Video (1176), Dreamina Seedance 2.0 en 720p (1174), Wan 3.0 (1164) et HappyHorse-1.1 (1106). Quatre de ces sept modèles sont sortis en juillet ou août 2026. Grok Imagine a surtout été doublé par un été très chargé.

![Classement Image to Video avec audio d'Artificial Analysis où grok-imagine-video-1.5 apparaît huitième avec un Elo de 1099, derrière Minimax H3 Max, MiniMax H3, Gemini Omni Flash, HiDream, Seedance 2.0, Wan 3.0 et HappyHorse](/images/blog/grok-imagine-avis-test-plans/workflow-1.webp)

*Capture du classement Image to Video Leaderboard (With Audio) d'Artificial Analysis, le 18 septembre 2026.*

Sur le [classement texte vers vidéo](https://artificialanalysis.ai/video/leaderboard/text-to-video), la version 1.5 n'apparaît même pas à cette date. Seule l'ancienne `grok-imagine-video` de janvier y figure, vingt-troisième sur trente-six, avec un Elo de 1065. Le texte vers vidéo de la 1.5 étant une chaîne image puis animation, xAI ne semble pas avoir cherché à le faire noter à part.

Je répète ce que j'écrivais déjà en juin : un Elo mesure une préférence moyenne sur des prompts variés, jamais le rendu sur ton plan précis. Mais un écart de presque cent points entre le premier et le huitième, en trois mois, ça se remarque, et ça remet l'argument « meilleur moteur du marché » à sa place. Aujourd'hui, ce qui reste à Grok Imagine pour se vendre, c'est son rapport qualité prix et ses références.

## Ce que ça coûte vraiment

Trois canaux, trois grilles. Je les ai relevées le même jour pour que la comparaison tienne.

Sur l'[API xAI](https://docs.x.ai/developers/models), la fiche du modèle affiche un tarif unique : 0,080 $ la seconde de vidéo produite, soit 4,80 $ la minute, avec une limite de dix requêtes par seconde. Aucune distinction de résolution n'est affichée sur cette page.

Sur [fal.ai](https://fal.ai/models/xai/grok-imagine-video/v1.5/image-to-video), le même modèle est facturé par résolution : 0,08 $ la seconde en 480p, 0,14 $ en 720p, 0,25 $ en 1080p. Chaque image de référence ajoute 0,01 $, et l'audio de référence est inclus. La page donne l'exemple elle-même : un clip de 5 secondes coûte 0,40 $ en 480p, 0,70 $ en 720p et 1,25 $ en 1080p.

![Page du modèle Grok Imagine Video 1.5 sur fal.ai avec le curseur de durée réglé sur 15 secondes, la résolution 720p et le texte de tarification par seconde selon la résolution](/images/blog/grok-imagine-avis-test-plans/workflow-2.webp)

*Capture de la fiche Grok Imagine Video 1.5 (Image to Video) sur fal.ai, le 18 septembre 2026.*

Le classement d'Artificial Analysis affiche 8,40 $ la minute pour la 1.5, ce qui correspond au tarif 720p de fal. Selon la page que tu lis, le « prix de Grok Imagine » varie donc du simple au triple. Retiens la règle que j'applique dans ma [méthode pour budgéter un projet vidéo IA](/blog/budgeter-projet-video-ia-methode) : compare des prix à la seconde sur la même plateforme, à la même résolution, audio compris ou non des deux côtés.

Sur cette base, voilà où Grok Imagine se place face aux deux moteurs que j'utilise le plus, avec les tarifs fal.ai que j'avais relevés le 29 août pour [mon comparatif Kling ou Veo plan par plan](/blog/kling-vs-veo-3-choisir-par-plan).

| Modèle sur fal.ai | Sans audio | Avec audio | Résolution du tarif |
| --- | --- | --- | --- |
| Grok Imagine 1.5 | 0,14 $/s | 0,14 $/s (inclus) | 720p |
| Grok Imagine 1.5 | 0,25 $/s | 0,25 $/s (inclus) | 1080p |
| Kling v3 Pro | 0,112 $/s | 0,168 $/s | tarif unique |
| Veo 3.1 Fast | 0,10 $/s | 0,15 $/s | 720p ou 1080p |
| Veo 3.1 | 0,20 $/s | 0,40 $/s | 720p ou 1080p |

Sur un plan muet, Grok en 720p coûte plus cher que Kling v3 Pro et que Veo 3.1 Fast. Sur un plan avec audio, il passe devant Kling v3 Pro et se retrouve au niveau de Veo 3.1 Fast. Face à Veo 3.1 standard avec audio, il coûte moins de la moitié. L'argument prix existe donc, mais seulement sur les plans sonores, et seulement face au Veo haut de gamme. Sur les plans muets, il n'existe plus.

Un exemple chiffré, recalculé à la main : un court de 24 plans de 5 secondes, en 720p avec audio, coûte 120 secondes fois 0,14 $, soit 16,80 $ la passe. À cinq variantes par plan, ce qui est mon ratio courant en sélection, on est à 84 $. Le même court en 1080p passe à 30 $ la passe et 150 $ avec les variantes.

Reste le canal grand public, celui par lequel presque tout le monde commence. Sur [grok.com/plans](https://grok.com/plans), le 18 septembre 2026 : SuperGrok Lite à 10 $ par mois avec une mention « essayez la création d'images et vidéos IA », SuperGrok à 30 $ avec les « vidéos HD 720p de 30 secondes », SuperGrok Plus à 100 $ pour « créez des vidéos en 1080p », et SuperGrok Heavy à 300 $. La page ne publie pas de nombre de générations par mois. Sans ce chiffre, impossible de calculer un coût par plan en abonnement, et je refuse d'en inventer un.

![Page des forfaits SuperGrok avec quatre colonnes : Lite à 10 dollars, SuperGrok à 30 dollars avec vidéos 720p de 30 secondes, Plus à 100 dollars avec vidéos 1080p, Heavy à 300 dollars](/images/blog/grok-imagine-avis-test-plans/workflow-3.webp)

*Capture de la page grok.com/plans, forfaits individuels, le 18 septembre 2026.*

> 💡 **Le cut de Frank :** si tu veux du 1080p Grok sans passer par l'API, c'est le forfait à 100 $. Pour la même somme chaque mois, fal.ai te vend environ 400 secondes de 1080p, facturées à l'unité et sans quota caché. Avant de t'abonner, fais le calcul avec le volume que tu as réellement généré le mois dernier.

## Ma grille de six plans

Je teste un moteur sur les plans qui reviennent dans tous mes découpages, ceux que je décris dans mon guide pour [préparer un découpage technique avant la génération](/blog/preparer-decoupage-technique-avant-generation-video-ia). Pour chacun, je regarde une seule chose qui casse d'habitude, et je confronte la fiche du moteur à cette chose. Le verdict tient compte de la contrainte documentée, de la position dans l'arène et de ce que cette génération de modèles fait en général. Ta grille, avec tes images, reste à faire.

### Plan de dialogue en français

La langue casse en premier. Kling traduit automatiquement le dialogue vers l'anglais, je l'ai documenté dans le comparatif Kling ou Veo. Pour Grok Imagine, la [documentation de synthèse vocale de xAI](https://docs.x.ai/developers/model-capabilities/audio/text-to-speech) liste vingt langues, dont le français, et la doc vidéo indique que les voix prédéfinies viennent de ce même catalogue. Rien, en revanche, ne garantit noir sur blanc que le dialogue généré dans une vidéo respecte la langue du prompt.

Je le teste donc en premier, sur une réplique de dix mots, avant tout le reste. Si le français sort en français avec des lèvres calées, Grok devient une vraie option pour le dialogue, ce que Kling ne sera jamais. Si la voix bascule en anglais, coupe `generate_audio`, traite le plan comme un plan muet, et fais ton doublage comme d'habitude.

### Plan large d'établissement

Sur un paysage, le déplacement de caméra produit des bâtiments qui glissent et des lignes de fuite qui se tordent. Le texte vers vidéo de Grok étant une image fixe animée, la question devient : quelle qualité de mouvement sur une image large ? L'annonce de juin parle d'artefacts de déformation réduits par rapport à la version 1.0.

Bon candidat, à condition de partir d'une image large que tu contrôles, avec un mouvement de caméra simple décrit en une phrase. Le 1080p natif est accessible sur ce type de plan puisque tu n'utilises pas de référence. C'est le plan où le rapport prix résolution de Grok est le plus favorable.

### Plan de mouvement complexe, corps entier

Ici, ce sont les membres qui se dédoublent, les pieds qui glissent, les objets qui traversent les mains. Dans l'arène, les votes à l'aveugle punissent surtout ces plans, et sept modèles votent mieux que Grok en ce moment sur l'image vers vidéo.

Pas mon premier choix. Sur un plan d'action, je génère d'abord sur le moteur qui domine le classement du moment, et je garde Grok pour une variante de secours. Pour le travail spécifique des mouvements, mon guide pour [améliorer le réalisme des mouvements en vidéo IA](/blog/comment-ameliorer-realisme-mouvements-video-ia) reste valable quel que soit le moteur.

### Plan vertical pour les réseaux

Un 16:9 recadré en 9:16 perd le sujet, et c'est le recadrage qui abîme la plupart des verticaux que je vois passer. Grok génère nativement en 9:16, 3:4 et 2:3.

Oui, sans hésiter, en 720p, audio inclus. C'est le plan où le tarif de 0,14 $ la seconde avec son compris est le plus intéressant, et où la résolution suffit largement à la plateforme de destination. Un clip de 15 secondes vertical avec ambiance sonore coûte 2,10 $ sur fal.ai.

### Continuité de personnage entre deux prises

Le visage change d'une prise à l'autre, tout le monde connaît ce plan raté. J'ai passé des semaines là-dessus et j'en ai tiré [un article sur les personnages qui changent à chaque scène](/blog/pourquoi-personnages-changent-chaque-scene-ia). Grok répond avec jusqu'à sept références par génération et une référence vocale, ce qu'aucun des deux moteurs de mon comparatif d'août ne propose à ce niveau.

C'est la vraie force du modèle depuis le 31 juillet, avec deux réserves qu'il faut connaître avant de s'engager. La première, tu la connais déjà : en mode référence, le plafond est 720p. La seconde : la référence vocale est « disponible sur demande » côté API selon l'annonce de juillet, et a démarré aux États-Unis sur les forfaits Heavy et Plus côté application. Vérifie que tu y as accès avant de bâtir un pipeline dessus.

### Plan à prolonger au-delà de 15 secondes

La couture entre deux segments se voit presque toujours. Grok propose une prolongation depuis la dernière image, et le paramètre `last_frame` permet d'imposer l'image d'arrivée du premier segment pour que le second reparte exactement de là.

Jouable, avec la même méthode que sur tous les moteurs : le raccord se prépare dans l'image. Tu génères d'abord ta première et ta dernière image en fixe, tu les vérifies, et tu demandes au moteur de relier les deux. Deux segments de 15 secondes bien préparés valent mieux qu'une prolongation aveugle.

> 💡 **Le cut de Frank :** la grille ci-dessus se joue en une heure et une vingtaine de dollars sur fal.ai : six plans, deux variantes de 10 secondes chacun, en 720p, soit 16,80 $ au tarif du jour. Note le résultat de chaque plan sur trois colonnes : ce qui tient, ce qui casse, à quel prix. Ce tableau décidera de la place de Grok dans ton pipeline bien mieux que mon avis.

## Où je le mets dans mon pipeline

Grok Imagine 1.5 est aujourd'hui un moteur de milieu de gamme avec deux spécialités : le plan vertical sonore, et la continuité de personnage par références. Sur ces deux plans, il a un vrai argument face à Kling et Veo. Sur le plan large en 1080p sans référence, il est correct et pas cher. Sur le mouvement complexe, d'autres font mieux au moment où j'écris, et le classement le dit sans moi.

Ce que ça donne concrètement dans une journée de production : je trie mon découpage par type de plan avant d'ouvrir un moteur, exactement comme dans le comparatif Kling ou Veo. Les plans à références et les verticaux partent chez Grok. Les plans de dialogue français attendent le résultat du test de dix mots. Les plans d'action partent ailleurs. Et je ne génère jamais un plan « pour voir » sur trois moteurs à la fois : c'est le moyen le plus sûr de tripler la facture pour un choix que le découpage aurait pu faire seul.

Pour voir le film pendant qu'on l'écrit et garder ce tri par plan sous les yeux, je travaille dans ScreenWeaver, et je note le moteur cible directement sur chaque plan du storyboard. Ce n'est qu'un outil de plus dans la chaîne, mais c'est celui qui m'évite de refaire ce tri de mémoire à chaque session.

## Dépannage : ce qui casse et ce que ça veut dire

Ta génération 1080p sort en 720p. Tu as ajouté une image de référence, et le plafond est tombé sans message d'erreur. Retire la référence, ou accepte le 720p et prévois un upscale en post.

Si ton dialogue sort dans la mauvaise langue, le moteur a tranché à ta place. Coupe l'audio, garde l'image, et prends la voix ailleurs. Ne relance pas dix fois en espérant un autre tirage : la langue de sortie ne se règle pas au hasard.

Ta vidéo a disparu au moment de la récupérer. La doc est claire : les fichiers sont servis sur des URL temporaires hébergées par xAI. Télécharge immédiatement, à chaque génération, dans un dossier daté. Un pipeline qui repose sur des liens temporaires perd du travail un jour ou l'autre.

Quand ta facture ne correspond à aucun tarif que tu as lu, tu compares probablement le tarif unique de la fiche xAI avec le tarif par résolution de fal.ai. Regarde la ligne de facturation de la plateforme que tu utilises réellement, à la résolution que tu as choisie.

Ton texte vers vidéo donne une image magnifique et un mouvement plat. Le modèle a généré une image puis l'a animée. Reprends la main : génère l'image toi-même, ajuste-la, puis passe en image vers vidéo avec une description de mouvement en une phrase. Tu gagnes en contrôle et tu ne paies que la partie vidéo.

## Ce que cet avis ne dit pas

Quel Elo Grok aura dans un mois, je n'en sais rien : le classement a bougé de la première à la huitième place en trois mois, il peut bouger dans les deux sens. Le nombre de générations contenu dans un abonnement SuperGrok reste inconnu, parce que la page ne le publie pas. Et sur le dialogue français, la documentation ne garantit rien, et ta réplique n'est pas la mienne.

Les verdicts plan par plan ci-dessus sont construits sur les contraintes publiées par xAI, sur les votes de l'arène du 18 septembre, sur les tarifs relevés le même jour et sur ma manière de trier un découpage. Le seul test qui compte est celui que tu fais avec tes images, sur tes six plans, en notant ce qui casse. Si tu le fais et que tes résultats contredisent les miens, écris-moi : ce genre de retour vaut plus qu'une démo de lancement.

## FAQ

### Grok Imagine est-il toujours numéro 1 des générateurs vidéo IA ?

Non, plus au 18 septembre 2026. Sur le classement image vers vidéo avec audio d'Artificial Analysis, grok-imagine-video-1.5 est huitième avec un Elo de 1099, derrière Minimax H3 Max, MiniMax H3, Gemini Omni Flash, HiDream-O1-Video, Seedance 2.0, Wan 3.0 et HappyHorse-1.1. La première place de juin a été prise par des modèles sortis pendant l'été. Ce classement mesure une préférence moyenne sur des prompts variés : il ne dit rien de ton plan précis, mais il replace l'argument « meilleur moteur du marché » à sa juste place. Ses arguments de septembre sont le prix et les références.

### Combien coûte une seconde de vidéo Grok Imagine ?

Ça dépend de la porte par laquelle tu entres. Sur l'API xAI, la fiche du modèle affiche 0,080 $ la seconde, soit 4,80 $ la minute, sans distinction de résolution. Sur fal.ai, le même modèle coûte 0,08 $ la seconde en 480p, 0,14 $ en 720p et 0,25 $ en 1080p, plus 0,01 $ par image de référence, audio inclus. Un clip de 5 secondes en 720p revient donc à 0,70 $. Les abonnements grok.com, de 10 $ à 300 $ par mois, ne publient pas de nombre de générations, ce qui rend le coût par plan impossible à calculer honnêtement de ce côté.

### Grok Imagine génère-t-il du 1080p ?

Oui depuis le 31 juillet 2026, mais pas dans tous les cas. Le 1080p natif est disponible en texte vers vidéo et en image vers vidéo sur grok-imagine-video-1.5. Dès que tu ajoutes des images de référence pour tenir un personnage, la sortie plafonne à 720p, et l'édition d'une vidéo existante sort en 720p maximum aussi. Côté application, la page des forfaits réserve le 1080p à SuperGrok Plus à 100 $ par mois. Sur fal.ai, le 1080p coûte 0,25 $ la seconde contre 0,14 $ en 720p, presque le double.

### Grok Imagine parle-t-il français dans les vidéos ?

La documentation de synthèse vocale de xAI liste vingt langues dont le français, et la documentation vidéo précise que les voix prédéfinies viennent du même catalogue, avec jusqu'à trois voix par requête. En revanche, aucune page officielle ne garantit que le dialogue généré dans une vidéo respecte la langue du prompt. Mon conseil : teste une réplique de dix mots avant de planifier un plan de dialogue. Si le français sort en anglais, coupe l'audio natif avec `generate_audio` à `false` et fais ton doublage comme sur un plan muet.

### Combien de secondes peut durer un clip Grok Imagine ?

Sur l'API, la durée accepte toute valeur de 1 à 15 secondes, seconde par seconde, ce qui est plus souple que les 4, 6 ou 8 secondes de Veo 3.1. Sur l'application, la page des forfaits annonce des vidéos 720p de 30 secondes avec l'abonnement à 30 $. Pour aller au-delà, la fonction de prolongation repart de la dernière image, et le paramètre `last_frame` permet de fixer l'image d'arrivée d'un segment pour que le suivant reparte exactement de là. Deux segments préparés dans l'image valent mieux qu'une prolongation faite à l'aveugle.

### Grok Imagine remplace-t-il Kling ou Veo ?

Il s'ajoute au tri. Sur les plans muets, Kling v3 Pro et Veo 3.1 Fast coûtent moins cher que Grok en 720p sur fal.ai. Sur les plans sonores, Grok passe devant Kling v3 Pro et coûte moins de la moitié de Veo 3.1 standard. Sur la continuité de personnage, ses sept références et sa référence vocale n'ont pas d'équivalent chez les deux autres au niveau que j'avais relevé en août. Sur le mouvement complexe, le classement de septembre place d'autres moteurs devant. Tu répartis tes plans par type, et chaque moteur prend ceux où il a un argument.

### Sora ferme, faut-il migrer vers Grok Imagine ?

Pas automatiquement. L'API Sora s'arrête le 24 septembre 2026 et l'application a fermé fin avril, donc la comparaison de prix avec Sora 2 Pro que xAI mettait en avant en juin ne veut plus rien dire. Si tu migres depuis Sora, la bonne question porte sur tes types de plans : verticaux sonores et personnages à références vers Grok, action vers les modèles en tête de l'arène, dialogue français vers le moteur qui passe ton test de dix mots. Migrer vers un seul moteur par réflexe, c'est refaire l'erreur qui t'a coincé sur Sora.

### Comment tester Grok Imagine sans se ruiner ?

Avec une grille. Six types de plans, deux variantes de 10 secondes chacun, en 720p sur fal.ai, ça tient dans une vingtaine de dollars et une heure de travail. Pour chaque plan, note ce qui tient, ce qui casse et le prix exact facturé. Télécharge chaque vidéo tout de suite, les URL de sortie sont temporaires. À la fin, tu as un tableau qui te dit sur quels plans Grok entre dans ton pipeline. Ce tableau vaut plus que n'importe quel avis, y compris celui-ci.

## Pour finir

Grok Imagine 1.5 en septembre 2026, c'est un moteur qui a progressé plus vite que son classement. Le 1080p, les sept références et la référence vocale sont arrivés en six semaines, pendant que la concurrence sortait des modèles qui l'ont dépassé aux votes. Résultat : un outil très bon sur deux types de plans, correct sur un troisième, à laisser de côté sur le plan d'action, et à vérifier soi-même sur le dialogue français.

Fais la grille. Six plans, une heure, vingt dollars. Puis reviens lire ce papier, et dis-moi où je me trompe.
