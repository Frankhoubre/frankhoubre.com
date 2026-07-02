---
title: "Google Gemini 3.1 Flash Image et Omni Flash : image-to-video en API"
date: "2026-07-02"
category: "actualite"
excerpt: "Le 30 juin, Google lance Gemini 3.1 Flash Image (4 s par image) et Omni Flash (image-to-video). Image et vidéo dans la même API, ce que ça change."
thumbnail: "/images/blog/google-gemini-31-flash-image-omni-flash-video-juin-2026/hero.webp"
---

# Google lance Gemini 3.1 Flash Image et Omni Flash : image et vidéo unifiées dans l'API

Le 30 juin 2026, Google a annoncé deux sorties simultanées sur la Gemini API : **Gemini 3.1 Flash Image** (modèle de génération d'image rapide, aussi appelé Nano Banana 2 Lite en interne) et **Gemini Omni Flash**, un modèle qui convertit des images générées en vidéo à partir d'instructions en langage naturel. Les deux sont disponibles immédiatement via Google AI Studio, la Gemini API et le Gemini Enterprise Agent Platform.

C'est la première fois que Google propose image et vidéo dans le même pipeline API cohérent, à des tarifs significativement plus bas que les versions précédentes.

## Gemini 3.1 Flash Image : 4 secondes par image à 0,034 dollar

Le Gemini 3.1 Flash Image cible les workflows à volume élevé où la vitesse compte plus que la perfection absolue. D'après Google, le modèle retourne une image texte-to-image en environ **quatre secondes**, pour un coût de **0,034 dollar par image en résolution 1024x1024**.

C'est un positionnement clair : ce n'est pas le modèle le plus beau de Google, c'est le modèle le plus utilisable en production industrielle. Les points forts documentés :

- **Cohérence des personnages** : une des faiblesses historiques des modèles image rapides, Google affirme avoir significativement amélioré la stabilité des traits entre plusieurs générations avec le même seed.
- **Texte lisible dans l'image** : rendu de typographies et d'inscriptions nettement amélioré par rapport à Flash Image v1.
- **Adherence aux prompts** : le modèle suit mieux les instructions complexes sans dériver sur les éléments secondaires de la description.

> 💡 **Le cut de Frank :** Gemini 3.1 Flash Image est exactement ce dont ont besoin les pipelines de génération en lot : storyboards automatisés, variantes de décors pour une série, sets de personnages pour des formations vidéo. Personne ne veut payer 0,15 dollar par image quand on génère 200 variations. À 0,034 dollar, on peut commencer à parler de flux de production réels.

Pour situer, les modèles image preview Gemini (gemini-3-pro-image-preview, gemini-3.1-flash-image-preview) ont été dépréciés et coupés le 25 juin, comme [l'avait documenté cet article](/blog/google-imagen-gemini-image-preview-depreciation-juin-2026). Ce lancement est la suite directe : Google ferme les anciens et ouvre la génération suivante au même moment.

## Gemini Omni Flash : de l'image à la vidéo à 0,10 dollar par seconde

Le deuxième modèle est plus inattendu. **Gemini Omni Flash** est en preview public depuis le 30 juin. Il prend une image en entrée, une instruction en langage naturel, et génère une vidéo courte. Le prix annoncé est **0,10 dollar par seconde de vidéo générée**.

Ce qui le différencie des approches précédentes de Google :

- Il s'intègre directement après Gemini 3.1 Flash Image dans le même pipeline API. On génère l'image avec Flash Image, on passe le résultat à Omni Flash, on obtient une vidéo. Pas de changement de plateforme, pas de réexport.
- L'édition se fait en langage naturel. "Rends la scène plus dynamique", "change l'éclairage vers du coucher de soleil", "ajoute du mouvement dans les feuilles" sont des instructions suffisantes pour déclencher une variation.
- Il n'est pas encore en disponibilité générale, il reste en preview public avec des limites de débit.

Le positionnement par rapport à Veo 3.1, qui existe toujours pour les générations vidéo longues et de haute qualité via Google Flow, est explicite : Omni Flash est le modèle d'expérimentation rapide, Veo 3.1 est le modèle de production. Les deux coexistent.

## Ce que ça signifie pour les créateurs et développeurs

### Pour ceux qui utilisent l'API directement

Si vous avez un pipeline automatisé qui génère des images, vous avez maintenant une extension naturelle vers la vidéo dans le même environnement. La chaîne texte → image → vidéo existe sur une seule plateforme avec une seule clé API et une facturation unifiée.

C'est aussi une réponse directe à ce que proposaient les concurrents : le MCP Runway (qui permet de générer vidéo depuis Claude) ou les APIs Kling et Runway coûtent entre 0,05 et 0,20 dollar par seconde selon les modèles. Google se positionne dans la même fourchette mais avec l'avantage de l'intégration.

Pour un [pipeline IA de A à Z](/blog/pipeline-ia-script-storyboard-production-de-a-z), avoir image et vidéo sur la même API simplifie l'architecture technique : un seul endpoint à gérer, une seule authentification, un seul tableau de facturation.

### Pour ceux qui passent par Google AI Studio

Si vous préférez les interfaces graphiques aux appels API, Google AI Studio intègre les deux modèles directement. Vous pouvez tester Gemini 3.1 Flash Image et Omni Flash dans l'interface de prototypage sans écrire une ligne de code.

Le quota gratuit de Google AI Studio reste limité, mais il est suffisant pour valider des workflows avant de les déployer en production.

### Ce qui manque encore

Soyons honnêtes sur les limites actuelles :

- **Omni Flash reste en preview**. Il y a des limitations de débit non documentées précisément, et le modèle peut refuser certaines requêtes sans explication claire pendant la période de preview.
- **Durée vidéo non confirmée** : Google n'a pas communiqué de limite officielle sur la longueur maximale des clips Omni Flash. Les premiers retours de la communauté suggèrent des clips entre 5 et 15 secondes.
- **Audio absent** : contrairement à Veo 3.1 qui intègre l'audio natif depuis juin, Omni Flash génère de la vidéo muette. Il faut ajouter la couche audio séparément, par exemple via [ElevenLabs](/blog/elevenlabs-fin-voix-v1-migration-2026) ou un autre service.

## Le contexte : Google restructure sa gamme image radicalement

Ce lancement de fin juin fait partie d'un mouvement plus large. En l'espace d'une semaine, Google a :

1. Coupé les modèles image preview (deprecated le 25 juin)
2. Lancé Gemini 3.1 Flash Image et Gemini Omni Flash (30 juin)
3. Positionné Veo 3.1 comme le modèle "pro" sur Google Flow pour les vidéos longues avec audio

C'est une consolidation de gamme. Avant, la gamme Imagen/Gemini image était fragmentée et difficile à naviguer pour les développeurs. Désormais, le message est plus clair : Flash Image pour le volume, Pro Image (Nano Banana 2) pour la qualité, Veo 3.1 pour la vidéo premium, Omni Flash pour les bridges rapides image-to-video.

Pour ceux qui avaient migré de Runway ou Kling vers Veo 3.1 après la [levée des contrôles sur Sora](/blog/sora-api-arret-septembre-2026-alternatives-createurs), Gemini Omni Flash ajoute une nouvelle option dans la palette des générateurs vidéo API-first.

---

## FAQ

**Quelle est la différence entre Gemini 3.1 Flash Image et Nano Banana 2 ?**

C'est le même modèle. Google utilise deux noms selon le contexte : "Gemini 3.1 Flash Image" dans la documentation API et les communications grand public, "Nano Banana 2 Lite" dans la nomenclature interne et certains environnements cloud. Sur Google AI Studio, il apparaît sous le nom Gemini 3.1 Flash Image.

**Gemini Omni Flash remplace-t-il Veo 3.1 ?**

Non. Veo 3.1 reste le modèle vidéo premium de Google, accessible via Google Flow, pour des générations longues avec audio natif. Omni Flash est positionné pour des générations rapides et des transitions image-to-video légères dans des workflows automatisés. Les deux coexistent avec des cas d'usage différents.

**Peut-on utiliser Gemini 3.1 Flash Image avec le Gemini API gratuit ?**

Oui, dans une certaine mesure. Google AI Studio propose un quota gratuit qui couvre les tests et prototypages. Pour des usages en production avec volume, il faut passer à un plan payant de la Gemini API. Les prix sont facturés à l'image (0,034 dollar pour Flash Image) ou à la seconde (0,10 dollar pour Omni Flash).

**Omni Flash gère-t-il l'audio ?**

Non, à la date du lancement. Omni Flash génère de la vidéo sans audio. Pour les productions qui nécessitent audio synchronisé, il faut soit utiliser Veo 3.1 via Google Flow (qui intègre l'audio natif depuis juin 2026), soit ajouter l'audio en post-production.

**Les modèles sont-ils disponibles en Europe ?**

Oui, via la Gemini API standard. Google AI Studio est accessible depuis l'Europe. Les contraintes RGPD s'appliquent sur les données transmises via l'API : vérifiez les conditions de traitement des données si vous traitez des contenus personnels ou confidentiels.

**Flash Image et Omni Flash sont-ils utilisables avec le SDK Python Gemini ?**

Oui. Les deux modèles sont accessibles via le SDK Python google-generativeai et le SDK JavaScript officiel. Les IDs de modèles sont gemini-3.1-flash-image pour Flash Image et gemini-omni-flash-preview pour Omni Flash pendant la période de preview.
