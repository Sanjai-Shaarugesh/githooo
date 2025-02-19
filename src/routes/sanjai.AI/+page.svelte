<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';
    import { WavyBackground } from '$lib/components/ui/WavyBackground';
    import { injectAnalytics } from '@vercel/analytics/sveltekit'

    let prompt = $state('');
    let selectedFiles: FileList | null = null;
    let responseText: string = $state('');
    let error: string | null = $state(null);
    let previewSrc: string | null = $state(null);
    let fileType: string | null = $state(null);
    let fileName: string | null = $state(null);

    injectAnalytics()

    // Function to fetch AI response
    async function fetchResponse() {
        try {
            responseText = ''; // Clear previous response
            error = null; // Clear previous errors

            const formData = new FormData();
            formData.append('prompt', prompt);
            if (selectedFiles) {
                for (let i = 0; i < selectedFiles.length; i++) {
                    formData.append('files', selectedFiles[i]);
                }
            }

            const res = await fetch('/api/AI', {
                method: 'POST',
                body: formData
            });

            if (res.ok) {
                const data = await res.json();
                responseText = data.text || 'No response';
            } else {
                const errorData = await res.json();
                error = errorData.error || 'An error occurred';
            }
        } catch (fetchError) {
            error = 'Failed to fetch response';
            responseText = '';
        }
    }

    // Function to handle file input changes
    function handleFileChange(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            const file = input.files[0];
            fileName = file.name;
            fileType = file.type;

            // Handle different file types for preview
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    if (e.target && typeof e.target.result === 'string') {
                        previewSrc = e.target.result;
                    }
                };
                reader.readAsDataURL(file);
            } else if (file.type.startsWith('video/')) {
                previewSrc = URL.createObjectURL(file);
            } else if (file.type.startsWith('audio/')) {
                previewSrc = URL.createObjectURL(file);
            } else if (file.type === 'application/pdf') {
                previewSrc = URL.createObjectURL(file);
            } else {
                previewSrc = null;
            }

            selectedFiles = input.files;
        } else {
            previewSrc = null;
            fileType = null;
            fileName = null;
            selectedFiles = null;
        }
    }

    // Function to clear the current chat
    function clearChat() {
        prompt = ''; // Reset the input prompt
        responseText = ''; // Clear the AI response
        error = null; // Clear any errors
        previewSrc = null; // Clear the file preview
        fileType = null; // Reset file type
        fileName = null; // Reset file name
        selectedFiles = null; // Clear selected files
    }
</script>

<svelte:head>
    <title>Sanjai.AI</title>
    <meta name="description" content="A powerful AI chatbot created by Sanjai." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div class="relative min-h-screen w-full overflow-hidden bg-gradient-to-r from-blue-900 via-purple-800 to-black">
    <WavyBackground className="max-w-4xl mx-auto pb-20 sm:pb-40">
        <header class="text-center px-4">
            <h1 class="text-2xl font-bold text-white sm:text-4xl lg:text-7xl">Sanjai.AI</h1>
            <p class="mt-4 text-base font-normal text-white sm:text-lg">
                Leverage the power of AI to enhance your experience with our advanced chatbot.
            </p>
        </header>
        <main class="container mx-auto w-full px-4 py-8 sm:py-12">
            <div class="mx-auto w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-gray-900">
                <div class="p-4 sm:p-6">
                    <!-- Query Input -->
                    <div class="mb-4">
                        <input
                            type="text"
                            bind:value={prompt}
                            placeholder="Enter your query here..."
                            class="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 text-gray-800 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                        />
                    </div>
                    <!-- File Input -->
                    <div class="mb-4">
                        <input
                            id="upload"
                            type="file"
                            multiple
                            name="files"
                            onchange={handleFileChange}
                            class="hidden"
                        />
                        <label
                            for="upload"
                            class="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-400 bg-gray-100 p-4 text-center dark:border-gray-700 dark:bg-gray-800"
                        >
                            {#if previewSrc}
                                {#if fileType?.startsWith('image/')}
                                    <img src={previewSrc} alt="Preview" class="mx-auto max-h-48 rounded-lg" />
                                {:else if fileType?.startsWith('video/')}
                                    <video controls class="mx-auto max-h-48 rounded-lg">
                                        <source src={previewSrc} type={fileType} />
                                        <track kind="captions" src="" label="English" srclang="en" default />
                                        Your browser does not support the video tag.
                                    </video>
                                {:else if fileType?.startsWith('audio/')}
                                    <audio controls class="mx-auto max-h-48 rounded-lg">
                                        <source src={previewSrc} type={fileType} />
                                        Your browser does not support the audio element.
                                    </audio>
                                {:else if fileType === 'application/pdf'}
                                    <iframe src={previewSrc} title="PDF Preview" class="mx-auto max-h-48 rounded-lg w-full"></iframe>
                                {:else}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="mx-auto mb-4 h-12 w-12 text-gray-700 dark:text-gray-300"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                        />
                                    </svg>
                                    <p class="text-sm font-normal text-gray-700 dark:text-gray-300">{fileName}</p>
                                {/if}
                            {:else}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="mx-auto mb-4 h-8 w-8 text-gray-700 dark:text-gray-300"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                                    />
                                </svg>
                                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-700 dark:text-gray-300">
                                    Upload file
                                </h5>
                                <p class="text-sm font-normal text-gray-400">File size <b>less than 2mb</b></p>
                                <p class="text-sm font-normal text-gray-400">Formats: <b>JPG, PNG, GIF, PDF, MP4, MP3, ZIP, etc.</b></p>
                            {/if}
                        </label>
                    </div>
                    <!-- Submit Button -->
                    <div class="flex justify-between space-x-4">
                        <button
                            onclick={fetchResponse}
                            class="w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-bold text-white shadow-md transition duration-300 hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:scale-95"
                        >
                            Ask Sanjai
                        </button>
                        <button
                            onclick={clearChat}
                            class="w-full rounded-lg bg-red-500 px-6 py-3 font-bold text-white shadow-md transition duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 active:scale-95"
                        >
                            Clear Chat
                        </button>
                    </div>
                </div>
                <!-- Response/Error Display -->
                {#if error}
                    <div class="rounded-b-2xl bg-red-100 p-6 text-red-700 dark:bg-red-900 dark:text-red-200">
                        <p>{error}</p>
                    </div>
                {:else if responseText}
                    <div class="rounded-b-2xl border-t border-gray-200 p-6 dark:border-gray-700 overflow-y-auto max-h-96 scrollbar-hide">
                        <SvelteMarkdown source={responseText} />
                    </div>
                {/if}
            </div>
        </main>
    </WavyBackground>
</div>