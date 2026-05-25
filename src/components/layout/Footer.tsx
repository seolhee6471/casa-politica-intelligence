"use client";

import { useLocaleMessage } from "@/i18n";

export function Footer() {
  const { $localeMessage } = useLocaleMessage();

  return (
    <footer className="border-t border-slate-200 bg-brand-navy px-4 py-8 text-center text-xs text-white/70 sm:px-6 sm:py-10 sm:text-sm">
      <span className="font-semibold text-white">
        {$localeMessage("common.siteName")}
      </span>{" "}
      © {new Date().getFullYear()}. {$localeMessage("common.rights")}
    </footer>
  );
}
