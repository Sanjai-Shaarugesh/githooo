<script lang="ts">
    import Carousel from './Carousel .svelte'; // Fixed spacing
    import { Card, Button, Toggle, Avatar, DropdownDivider } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';
    import { CardItem, CardBody, CardContainer } from '$lib/components/ui/ThreeDCardEffect';
    import { Users, WifiOff } from 'lucide-svelte';
    import { injectAnalytics } from '@vercel/analytics/sveltekit';
    import { Sparkles } from '$lib/components/ui/Sparkles/index';
    import type { PageProps } from './$types';
    import { BentoGrid, BentoGridItem } from '$lib/components/ui/BentoGrid/index';
    import { ClipboardCopy, File, FileSignature, Table, Waves, Box, Boxes } from 'lucide-svelte';

    let { data }: PageProps = $props();
    let isSkeleton = $state(true);
    let isMouseEntered = $state(false);
    let vCard = $state(false);
    let isOnline = $state(navigator.onLine);

    const items = [
        {
            title: 'The Dawn of Innovation',
            description: 'Explore the birth of groundbreaking ideas and inventions.',
            icon: ClipboardCopy
        },
        {
            title: 'The Digital Revolution',
            description: 'Dive into the transformative power of technology.',
            icon: File
        },
        {
            title: 'The Art of Design',
            description: 'Discover the beauty of thoughtful and functional design.',
            icon: FileSignature
        },
        {
            title: 'The Power of Communication',
            description: 'Understand the impact of effective communication in our lives.',
            icon: Table
        },
        {
            title: 'The Pursuit of Knowledge',
            description: 'Join the quest for understanding and enlightenment.',
            icon: Waves
        },
        {
            title: 'The Joy of Creation',
            description: 'Experience the thrill of bringing ideas to life.',
            icon: Box
        },
        {
            title: 'The Spirit of Adventure',
            description: 'Embark on exciting journeys and thrilling discoveries.',
            icon: Boxes
        }
    ];

    const isLoading = $derived(!data || !data.RandomUsers);
    const isUsersEmpty = $derived(isLoading || data.RandomUsers.length === 0);

    $effect(() => {
        const handleOnline = () => {
            isOnline = true;
        };

        const handleOffline = () => {
            isOnline = false;
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    });

    injectAnalytics();
</script>

<svelte:head>
    <title>githooo</title>
    <meta name="description" content="Welcome to githooo" />
</svelte:head>

{#if !isOnline}
    <div class="flex h-[40rem] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-gradient-to-b from-black to-gray-900">
        <h2 class="relative z-20 text-center text-3xl font-bold text-white md:text-7xl lg:text-9xl">
            githooo
        </h2>
        <div class="relative h-40 w-full max-w-[40rem]">
            <!-- Gradients -->
            <div
                class="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"
            ></div>
            <div
                class="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
            ></div>
            <div
                class="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm"
            ></div>
            <div
                class="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent"
            ></div>

            <!-- Core component -->
            <Sparkles
                minSize={0.8}
                maxSize={2}
                particleDensity={300}
                className="w-full h-full"
                particleColor="#FFFFFF"
            />

            <!-- Radial Gradient to prevent sharp edges -->
            <div
                class="absolute inset-0 h-full w-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"
            ></div>
        </div>
        <p class="mt-4 text-gray-400 flex items-center">
            <WifiOff class="h-4 w-4 mr-2" /> You're currently offline
        </p>
    </div>
{:else}
    <!-- Carousel Section with added padding -->
    <div class="py-6">
        <Carousel images={data} />
    </div>
{/if}

<!-- Grid Layout for Cards with improved spacing and responsive design -->
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    {#if !isOnline || !data.RandomUsers}
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Featured Content</h2>
        <BentoGrid className="max-w-5xl mx-auto gap-6">
            {#each items as item, i (i)}
                <BentoGridItem
                    title={item.title}
                    description={item.description}
                    className={i === 3 || i === 6 ? 'md:col-span-2 hover:shadow-lg transition-all duration-300' : 'hover:shadow-lg transition-all duration-300'}
                >
                    <div
                        slot="header"
                        class="flex h-full min-h-[6rem] w-full flex-1 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-700 transition-all duration-300 hover:from-neutral-100 dark:hover:from-neutral-700"
                    ></div>
                    <!-- svelte-ignore svelte_component_deprecated -->
                    <svelte:component this={item.icon} slot="icon" class="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
                </BentoGridItem>
            {/each}
        </BentoGrid>
    {:else}
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">GitHub Users</h2>
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 scrollbar-hide">
            {#each data.RandomUsers as user}
                <CardContainer bind:isMouseEntered className="inter-var mx-auto w-full max-w-sm">
                    <CardBody
                        className="bg-white relative group/card hover:shadow-xl transition-all duration-300 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border"
                    >
                        <!-- Username with avatar -->
                        <div class="flex items-center mb-4">
                            <CardItem
                                {isMouseEntered}
                                translateZ="100"
                                className="mr-4"
                            >
                                <img
                                    src={user.avatar_url}
                                    class="h-12 w-12 rounded-full object-cover ring-2 ring-white dark:ring-gray-800"
                                    alt={user.login}
                                />
                            </CardItem>
                            <div>
                                <CardItem
                                    {isMouseEntered}
                                    translateZ="50"
                                    className="text-xl font-bold text-gray-800 dark:text-white"
                                >
                                    {user.login}
                                </CardItem>
                                <CardItem
                                    {isMouseEntered}
                                    translateZ="40"
                                    className="text-gray-500 text-sm dark:text-gray-400"
                                >
                                    {user.email}
                                </CardItem>
                            </div>
                        </div>

                        <!-- Profile Image -->
                        <CardItem {isMouseEntered} translateZ="100" className="w-full mt-4 overflow-hidden rounded-xl">
                            <img
                                src={user.avatar_url}
                                height="1000"
                                width="1000"
                                class="h-52 w-full rounded-xl object-cover group-hover/card:shadow-xl transition-transform duration-300 transform hover:scale-105"
                                alt="thumbnail"
                            />
                        </CardItem>

                        <!-- Buttons with improved styling -->
                        <div class="mt-6 grid grid-cols-2 gap-4">
                            <a href={`https://github.com/${user.login}`} target="_blank">
                                <CardItem
                                    {isMouseEntered}
                                    translateZ={20}
                                    className="px-4 py-2.5 rounded-xl text-sm font-medium border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors w-full text-center flex items-center justify-center"
                                >
                                    <Users class="h-4 w-4 mr-2" /> GitHub
                                </CardItem>
                            </a>

                            <a href={`/users/${user.login}`}>
                                <CardItem
                                    {isMouseEntered}
                                    translateZ={20}
                                    className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white text-sm font-medium transition-colors w-full text-center flex items-center justify-center"
                                >
                                    Profile <ArrowRightOutline class="h-4 w-4 ml-2" />
                                </CardItem>
                            </a>
                        </div>
                    </CardBody>
                </CardContainer>
            {/each}
        </div>
    {/if}
</div>