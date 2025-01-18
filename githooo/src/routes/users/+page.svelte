<script lang='ts'>
    export let data;
    console.log(data)
</script>

{#each data.RandomUsers as datas}
<h1>{datas.login}</h1>
<img src={datas.avatar_url} alt="">
<h3>{datas.login}</h3>
<a href={`/users/${datas.login}`}><button>for info click this button</button></a>
{/each}