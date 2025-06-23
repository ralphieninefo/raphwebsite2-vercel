import { useState } from 'react';

export default function FluidDemo() {
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
      <h1>Fluid Compute Demo</h1>
      <p>Click a button below to call either the Serverless or Edge function.</p>
      <button onClick={() => callFunction('serverless')} style={{ marginRight: '1rem' }}>
        Call Serverless
      </button>
      <button onClick={() => callFunction('edge')}>
        Call Edge
      </button>
      <div style={{ marginTop: '2rem', fontWeight: 'bold' }}>
        {loading ? 'Loading...' : message}
      </div>
    </main>
  );
}
