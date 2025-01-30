
import type { RequestHandler } from '@sveltejs/kit';


export const GET: RequestHandler = async ({ locals }) => {
    //@ts-ignore
    const session = locals.session;
  
    if (!session) {
      return new Response('Unauthorized', { status: 401 });
    }
  
    return new Response(JSON.stringify(session), { status: 200 });
}