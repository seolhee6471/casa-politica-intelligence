"use client";

import Link from "next/link";
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

  return (
    <nav className="flex items-center gap-2 font-sans text-[15px] font-medium tracking-[-0.01em]">
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
  );
}
