"use client";

import { AboutSection } from "@/components/sections";
import { useLocaleMessage } from "@/i18n";

export default function AboutPage() {
  const { $localeMessage } = useLocaleMessage();

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12">
      <h1 className="heading text-3xl text-brand-navy">
        {$localeMessage("about.title")}
      </h1>
      <div className="mt-8">
        <AboutSection />
      </div>
    </div>
  );
}
