"use client";

import { ContactForm } from "@/features/contact";
import { useLocaleMessage } from "@/i18n";

export function ContactSection() {
  const { $localeMessage } = useLocaleMessage();

  return (
    <section>
      <p className="mb-8 max-w-2xl text-base leading-8 text-slate-700">
        {$localeMessage("contact.description")}
      </p>
      <ContactForm />
    </section>
  );
}
