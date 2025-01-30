import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const prerender = 'auto';

export const load: PageServerLoad = async (event) => {
  const session = await event.locals.auth();

  if (!session?.user) {
    throw redirect(303, '/login');
  }

  const fetchFollowers = async () => {
    try {
      const res = await fetch(`https://api.github.com/user/followers`, {
        headers: {
          Accept: 'application/vnd.github+json',
		  //@ts-ignore
          Authorization: `Bearer ${session?.access_token}`,
          'X-Github-Api-Version': '2022-11-28'
        }
      });

      if (!res.ok) throw new Error('Failed to fetch followers');
      return await res.json();
    } catch (error) {
      console.error('Error fetching followers:', error);
      return null;
    }
  };

  const fetchUserInfo = async () => {
    try {
      const res = await fetch(`https://api.github.com/user`, {
        headers: {
          Accept: 'application/vnd.github+json',
		  //@ts-ignore
          Authorization: `Bearer ${session?.access_token}`,
          'X-Github-Api-Version': '2022-11-28'
        }
      });

      if (!res.ok) throw new Error('Failed to fetch user info');
      return await res.json();
    } catch (error) {
      console.error('Error fetching user info:', error);
      return null;
    }
  };

  return {
    user: await fetchUserInfo(),
    session,
    followers: await fetchFollowers()
  };
};