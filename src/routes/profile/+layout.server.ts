import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from '../$types';

export const prerender = false;

export const load: LayoutServerLoad = async (event) => {
  const session = await event.locals.auth();

  if (!session?.user) {
    throw redirect(303, '/login');
  }

  const fetchFollowers = async () => {
    const res = await fetch(`https://api.github.com/user/followers`, {
      headers: {
        Accept: 'application/vnd.github+json',
		//@ts-ignore
        Authorization: `Bearer ${session.access_token}`,
        'X-Github-Api-Version': '2022-11-28'
      }
    });
    if (!res.ok) throw new Error('Failed to fetch followers');
    return res.json();
  };

  const fetchUserInfo = async () => {
    const res = await fetch(`https://api.github.com/user`, {
      headers: {
        Accept: 'application/vnd.github+json',
		//@ts-ignore
        Authorization: `Bearer ${session.access_token}`,
        'X-Github-Api-Version': '2022-11-28'
      }
    });
    if (!res.ok) throw new Error('Failed to fetch user info');
    return res.json();
  };

  const [user, followers] = await Promise.all([fetchUserInfo(), fetchFollowers()]);

  return {
    user,
    session,
    followers
  };
};