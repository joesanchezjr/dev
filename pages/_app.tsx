import { AppProps } from "next/app"
import "tailwindcss/tailwind.css"

export default function CustomApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
