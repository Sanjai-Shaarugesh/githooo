<script>
  import GradientAnimation from '$lib/components/ui/GradientAnimation/GradientAnimation.svelte';
  import AnimatedTooltip from '$lib/components/ui/AnimatedTooltip/AnimatedTooltip.svelte';


  const baseUrl = 'https://github.com/';
  export let data;
  

  const user = data.user;
  const info = data.followers;

  const User = user.login;

   const formattedInfo = info.map((/** @type {{ login: any; avatar_url: any; }} */ follower, /** @type {number} */ index) => ({
    id: index + 1, 
    name: follower.login, 
    designation: `${User} follower`, 
    image: follower.avatar_url 
  }));



</script>

<div class="w-screen h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-gray-300 relative">
  <!-- Gradient Animation as the background -->
  <GradientAnimation/>
  
  <!-- Card Component inside the gradient -->
  <div class="absolute inset-0 flex items-center justify-center z-10">
    <div class="max-w-xl bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
      <div class="border-b px-20 pb-21">
        <div class="text-center my-4">
          <img
            class="h-32 w-32 rounded-full border-4 border-whiter gb(0 0 0 / 50%) mx-auto my-4"
            src={user.avatar_url}
            alt={user.login}
          />
          <div class="py-2">
            <h3 class="font-bold text-2xl text-gray-800 dark:text-white mb-1">{user.login}</h3>
            <div class="inline-flex text-gray-700 dark:text-gray-300 items-center">
              <svg
                class="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                />
              </svg>
              {user.location}
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center gap-2 px-2">
          <a href={`${baseUrl}${user.login}`} target="_blank">
            <button
              class="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2"
            >
              Follow
            </button>
          </a>
        </div>
      </div>
      <div class="px-4 py-4">
        <div class="flex gap-2 items-center text-gray-800 dark:text-gray-300 mb-4">
          <svg
            class="h-6 w-6 text-gray-600 dark:text-gray-400"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
            />
          </svg>
          <span>
            <strong class="text-black dark:text-white">{user.followers}</strong> Followers you know
          </span>
        </div>
        <div class="flex ">
          <AnimatedTooltip items={formattedInfo} />
        </div>
      </div>
    </div>
  </div>
</div>