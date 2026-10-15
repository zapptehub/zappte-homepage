import type { Metadata } from "next";
import Link from "next/link";
import { inter } from "./fonts";
import { organizationJsonLdScript } from "./site-metadata";
import { SiteShell } from "./site-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lapa nav atrasta — zappte",
};

export default function GlobalNotFound() {
  return (
    <html lang="lv" className={inter.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: organizationJsonLdScript }} />
        <SiteShell locale="lv">
          <section className="not-found">
            <div className="not-found-inner site-wrap">
              <h1>Lapa nav atrasta</h1>
              <p>Šī lapa neeksistē.</p>
              <Link href="/">Sākums</Link>
            </div>
          </section>
        </SiteShell>
      </body>
    </html>
  );
}
