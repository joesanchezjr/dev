import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

// should this be a DELETE?
export async function DELETE(request: Request) {
  const body = await request.json();
  const { id } = body;

  try {
    const task = await prisma.task.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
      },
    });

    return NextResponse.json(task, { status: 202 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
