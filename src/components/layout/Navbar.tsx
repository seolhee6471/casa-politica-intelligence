"use client";

import Link from "next/link";
import { useState } from "react";
import { useLocaleMessage } from "@/i18n";
import { LocaleSwitcher } from "./LocaleSwitcher";

const navItems = [
  { href: "/", messageKey: "nav.home" as const },
  { href: "/#solution", messageKey: "nav.solution" as const },
  { href: "/#insight", messageKey: "nav.insight" as const },
  { href: "/about", messageKey: "nav.company" as const },
  { href: "/main/contact", messageKey: "nav.contact" as const },
] as const;

export function Navbar() {
  const { $localeMessage } = useLocaleMessage();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <nav className="hidden items-center gap-2 font-sans text-base font-medium tracking-[-0.01em] lg:flex">
        {navItems.map(({ href, messageKey }) => (
          <Link
            key={href}
            href={href}
            className="px-4 py-2 text-brand-navy transition-colors duration-300 hover:text-brand-gold"
          >
            {$localeMessage(messageKey)}
          </Link>
        ))}
        <LocaleSwitcher />
      </nav>

      <div className="flex items-center gap-2 lg:hidden">
        <LocaleSwitcher />
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white text-brand-navy shadow-sm transition hover:border-brand-gold/50 hover:text-brand-gold active:border-brand-gold/50 active:text-brand-gold focus-visible:border-brand-gold/50 focus-visible:text-brand-gold focus-visible:outline-none"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          <span
            className={`h-0.5 w-4 rounded-full bg-current transition ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-4 rounded-full bg-current transition ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-4 rounded-full bg-current transition ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 top-16 z-40 bg-brand-navy/10 backdrop-blur-[2px] lg:hidden"
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
          />
          <nav
            id="mobile-navigation"
            className="fixed inset-x-4 top-20 z-50 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-2 shadow-2xl shadow-blue-950/15 lg:hidden"
          >
            {navItems.map(({ href, messageKey }, index) => {
              const isContact = index === navItems.length - 1;

              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-2xl px-5 py-4 text-base font-semibold transition-colors focus-visible:outline-none ${
                    isContact
                      ? "mt-2 bg-brand-navy text-center text-white hover:bg-[#052a74] active:bg-[#052a74] focus-visible:bg-[#052a74]"
                      : "text-brand-navy hover:bg-slate-50 hover:text-brand-gold active:bg-slate-50 active:text-brand-gold focus-visible:bg-slate-50 focus-visible:text-brand-gold"
                  }`}
                >
                  {$localeMessage(messageKey)}
                </Link>
              );
            })}
          </nav>
        </>
      ) : null}
    </div>
  );
}
