import { getLangFromUrl, useTranslations } from "./utils";
import type { AstroGlobal } from "astro";

export function initTranslations(Astro: AstroGlobal) {
  const lang = getLangFromUrl(Astro.url);
  const t = useTranslations(lang);
  return { lang, t };
}
