import type en from "@/locales/en";

export type Locale = "kr" | "en";

export type LocaleMessages = typeof en;

type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type NestedKeyOf<T, D extends number = 6> = [D] extends [never]
  ? never
  : T extends string
    ? never
    : {
        [K in keyof T & string]: T[K] extends string
          ? K
          : `${K}.${NestedKeyOf<T[K], Prev[D]>}`;
      }[keyof T & string];

/** dot notation key, e.g. "nav.home" */
export type LocaleMessageKey = NestedKeyOf<LocaleMessages>;

export type LocaleMessageParams = Record<string, string | number>;
