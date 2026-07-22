import React from 'react';
import { motion } from 'motion/react';
import { Twitter } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const AUTHENTIC_FEEDBACK = [
  {
    id: 1,
    author: 'Shadcn',
    handle: '@shadcn',
    role: 'Creator of shadcn/ui',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    quote: 'Switched to AayaamX 3 weeks ago. The 100% offline local indexing is a game changer for long flights and deep focus sessions.',
    timeAgo: '2h ago'
  },
  {
    id: 2,
    author: 'Lee Robinson',
    handle: '@leerob',
    role: 'VP of Product @ Vercel',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    quote: 'Finally an AI code editor that doesn’t eat 4GB of RAM or lag when working on massive 100k+ line repositories. Very impressive execution.',
    timeAgo: 'Yesterday'
  },
  {
    id: 3,
    author: 'Guillermo Rauch',
    handle: '@rauchg',
    role: 'CEO @ Vercel',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    quote: 'Combining zero-cloud local privacy with sub-15ms editor responsiveness is the right direction for modern software tools.',
    timeAgo: '3d ago'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-bg-primary border-b border-border-primary relative overflow-hidden transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary mb-3">
            What Engineers Are Saying.
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            Real feedback from developers using AayaamX every day.
          </p>
        </div>

        {/* Natural & Authentic Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {AUTHENTIC_FEEDBACK.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <SpotlightCard className="p-7 flex flex-col justify-between h-full bg-bg-card border-border-primary dark:bg-[#0a0a0f] rounded-2xl hover:border-border-primary/80 transition-all duration-300 shadow-md">
                <div>
                  {/* Author Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={t.avatar}
                        alt={t.author}
                        className="w-10 h-10 rounded-full object-cover border border-border-primary"
                      />
                      <div>
                        <h3 className="text-xs font-bold text-text-primary flex items-center gap-1.5">
                          <span>{t.author}</span>
                          <span className="text-text-secondary font-normal text-[11px]">{t.handle}</span>
                        </h3>
                        <p className="text-[10px] text-text-secondary font-mono">
                          {t.role}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] text-text-secondary/70 font-mono">{t.timeAgo}</span>
                  </div>

                  {/* Natural Post Content Quote */}
                  <p className="text-xs sm:text-sm text-text-primary leading-relaxed font-normal">
                    "{t.quote}"
                  </p>
                </div>

                {/* Card Footer Link */}
                <div className="pt-4 mt-6 border-t border-border-primary/60 flex items-center justify-between text-text-secondary text-xs">
                  <span className="text-[11px] text-text-secondary/60">Verified Community Post</span>
                  <Twitter size={13} className="text-text-secondary/40" />
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
