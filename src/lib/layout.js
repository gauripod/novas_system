export function generateRingLayout(count, radius = 6) {
  const nodes = [];

  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;

    nodes.push({
      id: `node-${i}`,
      position: [Math.cos(angle) * radius, 0, Math.sin(angle) * radius],
      health: i % 5 === 0 ? "degraded" : i % 7 === 0 ? "down" : "healthy",
    });
  }

  return nodes;
}
