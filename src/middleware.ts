import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { nanoid } from 'nanoid'

export function middleware(request: NextRequest) {
  const id = nanoid();
  return NextResponse.redirect(
    new URL(`/documents/resume.pdf?v=${id}`, request.url),
  );
}

export const config = {
  matcher: "/resume",
};
