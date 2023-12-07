import "@/styles/globals.css";
import { Fira_Code, Inter } from "next/font/google";
import { Providers } from "@/context/providers";
import clsx from "clsx";
import { NavigationEvents } from "@/components/navigation-events";
import { Suspense } from "react";
import Script from "next/script";
import { Metadata } from "next";
import { BASE_URL, IS_PROD } from "@/utils/constants";
import { Header } from "@/components/header/header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const fira_code = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
});

const title = "Joe Sanchez Jr. | Software Engineer for Hire";
const description =
  "Creative front-end/full-stack developer building apps and websites for people. Dedicated to making the internet a more beautiful and accessible space.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  openGraph: {
    title,
    description,
    url: BASE_URL,
    siteName: title,
    locale: "en-US",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image-v12.07.png`,
      },
    ],
  },
  twitter: {
    title: title,
    card: "summary_large_image",
    images: [`${BASE_URL}/og-image-v12.07.png`],
  },
  keywords: [
    "Software engineer",
    "Front-end developer",
    "UI engineer",
    "React engineer",
    "Typescript engineer",
  ],
};

export default function RootLayout({
  children,
  modal,
  pokemon: _pokemon,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
  pokemon: React.ReactNode;
}) {
  const htmlClasses = clsx(inter.variable, fira_code.variable, "antialiased");
  return (
    <html lang="en" className={htmlClasses}>
      <body className="relative min-h-screen bg-slate-50 text-slate-700 dark:bg-slate-950 dark:text-slate-300">
        <Providers>
          <Header />
          {modal}
          {children}
          <Suspense fallback={null}>
            <NavigationEvents />
          </Suspense>
        </Providers>
        {IS_PROD && (
          <Script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token": "f95f7928ffdf42758a3fcc9bede5d584"}'
          />
        )}
      </body>
    </html>
  );
}
