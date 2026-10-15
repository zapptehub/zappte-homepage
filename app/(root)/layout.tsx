import type { ReactNode } from "react";
import { inter } from "../fonts";
import { organizationJsonLdScript } from "../site-metadata";
import "../globals.css";

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
