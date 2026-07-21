import React, { useState } from 'react';
import { motion } from 'motion/react';
import HeroBackgroundAnimation from '../components/HeroBackgroundAnimation';
import MacTerminalHeader from '../components/MacTerminalHeader';
import ThemeCustomizerPreview from '../components/ThemeCustomizerPreview';
import { 
  GitBranch, Terminal, Shield, Zap, Check, Play, Cpu, 
  Layers, Keyboard, Sparkles, Sliders, CheckCircle2 
} from 'lucide-react';

const DETAILED_FEATURES = [
  {
    id: 'workspace',
    title: 'Workspace-Wide Refactoring Agent',
    icon: <GitBranch size={20} className="text-[#10B981]" />,
    tag: 'INTELLIGENT ROUTING',
    desc: 'Unlike standard assistants that operate on single files, AayaamX holds a persistent memory model of your entire directory tree. Ask it to "add multi-region tenant capability," and it safely updates schemas, route handlers, and configuration files across 15+ subfolders simultaneously.',
    stats: '15+ files modified safely in parallel',
    capabilities: [
      'Automatic dependency path resolution',
      'Staging area diff comparisons before committing',
      'Local-first validation against compiler boundaries',
      'Interactive rollbacks per file-change block'
    ]
  },
  {
    id: 'shell',
    title: 'Self-Correcting Shell Integration',
    icon: <Terminal size={20} className="text-[#10B981]" />,
    tag: 'NATIVE TERMINAL',
    desc: 'An AI-infused terminal. When a command fails, AayaamX reads the stack trace or compilation error logs and offers an inline fix proposal right inside your input buffer. Simply press Enter to automatically patch missing packages, configure env files, or repair broken scripts.',
    stats: '< 15ms shell diagnostics parsing',
    capabilities: [
      'Zero-latency sub-process execution logging',
      'Automatic package installer mapping (npm, cargo, pip)',
      'Intelligent environment variable suggestions',
      'Unified command memory buffer sync'
    ]
  },
  {
    id: 'ast',
    title: 'Local AST Symbol Vector Map',
    icon: <Shield size={20} className="text-[#10B981]" />,
    tag: 'PRIVACY CONTROL',
    desc: 'AayaamX indexes every function definition, import path, and data structure type definition into a local cryptographic database. It uses this semantic map to feed hyper-specific coordinates to the model, ensuring it generates code that fits perfectly without exporting any proprietary data.',
    stats: '100% offline local embeddings indexing',
    capabilities: [
      'Incremental re-indexing on file save',
      'Automatic extraction of global types and enums',
      'Complete safety check against structural leaks',
      'Fast semantic symbol search using local indexing'
    ]
  },
  {
    id: 'speed',
    title: 'Zero-Latency Core Runtime',
    icon: <Zap size={20} className="text-[#10B981]" />,
    tag: 'ENGINE CORE',
    desc: 'Engineered entirely in high-performance native Rust and C++. AayaamX decouples typing presentation frame rates from backend compilation pipelines. Even if you are compiling a massive package in the background, text input and symbol search render immediately at 120 FPS.',
    stats: '1.2ms input latency benchmark',
    capabilities: [
      'Multithreaded background parsing pipelines',
      'Zero garbage-collection stutters',
      'Ultra-lightweight RAM footprint (< 120MB idling)',
      'Sub-character fast token prediction loops'
    ]
  }
];

export default function FeaturesPage() {
  const [selectedSpec, setSelectedSpec] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-bg-secondary text-text-primary min-h-screen transition-colors duration-300"
    >
      {/* Editorial Header */}
      <section className="min-h-[100dvh] flex flex-col justify-center pt-20 md:pt-28 pb-12 border-b border-border-primary relative overflow-hidden bg-bg-primary transition-colors duration-300">
        <HeroBackgroundAnimation variant="page" />
        <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10 text-center my-auto">
          <div className="text-[#10B981] text-xs font-bold tracking-widest uppercase font-mono mb-4">
            01. Technical Blueprint
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary mb-6 max-w-3xl mx-auto leading-tight">
            Designed for precision. <br />Built for absolute flow.
          </h1>
          <p className="text-sm sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            AayaamX does not compromise on mechanical velocity. Every system sub-module operates under a strict, sub-millisecond local compiler contract.
          </p>
        </div>
      </section>

      {/* Interactive Theme Studio Customizer right below Hero */}
      <section className="py-16 bg-bg-secondary border-b border-border-primary transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <ThemeCustomizerPreview />
        </div>
      </section>

      {/* Alternating In-Depth Walkthrough blocks */}
      <section className="py-24 space-y-32 bg-bg-primary transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          {DETAILED_FEATURES.map((feat, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={feat.id} 
                className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center ${
                  index > 0 ? 'mt-32 pt-32 border-t border-border-primary' : ''
                }`}
              >
                {/* Text column */}
                <div className={`lg:col-span-6 space-y-6 ${!isEven ? 'lg:order-last' : ''}`}>
                  <div className="text-[#10B981] text-xs font-bold tracking-widest uppercase font-mono">
                    {feat.tag}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-bg-secondary border border-border-primary flex items-center justify-center shadow-xs">
                      {feat.icon}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
                      {feat.title}
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                    {feat.desc}
                  </p>
                  
                  <div className="bg-bg-secondary border border-border-primary rounded-xl p-5 space-y-4">
                    <div className="text-xs font-bold text-text-primary font-mono uppercase tracking-wider flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-[#10B981]" />
                      Core Capabilities
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-text-secondary">
                      {feat.capabilities.map((cap) => (
                        <li key={cap} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Interactive / visual mockup column */}
                <div className="lg:col-span-6 bg-bg-secondary border border-border-primary rounded-2xl shadow-xl overflow-hidden h-[380px] flex flex-col">
                  <MacTerminalHeader title="AayaamX Diagnostic Terminal">
                    <div className="text-[10px] bg-bg-primary border border-border-primary px-2.5 py-0.5 rounded font-mono text-text-secondary">
                      {feat.stats}
                    </div>
                  </MacTerminalHeader>

                  {/* Rendering visual details depending on feature */}
                  <div className="flex-1 p-5 font-mono text-[11px] text-text-primary space-y-3.5 select-none overflow-y-auto bg-bg-primary">
                    {feat.id === 'workspace' && (
                      <>
                        <div className="text-text-secondary/70">// Staging Refactoring Draft: Add tenancy models</div>
                        <div className="text-red-500 bg-red-500/10 px-2 py-1 rounded">- export interface User &#123; id: string; name: string; &#125;</div>
                        <div className="text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">+ export interface User &#123; id: string; name: string; tenantId: string; &#125;</div>
                        <div className="text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">+ export interface Tenant &#123; id: string; config: Record&lt;string, any&gt;; &#125;</div>
                        <div className="text-text-secondary/70 mt-2">Checking reference consistency across db/users.ts, routes/auth.ts, tests/user.test.ts...</div>
                        <div className="text-emerald-600 font-bold">✓ Statically consistent. Ready to write to disk.</div>
                      </>
                    )}
                    {feat.id === 'shell' && (
                      <>
                        <div className="text-text-secondary/70">$ cargo build</div>
                        <div className="text-red-500 font-bold">error[E0433]: failed to resolve: use of undeclared crate or module `tokio`</div>
                        <div className="border border-[#10B981]/20 bg-[#10B981]/5 rounded p-3 text-[10px] leading-relaxed mt-4">
                          <div className="font-bold text-[#10B981] flex items-center gap-1 mb-1">
                            <Sparkles size={11} /> Inline Auto-Repair Proposal:
                          </div>
                          Run <code className="bg-bg-secondary border border-border-primary px-1 py-0.5 rounded text-text-primary font-bold">cargo add tokio --features full</code> to install the missing crate.
                        </div>
                        <div className="text-text-secondary">Press Enter to approve and run script automatically...</div>
                      </>
                    )}
                    {feat.id === 'ast' && (
                      <div className="space-y-2">
                        <div className="text-text-secondary/70">// In-memory localized vector scopes graph</div>
                        <div className="flex justify-between items-center border-b border-border-primary pb-1">
                          <span className="font-bold text-text-primary">symbol_resolver.db</span>
                          <span className="text-[10px] text-emerald-600 font-bold">INDEXED</span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-[10px]">
                            <span>Class: AuthService</span>
                            <span className="text-text-secondary/80">src/auth/service.ts (lines 14-88)</span>
                          </div>
                          <div className="flex justify-between text-[10px]">
                            <span>Method: createToken(...)</span>
                            <span className="text-text-secondary/80">dependency: jwt.ts</span>
                          </div>
                          <div className="flex justify-between text-[10px]">
                            <span>Enum: TokenType</span>
                            <span className="text-text-secondary/80">src/auth/types.ts (lines 5-12)</span>
                          </div>
                        </div>
                        <div className="text-[10px] text-text-secondary/70 pt-2">No external connection required. Direct model feeds populated in memory.</div>
                      </div>
                    )}
                    {feat.id === 'speed' && (
                      <div className="space-y-2">
                        <div className="text-text-secondary/70">// Performance trace loops</div>
                        <div className="flex justify-between">
                          <span>Main Buffer Paint</span>
                          <span className="text-emerald-600 font-bold">1.1ms (120 FPS)</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Incremental Lexer parsing</span>
                          <span className="text-emerald-600 font-bold">0.4ms</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Compiler static checker runs</span>
                          <span className="text-emerald-600 font-bold">12.1ms (In-memory worker)</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Garbage collector latency</span>
                          <span className="text-text-secondary font-bold">0.0ms (Manual Allocation)</span>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="text-[10px] font-mono text-text-secondary/80 text-right mt-3">
                    Active Module: {feat.title.split(' ')[0]}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Feature matrix checklist */}
      <section className="py-24 border-t border-border-primary bg-bg-primary transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-extrabold text-text-primary tracking-tight">
              Granular capabilities breakdown.
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed mt-4">
              Explore how AayaamX compares directly to typical desktop development environments and sidebar extensions.
            </p>
          </div>

          <div className="border border-border-primary rounded-xl overflow-hidden bg-bg-secondary shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-bg-primary border-b border-border-primary text-xs font-mono font-bold uppercase tracking-wider text-text-primary">
                  <th className="p-5">Capability</th>
                  <th className="p-5">Traditional Editors</th>
                  <th className="p-5 text-[#10B981]">AayaamX Native</th>
                </tr>
              </thead>
              <tbody className="text-xs font-mono text-text-secondary divide-y divide-border-primary">
                <tr>
                  <td className="p-5 font-bold text-text-primary">Context Window Scope</td>
                  <td className="p-5">Active file + visible tab only</td>
                  <td className="p-5 text-[#10B981] font-bold">Full directory tree mapping</td>
                </tr>
                <tr>
                  <td className="p-5 font-bold text-text-primary">Model Latency</td>
                  <td className="p-5">1.5s - 4.5s (Extension pipeline)</td>
                  <td className="p-5 text-[#10B981] font-bold">&lt; 30ms directly inside buffer</td>
                </tr>
                <tr>
                  <td className="p-5 font-bold text-text-primary">Compiler Integration</td>
                  <td className="p-5">Manual terminal copy-paste</td>
                  <td className="p-5 text-[#10B981] font-bold">Continuous memory-safe verification</td>
                </tr>
                <tr>
                  <td className="p-5 font-bold text-text-primary">Keybindings Mapping</td>
                  <td className="p-5">Varies widely, manual setup</td>
                  <td className="p-5 text-[#10B981] font-bold">1-Click full VIM/VSCode transition</td>
                </tr>
                <tr>
                  <td className="p-5 font-bold text-text-primary">Data Privacy Contract</td>
                  <td className="p-5">Telemetry uploaded as default</td>
                  <td className="p-5 text-[#10B981] font-bold">Strict zero retention, local map</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
