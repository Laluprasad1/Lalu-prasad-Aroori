"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

function FloatingBox({ position, color, scale = 1 }: { position: [number, number, number], color: string, scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <Box ref={meshRef} position={position} scale={scale} args={[1, 1, 1]}>
        <meshStandardMaterial color={color} transparent opacity={0.8} />
      </Box>
    </Float>
  );
}

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      sphereRef.current.rotation.y += 0.005;
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={sphereRef} position={[0, 0, -2]} args={[1.5, 32, 32]}>
        <meshStandardMaterial
          color="#8b5cf6"
          transparent
          opacity={0.3}
          wireframe
        />
      </Sphere>
    </Float>
  );
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  const particleCount = 100;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial color="#60a5fa" size={0.05} transparent opacity={0.6} />
    </points>
  );
}

export default function Hero3D() {
  return (
    <>
      {/* Floating Boxes */}
      <FloatingBox position={[-3, 2, -1]} color="#3b82f6" scale={0.8} />
      <FloatingBox position={[3, -1, -1]} color="#8b5cf6" scale={0.6} />
      <FloatingBox position={[-2, -2, 1]} color="#06b6d4" scale={0.7} />
      <FloatingBox position={[2, 2, 1]} color="#f59e0b" scale={0.5} />
      <FloatingBox position={[0, 3, -3]} color="#ef4444" scale={0.9} />
      <FloatingBox position={[-4, 0, 2]} color="#10b981" scale={0.6} />
      
      {/* Animated Sphere */}
      <AnimatedSphere />
      
      {/* Particle Field */}
      <ParticleField />
    </>
  );
}
