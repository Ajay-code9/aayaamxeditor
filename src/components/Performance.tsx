/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Zap, Activity, Cpu, Timer } from 'lucide-react';
import PerformanceBenchmarkCalculator from './PerformanceBenchmarkCalculator';

export default function Performance() {
  const metrics = [
    {
      label: 'UI Buffer Latency',
      unit: 'milliseconds',
      aayaam: 8,
      others: 85,
      desc: 'Bypassing Node-RPC bridges. Keystrokes commit directly to the rendering thread.'
    },
    {
      label: 'Project Context Indexing',
      unit: 'sec / 100k lines',
      aayaam: 1.4,
      others: 18.2,
      desc: 'Multithreaded C++ compiler maps the Abstract Syntax Tree (AST) in memory.'
    },
    {
      label: 'Memory Footprint (Idle)',
      unit: 'megabytes',
      aayaam: 140,
      others: 1100,
      desc: 'Native binary architecture cuts Electron and Chromium browser resource weights.'
    }
  ];

  return (
    <section id="performance" className="py-24 md:py-32 bg-bg-secondary border-b border-border-primary relative transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Editorial Heading */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <div className="text-[#10B981] text-xs font-bold tracking-widest uppercase font-mono mb-3">
            07. Performance Benchmarks
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary mb-6">
            Engineered for raw speed.
          </h2>
          <p className="text-base text-text-secondary leading-relaxed">
            Every layer of AayaamX is audited for garbage collection stutters and execution blocks. If an operations loop takes more than 16ms, it’s redesigned.
          </p>
        </div>

        {/* Dynamic Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {metrics.map((m, idx) => {
            // Determine maximum scale for relative percentage widths
            const maxVal = Math.max(m.aayaam, m.others);
            const aayaamPercent = (m.aayaam / maxVal) * 100;
            const othersPercent = (m.others / maxVal) * 100;

            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="rounded-xl border border-border-primary bg-bg-primary p-7 hover:border-text-secondary/30 transition-all flex flex-col justify-between h-[360px] shadow-xs"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-border-primary mb-5">
                    <span className="text-xs font-bold text-text-primary font-mono uppercase tracking-wider">{m.label}</span>
                    <span className="text-[10px] text-text-secondary font-mono uppercase">{m.unit}</span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed mb-6">{m.desc}</p>
                </div>

                {/* Animated Comparative Visual bars */}
                <div className="space-y-4">
                  {/* Standard Extension Host (VS Code / Others) */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[11px] font-mono text-text-secondary/80">
                      <span>Typical Electron Editors</span>
                      <span className="font-bold">{m.others}</span>
                    </div>
                    <div className="h-1.5 w-full bg-bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${othersPercent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-full bg-border-primary rounded-full"
                      />
                    </div>
                  </div>

                  {/* AayaamX Native Buffer */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[11px] font-mono text-text-primary font-bold">
                      <span className="flex items-center gap-1">
                        <Zap size={11} className="text-[#10B981] fill-[#10B981]/20 stroke-[2.5]" />
                        AayaamX Native
                      </span>
                      <span className="text-[#10B981]">{m.aayaam}</span>
                    </div>
                    <div className="h-2 w-full bg-bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${aayaamPercent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full bg-[#10B981] rounded-full shadow-[0_0_8px_rgba(254,6,13,0.3)]"
                      />
                    </div>
                  </div>
                </div>

                {/* Efficiency calculation banner */}
                <div className="mt-6 pt-4 border-t border-border-primary text-[10px] font-mono text-emerald-600 font-bold uppercase tracking-wider">
                  ✓ {Math.round(m.others / m.aayaam)}x improvement in velocity
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Benchmark Calculator Tool */}
        <div className="mt-16">
          <PerformanceBenchmarkCalculator />
        </div>

      </div>
    </section>
  );
}
