"use client";

import { Line } from "@react-three/drei";

export default function Edge({ from, to, health }) {
  const color =
    health === "healthy"
      ? "#00ffff"
      : health === "degraded"
      ? "#ffcc00"
      : "#ff0033";

  return (
    <Line
      points={[from, to]}
      color={color}
      lineWidth={1}
      transparent
      opacity={0.35}
    />
  );
}
