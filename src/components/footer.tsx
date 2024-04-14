import { DownloadCloud, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mt-auto pb-4 md:pb-0">
      <div className="container flex flex-wrap justify-between gap-x-4 gap-y-2  py-4 text-sm text-zinc-500">
        <nav className="space-x-2">
          <Link href="/blog" className="hover:text-indigo-500 hover:underline hover:underline-offset-4">
            /blog
          </Link>
        </nav>
        <div className="space-x-2">
          <Link
            href="/resume"
            className="hover:text-indigo-500 hover:underline hover:underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            download resume <DownloadCloud className="inline h-2 w-2" />
          </Link>
          <a
            href="https://github.com/joesanchezjr/dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 hover:text-indigo-500 hover:underline hover:underline-offset-4"
          >
            view source <ExternalLink className="inline h-2 w-2" />
          </a>
        </div>
        {/* <span className="self-end">&copy; 2014 - {new Date().getFullYear()} Joe Sanchez Jr.</span> */}
      </div>
    </footer>
  )
}
