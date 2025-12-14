"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function NodeMesh({ position = [0, 0, 0], health = "healthy" }) {
  const ref = useRef();

  const palette = {
    healthy: {
      base: "#0f766e",
      emissive: "#14b8a6",
      intensity: 0.15,
    },
    degraded: {
      base: "#3f3f46",
      emissive: "#f59e0b",
      intensity: 0.08,
    },
    down: {
      base: "#1f2933",
      emissive: "#7f1d1d",
      intensity: 0.05,
    },
  }[health];

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = Math.sin(t * 0.15) * 0.15;
      ref.current.material.emissiveIntensity =
        palette.intensity + Math.sin(t * 0.6) * 0.03;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[0.18, 1.2, 0.18]} />
      <meshStandardMaterial
        color={palette.base}
        emissive={palette.emissive}
        emissiveIntensity={palette.intensity}
        metalness={0.95}
        roughness={0.65}
      />
    </mesh>
  );
}
