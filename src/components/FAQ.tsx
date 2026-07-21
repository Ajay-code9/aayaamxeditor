/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  function toggleFaq(id: string) {
    setOpenId(openId === id ? null : id);
  }

  return (
    <section id="faq" className="py-24 md:py-32 bg-bg-primary border-b border-border-primary relative transition-colors duration-300">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        
        {/* Editorial Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="text-[#10B981] text-xs font-bold tracking-widest uppercase font-mono mb-3">
            10. In-Depth Detail
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary mb-5">
            Technical Queries
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            Everything you need to know about AayaamX’s compiler systems, privacy guarantees, and keyboard configurations.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {FAQS.map((item, idx) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="rounded-xl border border-border-primary bg-bg-secondary transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  type="button"
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none select-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-text-primary font-mono uppercase tracking-wide">
                    {item.question}
                  </span>
                  <span className="ml-4 shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-bg-primary border border-border-primary text-text-secondary">
                    {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-border-primary/60 max-w-3xl">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
