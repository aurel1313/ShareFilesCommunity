import { sign } from "crypto";
import NextAuth from "next-auth";
import Email from "next-auth/providers/email";
import Github from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
export const authOptions = {
    secret : process.env.NEXTAUTH_SECRET,
  providers: [

        
    DiscordProvider({
      clientId: process.env.DISCORD_ID,
      clientSecret: process.env.DISCORD_SECRET,
    }),
    Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    })
     
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
  },

  pages:{
    signIn: '/auth/signin',
  },
  
};

export default NextAuth(authOptions)