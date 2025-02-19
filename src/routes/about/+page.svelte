<script>

	import { PinContainer } from "$lib/components/ui/ThreeDPin";
    import { injectAnalytics } from '@vercel/analytics/sveltekit'


	injectAnalytics()
    
    export let data;
	const link = data.githubProfile;
</script> 

<a href={link} target="_blank">
<div class="flex h-[40rem] w-full items-center justify-center">
   
	<PinContainer title="Github" href={link}>
		<div
			class="flex h-[20rem] w-[20rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2"
		>
			<h3 class="!m-0 max-w-xs !pb-2 text-base font-bold text-slate-100">
				Creator of this website
			</h3>
			<div class="!m-0 !p-0 text-base font-normal">
				<a href={link} target="_blank"
					><span class="text-slate-500"> To reach me out me follow me on GitHub </span></a
				>
			</div>
			<div
				class="mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
			></div>
		</div></PinContainer
	>

</div></a>