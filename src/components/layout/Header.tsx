"use client";

import Link from "next/link";
import { LogoNavbar } from "@/assets/icons";
import { useLocaleMessage } from "@/i18n";
import { Navbar } from "./Navbar";

export function Header() {
  const { $localeMessage } = useLocaleMessage();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20">
        <Link
          href="/"
          className="inline-flex shrink-0 items-center"
          aria-label={$localeMessage("common.brand")}
        >
          <LogoNavbar className="h-10 w-auto sm:h-12 lg:h-14" />
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
