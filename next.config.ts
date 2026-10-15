import type { NextConfig } from "next";

// BASE_PATH is set in CI for https://zapptehub.github.io/zappte-homepage/; empty for the custom domain.
const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  basePath,
  assetPrefix: basePath || undefined,
  // Two root layouts (LV and EN). The unmatched-route 404 cannot sit inside either one.
  experimental: {
    globalNotFound: true,
  },
};

export default nextConfig;
