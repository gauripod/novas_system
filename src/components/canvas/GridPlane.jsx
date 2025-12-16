"use client";

export default function GridPlane() {
  return (
    <mesh rotation={[-Math.PI / 2.35, 0, 0]} position={[0, -0.9, 0]}>
      <planeGeometry args={[26, 26, 40, 40]} />
      <meshBasicMaterial color="#0b2a31" wireframe transparent opacity={0.22} />
    </mesh>
  );
}
