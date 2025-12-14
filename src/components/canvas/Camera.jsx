"use client";

import { PerspectiveCamera } from "@react-three/drei";
import { useEffect, useRef } from "react";

export default function Camera() {
  const cameraRef = useRef();

  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.lookAt(0, 0, 0);
    }
  }, []);

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      position={[0, 3, 10]}
      fov={45}
      near={0.1}
      far={1000}
    />
  );
}
