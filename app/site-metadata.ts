import type { Metadata } from "next";
import type { Locale } from "./i18n";

const canonical = {
  lv: "https://zappte.eu/",
  en: "https://zappte.eu/en/",
} as const satisfies Record<Locale, string>;

export function siteMetadata(locale: Locale): Metadata {
  return {
    metadataBase: new URL("https://zappte.eu"),
    title: "zAPPte — Lapa top",
    alternates: {
      canonical: canonical[locale],
      languages: {
        lv: "https://zappte.eu/",
        en: "https://zappte.eu/en/",
        "x-default": "https://zappte.eu/",
      },
    },
  };
}
