<script lang='ts'>
    // @ts-nocheck
  
    import { onMount } from 'svelte';
    import { ButtonGroup, Button ,  GradientButton  } from 'flowbite-svelte';
    import { Range , Label } from 'flowbite-svelte';
  
    export let images = {
      RandomUsers: [] as Array<{
        avatar_url: string;
        login: string;
      }>
    };
  
    let carousel;
  
    let angle = 0;
    let selectedIndex = 0;
    let isDragging = false;
    let startX = 0;
    let currentX = 0;
    let autoRotate = false;
    let autoRotateInterval;
  
    const cellSize = 210;
    const minCellCount = 20;
    const maxCellCount = 50;
    let cellCount = 9;
    let radius = 0;
  
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
  
    let keydownHandler;
  
    onMount(() => {
      calculateRadius();
      updateCarouselCells();
      
      keydownHandler = (event) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          rotateCarousel(-1);
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          rotateCarousel(1);
        }
      };
  
      document.addEventListener('keydown', keydownHandler);
      
      return () => {
        if (autoRotateInterval) {
          clearInterval(autoRotateInterval);
        }
        document.removeEventListener('keydown', keydownHandler);
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
  
  <div class='controls'>
    <ButtonGroup>
      <GradientButton shadow color="green" onclick={() => rotateCarousel(-1)}>Left</GradientButton>
      <GradientButton shadow color="pink" onclick={() => rotateCarousel(1)}>Right</GradientButton>
      <GradientButton shadow color="teal" onclick={toggleAutoRotate}> {autoRotate ? 'Stop Auto Rotate' : 'Start Auto Rotate'}</GradientButton>
    </ButtonGroup>

    <label for="cell-slider"></label>
   

    <Label>Number of Cells:{cellCount}</Label>
    <Range id="range-minmax" min={minCellCount} max={maxCellCount} bind:value={cellCount}  oninput={handleSliderChange} size='lg' />
    

    
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
      margin-left: 50px;
      margin-right: 50px;
    }

    .carousel__cell:hover {
      transform: scale(1.2);
    }
  
    .carousel__cell:focus {
        transform: scale(1.5);
        
    }
  
    .carousel__cell::after{
        transform: scale(1.0);
    }
    .controls {
      text-align: center;
      margin: 20px 0;
    }
  
    button {
      margin: 5px;
      padding: 8px 16px;
     
      color: white;
      
      border-radius: 4px;
      cursor: pointer;
    }
  
    button:hover {
     motion: auto;
    }
  
    button:focus {
      
      outline-offset: 2px;
      filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2));
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