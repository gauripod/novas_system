type MetricProps = {
  label: string;
  value: string;
};

function Metric({ label, value }: MetricProps) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-gray-400">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

export default function MetricsPanel() {
  return (
    <div>
      <p className="text-sm text-gray-400 mb-4">live metrics</p>

      <div className="space-y-3">
        <Metric label="avg cpu" value="42%" />
        <Metric label="avg latency" value="180 ms" />
        <Metric label="nodes up" value="7 / 8" />
        <Metric label="req/sec" value="1.2k" />
      </div>
    </div>
  );
}
