---
title: "MCP ScreenWeaver : ton scénario dans Claude et ChatGPT"
date: "2026-10-12"
dateModified: "2026-10-12"
category: "tutoriels"
excerpt: "Le MCP de ScreenWeaver branche Claude et ChatGPT sur ton vrai scénario : import, réécriture, recherche, découpage en plans. Installation et limites."
thumbnail: "/images/blog/screenweaver-mcp-claude-chatgpt-scenario-storyboard/hero.webp"
---

# MCP ScreenWeaver : ton scénario et ton storyboard dans Claude et ChatGPT

Tu passes une heure avec Claude sur une scène. Le dialogue est enfin juste, le sous-texte respire. Puis vient la corvée : copier le texte, le coller dans ton logiciel d'écriture, remettre chaque réplique au bon format, retaper les noms de personnages, recréer les en-têtes de scène. Et le lendemain, quand tu veux découper la scène en plans, tu recommences dans l'autre sens : tu recopies la scène dans le chat pour qu'il comprenne de quoi tu parles.

C'est exactement ce va-et-vient que le **MCP de ScreenWeaver** supprime. Depuis aujourd'hui, Claude, ChatGPT, Claude Code, Cursor ou VS Code peuvent lire et écrire directement dans ton projet ScreenWeaver. Pas dans une conversation à côté. Dans le scénario lui-même, au format pro, et dans le storyboard.

Je te préviens tout de suite, pour que tu lises la suite avec le bon filtre : **ScreenWeaver est l'outil que j'ai co-créé avec Thibaut**. J'en parle avec ce biais assumé. Ce guide s'en tient à ce que le MCP fait vraiment aujourd'hui, tel que décrit sur [la page officielle du MCP ScreenWeaver](https://www.screenweaver.ai/fr/mcp), et je te dis aussi ce qu'il ne fait pas.

![Scénariste de nuit à son bureau, lampe chaude, ordinateur allumé et cases de storyboard dessinées épinglées au mur, pour illustrer le MCP ScreenWeaver](/images/blog/screenweaver-mcp-claude-chatgpt-scenario-storyboard/hero.webp)

## Ce que le MCP de ScreenWeaver change, concrètement

Avant, l'IA conversationnelle et ton logiciel de scénario vivaient dans deux mondes. Le chat produisait du texte brut. Ton logiciel, lui, attendait des éléments typés : en-tête de scène, action, personnage, dialogue, didascalie. Entre les deux, c'était toi le câble.

Avec le MCP branché, tu demandes et l'assistant agit dans le projet. Un exemple tiré de la page produit, sur le projet de démo The Yellow Umbrella : *« Importe mon brouillon Fountain dans The Yellow Umbrella, puis découpe la scène 3 : plan large sur le passage piéton, gros plan sur Seo-yeon, travelling avant lent sur le parapluie. »* L'assistant montre un aperçu de l'import (14 scènes, deux personnages reliés), importe le brouillon, puis crée trois plans dans la scène 3. Le scénario d'avant est gardé dans l'historique.

![Page du MCP ScreenWeaver en français : titre « Votre scénario et votre storyboard dans Claude et ChatGPT » et exemple de conversation avec les outils import_script et create_shots](/images/blog/screenweaver-mcp-claude-chatgpt-scenario-storyboard/workflow-1.webp)

*Capture de screenweaver.ai/fr/mcp, le 12 octobre 2026.*

Ce que ça permet, en pratique :

- **Importer un fichier de scénario** Final Draft (.fdx), WriterDuet ou Fountain, avec un aperçu avant écriture.
- **Reprendre un scénario PDF ou Word** : tu déposes le fichier dans la conversation, l'assistant le lit et l'écrit dans ScreenWeaver élément par élément.
- **Réécrire une scène** : resserrer un dialogue, ajouter une ligne d'action, corriger un nom.
- **Chercher dans tout le scénario** : chaque réplique où un personnage parle du parapluie, chaque extérieur nuit, chaque scène de l'épisode 2.
- **Changer des notes en plans** : une note de mise en scène ou trois lignes tapées sur ton téléphone deviennent des plans de storyboard avec valeur de plan, mouvement de caméra et durée.
- **Ajuster un plan** : passer en gros plan, ralentir un travelling, rallonger de quatre secondes. Seuls les champs que tu nommes changent.

## Le MCP expliqué à un scénariste, en deux minutes

MCP veut dire **Model Context Protocol**. C'est un standard ouvert, [présenté par Anthropic en novembre 2024](https://www.anthropic.com/news/model-context-protocol), qui permet à un assistant IA de se brancher sur d'autres applications. La [documentation officielle du protocole](https://modelcontextprotocol.io/docs/getting-started/intro) le compare souvent à une prise USB-C : une forme de prise commune, et chaque application peut s'y raccorder.

Pour toi, ça se traduit simplement. Une application qui propose un serveur MCP expose des **outils** : lire une scène, chercher un mot, créer un plan. L'assistant décide lui-même quel outil appeler selon ce que tu lui demandes. Tu n'as pas à connaître le nom des outils. Tu écris « découpe la scène 4 pour un tournage à une caméra », et il appelle les bons.

ScreenWeaver est un **serveur MCP distant**. Ça veut dire qu'il n'y a rien à installer sur ta machine. Tu donnes une adresse à ton assistant, tu te connectes avec ton compte ScreenWeaver, tu choisis les projets qu'il a le droit d'ouvrir, et c'est tout. Pas de clé API à copier, pas de terminal obligatoire.

> 💡 **Le cut de Frank :** le MCP ne rend pas l'assistant meilleur scénariste. Il lui donne le contexte. Et le contexte, c'est souvent ce qui manquait : un assistant qui a lu les scènes 1 à 11 te propose une scène 12 bien plus juste que celui à qui tu as collé la scène 12 toute seule.

## Brancher ScreenWeaver à Claude, ChatGPT ou Claude Code

L'adresse du serveur est la même partout :

```
https://app.screenweaver.ai/api/mcp
```

C'est du Streamable HTTP avec une connexion OAuth 2.1. Avant de brancher quoi que ce soit, **crée ton projet dans ScreenWeaver** : le MCP ne sait pas encore créer un projet, il travaille dans ceux qui existent.

Point important sur l'accès : **le MCP est réservé aux comptes avec crédits**, c'est-à-dire les offres Auteur (39,99 $ par mois, 6 000 crédits) et Studio (149,99 $ par mois, 25 000 crédits), tarifs relevés sur screenweaver.ai le 12 octobre 2026. L'écriture de scénario reste gratuite dans l'offre Screenwriter, mais pas le branchement à ton assistant. En revanche, utiliser les outils du MCP ne consomme aucun crédit.

### Dans Claude (web ou application)

1. Ouvre **Paramètres**, puis **Connecteurs**.
2. Clique sur **Ajouter un connecteur personnalisé**, nomme-le ScreenWeaver et colle l'URL du serveur.
3. Clique sur **Connecter**, connecte-toi à ScreenWeaver, choisis tes projets et autorise.
4. Dans une conversation, ouvre le menu **+** et active ScreenWeaver.

Les connecteurs personnalisés marchent sur toutes les offres Claude, avec un seul connecteur personnalisé sur l'offre gratuite. Anthropic détaille la procédure dans [son guide sur les connecteurs personnalisés](https://support.claude.com/en/articles/11175166-getting-started-with-custom-connectors-using-remote-mcp). Les noms de menus peuvent bouger, la fonction est encore en bêta.

### Dans ChatGPT

1. Ouvre **Paramètres**, puis **Applications**, et active le **mode développeur** dans les paramètres avancés.
2. Clique sur **Créer**, nomme l'application ScreenWeaver, colle l'URL du serveur et choisis **OAuth**.
3. Connecte-toi à ScreenWeaver, choisis tes projets et autorise.
4. Dans une conversation, choisis ScreenWeaver dans le menu des outils.

Les offres ChatGPT qui donnent accès au mode développeur changent souvent. Si tu ne le vois pas, regarde l'aide d'OpenAI pour ton offre, ou [la documentation développeurs d'OpenAI sur la connexion d'une app à ChatGPT](https://developers.openai.com/apps-sdk/deploy/connect-chatgpt).

### Dans Claude Code, Cursor ou VS Code

Pour Claude Code, une ligne dans le terminal :

```
claude mcp add --transport http screenweaver https://app.screenweaver.ai/api/mcp
```

Ensuite, tape `/mcp` dans Claude Code, choisis screenweaver et connecte-toi dans le navigateur. Pour Cursor, ajoute l'entrée ScreenWeaver dans `.cursor/mcp.json` puis clique sur **Connect** dans les réglages MCP. Pour VS Code, c'est un fichier `.vscode/mcp.json`, puis les outils s'utilisent depuis Copilot Chat en mode agent.

Ce côté éditeur de code n'est pas un gadget de développeur. Beaucoup de scénaristes écrivent déjà en [Fountain](https://fountain.io/), le format texte brut du scénario, dans VS Code ou Cursor. Le MCP leur donne un pont direct vers un projet ScreenWeaver formaté et relié au storyboard. Si tu utilises déjà Claude Code pour d'autres tâches, j'en parle dans mon [guide Claude Code pour créateurs vidéo](/blog/claude-code-createurs-video-guide).

## Les 11 outils du MCP, et à quoi ils te servent

Le serveur expose onze outils : six qui lisent, cinq qui écrivent. Tu ne les appelles jamais toi-même, mais les connaître t'aide à formuler tes demandes.

![Liste des onze outils du MCP ScreenWeaver : six outils de lecture comme get_scene et search_script, cinq outils d'écriture comme import_script, edit_script et create_shots](/images/blog/screenweaver-mcp-claude-chatgpt-scenario-storyboard/workflow-2.webp)

| Outil | Type | Ce que tu peux lui demander |
| --- | --- | --- |
| list_projects | Lecture | « Quels projets tu vois ? » |
| get_project_outline | Lecture | « Fais-moi le point sur la structure de l'épisode 2 » |
| get_scene | Lecture | « Lis la scène 7 et dis-moi où le rythme retombe » |
| search_script | Lecture | « Trouve chaque réplique où elle parle de son père » |
| list_entities | Lecture | « Liste mes personnages et leurs descriptions » |
| list_shots | Lecture | « Montre-moi le découpage de la scène 3 » |
| import_script | Écriture | « Importe ce fichier Final Draft, montre l'aperçu d'abord » |
| edit_script | Écriture | « Resserre cette scène d'un tiers, attends mon feu vert » |
| create_shots | Écriture | « Crée les plans de la scène 4 pour une caméra à l'épaule » |
| update_shot | Écriture | « Passe le plan 2 en gros plan, deux secondes de plus » |
| set_project_aspect_ratio | Écriture | « On tourne en 16:9, règle le format du projet » |

Sur un projet partagé, les lecteurs n'ont accès qu'aux outils de lecture. Pour modifier, il faut être propriétaire ou éditeur.

## Cas pratique : de la scène écrite au découpage, en quatre messages

Voilà le déroulé que je te conseille pour une vraie séance de travail. Le projet existe déjà dans ScreenWeaver, le connecteur est actif dans Claude.

**Message 1, le contexte.** « Donne-moi la vue d'ensemble du projet, puis lis les scènes 5 et 6. » L'assistant appelle `get_project_outline`, puis `get_scene` deux fois. Il sait maintenant où on en est, qui sont les personnages, et ce qui vient de se passer.

**Message 2, le travail d'écriture.** « La scène 6 est trop explicative. Réécris-la pour que la dispute passe par les gestes, pas par les mots. Montre-moi la nouvelle version et ne touche à rien avant mon accord. » C'est ici que l'assistant est utile : il propose, tu juges. Tu fais deux ou trois allers-retours dans la conversation, comme d'habitude.

**Message 3, l'écriture dans le projet.** « C'est bon, remplace la scène 6 par cette version. » L'assistant appelle `edit_script`. Comme il s'agit de remplacer du texte existant, il te demande une confirmation explicite. La version d'avant part dans l'historique des versions de ScreenWeaver.

**Message 4, le découpage.** « Découpe la scène 6 pour une caméra : un plan large d'installation, un champ-contrechamp serré, un insert sur la tasse renversée, et finis sur un plan fixe long. » L'assistant appelle `create_shots`. Les plans arrivent dans le storyboard, dans l'ordre, rattachés à leur scène, avec valeur de plan, caméra et durée.

Résultat : la scène est réécrite dans le vrai scénario et découpée dans le vrai storyboard. Aucune réplique n'a été recopiée à la main. Et c'est là que le gain se voit sur un projet long, parce que tu ne perds plus d'information à chaque copier-coller.

> 💡 **Le cut de Frank :** donne toujours au moins une scène de contexte avant de demander un découpage. Un plan n'a de sens que par rapport à celui d'avant. Si l'assistant ne sait pas comment la scène précédente se termine, il te propose une ouverture de scène qui raccorde mal.

Pour la logique de découpage elle-même, j'ai écrit une méthode complète sur [comment diriger avant de générer](/blog/methode-realisateur-ia-diriger-avant-generer). Le MCP accélère la saisie. Il ne remplace pas ton intention de mise en scène.

## Ce que le MCP ne fait pas, en tout cas pas encore

Je préfère que tu le saches avant d'y passer une soirée.

- **Il ne génère ni images ni vidéo.** Les outils travaillent sur le scénario et les plans : action, valeur de plan, caméra, durée. La génération des images du storyboard et des plans vidéo reste dans l'application ScreenWeaver.
- **Il ne crée pas de projet.** Tu crées le projet dans ScreenWeaver, puis tu demandes à l'assistant d'y travailler.
- **Il ne supprime ni projet, ni plan, ni élément d'histoire.** C'est un choix de sécurité, pas un oubli.
- **Il n'est pas accessible depuis l'offre gratuite.** Il faut un compte avec crédits, donc Auteur ou Studio.
- **Il ne se branche pas sur un client qui ne gère pas OAuth.** Si ton outil ne sait pas faire une connexion OAuth, il ne peut pas encore se raccorder.

Et la limite la plus importante n'a rien de technique : **l'assistant n'a pas ton goût**. Il écrit vite, il trouve vite, il découpe vite. Choisir ce qui reste dans le film, c'est toujours ton travail.

## Tu gardes la main sur ton texte

C'est la question que tout le monde pose en premier, et elle est légitime : « Et si l'IA massacre mon scénario ? » Voilà les garde-fous prévus :

- Tu choisis **tous les projets ou une liste précise** au moment d'autoriser la connexion.
- Le scénario d'avant chaque modification ou import est **gardé dans l'historique des versions**.
- Supprimer des lignes ou remplacer un scénario demande **ta confirmation explicite**.
- Tu peux **révoquer l'accès à tout moment** dans ton compte ScreenWeaver, onglet Applications connectées.
- L'assistant ne voit jamais ton mot de passe, et les jetons de connexion sont stockés hachés.

Côté équipe, les changements faits par l'assistant apparaissent en direct chez tes collaborateurs. Sur un projet à plusieurs, mets-vous d'accord sur une règle simple : qui a le droit de faire écrire l'assistant dans le scénario, et à quel moment. Le reste du temps, les outils de lecture suffisent.

## Mes conseils pour bien t'en servir

Voilà ce que je te conseille pour bien démarrer :

1. **Commence en lecture seule.** Les premiers jours, utilise surtout `get_scene` et `search_script`. Demande des relectures, des repérages d'incohérences, des listes. Tu apprends comment l'assistant lit ton projet sans rien risquer.
2. **Exige l'aperçu avant chaque écriture.** Termine tes demandes par « montre-moi avant de modifier ». Ça coûte un message et ça t'évite de fouiller l'historique.
3. **Nomme les scènes par leur numéro.** « La scène 9 » est plus fiable que « la scène du parking ».
4. **Vérifie les noms à l'import.** L'aperçu repère les noms trop proches, comme TOBY et TOBIAS. Prends dix secondes pour trancher, sinon tu te retrouves avec deux personnages au lieu d'un.
5. **Garde la mise en scène dans ta tête, pas dans le chat.** Écris tes notes de découpage comme tu les donnerais à un premier assistant réalisateur : précises, courtes, avec une intention. L'assistant les transforme en plans, il ne les invente pas à ta place.

Si tu veux voir comment le scénario et le storyboard s'enchaînent ensuite jusqu'à la production, mon guide sur [le pipeline IA du script au storyboard puis à la production](/blog/pipeline-ia-script-storyboard-production-de-a-z) reprend toute la chaîne. Et pour l'outil lui-même, côté écriture, il y a mon guide [ScreenWeaver, du scénario au storyboard](/blog/screenweaver-ai-ecriture-scenario-storyboard).

## FAQ sur le MCP ScreenWeaver

### Qu'est-ce que le MCP de ScreenWeaver ?

C'est un serveur distant qui parle le Model Context Protocol, le standard ouvert qu'utilisent les assistants IA pour travailler avec d'autres applications. Une fois branché, Claude, ChatGPT, Claude Code, Cursor, VS Code ou un autre client compatible peut lire et modifier ton scénario et ton storyboard ScreenWeaver. Concrètement, l'assistant ne te rend plus du texte à recopier : il écrit directement dans ton projet, au format scénario, avec des en-têtes de scène, de l'action, des personnages et des dialogues reliés à tes éléments d'histoire. Il peut aussi créer les plans du storyboard à partir d'une scène. Tout passe par ton compte, sans clé API.

### Faut-il payer pour utiliser le MCP ScreenWeaver ?

Oui, l'accès est réservé aux comptes avec crédits, inclus dans les offres Auteur et Studio. Au 12 octobre 2026, Auteur coûte 39,99 dollars par mois avec 6 000 crédits, et Studio 149,99 dollars par mois avec 25 000 crédits. L'offre Screenwriter reste gratuite pour écrire, mais elle ne donne pas accès au MCP. En revanche, une fois l'accès ouvert, utiliser les onze outils ne coûte rien : lire une scène, importer un fichier, réécrire un dialogue ou créer des plans ne consomme aucun crédit. Les crédits servent à la génération d'images et de vidéo dans l'application. Vérifie toujours les tarifs à jour sur le site avant de t'abonner.

### Le MCP fonctionne-t-il avec la version gratuite de Claude ?

Côté Claude, oui : les connecteurs personnalisés sont disponibles sur toutes les offres, avec un seul connecteur personnalisé sur l'offre gratuite. Tu peux donc brancher ScreenWeaver sur un compte Claude gratuit, à condition de ne pas avoir déjà utilisé ce connecteur pour autre chose. Côté ScreenWeaver, en revanche, il te faut un compte Auteur ou Studio. Les noms de menus dans Claude peuvent changer tant que la fonction est en bêta, donc si tu ne trouves pas « Connecteurs » dans les paramètres, regarde la page d'aide d'Anthropic sur les connecteurs personnalisés, qui suit les changements d'interface plus vite qu'un article de blog.

### Quelle offre ChatGPT faut-il pour brancher ScreenWeaver ?

Il faut une offre qui donne accès au mode développeur, parce que l'ajout d'une application personnalisée passe par lui. Les offres concernées changent régulièrement chez OpenAI, je ne vais donc pas te donner une liste qui sera fausse dans un mois. Le plus simple : ouvre Paramètres, puis Applications, puis les paramètres avancés. Si l'interrupteur du mode développeur est là, tu peux créer l'application ScreenWeaver avec l'URL du serveur et la connexion OAuth. S'il n'y est pas, ton offre ne le permet pas encore, et l'aide d'OpenAI te dira laquelle choisir. Claude reste l'option la plus directe si tu hésites.

### L'assistant peut-il effacer mon scénario ?

Il ne peut supprimer ni projet, ni plan, ni élément d'histoire : aucun outil n'existe pour ça. Pour le texte du scénario, supprimer des lignes ou remplacer tout le scénario demande ta confirmation explicite. Et avant chaque modification ou import, la version précédente est enregistrée dans l'historique des versions de ScreenWeaver, donc tu peux toujours revenir en arrière. Le vrai risque n'est pas l'effacement, c'est d'accepter trop vite une réécriture moyenne. Prends l'habitude de demander l'aperçu avant chaque changement, et relis comme tu relirais la proposition d'un coscénariste.

### Le MCP ScreenWeaver peut-il générer les images du storyboard ?

Pas encore. Les outils actuels travaillent sur le scénario et sur les plans : action, valeur de plan, mouvement de caméra, durée, enchaînement entre plans. La génération des images du storyboard et des plans vidéo reste dans l'application ScreenWeaver pour l'instant. En pratique, le MCP te sert à préparer un découpage propre depuis ta conversation, et tu passes ensuite dans l'application pour générer les images à partir de ces plans. Ça a un avantage : tes plans sont déjà rattachés à la bonne scène, avec une intention de caméra claire, ce qui donne des images bien plus cohérentes qu'un prompt écrit à la volée.

### Quels formats de scénario peut-on importer par le MCP ?

Le MCP importe les fichiers Final Draft (.fdx), WriterDuet et Fountain, ainsi que tout texte déjà au format scénario. Pour un PDF ou un document Word, la méthode est un peu différente : tu déposes le fichier dans la conversation, l'assistant lit le texte et l'écrit dans ton projet élément par élément, en reconnaissant les en-têtes de scène, l'action, les noms de personnages et les dialogues. Dans tous les cas, l'import montre d'abord un aperçu, avec les scènes, les personnages, les lieux, et les noms qui ressemblent à ceux que tu as déjà. Les scénarios longs sont écrits en plusieurs passes.

## Ce que je retiens

Le MCP de ScreenWeaver ne t'apprend pas à écrire et ne réalise pas ton film. Il fait une chose précise : il met ton assistant IA dans ton projet au lieu de le laisser à côté. Plus de copier-coller entre le chat et le logiciel, plus de scène recopiée pour donner du contexte, plus de découpage retapé à la main.

Mon conseil pour démarrer : prends une scène qui te résiste, branche le connecteur, et fais juste les quatre messages du cas pratique. Lecture, proposition, écriture validée, découpage. Si au bout d'une séance tu n'as rien gagné, débranche-le, tu n'auras rien perdu. Si tu as gagné une heure, tu sais où la réinvestir : dans la mise en scène.

La procédure complète, les onze outils et les réglages de chaque client sont sur [la page du MCP ScreenWeaver](https://www.screenweaver.ai/fr/mcp).
