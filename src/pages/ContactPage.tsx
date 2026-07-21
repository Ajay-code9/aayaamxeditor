import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import HeroBackgroundAnimation from '../components/HeroBackgroundAnimation';
import { Mail, MessageSquare, Shield, Check, Send } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', query: '', text: '' });
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.text) return;
    setDone(true);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-bg-primary text-text-primary min-h-screen transition-colors duration-300"
    >
      {/* Title Hero Section */}
      <section className="min-h-[100dvh] flex flex-col justify-center pt-20 md:pt-28 pb-12 border-b border-border-primary relative overflow-hidden bg-bg-primary transition-colors duration-300">
        <HeroBackgroundAnimation variant="page" />
        <div className="mx-auto max-w-6xl px-6 md:px-8 relative z-10 text-center my-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-[#10B981] text-xs font-bold tracking-widest uppercase font-mono mb-4">
              07. Communication Node
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
              Connect with us.
            </h1>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed mt-4">
              Whether you need custom seat licenses for your engineering group, educational sponsorship, or technical troubleshooting, we have a direct support channel available.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 md:px-8 relative z-10 pt-20">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct channels sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-bg-secondary border border-border-primary rounded-xl p-6 shadow-xs space-y-6">
              <h3 className="text-xs font-bold text-text-primary font-mono uppercase tracking-wide">Direct Pipelines</h3>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-lg bg-[#10B981]/5 border border-[#10B981]/10 flex items-center justify-center text-[#10B981] shrink-0">
                    <Mail size={12} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-text-secondary/70 uppercase">Technical & General Support</div>
                    <div className="text-xs font-bold text-text-primary font-mono">support@aayaamx.com</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-lg bg-[#10B981]/5 border border-[#10B981]/10 flex items-center justify-center text-[#10B981] shrink-0">
                    <MessageSquare size={12} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-text-secondary/70 uppercase">Enterprise Sales Evaluation</div>
                    <div className="text-xs font-bold text-text-primary font-mono">sales@aayaamx.com</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-lg bg-[#10B981]/5 border border-[#10B981]/10 flex items-center justify-center text-[#10B981] shrink-0">
                    <Shield size={12} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-text-secondary/70 uppercase">Security Vulnerability reporting</div>
                    <div className="text-xs font-bold text-text-primary font-mono">security@aayaamx.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-bg-secondary border border-border-primary rounded-xl p-6 shadow-xs">
              <h4 className="text-xs font-bold text-text-primary font-mono uppercase tracking-wide mb-2">Operational Hours</h4>
              <p className="text-[11px] text-text-secondary leading-relaxed">
                Our support desk is active Monday through Friday, 9:00 AM to 6:00 PM PST. Enterprise SLA accounts receive 24/7/365 pager coverage.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-bg-secondary border border-border-primary rounded-xl p-8 shadow-xs">
            <AnimatePresence mode="wait">
              {!done ? (
                <motion.form 
                  key="contact-node"
                  onSubmit={onSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-primary">Your Name</label>
                      <input 
                        type="text" 
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full text-xs bg-bg-primary border border-border-primary rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-text-secondary/40 focus:bg-bg-secondary transition-all text-text-primary font-mono"
                        placeholder="e.g. Elena Rostova"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-primary">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full text-xs bg-bg-primary border border-border-primary rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-text-secondary/40 focus:bg-bg-secondary transition-all text-text-primary font-mono"
                        placeholder="e.g. elena@systems.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-primary">Query Category</label>
                    <select 
                      value={form.query}
                      onChange={(e) => setForm({ ...form, query: e.target.value })}
                      className="w-full text-xs bg-bg-primary border border-border-primary rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-text-secondary/40 focus:bg-bg-secondary transition-all text-text-primary font-mono"
                    >
                      <option value="technical">Technical troubleshooting</option>
                      <option value="billing">Billing & Seat administration</option>
                      <option value="education">Educational license application</option>
                      <option value="oss">Open Source Sponsorship request</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-primary">Inquiry Details</label>
                    <textarea 
                      rows={5}
                      required
                      value={form.text}
                      onChange={(e) => setForm({ ...form, text: e.target.value })}
                      className="w-full text-xs bg-bg-primary border border-border-primary rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-text-secondary/40 focus:bg-bg-secondary transition-all text-text-primary font-mono resize-none"
                      placeholder="Be specific. Specify your operating system and current compiler version if relevant."
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#10B981] py-3.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#059669] cursor-pointer"
                  >
                    <Send size={11} />
                    Send Secure Message
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="ok"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="mx-auto h-12 w-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600">
                    <Check size={18} className="stroke-[3]" />
                  </div>
                  <h3 className="text-md font-bold text-text-primary font-mono uppercase">Inquiry Transmitted</h3>
                  <p className="text-xs text-text-secondary leading-relaxed max-w-sm mx-auto">
                    Thank you. We will evaluate your message and respond directly to <span className="font-bold text-text-primary">{form.email}</span> as soon as possible.
                  </p>
                  <button 
                    onClick={() => { setDone(false); setForm({ name: '', email: '', query: '', text: '' }); }}
                    className="text-xs font-mono text-[#10B981] hover:underline"
                  >
                    Reset Form
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
