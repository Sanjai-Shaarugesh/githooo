<script>
       import { signIn} from '@auth/sveltekit/client'
  </script>
  
  <div class="flex items-center justify-center min-h-screen bg-black-100">
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
      <h1 class="text-xl font-bold text-gray-800 mb-4 text-center">Sign in with GitHub</h1>
      <button
        on:click={() => signIn('github')}
        class="flex items-center justify-center w-full px-4 py-2 text-white bg-gray-900 hover:bg-gray-800 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
      >
        <svg
          class="w-6 h-6 mr-2"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12c0 4.417 2.865 8.166 6.839 9.49.5.09.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.37-1.342-3.37-1.342-.454-1.153-1.11-1.46-1.11-1.46-.908-.62.069-.607.069-.607 1.003.071 1.532 1.031 1.532 1.031.892 1.53 2.341 1.089 2.91.833.091-.647.35-1.089.636-1.34-2.22-.252-4.555-1.11-4.555-4.945 0-1.092.39-1.985 1.03-2.683-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.847c.85.004 1.705.114 2.504.335 1.908-1.294 2.746-1.025 2.746-1.025.547 1.377.204 2.394.1 2.646.642.698 1.03 1.591 1.03 2.683 0 3.845-2.339 4.69-4.566 4.937.359.31.678.92.678 1.852 0 1.337-.012 2.417-.012 2.745 0 .268.18.576.688.478A10.011 10.011 0 0022 12c0-5.523-4.477-10-10-10z"
            clip-rule="evenodd"
          ></path>
        </svg>
        Sign in with GitHub
      </button>
    </div>
  </div>
  