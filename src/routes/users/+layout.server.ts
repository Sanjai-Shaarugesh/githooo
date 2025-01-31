import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from '../$types';

export const prerender = false;

export const load: LayoutServerLoad = async (event) => {
    const session = await event.locals.auth();
    const RandomUsers = Math.floor(Math.random() * 100000);

    if (!session?.user) {
        throw redirect(303, '/login');
    }

    const getRandomUsers = async () => {
        try {
            const res = await fetch(`https://api.github.com/users?since=${RandomUsers}&per_page=100`, {
                headers: {
                    Accept: 'application/vnd.github+json',
					//@ts-ignore
                    Authorization: `Bearer ${session?.access_token}`,
                    'X-Github-Api-Version': '2022-11-28'
                }
            });

            if (!res.ok) {
                throw new Error(`Failed to fetch users: ${res.status}`);
            }

            const users = await res.json();

            const userDetailsPromise = users.map(async (user: any) => {
                // Check if user.url exists
                if (!user?.url) {
                    console.warn('User URL is undefined:', user);
                    return null;
                }

                try {
                    // Fetch user details
                    const userDetailsRes = await fetch(user.url, {
                        headers: {
                            Accept: 'application/vnd.github+json',
							//@ts-ignore
                            Authorization: `Bearer ${session?.access_token}`,
                            'X-Github-Api-Version': '2022-11-28'
                        }
                    });

                    if (!userDetailsRes.ok) {
                        throw new Error(`Failed to fetch user details: ${userDetailsRes.status}`);
                    }

                    const userDetails = await userDetailsRes.json();

                    // Check if repos_url exists
                    if (!userDetails?.repos_url) {
                        console.warn('Repos URL is undefined:', userDetails);
                        return {
                            ...userDetails,
                            totalStars: 0
                        };
                    }

                    // Fetch repositories
                    const reposRes = await fetch(userDetails.repos_url, {
                        headers: {
                            Accept: 'application/vnd.github+json',
							//@ts-ignore
                            Authorization: `Bearer ${session?.access_token}`,
                            'X-Github-Api-Version': '2022-11-28'
                        }
                    });

                    if (!reposRes.ok) {
                        throw new Error(`Failed to fetch repositories: ${reposRes.status}`);
                    }

                    const repos = await reposRes.json();
                    const totalStars = repos.reduce((sum: number, repo: any) => sum + (repo.stargazers_count || 0), 0);

                    return {
                        ...userDetails,
                        totalStars
                    };
                } catch (error) {
                    console.error('Error processing user:', user.login, error);
                    return null;
                }
            });

            const userDetails = await Promise.all(userDetailsPromise);
            const filteredUserDetails = userDetails.filter(user => user !== null);

            return filteredUserDetails.sort((a: any, b: any) => {
                if (b.followers === a.followers) {
                    return b.totalStars - a.totalStars;
                }
                return b.followers - a.followers;
            });
        } catch (error) {
            console.error('Error in getRandomUsers:', error);
            return [];
        }
    };

    return {
        RandomUsers: await getRandomUsers()
    };
};