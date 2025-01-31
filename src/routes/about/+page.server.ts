import { redirect } from '@sveltejs/kit';

import {GITHUB_PROFILE } from "$env/static/private"
import type { PageServerData } from '../$types';


export const prerender = false;

export const load = async (event: { locals: { auth: () => Promise<any> } }) => {
	const session = await event.locals.auth();

	
	//console.log(session)

	return {
		session: session,
		githubProfile : GITHUB_PROFILE

	};
};