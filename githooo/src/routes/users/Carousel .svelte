<script lang='ts'>
    // @ts-nocheck
    import { onMount } from 'svelte';
  
    let {images} = $props<{
      images: {
        RandomUsers: Array<{
          avatar_url: string;
          login: string;
        }>;
      };
    }>();
    let carousel;
    
    let angle = $state(0);
    let selectedIndex = $state(0);
    let isDragging = $state(false);
    let startX = $state(0);
    let currentX = $state(0);
    let autoRotate = $state(false);
    let autoRotateInterval;
  
    const cellSize = 210;
    const minCellCount = 3;
    const maxCellCount = 50;
    let cellCount = $state(9);
    let radius = $state(0);
  
    function calculateRadius() {
      radius = Math.round((cellSize / 2) / Math.tan(Math.PI / cellCount));
    }
  
    function updateCarouselCells() {
      if (!carousel) return;
      const cells = carousel.children;
      for (let i = 0; i < cells.length; i++) {
        const cellAngle = (i / cellCount) * 360;
        cells[i].style.transform = `rotateY(${cellAngle}deg) translateZ(${radius}px)`;
        cells[i].style.display = i < cellCount ? 'block' : 'none';
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
  
    function handleCellClick(index) {
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
  
    function handleKeyDown(event, index) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleCellClick(index);
      }
    }
  
    function handleMouseDown(event) {
      isDragging = true;
      startX = event.clientX;
    }
  
    function handleMouseMove(event) {
      if (isDragging && carousel) {
        currentX = event.clientX;
        const deltaX = currentX - startX;
        const rotationAngle = (deltaX / cellSize) * (360 / cellCount);
        angle -= rotationAngle;
        carousel.style.transform = `translateZ(-${radius}px) rotateY(${angle}deg)`;
        startX = currentX;
      }
    }
  
    function handleMouseUp() {
      isDragging = false;
    }
  
    function toggleAutoRotate() {
      autoRotate = !autoRotate;
      if (autoRotate) {
        autoRotateInterval = setInterval(() => rotateCarousel(1), 2000);
      } else {
        clearInterval(autoRotateInterval);
      }
    }
  
    function handleSliderChange(event) {
      cellCount = parseInt(event.target.value);
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
      
      return () => {
        if (autoRotateInterval) {
          clearInterval(autoRotateInterval);
        }
      };
    });
  </script>
  
  <div 
    class="scene"
    role="region"
    aria-label="3D Carousel">
    <div 
      class="carousel" 
      bind:this={carousel}
      onmousedown={handleMouseDown}
      onmousemove={handleMouseMove}
      onmouseup={handleMouseUp}
      onmouseleave={handleMouseUp}
      role="presentation">
      {#each images.RandomUsers || [] as user, i}
        <div class="avatar">
          <div class="w-24 rounded-xl">
            <button 
              class="carousel__cell"
              aria-label="Carousel item {i + 1}"
              onclick={() => handleCellClick(i)}
              onkeydown={(e) => handleKeyDown(e, i)}
            >
              <img 
              class="carousel__cell"
                src={user.avatar_url} 
                alt={user.login}
              />
            </button>
          </div>
        </div>
      {/each}
    </div>
  </div>
  
  <div class="controls">
    <button onclick={() => rotateCarousel(-1)}>Rotate Left</button>
    <button onclick={() => rotateCarousel(1)}>Rotate Right</button>
    <button onclick={toggleAutoRotate}>
      {autoRotate ? 'Stop Auto Rotate' : 'Start Auto Rotate'}
    </button>
    <label for="cell-slider">Number of Cells:</label>
    <input
      id="cell-slider"
      type="range"
      min={minCellCount}
      max={maxCellCount}
      value={cellCount}
      oninput={handleSliderChange}
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
      transition: transform 1s;
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
      transition: transform 1s, opacity 1s;
      cursor: pointer;
      transform-origin: center;
      border-radius: 25px;
    }
  
    .carousel__cell:focus {
      outline: 3px solid #007bff;
      outline-offset: 2px;
      width: 200px;
      height: 130px;
    }
  
    .controls {
      text-align: center;
      margin: 20px 0;
    }
  
    button {
      margin: 5px;
      padding: 8px 16px;
     
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    button:hover {
     motion: auto;
    }
  
    button:focus {
      
      outline-offset: 2px;
    }
  
   
  
    @media (max-width: 768px) {
      .scene {
        width: 180px;
        height: 120px;
      }
  
      .carousel__cell {
        width: 160px;
        height: 100px;
        font-size: 60px;
        line-height: 96px;
      }
    }
  </style>