import React, { useRef, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, Stars } from '@react-three/drei';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hi! I'm Raphaël :)</title>
        <meta name="description" content="Hire Raphaël Sirvent" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* 3D Floating & Glowing Logo */}
        <div className={styles.canvasContainer}>
          <Canvas camera={{ position: [0, 0, 5] }}>
            {/* Starry background for extra effect */}
            <Stars radius={10} depth={50} count={5000} factor={4} />
            
            {/* Floating Text Component */}
            <FloatingText />
          </Canvas>
        </div>

        {/* Navigation Links */}
        <nav className={styles.nav}>
          <Link href="/about-me" legacyBehavior>
            <a className={styles.link}>About Me</a>
          </Link>
          <Link href="/projects" legacyBehavior>
            <a className={styles.link}>Projects</a>
          </Link>
          <Link href="/my-tech-certs" legacyBehavior>
            <a className={styles.link}>My Tech Certs</a>
          </Link>
          <Link href="https://raphresume.sfo3.digitaloceanspaces.com/Raphael_Sirvent_Resume.pdf" legacyBehavior>
            <a className={styles.link} target="_blank" rel="noopener noreferrer">My Resume</a>
          </Link>
        </nav>
      </main>
    </div>
  );
}

// === 3D Floating Text Component === //
function FloatingText() {
  const textRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Smooth Rotation Effect
  useFrame(() => {
    textRef.current.rotation.y += 0.01;
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={3}>
      <Text
        ref={textRef}
        fontSize={1.5}
        color={hovered ? 'cyan' : 'white'}
        font="/fonts/Inter_Bold.json"
        anchorX="center"
        anchorY="middle"
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        Raphaël
        <meshPhysicalMaterial
          attach="material"
          metalness={1}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0}
          emissive={hovered ? 'cyan' : 'blue'}
          emissiveIntensity={2}
        />
      </Text>
    </Float>
  );
}
