/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { PROBLEMS } from '../data';
import { XCircle, ArrowRight, Zap, RefreshCw } from 'lucide-react';

export default function Problems() {
  return (
    <section id="problems" className="py-24 md:py-32 bg-bg-secondary relative overflow-hidden border-b border-border-primary transition-colors duration-300">
      {/* Background visual geometric grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-radial from-[#10B981]/2 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        <div className="max-w-2xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-[#10B981] text-xs font-bold tracking-widest uppercase mb-3"
          >
            01. Structural Friction
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary mb-6"
          >
            Typical editors were built before AI existed.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-text-secondary leading-relaxed"
          >
            Squeezing reasoning pipelines into extensions creates bottlenecks. When an AI can't read the compiler state, every recommendation is an educated guess.
          </motion.p>
        </div>

        {/* Problem grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROBLEMS.map((prob, index) => (
            <motion.div
              key={prob.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col h-full rounded-xl border border-border-primary bg-bg-primary p-6.5 hover:border-text-secondary/30 transition-colors duration-300 relative group overflow-hidden"
            >
              {/* Top status bar representing typical friction */}
              <div className="flex items-center justify-between pb-4 border-b border-border-primary mb-5">
                <span className="text-xs font-semibold text-text-secondary font-mono uppercase tracking-wider">
                  {prob.scenario}
                </span>
                <span className="inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
              </div>

              {/* Friction Case Details */}
              <div className="space-y-4 flex-1">
                <div>
                  <div className="text-[11px] font-bold text-[#999999] uppercase tracking-wider mb-1 flex items-center gap-1.5 font-mono">
                    <XCircle size={11} className="text-[#10B981]" />
                    Symptom
                  </div>
                  <p className="text-sm font-semibold text-text-primary leading-snug">
                    {prob.symptom}
                  </p>
                </div>

                <div>
                  <div className="text-[11px] font-bold text-[#999999] uppercase tracking-wider mb-1 flex items-center gap-1.5 font-mono">
                    <RefreshCw size={11} className="text-text-secondary animate-spin-slow" />
                    Impact on focus
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {prob.impact}
                  </p>
                </div>
              </div>

              {/* Elegant Response Bridge */}
              <div className="mt-8 pt-5 border-t border-border-primary bg-linear-to-b from-transparent to-[#10B981]/2 rounded-b-xl -mx-6.5 -mb-6.5 p-6.5 group-hover:to-[#10B981]/4 transition-colors">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#10B981] uppercase tracking-wider mb-2 font-mono">
                  <Zap size={11} className="stroke-[2.5]" />
                  AayaamX Engine Solution
                </div>
                <p className="text-xs font-medium text-text-primary leading-relaxed">
                  {prob.editorResponse}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
