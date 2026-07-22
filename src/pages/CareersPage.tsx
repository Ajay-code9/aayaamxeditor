import React from 'react';
import { motion } from 'motion/react';
import HeroBackgroundAnimation from '../components/HeroBackgroundAnimation';
import { Briefcase, MapPin, DollarSign, Clock, ArrowRight, Heart, Shield, Cpu } from 'lucide-react';

const JOBS = [
  {
    title: 'Senior Compiler Systems Engineer (Rust / C++)',
    department: 'Engineering',
    location: 'Remote (US/EU)',
    salary: '$180K - $230K • 0.25% Equity',
    desc: 'Optimize the real-time language server and background file compiling hooks directly in our native buffer core.'
  },
  {
    title: 'Lead Machine Learning Research Architect',
    department: 'Research',
    location: 'Remote (Global)',
    salary: '$200K - $250K • 0.3% Equity',
    desc: 'Fine-tune low-latency local inference models to run efficiently on unified Apple M-series and DirectML GPU devices.'
  },
  {
    title: 'Product Designer - Ideation & IDE Interfaces',
    department: 'Product & Design',
    location: 'San Francisco, CA / Remote',
    salary: '$140K - $185K • 0.15% Equity',
    desc: 'Help design fluid, keyboard-centric interface paradigms that completely remove sidebar friction.'
  }
];

export default function CareersPage() {
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
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-primary leading-tight mb-6">
              Build the future of <br />developer flow.
            </h1>
            <p className="text-sm sm:text-lg text-text-secondary leading-relaxed">
              We are a compact, sovereign group of developers who love fast compilers, zero garbage collection, and elegant design. If you believe the editor should feel like an extension of the mind itself, we’d love to compile together.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10 pt-20">

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-bg-secondary border border-border-primary rounded-xl p-8 space-y-4 shadow-xs">
            <Heart size={20} className="text-[#10B981]" />
            <h3 className="text-sm font-bold text-text-primary font-mono uppercase tracking-wide">Autonomy & Trust</h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              We work completely distributed and async. We measure contribution solely by code quality, architectural consistency, and user satisfaction—not time sheets.
            </p>
          </div>
          <div className="bg-bg-secondary border border-border-primary rounded-xl p-8 space-y-4 shadow-xs">
            <Shield size={20} className="text-[#10B981]" />
            <h3 className="text-sm font-bold text-text-primary font-mono uppercase tracking-wide">Top-tier Compensation</h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              We offer premium baseline salaries paired with meaningful, direct equity percentages in our primary labs. Full medical and hardware allowances.
            </p>
          </div>
          <div className="bg-bg-secondary border border-border-primary rounded-xl p-8 space-y-4 shadow-xs">
            <Cpu size={20} className="text-[#10B981]" />
            <h3 className="text-sm font-bold text-text-primary font-mono uppercase tracking-wide">Premium Workstation</h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              Get an immediate hardware allowance to purchase any M3/M4 workstation, heavy computing racks, 4K displays, and custom orthopedic seating.
            </p>
          </div>
        </div>

        {/* Jobs List */}
        <div className="border-t border-border-primary pt-20">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl font-extrabold text-text-primary tracking-tight">Active Opportunities</h2>
            <p className="text-xs text-text-secondary mt-1.5">
              Review our currently open positions. All roles are remote-friendly and support flexible country relocation frameworks.
            </p>
          </div>

          <div className="space-y-6">
            {JOBS.map((job, idx) => (
              <div 
                key={idx}
                className="bg-bg-secondary border border-border-primary rounded-xl p-8 hover:border-text-secondary/30 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xs group"
              >
                <div className="space-y-3 max-w-2xl">
                  <span className="inline-block text-[9px] font-mono font-bold uppercase tracking-wider bg-[#10B981]/5 border border-[#10B981]/10 text-[#10B981] px-2.5 py-0.5 rounded">
                    {job.department}
                  </span>
                  <h3 className="text-lg font-bold text-text-primary group-hover:text-[#10B981] transition-colors leading-tight">
                    {job.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {job.desc}
                  </p>
                  
                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 pt-1 text-[10px] font-mono text-text-secondary/80 uppercase">
                    <span className="flex items-center gap-1"><MapPin size={11} /> {job.location}</span>
                    <span className="flex items-center gap-1"><DollarSign size={11} /> {job.salary}</span>
                  </div>
                </div>

                <a 
                  href="mailto:careers@aayaamx.com" 
                  className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-text-primary text-bg-primary px-5 py-3 text-xs font-semibold hover:opacity-90 transition-all shrink-0 w-full md:w-auto text-center"
                >
                  Apply Role
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
