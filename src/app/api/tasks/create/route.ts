import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const task = await prisma.task.create({
      data: {
        title: body.title,
      },
    });

    return NextResponse.json(task, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
