import { AppProps } from "next/app"
import { Provider } from "react-redux"

import { store } from "../app/store"

import "tailwindcss/tailwind.css"
import "../assets/styles/main.css"

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
