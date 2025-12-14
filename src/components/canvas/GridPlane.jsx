"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function GridPlane() {
  const grid = useRef();

  useFrame(() => {
    if (!grid.current) return;
    grid.current.rotation.x = -Math.PI / 2.2;
  });

  return (
    <mesh ref={grid} position={[0, -0.9, -1.5]}>
      <planeGeometry args={[40, 40, 40, 40]} />
      <meshStandardMaterial
        color="#0b1220"
        wireframe
        transparent
        opacity={0.35}
      />
    </mesh>
  );
}
