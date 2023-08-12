import { Prisma } from "@prisma/client";

import prisma from "../lib/prisma";

const tasks: Prisma.TaskCreateInput[] = [
  { title: "Setup Discord server" },
  { title: "Make gamer friends" },
  { title: "Invite friends to play Valorant" },
  { title: "Win all the games" },
];

async function main() {
  // waiting for each task to be created before creating the next one
  tasks.forEach(async (task: Prisma.TaskCreateInput) => {
    const taskExists = await prisma.task.findFirst({
      where: { title: task.title },
    });
    if (taskExists) return console.log(`Task ${task.title} already exists`);

    await prisma.task.create({ data: task });
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
