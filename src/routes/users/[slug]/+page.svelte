<script lang="ts">
	interface RepoData {
	  html_url: any;
	  name: string;
	  description: string;
	}
  
	interface ContentItem {
	  title: string;
	  description: string;
	  repo:string,
	  repo_url:string
	}
  
	import { CardItem, CardBody, CardContainer } from '$lib/components/ui/ThreeDCardEffect';
	import { Listgroup, ListgroupItem, Avatar } from 'flowbite-svelte';
	import { TrashBinSolid } from 'flowbite-svelte-icons';
	import StickyScrollReveal from '$lib/components/ui/StickyScrollReveal/StickyScrollReveal.svelte';
  
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
  
	let content: ContentItem[] = [];
  
	// Type the data parameter
	function processRepos(data: { repos: RepoData[] }): ContentItem[] {
	  return data.repos.map(repo => ({
		title: repo.name,
		description: repo.description || '', // Handle potential undefined
        repo:  repo.name,
		repo_url: repo.html_url
	  }));
	}
  
	// Process repos on component initialization
	content = processRepos(data);
  </script>
  
  <CardContainer bind:isMouseEntered className="inter-var">
	<CardBody
	  className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border"
	>
	  <!-- Username -->
	  <CardItem
		{isMouseEntered}
		translateZ="50"
		className="text-xl font-bold text-neutral-600 dark:text-white"
	  >
		{data.users.login}
	  </CardItem>
  
	  <!-- Email -->
	  <CardItem
		{isMouseEntered}
		translateZ="60"
		className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
	  >
		{data.users.email}
	  </CardItem>
  
	  <!-- Avatar Image -->
	  <CardItem {isMouseEntered} translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
		<img
		  src={data.users.avatar_url}
		  height="1000"
		  width="1000"
		  class="h-48 sm:h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
		  alt="thumbnail"
		/>
	  </CardItem>
  
	  <!-- Buttons -->
	  <div class="mt-10 sm:mt-20 flex items-center justify-between">
		<a href={link}>
		  <CardItem
			{isMouseEntered}
			translateZ={20}
			translateX={-40}
			className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
		  >
			View Profile
		  </CardItem>
		</a>
  
		<a href={link}>
		  <CardItem
			{isMouseEntered}
			translateZ={20}
			translateX={40}
			className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
		  >
			Like Me
		  </CardItem>
		</a>
	  </div>
	</CardBody>
  </CardContainer>
  
  <div class="fixed right-20 left-50 top-1/2 -translate-y-1/2 z-40">
	<Listgroup active class="w-40 overflow-y-auto max-h-96 scrollbar-hide">
	  <h3 class="p-4 text-center text-xl font-medium text-gray-900 dark:text-white">Followers list</h3>
	  {#each followers as follow}
		<ListgroupItem class="text-base font-semibold gap-3">
		  <Avatar src={follow.avatar_url} size="xs" />{follow.login}
		</ListgroupItem>
	  {/each}
	</Listgroup>
  </div>
  
  <div class="p-10">
	<StickyScrollReveal {content} />
  </div>