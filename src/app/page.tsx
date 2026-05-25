"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import {
  Children,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useLocaleMessage } from "@/i18n";
import type { LocaleMessageKey } from "@/i18n";
import type { InsightChartVariant } from "@/components/charts/InsightHighchart";

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
    visual: "election",
  },
  {
    categoryKey: "home.insight.cards.media.category",
    titleKey: "home.insight.cards.media.title",
    value: "12h",
    textKey: "home.insight.cards.media.text",
    visual: "media",
  },
  {
    categoryKey: "home.insight.cards.risk.category",
    titleKey: "home.insight.cards.risk.title",
    value: "4 nodes",
    textKey: "home.insight.cards.risk.text",
    visual: "risk",
  },
] as const;

const InsightHighchart = dynamic(
  () =>
    import("@/components/charts/InsightHighchart").then(
      (mod) => mod.InsightHighchart,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full animate-pulse bg-[linear-gradient(135deg,#001F5C,#0A327E)]" />
    ),
  },
);

const companyKeywords = [
  {
    label: "Trust",
    textKey: "home.company.keywordTexts.trust",
  },
  {
    label: "Real-time",
    textKey: "home.company.keywordTexts.realTime",
  },
  {
    label: "Intelligence",
    textKey: "home.company.keywordTexts.intelligence",
  },
  {
    label: "Transparency",
    textKey: "home.company.keywordTexts.transparency",
  },
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
      <h2 className="heading whitespace-pre-line break-keep text-2xl text-brand-navy md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-slate-600 md:mt-5 md:text-base md:leading-8">
        {description}
      </p>
    </div>
  );
}

function MobileSnapSlider({
  children,
  className,
  itemLabel,
  tone = "light",
}: {
  children: ReactNode;
  className: string;
  itemLabel: string;
  tone?: "light" | "dark";
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const items = Children.toArray(children);

  function updateActiveIndex() {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const childElements = Array.from(scroller.children) as HTMLElement[];
    const scrollerCenter = scroller.scrollLeft + scroller.clientWidth / 2;

    const nextIndex = childElements.reduce((closestIndex, child, index) => {
      const currentChild = childElements[closestIndex];
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const currentCenter =
        currentChild.offsetLeft + currentChild.offsetWidth / 2;

      return Math.abs(childCenter - scrollerCenter) <
        Math.abs(currentCenter - scrollerCenter)
        ? index
        : closestIndex;
    }, 0);

    setActiveIndex(nextIndex);
  }

  function scrollToIndex(index: number) {
    const target = scrollerRef.current?.children[index] as
      | HTMLElement
      | undefined;

    target?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <div>
      <div
        ref={scrollerRef}
        onScroll={updateActiveIndex}
        className={`no-scrollbar scroll-smooth ${className}`}
      >
        {items}
      </div>
      <div
        className="mt-4 flex justify-center gap-2 md:hidden"
        aria-label={`${itemLabel} slides`}
      >
        {items.map((_, index) => (
          <button
            key={`${itemLabel}-${index}`}
            type="button"
            onClick={() => scrollToIndex(index)}
            className={`h-2 rounded-full transition-all ${
              activeIndex === index
                ? "w-6 bg-brand-gold"
                : tone === "dark"
                  ? "w-2 bg-white/30"
                  : "w-2 bg-slate-300"
            }`}
            aria-label={`Go to ${itemLabel} ${index + 1}`}
            aria-current={activeIndex === index ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}

function InsightVisual({
  variant,
}: {
  variant: (typeof insightCards)[number]["visual"];
}) {
  return <InsightHighchart variant={variant as InsightChartVariant} />;
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
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:py-32">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-brand-gold/30 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-gold shadow-sm sm:mb-5 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.28em]">
              {t("home.hero.eyebrow")}
            </p>
            <h1 className="heading text-4xl font-extrabold leading-[1.05] text-brand-navy sm:text-5xl md:text-7xl md:leading-[1.03]">
              {t("home.hero.headlineLine1")}
              <br />
              {t("home.hero.headlineLine2")}
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#4A5568] sm:text-[16px] sm:leading-8 md:text-[17px]">
              {t("home.hero.description")}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
              <Link
                href="/main/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-brand-navy px-7 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/15 transition hover:-translate-y-0.5 hover:bg-[#052a74] sm:w-auto"
              >
                {t("home.hero.primaryCta")}
              </Link>
              <Link
                href="#solution"
                className="inline-flex w-full items-center justify-center rounded-full border border-brand-gold px-7 py-3 text-sm font-bold text-brand-navy transition hover:-translate-y-0.5 hover:bg-brand-gold/10 sm:w-auto"
              >
                {t("home.hero.secondaryCta")}
              </Link>
            </div>
          </div>

          <div className="pulse-dashboard group">
            <div className="rounded-[1.5rem] bg-brand-navy p-4 text-white sm:rounded-[2rem] sm:p-6">
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
                className="mt-6 h-36 w-full sm:mt-8 sm:h-48"
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
                    className="rounded-2xl border border-white/10 bg-white/5 p-3 transition-transform duration-500 group-hover:-translate-y-1 sm:p-4"
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

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-24">
        <SectionHeading
          eyebrow={t("home.painGain.eyebrow")}
          title={t("home.painGain.title")}
          description={t("home.painGain.description")}
        />
        <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm sm:rounded-[2rem]">
          <div className="hidden bg-slate-50 text-sm font-bold text-brand-navy md:grid md:grid-cols-[0.6fr_1fr_1fr]">
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
              className="grid gap-3 border-t border-slate-100 p-4 text-sm md:grid-cols-[0.6fr_1fr_1fr] md:gap-0 md:p-0"
            >
              <div className="bg-white font-bold text-brand-navy md:p-5">
                {t(item.labelKey)}
              </div>
              <div className="rounded-xl bg-slate-50 p-4 text-slate-500 md:rounded-none md:border-l md:bg-white md:p-5">
                <span className="mb-1 block text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400 md:hidden">
                  {t("home.painGain.headers.legacy")}
                </span>
                {t(item.legacyKey)}
              </div>
              <div className="rounded-xl bg-brand-navy/5 p-4 font-semibold text-brand-navy md:rounded-none md:border-l md:bg-white md:p-5">
                <span className="mb-1 block text-[11px] font-bold uppercase tracking-[0.16em] text-brand-gold md:hidden">
                  {t("home.painGain.headers.casa")}
                </span>
                {t(item.casaKey)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="solution" className="bg-[#f7f8fb] px-4 py-14 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t("home.solution.eyebrow")}
            title={t("home.solution.title")}
            description={t("home.solution.description")}
          />
          <div className="relative">
            <div className="absolute left-[10%] right-[10%] top-10 hidden h-px bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent lg:block" />
            <MobileSnapSlider
              itemLabel="solution step"
              className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-1 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-5"
            >
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
            </MobileSnapSlider>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-24">
        <SectionHeading
          eyebrow={t("home.technology.eyebrow")}
          title={t("home.technology.title")}
          description={t("home.technology.description")}
        />
        <MobileSnapSlider
          itemLabel="technology card"
          className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-1 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4"
        >
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
        </MobileSnapSlider>
      </section>

      <section className="bg-brand-navy px-4 py-14 text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-brand-gold">
              {t("home.product.eyebrow")}
            </p>
            <h2 className="heading text-2xl text-white md:text-5xl">
              {t("home.product.title")}
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/65 md:mt-5 md:text-base md:leading-8">
              {t("home.product.description")}
            </p>
          </div>
          <MobileSnapSlider
            itemLabel="product card"
            tone="dark"
            className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-1 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0"
          >
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
          </MobileSnapSlider>
        </div>
      </section>

      <section id="insight" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-24">
        <SectionHeading
          eyebrow={t("home.insight.eyebrow")}
          title={t("home.insight.title")}
          description={t("home.insight.description")}
        />
        <MobileSnapSlider
          itemLabel="insight card"
          className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-1 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0"
        >
          {insightCards.map((card) => (
            <article
              key={card.titleKey}
              className="group min-w-[82vw] snap-start overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-[5px] hover:shadow-xl hover:shadow-blue-950/5 md:min-w-0 md:rounded-[1.75rem]"
            >
              <div className="relative isolate h-40 overflow-hidden bg-brand-navy">
                <div className="absolute inset-0 transition duration-700 group-hover:scale-[1.02] group-hover:saturate-110">
                  <InsightVisual variant={card.visual} />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(201,164,75,0.22),transparent_32%)] opacity-70 transition duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-gold/80 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
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
        </MobileSnapSlider>
      </section>

      <section className="px-4 pb-14 sm:px-6 md:pb-24" id="company">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[1.5rem] bg-brand-navy md:grid-cols-[0.9fr_1.1fr] md:rounded-[2rem]">
          <div className="p-7 text-white sm:p-10 md:p-14">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-brand-gold">
              {t("home.company.eyebrow")}
            </p>
            <h2 className="heading mt-5 whitespace-pre-line break-keep text-2xl leading-tight sm:text-4xl md:text-5xl">
              {t("home.company.title")}
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/70 sm:mt-6 sm:text-base sm:leading-8">
              {t("home.company.description")}
            </p>
          </div>
          <div className="grid gap-px bg-white/10 p-px md:grid-cols-2">
            {companyKeywords.map((keyword) => (
              <div key={keyword.label} className="bg-brand-navy p-6 sm:p-8">
                <p className="heading text-2xl text-brand-gold sm:text-3xl">
                  {keyword.label}
                </p>
                <p className="mt-4 text-sm leading-7 text-white/60">
                  {t(keyword.textKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-slate-100 bg-[#fbfbfd] px-4 py-16 sm:px-6 md:py-24">
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
            className="inline-flex w-full justify-center rounded-full bg-brand-navy px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/15 transition hover:-translate-y-0.5 hover:bg-[#052a74] hover:shadow-brand-gold/20 sm:w-auto"
          >
            {t("home.cta.button")}
          </Link>
        </div>
      </section>
    </main>
  );
}
