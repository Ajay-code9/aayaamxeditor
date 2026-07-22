import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  function toggleFaq(id: string) {
    setOpenId(openId === id ? null : id);
  }

  return (
    <section id="faq" className="py-16 md:py-20 bg-bg-primary border-b border-border-primary relative transition-colors duration-300">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        
        {/* Simple Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            Everything you need to know about AayaamX’s performance, privacy, and editor tools.
          </p>
        </div>

        {/* Compact Accordion Stack */}
        <div className="space-y-2.5">
          {FAQS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="rounded-xl border border-border-primary bg-bg-card transition-all overflow-hidden shadow-xs hover:border-text-secondary/30"
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  type="button"
                  className="w-full flex items-center justify-between px-5 py-3.5 text-left focus:outline-none select-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm font-semibold text-text-primary">
                    {item.question}
                  </span>
                  <span className="ml-4 shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-bg-secondary border border-border-primary text-text-secondary">
                    {isOpen ? <Minus size={11} /> : <Plus size={11} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-4 pt-2 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-border-primary/50">
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
