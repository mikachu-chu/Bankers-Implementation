<script lang="ts">
  export let page;
  export let cols = '';
  export let rows = '';

</script>

    <form class="my-5 space-y-5" onsubmit={() => page = 2}>
    <h1 class="text-md font-bold text-center">Step 1: Kindly enter following details</h1>
    <div class="w-xs flex justify-between">
    <div class="bg-[#fbca6f] rounded-box w-35 py-3 h-fit place-items-center space-y-3 shadow-md">
    <p class="text-center text-sm text-black font-bold text-wrap">Number of <br> Processes</p>
    <input
            bind:value={rows}
            class="bg-[#F8B858] text-2xl font-bold rounded-box w-20 aspect-square text-center text-white"
            type="number"
            required
            step="1"
            min="1"
          />
    </div>
    <div class="bg-[#fbca6f] rounded-box w-35 py-3 h-fit place-items-center space-y-3 shadow-md">
    <p class="text-center text-sm text-black font-bold text-wrap">Number of <br> Resources</p>
    <input
            bind:value={cols}
            required
            class="bg-[#F8B858] text-2xl font-bold rounded-box w-20 aspect-square text-center text-white"
            type="number"
            step="1"
            min="1"
          />
    </div>
    </div>

      <div class="w-xs flex justify-end">
        <button class="btn btn-ghost border-0 bg-transparent" 
        type="submit">
          <i class="ri-arrow-right-long-line ri-xl"></i>
        </button>
      </div>

  </form>