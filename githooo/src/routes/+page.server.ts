//let followeList:any[] = []

import type { PageServerLoad } from './$types';

export const load = (async({parent}) =>{
    const {session} = await parent();
    const getFollowers = async ()=>{
        const res = await fetch("https://api.github.com/user/followers",{
            headers: {
                Accept: "application/vnd.github+json",
                //@ts-ignore
                Authorization: `Bearer ${session?.access_token}`,
                "X-Github-Api-Version":"2022-11-28"
            }
        });

        return await res.json();
        
    }

    return {
        followers: await getFollowers()
    }


}) satisfies PageServerLoad;