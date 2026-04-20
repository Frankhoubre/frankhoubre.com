import { agent, tool } from "@21st-sdk/agent";
import { z } from "zod";

const styleDirections = [
  {
    style: "Cinematic minimal",
    mood: "dark luxury, high contrast, controlled glow",
    usage: "hero, CTA, video-first sections",
  },
  {
    style: "Editorial motion",
    mood: "clean typography, progressive reveal, subtle depth",
    usage: "long-form pages, about, blog",
  },
  {
    style: "Premium glass",
    mood: "soft blur, fine borders, bright accents",
    usage: "cards, filters, tool listing pages",
  },
] as const;

export default agent({
  model: "claude-sonnet-4-6",
  systemPrompt:
    "You are a senior web art director. Propose cinematic, modern, conversion-aware UI directions with concise rationale.",
  tools: {
    suggestDirection: tool({
      description: "Suggest a visual direction for a page block.",
      inputSchema: z.object({
        page: z.string().min(1),
        section: z.string().min(1),
        goal: z.string().min(1),
      }),
      execute: async ({ page, section, goal }) => {
        const suggestion = styleDirections[0];
        return {
          content: [
            {
              type: "text" as const,
              text: [
                `Page: ${page}`,
                `Section: ${section}`,
                `Goal: ${goal}`,
                `Direction: ${suggestion.style}`,
                `Mood: ${suggestion.mood}`,
                `Usage: ${suggestion.usage}`,
              ].join("\n"),
            },
          ],
        };
      },
    }),
  },
});
