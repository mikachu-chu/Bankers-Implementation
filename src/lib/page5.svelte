<script lang="ts">
  export let page;
  export let cols;
  export let rows;
  export let alloc: number[][];
  export let max: number[][];
  export let needs: number[][];

  needs = max.map((row, i) => row.map((val, j) => val - alloc[i][j]));
</script>

<form class="my-10 space-y-5 place-items-center" onsubmit={() => (page = 6)}>
  <h1 class="text-md sm:text-lg font-bold text-center">
    Almost there! Below is the Needs Matrix
  </h1>
  <fieldset
    class="fieldset min-w-xs sm:max-w-lg xl:max-w-2xl px-3 rounded-box bg-transparent border-2 border-[#8B79D9] shadow-md"
  >
    <legend class="fieldset-label sm:text-lg text-base font-bold px-3">
      Needs Matrix
    </legend>
    <div class="flex flex-col gap-1 overflow-x-auto pb-5">
      <div class="flex flex-row w-fit">
        <div class="w-10 ml-5"></div>
        {#each { length: cols }, i}
          <div class="mx-0.5 mb-2 w-10 mt-5 text-center">
            <span class="text-sm sm:text-base font-semibold text-black"
              >R<sub>{i + 1}</sub></span
            >
          </div>
        {/each}
      </div>
      {#each { length: rows }, i}
        <div class="w-fit flex items-center ml-5">
          <div class="w-10 aspect-ratio">
            <span class="text-sm sm:text-base font-semibold text-black"
              >P<sub>{i + 1}</sub></span
            >
          </div>
          {#each { length: cols }, j}
            <div
              class="rounded-xs mx-0.5 w-10 aspect-square flex justify-center items-center bg-white text-black text-base"
            >
              {needs[i][j]}
            </div>
          {/each}
        </div>
      {/each}
    </div>
  </fieldset>
  <div class="w-xs sm:w-lg xl:w-2xl flex justify-between border-t pt-5 mt-10">
    <button
      class="btn btn-ghost border-0 bg-transparent"
      type="button"
      aria-label="button"
      onclick={() => (page = 4)}
    >
      <i class="ri-arrow-left-long-line ri-xl"></i>
    </button>
    <button
      class="btn btn-ghost border-0 bg-transparent"
      type="submit"
      aria-label="button"
    >
      <i class="ri-arrow-right-long-line ri-xl text-black"></i>
    </button>
  </div>
</form>
