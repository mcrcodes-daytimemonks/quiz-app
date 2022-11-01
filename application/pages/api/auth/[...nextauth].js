import NextAuth from "next-auth";
import { signIn, useSession } from "next-auth/react";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: 'name',
      credentials: {
        username: {
          label: 'Guest',
          type: 'text',
          placeholder: 'your name here'
        },
      },
      async authorize(credentials, req) {
        const { username } = credentials;
        if (username && username.length) {
          // localStorage.setItem('username', username);

          // signIn('Credentials');

          return username;
        }
        return null; 
      },
    })
  ],
};

export default NextAuth(authOptions);
