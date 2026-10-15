import type { Metadata } from "next";
import { ContactsPage } from "../../contacts-page";
import { siteMetadata } from "../../site-metadata";

export const metadata: Metadata = siteMetadata("lv", "contacts");

export default function ContactsRootPage() {
  return <ContactsPage locale="lv" />;
}
