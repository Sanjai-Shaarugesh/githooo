import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import {GITHUB_PROFILE } from "$env/static/private"

export const prerender = false;

export const load: PageServerLoad = async ({locals}) => {
	const session = await locals.getSession();

	if(session?.user){
       throw redirect(303,"/profile")
	}
	

	return {
		session: session,
		githubProfile : GITHUB_PROFILE

	};
};
