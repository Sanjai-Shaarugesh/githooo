<script lang="ts">
	import '../app.css';
	import { signOut } from '@auth/sveltekit/client';
	import { page } from '$app/state';
	import { afterNavigate } from '$app/navigation';
	import { createMenubar, melt } from '@melt-ui/svelte';
	//@ts-ignore
	import { pwaInfo } from 'virtual:pwa-info'; 
	import {
		Button,
		Dropdown,
		DropdownItem,
		Avatar,
		DropdownDivider,
		DropdownHeader
	} from 'flowbite-svelte';

	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import { goto } from '$app/navigation';
	import { writable } from 'svelte/store';
	import { NavbarMenu, HoveredLink, MenuItem, ProductItem } from '../lib/components/ui/NavbarMenu';
	import { DarkMode } from 'flowbite-svelte';

	import { Home, MessageCircle, User , ContactRound , UserPen , KeyRound , Store } from 'lucide-svelte';
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
			name: 'Profile',
			link: '/profile',
			icon: UserPen
		},
		
		
		{
			name: 'sanjai.AI',
			link: '/sanjai.AI',
			icon: KeyRound
		},
		{
            name:'about',
			link: '/about',
			icon: Store
		}
	];
	if (!page.data.session) {
		navItems.push({
			name: 'Login',
			link: '/login',
			icon: User
		});
	}
	export function authFun(): string {
		if (page.data.session) {
			return 'signOut';
		} else {
			return 'login';
		}
	}

	afterNavigate(() => {
		if (typeof window !== 'undefined' && 'HSStaticMethods' in window) {
			(window as any).HSStaticMethods.autoInit();
		}
	});

	let btnClass =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';

		onMount(async () => {
    if (pwaInfo) {
	  //@ts-ignore
      const { registerSW } = await import('virtual:pwa-register')
      registerSW({
        immediate: true,
        onRegistered(r: any) {
          // uncomment following code if you want check for updates
          // r && setInterval(() => {
          //    console.log('Checking for sw update')
          //    r.update()
          // }, 20000 /* 20s for testing purposes */)
         // console.log(`SW Registered: ${r}`)
        },
        onRegisterError(error: any) {
         // console.log('SW registration error', error)
        }
      })
    }
  })

		$: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : '' 
</script>

<svelte:head> 
 	{@html webManifestLink} 
</svelte:head>


<div class="relative w-full">
	<FloatingNavbar {navItems} auth={authFun()} />

	<div
		class="relative grid h-full w-full grid-cols-1 rounded-md border border-neutral-200 bg-white dark:border-white/[0.2] dark:bg-black"
	></div>
</div>

<!-- Main container with dark mode support -->
<div class="bg-gray-25 relative h-[100px] rounded-xl dark:bg-gray-900">
	<!-- Dark mode toggle button in the top-left corner -->
	<div class="absolute left-0 top-0 m-4">
		<DarkMode class="border text-primary-500 dark:border-gray-800 dark:text-primary-600" />
	</div>

	<!-- Dropdown button in the top-right corner -->
	<div class="absolute right-0 top-0 m-4">
		<Button>
			Dropdown button
			<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" />
		</Button>

		<!-- Dropdown menu -->
		<Dropdown>
			<div slot="header" class="px-4 py-2">
				{#if data?.image}
					<span>
						<img class="inline-block size-[46px] rounded-full" src={data?.image} alt={data?.name} />
					</span>
				{:else}
					<span
						class="inline-flex size-[46px] items-center justify-center rounded-full bg-gray-500 font-semibold leading-none text-white"
					>
						AC
					</span>
				{/if}

				<span class="mt-4 block text-sm text-gray-900 dark:text-white">{data?.name}</span>
				<span class="block truncate text-sm font-medium text-gray-500 dark:text-gray-400">
					{data?.email}
				</span>
			</div>
			<a href="/profile"><DropdownItem>profile</DropdownItem></a>
		
			<a href="/"><DropdownItem>Home</DropdownItem></a>
			{#if !page.data.session} 
			<a href="/login"><DropdownItem>Login</DropdownItem></a>
			{/if}
			
			<a href="/sanjai.AI"><DropdownItem>sanjai.AI</DropdownItem></a>
			<a href="/about"><DropdownItem>about</DropdownItem></a>

			<DropdownItem
				slot="footer"
				onclick={() => {
					signOut();
				}}>Sign out</DropdownItem
			>
		</Dropdown>
	</div>
</div>

<div
	class="flex min-h-screen flex-col justify-between bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
>
	<slot />

	<div
		class="fixed bottom-5 left-0 right-0 p-8 text-center transition-all duration-500 ease-in-out"
		class:opacity-100={showScrollText}
		class:opacity-0={!showScrollText}
		class:translate-y-0={showScrollText}
		class:translate-y-10={!showScrollText}
	>
		<p class="text-2xl font-bold text-neutral-600 dark:text-white">
			Scroll back up to reveal Navbar
		</p>
		<p class="mt-2 text-lg text-neutral-500 dark:text-gray-400">Keep scrolling to explore more!</p>
		<div class="mt-4 animate-bounce">
			<svg
				class="mx-auto h-10 w-10 text-neutral-600 dark:text-white"
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
