import type { Resource } from "./types";
import {
  ACADEMY_EN_FILM,
  HIGGSFIELD_AFF,
  SW_START_EN,
  lessonEn as L,
  lessonVideo,
  lostGardenEp2,
  theSeam,
  utm,
} from "./links";

const SW = "https://www.screenweaver.ai";

function start(word: string) {
  return { href: utm(SW_START_EN, word, "en"), label: "Open ScreenWeaver" };
}

export const RESOURCES_EN: Resource[] = [
  {
    word: "STORYBOARD",
    slug: "storyboard",
    twinSlug: "storyboard",
    locale: "en",
    metaTitle: "From Script to AI Storyboard: The Step-by-Step Method",
    metaDescription:
      "How to turn your script into an AI storyboard that holds: import, characters, shot breakdown, framing. Every step comes with the video lesson that shows it.",
    title: "Your script becomes a storyboard,",
    titleGold: "shot by shot.",
    lede:
      "You commented STORYBOARD under the reel. Here is the method I use on my own films, in order, with the video that shows each step inside the app.",
    case: {
      title: "The Seam, from script to film in one project",
      text:
        "A world made of fabric, and a Stitcher who spends his life closing the tears. The script, the characters, the 40 storyboard shots and the production all came out of the same ScreenWeaver project. Only the score and the final edit were done elsewhere.",
      video: theSeam("AI short film"),
    },
    steps: [
      {
        title: "Import your script, or write it",
        text:
          "PDF, Final Draft, Fountain or plain text: the file comes in at once, with a preview before the import. Starting from a blank page? The editor handles the screenplay format for you.",
        lesson: L("import-screenplay-pdf-final-draft"),
      },
      {
        title: "Pull out your characters, places and objects",
        text:
          "Everything that comes back in the script becomes a story element with its own description. That description is what keeps the same face from one panel to the next.",
        lesson: L("character-descriptions-ai-storyboard"),
      },
      {
        title: "Break the script into shots",
        text:
          "Every scene becomes a list of shots with a framing, a camera move and a duration. This is where the film is actually directed, before a single frame is generated.",
        lesson: L("shot-list-ai-film-breakdown"),
      },
      {
        title: "Generate and fix the storyboard",
        text:
          "Auto-generate the panels, then take control scene by scene: change a shot size, fix a panel with the brush, and watch the whole thing as an animatic.",
        lesson: L("ai-storyboard-from-script-workshop"),
      },
    ],
    trap: {
      title: "Generating before you describe the characters",
      text:
        "Without a description, the AI invents a new face for every panel and you spend the evening regenerating. Two precise lines per character, written before the first run, save most of the fixes.",
    },
    extra: {
      title: "The full course, free to watch",
      text: "21 lessons, from the first idea to the exported film, built on one real project.",
      link: { href: ACADEMY_EN_FILM, label: "Open the course" },
    },
    cta: {
      title: "Start your storyboard",
      text: "Create a project, import your script, then follow the four steps above.",
      link: start("STORYBOARD"),
    },
  },
  {
    word: "SCRIPT",
    slug: "script",
    twinSlug: "script",
    locale: "en",
    metaTitle: "Write a Screenplay That Holds Up, With AI at Your Side",
    metaDescription:
      "Logline, story beats, scenes, AI rewrites: the method to write a solid screenplay before you generate a single shot, with a video lesson for every step.",
    title: "A good story is decided",
    titleGold: "before the first frame.",
    lede:
      "You commented SCRIPT. Almost everything that fails on screen was already visible in the screenplay: a hero who wants nothing, a scene that changes nothing. Here is how I write, and what I let the AI do.",
    case: {
      title: "Story beats, explained on a real outline",
      text:
        "Before writing a single line of dialogue, lay out the beats of the whole film. If a beat changes nothing, it goes. The lesson shows how the labels work in the outline.",
      video: lessonVideo(L("story-beats-explained-structure-labels"), "Screenwriting course"),
    },
    steps: [
      {
        title: "Start with one sentence",
        text:
          "Idea, premise, logline: who wants what, and what stands in the way. If you cannot say it in one sentence, the script will wander.",
        lesson: L("logline-template-idea-premise-examples"),
      },
      {
        title: "Turn the beats into scenes",
        text: "Each beat becomes one or more scenes, each with a clear change from start to end.",
        lesson: L("turn-outline-beats-into-scenes"),
      },
      {
        title: "Write and rewrite with the assistant",
        text:
          "The assistant drafts or rewrites a scene on request, and every change creates a version, so the original is never lost. You keep the final call.",
        lesson: L("write-rewrite-scenes-with-ai"),
      },
    ],
    trap: {
      title: "Asking the AI to write the story for you",
      text:
        "It suggests well and chooses badly. Write the hero's desire and the obstacle yourself, in one sentence. Then let the AI work around that sentence.",
    },
    extra: {
      title: "Logline workshop",
      text: "A free tool to tighten your idea into one sentence before you open the script.",
      link: { href: `${SW}/tools/logline-workshop`, label: "Open the workshop" },
    },
    cta: {
      title: "Write your script",
      text: "Writing your script in ScreenWeaver is free.",
      link: { href: utm(SW_START_EN, "SCRIPT", "en"), label: "Write my script" },
    },
  },
  {
    word: "FILM",
    slug: "film",
    twinSlug: "film",
    locale: "en",
    metaTitle: "AI Short Film: Make Cinema, Not a String of Clips",
    metaDescription:
      "What separates an AI short that feels like cinema from a string of clips: one look, the same faces, the right model for each shot. The method behind The Seam.",
    title: "An AI film that feels",
    titleGold: "like cinema.",
    lede:
      "You commented FILM. Festivals don't remember the most spectacular shot. They remember the film that holds from one shot to the next: one light, the same faces, a rhythm. Here is how I made The Seam.",
    case: {
      title: "The Seam, 5 minutes 14, produced in ScreenWeaver",
      text:
        "Script, storyboard, images and video were all generated inside the project, with Seedream for the stills and Seedance for the animation, as nodes on the production canvas. Only the score and the grade were done outside.",
      video: theSeam("AI short film"),
    },
    steps: [
      {
        title: "Know what makes AI slop",
        text: "Five signatures give an AI film away in seconds. Learn them first, then avoid them on purpose.",
        lesson: L("ai-slop-vs-ai-cinema-five-signatures"),
      },
      {
        title: "Build a visual bible",
        text:
          "Style, light and lens, written down once and applied to every generation. This is what gives the film its family look.",
        lesson: L("visual-bible-ai-film-style"),
      },
      {
        title: "Pick the right model for each shot",
        text:
          "A dialogue, a chase and a quiet wide shot don't call for the same model. Choose per shot, not per project.",
        lesson: L("choose-ai-video-model-for-each-shot"),
      },
      {
        title: "Produce, then edit outside",
        text:
          "Generate the shots from the storyboard, download the rushes, then cut, mix and grade in your usual software.",
        lesson: L("storyboard-to-ai-video-production-workshop"),
      },
    ],
    trap: {
      title: "Stacking spectacular shots with no continuity",
      text:
        "An audience forgives a slightly less beautiful image. It never forgives a character whose coat changes between two shots. Check continuity in the animatic before you render video.",
    },
    extra: {
      title: "Festivals and distribution",
      text: "Where to send an AI short, what juries look for, and how to build a career from it.",
      link: { href: L("ai-film-festivals-distribution-career").href, label: "Watch the lesson" },
    },
    cta: {
      title: "Start your film",
      text: "Create the project, write or import the script, and follow the steps in order.",
      link: start("FILM"),
    },
  },
  {
    word: "ANIME",
    slug: "anime",
    twinSlug: "anime",
    locale: "en",
    metaTitle: "Make an Anime With AI: The Lost Garden Case Study",
    metaDescription:
      "How one person makes an animated series with AI: episodes, a locked style, reference sheets that hold, animated panels. The Lost Garden case study, step by step.",
    title: "An anime made by one person,",
    titleGold: "step by step.",
    lede:
      "You commented ANIME. Lost Garden is the series I make on my own: writing and storyboard in ScreenWeaver, then animation. Episode 2 runs 21 minutes. Here is the path.",
    case: {
      title: "Lost Garden, episode 2",
      text:
        "A sanctuary, a king buried beneath a vault, and a cast that has to stay on model for 21 minutes. That is the real test of an anime: consistency over time.",
      video: lostGardenEp2("AI anime series"),
    },
    steps: [
      {
        title: "Watch how it was made",
        text: "The full case study: how the series was written, storyboarded and produced, tool by tool.",
        lesson: L("ai-anime-series-lost-garden-case-study"),
      },
      {
        title: "Write the series episode by episode",
        text:
          "Set the project to Series / TV: episodes and acts appear in the outline, and every episode shares the same characters, places and objects.",
        lesson: L("how-to-write-tv-series-episode"),
      },
      {
        title: "Lock your characters with reference sheets",
        text:
          "Front, side, back. In anime, the audience spots a drifting face instantly, so the sheet has to be right before anything else is generated.",
        lesson: L("consistent-ai-characters-reference-sheets"),
      },
      {
        title: "Animate with the references attached",
        text: "Each shot is animated with its character and set references, so the cast stays on model from one scene to the next.",
        lesson: L("reference-to-video-consistent-characters"),
      },
    ],
    trap: {
      title: "Changing the style halfway through",
      text:
        "Lock the art direction before the first scene and don't touch it until the episode is done. A line that wobbles is the first thing anime fans notice.",
    },
    extra: {
      title: "The full Lost Garden tutorial",
      text: "How the series was made, tool by tool, from the first page to the finished episode.",
      link: { href: `${SW}/blog/how-i-made-japanese-style-anime-with-ai`, label: "Read the tutorial" },
    },
    cta: {
      title: "Start your anime series",
      text: "Create a Series / TV project, write episode 1, then follow the steps.",
      link: start("ANIME"),
    },
  },
  {
    word: "WEBTOON",
    slug: "webtoon",
    twinSlug: "webtoon",
    locale: "en",
    metaTitle: "Turn Your Webtoon Into an Anime With AI, Step by Step",
    metaDescription:
      "Your webtoon or comic pages become animated shots: panels imported, 16:9 or vertical, character sheets from your own art, then video. The full method, on video.",
    title: "Your panels are already",
    titleGold: "a storyboard.",
    lede:
      "You commented WEBTOON. A webtoon is already a shot list: one panel per beat, in a strict reading order. What it lacks is time. Here is how I turned my webtoon Imaginarium into an anime.",
    case: {
      title: "Imaginarium, from webtoon to anime",
      text:
        "The episode goes in as a PDF, each page is cut into panels, and each panel becomes a shot with the original art as its reference. Then the storyboard images, then the video.",
      video: {
        provider: "youtube",
        id: "280gONwht-Q",
        title: "I Turned My Webtoon Into an Anime With AI",
        caption: "Full tutorial",
        meta: "7 min",
      },
    },
    steps: [
      {
        title: "Import the episode",
        text:
          "PDF or images: every page is cut into panels and every panel becomes a shot. Keep your drawings as they are, or have them redrawn in the project's style.",
        link: { href: `${SW}/convert-webtoon-to-anime`, label: "See how the import works" },
      },
      {
        title: "Choose 16:9 or vertical",
        text:
          "A classic anime runs in 16:9, a phone version stays 9:16. The format is set for the whole project and reframes every panel.",
      },
      {
        title: "Lock your characters",
        text:
          "You have drawn your characters hundreds of times: that is a free character bible. Build one reference sheet per character from your own art before you generate.",
        lesson: L("consistent-ai-characters-reference-sheets"),
      },
      {
        title: "Animate the panels",
        text: "Each shot is animated with its panel and its references, so your characters stay on model.",
        lesson: L("reference-to-video-consistent-characters"),
      },
    ],
    trap: {
      title: "Animating the panel exactly as drawn",
      text:
        "A panel has no duration, and a speech bubble doesn't say how long the line takes. Give every shot a duration, and add the in-between shots that the page skips.",
    },
    extra: {
      title: "Webtoon to anime: the complete guide",
      text: "What it takes for a webtoon to become an anime, why so few make it, and what the AI route changes for your rights.",
      link: { href: `${SW}/convert-webtoon-to-anime`, label: "Read the guide" },
    },
    cta: {
      title: "Adapt your webtoon",
      text: "Create a project, drop your episode in as a PDF, and follow the four steps.",
      link: start("WEBTOON"),
    },
  },
  {
    word: "DRAMA",
    slug: "drama",
    twinSlug: "serie",
    locale: "en",
    metaTitle: "Write and Produce a Vertical Short Drama With AI",
    metaDescription:
      "Short drama, micro drama, vertical series: short episodes that end on a question, a 9:16 storyboard and the same cast across every episode. The method, step by step.",
    title: "A vertical series,",
    titleGold: "one question per episode.",
    lede:
      "You commented DRAMA. A vertical drama is watched on a phone, one or two minutes at a time, and every ending has to make people tap the next one. Here is how I write one and storyboard it in 9:16.",
    case: {
      title: "Writing a short drama",
      text: "The lesson covers the format: episode length, the hook at the top, the cliffhanger at the end, and how to keep the cast small.",
      video: lessonVideo(L("how-to-write-vertical-short-drama"), "Screenwriting course"),
    },
    steps: [
      {
        title: "Plan the episodes before you write",
        text:
          "How many episodes, how long, where each twist lands. The free planner lays out the grid of the whole series.",
        link: { href: `${SW}/tools/short-drama-episode-planner`, label: "Open the planner" },
      },
      {
        title: "Write each episode as part of a series",
        text: "Episodes and acts live in the same project, with one shared cast, places and objects.",
        lesson: L("how-to-write-tv-series-episode"),
      },
      {
        title: "Set the project to 9:16",
        text:
          "Vertical framing changes every panel: less set, more face. Choose the format before the storyboard, not after.",
      },
      {
        title: "Keep the same faces across the series",
        text: "Vertical audiences follow faces, not sets. One reference sheet per character, reused in every episode.",
        lesson: L("consistent-ai-characters-reference-sheets"),
      },
    ],
    trap: {
      title: "An episode that ends on an answer",
      text:
        "In vertical, you cut on a question: a door opening, a message arriving, a look. The answer comes at the top of the next episode.",
    },
    extra: {
      title: "Short drama episode planner",
      text: "The grid of your series, episode by episode, with the twists placed.",
      link: { href: `${SW}/tools/short-drama-episode-planner`, label: "Open the tool" },
    },
    cta: {
      title: "Write your series",
      text: "Create a Series / TV project in 9:16 and start with episode 1.",
      link: start("DRAMA"),
    },
  },
  {
    word: "CHARACTER",
    slug: "character",
    twinSlug: "personnage",
    locale: "en",
    metaTitle: "Keep the Same AI Character From Shot to Shot",
    metaDescription:
      "Why your AI character changes face in every shot, and how to fix it: camera-ready descriptions, reference sheets, reference-to-video. With the video lessons.",
    title: "The same face",
    titleGold: "in every shot.",
    lede:
      "You commented CHARACTER. A video model remembers nothing: every shot starts from zero. Consistency doesn't come from the perfect prompt, it comes from a reference you hand back every single time. Here is how I build it.",
    case: {
      title: "Reference sheets that hold across every shot",
      text: "Front, side and back views, built once and attached to every shot that needs the character.",
      video: lessonVideo(L("consistent-ai-characters-reference-sheets"), "AI filmmaking course"),
    },
    steps: [
      {
        title: "Describe them the way a camera sees them",
        text:
          "Face shape, distinctive marks, clothes, material. Nothing about mood. ScreenWeaver can draft the description from your script, then you correct it.",
        lesson: L("character-descriptions-ai-storyboard"),
      },
      {
        title: "Pass the reference into every shot",
        text: "Reference-to-video sends the sheet with the shot, so the model draws the same person again.",
        lesson: L("reference-to-video-consistent-characters"),
      },
      {
        title: "Fix the shot that drifts",
        text: "Repair, reframe or regenerate: when a face slips, fix that shot instead of starting the scene again.",
        lesson: L("fix-bad-ai-video-shots"),
      },
    ],
    trap: {
      title: "Describing the emotion instead of the face",
      text:
        "\"A sad, mysterious man\" gives you a new face on every run. \"Egg-shaped linen head, stitched scar, black coat\" gives you the same one. The emotion belongs to the shot, not the sheet.",
    },
    extra: {
      title: "Character consistency builder",
      text: "Describe your character once and get the block to paste at the top of every prompt.",
      link: { href: `${SW}/tools/ai-character-consistency-sheet`, label: "Open the tool" },
    },
    cta: {
      title: "Build your characters",
      text: "Import your script: your characters are detected, you only have to describe them.",
      link: start("CHARACTER"),
    },
  },
  {
    word: "CAMERA",
    slug: "camera",
    twinSlug: "camera",
    locale: "en",
    metaTitle: "Shot Sizes and Camera Moves for AI Video",
    metaDescription:
      "Wide, close-up, tracking, dolly: pick the right framing and camera move for every shot, then write it so an AI video model actually follows it. With the lessons.",
    title: "Every camera move",
    titleGold: "tells something.",
    lede:
      "You commented CAMERA. A tracking shot isn't an effect, it's a decision: you follow someone, you close in on a secret, you reveal a place. Here is how I choose the frame and the move for each shot before generating anything.",
    case: {
      title: "Prompting like a director",
      text: "Camera, action, performance: how to write a shot so the model moves the camera the way you meant.",
      video: lessonVideo(L("ai-video-prompts-like-a-director"), "AI filmmaking course"),
    },
    steps: [
      {
        title: "Break the scene into a shot list",
        text: "Decide the framing of every shot first: wide to set the place, close to catch the reaction, insert for the detail.",
        lesson: L("shot-list-ai-film-breakdown"),
      },
      {
        title: "Know your shot sizes",
        text: "From extreme close-up to extreme wide, with what each one keeps in frame.",
        link: { href: `${SW}/tools/shot-sizes`, label: "See every shot size" },
      },
      {
        title: "Reframe the shot that misses",
        text: "When the move comes out wrong, reframe or regenerate that one shot instead of rewriting the scene.",
        lesson: L("fix-bad-ai-video-shots"),
      },
    ],
    trap: {
      title: "Moving the camera in every shot",
      text:
        "If everything moves, nothing matters. Keep the move for the shot that needs it and lock the others: the contrast is what gives the tracking shot its power.",
    },
    extra: {
      title: "Every camera move, animated",
      text: "Each move as a short animation, with the exact prompt to paste into your video model.",
      link: { href: `${SW}/tools/camera-movement-prompts`, label: "Open the tool" },
    },
    cta: {
      title: "Set up your shots",
      text: "In the storyboard, every shot gets its framing and camera move in one click.",
      link: start("CAMERA"),
    },
  },
  {
    word: "MCP",
    slug: "mcp",
    twinSlug: "mcp",
    locale: "en",
    metaTitle: "Connect ScreenWeaver to Claude or ChatGPT With MCP",
    metaDescription:
      "One URL, one sign-in, and your assistant reads your script, creates your characters and breaks scenes into shots in ScreenWeaver. The MCP explained, no API key.",
    title: "Your AI assistant",
    titleGold: "inside your film project.",
    lede:
      "You commented MCP. The ScreenWeaver MCP connects Claude, ChatGPT, Cursor or VS Code to your project. Hand it a novel, a webtoon or a page of sketches: it writes the script, creates the characters and breaks the scenes into shots. You generate the images and the video in the app.",
    case: {
      title: "A scribbled comic turned into a film",
      text: "The full walkthrough: the connection, a page of sketches turned into shots, then the film generated in the app.",
      video: {
        provider: "youtube",
        id: "3m4ShNJAqHI",
        title: "I Turned a Scribbled Comic Into a Film With AI",
        caption: "Full walkthrough",
        meta: "12 min",
      },
    },
    steps: [
      {
        title: "Add the server to your assistant",
        text:
          "Paste https://app.screenweaver.ai/api/mcp into your assistant's connectors and sign in with your ScreenWeaver account. No API key.",
        link: { href: `${SW}/mcp`, label: "Setup for each assistant" },
      },
      {
        title: "Give it your material",
        text:
          "A PDF, a webtoon episode, a photo of your sketches. On Dracula, Claude read the whole novel and created 11 characters, 16 places, 8 objects, 32 scenes and 177 shots.",
      },
      {
        title: "Generate in the app",
        text:
          "The assistant reads, writes and organises. It doesn't generate video and it can't delete a project. You open the storyboard and run the images.",
      },
    ],
    trap: {
      title: "Asking it to \"make me a film\"",
      text:
        "Give it material and a director's note: \"adapt this chapter in 8 scenes, one shot per beat, open on a wide\". The more your request reads like a shot list, the better the breakdown.",
    },
    extra: {
      title: "Requests you can copy and paste",
      text: "A play into a screenplay, a song into a music video, a novel into a vertical series: ready-made requests.",
      link: { href: `${SW}/mcp`, label: "See the requests" },
    },
    cta: {
      title: "Connect your assistant",
      text: "Create your ScreenWeaver account, then add the MCP server in Claude or ChatGPT.",
      link: start("MCP"),
    },
  },
  {
    word: "TOOL",
    slug: "tool",
    twinSlug: "outil",
    locale: "en",
    metaTitle: "Test a New AI Video Model on Your Own Shots",
    metaDescription:
      "A new AI video model ships every week. How to test it on your own shots in Higgsfield, compare it with the one you already use, and keep the best take.",
    title: "The model from the reel,",
    titleGold: "tested on your own shots.",
    lede:
      "You commented TOOL. A new model is hard to judge from its demo: the demo is picked to shine. The only real test is your shot, with your character. I run it in Higgsfield, which puts most video models under one account.",
    case: {
      title: "What I keep and what I drop in Higgsfield",
      text: "My full review as a filmmaker: the models on offer, Cinema Studio, Elements, and where the tool stops when you're making a film.",
      image: {
        src: "/images/blog/higgsfield-avis-realisateur/hero.webp",
        alt: "A script supervisor lining up eight shot photos on a wooden crate to check a costume",
      },
      link: { href: "/en/blog/higgsfield-avis-realisateur", label: "Read my full review" },
    },
    steps: [
      {
        title: "Start from an image you know",
        text:
          "A panel from your storyboard or a frame from your film, with your character in it. You'll judge what actually matters: the motion, the face, the light.",
      },
      {
        title: "Run the same shot on two models",
        text:
          "Same start frame, same instruction: the model from the reel against the one you already use. Seedance, Kling, Veo, Sora and about twenty others sit under the same account.",
      },
      {
        title: "Set the camera in Cinema Studio",
        text: "Camera, lens, aperture, grade. And Elements keeps your characters, places and props from one shot to the next.",
      },
      {
        title: "Keep the best take, put it in the film",
        text: "The winning shot goes to the edit. Upstream, I prepare the script, the characters and the storyboard in ScreenWeaver.",
      },
    ],
    trap: {
      title: "Switching models with every release",
      text:
        "A new model is worth it if it fixes a problem you have on a real shot. Otherwise stay on the one you've mastered: you'll go faster.",
    },
    extra: {
      title: "My full Higgsfield review",
      text: "The strengths, the limits and the fine print to read before you subscribe.",
      link: { href: "/en/blog/higgsfield-avis-realisateur", label: "Read the review" },
    },
    cta: {
      title: "Try Higgsfield",
      text: "Affiliate link: it supports my work at no extra cost to you.",
      link: { href: HIGGSFIELD_AFF, label: "Open Higgsfield" },
      affiliate: true,
      secondary: { href: utm(SW_START_EN, "TOOL", "en"), label: "Prepare the film in ScreenWeaver" },
    },
  },
];
