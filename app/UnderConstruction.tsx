import Link from "next/link";
import type { Locale } from "./i18n";

const text: Record<Locale, { title: string; body: string; switchLabel: string }> = {
  lv: { title: "Mājaslapa top", body: "Drīzumā šeit būs zAPPte mājaslapa.", switchLabel: "English" },
  en: { title: "Website under construction", body: "The zAPPte website is coming soon.", switchLabel: "Latviski" },
};

export function UnderConstruction({ lang }: { lang: Locale }) {
  const t = text[lang];
  const other: Locale = lang === "lv" ? "en" : "lv";
  return (
    <div className="uc">
      <main className="uc-main">
        <p className="uc-logo" aria-label="zAPPte">
          z<span>APP</span>te
        </p>
        <h1>{t.title}</h1>
        <p className="uc-body">{t.body}</p>
        <p>
          <Link href={`/${other}/`} hrefLang={other} lang={other}>
            {t.switchLabel}
          </Link>
        </p>
      </main>
      <footer className="uc-footer">
        © 2026 SIA Zappte · Reg. no. 40203749925 · Ūbeļu iela 5-53, Ādaži, Ādažu novads, LV-2164 ·{" "}
        <a href="mailto:info@zappte.eu">info@zappte.eu</a>
      </footer>
    </div>
  );
}
