import React from 'react';
import { motion } from 'motion/react';
import HeroBackgroundAnimation from '../components/HeroBackgroundAnimation';
import { MessageSquare, Quote, Star, CheckCircle2, ArrowRight } from 'lucide-react';

const CASE_STUDIES = [
  {
    company: 'Linear Systems',
    author: 'Elena Rostova, Principal Systems Engineer',
    metric: '92% completion match accuracy',
    summary: 'Elena’s team migrated their multi-file mono-repository settings to AayaamX. Within three weeks, the in-memory AST compiler decreased typical refactoring handshakes from minutes to single-digit seconds, with compiled code matching requirements safely on the first build.'
  },
  {
    company: 'Stripe Billing',
    author: 'Marcus Vance, Lead Architect',
    metric: '4x improvement in loop iteration speeds',
    summary: 'Marcus and his squad wanted to eliminate typical extension lag micro-stutters during high-concentration periods. Integrating the model pipeline directly inside the native Rust event loop resolved stutters and increased team velocity.'
  }
];

export default function CustomersPage() {
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
              10. Verified Impact
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary leading-tight mb-6">
              Trusted by architects <br />of modern infrastructure.
            </h1>
            <p className="text-sm sm:text-lg text-text-secondary leading-relaxed">
              See how lead engineers and platform groups at top-tier software organizations migrated from extension-based environments to AayaamX Native.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10 pt-20">

        {/* Case Studies Alternate Layout */}
        <div className="space-y-16">
          {CASE_STUDIES.map((cs, idx) => (
            <div 
              key={idx}
              className="bg-bg-secondary border border-border-primary rounded-xl p-8 md:p-12 shadow-xs flex flex-col lg:flex-row gap-12 items-start"
            >
              {/* Left Column stats */}
              <div className="lg:w-1/3 space-y-4 shrink-0">
                <span className="text-[#10B981] text-[10px] font-mono font-bold uppercase tracking-widest block">
                  CASE MATRIX {idx + 1}
                </span>
                <h3 className="text-2xl font-extrabold text-text-primary font-mono uppercase tracking-tight">
                  {cs.company}
                </h3>
                <div className="text-xs font-mono text-emerald-600 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 size={13} /> {cs.metric}
                </div>
                <div className="text-[10px] font-mono text-text-secondary pt-2">
                  Verifying Client: {cs.author}
                </div>
              </div>

              {/* Right Column Summary */}
              <div className="flex-1 space-y-6">
                <div className="text-text-primary/10 text-6xl font-serif leading-none select-none">“</div>
                <p className="text-sm sm:text-base text-text-primary/90 leading-relaxed italic -mt-8 font-medium">
                  {cs.summary}
                </p>
                <div className="text-text-primary/10 text-6xl font-serif leading-none text-right select-none">”</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </motion.div>
  );
}
