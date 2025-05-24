<script lang="ts">
  export let page;
  export let rows;
  export let avail: number[];
  export let alloc: number[][];
  export let needs: number[][];
  let safeSequence: string[] = [];
  let finished = Array(rows).fill(false);

  function addArrays(a: number[], b: number[]): number[] {
    return a.map((val, i) => val + b[i]);
  }

  let instances = avail;

  for (const a of alloc) {
    instances = addArrays(instances, a);
  }

  //Finding the safe sequence
  let work = avail;
  let deadlock = false;
  let updateWork = false;
  let finish = false;

  while (!deadlock && !finish) {
    deadlock = true;

    for (let i = 0; i < rows; i++) {
      if (!finished[i]) {
        updateWork = true;

        for (let j = 0; j < needs[i].length; j++) {
          if (needs[i][j] > work[j]) {
            updateWork = false;
            break;
          }
        }

        if (updateWork) {
          deadlock = false;
          finished[i] = true;
          work = addArrays(work, alloc[i]);
          safeSequence.push((i + 1).toString());

          if (safeSequence.length == rows) {
            deadlock = false;
            finish = true;
            break;
          }
        }
      }
    }
  }
</script>

<div class="mt-10 sm:w-lg flex flex-col items-center">
  {#if deadlock}
    <div class="w-xs sm:w-lg place-items-center space-y-1">
      <h1 class="text-lg sm:text-xl font-bold">
        Uh Oh... A deadlock has occured!
      </h1>
      <h2 class="text-sm sm:text-base">No safe sequence has been found</h2>
    </div>
    <div class="flex items-center justify-center pt-5">
      <img src="/Locked.svg" alt="locked" class="-mr-5 z-1" />
      <a class="btn pl-6" href="./App.svelte">Try Again</a>
    </div>
  {:else}
    <div class="w-xs sm:w-lg place-items-center space-y-1">
      <h1 class="text-lg sm:text-xl font-bold">Safe Sequence Found!</h1>
      <h2 class="text-sm sm:text-base">Check out the safe sequence below</h2>
    </div>
    <div class="text-sm mt-10 mb-5">
      <ul
        class="flex items-center w-xs sm:w-xl md:w-2xl md:{safeSequence.length <=
        5
          ? 'justify-center'
          : ''} overflow-x-auto {safeSequence.length <= 3
          ? 'justify-center'
          : ''}"
      >
        {#each safeSequence as index, i}
          <li>
            <div
              class="flex rounded-full aspect-square bg-[#fbca6f] justify-center items-center w-18 sm:w-24"
            >
              <div
                class="flex rounded-full aspect-square bg-[#F8B858] justify-center items-center w-14 sm:w-19 text-base font-bold sm:text-xl"
              >
                P<sub>{index}</sub>
              </div>
            </div>
          </li>
          {#if i !== safeSequence.length - 1}
            <i class="ri-arrow-right-long-line ri-xl mx-3"></i>
          {/if}
        {/each}
      </ul>
    </div>
  {/if}

  <div class="w-xs sm:w-lg flex justify-between mt-5 border-t pt-5">
    <button
      class="btn btn-ghost border-0 bg-transparent"
      type="submit"
      aria-label="button"
      onclick={() => (page = 5)}
    >
      <i class="ri-arrow-left-long-line ri-xl"></i>
    </button>
    <a
      class="btn bg-[#8b79d9] border-0 shadow-md"
      href="./App.svelte"
      hidden={deadlock}>Try Again</a
    >
  </div>
</div>
