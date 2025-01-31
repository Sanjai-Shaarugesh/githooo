<script lang="ts">
	import Carousel from './Carousel .svelte';
	import { Card, Button, Toggle, Avatar, DropdownDivider } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import { CardItem, CardBody, CardContainer } from '$lib/components/ui/ThreeDCardEffect';
	import { Users } from 'lucide-svelte';

	let isMouseEntered = false;
	export let data;
	//console.log(data);
	let vCard = false;
</script>

<svelte:head>
	<title>githooo</title>
	<meta name="description" content="welcome to githooo" />
</svelte:head>

<Carousel images={data} />

<div class="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
	{#each data.RandomUsers as user}
		<CardContainer bind:isMouseEntered className="inter-var">
			<CardBody
				className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  "
			>
				<CardItem
					{isMouseEntered}
					translateZ="50"
					className="text-xl font-bold text-neutral-600 dark:text-white"
				>
					{user.login}
				</CardItem>
				<CardItem
					{isMouseEntered}
					translateZ="60"
					className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
				>
					{user.email}
				</CardItem>
				<CardItem {isMouseEntered} translateZ="100" className="w-full mt-4">
					<img
						src={user.avatar_url}
						height="1000"
						width="1000"
						class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
						alt="thumbnail"
					/>
				</CardItem>
				<div class="mt-20 flex items-center justify-between">
					<a href={`https://github.com/${user.login}`} target={'_blank'}>
						<CardItem
							{isMouseEntered}
							translateZ={20}
							className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
						>
							Github →
						</CardItem></a
					>

					<a href={`/users/${user.login}`}
						><CardItem
							{isMouseEntered}
							translateZ={20}
							className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
						>
							View profile →
						</CardItem></a
					>
				</div>
			</CardBody>
		</CardContainer>
	{/each}
</div>
