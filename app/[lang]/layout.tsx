import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { inter } from "../fonts";
import { isLocale, locales } from "../i18n";
import { organizationJsonLdScript } from "../site-metadata";
import "../globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <html lang={lang} className={inter.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: organizationJsonLdScript }} />
        {children}
      </body>
    </html>
  );
}
