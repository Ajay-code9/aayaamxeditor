/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-bg-primary border-b border-border-primary relative transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Editorial Heading */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <div className="text-[#10B981] text-xs font-bold tracking-widest uppercase font-mono mb-3">
            08. Verified Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary mb-6">
            Trusted by the architects of modern tools.
          </h2>
          <p className="text-base text-text-secondary leading-relaxed">
            Leading principal engineers and software teams have replaced traditional extension-driven development setups with AayaamX.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col justify-between rounded-xl border border-border-primary bg-bg-secondary p-8 hover:border-text-secondary/30 transition-all relative group h-full"
            >
              {/* Large styled quotation backdrop mark */}
              <div className="absolute top-6 right-8 text-[#10B981]/5 group-hover:text-[#10B981]/10 transition-colors pointer-events-none">
                <Quote size={40} className="stroke-[3]" />
              </div>

              {/* Quote copy */}
              <p className="text-sm sm:text-base text-text-primary leading-relaxed italic relative z-10 mb-8 font-medium">
                “{t.quote}”
              </p>

              {/* Profile Block */}
              <div className="pt-6 border-t border-border-primary flex items-center gap-3 relative z-10">
                {/* Visual Avatar Placeholder in premium grayscale */}
                <div className="h-10 w-10 rounded-full bg-text-primary text-bg-primary flex items-center justify-center font-extrabold text-xs select-none">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-text-primary">{t.author}</h4>
                  <p className="text-[10px] text-text-secondary font-medium font-mono uppercase tracking-wider mt-0.5">
                    {t.role} <span className="text-[#10B981]/80">@</span> {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
