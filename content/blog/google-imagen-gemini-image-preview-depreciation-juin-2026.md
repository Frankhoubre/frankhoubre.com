---
title: "Google coupe Imagen et les modèles image Gemini preview : migration avant le 24 juin"
date: "2026-06-21"
category: "actualite"
excerpt: "Google supprime ses modèles Imagen 3 et les previews d'image Gemini le 24-25 juin 2026. Si votre workflow image passe par l'API Gemini, vous avez moins d'une semaine pour migrer. Voici quoi faire."
thumbnail: "/images/blog/google-imagen-gemini-image-preview-depreciation-juin-2026/hero.webp"
---

# Google coupe Imagen et les modèles image Gemini preview : migration avant le 24 juin

Si vous générez des images via l'API Gemini ou le SDK Google AI, il y a une coupure imminente que la plupart des créateurs n'ont pas vue venir. Google a posté les dates dans son [changelog officiel de l'API](https://ai.google.dev/gemini-api/docs/changelog) et dans la [page de dépréciation](https://ai.google.dev/gemini-api/docs/deprecations), mais sans tambour ni trompette.

Le résumé :

- **24 juin 2026** : tous les modèles `imagen-3.0-generate-*` sont coupés.
- **25 juin 2026** : `gemini-3.1-flash-image-preview` et `gemini-3-pro-image-preview` sont coupés.

C'est dans trois jours à compter d'aujourd'hui, 21 juin. Si votre pipeline appelle encore ces endpoints, il tombera en erreur en milieu de semaine prochaine.

## Ce qui disparaît exactement

**Côté Imagen :**
`imagen-3.0-generate-002` et les autres variantes `imagen-3.0-*` via l'API Gemini sont dépréciés. Ces modèles étaient accessibles dans AI Studio et via SDK Python/Node pour générer des images à partir de prompts textuels. À partir du 24 juin, ces appels retourneront une erreur.

**Côté Gemini image (preview) :**
Les deux modèles natives d'image Gemini lancés en preview cette année arrivent à leur fin de preview :
- `gemini-3.1-flash-image-preview`
- `gemini-3-pro-image-preview`

Ces models étaient les plus récents disponibles pour la génération d'image native dans Gemini. La bonne nouvelle : leurs versions GA (Generally Available) sont disponibles et stables.

## Vers quoi migrer

Google a rendu les versions GA disponibles depuis le 28 mai 2026 :

- **`gemini-3.1-flash-image`** : remplace le flash image preview. Identique en qualité, stable en production.
- **`gemini-3-pro-image`** : remplace le pro image preview. Version plus puissante, tarif plus élevé.

Pour Imagen, le remplacement recommandé est de passer sur les modèles Gemini image GA ci-dessus. Google positionne les Gemini Image models comme le successeur direct d'Imagen pour les cas d'usage génération.

La migration est, dans la plupart des cas, un simple changement de string dans votre appel API.

```python
## Avant (va casser le 24-25 juin)
model="imagen-3.0-generate-002"
model="gemini-3.1-flash-image-preview"

## Après (stable)
model="gemini-3.1-flash-image"
model="gemini-3-pro-image"
```

> 💡 **Le cut de Frank :** Si vous avez construit des workflows ComfyUI, des scripts Python ou des intégrations n8n qui appellent l'API Gemini pour générer des images (notamment pour les hero images ou les visuels de storyboard), vérifiez vos model IDs maintenant. La date butoir ne se prolonge pas.

## Pourquoi Google coupe ces modèles aussi vite

La preview d'image native dans Gemini a été lancée relativement récemment. Les modèles preview ont une durée de vie délibérément courte chez Google : ils permettent de tester en conditions réelles avant la stabilisation GA. Une fois la version GA sortie (28 mai pour ces deux-là), les previews ont un délai de quelques semaines avant d'être éteints.

C'est le cycle normal. Ce qui est inhabituel ici, c'est que les deux délais tombent dans la même semaine (24 et 25 juin), ce qui compresse la fenêtre pour les équipes qui n'avaient pas suivi le changelog de près.

## L'impact concret sur les créateurs IA

Les créateurs qui utilisent Gemini API pour l'image se répartissent en deux groupes :

**Les créateurs techniques.** Ceux qui ont des scripts Python, des intégrations ComfyUI, des workflows automatisés qui génèrent des hero images pour des articles (exactement ce que fait ce site), des visuels de storyboard, ou des concepts pour des productions. Pour eux, c'est une migration de quelques minutes, à condition de le faire avant le 24.

**Les créateurs via des outils tiers.** Si vous utilisez une app, un outil no-code ou un service SaaS qui génère des images via Gemini en arrière-plan (beaucoup le font sans le dire), le fournisseur doit migrer de son côté. Si l'outil tombe en panne sur la génération image la semaine prochaine, c'est probablement ce qui est en cause.

Le bon réflexe : si vous avez un workflow image automatisé, vérifiez la documentation du service que vous utilisez pour voir s'il mentionne Imagen ou Gemini preview.

## Ce que Google stabilise en parallèle

La coupure des previews arrive en même temps que plusieurs lancements GA. Depuis fin mai 2026, l'API Gemini dispose de :

- **`gemini-3.1-flash-image` GA** : génération d'image rapide et économique, idéale pour les volumes (thumbnails, variations de concept).
- **`gemini-3-pro-image` GA** : qualité supérieure, meilleure cohérence des détails fins, recommandée pour les visuels de production finaux.
- **`gemini-3.5-flash` GA** (texte) : pour les workflows qui combinent génération de prompt et génération d'image dans le même appel.

Google pousse aussi vers ses Managed Agents (lancés en public preview en mai), ce qui commence à permettre des workflows image à plusieurs étapes avec mémoire contextuelle. Pas encore la solution de référence pour la production créative, mais la direction est claire.

## Côté vidéo : même combat, deadline au 30 juin

Pendant qu'on parle de dépréciation, il faut signaler que la coupure image du 24-25 juin n'est pas la seule. Les anciens modèles vidéo dans l'API Gemini tombent le **30 juin 2026**.

Si vous utilisez Veo via l'API et que votre intégration pointe encore vers des model IDs `veo-3-*` (sans le suffixe `1`), vérifiez [la page de migration Veo](https://ai.google.dev/gemini-api/docs/deprecations). Les remplacements sont `veo-3.1-generate-preview` et les modèles `veo-3.1-fast-generate-preview`.

Un seul changelog à lire, deux dates à retenir : 24-25 juin pour l'image, 30 juin pour la vidéo.

## Check rapide : est-ce que votre workflow est affecté ?

Répondez à ces trois questions :

1. **Utilisez-vous l'API Google AI / Gemini directement dans un script ?** Cherchez `imagen-3.0`, `gemini-3-pro-image-preview` ou `gemini-3.1-flash-image-preview` dans votre code. Si vous trouvez une de ces strings, migrez.

2. **Utilisez-vous un outil tiers qui génère des images ?** Vérifiez leur changelog ou envoyez un message à leur support. Beaucoup s'appuyaient sur Imagen.

3. **Votre workflow utilise-t-il Vertex AI plutôt que l'API Gemini ?** Les dates et les modèles GA sont légèrement différents sur Vertex AI ; vérifiez les [release notes Vertex AI](https://cloud.google.com/vertex-ai/generative-ai/docs/release-notes) séparément.

## Un commentaire sur la transparence des déprécations Google

Ce n'est pas la première fois que Google coupe des modèles avec un préavis court. ElevenLabs avait annoncé la fin de ses voix v1 avec 30 jours de délai (ce qui avait déjà semblé court). Google, ici, a posté les dates dans son changelog, mais sans email ou notification push aux développeurs.

Pour un créateur qui utilise ces outils comme infrastructure de production, pas comme jouet, c'est un argument supplémentaire pour avoir un monitoring basique sur les pages de dépréciation des APIs que vous utilisez. Un simple script qui vérifie hebdomadairement si votre model ID est toujours dans la liste "active" sur [ai.google.dev/gemini-api/docs/models](https://ai.google.dev/gemini-api/docs/models) peut éviter une surprise désagréable un lundi matin.

Si vous construisez des workflows image automatisés et que vous voulez structurer le prompt de génération avant de l'envoyer à l'API, l'[outil de génération de prompts cinématiques](/outils/generateur-prompt-cinema) peut vous aider à formaliser vos instructions visuelles avant de les soumettre à Imagen ou Gemini Image. Pour les créateurs qui utilisent ces images dans un pipeline de storyboard, le [générateur de storyboard PDF](/outils/generateur-storyboard-pdf) s'intègre naturellement en aval.

---

## FAQ : Dépréciation Gemini image et Imagen

**Est-ce que mes images générées avant le 24 juin sont affectées ?**
Non. Les images déjà générées et sauvegardées restent intactes. La coupure affecte uniquement les appels API futurs vers ces modèles. Vos assets existants ne disparaissent pas.

**Est-ce que gemini-3.1-flash-image (GA) coûte plus cher qu'Imagen ?**
Le tarif GA est légèrement différent selon le type d'image. Sur l'API Gemini, le modèle flash image est conçu pour rester économique. Les tarifs précis sont publiés sur la page des [modèles Gemini](https://ai.google.dev/gemini-api/docs/models). Dans la plupart des cas de production créative (volumes modérés, pas des millions d'images), la différence est négligeable.

**Est-ce que Google AI Studio est aussi affecté, ou seulement l'API ?**
Les deux. AI Studio utilise les mêmes model IDs sous le capot. Si vous testiez avec Imagen dans AI Studio, vous devrez sélectionner gemini-3.1-flash-image ou gemini-3-pro-image dans l'interface à partir du 25 juin.

**Est-ce que Midjourney, Runway, Kling ou Pika sont touchés par cette dépréciation ?**
Non. Ces outils utilisent leurs propres modèles et infrastructure. La coupure concerne exclusivement les modèles Google accessibles via l'API Gemini et Vertex AI.

**Est-ce que la qualité d'image change entre Imagen et gemini-3-pro-image ?**
Les deux générations sont différentes architecturalement. gemini-3-pro-image a tendance à mieux suivre les instructions textuelles complexes et à maintenir une meilleure cohérence sur les détails fins. Pour les visuels de production ou les hero images de haute qualité, c'est généralement un upgrade, pas un downgrade.

**Pourquoi Google change-t-il de nom d'Imagen à Gemini Image ?**
C'est une consolidation de la gamme. Google unifie progressivement ses modèles génératifs sous la marque Gemini (texte, image, vidéo, audio). Imagen reste en tant que produit sur Vertex AI dans certains contextes d'entreprise, mais l'API grand public passe sur Gemini Image. C'est la même logique que le passage de Bard à Gemini.

**Si mon modèle est coupé et que je n'ai pas migré, que se passe-t-il exactement ?**
Vos appels API retourneront une erreur de type "model not found" ou "deprecated model". Cela peut faire planter un script automatisé, bloquer la génération de thumbnail dans un outil tiers, ou interrompre un workflow ComfyUI. La solution est de changer le model ID et de relancer.
