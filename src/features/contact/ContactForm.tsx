"use client";

import { useState, type FormEvent } from "react";
import { Button, Input } from "@/components/common";
import { useLocaleMessage } from "@/i18n";

export function ContactForm() {
  const { $localeMessage } = useLocaleMessage();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const isSending = status === "sending";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className="flex w-full max-w-md flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <Input
        label={$localeMessage("contact.form.name")}
        name="name"
        placeholder={$localeMessage("contact.form.namePlaceholder")}
        disabled={isSending}
        required
      />
      <Input
        label={$localeMessage("contact.form.email")}
        name="email"
        type="email"
        placeholder="email@example.com"
        disabled={isSending}
        required
      />
      <Input
        label={$localeMessage("contact.form.subject")}
        name="subject"
        placeholder={$localeMessage("contact.form.subjectPlaceholder")}
        disabled={isSending}
        required
      />
      <textarea
        name="message"
        placeholder={$localeMessage("contact.form.message")}
        rows={5}
        disabled={isSending}
        required
        className="min-h-40 rounded-lg border border-slate-300 bg-transparent px-4 py-3 text-base outline-none transition-colors placeholder:text-slate-400 focus:border-brand-navy disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500 sm:text-sm"
      />
      <Button
        type="submit"
        className="min-h-12 w-full gap-2 rounded-full py-3.5 text-[15px] disabled:opacity-90 sm:w-auto"
        disabled={isSending}
      >
        {isSending ? (
          <span
            className="h-4 w-4 animate-spin rounded-full border-2 border-white/35 border-t-white"
            aria-hidden
          />
        ) : null}
        {isSending
          ? $localeMessage("contact.form.sending")
          : $localeMessage("contact.form.submit")}
      </Button>
      <div aria-live="polite" className="min-h-14">
        {status === "sending" ? (
          <p className="rounded-2xl border border-brand-gold/25 bg-brand-gold/10 px-4 py-3 text-sm font-semibold text-brand-navy">
            {$localeMessage("contact.form.sending")}
          </p>
        ) : null}
        {status === "success" ? (
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
            {$localeMessage("contact.form.success")}
          </p>
        ) : null}
        {status === "error" ? (
          <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
            {$localeMessage("contact.form.error")}
          </p>
        ) : null}
      </div>
    </form>
  );
}
