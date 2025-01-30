import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ locals }) => {
  //@ts-ignore
  if (!locals.session) {
    return new Response('Unauthorized', { status: 401 });
  }

  // Assuming 'session' in locals has a proper type that includes user data
  //@ts-ignore
  return new Response(JSON.stringify(locals.session), {
    headers: {
      'Content-Type': 'application/json'
    },
    status: 200
  });
};