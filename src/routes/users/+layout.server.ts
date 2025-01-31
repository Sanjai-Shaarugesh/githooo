import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from '../$types';

export const prerender = false;

export const load:LayoutServerLoad = async (event) => {
	const session = await event.locals.auth();

	const RandomUsers = Math.floor(Math.random() * 100000);

	if (!session?.user) {
		throw redirect(303, '/login');
	}
	const getRandomUsers = async () => {
		const res = await fetch(`https://api.github.com/users?since=${RandomUsers}&per_page=100`, {
			headers: {
				Accept: 'application/vnd.github+json',
				//@ts-ignore
				Authorization: `Bearer ${session?.access_token}`,
				'X-Github-Api-Version': '2022-11-28'
			}
		});

		const users = await res.json();

		const userDetailsPromise = users.map(async (user:any)=>{
            const userDetailsRes = await fetch(user.url,{
				headers: {
					Accept: 'application/vnd.github+json',
					//@ts-ignore
					Authorization: `Bearer ${session?.access_token}`,
					'X-Github-Api-Version': '2022-11-28'
				}
			});
			 const userDetails = await userDetailsRes.json();

			 const reposRes  = await fetch(userDetails.repos_url,{
				headers:{
					Accept: 'application/vnd.github+json',
					//@ts-ignore
					Authorization: `Bearer ${session?.access_token}`,
					'X-Github-Api-Version': '2022-11-28'
				}
			 });

			 const repos = await reposRes.json();

			 const totalStars = repos.reduce((sum: number, repo: any) => sum + repo.stargazers_count, 0);

            return {
                ...userDetails,
                totalStars // Adding total stars count to user details
            };
		});

		const userDetails = await Promise.all(userDetailsPromise);



		//@ts-ignore
		return userDetails.sort((a,b)=>{
			if(b.followers === a.followers){
				return b.totalStars - a.totalStars;

			}
			return b.followers - a.followers;
		})

		
	};


	return {
          RandomUsers : await getRandomUsers()
	}


	
};

