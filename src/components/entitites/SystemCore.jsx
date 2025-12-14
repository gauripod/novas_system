"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function SystemCore({ position = [0, -0.6, 0] }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = Math.sin(t * 0.08) * 0.12;
      ref.current.material.emissiveIntensity = 0.12 + Math.sin(t * 0.4) * 0.03;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[0.35, 2.2, 0.35]} />
      <meshStandardMaterial
        color="#0b1f1a"
        emissive="#0fb9b1"
        emissiveIntensity={0.12}
        metalness={0.95}
        roughness={0.7}
      />
    </mesh>
  );
}
