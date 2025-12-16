"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function SystemSpine() {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.scale.y = 1 + Math.sin(t * 0.4) * 0.04;
  });

  return (
    <mesh ref={ref} position={[0, 0.9, 0]}>
      <boxGeometry args={[0.18, 2.2, 0.18]} />
      <meshStandardMaterial
        color="#081317"
        emissive="#00eaff"
        emissiveIntensity={0.32}
        metalness={0.85}
        roughness={0.25}
      />
    </mesh>
  );
}
