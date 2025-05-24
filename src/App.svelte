<script lang="ts">
  import { fly, slide, fade } from 'svelte/transition';
  import Page1 from './lib/page1.svelte';
  import Page2 from './lib/page2.svelte';
  import Page3 from './lib/page3.svelte';
  import Page4 from './lib/page4.svelte';
  import Page5 from './lib/page5.svelte';
  import Page6 from './lib/page6.svelte';

  let page = 1;
  let rows: number;
  let cols: number;
  let alloc: number[][];
  let max: number[][];
  let needs: number[][];
  let avail: number[];
</script>

<main
  class="bg-linear-to-bl from-[#CCDCFF] to-[#805EBF]"
  in:fly={{ y: -500, duration: 1000 }}
>
  <div class="flex flex-col w-full items-center">
    <div class="mt-10 pb-5 w-xs sm:w-lg border-b place-items-center space-y-1">
      <div class="w-full">
        <img src="/src/assets/headerLocked.png" alt="DEADLOCKED" />
      </div>
      <h2 class="text-sm sm:text-lg text-center">
        An Implementation of Banker's Algorithm
      </h2>
    </div>

    {#if page === 1}
      <div in:fly={{ duration: 500 }}>
        <Page1 bind:page bind:cols bind:rows />
      </div>
    {:else if page === 2}
      <div in:fly={{ duration: 500 }}>
        <Page2 bind:page bind:cols bind:rows bind:alloc />
      </div>
    {:else if page === 3}
      <div in:fly={{ duration: 500 }}>
        <Page3 bind:page bind:cols bind:rows bind:alloc bind:max />
      </div>
    {:else if page === 4}
      <div in:fly={{ duration: 500 }}>
        <Page4 bind:page bind:cols bind:avail />
      </div>
    {:else if page === 5}
      <div in:fly={{ duration: 500 }}>
        <Page5 bind:page bind:cols bind:rows bind:alloc bind:max bind:needs />
      </div>
    {:else if page === 6}
      <div in:fly={{ duration: 500 }}>
        <Page6 bind:page bind:rows bind:alloc bind:needs bind:avail />
      </div>
    {/if}
  </div>
</main>

<style>
  /* * {
    border: 1px solid black;
  } */
</style>
