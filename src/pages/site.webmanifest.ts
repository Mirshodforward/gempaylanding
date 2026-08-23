/**
 * PWA manifesti. Sayt ilova emas, lekin manifest baribir kerak:
 * Android'da «bosh ekranga qo'shish», to'g'ri ikonka va nom, hamda
 * Lighthouse'ning «Installable» tekshiruvi uchun.
 */

import type { APIRoute } from "astro";
import { ORG } from "../data/site";

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      name: `${ORG.name} — o'yin hisobini so'mda to'ldirish`,
      short_name: ORG.name,
      description:
        "PUBG UC, Mobile Legends olmosi, Free Fire va yana 7 xizmatni O'zbekiston so'mida to'ldiring.",
      start_url: "/",
      scope: "/",
      display: "standalone",
      background_color: "#070A14",
      theme_color: "#070A14",
      lang: "uz",
      dir: "ltr",
      categories: ["games", "finance", "shopping"],
      icons: [
        { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
        { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
        // `maskable` alohida fayl: Android ikonani kesadi, shuning uchun
        // logo atrofida kengroq bo'sh joy bo'lgan nusxa kerak.
        { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
      ],
    }),
    { headers: { "Content-Type": "application/manifest+json; charset=utf-8" } },
  );
