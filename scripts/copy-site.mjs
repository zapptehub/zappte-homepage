// Copies the static export (out/) to site/, the folder GitHub Pages (now) and Caddy (later) serve unchanged.
import { cpSync, existsSync, readdirSync, readFileSync, rmSync } from "node:fs";
import { join } from "node:path";

if (!existsSync("out")) throw new Error("out/ missing: run next build first");
rmSync("site", { recursive: true, force: true });
cpSync("out", "site", { recursive: true });
// CNAME removed until zappte.eu DNS points to GitHub Pages; re-add public/CNAME then.
for (const f of ["site/.nojekyll", "site/_next"]) {
  if (!existsSync(f)) throw new Error(`${f} missing from site/`);
}

// Case-insensitive, including HTML-entity and percent-encoded "@".
const forbiddenArmands = /armands(?:@|&#64;|%40)/i;

function assertNoArmands(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) assertNoArmands(path);
    else if (entry.isFile() && forbiddenArmands.test(readFileSync(path).toString("latin1"))) {
      throw new Error(`forbidden string "armands@" in ${path}`);
    }
  }
}
assertNoArmands("site");
console.log("site/ ready (.nojekyll, _next present)");
