<script lang="ts">
  export let page;
  export let cols: number;
  export let avail = Array(cols);

  function resetAvail() {
    avail = Array(cols);
  }
</script>

<form class="my-10 space-y-5 place-items-center" onsubmit={() => (page = 5)}>
  <h1 class="text-md sm:text-lg font-bold text-center">
    Step 4: Fill out the Available Resources
  </h1>
  <fieldset
    class="fieldset w-xs  sm:w-lg px-3 rounded-box bg-transparent border-2 border-[#8B79D9] shadow-md"
  >
    <legend class="fieldset-label sm:text-lg text-base font-bold px-3">
      Available Resources
      <button
        class="btn btn-circle shadow-md bg-[#8B79D9] border-0 h-8 w-8 sm:h-10 sm:w-10"
        type="button"
        aria-label="button"
        onclick={() => resetAvail()}
        ><i class="ri-reset-right-line sm:scale-120 text-white sm:text-black"></i></button
      >
    </legend>
    <div class="flex flex-col gap-1 overflow-x-auto pb-5">
      <div class="flex flex-row w-fit">
        <div class="ml-5"></div>
        {#each { length: cols }, i}
          <div class="mx-0.5 mb-2 w-10 mt-5 text-center">
            <span class="text-sm sm:text-base font-semibold text-black"
              >R<sub>{i + 1}</sub></span
            >
          </div>
        {/each}
      </div>
      <div class="w-fit flex items-center ml-5">
        {#each { length: cols }, j}
          <input
            bind:value={avail[j]}
            required
            class="rounded-xs mx-0.5 w-10 aspect-square text-center text-base bg-white text-black"
            type="number"
            step="1"
            min="0"
          />
        {/each}
      </div>
    </div>
  </fieldset>
  <div class="w-xs sm:w-lg flex justify-between">
    <button
      class="btn btn-ghost border-0 bg-transparent"
      type="button"
      aria-label="button"
      onclick={() => (page = 3)}
    >
      <i class="ri-arrow-left-long-line ri-xl"></i>
    </button>
    <button class="btn btn-ghost border-0" type="submit" aria-label="button">
      <i class="ri-arrow-right-long-line ri-xl"></i>
    </button>
  </div>
</form>
