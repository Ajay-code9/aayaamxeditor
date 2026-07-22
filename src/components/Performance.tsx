import React from 'react';
import { motion } from 'motion/react';
import { Zap } from 'lucide-react';
import PerformanceBenchmarkCalculator from './PerformanceBenchmarkCalculator';

export default function Performance() {
  const metrics = [
    {
      label: 'Instant Typing Speed',
      unit: 'ms lag',
      aayaam: 8,
      others: 85,
      desc: 'Code appears instantly as fast as your fingers type — zero delay or lagging screen.'
    },
    {
      label: '100k Line Project Opening',
      unit: 'seconds',
      aayaam: 1.4,
      others: 18.2,
      desc: 'Loads massive codebases with over 100,000 lines in just 1 second instead of waiting half a minute.'
    },
    {
      label: 'Computer RAM Memory Used',
      unit: 'MB RAM',
      aayaam: 140,
      others: 1100,
      desc: 'Uses 8x less memory, keeping your laptop fast, cool, and preserving battery life all day.'
    }
  ];

  return (
    <section id="performance" className="py-16 md:py-24 bg-bg-secondary border-b border-border-primary relative transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Simple Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary mb-4">
            Built for Speed. Zero Waiting.
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            AayaamX gives you instant AI code suggestions in real-time, leaving heavy traditional editors far behind.
          </p>
        </div>

        {/* Dynamic Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {metrics.map((m, idx) => {
            const maxVal = Math.max(m.aayaam, m.others);
            const aayaamPercent = (m.aayaam / maxVal) * 100;
            const othersPercent = (m.others / maxVal) * 100;

            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glow-card rounded-2xl border border-border-primary bg-bg-card/60 backdrop-blur-xl p-7 flex flex-col justify-between h-[340px]"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-border-primary mb-4">
                    <span className="text-xs font-bold text-text-primary font-mono uppercase tracking-wider">{m.label}</span>
                    <span className="text-[10px] text-emerald-400 font-bold font-mono bg-emerald-500/10 px-2 py-0.5 rounded-full">{m.unit}</span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed mb-6">{m.desc}</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono text-text-secondary">
                      <span>Traditional Editors</span>
                      <span className="font-semibold">{m.others} {m.unit}</span>
                    </div>
                    <div className="h-2 w-full bg-bg-primary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${othersPercent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-full bg-border-primary rounded-full"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono text-text-primary font-bold">
                      <span className="flex items-center gap-1.5">
                        <Zap size={13} className="text-emerald-400 fill-emerald-400" />
                        AayaamX Editor
                      </span>
                      <span className="text-emerald-400">{m.aayaam} {m.unit}</span>
                    </div>
                    <div className="h-2.5 w-full bg-bg-primary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${aayaamPercent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full shadow-lg shadow-emerald-500/30"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border-primary text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
                  <span>⚡ {Math.round(m.others / m.aayaam)}x Better Performance</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14">
          <PerformanceBenchmarkCalculator />
        </div>

      </div>
    </section>
  );
}
