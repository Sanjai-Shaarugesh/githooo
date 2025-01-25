<script lang='ts'>
	import '../app.css';
	import {page} from '$app/state'
	import { afterNavigate } from "$app/navigation";
    import { createMenubar, melt } from '@melt-ui/svelte';
	import { Button, Dropdown, DropdownItem,Avatar, DropdownDivider, DropdownHeader } from 'flowbite-svelte';
	import s from '$lib/img/s.png'
    import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import { goto } from '$app/navigation';
	import { writable } from 'svelte/store';
	import { NavbarMenu, HoveredLink, MenuItem, ProductItem } from '../lib/components/ui/NavbarMenu';
	import { DarkMode } from 'flowbite-svelte';
	let active: string | null = null;
	import { Home, MessageCircle, User } from 'lucide-svelte';
	import { FloatingNavbar } from '$lib/components/ui/FloatingNavbar';



    const activeUrl = page.url.pathname;
    const data = page.data.session?.user;
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
			name: 'profile',
			link: '/profile',
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
	  <Dropdown>
		<div slot="header" class="px-4 py-2">
			<span><img class="inline-block size-[46px] rounded-full" src={data?.image} alt={data?.name}></span>
		  <span class="block mt-4 text-sm text-gray-900 dark:text-white">{data?.name}</span>
		  <span class="block truncate text-sm font-medium text-gray-500 dark:text-gray-400">
			{data?.email}
		  </span>
		  
		</div>
			<a href="/profile"><DropdownItem>profile</DropdownItem></a>
		<a href="/users"><DropdownItem>Users</DropdownItem></a>
		<a href="/"><DropdownItem>Home</DropdownItem></a>
		
		<DropdownItem slot="footer">Sign out</DropdownItem>
		
	  </Dropdown>
	  
	</div>
  </div>
<!-- Scrollable Content Section -->
<p class="p-40 text-center text-4xl font-bold text-neutral-600 dark:text-white">
	Scroll back up to reveal Navbar
  </p>
 
<slot>

</slot>