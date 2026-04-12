"use client";

import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo } from "react";

function SunCore() {
  const gradient = useMemo(
    () => [
      { color: "#ffe9a8", intensity: 1.2 },
      { color: "#f9b233", intensity: 1.8 },
    ],
    []
  );

  return (
    <group>
      <mesh>
        <sphereGeometry args={[1.1, 64, 64]} />
        <meshStandardMaterial
          color={gradient[0].color}
          emissive={gradient[1].color}
          emissiveIntensity={gradient[1].intensity}
        />
      </mesh>
      <mesh scale={1.35}>
        <sphereGeometry args={[1.1, 64, 64]} />
        <meshStandardMaterial
          color="#ffdd7c"
          transparent
          opacity={0.35}
          emissive="#ffcc5a"
          emissiveIntensity={0.8}
        />
      </mesh>
    </group>
  );
}

function SunRays() {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[1.6, 0.08, 16, 100]} />
      <meshStandardMaterial
        color="#ffd173"
        emissive="#ffb84d"
        emissiveIntensity={1.4}
      />
    </mesh>
  );
}

export default function SunScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[3, 2, 4]} intensity={2.2} color="#ffd37a" />
      <pointLight position={[-2, -2, -3]} intensity={0.8} color="#ffb347" />
      <Float speed={1.6} rotationIntensity={0.6} floatIntensity={0.8}>
        <SunCore />
        <SunRays />
      </Float>
    </Canvas>
  );
}
