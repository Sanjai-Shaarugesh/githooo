<script>
	import GradientAnimation from '$lib/components/ui/GradientAnimation/GradientAnimation.svelte';
	import AnimatedTooltip from '$lib/components/ui/AnimatedTooltip/AnimatedTooltip.svelte';
	import Button from '$lib/components/ui/MovingBorder/Button.svelte';
	import { injectAnalytics } from '@vercel/analytics/sveltekit'

	const baseUrl = 'https://github.com/';
	export let data;

	injectAnalytics()

	const user = data.user;
	const info = data.followers;

	const User = user.login;
	const url = `https://github.com/${User}`;

	const formattedInfo2 = info.map(
		(/** @type {{ login: any; avatar_url: any; }} */ follower, /** @type {number} */ index) => ({
			id: index + 1,
			name: follower.login,
			designation: `${User} follower`,
			image: follower.avatar_url
		})
	);
const remaning = {
	id: formattedInfo2.length + 1,
	name: `More +${formattedInfo2.length - 6} followers`,
	designation: `${User} follower`,
	image: 'https://imgs.search.brave.com/emNw7XX8UK3DfocYInHAX9bqpRAzwqiuxrt1u8uaD24/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni83ODg0Lzc4ODQw/NDkucG5nP3NlbXQ9/YWlzX2h5YnJpZA'
}
	const formattedInfo = info.slice(0,6).map(
		(/** @type {{ login: any; avatar_url: any; }} */ follower, /** @type {number} */ index) => ({
			id: index + 1,
			name: follower.login,
			designation: `${User} follower`,
			image: follower.avatar_url
		})
	);

	

	
</script>

<svelte:head>
	<title>githooo</title>
	<meta name="description" content="welcome to githooo" />
</svelte:head>

<div
	class="relative flex h-screen w-screen items-center justify-center bg-gradient-to-b from-blue-100 to-gray-300"
>
	<!-- Gradient Animation as the background -->
	<GradientAnimation />

	<!-- Card Component inside the gradient -->
	<div class="absolute inset-0 z-10 flex items-center justify-center">
		<div class="max-w-xl overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-900">
			<div class="pb-21 border-b px-20">
				<div class="my-4 text-center">
					<img
						class="border-whiter gb(0 0 0 / 50%) mx-auto my-4 h-32 w-32 rounded-full border-4"
						src={user.avatar_url}
						alt={user.login}
					/>
					<div class="py-2">
						<h3 class="mb-1 text-2xl font-bold text-gray-800 dark:text-white">{user.login}</h3>
						<div class="inline-flex items-center text-gray-700 dark:text-gray-300">
							<svg
								class="mr-1 h-5 w-5 text-gray-400 dark:text-gray-600"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="24"
								height="24"
							>
								<path
									d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
								/>
							</svg>
							{user.location}
						</div>
					</div>
				</div>
				<div class="flex items-center justify-center gap-2 px-2">
					<a href={`${baseUrl}${user.login}`} target="_blank">
						<button
							class="flex-1 rounded-full bg-blue-600 px-4 py-2 font-bold text-white antialiased hover:bg-blue-800 dark:bg-blue-800 dark:text-white dark:hover:bg-blue-900"
						>
							Follow
						</button>
					</a>
				</div>
			</div>
			<div class="px-4 py-4">
				<div class="mb-4 flex items-center gap-2 text-gray-800 dark:text-gray-300">
					<svg
						class="h-6 w-6 text-gray-600 dark:text-gray-400"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="24"
						height="24"
					>
						<path
							d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
						/>
					</svg>
					<span>
						<strong class="text-black dark:text-white">{user.followers}</strong> Followers you know
					</span>
				</div>
				<div class="flex">
					<AnimatedTooltip items={formattedInfo} />
                    <AnimatedTooltip items={[remaning]} />
					<div>
						
					</div>
					
					
					<div class="ml-8">
						
						<a href={url} target="_blank">
							<Button
								borderRadius="1.75rem"
								className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
							>
								Github 🐱
							</Button></a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>