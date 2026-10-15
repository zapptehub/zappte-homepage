import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactsPage } from "../../contacts-page";
import { siteMetadata } from "../../site-metadata";

export const dynamicParams = false;

/** Latvian mirror of `/kontakti/`. English contacts are `/en/contacts/`. */
export function generateStaticParams() {
  return [{ lang: "lv" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (lang !== "lv") notFound();
  return siteMetadata("lv", "contacts");
}

export default async function ContactsLvPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang !== "lv") notFound();
  return <ContactsPage locale="lv" />;
}
