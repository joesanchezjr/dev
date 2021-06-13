import React from "react"
import Link from "next/link"
import Head from "next/head"

import LinkedIn from "../assets/svgs/linkedin-brands.svg"
import Globe from "../assets/svgs/globe-light.svg"
import Github from "../assets/svgs/github-brands.svg"

type Props = {
  children?: React.ReactNode
  title?: string
}

const Layout = ({ children }: Props) => (
  <>
    <Head>
      <title>Joe Sanchez Jr | Front-End Engineer - Available for hire!</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width, viewport-fit=cover" />

      <meta name="title" content="Joe Sanchez Jr | Front-End Engineer - Available for hire!" />
      <meta name="description" content="4+ years of experience with web development. Austin, TX or remote work." />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.joesanchezjr.dev/" />
      <meta property="og:title" content="Joe Sanchez Jr | Front-End Engineer - Available for hire!" />
      <meta property="og:description" content="4+ years of experience with web development. Austin, TX or remote work." />
      <meta property="og:image" content="https://www.joesanchezjr.dev/cover.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.joesanchezjr.dev/" />
      <meta property="twitter:title" content="Joe Sanchez Jr | Front-End Engineer - Available for hire!" />
      <meta property="twitter:description" content="4+ years of experience with web development. Austin, TX or remote work."/>
      <meta property="twitter:image" content="https://www.joesanchezjr.dev/cover.png"/>
    </Head>
    <header className="notch-padding">
      <div className="p-4 flex flex-col sm:flex-row  justify-between sm:items-center">
        <nav>
          <h1 className="text-3xl uppercase font-extrabold tracking-wide">
            <Link href="/">
              <a>Joe Sanchez Jr</a>
            </Link>
          </h1>
        </nav>
        <div className="flex items-center mt-2 sm:mt-0">
          <a
            href="https://www.joesanchezjr.com/?utm_source=dev-site"
            className="mr-2 flex items-center hover:text-indigo-300"
          >
            <Globe className="h-6 mr-2 inline" /> Blog
          </a>
          &nbsp;/&nbsp;
          <a
            href="https://www.linkedin.com/in/joesanchezjr/"
            className="ml-2 flex items-center hover:text-indigo-300"
          >
            <LinkedIn className="h-6 mr-2 inline" /> LinkedIn
          </a>
          &nbsp;/&nbsp;
          <a
            href="https://github.com/joesanchezjr"
            className="ml-2 flex items-center hover:text-indigo-300"
          >
            <Github className="h-6 mr-2 inline" /> Github
          </a>
        </div>
      </div>
    </header>
    <main>{children}</main>

    <footer className="bg-gray-50">
      <div className="max-w-screen-lg text-center mx-auto px-4 py-8">
        <p className="underline hover:italic"><a href="mailto:joe@joesanchezjr.com">joe@joesanchezjr.com</a></p>
      </div>
    </footer>
  </>
)

export default Layout
