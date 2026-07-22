import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PRICING_TIERS } from '../data';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="py-12 md:py-16 bg-bg-secondary border-b border-border-primary relative overflow-hidden transition-colors duration-300">
      {/* Top Emerald Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[400px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        
        {/* Editorial Heading */}
        <div className="max-w-2xl mx-auto text-center mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-text-primary mb-2"
          >
            Simple, Developer-Friendly Plans.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-xs sm:text-sm text-text-secondary leading-snug max-w-lg mx-auto"
          >
            Start building for free with local offline models, or upgrade for cloud model fallbacks and team collaboration.
          </motion.p>
        </div>

        {/* Monthly / Yearly Toggle Pill Tab */}
        <div className="flex justify-center mb-6 relative z-10">
          <div className="inline-flex items-center p-1 rounded-full bg-bg-card border border-border-primary shadow-lg transition-colors">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-1.5 text-[11px] font-bold rounded-full transition-all duration-300 cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30'
                  : 'text-text-primary hover:text-emerald-500'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-5 py-1.5 text-[11px] font-bold rounded-full transition-all duration-300 cursor-pointer ${
                billingCycle === 'yearly'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30'
                  : 'text-text-primary hover:text-emerald-500'
              }`}
            >
              Yearly <span className={`ml-1 text-[9px] font-bold ${
                billingCycle === 'yearly' ? 'text-slate-950' : 'text-emerald-500 bg-emerald-500/10 border border-emerald-500/30 px-1.5 py-0.5 rounded-full'
              }`}>(Save 20%)</span>
            </button>
          </div>
        </div>

        {/* Compact Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
          {PRICING_TIERS.map((tier, idx) => {
            // Price calculation for monthly vs yearly display
            const displayPrice = billingCycle === 'yearly' && tier.name === 'Pro' 
              ? '$16' 
              : tier.price;

            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={tier.popular ? 'lg:scale-[1.02] z-10' : ''}
              >
                <SpotlightCard
                  className={`p-5 sm:p-6 flex flex-col justify-between h-full relative rounded-xl transition-all duration-300 bg-bg-card border-border-primary dark:bg-[#09090d] ${
                    tier.popular 
                      ? 'border-emerald-500/60 shadow-xl shadow-emerald-500/10 dark:bg-[#0c0c12]' 
                      : 'hover:border-text-secondary/40'
                  }`}
                >
                  {/* Card Content Top Section */}
                  <div>
                    {/* Tier Name */}
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold text-text-primary tracking-tight">
                        {tier.name}
                      </h3>
                      {tier.popular && (
                        <span className="rounded-full bg-emerald-500/20 border border-emerald-400/30 px-2.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-emerald-400">
                          Popular
                        </span>
                      )}
                      {tier.name === 'Enterprise' && (
                        <ShieldCheck size={18} className="text-emerald-400" />
                      )}
                    </div>

                    {/* Price Display */}
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
                        {displayPrice}
                      </span>
                      {tier.period && (
                        <span className="text-[10px] font-medium text-text-secondary font-mono">
                          / {billingCycle === 'yearly' ? 'mo (billed yearly)' : tier.period}
                        </span>
                      )}
                    </div>

                    {/* Tier Description */}
                    <p className="text-[11px] text-text-secondary leading-snug mb-4">
                      {tier.description}
                    </p>

                    {/* CTA Button */}
                    <Link
                      to={tier.name === 'Enterprise' ? '/enterprise' : '/download'}
                      className={`group inline-flex items-center justify-center gap-1.5 rounded-lg px-5 py-2.5 text-xs font-bold transition-all duration-300 w-full text-center cursor-pointer mb-4 ${
                        tier.popular
                          ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-md shadow-emerald-500/25'
                          : 'bg-bg-primary text-text-primary border border-border-primary hover:bg-bg-secondary dark:bg-gradient-to-b dark:from-[#242432] dark:to-[#12121a] dark:text-white dark:border-white/15 shadow'
                      }`}
                    >
                      <span>{tier.ctaText}</span>
                      <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                    </Link>

                    {/* Horizontal Divider Line */}
                    <hr className="my-3 border-border-primary dark:border-white/10" />

                    {/* Feature List Header */}
                    <div className="text-[11px] font-bold text-text-primary mb-2">
                      {idx === 0 ? 'Free includes:' : idx === 1 ? 'Everything in Hobby, plus:' : 'Everything in Pro, plus:'}
                    </div>

                    {/* Features List */}
                    <ul className="space-y-2 mb-2">
                      {tier.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-[11px] text-text-secondary leading-snug">
                          <div className="mt-0.5 rounded-full bg-emerald-500/20 p-0.5 shrink-0 text-emerald-400">
                            <Check size={10} />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
