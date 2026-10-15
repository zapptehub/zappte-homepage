import Link from "next/link";
import { messages, pagePath, type Locale } from "./i18n";
import { PhoneIllustration } from "./phone-illustrations";
import { SiteShell } from "./site-shell";

export function HomePage({ locale }: { locale: Locale }) {
  const copy = messages[locale].home;
  return (
    <SiteShell locale={locale} page="home">
      <section className="home-hero">
        <div className="home-hero-inner site-wrap">
          <p className="home-eyebrow">
            <span className="home-bar" aria-hidden="true" />
            {copy.eyebrow}
          </p>
          <h1>{copy.title}</h1>
          <div className="home-lead">
            <p>{copy.body}</p>
            <p>{copy.detail}</p>
          </div>
        </div>
      </section>
      <section className="home-apps" aria-labelledby="home-apps-title">
        <div className="site-wrap">
          <div className="home-apps-copy">
            <h2 id="home-apps-title">{copy.appsTitle}</h2>
            <p>{copy.appsIntro}</p>
          </div>
          <ul className="home-grid" role="list">
            {copy.cards.map((card) => (
              <li key={card.id} className="home-card">
                <PhoneIllustration id={card.id} />
                <div className="home-card-copy">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="home-close">
        <div className="site-wrap">
          <Link className="home-contact" href={pagePath(locale, "contacts")}>
            {copy.contact}
            <span aria-hidden="true"> →</span>
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}
