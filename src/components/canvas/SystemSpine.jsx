"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function SystemSpine() {
  const spine = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    spine.current.scale.y = 1 + Math.sin(t * 0.6) * 0.08;
  });

  return (
    <mesh ref={spine} position={[0, 1.2, 0]}>
      <cylinderGeometry args={[0.08, 0.12, 2.4, 32, 8]} />
      <meshStandardMaterial
        color="#0a1a1f"
        emissive="#00eaff"
        emissiveIntensity={0.35}
        metalness={0.8}
        roughness={0.15}
      />
    </mesh>
  );
}
