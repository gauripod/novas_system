type LogProps = {
  line: string;
};

function Log({ line }: LogProps) {
  return <div className="text-gray-300">• {line}</div>;
}

export default function LogsPanel() {
  return (
    <div className="h-[240px] overflow-y-auto">
      <p className="text-sm text-gray-400 mb-2">event logs</p>

      <div className="space-y-1 font-mono text-xs">
        <Log line="node-3 entered degraded state" />
        <Log line="latency spike detected on node-5" />
        <Log line="recovery initiated for node-3" />
      </div>
    </div>
  );
}
