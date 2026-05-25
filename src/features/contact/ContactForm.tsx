"use client";

import { useState, type FormEvent } from "react";
import { Button, Input } from "@/components/common";
import { useLocaleMessage } from "@/i18n";

export function ContactForm() {
  const { $localeMessage } = useLocaleMessage();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
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
      <Button
        type="submit"
        className="w-full rounded-full py-3 sm:w-auto"
        disabled={status === "sending"}
      >
        {status === "sending"
          ? $localeMessage("contact.form.sending")
          : $localeMessage("contact.form.submit")}
      </Button>
      {status === "success" ? (
        <p className="text-sm font-medium text-emerald-600">
          {$localeMessage("contact.form.success")}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm font-medium text-red-500">
          {$localeMessage("contact.form.error")}
        </p>
      ) : null}
    </form>
  );
}
