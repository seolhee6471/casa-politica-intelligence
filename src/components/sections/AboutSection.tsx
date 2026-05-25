"use client";

import { useLocaleMessage } from "@/i18n";

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
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f7f8fb] p-4 shadow-xl shadow-blue-950/5">
            <div className="relative min-h-[25rem] overflow-hidden rounded-[1.5rem] bg-brand-navy p-7 text-white">
              <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:34px_34px]" />
              <div className="absolute right-[-5rem] top-[-5rem] h-56 w-56 rounded-full bg-brand-gold/25 blur-3xl" />
              <div className="absolute bottom-[-4rem] left-[-4rem] h-48 w-48 rounded-full bg-white/10 blur-3xl" />

              <div className="relative flex h-full min-h-[21.5rem] flex-col justify-between">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-brand-gold">
                    Intelligence Map
                  </p>
                  <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.85)]" />
                </div>

                <svg
                  viewBox="0 0 360 240"
                  className="my-8 h-52 w-full"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="aboutSignal" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#F2D17A" />
                      <stop offset="100%" stopColor="#C9A44B" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  {([
                    [56, 166, 142, 96],
                    [142, 96, 220, 138],
                    [220, 138, 304, 72],
                    [142, 96, 170, 184],
                    [170, 184, 260, 196],
                  ] as const).map(([x1, y1, x2, y2]) => (
                    <line
                      key={`${x1}-${y1}-${x2}-${y2}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="1.6"
                    />
                  ))}
                  {([
                    [56, 166, "Data"],
                    [142, 96, "AI"],
                    [220, 138, "Index"],
                    [304, 72, "Power"],
                    [170, 184, "Risk"],
                    [260, 196, "Action"],
                  ] as const).map(([cx, cy, label], index) => (
                    <g key={`${cx}-${cy}`}>
                      <circle
                        cx={cx}
                        cy={cy}
                        r={index === 1 ? 24 : 18}
                        fill={index === 1 ? "url(#aboutSignal)" : "#092F72"}
                        stroke="rgba(255,255,255,0.35)"
                      />
                      <text
                        x={cx}
                        y={cy + 4}
                        textAnchor="middle"
                        fill={index === 1 ? "#001F5C" : "#F8FAFC"}
                        fontSize="10"
                        fontWeight="800"
                      >
                        {label}
                      </text>
                    </g>
                  ))}
                </svg>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
                    Casa Politica Intelligence
                  </p>
                  <p className="heading mt-2 text-3xl text-white">
                    Read Behavior.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-2xl">
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
        </div>
      </div>
    </section>
  );
}
