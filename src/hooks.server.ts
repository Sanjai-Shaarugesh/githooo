// hooks.server.ts
import { sequence } from '@sveltejs/kit/hooks';
import { handle as authHandle } from '../src/auth/auth';

// If you need to add custom middleware
//@ts-ignore
const customHandle = async ({ event, resolve }) => {
  // Add any custom middleware logic here before auth
  return resolve(event);
};

// Export the sequence of handlers
export const handle = sequence(customHandle, authHandle);