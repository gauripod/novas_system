"use client";

import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function CameraRig() {
  const cam = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    cam.current.position.y = 0.95 + Math.sin(t * 0.08) * 0.03;
    cam.current.lookAt(0, 0.5, -0.8);
  });

  return (
    <PerspectiveCamera
      ref={cam}
      makeDefault
      fov={44}
      position={[0, 0.95, 3.0]}
    />
  );
}
