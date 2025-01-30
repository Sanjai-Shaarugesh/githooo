import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load:PageServerLoad = async (event) => {

	const session = await event.locals.auth();

	const RandomUsers = Math.floor(Math.random() * 1000000);

	
	const getRandomUsers = async () => {
		const res = await fetch(`https://api.github.com/users?since=${RandomUsers}&per_page=50`, {
			headers: {
				Accept: 'application/vnd.github+json',
				//@ts-ignore
				Authorization: `Bearer ${session?.access_token}`,
				'X-Github-Api-Version': '2022-11-28'
			}
		});

		return await res.json();
	};
	return {
		RandomUsers: await getRandomUsers()
	};
};
