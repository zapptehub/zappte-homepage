import { notFound } from "next/navigation";
import { isLocale } from "../i18n";
import { UnderConstruction } from "../UnderConstruction";

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <UnderConstruction />;
}
