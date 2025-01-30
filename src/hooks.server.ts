import { handle as authHandle } from '../src/auth/auth';

export const handle = async ({ event, resolve }) => {
  // Use SvelteKitAuth's handle to process authentication
  const response = await authHandle({ event, resolve });

  // If you want to add additional middleware logic, you can do so here

  return response;
};
