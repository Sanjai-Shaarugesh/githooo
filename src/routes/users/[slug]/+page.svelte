<script lang="ts">
	interface RepoData {
	  default_branch: any;
	  visibility: any;
	  forks: any;
	  clone_url: any;
	  html_url: any;
	  name: string;
	  description: string;
	}
  
	interface ContentItem {
	  forks: any;
	  mode: any;
	  title: string;
	  description: string;
	  repo: string;
	  repo_url: string;
	}
  
	import { injectAnalytics } from '@vercel/analytics/sveltekit'
	import { CardItem, CardBody, CardContainer } from '$lib/components/ui/ThreeDCardEffect';
	import { Listgroup, ListgroupItem, Avatar } from 'flowbite-svelte';
	import StickyScrollReveal from '$lib/components/ui/StickyScrollReveal/StickyScrollReveal.svelte';

	injectAnalytics()
  
	export let data: {
	  users: {
		login: string;
		email: string;
		avatar_url: string;
	  };
	  followers: {
		avatar_url: string;
		login: string;
	  }[];
	  repos: RepoData[];
	};
  
	let link = `https://github.com/${data.users.login}`;
	let isMouseEntered = false;
	const followers = data.followers;
  
	let content: ContentItem[] = data.repos.map(repo => ({
	  title: repo.name,
	  description: repo.description || '',
	  repo: repo.name,
	  repo_url: repo.html_url,
	  forks: repo.forks,
	  mode: repo.visibility,
	  default_branch: repo.default_branch,
	}));
  </script>
  
		<style>
			/* Global responsive adjustments */
			@media (max-width: 640px) {
					.followers-list {
				position: relative !important;
				right: 0 !important;
				left: 0 !important;
				top: 0 !important;
				transform: none !important;
				width: 100% !important;
				margin-top: 2rem;
					}
  
					.sticky-scroll-section {
				padding: 1.5rem !important;
					}
  
					
			}
  
			:global(.scrollbar-hide) {
					-ms-overflow-style: none;
					scrollbar-width: none;
			}
	
			:global(.scrollbar-hide::-webkit-scrollbar) {
					display: none;
			}
		</style>

  
  <div class="min-h-screen p-4 sm:p-8 bg-gray-50 dark:bg-gray-900">
	<!-- Main Card -->
	<div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
	  <!-- Left Column -->
	  <div class="lg:col-span-2">
		<CardContainer bind:isMouseEntered className="inter-var">
			<CardBody
				className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  "
			>
				<CardItem
					{isMouseEntered}
					translateZ="50"
					className="text-xl font-bold text-neutral-600 dark:text-white"
				>
				{data.users.login}
				</CardItem>
				<CardItem
					{isMouseEntered}
					translateZ="60"
					className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
				>
				{data.users.email}
				</CardItem>
				<CardItem {isMouseEntered} translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
					<img
						src={data.users.avatar_url}
						height="1000"
						width="1000"
						class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
						alt="thumbnail"
					/>
				</CardItem>
				<div class="mt-20 flex items-center justify-between">

					<a href={link} class="w-full sm:w-auto">
					<CardItem
						{isMouseEntered}
						translateZ={20}
						translateX={-40}
						className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
					>
						Like me →
					</CardItem>
					</a>

					<a href={link} class="w-full sm:w-auto"><CardItem
						{isMouseEntered}
						translateZ={20}
						translateX={40}
						className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
					>
						View Profile
					</CardItem></a>
					
				</div>
			</CardBody>
		</CardContainer>
	  </div>
  
	  <!-- Right Column (Followers) -->
	  <div class="lg:col-span-1">
		<div class="followers-list bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg lg:sticky lg:top-8">
		  <Listgroup active class="overflow-y-auto max-h-[80vh] scrollbar-hide">
			<h3 class="p-2 text-center text-lg font-medium text-gray-900 dark:text-white">
			  Followers ({followers.length})
			</h3>
			{#each followers as follow}
			  <ListgroupItem class="text-sm font-semibold gap-3 hover:bg-gray-50 dark:hover:bg-gray-700">
				<Avatar src={follow.avatar_url} size="xs" />
				<span class="truncate">{follow.login}</span>
			  </ListgroupItem>
			{/each}
		  </Listgroup>
		</div>
	  </div>
	</div>
  
	<!-- Repos Section -->
	<div class="max-w-6xl mx-auto mt-8 sm:mt-12">
	  <div class="sticky-scroll-section p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
		<h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Repositories</h2>
		<StickyScrollReveal content={content.map(item => ({ ...item, visibility: item.mode }))} />
	  </div>
	</div>
  </div>