<script lang="ts">
	// @ts-nocheck

	//import {signIn , signOut} from '../auth/auth'
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { injectAnalytics } from '@vercel/analytics/sveltekit'
	import { page } from '$app/state';
	import { useTransform, useViewportScroll } from 'svelte-motion';
	import { GoogleGeminiEffect } from '$lib/components/ui/GoogleGeminiEffect';

	//export let data ;

	let ref: HTMLDivElement;

	const { scrollYProgress } = useViewportScroll();

	const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
	const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
	const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
	const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
	const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

	injectAnalytics()
</script>

<svelte:head>
	<title>githooo</title>
	<meta name="description" content="welcome to githooo" />
</svelte:head>

<div
	class="relative h-[400vh] w-full overflow-clip rounded-md bg-black py-40 dark:border dark:border-white/[0.1]"
	bind:this={ref}
>
	<GoogleGeminiEffect
		pathLengths={[
			pathLengthFirst,
			pathLengthSecond,
			pathLengthThird,
			pathLengthFourth,
			pathLengthFifth
		]}
		title={'githooo'}
		description={'Helpes to view multiple opensource contributes profile around the world'}
	/>
</div>

<style>
</style>