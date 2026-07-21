/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { FEATURES } from '../data';
import { Cpu, Zap, Eye, Keyboard, Database, Network } from 'lucide-react';
import ThemeCustomizerPreview from './ThemeCustomizerPreview';

export default function Features() {
  // Map icons to features to avoid inline SVGs
  const getIcon = (id: string) => {
    switch (id) {
      case 'feat-1': return <Network size={18} className="text-[#10B981]" />;
      case 'feat-2': return <Zap size={18} className="text-[#10B981]" />;
      case 'feat-3': return <Cpu size={18} className="text-[#10B981]" />;
      case 'feat-4': return <Keyboard size={18} className="text-[#10B981]" />;
      case 'feat-5': return <Database size={18} className="text-[#10B981]" />;
      case 'feat-6': return <Eye size={18} className="text-[#10B981]" />;
      default: return <Cpu size={18} className="text-[#10B981]" />;
    }
  };

  return (
    <section id="features" className="py-24 md:py-32 bg-bg-primary border-b border-border-primary relative transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Editorial Heading */}
        <div className="max-w-2xl mb-20">
          <div className="text-[#10B981] text-xs font-bold tracking-widest uppercase font-mono mb-3">
            04. Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary mb-6">
            Engineered for precision. Built for flow.
          </h2>
          <p className="text-base text-text-secondary leading-relaxed">
            AayaamX does not compromise on mechanical velocity. Every system sub-module operates under a strict sub-millisecond compile contract.
          </p>
        </div>

        {/* Bento-like asymmetrical layout to avoid low-effort 3x3 copy-paste grids */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {FEATURES.map((feat, index) => {
            // Asymmetric sizing classes for elegant, high-contrast layouts
            const isWide = index === 0 || index === 5;
            const gridSpan = isWide ? 'md:col-span-8' : 'md:col-span-4';

            return (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${gridSpan} rounded-xl border border-border-primary bg-bg-secondary p-6 sm:p-8 hover:border-text-secondary/30 transition-all duration-300 flex flex-col justify-between min-h-[260px] sm:min-h-[280px] relative group overflow-hidden`}
              >
                {/* Background decorative elements for wide cards */}
                {isWide && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute -bottom-20 -right-20 w-[220px] h-[220px] bg-radial from-[#10B981]/6 to-transparent blur-2xl" />
                  </div>
                )}

                {/* Card Header */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="h-10 w-10 rounded-lg bg-bg-primary border border-border-primary flex items-center justify-center shadow-xs">
                      {getIcon(feat.id)}
                    </div>
                    {feat.tag && (
                      <span className="text-[9px] font-bold uppercase tracking-wider text-text-secondary bg-bg-primary border border-border-primary px-2 py-0.5 rounded-md font-mono">
                        {feat.tag}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-text-primary tracking-tight group-hover:text-[#10B981] transition-colors">
                    {feat.title}
                  </h3>
                </div>

                {/* Card Description */}
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-xl">
                  {feat.description}
                </p>

              </motion.div>
            );
          })}

        </div>

        {/* Interactive Theme Customizer Preview */}
        <div className="mt-16">
          <ThemeCustomizerPreview />
        </div>

      </div>
    </section>
  );
}
