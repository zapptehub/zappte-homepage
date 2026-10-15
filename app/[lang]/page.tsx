import { isLocale } from "../i18n";
import { UnderConstruction } from "../UnderConstruction";

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <UnderConstruction lang={isLocale(lang) ? lang : "lv"} />;
}
