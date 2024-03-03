export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="max-width flex flex-wrap justify-between gap-y-2 gap-x-4  py-4 text-xs text-zinc-500">
        <span>Ad astra per aspera ✨</span>
        <span className="self-end">
          &copy; 2014 - {new Date().getFullYear()} Joe Sanchez Jr.
        </span>
      </div>
    </footer>
  );
}
