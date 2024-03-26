import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { nanoid } from "nanoid"

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/blog") {
    return NextResponse.redirect(new URL(`/`, request.url))
  }
  if (request.nextUrl.pathname === "/resume") {
    const id = nanoid()
    return NextResponse.redirect(new URL(`/documents/resume.pdf?v=${id}`, request.url))
  }
}

export const config = {
  matcher: ["/resume", "/blog"],
}
