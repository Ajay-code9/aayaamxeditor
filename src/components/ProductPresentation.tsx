import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Shield, Play, CheckCircle, Sparkles, Zap, Wand2, Lock, FileCode2 } from 'lucide-react';
import MacTerminalHeader from './MacTerminalHeader';

export default function ProductPresentation() {
  const [activeTab, setActiveTab] = useState<'build' | 'fix' | 'private'>('build');
  const [isCompiling, setIsCompiling] = useState(false);
  const [isCompiled, setIsCompiled] = useState(false);

  function triggerSimulatedBuild() {
    setIsCompiling(true);
    setIsCompiled(false);
    setTimeout(() => {
      setIsCompiling(false);
      setIsCompiled(true);
    }, 1000);
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
              onClick={() => { setActiveTab('build'); setIsCompiled(false); }}
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
                Tell AayaamX what you want to build in plain English. It automatically generates and updates all necessary code files.
              </p>
            </button>

            {/* Feature 2 */}
            <button
              onClick={() => { setActiveTab('fix'); setIsCompiled(false); }}
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
              onClick={() => { setActiveTab('private'); setIsCompiled(false); }}
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
                <div className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md shadow-xs">
                  {activeTab === 'build' && '✨ Plain English AI Generator'}
                  {activeTab === 'fix' && '⚡ 1-Click Error Auto-Repair'}
                  {activeTab === 'private' && '🔒 100% Offline Vault'}
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
                          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs pb-2 border-b border-white/10">
                            <Sparkles size={14} />
                            <span>Your Prompt: "Add user login with password reset"</span>
                          </div>
                          
                          <div className="space-y-2 text-[11px]">
                            <div className="flex items-center gap-2 text-text-primary">
                              <FileCode2 size={13} className="text-cyan-400" />
                              <span>Generating <span className="text-cyan-400 font-bold">src/auth/login.ts</span>...</span>
                            </div>
                            <div className="flex items-center gap-2 text-text-primary">
                              <FileCode2 size={13} className="text-purple-400" />
                              <span>Updating <span className="text-purple-400 font-bold">src/database/users.db</span>...</span>
                            </div>
                            <div className="bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded-lg text-emerald-400 text-[10px]">
                              + Connected login API, database model, & security tokens cleanly!
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-between items-center pt-3 border-t border-white/10">
                          <button
                            onClick={triggerSimulatedBuild}
                            disabled={isCompiling}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-emerald-400 transition-all disabled:opacity-50 cursor-pointer shadow-md shadow-emerald-500/20"
                          >
                            <Play size={12} className="fill-slate-950" />
                            {isCompiling ? 'Generating...' : 'Simulate Prompt'}
                          </button>

                          {isCompiling && <span className="text-xs text-emerald-400 animate-pulse">Building feature files...</span>}
                          {isCompiled && !isCompiling && (
                            <span className="text-xs text-emerald-400 flex items-center gap-1.5 font-bold">
                              <CheckCircle size={13} />
                              Feature created in 0.8 seconds!
                            </span>
                          )}
                          {!isCompiling && !isCompiled && <span className="text-xs text-text-secondary">Click to test</span>}
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
                            <span className="text-red-400 font-bold flex items-center gap-1.5">
                              ⚠️ Error Detected: Typo in Database Connection
                            </span>
                            <span className="text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded">Action Required</span>
                          </div>

                          <div className="bg-red-950/30 border border-red-500/20 p-2.5 rounded-lg text-red-300 text-[11px] space-y-1">
                            <div>- const db = connect_to_database("user_db")</div>
                            <div className="text-red-400 text-[10px] font-bold">Error: Connection string missing port number!</div>
                          </div>

                          <div className="bg-emerald-950/40 border border-emerald-500/30 p-2.5 rounded-lg text-emerald-300 text-[11px] space-y-1">
                            <div className="font-bold text-emerald-400 flex items-center gap-1">
                              <Zap size={12} /> AayaamX Smart Fix:
                            </div>
                            <div>+ const db = connect_to_database("user_db", 5432)</div>
                          </div>
                        </div>

                        <div className="border-t border-white/10 pt-3 flex items-center justify-between">
                          <span className="text-emerald-400 font-bold flex items-center gap-1 text-xs">
                            <CheckCircle size={14} />
                            Click "Apply Fix" to auto-repair
                          </span>
                          <button className="bg-emerald-500 text-slate-950 font-bold px-3.5 py-1.5 rounded-lg text-xs hover:bg-emerald-400 transition-colors">
                            Apply Fix
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
