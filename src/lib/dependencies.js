export function generateDependencies(nodes) {
  const edges = [];

  for (let i = 0; i < nodes.length; i++) {
    const from = nodes[i];
    const to = nodes[(i + 1) % nodes.length];

    edges.push({
      id: `${from.id}->${to.id}`,
      from: from.position,
      to: to.position,
      health: from.health,
    });
  }

  return edges;
}
