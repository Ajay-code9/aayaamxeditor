import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Zap,
  ShieldCheck,
  Cpu,
  Users,
  Check,
  ArrowRight,
  Lock,
  Server,
  Key,
  Share2,
  Code2,
  Terminal,
  Cloud,
  Laptop,
  Smartphone,
  Tablet,
  Monitor,
  GitBranch,
  Sparkles,
  RefreshCw,
  Search,
  CheckCircle2,
  Layers,
  Send,
  Globe,
  Database,
  TrendingUp,
  Clock,
  CheckSquare
} from 'lucide-react';

// 1. Core Value Pillars (Why AayaamX for Enterprise)
const VALUE_PILLARS = [
  {
    icon: <Zap size={20} className="text-emerald-400" />,
    title: '4x Faster Feature Velocity',
    desc: 'Empower your teams to ship features in days instead of sprints with integrated multi-file AI workspace reasoning.'
  },
  {
    icon: <Cpu size={20} className="text-emerald-400" />,
    title: 'Self-Correcting Compiler Loop',
    desc: 'Integrated background language server verifies edits in real time, automatically patching compiler errors before review.'
  },
  {
    icon: <Users size={20} className="text-emerald-400" />,
    title: 'Unified Team Context',
    desc: 'Share encrypted vector maps, active workspace states, and prompt templates across global engineering pods.'
  },
  {
    icon: <Clock size={20} className="text-emerald-400" />,
    title: '3x Faster Engineer Onboarding',
    desc: 'New hires explore multi-million line monorepos using natural language inquiries and start committing code on day one.'
  }
];

// 2. Streamlined Enterprise Capabilities (No Duplicate Cards!)
const ENTERPRISE_CAPABILITIES = [
  {
    icon: <Code2 size={20} className="text-emerald-400" />,
    title: 'Context-Aware AI Agent',
    desc: 'Sub-30ms inline autocomplete and multi-file code synthesis mapped directly to your proprietary monorepo architecture.'
  },
  {
    icon: <ShieldCheck size={20} className="text-emerald-400" />,
    title: 'Zero Data Retention (ZDR)',
    desc: 'Strict cryptographic privacy contracts guarantee your code is never saved, cached, or used to train external models.'
  },
  {
    icon: <Key size={20} className="text-emerald-400" />,
    title: 'SAML 2.0 & Okta SSO',
    desc: 'Centralize access management with native Okta, Azure AD, Ping Identity, and automated RBAC seat allocations.'
  },
  {
    icon: <Server size={20} className="text-emerald-400" />,
    title: 'Self-Hosted VPC Proxy',
    desc: 'Deploy private LLM proxies inside your AWS VPC, Google Cloud, or Azure subnet so zero telemetry leaves your firewall.'
  },
  {
    icon: <CheckSquare size={20} className="text-emerald-400" />,
    title: 'Automated AI Code Reviews',
    desc: 'Continuous pull-request verification checking logic edge cases, security regressions, and architectural rules.'
  },
  {
    icon: <GitBranch size={20} className="text-emerald-400" />,
    title: 'Deep Git & CI Integration',
    desc: 'Visual diff management, AI commit synthesis, and automatic branch conflict resolution built into the native editor.'
  }
];

// 3. Built for Scale (Team Segments)
const TEAM_SEGMENTS = [
  {
    tag: 'STARTUPS & SCALE-UPS',
    title: 'Ship at maximum velocity',
    desc: 'Eliminate boilerplate configuration and build groundbreaking products without inflating developer headcount.',
    benefits: ['Zero environment setup overhead', 'Instant team onboarding', 'Rapid feature iteration']
  },
  {
    tag: 'ENTERPRISE CORPORATIONS',
    title: 'Sovereign security & compliance',
    desc: 'Deploy self-hosted AI models behind corporate firewalls with guaranteed zero-retention contracts and audit logs.',
    benefits: ['Guaranteed Zero Data Retention (ZDR)', 'SAML 2.0 / Okta SSO integration', 'Dedicated SLA & Customer Success']
  }
];

// 4. Productivity Stats
const STATS = [
  { metric: '4.2x', label: 'Faster Delivery Cycle', detail: 'Shorter pull-request review times' },
  { metric: '68%', label: 'Less Repetitive Boilerplate', detail: 'Automated test & refactor generation' },
  { metric: '3x', label: 'Faster Onboarding', detail: 'Instant monorepo comprehension' },
  { metric: '99.9%', label: 'Context Vector Accuracy', detail: 'Zero hallucinated API references' }
];

// 5. Toolchain Integrations with Authentic SVG Logos
const TOOLCHAIN = [
  {
    name: 'GitHub',
    category: 'Source Control',
    icon: (
      <svg className="w-6 h-6 fill-current text-text-primary" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    )
  },
  {
    name: 'GitLab',
    category: 'DevOps Platform',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <path fill="#FC6D26" d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 015.5 2a.43.43 0 01.39.26l2.36 7.27h7.5l2.36-7.27a.43.43 0 01.39-.26.42.42 0 01.39.2l2.44 7.51 1.22 3.78a.84.84 0 01-.3.94z" />
        <path fill="#E24329" d="M12 22.13L1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78H5.5L12 22.13z" />
        <path fill="#FCA326" d="M2.27 9.67l-1.22 3.78a.84.84 0 00.3.94L12 22.13 5.5 9.67H2.27z" />
        <path fill="#E24329" d="M12 22.13l10.65-7.74a.84.84 0 00.3-.94l-1.22-3.78H18.5L12 22.13z" />
        <path fill="#FCA326" d="M21.73 9.67l1.22 3.78a.84.84 0 01-.3.94L12 22.13l6.5-12.46h3.23z" />
      </svg>
    )
  },
  {
    name: 'Bitbucket',
    category: 'Git Repository',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <path fill="#2684FF" d="M.778 1.213a.768.768 0 00-.768.892l3.263 19.81c.084.51.524.885 1.04.885h15.374a.768.768 0 00.762-.647L23.987 2.1a.768.768 0 00-.762-.887H.778zm13.77 12.871H9.429L8.35 8.172h7.323l-1.125 5.912z" />
      </svg>
    )
  },
  {
    name: 'VS Code',
    category: 'Extensions',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <path fill="#007ACC" d="M23.15 2.587L18.21.21a1.494 1.494 0 00-1.705.29l-9.46 8.63-4.41-3.32a.747.747 0 00-.91 0L.3 7.02a.747.747 0 000 1.08l4.08 3.9L.3 15.9a.747.747 0 000 1.08l1.42 1.21a.747.747 0 00.91 0l4.41-3.32 9.46 8.63c.49.45 1.21.57 1.705.29l4.94-2.377c.525-.25.855-.78.855-1.36V3.947c0-.58-.33-1.11-.855-1.36zm-6.52 14.52L10.3 12l6.33-5.107v10.214z" />
      </svg>
    )
  },
  {
    name: 'JetBrains',
    category: 'IDE Compatibility',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#000" />
        <path fill="#F42846" d="M4 4h8v8H4z" />
        <path fill="#FFC800" d="M12 4h8v8h-8z" />
        <path fill="#087CFA" d="M4 12h8v8H4z" />
        <path fill="#300080" d="M12 12h8v8h-8z" />
        <rect x="6" y="10" width="12" height="4" fill="#FFF" />
      </svg>
    )
  },
  {
    name: 'Slack',
    category: 'Team Communications',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <path fill="#E01E5A" d="M6 15a2.5 2.5 0 112.5-2.5V15H6zm0-6a2.5 2.5 0 112.5-2.5V9H6zm9.5 0a2.5 2.5 0 11-2.5-2.5H15.5V9zm0 6a2.5 2.5 0 11-2.5-2.5H15.5V15z" />
        <path fill="#36C5F0" d="M9 6a2.5 2.5 0 11-2.5 2.5H9V6zm6 0a2.5 2.5 0 11-2.5 2.5H15V6zm-6 9.5a2.5 2.5 0 11-2.5 2.5H9V15.5zm6 0a2.5 2.5 0 11-2.5 2.5H15V15.5z" />
        <path fill="#2EB67D" d="M18 9a2.5 2.5 0 11-2.5 2.5V9H18zm0 6a2.5 2.5 0 11-2.5 2.5V15H18z" />
        <path fill="#ECB22E" d="M15 18a2.5 2.5 0 112.5-2.5V18H15zm-6 0a2.5 2.5 0 112.5-2.5V18H9z" />
      </svg>
    )
  },
  {
    name: 'Docker',
    category: 'Containers',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <path fill="#2496ED" d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.954-4.542h2.118a.185.185 0 00.186-.186V4.463a.185.185 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.954 0h2.118a.185.185 0 00.186-.186V4.463a.185.185 0 00-.186-.185H8.075a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm5.908 4.542h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zM.003 14.502c0 2.215 1.579 4.394 4.34 5.342 3.844 1.321 8.895 1.321 12.739 0 2.378-.817 3.896-2.583 4.254-4.466.16-.844-.24-1.282-1.026-1.282h-19.28c-.786 0-1.027.438-1.027 1.282z" />
      </svg>
    )
  },
  {
    name: 'Terminal',
    category: 'CLI & Shell',
    icon: (
      <svg className="w-6 h-6 fill-none stroke-emerald-400 stroke-2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 17l6-6-6-6M12 19h8" />
      </svg>
    )
  },
  {
    name: 'AWS / GCP',
    category: 'Cloud VPC',
    icon: (
      <svg className="w-6 h-6 fill-none stroke-emerald-400 stroke-2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  }
];

export default function EnterprisePage() {
  const [activeTab, setActiveTab] = useState<'editor' | 'context' | 'security'>('editor');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    size: '50-200',
    message: ''
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.company) return;
    setSubmitted(true);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-bg-primary text-text-primary min-h-screen transition-colors duration-300 overflow-hidden"
    >
      {/* 1. HERO SECTION */}
      <section className="pt-24 sm:pt-32 pb-4 sm:pb-6 relative overflow-hidden bg-bg-primary">
        {/* Subtle Ambient Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[450px] bg-emerald-500/[0.04] blur-[180px] rounded-full pointer-events-none z-0" />

        <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10 text-center">

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-primary mb-6 max-w-5xl mx-auto leading-[1.12]">
            The Intelligent Development Platform Built for <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">Engineering Velocity</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto mb-10">
            Accelerate software delivery, unify team context, and enforce enterprise-grade security across every repository, IDE, and developer workflow.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#demo-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/25 transition-all duration-300 cursor-pointer"
            >
              <span>Request Enterprise Demo</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="#capabilities"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold bg-bg-card text-text-primary border border-border-primary hover:border-emerald-500/40 hover:bg-bg-secondary transition-all duration-300 cursor-pointer"
            >
              <span>Explore Capabilities</span>
            </a>
          </div>

          {/* Theme-Adaptive Editor Screenshots with Seamless Bottom Opacity Fade */}
          <div className="max-w-5xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-t-3xl blur-xl opacity-20 group-hover:opacity-35 transition duration-500 pointer-events-none" />

            <div
              className="relative rounded-t-2xl border-x border-t border-border-primary/80 overflow-hidden bg-bg-card shadow-2xl"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 95%)',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 95%)'
              }}
            >
              {/* Dark Theme Code Editor Screenshot */}
              <img
                src="/code-editornewblack.png"
                alt="AayaamX Editor Enterprise Dark Studio"
                className="hidden dark:block w-full h-auto object-cover rounded-t-2xl transition-all duration-300"
              />

              {/* Bright / Light Theme Code Editor Screenshot */}
              <img
                src="/code-editornewwhite.png"
                alt="AayaamX Editor Enterprise Light Studio"
                className="block dark:hidden w-full h-auto object-cover rounded-t-2xl transition-all duration-300"
              />

              {/* Bottom Gradient Fade Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg-primary via-bg-primary/85 to-transparent pointer-events-none z-10" />
            </div>
          </div>

        </div>
      </section>

      {/* 2. VALUE PILLARS */}
      <section className="pt-6 sm:pt-8 pb-16 sm:pb-20 border-b border-border-primary bg-bg-primary">
        <div className="mx-auto max-w-7xl px-6 md:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary mb-4">
              Why Engineering Leaders Choose AayaamX
            </h2>
            <p className="text-base text-text-secondary leading-relaxed">
              Designed to solve the core bottlenecks of modern software engineering teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUE_PILLARS.map((item, idx) => (
              <div
                key={idx}
                className="bg-bg-card border border-border-primary rounded-2xl p-6 hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 w-fit mb-4 group-hover:bg-emerald-500/20 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. STREAMLINED CAPABILITIES (NON-REPETITIVE!) */}
      <section id="capabilities" className="py-20 sm:py-24 border-b border-border-primary bg-bg-primary">
        <div className="mx-auto max-w-7xl px-6 md:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <span>ENTERPRISE PLATFORM</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary mb-4">
              Sovereign Capabilities & Controls
            </h2>
            <p className="text-base text-text-secondary leading-relaxed">
              A single platform combining intelligent code generation, security isolation, and centralized administration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENTERPRISE_CAPABILITIES.map((feat, idx) => (
              <div
                key={idx}
                className="bg-bg-card/70 border border-border-primary rounded-xl p-7 hover:border-emerald-500/40 hover:bg-bg-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 w-fit mb-4">
                    {feat.icon}
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-2 font-mono uppercase tracking-wide">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. BUILT FOR SCALE */}
      <section className="py-20 sm:py-24 border-b border-border-primary bg-bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 md:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary mb-4">
              Tailored for Every Stage of Engineering Growth
            </h2>
            <p className="text-base text-text-secondary leading-relaxed">
              Adaptable architecture designed for high-velocity teams and sovereign corporations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TEAM_SEGMENTS.map((team, idx) => (
              <div
                key={idx}
                className="bg-bg-card border border-border-primary rounded-2xl p-8 hover:border-emerald-500/50 shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-2xl rounded-full pointer-events-none" />

                <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider uppercase bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-md inline-block mb-4">
                  {team.tag}
                </span>

                <h3 className="text-2xl font-extrabold text-text-primary mb-3">
                  {team.title}
                </h3>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                  {team.desc}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-border-primary">
                  {team.benefits.map((item, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2.5 text-xs font-semibold text-text-primary">
                      <Check size={14} className="text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. PRODUCTIVITY METRICS */}
      <section className="py-20 sm:py-24 border-b border-border-primary bg-bg-primary">
        <div className="mx-auto max-w-7xl px-6 md:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary mb-4">
              Measurable Productivity Gains
            </h2>
            <p className="text-base text-text-secondary leading-relaxed">
              Empirical speed improvements verified across engineering organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="bg-bg-card border border-emerald-500/30 rounded-2xl p-6 text-center shadow-lg hover:border-emerald-500 transition-colors"
              >
                <div className="text-4xl sm:text-5xl font-black font-mono text-emerald-400 mb-2">
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

      {/* 6. TOOLCHAIN INTEGRATIONS */}
      <section className="py-20 sm:py-24 border-b border-border-primary bg-bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 md:px-8 text-center">

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary mb-4">
            Fits Natively into Your Toolchain
          </h2>
          <p className="text-base text-text-secondary max-w-2xl mx-auto mb-16">
            Seamlessly connects with your source control, CI/CD pipelines, and team channels.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {TOOLCHAIN.map((tool, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-bg-card border border-border-primary hover:border-emerald-500/40 transition-all flex flex-col items-center justify-center text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-bg-secondary border border-border-primary flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-emerald-500/40 transition-all shadow-xs">
                  {tool.icon}
                </div>
                <div className="text-xs font-bold text-text-primary">{tool.name}</div>
                <div className="text-[10px] text-text-secondary font-mono mt-0.5">{tool.category}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. CROSS-DEVICE ECOSYSTEM */}
      <section className="py-20 sm:py-24 border-b border-border-primary bg-bg-primary">
        <div className="mx-auto max-w-7xl px-6 md:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider uppercase bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-md inline-block mb-4">
                UNIFIED ECOSYSTEM
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary mb-6 leading-tight">
                One Workspace. <br />Any Device.
              </h2>
              <p className="text-base text-text-secondary leading-relaxed mb-8">
                Transition smoothly between your desktop workstation, laptop, tablet, or browser IDE. Your workspace state, active AI context, and open files remain perfectly in sync.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-bg-card border border-border-primary flex items-center gap-3">
                  <Monitor size={20} className="text-emerald-400 shrink-0" />
                  <span className="text-xs font-bold text-text-primary">Desktop Workstation</span>
                </div>
                <div className="p-4 rounded-xl bg-bg-card border border-border-primary flex items-center gap-3">
                  <Laptop size={20} className="text-emerald-400 shrink-0" />
                  <span className="text-xs font-bold text-text-primary">Laptop On-The-Go</span>
                </div>
                <div className="p-4 rounded-xl bg-bg-card border border-border-primary flex items-center gap-3">
                  <Globe size={20} className="text-emerald-400 shrink-0" />
                  <span className="text-xs font-bold text-text-primary">Browser Web IDE</span>
                </div>
                <div className="p-4 rounded-xl bg-bg-card border border-border-primary flex items-center gap-3">
                  <Tablet size={20} className="text-emerald-400 shrink-0" />
                  <span className="text-xs font-bold text-text-primary">Tablet & Mobile</span>
                </div>
              </div>
            </div>

            {/* Device Sync Illustration Card */}
            <div className="p-8 rounded-2xl bg-[#090b10] border border-emerald-500/30 shadow-2xl relative">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border-primary/50">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-300">
                  <RefreshCw size={14} className="animate-spin text-emerald-400" />
                  <span>Real-time Workspace State Sync: ACTIVE</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  LATENCY &lt; 12ms
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs text-text-secondary">
                <div className="p-3 rounded-lg bg-[#0e1219] border border-emerald-500/20 text-emerald-200">
                  <code>[SYNC ENGINE] Pushed cursor position (Line 142) to MacBook Pro</code>
                </div>
                <div className="p-3 rounded-lg bg-[#0e1219] border border-emerald-500/20 text-emerald-200">
                  <code>[CONTEXT VECTOR] Restored active AST graph for @aayaamx/core</code>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. REQUEST DEMO FORM & CLOSING CTA */}
      <section id="demo-form" className="py-20 sm:py-28 bg-bg-primary relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[400px] bg-emerald-500/10 blur-[180px] rounded-full pointer-events-none z-0" />

        <div className="mx-auto max-w-5xl px-6 md:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary mb-4">
              Build faster. Collaborate smarter. Ship with confidence.
            </h2>
            <p className="text-base text-text-secondary leading-relaxed">
              Transform your engineering team’s development speed with AayaamX Enterprise. Request a live custom demo with our solutions engineering team today.
            </p>
          </div>

          <div className="bg-bg-card border border-emerald-500/30 rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-extrabold text-text-primary">Demo Request Received</h3>
                <p className="text-sm text-text-secondary max-w-md mx-auto">
                  Thank you! Our Enterprise Solutions Engineering team will reach out to you within 2 business hours to schedule your live demonstration.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold text-text-primary uppercase tracking-wide mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-border-primary text-text-primary text-xs font-mono focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold text-text-primary uppercase tracking-wide mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-border-primary text-text-primary text-xs font-mono focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold text-text-primary uppercase tracking-wide mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Acme Engineering Corp"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-border-primary text-text-primary text-xs font-mono focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold text-text-primary uppercase tracking-wide mb-2">
                      Engineering Team Size
                    </label>
                    <select
                      value={form.size}
                      onChange={(e) => setForm({ ...form, size: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-border-primary text-text-primary text-xs font-mono focus:outline-none focus:border-emerald-500"
                    >
                      <option value="10-50">10-50 Engineers</option>
                      <option value="50-200">50-200 Engineers</option>
                      <option value="200-1000">200-1,000 Engineers</option>
                      <option value="1000+">1,000+ Engineers</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-text-primary uppercase tracking-wide mb-2">
                    How can we help your team?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your team size, security requirements, or custom AI deployment needs..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-border-primary text-text-primary text-xs font-mono focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-sm font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/25 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Submit Demo Request</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </motion.div>
  );
}
