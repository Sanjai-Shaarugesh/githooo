import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/sveltekit/providers/github"
import { GITHUB_ID,GITHUB_SECRET,AUTH_SECRET } from "$env/static/private"


 
export const { handle, signIn, signOut  } = SvelteKitAuth({
  providers: [
    GitHub({
        clientId:GITHUB_ID,
        clientSecret:GITHUB_SECRET
    })],

    secret: AUTH_SECRET,
    trustHost: true, 

    callbacks: {
      async jwt({ token, account }) {
        
        if (account) {
          token.accessToken = account.access_token
        }
        return token
      },
      async session({ session, token }) {
        return {
          ...session,
          access_token: token.accessToken
        }
      }    }
})