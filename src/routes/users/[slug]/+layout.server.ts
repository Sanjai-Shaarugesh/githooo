import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from '../$types';

export const prerender = false; // Ensure this route is not statically prerendered

export const load: LayoutServerLoad = async ({ fetch, params, locals }) => {
  const username = params.slug; // Extract the username from the URL params

  // Retrieve the session from the parent layout
  const session = await locals.auth();

  // Redirect to login if the user is not authenticated
  if (!session?.user) {
    throw redirect(303, '/login');
  }


  const fetchUsers = async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
          Accept: 'application/vnd.github+json',
          //@ts-ignore
          Authorization: `Bearer ${session.access_token}`, // Fixed typo in "Authorization"
          'X-Github-Api-Version': '2022-11-28'
        }
      });

      if (!res.ok) {
        throw new Error(`GitHub API responded with status: ${res.status}`);
      }

      return res.json();
    } catch (error) {
      console.error('Error fetching GitHub user:', error);
      throw redirect(303, '/error'); 
    }
  };

  try {
   
    const users = await fetchUsers();
    return { users };
  } catch (error) {
    console.error('Load function error:', error);
    throw redirect(303, '/error'); 
  }
};