<script lang="ts">
	import { Motion, MotionValue } from 'svelte-motion';

	export let scaleX: MotionValue<number>;
	export let scaleY: MotionValue<number>;
	export let rotate: MotionValue<number>;
	export let translate: MotionValue<number>;
	export let src: string | undefined = undefined;
</script>

<div class="relative [perspective:800px]">
	<div
		style="transform: perspective(800px) rotateX(-25deg) translateZ(0px); transform-origin: bottom; transform-style: preserve-3d;"
		class="relative h-[12rem] w-[32rem] rounded-2xl bg-[#010101] p-2"
	>
		<div
			style="box-shadow: 0px 2px 0px 2px var(--neutral-900) inset;"
			class="absolute inset-0 flex items-center justify-center rounded-lg bg-[#010101]"
		>
			<span class="text-white">
				<!-- Aceternity Logo -->
				<svg
					width="65"
					height="65"
					viewBox="0 0 65 65"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					style="background:black; padding:5px"
					class="h-7 w-7"
					><path
						d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
						stroke="#EA580C"
						stroke-width="15"
						stroke-miterlimit="3.86874"
						stroke-linecap="round"
					></path></svg
				>
			</span>
		</div>
	</div>
	<Motion
		let:motion
		style={{
			scaleX: scaleX,
			scaleY: scaleY,
			rotateX: rotate,
			translateY: translate,
			transformStyle: 'preserve-3d',
			transformOrigin: 'top'
		}}
	>
		<div use:motion class="absolute inset-0 h-96 w-[32rem] rounded-2xl bg-[#010101] p-2">
			<div class="absolute inset-0 rounded-lg bg-[#272729]"></div>
			{#if src}
				<img
					{src}
					alt="Aceternity Svelte Logo"
					class="absolute inset-0 h-full w-full rounded-lg object-cover object-left-top"
				/>
			{/if}
		</div>
	</Motion>
</div>
