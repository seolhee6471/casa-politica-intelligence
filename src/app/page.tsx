"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Children, useEffect, useRef, useState, type ReactNode } from "react";
import heroBackground from "@/assets/images/background.jpg";
import { useLocaleMessage } from "@/i18n";
import type { LocaleMessageKey } from "@/i18n";
import {
  clearMobileHeroViewport,
  lockMobileHeroViewport,
} from "@/lib/heroViewport";
import { scrollElementIntoView } from "@/lib/scroll";
import type { InsightChartVariant } from "@/components/charts/InsightHighchart";

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

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-[clamp(2rem,5vw,3rem)] max-w-3xl text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-brand-gold">
        {eyebrow}
      </p>
      <h2 className="heading whitespace-pre-line break-keep text-2xl leading-tight text-brand-navy sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[15px] leading-7 text-slate-700 md:mt-5 md:text-base md:leading-8">
          {description}
        </p>
      ) : null}
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

    if (target) {
      scrollElementIntoView(target, { block: "nearest", inline: "center" });
    }
  }

  return (
    <div>
      <div
        ref={scrollerRef}
        onScroll={updateActiveIndex}
        className={`mobile-scroll-rail no-scrollbar md:scroll-smooth ${className}`}
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
            } cursor-pointer`}
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

function HeroVisualSpace() {
  return (
    <div className="pointer-events-none relative hidden min-h-[24rem] md:block lg:min-h-[30rem]" aria-hidden>
      <svg
        viewBox="0 0 760 520"
        className="absolute inset-y-0 right-[-6rem] h-full w-[146%] max-w-none overflow-visible lg:right-[-5rem] xl:w-[154%]"
      >
        <defs>
          <filter id="heroOverlayGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="heroOverlayInk" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#001F5C" stopOpacity="0.42" />
            <stop offset="100%" stopColor="#001F5C" stopOpacity="0.16" />
          </linearGradient>
          <linearGradient id="heroOverlayGold" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#F2D17A" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C9A44B" stopOpacity="0.32" />
          </linearGradient>
        </defs>

        <g
          fill="none"
          stroke="url(#heroOverlayInk)"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(0 -128)"
        >
          <path d="M70 150 172 96 294 146 420 76 582 132 720 82" strokeWidth="0.95" />
          <path d="M92 292 224 216 352 288 520 206 708 286" strokeWidth="0.9" />
          <path d="M172 96 224 216 294 146 352 288 420 76 520 206 582 132" strokeWidth="0.85" />
          <path d="M92 292 294 146 520 206 720 82" strokeWidth="0.78" strokeOpacity="0.5" />
          <path d="M70 150 224 216 420 76 582 132 708 286" strokeWidth="0.74" strokeOpacity="0.42" />
          <path d="M172 96 352 288 582 132" strokeWidth="0.7" strokeOpacity="0.4" />
          <path d="M78 430 224 216 418 426 582 132 708 286" strokeWidth="0.55" strokeOpacity="0.22" />
          <path d="M78 430 352 288 418 426 708 286" strokeWidth="0.5" strokeOpacity="0.18" />
        </g>

        <g transform="translate(0 -128)">
          {[
            [70, 150, 5],
            [172, 96, 8],
            [294, 146, 5],
            [420, 76, 6],
            [582, 132, 6],
            [720, 82, 5],
            [92, 292, 5],
            [224, 216, 7],
            [352, 288, 5],
            [520, 206, 6],
            [708, 286, 5],
            [78, 430, 5],
            [418, 426, 5],
          ].map(([cx, cy, r], index) => (
            <g key={`${cx}-${cy}`} filter={index % 2 === 0 ? "url(#heroOverlayGlow)" : undefined}>
              <circle cx={cx} cy={cy} r={r + 5} fill="#C9A44B" opacity="0.08" />
              <circle
                className="particle-node"
                cx={cx}
                cy={cy}
                r={r}
                fill={index % 3 === 0 ? "url(#heroOverlayGold)" : "#F7E4A3"}
                stroke="rgba(255,255,255,0.82)"
                strokeWidth="1.9"
              />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

export default function HomePage() {
  const { $localeMessage } = useLocaleMessage();
  const t = (key: LocaleMessageKey) => $localeMessage(key);

  useEffect(() => {
    lockMobileHeroViewport();
    window.addEventListener("orientationchange", lockMobileHeroViewport);

    return () => {
      window.removeEventListener("orientationchange", lockMobileHeroViewport);
      clearMobileHeroViewport();
    };
  }, []);

  const scrollToSolution = () => {
    const target = document.getElementById("solution");
    if (target) {
      scrollElementIntoView(target, { block: "start" });
      window.history.replaceState(null, "", "#solution");
      return;
    }
    window.location.hash = "solution";
  };

  return (
    <main className="bg-white">
      <section className="relative max-lg:min-h-[var(--hero-mobile-section-min,calc(100svh-4rem+2.5rem))] overflow-hidden border-b border-slate-100 bg-white lg:min-h-[calc(100dvh-5.25rem)]">
        <Image
          src={heroBackground}
          alt=""
          fill
          priority
          sizes="100vw"
          className="pointer-events-none object-cover object-[76%_center] sm:object-[68%_center] lg:object-center"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/80 via-white/55 to-white/15 sm:from-white/90 sm:via-white/65 sm:to-white/10 lg:from-white lg:via-white/70 lg:to-white/5" />
        <div className="pointer-events-none absolute inset-y-0 left-[44%] hidden lg:block">
          <Image
            src={heroBackground}
            alt=""
            fill
            sizes="(min-width: 1024px) 56vw, 0vw"
            className="object-cover object-right opacity-55 [mask-image:linear-gradient(to_left,black_0%,black_58%,transparent_92%)]"
            aria-hidden
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_62%,rgba(201,164,75,0.22),transparent_45%)]" />
        </div>
        <div className="relative mx-auto grid max-lg:min-h-[var(--hero-mobile-content-min,calc(100svh-4rem))] max-w-7xl items-center gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-16 md:grid-cols-[1.16fr_0.84fr] md:gap-14 md:py-24 lg:min-h-[calc(100dvh-5.25rem)] lg:grid-cols-[1.24fr_0.76fr] xl:grid-cols-[1.3fr_0.7fr]">
          <div className="relative z-10 lg:max-w-none">
            <p className="mb-4 inline-flex rounded-full border border-brand-gold/30 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-gold shadow-sm sm:mb-5 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.28em]">
              {t("home.hero.eyebrow")}
            </p>
            <h1 className="heading text-3xl font-extrabold leading-[1.12] text-brand-navy sm:text-[2.5rem] md:text-5xl md:leading-[1.06] lg:text-[3.4rem] xl:text-[3.7rem]">
              {t("home.hero.headlineLine1")}
              <br />
              {t("home.hero.headlineLine2")}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700 sm:mt-5 sm:text-[17px] sm:leading-8 md:text-lg lg:max-w-[44rem]">
              {t("home.hero.description")}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
              <Link
                href="/main/contact"
                className="inline-flex h-12 w-full items-center justify-center whitespace-nowrap rounded-full bg-brand-navy px-8 text-[15px] font-bold text-white shadow-lg shadow-blue-950/15 transition hover:-translate-y-0.5 hover:bg-[#052a74] sm:w-auto"
              >
                {t("home.hero.primaryCta")}
              </Link>
              <button
                type="button"
                onClick={scrollToSolution}
                className="inline-flex h-12 w-full cursor-pointer items-center justify-center whitespace-nowrap rounded-full border border-brand-gold bg-white/75 px-8 text-[15px] font-bold text-brand-navy transition hover:-translate-y-0.5 hover:bg-brand-gold/10 sm:w-auto"
              >
                {t("home.hero.secondaryCta")}
              </button>
            </div>
          </div>

          <HeroVisualSpace />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-[clamp(3.5rem,8vw,6.5rem)] sm:px-6">
        <SectionHeading
          eyebrow={t("home.painGain.eyebrow")}
          title={t("home.painGain.title")}
          description={t("home.painGain.description")}
        />
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
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

      <section
        id="solution"
        className="bg-[#f7f8fb] px-4 py-[clamp(3.5rem,8vw,6.5rem)] sm:px-6"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t("home.solution.eyebrow")}
            title={t("home.solution.title")}
          />
          <div className="relative">
            <div className="absolute left-[10%] right-[10%] top-10 hidden h-px bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent lg:block" />
            <MobileSnapSlider
              itemLabel="solution step"
              className="-mx-4 flex snap-x snap-proximity gap-4 overflow-x-auto px-4 pb-1 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-5"
            >
              {architecture.map((item) => (
                <article
                  key={item.titleKey}
                  tabIndex={0}
                  className="group relative min-w-[84vw] snap-start overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm outline-none transition hover:-translate-y-[5px] hover:border-brand-gold/40 hover:shadow-xl hover:shadow-blue-950/5 focus-visible:ring-2 focus-visible:ring-brand-gold/50 md:min-w-0 md:p-6"
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

      <section className="mx-auto max-w-7xl px-4 py-[clamp(3.5rem,8vw,6.5rem)] sm:px-6">
        <SectionHeading
          eyebrow={t("home.technology.eyebrow")}
          title={t("home.technology.title")}
          description={t("home.technology.description")}
        />
        <MobileSnapSlider
          itemLabel="technology card"
          className="-mx-4 flex snap-x snap-proximity gap-4 overflow-x-auto px-4 pb-1 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4"
        >
          {technologyCards.map((item) => (
            <article
              key={item.titleKey}
              className="min-w-[86vw] snap-start rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-[5px] hover:shadow-xl hover:shadow-blue-950/5 md:min-w-0 md:p-7"
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

      <section className="bg-brand-navy px-4 py-[clamp(3.5rem,8vw,6.5rem)] text-white sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-brand-gold">
              {t("home.product.eyebrow")}
            </p>
            <h2 className="heading text-2xl leading-tight text-white sm:text-3xl md:text-4xl">
              {t("home.product.title")}
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-white/75 md:mt-5 md:text-base md:leading-8">
              {t("home.product.description")}
            </p>
          </div>
          <MobileSnapSlider
            itemLabel="product card"
            tone="dark"
            className="-mx-4 flex snap-x snap-proximity gap-4 overflow-x-auto px-4 pb-1 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0"
          >
            {productCards.map((item) => (
              <article
                key={item.titleKey}
                className="min-w-[86vw] snap-start rounded-xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-[5px] hover:bg-white/[0.07] md:min-w-0 md:p-8"
              >
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">
                  {t(item.audienceKey)}
                </p>
                <h3 className="heading text-xl text-white">
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

      <section
        id="insight"
        className="mx-auto max-w-7xl px-4 py-[clamp(3.5rem,8vw,6.5rem)] sm:px-6"
      >
        <SectionHeading
          eyebrow={t("home.insight.eyebrow")}
          title={t("home.insight.title")}
          description={t("home.insight.description")}
        />
        <MobileSnapSlider
          itemLabel="insight card"
          className="-mx-4 flex snap-x snap-proximity gap-4 overflow-x-auto px-4 pb-1 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0"
        >
          {insightCards.map((card) => (
            <article
              key={card.titleKey}
              className="group min-w-[88vw] snap-start overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-[5px] hover:shadow-xl hover:shadow-blue-950/5 md:min-w-0"
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

      <section
        className="px-4 py-[clamp(3.5rem,8vw,6.5rem)] sm:px-6"
        id="company"
      >
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-xl bg-brand-navy md:grid-cols-[0.9fr_1.1fr]">
          <div className="p-7 text-white sm:p-10 md:p-14">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-brand-gold">
              {t("home.company.eyebrow")}
            </p>
            <h2 className="heading mt-5 whitespace-pre-line break-keep text-2xl leading-tight sm:text-3xl md:text-4xl">
              {t("home.company.title")}
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/70 sm:mt-6 sm:text-base sm:leading-8">
              {t("home.company.description")}
            </p>
          </div>
          <div className="grid gap-px bg-white/10 p-px md:grid-cols-2">
            {companyKeywords.map((keyword) => (
              <div key={keyword.label} className="bg-brand-navy p-6 sm:p-8">
                <p className="heading text-xl text-brand-gold sm:text-2xl">
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

      <section className="relative overflow-hidden border-t border-slate-100 bg-[#fbfbfd] px-4 py-[clamp(3.5rem,8vw,6.5rem)] sm:px-6">
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
            className="inline-flex h-12 w-full items-center justify-center whitespace-nowrap rounded-full bg-brand-navy px-8 text-[15px] font-bold text-white shadow-lg shadow-blue-950/15 transition hover:-translate-y-0.5 hover:bg-[#052a74] hover:shadow-brand-gold/20 sm:w-auto"
          >
            {t("home.cta.button")}
          </Link>
        </div>
      </section>
    </main>
  );
}
