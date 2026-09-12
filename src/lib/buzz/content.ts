/**
 * Tout le contenu du tunnel « Viral AI videos » (anglais) : page de vente,
 * page d'accès (la méthode et le prompt), email de livraison.
 *
 * Les passages entre doubles crochets [[…]] sont à remplir par Frank avec
 * les vrais détails de la vidéo du hamac (prompt exact, modèles, réglages,
 * chiffres). Tant qu'il en reste un dans la partie `access`,
 * `isBuzzOfferReady()` renvoie false et le bouton de paiement reste
 * désactivé : on ne vend pas un gabarit.
 */

export const TODO_MARK = "[[";

type Step = { title: string; body: string[] };
type Faq = { q: string; a: string };

export const buzzContent = {
  sales: {
    metaTitle: "Viral AI videos: the exact method and the prompt for $7",
    metaDescription:
      "My AI reels reached 6 million views in one night. For $7, get the exact method and the prompt behind the hammock video, with the settings and the tools.",
    kicker: "Complete method · $7 · instant access",
    h1a: "6 million views in one night with AI videos.",
    h1b: "Here is exactly how I made them.",
    lead:
      "The hammock video on my Instagram account @frank.houbre.ia was generated with AI, from the idea to the edit. For $7 you get the method I followed and the exact prompt, ready to copy and paste.",
    proofTitle: "What happened that night",
    proofBody: [
      "I posted several AI reels on @frank.houbre.ia. When I woke up, the counter showed 6 million views. The hammock video is the one that set everything off.",
      "And keep this in mind: there is no camera, no shoot and no software to install behind it. Everything was produced on Imaginode, with a precise idea and a prompt that had been worked on.",
    ],
    proofCta: "Watch the videos on Instagram",
    getTitle: "What you get for $7",
    getItems: [
      "The step-by-step method, from the idea to the publish button, exactly as I followed it for the hammock video.",
      "The exact prompt of the video, ready to paste, with the model, duration and format I used.",
      "The tool list: everything you need is on Imaginode, including the video models I use.",
      "The publishing checklist for the first hour, the one that decides whether a reel takes off.",
      "Permanent access: the page opens right after payment and the link also lands in your inbox.",
    ],
    priceNote: "One-time payment of $7 (US dollars), secured by Stripe.",
    cta: "Get the method and the prompt for $7",
    ctaSending: "Opening checkout…",
    ctaSoon: "Opening soon",
    ctaUnavailable: "Checkout is temporarily unavailable. Please try again in a few minutes.",
    cancelled: "Payment cancelled. Nothing was charged, you can try again whenever you want.",
    legal:
      "Digital content delivered immediately after payment. By paying, you request immediate access and waive the 14-day withdrawal period. Questions: hello@businessdynamite.xyz.",
    whoTitle: "Who is talking to you",
    whoKicker: "Frank Houbre, AI filmmaker and trainer",
    whoBody: [
      "I have been directing AI films for several years. My films Ronces, VOIDBORN and Lost Garden were selected and awarded at international festivals, from Seoul to Hollywood.",
      "I also founded Imaginode, the AI image and video studio I produced these reels on. The method you are buying is the one I use, not a theory copied from somewhere else.",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "Do I need an Imaginode account?",
        a: "Everything I used for the hammock video is on Imaginode, so it is the simplest route. You can try it for free: three images are offered at signup, no card required. The method is readable with other tools, but I cannot promise the same render.",
      },
      {
        q: "I am a beginner, is this for me?",
        a: "Yes. The prompt copies and pastes, the settings are given as they are, and each step explains why it exists. You do not need to be an editor or an AI specialist.",
      },
      {
        q: "How do I receive the method?",
        a: "Right after payment the page opens automatically. You also receive an email with your personal link to come back whenever you want.",
      },
      {
        q: "Is $7 charged in dollars?",
        a: "Yes, the payment is in US dollars. Your bank converts it automatically at the daily rate, and you see the exact amount before confirming.",
      },
      {
        q: "Can I get a refund?",
        a: "The content is delivered immediately, so there is no withdrawal period. If you cannot access the page or something does not work, write to me and I will fix it.",
      },
    ] as Faq[],
    bottomTitle: "Stop guessing what works",
    bottomBody:
      "The result is right there on Instagram. For $7 you get the exact path to it, from the idea to the publish button.",
  },
  access: {
    metaTitle: "Your method: viral AI videos",
    welcome:
      "Payment confirmed, thank you. Your personal access link arrives by email in a few minutes. Bookmark this page in the meantime.",
    welcomeBack: "Welcome back to your page. Everything is still here.",
    kicker: "Complete method · permanent access",
    title: "The exact method behind the hammock video",
    intro: [
      "You have in front of you everything I did for this video, in the order I did it. Read it once in full before generating anything: most failed reels are decided before the first click on generate.",
      "And one rule I ask you to respect: one idea per video. Two ideas in eight seconds, the AI gets lost, the viewer too, and you throw your credits out the window.",
    ],
    videoTitle: "The reference video",
    videoBody:
      "Watch the hammock video once in full, then a second time with the sound off. Everything below is built on it.",
    videoCta: "Open the video on Instagram",
    stepsTitle: "The method in six steps",
    steps: [
      {
        title: "The idea that stops the thumb",
        body: [
          "Before generating, I look for an image nobody expects to see in their feed. For the hammock, the starting idea: [[the exact idea of the hammock video, in one sentence]].",
          "Test yours in one sentence. If you cannot tell it to someone in ten words, it will not hold eight seconds as a reel.",
        ],
      },
      {
        title: "The image first, always",
        body: [
          "Generating an image costs 100 times less than a video. So I first freeze the key image on Imaginode with [[the image model used]], and I fix it until the surprising detail is sharp.",
          "As long as the image does not work on its own, paused, the video will not work either. This is the step where you save your credits, not later.",
        ],
      },
      {
        title: "The video: one movement, one action",
        body: [
          "I turn the image into video with [[the video model used]], [[duration]] seconds, vertical 9:16. The exact prompt is below, with the settings.",
          "One single action in the prompt. As soon as you ask for two, the motion goes soft and the render screams AI.",
        ],
      },
      {
        title: "The sound",
        body: [
          "[[The sound or music used, and how it was added]].",
          "The sound is chosen before the final edit, never after: it sets the rhythm of the cuts.",
        ],
      },
      {
        title: "The edit and the first second",
        body: [
          "The first second shows the strangest image, no intro, no logo, no hook text covering the shot. [[Edit details: final length, cuts, on-screen text or not]].",
          "The viewer decides in under a second. Anything that delays the strong image makes them leave.",
        ],
      },
      {
        title: "Publishing and the first hour",
        body: [
          "[[Posting time, exact caption, hashtags or not, and what was done during the first hour]].",
          "The checklist below repeats these points in order. Follow it as is for your first reel, then adjust.",
        ],
      },
    ] as Step[],
    promptTitle: "The exact prompt of the hammock video",
    promptIntro:
      "Paste it as is into Imaginode with the settings below. Then change one element at a time for your variants: the place, the character or the object, never all three at once.",
    prompt: "[[EXACT PROMPT OF THE HAMMOCK VIDEO, to be pasted by Frank]]",
    copy: "Copy the prompt",
    copied: "Prompt copied.",
    settingsTitle: "The settings used",
    settings: [
      { label: "Image model", value: "[[image model]]" },
      { label: "Video model", value: "[[video model]]" },
      { label: "Duration", value: "[[duration]] s" },
      { label: "Format", value: "9:16 vertical" },
      { label: "Resolution", value: "[[resolution]]" },
      { label: "Attempts", value: "[[number of generations before the right one]]" },
    ],
    toolsTitle: "The tools: everything is on Imaginode",
    toolsBody: [
      "Image, video, character references, variants: I did everything in one place, on Imaginode's node canvas. You will find the models listed above on a single credit balance.",
      "Three images are offered at signup, no card. Enough to test step 2 before spending anything.",
    ],
    toolsCta: "Open Imaginode",
    checklistTitle: "Publishing checklist",
    checklist: [
      "Strong image from the first second, no intro.",
      "One idea, one action.",
      "9:16 format, sound chosen before the edit.",
      "Short caption, one sentence that raises the question or the surprise.",
      "[[Checklist item specific to Frank's method]]",
      "Publish, then stay available during the first hour to answer the first comments.",
    ],
    keepTitle: "Keep this page",
    keepBody:
      "Your access link is personal and has no expiry. It is also in the confirmation email. Do not share it, it is tied to your purchase.",
    lostTitle: "Lost your link?",
    lostBody: "Enter the email address used at checkout and you will receive a new access link.",
    lostLabel: "Your email",
    lostCta: "Resend my link",
    lostDone:
      "If this address matches a purchase, the link is on its way. Check your spam folder too.",
    lostError: "The link could not be sent. Please try again in a minute.",
    noAccessTitle: "This page is reserved for buyers",
    noAccessBody:
      "Open it from the link in your confirmation email, or get the method here:",
    noAccessCta: "Get the method for $7",
  },
  email: {
    subject: "Your method: viral AI videos",
    greeting: (firstName: string) => `Hello${firstName ? ` ${firstName}` : ""},`,
    body: [
      "Thank you for your trust. Here is your personal link to the method and the prompt of the hammock video. It does not expire, keep this email.",
      "Read the page once in full before generating, then paste the prompt as is into Imaginode with the settings listed.",
    ],
    cta: "Open my method",
    footer:
      "You receive this email because you bought the method “Viral AI videos” on frankhoubre.com. Questions: hello@businessdynamite.xyz.",
  },
} as const;

export type BuzzContent = typeof buzzContent;

/** Vrai quand plus aucun passage [[…]] n'attend les détails de Frank. */
export function isBuzzOfferReady(): boolean {
  return !JSON.stringify(buzzContent.access).includes(TODO_MARK);
}
