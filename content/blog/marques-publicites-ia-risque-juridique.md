---
title: "Publicité IA sans risque juridique : guide pour les marques"
date: "2026-09-20"
category: "business"
excerpt: "Propriété des visuels, visages et voix, CGU des outils, promesse produit, marquage obligatoire : ce qu'une marque verrouille avant de diffuser une pub IA."
thumbnail: "/images/blog/marques-publicites-ia-risque-juridique/hero.webp"
---

# Publicité IA sans risque juridique : guide pour les marques

Le film était fini, validé par la direction marketing, calé sur le plan média. La veille de la mise en ligne, la juriste de la marque a demandé une chose simple : « Qui possède ces images, et qui est la femme qu'on voit dedans ? » Personne autour de la table n'avait la réponse. L'agence non plus. La campagne a pris trois semaines de retard, le temps de reconstituer ce qui aurait dû être écrit dès le brief.

Cette scène, je l'ai vécue de l'autre côté de la table, comme prestataire, et je la retrouve maintenant en mission chez des annonceurs. Une publicité IA soulève cinq questions juridiques distinctes, et elles ne se règlent pas au même moment de la production. Je les prends une par une, avec les textes qui s'appliquent en France et en Europe en septembre 2026, les décisions déjà rendues, et le dossier de preuve que je fais constituer avant chaque diffusion.

Je ne suis pas avocat. Ce que tu vas lire est le regard d'un producteur qui livre des campagnes générées et qui a appris, parfois à ses dépens, quelles questions un service juridique pose. Pour les cas limites, ton conseil habituel reste indispensable.

![Juriste et directeur artistique devant l'épreuve rétroéclairée d'une affiche de campagne générée par IA, la juriste pointe au crayon rouge la bande de légende vide en bas de l'affiche](/images/blog/marques-publicites-ia-risque-juridique/hero.webp)

## La grille des cinq questions

Quand une marque me demande « c'est légal ou pas ? », je sors cette grille. Chaque ligne correspond à un risque distinct, avec son texte de référence et le moment de la production où il se traite.

| Question | Risque | Textes et références principales | Quand ça se règle |
| --- | --- | --- | --- |
| À qui appartient le visuel ? | Impossible d'interdire la reprise par un concurrent, contrat de cession vide | Rapport du Copyright Office (janvier 2025), Thaler c. Perlmutter (2026), CGU de chaque outil | Choix des outils, brief |
| Qui est dans l'image ? | Atteinte au droit à l'image, deepfake pénalement sanctionné, mention « Images virtuelles » manquante | Article 9 du Code civil, article 226-8 du Code pénal, loi du 9 juin 2023 | Casting, avant génération |
| Qu'est-ce qui entre dans le prompt ? | Contrefaçon de marques ou de personnages tiers, fuite de données confidentielles | Procès Disney et Universal contre Midjourney, Getty contre Stability AI | Rédaction des prompts |
| Que promet la pub ? | Pratique commerciale trompeuse | Code de la consommation, articles L. 121-1 et suivants | Validation créative |
| Le public sait-il que c'est généré ? | Manquement à l'obligation de transparence, amende jusqu'à 15 millions d'euros ou 3 % du chiffre d'affaires | Article 50 du règlement IA, fiche pratique ARPP du 3 août 2026 | Livraison et diffusion |

Les trois premières questions se règlent avant de générer la moindre image. Les deux dernières se règlent avant de diffuser. La plupart des marques que je rencontre ne traitent que la dernière, et souvent après coup.

## Risque 1 : à qui appartient le visuel

Le point que les directions marketing découvrent avec le plus de surprise : une image ou une vidéo produite par un modèle génératif, sans intervention humaine substantielle, ne bénéficie pas d'un droit d'auteur classique. Aux États-Unis, la position est écrite noir sur blanc. Le [rapport du Copyright Office publié le 29 janvier 2025](https://blogs.loc.gov/copyright/2025/02/inside-the-copyright-offices-report-copyright-and-artificial-intelligence-part-2-copyrightability/) conclut que les prompts, même très détaillés, ne suffisent pas à établir la paternité humaine d'une sortie IA. Ce qui peut être protégé : les éléments créés par un humain et visibles dans le résultat, la sélection et l'arrangement des sorties, et les modifications créatives apportées ensuite. Le 2 mars 2026, la Cour suprême a refusé d'examiner l'affaire Thaler contre Perlmutter, laissant en place l'exigence d'un auteur humain.

En France, le raisonnement est proche même si aucune décision de principe n'existe encore sur les générateurs actuels : le droit d'auteur protège une œuvre originale portant l'empreinte de la personnalité de son auteur. Une image sortie telle quelle d'un prompt de quinze mots a peu de chances de passer ce test. J'ai détaillé les nuances par pays dans [le guide sur les droits d'auteur des images générées](/blog/droits-auteur-images-generees-ia), inutile de les redérouler ici.

Ce que ça change pour une marque, concrètement. Ton contrat de cession de droits avec l'agence peut porter sur du vide : l'agence te cède des droits qu'elle ne détient peut-être pas. Rien de dramatique en soi, à condition de le savoir et de l'écrire. Un concurrent qui reprend le visuel brut sera difficile à attaquer sur le terrain du droit d'auteur ; restent la concurrence déloyale, le parasitisme et le droit des marques, qui supposent d'avoir déposé ce qui peut l'être. Et la valeur juridique se crée après la génération. Retouches, compositing, montage, étalonnage, direction artistique documentée : c'est là que se loge l'apport humain que tu pourras revendiquer.

Les conditions d'utilisation des outils forment la deuxième couche. Chez Midjourney, les abonnés payants sont propriétaires de leurs créations, mais [une entreprise qui réalise plus d'un million de dollars de chiffre d'affaires annuel doit être sur un plan Pro ou Mega](https://docs.midjourney.com/hc/en-us/articles/27870375276557-Using-Images-Videos-Commercially) pour en faire un usage commercial. Un stagiaire sur un plan Basic qui produit le visuel d'une campagne nationale place la marque en violation de licence dès le premier jour. Chaque outil a sa clause de ce genre, et personne ne les lit avant qu'un juriste les demande.

> 💡 **Le cut de Frank :** avant tout devis, je demande à la marque la liste des outils autorisés par son service juridique, avec le plan souscrit pour chacun. Dans la plupart des boîtes où je passe, la liste n'existe pas. La créer prend une matinée et évite la question « avec quoi c'est fait ? » posée la veille de la diffusion.

## Risque 2 : qui est dans l'image

C'est la question qui a bloqué la campagne de l'introduction, et c'est celle qui expose le plus lourdement. Trois textes se superposent en France.

Le premier est l'article 9 du Code civil : toute personne a droit au respect de sa vie privée, et la jurisprudence en a tiré le droit à l'image. Un visage généré qui ressemble à une personne réelle, actrice connue ou salariée de l'entreprise, ouvre une action civile. Les modèles produisent des visages composites, mais un composite peut ressembler à quelqu'un, et les outils de référence d'image ou de voix rendent la ressemblance volontaire.

Le deuxième est pénal. Depuis la loi du 21 mai 2024, l'[article 226-8 du Code pénal](https://www.hoganlovells.com/en/publications/france-prohibits-non-consensual-deep-fakes) sanctionne la diffusion d'un contenu visuel ou sonore généré par un traitement algorithmique et représentant l'image ou les paroles d'une personne sans son consentement, lorsqu'il n'est pas évident qu'il s'agit d'un contenu généré ou qu'il n'en est pas fait mention. Un an de prison et 15 000 euros d'amende, portés à deux ans et 45 000 euros quand la diffusion passe par un service en ligne. Une pub sur Instagram avec la voix clonée d'un animateur sans son accord coche toutes les cases.

Le troisième vise l'influence commerciale. L'article 5 de la loi du 9 juin 2023 impose aux influenceurs la mention « Images virtuelles » sur tout contenu comprenant des images produites par intelligence artificielle visant à représenter un visage ou une silhouette. La mention doit être claire, lisible et identifiable, sur tous les formats, pendant toute la durée du visionnage. L'oubli coûte un an d'emprisonnement et 4 500 euros d'amende. Si ta marque paie des créateurs pour relayer une campagne générée, cette mention devient ton problème autant que le leur.

![Texte de l'article 5 de la loi du 9 juin 2023 sur Légifrance, avec les mentions « Images retouchées » et « Images virtuelles » et la sanction d'un an d'emprisonnement et de 4 500 euros d'amende](/images/blog/marques-publicites-ia-risque-juridique/workflow-2.webp)

*Capture de l'article 5 de la loi n° 2023-451 sur legifrance.gouv.fr, relevée le 20 septembre 2026.*

Les clones vocaux sont devenus si bons que certaines marques veulent « la voix de » sans payer « la personne de ». Outre l'article 226-8, un comédien voix a des droits voisins sur ses interprétations, et son contrat d'origine n'autorise à peu près jamais l'entraînement d'un clone. La règle que j'applique : aucune voix de personne réelle sans contrat écrit qui mentionne explicitement le clonage, la durée, les territoires et les usages. Le reste passe par des voix synthétiques dont le fournisseur garantit l'origine, comme je l'explique dans [le tutoriel sur le doublage et la direction de voix](/blog/doublage-voix-off-cloner-diriger-voix-film).

Le cas Volkswagen au Brésil montre ce que donne un dossier bien monté. En juillet 2023, la marque a fait chanter Elis Regina, disparue en 1982, aux côtés de sa fille Maria Rita dans un film pour ses 70 ans. Plainte devant le CONAR, l'organisme d'autorégulation publicitaire brésilien. Le 22 août 2023, [la chambre a classé l'affaire à l'unanimité](https://www.kasznarleonardos.com/conar-arquiva-representacao-contra-campanha-publicitaria-da-volkswagen-que-recriou-imagem-da-cantora-elis-regina/), avec deux motifs : le consentement des héritiers, et le fait que l'usage de la technologie était évident pour le consommateur moyen. Consentement écrit plus évidence du procédé. C'est exactement la paire que le droit français demande aujourd'hui.

## Risque 3 : ce qui entre dans le prompt

Une marque contrôle ce qu'elle publie. Elle contrôle beaucoup moins ce que ses équipes tapent dans les outils. Trois fuites reviennent en mission.

La première est la propriété intellectuelle d'un tiers dans le prompt. « Dans le style de » suivi du nom d'un illustrateur vivant, le nom d'un personnage sous licence, le logo d'un concurrent pour un comparatif : tout ça finit dans des images qui sortent parfois trop ressemblantes. Disney, Universal puis Warner Bros. ont attaqué Midjourney en juin 2025 précisément sur la capacité de l'outil à produire leurs personnages ; la procédure suit son cours, avec une clôture de la phase de discovery prévue en septembre 2026. Au Royaume-Uni, le jugement [Getty Images contre Stability AI du 4 novembre 2025](https://www.judiciary.uk/judgments/getty-images-v-stability-ai/) a rejeté l'essentiel des demandes en contrefaçon de droit d'auteur, mais retenu une atteinte, qualifiée d'historique et très limitée, au droit des marques pour des sorties reproduisant le filigrane Getty sur d'anciennes versions du modèle. Traduction pour un annonceur : le risque se déplace des outils vers les sorties, et une sortie qui reproduit une marque tierce est ton problème, pas celui de l'éditeur.

La deuxième fuite est la confidentialité. Un packshot du produit non encore lancé envoyé dans un outil grand public dont les conditions autorisent l'entraînement sur les données des utilisateurs, c'est une divulgation. Pour un lancement sous embargo, seules les offres entreprise avec clause de non-entraînement passent la revue juridique.

La troisième tient au choix de l'outil, et à ce que son éditeur garantit ou pas. Google Cloud publie une [liste des services génératifs couverts par son indemnisation](https://cloud.google.com/terms/generative-ai-indemnified-services) : Imagen et Veo y figurent, mais uniquement via sa plateforme cloud pour les versions en disponibilité générale, et pour des sorties non modifiées, à condition de respecter ses pratiques d'IA responsable. La même génération Veo lancée depuis l'application grand public n'est pas sur cette liste. Adobe, de son côté, réserve son [indemnisation de propriété intellectuelle](https://business.adobe.com/products/firefly-business/firefly-ai-approach.html) aux sorties de ses modèles Firefly natifs sur les offres éligibles ; les modèles partenaires accessibles dans la même interface en sont exclus. Midjourney n'offre aucune garantie de ce type.

![Page Google Cloud Generative AI Indemnified Services listant Imagen et Veo parmi les modèles couverts via la plateforme Gemini Enterprise Agent Platform, anciennement Vertex AI](/images/blog/marques-publicites-ia-risque-juridique/workflow-3.webp)

*Capture de la page cloud.google.com/terms/generative-ai-indemnified-services, version modifiée le 20 juillet 2026, relevée le 20 septembre 2026.*

Le tableau suivant résume ce que j'ai vérifié à la date de l'article. Les conditions changent souvent, vérifie la page de l'éditeur le jour du contrat.

| Outil | Propriété des sorties | Indemnisation en cas de réclamation d'un tiers | Point de vigilance |
| --- | --- | --- | --- |
| Midjourney | Oui pour les abonnés payants | Aucune | Plan Pro ou Mega obligatoire au-delà d'un million de dollars de CA |
| Adobe Firefly | Oui | Oui sur les modèles Firefly natifs, offres éligibles | Modèles partenaires exclus de la garantie |
| Google Veo et Imagen | Oui | Oui via Google Cloud, versions en disponibilité générale, sorties non modifiées | Pas de garantie via les applications grand public |
| Outils sans clause d'indemnisation (la majorité) | Variable selon les CGU | Aucune | Relire la clause d'entraînement sur vos données |

> 💡 **Le cut de Frank :** pour une campagne nationale, je propose deux chaînes en parallèle. Une chaîne « garantie » (Firefly natif ou Veo via Google Cloud) pour tout ce qui ressemble à un humain ou à un produit, et une chaîne libre pour les ambiances, les textures et les fonds, où le risque de ressemblance est faible. Le surcoût de la chaîne garantie est ridicule face à une mise en demeure.

## Risque 4 : ce que la pub promet

La génération rend facile une chose que la photographie rendait difficile : montrer un produit qui n'existe pas exactement sous cette forme. Une crème plus onctueuse que la vraie, ou un burger qui ne ressemble pas à ce qui sort de la cuisine. Le Code de la consommation ne s'intéresse pas à la technique. L'article L. 121-1 interdit les pratiques commerciales trompeuses, et une image qui induit en erreur sur les caractéristiques essentielles du bien en est une, qu'elle sorte d'un appareil photo ou d'un modèle de diffusion.

Deux cas concrets où je vois des marques se mettre en danger. Le premier est le packshot « amélioré » : le produit généré à partir d'une référence, puis affiné par le modèle qui lisse une texture, change une couleur, ajoute un reflet. J'ai décrit dans [le guide des packshots produit par IA](/blog/creer-packshots-produit-publicite-ia) une méthode qui part toujours d'une photo réelle du produit et n'autorise le modèle qu'à travailler l'environnement. Le deuxième est le témoignage synthétique, le faux client qui raconte son expérience, sujet que j'ai traité en détail dans [l'article sur les faux témoignages UGC](/blog/pourquoi-faux-temoignages-ugc-ia-interdits). La sanction de la pratique commerciale trompeuse va jusqu'à deux ans d'emprisonnement et 300 000 euros d'amende, avec une amende qui peut être portée à 10 % du chiffre d'affaires moyen annuel. Un budget de production économisé ne pèse rien en face.

À la validation, je fais poser une seule question sur chaque plan : « si un client compare cette image au produit reçu, qu'est-ce qui diffère ? » Si la réponse est « la lumière et le décor », c'est de la publicité. Si la réponse touche au produit lui-même, c'est un problème.

## Risque 5 : le public sait-il que c'est généré

Depuis le 2 août 2026, l'article 50 du règlement européen sur l'IA s'applique aux déployeurs. En clair : une entreprise qui diffuse un contenu généré ou manipulé par IA représentant des personnes, des objets, des lieux ou des événements de façon à paraître authentique doit indiquer que le contenu est artificiel. Les obligations de marquage technique côté éditeurs d'outils, prévues au paragraphe 2 du même article, ont obtenu un délai jusqu'au 2 décembre 2026 pour les systèmes déjà sur le marché avant août, dans le cadre de l'accord sur l'omnibus numérique. L'obligation de transparence vis-à-vis du public, elle, n'a pas bougé. Les sanctions peuvent atteindre 15 millions d'euros ou 3 % du chiffre d'affaires mondial annuel. J'ai détaillé la mécanique des deux couches, métadonnées C2PA et filigrane, dans [l'article sur l'article 50 et le marquage des vidéos IA](/blog/eu-ai-act-article-50-marquage-video-ia-aout-2026).

Ce qui a changé depuis cet article, c'est l'outillage français. Le 3 août 2026, l'ARPP a publié [une fiche pratique sur l'étiquetage des contenus publicitaires générés ou manipulés par l'intelligence artificielle](https://www.arpp.org/actualite/arpp-fiche-pratique-etiquetage-contenus-publicitaires-intelligence-artificielle/). Elle s'appuie sur les lignes directrices et la FAQ publiées par la Commission européenne le 20 juillet 2026, et elle donne aux annonceurs ce qui manquait : une grille à trois critères (niveau d'intervention de l'IA, degré de réalisme, impact sur la perception d'authenticité), un arbre de décision, des cas pratiques, et des formulations de mention comme « Image générée par IA » ou « Voix générée par IA ». L'ARPP précise aussi que les autorités françaises chargées du contrôle n'étaient pas encore désignées à cette date, dans l'attente de la loi d'adaptation au droit européen, dite DDADUE. Le régime existe, le gendarme arrive.

![Page de l'ARPP annonçant la fiche pratique sur l'étiquetage des contenus publicitaires générés ou manipulés par l'intelligence artificielle, avec la couverture du document et le communiqué daté du 3 août 2026](/images/blog/marques-publicites-ia-risque-juridique/workflow-1.webp)

*Capture de la page arpp.org, communiqué du 3 août 2026, relevée le 20 septembre 2026.*

La grille de l'ARPP a un mérite : elle évite les deux excès. Étiqueter un fond de ciel retouché comme « généré par IA » noie l'information et fatigue le public. Ne rien dire sur un mannequin photoréaliste inventé de toutes pièces, c'est le cas typique que le texte vise. Entre les deux, le critère qui tranche est l'impact sur la perception d'authenticité : est-ce que le spectateur croit voir une personne, un lieu ou un événement réel ?

Reste la question pratique de la mention elle-même. Sur une vidéo sociale, une ligne dans la description ne suffit pas si la vidéo circule sans sa description, ce qui arrive à chaque partage. La mention à l'image, présente pendant toute la durée, est la seule qui survit à la recompression et au repost. Elle peut être discrète, elle doit être lisible. Le cas Guess dans le numéro d'août 2025 de Vogue est l'exemple inverse : une mention minuscule « Produced by Seraphinne Vallora on AI » que [la plupart des lectrices n'ont pas vue](https://www.cnn.com/2025/07/31/style/vogue-ai-models-guess-campaign), et une polémique reprise jusque sur CNN et Forbes. La mention existait sur le papier. Personne ne l'a lue.

## Le workflow qui tient devant un juriste

Voici la chaîne que je mets en place chez les annonceurs qui produisent en interne ou avec une agence. Elle ajoute peu de travail si elle est prévue dès le brief, et beaucoup si on la reconstitue après.

### 1. Le brief fixe les lignes rouges

Avant toute création, le brief liste ce qui est interdit dans les prompts : noms d'artistes vivants, personnages sous licence, marques tierces, personnes réelles sans contrat. Il indique le niveau de réalisme visé, parce que ce niveau détermine l'obligation d'étiquetage. Un brief qui dit « photoréaliste, on ne doit pas voir que c'est généré » commande, en une phrase, une mention obligatoire à l'écran.

### 2. La fiche outils est validée par le juridique

Pour chaque outil : éditeur, plan souscrit, clause de propriété des sorties, clause d'entraînement sur les données, existence d'une indemnisation, date de relecture des conditions. Cette fiche est annexée au contrat avec l'agence. Si l'agence change d'outil en cours de route, elle le déclare.

### 3. Les prompts et les références sont journalisés

Chaque génération retenue conserve son prompt, ses images de référence, le modèle et sa version, la date. Un simple tableur suffit. C'est ce qui permet, six mois plus tard, de répondre à une réclamation par des faits. C'est aussi ce qui documente l'apport humain, donc la part protégeable.

### 4. Les personnes sont autorisées avant génération

Aucun visage ni voix de personne réelle n'entre dans un outil sans contrat signé mentionnant l'IA, le clonage le cas échéant, les usages, la durée et les territoires. Pour les personnages entièrement synthétiques, un contrôle de ressemblance est fait sur les visuels finaux, et le résultat est consigné.

### 5. La décision d'étiquetage est prise avec la grille ARPP

Pour chaque livrable, la grille à trois critères est remplie, la décision est écrite (mention ou pas, quelle mention, où, combien de temps), et la mention est intégrée à l'image, pas seulement à la description. Les métadonnées d'origine sont conservées sur les fichiers maîtres.

### 6. Le contrat avec l'agence couvre le sujet

Propriété des sorties, garantie sur l'origine des données de référence, obligation de journalisation, responsabilité en cas de réclamation, sort des fichiers sources. Le modèle de [clause client pour contenu généré par IA](/blog/clause-contrat-client-contenu-genere-ia) que j'ai publié couvre ces blocs côté prestataire ; côté marque, c'est le miroir.

### 7. Le dossier de diffusion est archivé

Fichiers maîtres avec métadonnées, journal des prompts, contrats des personnes, fiche outils, décision d'étiquetage, versions diffusées par canal. Un dossier par campagne, conservé aussi longtemps que la campagne peut être contestée.

| Pièce du dossier | Ce qu'elle prouve | Qui la produit |
| --- | --- | --- |
| Fiche outils validée | Que les outils étaient autorisés et les licences adaptées au CA | Marque, avec l'agence |
| Journal des prompts et références | Ce qui est entré dans le modèle, et l'apport humain | Agence ou équipe interne |
| Contrats des personnes réelles | Le consentement à l'image, à la voix, au clonage | Marque |
| Grille ARPP remplie et décision d'étiquetage | Que la transparence a été évaluée et appliquée | Marque, visa juridique |
| Fichiers maîtres avec métadonnées | L'origine et la chaîne de modification | Agence |
| Contrat agence avec clause IA | La répartition des responsabilités | Les deux |

Une marque qui a ce dossier répond à une mise en demeure en une journée. Une marque qui ne l'a pas passe trois semaines à le reconstituer, comme celle de l'introduction.

## Le risque que le droit ne couvre pas

Tout peut être en règle et la campagne peut quand même faire mal. McDonald's Pays-Bas a mis en ligne le 6 décembre 2025 un film de Noël entièrement généré ; [il a été retiré trois jours plus tard](https://www.nbcnews.com/world/europe/mcdonalds-ai-generated-christmas-advert-social-media-backlash-rcna248590) sous les moqueries, et la marque a parlé d'un « apprentissage important ». Rien d'illégal là-dedans. Juste un public qui a trouvé le résultat froid et mal fini, et qui l'a dit.

À l'inverse, le film Volkswagen avec Elis Regina a été débattu pendant des semaines au Brésil, sur l'éthique de faire « jouer » une artiste disparue, alors que le dossier juridique était solide. Deux enseignements que je répète aux directions marketing. D'abord, la transparence est aussi une protection réputationnelle : une marque qui dit clairement ce qu'elle a fait, et pourquoi, encaisse mieux la critique qu'une marque prise à dissimuler. Ensuite, la génération doit servir une idée. Quand on génère parce que c'était moins cher, ça se voit à l'écran. Quand on génère parce que l'idée ne pouvait pas se tourner, on a quelque chose à répondre aux critiques. J'ai développé ce point du côté des studios dans [l'analyse sur le remplacement des tournages](/blog/cinema-ia-remplacer-tournages), et il vaut pour la pub.

## Les erreurs que je vois chez les marques

Six situations rencontrées en mission, avec le correctif à chaque fois.

**La génération sur un compte personnel.** Un créatif produit les visuels de la campagne avec son abonnement perso, sur un plan qui n'autorise pas l'usage commercial d'une entreprise de cette taille. Correctif : comptes entreprise nominatifs, plan adapté au chiffre d'affaires, et interdiction contractuelle des comptes personnels.

**La référence « juste pour la pose ».** L'équipe glisse la photo d'une actrice comme image de référence, « seulement pour la posture ». Le visage final lui ressemble. Correctif : les références de personnes réelles sont limitées aux personnes sous contrat ; pour les poses, on utilise ses propres photos de tournage ou des banques sous licence explicite.

**La mention dans la description uniquement.** La vidéo porte « contenu généré par IA » dans le texte du post, rien à l'image. Elle est repostée sans le texte. Correctif : mention à l'image pendant toute la durée, en plus de la description.

**Le packshot qui dérive.** Le produit généré est plus beau que le vrai : texture, couleur, proportions. Correctif : photo réelle du produit obligatoire en base, le modèle ne touche qu'au décor, validation par une personne qui connaît le produit physique.

**La voix « inspirée de ».** Le clone d'une voix connue, présentée comme « un timbre proche ». Correctif : voix synthétique dont le fournisseur garantit l'origine, ou contrat écrit avec la personne, sans troisième voie.

**Le fichier maître nettoyé.** L'agence livre des exports sans métadonnées « pour alléger ». Plus aucune trace d'origine ni de chaîne de modification. Correctif : fichiers maîtres livrés avec métadonnées intactes, exports allégés produits ensuite pour chaque canal. Le sujet de la musique suit la même logique, et [le guide sur les droits de la musique IA](/blog/droits-auteur-musique-ia-bande-son) détaille les licences à exiger.

## Ce que ça coûte de bien faire

Un ordre de grandeur, tiré de mes missions et non d'une étude : sur une campagne moyenne, le workflow décrit ici ajoute une demi-journée de préparation, une heure par livrable pour la grille d'étiquetage et la journalisation, et le surcoût des outils garantis, qui se compte en dizaines d'euros par mois. Face à une mise en demeure, à un retrait de campagne ou à trois semaines de retard sur un plan média déjà acheté, l'arbitrage se fait tout seul.

Si tu veux que je mette cette chaîne en place dans ton entreprise, c'est le cœur de [mes missions de conseil](/prestation) : audit des outils et des pratiques existantes, fiche outils validée avec ton juridique, workflow de journalisation et d'étiquetage, formation des équipes créa et marketing, à 4 200 € HT la journée, à distance ou sur place à Paris et Strasbourg. Et si tu démarres tout juste, [le guide pour intégrer l'IA dans une boîte de production](/blog/integrer-ia-boite-production-depart) donne le cadrage général avant de rentrer dans le juridique.

## FAQ

### Une marque peut-elle déposer un logo ou un visuel de campagne généré par IA ?

Le dépôt de marque et le droit d'auteur sont deux régimes distincts. Un signe distinctif généré par IA peut être déposé comme marque s'il remplit les conditions habituelles, distinctivité et disponibilité en tête, parce que le droit des marques ne demande pas un auteur humain. En revanche, le visuel de campagne lui-même, s'il sort brut d'un outil, a peu de chances d'être protégé par le droit d'auteur, en France comme aux États-Unis où le Copyright Office l'a écrit en janvier 2025. La stratégie qui marche : déposer ce qui peut l'être (signe, nom, slogan), et documenter l'apport humain sur le reste, retouches, compositing, direction artistique, pour pouvoir le revendiquer en cas de reprise.

### La mention « généré par IA » est-elle obligatoire sur toutes les publicités IA ?

Non, et c'est précisément ce que la fiche pratique de l'ARPP du 3 août 2026 aide à trancher. L'article 50 du règlement IA vise les contenus qui représentent des personnes, objets, lieux ou événements de façon à paraître authentiques. Un fond retouché, une texture générée ou une animation manifestement stylisée n'entrent pas dans ce cas. Un mannequin photoréaliste inventé, une voix synthétique qu'on prend pour celle d'une personne réelle ou un lieu qui n'existe pas présenté comme un décor réel, oui. La grille ARPP à trois critères, niveau d'intervention, réalisme et impact sur la perception d'authenticité, permet de documenter la décision pour chaque livrable, ce qui compte autant que la décision elle-même.

### Quel outil choisir pour une campagne si je veux une garantie juridique ?

À la date de cet article, deux éditeurs proposent une indemnisation contractuelle en cas de réclamation d'un tiers sur les sorties : Adobe pour ses modèles Firefly natifs sur les offres éligibles, et Google Cloud pour Imagen et Veo utilisés via sa plateforme cloud en version de disponibilité générale, sur des sorties non modifiées. Ces garanties ont des conditions, notamment le respect des pratiques d'IA responsable de l'éditeur, et elles ne couvrent pas les modèles partenaires ni les applications grand public. Midjourney et la plupart des autres outils n'en offrent aucune. Pour une campagne nationale, je recommande de réserver les outils garantis aux plans avec humains ou produits, et de vérifier les conditions le jour de la signature, car elles évoluent plusieurs fois par an.

### Peut-on utiliser la voix ou le visage d'un salarié ou d'un dirigeant dans une pub générée ?

Oui, avec un contrat écrit et spécifique, jamais sur la base d'un simple accord oral ou d'une clause générale de droit à l'image dans le contrat de travail. Le contrat doit mentionner l'usage d'outils d'IA, le clonage vocal s'il y en a un, les supports, la durée, les territoires et les conditions de retrait, par exemple si la personne quitte l'entreprise. Sans ce document, l'article 9 du Code civil ouvre une action civile, et l'article 226-8 du Code pénal peut s'appliquer si le caractère généré n'est pas évident ou mentionné. Le consentement des héritiers, dans le cas Volkswagen et Elis Regina, a été l'élément décisif du classement de l'affaire par le CONAR en août 2023.

### Que risque une marque qui fait relayer une campagne générée par des influenceurs ?

La loi du 9 juin 2023 impose aux influenceurs la mention « Images virtuelles » sur tout contenu comprenant des images produites par IA représentant un visage ou une silhouette, sous peine d'un an d'emprisonnement et de 4 500 euros d'amende. Elle impose aussi la mention « Publicité » ou « Collaboration commerciale », dont l'absence constitue une pratique commerciale trompeuse punie de deux ans d'emprisonnement et de 300 000 euros d'amende. La marque qui fournit les visuels générés et rémunère le relais engage sa responsabilité si elle n'a pas prévu ces mentions dans le contrat et dans les livrables. La pratique la plus sûre : livrer aux créateurs des fichiers qui portent déjà la mention à l'image, et l'écrire dans le contrat de collaboration.

### Le marquage technique des fichiers, C2PA ou filigrane, est-il obligatoire pour l'annonceur ?

L'obligation de marquage lisible par les machines pèse d'abord sur les éditeurs des systèmes, au titre du paragraphe 2 de l'article 50, avec un délai accordé jusqu'au 2 décembre 2026 pour les systèmes déjà sur le marché avant août 2026. L'annonceur, en tant que déployeur, doit informer le public de manière claire, ce qui passe par une mention visible ou audible, et il ne doit pas retirer les marquages présents dans les fichiers. Conserver les métadonnées sur les fichiers maîtres et n'exporter des versions allégées que pour chaque canal est la façon simple de respecter cette dernière règle. Les plateformes sociales suppriment souvent ces métadonnées à l'upload, raison de plus pour que la mention visible existe à l'image.

### Une agence peut-elle garantir à une marque que sa production IA est « sans risque » ?

Aucune agence sérieuse ne signera ça, et je me méfierais de celle qui le ferait. Ce qu'une agence peut garantir, c'est un processus : outils déclarés et adaptés, prompts journalisés, personnes sous contrat, grille d'étiquetage remplie, fichiers maîtres livrés avec métadonnées, et une répartition écrite des responsabilités en cas de réclamation. Le contrat doit préciser qui répond de quoi, notamment sur l'origine des images de référence et sur les ressemblances involontaires. La marque garde de son côté la décision finale d'étiquetage et le contrôle de la promesse produit, parce que ce sont ses obligations propres vis-à-vis du public et du Code de la consommation.

<!-- PUBLICATION DATE: 2026-09-20 -->
