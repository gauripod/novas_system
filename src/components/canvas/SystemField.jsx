"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function SystemField() {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!ref.current) return;

    // very subtle breathing via emissive + slight normal disturbance illusion
    ref.current.material.emissiveIntensity = 0.06 + Math.sin(t * 0.2) * 0.01;
  });

  return (
    <mesh
      ref={ref}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -1.2, 0]}
      receiveShadow
    >
      <planeGeometry args={[22, 22, 32, 32]} />
      <meshStandardMaterial
        color="#020409"
        emissive="#020409"
        emissiveIntensity={0.06}
        metalness={0.9}
        roughness={0.9}
      />
    </mesh>
  );
}
