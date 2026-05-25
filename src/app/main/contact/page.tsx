"use client";

import { ContactSection } from "@/components/sections";
import { useLocaleMessage } from "@/i18n";

export default function ContactPage() {
  const { $localeMessage } = useLocaleMessage();

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
      <h1 className="heading text-2xl text-brand-navy sm:text-3xl">
        {$localeMessage("contact.title")}
      </h1>
      <ContactSection />
    </div>
  );
}
