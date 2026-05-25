"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { imagePaths } from "@/assets/images";
import { useLocaleMessage } from "@/i18n";
import type { LocaleMessageKey } from "@/i18n";

const metrics = [
  {
    labelKey: "home.dashboard.metrics.events",
    value: 28.4,
    suffix: "M",
    decimals: 1,
    change: "+12.8%",
  },
  {
    labelKey: "home.dashboard.metrics.confidence",
    value: 94.2,
    suffix: "%",
    decimals: 1,
    change: "+4.1%",
  },
  {
    labelKey: "home.dashboard.metrics.speed",
    value: 3.7,
    suffix: "s",
    decimals: 1,
    change: "-68%",
  },
] as const;

const comparisons = [
  {
    labelKey: "home.painGain.rows.responseRate.label",
    legacyKey: "home.painGain.rows.responseRate.legacy",
    casaKey: "home.painGain.rows.responseRate.casa",
  },
  {
    labelKey: "home.painGain.rows.speed.label",
    legacyKey: "home.painGain.rows.speed.legacy",
    casaKey: "home.painGain.rows.speed.casa",
  },
  {
    labelKey: "home.painGain.rows.distortion.label",
    legacyKey: "home.painGain.rows.distortion.legacy",
    casaKey: "home.painGain.rows.distortion.casa",
  },
  {
    labelKey: "home.painGain.rows.cost.label",
    legacyKey: "home.painGain.rows.cost.legacy",
    casaKey: "home.painGain.rows.cost.casa",
  },
  {
    labelKey: "home.painGain.rows.behavior.label",
    legacyKey: "home.painGain.rows.behavior.legacy",
    casaKey: "home.painGain.rows.behavior.casa",
  },
] as const;

const architecture = [
  {
    step: "01",
    titleKey: "home.solution.steps.collection.title",
    summaryKey: "home.solution.steps.collection.summary",
    textKey: "home.solution.steps.collection.text",
  },
  {
    step: "02",
    titleKey: "home.solution.steps.refinement.title",
    summaryKey: "home.solution.steps.refinement.summary",
    textKey: "home.solution.steps.refinement.text",
  },
  {
    step: "03",
    titleKey: "home.solution.steps.analysis.title",
    summaryKey: "home.solution.steps.analysis.summary",
    textKey: "home.solution.steps.analysis.text",
  },
  {
    step: "04",
    titleKey: "home.solution.steps.index.title",
    summaryKey: "home.solution.steps.index.summary",
    textKey: "home.solution.steps.index.text",
  },
  {
    step: "05",
    titleKey: "home.solution.steps.dashboard.title",
    summaryKey: "home.solution.steps.dashboard.summary",
    textKey: "home.solution.steps.dashboard.text",
  },
] as const;

const productCards = [
  {
    titleKey: "home.product.cards.insight.title",
    audienceKey: "home.product.cards.insight.audience",
    textKey: "home.product.cards.insight.text",
  },
  {
    titleKey: "home.product.cards.pulse.title",
    audienceKey: "home.product.cards.pulse.audience",
    textKey: "home.product.cards.pulse.text",
  },
  {
    titleKey: "home.product.cards.forecast.title",
    audienceKey: "home.product.cards.forecast.audience",
    textKey: "home.product.cards.forecast.text",
  },
] as const;

const technologyCards = [
  {
    titleKey: "home.technology.cards.nlp.title",
    textKey: "home.technology.cards.nlp.text",
  },
  {
    titleKey: "home.technology.cards.opinion.title",
    textKey: "home.technology.cards.opinion.text",
  },
  {
    titleKey: "home.technology.cards.predictive.title",
    textKey: "home.technology.cards.predictive.text",
  },
  {
    titleKey: "home.technology.cards.dashboard.title",
    textKey: "home.technology.cards.dashboard.text",
  },
] as const;

const insightCards = [
  {
    categoryKey: "home.insight.cards.election.category",
    titleKey: "home.insight.cards.election.title",
    value: "+38%",
    textKey: "home.insight.cards.election.text",
  },
  {
    categoryKey: "home.insight.cards.media.category",
    titleKey: "home.insight.cards.media.title",
    value: "12h",
    textKey: "home.insight.cards.media.text",
  },
  {
    categoryKey: "home.insight.cards.risk.category",
    titleKey: "home.insight.cards.risk.title",
    value: "4 nodes",
    textKey: "home.insight.cards.risk.text",
  },
] as const;

const companyKeywords = [
  "Trust",
  "Real-time",
  "Intelligence",
  "Transparency",
] as const;

function AnimatedNumber({
  value,
  suffix,
  decimals,
}: {
  value: number;
  suffix: string;
  decimals: number;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 42;

    function tick() {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(value * eased);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [value]);

  return (
    <>
      {current.toFixed(decimals)}
      {suffix}
    </>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-brand-gold">
        {eyebrow}
      </p>
      <h2 className="heading text-2xl text-brand-navy md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-slate-600 md:mt-5 md:text-base md:leading-8">
        {description}
      </p>
    </div>
  );
}

export default function HomePage() {
  const { $localeMessage } = useLocaleMessage();
  const t = (key: LocaleMessageKey) => $localeMessage(key);

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-x-0 top-0 -z-0 h-80 bg-[radial-gradient(circle_at_top_right,rgba(201,164,75,0.18),transparent_35%),linear-gradient(180deg,#f8fafc,transparent)]" />
        <svg
          className="pointer-events-none absolute right-0 top-0 h-[32rem] w-[38rem] translate-x-8 opacity-[0.07]"
          viewBox="0 0 640 520"
          aria-hidden
        >
          <g fill="none" stroke="#001F5C" strokeWidth="1.4">
            <path d="M72 92L172 148L282 82L392 178L548 112" />
            <path d="M110 284L226 214L356 292L492 232" />
            <path d="M172 148L226 214L282 82L356 292L392 178L492 232" />
            <path d="M80 412L226 214L376 410L548 112" />
          </g>
          <g fill="#C9A44B">
            {[72, 172, 282, 392, 548, 110, 226, 356, 492, 80, 376].map(
              (cx, index) => (
                <circle
                  key={`${cx}-${index}`}
                  className="particle-node origin-center"
                  cx={cx}
                  cy={[92, 148, 82, 178, 112, 284, 214, 292, 232, 412, 410][index]}
                  r={index % 3 === 0 ? 6 : 4}
                />
              ),
            )}
          </g>
        </svg>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:py-32">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-brand-gold/30 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-brand-gold shadow-sm">
              {t("home.hero.eyebrow")}
            </p>
            <h1 className="heading text-5xl font-extrabold leading-[1.03] text-brand-navy md:text-7xl">
              {t("home.hero.headlineLine1")}
              <br />
              {t("home.hero.headlineLine2")}
            </h1>
            <p className="mt-6 max-w-xl text-[16px] leading-8 text-[#4A5568] md:text-[17px]">
              {t("home.hero.description")}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/main/contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-navy px-7 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/15 transition hover:-translate-y-0.5 hover:bg-[#052a74]"
              >
                {t("home.hero.primaryCta")}
              </Link>
              <Link
                href="#solution"
                className="inline-flex items-center justify-center rounded-full border border-brand-gold px-7 py-3 text-sm font-bold text-brand-navy transition hover:-translate-y-0.5 hover:bg-brand-gold/10"
              >
                {t("home.hero.secondaryCta")}
              </Link>
            </div>
          </div>

          <div className="pulse-dashboard group rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_24px_80px_rgba(0,31,92,0.10)]">
            <div className="rounded-[1.5rem] bg-brand-navy p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/50">
                    {t("home.dashboard.eyebrow")}
                  </p>
                  <h2 className="heading mt-2 text-2xl">
                    {t("home.dashboard.title")}
                  </h2>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-200">
                  {t("home.dashboard.status")}
                </span>
              </div>
              <svg
                viewBox="0 0 420 180"
                className="mt-8 h-48 w-full"
                aria-hidden
              >
                <defs>
                  <linearGradient id="lineFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#C9A44B" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#C9A44B" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 150 C65 120 80 82 136 98 C190 114 210 42 270 58 C330 74 345 22 420 34 L420 180 L0 180 Z"
                  fill="url(#lineFill)"
                />
                <path
                  className="data-line transition-transform duration-500 group-hover:-translate-y-1"
                  d="M0 150 C65 120 80 82 136 98 C190 114 210 42 270 58 C330 74 345 22 420 34"
                  stroke="#C9A44B"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
                {[0, 70, 140, 210, 280, 350, 420].map((x) => (
                  <line
                    key={x}
                    x1={x}
                    x2={x}
                    y1="10"
                    y2="170"
                    stroke="rgba(255,255,255,0.08)"
                  />
                ))}
              </svg>
              <div className="grid gap-3 sm:grid-cols-3">
                {metrics.map((item) => (
                  <div
                    key={item.labelKey}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-transform duration-500 group-hover:-translate-y-1"
                  >
                    <p className="text-xs text-white/55">
                      {t(item.labelKey)}
                    </p>
                    <p className="data-number mt-2 text-2xl">
                      <AnimatedNumber
                        value={item.value}
                        suffix={item.suffix}
                        decimals={item.decimals}
                      />
                    </p>
                    <p className="mt-1 text-xs text-brand-gold">
                      {item.change}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <SectionHeading
          eyebrow={t("home.painGain.eyebrow")}
          title={t("home.painGain.title")}
          description={t("home.painGain.description")}
        />
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="grid bg-slate-50 text-sm font-bold text-brand-navy md:grid-cols-[0.6fr_1fr_1fr]">
            <div className="border-b border-slate-200 p-5 md:border-b-0 md:border-r">
              {t("home.painGain.headers.criteria")}
            </div>
            <div className="border-b border-slate-200 p-5 md:border-b-0 md:border-r">
              {t("home.painGain.headers.legacy")}
            </div>
            <div className="p-5">{t("home.painGain.headers.casa")}</div>
          </div>
          {comparisons.map((item) => (
            <div
              key={item.labelKey}
              className="grid border-t border-slate-100 text-sm md:grid-cols-[0.6fr_1fr_1fr]"
            >
              <div className="bg-white p-5 font-bold text-brand-navy">
                {t(item.labelKey)}
              </div>
              <div className="p-5 text-slate-500 md:border-l">
                {t(item.legacyKey)}
              </div>
              <div className="p-5 font-semibold text-brand-navy md:border-l">
                {t(item.casaKey)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="solution" className="bg-[#f7f8fb] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t("home.solution.eyebrow")}
            title={t("home.solution.title")}
            description={t("home.solution.description")}
          />
          <div className="relative">
            <div className="absolute left-[10%] right-[10%] top-10 hidden h-px bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent lg:block" />
            <div className="-mx-6 flex snap-x gap-4 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-5">
              {architecture.map((item) => (
                <article
                  key={item.titleKey}
                  tabIndex={0}
                  className="group relative min-w-[74vw] snap-start overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm outline-none transition hover:-translate-y-[5px] hover:border-brand-gold/40 hover:shadow-xl hover:shadow-blue-950/5 focus-visible:ring-2 focus-visible:ring-brand-gold/50 md:min-w-0 md:rounded-[1.75rem] md:p-6"
                >
                  <svg
                    className="pointer-events-none absolute -right-10 top-7 h-36 w-44 opacity-[0.06]"
                    viewBox="0 0 220 180"
                    aria-hidden
                  >
                    <path
                      d="M26 138h168M44 138V74h28v64M96 138V54h28v84M148 138V86h28v52M32 74h154L109 24 32 74Z"
                      fill="none"
                      stroke="#001F5C"
                      strokeWidth="3"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M54 102h110M164 102l-18-18M164 102l-18 18"
                      fill="none"
                      stroke="#C9A44B"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="data-number relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/30 bg-white text-lg text-brand-gold shadow-sm">
                    {item.step}
                  </span>
                  <h3 className="heading relative mt-6 text-lg text-brand-navy">
                    {t(item.titleKey)}
                  </h3>
                  <p className="relative mt-3 text-sm leading-6 text-slate-600">
                    {t(item.summaryKey)}
                  </p>
                  <div className="relative mt-6 h-px w-12 bg-brand-gold/50 transition-all duration-300 group-hover:w-20 group-hover:bg-brand-gold" />
                </article>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-slate-400 md:hidden">
              Swipe to explore the process
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <SectionHeading
          eyebrow={t("home.technology.eyebrow")}
          title={t("home.technology.title")}
          description={t("home.technology.description")}
        />
        <div className="-mx-6 flex snap-x gap-4 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4">
          {technologyCards.map((item) => (
            <article
              key={item.titleKey}
              className="min-w-[78vw] snap-start rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-[5px] hover:shadow-xl hover:shadow-blue-950/5 md:min-w-0 md:p-7"
            >
              <div className="mb-6 h-1 w-10 rounded-full bg-brand-gold" />
              <h3 className="heading text-xl text-brand-navy">
                {t(item.titleKey)}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {t(item.textKey)}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand-navy px-6 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-brand-gold">
              {t("home.product.eyebrow")}
            </p>
            <h2 className="heading text-3xl text-white md:text-5xl">
              {t("home.product.title")}
            </h2>
            <p className="mt-5 text-base leading-8 text-white/65">
              {t("home.product.description")}
            </p>
          </div>
          <div className="-mx-6 flex snap-x gap-4 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
            {productCards.map((item) => (
              <article
                key={item.titleKey}
                className="min-w-[78vw] snap-start rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-[5px] hover:bg-white/[0.07] md:min-w-0 md:rounded-[1.75rem] md:p-8"
              >
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">
                  {t(item.audienceKey)}
                </p>
                <h3 className="heading text-2xl text-white">
                  {t(item.titleKey)}
                </h3>
                <p className="mt-5 leading-7 text-white/65">
                  {t(item.textKey)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="insight" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <SectionHeading
          eyebrow={t("home.insight.eyebrow")}
          title={t("home.insight.title")}
          description={t("home.insight.description")}
        />
        <div className="-mx-6 flex snap-x gap-4 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
          {insightCards.map((card) => (
            <article
              key={card.titleKey}
              className="group min-w-[82vw] snap-start overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-[5px] hover:shadow-xl hover:shadow-blue-950/5 md:min-w-0 md:rounded-[1.75rem]"
            >
              <div className="relative h-40 overflow-hidden bg-brand-navy">
                <Image
                  src={imagePaths.dataFlow}
                  alt={t(card.titleKey)}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover opacity-35 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-45"
                />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,31,92,0.88),rgba(0,31,92,0.28)),radial-gradient(circle_at_80%_20%,rgba(201,164,75,0.45),transparent_34%)]" />
                <svg
                  className="absolute inset-x-6 bottom-5 h-16 w-[calc(100%-3rem)]"
                  viewBox="0 0 260 72"
                  aria-hidden
                >
                  <path
                    d="M0 56C34 46 44 20 78 31C111 42 119 16 152 23C190 31 203 8 260 13"
                    fill="none"
                    stroke="#C9A44B"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0 56C34 46 44 20 78 31C111 42 119 16 152 23C190 31 203 8 260 13L260 72H0Z"
                    fill="rgba(201,164,75,0.18)"
                  />
                </svg>
              </div>
              <div className="p-7">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-brand-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">
                    {t(card.categoryKey)}
                  </span>
                  <span className="data-number text-3xl text-brand-navy">
                    {card.value}
                  </span>
                </div>
                <h3 className="heading mt-8 text-xl text-brand-navy">
                  {t(card.titleKey)}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {t(card.textKey)}
                </p>
                <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-2/3 rounded-full bg-brand-gold transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-16 md:pb-24" id="company">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-brand-navy md:grid-cols-[0.9fr_1.1fr]">
          <div className="p-10 text-white md:p-14">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-brand-gold">
              {t("home.company.eyebrow")}
            </p>
            <h2 className="heading mt-5 text-4xl leading-tight md:text-5xl">
              {t("home.company.title")}
            </h2>
            <p className="mt-6 leading-8 text-white/70">
              {t("home.company.description")}
            </p>
          </div>
          <div className="grid gap-px bg-white/10 p-px md:grid-cols-2">
            {companyKeywords.map((keyword) => (
              <div key={keyword} className="bg-brand-navy p-8">
                <p className="heading text-3xl text-brand-gold">{keyword}</p>
                <p className="mt-4 text-sm leading-7 text-white/60">
                  {t("home.company.keywordText")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-slate-100 bg-[#fbfbfd] px-6 py-24">
        <div className="absolute left-1/2 top-0 h-px w-[min(70rem,90vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className="absolute right-[-8rem] top-[-8rem] h-80 w-80 rounded-full bg-brand-gold/10 blur-3xl" />
        <div className="absolute bottom-0 left-[-10rem] h-72 w-72 rounded-full bg-brand-navy/5 blur-3xl" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-brand-gold">
              {t("home.cta.eyebrow")}
            </p>
            <h2 className="heading mt-4 max-w-xl break-keep text-2xl text-brand-navy md:text-3xl">
              {t("home.cta.title")}
            </h2>
            <div className="mt-6 h-px w-20 bg-brand-gold" />
          </div>
          <Link
            href="/main/contact"
            className="inline-flex rounded-full bg-brand-navy px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/15 transition hover:-translate-y-0.5 hover:bg-[#052a74] hover:shadow-brand-gold/20"
          >
            {t("home.cta.button")}
          </Link>
        </div>
      </section>
    </main>
  );
}
