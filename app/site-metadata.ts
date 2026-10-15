import type { Metadata } from "next";
import type { Locale } from "./i18n";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  legalName: 'SIA "Zappte"',
  name: "zappte",
  url: "https://zappte.eu/",
  identifier: {
    "@type": "PropertyValue",
    propertyID: "LV company registration number",
    value: "40203749925",
  },
  email: "info@zappte.eu",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ūbeļu iela 5-53",
    addressLocality: "Ādaži",
    addressRegion: "Ādažu novads",
    postalCode: "LV-2164",
    addressCountry: "LV",
  },
  logo: "https://zappte.eu/logo.svg",
} as const;

// JSON.stringify, then escape characters that can break out of a script tag.
export const organizationJsonLdScript = JSON.stringify(organizationJsonLd)
  .replaceAll("<", "\\u003c")
  .replaceAll(">", "\\u003e")
  .replaceAll("&", "\\u0026");

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
