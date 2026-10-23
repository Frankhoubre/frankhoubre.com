---
title: "Avis Seedance 2.5 : ce que le modèle change pour une série"
date: "2026-10-23"
category: "analyses"
excerpt: "Avis Seedance 2.5 par un réalisateur de série IA : 30 s par prise, 50 références, prix officiels du 23 octobre, limites et où l'utiliser sans risque."
thumbnail: "/images/blog/seedance-2-5-avis/hero.webp"
---

Seedance 2.5 est aujourd'hui le meilleur modèle vidéo que je connaisse pour une série avec des personnages récurrents, à une condition : arriver avec ta bible de personnages déjà faite. Une prise peut durer 30 secondes, une génération accepte 50 références (30 images, 10 vidéos, 10 pistes audio), et le modèle rend la dernière image pour enchaîner le plan suivant. Ses défauts sont réels : pas de vrai visage en entrée, 1080p maximum côté API malgré le « 4K » des pages Dreamina et CapCut, et une seconde en 1080p qui coûte deux fois et demie la seconde en 720p.

Avant d'aller plus loin : Seedance 2.5 est le modèle vidéo par défaut de ScreenWeaver, que j'ai cofondé, et ma série Lost Garden est produite dans ScreenWeaver. J'ai donc tout intérêt à ce que ce modèle te plaise. Pour compenser, chaque chiffre ci-dessous renvoie à une page officielle relevée le 23 octobre 2026, et je n'ai lancé aucune génération de test pour cet article.

![Chorégraphe aux cheveux blancs agenouillée dans une salle de répétition, qui colle des marques numérotées au sol pendant qu'un comédien attend pieds nus sur sa marque, une figurine d'argile grise posée sur un tabouret](/images/blog/seedance-2-5-avis/hero.webp)

<Verdict outil="Seedance 2.5" pourQui="Les réalisateurs de séries, de courts métrages et de fiction qui préparent leurs personnages et leurs décors en amont et veulent des prises longues et cohérentes." lien="https://seed.bytedance.com/en/seedance2_5" lienLabel="Voir la page officielle">
<Forts>

- Jusqu'à 30 secondes par génération, contre 15 pour la 2.0
- 50 références par requête, dont 10 pistes audio
- Retour de la dernière image, extension et retouche d'une vidéo existante
- Mode Draft en 480p pour valider une prise avant le rendu final

</Forts>
<Faibles>

- Aucun visage réel accepté en image ou vidéo de référence
- 1080p maximum sur l'API, la 4K est réservée à la 2.0
- 10,70 $ le million de tokens, contre 7 $ pour la 2.0
- Pages officielles contradictoires selon le canal (30 s, 180 s, 4K)

</Faibles>

Pour une fiction avec des personnages qui reviennent d'un épisode à l'autre, c'est le modèle que je prendrais en premier. Pour de la pub courte ou des tests de look, la 2.0 ou la 2.0 Mini coûtent bien moins cher et suffisent souvent.

</Verdict>

## Seedance 2.5, c'est quoi exactement ?

Seedance 2.5 est un modèle de génération vidéo de ByteDance Seed, l'équipe de recherche du groupe. Ce n'est pas une application. Tu n'achètes jamais « Seedance » directement : tu y accèdes par Dreamina ou CapCut côté grand public, par l'API BytePlus ModelArk côté développeurs, ou par un outil qui l'intègre (ScreenWeaver, Higgsfield, fal.ai, OpenRouter et d'autres). La page officielle le décrit comme un modèle qui génère l'image et le son ensemble, pensé pour raconter une histoire en 30 secondes.

<Capture src="seedance-2-5-page-officielle-2026-10-23.webp" alt="Page officielle Seedance 2.5 sur le site ByteDance Seed, avec le titre du modèle sur une danseuse en robe rouge derrière des flammes et les boutons Get API, Try now et Compare now" legende="La page officielle de ByteDance Seed. Elle renvoie vers l'API et vers les applications du groupe, jamais vers un site qui porterait le nom du modèle." source="https://seed.bytedance.com/en/seedance2_5" captureLe="2026-10-23" />

Tape « seedance 2.5 prix » dans Google et tu tomberas sur seedance.fr, seedance.tv ou seadance.io. Ces sites ne sont pas cités sur la page de ByteDance Seed ni dans la documentation BytePlus. Ils revendent un accès au modèle (ou disent le faire) avec leurs propres crédits. Sur Reddit, la réponse mise en avant par Google sous la question « Seedance 2 Unlimited est-il un site fiable ? » renvoyait déjà vers Dreamina comme accès officiel. Si tu payes, paye chez ByteDance ou chez un outil dont tu connais l'éditeur.

## Ce que la 2.5 change par rapport à la 2.0

La documentation BytePlus du tutoriel Seedance 2.5 liste les nouveautés sans détour. Je les ai reprises dans un tableau avec la 2.0, parce que c'est la comparaison qui décide de ton budget.

<TableauComparatif legende="Seedance 2.5 et Seedance 2.0 sur l'API officielle BytePlus ModelArk" source="https://docs.byteplus.com/en/docs/ModelArk/2607688" verifieLe="2026-10-23">

| Critère | Seedance 2.5 | Seedance 2.0 |
|---|---|---|
| Durée d'une génération | 4 à 30 s | 4 à 15 s |
| Références par requête | 50 (30 images, 10 vidéos, 10 audios) | 15 (9 images, 3 vidéos, 3 audios) |
| Référence audio seule | Oui | Non, il faut une image ou une vidéo |
| Résolution de sortie | 480p, 720p, 1080p (10 bits) | 480p, 720p, 1080p, 4K |
| Mode Draft | Oui | Non |
| Retour de la dernière image | Oui | Oui |
| Format de sortie | mp4 et mov | mp4 |
| Prix API en 720p (par million de tokens) | 10,70 $ | 7 $ |

</TableauComparatif>

<Galerie legende="Le tableau des capacités et les spécifications de sortie dans la documentation officielle">
<Capture src="seedance-2-5-byteplus-capacites-2026-10-23.webp" alt="Tableau des capacités de la documentation BytePlus : 50 références pour Seedance 2.5 contre 15 pour les versions 2.0, mode Draft réservé à la 2.5, retour de la dernière image pour tous" legende="La ligne qui m'intéresse le plus pour une série : 50 références contre 15. Le mode Draft n'existe que sur la 2.5." source="https://docs.byteplus.com/en/docs/ModelArk/2607688" captureLe="2026-10-23" />
<Capture src="seedance-2-5-byteplus-limites-2026-10-23.webp" alt="Spécifications de sortie Seedance dans la documentation BytePlus : 1080p en 10 bits pour la 2.5, 4K seulement pour la 2.0, durée de 4 à 30 secondes contre 4 à 15" legende="La 4K apparaît dans la colonne de la 2.0, pas dans celle de la 2.5. La durée passe de 15 à 30 secondes." source="https://docs.byteplus.com/en/docs/ModelArk/2607688" captureLe="2026-10-23" />
</Galerie>

La 4K existe sur la 2.0 et pas sur la 2.5, alors que Dreamina et CapCut titrent « 4K » sur leurs pages Seedance 2.5. Le 1080p de la 2.5 passe en revanche en 10 bits, ce qui laisse plus de marge à l'étalonnage. Autre nouveauté, la sortie mov, en H.264 avec un échantillonnage yuv444p et un son PCM. ByteDance la présente comme un format pour la retouche et l'extension, et c'est le premier signe que le modèle vise des gens qui montent leurs images après coup.

## Ce que ça change quand on tourne une série

J'ai écrit [le journal de production de Lost Garden](/blog/lost-garden-journal-production-serie-ia) pour montrer ce qu'une série IA demande vraiment. L'épisode 2 dure 21 minutes et m'a pris 75 heures, pour environ 1 850 $ de génération. Le site de la série cite Seedance 2 et d'autres modèles : aucun modèle n'a fait un épisode seul. Ce qui suit vient de la documentation et de cette pratique. Je n'ai fait aucun banc d'essai.

Commence par la durée. Avec 15 secondes, un échange de dialogue se découpe en trois ou quatre générations, et chaque raccord est une occasion de perdre la couleur d'un manteau. À 30 secondes, une réplique et sa réponse tiennent dans une seule prise. Moins de raccords, moins de dérive. ByteDance ajoute qu'une vidéo peut être prolongée deux fois, et l'API accepte une vidéo de référence de 4 à 30 secondes à continuer ou à retoucher.

Le nombre de références compte encore plus. Avec 9 images, il fallait choisir : le visage de face, un profil, le costume, le décor, et c'était plein. Avec 30 images, tu peux donner trois angles de chaque personnage d'une scène à trois, le décor sous deux lumières et encore garder de la place. C'est la méthode que je décris pour [garder le même personnage d'un plan à l'autre](/blog/garder-meme-personnage-video-ia), sauf que le modèle accepte enfin tout le dossier d'un coup. Les 10 pistes audio permettent aussi de donner la voix d'un personnage comme référence, ce que la 2.0 ne faisait qu'accompagnée d'une image.

L'API rend aussi la dernière image du clip. Tu la donnes en première image du plan suivant et le mouvement continue au lieu de repartir de zéro. Sur un épisode de 20 minutes, tu fais ça des dizaines de fois.

<Capture src="seedance-2-5-page-officielle-production-2026-10-23.webp" alt="Section Aiming for Professional Production de la page officielle Seedance 2.5, avec un rendu en volumes gris d'une chambre transformé en scène animée et une comédienne sur fond vert placée dans un escalier de jungle" legende="Le contrôle par modèle gris (white model) et l'incrustation sur fond vert, tels que ByteDance les montre. C'est l'équivalent IA du placement des comédiens sur un plateau." source="https://seed.bytedance.com/en/seedance2_5" captureLe="2026-10-23" />

Le white model sert à la mise en place. Tu fabriques une scène en volumes gris (dans Blender ou n'importe quel outil 3D), tu y fais bouger la caméra et des silhouettes, et Seedance 2.5 habille le tout avec tes références de personnages et de décor. Pour une scène de combat ou une scène à plusieurs personnages, c'est beaucoup plus fiable que de décrire les positions en texte. Je l'explique dans [l'anatomie d'un plan IA réussi](/blog/anatomie-plan-ia-reussi-analyse) : un plan se pense en caméra et en placement avant de se penser en prompt.

Reste le mode Draft, pour répéter sans se ruiner. La 2.5 génère un brouillon en 480p au tarif du 480p, puis tu relances le rendu final en 1080p à partir de ce brouillon, avec les mêmes paramètres. Sur une série, où la majorité des prises partent à la poubelle, c'est la fonction qui protège le plus ton budget.

> 💡 **Le cut de Frank :** avant la première génération d'un épisode, monte un dossier par personnage avec trois angles du visage, le costume en pied et une piste de voix de dix secondes. Nomme les fichiers comme tes personnages. Le jour où tu tournes la scène 40, tu glisses le dossier entier dans la requête au lieu de reconstruire une référence de mémoire.

## Les défauts qu'on voit avant même de générer

Je n'ai pas consigné de test pour cet article. Ces défauts viennent donc tous de pages officielles ou de retours publics, et ce sont ceux que je vérifierais avant de payer.

Premier frein, les visages. La documentation BytePlus dit dans un encadré d'avertissement : Seedance 2.5 n'accepte pas d'image ou de vidéo de référence qui contient un vrai visage humain. ByteDance propose trois contournements : réutiliser un visage déjà généré par un modèle du même compte, piocher dans une bibliothèque de personnages numériques, ou fournir un portrait dont tu as l'autorisation.

<Capture src="seedance-2-5-byteplus-visages-2026-10-23.webp" alt="Encadré d'avertissement de la documentation BytePlus Seedance 2.5 indiquant que le modèle n'accepte pas les images ou vidéos de référence contenant de vrais visages humains, suivi des exigences d'image" legende="L'avertissement sur les visages réels. Si ta série part de vrais comédiens, il faudra passer par la procédure de portraits autorisés." source="https://docs.byteplus.com/en/docs/ModelArk/2607688" captureLe="2026-10-23" />

Pour une série d'animation comme Lost Garden, ce n'est pas un problème : les personnages sont inventés. Pour une fiction avec de vrais acteurs, il faut prévoir une procédure en plus pour chaque comédien. Après la sortie de Seedance 2.0 en février 2026, Disney et d'autres studios ont menacé ByteDance de poursuites pour violation de propriété intellectuelle, et [ByteDance a annoncé des garde-fous renforcés](https://variety.com/2026/film/news/bytedance-safeguards-seedance-disney-legal-threat-ip-violations-1236664395/), selon Variety.

Ensuite, les pages se contredisent. La documentation de l'API donne 30 secondes et 1080p. La page Dreamina parle de 4K et d'un mode vidéo longue en bêta jusqu'à 180 secondes. CapCut écrit « native 30-second 4K videos ». Je ne peux pas te dire laquelle a raison dans ton compte, et c'est justement le problème : avant de payer pour la 4K ou les 180 secondes, vérifie-les sur le plan exact que tu achètes.

<Capture src="seedance-2-5-dreamina-duree-2026-10-23.webp" alt="Section de la page Dreamina Seedance 2.5 qui annonce des vidéos de 30 secondes en mode standard et jusqu'à 180 secondes avec le mode vidéo longue en bêta, à côté d'une planche de personnage" legende="Dreamina annonce 180 secondes en bêta. La documentation de l'API, elle, s'arrête à 30 secondes par génération." source="https://dreamina.capcut.com/seedance/seedance-2-5" captureLe="2026-10-23" />

En bas de la page Dreamina Seedance 2.5, les avis d'utilisateurs portent des dates du 18 mai au 5 juin. Seedance 2.5 est sorti le 31 juillet 2026. Ces avis ne prouvent donc rien sur la 2.5, et je ne les compterais pas dans ta décision.

<Galerie legende="Ce que disent les pages d'avis, côté Dreamina et côté Trustpilot">
<Capture src="seedance-2-5-dreamina-temoignages-2026-10-23.webp" alt="Bloc What users say de la page Dreamina Seedance 2.5 avec des avis signés Sophia Taylor le 3 juin, Ethan Clark le 18 mai et Michael Scott le 4 juin" legende="Des avis sur Seedance 2.5 datés de mai et juin, soit avant la sortie du modèle le 31 juillet." source="https://dreamina.capcut.com/seedance/seedance-2-5" captureLe="2026-10-23" />
<Capture src="seedance-2-5-trustpilot-dreamina-2026-10-23.webp" alt="Page Trustpilot de Dreamina Capcut avec une note de 1,6 sur 28 avis, profil non revendiqué et majorité d'avis à une étoile" legende="Sur Trustpilot, Dreamina affiche 1,6 sur 28 avis. Les plaintes portent sur l'application et la facturation, pas sur le modèle lui-même." source="https://fr.trustpilot.com/review/dreamina.capcut.com" captureLe="2026-10-23" />
</Galerie>

Côté retours publics, le modèle n'a pas de page Trustpilot à lui. Celle de [Dreamina](https://fr.trustpilot.com/review/dreamina.capcut.com) affichait le 23 octobre 1,6 sur 28 avis, avec un profil non revendiqué. Les reproches des avis récents visent des crédits consommés sur des générations ratées, un support lent et la facturation. Ces avis jugent l'application plus que le moteur. Mais si tu passes par Dreamina, c'est l'application que tu subiras.

Dernier point, l'argent. Pour activer Seedance 2.5 sur BytePlus, la documentation recommande un solde de plus de 30 $ sur le compte, un plan d'épargne d'au moins 30 $ ou un pack de ressources dédié. Pas de quota gratuit pour les modèles vidéo sur la grille de prix.

## Combien coûte Seedance 2.5 en octobre 2026

L'API facture au token, Dreamina facture des crédits dans un abonnement. Voici la grille officielle de l'API relevée le 23 octobre.

<TableauComparatif legende="Prix officiels de l'API BytePlus ModelArk pour Seedance, vidéo générée sans vidéo en entrée" source="https://docs.byteplus.com/en/docs/ModelArk/1544106" verifieLe="2026-10-23">

| Modèle | 480p et 720p (par million de tokens) | 1080p | Exemple : 5 s en 720p | Exemple : 5 s en 1080p |
|---|---|---|---|---|
| Seedance 2.5 | 10,70 $ | 11,70 $ | 1,156 $ | 2,843 $ |
| Seedance 2.0 | 7 $ | 7,70 $ | 0,76 $ | 1,87 $ |
| Seedance 2.0 Fast | 5,60 $ | Non proposé | 0,60 $ | Non proposé |
| Seedance 2.0 Mini | 3,50 $ | Non proposé | 0,38 $ | Non proposé |

</TableauComparatif>

<Galerie legende="La grille de prix officielle et les exemples par vidéo">
<Capture src="seedance-2-5-byteplus-tarifs-2026-10-23.webp" alt="Grille de prix BytePlus des modèles vidéo : dreamina-seedance-2-5 à 10,70 dollars en 480p et 720p, 11,7 en 1080p, 4K non supportée, Seedance 2.0 à 7 dollars" legende="Le prix au million de tokens. La 4K de la 2.5 est marquée « Not supported »." source="https://docs.byteplus.com/en/docs/ModelArk/1544106" captureLe="2026-10-23" />
<Capture src="seedance-2-5-byteplus-exemples-2026-10-23.webp" alt="Exemples de facturation BytePlus pour Seedance 2.5 en 16:9 et 5 secondes : 0,514 dollar en 480p, 1,156 en 720p, 2,843 en 1080p, soit 0,231 dollar la seconde en 720p" legende="Les exemples officiels pour un clip de 5 secondes. En 1080p, la seconde coûte 0,569 $." source="https://docs.byteplus.com/en/docs/ModelArk/1544106" captureLe="2026-10-23" />
</Galerie>

Fais le calcul sur un épisode. Lost Garden épisode 2, c'est 21 minutes, soit 1 260 secondes. Au tarif officiel, 1 260 secondes de Seedance 2.5 coûtent environ 291 $ en 720p et 717 $ en 1080p, à condition de garder chaque prise du premier coup. Ça n'arrive jamais. Les 1 850 $ réels de l'épisode couvrent toute la génération (images, son, plusieurs modèles vidéo, prises ratées), mais l'écart donne une idée du rapport entre ce qui est tourné et ce qui est gardé. Je détaille ce genre de budget ligne par ligne dans [combien coûte un court métrage IA](/blog/combien-coute-court-metrage-ia-2026).

Le mode Draft change ce calcul. Un brouillon de 5 secondes en 480p coûte 0,514 $ contre 2,843 $ en 1080p. Si tu valides en brouillon et que tu ne passes en 1080p que les prises retenues, tu paies le prix fort uniquement sur ce qui part au montage.

Côté Dreamina, le modèle est inclus dans les abonnements. La page Seedance 2.5 affichait le 23 octobre une offre de lancement très agressive.

<Capture src="seedance-2-5-dreamina-tarifs-2026-10-23.webp" alt="Grille Dreamina du 23 octobre 2026 en euros : Basic 0,27 euro le premier mois puis 13,99, Standard 18,60 puis 31, Advanced 82,80 puis 138, Ultra 270 puis 450, bandeaux Seedance 2.5 dès 0,01 euro par seconde et dès 0,04" legende="Les prix d'appel ne valent que pour le premier mois. Regarde le prix barré : c'est lui que tu paieras ensuite." source="https://dreamina.capcut.com/seedance/seedance-2-5" captureLe="2026-10-23" />

Basic coûte 0,27 € le premier mois (par carte, carte de débit ou PayPal) puis 13,99 € par mois, pour 1 361 crédits. Standard passe de 18,60 € à 31 € (3 336 crédits), Advanced de 82,80 € à 138 € (15 234 crédits au palier par défaut), Ultra de 270 € à 450 € (51 067 crédits). Les offres Standard et Advanced annoncent 59 % de crédits économisés sur Seedance 2.5 en 720p, Ultra 75 %. Le bandeau « dès 0,01 €/s » de Basic repose sur le prix promotionnel du premier mois : ne bâtis pas ton budget dessus.

## Est-ce que Seedance 2.5 est gratuit ?

Pas vraiment. L'API BytePlus n'a aucun quota gratuit pour les modèles vidéo et demande une avance pour activer la 2.5. Dreamina propose de commencer gratuitement (les boutons « Get started for free » de sa page Seedance 2.5), mais cette page n'indique pas le nombre de crédits offerts, et le retrait du filigrane figure dans la liste des avantages payants. Les offres « Seedance unlimited » des sites tiers ne sont pas des offres de ByteDance.

## Où utiliser Seedance 2.5 sans se faire avoir

Le choix dépend de ce que tu fais du plan après l'avoir généré.

- **Dreamina** si tu veux générer des plans sans écrire de code. C'est l'application officielle de ByteDance, avec un départ gratuit et les offres ci-dessus.
- **CapCut** si tu montes déjà dans CapCut. La page dédiée annonce Seedance 2.5 directement dans l'éditeur, avec un « Intelligent Edit Mode ».
- **L'API BytePlus ModelArk** si tu automatises, si tu veux le mode Draft et la sortie mov, ou si tu as besoin de la grille de prix exacte.
- **Un outil qui l'intègre** si tu veux que tes plans restent reliés à autre chose (un scénario, un canvas, d'autres modèles).

<Capture src="seedance-2-5-capcut-page-2026-10-23.webp" alt="Page CapCut Seedance 2.5 for Filmmaker Content qui annonce des vidéos natives de 30 secondes en 4K, jusqu'à 50 références multimodales et un Intelligent Edit Mode dans l'éditeur" legende="CapCut met Seedance 2.5 dans son éditeur et annonce lui aussi la 4K." source="https://www.capcut.com/features/seedance-2-5-for-filmmaker-content" captureLe="2026-10-23" />

C'est ce dernier cas qui nous concerne, et mon conflit d'intérêts est ici le plus fort. Dans ScreenWeaver, Seedance 2.5 est le modèle vidéo par défaut d'un node Vidéo, à côté de Seedance 2.0, Veo 3.1, Kling 3.0, MiniMax H3, Wan 3.0 et Grok Imagine Video 1.5. Le plan part du scénario et du storyboard, et depuis le 19 octobre un node Vidéo accepte des vidéos de référence avec la 2.5. Ce que ScreenWeaver ne te donne pas : le prix au token de l'API. On y paie en crédits ScreenWeaver, et le barème par génération n'est pas publié. Si tu veux voir comment la série passe du script au plan, la page [Seedance dans ScreenWeaver](https://www.screenweaver.ai/go/bl-seedance-a/seedance-2-5-avis) montre le principe.

<Capture src="seedance-2-5-screenweaver-page-2026-10-23.webp" alt="Page Seedance de ScreenWeaver qui présente la génération vidéo à partir du scénario, avec plusieurs plans par scène et des personnages cohérents" legende="La page Seedance de ScreenWeaver, qui part du scénario plutôt que du prompt." source="https://www.screenweaver.ai/seedance-2" captureLe="2026-10-23" />

## Quand choisir un autre modèle

Si tu fais de la pub de 10 secondes ou des tests de look, la 2.0 Mini coûte 0,38 $ les 5 secondes en 720p, trois fois moins que la 2.5. J'avais présenté [la Seedance 2.0 Mini à sa sortie](/blog/seedance-2-mini-bytedance-video-rapide-juin-2026) : pour un plan isolé sans enjeu de continuité, elle suffit.

Si ton film part de vrais comédiens, le blocage des visages réels te ralentira. Compare avec Kling et Veo, que j'ai opposés plan par plan dans [Kling ou Veo 3 selon le plan](/blog/kling-vs-veo-3-choisir-par-plan).

Si tu veux un seul abonnement pour plusieurs modèles, Higgsfield propose Seedance 2.5 à côté d'une vingtaine d'autres moteurs, mais pas sur son offre d'entrée selon sa grille du 16 octobre. J'ai lu ses conditions en détail dans [mon avis sur Higgsfield](/blog/higgsfield-avis-realisateur).

Et si tu veux juste un rendu plus cinéma avec la génération précédente, mes méthodes pour [obtenir un rendu cinéma avec Seedance 2](/blog/comment-obtenir-rendu-cinema-avec-seedance-2) et le [workflow complet Seedance 2](/blog/workflow-complet-seedance-2-rendu-cinema) restent valables sur la 2.5 : image pilote honnête, mouvement modeste, critères de rejet écrits avant de générer.

<Methodologie date="2026-10-23">

Sources consultées le 23 octobre 2026 : page officielle Seedance 2.5 de ByteDance Seed, tutoriel Seedance 2.5 et grille de prix de la documentation BytePlus ModelArk, page Seedance 2.5 de Dreamina, page Seedance 2.5 de CapCut, page Trustpilot de Dreamina, page Seedance de ScreenWeaver, article de Variety sur les garde-fous de ByteDance. Recherche Google du jour sur « seedance 2.5 avis » et « seedance 2.5 prix ».

- Pas testé : aucune génération lancée pour cet article, aucun compte créé. Le mode Draft, la 4K, les 180 secondes et la qualité réelle n'ont pas été vérifiés dans un compte.
- Ce qui relève de ma pratique : la production de Lost Garden dans ScreenWeaver, avec Seedance 2 et d'autres modèles (épisode 2 : 21 minutes, 75 heures, environ 1 850 $ de génération).
- Conflit d'intérêts : je suis cofondateur de ScreenWeaver, qui intègre Seedance 2.5 comme modèle vidéo par défaut. Aucun lien affilié dans cet article.

</Methodologie>

<CtaScreenWeaver titre="Ta série, du scénario au plan Seedance" destination="seedance" />

## FAQ

### Seedance 2.5 est-il gratuit ?

Non, pas au sens d'un accès illimité. L'API officielle BytePlus ne propose aucun quota gratuit pour ses modèles vidéo et recommande un solde d'au moins 30 $ pour activer la 2.5. Dreamina, l'application de ByteDance, propose de commencer gratuitement, mais sa page Seedance 2.5 ne publie pas le nombre de crédits offerts et le retrait du filigrane est réservé aux offres payantes. Les sites qui promettent du « Seedance illimité » ne sont pas édités par ByteDance. Pour un premier essai sans risque, le départ gratuit de Dreamina reste la porte d'entrée la plus simple, puis un seul mois payant si le modèle te convient.

### Combien coûte une seconde de Seedance 2.5 ?

Sur l'API officielle, l'exemple publié par BytePlus le 23 octobre 2026 donne 0,103 $ la seconde en 480p, 0,231 $ en 720p et 0,569 $ en 1080p, pour une vidéo en 16:9 sans vidéo en entrée. Un clip de 5 secondes revient donc à 1,156 $ en 720p. Dreamina affiche « dès 0,01 €/s » sur son offre Basic et « dès 0,04 €/s » sur Ultra, mais ces chiffres s'appuient sur des prix promotionnels du premier mois. Après, l'abonnement Basic repasse à 13,99 € par mois pour 1 361 crédits. Compte toujours les prises ratées dans ton budget.

### Où utiliser Seedance 2.5 depuis la France ?

Les accès officiels sont Dreamina et CapCut pour le grand public, et l'API BytePlus ModelArk pour les développeurs. La page Dreamina était accessible depuis la France le 23 octobre 2026, avec des prix en euros. Le modèle est aussi intégré dans des outils tiers comme ScreenWeaver, Higgsfield, fal.ai ou OpenRouter, chacun avec ses propres crédits. Méfie-toi des domaines qui portent le nom du modèle (seedance.fr, seedance.tv, seadance.io) : ils n'apparaissent ni sur la page de ByteDance Seed ni dans la documentation BytePlus. Paye chez un éditeur identifié.

### Seedance 2.5 génère-t-il vraiment en 4K ?

Ça dépend de la page que tu lis. La documentation de l'API BytePlus limite Seedance 2.5 à 480p, 720p et 1080p en 10 bits, et marque la 4K « non supportée » dans sa grille de prix. C'est Seedance 2.0 qui sort en 4K sur l'API. Dreamina et CapCut annoncent pourtant de la 4K sur leurs pages Seedance 2.5. Je ne l'ai pas vérifié dans un compte. Si la 4K compte pour ton projet, teste-la sur le plan exact que tu comptes acheter avant de t'engager sur plusieurs mois, et garde une trace du résultat.

### Peut-on utiliser de vrais visages avec Seedance 2.5 ?

Pas directement. La documentation officielle indique que Seedance 2.5 n'accepte pas d'image ou de vidéo de référence qui contient un vrai visage humain. ByteDance propose trois solutions : réutiliser un visage déjà généré par un modèle du même compte, choisir un personnage dans une bibliothèque de personnages numériques prédéfinis, ou passer par des portraits dont tu as obtenu l'autorisation. Pour une série d'animation ou des personnages inventés, ce n'est pas gênant. Pour une fiction tournée à partir de vrais comédiens, prévois ce passage dans ton planning et vérifie la procédure avant de commencer.

### Quelle différence entre Seedance 2.5 et Seedance 2.0 ?

La 2.5 double la durée d'une génération (30 secondes contre 15), triple le nombre de références (50 contre 15, dont 30 images et 10 pistes audio), accepte une piste audio seule comme référence, ajoute un mode Draft en 480p et une sortie mov. La 2.0 garde la 4K, que la 2.5 n'a pas sur l'API, et coûte moins cher : 7 $ le million de tokens en 720p contre 10,70 $. Pour une scène longue avec plusieurs personnages, la 2.5 vaut l'écart. Pour un plan court et isolé, la 2.0 ou la 2.0 Mini suffisent largement.

### Seedance 2.5 peut-il faire une vidéo de 3 minutes ?

Pas en une seule génération sur l'API : la documentation fixe la durée entre 4 et 30 secondes, avec la possibilité de prolonger une vidéo en plusieurs tours. Dreamina annonce un mode vidéo longue en bêta jusqu'à 180 secondes, que je n'ai pas pu vérifier. Pour une série, je ne compterais pas sur une prise de trois minutes : un épisode se construit de toute façon plan par plan, avec un découpage. La dernière image rendue par le modèle sert alors à enchaîner une prise de 30 secondes avec la suivante sans casser le mouvement.
