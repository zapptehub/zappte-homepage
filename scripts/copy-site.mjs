// Copies the static export (out/) to site/, the folder GitHub Pages (now) and Caddy (later) serve unchanged.
import { cpSync, existsSync, rmSync } from "node:fs";

if (!existsSync("out")) throw new Error("out/ missing: run next build first");
rmSync("site", { recursive: true, force: true });
cpSync("out", "site", { recursive: true });
// CNAME removed until zappte.eu DNS points to GitHub Pages; re-add public/CNAME then.
for (const f of ["site/.nojekyll", "site/_next"]) {
  if (!existsSync(f)) throw new Error(`${f} missing from site/`);
}
console.log("site/ ready (.nojekyll, _next present)");
