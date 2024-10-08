import { Providers } from "@/context/providers"
import clsx from "clsx"

import Script from "next/script"
import { Metadata } from "next"
import { BASE_URL, IS_PROD } from "@/utils/constants"
import { Analytics as VercelAnalytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from "@/components/footer"

import { inter, newsreader } from "@/fonts"
import { MouseGradient } from "@/components/mouse-gradient/mouse-gradient"

import "@/styles/globals.css"
import { CommandMenu } from "@/components/command-menu/command-menu"
import DefaultLayout from "@/components/layout/layout"
import Link from "next/link"

const title = "Joe Sanchez Jr. | Software Engineer for Hire"
const description =
  "Creative front-end/full-stack developer building apps and websites for people. Dedicated to making the internet a more beautiful and accessible space."

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  icons:
    "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 16 16'><text x='0' y='14'>👋</text></svg>",
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
        url: `${BASE_URL}/og-image-v03.04.png`,
      },
    ],
  },
  twitter: {
    title: title,
    card: "summary_large_image",
    images: [`${BASE_URL}/og-image-v03.04.png`],
  },
  keywords: ["Software engineer", "Front-end developer", "UI engineer", "React engineer", "Typescript engineer"],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const htmlClasses = clsx(inter.variable, newsreader.variable, "relative antialiased")
  return (
    <html lang="en" className={htmlClasses}>
      <body className="relative flex min-h-[100svh] flex-col justify-center bg-zinc-50 text-zinc-700 dark:bg-zinc-950 dark:text-zinc-300">
        <Providers>
          <MouseGradient />
          <CommandMenu />
          <DefaultLayout>{children}</DefaultLayout>
          <Link
            href="/resume"
            download
            className="hidden"
            target="_blank"
            rel="noopener noreferrer"
            id="download-resume-link"
          />
        </Providers>

        <Footer />

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
  )
}
