"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { LogoNavbar } from "@/assets/icons";
import { useLocaleMessage } from "@/i18n";
import { Navbar } from "./Navbar";

export function Header() {
  const { $localeMessage } = useLocaleMessage();
  const pathname = usePathname();

  function handleLogoClick(event: MouseEvent<HTMLAnchorElement>) {
    if (pathname !== "/") {
      return;
    }

    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, "", "/");
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[5.25rem]">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="inline-flex shrink-0 cursor-pointer items-center"
          aria-label={$localeMessage("common.brand")}
        >
          <LogoNavbar className="h-10 w-auto sm:h-12 lg:h-[3.75rem]" />
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
