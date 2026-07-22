import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Laptop, GitPullRequest, Smartphone, Sparkles, FileCode, CheckCircle2 } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function Problems() {
  const ecosystemItems = [
    {
      id: 'desktop',
      badge: 'Desktop IDE',
      title: 'Desktop Editor',
      description: 'Zero-latency editor buffer with C++ AST event loop built right in.',
      linkText: 'Download Desktop',
      linkUrl: '/download',
      accentColor: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
      mockup: (
        <div className="rounded-xl border border-border-primary bg-bg-secondary p-3 space-y-2 font-mono text-[11px]">
          <div className="flex items-center justify-between text-text-secondary text-[10px] border-b border-border-primary/60 pb-1.5">
            <span className="flex items-center gap-1.5 text-text-primary">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>src/main.rs</span>
            </span>
            <span className="text-emerald-400 font-bold">12ms</span>
          </div>
          <div className="text-text-primary text-[10px]">
            <span className="text-purple-400 font-bold">pub async fn</span> index() &#123;
          </div>
          <div className="text-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded text-[10px] font-bold">
            + local_ast.verify_signature()?
          </div>
        </div>
      ),
    },
    {
      id: 'terminal',
      badge: 'CLI Tool',
      title: 'Smart Shell Agent',
      description: 'Run local AI agents in any bash script, CI pipeline, or terminal window.',
      linkText: 'Install CLI Tool',
      linkUrl: '/download',
      accentColor: 'text-cyan-400',
      badgeBg: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
      mockup: (
        <div className="rounded-xl border border-border-primary bg-bg-secondary p-3 space-y-2 font-mono text-[11px]">
          <div className="flex items-center gap-1.5 text-text-secondary text-[10px] border-b border-border-primary/60 pb-1.5">
            <span className="w-2 h-2 rounded-full bg-red-400" />
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="ml-1 text-text-primary font-bold">aayaamx ~/repo</span>
          </div>
          <div className="text-cyan-400 text-[10px] font-bold">$ aayaamx audit --fix</div>
          <div className="text-emerald-400 text-[10px] font-bold">✓ 0 compilation breaks</div>
        </div>
      ),
    },
    {
      id: 'github',
      badge: 'GitHub Bot',
      title: 'PR Reviewer',
      description: 'Automatically audit pull requests for security flaws & unit test coverage.',
      linkText: 'Connect GitHub',
      linkUrl: '/download',
      accentColor: 'text-purple-400',
      badgeBg: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
      mockup: (
        <div className="rounded-xl border border-border-primary bg-bg-secondary p-3 space-y-2 font-mono text-[11px]">
          <div className="flex items-center justify-between text-text-primary text-[10px] font-bold border-b border-border-primary/60 pb-1.5">
            <span className="text-purple-400">#42 PR Review</span>
            <span className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded text-[9px]">Passed</span>
          </div>
          <div className="text-emerald-400 text-[10px]">✓ Zero memory leaks</div>
          <div className="text-cyan-400 text-[10px]">✓ Types fully checked</div>
        </div>
      ),
    },
    {
      id: 'mobile',
      badge: 'Mobile App',
      title: 'Mobile Companion',
      description: 'Review long-running agent tasks & server health directly on iOS & Android.',
      linkText: 'Get Mobile App',
      linkUrl: '/download',
      accentColor: 'text-amber-400',
      badgeBg: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
      mockup: (
        <div className="rounded-xl border border-border-primary bg-bg-secondary p-3 space-y-2 font-mono text-[11px]">
          <div className="flex items-center justify-between text-text-primary text-[10px] font-bold border-b border-border-primary/60 pb-1.5">
            <span>Build Monitor</span>
            <span className="text-emerald-400 text-[9px] font-bold">● Active</span>
          </div>
          <div className="text-text-secondary text-[10px]">Deploying to cluster...</div>
        </div>
      ),
    },
  ];

  return (
    <section id="ecosystem" className="py-20 md:py-28 bg-bg-secondary relative overflow-hidden border-b border-border-primary transition-colors duration-300">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none bg-grid-pattern opacity-25" />

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        
        {/* Simple Clean Section Header */}
        <div className="max-w-3xl mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary mb-3"
          >
            Everywhere You Work
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-text-secondary"
          >
            One AI agent across every runtime, terminal, and device.
          </motion.p>
        </div>

        {/* 4-Column Equal Grid (Matching Reference Image 2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {ecosystemItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <SpotlightCard className="p-6 h-full bg-bg-card border-border-primary flex flex-col justify-between group overflow-hidden shadow-md rounded-2xl hover:border-text-secondary/30 transition-all">
                <div className="space-y-4">
                  <span className={`text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border inline-block ${item.badgeBg}`}>
                    {item.badge}
                  </span>

                  <div>
                    <h3 className="text-lg font-bold text-text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed min-h-[36px]">
                      {item.description}
                    </p>
                  </div>

                  <Link
                    to={item.linkUrl}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold ${item.accentColor} hover:underline transition-all group/link pt-1`}
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>

                {/* Bottom UI Preview Frame */}
                <div className="mt-6 pt-4 border-t border-border-primary/60">
                  {item.mockup}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
