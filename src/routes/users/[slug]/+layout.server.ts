import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from '../$types';

export const prerender = false; // Ensure this route is not statically prerendered
const name = 'users';

export const load: LayoutServerLoad = async ({ fetch, params, locals }) => {
  const username = params.slug; // Extract the username from the URL params

  // Retrieve the session from the parent layout
  const session = await locals.auth();

  // Redirect to login if the user is not authenticated
  if (!session?.user) {
    throw redirect(303, '/login');
  }

  const fetchFollowers = async () => {
    const res = await fetch(`https://api.github.com/users/${username}/followers`, {
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

const repo = async () =>{
  try{
    const res = await fetch(`https://api.github.com/users/${username}/repos`,{
      headers:{
        Accept: 'application/vnd.github+json',
        //@ts-ignore
        Authorization: `Bearer ${session.access_token}`,
        'X-Github-Api-Version': '2022-11-28'
      }
    });
    if(!res.ok) throw new Error('Failed to fetch repos');
    return res.json();
  }
  catch(error){
    console.error('Error fetching GitHub user:', error);
    throw redirect(303, '/error');
  }
}
  
  


  try {
   
    const users = await fetchUsers();
    const followers = await fetchFollowers();
    const repos = await repo();

    return { 
      users,
      followers,
      name,
      repos
     };
  } catch (error) {
    console.error('Load function error:', error);
    throw redirect(303, '/error'); 
  }
};