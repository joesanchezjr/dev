import { AppProps } from "next/app"
import "tailwindcss/tailwind.css"
import "../assets/styles/main.css"

export default function CustomApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
