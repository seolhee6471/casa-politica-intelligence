import en from "./en";
import kr from "./kr";

/** @typedef {"kr" | "en"} Locale */

export const locales = /** @type {const} */ ({ kr, en });

/** @type {Locale} */
export const defaultLocale = "en";

/**
 * @param {Locale} [locale]
 */
export function getTranslations(locale = defaultLocale) {
  return locales[locale] ?? locales[defaultLocale];
}
