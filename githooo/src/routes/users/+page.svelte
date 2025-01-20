<script lang='ts'>
	
	
	 import Carousel from './Carousel .svelte'
  
    export let data;
   // console.log(data)
</script>

{#each data.RandomUsers as datas}
<div class="shrink-0 group block">
    <div class="flex items-center">
      <img class="inline-block shrink-0 size-[62px] rounded-full" src={datas.avatar_url} alt={datas.login}>
      <div class="ms-3">
        <h3 class="font-semibold text-gray-800 dark:text-white">{datas.login}</h3>
        <p class="text-sm font-medium text-gray-400 dark:text-neutral-500">{datas.email}</p>
      </div>
    </div>
  </div>
{/each}

<Carousel images={data} />



