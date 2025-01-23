import type { PageServerLoad } from "./$types";

export const load : PageServerLoad = async (e) =>{
    return {
        Sessions : await e.locals.auth()
    }
}