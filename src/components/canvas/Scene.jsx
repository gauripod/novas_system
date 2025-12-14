"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Camera from "./Camera";
import Lights from "./Lights";
import NodeMesh from "@/components/nodes/NodeMesh";
import { generateRingLayout } from "@/lib/layout";
import { generateDependencies } from "@/lib/dependencies";
import Edge from "@/components/edges/Edge";


const nodes = generateRingLayout(10);

const edges = generateDependencies(nodes);


export default function Scene() {
  return (
    <Canvas dpr={[1, 2]} gl={{ antialias: true }}>
      <Suspense fallback={null}>
        <Camera />
        <Lights />

        {edges.map((edge) => (
          <Edge
            key={edge.id}
            from={edge.from}
            to={edge.to}
            health={edge.health}
          />
        ))}

        {nodes.map((node) => (
          <NodeMesh
            key={node.id}
            position={node.position}
            health={node.health}
          />
        ))}
      </Suspense>
    </Canvas>
  );
}
