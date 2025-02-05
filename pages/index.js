import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { Canvas } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hi! I'm Raphaël :)</title>
        <meta name="description" content="Hire Raphaël Sirvent" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* 3D text container using the new style */}
        <div className={styles.canvasContainer}>
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
              <Text fontSize={2} color="#ffffff" anchorX="center" anchorY="middle">
                Hi! I'm Raphaël
              </Text>
            </Float>
          </Canvas>
        </div>

        {/* Other content like navigation */}
        <nav className={styles.nav}>
          <Link href="/about-me">
            <a className={styles.link}>About Me</a>
          </Link>
          <Link href="/why-join-vercel">
            <a className={styles.link}>Why join Vercel?</a>
          </Link>
          <Link href="/my-tech-certs">
            <a className={styles.link}>My Tech Certs</a>
          </Link>
        </nav>
      </main>
    </div>
  );
}
