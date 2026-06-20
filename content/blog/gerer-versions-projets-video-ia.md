---
title: "Gérer les versions de ses projets vidéo IA : méthode concrète"
date: "2026-06-20"
category: "tutoriels"
excerpt: "Sans système de versioning, les projets vidéo IA deviennent vite incontrôlables. Prompts perdus, itérations effacées, livraisons qui repartent de zéro. Voici la méthode que j'utilise pour garder le contrôle."
thumbnail: "/images/blog/gerer-versions-projets-video-ia/hero.webp"
---

# Gérer les versions de ses projets vidéo IA : méthode concrète

Tu relances un projet pour un client. Le brief a légèrement changé. Tu cherches les prompts de la version validée il y a trois semaines. Introuvables. Tu te souviens vaguement du modèle utilisé, du style demandé, du ratio de la scène clé. Mais les paramètres exacts ? Disparus.

C'est le problème du versioning en vidéo IA. Contrairement à un tournage traditionnel où les rushes sont là et le montage est dans un fichier Premiere, la matière d'un projet IA est volatile : les prompts, les seeds, les paramètres de modèle, les itérations refusées. Si tu ne les consignes pas, ils disparaissent.

![Espace de travail cinématographique organisé avec dossiers de projet, notes de production et moniteur de rendu IA, ambiance studio professionnel](/images/blog/gerer-versions-projets-video-ia/hero.webp)

## Pourquoi le versioning en IA n'est pas comme le versioning classique

Sur un projet de développement, Git gère les versions du code. Sur un projet vidéo humain, les fichiers Premiere sont les assets. En production vidéo IA, la complexité est différente.

Un plan généré avec Grok Imagine Video 1.5, paramètre seed 4829, prompt de 180 mots, image de référence spécifique, température à 0.7 : ce n'est pas un fichier, c'est un état de configuration. Si tu perds cet état, tu ne régénères pas exactement le même plan. Tu génères quelque chose de similaire, pas d'identique.

C'est pour ça que les outils de gestion de projet classiques (Notion, Trello) ne suffisent pas. Ils gèrent des tâches et des notes, pas des états de configuration avec dépendances.

Voilà ce que j'ai mis en place et ce qui fonctionne réellement.

## La structure de dossier que j'utilise

Chaque projet IA a sa propre arborescence. Pas de projet sans dossier dédié.

```
[NOM_PROJET]/
├── BRIEF.md
├── PROMPTS/
│   ├── v01/
│   │   ├── scene-01-description.txt
│   │   ├── scene-01-prompt.txt
│   │   └── scene-01-params.json
│   ├── v02/
│   └── v03_VALIDEE/
├── RENDERS/
│   ├── v01/
│   ├── v02/
│   └── v03_VALIDEE/
├── REFERENCES/
│   ├── images/
│   └── videos/
└── MONTAGE/
    ├── brouillon.prproj
    └── EXPORT_CLIENT/
```

Le principe : chaque version a son dossier numéroté. La version validée est suffixée `_VALIDEE`. Jamais d'écrasement de fichier, jamais de remplacement direct.

C'est rudimentaire, mais c'est aussi ce qui fonctionne. La complexité d'un système de versioning est un ennemi : si le système prend trop de temps à maintenir, tu l'abandonnes.

## Le fichier params.json : ce que tu dois capturer

Pour chaque génération, je crée un fichier de paramètres minimal. Exemple pour un plan généré avec Kling 3.0 :

```json
{
  "date": "2026-06-15",
  "scene": "intro_nuit",
  "modele": "Kling 3.0 Standard",
  "mode": "text-to-video",
  "duree_secondes": 5,
  "resolution": "1080p",
  "seed": 7241,
  "cfg_scale": 0.5,
  "motion_intensity": 0.7,
  "image_reference": "../REFERENCES/images/decor-nuit-ref-02.jpg",
  "prompt_file": "scene-intro-nuit-v02.txt",
  "statut": "validation_client",
  "notes": "Mouvement de caméra trop rapide signalé par le client, à corriger en v03"
}
```

Le champ `seed` est critique. C'est lui qui permet de reproduire un résultat proche en cas de retour client. Sans seed, chaque régénération est aléatoire.

Le champ `notes` est celui que j'oublie le plus souvent et que je regrette toujours. C'est là que tu notes pourquoi cette version a été rejetée ou validée.

> 💡 **Le cut de Frank :** Beaucoup d'interfaces IA ne montrent pas le seed par défaut. Va dans les paramètres avancés ou les métadonnées du fichier exporté pour le trouver. Certains outils comme Kling ou Luma le mentionnent dans le panneau de résultats. Copie-le immédiatement, avant de fermer l'onglet.

## Gérer les prompts comme des actifs

Le prompt n'est pas une note passagère. C'est un actif de production. Il doit être versionné, sauvegardé, annoté.

Je stocke chaque prompt dans un fichier texte séparé, nommé par scène et version : `scene-03-plan-large-v02.txt`. Jamais dans un message Slack ou dans le chat d'une IA.

Quelques règles que j'applique :

**Conserve les prompts rejetés.** Un prompt qu'on a rejeté pour cette scène peut être parfait pour la suivante. Si tu l'as supprimé, tu vas le réécrire de zéro.

**Annote les modifications.** Dans le fichier prompt, une ligne de commentaire en début : `# Modifié par rapport à v01 : ajout référence lumière chaude, suppression mouvement de caméra`. En un coup d'oeil, tu vois pourquoi la v02 existe.

**Versionne les prompts système.** Si tu utilises un prompt de style global (personnage, ambiance générale) partagé entre plusieurs scènes, met-le dans un fichier `STYLE_GLOBAL.txt` à la racine du projet. Si tu le modifies, crée un `STYLE_GLOBAL_v02.txt` et note quelle scène commence à l'utiliser.

## Le journal de production : 5 minutes par session

À la fin de chaque session de travail, j'écris 5 lignes dans un `JOURNAL.md` à la racine du projet :

```markdown
## 2026-06-15

- Généré 4 plans scène 3 avec Kling 3.0
- Plans 1 et 3 : rejetés (mouvement trop saccadé)
- Plan 4 : validé pour la préprod, seed 7241
- Prochain : reprendre scène 2, revoir le prompt lumière
- Question client en attente : ils veulent tester la version sans musique
```

C'est rapide, brutal, et indispensable. Quand tu reviens sur un projet après une semaine, ce journal te remet dans le contexte en 2 minutes.

Sans lui, tu passes les 20 premières minutes à fouiller les dossiers pour te rappeler où tu en étais.

## Gérer les versions avec un client

La relation client ajoute une couche supplémentaire. Le client valide une version, tu génères la suivante, le client revient sur sa décision et préfère "celle d'avant". Sans versioning propre, c'est la catastrophe.

Quelques règles pour les projets avec client :

**Numérote tout devant eux.** Dans tes emails, ton partage de fichiers, tes messages : "Voici la version 3 de la scène 2". Jamais "voici la dernière version". Si tu dis "dernière version", le client dira toujours qu'il veut revenir à une version qu'il n'a pas de nom pour désigner.

**Garde les liens de revue côté toi.** Même si le client donne son avis via un lien Frame.io ou Vimeo, garde une trace de quel lien correspond à quelle version dans ton JOURNAL.md.

**Formule écrite des validations.** Quand un client valide une scène par message ou par email, capture cette validation dans ton JOURNAL.md. "Client valide v03 scène 2 le 15/06 - message Slack". Si un désaccord survient plus tard, tu as un historique.

**Définit le nombre de révisions par contrat.** Pas de versioning qui tienne sans cadre contractuel clair. Si le client a droit à 3 révisions par scène, ça s'écrit dans le devis, et tu consignes quelle révision est en cours dans ton journal. Pour les bases du contrat, l'article sur les [clauses contractuelles pour projets IA](/blog/clauses-contrat-client-ia-video-production) couvre les points importants.

## Outils légers pour aller plus loin

Je ne crois pas aux solutions "tout-en-un" pour le versioning IA. Elles sont trop lourdes à maintenir et s'abandonnent rapidement. Mais quelques outils légers aident.

**Obsidian ou Notion pour les notes.** Un vault Obsidian par projet avec un template de session : rapide à remplir, facile à retrouver. Notion est plus collaboratif si tu as une équipe.

**Git pour les fichiers texte.** Si tu es à l'aise avec la ligne de commande, un dépôt Git pour les prompts et les params.json est la solution la plus propre. `git log` te donne un historique parfait de toutes les modifications. Les renders eux (fichiers vidéo lourds) ne vont pas dans Git : utilise un stockage cloud séparé.

**Frame.io ou Vimeo Review pour les livrables.** Pas pour le versioning interne, mais pour la revue client. Ces outils gardent l'historique des commentaires par version de vidéo.

**Un drive organisé.** Google Drive ou Dropbox avec la même arborescence que décrite plus haut. La clé : nommer les dossiers de manière explicite dès la création du projet, jamais après coup.

## Les erreurs classiques à éviter

**Écraser un fichier "pour économiser de l'espace".** La taille d'un fichier de paramètres JSON est négligeable. Celle d'un prompt texte aussi. Garde tout, supprime rien. Les renders, en revanche, peuvent être archivés sur un disque externe après validation.

**Faire confiance à la mémoire.** "Je me souviendrai du seed". Non, tu ne t'en souviendras pas dans 3 semaines.

**Mettre tous les projets dans le même dossier.** Un dossier `PROJETS_IA` avec 20 sous-dossiers mal nommés est aussi inutile qu'aucun versioning.

**Nommer les fichiers avec des dates vagues.** `video_finale_v2_NEW_corrigée.mp4` : ce nom ne survivra pas à plus d'un projet. Utilise `[NOM_CLIENT]_[NOM_PROJET]_[SCENE]_v[N].mp4`.

**Ne pas versionner les images de référence.** Si tu changes d'image de référence entre deux versions, note-le dans params.json. Une régénération avec la même image de référence qu'avant donnera un résultat différent de celui avec ta nouvelle référence, même prompt identique.

## Lier le versioning à la facturation

Un versioning propre a aussi un impact financier direct. Si tu peux montrer à un client l'historique des 7 itérations réalisées sur une scène, la demande de révision numéro 8 ("refaire complètement le plan") se positionne différemment.

Le versioning est ta documentation de travail. Il justifie le temps passé, il protège contre les demandes hors contrat, et il rend les estimations futures plus précises ("ce type de scène nous a pris 4 itérations sur le projet X, je prévois le même volume").

Sur le [calculateur de budget production IA](/outils/calculateur-budget-production-ia), le nombre d'itérations par plan est l'une des variables qui influe le plus sur l'estimation finale. Un historique de projets bien documentés te donne des chiffres réels pour paramétrer ce calcul.

## Ce que tu peux mettre en place aujourd'hui

Si tu pars de rien, commence par ces 3 actions, dans l'ordre :

1. Crée la structure de dossier pour ton projet en cours. Maintenant. Ça prend 3 minutes.
2. Pour chaque génération que tu feras aujourd'hui, note le seed et le nom du modèle dans un fichier texte.
3. En fin de session, écris 3 lignes dans un JOURNAL.md.

C'est le minimum. Avec ça seul, tu es déjà dans une meilleure situation que 80 % des créateurs IA.

Les params.json complets et le git viennent après, quand le réflexe de base est en place.

## FAQ

**Faut-il vraiment garder les versions rejetées des renders ?**
Pas obligatoirement les renders vidéo complets, qui peuvent peser lourd. Mais gardez toujours les paramètres (params.json) et les prompts correspondants. Si un client change d'avis, vous pouvez régénérer. Si vous avez effacé les paramètres, vous repartez de zéro.

**Git est-il vraiment utile pour les projets vidéo IA ?**
Oui, pour les fichiers texte (prompts, params.json, journal). Non, pour les fichiers vidéo : Git n'est pas fait pour les gros binaires. Utilisez un dépôt Git pour la documentation et les configurations, un drive cloud pour les renders.

**Comment gérer le versioning quand on travaille à plusieurs sur un projet ?**
Un drive partagé avec la même arborescence, et une convention de nommage écrite et partagée dès le début. Le journal de production devient alors un fichier collaboratif : chaque membre note ses sessions. Notion fonctionne bien pour ça.

**Certains outils IA enregistrent-ils automatiquement les paramètres ?**
Certaines plateformes comme Midjourney gardent un historique dans l'interface. Mais dépendre de cet historique interne est risqué : si tu changes de plan, fermes le compte, ou si la plateforme évolue, tu perds tout. L'export dans ton propre système de fichiers reste indispensable.

**Quelle est la différence entre un seed et un prompt ?**
Le prompt est le texte descriptif que tu donnes au modèle. Le seed est une valeur numérique qui initialise le processus de génération aléatoire. Deux générations avec le même prompt et le même seed produiront des résultats très proches (mais pas identiques à 100 % selon le modèle). Sans le seed, le même prompt donnera des résultats différents à chaque fois.

**Comment nommer les versions quand le client ne comprend pas le système ?**
Utilise des noms simples côté client : "Version A", "Version B", "Proposition finale". Garde ta numérotation interne (v01, v02, v03) dans tes dossiers. La correspondance entre les deux est dans ton JOURNAL.md.

**Que faire si le modèle IA que j'ai utilisé n'est plus disponible ?**
C'est un risque réel. Si un client demande une modification sur un projet rendu avec un modèle qui a été retiré ou mis à jour, tu dois soit accepter une légère différence de style, soit négocier une refonte partielle. Documenter le modèle exact utilisé (nom + version) dans params.json te permet au moins d'avoir cette conversation avec les faits en main.

**Mon client me demande les "fichiers source" du projet vidéo IA. Que lui donner ?**
C'est une question de contrat. Définir en amont ce que couvrent les "fichiers source" dans un projet IA : les renders de scènes individuelles, les prompts, les paramètres ? Dans la plupart des cas, les renders des plans séparés sont une base raisonnable. Les prompts peuvent être inclus selon l'accord tarifaire. Consulter l'article sur la [livraison de fichiers source pour projets IA](/blog/livrer-fichiers-source-video-ia-client) pour les détails contractuels.
