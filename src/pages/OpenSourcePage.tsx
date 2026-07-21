import React from 'react';
import { motion } from 'motion/react';
import HeroBackgroundAnimation from '../components/HeroBackgroundAnimation';
import MacTerminalHeader from '../components/MacTerminalHeader';
import { Heart, Github, Terminal, Check, Star, Code, ArrowRight } from 'lucide-react';

export default function OpenSourcePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-bg-primary text-text-primary min-h-screen transition-colors duration-300"
    >
      {/* Title Hero Section */}
      <section className="min-h-[100dvh] flex flex-col justify-center pt-20 md:pt-28 pb-12 border-b border-border-primary relative overflow-hidden bg-bg-primary transition-colors duration-300">
        <HeroBackgroundAnimation variant="page" />
        <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10 text-center my-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-[#10B981] text-xs font-bold tracking-widest uppercase font-mono mb-4">
              13. Core Ecosystem
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary leading-tight mb-6">
              Open-source foundation. <br />Commercial grade velocity.
            </h1>
            <p className="text-sm sm:text-lg text-text-secondary leading-relaxed">
              The core AST parsing libraries, LSP client adapters, and terminal emulation layers of AayaamX are completely open source under standard GPL-3.0 licensing. We believe collaborative inspection is key to absolute software privacy.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10 pt-20">

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-bg-secondary border border-border-primary rounded-xl p-8 hover:border-text-secondary/30 transition-all space-y-4 shadow-xs">
            <Code size={20} className="text-[#10B981]" />
            <h3 className="text-sm font-bold text-text-primary font-mono uppercase tracking-wide">Shared core architecture</h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              We compile our central Rust event pipeline in public repositories. Anyone can review, audit, or submit performance modifications to optimize compilation and vector calculations.
            </p>
          </div>

          <div className="bg-bg-secondary border border-border-primary rounded-xl p-8 hover:border-text-secondary/30 transition-all space-y-4 shadow-xs">
            <Heart size={20} className="text-[#10B981]" />
            <h3 className="text-sm font-bold text-text-primary font-mono uppercase tracking-wide">Community-backed extensions</h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              Our LSP and themes directory is fully open to community modifications. Contribute a plugin or customize parser settings for uncommon languages easily.
            </p>
          </div>
        </div>

        {/* Contribution section */}
        <div className="bg-bg-secondary border border-border-primary rounded-xl p-8 md:p-12 shadow-xs max-w-4xl mx-auto space-y-6">
          <h2 className="text-xl font-bold text-text-primary font-mono uppercase tracking-wide flex items-center gap-2 border-b border-border-primary pb-4">
            <Github size={16} /> Contributor Blueprint
          </h2>

          <p className="text-xs text-text-secondary leading-relaxed">
            Want to build a custom language adapter or improve Rust vector indexes? We welcome community contributions. Here is the standard checklist to compile AayaamX locally:
          </p>

          <div className="bg-[#0c0c0e] border border-white/10 rounded-xl overflow-hidden shadow-xl">
            <MacTerminalHeader title="zsh — 80x24">
              <span className="text-[10px] text-gray-400 font-mono">Build Command</span>
            </MacTerminalHeader>
            <div className="p-5 font-mono text-xs text-[#cccccc] space-y-2 bg-[#08080a]">
              <div><span className="text-[#666666]"># Clone the main repository</span></div>
              <div className="text-white">git clone https://github.com/aayaamx/core.git</div>
              <div><span className="text-[#666666]"># Initialize rust compilation toolchains</span></div>
              <div className="text-white">cargo build --release</div>
              <div><span className="text-[#666666]"># Run all background unit check scripts</span></div>
              <div className="text-white">cargo test</div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
