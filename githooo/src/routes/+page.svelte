<script lang='ts'>
// @ts-nocheck


    export let data;
    console.log(data)

    //import {signIn , signOut} from '../auth/auth'
     import { signIn, signOut } from '@auth/sveltekit/client'
   import {page} from '$app/state'
    
    console.log(page.data.session)
   
    

  

    

</script>

<div>
    {#if page.data.session}
    <h1>you are logged in</h1>
    <h2>{page.data.session.user?.name}</h2>
    <h3>{page.data.session.user?.email}</h3>
    <button on:click={()=>{signOut()}}>log out</button>
    <img src={page.data.session.user?.image} alt="img">
    
    
        
    <button on:click={data}>get followerList</button>
   
    
    {:else}
    <h1>you are logged out</h1>
    <button on:click={()=>{signIn('github')}}>login using github</button>
    {/if}
</div>



<style>
    button{
        background-color: brown;
    }
</style>