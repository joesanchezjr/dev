import Navigation from "./Navigation"

export default function Header({ title, description }) {
  return (
    <header className="p-4">
      <Navigation />
      <div className="border-b border-ingido-700 pb-2">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p>{description}</p>
      </div>
    </header>
  )
}