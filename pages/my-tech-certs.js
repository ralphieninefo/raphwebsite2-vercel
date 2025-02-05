import Head from 'next/head';
import styles from '../styles/Certs.module.css';

export default function MyTechCerts() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Tech Certs</title>
      </Head>
      <main className={styles.main}>
        <h1>My Tech Certs</h1>
        <p>Below are the tech certs I've obtained:</p>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3>Currently working on OCI Generative AI Professional</h3>
              <p>Status: Pending</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3>GCP Associate Cloud Engineer Certification</h3>
              <p><strong>Issued:</strong> June 2024</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3>GCP Cloud Digital Leader</h3>
              <p><strong>Issued:</strong> June 2023</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3>AWS Certified Cloud Practitioner</h3>
              <p><strong>Issued:</strong> January 2023</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3>SQL for Data Scientists</h3>
              <p><strong>Issued:</strong> February 2022</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3>Google Data Analytics</h3>
              <p><strong>Issued:</strong> July 2021</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3>Microsoft Excel 2016</h3>
              <p><strong>Issued:</strong> December 2020</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3>Microsoft Office Specialist: Excel 2016</h3>
              <p><strong>Issued:</strong> December 2020</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
