import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from '../$types';

export const prerender = false;

export const load:LayoutServerLoad = async ({locals}) => {
	const session = await locals.getSession();
	

	const RandomUsers = Math.floor(Math.random() * 100000);

	if (!session?.user) {
		throw redirect(303, '/login');
	}
	const getRandomUsers = async () => {
		const res = await fetch(`https://api.github.com/users?since=${RandomUsers}&per_page=50`, {
			headers: {
				Accept: 'application/vnd.github+json',

				Authorization: `Bearer ${session.accessToken}`,
				'X-Github-Api-Version': '2022-11-28'
			}
		});

		const users = await res.json();

		// Check if users is an array before mapping
		if (!Array.isArray(users)) {
			console.error('Expected array of users but got:', users);
			return [];
		}

		interface GithubUser {
			url: string;
			repos_url: string;
		}

		interface GithubRepo {
			stargazers_count: number;
		}

		const userDetailsPromise = users.map(async (user: GithubUser) => {
			const userDetailsRes = await fetch(user.url,{
				headers: {
					Accept: 'application/vnd.github+json',

					Authorization: `Bearer ${session.accessToken}`,
					'X-Github-Api-Version': '2022-11-28'
				}
			});
			const userDetails = await userDetailsRes.json();

			const reposRes  = await fetch(userDetails.repos_url,{
				headers:{
					Accept: 'application/vnd.github+json',

					Authorization: `Bearer ${session.accessToken}`,
					'X-Github-Api-Version': '2022-11-28'
				}
			});

			const repos = await reposRes.json();

			const totalStars = repos.reduce((sum: number, repo: GithubRepo) => sum + repo.stargazers_count, 0);

			return {
				...userDetails,
				totalStars 
			};
		});

		const userDetails = await Promise.all(userDetailsPromise);




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