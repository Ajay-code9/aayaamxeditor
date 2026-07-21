import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import HeroBackgroundAnimation from '../components/HeroBackgroundAnimation';
import { ShieldCheck, Server, Key, Eye, Headphones, Check, Sparkles, Building, Mail, FileText, Send } from 'lucide-react';

const ENTERPRISE_FEATURES = [
  {
    icon: <Key size={18} className="text-[#10B981]" />,
    title: 'SAML & Okta SSO integration',
    desc: 'Govern access control centrally. AayaamX integrates natively with Okta, Azure AD, Ping Identity, and custom SAML 2.0 setups to enforce corporate policies.'
  },
  {
    icon: <Eye size={18} className="text-[#10B981]" />,
    title: 'Real-time SIEM Audit Logs',
    desc: 'Full compliance transparency. Track administrator modifications, seat assignments, and repository index allocations directly from centralized dashboards.'
  },
  {
    icon: <Server size={18} className="text-[#10B981]" />,
    title: 'Isolated Private Deployments',
    desc: 'Self-host model orchestration or run model proxy layers inside your AWS VPC, Google Cloud, or Azure private subnet. Zero telemetry exits your firewall.'
  },
  {
    icon: <ShieldCheck size={18} className="text-[#10B981]" />,
    title: 'SOC2 Type II Assured Pipelines',
    desc: 'Undergo thorough security audits. Our infrastructure and compiler connections enforce end-to-end TLS 1.3 encryption, static analysis sanitization, and data isolation.'
  },
  {
    icon: <Headphones size={18} className="text-[#10B981]" />,
    title: 'Dedicated Customer Success',
    desc: 'Receive premium assistance. Every enterprise license unlocks a priority communication bridge with our developer core team, complete with custom SLAs.'
  },
  {
    icon: <Sparkles size={18} className="text-[#10B981]" />,
    title: 'Custom AST fine-tuning',
    desc: 'Calibrate models to understand proprietary frameworks and private libraries. Enhance code autocomplete matching accuracy for internal codebase patterns.'
  }
];

export default function EnterprisePage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    size: '100-500',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.company) return;
    setSubmitted(true);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-bg-secondary text-text-primary min-h-screen transition-colors duration-300"
    >
      {/* Hero Header Section */}
      <section className="min-h-[100dvh] flex flex-col justify-center pt-20 md:pt-28 pb-12 border-b border-border-primary relative overflow-hidden bg-bg-primary transition-colors duration-300">
        <HeroBackgroundAnimation variant="page" />
        <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10 text-center my-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-[#10B981] text-xs font-bold tracking-widest uppercase font-mono mb-4">
              03. Enterprise Environment
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary leading-[1.1] mb-6">
              Sovereign engineering environments. <br />Completely isolated context.
            </h1>
            <p className="text-sm sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
              AayaamX Enterprise provides large-scale software corporations with strict zero-data-retention compiler structures, unified administrative auditing, and self-hosted model orchestration.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10 pt-16 md:pt-20 pb-20">

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {ENTERPRISE_FEATURES.map((feat, idx) => (
            <div 
              key={idx}
              className="bg-bg-primary border border-border-primary rounded-xl p-7 hover:border-text-secondary/30 transition-all flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-4">
                <div className="h-9 w-9 rounded-lg border border-border-primary bg-bg-secondary flex items-center justify-center">
                  {feat.icon}
                </div>
                <h3 className="text-sm font-bold text-text-primary font-mono uppercase tracking-wide">
                  {feat.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {feat.desc}
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-border-primary text-[9px] font-mono text-emerald-600 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Check size={11} /> COMPLIANCE APPROVED
              </div>
            </div>
          ))}
        </div>

        {/* Form and Info Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Text / Info Panel */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-text-primary tracking-tight">
                Integrate AayaamX across your workforce
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Connect with our technical architects to explore VPC options, verify compliance mappings, or request custom model benchmarking against your monorepo layouts.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-border-primary">
              <div className="flex gap-4 items-center">
                <div className="h-8 w-8 rounded-full bg-[#10B981]/5 border border-[#10B981]/10 flex items-center justify-center shrink-0">
                  <Mail size={12} className="text-[#10B981]" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-text-secondary/80 uppercase">Direct Channel</div>
                  <div className="text-xs font-bold text-text-primary font-mono">enterprise@aayaamx.com</div>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="h-8 w-8 rounded-full bg-[#10B981]/5 border border-[#10B981]/10 flex items-center justify-center shrink-0">
                  <Building size={12} className="text-[#10B981]" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-text-secondary/80 uppercase">Corporate HQ</div>
                  <div className="text-xs font-bold text-text-primary font-mono">One Sansome St, San Francisco, CA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7 bg-bg-primary border border-border-primary rounded-xl p-8 shadow-xs relative">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-primary">
                        Primary Contact Name
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full text-xs bg-bg-secondary border border-border-primary rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-text-secondary/40 focus:bg-bg-secondary transition-all text-text-primary font-mono"
                        placeholder="e.g. Sarah Jenkins"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-primary">
                        Corporate Email Address
                      </label>
                      <input 
                        type="email" 
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full text-xs bg-bg-secondary border border-border-primary rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-text-secondary/40 focus:bg-bg-secondary transition-all text-text-primary font-mono"
                        placeholder="e.g. sjenkins@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-primary">
                        Organization Name
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        className="w-full text-xs bg-bg-secondary border border-border-primary rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-text-secondary/40 focus:bg-bg-secondary transition-all text-text-primary font-mono"
                        placeholder="e.g. Stripe Labs"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-primary">
                        Engineering Org Size
                      </label>
                      <select 
                        value={formState.size}
                        onChange={(e) => setFormState({ ...formState, size: e.target.value })}
                        className="w-full text-xs bg-bg-secondary border border-border-primary rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-text-secondary/40 focus:bg-bg-secondary transition-all text-text-primary font-mono"
                      >
                        <option value="10-100">10 - 100 developers</option>
                        <option value="100-500">100 - 500 developers</option>
                        <option value="500-2000">500 - 2,000 developers</option>
                        <option value="2000+">2,000+ developers</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-primary">
                      Brief description of deployment environment
                    </label>
                    <textarea 
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full text-xs bg-bg-secondary border border-border-primary rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-text-secondary/40 focus:bg-bg-secondary transition-all text-text-primary font-mono resize-none"
                      placeholder="Specify if you require self-hosted model weights, custom fine-tuning pipelines, or specific SOC2 reporting schedules."
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full group inline-flex items-center justify-center gap-2 rounded-lg bg-[#10B981] py-3.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#059669]"
                  >
                    <Send size={12} />
                    Submit Architecture Evaluation Request
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-prompt"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="mx-auto h-12 w-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600">
                    <Check size={20} className="stroke-[3]" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary font-mono uppercase">
                    Inquiry Safely Transmitted
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed max-w-sm mx-auto">
                    Thank you, <span className="font-bold text-text-primary">{formState.name}</span>. An engineering team architect will contact you at <span className="font-bold text-text-primary">{formState.email}</span> within 2 business hours.
                  </p>
                  <button 
                    onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', company: '', size: '100-500', message: '' }); }}
                    className="text-xs font-mono text-[#10B981] hover:underline"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
