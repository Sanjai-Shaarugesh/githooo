<script lang="ts">
	import { Motion, useViewportScroll, useTransform } from 'svelte-motion';
	import Lid from '$lib/components/ui/MacbookScroll/Lid.svelte';
	import Keypad from '$lib/components/ui/MacbookScroll/KBtn.svelte';
	import { onMount } from 'svelte';

	export let src: string | undefined = undefined;
	export let showGradient: boolean | undefined = undefined;

	let ref: HTMLDivElement;

	const { scrollYProgress } = useViewportScroll();

	let isMobile = false;

	onMount(() => {
		if (window && window.innerWidth < 768) {
			isMobile = true;
		}
	});

	const scaleX = useTransform(scrollYProgress, [0, 0.3], [1.2, isMobile ? 1 : 1.5]);
	const scaleY = useTransform(scrollYProgress, [0, 0.3], [0.3, isMobile ? 1 : 1.5]);
	const translate = useTransform(scrollYProgress, [0, 1], [-80, 1500]);
	const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
	const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
	const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
</script>

<div
	bind:this={ref}
	class="flex min-h-[60vh] min-w-[42rem] flex-shrink-0 scale-[0.35] transform flex-col items-center justify-start py-0 [perspective:800px] sm:scale-50 md:scale-100 md:pb-60 md:pt-28"
>
	<Motion
		let:motion
		style={{
			translateY: textTransform,
			opacity: textOpacity
		}}
	>
		<h2 use:motion class="mb-20 text-center text-3xl font-bold text-neutral-800 dark:text-white">
			<slot name="title">
				<span>
					This Macbook is built with Tailwindcss. <br /> No kidding.
				</span>
			</slot>
		</h2>
	</Motion>
	<Lid {src} {scaleX} {scaleY} {rotate} {translate}></Lid>
	<!-- Base Area -->
	<div
		class="relative -z-10 h-[22rem] w-[32rem] overflow-hidden rounded-2xl bg-gray-200 dark:bg-[#272729]"
	>
		<!-- above keyboard bar -->
		<div class="relative h-10 w-full">
			<div class="absolute inset-x-0 mx-auto h-4 w-[80%] bg-[#050505]"></div>
		</div>
		<div class="relative flex">
			<div class="mx-auto h-full w-[10%] overflow-hidden">
				<div
					class="mt-2 flex h-40 gap-[2px] px-[0.5px]"
					style="background-image: radial-gradient(circle, #08080A 0.5px, transparent 0.5px); background-size: 3px 3px;"
				></div>
			</div>
			<div class="mx-auto h-full w-[80%]">
				<Keypad></Keypad>
			</div>
			<div class="mx-auto h-full w-[10%] overflow-hidden">
				<div
					class="mt-2 flex h-40 gap-[2px] px-[0.5px]"
					style="background-image: radial-gradient(circle, #08080A 0.5px, transparent 0.5px); background-size: 3px 3px;"
				></div>
			</div>
		</div>
		<div
			class="mx-auto my-1 h-32 w-[40%] rounded-xl"
			style="box-shadow: 0px 0px 1px 1px #00000020 inset;"
		></div>
		<div
			class="absolute inset-x-0 bottom-0 mx-auto h-2 w-20 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-t from-[#272729] to-[#050505]"
		></div>
		{#if showGradient}
			<div
				class="absolute inset-x-0 bottom-0 z-50 h-40 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black"
			></div>
		{/if}

		<div class="absolute bottom-4 left-4">
			<slot name="badge"></slot>
		</div>
	</div>
</div>
