"use client";

import { defaultLocale } from "@/locales";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { $localeMessage as resolveLocaleMessage } from "./localeMessage";
import type {
  Locale,
  LocaleMessageKey,
  LocaleMessageParams,
} from "./types";

const STORAGE_KEY = "casa-politica-locale";

function readStoredLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "en" || stored === "kr" ? stored : defaultLocale;
  } catch {
    return defaultLocale;
  }
}

function persistLocale(locale: Locale) {
  try {
    localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale === "kr" ? "ko" : "en";
  } catch {
    document.documentElement.lang = locale === "kr" ? "ko" : "en";
  }
}

type LocaleMessageFn = (
  key: LocaleMessageKey,
  params?: LocaleMessageParams,
) => string;

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  $localeMessage: LocaleMessageFn;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

type LocaleProviderProps = {
  children: ReactNode;
};

export function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  // Restore stored locale after hydration to avoid SSR/client mismatches.
  useEffect(() => {
    const stored = readStoredLocale();
    document.documentElement.lang = stored === "kr" ? "ko" : "en";
    // eslint-disable-next-line react-hooks/set-state-in-effect -- post-hydration locale restore
    setLocaleState(stored);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    persistLocale(next);
  }, []);

  const $localeMessage = useCallback<LocaleMessageFn>(
    (key, params) => resolveLocaleMessage(key, { locale, params }),
    [locale],
  );

  const value = useMemo(
    () => ({ locale, setLocale, $localeMessage }),
    [locale, setLocale, $localeMessage],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocaleContext() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocaleContext must be used within LocaleProvider");
  }
  return context;
}
