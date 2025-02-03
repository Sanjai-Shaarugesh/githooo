<script lang="ts">
	import { onMount } from 'svelte';
	import { ButtonGroup, Button, GradientButton } from 'flowbite-svelte';
	import { Range, Label } from 'flowbite-svelte';

	export let images = {
		RandomUsers: [] as Array<{
			avatar_url: string;
			login: string;
		}>
	};

	let carousel: HTMLDivElement;
	let angle = 0;
	let selectedIndex = 0;
	let isDragging = false;
	let startX = 0;
	let currentX = 0;
	let autoRotate = false;
	let autoRotateInterval: NodeJS.Timeout;

	// Touch handling variables
	let touchStartX = 0;
	let touchEndX = 0;
	let lastTap = 0;
	const SWIPE_THRESHOLD = 50;
	const DOUBLE_TAP_DELAY = 300;

	// Carousel configuration
	const cellSize = 210;
	const minCellCount = 20;
	const maxCellCount = 50;
	let cellCount = 9;
	let radius = 0;

	function calculateRadius() {
		radius = Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount));
	}

	function updateCarouselCells() {
		if (!carousel) return;
		const cells = carousel.children;
		for (let i = 0; i < cells.length; i++) {
			const cellAngle = (i / cellCount) * 360;
			(cells[i] as HTMLElement).style.transform = `rotateY(${cellAngle}deg) translateZ(${radius}px)`;
			(cells[i] as HTMLElement).style.display = i < cellCount ? 'block' : 'none';
			cells[i].classList.remove('selected');
		}
		cells[selectedIndex]?.classList.add('selected');
	}

	function rotateCarousel(direction = 1) {
		const rotationAngle = 360 / cellCount;
		angle += direction * rotationAngle;
		if (carousel) {
			carousel.style.transform = `translateZ(-${radius}px) rotateY(${angle}deg)`;
		}
	}

	function handleCellClick(index: number) {
		if (!carousel) return;
		const cells = carousel.children;
		selectedIndex = index;
		const selectedAngle = -index * (360 / cellCount);
		angle = selectedAngle;
		carousel.style.transform = `translateZ(-${radius}px) rotateY(${selectedAngle}deg)`;
		for (let i = 0; i < cells.length; i++) {
			cells[i].classList.remove('selected');
		}
		cells[index].classList.add('selected');
	}

	function handleKeyDown(event: KeyboardEvent, index: number) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			handleCellClick(index);
		}
	}

	function handlePointerStart(event: MouseEvent | TouchEvent) {
		isDragging = true;
		startX = ('touches' in event) ? event.touches[0].clientX : (event as MouseEvent).clientX;
	}

	function handlePointerMove(event: MouseEvent | TouchEvent) {
		if (!isDragging || !carousel) return;
		currentX = ('touches' in event) ? event.touches[0].clientX : (event as MouseEvent).clientX;
		const deltaX = currentX - startX;
		const rotationAngle = (deltaX / cellSize) * (360 / cellCount);
		angle -= rotationAngle;
		carousel.style.transform = `translateZ(-${radius}px) rotateY(${angle}deg)`;
		startX = currentX;
	}

	function handlePointerEnd() {
		isDragging = false;
	}

	function handleSwipe() {
		const deltaX = touchEndX - touchStartX;
		if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
			deltaX > 0 ? rotateCarousel(-1) : rotateCarousel(1);
		}
	}

	function handleDoubleTap(event: MouseEvent | TouchEvent) {
		const currentTime = new Date().getTime();
		const tapLength = currentTime - lastTap;
		
		if (tapLength < DOUBLE_TAP_DELAY && tapLength > 0) {
			toggleAutoRotate();
			event.preventDefault();
		}
		lastTap = currentTime;
	}

	function toggleAutoRotate() {
		autoRotate = !autoRotate;
		if (autoRotate) {
			autoRotateInterval = setInterval(() => rotateCarousel(1), 2000);
		} else {
			clearInterval(autoRotateInterval);
		}
	}

	function handleSliderChange(event: Event) {
		cellCount = parseInt((event.target as HTMLInputElement).value);
		calculateRadius();
		updateCarouselCells();
		angle = 0;
		selectedIndex = 0;
		if (carousel) {
			carousel.style.transform = `translateZ(-${radius}px)`;
		}
	}

	onMount(() => {
		calculateRadius();
		updateCarouselCells();

		const keyHandler = (event: KeyboardEvent) => {
			if (event.key === 'ArrowLeft') {
				event.preventDefault();
				rotateCarousel(-1);
			} else if (event.key === 'ArrowRight') {
				event.preventDefault();
				rotateCarousel(1);
			} else if (event.key === 'Enter') {
				event.preventDefault();
				toggleAutoRotate();
			}
		};

		document.addEventListener('keydown', keyHandler);

		return () => {
			clearInterval(autoRotateInterval);
			document.removeEventListener('keydown', keyHandler);
		};
	});
</script>

<div class="scene" role="region" aria-label="3D Carousel">
	<div
		class="carousel"
		bind:this={carousel}
		on:mousedown={handlePointerStart}
		on:mousemove={handlePointerMove}
		on:mouseup={handlePointerEnd}
		on:mouseleave={handlePointerEnd}
		on:touchstart|preventDefault={handlePointerStart}
		on:touchmove|preventDefault={handlePointerMove}
		on:touchend|preventDefault={handlePointerEnd}
		on:click={handleDoubleTap}
		role="presentation"
	>
		{#each images.RandomUsers || [] as user, i}
			<div class="avatar">
				<div class="w-24 rounded-xl">
					<button
						class="carousel__cell"
						aria-label="Carousel item {i + 1}"
						on:click={() => handleCellClick(i)}
						on:keydown={(e) => handleKeyDown(e, i)}
					>
						<a href={`/users/${user.login}`} target="_blank">
							<img 
								class="carousel__cell" 
								src={user.avatar_url} 
								alt={user.login} 
								on:dblclick={toggleAutoRotate}
							/>
						</a>
					</button>
				</div>
			</div>
		{/each}
	</div>
</div>

<div class="controls">
	<ButtonGroup>
		<GradientButton shadow color="green" on:click={() => rotateCarousel(-1)}>Left</GradientButton>
		<GradientButton shadow color="pink" on:click={() => rotateCarousel(1)}>Right</GradientButton>
		<GradientButton shadow color="teal" on:click={toggleAutoRotate}>
			{autoRotate ? 'Stop Auto Rotate' : 'Start Auto Rotate'}
		</GradientButton>
	</ButtonGroup>

	<label for="cell-slider"></label>

	<Label>Number of Cells:{cellCount}</Label>
	<Range
		id="range-minmax"
		min={minCellCount}
		max={maxCellCount}
		bind:value={cellCount}
		oninput={handleSliderChange}
		size="lg"
		class="w-64"
	/>
</div>

<style>
	.scene {
		margin: 40px 0;
		position: relative;
		width: 210px;
		height: 140px;
		margin: 80px auto;
		perspective: 1000px;
		border-radius: 25px;
	}

	.carousel {
		width: 100%;
		height: 100%;
		position: absolute;
		transform: translateZ(-288px);
		transform-style: preserve-3d;
		transition: transform 0.5s ease-in-out;
	}

	.carousel__cell {
		position: absolute;
		width: 190px;
		height: 120px;
		left: 10px;
		top: 10px;
		line-height: 116px;
		font-size: 80px;
		font-weight: bold;
		color: white;
		text-align: center;
		transition:
			transform 0.3s ease,
			opacity 0.3s ease;
		cursor: pointer;
		transform-origin: center;
		border-radius: 25px;
		margin: 0 50px;
		touch-action: pan-y;
	}

	.carousel__cell:hover {
		transform: scale(1.2);
	}

	.carousel__cell:focus {
		transform: scale(1.5);
		outline: none;
	}

	.controls {
		text-align: center;
		margin: 20px 0;
		padding: 0 15px;
	}

	@media (pointer: coarse) {
		.carousel__cell:hover {
			transform: none !important;
		}
	}

	@media (max-width: 768px) {
		.scene {
			width: 100%;
			max-width: 210px;
			height: auto;
			aspect-ratio: 3/2;
			margin: 40px auto;
		}

		.carousel__cell {
			width: 80%;
			height: auto;
			margin: 0 auto;
		}

		.controls {
			padding: 0 10px;
		}
	}

	@media (max-width: 480px) {
		.carousel__cell {
			font-size: 60px;
			line-height: 96px;
		}
	}
</style>