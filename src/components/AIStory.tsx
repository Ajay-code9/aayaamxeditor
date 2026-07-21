/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Layers, Terminal, ArrowRight, Activity, Zap } from 'lucide-react';

export default function AIStory() {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const pipelineNodes = [
    {
      id: 1,
      title: 'Kernel Buffer',
      sub: 'Event capturing',
      desc: 'Keystrokes are read directly from the C++ window message loop, bypassing browser-engine latency layers entirely.',
      icon: <Terminal size={16} className="text-[#10B981]" />
    },
    {
      id: 2,
      title: 'AST Live Indexer',
      sub: 'Memory compiling',
      desc: 'A background language server maintains an active Abstract Syntax Tree of your project in memory, checking type contracts in real-time.',
      icon: <Layers size={16} className="text-[#10B981]" />
    },
    {
      id: 3,
      title: 'Local Context Core',
      sub: 'Vector reference',
      desc: 'Local embeddings are mapped to your codebase schema instantly, supplying exact references without full-file scans.',
      icon: <Cpu size={16} className="text-[#10B981]" />
    },
    {
      id: 4,
      title: 'Agent Synthesizer',
      sub: 'Model reasoning',
      desc: 'Sub-30ms execution pipelines translate prompt instructions directly into verified code, compiling changes safely before rendering.',
      icon: <Zap size={16} className="text-[#10B981]" />
    }
  ];

  return (
    <section id="ai-story" className="py-24 md:py-32 bg-bg-primary text-text-primary relative overflow-hidden border-b border-border-primary transition-colors duration-300">
      {/* Mesh glowing background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-radial from-[#10B981]/5 to-transparent blur-3xl opacity-80" />
        <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-radial from-[#10B981]/2 to-transparent blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Editorial Intro Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-[#10B981] text-xs font-bold tracking-widest uppercase font-mono">
              02. The AI Shift
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-text-primary">
              AI shouldn’t be <br />
              an afterthought.
            </h2>
            
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Adding ChatGPT into a side panel isn't intelligence. It’s a glorified browser. To truly change development, the model must sit underneath the core loops of the editor.
            </p>
            
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed opacity-85">
              AayaamX was designed around an unified engine. Keystroke listeners, compiler servers, local embeddings, and model requests share the same thread, preventing typical sluggishness and keeping you in perfect flow.
            </p>

            <div className="pt-4 flex items-center gap-2.5 text-xs text-[#10B981] font-bold tracking-wider uppercase font-mono">
              <Activity size={14} className="animate-pulse" />
              <span>Direct-pipeline architecture</span>
            </div>
          </div>

          {/* Interactive Pipeline Visualization Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-6 flex justify-between items-center px-2">
              <span className="text-xs font-bold tracking-widest uppercase text-text-secondary font-mono">
                Active Processing Pipeline
              </span>
              <span className="text-[10px] text-text-secondary font-mono bg-bg-secondary border border-border-primary px-2 py-0.5 rounded">
                Hover Nodes to Inspect
              </span>
            </div>

            {/* Pipeline Stack */}
            <div className="space-y-4 relative">
              {/* Vertical connecting line */}
              <div className="absolute left-10 top-6 bottom-6 w-[1.5px] bg-linear-to-b from-[#10B981]/60 via-[#10B981]/20 to-transparent pointer-events-none" />

              {pipelineNodes.map((node, index) => (
                <div
                  key={node.id}
                  onMouseEnter={() => setHoveredNode(index)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`flex items-start gap-5 p-5 rounded-xl border transition-all duration-300 relative group cursor-pointer ${
                    hoveredNode === index
                      ? 'bg-bg-secondary border-[#10B981]/40 shadow-[0_0_15px_rgba(254,6,13,0.03)] dark:shadow-[0_0_15px_rgba(254,6,13,0.08)]'
                      : 'bg-bg-secondary/40 border-border-primary'
                  }`}
                >
                  {/* Number bubble */}
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border font-mono text-xs transition-all duration-300 ${
                    hoveredNode === index
                      ? 'bg-bg-primary border-[#10B981] text-text-primary shadow-sm'
                      : 'bg-bg-primary border-border-primary text-text-secondary'
                  }`}>
                    {node.icon}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <h4 className={`text-sm font-bold transition-colors ${
                        hoveredNode === index ? 'text-text-primary' : 'text-text-primary/90'
                      }`}>
                        {node.title}
                      </h4>
                      <span className="text-[10px] text-text-secondary font-mono uppercase bg-bg-primary border border-border-primary px-1.5 py-0.5 rounded">
                        {node.sub}
                      </span>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed max-w-lg transition-colors group-hover:text-text-primary">
                      {node.desc}
                    </p>
                  </div>

                  {/* Tiny indicator arrow */}
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight size={13} className="text-[#10B981]" />
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
