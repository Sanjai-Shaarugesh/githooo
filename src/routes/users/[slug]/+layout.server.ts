import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from '../../$types';

export const load: LayoutServerLoad = async ({ fetch, params, locals }) => {
    const username = params.slug;

    const session = await locals.auth(); // Changed 'event' to 'locals'

    if (!session?.user) {
        throw redirect(303, '/login');
    }

    const fetchUsers = async () => {
        try {
            const res = await fetch(`https://api.github.com/users/${username}`, {
                headers: {
                    'Accept': 'application/vnd.github+json',
					//@ts-ignore
                    'Authorization': `Bearer ${session?.access_token}`, // Fixed 'Autorization' typo
                    'X-Github-Api-Version': '2022-11-28'
                }
            });

            if (!res.ok) {
                throw new Error(`API request failed with status ${res.status}`);
            }

            return await res.json();
        } catch (error) {
            console.error('Failed to fetch user:', error);
            return null; // Return null or handle error as needed
        }
    };

    return {
        users: await fetchUsers()
    };
};