"use client";

import { MobileReveal } from "@/components/ui/MobileReveal";
import { useLocaleMessage } from "@/i18n";
import Image from "next/image";

const tags = [
  "about.tags.strategy",
  "about.tags.data",
  "about.tags.trust",
  "about.tags.infrastructure",
] as const;

export function AboutSection() {
  const { $localeMessage } = useLocaleMessage();

  return (
    <section className="mx-auto max-w-6xl">
      <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <MobileReveal variant="zoom-in" className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="relative min-h-[22rem] overflow-hidden rounded-[1.5rem] sm:min-h-[25rem]">
            <Image
              src="/images/casapolitica.jpg"
              alt="Casa Politica Intelligence"
              fill
              sizes="(min-width: 1024px) 420px, (min-width: 640px) 448px, 100vw"
              className="object-contain sm:object-cover"
              priority
            />
          </div>
        </MobileReveal>

        <MobileReveal delayMs={100} className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-brand-gold">
            {$localeMessage("about.eyebrow")}
          </p>
          <h1 className="heading mt-5 break-keep text-4xl leading-tight text-brand-navy sm:text-5xl">
            {$localeMessage("about.title")}
          </h1>
          <p className="mt-6 text-base leading-8 text-slate-600">
            {$localeMessage("about.subtitle")}
          </p>
          <p className="mt-5 text-sm leading-7 text-slate-500">
            {$localeMessage("about.paragraph1")}
          </p>
          <p className="mt-5 text-sm leading-7 text-slate-500">
            {$localeMessage("about.paragraph2")}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {tags.map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-3 border-t border-slate-200 pt-3 text-sm font-medium text-slate-600"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                {$localeMessage(tag)}
              </div>
            ))}
          </div>
        </MobileReveal>
      </div>
    </section>
  );
}
