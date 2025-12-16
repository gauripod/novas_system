"use client";

import { motion } from "framer-motion";
import TopologyView from "../../components/topology/Topology"
import MetricsPanel from "../../components/metrics/MetricsPanel";
import ChaosPanel from "../../components/chaos/ChaosPanel";
import LogsPanel from "../../components/logs/LogsPanel";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#05070d] text-gray-200 p-6">
      {/* header */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold tracking-wide">
          nova systems lab
        </h1>
        <p className="text-sm text-gray-400">
          system: stable • nodes: 8 • realtime
        </p>
      </div>

      {/* top section */}
      <div className="grid grid-cols-12 gap-6 mb-6">
        <motion.div
          className="col-span-8 rounded-xl border border-white/5 bg-black/40 p-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <TopologyView />
        </motion.div>

        <motion.div
          className="col-span-4 rounded-xl border border-white/5 bg-black/40 p-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <MetricsPanel />
        </motion.div>
      </div>

      {/* bottom section */}
      <div className="grid grid-cols-12 gap-6">
        <motion.div
          className="col-span-5 rounded-xl border border-white/5 bg-black/40 p-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <ChaosPanel />
        </motion.div>

        <motion.div
          className="col-span-7 rounded-xl border border-white/5 bg-black/40 p-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <LogsPanel />
        </motion.div>
      </div>
    </div>
  );
}
