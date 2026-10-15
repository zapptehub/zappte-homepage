import type { Metadata } from "next";
import type { ReactNode } from "react";
import { inter } from "../fonts";
import "../globals.css";

export const metadata: Metadata = { title: "zAPPte — Mājaslapa top" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="lv" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
