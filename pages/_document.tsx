import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en" className="bg-slate-50 text-slate-50">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "f95f7928ffdf42758a3fcc9bede5d584"}'
        ></script>
      </body>
    </Html>
  )
}
