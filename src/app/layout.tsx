import Link from "next/link";
import "@/styles/globals.css";
import { Fira_Code, Inter } from "next/font/google";
import { Providers } from "@/context/providers";
import clsx from "clsx";
import { NavigationEvents } from "@/components/navigation-events";
import { Suspense } from "react";
import Script from "next/script";
import { Navigation } from "@/app/_components/navigation/navigation";
import { AppNotification } from "@/components/notification";
import { Metadata } from "next";
import { BASE_URL } from "@/utils/constants";

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

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Joe Sanchez Jr.",
    template: "%s | Joe Sanchez Jr.",
  },
  description: "Senior Front-End/UI Engineer, Web | React + TypeScript",
  openGraph: {
    title: "Joe Sanchez Jr",
    description: "Senior Front-End/UI Engineer, Web | React + TypeScript",
    url: BASE_URL,
    siteName: "Joe Sanchez Jr.",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/api/og`,
      },
    ],
  },
  twitter: {
    title: "Joe Sanchez Jr.",
    card: "summary_large_image",
    images: [`${BASE_URL}/api/og`],
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
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const htmlClasses = clsx(inter.variable, fira_code.variable, "antialiased");
  return (
    <html lang="en" className={htmlClasses}>
      <body className="relative min-h-screen bg-slate-50 text-slate-600">
        <Providers>
          <header className="max-width flex items-center justify-between text-sm font-medium">
            <div className="group">
              <Link href="/">
                ¡Hola!{" "}
                <span
                  role="img"
                  aria-label="waving hand emoji"
                  className="inline-block transition-transform group-hover:rotate-12"
                >
                  👋
                </span>
              </Link>
            </div>
            <nav className="flex items-center justify-end gap-4 text-slate-400">
              <a
                href="https://www.linkedin.com/in/joesanchezjr"
                className="py-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://www.github.com/joesanchezjr"
                className="py-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </nav>
          </header>
          <Navigation />
          {modal && modal}
          {children}
          <Suspense fallback={null}>
            <NavigationEvents />
          </Suspense>
        </Providers>
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "f95f7928ffdf42758a3fcc9bede5d584"}'
        ></Script>
        <AppNotification />
      </body>
    </html>
  );
}
