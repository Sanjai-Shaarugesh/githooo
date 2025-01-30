import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import {GITHUB_PROFILE } from "$env/static/private"

export const prerender = false;

export const load: PageServerLoad = async (event) => {
	const session = await event.locals.auth();

	if(session?.user){
       throw redirect(303,"/profile")
	}
	//console.log(session)

	return {
		session: session,
		githubProfile : GITHUB_PROFILE

	};
};
