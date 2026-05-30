"use client";

import { useEffect, useState } from "react";
import { useLocaleMessage } from "@/i18n";
import { scrollWindowTo } from "@/lib/scroll";

const SCROLL_THRESHOLD = 420;

export function ScrollToTopButton() {
  const { $localeMessage } = useLocaleMessage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      requestAnimationFrame(() => {
        const next = window.scrollY > SCROLL_THRESHOLD;
        setVisible((prev) => (prev === next ? prev : next));
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    scrollWindowTo(0);
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={$localeMessage("common.scrollToTop")}
      className={`group fixed bottom-6 right-4 z-40 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-slate-200/90 bg-white shadow-[0_4px_20px_rgba(0,31,92,0.08)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-brand-gold/45 hover:bg-white hover:shadow-[0_8px_28px_rgba(0,31,92,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/40 active:translate-y-0 sm:bottom-8 sm:right-6 sm:h-12 sm:w-12 motion-reduce:transition-none ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-[1.05rem] w-[1.05rem] text-brand-navy transition-transform duration-300 group-hover:-translate-y-px sm:h-[1.125rem] sm:w-[1.125rem]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 18V6" />
        <path d="M7.5 10.5 12 6l4.5 4.5" />
      </svg>
    </button>
  );
}
