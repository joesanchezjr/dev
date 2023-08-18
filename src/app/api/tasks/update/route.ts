import { NextResponse } from "next/server";
import { Task } from "@prisma/client";

import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const _task: Task = await request.json();

  try {
    const task = await prisma.task.update({
      where: {
        id: _task.id,
      },
      data: _task,
    });

    return NextResponse.json(task, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
