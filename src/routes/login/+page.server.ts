import { GITHUB_PROFILE } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const prerender = 'auto';

export const load: PageServerLoad = () => {
	return {
		githubProfile: GITHUB_PROFILE
	};
};
