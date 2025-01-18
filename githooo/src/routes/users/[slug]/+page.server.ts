//@ts-ignore
export const load = (async({fetch,params,parent}) =>{
    const username = params.slug
   // console.log(params)
    
    const {session} = await parent();

    const fetchUsers =  async () =>{
        const res = await fetch(`https://api.github.com/users/${username}`,{
            headers:{
                Accept:"application/vnd.github+json",
                //@ts-ignore
                Autorization: `Bearer ${session?.access_token}`,
                "X-Github-Api-Version":"2022-11-28"
            }
        });

        return await res.json();
    }

    return {
        //@ts-ignore
        users: await fetchUsers()
    }
})