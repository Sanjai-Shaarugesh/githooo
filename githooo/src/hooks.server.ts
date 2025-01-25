export { handle } from "./auth/auth"

import { SvelteKitAuth } from "@auth/sveltekit";
import { redirect, type Handle } from "@sveltejs/kit";

export const hand:Handle = async({event,resolve}) =>{
    
   
    const session = await event.locals.getSession();
    const path = event.url.pathname

    const protectedRoutes = [
        '/profile',
        '/users',

    ]
    if (protectedRoutes.some(route => path.startsWith(route)) && !session) {
        throw redirect(303, '/login');
      }
    
      return resolve(event, {
        transformPageChunk: ({ html }) => html
      });

}