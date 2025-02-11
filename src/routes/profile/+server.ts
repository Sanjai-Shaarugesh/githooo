// +server.ts
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals }) => {
    const { session } = locals;
    
    
    if (!session) {
        return new Response('Unauthorized', { 
            status: 401,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    
    return new Response(JSON.stringify(session), { 
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};