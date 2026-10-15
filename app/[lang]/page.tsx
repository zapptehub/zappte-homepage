import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePage } from "../home-page";
import { isLocale } from "../i18n";
import { siteMetadata } from "../site-metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return siteMetadata(lang, "home");
}

export default async function HomeLangPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <HomePage locale={lang} />;
}
