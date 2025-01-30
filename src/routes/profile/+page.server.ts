import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const prerender = 'auto';
export const load:PageServerLoad = async (event) => {
	const session = await event.locals.auth();
	//console.log(session);

	if (!session?.user) {
		throw redirect(303, '/login');
	}
	const followers = async () => {
		const res = await fetch(`https://api.github.com/user/followers`, {
			headers: {
				Accept: 'application/vnd.github+json',
				//@ts-ignore
				Authorization: `Bearer ${session.access_token}`,
				'X-Github-Api-Version': '2022-11-28'
			}
		});

		return await res.json();
	};

	const userInfo = async () => {
		const res = await fetch(`https://api.github.com/user`, {
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
		user: await userInfo(),
		session: await session,
		followers: await followers()
	};
};