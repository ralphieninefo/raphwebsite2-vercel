import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
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
          <Link href="/fluid_demo" legacyBehavior>
            <a className={styles.link}>Edge vs Serverless</a>
          </Link>
          <Link href="https://www.linkedin.com/in/raphael-sirvent/" legacyBehavior>
            <a className={styles.link} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </Link>
          {/* Updated Resume Link with Error Handling */}
          <Link href="/2025_Raphael_Sirvent_Resume_Sr_TAM_FINAL.pdf" legacyBehavior>
            <a 
              className={styles.link} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => {
                fetch("/2025_Raphael_Sirvent_Resume_Sr_TAM_FINAL.pdf")
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
      </main>
    </div>
  );
}
