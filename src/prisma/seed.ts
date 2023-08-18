import { Prisma } from "@prisma/client";

import prisma from "../lib/prisma";

const tasks: Prisma.TaskCreateInput["title"][] = [
  "Setup Discord server",
  "Make gamer friends",
  "Invite friends to play Valorant",
  "Win all the games",
];

async function main() {
  // waiting for each task to be created before creating the next one
  tasks.forEach(async (task) => {
    const taskExists = await prisma.task.findFirst({
      where: { title: task },
    });
    if (taskExists) return console.log(`Task ${task} already exists`);

    await prisma.task.create({ data: { title: task } });
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
