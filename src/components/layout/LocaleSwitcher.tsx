"use client";

import { useLocaleMessage } from "@/i18n/useLocaleMessage";
import type { Locale } from "@/i18n/types";

const options: { value: Locale; label: string }[] = [
  { value: "kr", label: "KR" },
  { value: "en", label: "EN" },
];

export function LocaleSwitcher() {
  const { locale, setLocale } = useLocaleMessage();

  return (
    <div
      role="group"
      aria-label="Language"
      className="relative z-50 flex h-8 shrink-0 items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1 font-sans text-[10px] font-semibold tracking-[0.04em] shadow-sm sm:h-9 sm:text-[11px]"
    >
      {options.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setLocale(value);
          }}
          className={`flex h-6 min-w-9 cursor-pointer items-center justify-center rounded-full px-2.5 transition-all sm:h-7 sm:min-w-11 sm:px-3 ${
            locale === value
              ? "bg-brand-navy text-white shadow-sm"
              : "text-slate-500 hover:bg-white hover:text-brand-navy"
          }`}
          aria-pressed={locale === value}
          aria-label={value === "kr" ? "한국어" : "English"}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
