import {GITHUB_PROFILE} from '$env/static/private';
import type {PageServerLoad} from './$types';

export const load : PageServerLoad = ()=>{
    return {
        githubProfile: GITHUB_PROFILE
    }
}