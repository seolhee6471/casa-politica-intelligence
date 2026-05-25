"use client";

import { useLocaleMessage } from "@/i18n";

export function HeroSection() {
  const { $localeMessage } = useLocaleMessage();

  return (
    <section className="mb-12">
      <h1 className="heading text-3xl text-brand-navy">
        {$localeMessage("home.title")}
      </h1>
      <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
        {$localeMessage("home.description")}
      </p>
    </section>
  );
}
