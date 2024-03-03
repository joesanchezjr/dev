import localFont from "next/font/local";

export const newsreader = localFont({
  src: [
    {
      path: "./Newsreader/Newsreader-VariableFont_opsz,wght.ttf",
      style: "normal",
    },
    {
      path: "./Newsreader/Newsreader-Italic-VariableFont_opsz,wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-newsreader",
});

export const inter = localFont({
  src: [
    {
      path: "./Inter/InterVariable.woff2",
      style: "normal",
    },
    {
      path: "./Inter/InterVariable-Italic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-inter",
});
