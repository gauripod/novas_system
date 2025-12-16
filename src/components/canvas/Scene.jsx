"use client";

import { Canvas } from "@react-three/fiber";
import CameraRig from "./CameraRig";
import GridPlane from "./GridPlane";
import SystemSpine from "./SystemSpine";
import SystemNode from "./SystemNode";

export default function Scene() {
  return (
    <Canvas>
      <CameraRig />

      <ambientLight intensity={0.22} />
      <directionalLight position={[3, 6, 3]} intensity={0.55} color="#00eaff" />
      <fog attach="fog" args={["#05070d", 4.5, 14]} />

      <GridPlane />

      {/* system cluster */}
      <group position={[0, -0.4, -0.4]} scale={1.35}>
        <SystemSpine />

        <SystemNode position={[1.0, 0, -0.6]} height={1.5} delay={0.4} />
        <SystemNode position={[-1.2, 0, -0.8]} height={1.1} delay={0.7} />
        <SystemNode position={[1.4, 0, 0.6]} height={1.0} delay={1.0} />
        <SystemNode position={[-0.6, 0, 1.2]} height={0.9} delay={1.3} />
      </group>
    </Canvas>
  );
}
