<script lang="ts">
	import { cn } from '$lib/utils';
	import { createNoise3D } from 'simplex-noise';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	export let className: string | undefined = undefined;
	export let containerClassName: string | undefined = undefined;
	export let colors: string[] | undefined = undefined;
	export let waveWidth: number | undefined = undefined;
	export let backgroundFill: string | undefined = undefined;
	export let blur: number | undefined = 10;
	export let speed: 'slow' | 'fast' | undefined = 'fast';
	export let waveOpacity: number | undefined = 0.5;
	//   export let [key: string]: any;

	const noise = createNoise3D();
	let w: number, h: number, nt: number, i: number, x: number, ctx: any, canvas: any;

	//  const canvasRef = writable<HTMLCanvasElement>();
	let canvasRef: HTMLCanvasElement;

	const getSpeed = () => {
		switch (speed) {
			case 'slow':
				return 0.001;
			case 'fast':
				return 0.002;
			default:
				return 0.001;
		}
	};

	const init = () => {
		//console.log(canvasRef);
		canvas = canvasRef;
		ctx = canvas.getContext('2d');
		//console.log('ctx', ctx);
		w = ctx.canvas.width = window.innerWidth;
		h = ctx.canvas.height = window.innerHeight;
		ctx.filter = `blur(${blur}px)`;
		nt = 0;
		window.onresize = function () {
			w = ctx.canvas.width = window.innerWidth;
			h = ctx.canvas.height = window.innerHeight;
			ctx.filter = `blur(${blur}px)`;
		};
		render();
	};

	const waveColors = colors ?? ['#38bdf8', '#818cf8', '#c084fc', '#e879f9', '#22d3ee'];
	const drawWave = (n: number) => {
		nt += getSpeed();
		for (i = 0; i < n; i++) {
			ctx.beginPath();
			ctx.lineWidth = waveWidth || 50;
			ctx.strokeStyle = waveColors[i % waveColors.length];
			for (x = 0; x < w; x += 5) {
				var y = noise(x / 800, 0.3 * i, nt) * 100;
				ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
			}
			ctx.stroke();
			ctx.closePath();
		}
	};

	let animationId: number;
	const render = () => {
		ctx.fillStyle = backgroundFill || 'black';
		ctx.globalAlpha = waveOpacity || 0.5;
		ctx.fillRect(0, 0, w, h);
		drawWave(5);
		animationId = requestAnimationFrame(render);
	};

	onMount(() => {
		init();
		return () => {
			cancelAnimationFrame(animationId);
		};
	});
</script>

<div class={cn('flex h-screen flex-col items-center justify-center', containerClassName)}>
	<canvas class="absolute inset-0 z-0" bind:this={canvasRef} id="canvas"></canvas>
	<div class={cn('relative z-10', className)} {...$$props}>
		<slot />
	</div>
</div>
