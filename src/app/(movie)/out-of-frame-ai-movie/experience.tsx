"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./experience.module.css";

type Choice = "yes" | "no";
type Stats = { yes: number; no: number; total: number };
type Phase = "flash" | "typing" | "choice" | "sending" | "result";

const QUESTION = "WILL YOU TURN OFF THE CONSOLE?";
const FLASH_MS = 4400;
const TYPE_MS = 85;

function pct(n: number, total: number) {
  return total ? Math.round((n / total) * 100) : 0;
}

export default function Experience() {
  const [phase, setPhase] = useState<Phase>("flash");
  const [typed, setTyped] = useState(0);
  const [stats, setStats] = useState<Stats | null>(null);
  const [voted, setVoted] = useState<Choice | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const token = useRef<string | null>(null);
  const honeypot = useRef<HTMLInputElement>(null);
  const noise = useRef<HTMLCanvasElement>(null);

  // Jeton, stats et vote déjà fait : chargés pendant le flash.
  useEffect(() => {
    fetch("/api/out-of-frame/vote", { cache: "no-store" })
      .then((r) => r.json())
      .then((d) => {
        token.current = d.token ?? null;
        setStats(d.stats ?? null);
        if (d.voted) setVoted(d.voted);
      })
      .catch(() => undefined);
  }, []);

  useEffect(() => {
    if (phase !== "flash") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => setPhase("typing"), reduced ? 1200 : FLASH_MS);
    return () => clearTimeout(t);
  }, [phase]);

  // Neige de télé pendant l'allumage : petite toile agrandie, 20 images/s.
  useEffect(() => {
    if (phase !== "flash") return;
    const canvas = noise.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const img = ctx.createImageData(canvas.width, canvas.height);
    const id = setInterval(() => {
      const d = img.data;
      for (let i = 0; i < d.length; i += 4) {
        const v = Math.random() * 255;
        d[i] = d[i + 1] = d[i + 2] = v;
        d[i + 3] = 255;
      }
      ctx.putImageData(img, 0, 0);
    }, 50);
    return () => clearInterval(id);
  }, [phase]);

  useEffect(() => {
    if (phase !== "typing") return;
    if (typed >= QUESTION.length) {
      const t = setTimeout(() => setPhase(voted ? "result" : "choice"), 500);
      return () => clearTimeout(t);
    }
    const ch = QUESTION[typed];
    const pause = ch === "T" && QUESTION.slice(typed, typed + 4) === "TURN" ? 380 : ch === "?" ? 520 : 0;
    const t = setTimeout(() => setTyped((n) => n + 1), TYPE_MS + pause + Math.random() * 60);
    return () => clearTimeout(t);
  }, [phase, typed, voted]);

  async function vote(choice: Choice) {
    if (phase !== "choice") return;
    setPhase("sending");
    try {
      const r = await fetch("/api/out-of-frame/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ choice, token: token.current, website: honeypot.current?.value ?? "" }),
      });
      const d = await r.json();
      if (d.stats) setStats(d.stats);
      setVoted(d.voted ?? choice);
      if (r.status === 429) setNotice("Too many answers from this connection. Your choice was not counted.");
      if (r.status === 403) setNotice("Your answer could not be counted.");
    } catch {
      setVoted(choice);
      setNotice("Connection lost. Your answer could not be counted.");
    }
    setPhase("result");
  }

  const done = phase === "result";

  return (
    <main className={styles.stage}>
      {phase === "flash" && (
        <div className={styles.tv} aria-hidden="true">
          {/* Canaux séparés pour l'aberration chromatique (rouge / cyan en mode écran). */}
          <svg width="0" height="0" className={styles.defs}>
            <filter id="oof-red">
              <feColorMatrix type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" />
            </filter>
            <filter id="oof-cyan">
              <feColorMatrix type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" />
            </filter>
          </svg>
          <div className={styles.screen}>
            <div className={styles.picture}>
              <div className={`${styles.img} ${styles.cyan}`} />
              <div className={`${styles.img} ${styles.red}`} />
              <div className={`${styles.img} ${styles.tear} ${styles.tearA}`} />
              <div className={`${styles.img} ${styles.tear} ${styles.tearB}`} />
            </div>
            <canvas ref={noise} className={styles.noise} width={160} height={90} />
            <div className={styles.roll} />
          </div>
        </div>
      )}

      {phase !== "flash" && (
        <section className={styles.panel} aria-live="polite">
          <h1 className={styles.question} aria-label={QUESTION}>
            <span aria-hidden="true">{QUESTION.slice(0, typed)}</span>
            {phase === "typing" && <span className={styles.cursor} aria-hidden="true" />}
          </h1>

          {(phase === "choice" || phase === "sending") && (
            <div className={styles.choices}>
              <input ref={honeypot} className={styles.trap} name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <button type="button" className={styles.choice} onClick={() => vote("yes")} disabled={phase === "sending"}>
                YES
              </button>
              <span className={styles.slash} aria-hidden="true">/</span>
              <button type="button" className={styles.choice} onClick={() => vote("no")} disabled={phase === "sending"}>
                NO
              </button>
            </div>
          )}

          {done && (
            <div className={styles.result}>
              {voted && <p className={styles.yourChoice}>You answered {voted === "yes" ? "YES" : "NO"}.</p>}
              {notice && <p className={styles.notice}>{notice}</p>}
              {stats && (
                <div className={styles.stats}>
                  <p className={styles.statsTitle}>What the others chose</p>
                  {(["yes", "no"] as const).map((k) => (
                    <div key={k} className={styles.row}>
                      <span className={styles.label}>{k.toUpperCase()}</span>
                      <span className={styles.bar}>
                        <span className={styles.fill} style={{ width: `${pct(stats[k], stats.total)}%` }} />
                      </span>
                      <span className={styles.value}>{pct(stats[k], stats.total)}%</span>
                    </div>
                  ))}
                  <p className={styles.total}>
                    {stats.total.toLocaleString("en-US")} {stats.total === 1 ? "answer" : "answers"}
                  </p>
                </div>
              )}
            </div>
          )}
        </section>
      )}
    </main>
  );
}
