import { preprocessMeltUI, sequence } from '@melt-ui/pp';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: sequence([vitePreprocess(), preprocessMeltUI()]),
    kit: {
        adapter: adapter({
            // Vercel-specific configuration
            edge: false,           // Use Node.js runtime
            external: [],          // No external dependencies to include
            split: false,          // Don't split your app into smaller chunks
            isr: {
                expiration: false  // Disable ISR by default
            }
        }),
        inlineStyleThreshold: Infinity,
        alias: {
            '$lib/*': './src/lib/*'
        }
    }
};

export default config;