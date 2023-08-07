import "server-only";

import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

import clientPromise from "@/lib/mongodb";
import { DATABASE } from "@/utils/constants";

const adapterOptions = {
  databaseName: DATABASE,
};

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise, adapterOptions),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
} satisfies AuthOptions;
