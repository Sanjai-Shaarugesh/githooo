import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import { GITHUB_ID, GITHUB_SECRET, AUTH_SECRET } from '$env/static/private';

export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [
    GitHub({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET
    })
  ],

  // Use AUTH_SECRET for JWT token encryption
  secret: AUTH_SECRET,

  // Trust host is necessary for Vercel since hostnames can change
  trustHost: true,

  session: {
    strategy: 'jwt',
    // JWT settings for better session persistence
    maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
    updateAge: 24 * 60 * 60, // Refresh token after 24 hours
  },

  cookies: {
    sessionToken: {
      name: '__Secure-next-auth.session-token',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        // In Vercel, ensure 'secure' is true since it's HTTPS by default
        secure: true,
      }
    },
  },

  callbacks: {
    async jwt({ token, account }) {
      // Persist the access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client
	  //@ts-ignore
      session.access_token = token.accessToken as string;
      return session;
    }
  }
});