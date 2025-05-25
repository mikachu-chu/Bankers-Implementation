<script lang="ts">
  export let page;
  export let rows;
  export let avail: number[];
  export let alloc: number[][];
  export let needs: number[][];

  //function for adding arrays
  function addArrays(a: number[], b: number[]): number[] {
    return a.map((val, i) => val + b[i]);
  }

  //Finding the safe sequence
  let safeSequence: string[] = [];         //array to store the safe sequence
  let finished = Array(rows).fill(false);  //flags if a certain process has finished
  let work = avail;                        //initialize work as the available resources
  let deadlock = false;                    //detects deadlock
  let updateWork = false;
  let safe = false;                        //detects if a safe sequence has been found

  while (!deadlock && !safe) {             //Keep running until no deadlock has been detected
    deadlock = true;                       //or if no safe sequence has been found yet.

    for (let i = 0; i < rows; i++) {       //For each process,
      if (!finished[i]) {                  //check if that process has already finished.
        updateWork = true;                 //Assume first that we need to update work.

        for (let j = 0; j < needs[i].length; j++) {     //For each resource,
          if (needs[i][j] > work[j]) {                  //check if needs is greater than work.
            updateWork = false;                         //If so, DO NOT update work.
            break;
          }
        }

        if (updateWork) {                           //Otherwise, we need to update work. 
          deadlock = false;                         //That means there is no deadlock (yet).
          finished[i] = true;                       //Mark the current process as finished.
          work = addArrays(work, alloc[i]);         //Update work (work = work + allocation).
          safeSequence.push((i + 1).toString());    //Add the process to the (potential) safe sequence

          if (safeSequence.length == rows) {        //If all processes have been added to safe sequence,
            deadlock = false;                       //then there is no deadlock,
            safe = true;                            //and the state is safe;
            break;                                  //so break out of the for loop.
          }
        }
      }
    }
  }
</script>

<div class="mt-10 sm:w-lg flex flex-col items-center">
  {#if deadlock}
    <div class="w-xs sm:max-w-lg xl:max-w-2xl place-items-center space-y-1">
      <h1 class="text-lg sm:text-xl font-bold">
        Uh Oh... A deadlock has occured!
      </h1>
      <h2 class="text-sm sm:text-base">No safe sequence has been found</h2>
    </div>
    <div class="flex items-center justify-center mt-5">
      <img src="/Locked.png" alt="locked" class="h-35 -mr-5 z-1" />
      <a class="btn pl-6" href="/index.html">Try Again</a>
    </div>
  {:else}
    <div class="min-w-xs sm:max-w-lg xl:max-w-2xl place-items-center space-y-1">
      <h1 class="text-lg sm:text-xl font-bold">Safe Sequence Found!</h1>
      <h2 class="text-sm sm:text-base">Check out the safe sequence below</h2>
    </div>
    <div class="text-sm mt-10">
      <ul
        class="flex items-center w-xs sm:w-lg xl:w-2xl overflow-x-auto"
        class:justify-center={safeSequence.length <= 2}
        class:sm:justify-center={safeSequence.length <= 3}
        class:xl:justify-center={safeSequence.length <= 5}
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

  <div class="w-xs sm:w-lg xl:w-2xl flex justify-between border-t pt-5 mt-10">
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
      href="/index.html"
      hidden={deadlock}>Try Again</a
    >
  </div>
</div>
