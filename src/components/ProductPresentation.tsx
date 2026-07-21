/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, GitBranch, Shield, ArrowRight, Eye, Code, Zap, Play, CheckCircle } from 'lucide-react';
import MacTerminalHeader from './MacTerminalHeader';

export default function ProductPresentation() {
  const [activeTab, setActiveTab] = useState<'workspace' | 'shell' | 'ast'>('workspace');
  const [isCompiling, setIsCompiling] = useState(false);
  const [isCompiled, setIsCompiled] = useState(false);

  function triggerSimulatedBuild() {
    setIsCompiling(true);
    setIsCompiled(false);
    setTimeout(() => {
      setIsCompiling(false);
      setIsCompiled(true);
    }, 1800);
  }

  return (
    <section id="meet-aayaamx" className="py-24 md:py-32 bg-bg-primary border-b border-border-primary relative transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Editorial Heading */}
        <div className="max-w-2xl mb-16">
          <div className="text-[#10B981] text-xs font-bold tracking-widest uppercase font-mono mb-3">
            03. The Product
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary mb-6">
            Inside the Engine.
          </h2>
          <p className="text-base text-text-secondary leading-relaxed">
            Explore the core structural components of AayaamX. Each interface element is integrated directly with the compiling layer, responding instantly to natural language.
          </p>
        </div>

        {/* Feature Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tab buttons sidebar on Left */}
          <div className="lg:col-span-4 space-y-3">
            <button
              onClick={() => { setActiveTab('workspace'); setIsCompiled(false); }}
              className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                activeTab === 'workspace'
                  ? 'bg-bg-secondary border-border-primary shadow-xs'
                  : 'bg-transparent border-transparent hover:bg-bg-secondary/40'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-1.5 rounded-lg ${activeTab === 'workspace' ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-border-primary text-text-secondary'}`}>
                  <GitBranch size={16} />
                </div>
                <h3 className="text-sm font-bold text-text-primary">Workspace Agent</h3>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Refactor entire folder hierarchies with safe dependency tracking. Draft changes, audit diffs, and compile to test.
              </p>
            </button>

            <button
              onClick={() => { setActiveTab('shell'); setIsCompiled(false); }}
              className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                activeTab === 'shell'
                  ? 'bg-bg-secondary border-border-primary shadow-xs'
                  : 'bg-transparent border-transparent hover:bg-bg-secondary/40'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-1.5 rounded-lg ${activeTab === 'shell' ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-border-primary text-text-secondary'}`}>
                  <Terminal size={16} />
                </div>
                <h3 className="text-sm font-bold text-text-primary">Live Shell Control</h3>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                An intelligence-guided terminal. AI reads compilation trace errors and suggests terminal repairs inline.
              </p>
            </button>

            <button
              onClick={() => { setActiveTab('ast'); setIsCompiled(false); }}
              className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                activeTab === 'ast'
                  ? 'bg-bg-secondary border-border-primary shadow-xs'
                  : 'bg-transparent border-transparent hover:bg-bg-secondary/40'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-1.5 rounded-lg ${activeTab === 'ast' ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-border-primary text-text-secondary'}`}>
                  <Shield size={16} />
                </div>
                <h3 className="text-sm font-bold text-text-primary">AST Vector Map</h3>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Visualizing local-first symbol indexes. All dependencies and methods are mapped to safeguard code integrity.
              </p>
            </button>
          </div>

          {/* Sandbox Visualizer Canvas on Right */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl border border-border-primary bg-bg-secondary shadow-xl overflow-hidden h-[420px] flex flex-col transition-colors">
              
              {/* Header */}
              <MacTerminalHeader title="AayaamX Sandbox Visualizer">
                <div className="text-[10px] text-text-secondary bg-bg-primary border border-border-primary px-2.5 py-1 rounded-md font-mono transition-colors shadow-2xs">
                  {activeTab === 'workspace' && 'src/components/auth/jwt.ts'}
                  {activeTab === 'shell' && '/bin/bash'}
                  {activeTab === 'ast' && 'symbol_graph.db'}
                </div>
              </MacTerminalHeader>

              {/* Sandbox Contents */}
              <div className="flex-1 p-6 relative overflow-hidden bg-bg-primary transition-colors">
                <AnimatePresence mode="wait">
                  {activeTab === 'workspace' && (
                    <motion.div
                      key="workspace"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="h-full flex flex-col space-y-4 font-mono text-xs"
                    >
                      {/* Diff block mockup */}
                      <div className="border border-border-primary rounded-lg bg-bg-secondary overflow-hidden flex-1 flex flex-col transition-colors">
                        <div className="bg-bg-primary px-4 py-2 border-b border-border-primary text-[10px] text-text-secondary flex justify-between transition-colors">
                          <span>Refactor auth flow to support dynamic expirations</span>
                          <span className="text-[#10B981]">2 files staging</span>
                        </div>
                        <div className="flex-1 p-4 overflow-y-auto space-y-1 select-none text-[11px] leading-relaxed">
                          <div className="text-text-secondary/60">@@ -12,4 +12,6 @@</div>
                          <div className="bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-400 px-2 rounded -mx-2 line-through">
                            - const token = jwt.sign(&#123; id &#125;, SECRET, &#123; expiresIn: '1h' &#125;);
                          </div>
                          <div className="bg-green-50 text-green-700 dark:bg-green-950/30 dark:text-green-400 px-2 rounded -mx-2">
                            + const config = getAuthConfig();
                          </div>
                          <div className="bg-green-50 text-green-700 dark:bg-green-950/30 dark:text-green-400 px-2 rounded -mx-2">
                            + const token = jwt.sign(&#123; id &#125;, SECRET, &#123; expiresIn: config.ttl &#125;);
                          </div>
                          <div className="text-text-secondary pl-2">  return &#123; token, expiration: config.ttl &#125;;</div>
                        </div>
                      </div>

                      {/* Interactive compiling controller */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={triggerSimulatedBuild}
                            disabled={isCompiling}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-text-primary px-4 py-2 text-xs font-semibold text-bg-primary hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer"
                          >
                            <Play size={12} />
                            {isCompiling ? 'CompilingAST...' : 'Verify Change'}
                          </button>
                        </div>
                        <div className="text-right">
                          {isCompiling && <span className="text-xs text-[#10B981] animate-pulse">Running checks...</span>}
                          {isCompiled && !isCompiling && (
                            <span className="text-xs text-emerald-500 flex items-center gap-1.5 font-semibold">
                              <CheckCircle size={12} />
                              Verification complete. Succeeded in 12ms.
                            </span>
                          )}
                          {!isCompiling && !isCompiled && <span className="text-xs text-text-secondary">Ready to verify</span>}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'shell' && (
                    <motion.div
                      key="shell"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="h-full flex flex-col font-mono text-xs"
                    >
                      <div className="border border-[#222222] rounded-lg bg-[#0a0a0a] p-4 text-white flex-1 flex flex-col justify-between">
                        <div className="space-y-2 select-none">
                          <div className="flex items-center gap-1.5 text-gray-500">
                            <span>$</span>
                            <span>npm run test</span>
                          </div>
                          <div className="text-red-400">
                            FAIL: src/api/auth.test.ts (TypeError: jwt.sign is not a function)
                          </div>
                          <div className="text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/20 rounded p-2 text-[11px] leading-relaxed mt-4">
                            <div className="font-bold flex items-center gap-1 mb-1">
                              <Zap size={11} className="stroke-[2.5]" />
                              AayaamX Repair Proposal
                            </div>
                            <span>You imported jwt from 'jsonwebtoken' but forgot to install the type types or define the mock wrapper. Run /patch:</span>
                          </div>
                        </div>

                        <div className="border-t border-[#222222] pt-3 flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center gap-2">
                            <span className="text-[#10B981] font-bold animate-pulse">❯</span>
                            <span className="text-white">/patch install-types</span>
                          </div>
                          <span className="text-xs bg-[#222222] text-[#cccccc] px-2 py-0.5 rounded">Press Enter</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'ast' && (
                    <motion.div
                      key="ast"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="h-full flex flex-col justify-between"
                    >
                      {/* Interactive dependency nodes graph made in pure SVG */}
                      <div className="border border-border-primary rounded-lg bg-bg-secondary flex-1 flex items-center justify-center relative p-6 transition-colors">
                        <svg viewBox="0 0 400 200" className="w-full h-full max-h-[220px]">
                          {/* Connection Lines */}
                          <line x1="80" y1="100" x2="200" y2="50" className="stroke-border-primary" strokeWidth="1.5" />
                          <line x1="80" y1="100" x2="200" y2="150" className="stroke-border-primary" strokeWidth="1.5" />
                          <line x1="200" y1="50" x2="320" y2="100" stroke="#10B981" strokeDasharray="3,3" strokeWidth="1.5" />
                          <line x1="200" y1="150" x2="320" y2="100" className="stroke-border-primary" strokeWidth="1.5" />

                          {/* Node 1: Entry */}
                          <circle cx="80" cy="100" r="16" className="fill-bg-primary stroke-text-primary" strokeWidth="2" />
                          <text x="80" y="104" textAnchor="middle" fontSize="10" fontFamily="monospace" fontWeight="bold" className="fill-text-primary">UI</text>

                          {/* Node 2: Route Auth Controller */}
                          <circle cx="200" cy="50" r="20" className="fill-text-primary stroke-[#10B981]" strokeWidth="2" />
                          <text x="200" y="54" textAnchor="middle" className="fill-bg-primary" fontSize="10" fontFamily="monospace" fontWeight="bold">AUTH</text>

                          {/* Node 3: Database driver */}
                          <circle cx="200" cy="150" r="20" className="fill-bg-primary stroke-border-primary" strokeWidth="2" />
                          <text x="200" y="154" textAnchor="middle" fontSize="10" fontFamily="monospace" className="fill-text-secondary">DB</text>

                          {/* Node 4: Cryptographic Engine */}
                          <circle cx="320" cy="100" r="24" fill="#10B981" />
                          <text x="320" y="104" textAnchor="middle" fill="white" fontSize="9" fontFamily="monospace" fontWeight="bold">CRYPTO</text>
                        </svg>

                        {/* Graph descriptive overlay */}
                        <div className="absolute bottom-4 left-4 right-4 bg-bg-primary/95 border border-border-primary backdrop-blur-xs p-3 rounded-lg flex justify-between items-center text-[11px] transition-colors">
                          <div>
                            <span className="font-bold text-text-primary">Token Integrity Indexer</span>
                            <span className="text-text-secondary ml-2">Mapping cryptographic bindings...</span>
                          </div>
                          <span className="text-[10px] text-emerald-500 font-bold uppercase font-mono">
                            ✓ No leaks detected
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
