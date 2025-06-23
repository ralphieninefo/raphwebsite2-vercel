export const config = { runtime: 'edge' };

export default async function handler(req) {
  return new Response(JSON.stringify({ message: 'Hello from Edge!' }), {
    headers: {
      'Content-Type': 'application/json',
      // This tells browsers and Vercel to cache the response
      'Cache-Control': 'public, max-age=300, stale-while-revalidate=60'
    }
  });
}


