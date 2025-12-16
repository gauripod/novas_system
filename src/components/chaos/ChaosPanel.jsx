export default function ChaosPanel() {
  return (
    <div>
      <p className="text-sm text-gray-400 mb-4">chaos simulation</p>

      <div className="space-y-3">
        <button className="w-full rounded-md bg-white/5 py-2 text-sm hover:bg-white/10 transition">
          simulate failure
        </button>
        <button className="w-full rounded-md bg-white/5 py-2 text-sm hover:bg-white/10 transition">
          spike load
        </button>
        <button className="w-full rounded-md bg-white/5 py-2 text-sm hover:bg-white/10 transition">
          recover node
        </button>
      </div>
    </div>
  );
}
