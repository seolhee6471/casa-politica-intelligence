"use client";

import { useLocaleContext } from "./LocaleProvider";

/**
 * Client hook — returns `$localeMessage` bound to the active locale.
 * @example const { $localeMessage } = useLocaleMessage();
 * @example $localeMessage("nav.home")
 */
export function useLocaleMessage() {
  const { $localeMessage, locale, setLocale } = useLocaleContext();
  return { $localeMessage, locale, setLocale };
}
