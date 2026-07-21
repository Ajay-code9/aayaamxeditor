/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PRICING_TIERS } from '../data';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-bg-secondary border-b border-border-primary relative transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Editorial Heading */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <div className="text-[#10B981] text-xs font-bold tracking-widest uppercase font-mono mb-3">
            09. Direct Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary mb-6">
            Transparent value. No hidden tiers.
          </h2>
          <p className="text-base text-text-secondary leading-relaxed">
            Choose the workspace capability that aligns with your engineering needs. Start building offline with local models or upgrade for unlimited contextual agent capabilities.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`rounded-xl border p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 h-full ${
                tier.popular
                  ? 'bg-bg-primary border-[#10B981] shadow-lg ring-1 ring-[#10B981]/20 lg:scale-105 z-10'
                  : 'bg-bg-primary border-border-primary hover:border-text-secondary/30 shadow-xs'
              }`}
            >
              {/* Popularity ribbon */}
              {tier.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-md bg-[#10B981] px-3.5 py-1 text-[9px] font-bold uppercase tracking-widest text-white shadow-xs">
                  RECOMMENDED FOR PROFESSIONALS
                </span>
              )}

              {/* Package Header */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-text-primary font-mono uppercase tracking-wide">
                    {tier.name}
                  </h3>
                  {tier.name === 'Enterprise' && (
                    <ShieldCheck size={18} className="text-[#10B981]" />
                  )}
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-text-primary tracking-tight">{tier.price}</span>
                  {tier.period && (
                    <span className="text-xs font-medium text-text-secondary font-mono">
                      / {tier.period}
                    </span>
                  )}
                </div>

                <p className="text-xs text-text-secondary leading-relaxed">
                  {tier.description}
                </p>
              </div>

              {/* Separator */}
              <hr className="my-6 border-border-primary" />

              {/* Feature Checklist */}
              <ul className="space-y-3.5 flex-1 mb-8">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-xs text-text-secondary leading-relaxed">
                    <div className="mt-0.5 rounded-full bg-[#10B981]/5 p-0.5 border border-[#10B981]/10 shrink-0">
                      <Check size={11} className="text-[#10B981] stroke-[2.5]" />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Call-to-Action */}
              <Link
                to={tier.name === 'Enterprise' ? '/enterprise' : '/download'}
                className={`group inline-flex items-center justify-center gap-1.5 rounded-full px-6 py-3.5 text-xs font-semibold shadow-xs transition-all w-full text-center cursor-pointer ${
                  tier.popular
                    ? 'bg-[#10B981] text-white hover:bg-[#059669]'
                    : 'bg-text-primary text-bg-primary hover:opacity-90'
                }`}
              >
                {tier.ctaText}
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
