import localFont from "next/font/local";

// Self-hosted Inter (variable, Latin + Latin Extended for Latvian ā č ē ģ ī ķ ļ ņ š ū ž). No Google Fonts request.
// One localFont() for both files emits two @font-face rules with the same family and weight and no
// unicode-range. The latin-ext file has almost no Basic Latin, so the face the browser picks makes
// the other subset fall through to the next family. Split them and set each subset's unicode-range.
// adjustFontFallback is off: its size-adjusted Arial is inserted into each CSS variable, and that
// Arial would satisfy Latvian glyphs before the latin-ext family is reached.

const interLatin = localFont({
  src: "./fonts/inter-latin-wght-normal.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-inter-latin",
  display: "swap",
  adjustFontFallback: false,
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
  ],
});

const interLatinExt = localFont({
  src: "./fonts/inter-latin-ext-wght-normal.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-inter-ext",
  display: "swap",
  adjustFontFallback: false,
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",
    },
  ],
});

export const inter = {
  variable: `${interLatin.variable} ${interLatinExt.variable}`,
};
