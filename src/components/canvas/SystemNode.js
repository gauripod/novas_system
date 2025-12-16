"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function SystemNode({ position, height = 1.2, delay = 0 }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() - delay;
    if (!ref.current || t < 0) return;
    ref.current.scale.y = Math.min(1, t * 1.4);
  });

  return (
    <mesh ref={ref} position={position} scale={[1, 0.01, 1]}>
      <boxGeometry args={[0.34, height, 0.34]} />
      <meshStandardMaterial
        color="#0c1f24"
        emissive="#0aa6a6"
        emissiveIntensity={0.22}
        metalness={0.9}
        roughness={0.35}
      />
    </mesh>
  );
}
