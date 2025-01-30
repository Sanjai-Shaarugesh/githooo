import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from '../$types';

export const prerender = false;

export const load: LayoutServerLoad = async (event) => {
  // Authenticate the session
  const session = await event.locals.auth();
  const randomUserStart = Math.floor(Math.random() * 1000000);

  // Redirect if the user is not authenticated
  if (!session?.user) {
    throw redirect(303, '/login');
  }

  // Fetch a list of random users from the GitHub API
  const getRandomUsers = async () => {
    const res = await fetch(`https://api.github.com/users?since=${randomUserStart}&per_page=50`, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${session.access_token}`,
        'X-Github-Api-Version': '2022-11-28'
      }
    });

    // Handle fetch errors
    if (!res.ok) {
      throw new Error(`Failed to fetch random users: ${res.statusText}`);
    }

    return res.json();
  };

  try {
    // Return the fetched random users
    const randomUsers = await getRandomUsers();
    return { randomUsers };
  } catch (error) {
    console.error('Error fetching random users:', error);
    throw redirect(303, '/error'); // Redirect to an error page if necessary
  }
};
