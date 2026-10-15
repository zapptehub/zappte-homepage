import type { Metadata } from "next";
import { HomePage } from "../home-page";
import { siteMetadata } from "../site-metadata";

export const metadata: Metadata = siteMetadata("lv", "home");

export default function RootPage() {
  return <HomePage locale="lv" />;
}
