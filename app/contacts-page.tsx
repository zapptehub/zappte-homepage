import { messages, type Locale } from "./i18n";
import { SiteShell } from "./site-shell";

export function ContactsPage({ locale }: { locale: Locale }) {
  const copy = messages[locale].contacts;
  return (
    <SiteShell locale={locale} page="contacts">
      <section className="contacts">
        <div className="contacts-inner site-wrap">
          <span className="contacts-bar" aria-hidden="true" />
          <h1>{copy.title}</h1>
          <p className="contacts-note">{copy.note}</p>
          <a className="contacts-email" href={`mailto:${copy.email}`}>
            {copy.email}
          </a>
          <hr className="contacts-rule" />
          <address className="contacts-address">
            <p className="contacts-name">{copy.legalName}</p>
            <p>{copy.registration}</p>
            <p>{copy.address}</p>
          </address>
        </div>
      </section>
    </SiteShell>
  );
}
