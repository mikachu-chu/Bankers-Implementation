<script lang="ts">
  export let page;
  export let cols;
  export let rows;
  export let avail : number[];
  export let alloc : number[][];
  export let max : number[][];
  export let needs : number[][];

  let instances = avail;
  var i, j;
  for (i in alloc) {
  for (j in alloc[i]) {

  }
 }

  let current_alloc = alloc[1];
  while (current_alloc != avail) {
    for (let i = 0; i < rows; i++) {
      needs[i] <= current_alloc ?
    }
  }



</script>

   <form class="my-5 space-y-5" onsubmit={() => page = 6}>
      <h1 class="text-md font-bold text-center">Step 6: Computation</h1>
          <fieldset
      class="fieldset w-xs px-3 rounded-box bg-transparent border-2 border-[#8B79D9] shadow-md" 
    >
      <legend class="fieldset-label text-base font-bold px-3">
        Computation
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
          <div class="rounded-xs mx-0.5 w-10 aspect-square flex justify-center items-center bg-white text-black">
          {needs[i][j]}
          </div>
          {/each}
        </div>

        {/each}
      </div>
    </fieldset>
    <div class="w-xs flex justify-between">
      <button class="btn btn-ghost border-0 bg-transparent" type="button" onclick={() => page = 4}>
        <i class="ri-arrow-left-long-line ri-xl"></i>
      </button>
      <button class="btn btn-ghost border-0 bg-transparent" type="submit">
        <i class="ri-arrow-right-long-line ri-xl"></i>
      </button>
    </div>
  </form>