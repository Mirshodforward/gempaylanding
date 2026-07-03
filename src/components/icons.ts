// Hand-crafted inline SVG icon set — 24×24, drawn with `currentColor` so each
// icon inherits its parent colour (game accent / feature tint). Stroke-based,
// with a few filled details. These give Gempay a consistent icon language.

export type IconName =
  // brand / currency
  | "gem" | "coin" | "diamond" | "crown" | "fire" | "star" | "bolt"
  // games
  | "target" | "controller" | "sword" | "rocket" | "robot" | "ghost"
  // features / ui
  | "zap" | "shield" | "tag" | "wallet" | "refresh" | "card" | "lock"
  | "clock" | "globe" | "headset" | "telegram" | "code" | "key" | "layers"
  | "check" | "users"
  // misc ui
  | "play" | "arrow-right" | "arrow-down" | "sparkles" | "search" | "send";

export const ICONS: Record<IconName, string> = {
  // ── Brand / currency ───────────────────────────────────
  gem: `<path d="M6 3h12l3.5 5.5L12 21 2.5 8.5 6 3Z"/><path d="M2.6 8.6h18.8"/><path d="m9 3-2 5.5L12 21M15 3l2 5.5L12 21"/>`,
  coin: `<circle cx="12" cy="12" r="8.4"/><circle cx="12" cy="12" r="4.6"/><path d="M12 3.6v2.2M12 18.2v2.2"/>`,
  diamond: `<path d="M12 2.6 21 11l-9 10.4L3 11l9-8.4Z"/><path d="M3.4 11h17.2"/><path d="M8.3 2.6 6 11l6 10.4M15.7 2.6 18 11l-6 10.4"/>`,
  crown: `<path d="M4 17.5 2.7 7.4l5.3 3.6L12 4.3l4 6.7 5.3-3.6L20 17.5z"/><path d="M5 20.7h14"/>`,
  fire: `<path d="M12 2.5c1.6 3 .4 5-1 6.5C9.2 11 7 12.4 7 15.3a5 5 0 0 0 10 0c0-1.6-.7-3-1.6-4-.5 1-1.4 1.5-2.2 1.5 1.3-2.7.4-5.4-1.2-7.8Z"/>`,
  star: `<path d="M12 2.6l2.8 6.3 6.8.6-5.1 4.5 1.5 6.7L12 17.7 6 21.2l1.5-6.7L2.4 9.5l6.8-.6z" fill="currentColor" stroke="none"/>`,
  bolt: `<path d="M13 2 4 13.6h6.6L10 22l9-11.6h-6.6L13 2Z"/>`,

  // ── Games ──────────────────────────────────────────────
  target: `<circle cx="12" cy="12" r="8.4"/><circle cx="12" cy="12" r="4.4"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>`,
  controller: `<rect x="2.4" y="7" width="19.2" height="10" rx="5"/><path d="M7.4 10.6v2.8M6 12h2.8"/><circle cx="15.6" cy="11.4" r="1.05" fill="currentColor" stroke="none"/><circle cx="17.8" cy="13.4" r="1.05" fill="currentColor" stroke="none"/>`,
  sword: `<path d="M14.5 17.5 3 6V3h3l11.5 11.5"/><path d="m13 19 6-6"/><path d="m16 16 4 4"/><path d="m19 21 2-2"/>`,
  rocket: `<path d="M5 14c-1.2.9-1.8 2.5-1.8 4.8 2.3 0 3.9-.6 4.8-1.8"/><path d="M9 15l-3-3c1-4 3.6-7.6 8.4-9.2C15.6 6.4 13 9 9 10l3 3c-1 4-2.6 4-3 2Z"/><circle cx="14.5" cy="7.5" r="1.2"/>`,
  robot: `<rect x="4.4" y="8" width="15.2" height="11" rx="3"/><path d="M12 4v4M12 4h0"/><circle cx="12" cy="3.4" r="1.2" fill="currentColor" stroke="none"/><circle cx="9" cy="13" r="1.2" fill="currentColor" stroke="none"/><circle cx="15" cy="13" r="1.2" fill="currentColor" stroke="none"/><path d="M9.5 16h5"/>`,
  ghost: `<path d="M5 19V11a7 7 0 0 1 14 0v8l-2.3-1.6L14.5 19l-2.5-1.6L9.5 19l-2.2-1.6L5 19Z"/><circle cx="9.4" cy="10.5" r="1.1" fill="currentColor" stroke="none"/><circle cx="14.6" cy="10.5" r="1.1" fill="currentColor" stroke="none"/>`,

  // ── Features / UI ──────────────────────────────────────
  zap: `<path d="M13 2 4 13.6h6.6L10 22l9-11.6h-6.6L13 2Z"/>`,
  shield: `<path d="M12 2.4 4.8 5.4v5.6c0 4.5 3 7.7 7.2 9.2 4.2-1.5 7.2-4.7 7.2-9.2V5.4z"/><path d="m8.8 11.6 2.1 2.1L15.4 9"/>`,
  tag: `<path d="M3.6 12.6 11 5.2a2 2 0 0 1 1.4-.6h5a2 2 0 0 1 2 2v5a2 2 0 0 1-.6 1.4l-7.4 7.4a2 2 0 0 1-2.8 0l-5-5a2 2 0 0 1 0-2.8Z"/><circle cx="15.5" cy="8.5" r="1.3" fill="currentColor" stroke="none"/>`,
  wallet: `<rect x="3" y="6" width="18" height="13" rx="3"/><path d="M3 9.5h18"/><circle cx="16.5" cy="13.5" r="1.4" fill="currentColor" stroke="none"/><path d="M6 3.8h9.5a2 2 0 0 1 2 2V6"/>`,
  refresh: `<path d="M20 12a8 8 0 1 1-2.3-5.6"/><path d="M20 3.6V8h-4.4"/>`,
  card: `<rect x="2.6" y="5" width="18.8" height="14" rx="3"/><path d="M2.6 9.4h18.8"/><path d="M6 14.6h4M14.5 14.6h3.5"/>`,
  lock: `<rect x="4.6" y="10.4" width="14.8" height="10" rx="2.4"/><path d="M8 10.4V7.6a4 4 0 0 1 8 0v2.8"/><circle cx="12" cy="15.2" r="1.3" fill="currentColor" stroke="none"/>`,
  clock: `<circle cx="12" cy="12" r="8.4"/><path d="M12 7.6V12l3 2"/>`,
  globe: `<circle cx="12" cy="12" r="8.6"/><path d="M3.4 12h17.2"/><path d="M12 3.4c2.4 2.3 3.6 5.3 3.6 8.6S14.4 18.3 12 20.6C9.6 18.3 8.4 15.3 8.4 12S9.6 5.7 12 3.4Z"/>`,
  headset: `<path d="M4 13v-1a8 8 0 0 1 16 0v1"/><rect x="3" y="13" width="3.8" height="6.4" rx="1.6"/><rect x="17.2" y="13" width="3.8" height="6.4" rx="1.6"/><path d="M20 19.4v.6a3 3 0 0 1-3 3h-3"/>`,
  telegram: `<path d="M21.6 3.5 2.6 11c-.5.2-.5.9 0 1.1l4.7 1.5 1.8 5.7c.1.4.6.5.9.2l2.5-2.5 4.6 3.4c.3.3.8.1.9-.3l3.4-15c.1-.5-.4-1-.9-.8Z"/><path d="m7.3 13.6 9.6-6.4-7 7.6"/>`,
  code: `<path d="m8 8-5 4 5 4"/><path d="m16 8 5 4-5 4"/><path d="m13.5 5-3 14"/>`,
  key: `<circle cx="7.5" cy="15.5" r="4.1"/><path d="m10.4 12.6 8-8M15.6 7.4l2.2 2.2M18.4 4.6l2.2 2.2"/>`,
  layers: `<path d="M12 3 2.6 8 12 13l9.4-5L12 3Z"/><path d="m2.6 12.4 9.4 5 9.4-5"/>`,
  check: `<circle cx="12" cy="12" r="9"/><path d="m8.4 12.2 2.5 2.5 4.7-5"/>`,
  users: `<circle cx="9" cy="8" r="3.6"/><path d="M2.6 20c0-3.4 2.9-5.7 6.4-5.7S15.4 16.6 15.4 20"/><path d="M16.4 4.7a3.6 3.6 0 0 1 0 6.6"/><path d="M18 14.7c2.2.6 3.4 2.4 3.4 5.3"/>`,

  // ── Misc UI ────────────────────────────────────────────
  play: `<path d="M7 4.4 19.6 12 7 19.6z" fill="currentColor" stroke="none"/>`,
  "arrow-right": `<path d="M4.5 12h15M13.5 6l6 6-6 6"/>`,
  "arrow-down": `<path d="M12 4.5v15M6 13.5l6 6 6-6"/>`,
  sparkles: `<path d="M12 3l1.9 4.9 4.6 1.8-4.6 1.8L12 16.4l-1.9-4.9L5.5 9.7l4.6-1.8z"/><path d="m18.6 14 .9 2.3 2.3.9-2.3.9-.9 2.3-.9-2.3-2.3-.9 2.3-.9z"/>`,
  search: `<circle cx="10.5" cy="10.5" r="6.6"/><path d="M15.6 15.6 21 21"/>`,
  send: `<path d="M21.5 3.5 2.8 10.2c-.6.2-.6 1 0 1.2l7.5 2.3 2.3 7.5c.2.6 1 .6 1.2 0L21.5 3.5Z"/><path d="m10.3 13.7 4.4-4.4"/>`,
};
