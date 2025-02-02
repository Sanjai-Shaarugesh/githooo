import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { SvelteKitPWA } from '@vite-pwa/sveltekit'

export default defineConfig({
	plugins: [
		SvelteKitPWA({ 
			registerType: 'autoUpdate',
			includeAssets: ['./favicon.ico', './apple-touch-icon.png', './mask-icon.svg'],
			manifest: {
			  name: 'Sanjai-Notes',
			  short_name: 'Sanjai-Notes',
			  theme_color: '#ffffff',
			  icons: [
				  {
					  src: './apple-touch-icon.png',
					  sizes: '64x64',
					  type: 'image/png'
				  },
				  {
					  src: './apple-touch-icon.png',
					  sizes: '192x192',
					  type: 'image/png'
				  },
				  {
					  src: './apple-touch-icon.png',
					  sizes: '512x512',
					  type: 'image/png',
					  purpose: 'any'
				  },
				  {
					  src: './apple-touch-icon.png',
					  sizes: '512x512',
					  type: 'image/png',
					  purpose: 'maskable'
				  }
			  ],
			}, 
		  }),
		sveltekit(),
		enhancedImages(),
	],
});

// Separate configuration for Vitest
export const testConfig = {
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
	},
};