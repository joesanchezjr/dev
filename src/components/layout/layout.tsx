import { Header } from "@/components/header/header"

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="container space-y-12 py-16 md:py-32">
        <Header />
        {children}
      </div>
    </main>
  )
}
