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

      <ambientLight intensity={0.25} />
      <directionalLight position={[4, 6, 4]} intensity={0.6} color="#00eaff" />
      <fog attach="fog" args={["#02050b", 3.4, 9]} />

      <GridPlane />
      <group position={[0, -0.45, -0.6]} scale={1.35}>
        <SystemSpine />

        <SystemNode position={[0.9, 0, -0.4]} height={1.8} delay={0.4} />
        <SystemNode position={[-1.4, 0, -1.2]} height={1.1} delay={0.9} />
        <SystemNode position={[1.6, 0, 1.1]} height={1.0} delay={1.3} />
        <SystemNode position={[-0.8, 0, 1.6]} height={0.9} delay={1.7} />
      </group>
    </Canvas>
    // iuejnes
  );
}
