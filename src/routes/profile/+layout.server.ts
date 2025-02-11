/* eslint-disable @typescript-eslint/no-unused-vars */
// +layout.server.ts
import { redirect, error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const prerender = false;

export const load: LayoutServerLoad = async ({ locals }) => {
  const session = await locals.getSession();
  
  if (!session?.user) {
    throw redirect(303, '/login');
  }
  
  if (!session.accessToken) {
    throw error(401, 'No access token available');
  }

  const githubFetch = async (endpoint: string) => {
    const res = await fetch(`https://api.github.com${endpoint}`, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${session.accessToken}`,
        'X-Github-Api-Version': '2022-11-28'
      }
    });
    
    if (!res.ok) {
      throw error(res.status, `Failed to fetch ${endpoint}: ${res.statusText}`);
    }
    
    return res.json();
  };

  try {
    const [user, followers] = await Promise.all([
      githubFetch('/user'),
      githubFetch('/user/followers')
    ]);

    return {
      user,
      session,
      followers
    };
  } catch (e) {
    console.error('GitHub API Error:', e);
    throw error(500, 'Failed to fetch GitHub data');
  }
};

// Types for GitHub API responses
interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  // Add other fields you need
}

interface GitHubFollower {
  login: string;
  id: number;
  avatar_url: string;
  // Add other fields you need
}

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