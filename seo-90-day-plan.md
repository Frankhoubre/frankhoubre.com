# Plan éditorial SEO 90 jours (2026-07-10 → 2026-10-07)

1 article evergreen/autorité par jour. Ce plan alimente le créneau
« evergreen » du growth loop (qui continue ses 2 actualités/jour en
parallèle). J1 = 2026-07-10. Chaque entrée a été vérifiée contre les ~240
slugs existants de `content/blog/` pour éviter les doublons ; les jours
marqués UPDATE renforcent un article existant au lieu d'en créer un.

## Règles communes (héritées de GUIDE_EDITORIAL.md et SEO-GUIDELINES.md)

- Title ≤ 60 caractères, mot-clé en tête ; excerpt 120-155 caractères.
- H1 = title ; ≥ 5 H2 ; FAQ 6-8 questions en fin d'article (alimente le
  FAQPage JSON-LD automatiquement).
- 3-6 liens internes contextuels dont le pilier du cluster ; ajouter le même
  jour un lien entrant depuis une page existante du cluster.
- Jamais de tiret cadratin, jamais de fait ou chiffre inventé. Les articles
  « preuve » (marqués [données Frank]) ne sortent que si les chiffres réels
  sont fournis ; sinon décaler.
- Schema : BlogPosting + BreadcrumbList + FAQPage sont automatiques. Les
  jours « avis » peuvent viser Review et les tutoriels HowTo si on fait
  évoluer le graphe un jour (évolution FR+EN simultanée obligatoire).
- Anti-cannibalisation : appliquer la parade de la colonne dédiée ;
  référence : `seo-content-map.md` et `seo-cross-domain-strategy.md`.

## Clusters

| Code | Cluster | Pilier interne | CTA par défaut |
| --- | --- | --- | --- |
| MARQUE | Frank Houbre, parcours, personal brand | `/a-propos` | Kit presse `/presse` |
| CINEMA | Cinéma IA, vision, opinion | `/blog/metiers-audiovisuel-ia-menaces-transformation-avis` | Newsletter / blog |
| CAS | Études de cas, coulisses (Ronces, VOIDBORN, Lost Garden, ScreenWeaver, Outerframe) | `/a-propos` (projets) | Projet concerné |
| OUTILS | Tests, avis, guides d'outils | pilier du sujet (carte) | Outil `/outils/*` pertinent |
| PROD | Méthodes de production, workflows | `/blog/workflow-complet-idee-film-ia-realiste` | AI Studios (doux) |
| B2B | IA pour entreprises, marques, agences | `/prestation` | Demande de mission `/prestation` |
| CREATEUR | Monétisation et carrière du créateur IA | `/blog/monetiser-competences-creation-ia-freelance-agence` | Contact / AI Studios |
| FORMATION | Pédagogie, apprentissage | article J3 | AI Studios |
| OPINION | Prospective, manifestes, presse | `/presse` | Kit presse / contact |

## Semaines 1-2 : récupérer les positions GSC existantes (J1-J14)

| J | Cluster | Titre SEO | Slug | Mot-clé principal (secondaires) | Intention | Type | Prio | Liens internes | Pousser | Cannibalisation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | OUTILS | WAN d'Alibaba : guide complet du modèle vidéo open source | wan-alibaba-guide-complet | wan alibaba (wan 2.1, wan 2.5, wan ia) | info | guide pilier | HAUTE (2 717 imp legacy pos 9.5) | → wan-27-video-decevant, comfyui-guide, entrant depuis wan-27 | non | Faible. Après publication : repointer la 301 `/wan-2-1-alibaba` vers ce guide dans next.config.ts |
| 2 | MARQUE | Réalisateur IA : ma méthode pour diriger avant de générer | methode-realisateur-ia-diriger-avant-generer | méthode réalisateur IA (réalisateur ia, diriger ia) | info/autorité | méthode | HAUTE (« realisateur ia » pos 7.8) | → a-propos, comment-penser-comme-realisateur (entrant depuis lui) | non | Moyen avec comment-penser-comme-realisateur : celui-ci = mindset générique, J2 = MA méthode signée, cas réels |
| 3 | FORMATION | Frank Houbre formation : AI Studios, contenu et avis | frank-houbre-formation-ai-studios | frank houbre formation (ai studios avis) | navigationnelle/commerciale | présentation | HAUTE (« frank houbre formation » pos 16.5) | → a-propos, accueil ; entrant depuis a-propos | AI Studios | Élevé si on cible « formation IA vidéo » : parade = rester sur la requête marque, décrire le programme et renvoyer vers Skool |
| 4 | CAS | Ronces : les coulisses de mon court film IA | ronces-coulisses-court-film-ia | ronces film ia (court métrage ia coulisses) | info/preuve | coulisses | HAUTE | → creer-court-metrage-100-ia, presse ; entrant depuis accueil (section projets) | non | Faible |
| 5 | OUTILS | Claude Code pour créateurs vidéo : usages et tarifs | claude-code-createurs-video-guide | claude code (claude code tarif, claude code prix) | info/commerciale | guide | HAUTE (« claude code tarif » pos 9.5 sans page) | → comment-optimiser-workflow-ia, gerer-versions-projets | non | Faible |
| 6 | OUTILS | Doublage IA : les vraies alternatives à HeyGen comparées | doublage-ia-alternatives-heygen-comparatif | alternatives heygen doublage (doublage ia comparatif) | comparaison | comparatif | HAUTE (requêtes PAA HeyGen pos 5.8-9.6) | → heygen-elevenlabs-comparatif (pilier), synchronisation-labiale ; entrant depuis pilier | non | Moyen avec heygen-elevenlabs : parade = celui-ci compare HeyGen à ses concurrentes doublage, le pilier compare HeyGen/ElevenLabs entre eux |
| 7 | CAS | VOIDBORN : comment un animé IA a été primé en festival | voidborn-anime-ia-festival-coulisses | animé ia festival (voidborn) | info/preuve | étude de cas | HAUTE | → ronces (J4), presse, illustrations-manga-anime-ia | non | Faible |
| 8 | OUTILS | Dzine Image Animator : animer un portrait photo en vidéo | dzine-image-animator-tutoriel | dzine ai image animator | tutoriel | tutoriel | MOYENNE (59 imp pos 7.1) | → dzine-ia (pilier, entrant depuis lui), comment-transformer-image-ia-video | non | Moyen avec dzine-ia : parade = satellite mono-fonction, lien fort vers le pilier |
| 9 | MARQUE | Parcours de Frank Houbre : de la guitare au cinéma IA | parcours-frank-houbre-guitare-cinema-ia | frank houbre parcours (frank houbre biographie) | navigationnelle | récit | MOYENNE | → a-propos (pilier), presse | Business Dynamite (mention) | Moyen avec /a-propos : parade = l'article raconte (narratif long), la page bio synthétise ; canonical distinct, la page reste la cible de « qui est frank houbre » |
| 10 | OUTILS | Upscaling vidéo gratuit : les alternatives à Topaz testées | upscaling-video-gratuit-alternatives-topaz | topaz video ai gratuit (upscaler vidéo gratuit) | commerciale | comparatif | HAUTE (125 imp cumulées pos 17-19) | → topaz-video-ai (pilier, entrant depuis lui), upscaling-video-4k | non | Moyen avec le pilier Topaz : parade = intention « gratuit/alternatives », le pilier garde « avis/prix/test » |
| 11 | CAS | Lost Garden : journal de production d'une série IA | lost-garden-journal-production-serie-ia | lost garden série ia | info/preuve | journal | HAUTE | → voidborn (J7), workflow-complet-idee-film-ia ; entrant depuis accueil | Lost Garden (YouTube) | Faible. Réserver la requête marque « lost garden » à la chaîne/page dédiée, ici l'angle production |
| 12 | OUTILS | Midjourney SREF : maîtriser les références de style | midjourney-sref-references-style | midjourney sref (référence style midjourney) | tutoriel | tutoriel | MOYENNE | → midjourney-guide-complet (pilier, entrant depuis lui), comment-controler-style-visuel | non | Moyen : satellite du guide (618 imp), une seule sous-fonction |
| 13 | CAS | ScreenWeaver : pourquoi j'ai construit mon outil d'écriture | screenweaver-pourquoi-outil-ecriture | screenweaver histoire (outil écriture scénario ia) | info/preuve | coulisses fondateur | HAUTE | → screenweaver-ai-ecriture-scenario-storyboard, screenweaver-vs-final-draft | ScreenWeaver | Élevé avec les mots-clés produit EN : parade = angle fondateur FR, zéro ciblage « AI storyboard generator », liens sortants vers screenweaver.ai |
| 14 | OUTILS | MiniMax Hailuo : crédits, prix et formules expliqués | minimax-hailuo-prix-credits-formules | hailuo prix (minimax crédits) | commerciale | guide | MOYENNE (« minimax hub » pos 8.4) | → minimax-hub-plateforme (entrant depuis lui), hailuo-minimax-workflow | non | Moyen : l'actu Hub garde la requête « minimax hub », ce guide prend l'intention prix |

## Semaines 3-4 : consulting, satellites et mises à jour (J15-J28)

| J | Cluster | Titre SEO | Slug | Mot-clé principal | Intention | Type | Prio | Liens internes | Pousser | Cannibalisation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 15 | CINEMA | Combien coûte un court-métrage IA en 2026 | combien-coute-court-metrage-ia-2026 | coût court métrage ia | commerciale/info | analyse chiffrée | HAUTE | → combien-facturer-video-ia (réciproque), calculateur budget `/outils` | Outil budget | Moyen avec combien-facturer : parade = coût de production vs prix de vente, lien croisé explicite |
| 16 | B2B | Intégrer l'IA dans une boîte de production : le point de départ | integrer-ia-boite-production-depart | ia boîte de production | commerciale | guide décideur | HAUTE | → /prestation (pilier), formation-interne-equipe-creative-ia | /prestation | Faible |
| 17 | OUTILS | UPDATE `adobe-firefly-avis` : couvrir Firefly 5 | (existant) | adobe firefly 5 testé (45 imp pos 17.4) | commerciale | mise à jour | HAUTE | + lien depuis photoshop-firefly-etendre-plans | non | Nul : renforce l'existant au lieu de créer |
| 18 | PROD | Prompts cinéma : 40 plans types qui marchent vraiment | bibliotheque-prompts-cinema-plans-types | prompt cinéma ia (prompt plan cinéma) | info | ressource | HAUTE | → /outils/generateur-prompt-cinema (CTR 16 %), comment-ecrire-prompt-cinematic | Outil prompt cinéma | Moyen avec comment-ecrire-prompt-cinematic : parade = bibliothèque d'exemples vs méthode d'écriture |
| 19 | OUTILS | Kling ou Veo 3 : quel moteur vidéo selon le type de plan | kling-vs-veo-3-choisir-par-plan | kling vs veo | comparaison | comparatif | MOYENNE | → workflow-kling-3, google-veo-3-brief-realisateur | non | Moyen : parade = comparatif par plan, les workflows individuels restent piliers de chaque outil |
| 20 | CINEMA | UPDATE `metiers-audiovisuel-ia-menaces-transformation-avis` | (existant) | métiers audiovisuel ia | info | mise à jour + FAQ | HAUTE (CTR 10.9 %, pos 6.3) | + liens vers satellites J21, J43, J71, J74 au fil de leurs sorties | non | Nul |
| 21 | CINEMA | Monteur vidéo et IA : ce qui change vraiment au banc | monteur-video-ia-evolution-metier | monteur vidéo ia | info | analyse métier | MOYENNE | → metiers-audiovisuel (pilier), guide-complet-montage-video | non | Faible |
| 22 | B2B | Audit de workflow IA : la méthode que j'applique en mission | audit-workflow-ia-methode-mission | audit ia entreprise production | commerciale | méthode/preuve | HAUTE | → /prestation, comment-optimiser-workflow-ia | /prestation | Faible |
| 23 | PROD | Reverse prompting : retrouver le prompt d'une image IA | reverse-prompting-methode-complete | reverse prompting | info | tutoriel | MOYENNE | → /outils/reverse-prompting-image-ia (CTR 12.5 %), erreurs-prompt | Outil reverse | Faible |
| 24 | CAS | Les erreurs de mes trois premiers films IA | erreurs-premiers-films-ia-lecons | erreurs film ia | info | retour d'expérience | MOYENNE | → ronces (J4), film-ia-erreurs-raccord | non | Moyen avec film-ia-erreurs-raccord : parade = REX personnel vs check-list technique |
| 25 | CINEMA | Studios classiques et studios IA : qui produit quoi en 2026 | studios-traditionnels-vs-studios-ia-2026 | studio ia cinéma | info | analyse | MOYENNE | → lionsgate-runway, google-a24 | non | Faible |
| 26 | OUTILS | Vidéo IA en local : ComfyUI et WAN sur ta machine | video-ia-locale-comfyui-wan | wan comfyui (vidéo ia locale) | tutoriel | tutoriel | MOYENNE | → wan-alibaba-guide (J1, entrant depuis lui), comfyui-guide-video | non | Faible : satellite du pilier WAN |
| 27 | CAS | Outerframe Studio : pourquoi j'ai monté un studio IA | outerframe-studio-pourquoi-studio-ia | outerframe studio | navigationnelle/preuve | manifeste fondateur | MOYENNE | → presse, lost-garden (J11) | Outerframe | Faible ; ajouter Outerframe au sameAs Person (site.ts) le même jour |
| 28 | OUTILS | UPDATE `midjourney-guide-complet` : refresh 2026 + SREF | (existant) | midjourney 2026 (pos 7.1) | info | mise à jour | MOYENNE | + lien vers J12 | non | Nul |

## Semaines 5-6 : preuve, opinion, B2B (J29-J42)

| J | Cluster | Titre SEO | Slug | Mot-clé principal | Intention | Type | Prio | Liens internes | Pousser | Cannibalisation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 29 | CINEMA | Festivals de films IA : ce que les jurys regardent vraiment | festivals-films-ia-criteres-jurys | festival film ia | info | analyse (vécu) | HAUTE | → distribution-film-ia, voidborn (J7), presse | non | Moyen avec distribution-film-ia : parade = critères de sélection vs stratégie de diffusion |
| 30 | B2B | IA en agence créative : quels postes gagnent du temps | ia-agence-creative-postes-gains | ia agence créative | commerciale | analyse | MOYENNE | → /prestation, comment-creer-pub-video-agence-pro | /prestation | Faible |
| 31 | PROD | Budgéter un projet vidéo IA : la méthode complète | budgeter-projet-video-ia-methode | budget vidéo ia | info | méthode | MOYENNE | → /outils/calculateur-budget-production-ia, combien-coute (J15) | Outil budget | Moyen avec J15 : parade = méthode de calcul vs analyse des coûts marché |
| 32 | MARQUE | Concours Lépine : ce que j'y ai appris sur l'innovation | concours-lepine-lecons-innovation | concours lépine startup | info | récit | BASSE | → a-propos, parcours (J9) | non | Faible |
| 33 | CAS | Lost Garden : construire un univers cohérent par épisode | lost-garden-univers-coherent-episodes | univers cohérent série ia | info | méthode/cas | MOYENNE | → lost-garden (J11, entrant), creer-bible-lieux-decor | Lost Garden | Moyen avec J11 : parade = J11 journal de prod, J33 worldbuilding ; fusionner si GSC montre un chevauchement |
| 34 | OUTILS | Grok Imagine : avis après tests sur de vrais plans | grok-imagine-avis-test-plans | grok imagine avis | commerciale | avis | BASSE | → grok-imagine-video-1-5 (actu, entrant depuis elle) | non | Moyen : l'actu garde la requête news, l'avis prend « avis/test » |
| 35 | OPINION | Le cinéma IA va-t-il remplacer les tournages ? | cinema-ia-remplacer-tournages | cinéma ia avenir | info | opinion | MOYENNE | → metiers-audiovisuel (pilier), generation-video-nouveaux-outils | non | Faible |
| 36 | B2B | Marques : produire des publicités IA sans risque juridique | marques-publicites-ia-risque-juridique | publicité ia droit marque | commerciale | guide décideur | HAUTE | → /prestation, droits-auteur-images, pourquoi-faux-temoignages-ugc, eu-ai-act-article-50 | /prestation | Faible |
| 37 | PROD | Dossier de production : storyboard PDF prêt à envoyer | dossier-production-storyboard-pdf | dossier production storyboard | info | tutoriel | BASSE | → /outils/generateur-storyboard-pdf, pipeline-ia-script-storyboard | Outil storyboard | Moyen avec les 3 articles storyboard existants : parade = angle livrable client, aucun nouvel article storyboard après celui-ci (cf. content map §5) |
| 38 | OPINION | Pourquoi 95 % des courts-métrages IA sont oubliables | pourquoi-courts-metrages-ia-oubliables | court métrage ia qualité | info | opinion | MOYENNE | → comment-passer-rendu-amateur-a-cinema, erreurs (J24) | AI Studios (doux) | Faible |
| 39 | CAS | ScreenWeaver : leçons d'un SaaS créatif construit en solo | screenweaver-lecons-saas-creatif | créer saas créatif | info | REX build in public | MOYENNE | → screenweaver-pourquoi (J13, entrant), construire-en-public (J62) | ScreenWeaver | Moyen avec J13 : parade = J13 vision produit, J39 leçons business/tech |
| 40 | OUTILS | UPDATE `heygen-elevenlabs-comparatif` : section doublage | (existant) | comparer ia doublage heygen (pos 5.8) | comparaison | mise à jour | HAUTE | + lien croisé avec J6 | non | Nul |
| 41 | CREATEUR | Vivre de la vidéo IA en 2026 : les modèles qui tiennent | vivre-video-ia-2026-modeles-revenus | vivre de la vidéo ia | commerciale | panorama | HAUTE | → monetiser-competences (pilier, entrant), comment-trouver-clients | non | Élevé avec le pilier monétisation : parade = panorama des modèles économiques vs how-to freelance/agence ; lien croisé fort. Ne pas cibler « gagner de l'argent avec l'IA » (Business Dynamite) |
| 42 | OPINION | Les 12 questions qu'on me pose le plus sur l'IA créative | questions-frequentes-ia-creative-reponses | questions ia créative | info | FAQ longue (PAA) | MOYENNE | → accueil FAQ, a-propos, metiers-audiovisuel | /presse | Faible ; viser People Also Ask |

## Semaines 7-8 : métiers, pivots, mises à jour (J43-J56)

| J | Cluster | Titre SEO | Slug | Mot-clé principal | Intention | Type | Prio | Liens internes | Pousser | Cannibalisation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 43 | CINEMA | Acteurs et IA : clones numériques, droits et opportunités | acteurs-ia-clones-droits-opportunites | acteur ia clone | info | analyse métier | MOYENNE | → metiers-audiovisuel (pilier), diriger-personnage-ia-comme-acteur | non | Faible |
| 44 | PROD | Signature visuelle : construire son style d'auteur en IA | signature-visuelle-style-auteur-ia | style visuel réalisateur ia | info | méthode | MOYENNE | → comment-creer-univers-visuel-coherent, comment-controler-style-visuel | non | Moyen : parade = angle identité d'auteur/portfolio, les 2 existants restent techniques |
| 45 | B2B | Former une équipe créative à l'IA : mon protocole 30 jours | former-equipe-creative-ia-protocole-30-jours | former équipe ia | commerciale | méthode | HAUTE | → formation-interne-equipe-creative-ia (entrant), /prestation | /prestation | Moyen avec formation-interne : parade = protocole daté et outillé vs argumentaire général ; lien croisé |
| 46 | CINEMA | Adapter un livre en film IA : méthode et droits | adapter-livre-film-ia-methode-droits | adapter livre film ia | info | guide | BASSE | → comment-ecrire-scenario-court-metrage, droits-auteur-images | ScreenWeaver | Faible |
| 47 | CREATEUR | Créer une chaîne YouTube cinéma IA : retour d'expérience | chaine-youtube-cinema-ia-retour-experience | chaîne youtube ia | info | REX | MOYENNE | → prompts-idees-videos-youtube, ab-test-miniatures | Business Dynamite (mention parcours) | Faible ; ne pas cibler « vivre de YouTube » (BD) |
| 48 | OUTILS | UPDATE `tutoriel-runway-gen-3` : état de Runway en 2026 | (existant) | runway tutorial (232 imp EN pos 11.7) | tutoriel | mise à jour | HAUTE | + lien depuis runway-agent-skills (actu) | non | Nul |
| 49 | MARQUE | Du business en ligne au cinéma IA : pourquoi j'ai pivoté | pivot-business-en-ligne-cinema-ia | reconversion ia créative | info | récit/opinion | MOYENNE | → parcours (J9, entrant), a-propos | Business Dynamite | Faible ; l'article renvoie l'intention business vers BD |
| 50 | CAS | Une journée de production dans un studio IA solo | journee-production-studio-ia-solo | studio ia solo | info | coulisses | BASSE | → comment-produire-video-ia-24h, outerframe (J27) | non | Faible |
| 51 | CINEMA | Anatomie d'un plan IA réussi : analyse image par image | anatomie-plan-ia-reussi-analyse | analyse plan ia | info | analyse | MOYENNE | → comment-cadrer-image-ia, comment-rendre-scene-ia-credible | AI Studios (doux) | Faible |
| 52 | B2B | PME : 5 usages vidéo IA rentables sans studio interne | pme-usages-video-ia-rentables | vidéo ia pme | commerciale | guide décideur | MOYENNE | → /prestation, creer-packshots-produit | /prestation | Élevé avec le turf Business Dynamite (PME/business) : parade = strictement production vidéo, zéro « business en ligne », CTA prestation |
| 53 | MARQUE | Mon stack créatif 2026 : les outils que j'utilise vraiment | stack-creatif-2026-outils-frank-houbre | stack outils ia créateur | info | ressource | MOYENNE | → dix-sites-ia-indispensables (entrant), /liens | non | Moyen avec dix-sites : parade = stack personnel argumenté vs liste générale |
| 54 | OUTILS | UPDATE `meilleur-generateur-image-ia-gratuit` : refresh | (existant) | générateur image ia gratuit | commerciale | mise à jour | MOYENNE | + lien depuis annuaire `/outils` | non | Nul |
| 55 | CREATEUR | Freelance vidéo IA : répondre à un appel d'offres | freelance-video-ia-appel-offres | appel d'offres vidéo ia | commerciale | guide | BASSE | → monetiser-competences (pilier), creer-devis-projet-video-ia | non | Faible |
| 56 | OPINION | À quoi ressemblera un studio de cinéma en 2030 | studio-cinema-2030-prospective | futur studio cinéma ia | info | prospective | MOYENNE | → studios-traditionnels (J25), cinema-ia-remplacer (J35) | non | Faible |

## Semaines 9-10 : autorité éditoriale et B2B avancé (J57-J70)

| J | Cluster | Titre SEO | Slug | Mot-clé principal | Intention | Type | Prio | Liens internes | Pousser | Cannibalisation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 57 | OPINION | Réalisateur IA : vrai métier ou titre LinkedIn ? | realisateur-ia-vrai-metier-ou-titre | réalisateur ia métier | info | opinion | HAUTE | → methode-realisateur (J2, entrant), metiers-audiovisuel | non | Moyen avec J2 : parade = J2 méthode (comment), J57 débat métier (est-ce que) |
| 58 | CAS | Soumettre un film IA en festival : mon retour d'expérience | soumettre-film-ia-festival-retour-experience | soumettre film festival ia | info | REX | MOYENNE | → festivals-criteres (J29, entrant), distribution-film-ia | non | Moyen avec J29 : parade = REX process de soumission vs critères des jurys |
| 59 | B2B | Cahier des charges d'un film de marque IA : le modèle | cahier-des-charges-film-marque-ia | cahier des charges vidéo ia | commerciale | modèle/ressource | MOYENNE | → organiser-brief-client (entrant), /prestation | /prestation | Moyen avec organiser-brief-client : parade = document contractuel type vs conduite de brief |
| 60 | CINEMA | Ce que l'IA ne comprend toujours pas du langage cinéma | ia-langage-cinema-limites-2026 | limites ia cinéma | info | analyse | MOYENNE | → limites-ia-direction-artistique (entrant), comment-choisir-bons-angles | non | Moyen : parade = grammaire filmique vs direction artistique |
| 61 | FORMATION | Apprendre le cinéma IA seul : le curriculum complet | apprendre-cinema-ia-seul-curriculum | apprendre cinéma ia | info | parcours guidé | HAUTE | → pourquoi-comment-se-former-ia-2026 (entrant), guides du blog | AI Studios | Élevé (turf AI Studios) : parade = curriculum autodidacte gratuit à base d'articles du blog, AI Studios présenté comme accélérateur en conclusion, pas de ciblage « formation » |
| 62 | MARQUE | Construire en public : studios, outils et films ouverts | construire-en-public-studios-outils-films | build in public créatif | info | manifeste | BASSE | → screenweaver-lecons (J39), outerframe (J27) | ScreenWeaver | Faible |
| 63 | CREATEUR | Vendre un pilote de série IA à un diffuseur | vendre-pilote-serie-ia-diffuseur | vendre série ia | commerciale | guide | BASSE | → lost-garden (J11), presenter-projet-video-ia-client | Lost Garden | Faible |
| 64 | OPINION | L'authenticité à l'ère du tout-généré | authenticite-ere-contenu-genere | authenticité contenu ia | info | opinion | MOYENNE | → pourquoi-faux-temoignages-ugc, n-achetez-pas-de-prompt | non | Faible |
| 65 | CAS | Le budget réel de Ronces poste par poste [données Frank] | budget-reel-ronces-poste-par-poste | budget court métrage ia réel | info | étude de cas chiffrée | HAUTE (preuve) | → ronces (J4, entrant), combien-coute (J15) | non | Faible ; ne publier qu'avec les vrais chiffres |
| 66 | CREATEUR | Agence IA verticale : construire une offre par niche | agence-ia-verticale-offre-niche | agence ia niche | commerciale | stratégie | BASSE | → comment-creer-agence-creation-video-ia (entrant), comment-se-differencier | non | Moyen : parade = spécialisation verticale vs création d'agence (pilier existant) |
| 67 | OPINION | Kit presse créateur : pourquoi et comment faire le tien | kit-presse-createur-ia-pourquoi-comment | kit presse créateur | info | guide | BASSE | → /presse (démonstration vivante), comment-creer-portfolio-ia | /presse | Faible |
| 68 | PROD | Pitch deck de film IA : convaincre en dix slides | pitch-deck-film-ia-dix-slides | pitch deck film | commerciale | guide | BASSE | → tome-ia-note-intention (entrant), vendre-pilote (J63) | ScreenWeaver | Moyen avec tome-ia-note-intention : parade = deck de financement vs note d'intention artistique |
| 69 | CINEMA | Festivals IA : ce qu'ils changent pour les indépendants | festivals-ia-independants-opportunites | festival ia indépendant | info | analyse | BASSE | → festivals-criteres (J29), soumettre (J58) | non | Moyen avec J29/J58 : parade = impact sur l'écosystème indé ; ne créer que si J29 et J58 performent, sinon fusionner |
| 70 | B2B | Financer un film IA : aides, CNC et fonds privés | financer-film-ia-aides-cnc-fonds | financement film ia | commerciale | guide | MOYENNE | → cnc-rapport-ia-cinema (entrant), budget-reel (J65) | non | Faible |

## Semaines 11-13 : profondeur, manifeste, boucles (J71-J90)

| J | Cluster | Titre SEO | Slug | Mot-clé principal | Intention | Type | Prio | Liens internes | Pousser | Cannibalisation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 71 | CINEMA | Chef opérateur et IA : diriger la lumière sans plateau | chef-operateur-ia-diriger-lumiere | chef opérateur ia | info | analyse métier | MOYENNE | → metiers-audiovisuel (pilier), comment-decrire-lumiere-directeur-photo | non | Moyen : parade = angle métier DP vs technique de prompt lumière |
| 72 | CAS | Pub produit IA de A à Z : étude de cas réelle [données Frank] | pub-produit-ia-etude-cas-reelle | étude de cas pub ia | commerciale | étude de cas | MOYENNE | → comment-creer-pub-video-agence-pro (entrant), /prestation | /prestation | Moyen : parade = cas documenté vs guide générique ; nécessite un vrai projet |
| 73 | OPINION | L'IA détruit-elle la valeur du travail créatif ? | ia-valeur-travail-creatif-debat | ia travail créatif | info | opinion | MOYENNE | → intelligence-artificielle-industrie-creative (entrant), acteurs-ia (J43) | non | Moyen : parade = thèse économique vs panorama opportunités/dangers |
| 74 | CINEMA | Scénariste et IA : co-écrire sans se faire remplacer | scenariste-ia-coecrire-sans-remplacer | scénariste ia | info | analyse métier | MOYENNE | → ia-page-blanche-scenarisation, etude-de-cas-coecrire-film (entrants) | ScreenWeaver | Moyen : parade = angle métier scénariste vs REX de co-écriture |
| 75 | MARQUE | Podcast Génération IA : ce que 50 épisodes m'ont appris | podcast-generation-ia-lecons | podcast ia français | navigationnelle | REX | BASSE | → /liens (entrant), parcours (J9) | Podcast | Faible ; vérifier le nombre réel d'épisodes avant titre définitif |
| 76 | PROD | Veille IA : ma méthode pour suivre sans se noyer | veille-ia-methode-suivre-sans-noyade | veille ia créateur | info | méthode | BASSE | → dix-sites-ia-indispensables, blog catégorie actualite | Newsletter | Faible |
| 77 | B2B | Recruter un vidéaste IA : la grille d'évaluation | recruter-videaste-ia-grille-evaluation | recruter vidéaste ia | commerciale | ressource décideur | MOYENNE | → /prestation, audit-qualite-portfolio-ia (entrant) | /prestation | Faible |
| 78 | CAS | Lost Garden : l'économie d'une série IA indépendante [données Frank] | lost-garden-economie-serie-independante | rentabilité série ia | info | étude de cas chiffrée | MOYENNE | → lost-garden (J11, entrant), vendre-pilote (J63) | Lost Garden | Moyen avec J11/J33 : parade = angle économique ; 3 articles Lost Garden max, ne plus en créer ensuite |
| 79 | MARQUE | Pourquoi je montre mes échecs de génération | pourquoi-montrer-echecs-generation-ia | échecs génération ia | info | opinion/coulisses | BASSE | → erreurs-premiers-films (J24, entrant), pourquoi-mes-videos-ia-ont-l-air-fake | non | Faible |
| 80 | CREATEUR | UPDATE `devenir-prompt-engineer-audiovisuel` : 18 mois après | (existant) | prompt engineer audiovisuel | info | mise à jour | MOYENNE | + lien vers claude-code (J5) | non | Nul |
| 81 | PROD | Direction d'acteurs virtuels : au-delà du lip-sync | direction-acteurs-virtuels-au-dela-lip-sync | direction acteur virtuel | info | méthode | BASSE | → diriger-regards-micro-expressions, synchronisation-labiale (entrants) | non | Moyen : parade = direction de jeu globale vs techniques unitaires |
| 82 | OPINION | Préparer une masterclass IA : méthode d'intervenant | preparer-masterclass-ia-methode | masterclass ia (conférencier ia) | commerciale | méthode | MOYENNE | → /presse, /prestation, questions-frequentes (J42) | /prestation | Faible ; pose la première pierre du positionnement « conférencier IA » sans inventer d'événements ; créer une vraie page /conferences seulement quand des dates documentées existent |
| 83 | OUTILS | UPDATE `prompt-chatgpt` : recentrage brief de tournage | (existant) | prompt vidéo brief tournage | info | refonte | MOYENNE (5 766 imp pos 66 : irrécupérable en l'état) | + liens vers bibliotheque-prompts (J18) | non | Nul ; abandon assumé de « prompt chatgpt » générique (cf. content map §4) |
| 84 | B2B | Diriger une équipe hybride humains et IA sur un projet | diriger-equipe-hybride-humains-ia | équipe hybride ia | commerciale | méthode | BASSE | → former-equipe (J45, entrant), /prestation | /prestation | Faible |
| 85 | OPINION | Mes 10 convictions sur le futur de la création | dix-convictions-futur-creation-ia | futur création ia | info | manifeste | MOYENNE | → studio-2030 (J56), authenticite (J64) | /presse | Faible |
| 86 | CREATEUR | Du premier appel à la livraison : mon process client | process-client-video-ia-appel-livraison | process client vidéo ia | commerciale | méthode | BASSE | → organiser-brief-client, checklist-avant-livrer (entrants) | non | Moyen : parade = cycle commercial complet vs brief/checklist unitaires |
| 87 | OPINION | L'Europe a-t-elle une carte à jouer dans le cinéma IA ? | europe-cinema-ia-carte-a-jouer | cinéma ia europe | info | prospective | BASSE | → eu-ai-act-article-50, cnc-rapport (entrants) | non | Faible |
| 88 | MARQUE | 250 articles plus tard : ce que le SEO m'a appris | 250-articles-seo-createur-lecons | seo créateur retour d'expérience | info | REX méta | BASSE | → ia-descriptions-youtube-seo (entrant), blog | Newsletter | Faible |
| 89 | CAS | Outerframe Studio, an 1 : le bilan [données Frank] | outerframe-studio-an-1-bilan | bilan studio ia | info | bilan chiffré | MOYENNE | → outerframe (J27, entrant), presse | Outerframe | Faible ; chiffres réels obligatoires |
| 90 | OPINION | Manifeste : le cinéma IA que je veux voir exister | manifeste-cinema-ia-frank-houbre | manifeste cinéma ia | info | manifeste | HAUTE | → tous les piliers du plan (synthèse), a-propos, presse | Tous (section projets) | Faible ; clôture le trimestre, page à pousser en RP |

## État d'avancement (mis à jour par le loop à chaque publication)

Prochain jour à publier : **J1** (`wan-alibaba-guide-complet`).

| Jour | Slug | Publié le | Note |
| --- | --- | --- | --- |

Rappels pour le loop : après J1, repointer la 301 `/wan-2-1-alibaba` de
`next.config.ts` vers `/blog/wan-alibaba-guide-complet`. Les jours
[données Frank] (J65, J72, J78, J89) se sautent et se notent ici tant que les
chiffres réels manquent.

## Suivi

- Chaque dimanche : vérifier dans GSC les impressions des articles J-7 à J-1,
  ajuster les titles sous-performants (CTR < 1 % à position < 10 après 3
  semaines).
- À J30 et J60 : re-croiser ce plan avec les nouvelles requêtes GSC ; les
  jours BASSE priorité sont les variables d'ajustement (remplaçables par des
  opportunités fraîches).
- Les 4 articles [données Frank] (J65, J72, J78, J89) nécessitent des chiffres
  réels : demander à Frank en avance ou décaler sans les inventer.
