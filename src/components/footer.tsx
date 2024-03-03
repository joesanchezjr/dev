export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="container flex flex-wrap justify-between gap-x-4 gap-y-2  py-4 text-xs text-zinc-500">
        <span>Ad astra per aspera ✨</span>
        <span className="self-end">&copy; 2014 - {new Date().getFullYear()} Joe Sanchez Jr.</span>
      </div>
    </footer>
  )
}
