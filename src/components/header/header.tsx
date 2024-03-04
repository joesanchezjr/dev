import { PageTitle } from "./page-title"
import { Status } from "./status"

export function Header() {
  return (
    <div className="mb-6 flex items-center justify-between">
      <PageTitle />
      <Status />
    </div>
  )
}
