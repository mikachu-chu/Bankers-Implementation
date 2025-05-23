<script lang="ts">
  export let page;
  export let cols;
  export let avail = Array(cols);
</script>

   <form class="my-5 space-y-5 place-items-center" onsubmit={() => page = 5}>
      <h1 class="text-md font-bold text-center">Step 4: Fill out the Available Resources</h1>
      <fieldset class="fieldset w-xs px-3 rounded-box bg-transparent border-2 border-[#8B79D9] shadow-md" >
      <legend class="fieldset-label text-base font-bold px-3">
        Available Resources
      </legend>
      <div class="flex flex-col gap-1  overflow-x-auto pb-5">
        <div class="flex flex-row w-fit">
          <div class="ml-5"></div>
          {#each {length: cols}, i}
          <div class="mx-0.5 mb-2 w-10 mt-5 text-center">
            <span class="text-sm sm:text-base font-semibold text-black"
              >R<sub>{i+1}</sub></span
            >
          </div>
          {/each}
        </div>
        <div class="w-fit flex items-center ml-5">
          {#each {length: cols}, j}
          <input
            bind:value={avail[j]}
            required
            class="rounded-xs mx-0.5 w-10 aspect-square text-center bg-white text-black"
            type="number"
            step="1"
            min="0"
            max="9"
          />
          {/each}
        </div>

      </div>
    </fieldset>
    <div class="w-xs flex justify-between">
      <button class="btn btn-ghost border-0 bg-transparent" type="button" aria-label="button" onclick={() => page = 3}>
        <i class="ri-arrow-left-long-line ri-xl"></i>
      </button>
      <button class="btn btn-ghost border-0 bg-transparent" type="submit" aria-label="button">
        <i class="ri-arrow-right-long-line ri-xl"></i>
      </button>
    </div>
  </form>