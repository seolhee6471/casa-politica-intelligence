"use client";

import { LocaleProvider } from "@/i18n/LocaleProvider";
import type { ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return <LocaleProvider>{children}</LocaleProvider>;
}
