import React from 'react';
import { motion } from 'motion/react';
import { History, Star, ArrowRight, Zap, Check, Sparkles } from 'lucide-react';
import HeroBackgroundAnimation from '../components/HeroBackgroundAnimation';

const LOGS = [
  {
    version: 'v1.0.4',
    date: 'July 18, 2026',
    changes: [
      { type: 'Feature', text: 'Implemented local AST multi-file index caching to reduce model token footprint.' },
      { type: 'Optimized', text: 'Sped up LSP completion response pipelines by 35ms.' },
      { type: 'Fixed', text: 'Fixed character ligature rendering bugs within custom shell tab views.' }
    ]
  },
  {
    version: 'v1.0.3',
    date: 'July 04, 2026',
    changes: [
      { type: 'Feature', text: 'Added automated Cargo and Go compilation background watcher threads.' },
      { type: 'Feature', text: '1-Click settings sync from VIM and VSCode workspaces.' },
      { type: 'Fixed', text: 'Resolved file path indexing failures on macOS Sequoia sandboxes.' }
    ]
  }
];

export default function ChangelogPage() {
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
              14. Product Evolution
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary leading-tight mb-4">
              Changelog History
            </h1>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Continuous development logs detailing recent architectural improvements, performance optimization runs, and compiler fixes.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 md:px-8 relative z-10 pt-20 pb-20">

        {/* Timeline Logs */}
        <div className="space-y-16 relative before:absolute before:left-3 before:top-2 before:bottom-0 before:w-px before:bg-border-primary">
          {LOGS.map((log, idx) => (
            <div key={idx} className="relative pl-12">
              {/* Dot decoration */}
              <div className="absolute left-[7px] top-1.5 h-3 w-3 rounded-full bg-[#10B981] border-2 border-bg-primary ring-4 ring-[#10B981]/10" />

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                  <h3 className="text-xl font-bold text-text-primary font-mono">{log.version}</h3>
                  <span className="text-xs font-mono text-text-secondary">{log.date}</span>
                </div>

                <div className="bg-bg-secondary border border-border-primary rounded-xl p-6 shadow-xs space-y-4">
                  {log.changes.map((item, chIdx) => (
                    <div key={chIdx} className="flex gap-3 items-start text-xs leading-relaxed text-text-secondary">
                      <span className={`inline-block text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded shrink-0 ${
                        item.type === 'Feature' ? 'bg-[#10B981]/5 border border-[#10B981]/10 text-[#10B981]' :
                        item.type === 'Optimized' ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-600' :
                        'bg-text-secondary/10 border border-text-secondary/20 text-text-secondary'
                      }`}>
                        {item.type}
                      </span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </motion.div>
  );
}
