import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { password } = await request.json();

  if (password === process.env.PASSWORD_GUARD_KEY) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  return NextResponse.json({ success: false }, { status: 200 });
}
