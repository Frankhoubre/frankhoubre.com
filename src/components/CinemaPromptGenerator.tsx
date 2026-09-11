"use client";

import { useEffect, useMemo, useState } from "react";

type Option = {
  id: string;
  label: string;
  prompt: string;
};

const toolData: {
  cameras: Option[];
  lenses: Option[];
  apertures: Option[];
  isos: Option[];
  styles: Option[];
  lightings: Option[];
} = {
  cameras: [
    {
      id: "arri-alexa-35",
      label: "ARRI Alexa 35",
      prompt: "shot on ARRI Alexa 35, rich dynamic range, natural cinematic skin tones",
    },
    {
      id: "red-v-raptor",
      label: "RED V-RAPTOR 8K",
      prompt: "captured on RED V-RAPTOR 8K, high micro-contrast, crisp cinematic detail",
    },
    {
      id: "sony-venice-2",
      label: "Sony Venice 2",
      prompt: "captured on Sony Venice 2, smooth highlight roll-off, premium digital cinema look",
    },
    {
      id: "blackmagic-ursa",
      label: "Blackmagic URSA Cine",
      prompt: "filmed on Blackmagic URSA Cine, textured cinematic image with soft contrast",
    },
    {
      id: "canon-c500mii",
      label: "Canon C500 Mark II",
      prompt: "shot on Canon C500 Mark II, nuanced color rendering, clean filmic profile",
    },
    {
      id: "canon-r5c",
      label: "Canon R5 C",
      prompt: "captured on Canon R5 C, sharp hybrid cinema detail, vibrant yet controlled color",
    },
    {
      id: "sony-fx3",
      label: "Sony FX3",
      prompt: "filmed on Sony FX3, modern low-light performance, compact cinematic footprint",
    },
    {
      id: "sony-fx6",
      label: "Sony FX6",
      prompt: "captured on Sony FX6, balanced documentary-cinema look, high dynamic range",
    },
    {
      id: "arri-mini-lf",
      label: "ARRI ALEXA Mini LF",
      prompt: "shot on ARRI ALEXA Mini LF, large format cinematic depth and smooth highlight rolloff",
    },
    {
      id: "red-komodo-x",
      label: "RED KOMODO-X",
      prompt: "captured on RED KOMODO-X, punchy contrast, refined digital film sharpness",
    },
    {
      id: "panasonic-s1h",
      label: "Panasonic S1H",
      prompt: "filmed on Panasonic S1H, organic texture, cinematic gradation and tonal depth",
    },
    {
      id: "bmpcc-6k-pro",
      label: "Blackmagic Pocket 6K Pro",
      prompt: "captured on Blackmagic Pocket 6K Pro, filmic softness, rich color separation",
    },
  ],
  lenses: [
    {
      id: "anamorphic-40",
      label: "Anamorphic 40mm T2.0",
      prompt: "anamorphic 40mm lens, elegant oval bokeh, horizontal lens flares, epic perspective",
    },
    {
      id: "spherical-35",
      label: "Spherical 35mm",
      prompt: "spherical 35mm lens, immersive medium-wide composition, natural perspective",
    },
    {
      id: "spherical-85",
      label: "Portrait 85mm",
      prompt: "85mm portrait lens, compressed background, selective focus, emotional intimacy",
    },
    {
      id: "macro-100",
      label: "Macro 100mm",
      prompt: "100mm macro lens, hyper-detailed textures, shallow depth of field",
    },
    {
      id: "wide-24",
      label: "Wide 24mm",
      prompt: "24mm wide lens, strong environmental storytelling, cinematic spatial depth",
    },
    {
      id: "prime-28",
      label: "Prime 28mm",
      prompt: "28mm prime lens, dynamic framing, immersive perspective with controlled distortion",
    },
    {
      id: "prime-50",
      label: "Prime 50mm",
      prompt: "50mm prime lens, natural perspective, balanced subject-to-environment storytelling",
    },
    {
      id: "tele-135",
      label: "Telephoto 135mm",
      prompt: "135mm telephoto lens, pronounced compression, isolated cinematic subject focus",
    },
    {
      id: "zoom-24-70",
      label: "Zoom 24-70mm",
      prompt: "24-70mm cinematic zoom lens, flexible framing from wide to intimate close shots",
    },
    {
      id: "zoom-70-200",
      label: "Zoom 70-200mm",
      prompt: "70-200mm tele zoom lens, compressed depth, dramatic close-up visual language",
    },
    {
      id: "vintage-58",
      label: "Vintage 58mm",
      prompt: "vintage 58mm glass, subtle edge softness, nostalgic cinematic bloom",
    },
  ],
  apertures: [
    {
      id: "f14",
      label: "f/1.4",
      prompt: "aperture f/1.4, ultra shallow depth of field, strong background blur separation",
    },
    {
      id: "f20",
      label: "f/2.0",
      prompt: "aperture f/2.0, shallow depth of field, cinematic subject isolation",
    },
    {
      id: "f28",
      label: "f/2.8",
      prompt: "aperture f/2.8, balanced sharpness with cinematic bokeh",
    },
    {
      id: "f40",
      label: "f/4",
      prompt: "aperture f/4, medium depth of field for controlled narrative readability",
    },
    {
      id: "f56",
      label: "f/5.6",
      prompt: "aperture f/5.6, deeper focus, increased environmental detail retention",
    },
    {
      id: "f80",
      label: "f/8",
      prompt: "aperture f/8, deep focus look, crisp foreground and background detail",
    },
  ],
  isos: [
    {
      id: "iso100",
      label: "ISO 100",
      prompt: "ISO 100, clean image, minimal grain, high dynamic range clarity",
    },
    {
      id: "iso200",
      label: "ISO 200",
      prompt: "ISO 200, clean cinematic baseline exposure with subtle texture",
    },
    {
      id: "iso400",
      label: "ISO 400",
      prompt: "ISO 400, balanced sensitivity, controlled shadow detail, natural grain behavior",
    },
    {
      id: "iso800",
      label: "ISO 800",
      prompt: "ISO 800, low-light capable cinematic exposure, nuanced grain structure",
    },
    {
      id: "iso1250",
      label: "ISO 1250",
      prompt: "ISO 1250, moody low-light capture with visible yet pleasing texture",
    },
    {
      id: "iso1600",
      label: "ISO 1600",
      prompt: "ISO 1600, gritty atmosphere with cinematic digital grain characteristics",
    },
  ],
  styles: [
    {
      id: "neo-noir",
      label: "Neo-Noir",
      prompt: "neo-noir visual style, contrasty shadows, urban tension, stylized reflections",
    },
    {
      id: "sci-fi-epic",
      label: "Sci-Fi Epic",
      prompt: "sci-fi epic style, large-scale worldbuilding, atmospheric depth, futuristic mood",
    },
    {
      id: "arthouse",
      label: "Arthouse Poetic",
      prompt: "arthouse poetic style, contemplative pacing, emotionally textured visual storytelling",
    },
    {
      id: "commercial-premium",
      label: "Premium Commercial",
      prompt: "premium commercial style, polished composition, luxury-grade color and lighting control",
    },
    {
      id: "documentary-realism",
      label: "Documentary Realism",
      prompt: "documentary realism style, naturalistic framing, grounded authenticity, lived-in detail",
    },
    {
      id: "vintage-film",
      label: "Vintage Film",
      prompt: "vintage film style, soft halation, nostalgic color response, analog-inspired mood",
    },
    {
      id: "dark-fantasy",
      label: "Dark Fantasy",
      prompt: "dark fantasy style, atmospheric mysticism, dramatic tonal contrast, cinematic grandeur",
    },
  ],
  lightings: [
    {
      id: "golden-hour",
      label: "Golden Hour Soft",
      prompt: "golden hour soft lighting, warm highlights, gentle shadows, cinematic glow",
    },
    {
      id: "moody-neon-night",
      label: "Neon Night Contrast",
      prompt: "moody neon night lighting, deep contrast, reflective wet surfaces, cyan-magenta accents",
    },
    {
      id: "three-point-studio",
      label: "Three-Point Studio",
      prompt: "balanced three-point lighting, controlled key/fill/rim separation, clean cinematic readability",
    },
    {
      id: "volumetric-fog",
      label: "Volumetric Fog Beams",
      prompt: "volumetric lighting with atmospheric haze, visible light rays, immersive depth",
    },
    {
      id: "low-key-dramatic",
      label: "Low-Key Dramatic",
      prompt: "low-key dramatic lighting, deep blacks, selective highlights, suspense-driven mood",
    },
  ],
};

const STORAGE_KEY = "fh_cinema_prompt_generator_v1";

type FormState = {
  camera: string;
  lens: string;
  aperture: string;
  iso: string;
  style: string;
  lighting: string;
  subject: string;
};

function getDefaultState(): FormState {
  return {
    camera: toolData.cameras[0].id,
    lens: toolData.lenses[0].id,
    aperture: toolData.apertures[0].id,
    iso: toolData.isos[0].id,
    style: toolData.styles[0].id,
    lighting: toolData.lightings[0].id,
    subject: "",
  };
}

function getById(list: Option[], id: string): Option {
  return list.find((item) => item.id === id) ?? list[0];
}

function createPrompt(state: FormState): string {
  const camera = getById(toolData.cameras, state.camera);
  const lens = getById(toolData.lenses, state.lens);
  const aperture = getById(toolData.apertures, state.aperture);
  const iso = getById(toolData.isos, state.iso);
  const style = getById(toolData.styles, state.style);
  const lighting = getById(toolData.lightings, state.lighting);
  const defaultSubject = "a cinematic protagonist walking through a futuristic city at night";
  const subject = state.subject.trim() || defaultSubject;

  return [
    `${subject},`,
    camera.prompt + ",",
    lens.prompt + ",",
    aperture.prompt + ",",
    iso.prompt + ",",
    style.prompt + ",",
    lighting.prompt + ",",
    "ultra-detailed cinematic composition, realistic textures, controlled color grading,",
    "film grain, natural skin rendering, emotionally evocative atmosphere,",
    "high production value, sharp subject separation, 8k, professional color science",
  ].join(" ");
}

export function CinemaPromptGenerator() {
  const [state, setState] = useState<FormState>(getDefaultState);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return;
      const parsed = JSON.parse(saved) as Partial<FormState>;
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hydratation localStorage post-SSR
      setState((prev) => ({
        camera: parsed.camera ?? prev.camera,
        lens: parsed.lens ?? prev.lens,
        aperture: parsed.aperture ?? prev.aperture,
        iso: parsed.iso ?? prev.iso,
        style: parsed.style ?? prev.style,
        lighting: parsed.lighting ?? prev.lighting,
        subject: parsed.subject ?? prev.subject,
      }));
    } catch {
      // Ignore invalid localStorage payload.
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const prompt = useMemo(() => createPrompt(state), [state]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((prev) => ({ ...prev, [key]: value }));
  }

  function generatePrompt() {
    setLoading(true);
    window.setTimeout(() => setLoading(false), 420);
  }

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="container-x section-sm" aria-label="Générateur">
      <div className="grid-12 gap-y-12">
        <div className="col-span-12 lg:col-span-7">
          <p className="meta">Réglages · 6 paramètres</p>
          <form
            className="mt-6 grid gap-6 border-t border-line pt-6 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              generatePrompt();
            }}
          >
              <label className="block">
                <span className="meta mb-2 block">Caméra</span>
                <select
                  value={state.camera}
                  onChange={(e) => updateField("camera", e.target.value)}
                  className="input"
                >
                  {toolData.cameras.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="meta mb-2 block">Objectif</span>
                <select
                  value={state.lens}
                  onChange={(e) => updateField("lens", e.target.value)}
                  className="input"
                >
                  {toolData.lenses.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="meta mb-2 block">Ouverture</span>
                <select
                  value={state.aperture}
                  onChange={(e) => updateField("aperture", e.target.value)}
                  className="input"
                >
                  {toolData.apertures.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="meta mb-2 block">ISO</span>
                <select
                  value={state.iso}
                  onChange={(e) => updateField("iso", e.target.value)}
                  className="input"
                >
                  {toolData.isos.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="meta mb-2 block">Style</span>
                <select
                  value={state.style}
                  onChange={(e) => updateField("style", e.target.value)}
                  className="input"
                >
                  {toolData.styles.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="meta mb-2 block">Éclairage</span>
                <select
                  value={state.lighting}
                  onChange={(e) => updateField("lighting", e.target.value)}
                  className="input"
                >
                  {toolData.lightings.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block sm:col-span-2">
                <span className="meta mb-2 block">Sujet / scène (optionnel)</span>
                <input
                  type="text"
                  value={state.subject}
                  onChange={(e) => updateField("subject", e.target.value)}
                  placeholder="ex: a lone detective crossing a rain-soaked neon street at night"
                  className="input"
                />
              </label>

              <div className="flex flex-wrap items-center gap-3 pt-2 sm:col-span-2">
                <button type="submit" className="btn btn-primary">
                  <span>Générer le prompt</span>
                </button>
                <button type="button" onClick={copyPrompt} className="btn">
                  <span>Copier le prompt</span>
                </button>
                <span className={`meta transition-opacity duration-200 ${copied ? "opacity-100" : "opacity-0"}`} aria-live="polite">
                  Prompt copié
                </span>
              </div>
          </form>
        </div>

        <aside className="col-span-12 lg:col-span-5">
          <div className="card card-surface sticky top-28 p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <p className="meta">Prompt final · EN</p>
              {loading ? (
                <span className="meta meta-strong flex items-center gap-2" role="status">
                  <span className="inline-block h-1.5 w-1.5 animate-pulse bg-cream" aria-hidden />
                  Génération
                </span>
              ) : (
                <span className="meta meta-dim">{prompt.length} car.</span>
              )}
            </div>
            <pre className="mt-4 min-h-[240px] whitespace-pre-wrap border-t border-line pt-4 font-sans text-[15px] leading-relaxed text-stone">
              {prompt}
            </pre>
          </div>
        </aside>
      </div>
    </section>
  );
}
