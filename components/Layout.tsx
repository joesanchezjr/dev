import React, { ReactNode } from "react"
import Link from "next/link"
import Head from "next/head"

import LinkedIn from "../assets/svgs/linkedin-brands.svg"
import Globe from "../assets/svgs/globe-light.svg"
import MapMarker from "../assets/svgs/map-marker-alt-light.svg"

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = "Developer" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="p-2 md:p-4 flex flex-col sm:flex-row  justify-between sm:items-center">
      <nav>
        <h1 className="text-3xl uppercase font-extrabold tracking-wide">
          <Link href="/">
            <a>DEVELOPER</a>
          </Link>
        </h1>
      </nav>
      <div className="flex items-center mt-2 sm:mt-0">
        <a
          href="https://www.joesanchezjr.com/?ref=dev-site"
          className="mr-2 flex items-center hover:text-indigo-300"
        >
          <Globe className="h-6 mr-2 inline" /> Blog
        </a>
        &nbsp;/&nbsp;
        <a
          href="https://www.linkedin.com/in/joesanchezjr/"
          className="mx-2 flex items-center hover:text-indigo-300"
        >
          <LinkedIn className="h-6 mr-2 inline" /> LinkedIn
        </a>
        &nbsp;–&nbsp;
        <p className="ml-2 flex items-center">
          <MapMarker className="h-6 mr-2 inline" />
          Austin, TX
        </p>
      </div>
    </header>
    <main>{children}</main>
  </div>
)

export default Layout
