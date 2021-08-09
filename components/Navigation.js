import Link from "next/link"
import { useRouter } from "next/router"

export default function Navigation() {
  const router = useRouter()
  const links = [
    { href: "/coding-challenges/api-search", text: "GitHub API" },
    { href: "/coding-challenges/merge", text: "Merged Array" },
  ]
  return (
    <nav className="flex flex-wrap mb-4">
      <p className="w-full">
        NOTE: These challenges and the design of the pages are a work in progress.
      </p>
      <p className="font-bold mr-4">Challenges:</p>
      <div className="flex flex-wrap space-x-4">
        {links.map((link, index) => {
          return (
            <Link href={link.href} key={index}>
              <a
                className={`underline${
                  link.href === router.pathname ? " italic text-indigo-700" : ""
                }`}
              >
                {link.text}
              </a>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
