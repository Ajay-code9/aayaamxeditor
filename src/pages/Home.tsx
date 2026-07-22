import React from 'react';
import Hero from '../components/Hero';
import Problems from '../components/Problems';
import ProductPresentation from '../components/ProductPresentation';
import Performance from '../components/Performance';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* 1. Prime Hero Banner with Logo Cloud */}
      <Hero />

      {/* 2. Multi-Surface Ecosystem Showcase */}
      <Problems />

      {/* 3. Interactive Product Experience Studio Canvas */}
      <ProductPresentation />

      {/* 4. Speed & Performance Benchmarks */}
      <Performance />

      {/* 5. High-Trust Developer Testimonials & GitHub Proof */}
      <Testimonials />

      {/* 6. Compact Viewport Pricing Section */}
      <Pricing />

      {/* 7. High-Conversion CTA Banner */}
      <section className="py-20 bg-bg-primary border-b border-border-primary relative overflow-hidden transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 md:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight mb-4">
            Ready to Code Faster with AayaamX?
          </h2>

          <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl mx-auto mb-8">
            Install AayaamX today. Works 100% offline with zero setup required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/download"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-8 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400 cursor-pointer"
            >
              <Download size={14} />
              <span>Download Free Editor</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center rounded-xl border border-border-primary bg-bg-card px-8 py-3.5 text-xs font-semibold text-text-primary hover:bg-bg-secondary transition-all cursor-pointer shadow-xs"
            >
              View Pricing Matrix
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Frequently Answered Technical Questions */}
      <FAQ />
    </motion.div>
  );
}
