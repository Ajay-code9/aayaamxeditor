/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Command, Keyboard, ArrowRight, CornerDownLeft, Sparkles, Sliders, Zap } from 'lucide-react';

export default function Workflow() {
  const [activeWorkflow, setActiveWorkflow] = useState<number>(0);

  const workflows = [
    {
      id: 0,
      title: 'Prompt Context Summon',
      keys: ['⌥', 'Space'],
      desc: 'Summons the contextual input layer instantly above your current cursor position. No sidebar hopping, no prompt copy-pasting.',
      outcome: 'Launches full scope parsing on the active line.'
    },
    {
      id: 1,
      title: 'Multifile Intent Staging',
      keys: ['⌘', 'I'],
      desc: 'Allows you to prompt edits across the entire workspace structure, drafting staging buffers that update parallel interfaces.',
      outcome: 'Updates exports and implementations simultaneously.'
    },
    {
      id: 2,
      title: 'Accept Line Completions',
      keys: ['Tab'],
      desc: 'Predictive multi-character streams complete entire loops or function closures. Choose to accept the full suggestion or just single characters.',
      outcome: 'Applies token streams with 0ms visual latency.'
    },
    {
      id: 3,
      title: 'Inline Compiler Repairs',
      keys: ['⌥', 'Enter'],
      desc: 'When the background compiler catches a static error, press Option+Enter to instantly invoke a background self-repair agent.',
      outcome: 'Patches syntax bugs based on terminal trace.'
    }
  ];

  return (
    <section id="workflow" className="py-24 md:py-32 bg-bg-primary border-b border-border-primary relative transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Interactive shortcut grid on Left */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex justify-between items-center mb-6 px-1">
              <span className="text-xs font-bold tracking-widest uppercase text-text-secondary font-mono flex items-center gap-2">
                <Keyboard size={13} />
                Physical Muscle Memory
              </span>
              <span className="text-[10px] text-text-secondary/60 font-mono">Click commands to inspect</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {workflows.map((flow, index) => (
                <button
                  key={flow.id}
                  onClick={() => setActiveWorkflow(index)}
                  className={`p-6 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between h-[180px] cursor-pointer ${
                    activeWorkflow === index
                      ? 'bg-bg-secondary border-border-primary shadow-sm'
                      : 'bg-transparent border-transparent hover:bg-bg-secondary/40'
                  }`}
                >
                  <div className="flex justify-between items-center w-full">
                    <span className="text-xs font-bold text-text-primary font-mono">{flow.title}</span>
                    <div className="flex gap-1.5">
                      {flow.keys.map((k) => (
                        <kbd key={k} className="px-2 py-0.5 rounded border border-border-primary bg-bg-primary text-[10px] font-bold font-mono text-text-primary shadow-xs">
                          {k}
                        </kbd>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-text-secondary leading-relaxed mt-4 flex-1">
                    {flow.desc}
                  </p>

                  <div className="text-[10px] text-[#10B981] font-semibold tracking-wider uppercase font-mono mt-2 flex items-center gap-1.5">
                    <CornerDownLeft size={10} />
                    {flow.outcome}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Workflow description panel on Right */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-[#10B981] text-xs font-bold tracking-widest uppercase font-mono">
              05. Keyboard Flow
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary leading-tight">
              Keep your fingers on the keys.
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              True velocity relies on absolute muscle memory. Every command inside AayaamX is mapped to elegant physical key chords, preventing you from ever breaking concentration to reach for the cursor.
            </p>
            <p className="text-xs sm:text-sm text-text-secondary/70 leading-relaxed">
              We migrated standard settings from Vim, VS Code, and Emacs, creating an unified interactive model that adapts to your existing preferences on your very first run.
            </p>

            <div className="pt-4 flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-text-primary font-mono">
                <Sparkles size={14} className="text-[#10B981]" />
                Interactive Assist
              </div>
              <span className="h-4 w-px bg-border-primary" />
              <div className="flex items-center gap-1.5 text-xs font-bold text-text-primary font-mono">
                <Sliders size={14} className="text-[#10B981]" />
                Customizable Keymaps
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
