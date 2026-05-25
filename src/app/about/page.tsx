"use client";

import { AboutSection } from "@/components/sections";
import { useLocaleMessage } from "@/i18n";

export default function AboutPage() {
  const { $localeMessage } = useLocaleMessage();

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
      <h1 className="heading text-2xl text-brand-navy sm:text-3xl">
        {$localeMessage("about.title")}
      </h1>
      <div className="mt-8">
        <AboutSection />
      </div>
    </div>
  );
}
