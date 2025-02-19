/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

import { build, files, version } from '$service-worker';

const worker = self as unknown as ServiceWorkerGlobalScope;
const CACHE = `cache-${version}`;

const ASSETS = [
    '/',
    ...build, // the app itself
    ...files  // everything in `static`
];

worker.addEventListener('install', (event) => {
    async function addFilesToCache() {
        const cache = await caches.open(CACHE);
        await cache.addAll(ASSETS);
    }

    event.waitUntil(addFilesToCache());
    worker.skipWaiting(); // Ensure SW activates immediately
});

worker.addEventListener('activate', (event) => {
    async function deleteOldCaches() {
        for (const key of await caches.keys()) {
            if (key !== CACHE) await caches.delete(key);
        }
    }

    event.waitUntil(deleteOldCaches());
    worker.clients.claim(); // Take control immediately
});

worker.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    async function respond() {
        const url = new URL(event.request.url);
        const cache = await caches.open(CACHE);

        // Handle navigation requests (index.html fallback)
        if (event.request.mode === 'navigate') {
            const cachedIndex = await cache.match('/');
            return cachedIndex || fetch(event.request);
        }

        // Serve assets from cache
        if (ASSETS.includes(url.pathname)) {
            const response = await cache.match(url.pathname);
            if (response) return response;
        }

        // Network-first for others, fallback to cache
        try {
            const response = await fetch(event.request);
            if (response.status === 200) {
                cache.put(event.request, response.clone());
            }
            return response;
        } catch {
            const response = await cache.match(event.request);
            if (response) return response;
            throw new Error('Offline and no cached response available');
        }
    }

    event.respondWith(respond());
});
