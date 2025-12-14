"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function SystemNode({
  position = [0, 0, 0],
  height = 1.2,
  delay = 0,
}) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = Math.max(0, clock.getElapsedTime() - delay);

    if (!ref.current) return;

    // emergence from grid
    ref.current.position.y = Math.min(height / 2, t * 0.4);

    // subtle system vibration
    ref.current.rotation.y = Math.sin(t * 0.3) * 0.08;
  });

  return (
    <mesh ref={ref} position={[position[0], 0, position[2]]}>
      <boxGeometry args={[0.32, height, 0.32]} />

      <meshStandardMaterial
        color="#0a1418"
        emissive="#00eaff"
        emissiveIntensity={0.12}
        metalness={0.9}
        roughness={0.65}
      />
    </mesh>
  );
}
