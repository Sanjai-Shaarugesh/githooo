<script lang='ts'>
	import '../app.css';
	import { signOut } from '@auth/sveltekit/client';
	import {page} from '$app/state'
	import { afterNavigate } from "$app/navigation";
    import { createMenubar, melt } from '@melt-ui/svelte';
	import { Button, Dropdown, DropdownItem,Avatar, DropdownDivider, DropdownHeader } from 'flowbite-svelte';
	
    import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import { goto } from '$app/navigation';
	import { writable } from 'svelte/store';
	import { NavbarMenu, HoveredLink, MenuItem, ProductItem } from '../lib/components/ui/NavbarMenu';
	import { DarkMode } from 'flowbite-svelte';
	
	import { Home, MessageCircle, User } from 'lucide-svelte';
	import { FloatingNavbar } from '$lib/components/ui/FloatingNavbar';
    import { onMount } from 'svelte';

    let active: string | null = null;
    const activeUrl = page.url.pathname;
    const data = page.data.session?.user;

	let showScrollText = false;

  onMount(() => {
    const handleScroll = () => {
      showScrollText = window.scrollY > 100;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
	const navItems = [
		{
			name: 'Home',
			link: '/',
			icon: Home
			
		},
		{
			name: 'Users',
			link: '/users',
			icon: User
		},
		{
			name: 'Profile',
			link: '/profile',
			icon: MessageCircle
		},
		{
			name: 'Login',
			link: '/login',
			icon: User
		},
		{
			name:'sanjai.AI',
			link:'/sanjai.AI',
			icon: MessageCircle	
		}
		
		
	];

	export function authFun():string{
       if(page.data.session){
		return 'signOut'
	   }

	   else{
		return 'login'
	   }

	}

	afterNavigate(() => {
		if (typeof window !== 'undefined' && 'HSStaticMethods' in window) {
			(window as any).HSStaticMethods.autoInit();
		}
	});
  
	let btnClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';
  
	



</script>





<div class="relative w-full">
	<FloatingNavbar {navItems}  auth={authFun()}/> 
	
	<div
		class="relative grid h-full w-full grid-cols-1 rounded-md border border-neutral-200 bg-white dark:border-white/[0.2] dark:bg-black"
	>
		
	
		
	</div>
	


	
</div>

<!-- Main container with dark mode support -->
<div class="relative h-[100px] bg-gray-25 dark:bg-gray-900 rounded-xl">
	<!-- Dark mode toggle button in the top-left corner -->
	<div class="absolute top-0 left-0 m-4">
		<DarkMode class="text-primary-500 dark:text-primary-600 border dark:border-gray-800" />
	</div>

	
 
	


  
	<!-- Dropdown button in the top-right corner -->
	<div class="absolute top-0 right-0 m-4">
	  <Button>
		Dropdown button
		<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" />
	  </Button>
  
	  <!-- Dropdown menu -->
	  <Dropdown  >
		<div slot="header" class="px-4 py-2" >
			{#if data?.image}
			<span>
				<img class="inline-block size-[46px] rounded-full" src={data?.image} alt={data?.name}>
			</span>
			{:else}
			<span class="inline-flex items-center justify-center size-[46px] rounded-full bg-gray-500 font-semibold text-white leading-none">
				AC
			  </span>
			{/if}
			
		  <span class="block mt-4 text-sm text-gray-900 dark:text-white">{data?.name}</span>
		  <span class="block truncate text-sm font-medium text-gray-500 dark:text-gray-400">
			{data?.email}
		  </span>
		  
		</div>
			<a href="/profile"><DropdownItem>profile</DropdownItem></a>
		<a href="/users"><DropdownItem>Users</DropdownItem></a>
		<a href="/"><DropdownItem>Home</DropdownItem></a>
		<a href="/login"><DropdownItem>Login</DropdownItem></a>
		<a href="/sanjai.AI"><DropdownItem>sanjai.AI</DropdownItem></a>
		
		<DropdownItem slot="footer" onclick={()=>{signOut()}}>Sign out</DropdownItem>
		
	  </Dropdown>
	  
	</div>
  </div>

 
  <div class="min-h-screen flex flex-col justify-between bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
	<slot />
  
	<div
	  class="fixed bottom-0 left-0 right-0 p-8 text-center transition-all duration-500 ease-in-out"
	  class:opacity-100={showScrollText}
	  class:opacity-0={!showScrollText}
	  class:translate-y-0={showScrollText}
	  class:translate-y-10={!showScrollText}
	>
	  <p class="text-4xl font-bold text-neutral-600 dark:text-white">
		Scroll back up to reveal Navbar
	  </p>
	  <p class="mt-2 text-lg text-neutral-500 dark:text-gray-400">
		Keep scrolling to explore more!
	  </p>
	  <div class="mt-4 animate-bounce">
		<svg
		  class="w-10 h-10 mx-auto text-neutral-600 dark:text-white"
		  fill="none"
		  stroke="currentColor"
		  viewBox="0 0 24 24"
		  xmlns="http://www.w3.org/2000/svg"
		>
		  <path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M19 14l-7 7m0 0l-7-7m7 7V3"
		  ></path>
		</svg>
	  </div>
	</div>
  </div>


  <style>
  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .animate-bounce {
    animation: bounce 1.5s infinite;
  }
</style>