---
title: "Livrer les fichiers sources d'un projet vidéo IA : guide pratique"
date: "2026-06-25"
category: "business"
excerpt: "Prompts, seeds, images de référence, fichiers de montage : que livrer à un client en fin de projet vidéo IA ? Guide pratique pour clarifier la livraison."
thumbnail: "/images/blog/livrer-fichiers-sources-projet-video-ia-client/hero.webp"
seoTitle: "Livrer fichiers sources projet vidéo IA au client : guide pratique"
seoDescription: "Que livrer comme fichiers sources pour un projet vidéo IA ? Prompts, seeds, références : guide pratique pour clarifier la livraison client avant la fin du projet."
author: "Frank Houbre"
tags: ["business", "fichiers sources", "client", "livraison", "vidéo ia", "workflow", "prompts", "gestion projet"]
---

# Livrer les fichiers sources d'un projet vidéo IA : ce que le client reçoit vraiment

"Et je reçois les fichiers sources avec ?"

Cette question, posée en fin de projet ou au moment de la signature du devis, est l'une des plus délicates à gérer dans la production vidéo IA. Pas parce que la réponse est compliquée. Parce que personne ne l'a encore définie clairement, ni côté prestataire ni côté client.

Dans la production vidéo traditionnelle, les fichiers sources sont assez bien compris : vous livrez les rushes, les sessions Premiere ou DaVinci, les assets graphiques en vectoriel. Le client sait ce qu'il reçoit et ce qu'il peut en faire.

Dans la vidéo IA, c'est moins évident. Un projet peut reposer sur des centaines de prompts, des seeds spécifiques, des images de référence, des workflows ComfyUI, des API calls, des fichiers d'étalonnage. Qu'est-ce qui appartient au client ? Qu'est-ce que vous gardez ? Que peut-il vraiment reproduire sans vous ?

Voici comment je structure cette conversation avec mes clients, et comment vous pouvez faire pareil.

## Pourquoi cette question arrive toujours trop tard

La plupart des prestataires vidéo IA ne clarifient pas la question des sources en amont. Elle arrive au moment de la livraison finale, parfois après un désaccord sur ce que le client attendait.

Le client a peut-être imaginé qu'il pourrait faire des modifications lui-même après livraison. Ou qu'il pourrait donner le projet à un autre prestataire pour des retouches sans recommencer de zéro. Ou qu'il aurait tout ce qu'il faut pour recréer des éléments similaires dans un an.

Ces attentes ne sont pas déraisonnables, mais elles nécessitent d'être explicitement discutées avant de commencer, pas après avoir rendu les fichiers.

> 💡 **Le cut de Frank :** La règle que j'ai adoptée : j'aborde la question des sources au moment du devis, pas à la livraison. Un paragraphe dans le document de brief qui dit exactement quels éléments sont inclus dans la livraison. Ça prend dix minutes à écrire et ça évite des discussions difficiles à la fin.

## Ce qui constitue les "sources" dans un projet vidéo IA

Contrairement à la vidéo traditionnelle, les sources d'un projet vidéo IA n'ont pas de format standardisé. Voici les éléments qui peuvent être considérés comme des sources :

### Les prompts texte

Les prompts sont le coeur de tout projet vidéo IA. Ils encodent les décisions créatives, le style, l'ambiance, les paramètres techniques. Un prompt bien travaillé représente de la valeur intellectuelle réelle.

La question est : est-ce que vous livrez vos prompts ?

Ma position : oui, les prompts liés au projet spécifique sont livrés au client dans un document organisé. Ce que je garde pour moi, c'est ma méthode de construction de prompts, mes formulations récurrentes, ma structure de prompt. C'est comme la différence entre la recette d'un plat et la cuisine du chef.

Le document de prompts livré doit être utilisable par le client (ou un autre prestataire) pour reproduire des visuels dans le même style. Il doit indiquer l'outil utilisé, la version du modèle, et les paramètres clés.

### Les seeds et paramètres de génération

Un seed est un nombre qui détermine le point de départ du processus de génération. Deux générations avec le même prompt et le même seed sur le même modèle donnent des résultats identiques ou très proches.

Livrer les seeds, c'est livrer la reproductibilité. Le client peut regenerer un plan exactement, ou l'utiliser comme base pour des variantes.

Dans la pratique : notez les seeds de chaque plan final retenu dans un tableur. C'est quelques minutes de travail au moment de la validation, et ça représente une valeur concrète dans la livraison.

Attention : les seeds ne sont reproductibles que sur le même modèle, à la même version. Si l'outil change de version ou disparaît (comme Sora récemment), les seeds deviennent inutilisables. C'est une limite réelle à communiquer au client.

### Les images et vidéos de référence

Dans les workflows image-to-video ou avec images de référence, vous utilisez souvent des fichiers sources pour guider la génération. Ces images appartiennent à qui ?

Si vous avez acheté des stocks visuels pour le projet, les droits sont à vérifier dans le contrat de licence. Si vous avez utilisé des photos du client, elles lui appartiennent. Si vous avez généré des images intermédiaires avec un autre outil comme base de référence, la situation est plus ambiguë.

La règle pratique : tout fichier créé spécifiquement pour ce projet et utilisé comme input de génération est livré au client. Les assets de votre bibliothèque personnelle (vos propres références, vos fichiers template) restent chez vous.

### Les workflows ComfyUI et Stable Diffusion

Si votre production utilise ComfyUI, vous avez probablement des workflows JSON qui encodent votre pipeline : les noeuds, les connexions, les paramètres. Un workflow ComfyUI bien construit peut représenter plusieurs jours de mise au point.

Livrez-vous le workflow ? C'est une question de positionnement commercial.

Si vous vous positionnez comme prestataire full-service (le client vous mandate, il n'a pas besoin de reproduire lui-même), vous pouvez garder le workflow et ne livrer que les fichiers finaux. Si vous vous positionnez comme consultant qui transfère des compétences, le workflow fait partie de la livraison.

Dans tous les cas, documentez votre choix dans le contrat.

### Les fichiers de montage et d'étalonnage

Les fichiers de projet Premiere, DaVinci ou After Effects sont des livrables classiques qui ne posent pas de question particulière dans la vidéo IA : si vous montez les clips générés, les fichiers de montage appartiennent au client.

Même chose pour les LUTs d'étalonnage créées pour le projet, les assets graphiques (titres, sous-titres, logos) et les pistes audio ajoutées en post.

## Structurer la livraison en pratique

Voici comment j'organise concrètement un dossier de livraison :

```
PROJET_NOM_DATE/
├── 01_LIVRABLES_FINAUX/
│   ├── video_master_2160p.mp4
│   ├── video_web_1080p.mp4
│   └── video_vertical_1080x1920.mp4
├── 02_CLIPS_BRUTS/
│   └── [clips individuels générés, validés]
├── 03_SOURCES_GENERATION/
│   ├── prompts_par_plan.txt (ou .md)
│   ├── seeds_et_parametres.csv
│   └── images_reference/
├── 04_POST_PRODUCTION/
│   ├── projet_davinci.drp (ou .prproj)
│   ├── luts_etalonnage/
│   └── assets_graphiques/
└── 05_DOCUMENTATION/
    └── guide_reproduction.pdf
```

Le fichier `guide_reproduction.pdf` est souvent sous-estimé. C'est un document d'une à deux pages qui explique au client (ou à un futur prestataire) comment utiliser les sources livrées pour régénérer ou modifier des éléments. Il indique l'outil utilisé, la version du modèle, les étapes clés du workflow.

> 💡 **Le cut de Frank :** Ce guide de reproduction a un effet secondaire utile : il force à documenter son propre workflow pendant le projet, pas après. Si vous attendez la livraison pour l'écrire, vous avez déjà oublié la moitié des paramètres.

## Ce que vous ne livrez pas (et comment l'expliquer)

Certains éléments ne font pas partie de la livraison standard, et c'est légitime.

**Votre méthode de prompting propriétaire.** La façon dont vous structurez vos prompts, vos formulations habituelles, vos raccourcis de style, tout ça fait partie de votre expertise. Ce n'est pas inclus dans les sources projet.

**Vos assets personnels réutilisables.** Si vous utilisez des images de référence de votre propre bibliothèque, des presets de votre collection personnelle, des workflows ComfyUI génériques que vous utilisez pour tous vos projets, ces éléments ne sont pas des sources projet. Ils font partie de vos outils.

**Les accès à vos comptes et API.** Le client ne reçoit pas accès à vos abonnements Runway, Kling ou autres. Il reçoit les fichiers produits avec ces outils, pas les outils eux-mêmes.

La façon de l'expliquer au client : la distinction entre le livrable et les outils. Quand vous commandez un bâtiment à un architecte, vous recevez les plans et l'immeuble, pas la formation d'architecte de votre prestataire ni ses logiciels.

## Négocier la propriété intellectuelle avant de commencer

La question des sources est liée à la question de la propriété intellectuelle, et les deux doivent être abordées ensemble.

Dans votre contrat (ou votre email de confirmation de commande si vous ne faites pas encore de contrat formel), clarifiez :

**Qui détient les droits sur les livrables finaux.** En général, les droits sur les vidéos finales sont transférés au client à la réception du paiement final. C'est la norme dans la production vidéo.

**Qui détient les droits sur les prompts et le workflow.** Les prompts sont une oeuvre intellectuelle. Si vous les livrez, précisez si le client peut les réutiliser uniquement pour ce projet ou aussi pour des projets futurs avec d'autres prestataires.

**Le droit de portfolio.** Est-ce que vous pouvez utiliser les livrables dans votre portfolio ? C'est une clause courante à négocier, surtout pour les projets confidentiels.

Pour les clauses précises sur le contenu généré par IA dans un contrat client, l'article sur les [clauses contractuelles pour le contenu généré par IA](/blog/clause-contrat-client-contenu-genere-ia) couvre les formulations pratiques.

## La valeur réelle de la documentation

Il y a une dimension stratégique à bien livrer les sources.

Un client qui reçoit une documentation claire de son projet vidéo IA, avec les prompts, les seeds, les références et un guide de reproduction, est un client qui comprend ce qu'il a payé. Il peut revenir vers vous pour des mises à jour, des suites, des déclinaisons, parce qu'il sait que vous avez une méthode.

Un client qui reçoit juste des fichiers vidéo sans documentation, c'est un client qui a l'impression d'avoir acheté une boîte noire. Il peut être content de la vidéo, mais il ne comprend pas la valeur du processus derrière.

La documentation des sources n'est pas une obligation légale. C'est un outil de relation client.

## Tarifer la livraison des sources

La livraison des sources peut être un item distinct dans votre devis.

Livraison standard : les fichiers vidéo finaux + les clips bruts validés. C'est la base.

Livraison étendue : la livraison standard + les prompts + les seeds + les images de référence + le guide de reproduction. C'est ce que vous proposez pour les projets où le client souhaite pouvoir intervenir ou faire évoluer le contenu.

Livraison complète avec workflow : la livraison étendue + les fichiers de projet ComfyUI ou Stable Diffusion + une session de transfert de compétences. C'est pour les clients qui veulent internaliser une capacité.

Ces trois niveaux peuvent être tarifés différemment. La documentation et le transfert de compétences ont une valeur réelle qui va au-delà du temps de production.

Pour calibrer votre budget de production et intégrer ces éléments dans vos devis, l'[outil de calcul de budget production IA](/outils/calculateur-budget-production-ia) peut vous aider à structurer les lignes de coût.

---

## FAQ

**Un client peut-il demander les prompts utilisés pour générer ses vidéos ?**

Oui, s'il ne l'a pas demandé en amont, il peut tout à fait le demander. La réponse dépend de ce que vous avez défini dans votre contrat ou votre email de confirmation. Si rien n'a été précisé, il est raisonnable de livrer les prompts spécifiques au projet tout en gardant vos formulations génériques propriétaires. C'est un sujet à clarifier en amont pour éviter toute ambiguïté.

**Les seeds de génération vidéo sont-ils toujours reproductibles ?**

Non. Un seed garantit la reproductibilité sur le même modèle, à la même version, sur la même infrastructure. Si l'outil est mis à jour, si le modèle change, ou si l'outil ferme (comme Sora en septembre 2026), les seeds deviennent inutilisables. C'est une limite réelle à communiquer au client, surtout pour des projets avec une durée de vie longue.

**Que se passe-t-il si j'ai utilisé des images de banques d'images pour la génération ?**

Vous devez vérifier les conditions d'utilisation de la banque d'images concernée. Certaines licences autorisent l'utilisation en input de génération IA, d'autres non. Si la licence l'autorise, les fichiers peuvent être livrés au client. Sinon, vous ne pouvez pas les inclure dans la livraison et devez en avertir le client.

**Est-ce que je dois livrer mes fichiers de projet de montage (Premiere, DaVinci) ?**

En général oui, si c'est un projet qui inclut du montage. Les fichiers de projet de montage créés spécifiquement pour le projet client font partie des livrables raisonnables. L'exception : si vous utilisez un template de montage complexe qui vous appartient et que vous réutilisez sur d'autres projets, vous pouvez livrer un projet "aplati" sans le template source.

**Doit-on mentionner dans le contrat que la vidéo est générée par IA ?**

Oui, c'est une bonne pratique. Certains clients ont des obligations de transparence vis-à-vis de leur audience ou de leurs partenaires sur l'utilisation de l'IA générative dans leurs contenus. Préciser dans le contrat que les livrables sont produits avec des outils IA vous protège aussi en cas de questionnement ultérieur sur l'origine du contenu.

**Comment gérer la situation si le client veut faire des modifications lui-même après livraison ?**

C'est exactement pourquoi la documentation des sources est utile. Si vous livrez les prompts, les seeds et les images de référence avec un guide de reproduction clair, un client technique peut faire des variantes lui-même. Sinon, vous proposez un tarif de modifications et vous intervenez. Les deux approches sont valides, l'important est de le définir avant le début du projet.

**Que faire si le client utilise mes prompts pour travailler avec un concurrent ?**

Si vous n'avez pas de clause de protection dans votre contrat, vous n'avez pas grand-chose à faire légalement. Les prompts sont de la propriété intellectuelle, mais leur protection juridique reste floue et peu testée en France. La meilleure protection est contractuelle : ajoutez une clause qui précise que les prompts livrés sont pour usage interne du client sur ce projet, et non pour être transmis à des tiers ou utilisés comme base de compétition.
