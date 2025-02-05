import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function AboutMe() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me</title>
      </Head>
      <main className={styles.main}>
        <h1>About Me</h1>
        <p>Most people call me Raph.</p>
        <p>French is my first language.</p>
        <p>I love soccer (football) and my favorite player of all time is Zidane.</p>
        <p>I’ve lived in Denton, Texas (shoutout Norah Jones) and Sacramento (light the beam!), but I’ve called San Francisco my home for the last 10 years.</p>
        <p>I’m a people person, a gritty problem solver, and most importantly, a life-long learner.</p>
      </main>
    </div>
  );
}

