import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function WhyJoinVercel() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Why join Vercel?</title>
      </Head>
      <main className={styles.main}>
        <h1>Why join Vercel?</h1>
        <p>If I’m given the opportunity to work at Vercel, leaving DO would be a difficult decision.</p>
        <p>I’ve learned a lot about back-end cloud (had to learn coming from FinTech).</p>
        <p>DO and Vercel are also similar in many ways...</p>
        <p>They have a developer ethos, open source community, and focus on simplifying or "democratizing" access to dev tools.</p>
        <p>Moreover, Vercel and DO share similar customers, primarily developers, tech startups, and enterprise customers who seek efficient, scalable, and user-friendly cloud solutions.</p>
        <p>Both companies emphasize a strong commitment to developer experience and community engagement, making them ideal environments for fostering innovation and growth.</p>
        <p>Joining Vercel represents an opportunity to focus on the creative and the 'profit center' of a business. I want to get closer to the app development side as opposed to back end infra management.</p>
      </main>
    </div>
  );
}
