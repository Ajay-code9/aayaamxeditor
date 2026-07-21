/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { ArrowRight, Terminal, Cpu, GitBranch, ShieldCheck, Check } from 'lucide-react';
import HeroBackgroundAnimation from './HeroBackgroundAnimation';
import MacTerminalHeader from './MacTerminalHeader';

export default function Hero() {
  const [typedCode, setTypedCode] = useState('');
  const [activeTab, setActiveTab] = useState<'index.ts' | 'ai_agent.rs'>('index.ts');
  const [compilerStatus, setCompilerStatus] = useState<'idle' | 'analyzing' | 'compiling' | 'success'>('success');
  const [performanceMs, setPerformanceMs] = useState(14);
  const containerRef = useRef<HTMLDivElement>(null);

  // Magnetic 3D tilt effect on hover for premium presentation
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(y, [-300, 300], [10, -10]), { damping: 25, stiffness: 120 });
  const rotateY = useSpring(useTransform(x, [-300, 300], [-10, 10]), { damping: 25, stiffness: 120 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  // Typewriter and AI code-rewrite simulation loop
  useEffect(() => {
    let isMounted = true;
    const codeSequences = {
      'index.ts': [
        // Sequence 1: The user types erroneous code
        { text: 'export async function getUserMetrics(id: string) {\n  const res = await db.query("SELECT * FROM users WHERE id = " + id);\n  return res.rows[0];\n}', status: 'idle' },
        // Sequence 2: Compiler flags error (SQL injection and lack of type checking)
        { text: 'export async function getUserMetrics(id: string) {\n  const res = await db.query("SELECT * FROM users WHERE id = " + id);\n  return res.rows[0];\n}', status: 'analyzing' },
        // Sequence 3: AI rewrites it with type-safe parameters safely
        { text: 'export async function getUserMetrics(id: string): Promise<User | null> {\n  const res = await db.query<User>(\n    "SELECT * FROM users WHERE id = $1",\n    [id]\n  );\n  return res.rows[0] ?? null;\n}', status: 'compiling' },
        // Sequence 4: Success
        { text: 'export async function getUserMetrics(id: string): Promise<User | null> {\n  const res = await db.query<User>(\n    "SELECT * FROM users WHERE id = $1",\n    [id]\n  );\n  return res.rows[0] ?? null;\n}', status: 'success' }
      ],
      'ai_agent.rs': [
        { text: 'fn index_workspace() -> Result<(), IndexError> {\n  let files = walk_dir("./src")?;\n  for file in files {\n    spawn_thread(move || {\n      vectorize(file);\n    });\n  }\n  Ok(())\n}', status: 'idle' },
        { text: 'fn index_workspace() -> Result<(), IndexError> {\n  let files = walk_dir("./src")?;\n  for file in files {\n    spawn_thread(move || {\n      vectorize(file);\n    });\n  }\n  Ok(())\n}', status: 'analyzing' },
        { text: 'pub fn index_workspace() -> Result<(), IndexError> {\n  let files = walk_dir("./src")?;\n  files.par_iter().try_for_each(|file| {\n    let embedding = compute_local_embedding(file)?;\n    store_in_memory_index(file, embedding)\n  })?;\n  Ok(())\n}', status: 'compiling' },
        { text: 'pub fn index_workspace() -> Result<(), IndexError> {\n  let files = walk_dir("./src")?;\n  files.par_iter().try_for_each(|file| {\n    let embedding = compute_local_embedding(file)?;\n    store_in_memory_index(file, embedding)\n  })?;\n  Ok(())\n}', status: 'success' }
      ]
    };

    let step = 0;
    const playSimulation = async () => {
      while (isMounted) {
        const sequence = codeSequences[activeTab];
        const current = sequence[step % sequence.length];
        
        if (current.status === 'idle') {
          // Slow typing animation for the base error state
          setCompilerStatus('idle');
          let partial = '';
          const fullText = current.text;
          for (let i = 0; i < fullText.length; i += 2) {
            if (!isMounted) return;
            partial = fullText.substring(0, i + 2);
            setTypedCode(partial);
            await new Promise((r) => setTimeout(r, 10));
          }
          await new Promise((r) => setTimeout(r, 1200));
        } else if (current.status === 'analyzing') {
          setCompilerStatus('analyzing');
          await new Promise((r) => setTimeout(r, 1000));
        } else if (current.status === 'compiling') {
          setCompilerStatus('compiling');
          // Fast reveal representing quick AI transformation
          setTypedCode(current.text);
          await new Promise((r) => setTimeout(r, 1400));
        } else if (current.status === 'success') {
          setCompilerStatus('success');
          setPerformanceMs(Math.floor(Math.random() * 8) + 8); // dynamic ultra-low latency representation
          await new Promise((r) => setTimeout(r, 4500));
          step = 0; // reset
          continue;
        }
        step++;
      }
    };

    playSimulation();

    return () => {
      isMounted = false;
    };
  }, [activeTab]);

  return (
    <section className="relative overflow-hidden bg-bg-primary min-h-[100dvh] flex flex-col justify-center pt-14 pb-8 sm:pt-16 sm:pb-6 md:pt-20 md:pb-12 border-b border-border-primary transition-colors duration-300">
      {/* Dynamic Animated Background */}
      <HeroBackgroundAnimation variant="hero" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center">
          {/* Confident Copy Column */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-3 sm:space-y-4 md:space-y-6">
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[1.75rem] leading-[1.15] sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary"
              >
                The AI is not <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-[#00106B] via-[#0284C7] to-[#10B981] bg-clip-text text-transparent dark:from-[#38BDF8] dark:to-[#10B981]">a sidebar.</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[11px] sm:text-sm md:text-base lg:text-lg text-text-secondary leading-relaxed max-w-md"
              >
                AayaamX integrates the reasoning model directly inside the editor buffer and compiling layer. No extension latency. Zero context fragmentation. Real-time background safety checks.
              </motion.p>
            </div>

            {/* Premium CTA Block */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex flex-col xs:flex-row gap-2.5 sm:gap-3"
            >
              <Link
                to="/download"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00106B] via-[#0284C7] to-[#10B981] hover:brightness-110 px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-[#00106B]/20 transition-all active:scale-98"
              >
                Download AayaamX
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/features"
                className="inline-flex items-center justify-center rounded-full border border-border-primary bg-bg-secondary px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 text-xs sm:text-sm font-semibold text-text-primary shadow-xs transition-all hover:bg-bg-primary"
              >
                Explore Technology
              </Link>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-col xs:flex-row flex-wrap gap-x-4 sm:gap-x-6 gap-y-1.5 sm:gap-y-2 pt-3 sm:pt-4 border-t border-border-primary w-full"
            >
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-text-secondary">
                <Check size={12} className="text-[#10B981]" />
                <span>Zero Data Retention</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-text-secondary">
                <Check size={12} className="text-[#10B981]" />
                <span>Local vector indexes</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-text-secondary">
                <Check size={12} className="text-[#10B981]" />
                <span>Rust & C++ native core</span>
              </div>
            </motion.div>
          </div>

          {/* Premium Interactive Editor presentation */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end w-full">
            <motion.div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[620px] rounded-xl sm:rounded-2xl border border-white/10 dark:border-white/10 bg-[#0c0c0e] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.7)] sm:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] relative overflow-hidden flex flex-col h-[240px] xs:h-[260px] sm:h-[320px] md:h-[350px] lg:h-[390px] backdrop-blur-xl"
            >
              {/* Realistic macOS Header */}
              <MacTerminalHeader title="aayaamx-workspace">
                <div className="flex gap-1 bg-[#121215] rounded-lg p-0.5 border border-white/5">
                  <button
                    onClick={() => { setActiveTab('index.ts'); setTypedCode(''); }}
                    className={`px-2.5 py-1 rounded-md text-[10px] font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeTab === 'index.ts' ? 'bg-[#222228] text-white font-medium shadow-xs border border-white/10' : 'text-[#888890] hover:text-[#cccccc]'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    index.ts
                  </button>
                  <button
                    onClick={() => { setActiveTab('ai_agent.rs'); setTypedCode(''); }}
                    className={`px-2.5 py-1 rounded-md text-[10px] font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeTab === 'ai_agent.rs' ? 'bg-[#222228] text-white font-medium shadow-xs border border-white/10' : 'text-[#888890] hover:text-[#cccccc]'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    ai_agent.rs
                  </button>
                </div>
              </MacTerminalHeader>

              {/* Main IDE area */}
              <div className="flex-1 flex overflow-hidden">
                {/* Left Mini Sidebar */}
                <div className="w-8 sm:w-12 bg-[#0c0c0c] border-r border-[#222222] flex flex-col items-center py-3 sm:py-4 gap-3 sm:gap-4 text-[#444444]">
                  <Terminal size={14} className="text-[#10B981]" />
                  <Cpu size={14} />
                  <GitBranch size={14} />
                  <ShieldCheck size={14} />
                </div>

                {/* Editor code area */}
                <div className="flex-1 p-3 sm:p-5 overflow-auto relative font-mono text-[10px] sm:text-xs text-[#cccccc] leading-relaxed">
                  {/* Subtle code backdrop grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] opacity-40 pointer-events-none" />
                  
                  {/* Active Agent Overlay notification */}
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-4 flex items-center gap-1 sm:gap-1.5 rounded-md bg-[#161616] border border-[#262626] px-1.5 sm:px-2.5 py-0.5 sm:py-1 text-[8px] sm:text-[10px]">
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      compilerStatus === 'idle' ? 'bg-amber-500 animate-pulse' :
                      compilerStatus === 'analyzing' ? 'bg-blue-500 animate-ping' :
                      compilerStatus === 'compiling' ? 'bg-[#10B981] animate-pulse' :
                      'bg-emerald-500'
                    }`} />
                    <span className="text-[#888888]">
                      {compilerStatus === 'idle' && 'Waiting for input'}
                      {compilerStatus === 'analyzing' && 'Analyzing safety...'}
                      {compilerStatus === 'compiling' && 'Synthesizing clean code'}
                      {compilerStatus === 'success' && 'Compiler Verified'}
                    </span>
                  </div>

                  {/* Rendering preformatted code */}
                  <pre className="relative z-10 select-none text-[#cccccc] whitespace-pre-wrap break-words">
                    {typedCode.split('\n').map((line, idx) => {
                      // Basic aesthetic color highlighting
                      let highlighted = line;
                      const isTypeSafe = line.includes('Promise') || line.includes('par_iter') || line.includes('$1');
                      
                      return (
                        <div key={idx} className="flex gap-4">
                          <span className="text-[#333333] w-4 text-right">{idx + 1}</span>
                          <span className={isTypeSafe && compilerStatus === 'success' ? 'text-emerald-400 transition-colors' : ''}>
                            {line}
                          </span>
                        </div>
                      );
                    })}
                    <span className="inline-block w-1.5 h-4 bg-[#10B981] ml-0.5 animate-pulse" />
                  </pre>
                </div>
              </div>

              {/* Console/Agent reasoning step logs footer */}
              <div className="h-8 sm:h-10 bg-[#0c0c0c] border-t border-[#222222] px-2 sm:px-4 flex items-center justify-between text-[8px] sm:text-[10px] font-mono text-[#666666]">
                <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span className="hidden xs:inline">AayaamX Lang Server:</span>
                  <span className="xs:hidden">Server:</span>
                  <span className="text-white truncate">Active (v1.0.4)</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
                  <span>Latency: <span className="text-[#10B981] font-bold">{performanceMs}ms</span></span>
                  <span className="h-3 w-px bg-[#222222] hidden xs:block" />
                  <span className="hidden xs:inline">Build: <span className="text-emerald-500 font-semibold">Green</span></span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
