import Head from 'next/head';
import styles from '../styles/Certs.module.css';

export default function MyTechCerts() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Tech Certs</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.pageTitle}>My Tech Certifications</h1>

        <div className={styles.certsGrid}>
          {/* 2025 */}
          <div className={styles.certCard}>
            <span className={styles.yearTag}>2025</span>
            <h3>GitHub Foundations Certification</h3>
            <p>Issuer: GitHub</p>
          </div>

          <div className={styles.certCard}>
            <span className={styles.yearTag}>2025</span>
            <h3>AI Agents Fundamentals</h3>
            <p>Issuer: Hugging Face</p>
          </div>

          {/* 2024 */}
          <div className={styles.certCard}>
            <span className={styles.yearTag}>2024</span>
            <h3>GCP Associate Cloud Engineer</h3>
            <p>Issuer: Google</p>
          </div>

          <div className={styles.certCard}>
            <span className={styles.yearTag}>2024</span>
            <h3>OCI Generative AI Certified Professional</h3>
            <p>Issuer: Oracle</p>
          </div>

          {/* 2023 */}
          <div className={styles.certCard}>
            <span className={styles.yearTag}>2023</span>
            <h3>GCP Cloud Digital Leader</h3>
            <p>Issuer: Google</p>
          </div>

          <div className={styles.certCard}>
            <span className={styles.yearTag}>2023</span>
            <h3>AWS Certified Cloud Practitioner</h3>
            <p>Issuer: AWS</p>
          </div>

          {/* 2022 */}
          <div className={styles.certCard}>
            <span className={styles.yearTag}>2022</span>
            <h3>Intermediate SQL for Data Scientists</h3>
            <p>Issuer: LinkedIn</p>
          </div>

          {/* 2021 */}
          <div className={styles.certCard}>
            <span className={styles.yearTag}>2021</span>
            <h3>Google Data Analytics</h3>
            <p>Issuer: Google</p>
          </div>

          {/* 2020 */}
          <div className={styles.certCard}>
            <span className={styles.yearTag}>2020</span>
            <h3>Microsoft Excel 2016 Introductory</h3>
            <p>Issuer: Microsoft</p>
          </div>

          <div className={styles.certCard}>
            <span className={styles.yearTag}>2020</span>
            <h3>Microsoft Office Specialist: Excel 2016</h3>
            <p>Issuer: Microsoft</p>
          </div>
        </div>
      </main>
    </div>
  );
}
