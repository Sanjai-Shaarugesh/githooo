<script lang="ts">
	import { cn } from '$lib/utils';

	export let className: string | undefined = undefined;
</script>

<div
	class={cn(
		'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3 ',
		className
	)}
>
	<slot />
</div>
