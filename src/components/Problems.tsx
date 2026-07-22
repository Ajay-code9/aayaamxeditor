import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Laptop, GitPullRequest, Smartphone, CheckCircle2, Shield, Zap, Sparkles } from 'lucide-react';

export default function Problems() {
  const ecosystemItems = [
    {
      id: 'desktop',
      badge: 'DESKTOP IDE',
      title: 'Desktop Editor',
      subtitle: 'Zero-latency editor buffer with C++ AST event loop built right in.',
      bullets: [
        'Sub-15ms typing response time with zero input lag',
        'Built-in C++ native abstract syntax tree parser',
        'Supports VS Code extensions and 1-click settings import'
      ],
      linkText: 'Download Desktop Editor',
      linkUrl: '/download',
      accentColor: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
      image: '/eco_desktop_editor.png',
      imageAlt: 'AayaamX Desktop Code Editor Interface Mockup',
      mockupCode: (
        <div className="rounded-xl border border-border-primary bg-bg-secondary p-3 space-y-1.5 text-[11px]">
          <div className="flex items-center justify-between text-text-secondary text-[10px] border-b border-border-primary/60 pb-1">
            <span className="flex items-center gap-1.5 text-text-primary font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>src/main.rs</span>
            </span>
            <span className="text-emerald-400 font-bold">12ms latency</span>
          </div>
          <div className="text-text-primary text-[10px]">
            <span className="text-purple-400 font-bold">pub async fn</span> index() &#123;
          </div>
          <div className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded text-[10px] font-bold">
            + local_ast.verify_signature()?
          </div>
        </div>
      )
    },
    {
      id: 'terminal',
      badge: 'CLI TOOL',
      title: 'Smart Shell Agent',
      subtitle: 'Run local AI agents in any bash script, CI pipeline, or terminal window.',
      bullets: [
        'Run automated code audits directly from your terminal',
        'Integrate into GitHub Actions & CI/CD release pipelines',
        'Auto-fix compiler warnings and syntax errors with 1 command'
      ],
      linkText: 'Install CLI Tool',
      linkUrl: '/download',
      accentColor: 'text-cyan-400',
      badgeBg: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
      image: '/eco_cli_agent.png',
      imageAlt: 'AayaamX Smart Shell Terminal Agent Mockup',
      mockupCode: (
        <div className="rounded-xl border border-border-primary bg-bg-secondary p-3 space-y-1.5 text-[11px]">
          <div className="flex items-center gap-1.5 text-text-secondary text-[10px] border-b border-border-primary/60 pb-1">
            <span className="w-2 h-2 rounded-full bg-red-400" />
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="ml-1 text-text-primary font-bold">aayaamx ~/repo</span>
          </div>
          <div className="text-cyan-400 text-[10px] font-bold">$ aayaamx audit --fix</div>
          <div className="text-emerald-400 text-[10px] font-bold">✓ 0 compilation breaks</div>
        </div>
      )
    },
    {
      id: 'github',
      badge: 'GITHUB BOT',
      title: 'PR Reviewer',
      subtitle: 'Automatically audit pull requests for security flaws & unit test coverage.',
      bullets: [
        'Instant automated pull request code quality reviews',
        'Flags security vulnerabilities before merging code',
        'Generates unit test suites automatically for new pull requests'
      ],
      linkText: 'Connect GitHub Integration',
      linkUrl: '/download',
      accentColor: 'text-purple-400',
      badgeBg: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
      image: '/eco_github_bot.png',
      imageAlt: 'AayaamX GitHub PR Reviewer Bot Interface',
      mockupCode: (
        <div className="rounded-xl border border-border-primary bg-bg-secondary p-3 space-y-1.5 text-[11px]">
          <div className="flex items-center justify-between text-text-primary text-[10px] font-bold border-b border-border-primary/60 pb-1">
            <span className="text-purple-400">#42 PR Review</span>
            <span className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded text-[9px]">Passed</span>
          </div>
          <div className="text-emerald-400 text-[10px]">✓ Zero memory leaks</div>
          <div className="text-cyan-400 text-[10px]">✓ Types fully checked</div>
        </div>
      )
    },
    {
      id: 'mobile',
      badge: 'MOBILE APP',
      title: 'Mobile Companion',
      subtitle: 'Review long-running agent tasks & server health directly on iOS & Android.',
      bullets: [
        'Monitor long-running AI code refactoring tasks on the go',
        'Receive instant push alerts for server & build failures',
        'Approve code deployments securely from your mobile device'
      ],
      linkText: 'Get Mobile Companion App',
      linkUrl: '/download',
      accentColor: 'text-amber-400',
      badgeBg: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
      image: '/eco_mobile_app.png',
      imageAlt: 'AayaamX Mobile Companion iOS Android Interface',
      mockupCode: (
        <div className="rounded-xl border border-border-primary bg-bg-secondary p-3 space-y-1.5 text-[11px]">
          <div className="flex items-center justify-between text-text-primary text-[10px] font-bold border-b border-border-primary/60 pb-1">
            <span>Build Monitor</span>
            <span className="text-emerald-400 text-[9px] font-bold">● Active</span>
          </div>
          <div className="text-text-secondary text-[10px]">Deploying to production cluster...</div>
        </div>
      )
    }
  ];

  return (
    <section id="ecosystem" className="pt-12 sm:pt-16 pb-16 md:pb-24 bg-bg-secondary relative border-b border-border-primary transition-colors duration-300">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none bg-grid-pattern opacity-25" />

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-md inline-block mb-2">
            EVERYWHERE YOU WORK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary mb-2">
            One AI Platform Across Every Runtime & Device
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            Scroll down to explore how AayaamX integrates seamlessly across your entire development lifecycle.
          </p>
        </div>

        {/* Interactive Sticky Stacking Cards Container */}
        <div className="space-y-12 sm:space-y-16 pb-16">
          {ecosystemItems.map((item, index) => (
            <div
              key={item.id}
              className="sticky transition-all duration-300"
              style={{
                top: `${72 + index * 36}px`,
                zIndex: 10 + index
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-border-primary bg-bg-card shadow-2xl overflow-hidden group hover:border-emerald-500/40 transition-all duration-300 max-w-6xl mx-auto"
              >
                {/* Header Tab Bar */}
                <div className="px-5 sm:px-7 py-2.5 border-b border-border-primary/60 bg-bg-secondary/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md border ${item.badgeBg}`}>
                      {item.badge}
                    </span>
                    <span className="text-xs text-text-primary font-bold">{item.title}</span>
                  </div>
                  <span className="text-xs text-text-secondary font-mono">0{index + 1} / 04</span>
                </div>

                <div className="p-5 sm:p-6 lg:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Left Column Details */}
                  <div className="lg:col-span-5 space-y-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-text-primary tracking-tight mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Bullet Feature List */}
                    <div className="space-y-2 pt-0.5">
                      {item.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-text-primary">
                          <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-1">
                      <Link
                        to={item.linkUrl}
                        className={`inline-flex items-center gap-2 rounded-xl bg-bg-secondary border border-border-primary px-4 py-2 text-xs font-bold ${item.accentColor} hover:bg-bg-primary transition-all shadow-xs group/btn`}
                      >
                        <span>{item.linkText}</span>
                        <ArrowRight size={13} className="transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column High-Res Hero Image Preview */}
                  <div className="lg:col-span-7">
                    <div className="rounded-xl border border-border-primary/80 bg-bg-primary/80 overflow-hidden shadow-xl relative group/img h-[170px] sm:h-[240px] lg:h-[270px] flex items-center justify-center p-2 sm:p-3">
                      <img 
                        src={item.image} 
                        alt={item.imageAlt}
                        className={`max-h-full max-w-full object-contain rounded-lg transition-all duration-500 group-hover/img:scale-[1.02] ${
                          item.id === 'mobile'
                            ? 'drop-shadow-[0_15px_30px_rgba(0,0,0,0.75)]'
                            : 'border border-border-primary/40 shadow-md'
                        }`}
                      />
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* High-Impact Image Feature Showcase Grid */}
        <div className="pt-20 border-t border-border-primary/60">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-md inline-block mb-3">
              NEXT-GEN AI ENGINE
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight mb-3">
              Designed for Deep Workspace Intelligence
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary max-w-xl mx-auto">
              Visual architecture built to index, compile, and protect your software assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Multi-File AI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-border-primary bg-bg-card/80 overflow-hidden shadow-xl group hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative overflow-hidden aspect-[16/9] border-b border-border-primary bg-bg-primary">
                <img 
                  src="/aayaamx_multifile_ai_preview.png" 
                  alt="AayaamX Multi-File AI Reasoning Preview"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-6 space-y-2">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Multi-File Context</div>
                <h4 className="text-base font-bold text-text-primary">Deep Codebase Reasoning</h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Understands relations across thousands of TypeScript, Rust, and Python files simultaneously with zero truncation.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Sub-15ms Engine */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-border-primary bg-bg-card/80 overflow-hidden shadow-xl group hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative overflow-hidden aspect-[16/9] border-b border-border-primary bg-bg-primary">
                <img 
                  src="/aayaamx_cpp_engine_speed.png" 
                  alt="Sub-15ms C++ Compiler Speed Graphic"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-6 space-y-2">
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Zero Lag Architecture</div>
                <h4 className="text-base font-bold text-text-primary">Sub-15ms Compiler Engine</h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  C++ native event loop ensures your typing and file indexing happen with 8x less RAM memory overhead.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Privacy Vault */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl border border-border-primary bg-bg-card/80 overflow-hidden shadow-xl group hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative overflow-hidden aspect-[16/9] border-b border-border-primary bg-bg-primary">
                <img 
                  src="/aayaamx_offline_privacy_vault.png" 
                  alt="100% Local Offline Privacy Vault Graphic"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-6 space-y-2">
                <div className="text-xs font-bold text-purple-400 uppercase tracking-wider">100% Offline Vault</div>
                <h4 className="text-base font-bold text-text-primary">Zero Data Retention</h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Keep your code completely offline with embedded lightweight local LLM models. Zero data sent to external clouds.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
