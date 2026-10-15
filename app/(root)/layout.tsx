import type { ReactNode } from "react";
import { inter } from "../fonts";
import { organizationJsonLdScript, siteMetadata } from "../site-metadata";
import "../globals.css";

export const metadata = siteMetadata("lv");

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="lv" className={inter.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: organizationJsonLdScript }} />
        {children}
      </body>
    </html>
  );
}
