/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Layers, Terminal, ArrowRight, Activity, Zap } from 'lucide-react';

export default function AIStory() {
  const [hoveredNode, setHoveredNode] = useState<number | null>(0);

  const pipelineNodes = [
    {
      id: 1,
      title: 'Local Kernel Buffer',
      sub: 'Zero-latency event listener',
      desc: 'Keystrokes are captured directly from the window message loop, bypassing browser-engine overhead entirely.',
      icon: <Terminal size={16} className="text-emerald-400" />
    },
    {
      id: 2,
      title: 'AST Live Memory Indexer',
      sub: 'Real-time AST parsing',
      desc: 'A background language server maintains an in-memory Abstract Syntax Tree of your project to evaluate types instantaneously.',
      icon: <Layers size={16} className="text-emerald-400" />
    },
    {
      id: 3,
      title: 'Local Vector Context Core',
      sub: 'Smart symbol search',
      desc: 'Local embeddings index your repository without uploading any source code to third-party cloud servers.',
      icon: <Cpu size={16} className="text-emerald-400" />
    },
    {
      id: 4,
      title: 'Native Agent Synthesizer',
      sub: 'Direct buffer inline edits',
      desc: 'Sub-30ms execution pipelines translate natural prompt instructions into validated code edits directly inside your file.',
      icon: <Zap size={16} className="text-emerald-400" />
    }
  ];

  return (
    <section id="ai-story" className="py-20 md:py-28 bg-bg-primary text-text-primary relative overflow-hidden border-b border-border-primary transition-colors duration-300">
      {/* Mesh glowing background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Editorial Intro Column */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-text-primary">
              AI Built Directly Into <br />
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Your Editor Core.
              </span>
            </h2>
            
            <p className="text-base text-text-secondary leading-relaxed">
              No more copying and pasting code from a browser or sidebar. AayaamX gives you instant AI suggestions right where you type.
            </p>
            
            <p className="text-sm text-text-secondary leading-relaxed">
              Everything runs locally on your machine, giving you super-fast responses without depending on slow internet servers.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-500 font-mono font-semibold">
              <Activity size={14} className="animate-pulse" />
              <span>Runs Offline • Zero Lag</span>
            </div>
          </div>

          {/* Interactive Pipeline Visualization Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-4 flex justify-between items-center px-1">
              <span className="text-xs font-bold tracking-wider uppercase text-text-secondary font-mono">
                Pipeline Execution Steps
              </span>
              <span className="text-[10px] text-emerald-500 font-mono bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                Interactive Nodes
              </span>
            </div>

            {/* Pipeline Stack with 21st.dev style cards */}
            <div className="space-y-3.5 relative">
              {/* Vertical connecting line */}
              <div className="absolute left-8 top-6 bottom-6 w-[2px] bg-gradient-to-b from-emerald-500/60 via-emerald-500/20 to-transparent pointer-events-none" />

              {pipelineNodes.map((node, index) => (
                <div
                  key={node.id}
                  onMouseEnter={() => setHoveredNode(index)}
                  className={`glow-card flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 relative group cursor-pointer ${
                    hoveredNode === index
                      ? 'bg-bg-card border-emerald-500/50 shadow-lg shadow-emerald-500/5 scale-[1.01]'
                      : 'bg-bg-card/40 border-border-primary'
                  }`}
                >
                  {/* Icon bubble */}
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border font-mono text-xs transition-all duration-300 ${
                    hoveredNode === index
                      ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400'
                      : 'bg-bg-primary border-border-primary text-text-secondary'
                  }`}>
                    {node.icon}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-sm font-bold text-text-primary">
                        {node.title}
                      </h3>
                      <span className="text-[10px] text-text-secondary font-mono bg-bg-primary border border-border-primary px-2 py-0.5 rounded-md">
                        {node.sub}
                      </span>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {node.desc}
                    </p>
                  </div>

                  <div className="absolute right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight size={14} className="text-emerald-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
