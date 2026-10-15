import type { Metadata } from "next";
import type { Locale, PageId } from "./i18n";
import { messages } from "./i18n";

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

/** Absolute URLs for each page pair. Latvian canonicals are unprefixed, including for `/lv/…` mirrors. */
export const pageUrls = {
  home: {
    lv: "https://zappte.eu/",
    en: "https://zappte.eu/en/",
  },
  contacts: {
    lv: "https://zappte.eu/kontakti/",
    en: "https://zappte.eu/en/contacts/",
  },
} as const satisfies Record<PageId, Record<Locale, string>>;

/** Canonical + hreflang for a page pair. x-default is the Latvian URL. */
export function pageAlternates(locale: Locale, page: PageId): NonNullable<Metadata["alternates"]> {
  const urls = pageUrls[page];
  return {
    canonical: urls[locale],
    languages: {
      lv: urls.lv,
      en: urls.en,
      "x-default": urls.lv,
    },
  };
}

export function siteMetadata(locale: Locale, page: PageId): Metadata {
  return {
    metadataBase: new URL("https://zappte.eu"),
    title: messages[locale].titles[page],
    alternates: pageAlternates(locale, page),
  };
}
