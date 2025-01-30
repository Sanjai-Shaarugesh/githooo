import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const prerender = false;

export const load: LayoutServerLoad = async (event) => {
	const session = await event.locals.auth();

	return {
		session: session
	};
};
