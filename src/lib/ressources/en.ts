import type { Resource } from "./types";
import {
  ACADEMY_EN_FILM,
  HIGGSFIELD_AFF,
  IMG,
  SEAM_SCRIPT,
  SW_START_EN,
  lessonEn as L,
  lessonVideo,
  lostGardenEp2,
  theSeam,
  utm,
} from "./links";

const SW = "https://www.screenweaver.ai";

function start(word: string, label = "Open ScreenWeaver") {
  return { href: utm(SW_START_EN, word, "en"), label };
}

export const RESOURCES_EN: Resource[] = [
  {
    word: "STORYBOARD",
    label: "Storyboard",
    slug: "storyboard",
    twinSlug: "storyboard",
    locale: "en",
    metaTitle: "From Script to AI Storyboard: The Step-by-Step Method",
    metaDescription:
      "How to turn your script into an AI storyboard that holds: import, characters, shot breakdown, framing. Every step comes with the video lesson that shows it.",
    title: "The film in your head,",
    titleGold: "finally on the page, shot by shot.",
    lede:
      "You've been seeing it for months, and you're the only one who can. By the end of this method it sits in front of you: every scene broken down, every shot drawn, the same characters from first frame to last.",
    hero: { src: IMG.stillDome },
    from: {
      title: "A script only you can see",
      points: [
        "Scenes that exist only in your head",
        "Images generated one by one, never matching",
        "Nothing to show a crew or a producer",
      ],
      tile: { kind: "script", lines: SEAM_SCRIPT },
    },
    to: {
      title: "A film you can already watch",
      points: [
        "Every scene broken into shots",
        "The same faces from panel to panel",
        "An animatic to share, to pitch, to produce",
      ],
      tile: { kind: "image", src: IMG.storyboard40, alt: "The 40 storyboard panels of The Seam, from the fabric plain to the final dome" },
    },
    case: {
      title: "The Seam: 40 shots out of one script",
      text:
        "A world made of fabric, and a Stitcher who spends his life closing the tears. The script, the characters, the storyboard and the production all came out of the same ScreenWeaver project. Only the score and the final edit were done elsewhere.",
      video: theSeam("AI short film"),
    },
    steps: [
      {
        title: "Import your script, or write it",
        text:
          "PDF, Final Draft, Fountain or plain text: the file comes in at once. Starting from a blank page? The editor handles the screenplay format for you.",
        lesson: L("import-screenplay-pdf-final-draft"),
      },
      {
        title: "Pull out your characters, places and objects",
        text: "Everything that comes back in the script becomes a story element. That's what keeps the same face from one panel to the next.",
        lesson: L("character-descriptions-ai-storyboard"),
      },
      {
        title: "Break the script into shots",
        text: "Every scene becomes a list of shots with a framing, a camera move and a duration. This is where the film gets directed.",
        lesson: L("shot-list-ai-film-breakdown"),
      },
      {
        title: "Generate, then take control",
        text: "Generate the panels, fix a frame, change a shot size, then watch the whole film play as an animatic.",
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
      title: "Your film is one shot away from existing.",
      text: "Create the project, import your script, and watch it take shape scene after scene.",
      link: start("STORYBOARD", "Start my storyboard"),
    },
  },
  {
    word: "SCRIPT",
    label: "Screenplay",
    slug: "script",
    twinSlug: "script",
    locale: "en",
    metaTitle: "Write a Screenplay That Holds Up, With AI at Your Side",
    metaDescription:
      "Logline, story beats, scenes, AI rewrites: the method to write a solid screenplay before you generate a single shot, with a video lesson for every step.",
    title: "The story people read",
    titleGold: "to the very last page.",
    lede:
      "Everyone has an idea. A screenplay that holds up, structured, properly formatted, ready to become a film: that's what you'll be holding at the end.",
    hero: { src: IMG.stillCoeur },
    from: {
      title: "An idea and scattered notes",
      points: [
        "A strong opening, then the story runs out of breath",
        "Scenes that change nothing",
        "A text nobody could shoot",
      ],
      tile: { kind: "note", text: "A Stitcher spends his life closing the tears in a world made of fabric. And then what?" },
    },
    to: {
      title: "A screenplay ready to become a film",
      points: [
        "A structure that holds from start to finish",
        "Every scene earns its place",
        "Industry format, ready for the storyboard",
      ],
      tile: { kind: "script", lines: SEAM_SCRIPT },
    },
    case: {
      title: "Story beats, on a real outline",
      text:
        "Before writing a single line of dialogue, lay out the beats of the whole film. If a beat changes nothing, it goes. The lesson shows how it works on a real project.",
      video: lessonVideo(L("story-beats-explained-structure-labels"), "Screenwriting course"),
    },
    steps: [
      {
        title: "Start with one sentence",
        text: "Who wants what, and what stands in the way. If you can't say it in one sentence, the script will wander.",
        lesson: L("logline-template-idea-premise-examples"),
      },
      {
        title: "Turn the beats into scenes",
        text: "Each beat becomes one or more scenes, each with a clear change between its first line and its last.",
        lesson: L("turn-outline-beats-into-scenes"),
      },
      {
        title: "Write and rewrite with the assistant",
        text: "The assistant drafts or rewrites a scene on request, and the original stays in the history. You keep the final call.",
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
      title: "The first page is the hardest. Write it today.",
      text: "Writing your script in ScreenWeaver is free.",
      link: start("SCRIPT", "Write my screenplay"),
    },
  },
  {
    word: "FILM",
    label: "Short film",
    slug: "film",
    twinSlug: "film",
    locale: "en",
    metaTitle: "AI Short Film: Make Cinema, Not a String of Clips",
    metaDescription:
      "What separates an AI short that feels like cinema from a string of clips: one look, the same faces, the right model for each shot. The method behind The Seam.",
    title: "Your short film,",
    titleGold: "with the weight of real cinema.",
    lede:
      "Not a string of impressive clips. A film: one light, faces that stay, a rhythm. The one you send to festivals without apologising for it.",
    hero: { src: IMG.stillDechirure },
    from: {
      title: "Panels, tests and separate clips",
      points: ["A different look in every shot", "A hero whose face keeps changing", "Nothing that survives the edit"],
      tile: { kind: "image", src: IMG.casePlaine, alt: "Storyboard panel from The Seam: the fabric plain, the tiny Stitcher facing the tear" },
    },
    to: {
      title: "A film that holds from end to end",
      points: ["One vision, from the first shot to the last", "Characters the audience recognises", "Rushes ready for the edit"],
      tile: { kind: "image", src: IMG.planPlaine, alt: "The same shot in the finished film: real cloth, real stitching, real light" },
    },
    case: {
      title: "The Seam, 5 minutes 14, produced in ScreenWeaver",
      text:
        "Script, storyboard, images and video were all generated inside the project, with Seedream for the stills and Seedance for the animation. Only the score and the grade were done outside.",
      video: theSeam("AI short film"),
    },
    steps: [
      {
        title: "Know what gives an AI film away",
        text: "Five signatures betray an AI film in seconds. Learn them first, then avoid them on purpose.",
        lesson: L("ai-slop-vs-ai-cinema-five-signatures"),
      },
      {
        title: "Build a visual bible",
        text: "Style, light and lens, written down once and applied to every generation. This is what gives the film its family look.",
        lesson: L("visual-bible-ai-film-style"),
      },
      {
        title: "Pick the right model for each shot",
        text: "A dialogue, a chase and a quiet wide shot don't call for the same video model. Choose per shot, not per project.",
        lesson: L("choose-ai-video-model-for-each-shot"),
      },
      {
        title: "Produce, then edit",
        text: "Generate the shots from the storyboard, download the rushes, then cut, mix and grade in your own software.",
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
      title: "The next film people talk about could be yours.",
      text: "Create the project, drop in your script, and follow the steps in order.",
      link: start("FILM", "Start my film"),
    },
  },
  {
    word: "ANIME",
    label: "Anime",
    slug: "anime",
    twinSlug: "anime",
    locale: "en",
    metaTitle: "Make an Anime With AI: The Lost Garden Case Study",
    metaDescription:
      "How one person makes an animated series with AI: episodes, a locked style, reference sheets that hold, animated panels. The Lost Garden case study, step by step.",
    title: "Your anime series,",
    titleGold: "without waiting for a studio.",
    lede:
      "An anime used to take a team and years. I make Lost Garden on my own, one episode after another. Here is the path, for a world of your own.",
    hero: { src: "https://i.ytimg.com/vi/z-YRrutXaFE/maxresdefault.jpg" },
    from: {
      title: "A world asleep in your notebooks",
      points: ["Characters that never look the same twice", "A style that shifts from image to image", "An episode 1 you keep postponing"],
      tile: { kind: "note", text: "A sanctuary, a king buried beneath a vault, heroes I can see perfectly. In my head." },
    },
    to: {
      title: "A first episode to show",
      points: ["One style locked for the whole series", "Characters on model, front and back", "Scenes animated panel by panel"],
      tile: {
        kind: "image",
        src: "https://i.ytimg.com/vi/z-YRrutXaFE/maxresdefault.jpg",
        alt: "A frame from episode 2 of the anime series Lost Garden",
      },
    },
    case: {
      title: "Lost Garden, episode 2: 21 minutes, one person",
      text:
        "Written and storyboarded in ScreenWeaver, then animated. The cast stays on model from scene to scene for the whole episode: that's the real test of an anime.",
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
        text: "Episodes and acts live in one project, and every episode shares the same characters, places and objects.",
        lesson: L("how-to-write-tv-series-episode"),
      },
      {
        title: "Lock your characters with reference sheets",
        text: "Front, side, back. The sheet has to be right before anything else gets generated.",
        lesson: L("consistent-ai-characters-reference-sheets"),
      },
      {
        title: "Animate with the references attached",
        text: "Each shot is animated with its character and set references, so the cast stays on model.",
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
      title: "Your world deserves its first episode.",
      text: "Create a Series / TV project, write episode 1, and follow the steps.",
      link: start("ANIME", "Start my series"),
    },
  },
  {
    word: "WEBTOON",
    label: "Webtoon",
    slug: "webtoon",
    twinSlug: "webtoon",
    locale: "en",
    metaTitle: "Turn Your Webtoon Into an Anime With AI, Step by Step",
    metaDescription:
      "Your webtoon or comic pages become animated shots: panels imported, 16:9 or vertical, character sheets from your own art, then video. The full method, on video.",
    title: "Your webtoon",
    titleGold: "starts to move.",
    lede:
      "Your panels are already a storyboard: one beat per panel, in the right order. All they lack is motion. By the end, your episode is an animated pilot, and your rights never left your hands.",
    hero: { src: IMG.imaginariumAnime },
    from: {
      title: "Pages that stand still",
      points: ["Readers asking for the anime", "An adaptation that depends on a studio", "Years before the first animated frame"],
      tile: { kind: "image", src: IMG.imaginariumPlanche, alt: "A panel from the webtoon Imaginarium: Lucy holding an orange, with speech bubbles" },
    },
    to: {
      title: "An animated pilot, signed by you",
      points: ["Your panels turned into shots", "Your characters true to your drawing", "An episode to publish, in 16:9 or vertical"],
      tile: { kind: "image", src: IMG.imaginariumAnime, alt: "The same character as an anime: close-up on Lucy's eyes" },
    },
    case: {
      title: "Imaginarium: my webtoon, now an anime",
      text:
        "The episode goes in as a PDF, each page is cut into panels, and each panel becomes a shot with the original art as its reference. Then come the storyboard images, then the video.",
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
        text: "PDF or images: every page is cut into panels and every panel becomes a shot. Keep your drawings, or have them redrawn in the project's style.",
        link: { href: `${SW}/convert-webtoon-to-anime`, label: "See how the import works" },
      },
      {
        title: "Choose 16:9 or vertical",
        text: "A classic anime runs in 16:9, a phone version stays 9:16. The format is set for the whole project.",
      },
      {
        title: "Lock your characters",
        text: "You've drawn them hundreds of times: that's a ready-made bible. Build one reference sheet per character from your own art.",
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
      title: "Your readers want the anime. Give them the pilot.",
      text: "Create a project, drop your episode in as a PDF, and follow the four steps.",
      link: start("WEBTOON", "Adapt my webtoon"),
    },
  },
  {
    word: "DRAMA",
    label: "Vertical series",
    slug: "drama",
    twinSlug: "serie",
    locale: "en",
    metaTitle: "Write and Produce a Vertical Short Drama With AI",
    metaDescription:
      "Short drama, micro drama, vertical series: short episodes that end on a question, a 9:16 storyboard and the same cast across every episode. The method, step by step.",
    title: "The series people binge",
    titleGold: "and can't put down.",
    lede:
      "A one-minute episode, an ending that forces the next tap. By the end of this method, your vertical series is written, broken down and ready to produce.",
    hero: { src: IMG.serieVerticale, position: "center 30%" },
    from: {
      title: "A good story, in one block",
      points: ["No episode breakdown", "Endings that let the viewer leave", "A frame built for the big screen"],
      tile: { kind: "note", text: "A two-hour story, told in one go, for a cinema screen." },
    },
    to: {
      title: "A series built for the phone",
      points: ["Every episode planned", "A question left hanging at each ending", "A 9:16 storyboard, the same faces throughout"],
      tile: {
        kind: "image",
        src: IMG.serieVerticale,
        alt: "Vertical frame from the short drama The Yellow Umbrella: a woman under a yellow umbrella on a neon street",
        fit: "contain",
      },
    },
    case: {
      title: "Writing a short drama",
      text: "The lesson covers the format: episode length, the hook at the top, the cliffhanger at the end, and how to keep the cast small.",
      video: lessonVideo(L("how-to-write-vertical-short-drama"), "Screenwriting course"),
    },
    steps: [
      {
        title: "Plan the episodes before you write",
        text: "How many episodes, how long, where each twist lands. The free planner lays out the grid of the whole series.",
        link: { href: `${SW}/tools/short-drama-episode-planner`, label: "Open the planner" },
      },
      {
        title: "Write each episode as part of a series",
        text: "Episodes and acts live in the same project, with one shared cast, places and objects.",
        lesson: L("how-to-write-tv-series-episode"),
      },
      {
        title: "Set the project to 9:16",
        text: "Vertical framing changes every panel: less set, more face. Choose the format before the storyboard, not after.",
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
    cta: {
      title: "Your episode 1 can exist this week.",
      text: "Create a Series / TV project in 9:16 and start with the first cliffhanger.",
      link: start("DRAMA", "Write my series"),
    },
  },
  {
    word: "CHARACTER",
    label: "Character",
    slug: "character",
    twinSlug: "personnage",
    locale: "en",
    metaTitle: "Keep the Same AI Character From Shot to Shot",
    metaDescription:
      "Why your AI character changes face in every shot, and how to fix it: camera-ready descriptions, reference sheets, reference-to-video. With the video lessons.",
    title: "A hero the audience recognises",
    titleGold: "in every single shot.",
    lede:
      "Audiences bond with a face. If it changes, the film falls apart. By the end of this method, your character is the same in every shot, from every angle.",
    hero: { src: IMG.stillDome },
    from: {
      title: "A different face with every generation",
      points: ["Hours spent rerunning the same shot", "A costume that changes between scenes", "A film that can't be edited"],
      tile: { kind: "note", text: "A man in a black coat, sad and mysterious." },
    },
    to: {
      title: "A character who carries the whole film",
      points: ["A description the AI follows to the letter", "A sheet with front, side and back views", "The same hero in every shot"],
      tile: { kind: "image", src: IMG.ficheStitcher, alt: "The Stitcher's reference sheet: front, three-quarter, side, back, head and hand details" },
    },
    case: {
      title: "Reference sheets that hold across every shot",
      text: "Front, side and back views, built once and attached to every shot that needs the character.",
      video: lessonVideo(L("consistent-ai-characters-reference-sheets"), "AI filmmaking course"),
    },
    steps: [
      {
        title: "Describe them the way a camera sees them",
        text: "Face shape, distinctive marks, clothes, material. Nothing about mood: the emotion belongs to the shot.",
        lesson: L("character-descriptions-ai-storyboard"),
      },
      {
        title: "Pass the reference into every shot",
        text: "Reference-to-video sends the sheet with the shot, so the model draws the same person again.",
        lesson: L("reference-to-video-consistent-characters"),
      },
      {
        title: "Fix the shot that drifts",
        text: "When a face slips, repair or regenerate that one shot instead of starting the scene again.",
        lesson: L("fix-bad-ai-video-shots"),
      },
    ],
    trap: {
      title: "Describing the emotion instead of the face",
      text:
        "\"A sad, mysterious man\" gives you a new face on every run. \"Egg-shaped linen head, stitched scar, black coat\" gives you the same one.",
    },
    extra: {
      title: "Character consistency builder",
      text: "Describe your character once and get the block to paste at the top of every prompt.",
      link: { href: `${SW}/tools/ai-character-consistency-sheet`, label: "Open the tool" },
    },
    cta: {
      title: "Give your hero a face. Just one.",
      text: "Import your script: your characters are detected, you only have to describe them.",
      link: start("CHARACTER", "Build my character"),
    },
  },
  {
    word: "CAMERA",
    label: "Camera",
    slug: "camera",
    twinSlug: "camera",
    locale: "en",
    metaTitle: "Shot Sizes and Camera Moves for AI Video",
    metaDescription:
      "Wide, close-up, tracking, dolly: pick the right framing and camera move for every shot, then write it so an AI video model actually follows it. With the lessons.",
    title: "Shots that tell the story,",
    titleGold: "not shots that just move.",
    lede:
      "What separates an AI video from a film scene often comes down to the frame. By the end of this method, you choose every shot size and every move like a director, and the model follows.",
    hero: { src: IMG.stillPlaine },
    from: {
      title: "Beautiful images, no intention",
      points: ["The same wide shot everywhere", "A camera that moves because it can", "Flat scenes despite great renders"],
      tile: { kind: "image", src: IMG.casePlaine, alt: "A wide shot: the fabric plain and the tiny Stitcher" },
    },
    to: {
      title: "Direction the audience can feel",
      points: ["The right shot size for each moment", "A move only when it means something", "Prompts written to be followed"],
      tile: { kind: "image", src: IMG.caseInsert, alt: "An insert: the Stitcher's hands, the needle and the red thread on the tear" },
    },
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
      title: "You have the eye. Give it a camera.",
      text: "In the storyboard, every shot gets its framing and its move in one click.",
      link: start("CAMERA", "Set up my shots"),
    },
  },
  {
    word: "MCP",
    label: "MCP",
    slug: "mcp",
    twinSlug: "mcp",
    locale: "en",
    metaTitle: "Connect ScreenWeaver to Claude or ChatGPT With MCP",
    metaDescription:
      "One URL, one sign-in, and your assistant reads your script, creates your characters and breaks scenes into shots in ScreenWeaver. The MCP explained, no API key.",
    title: "Hand your assistant a sketch,",
    titleGold: "get back a film broken into shots.",
    lede:
      "A novel as a PDF, a webtoon, a scribbled page. Your assistant reads it, writes the script, creates the characters and breaks the scenes into shots inside your project. You run the images and the video.",
    from: {
      title: "A pile of raw material",
      points: ["A novel, notes, sketches", "Weeks of adaptation ahead of you", "An AI assistant that can't see your project"],
      tile: { kind: "image", src: IMG.mcpCroquis, alt: "A page of pencil sketches: a character woken up by an alarm clock", fit: "contain" },
    },
    to: {
      title: "A film project, built",
      points: ["The script written and organised", "Characters and places created", "Every scene broken down, ready to generate"],
      tile: { kind: "image", src: IMG.mcpPlan, alt: "The shot generated from the sketch: a mouse in bed, woken by the alarm clock" },
    },
    case: {
      title: "A scribbled comic turned into a film",
      text: "The full walkthrough: the connection, the page of sketches turned into shots, then the film generated in the app.",
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
        text: "Paste https://app.screenweaver.ai/api/mcp into the connectors of Claude or ChatGPT and sign in with your account. No API key.",
        link: { href: `${SW}/mcp`, label: "Setup for each assistant" },
      },
      {
        title: "Give it your material",
        text: "A PDF, a webtoon episode, a photo of your sketches. On Dracula, Claude read the whole novel and created 11 characters, 16 places, 32 scenes and 177 shots.",
      },
      {
        title: "Generate in the app",
        text: "The assistant reads, writes and organises. You open the storyboard and run the images.",
      },
    ],
    trap: {
      title: "Asking it to \"make me a film\"",
      text:
        "Give it material and a director's note: \"adapt this chapter in 8 scenes, one shot per beat, open on a wide\". The more precise the request, the better the breakdown.",
    },
    extra: {
      title: "Requests you can copy and paste",
      text: "A play into a screenplay, a song into a music video, a novel into a vertical series: ready-made requests.",
      link: { href: `${SW}/mcp`, label: "See the requests" },
    },
    cta: {
      title: "That novel you dream of adapting: start tonight.",
      text: "Create your ScreenWeaver account, then add the MCP server in Claude or ChatGPT.",
      link: start("MCP", "Connect my assistant"),
    },
  },
  {
    word: "TOOL",
    label: "Video models",
    slug: "tool",
    twinSlug: "outil",
    locale: "en",
    metaTitle: "Test a New AI Video Model on Your Own Shots",
    metaDescription:
      "A new AI video model ships every week. How to test it on your own shots in Higgsfield, compare it with the one you already use, and keep the best take.",
    title: "The new model,",
    titleGold: "judged on your own shots.",
    lede:
      "Every week, a demo promises a revolution. By the end of this method, one comparison tells you what a model is worth for your film, and you walk away with the best take.",
    hero: { src: "/images/blog/higgsfield-avis-realisateur/hero.webp" },
    from: {
      title: "A demo that sells a dream",
      points: ["No way to know what it's worth for you", "One more subscription with every release", "Hours of tests with no conclusion"],
      tile: { kind: "note", text: "This model changes everything." },
    },
    to: {
      title: "A verdict on your film",
      points: ["The same shot compared on two models", "Every model under one account", "The best take, filed in your edit"],
      tile: { kind: "note", text: "On my shot, the second one keeps the face. I keep the second one." },
    },
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
        text: "A panel from your storyboard or a frame from your film, with your character in it. You'll judge what matters: the motion, the face, the light.",
      },
      {
        title: "Run the same shot on two models",
        text: "Same start frame, same instruction: the model from the reel against the one you already use. Seedance, Kling, Veo, Sora and about twenty others sit under the same account.",
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
    cta: {
      title: "Stop watching demos. Run your own.",
      text: "Affiliate link: it supports my work at no extra cost to you.",
      link: { href: HIGGSFIELD_AFF, label: "Try Higgsfield" },
      affiliate: true,
      secondary: { href: utm(SW_START_EN, "TOOL", "en"), label: "Prepare the film in ScreenWeaver" },
    },
  },
];
