"use client";

import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function CameraRig() {
  const cam = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (cam.current) {
      cam.current.position.x = Math.sin(t * 0.08) * 0.6;
      cam.current.position.z = 8 + Math.sin(t * 0.05) * 0.4;
      cam.current.position.y = 3.2 + Math.sin(t * 0.04) * 0.3;
      cam.current.lookAt(0, 0, 0);
    }
  });

  return (
    <PerspectiveCamera ref={cam} makeDefault fov={42} near={0.1} far={100} />
  );
}
