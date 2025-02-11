/* eslint-disable @typescript-eslint/no-namespace */
// hooks.server.ts
import { SvelteKitAuth } from "@auth/sveltekit";
import GitHub from "@auth/sveltekit/providers/github";
import { GITHUB_ID, GITHUB_SECRET, AUTH_SECRET } from "$env/static/private";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { accounts, sessions, users, verificationTokens } from "../lib/db/schema";
import { db } from "../lib/db/index";
import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

// First, define your Auth.js configuration
const authHandle = SvelteKitAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  providers: [
    GitHub({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
  ],
  secret: AUTH_SECRET,
  trustHost: true,
  callbacks: {
    async jwt({ token, account, user }) {
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          userId: user.id,
        };
      }
      return token;
    },
    async session({ session, token }) {
          if (session.user) {
            (session.user as { id: string | undefined }).id = token.userId;
            session.accessToken = token.accessToken;
          }
          return session;
        },
  },
  session: {
    strategy: "jwt",
  },
});

// Create a handle function to add session to locals
const addSessionToLocals: Handle = async ({ event, resolve }) => {
  const session = await event.locals.getSession();
  event.locals.session = session;
  return resolve(event);
};

// Combine the handlers using sequence
export const handle = sequence(authHandle.handle, addSessionToLocals);
export const { signIn, signOut } = authHandle;

// Add type declarations
declare module "@auth/core/types" {
  interface Session {
    accessToken?: string;
    user?: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    accessToken?: string;
    userId?: string;
  }
}

// Add session to locals type
declare global {
  namespace App {
    interface Locals {
      getSession(): Promise<import("@auth/core/types").Session | null>;
      session: import("@auth/core/types").Session | null;
    }
  }
}