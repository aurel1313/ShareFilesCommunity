import NextAuth from "next-auth";
import Github from "next-auth/providers/github";

const authOptions = {
    secret : process.env.NEXTAUTH_SECRET,
  providers: [
   
    Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
