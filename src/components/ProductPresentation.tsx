import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Shield, Play, CheckCircle, Sparkles, Zap, Wand2, Lock, FileCode2, RefreshCw } from 'lucide-react';
import MacTerminalHeader from './MacTerminalHeader';

const PROMPTS = [
  {
    prompt: 'Add user login with password reset',
    file1: 'src/auth/login.ts',
    file2: 'src/database/users.db',
    result: '+ Connected login API, database model, & security tokens cleanly!'
  },
  {
    prompt: 'Create dark mode theme provider',
    file1: 'src/context/ThemeContext.tsx',
    file2: 'src/components/ThemeToggle.tsx',
    result: '+ Created theme context, local storage persistence, & CSS variables!'
  },
  {
    prompt: 'Build REST API endpoint for user profiles',
    file1: 'src/api/profiles.ts',
    file2: 'src/models/ProfileModel.ts',
    result: '+ Implemented CRUD handlers, auth middleware, & response schemas!'
  }
];

export default function ProductPresentation() {
  const [activeTab, setActiveTab] = useState<'build' | 'fix' | 'private'>('build');
  const [promptIndex, setPromptIndex] = useState(0);
  const [isCompiling, setIsCompiling] = useState(false);
  const [isCompiled, setIsCompiled] = useState(false);
  const [simStep, setSimStep] = useState(0);

  const [isFixing, setIsFixing] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const currentPrompt = PROMPTS[promptIndex];

  function triggerSimulatedBuild() {
    setIsCompiling(true);
    setIsCompiled(false);
    setSimStep(0);

    setTimeout(() => setSimStep(1), 300);
    setTimeout(() => setSimStep(2), 650);
    setTimeout(() => setSimStep(3), 1000);
    setTimeout(() => {
      setIsCompiling(false);
      setIsCompiled(true);
    }, 1400);
  }

  function handleNextPrompt() {
    setPromptIndex((prev) => (prev + 1) % PROMPTS.length);
    setIsCompiled(false);
    setSimStep(0);
  }

  function handleApplyFix() {
    setIsFixing(true);
    setTimeout(() => {
      setIsFixing(false);
      setIsFixed(true);
    }, 900);
  }

  return (
    <section id="meet-aayaamx" className="py-16 md:py-20 bg-bg-primary border-b border-border-primary relative overflow-hidden transition-colors duration-300">
      {/* Ambient Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 blur-[170px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        
        {/* Simple Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary mb-3"
          >
            Built to Make Coding Simple & Fast.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-base sm:text-lg text-text-secondary leading-relaxed"
          >
            AayaamX acts as your personal AI coding expert. It writes features, fixes bugs, and keeps your data 100% private.
          </motion.p>
        </div>

        {/* Feature Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 3 Simple Non-Techy Feature Buttons on Left */}
          <div className="lg:col-span-4 space-y-4">
            {/* Feature 1 */}
            <button
              onClick={() => { setActiveTab('build'); setIsCompiled(false); setSimStep(0); }}
              className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                activeTab === 'build'
                  ? 'bg-bg-card border-emerald-500/50 shadow-lg shadow-emerald-500/10 dark:bg-[#0e0e14]'
                  : 'bg-bg-card/60 border-border-primary hover:border-text-secondary/40 dark:bg-[#09090d]'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2.5 rounded-xl ${activeTab === 'build' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-border-primary/40 text-text-secondary'}`}>
                  <Wand2 size={18} />
                </div>
                <h3 className="text-base font-bold text-text-primary">1. Write Features in Seconds</h3>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed pl-12">
                Describe your feature specifications naturally to AayaamX. It intelligently generates and synchronizes all required codebase files.
              </p>
            </button>

            {/* Feature 2 */}
            <button
              onClick={() => { setActiveTab('fix'); setIsFixed(false); setIsFixing(false); }}
              className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                activeTab === 'fix'
                  ? 'bg-bg-card border-emerald-500/50 shadow-lg shadow-emerald-500/10 dark:bg-[#0e0e14]'
                  : 'bg-bg-card/60 border-border-primary hover:border-text-secondary/40 dark:bg-[#09090d]'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2.5 rounded-xl ${activeTab === 'fix' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-border-primary/40 text-text-secondary'}`}>
                  <Zap size={18} />
                </div>
                <h3 className="text-base font-bold text-text-primary">2. Automatic Bug Fixing</h3>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed pl-12">
                When code breaks or shows an error, AayaamX detects the problem and fixes it automatically with one click.
              </p>
            </button>

            {/* Feature 3 */}
            <button
              onClick={() => { setActiveTab('private'); }}
              className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                activeTab === 'private'
                  ? 'bg-bg-card border-emerald-500/50 shadow-lg shadow-emerald-500/10 dark:bg-[#0e0e14]'
                  : 'bg-bg-card/60 border-border-primary hover:border-text-secondary/40 dark:bg-[#09090d]'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2.5 rounded-xl ${activeTab === 'private' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-border-primary/40 text-text-secondary'}`}>
                  <Lock size={18} />
                </div>
                <h3 className="text-base font-bold text-text-primary">3. 100% Private & Offline</h3>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed pl-12">
                Your code stays on your computer. Nothing is uploaded to public servers, protecting your intellectual property.
              </p>
            </button>
          </div>

          {/* Visual Interactive Demo Canvas on Right */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl border border-border-primary dark:border-white/15 bg-[#09090e] shadow-2xl overflow-hidden h-[420px] flex flex-col">
              
              {/* macOS Header */}
              <MacTerminalHeader title="AayaamX Interactive Studio">
                <div className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1.5">
                  {activeTab === 'build' && <>✨ Natural Language AI Generator</>}
                  {activeTab === 'fix' && <>⚡ 1-Click Error Auto-Repair</>}
                  {activeTab === 'private' && <>🔒 100% Offline Vault</>}
                </div>
              </MacTerminalHeader>

              {/* Interactive Demo Content */}
              <div className="flex-1 p-6 relative overflow-hidden bg-[#0c0c11]">
                <AnimatePresence mode="wait">
                  {/* Demo 1: Write Code */}
                  {activeTab === 'build' && (
                    <motion.div
                      key="build"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="h-full flex flex-col justify-between space-y-4 text-xs font-mono"
                    >
                      <div className="border border-emerald-500/30 rounded-xl bg-[#121218] p-4 flex-1 flex flex-col justify-between shadow-inner">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-emerald-400 font-bold text-xs pb-2 border-b border-white/10">
                            <div className="flex items-center gap-2">
                              <Sparkles size={14} className={isCompiling ? "animate-spin text-emerald-400" : "text-emerald-400"} />
                              <span>Your Prompt: "{currentPrompt.prompt}"</span>
                            </div>
                            <button
                              onClick={handleNextPrompt}
                              disabled={isCompiling}
                              className="text-[10px] text-text-secondary hover:text-emerald-400 flex items-center gap-1 transition-colors cursor-pointer"
                              title="Try another prompt"
                            >
                              <RefreshCw size={11} />
                              <span>Cycle Prompt</span>
                            </button>
                          </div>
                          
                          <div className="space-y-2.5 text-[11px] min-h-[120px]">
                            {simStep >= 1 && (
                              <motion.div 
                                initial={{ opacity: 0, x: -10 }} 
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-2 text-cyan-400 font-bold"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                                <span>Analyzing workspace AST graph & dependencies...</span>
                              </motion.div>
                            )}

                            {simStep >= 2 && (
                              <motion.div 
                                initial={{ opacity: 0, x: -10 }} 
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-2 text-text-primary"
                              >
                                <FileCode2 size={13} className="text-cyan-400 shrink-0" />
                                <span>Generating <span className="text-cyan-400 font-bold">{currentPrompt.file1}</span>...</span>
                              </motion.div>
                            )}

                            {simStep >= 3 && (
                              <motion.div 
                                initial={{ opacity: 0, x: -10 }} 
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-2 text-text-primary"
                              >
                                <FileCode2 size={13} className="text-purple-400 shrink-0" />
                                <span>Updating <span className="text-purple-400 font-bold">{currentPrompt.file2}</span>...</span>
                              </motion.div>
                            )}

                            {(isCompiled || simStep >= 3) && (
                              <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }} 
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-emerald-500/10 border border-emerald-500/30 p-2.5 rounded-lg text-emerald-400 text-[10px] font-bold shadow-xs"
                              >
                                {currentPrompt.result}
                              </motion.div>
                            )}
                          </div>
                        </div>

                        <div className="flex justify-between items-center pt-3 border-t border-white/10">
                          <button
                            onClick={triggerSimulatedBuild}
                            disabled={isCompiling}
                            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-xs font-extrabold text-slate-950 hover:bg-emerald-400 transition-all disabled:opacity-50 cursor-pointer shadow-md shadow-emerald-500/25 active:scale-95"
                          >
                            <Play size={12} className="fill-slate-950" />
                            <span>{isCompiling ? 'Running C++ Engine...' : 'Simulate Prompt'}</span>
                          </button>

                          {isCompiling && (
                            <span className="text-xs text-emerald-400 animate-pulse flex items-center gap-1.5">
                              <RefreshCw size={12} className="animate-spin" />
                              Compiling feature files...
                            </span>
                          )}
                          {isCompiled && !isCompiling && (
                            <span className="text-xs text-emerald-400 flex items-center gap-1.5 font-bold">
                              <CheckCircle size={14} className="text-emerald-400" />
                              Feature created & verified in 0.4 seconds!
                            </span>
                          )}
                          {!isCompiling && !isCompiled && <span className="text-xs text-text-secondary">Click button to test live simulation</span>}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Demo 2: Fix Bugs */}
                  {activeTab === 'fix' && (
                    <motion.div
                      key="fix"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="h-full flex flex-col text-xs font-mono"
                    >
                      <div className="border border-white/10 rounded-xl bg-[#0a0a0e] p-4 text-white flex-1 flex flex-col justify-between shadow-inner space-y-3">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                            <span className={`${isFixed ? 'text-emerald-400' : 'text-red-400'} font-bold flex items-center gap-1.5`}>
                              {isFixed ? (
                                <>✓ Error Resolved Successfully</>
                              ) : (
                                <>⚠️ Error Detected: Connection String Missing Port</>
                              )}
                            </span>
                            <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${isFixed ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                              {isFixed ? 'Repaired' : 'Action Required'}
                            </span>
                          </div>

                          {!isFixed ? (
                            <div className="bg-red-950/30 border border-red-500/20 p-2.5 rounded-lg text-red-300 text-[11px] space-y-1">
                              <div>- const db = connect_to_database("user_db")</div>
                              <div className="text-red-400 text-[10px] font-bold">Error: Connection string missing required port parameter!</div>
                            </div>
                          ) : (
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="bg-emerald-950/50 border border-emerald-500/40 p-2.5 rounded-lg text-emerald-300 text-[11px] space-y-1"
                            >
                              <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                                <CheckCircle size={13} /> AayaamX Smart Fix Applied:
                              </div>
                              <div className="font-bold text-emerald-300">+ const db = connect_to_database("user_db", 5432)</div>
                            </motion.div>
                          )}
                        </div>

                        <div className="border-t border-white/10 pt-3 flex items-center justify-between">
                          <span className="text-emerald-400 font-bold flex items-center gap-1 text-xs">
                            {isFixed ? (
                              <span className="text-emerald-400 flex items-center gap-1.5">
                                <CheckCircle size={14} />
                                0 compilation errors remaining!
                              </span>
                            ) : (
                              <span>Click "Apply Fix" to auto-repair</span>
                            )}
                          </span>
                          <button
                            onClick={handleApplyFix}
                            disabled={isFixing || isFixed}
                            className="bg-emerald-500 text-slate-950 font-bold px-4 py-2 rounded-lg text-xs hover:bg-emerald-400 transition-all disabled:opacity-50 cursor-pointer shadow-md shadow-emerald-500/20 active:scale-95 flex items-center gap-1.5"
                          >
                            {isFixing ? (
                              <>
                                <RefreshCw size={12} className="animate-spin" />
                                Applying Fix...
                              </>
                            ) : isFixed ? (
                              <>
                                <CheckCircle size={12} />
                                Repaired
                              </>
                            ) : (
                              <>
                                <Zap size={12} />
                                Apply Fix
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Demo 3: Private & Offline */}
                  {activeTab === 'private' && (
                    <motion.div
                      key="private"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="h-full flex flex-col justify-between text-xs"
                    >
                      <div className="border border-white/10 rounded-xl bg-[#0a0a0e] flex-1 flex flex-col items-center justify-center p-6 text-center space-y-4 shadow-inner">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-xl">
                          <Lock size={32} />
                        </div>

                        <div className="space-y-2 max-w-md">
                          <h4 className="text-lg font-bold text-text-primary">Your Code Never Leaves Your Laptop</h4>
                          <p className="text-xs text-text-secondary leading-relaxed">
                            AayaamX runs 100% offline using your device’s local hardware. Zero telemetry, zero cloud exposure, and zero monthly API costs.
                          </p>
                        </div>

                        <div className="flex items-center gap-4 text-xs font-mono text-emerald-400 font-bold pt-2">
                          <span className="bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">✓ 0 Bytes Sent Online</span>
                          <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20">✓ Works Without WiFi</span>
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
