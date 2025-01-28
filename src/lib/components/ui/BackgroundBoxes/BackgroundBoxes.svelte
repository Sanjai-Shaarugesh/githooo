<script lang="ts">
	import { Motion } from 'svelte-motion';
	import { cn } from '$lib/utils';

	export let className: string | undefined = undefined;

	const rows = new Array(150).fill(1);
	const cols = new Array(100).fill(1);
	let colors = [
		'--sky-300',
		'--pink-300',
		'--green-300',
		'--yellow-300',
		'--red-300',
		'--purple-300',
		'--blue-300',
		'--indigo-300',
		'--violet-300'
	];
	const getRandomColor = () => {
		return colors[Math.floor(Math.random() * colors.length)];
	};
</script>

<div
	style="transform: translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)"
	class={cn(
		's absolute -top-1/4 left-1/4 z-0  flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4 ',
		className
	)}
	{...$$props}
>
	{#each rows as _, i (`row ${i}`)}
		<Motion let:motion>
			<div use:motion class="relative h-8 w-16 border-l border-slate-700">
				{#each cols as _, j (`col ${j}`)}
					<Motion
						let:motion
						whileHover={{
							backgroundColor: `var(${getRandomColor()})`,
							transition: { duration: 0 }
						}}
						animate={{
							transition: { duration: 2 }
						}}
					>
						<div use:motion class="relative h-8 w-16 border-r border-t border-slate-700">
							{#if j % 2 === 0 && i % 2 === 0}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="pointer-events-none absolute -left-[22px] -top-[14px] h-6 w-10 stroke-[1px] text-slate-700"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
								</svg>
							{/if}
						</div>
					</Motion>
				{/each}
			</div>
		</Motion>
	{/each}
</div>
