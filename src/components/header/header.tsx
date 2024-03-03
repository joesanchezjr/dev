import { Status } from "./status"

export function Header() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-lg font-medium">Joe Sanchez Jr.</h1>
        <Status />
      </div>
      <p className="max-w-[65ch]">
        <span className="font-serif text-lg italic">Software Engineer &mdash;</span> Creative developer with seven years
        of building for the web. Dedicated to making the internet a more beautiful and accessible space.
      </p>
    </div>
  )
}
