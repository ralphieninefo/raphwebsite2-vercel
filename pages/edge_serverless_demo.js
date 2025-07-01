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
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Compare Serverless vs Edge</h1>

      <p style={{ maxWidth: '600px' }}>
        This interactive demo measures real-time latency between Vercel's Serverless and Edge Functions.
        To reflect realistic performance for Edge, I added a <code>Cache-Control</code> header that enables caching.
        Without it, Edge responses had similar latency to Serverless due to cold starts and region proximity.
      </p>

      <div style={{ margin: '1.5rem 0' }}>
        <button onClick={() => callFunction('serverless')} style={{ marginRight: '1rem' }}>
          Call Serverless
        </button>
        <button onClick={() => callFunction('edge')}>
          Call Edge
        </button>
      </div>

      <div style={{ marginTop: '2rem', fontWeight: 'bold' }}>
        {loading ? 'Loading...' : message}
      </div>
    </main>
  );
}

