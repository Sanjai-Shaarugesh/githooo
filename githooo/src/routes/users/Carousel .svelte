<script lang='ts'>
    // @ts-nocheck
  
    import { onMount } from 'svelte';
  
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
    const minCellCount = 3;
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
  
  <div class="controls">
    
    <a onclick={() => rotateCarousel(-1)} href="#_" class="relative  items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
        <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
        <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
            <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
            <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
        </span>
        <span class="relative text-white" >Rotate left</span>
    </a>
    

    <a href="#_" onclick={() => rotateCarousel(1)} class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
        <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
        </span>
        <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
        <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Rotate right</span>
    </a>
    

    <a href="#_" onclick={toggleAutoRotate} class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </span>
        <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Button Text</span>
        <span class="relative invisible"> {autoRotate ? 'Stop Auto Rotate' : 'Start Auto Rotate'}</span>
    </a>

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
  
  <style lang="postcss">
   
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