import type { ReactNode } from "react";
import type { HomeCardId } from "./i18n";

const brand = "var(--color-brand-primary)";
const accent = "var(--color-accent)";
const ink = "var(--color-text-primary)";
const line = "var(--color-border-default)";
const screen = "var(--color-bg-default)";
const onAccent = "var(--color-text-on-accent)";

function Phone({ children }: { children: ReactNode }) {
  return (
    <svg className="phone" width="44" height="80" viewBox="0 0 44 80" aria-hidden="true">
      <rect
        x="0.75"
        y="0.75"
        width="42.5"
        height="78.5"
        rx="8"
        fill={screen}
        stroke="var(--color-text-secondary)"
        strokeWidth="1.5"
      />
      <rect x="16.5" y="4.25" width="11" height="2.6" rx="1.3" fill="var(--color-text-secondary)" />
      {children}
    </svg>
  );
}

function Loyalty() {
  return (
    <>
      <rect x="14" y="26" width="20" height="13" rx="2.5" fill={accent} />
      <rect x="8" y="16" width="22" height="15" rx="2.5" fill={brand} />
      <rect x="11" y="19" width="4" height="4" rx="1" fill={screen} />
      <rect x="8" y="44" width="13" height="3.2" rx="1.6" fill={ink} />
      <rect x="8" y="51" width="26" height="3" rx="1.5" fill={line} />
      <rect x="8" y="51" width="17" height="3" rx="1.5" fill={accent} />
      <rect x="8" y="58" width="18" height="2" rx="1" fill={line} />
      <rect x="8" y="63" width="13" height="2" rx="1" fill={line} />
    </>
  );
}

function MapGame() {
  return (
    <>
      <rect x="7" y="13" width="12" height="13" fill={line} />
      <rect x="21" y="13" width="16" height="9" fill={line} />
      <rect x="7" y="28" width="16" height="14" fill={line} />
      <rect x="25" y="24" width="12" height="18" fill={line} />
      <rect x="7" y="44" width="14" height="18" fill={line} />
      <rect x="23" y="44" width="14" height="18" fill={line} />
      <path fill={brand} d="M12.2 20.6c-2.1 0-3.6-1.6-3.6-3.5s1.5-3.5 3.6-3.5 3.6 1.6 3.6 3.5c0 2.2-3.6 6.2-3.6 6.2s-3.6-4-3.6-6.2z" />
      <path fill={brand} d="M30 36.2c-2.1 0-3.6-1.6-3.6-3.5s1.5-3.5 3.6-3.5 3.6 1.6 3.6 3.5c0 2.2-3.6 6.2-3.6 6.2s-3.6-4-3.6-6.2z" />
      <circle cx="15" cy="52" r="4.2" fill={ink} />
      <circle cx="15" cy="52" r="2.6" fill={accent} />
    </>
  );
}

function Ticket() {
  return (
    <>
      <path d="M10 21.5V16.5H15" fill="none" stroke={brand} strokeWidth="2" strokeLinejoin="miter" />
      <path d="M29 16.5H34V21.5" fill="none" stroke={brand} strokeWidth="2" strokeLinejoin="miter" />
      <path d="M10 35.5V40.5H15" fill="none" stroke={brand} strokeWidth="2" strokeLinejoin="miter" />
      <path d="M34 35.5V40.5H29" fill="none" stroke={brand} strokeWidth="2" strokeLinejoin="miter" />
      <rect x="13" y="19" width="5" height="5" fill={ink} />
      <rect x="24" y="19" width="5" height="5" fill={ink} />
      <rect x="20" y="21" width="1.7" height="1.7" fill={ink} />
      <rect x="27.2" y="25" width="1.7" height="1.7" fill={ink} />
      <rect x="13" y="28" width="5" height="5" fill={ink} />
      <rect x="20.5" y="27.5" width="2.4" height="2.4" fill={ink} />
      <rect x="24.5" y="31" width="1.7" height="1.7" fill={ink} />
      <rect x="27" y="28.5" width="2" height="2" fill={ink} />
      <circle cx="22" cy="52" r="6.2" fill={accent} />
      <path
        d="M18.6 52.1l2.3 2.3 4.7-5"
        fill="none"
        stroke={onAccent}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  );
}

function Insurance() {
  return (
    <>
      <rect x="7" y="14" width="30" height="18" rx="3" fill={brand} />
      <rect x="10" y="17.5" width="12" height="2.2" rx="1" fill={screen} />
      <rect x="10" y="21.6" width="20" height="2.2" rx="1" fill={screen} />
      <rect x="10" y="25.7" width="9" height="2.2" rx="1" fill={screen} />
      <path fill={ink} d="M12.5 40.5h19c1.8 0 2.8 1.3 2.8 2.8v4.2H9.7v-4.2c0-1.5 1-2.8 2.8-2.8z" />
      <circle cx="15.2" cy="48.2" r="2.3" fill={accent} />
      <circle cx="28.8" cy="48.2" r="2.3" fill={accent} />
      <rect x="7" y="56" width="30" height="11" rx="3" fill="none" stroke={brand} strokeWidth="1.6" />
      <rect x="10.5" y="59.6" width="12" height="3.2" rx="1" fill={brand} />
    </>
  );
}

function Utility() {
  return (
    <>
      <rect x="12" y="15" width="10" height="2.4" rx="1.2" fill={line} />
      <rect x="10" y="20" width="18" height="4" rx="1.2" fill={ink} />
      <rect x="8" y="40" width="3.6" height="8" rx="1" fill={accent} />
      <rect x="13.2" y="33" width="3.6" height="15" rx="1" fill={accent} />
      <rect x="18.4" y="36" width="3.6" height="12" rx="1" fill={accent} />
      <rect x="23.6" y="29" width="3.6" height="19" rx="1" fill={accent} />
      <rect x="28.8" y="34" width="3.6" height="14" rx="1" fill={brand} />
      <path fill={brand} d="M13 51h18a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H19l-4.2 4.2c-.4.4-1.1.1-1.1-.5V63h-.7a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3z" />
    </>
  );
}

function Transport() {
  const stops = [18, 28, 38, 48];
  return (
    <>
      <line x1="12" y1="16" x2="12" y2="50" stroke={brand} strokeWidth="2.4" strokeLinecap="round" />
      {stops.map((y) => (
        <circle key={y} cx="12" cy={y} r="3.1" fill={screen} stroke={brand} strokeWidth="1.8" />
      ))}
      <rect x="19" y="16.6" width="15" height="2.8" rx="1" fill={ink} />
      <rect x="19" y="26.6" width="15" height="2.8" rx="1" fill={line} />
      <rect x="19" y="36.6" width="15" height="2.8" rx="1" fill={line} />
      <rect x="19" y="46.6" width="15" height="2.8" rx="1" fill={ink} />
      <rect x="7" y="56" width="14" height="12" rx="2.2" fill={accent} />
      <rect x="9" y="58.4" width="3.4" height="3.2" rx="0.6" fill={onAccent} />
      <rect x="14.2" y="58.4" width="3.4" height="3.2" rx="0.6" fill={onAccent} />
      <rect x="24" y="56.5" width="13" height="11" rx="1.6" fill={ink} />
      <rect x="26.2" y="59" width="8.6" height="1.3" rx="0.6" fill={screen} />
    </>
  );
}

const art: Record<HomeCardId, () => ReactNode> = {
  loyalty: Loyalty,
  map: MapGame,
  ticket: Ticket,
  insurance: Insurance,
  utility: Utility,
  transport: Transport,
};

export function PhoneIllustration({ id }: { id: HomeCardId }) {
  const Art = art[id];
  return (
    <Phone>
      <Art />
    </Phone>
  );
}
