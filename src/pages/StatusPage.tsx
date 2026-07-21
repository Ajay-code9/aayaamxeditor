import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, CheckCircle2, AlertTriangle, RefreshCw, Activity, Calendar } from 'lucide-react';
import HeroBackgroundAnimation from '../components/HeroBackgroundAnimation';

const SERVICES = [
  { name: 'Model Handshake Gateway', status: 'Operational', uptime: '99.98%' },
  { name: 'Workspace Tunnel Router', status: 'Operational', uptime: '100.00%' },
  { name: 'Documentation Hub & Website', status: 'Operational', uptime: '99.99%' },
  { name: 'Community Package Registry', status: 'Operational', uptime: '99.95%' }
];

export default function StatusPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-bg-primary text-text-primary min-h-screen transition-colors duration-300 relative overflow-hidden"
    >
      {/* Title Hero Section */}
      <section className="min-h-[100dvh] flex flex-col justify-center pt-20 md:pt-28 pb-12 border-b border-border-primary relative overflow-hidden bg-bg-primary transition-colors duration-300">
        <HeroBackgroundAnimation variant="page" />
        <div className="mx-auto max-w-4xl px-6 md:px-8 relative z-10 my-auto w-full">
          {/* Overall Status block */}
          <div className="bg-bg-secondary border border-border-primary rounded-xl p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="h-12 w-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 shrink-0">
                <CheckCircle2 size={24} className="stroke-[2.5]" />
              </div>
              <div>
                <h1 className="text-xl font-extrabold text-text-primary font-mono uppercase tracking-wide">All systems operational</h1>
                <p className="text-xs text-text-secondary mt-0.5">Continuous telemetry checks verify that all gateway connections are healthy.</p>
              </div>
            </div>
            <button 
              onClick={() => window.location.reload()}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border-primary bg-bg-primary hover:border-text-secondary/30 transition-all text-xs font-mono text-text-primary cursor-pointer"
            >
              <RefreshCw size={11} /> Refresh status
            </button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 md:px-8 relative z-10 pt-20 pb-20">

        {/* Detailed services lists */}
        <div className="bg-bg-secondary border border-border-primary rounded-xl p-6 md:p-8 mb-12 shadow-xs space-y-6">
          <h2 className="text-xs font-bold text-text-primary font-mono uppercase tracking-wider pb-3 border-b border-border-primary flex items-center gap-2">
            <Activity size={14} className="text-[#10B981]" /> Live service matrices
          </h2>

          <div className="space-y-4 font-mono text-xs">
            {SERVICES.map((srv, idx) => (
              <div key={idx} className="flex justify-between items-center py-2.5 border-b border-border-primary last:border-b-0">
                <span className="font-bold text-text-primary">{srv.name}</span>
                <div className="flex items-center gap-4">
                  <span className="text-text-secondary">{srv.uptime}</span>
                  <span className="text-emerald-600 font-bold uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle2 size={11} /> {srv.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Incidents logs */}
        <div className="bg-bg-secondary border border-border-primary rounded-xl p-6 md:p-8 shadow-xs">
          <h2 className="text-xs font-bold text-text-primary font-mono uppercase tracking-wider pb-3 border-b border-border-primary flex items-center gap-2 mb-6">
            <Calendar size={14} className="text-[#10B981]" /> Recent Incident Logs
          </h2>

          <div className="text-xs text-text-secondary font-mono italic text-center py-6">
            No incident logs reported in the past 90 days.
          </div>
        </div>

      </div>
    </motion.div>
  );
}
