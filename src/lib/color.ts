/**
 * Rang yordamchilari.
 *
 * NEGA `--accent-rgb` alohida saqlanadi: CSS'da shaffoflik berish uchun
 * `rgba(R, G, B, .14)` kerak, `#7C5CFF` dan esa uni to'g'ridan-to'g'ri
 * yasab bo'lmaydi. Zamonaviy `color-mix()` buni hal qiladi, lekin eski
 * Android WebView va Telegram brauzerida u yo'q — o'sha yerda sahifa
 * rangsiz qolardi.
 */

/** `#7C5CFF` → `"124, 92, 255"` */
export function hexToRgb(hex: string): string {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(String(hex).trim());
  if (!m) return "124, 92, 255"; // brend binafshasi — zaxira
  return [m[1], m[2], m[3]].map((h) => parseInt(h, 16)).join(", ");
}
