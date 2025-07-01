import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
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
    <div className={styles.container}>
      <Head>
        <title>Hi! I'm Raphaël :)</title>
        <meta name="description" content="Raphaël Sirvent's Personal Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Simple Header */}
        <h1 className={styles.title}>Hi, I'm Raphaël</h1>

        {/* Navigation Links */}
        <nav className={styles.nav}>
          <Link href="/about-me" legacyBehavior>
            <a className={styles.link}>About Me</a>
          </Link>
          <Link href="/projects" legacyBehavior>
            <a className={styles.link}>Projects</a>
          </Link>
          <Link href="/my-tech-certs" legacyBehavior>
            <a className={styles.link}>Tech Certs</a>
          </Link>
          <Link href="https://www.linkedin.com/in/raphael-sirvent/" legacyBehavior>
            <a className={styles.link} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </Link>
          {/* Updated Resume Link with Error Handling */}
          <Link href="/Raphael_Sirvent_Resume.pdf" legacyBehavior>
            <a 
              className={styles.link} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => {
                fetch("/Raphael_Sirvent_Resume.pdf")
                  .then((res) => {
                    if (!res.ok) {
                      alert("Resume file not found. Please check back later!");
                      e.preventDefault();
                    }
                  })
                  .catch(() => {
                    alert("Error loading the resume file.");
                    e.preventDefault();
                  });
              }}
            >
              Resume
            </a>
          </Link>
        </nav>

        {/* Fluid Compute Demo */}
        <section style={{ marginTop: '3rem', textAlign: 'center' }}>
          <h2>Fluid Compute Demo</h2>
          <p>Click a button below to call either the Serverless or Edge function.</p>
          <div style={{ marginTop: '1rem' }}>
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
        </section>
      </main>
    </div>
  );
}