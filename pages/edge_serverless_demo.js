import { useState } from 'react';

export default function CompareFunctions() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function callFunction(type) {
    setLoading(true);
    const start = performance.now();
    const res = await fetch(`/api/hello${type === 'edge' ? '-edge' : ''}`);
    const data = await res.json();
    const end = performance.now();
    setMessage(`${data.message} (⏱ ${Math.round(end - start)} ms)`);
    setLoading(false);
  }

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', maxWidth: '700px', margin: '0 auto' }}>
      <h1>Compare Serverless vs Edge</h1>

      <p>
        This interactive demo measures real-time latency between Vercel's Serverless and Edge Functions.
        To simulate realistic Edge behavior, a <code>Cache-Control</code> header was added to the Edge Function.
        Without it, latency looked similar to Serverless because Vercel had no caching signal to optimize delivery.
      </p>

      <div style={{ margin: '1.5rem 0' }}>
        <button onClick={() => callFunction('serverless')} style={{ marginRight: '1rem' }}>
          Call Serverless
        </button>
        <button onClick={() => callFunction('edge')}>
          Call Edge
        </button>
      </div>

      <div style={{ marginTop: '1rem', fontWeight: 'bold' }}>
        {loading ? 'Loading...' : message}
      </div>

      <hr style={{ margin: '2rem 0' }} />

      <section>
        <h2>Assumptions & Key Behaviors</h2>
        <ul>
          <li><strong>Serverless Functions</strong> run in a single region and may experience <em>cold starts</em> if inactive.</li>
          <li><strong>Edge Functions</strong> run closer to the user, but don’t benefit from faster speeds unless <code>Cache-Control</code> is used.</li>
          <li>Edge + caching = best-case latency, as responses can be served from the nearest PoP.</li>
          <li>Serverless can technically be cached too, but it won’t avoid cold starts or be globally distributed.</li>
        </ul>
      </section>
    </main>
  );
}
