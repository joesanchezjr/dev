import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  const { id, title, completed } = body;

  const paramsToUpdate = {
    ...(title && { title }),
    ...(completed && { completed }),
  };

  try {
    const task = await prisma.task.update({
      where: {
        id,
      },
      data: paramsToUpdate,
    });

    return NextResponse.json(task, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
