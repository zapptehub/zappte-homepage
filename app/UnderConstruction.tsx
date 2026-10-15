const basePath = process.env.BASE_PATH ?? "";

function euStarPoints(index: number): string {
  const ring = 10 / 3;
  const radius = 10 / 18;
  const cx = 7.5 + ring * Math.cos(((-90 + index * 30) * Math.PI) / 180);
  const cy = 5 + ring * Math.sin(((-90 + index * 30) * Math.PI) / 180);
  return [0, 2, 4, 1, 3]
    .map((k) => {
      const angle = ((-90 + k * 72) * Math.PI) / 180;
      return `${(cx + radius * Math.cos(angle)).toFixed(3)},${(cy + radius * Math.sin(angle)).toFixed(3)}`;
    })
    .join(" ");
}

export function UnderConstruction() {
  return (
    <div className="uc">
      <main className="uc-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="uc-logo" src={`${basePath}/logo.svg`} alt="zAPPte" />
        <div className="uc-bar" aria-hidden="true" />
        <div className="uc-lv">
          <h1>Lapa top</h1>
          <p>Drīzumā šeit būs SIA Zappte mājaslapa.</p>
        </div>
        <div className="uc-rule" aria-hidden="true" />
        <div className="uc-en" lang="en">
          <h2>Under construction</h2>
          <p>The SIA Zappte website is coming soon.</p>
        </div>
      </main>
      <footer className="uc-footer">
        <div className="uc-brand">
          <p>© 2026 zappte</p>
          <span className="uc-flags" role="img" aria-label="Radīts ES">
            <svg className="uc-flag" width="20" height="10" viewBox="0 0 20 10" aria-hidden="true">
              <rect width="20" height="4" fill="#9E3039" />
              <rect y="4" width="20" height="2" fill="#FFFFFF" />
              <rect y="6" width="20" height="4" fill="#9E3039" />
              <rect x="0.25" y="0.25" width="19.5" height="9.5" rx="1" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="0.5" />
            </svg>
            <svg className="uc-flag" width="15" height="10" viewBox="0 0 15 10" aria-hidden="true">
              <rect width="15" height="10" fill="#003399" />
              <g fill="#FFCC00">
                {Array.from({ length: 12 }, (_, index) => (
                  <polygon key={index} points={euStarPoints(index)} />
                ))}
              </g>
              <rect x="0.25" y="0.25" width="14.5" height="9.5" rx="1" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="0.5" />
            </svg>
          </span>
        </div>
        <p className="uc-legal">
          SIA &quot;Zappte&quot; · Reģ. Nr. 40203749925 · Ūbeļu iela 5-53, Ādaži, Ādažu novads, LV-2164 ·{" "}
          <a href="mailto:info@zappte.eu">info@zappte.eu</a>
        </p>
      </footer>
    </div>
  );
}
