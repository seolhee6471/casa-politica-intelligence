import { defaultLocale, getTranslations } from "@/locales";
import type {
  Locale,
  LocaleMessageKey,
  LocaleMessageParams,
} from "./types";

function getByPath(
  messages: Record<string, unknown>,
  path: string,
): unknown {
  return path.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in acc) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, messages);
}

function interpolate(
  template: string,
  params?: LocaleMessageParams,
): string {
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, key: string) => {
    const value = params[key];
    return value !== undefined ? String(value) : `{${key}}`;
  });
}

export type LocaleMessageOptions = {
  locale?: Locale;
  params?: LocaleMessageParams;
};

/**
 * Resolve a message from locale files by dot-notation key.
 * @example $localeMessage("nav.home")
 * @example $localeMessage("common.rights", { params: { year: 2026 } })
 */
export function $localeMessage(
  key: LocaleMessageKey,
  options?: LocaleMessageOptions,
): string {
  const locale = options?.locale ?? defaultLocale;
  const messages = getTranslations(locale) as Record<string, unknown>;
  const value = getByPath(messages, key);

  if (typeof value !== "string") {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[i18n] Missing message: "${key}" (${locale})`);
    }
    return key;
  }

  return interpolate(value, options?.params);
}
