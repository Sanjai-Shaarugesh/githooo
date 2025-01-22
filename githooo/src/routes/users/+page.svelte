<script lang='ts'>
	
  import { A, DarkMode } from 'flowbite-svelte';
	 import Carousel from './Carousel .svelte';
   import { Card, Button, Toggle } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
 
    export let data;
     let vCard = false;
   // console.log(data)
</script>
<DarkMode class="text-primary-500 dark:text-primary-600 border dark:border-gray-800" />

<div class='gap-8 columns-2xs'>{#each data.RandomUsers as datas}
<div  class="space-y-4">
  <Card img={datas.avatar_url} reverse={vCard}>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{datas.login}</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">{datas.email}</p>
    <a href={`users/${datas.login}`} target="_blank"><Button>
      Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
    </Button></a>
    
  </Card>
  <Toggle bind:checked={vCard} class="italic dark:text-gray-500">Reverse</Toggle>
</div>
{/each}</div>




<Carousel images={data} />



