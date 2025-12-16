"use client";

import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function CameraRig() {
  const cam = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    cam.current.position.y = 3.6 + Math.sin(t * 0.08) * 0.06;
    cam.current.position.x = Math.sin(t * 0.05) * 0.04;
    cam.current.lookAt(0, 0.6, 0);
  });

  return (
    <PerspectiveCamera
      ref={cam}
      makeDefault
      fov={42}
      position={[0, 3.6, 5.2]}
      near={0.1}
      far={30}
    />
  );
}
