import NextAuth from "next-auth";
import { signIn, useSession } from "next-auth/react";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    GithubProvider({
      secret: process.env.NEXT_AUTH_SECRET,
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "name",
      credentials: {
        username: {
          label: "Guest",
          type: "text",
          placeholder: "your name here",
        },
      },
      async authorize(credentials, req) {
        const usernames = credentials.username
          .split(" ")
          .map((name) => name[0].toUpperCase() + name.slice(1))
          .join(" ");

        return {
          id: "guest",
          name: usernames,
        };
      },
    }),
  ],
  debug: true,
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
