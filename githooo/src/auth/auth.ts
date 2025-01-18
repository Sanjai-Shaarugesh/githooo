import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/sveltekit/providers/github"
import { GITHUB_ID,GITHUB_SECRET } from "$env/static/private"

 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [
    GitHub({
        clientId:GITHUB_ID,
        clientSecret:GITHUB_SECRET
    })],

    callbacks: {
      async jwt({ token, account }) {
        // Persist the access_token to the token right after signin
        if (account) {
          token.accessToken = account.access_token
        }
        return token
      },
      async session({ session, token }) {
        // Send properties to the client
        //@ts-ignore
        session.access_token = token.accessToken
        return session
      }
    }
})