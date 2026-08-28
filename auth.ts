import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;

        if (
          email !== process.env.ADMIN_EMAIL ||
          password !== process.env.ADMIN_PASSWORD
        ) {
          return null;
        }

        return {
          id: "admin",
          email: process.env.ADMIN_EMAIL,
          name: "FineX Admin",
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/admin/login",
  },
});