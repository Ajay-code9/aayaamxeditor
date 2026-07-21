import React from 'react';
import { motion } from 'motion/react';
import HeroBackgroundAnimation from '../components/HeroBackgroundAnimation';
import { BookOpen, Compass, Shield, Users, Globe, Eye, ArrowRight, Heart } from 'lucide-react';

const TEAM = [
  { name: 'Dr. Jay Luck', role: 'Founder & Compiler Core', company: 'Ex-Google Brain' },
  { name: 'Elena Rostova', role: 'Principal systems engineer', company: 'Ex-Linear' },
  { name: 'Marcus Vance', role: 'Lead Architect', company: 'Ex-Stripe Engine' },
];

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-bg-primary text-text-primary min-h-screen transition-colors duration-300"
    >
      {/* Brand Manifesto Hero Section */}
      <section className="min-h-[100dvh] flex flex-col justify-center pt-20 md:pt-28 pb-12 border-b border-border-primary relative overflow-hidden bg-bg-primary transition-colors duration-300">
        <HeroBackgroundAnimation variant="page" />
        <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10 text-center my-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-[#10B981] text-xs font-bold tracking-widest uppercase font-mono mb-4">
              06. Origin Manifesto
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary leading-tight mb-6">
              We believe programming should be fluid.
            </h1>
            <p className="text-sm sm:text-lg text-text-secondary leading-relaxed">
              AI is often treated as an extra sidebar panel that you continuously copy and paste code back and forth to. We designed AayaamX to completely unify the language server, the active terminal, and the compiler buffer into a single, high-performance native event loop.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10 pt-16 md:pt-20 pb-20">

        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-bg-secondary border border-border-primary rounded-xl p-8 space-y-4 shadow-xs">
            <Compass size={20} className="text-[#10B981]" />
            <h3 className="text-sm font-bold text-text-primary font-mono uppercase tracking-wide">
              Compiler-first context
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              We never present code suggestions that fail static validation. Our editor runs background compiling processes to guarantee type safety before rendering drafts.
            </p>
          </div>
          <div className="bg-bg-secondary border border-border-primary rounded-xl p-8 space-y-4 shadow-xs">
            <Shield size={20} className="text-[#10B981]" />
            <h3 className="text-sm font-bold text-text-primary font-mono uppercase tracking-wide">
              Absolute Local Privacy
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              Your source code is yours. All AST vectors, path lookups, and context structures are calculated natively on your processor under strict Zero Data Retention policies.
            </p>
          </div>
          <div className="bg-bg-secondary border border-border-primary rounded-xl p-8 space-y-4 shadow-xs">
            <Users size={20} className="text-[#10B981]" />
            <h3 className="text-sm font-bold text-text-primary font-mono uppercase tracking-wide">
              Craftsmanship & Flow
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              Every detail is engineered to sustain concentration. We optimize for high-fps typing rendering and keyboard shortcuts so your fingers never leave the command matrix.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="border-t border-border-primary pt-20">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl font-extrabold text-text-primary tracking-tight">
              Our Core Architect Group
            </h2>
            <p className="text-xs text-text-secondary mt-1.5">
              AayaamX is built by a distributed group of principal systems engineers who love high-performance compilers and clean UX.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member, idx) => (
              <div key={idx} className="bg-bg-secondary border border-border-primary rounded-xl p-6 shadow-xs flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-text-primary font-mono uppercase">{member.name}</h4>
                  <p className="text-[11px] text-[#10B981] font-mono uppercase tracking-wider">{member.role}</p>
                </div>
                <div className="pt-4 mt-6 border-t border-border-primary text-[10px] text-text-secondary/80 font-mono">
                  {member.company}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Stats Callout */}
        <div className="mt-24 rounded-2xl bg-bg-secondary border border-border-primary p-8 md:p-12 shadow-xs flex flex-col md:flex-row gap-12 items-center justify-between">
          <div className="space-y-4 max-w-md">
            <h3 className="text-xl font-bold text-text-primary tracking-tight">
              A global community of high-velocity developers.
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              From individual hackers to enterprise engineering orgs, AayaamX is restoring fluidity to thousands of terminal configurations globally.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 shrink-0">
            <div className="space-y-1">
              <div className="text-3xl font-extrabold text-text-primary tracking-tight font-mono">50K+</div>
              <div className="text-[9px] font-mono font-bold text-text-secondary/80 uppercase">ACTIVE WORKSPACES</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-extrabold text-[#10B981] tracking-tight font-mono">1.2ms</div>
              <div className="text-[9px] font-mono font-bold text-text-secondary/80 uppercase">INPUT LATENCY</div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
