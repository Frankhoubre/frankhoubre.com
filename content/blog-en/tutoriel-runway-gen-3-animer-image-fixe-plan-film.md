---
title: "Runway tutorial 2026: animate a still image for film"
date: "2026-04-18"
dateModified: "2026-10-06"
category: "tutoriels"
excerpt: "Runway retired Gen-3 in July 2026. How to animate a still with Gen-4.5 now: credit math, motion prompts, render passes and the edit-timeline test."
thumbnail: "/images/blog/tutoriel-runway-gen-3-animer-image-fixe-plan-film/hero.webp"
---

# Runway tutorial 2026: animate a still image for film

You've got a still you actually like. The light works, the frame holds, there's real texture in it. You send it to Runway for three seconds of life and the shot falls apart: hands melt, edges breathe, the background slides like a badly rigged stage flat. And if you were following a Gen-3 tutorial, there's a second surprise waiting. The model isn't in the menu anymore.

Runway retired Gen-3 Alpha on July 8, 2026, and Gen-3 Alpha Turbo on July 30, 2026. Most tutorials still floating around, including the first version of this one from April, describe a tool that no longer exists. Image to video now runs on Gen-4.5, the credit costs are different, the plans changed, and even the domain moved: runwayml.com now redirects to runway.com.

The method survived all of it. An animated still holds up on screen when the source is clean, when there's one restrained move, and when you judge the shot in the timeline instead of the preview. I rewrote this Runway tutorial from top to bottom so it matches the tool as it stands in October 2026, with the real numbers from the official docs and the routine I use to get shots I can actually cut.

![Film director on a misty harbour quay at dawn holding a printed photo of the same spot before animating it in Runway](/images/blog/tutoriel-runway-gen-3-animer-image-fixe-plan-film/hero.webp)

## What changed at Runway since Gen-3

You open Runway with an old tutorial at hand, search the model picker for "Gen-3 Alpha Turbo", and come up empty. Your account is fine. The model is gone.

The help page ["Creating with Gen-3 Alpha and Gen-3 Alpha Turbo"](https://help.runwayml.com/hc/en-us/articles/30266515017875-Creating-with-Gen-3-Alpha-and-Gen-3-Alpha-Turbo) now shows a short retirement notice with the dates and four replacements. Text to video and image to video go to Gen-4.5. Keyframes (a start frame and an end frame) go to the **Animate Frames** app. Video to video goes to **Edit Studio Aleph 2.0**. Everything built on Gen-3 went with it: Camera Control, Expand Video, Act-One on Gen-3, Keyframes on Gen-3.

The cleanup started earlier in the year. The ["Deprecated Standalone Tools"](https://help.runwayml.com/hc/en-us/articles/40213860628371-Deprecated-Standalone-Tools) page, updated August 5, 2026, lists everything that's been pulled and what replaces it. The All Tools page was removed on April 10, 2026, frame interpolation now points to the Animate Keyframes app, and the old Lip Sync tool gave way to Act-Two on May 27, 2026.

![Runway's official table of retired tools, with Gen-3 Alpha and Gen-3 Alpha Turbo replaced by current video models](/images/blog/tutoriel-runway-gen-3-animer-image-fixe-plan-film/workflow-2.webp)

*Screenshot of the "Deprecated Standalone Tools" page in Runway's help center, taken October 6, 2026. The retirement dates for Gen-3 Alpha (July 8, 2026) and Gen-3 Alpha Turbo (July 30, 2026) appear on the model's own help page.*

Two subscription changes matter to you. The Unlimited plan stopped being sold on June 1, 2026, replaced by Max. Existing Unlimited subscribers keep it until November 30, 2026, then move to Max at the same monthly price, according to [Runway's transition article](https://help.runwayml.com/hc/en-us/articles/52068047744019-Unlimited-plan-is-switching-to-Max). Separately, there's a credit-free generation mode called Unlimited Mode on the Pro and Max plans, but only on some models, with a slower queue and fewer generations at once.

For anyone animating stills, I think the trade is a good one. Gen-4.5 takes more aspect ratios, more durations and a finer motion prompt. You just have to relearn the settings and redo your credit math.

## Gen-4.5 image to video: the settings that matter

The spec sheet on [the official Gen-4.5 help page](https://help.runwayml.com/hc/en-us/articles/46974685288467-Creating-with-Gen-4-5) runs about ten lines, and nearly every one of them changes how you work.

![Runway's official Gen-4.5 spec table: 12 credits per second, 2 to 10 second durations, 720p output, 24 or 25 fps](/images/blog/tutoriel-runway-gen-3-animer-image-fixe-plan-film/workflow-1.webp)

*Screenshot of the "Creating with Gen-4.5" page in Runway's help center, taken October 6, 2026.*

The model needs the **Standard** plan or higher. It costs **12 credits per second** of video, for both text to video and image to video. Duration goes **from 2 to 10 seconds**. Output is **720p** at **24 or 25 fps** (you pick in the advanced settings). It runs on the web app.

Image to video offers six aspect ratios: 16:9 at 1280x720, 9:16 at 720x1280, 1:1 at 960x960, 4:3 at 1104x832, 3:4 at 832x1104 and 21:9 at 1584x672. Text to video only outputs 16:9. By default, the aspect ratio follows your input image. Pick a different one and Runway crops your image, which can cut off the top of a face you placed very carefully.

Two output options are worth knowing. One is 4K upscaling after generation, included in the paid plans. The other is **ProRes** or **PNG sequence** export, chosen at generation time, available on Max, Unlimited (Legacy) and Enterprise, and billed at **5 extra credits per second** on top of the base cost. For a shot headed to the grade, that's the only way to skip one more round of compression between Runway and your editor.

> 💡 **Frank's Cut:** set the frame rate before you generate. If your project runs at 25 fps, for European broadcast for instance, ask for 25 from the start. Converting an AI shot from 24 to 25 afterwards adds exactly the kind of micro-stutter you're trying to avoid.

What about Gen-4? It's still there, along with Gen-4 Turbo, but [the Gen-4 help page](https://help.runwayml.com/hc/en-us/articles/37327109429011-Creating-with-Gen-4) now carries a banner filing it under older models. Gen-4 also costs 12 credits per second. Gen-4 Turbo drops to **5 credits per second**, in 5 or 10 second clips, with a required input image and a 1,000-character prompt limit. It's still a great drafting tool, more on that below.

## How many shots your plan really buys

The prices below come from [Runway's pricing page](https://runway.com/pricing), checked October 6, 2026, in US dollars before tax. The shot counts are my own math: monthly credits divided by the cost of one 5-second clip, which is 60 credits on Gen-4.5 and 25 credits on Gen-4 Turbo.

| Plan | Monthly price (billed yearly) | Credits | 5 s Gen-4.5 clips | 5 s Gen-4 Turbo clips | Worth knowing |
| --- | --- | --- | --- | --- | --- |
| Free | $0 | 125, one time | none (Gen-4.5 needs Standard) | not stated | for learning the interface |
| Standard | $15 ($12) | 625 a month | 10 | 25 | no watermark, 4K upscaling |
| Pro | $35 ($28) | 2,250 a month | 37 | 90 | unlimited 4K upscaling, Unlimited Mode on some models |
| Max | $95 ($76) | 9,500 a month | 158 | 380 | one month of credit rollover, ProRes and HDR |

Look at the Standard row like an editor would. Ten 5-second clips is 50 seconds of raw footage a month. Keep one render in three, which is already a decent ratio on demanding shots, and you end up with around fifteen usable seconds. Enough for a teaser. Nowhere near a short film.

One refund rule changes how you should work too. Per [Runway's credits article](https://help.runwayml.com/hc/en-us/articles/34266159290003-Can-I-have-credits-refunded), credits only come back automatically when a generation errors out. A finished render that misses your prompt or warps your character still costs you. Every attempt is paid for, which is the best reason to fix your source before you hit Generate.

If you're weighing the competition before subscribing, I put both engines head to head on action shots in [my Pika Labs vs Runway comparison](/en/blog/pika-labs-vs-runway-choisir-moteur-plan-action).

## Prep the source image like a shot you filmed

Runway says it plainly in its [image to video prompting guide](https://help.runwayml.com/hc/en-us/articles/48324313115155-Image-to-Video-Prompting-Guide): your image is the first frame of the video, and visual artifacts in it, blurry hands or faces, can get amplified once it moves. The model won't invent clean structure from a shaky base.

So treat your image like a set. Before sending it, I check four things:

- **Separation between planes.** Foreground, subject, background. If everything carries the same level of detail, the model can't tell what should move and the parallax goes wrong.
- **The zones that break.** Fused fingers, strands of hair melting into the background, blurry teeth, small text on a sign, conflicting reflections in a window. Those go first.
- **The light.** One readable, consistent light source gives the model shadow logic to follow when the camera moves.
- **Implied motion**, the least known point, which Runway covers in the guide's FAQ. An image with motion blur, kicked-up dust or a mid-action pose already suggests movement. If your prompt asks for the opposite, say a parked, motionless car while the image shows a dust cloud behind it, the model fights the picture. Runway's fix: remove those motion cues from the image before generating.

For a first round of tests, pick a simple composition. The more fine elements in motion (leaves, crowds, rain), the more likely you get artifacts. Add complexity once you know what your image can take.

If the image belongs to a sequence, check that it matches its neighbours before animating it: same light direction, same apparent focal length, same costumes. A perfect animated shot that doesn't cut with the rest ends up in the bin. I collected the most common traps in [my guide to continuity errors in AI film](/en/blog/film-ia-erreurs-raccord-incoherences-visuelles-eviter).

## Write a motion prompt Gen-4.5 understands

The beginner reflex is to describe the image again. "A woman in a yellow raincoat on a harbour quay at dawn, mist, blue crates." The model already sees all that. What it can't see is what should happen next.

The official guide is clear: a good image to video prompt is almost entirely about motion. Runway splits it into five parts: subject action, environmental motion, camera motion, motion style and timing, direction and speed. You don't need all five every time. Runway's advice, which I agree with, is to start with the one or two that really matter and only add detail when the result asks for it.

For beginners, Runway suggests a simple structure:

`The camera [camera motion] as the subject [action]. [Additional descriptions]`

On the harbour image, that might be: *The camera slowly pushes in as the woman lowers the photograph. Mist drifts across the harbour. Natural handheld feel, very subtle.* One camera intention, one action, one bit of ambient motion, one style note. Nothing contradicting anything else.

Gen-4.5 also handles sequences. Its help page stresses that it can follow sequenced instructions, and the prompting guide gives two ways to write them: plain language ("X happens, then Y, finally Z") or rough timestamps like `[00:01] X occurs. [00:03] Y occurs.` Watch your duration, though. Three actions in a 3-second clip guarantees a rushed shot. For a chain of actions, go longer.

The guide also lists the cases where describing visuals still helps: bringing in something that isn't in the image, a dramatic change from the starting frame, spelling out a transformation, or an interaction between two or more elements. Outside those, stick to motion.

| Shot type | Intention | Starting prompt | Common failure | First fix |
| --- | --- | --- | --- | --- |
| Emotional portrait | build presence | slow subtle push-in, subject stays still | face warps | shorter clip, smaller move |
| Mood shot | bring the set to life | gentle lateral drift, mist moving slowly | broken parallax | simplify depth planes in the source |
| Object insert | narrative accent | slow rack focus toward the object | wobbling edges | sharpen that area in the source |
| Tension shot | controlled instability | subtle handheld shake, slow push-in | artifacts at frame edges | less shake, shorter clip |
| Transition | bridge two scenes | camera slowly tilts up to the sky | unwanted cut mid-clip | longer duration or simpler prompt |

For the image side of the pipeline, from a still to a moving shot that stays smooth, I go deeper in [my guide to turning an AI image into fluid, believable video](/en/blog/comment-transformer-image-ia-video-fluide-credible).

## The pass method: draft, shot, finish

A finished render is paid for, even a bad one. So don't aim for the final shot on the first try. I work in passes and change one variable at a time.

### Pass 1: test the intention on a cheaper model

Runway itself recommends, on the Gen-4 page, testing in Gen-4 Turbo first and stepping up if needed. That logic still holds with Gen-4.5. A 5-second Turbo clip costs 25 credits against 60 on Gen-4.5. Use it to check one thing only: can your image take the planned move? If the face already melts in Turbo on a gentle push-in, go back and fix the image before you spend 60 credits.

If you're on Pro or Max and your target model shows up in Unlimited Mode, this is the moment to use it. The button at the top right of the session reads "Unlimited ∞" when the mode is on. Slower, but it costs no credits.

### Pass 2: the shot in Gen-4.5, restrained and short

Once the intention works, move to Gen-4.5. Pick the shortest duration that fits your action. The model accepts 2 seconds, and for an insert or a portrait, 3 or 4 seconds is plenty. One move, moderate amplitude. If it breaks, don't add anything: lower the amplitude, shorten it, run it again.

Keep a tiny log next to you. Version name, intention, settings, main defect. Three lines per attempt. The day a client asks for a tweak on a shot you approved three weeks ago, that log saves you from starting blind.

### Pass 3: extend or enrich, only if the first two hold

For anything past 10 seconds, Runway's guide documents a simple trick: put the playhead on the last frame of the clip, click **Use**, then **Use current frame**. That frame becomes the input for a new generation. Then you join both clips in your editor and drop the duplicate frame.

It works, and it's also where drift piles up. Each extension inherits the small errors of the last one. After two extensions, I usually go back to a reworked source image instead of stacking more.

For a shot that starts on one exact image and lands on another exact image, use the Animate Frames app, Runway's official replacement for Gen-3 Keyframes.

> 💡 **Frank's Cut:** a clean 3-second shot always beats an 8-second shot that falls apart. Cut before the drift. Nobody in the edit will blame you for a short shot.

## Judge the shot in the timeline, not the preview

Runway's preview flatters everything. Dark background, looped playback, no shot before or after. You watch the clip as a standalone object, when in a film it only exists in sequence.

From pass 2 on, I drop the render between its real neighbours in the timeline. Motion problems rarely show in the middle of a shot. They show at the cuts, when the move from the previous shot doesn't carry into this one, or when the last third of the clip starts to float.

Then I run four checks:

1. Real duration. Trim to how long the shot holds up, not to what you planned. Plenty of AI shots are great at 3 seconds and fragile beyond that.
2. Full screen, then phone. Platform compression brings out edge shimmer your monitor was hiding.
3. Sound: some room tone, a breath, a light hit. A slightly off move often passes with the right sound, and a visually fine shot feels fake in silence. My [AI voice-over and dubbing guide](/en/blog/doublage-voix-off-cloner-diriger-voix-film) covers that layer.
4. A cold rewatch. Come back a few hours later, watch the sequence without stopping, and note the three moments your eye leaves the story. They almost always point to a move pushed too far or a shot held too long.

For matching colour and grain with filmed shots or other engines, the full method is in [my guide to AI-assisted video editing](/en/blog/guide-complet-montage-video-assiste-intelligence-artificielle).

## Three concrete cases and what they teach

First case, a transition between two scenes. You need a bridge shot between a calm interior and a tense night street. Instead of shooting one more setup, you animate a still of a doorway with a slow lateral drift and light that barely shifts. The first 8-second version collapses in its last third. The keeper is 4 seconds, same prompt, and the cut flows without breaking rhythm. Not a word of the prompt changed between the two versions, only the duration.

Second case, a portrait for a teaser. The source image is strong, but every ambitious move warps the features. The final prompt fits on one line: a very slow push-in, subject still, a slight movement in the hair. Three seconds. The shot adds presence to the character instead of pulling the eye toward artifacts.

The third case, an urban shot with a lot of depth, takes more attempts. The first renders slide the architectural lines over each other. First you simplify the source by softening detail in the background, then you lower the requested speed. In post, a grain match finishes the blend.

In all three, the keeper is the most restrained shot of the batch. In the cut, nobody notices they started life as still images.

## Troubleshooting: the most common failures and their fixes

**The model isn't in the picker.** If you're looking for Gen-3, it's been retired. If you're looking for Gen-4.5, check your plan: you need Standard at minimum. On the web app, type "Gen-4.5" into the search at the top of Apps view, or use the Tool mode model picker with the Video tab selected.

**The move is too aggressive and the shot warps at the end.** Tone down the prompt ("very subtle", "slowly"), shorten the clip, keep a single camera intention.

**Faces or hands melt.** Fix those areas in the source before generating again. Then run a pass with minimal motion to confirm the subject holds.

**The motion you get contradicts the motion you asked for.** Look for implied motion in your image: motion blur, dust, a mid-action pose, strong leading lines. Remove them or pick a move that goes with them.

**An unwanted cut shows up mid-clip.** Runway's prompting guide ties this to the image and prompt combination. In practice, I simplify the prompt, cut down the number of chained actions, and add a bit of duration if I asked for several things.

**The image gets cropped unexpectedly.** Output aspect ratio follows your image by default. If you changed it, Runway crops. Prepare your image in one of the six supported ratios from the start.

**Credits vanish with nothing usable.** Stop generating and go back to the source. Cap yourself at three to five attempts per shot with one variable changed each time, and test in Gen-4 Turbo or Unlimited Mode when you can.

**The final export shows artifacts.** Check your export chain. On Max, picking ProRes at generation time removes one compression step.

## FAQ: animating a still image with Runway in 2026

### Is Runway Gen-3 still available?

No. According to Runway's help center, Gen-3 Alpha was retired on July 8, 2026 and Gen-3 Alpha Turbo on July 30, 2026. The features that depended on them, Camera Control, Expand Video, Act-One on Gen-3 and Keyframes on Gen-3, went with them. Runway points you to Gen-4.5 for image to video and text to video, to the Animate Frames app for keyframes, and to Edit Studio Aleph 2.0 for video to video. Tutorials that still talk about Gen-3 can help with the overall logic of the work, but their settings and costs no longer match the tool you'll open today.

### How much does a 5-second Gen-4.5 shot cost?

Gen-4.5 uses 12 credits per second, so 60 credits for a 5-second clip, whether it's image to video or text to video. On the Standard plan at $15 a month (625 credits), that's about ten clips a month. Pro gives you 2,250 credits, Max 9,500. Add 5 credits per second if you pick ProRes or PNG sequence export, which is limited to Max, Unlimited (Legacy) and Enterprise. Above all, remember that credits only come back after a technical error. A finished render that misses still counts, so test your move cheaply before you go for the final shot.

### What duration should I pick for a shot animated from a still?

Gen-4.5 accepts 2 to 10 seconds. For a portrait, an insert or a mood shot, I aim for 3 to 4 seconds: that's where stability is best and where the shot drops into an edit easily. Longer than that, drift goes up, especially on faces, hands and detailed backgrounds. A longer clip makes sense when your prompt chains several actions, because the model needs time to play them out. Either way, how well the shot holds up sets the final length, not what you planned at the start. Cut before it degrades.

### Why do hands and faces warp in Runway?

They're the most fragile areas for any video model, and Runway uses your image as the first frame. The official guide says it outright: visual artifacts in the source, like blurry hands or faces, can be amplified once animated. Check your base first: separate fingers, clean edges, readable light. Then reduce the amount of motion and avoid stacking several camera intentions. Run one pass with minimal motion to confirm the subject holds, and only then add life to the shot. That progression fixes most of the warping I see from people starting out with image to video.

### Should I still use Gen-4 or Gen-4 Turbo?

Yes, as a drafting tool. Runway files Gen-4 under its older models, but both are still available. Gen-4 Turbo costs 5 credits per second, so 25 credits for 5 seconds against 60 on Gen-4.5, and Runway itself recommends testing in Turbo before stepping up. I use it to check whether an image can take a given move. A face that already melts in Turbo sends you back to fix the source. For the final shot, Gen-4.5 follows prompts better and offers more aspect ratios. Note that Gen-4 requires an input image and caps the prompt at 1,000 characters.

### How do I get a shot longer than 10 seconds?

Runway documents the method in its image to video prompting guide. Move the playhead to the very last frame of the finished clip, click Use, then Use current frame: that frame becomes the input for a new generation. Then you join both clips in your editor and remove the shared frame. The catch is accumulation, since each extension inherits the small drifts of the previous one. After two extensions, it's usually better to start again from a reworked source image. And if you want to go from one exact image to another, use the Animate Frames app, which is built for that.

### What happens to Unlimited plan subscribers?

The Unlimited plan hasn't been sold since June 1, 2026. Existing subscribers keep it until November 30, 2026. On that date, monthly subscriptions switch automatically to Max at the same $95 a month, unless you cancel. Annual subscribers can choose in November between a refund of the remaining months and a credit bonus to move to Max. Max doesn't include the old Explore Mode, but it gives you 9,500 credits a month with one month of rollover. Don't confuse it with Unlimited Mode, a credit-free generation mode offered on Pro and Max for some models.

### How do I cut a Runway shot in with filmed footage?

Through consistent rhythm, texture and motion. Drop the animated shot into the real timeline from your first tests and adjust its length so it breathes with its neighbours. Generate at your project's frame rate, 24 or 25 fps, so you don't have to convert later. In post, match colour and grain to bring the two looks closer, and if your Max plan allows it, ask for a ProRes export to keep room for the grade. Sound does the rest: shared room tone between the filmed shot and the generated one smooths the transition better than any effect.
