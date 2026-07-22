import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Cpu, Terminal, CheckCircle2, FileCode, GitBranch, Settings, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedGroup } from '@/components/ui/animated-group';

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 16,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 1.2,
      },
    },
  },
};

export default function Hero() {
  const [smallStars, setSmallStars] = useState<string>('');
  const [mediumStars, setMediumStars] = useState<string>('');
  const [bigStars, setBigStars] = useState<string>('');

  const generateStarBoxShadow = (count: number): string => {
    let shadows = [];
    for (let i = 0; i < count; i++) {
      const x = Math.floor(Math.random() * 2000);
      const y = Math.floor(Math.random() * 2000);
      shadows.push(`${x}px ${y}px var(--star-color)`);
    }
    return shadows.join(', ');
  };

  useEffect(() => {
    setSmallStars(generateStarBoxShadow(500));
    setMediumStars(generateStarBoxShadow(150));
    setBigStars(generateStarBoxShadow(60));
  }, []);

  return (
    <main className="overflow-hidden bg-bg-primary text-text-primary relative transition-colors duration-300">
      {/* Cosmic Parallax Background Star Layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-80">
        <div className="cosmic-stars" style={{ boxShadow: smallStars }} />
        <div className="cosmic-stars-medium" style={{ boxShadow: mediumStars }} />
        <div className="cosmic-stars-large" style={{ boxShadow: bigStars }} />
      </div>

      {/* Floating Low-Opacity Code Snippets on Edges */}
      <div className="hidden xl:block absolute top-36 left-8 font-mono text-[11px] text-emerald-500/25 pointer-events-none select-none z-0 space-y-1">
        <div>const engine = new KernelEventLoop();</div>
        <div>await engine.indexLocalAST();</div>
        <div className="text-cyan-500/20">// Sub-15ms IPC memory mapping</div>
        <div>return &#123; latency: '0ms' &#125;;</div>
      </div>

      <div className="hidden xl:block absolute top-36 right-8 font-mono text-[11px] text-cyan-500/25 pointer-events-none select-none z-0 space-y-1 text-right">
        <div>pub async fn synthesize_ast() &#123;</div>
        <div>  let model = OfflineLLM::load();</div>
        <div className="text-purple-500/20">  // 100% Zero-Data Retention</div>
        <div>  model.predict_inline().await;</div>
        <div>&#125;</div>
      </div>

      <section className="relative z-10 pt-24 pb-16 sm:pt-36 sm:pb-20">
        {/* Soft Aurora Glow Behind Headline */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-cyan-500/5 blur-[140px] rounded-full pointer-events-none z-0" />

        <div className="mx-auto max-w-5xl px-6 md:px-8 relative z-10 text-center flex flex-col items-center">
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.15,
                  },
                },
              },
              ...transitionVariants,
            }}
            className="flex flex-col items-center w-full"
          >
            {/* 1. Centered Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary max-w-3xl leading-[1.12] mb-6 text-center mx-auto">
              Code 10x Faster with AI Built Right Into Your <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Editor</span>
            </h1>

            {/* 3. Short Supporting Description */}
            <p className="max-w-xl mx-auto text-base sm:text-xl text-text-secondary leading-relaxed text-center mb-10 font-normal">
              AayaamX is a super-fast AI code editor. Write, fix, and understand your code instantly — with zero delay and complete privacy.
            </p>

            {/* 4. Primary + Secondary CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10 w-full max-w-md mx-auto">
              <Link
                to="/download"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-base font-extrabold text-slate-950 shadow-xl shadow-emerald-500/25 hover:bg-emerald-400 hover:scale-[1.02] transition-all cursor-pointer"
              >
                <span>Start Building Free</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-border-primary bg-bg-card/80 px-8 py-4 text-base font-bold text-text-primary hover:bg-bg-secondary hover:border-text-secondary/40 shadow-md transition-all cursor-pointer"
              >
                Request a Demo
              </Link>
            </div>

            {/* 5. Small Trust Row */}
            <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-text-secondary pt-4 border-t border-border-primary/40">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 size={13} />
                <span>★ 14,280 GitHub Stars</span>
              </span>
              <span className="hidden sm:inline text-text-secondary/40">•</span>
              <span className="flex items-center gap-1.5">
                <Cpu size={13} className="text-cyan-400" />
                <span>Sub-15ms C++ Engine</span>
              </span>
              <span className="hidden sm:inline text-text-secondary/40">•</span>
              <span className="flex items-center gap-1.5">
                <Shield size={13} className="text-purple-400" />
                <span>Zero Data Retention</span>
              </span>
            </div>
          </AnimatedGroup>

          {/* Theme-Adaptive Code Editor Image Showcase with Seamless Bottom Opacity Fade */}
          <div className="mt-12 sm:mt-16 w-full max-w-6xl mx-auto relative group">
            {/* Subtle Ambient Radial Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-t-3xl blur-xl opacity-20 group-hover:opacity-35 transition duration-500 pointer-events-none" />

            <div
              className="relative rounded-t-2xl border-x border-t border-border-primary/80 overflow-hidden bg-bg-card shadow-2xl"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 95%)',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 95%)'
              }}
            >
              {/* Dark Theme Code Editor Screenshot */}
              <img
                src="/code-editornewblack.png"
                alt="AayaamX AI Code Editor Dark Studio"
                className="hidden dark:block w-full h-auto object-cover rounded-t-2xl transition-all duration-300"
              />

              {/* Light/Bright Theme Code Editor Screenshot */}
              <img
                src="/code-editornewwhite.png"
                alt="AayaamX AI Code Editor Light Studio"
                className="block dark:hidden w-full h-auto object-cover rounded-t-2xl transition-all duration-300"
              />

              {/* Bottom Gradient Fade Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg-primary via-bg-primary/85 to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Vector Logo Cloud Bar */}
      <section className="pt-4 pb-12 bg-bg-primary relative z-10">
        <div className="mx-auto max-w-7xl px-6 md:px-8 text-center">
          <p className="text-xs font-mono font-bold tracking-widest uppercase text-text-secondary mb-8">
            TRUSTED BY ENGINEERS AT WORLD-CLASS TEAMS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-75 hover:opacity-100 transition-opacity">
            {/* NVIDIA */}
            <div className="flex items-center gap-2 text-text-primary font-extrabold text-lg sm:text-xl tracking-tight select-none">
              <svg className="w-6 h-6 fill-current text-emerald-400" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span>NVIDIA</span>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-2 text-text-primary font-bold text-lg sm:text-xl tracking-tight select-none">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </div>

            {/* OpenAI */}
            <div className="flex items-center gap-2 text-text-primary font-bold text-lg sm:text-xl tracking-tight select-none">
              <svg className="w-6 h-6 fill-current text-cyan-400" viewBox="0 0 24 24">
                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729" />
              </svg>
              <span>OpenAI</span>
            </div>

            {/* Vercel */}
            <div className="flex items-center gap-2 text-text-primary font-bold text-lg sm:text-xl tracking-tight select-none">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 1L24 22H0L12 1Z" />
              </svg>
              <span>Vercel</span>
            </div>

            {/* Stripe */}
            <div className="flex items-center gap-2 text-text-primary font-extrabold text-lg sm:text-xl tracking-tight select-none">
              <span className="text-indigo-400">stripe</span>
            </div>

            {/* Supabase */}
            <div className="flex items-center gap-2 text-text-primary font-bold text-lg sm:text-xl tracking-tight select-none">
              <svg className="w-5 h-5 fill-current text-emerald-400" viewBox="0 0 24 24">
                <path d="M13.359 1.131L1.472 15.653c-.5.61-.066 1.536.72 1.536h7.954l-1.077 5.68c-.144.76.786 1.258 1.34.72l11.887-14.522c.5-.61.066-1.536-.72-1.536h-7.954l1.077-5.68c.144-.76-.786-1.258-1.34-.72z" />
              </svg>
              <span>Supabase</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
