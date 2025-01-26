export { handle } from "./auth/auth"

import { SvelteKitAuth } from "@auth/sveltekit";
import { redirect, type Handle } from "@sveltejs/kit";
import * as amp from '@sveltejs/amp';

export const hand:Handle = async({event,resolve}) =>{
    
   
    const session = await event.locals.getSession();
    const path = event.url.pathname
    
    let buffer = '';

    const protectedRoutes = [
        '/profile',
        '/users',

    ]
    if (protectedRoutes.some(route => path.startsWith(route)) && !session) {
        throw redirect(303, '/login');
      }
    
      return await resolve(event, {
        transformPageChunk: ({ html, done }) => {
          buffer += html;
          if (done) return amp.transform(buffer);
        }
      });

}