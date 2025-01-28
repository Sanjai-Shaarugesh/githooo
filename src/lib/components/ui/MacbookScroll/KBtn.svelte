<script lang="ts">
	import { cn } from '$lib/utils';

	export let className: string | undefined = undefined;
	export let childrenClassName: string | undefined = undefined;
	export let backlit: boolean = true;
</script>

<div class={cn('rounded-[4px] p-[0.5px]', backlit && 'bg-white/[0.2] shadow-xl shadow-white')}>
	<div
		class={cn('flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D]', className)}
		style="box-shadow: 0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset;"
	>
		<div
			class={cn(
				'flex w-full flex-col items-center justify-center text-[5px] text-neutral-200',
				childrenClassName,
				backlit && 'text-white'
			)}
		>
			<slot />
		</div>
	</div>
</div>
