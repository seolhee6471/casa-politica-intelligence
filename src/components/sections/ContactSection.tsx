"use client";

import { ContactForm } from "@/features/contact";
import { useLocaleMessage } from "@/i18n";

export function ContactSection() {
  const { $localeMessage } = useLocaleMessage();

  return (
    <section>
      <p className="mb-8 text-zinc-600 dark:text-zinc-400">
        {$localeMessage("contact.description")}
      </p>
      <ContactForm />
    </section>
  );
}
