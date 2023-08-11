import Link from "next/link";
import "@/styles/globals.css";
import { Navigation } from "@/app/_components/navigation/navigation";

export function Header() {
  return (
    <>
      <header className="max-width flex items-center justify-between text-sm font-medium">
        <div className="group">
          <Link href="/">
            ¡Hola!{" "}
            <span
              role="img"
              aria-label="waving hand emoji"
              className="inline-block transition-transform group-hover:rotate-12"
            >
              👋
            </span>
          </Link>
        </div>
        {/* @todo: update nav to use list and to map over constant */}
        <nav className="flex items-center justify-end gap-4 text-slate-400">
          <a
            href="https://www.linkedin.com/in/joesanchezjr"
            className="py-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.github.com/joesanchezjr"
            className="py-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </nav>
      </header>
      <Navigation />
    </>
  );
}
