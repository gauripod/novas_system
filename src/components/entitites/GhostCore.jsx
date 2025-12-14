"use client";

export default function GhostCore({ position = [0, -0.6, 0] }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.25, 1.6, 0.25]} />
      <meshStandardMaterial
        color="#0a1418"
        emissive="#0a1418"
        emissiveIntensity={0.02}
        metalness={0.9}
        roughness={0.8}
        transparent
        opacity={0.55}
      />
    </mesh>
  );
}
