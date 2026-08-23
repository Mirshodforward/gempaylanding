/**
 * RSS — blog uchun. Yandex Webmaster'ning Turbo/Feed kanallari va
 * agregatorlar shu orqali yangi maqolani tezroq ko'radi.
 *
 * Faqat o'zbekcha (asosiy til) maqolalar chiqadi: bitta feedda uch tilni
 * aralashtirsak, obunachi o'zi tushunmaydigan matnni oladi.
 */

import type { APIRoute } from "astro";
import { ARTICLES, contentFor, articlesFor } from "../data/blog";
import { ORG, absoluteUrl, localePath } from "../data/site";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** RFC-822 — RSS spetsifikatsiyasi aynan shu formatni talab qiladi. */
function rfc822(iso: string): string {
  return new Date(`${iso}T09:00:00Z`).toUTCString();
}

export const GET: APIRoute = () => {
  const posts = articlesFor("uz");
  const latest = posts[0]?.dateModified ?? "2026-08-23";

  const items = posts
    .map((a) => {
      const c = contentFor(a, "uz");
      if (!c) return "";
      const url = absoluteUrl(localePath("uz", `blog/${a.slug}`));
      return (
        `<item>` +
        `<title>${esc(c.title)}</title>` +
        `<link>${esc(url)}</link>` +
        `<guid isPermaLink="true">${esc(url)}</guid>` +
        `<description>${esc(c.excerpt)}</description>` +
        `<pubDate>${rfc822(a.datePublished)}</pubDate>` +
        a.keywords.map((k) => `<category>${esc(k)}</category>`).join("") +
        `</item>`
      );
    })
    .join("");

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">` +
    `<channel>` +
    `<title>${esc(ORG.name)} — blog</title>` +
    `<link>${esc(absoluteUrl(localePath("uz", "blog")))}</link>` +
    `<description>O'yin hisobini so'mda to'ldirish bo'yicha qo'llanmalar va yechimlar.</description>` +
    `<language>uz</language>` +
    `<lastBuildDate>${rfc822(latest)}</lastBuildDate>` +
    `<atom:link href="${esc(absoluteUrl("/rss.xml"))}" rel="self" type="application/rss+xml"/>` +
    items +
    `</channel></rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
};
