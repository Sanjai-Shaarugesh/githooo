import { preprocessMeltUI, sequence } from '@melt-ui/pp';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { enhancedImages } from '@sveltejs/enhanced-img';
//import adapter from '@sveltejs/adapter-cloudflare';
//import adapter from 'sveltekit-adapter-deno';

//import adapter from '@sveltejs/adapter-netlify';
//import adapter from '@sveltejs/adapter-static';


/** @type {import('@sveltejs/kit').Config}*/
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: sequence([vitePreprocess(), preprocessMeltUI()]),
	plugins: [enhancedImages()],
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			
			
		}),
		serviceWorker: {
			register: false
		  },

		csrf: {
			checkOrigin: false // Add if you face CSRF errors
		  }
		
	}
};
export default config;
