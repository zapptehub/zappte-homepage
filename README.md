# zappte-homepage

zappte.eu, the SIA Zappte company site. Next.js (App Router) + TypeScript (strict), static export.

- Node 22 (`.nvmrc`)
- `npm ci`
- `npm run typecheck` / `npm run lint` / `npm run build`
- `npm run build` writes `out/` and copies it to `site/`, the only folder that gets published (GitHub Pages now, Caddy later).
