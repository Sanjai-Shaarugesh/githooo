<script>
     import {CardItem,CardBody,CardContainer} from '$lib/components/ui/ThreeDCardEffect';

    export let data;
    
	
	let isMouseEntered = false;
     console.log(data)
</script>

<CardContainer bind:isMouseEntered className="inter-var">
	<CardBody
		className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  "
	>
		<CardItem
			{isMouseEntered}
			translateZ="50"
			className="text-xl font-bold text-neutral-600 dark:text-white"
		>
			{data.users.login}
		</CardItem>
		<CardItem
			{isMouseEntered}
			translateZ="60"
			className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
		>
			{data.users.email}
		</CardItem>
		<CardItem {isMouseEntered} translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
			<img
				src={data.users.avatar_url}
				height="1000"
				width="1000"
				class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
				alt="thumbnail"
			/>
		</CardItem>
		<div class="mt-20 flex items-center justify-between">
			<CardItem
				{isMouseEntered}
				translateZ={20}
				translateX={-40}
				className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
			>
				Try now →
			</CardItem>
			<CardItem
				{isMouseEntered}
				translateZ={20}
				translateX={40}
				className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
			>
				Sign up
			</CardItem>
		</div>
	</CardBody>
</CardContainer>


