"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/* 🌞 Core Sun */
function SunCore() {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.scale.setScalar(1 + Math.sin(t * 2) * 0.03); // subtle pulse
  });

  return (
    <group ref={meshRef}>
      {/* inner core */}
      <mesh>
        <sphereGeometry args={[1.1, 64, 64]} />
        <meshStandardMaterial
          color="#ffe9a8"
          emissive="#f9b233"
          emissiveIntensity={2}
        />
      </mesh>

      {/* glow layer */}
      <mesh scale={1.4}>
        <sphereGeometry args={[1.1, 64, 64]} />
        <meshStandardMaterial
          color="#ffdd7c"
          transparent
          opacity={0.35}
          emissive="#ffcc5a"
          emissiveIntensity={1.2}
        />
      </mesh>

      {/* outer soft glow */}
      <mesh scale={1.8}>
        <sphereGeometry args={[1.1, 64, 64]} />
        <meshBasicMaterial
          color="#ffae42"
          transparent
          opacity={0.15}
        />
      </mesh>
    </group>
  );
}

/* 🌞 Rotating Rays */
function SunRays() {
  const raysRef = useRef();

  useFrame(() => {
    if (raysRef.current) {
      raysRef.current.rotation.z += 0.002; // slow rotation
    }
  });

  return (
    <mesh ref={raysRef} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[1.7, 0.1, 16, 100]} />
      <meshStandardMaterial
        color="#ffd173"
        emissive="#ffb84d"
        emissiveIntensity={1.6}
      />
    </mesh>
  );
}

/* ✨ Floating Particles */
function Particles() {
  const pointsRef = useRef();

  const particles = useMemo(() => {
    const count = 120;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }

    return positions;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ffd27f"
        transparent
        opacity={0.8}
      />
    </points>
  );
}

/* 🌞 Main Scene */
export default function SunScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
      {/* lights */}
      <ambientLight intensity={0.6} />

      <pointLight
        position={[3, 2, 4]}
        intensity={2.5}
        color="#ffd37a"
      />

      <pointLight
        position={[-2, -2, -3]}
        intensity={1}
        color="#ff9e3d"
      />

      {/* floating sun */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <SunCore />
        <SunRays />
      </Float>

      {/* particles */}
      <Particles />
    </Canvas>
  );
}
