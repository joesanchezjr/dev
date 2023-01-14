import Download from "~icons/download"
import Sparkles from "~icons/sparkles"

export default function Header() {
  return (
    <div className="mt-4 flex justify-between">
      <div className="flex items-center gap-2 self-start">
        <Sparkles />
        <span className="text-slate-50 text-lg">Joe Sanchez Jr.</span>
      </div>

      <nav>
        <ul className="flex flex-col justify-end sm:gap-1">
          <li className="hover:underline">
            <a className="flex items-center gap-1" href="/static/joe-sanchez-resume-private.pdf" download>
              Resume <Download />
            </a>
          </li>
          <li className="hover:underline">
            <a href="https://www.linkedin.com/in/joesanchezjr/" target="_blank" rel="noreferrer noopener">
              LinkedIn
            </a>
          </li>
          <li className="hover:underline">
            <a href="https://github.com/joesanchezjr" target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
          </li>
          <li className="hover:underline">
            <a href="https://www.joesanchezjr.com/" target="_blank" rel="noreferrer noopener">
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
