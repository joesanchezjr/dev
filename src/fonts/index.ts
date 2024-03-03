import { Fira_Code } from "next/font/google";

import localFont from "next/font/local";

export const fira_code = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
});

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
