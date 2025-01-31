import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types'; // Changed path to local types

export const prerender = 'auto';

export const load: LayoutServerLoad = async (event) => {
    const session = await event.locals.auth();
    console.log(session);

    // Check if session has a user
    if (!session?.user) {
        throw redirect(303, '/login');
    }

    // Define headers once to avoid duplication
    const headers = {
        'Accept': 'application/vnd.github+json',
		//@ts-ignore
        'Authorization': `Bearer ${session.access_token}`,
        'X-Github-Api-Version': '2022-11-28'
    };

    // Fetch followers
    const followers = async () => {
        try {
            const res = await fetch(`https://api.github.com/user/followers`, { headers });
            if (!res.ok) {
                throw new Error(`API request failed with status ${res.status}`);
            }
            return await res.json();
        } catch (error) {
            console.error('Failed to fetch followers:', error);
            return []; // Return an empty array or handle the error as needed
        }
    };

    // Fetch user info
    const userInfo = async () => {
        try {
            const res = await fetch(`https://api.github.com/user`, { headers });
            if (!res.ok) {
                throw new Error(`API request failed with status ${res.status}`);
            }
            return await res.json();
        } catch (error) {
            console.error('Failed to fetch user info:', error);
            return {}; // Return an empty object or handle the error as needed
        }
    };

    return {
        user: await userInfo(),
        session: session,
        followers: await followers()
    };
};