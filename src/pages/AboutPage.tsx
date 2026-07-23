import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import HeroBackgroundAnimation from '../components/HeroBackgroundAnimation';
import {
  Zap,
  ShieldCheck,
  Cpu,
  Users,
  Compass,
  ArrowRight,
  Globe,
  Sparkles,
  CheckCircle2,
  Code2,
  Terminal,
  Lock,
  Layers,
  Github,
  Twitter
} from 'lucide-react';

const CORE_PRINCIPLES = [
  {
    icon: <Cpu size={22} className="text-emerald-400" />,
    title: 'Compiler-First Intelligence',
    description: 'We never present code suggestions that fail static validation. Our editor runs background compilation processes to guarantee type safety before rendering drafts.',
    accent: 'border-emerald-500/30 bg-emerald-500/5'
  },
  {
    icon: <ShieldCheck size={22} className="text-cyan-400" />,
    title: 'Absolute Local Privacy',
    description: 'Your source code is yours. All AST vectors, file path lookups, and context structures are calculated natively on your processor under strict Zero Data Retention contracts.',
    accent: 'border-cyan-500/30 bg-cyan-500/5'
  },
  {
    icon: <Zap size={22} className="text-purple-400" />,
    title: 'Sub-15ms Native C++ Speed',
    description: 'Every subsystem is engineered to sustain flow state. We replaced Electron bottlenecks with a native C++ event loop so typing latency remains sub-15ms even on 100K+ line repos.',
    accent: 'border-purple-500/30 bg-purple-500/5'
  },
  {
    icon: <Layers size={22} className="text-amber-400" />,
    title: 'Unified Workspace Context',
    description: 'Instead of an isolated AI sidebar, AayaamX holds a persistent memory vector map of your entire directory tree across terminal, desktop, and PR review workflows.',
    accent: 'border-amber-500/30 bg-amber-500/5'
  }
];

const LEADERSHIP_TEAM = [
  {
    name: 'Dr. Jay Luck',
    role: 'Founder & Chief Architect',
    background: 'Ex-Google Brain & Compiler Infrastructure',
    bio: 'Pioneered low-latency AST indexing algorithms. Obsessed with building software tools that feel instantaneous.',
    avatar: 'JL',
    avatarBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
  },
  {
    name: 'Elena Rostova',
    role: 'Head of Systems & Runtime',
    background: 'Ex-Linear Principal Systems Engineer',
    bio: 'Specializes in C++ event loop optimizations and cross-platform native thread scheduling for real-time developer IDEs.',
    avatar: 'ER',
    avatarBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40'
  },
  {
    name: 'Marcus Vance',
    role: 'VP of AI Research & Security',
    background: 'Ex-Stripe Infrastructure & Cryptography',
    bio: 'Leads local model quantization, zero-knowledge encryption protocols, and enterprise air-gapped deployment architectures.',
    avatar: 'MV',
    avatarBg: 'bg-purple-500/20 text-purple-400 border-purple-500/40'
  }
];

const GLOBAL_METRICS = [
  { metric: '50K+', label: 'Active Workspaces', detail: 'Developers using AayaamX daily' },
  { metric: 'Sub-15ms', label: 'Typing Latency', detail: 'Zero input lag under full load' },
  { metric: '100%', label: 'Offline Vault', detail: 'Zero telemetry data retention' },
  { metric: '99.9%', label: 'Vector Context Accuracy', detail: 'Zero hallucinated API imports' }
];

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-bg-primary text-text-primary min-h-screen transition-colors duration-300 overflow-hidden"
    >
      {/* 1. HERO SECTION */}
      <section className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 border-b border-border-primary relative overflow-hidden bg-bg-primary">
        {/* Subtle Animated Glowing Orbs & Motion Particles */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
            x: ['-50%', '-48%', '-50%'],
            y: ['-50%', '-52%', '-50%']
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 w-[700px] h-[350px] bg-gradient-to-r from-emerald-500/20 via-teal-500/15 to-emerald-500/10 blur-[150px] rounded-full pointer-events-none"
        />

        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/3 right-1/4 w-[400px] h-[250px] bg-cyan-500/15 blur-[130px] rounded-full pointer-events-none"
        />

        {/* Animated Subdued Grid Sweeper */}
        <div className="absolute inset-0 pointer-events-none bg-grid-pattern opacity-20" />
        
        <motion.div
          animate={{ y: ['-100%', '100%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-x-0 h-40 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent pointer-events-none"
        />
        
        <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-primary leading-[1.12]">
              Restoring Fluidity & Privacy to <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
                Software Engineering
              </span>
            </h1>
            
            <p className="text-base sm:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
              We built AayaamX because developer tools got slow, bloated, and dependent on cloud sidebars. We redesigned the code editor from the metal up to make programming feel fluid, local, and instantaneous.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/download"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/25 transition-all duration-300"
              >
                <span>Download AayaamX</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/documentation"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-bg-card text-text-primary border border-border-primary hover:border-emerald-500/40 hover:bg-bg-secondary transition-all duration-300"
              >
                <span>Read Documentation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE STORY & ENGINE ARCHITECTURE SHOWCASE */}
      <section className="py-16 sm:py-24 border-b border-border-primary bg-bg-secondary/40 relative">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          
          {/* Centered Top Section Badge */}
          <div className="flex justify-center mb-10">
            <div className="relative group inline-flex">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/40 via-teal-400/40 to-emerald-500/40 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition duration-300 pointer-events-none" />
              <span className="relative inline-flex items-center gap-2.5 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-emerald-300 bg-slate-950/90 border border-emerald-500/50 px-4 py-1.5 rounded-full backdrop-blur-xl shadow-lg">
                <Sparkles size={12} className="text-emerald-400 animate-pulse" />
                <span>WHY WE BUILT CODE AAYAAM</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Story Column */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
                AI Shouldn’t Be a Slow Sidebar Panel.
              </h2>
              
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                For years, developers were forced to copy and paste code back and forth between their editor and AI browser windows. Even existing AI extensions added heavy cloud latency, high RAM consumption, and data privacy concerns.
              </p>

              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Code Aayaam breaks this paradigm by embedding a native C++ language server, a zero-lag event loop, and lightweight offline AI intelligence directly into your editor buffer.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-text-primary">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>Sub-15ms input latency with native C++ AST parser</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-text-primary">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>100% offline local privacy with zero cloud telemetry</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-text-primary">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>Deep workspace reasoning across thousands of repository files</span>
                </div>
              </div>
            </div>

            {/* Right Visual Graphic Column */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-border-primary bg-bg-card shadow-2xl overflow-hidden group/img relative">
                <img
                  src="/aayaamx_about_engine_architecture.png"
                  alt="AayaamX C++ Native AI Engine Architecture"
                  className="w-full h-auto aspect-[16/9] object-cover group-hover/img:scale-[1.02] transition-transform duration-500"
                />
                
                <div className="p-4 sm:p-5 bg-bg-card/90 backdrop-blur-md border-t border-border-primary flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-text-primary">AayaamX C++ Engine Architecture</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                    Sub-15ms Loop
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. CORE PRINCIPLES GRID */}
      <section className="py-20 sm:py-28 border-b border-border-primary bg-bg-primary">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-md inline-block mb-3">
              OUR ENGINEERING VALUES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary mb-4">
              Built on 4 Core Principles
            </h2>
            <p className="text-base text-text-secondary leading-relaxed">
              Every feature we design adheres to strict standards of performance, security, and developer ergonomics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_PRINCIPLES.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border ${item.accent} p-7 space-y-4 shadow-lg hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between`}
              >
                <div className="space-y-3">
                  <div className="p-2.5 rounded-xl bg-bg-secondary border border-border-primary w-fit">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-extrabold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CORE LEADERSHIP & FOUNDING TEAM */}
      <section className="py-20 sm:py-28 border-b border-border-primary bg-bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-md inline-block mb-3">
              THE TEAM BEHIND AAYAAMX
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary mb-4">
              Engineered by Systems Pioneers
            </h2>
            <p className="text-base text-text-secondary leading-relaxed">
              Built by a distributed group of principal systems engineers, compiler creators, and infrastructure architects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {LEADERSHIP_TEAM.map((member, idx) => (
              <div
                key={idx}
                className="bg-bg-card border border-border-primary rounded-2xl p-7 shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center text-sm font-extrabold ${member.avatarBg}`}>
                      {member.avatar}
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-text-primary">{member.name}</h4>
                      <p className="text-xs font-semibold text-emerald-400">{member.role}</p>
                    </div>
                  </div>

                  <p className="text-xs text-text-secondary leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-primary/60 flex items-center justify-between text-xs text-text-secondary">
                  <span className="font-semibold text-text-primary">{member.background}</span>
                  <div className="flex items-center gap-2 text-text-secondary hover:text-emerald-400 transition-colors">
                    <Github size={15} />
                    <Twitter size={15} />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. GLOBAL IMPACT METRICS */}
      <section className="py-20 sm:py-24 border-b border-border-primary bg-bg-primary">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary mb-4">
              Proven Performance Across Global Teams
            </h2>
            <p className="text-base text-text-secondary leading-relaxed">
              Empirical engineering benchmarks verified across thousands of developer environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GLOBAL_METRICS.map((stat, idx) => (
              <div
                key={idx}
                className="bg-bg-card border border-emerald-500/30 rounded-2xl p-7 text-center shadow-lg hover:border-emerald-500 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl font-black text-emerald-400 mb-2">
                  {stat.metric}
                </div>
                <div className="text-sm font-bold text-text-primary mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-text-secondary">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. JOIN THE MOVEMENT CLOSING CTA */}
      <section className="py-20 sm:py-28 bg-bg-secondary/60 relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 md:px-8 text-center relative z-10 space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-md inline-block">
            READY TO EXPERIENCE AAYAAMX?
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary">
            Join Thousands of High-Velocity Engineers
          </h2>

          <p className="text-base text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Download AayaamX Editor today and experience sub-15ms native code editing with zero cloud data retention.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/download"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/25 transition-all duration-300"
            >
              <span>Download Desktop Editor</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
