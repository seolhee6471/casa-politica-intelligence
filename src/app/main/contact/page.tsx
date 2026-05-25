"use client";

import { ContactSection } from "@/components/sections";
import { useLocaleMessage } from "@/i18n";

export default function ContactPage() {
  const { $localeMessage } = useLocaleMessage();

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12">
      <h1 className="heading text-3xl text-brand-navy">
        {$localeMessage("contact.title")}
      </h1>
      <ContactSection />
    </div>
  );
}
