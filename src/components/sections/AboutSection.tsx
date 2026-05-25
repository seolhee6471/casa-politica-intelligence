"use client";

import { useLocaleMessage } from "@/i18n";

export function AboutSection() {
  const { $localeMessage } = useLocaleMessage();

  return (
    <section className="space-y-4 text-zinc-600 dark:text-zinc-400">
      <p>{$localeMessage("about.paragraph1")}</p>
    </section>
  );
}
