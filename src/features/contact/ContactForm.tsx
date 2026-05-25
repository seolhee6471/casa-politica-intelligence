"use client";

import { Button, Input } from "@/components/common";
import { useLocaleMessage } from "@/i18n";

export function ContactForm() {
  const { $localeMessage } = useLocaleMessage();

  return (
    <form
      className="flex w-full max-w-md flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Input
        label={$localeMessage("contact.form.name")}
        name="name"
        placeholder={$localeMessage("contact.form.namePlaceholder")}
        required
      />
      <Input
        label={$localeMessage("contact.form.email")}
        name="email"
        type="email"
        placeholder="email@example.com"
        required
      />
      <Input
        label={$localeMessage("contact.form.subject")}
        name="subject"
        placeholder={$localeMessage("contact.form.subjectPlaceholder")}
        required
      />
      <textarea
        name="message"
        placeholder={$localeMessage("contact.form.message")}
        rows={5}
        required
        className="min-h-32 rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm outline-none transition-colors focus:border-brand-navy"
      />
      <Button type="submit" className="w-full rounded-full py-3 sm:w-auto">
        {$localeMessage("contact.form.submit")}
      </Button>
    </form>
  );
}
