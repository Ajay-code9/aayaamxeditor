import React from 'react';
import { motion } from 'motion/react';
import { Compass, Calendar, ArrowRight, Zap, Check, AlertCircle } from 'lucide-react';
import HeroBackgroundAnimation from '../components/HeroBackgroundAnimation';

const ROADMAP = [
  {
    quarter: 'Q3 2026',
    status: 'In Progress',
    goals: [
      { title: 'Local Llama-3.1-8B GPU Fine-Tuning Adapters', desc: 'Allow users to load custom quantized parameters directly on their GPU memory configurations.', done: false },
      { title: 'AST multi-file semantic search indexing', desc: 'Incorporate native vector lookup layers in the general symbols search palette.', done: true },
      { title: 'Integrated pre-commit Git hooks', desc: 'Run validation compilers prior to pushing commits to remote hubs.', done: true }
    ]
  },
  {
    quarter: 'Q4 2026',
    status: 'Planned',
    goals: [
      { title: 'Collaborative Live-Buffer tunnels', desc: 'Enables safe team-member peer editing over secure peer-to-peer WebRTC connections.', done: false },
      { title: 'Custom API endpoints integrations', desc: 'Allows proxy connections to private enterprise LLM server hubs.', done: false }
    ]
  }
];

export default function RoadmapPage() {
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
        <div className="mx-auto max-w-5xl px-6 md:px-8 relative z-10 text-center my-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-[#10B981] text-xs font-bold tracking-widest uppercase font-mono mb-4">
              15. Engineering Horizon
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary leading-tight mb-4">
              Product Roadmap
            </h1>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Take a look at the upcoming compiler advancements, offline local model optimizations, and team synchronization tools on our roadmap.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 md:px-8 relative z-10 pt-20 pb-20">

        {/* Roadmap list */}
        <div className="space-y-12">
          {ROADMAP.map((phase, idx) => (
            <div key={idx} className="bg-bg-secondary border border-border-primary rounded-xl p-8 shadow-xs">
              <div className="flex justify-between items-center pb-4 border-b border-border-primary mb-6">
                <h3 className="text-lg font-bold text-text-primary font-mono">{phase.quarter}</h3>
                <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                  phase.status === 'In Progress' ? 'bg-[#10B981]/5 border border-[#10B981]/10 text-[#10B981]' : 'bg-text-secondary/10 border border-text-secondary/20 text-text-secondary'
                }`}>
                  {phase.status}
                </span>
              </div>

              <div className="space-y-6">
                {phase.goals.map((goal, goalIdx) => (
                  <div key={goalIdx} className="flex gap-4 items-start text-xs text-text-secondary">
                    <div className="mt-0.5 shrink-0">
                      {goal.done ? (
                        <div className="h-5 w-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600">
                          <Check size={11} className="stroke-[3]" />
                        </div>
                      ) : (
                        <div className="h-5 w-5 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600">
                          <AlertCircle size={11} className="stroke-[3]" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary">{goal.title}</h4>
                      <p className="text-[11px] leading-relaxed mt-0.5 text-text-secondary">{goal.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </motion.div>
  );
}
