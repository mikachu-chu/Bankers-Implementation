<script lang="ts">
  
  export let page;
  export let cols;
  export let rows;
  export let alloc = Array.from({ length: +rows }, () => Array(+cols).fill(''));

</script>
   <form class="my-5 space-y-5" onsubmit={() => page = 3}>
      <h1 class="text-md font-bold text-center">Step 2: Fill out the Allocation Matrix</h1>
          <fieldset
      class="fieldset w-xs px-3 rounded-box bg-transparent border-2 border-[#8B79D9] shadow-md" 
    >
      <legend class="fieldset-label text-base font-bold px-3">
        Allocation Matrix
      </legend>
      <div class="flex flex-col gap-1  overflow-x-auto pb-5">
        <div class="flex flex-row w-fit">
          <div class="w-10 ml-5"></div>
          {#each {length: cols}, i}
          <div class="mx-0.5 mb-2 w-10 mt-5 text-center">
            <span class="text-sm sm:text-base font-semibold text-black"
              >R<sub>{i+1}</sub></span
            >
          </div>
          {/each}
        </div>
        {#each {length: rows}, i}
        <div class="w-fit flex items-center ml-5">
          <div class="w-10 aspect-ratio">
            <span class="text-sm sm:text-base font-semibold text-black"
              >P<sub>{i+1}</sub></span
            >
          </div>
          {#each {length: cols}, j}
          <input
            bind:value={alloc[i][j]}
            required
            class="rounded-xs mx-0.5 w-10 aspect-square text-center bg-white text-black"
            type="number"
            step="1"
            min="0"
            max="9"
          />
          {/each}
        </div>

        {/each}
      </div>
    </fieldset>
    <div class="w-xs flex justify-between">
      <button class="btn btn-ghost border-0 bg-transparent" type="button" onclick={() => page = 1}>
        <i class="ri-arrow-left-long-line ri-xl"></i>
      </button>
      <button class="btn btn-ghost border-0 bg-transparent" type="submit">
        <i class="ri-arrow-right-long-line ri-xl"></i>
      </button>
    </div>
  </form>
