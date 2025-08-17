// auth.ts

import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "./prisma";

const githubId = process.env.AUTH_GITHUB_ID;
const githubSecret = process.env.AUTH_GITHUB_SECRET;

if (!githubId || !githubSecret) {
  throw new Error("As variáveis de ambiente GITHUB_ID e GITHUB_SECRET não estão definidas.");
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub({
      clientId: githubId,
      clientSecret: githubSecret,
    }),
  ],
});