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

// //

// // 3779fd73-9070-4a39-9c4c-7180481c14bb

// // ee81d8a1-8201-40ae-b6bd-2742fd02d97f

// // 92cf57c0-6076-4810-a1ad-fea74298a2ae

// // e03b1099-ab5f-4db6-b7b5-9d6f26a88c45

// // 6813f834-2563-45f0-a7ee-28e42a37e403
