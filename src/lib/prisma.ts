import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if ([process.env.VERCEL_ENV, process.env.NODE_ENV].includes("development"))
  global.prisma = prisma;

export default prisma;
