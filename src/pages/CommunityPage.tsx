import React from 'react';
import { motion } from 'motion/react';
import HeroBackgroundAnimation from '../components/HeroBackgroundAnimation';
import { Github, Users, Calendar, ArrowRight, MessageSquare, Heart, Code } from 'lucide-react';

export default function CommunityPage() {
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
              11. Social Synergy
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary leading-tight mb-6">
              Join the compiler group.
            </h1>
            <p className="text-sm sm:text-lg text-text-secondary leading-relaxed">
              Collaborate, discuss, and request features alongside thousands of other developers shaping the future of compiler-first software generation.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10 pt-20">

        {/* Link Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-bg-secondary border border-border-primary rounded-xl p-8 hover:border-text-secondary/30 transition-all flex flex-col justify-between h-[280px] shadow-xs group">
            <div className="space-y-4">
              <Github size={24} className="text-text-primary" />
              <h3 className="text-sm font-bold text-text-primary font-mono uppercase tracking-wide">GitHub Repository</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Browse our open-source package extensions, read source code, submit diagnostic pull-requests, or upvote feature requests.
              </p>
            </div>
            <a href="#" className="text-xs font-mono font-bold text-[#10B981] flex items-center gap-1 group-hover:underline">
              Explore codebase <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="bg-bg-secondary border border-border-primary rounded-xl p-8 hover:border-text-secondary/30 transition-all flex flex-col justify-between h-[280px] shadow-xs group">
            <div className="space-y-4">
              <MessageSquare size={24} className="text-[#10B981]" />
              <h3 className="text-sm font-bold text-text-primary font-mono uppercase tracking-wide">Discord Server</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Connect with our core maintainers instantly. Share workspace setups, custom shortcuts, or seek instant hardware tips.
              </p>
            </div>
            <a href="#" className="text-xs font-mono font-bold text-[#10B981] flex items-center gap-1 group-hover:underline">
              Join active server <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="bg-bg-secondary border border-border-primary rounded-xl p-8 hover:border-text-secondary/30 transition-all flex flex-col justify-between h-[280px] shadow-xs group">
            <div className="space-y-4">
              <Users size={24} className="text-text-primary" />
              <h3 className="text-sm font-bold text-text-primary font-mono uppercase tracking-wide">Developer Forums</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Read technical tutorials, follow release announcements, and post custom questions about specialized compiler-first features.
              </p>
            </div>
            <a href="#" className="text-xs font-mono font-bold text-[#10B981] flex items-center gap-1 group-hover:underline">
              Browse publications <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Global event highlights */}
        <div className="bg-bg-secondary border border-border-primary rounded-xl p-8 md:p-12 shadow-xs max-w-4xl mx-auto space-y-8">
          <h2 className="text-xl font-bold text-text-primary font-mono uppercase tracking-wide pb-4 border-b border-border-primary flex items-center gap-2">
            <Calendar size={16} className="text-[#10B981]" /> Upcoming Community Events
          </h2>
          <div className="space-y-6 text-xs font-mono">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-2 border-b border-border-primary gap-2">
              <div>
                <div className="font-bold text-text-primary uppercase">AayaamX Core v1.1 Architecture Deep-Dive</div>
                <div className="text-text-secondary/70 mt-0.5">Online stream with Dr. Jay Luck</div>
              </div>
              <span className="text-[#10B981] font-bold shrink-0">AUGUST 12, 2026</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-2 border-b border-border-primary gap-2">
              <div>
                <div className="font-bold text-text-primary uppercase">Local GPU Model fine-tuning Workshop</div>
                <div className="text-text-secondary/70 mt-0.5">Discord live hacking session</div>
              </div>
              <span className="text-[#10B981] font-bold shrink-0">SEPTEMBER 04, 2026</span>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
