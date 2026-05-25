"use client";

import { useLocaleMessage } from "@/i18n";

export function Footer() {
  const { $localeMessage } = useLocaleMessage();

  return (
    <footer className="border-t border-slate-200 bg-brand-navy px-6 py-10 text-center text-sm text-white/70">
      <span className="font-semibold text-white">
        {$localeMessage("common.siteName")}
      </span>{" "}
      © {new Date().getFullYear()}. {$localeMessage("common.rights")}
    </footer>
  );
}
