/**
 * robots.txt — barcha botlar uchun ochiq.
 *
 * AI kraulerlari ATAYLAB aniq nomlab ruxsat etilgan. Sabab: bir qancha
 * saytlar GPTBot/ClaudeBot'ni bloklaydi, shuning uchun ochiq ruxsat javob
 * mashinalari uchun kuchli, aniq signal beradi — bizning tarkib iqtibos
 * qilinishi mumkin. Bu AEO strategiyasining asosi: qidiruvda birinchi
 * o'rin qolgani bilan, foydalanuvchi javobni ChatGPT'dan olayotgan bo'lsa,
 * u yerda ko'rinmaslik — bozorni yo'qotish.
 *
 * `Host` — Yandex direktivasi, kanonik domenni ko'rsatadi.
 */

import type { APIRoute } from "astro";
import { SITE_URL, absoluteUrl } from "../data/site";

/** Javob mashinalari va qidiruv tizimlari kraulerlari. */
const BOTS = [
  // OpenAI
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "Claude-SearchBot",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Google
  "Googlebot",
  "Googlebot-Image",
  "Google-Extended",
  "GoogleOther",
  // Yandex — O'zbekistonda ikkinchi asosiy qidiruv
  "YandexBot",
  "YandexImages",
  // Boshqalar
  "Bingbot",
  "Applebot",
  "Applebot-Extended",
  "DuckDuckBot",
  "CCBot",
  "Amazonbot",
  "meta-externalagent",
  "Bytespider",
];

export const GET: APIRoute = () => {
  const lines = [
    "# gempay.uz — barcha qidiruv va AI kraulerlari uchun ochiq",
    "",
    "User-agent: *",
    "Allow: /",
    "",
    ...BOTS.flatMap((b) => [`User-agent: ${b}`, "Allow: /", ""]),
    `Sitemap: ${absoluteUrl("/sitemap.xml")}`,
    "",
    "# Javob mashinalari uchun qisqacha ko'rsatkich",
    `# LLM: ${absoluteUrl("/llms.txt")}`,
    "",
    "# Yandex uchun kanonik host",
    `Host: ${SITE_URL.replace(/^https?:\/\//, "")}`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
