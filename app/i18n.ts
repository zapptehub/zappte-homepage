export const locales = ["lv", "en"] as const;
export type Locale = (typeof locales)[number];

export const pageIds = ["home", "contacts"] as const;
export type PageId = (typeof pageIds)[number];

export const homeCardIds = ["loyalty", "map", "ticket", "insurance", "utility", "transport"] as const;
export type HomeCardId = (typeof homeCardIds)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Public path for a page. Latvian uses the unprefixed canonical URLs
 * (`/` and `/kontakti/`); `/lv/…` is a mirror of those pages.
 * English contacts will live at `/en/contacts/`.
 */
export function pagePath(locale: Locale, page: PageId): string {
  if (locale === "en") return page === "home" ? "/en/" : "/en/contacts/";
  return page === "home" ? "/" : "/kontakti/";
}

type HomeCard = {
  id: HomeCardId;
  title: string;
  description: string;
};

type Messages = {
  skip: string;
  navLabel: string;
  languageLabel: string;
  flagLabel: string;
  titles: Record<PageId, string>;
  nav: Record<PageId, string>;
  home: {
    eyebrow: string;
    title: string;
    body: string;
    detail: string;
    appsTitle: string;
    appsIntro: string;
    contact: string;
    cards: readonly HomeCard[];
  };
  contacts: {
    title: string;
    note: string;
    email: string;
    legalName: string;
    registration: string;
    address: string;
  };
};

export const messages: Record<Locale, Messages> = {
  lv: {
    skip: "Pāriet uz saturu",
    navLabel: "Navigācija",
    languageLabel: "Valoda",
    flagLabel: "Radīts ES",
    titles: {
      home: "zappte — iOS un Android lietotņu izstrāde",
      contacts: "Kontakti — zappte",
    },
    nav: { home: "Sākums", contacts: "Kontakti" },
    home: {
      eyebrow: "Kopš 2013. gada",
      title: "Veidojam iOS un Android lietotnes",
      body: "Zappte jau vairāk nekā 10 gadus izstrādā mobilās lietotnes iOS un Android platformām — no pirmās idejas līdz publicēšanai App Store un Google Play.",
      detail:
        "Savienojam lietotni ar jūsu esošo backend sistēmu vai palīdzam izveidot jaunu, rūpīgi to testējam un parūpējamies par katru laidienu.",
      appsTitle: "Mūsu veidotās lietotnes",
      appsIntro:
        "Daži piemēri no lietotnēm, ko esam izveidojuši iOS un Android platformām. Katru klienta projektu uzskatām par konfidenciālu, tāpēc lietotņu nosaukumus šeit neminam.",
      contact: "Sazināties",
      cards: [
        {
          id: "loyalty",
          title: "Lojalitātes karšu lietotne",
          description: "Digitālās lojalitātes kartes, punkti un personalizēti piedāvājumi.",
        },
        {
          id: "map",
          title: "Kartē balstīta spēle",
          description: "Uz atrašanās vietu balstīta spēle, ko spēlē tiešsaistes kartē.",
        },
        {
          id: "ticket",
          title: "Biļešu skeneris",
          description: "Ātra biļešu skenēšana un pārbaude pasākuma ieejā.",
        },
        {
          id: "insurance",
          title: "Auto apdrošināšanas lietotne ar auto ekrāna versiju",
          description: "Polises un atlīdzības pieteikumi telefonā, kā arī CarPlay un Android Auto versija.",
        },
        {
          id: "utility",
          title: "Komunālo pakalpojumu pašapkalpošanās lietotne",
          description: "Rēķinu apmaksa, elektroenerģijas patēriņa pārskats un atbalsta čats.",
        },
        {
          id: "transport",
          title: "Sabiedriskā transporta lietotne",
          description: "Maršrutu plānošana un biļešu iegāde.",
        },
      ],
    },
    contacts: {
      title: "Kontakti",
      note: "Raksti mums, lai pārrunātu savu lietotnes ideju vai projektu.",
      email: "info@zappte.eu",
      legalName: 'SIA "Zappte"',
      registration: "Reģ. Nr. 40203749925",
      address: "Ūbeļu iela 5-53, Ādaži, Ādažu novads, LV-2164",
    },
  },
  en: {
    skip: "Skip to content",
    navLabel: "Navigation",
    languageLabel: "Language",
    flagLabel: "Made in EU",
    titles: {
      home: "zappte — iOS and Android app development",
      contacts: "Contacts — zappte",
    },
    nav: { home: "Home", contacts: "Contacts" },
    home: {
      eyebrow: "Since 2013",
      title: "We built iOS and Android apps",
      body: "Zappte has been developing mobile apps for iOS and Android for more than 10 years — from first idea to release on the App Store and Google Play.",
      detail:
        "We connect your app to the backend you already have or help build a new one, test it thoroughly and take care of every release.",
      appsTitle: "Apps we have built",
      appsIntro:
        "A few examples of apps we have built for iOS and Android. We treat every client project as confidential, so we don't mention app names here.",
      contact: "Get in touch",
      cards: [
        {
          id: "loyalty",
          title: "Loyalty card app",
          description: "Digital loyalty cards, points and personal offers.",
        },
        {
          id: "map",
          title: "Map-based game",
          description: "A location-driven game played on a live map.",
        },
        {
          id: "ticket",
          title: "Event ticket scanner",
          description: "Fast ticket scanning and validation at the venue entrance.",
        },
        {
          id: "insurance",
          title: "Car insurance app with in-car companion",
          description: "Policies and claims on the phone, plus a CarPlay / Android Auto companion.",
        },
        {
          id: "utility",
          title: "Utility self-service app",
          description: "Bill payment, electricity consumption overview and support chat.",
        },
        {
          id: "transport",
          title: "Public transport app",
          description: "Journey planning with transit routes and ticket buying.",
        },
      ],
    },
    contacts: {
      title: "Contacts",
      note: "Interested in working together? Write to:",
      email: "info@zappte.eu",
      legalName: 'SIA "Zappte"',
      registration: "Reg. No. 40203749925",
      address: "Ūbeļu iela 5-53, Ādaži, Ādažu novads, LV-2164",
    },
  },
};
