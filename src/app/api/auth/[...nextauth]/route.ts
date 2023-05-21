import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import { compare } from "bcryptjs";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      name: "Github",
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        // FROM nextchat.ai/chat
        // try {
        //   // Make a call to the Java backend with the user's credentials.
        //   const response = await axiosInstance.post('/login', credentials);
        //   // Extract the JWT token from the response.
        //   const token = response.data.token;
        //   // Return the token as an object with the user object.
        //   return { token, user: { name: 'John Doe', email: 'johndoe@example.com' } };
        // } catch (error) {
        //   // Return null if the authentication fails.
        //   return null;
        // }
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials: incomplete");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user || !user?.hashedPassword) {
          throw new Error("Invalid credentials: user not found");
        }
        const isCorrectPassword = compare(
          credentials.password,
          user.hashedPassword
        );
        if (!isCorrectPassword) {
          throw new Error("Invalid credentials: password fail");
        }
        return { ...user, randomKey: "hey cool" };
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      // // If a JWT token exists, add it to the session object.
      // session.jwt = token.jwt;
      // return Promise.resolve(session);
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
        },
      };
    },
    jwt: ({ token, user }) => {
      // // If a JWT token exists, add it to the token object.
      // if (user?.token) {
      //   token.jwt = user.token;
      // }
      // return Promise.resolve(token);
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        };
      }
      return token;
    },
  },
  pages: {
    signIn: "/",
  },
  debug: process.env.NODE_ENV === "development",
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
