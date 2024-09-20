import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
const handler = NextAuth({
    // Configure one or more authentication providers
    providers: [
       GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
        scope: "user",
        })

        // ...add more providers here
    ],
    callbacks: {
        async session({ session, token }) {
            session.provider = token.provider; // Ajoute le provider à la session
            return session;
          },
          async jwt({ token, account }) {
            if (account) {
              token.provider = account.provider; // Ajoute le provider au token JWT
            }
            return token;
          },
    }
    });
    export { handler as GET, handler as POST }
