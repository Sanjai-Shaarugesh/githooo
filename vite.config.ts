import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { VitePWA } from 'vite-plugin-pwa'; // Correct import for the PWA plugin

export default defineConfig({
    plugins: [
        sveltekit(),
        enhancedImages(),
        
        VitePWA({
            registerType: 'autoUpdate', // Automatically update the service worker
            includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'], // Static assets to cache
            manifest: {
                name: 'githooo',
                short_name: 'githooo',
                description: 'A powerful AI chatbot created by Sanjai.',
                theme_color: '#ffffff',
                background_color: '#ffffff',
                display: 'standalone', // App-like experience
                icons: [
                    {
                        src: 'pwa-64x64.png',
                        sizes: '64x64',
                        type: 'image/png'
                    },
                    {
                        src: 'pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any' // General-purpose icon
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'maskable' // Maskable icon for adaptive shapes
                    }
                ]
            }
        })
    ]
});