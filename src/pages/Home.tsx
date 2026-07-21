import React from 'react';
import Hero from '../components/Hero';
import Problems from '../components/Problems';
import AIStory from '../components/AIStory';
import ProductPresentation from '../components/ProductPresentation';
import Performance from '../components/Performance';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import { motion } from 'motion/react';
import { ArrowRight, Terminal, Cpu, ShieldAlert, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Prime Hero Banner */}
      <Hero />

      {/* Narrative Problem Statement */}
      <Problems />

      {/* Visual Product Showcase Tabs */}
      <ProductPresentation />

      {/* AI Memory Agent Pipeline story block */}
      <AIStory />

      {/* Interactive Performance Benchmarks */}
      <Performance />

      {/* Premium High-trust Testimonials */}
      <Testimonials />

      {/* Visual CTA block to drive direct conversion */}
      <section className="py-20 bg-bg-secondary border-b border-border-primary transition-colors duration-300">
        <div className="mx-auto max-w-5xl px-6 md:px-8 text-center">
          <div className="text-[#10B981] text-xs font-bold tracking-widest uppercase font-mono mb-4">
            EXPERIENCE THE UNIFICATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight mb-6 max-w-2xl mx-auto">
            Ready to completely detach the AI from the sidebar?
          </h2>
          <p className="text-base text-text-secondary leading-relaxed max-w-lg mx-auto mb-10">
            AayaamX runs entirely on a native, offline-capable event loop. Install our core binary and experience zero-latency code synthesis tonight.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/download"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#10B981] px-8 py-4 text-xs font-bold text-white shadow-md transition-all hover:bg-[#059669]"
            >
              Get Free Installation
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center rounded-full border border-border-primary bg-bg-primary px-8 py-4 text-xs font-semibold text-text-primary shadow-xs transition-all hover:bg-bg-secondary"
            >
              View Pricing Matrix
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Teaser / Matrix Redirect */}
      <Pricing />

      {/* Frequently Answered Technical Questions */}
      <FAQ />
    </motion.div>
  );
}
