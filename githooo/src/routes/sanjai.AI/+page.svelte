<script lang="ts">
  import SvelteMarkdown from 'svelte-markdown'

  let prompt = '';
  let selectedFiles: FileList | null = null;
  let responseText: string = '';
  let error: string | null = null;
  let imageUrl: string | null = null;
  let previewSrc: string | null = null;

  async function fetchResponse() {
    try {
     // console.log('Sending query:', prompt);
      const formData = new FormData();
      formData.append('prompt', prompt);

      if (selectedFiles) {
        for (let i = 0; i < selectedFiles.length; i++) {
          formData.append('files', selectedFiles[i]);
        }
      }

      const res = await fetch('/api/gemini', {
        method: 'POST',
        body: formData
      });

      if (res.ok) {
        const data = await res.json();
        
        responseText = data.text || 'No response';

        imageUrl = data.imageUrl || null;
        error = null;
      } else {
        const errorData = await res.json();
        error = errorData.error || 'An error occurred';
        responseText = '';
        imageUrl = null;
      }
    } catch (fetchError) {
      error = 'Failed to fetch response';
     // console.error('Fetch error:', fetchError);
      responseText = '';
      imageUrl = null;
    }
  }

  function handleFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === 'string') {
          previewSrc = e.target.result;
        }
      };
      reader.readAsDataURL(file);
      selectedFiles = input.files;
    } else {
      previewSrc = null;
      selectedFiles = null;
    }
  }
</script>



<div class="container w-full mx-auto py-12 px-4">
  <!-- Upload and Query Section -->
  <div class="max-w-xl mx-auto bg-white dark:bg-gray-900 shadow-2xl rounded-2xl overflow-hidden">
    <div class="p-6">
      <!-- Query Input -->
      <div class="mb-4">
        <input 
          type="text"
          bind:value={prompt}
          placeholder="Enter your query here..."
          class="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <!-- File Input -->
      <div class="mb-4">
        <input 
          id="upload"
          type="file"
          multiple
          name="files"
          on:change={handleFileChange}
          class="hidden"
        />
        <button
          type="button"
          class="p-6 w-full bg-gray-100 dark:bg-gray-800 border-dashed border-2 border-gray-400 dark:border-gray-700 rounded-lg text-center cursor-pointer"
          on:click={() => document.getElementById('upload')?.click()}
          on:keydown={(e) => e.key === 'Enter' && document.getElementById('upload')?.click()}
        >
          {#if previewSrc}
            <img src={previewSrc} alt="" class="max-h-48 rounded-lg mx-auto" />
          {:else}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-700 dark:text-gray-300 mx-auto mb-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-700 dark:text-gray-300">Upload picture</h5>
            <p class="font-normal text-sm text-gray-400">File size <b>less than 2mb</b></p>
            <p class="font-normal text-sm text-gray-400">Formats: <b>JPG, PNG, GIF</b></p>
          {/if}
        </button>
      </div>

      <!-- Submit Button -->
      <button 
        on:click={fetchResponse}
        class="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
      >
        Ask sanjai
      </button>
    </div>

    <!-- Response/Error Display -->
    {#if error}
      <div class="p-6 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-b-2xl">
        <p>{error}</p>
      </div>
    {:else if responseText || imageUrl}
      <div class="p-6 border-t border-gray-200 dark:border-gray-700 rounded-b-2xl">
        {#if responseText}
        <SvelteMarkdown source={responseText} />
        {/if}
        {#if imageUrl}
          <img src={imageUrl} alt="" class="mt-4 w-full rounded-lg shadow-lg" />
        {/if}
      </div>
    {/if}
  </div>  </div> 
  

