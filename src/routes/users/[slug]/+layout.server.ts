import { redirect } from '@sveltejs/kit';
import type { LayoutServerData } from '../../$types';

export const prerender = false;

export const load = async ({ fetch, params, parent }) => {
  const username = params.slug;

  // Retrieve session data from the parent layout
  const { session } = await parent();

  // If the user is not logged in, redirect to the login page
  if (!session?.user) {
    throw redirect(303, '/login');
  }

  // Fetch user data from GitHub API
  const fetchUsers = async () => {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${session.access_token}`,
        'X-Github-Api-Version': '2022-11-28'
      }
    });

    // Handle errors if the request fails
    if (!res.ok) {
      throw new Error(`Failed to fetch user data for ${username}: ${res.statusText}`);
    }

    return res.json();
  };

  try {
    // Fetch user data and return it
    const users = await fetchUsers();
    return { users, session };
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw redirect(303, '/error'); // Redirect to an error page if necessary
  }
};