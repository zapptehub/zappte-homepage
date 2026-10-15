import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactsPage } from "../../contacts-page";
import { siteMetadata } from "../../site-metadata";

export const dynamicParams = false;

/** English contacts. Latvian is `/kontakti/` (mirrored at `/lv/kontakti/`). */
export function generateStaticParams() {
  return [{ lang: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (lang !== "en") notFound();
  return siteMetadata("en", "contacts");
}

export default async function ContactsEnPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang !== "en") notFound();
  return <ContactsPage locale="en" />;
}
