<script lang="ts">
  import { fly} from 'svelte/transition';
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
  class="bg-linear-to-bl from-[#CCDCFF] to-[#805EBF] h-screen overflow-y-auto"
  in:fly={{ y: -500, duration: 1000 }}
>
  <div class="flex flex-col w-full items-center">
    <div class="mt-10 sm:mt-20 w-xs sm:w-lg border-b place-items-center">
      <div class="flex justify-center items-end w-xs sm:w-lg">
        <p class="text-4xl sm:text-6xl tracking-widest pb-3 sm:pb-5">DEADL</p>
      <label class="swap swap-flip">
         <input type="checkbox" />
         
         <div  class="swap-on"><img src="/locked.png" alt="O" /></div>
         <div class="swap-off"><img src="/unlocked.png" alt="O" /></div>
          
      </label>
      <p class="text-4xl sm:text-6xl tracking-widest pb-3 sm:pb-5">CKED</p>
      </div>
      <h2 class="text-sm sm:text-lg text-center mt-1 mb-4 sm:mb-4">
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

  <div class="fixed bottom-0 shadow-xl bg-[#431259]/10 sm:bg-transparent w-screen justify-center text-xs sm:text-sm h-8 sm:h-10 items-center flex gap-2">
    <a class="btn-circle btn h-6 w-6 bg-black text-white flex contents-center border-0" aria-label="button" type="button" href="https://github.com/mikachu-chu"><i class="ri-github-fill sm:scale-110"></i></a>
      <span>Mikachu Chu</span>
  </div>
</main>