import localFont from "next/font/local";

// Self-hosted Inter (variable, Latin + Latin Extended for Latvian ā č ē ģ ī ķ ļ ņ š ū ž). No Google Fonts request.
export const inter = localFont({
  src: [
    { path: "./fonts/inter-latin-wght-normal.woff2", weight: "100 900", style: "normal" },
    { path: "./fonts/inter-latin-ext-wght-normal.woff2", weight: "100 900", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});
