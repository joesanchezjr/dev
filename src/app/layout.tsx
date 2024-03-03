import { Providers } from "@/context/providers";
import clsx from "clsx";
import { NavigationEvents } from "@/components/navigation-events";
import { Suspense } from "react";
import Script from "next/script";
import { Metadata } from "next";
import { BASE_URL, IS_PROD } from "@/utils/constants";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/footer";

import { inter, newsreader, fira_code } from "@/fonts";
import { MouseGradient } from "@/components/mouse-gradient/mouse-gradient";

import "@/styles/globals.css";

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
}: {
  children: React.ReactNode;
}) {
  const htmlClasses = clsx(
    inter.variable,
    fira_code.variable,
    newsreader.variable,
    "antialiased",
  );
  return (
    <html lang="en" className={htmlClasses}>
      <body className="relative min-h-[100svh] bg-zinc-50 text-zinc-700 dark:bg-zinc-950 dark:text-zinc-300 flex flex-col justify-center">
        <MouseGradient />
        <Providers>{children}</Providers>

        <Footer />

        <Suspense fallback={null}>
          <NavigationEvents />
        </Suspense>
        {IS_PROD && (
          <>
            <Script
              defer
              src="https://static.cloudflareinsights.com/beacon.min.js"
              data-cf-beacon='{"token": "f95f7928ffdf42758a3fcc9bede5d584"}'
            />
            <VercelAnalytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  );
}
