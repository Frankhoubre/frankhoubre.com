---
title: "Google cuts Imagen and the Gemini image preview models: migrate before June 24"
date: "2026-06-21"
category: "actualite"
excerpt: "Google is removing its Imagen 3 models and the Gemini image previews on June 24-25, 2026. If your image workflow goes through the Gemini API, you have less than a week to migrate. Here is what to do."
thumbnail: "/images/blog/google-imagen-gemini-image-preview-depreciation-juin-2026/hero.webp"
---

# Google cuts Imagen and the Gemini image preview models: migrate before June 24

If you generate images via the Gemini API or the Google AI SDK, there is an imminent cutoff that most creators did not see coming. Google posted the dates in its [official API changelog](https://ai.google.dev/gemini-api/docs/changelog) and on the [deprecation page](https://ai.google.dev/gemini-api/docs/deprecations), but with no fanfare.

The summary:

- **June 24, 2026**: all `imagen-3.0-generate-*` models are cut.
- **June 25, 2026**: `gemini-3.1-flash-image-preview` and `gemini-3-pro-image-preview` are cut.

That is three days from today, June 21. If your pipeline still calls these endpoints, it will fall into error in the middle of next week.

## What disappears exactly

**On the Imagen side:**
`imagen-3.0-generate-002` and the other `imagen-3.0-*` variants via the Gemini API are deprecated. These models were accessible in AI Studio and via the Python/Node SDK to generate images from text prompts. As of June 24, these calls will return an error.

**On the Gemini image (preview) side:**
The two native Gemini image models launched in preview this year are reaching the end of their preview:
- `gemini-3.1-flash-image-preview`
- `gemini-3-pro-image-preview`

These models were the most recent available for native image generation in Gemini. The good news: their GA (Generally Available) versions are available and stable.

## What to migrate to

Google made the GA versions available on May 28, 2026:

- **`gemini-3.1-flash-image`**: replaces the flash image preview. Identical in quality, stable in production.
- **`gemini-3-pro-image`**: replaces the pro image preview. A more powerful version, higher price.

For Imagen, the recommended replacement is to switch to the Gemini image GA models above. Google positions the Gemini Image models as the direct successor to Imagen for generation use cases.

The migration is, in most cases, a simple string change in your API call.

```python
## Before (will break on June 24-25)
model="imagen-3.0-generate-002"
model="gemini-3.1-flash-image-preview"

## After (stable)
model="gemini-3.1-flash-image"
model="gemini-3-pro-image"
```

> 💡 **Frank's Cut:** If you have built ComfyUI workflows, Python scripts or n8n integrations that call the Gemini API to generate images (notably for hero images or storyboard visuals), check your model IDs now. The deadline is not getting extended.

## Why Google is cutting these models so fast

The native image preview in Gemini was launched relatively recently. Preview models have a deliberately short lifespan at Google: they let you test in real conditions before the GA stabilization. Once the GA version is out (May 28 for these two), the previews have a few weeks before being shut down.

That is the normal cycle. What is unusual here is that both deadlines fall in the same week (June 24 and 25), which compresses the window for teams who had not followed the changelog closely.

## The concrete impact on AI creators

The creators who use the Gemini API for image fall into two groups:

**The technical creators.** Those who have Python scripts, ComfyUI integrations, automated workflows that generate hero images for articles (exactly what this site does), storyboard visuals, or concepts for productions. For them, it is a migration of a few minutes, as long as you do it before the 24th.

**The creators via third-party tools.** If you use an app, a no-code tool or a SaaS service that generates images via Gemini in the background (many do without saying so), the provider has to migrate on their side. If the tool breaks on image generation next week, that is probably the cause.

The right reflex: if you have an automated image workflow, check the documentation of the service you use to see whether it mentions Imagen or Gemini preview.

## What Google is stabilizing in parallel

The cutoff of the previews comes at the same time as several GA launches. Since late May 2026, the Gemini API has:

- **`gemini-3.1-flash-image` GA**: fast and economical image generation, ideal for volumes (thumbnails, concept variations).
- **`gemini-3-pro-image` GA**: higher quality, better consistency of fine details, recommended for final production visuals.
- **`gemini-3.5-flash` GA** (text): for workflows that combine prompt generation and image generation in the same call.

Google is also pushing toward its Managed Agents (launched in public preview in May), which is starting to enable multi-step image workflows with contextual memory. Not yet the reference solution for creative production, but the direction is clear.

## On the video side: same battle, deadline on June 30

While we are talking about deprecation, it should be flagged that the June 24-25 image cutoff is not the only one. The old video models in the Gemini API fall on **June 30, 2026**.

If you use Veo via the API and your integration still points to `veo-3-*` model IDs (without the `1` suffix), check [the Veo migration page](https://ai.google.dev/gemini-api/docs/deprecations). The replacements are `veo-3.1-generate-preview` and the `veo-3.1-fast-generate-preview` models.

A single changelog to read, two dates to remember: June 24-25 for image, June 30 for video.

## Quick check: is your workflow affected?

Answer these three questions:

1. **Do you use the Google AI / Gemini API directly in a script?** Search for `imagen-3.0`, `gemini-3-pro-image-preview` or `gemini-3.1-flash-image-preview` in your code. If you find one of these strings, migrate.

2. **Do you use a third-party tool that generates images?** Check their changelog or send a message to their support. Many relied on Imagen.

3. **Does your workflow use Vertex AI rather than the Gemini API?** The dates and the GA models are slightly different on Vertex AI; check the [Vertex AI release notes](https://cloud.google.com/vertex-ai/generative-ai/docs/release-notes) separately.

## A comment on the transparency of Google deprecations

This is not the first time Google has cut models with short notice. ElevenLabs had announced the end of its v1 voices with 30 days' notice (which already seemed short). Google, here, posted the dates in its changelog, but with no email or push notification to developers.

For a creator who uses these tools as production infrastructure, not as a toy, that is one more argument for having basic monitoring on the deprecation pages of the APIs you use. A simple script that checks weekly whether your model ID is still in the "active" list on [ai.google.dev/gemini-api/docs/models](https://ai.google.dev/gemini-api/docs/models) can prevent an unpleasant surprise on a Monday morning.

If you build automated image workflows and you want to structure the generation prompt before sending it to the API, the [cinematic prompt generation tool](/outils/generateur-prompt-cinema) can help you formalize your visual instructions before submitting them to Imagen or Gemini Image. For creators who use these images in a storyboard pipeline, the [PDF storyboard generator](/outils/generateur-storyboard-pdf) fits in naturally downstream.

---

## FAQ: Gemini image and Imagen deprecation

**Are my images generated before June 24 affected?**
No. The images already generated and saved stay intact. The cutoff only affects future API calls to these models. Your existing assets do not disappear.

**Does gemini-3.1-flash-image (GA) cost more than Imagen?**
The GA rate is slightly different depending on the image type. On the Gemini API, the flash image model is designed to stay economical. The precise rates are published on the [Gemini models](https://ai.google.dev/gemini-api/docs/models) page. In most creative production cases (moderate volumes, not millions of images), the difference is negligible.

**Is Google AI Studio also affected, or only the API?**
Both. AI Studio uses the same model IDs under the hood. If you were testing with Imagen in AI Studio, you will have to select gemini-3.1-flash-image or gemini-3-pro-image in the interface as of June 25.

**Are Midjourney, Runway, Kling or Pika affected by this deprecation?**
No. These tools use their own models and infrastructure. The cutoff concerns exclusively the Google models accessible via the Gemini API and Vertex AI.

**Does the image quality change between Imagen and gemini-3-pro-image?**
The two generations are architecturally different. gemini-3-pro-image tends to follow complex text instructions better and to maintain better consistency on fine details. For production visuals or high-quality hero images, it is generally an upgrade, not a downgrade.

**Why is Google changing the name from Imagen to Gemini Image?**
It is a consolidation of the range. Google is progressively unifying its generative models under the Gemini brand (text, image, video, audio). Imagen remains as a product on Vertex AI in certain enterprise contexts, but the consumer API moves to Gemini Image. It is the same logic as the move from Bard to Gemini.

**If my model is cut and I have not migrated, what exactly happens?**
Your API calls will return a "model not found" or "deprecated model" type error. This can crash an automated script, block thumbnail generation in a third-party tool, or interrupt a ComfyUI workflow. The solution is to change the model ID and relaunch.
