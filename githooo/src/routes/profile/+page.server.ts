

export const load = (async({parent})=>{
    const {session} = await parent();
    
    const followers = async() =>{
        const res = await fetch(`https://api.github.com/user/followers`,{
            headers:{
                Accept: "application/vnd.github+json",
                //@ts-ignore
                Authorization: `Bearer ${session?.access_token}`,
                "X-Github-Api-Version":"2022-11-28"
            }
        });

        return await res.json();

    }

    const userInfo = async() =>{
        const res = await fetch(`https://api.github.com/user`,{
            headers:{
                Accept: "application/vnd.github+json",
                //@ts-ignore
                Authorization: `Bearer ${session?.access_token}`,
                "X-Github-Api-Version":"2022-11-28"
            }
        });

        return await res.json();

    }


    
     return{
        user: await userInfo(),
        
      follwers : await followers()
     }
    })