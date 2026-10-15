import type { ReactNode } from "react";
import Link from "next/link";
import { messages, pageIds, pagePath, type Locale, type PageId } from "./i18n";

const basePath = process.env.BASE_PATH ?? "";

function euStarPoints(index: number): string {
  const ring = 10 / 3;
  const radius = 10 / 18;
  const cx = 7.5 + ring * Math.cos(((-90 + index * 30) * Math.PI) / 180);
  const cy = 5 + ring * Math.sin(((-90 + index * 30) * Math.PI) / 180);
  return [0, 2, 4, 1, 3]
    .map((k) => {
      const angle = ((-90 + k * 72) * Math.PI) / 180;
      return `${(cx + radius * Math.cos(angle)).toFixed(3)},${(cy + radius * Math.sin(angle)).toFixed(3)}`;
    })
    .join(" ");
}

function SiteHeader({ locale, page }: { locale: Locale; page?: PageId }) {
  const copy = messages[locale];
  return (
    <header className="site-header">
      <div className="site-header-inner site-wrap">
        <Link className="site-brand" href={pagePath(locale, "home")}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="site-logo" src={`${basePath}/logo.svg`} alt="" width={40} height={40} />
          <span className="site-wordmark">zappte</span>
        </Link>
        <nav className="site-nav" aria-label={copy.navLabel}>
          {pageIds.map((id) => (
            <Link key={id} href={pagePath(locale, id)} aria-current={page === id ? "page" : undefined}>
              {copy.nav[id]}
            </Link>
          ))}
        </nav>
        <div className="site-lang" role="group" aria-label={copy.languageLabel}>
          {(["lv", "en"] as const).map((code) => (
            <Link
              key={code}
              href={pagePath(code, page ?? "home")}
              hrefLang={code}
              lang={code}
              aria-current={locale === code ? "true" : undefined}
            >
              {code === "lv" ? "LV" : "EN"}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

function SiteFooter({ locale }: { locale: Locale }) {
  const copy = messages[locale];
  const legalLv = "Reģ. Nr. 40203749925 · Ūbeļu iela 5-53, Ādaži, Ādažu novads, LV-2164";
  return (
    <footer className="uc-footer">
      <div className="uc-footer-inner">
        <div className="uc-brand">
          <p>© 2026 zappte</p>
          <span className="uc-flags" role="img" aria-label={copy.flagLabel}>
            <svg className="uc-flag" width="20" height="10" viewBox="0 0 20 10" aria-hidden="true">
              <rect width="20" height="4" fill="#9E3039" />
              <rect y="4" width="20" height="2" fill="#FFFFFF" />
              <rect y="6" width="20" height="4" fill="#9E3039" />
              <rect x="0.25" y="0.25" width="19.5" height="9.5" rx="1" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="0.5" />
            </svg>
            <svg className="uc-flag" width="15" height="10" viewBox="0 0 15 10" aria-hidden="true">
              <rect width="15" height="10" fill="#003399" />
              <g fill="#FFCC00">
                {Array.from({ length: 12 }, (_, index) => (
                  <polygon key={index} points={euStarPoints(index)} />
                ))}
              </g>
              <rect x="0.25" y="0.25" width="14.5" height="9.5" rx="1" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="0.5" />
            </svg>
          </span>
        </div>
        <p className="uc-legal">
          SIA &quot;Zappte&quot; ·{" "}
          {locale === "en" ? <span lang="lv">{legalLv}</span> : legalLv}
          {" · "}
          <a href="mailto:info@zappte.eu">info@zappte.eu</a>
        </p>
      </div>
    </footer>
  );
}

export function SiteShell({
  locale,
  page,
  children,
}: {
  locale: Locale;
  page?: PageId;
  children: ReactNode;
}) {
  const copy = messages[locale];
  return (
    <div className="site">
      <a className="skip-link" href="#main">
        {copy.skip}
      </a>
      <SiteHeader locale={locale} page={page} />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
