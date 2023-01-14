import type { AppProps } from "next/app"
import { Inter, EB_Garamond } from "@next/font/google"

import "../styles/globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
})
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${ebGaramond.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
}
