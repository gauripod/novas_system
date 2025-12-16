"use client";

import { Canvas } from "@react-three/fiber";

export default function TopologyView() {
  return (
    <div className="h-[360px]">
      <p className="text-sm text-gray-400 mb-2">system topology</p>
      <Canvas>{/* 3d system visualization lives here */}</Canvas>
    </div>
  );
}
