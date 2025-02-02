<script lang="ts">
	import { onMount } from 'svelte';
	import { ButtonGroup, Button, GradientButton, Rating } from 'flowbite-svelte';
	import {goto} from '$app/navigation';
	import { redirect } from '@sveltejs/kit';
	import {AdvancedRating} from 'flowbite-svelte';
	import { Badge } from 'flowbite-svelte';


	function redirectTo(url: string) {
		window.open(url, '_blank');; // Redirects to the specified URL
  }
  
	let activeCard = 0;
	let backgroundColors = ['var(--slate-900)', 'var(--black)', 'var(--neutral-900)'];
	let linearGradients = [
	  'linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))',
	  'linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))',
	  'linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))'
	];
	let scrollYProgress = 0;
  
	export let content: {
		 [x: string]: any;
		 visibility: any;
		 forks: any;
		 repo: any;
		 repo_url: string | null | undefined; title: string; description: string 
}[] = [
	  {
		  title: 'Title 1', description: 'Description 1',
		  repo: undefined,
		  repo_url: undefined,
		  visibility: undefined,
		  forks: undefined
	  },
	  {
		  title: 'Title 2', description: 'Description 2',
		  repo: undefined,
		  repo_url: undefined,
		  visibility: undefined,
		  forks: undefined
	  }
	  // Add more items as needed
	];
  
	let ref: HTMLDivElement;
  
	onMount(() => {
	  const handleScroll = (event: Event) => {
		const target = event.target as HTMLElement;
		scrollYProgress = target.scrollTop / target.scrollHeight;
		const cardsBreakpoints = content.map((_, index) => index / content.length);
  
		cardsBreakpoints.forEach((breakpoint, index) => {
		  if (scrollYProgress > breakpoint - 0.2 && scrollYProgress <= breakpoint) {
			activeCard = index;
		  }
		});
	  };
  
	  ref.addEventListener('scroll', handleScroll);
  
	  return () => {
		ref.removeEventListener('scroll', handleScroll);
	  };
	});
  </script>
  
  <div
	bind:this={ref}
	style="background-color: {backgroundColors[activeCard % backgroundColors.length]}"
	class="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10 transition ease-in-out  max-h-96 scrollbar-hide"
  >
	<div class="div relative flex items-start px-4">
	  <div class="max-w-2xl">
		{#each content as item, index (item.title + index)}
		  <div class="my-20">
			<h2
			  style="opacity: {activeCard === index ? 1 : 0.6}; transition: opacity 0.3s ease-in-out;"
			  class="text-2xl font-bold text-blue-600 dark:text-sky-400"
			>
			  {item.title}
			</h2>
			<p
			  style="opacity: {activeCard === index ? 1 : 0.6}; transition: opacity 0.3s ease-in-out;"
			  class="text-kg mt-10 max-w-sm text-slate-300"
			>
			  {item.description}
			</p>

			
			<Rating id="example-1b" total={5} size={50} rating={item.forks} />
			<Badge large color="yellow">forks Rating</Badge>
			<div class="py-4">Outline</div>
  <ButtonGroup>
	<Button outline color="red" onclick={()=>redirectTo(`${item.repo_url}`)}>click to open repo</Button>
    
    <Button outline color="green" >{item.default_branch}</Button>
    <Button outline color="yellow">{item.visibility}</Button>
  </ButtonGroup>
		  </div>
		{/each}
		<!-- svelte-ignore element_invalid_self_closing_tag -->
		<div class="h-40" />
	  </div>
	</div>
	<div
	  style="background: {linearGradients[activeCard % linearGradients.length]}; transition: background 0.3s ease-in-out;"
	  class="sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block"
	></div>
  </div>