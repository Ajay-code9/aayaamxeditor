import React from 'react';
import { motion } from 'motion/react';
import HeroBackgroundAnimation from '../components/HeroBackgroundAnimation';
import MacTerminalHeader from '../components/MacTerminalHeader';
import { Code, Terminal, Key, Shield, ArrowRight, BookOpen, Layers } from 'lucide-react';

export default function ApiPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-bg-primary text-text-primary min-h-screen transition-colors duration-300"
    >
      {/* Header Hero Section */}
      <section className="min-h-[100dvh] flex flex-col justify-center pt-20 md:pt-28 pb-12 border-b border-border-primary relative overflow-hidden bg-bg-primary transition-colors duration-300">
        <HeroBackgroundAnimation variant="page" />
        <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10 text-center my-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-[#10B981] text-xs font-bold tracking-widest uppercase font-mono mb-4">
              12. Integration Core
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary leading-tight mb-6">
              Local Programmatic API
            </h1>
            <p className="text-sm sm:text-lg text-text-secondary leading-relaxed">
              Configure, manage, and query your localized AayaamX background processes programmatically over secure local RPC tunnels.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10 pt-20">

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Docs panel */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-bg-secondary border border-border-primary rounded-xl p-8 space-y-6 shadow-xs">
              <h3 className="text-sm font-bold text-text-primary font-mono uppercase tracking-wide border-b border-border-primary pb-3">Endpoint: Index Workspace</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Initialize an incremental background index sweep of a project folder. The endpoint generates and updates the local SQLite AST vector map securely.
              </p>

              <div className="space-y-4 font-mono text-xs text-text-secondary">
                <div className="flex justify-between border-b border-border-primary pb-1">
                  <span className="font-bold text-text-primary">Protocol</span>
                  <span>JSON-RPC 2.0</span>
                </div>
                <div className="flex justify-between border-b border-border-primary pb-1">
                  <span className="font-bold text-text-primary">Method</span>
                  <span className="text-[#10B981]">workspace/index</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-text-primary">Authentication</span>
                  <span>Local token handshake</span>
                </div>
              </div>
            </div>

            <div className="bg-bg-secondary border border-border-primary rounded-xl p-8 space-y-4 shadow-xs">
              <h4 className="text-xs font-bold text-text-primary font-mono uppercase tracking-wide">Developer Handshake</h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                AayaamX exposes an isolated localhost port when starting. External processes or pre-commit scripts can hand off codeblocks to trigger local linter verification cycles directly.
              </p>
            </div>
          </div>

          {/* Code display panel */}
          <div className="lg:col-span-6 bg-[#0c0c0e] border border-white/10 rounded-2xl shadow-2xl h-[400px] flex flex-col overflow-hidden">
            <MacTerminalHeader title="index_request.json">
              <span className="text-[10px] text-emerald-400 font-mono font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">RPC COMPLIANT</span>
            </MacTerminalHeader>

            <div className="flex-1 font-mono text-xs text-[#cccccc] p-6 overflow-auto select-all leading-relaxed whitespace-pre bg-[#08080a]">
{`{
  "jsonrpc": "2.0",
  "method": "workspace/index",
  "params": {
    "path": "./src",
    "exclude": [
      "**/node_modules/**",
      "**/dist/**"
    ],
    "options": {
      "rebuildVectorMap": true,
      "enableTypes": true
    }
  },
  "id": "req-102"
}`}
            </div>

            <div className="pt-4 border-t border-[#161616] text-[10px] font-mono text-gray-600 flex justify-between">
              <span>Host: localhost:4480</span>
              <span>TLS 1.3 tunnels only</span>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
