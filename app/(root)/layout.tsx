import type { ReactNode } from "react";
import { inter } from "../fonts";
import { siteMetadata } from "../site-metadata";
import "../globals.css";

export const metadata = siteMetadata("lv");

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="lv" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
