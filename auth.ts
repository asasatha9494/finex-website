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
        const email =
          typeof credentials?.email === "string"
            ? credentials.email
            : "";

        const password =
          typeof credentials?.password === "string"
            ? credentials.password
            : "";

        // Admin login
        if (
          email === process.env.ADMIN_EMAIL &&
          password === process.env.ADMIN_PASSWORD
        ) {
          return {
            id: "admin",
            email: process.env.ADMIN_EMAIL,
            name: "FineX Admin",
          };
        }

        // Client login
        if (
          email === process.env.CLIENT_EMAIL &&
          password === process.env.CLIENT_PASSWORD
        ) {
          return {
            id: "client-test",
            email: process.env.CLIENT_EMAIL,
            name: "Test Client",
          };
        }

        return null;
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