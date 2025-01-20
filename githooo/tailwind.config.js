/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}', 'node_modules/preline/dist/*.js',],
 
  plugins: [
    require('preline/plugin'),
    
  ],
}

