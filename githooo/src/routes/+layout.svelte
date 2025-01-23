<script lang='ts'>
	import '../app.css';
	import { page } from '$app/stores';
	import { afterNavigate } from "$app/navigation";
    import { createMenubar, melt } from '@melt-ui/svelte';
    
	import { goto } from '$app/navigation';
	import { writable } from 'svelte/store';
	import { NavbarMenu, HoveredLink, MenuItem, ProductItem } from '../lib/components/ui/NavbarMenu';
	import { DarkMode } from 'flowbite-svelte';
	let active: string | null = null;
	import { Home, MessageCircle, User } from 'lucide-svelte';
	import { FloatingNavbar } from '$lib/components/ui/FloatingNavbar';



    const activeUrl = $page.url.pathname;
    const data = $page.data.session?.user;
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
			link: '/',
			icon: MessageCircle
		}
		
	];

	afterNavigate(() => {
		if (typeof window !== 'undefined' && 'HSStaticMethods' in window) {
			(window as any).HSStaticMethods.autoInit();
		}
	});
  
	let btnClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';
  
	

// Reactive state for mobile menu and dropdown
let isMobileMenuOpen = false;
let isUserDropdownOpen = false;

let isVisible  = $state(false);

function toggle(){
	isVisible = !isVisible;
	console.log(isVisible)
}


</script>





<div class="relative w-full">
	<FloatingNavbar {navItems} /> 
	
	<div
		class="relative grid h-full w-full grid-cols-1 rounded-md border border-neutral-200 bg-white dark:border-white/[0.2] dark:bg-black"
	>
		
		
		
	</div>
	<DarkMode {btnClass} size='lg'  />


	
</div>





 
<slot></slot>