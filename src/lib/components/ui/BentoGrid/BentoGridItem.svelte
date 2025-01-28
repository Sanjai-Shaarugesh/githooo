<script lang="ts">
	import { cn } from '$lib/utils';

	export let className: string | undefined = undefined;
	export let title: string | HTMLElement | undefined = undefined;
	export let description: string | HTMLElement | undefined = undefined;
	export const icon: HTMLElement | undefined = undefined;
</script>

<div
	class={cn(
		'group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-transparent bg-white p-4 shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none',
		className
	)}
>
	<slot name="header" />
	<div class="transition duration-200 group-hover/bento:translate-x-2">
		<slot name="icon" />
		<div class="mb-2 mt-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
			{title}
		</div>
		<div class="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
			{description}
		</div>
	</div>
</div>
