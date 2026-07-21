import React, { useState } from 'react';
import { motion } from 'motion/react';
import HeroBackgroundAnimation from '../components/HeroBackgroundAnimation';
import { ArrowRight, Mail, Lock, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 1200);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-bg-primary text-text-primary min-h-screen flex items-center justify-center py-20 px-6 transition-colors duration-300 relative overflow-hidden"
    >
      <HeroBackgroundAnimation variant="subtle" />
      <div className="bg-bg-secondary border border-border-primary rounded-xl p-8 shadow-xs max-w-md w-full relative z-10">
        <div className="text-center mb-8 flex flex-col items-center">
          <Logo size="lg" />
          <p className="text-xs text-text-secondary mt-3">Access your seat license and settings sync profiles securely.</p>
        </div>

        {!success ? (
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-primary flex items-center gap-1.5">
                <Mail size={11} className="text-[#10B981]" /> Corporate Email
              </label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-xs bg-bg-primary border border-border-primary rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-text-secondary/40 focus:bg-bg-primary text-text-primary font-mono"
                placeholder="e.g. elena@systems.com"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-primary flex items-center gap-1.5">
                  <Lock size={11} className="text-[#10B981]" /> Password
                </label>
                <a href="#" className="text-[10px] font-mono text-[#10B981] hover:underline">Forgot password?</a>
              </div>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-xs bg-bg-primary border border-border-primary rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-text-secondary/40 focus:bg-bg-primary text-text-primary font-mono"
                placeholder="••••••••••••"
              />
            </div>

            <button 
              type="submit"
              disabled={submitting}
              className="w-full group inline-flex items-center justify-center gap-1.5 rounded-lg bg-text-primary text-bg-primary py-3 text-xs font-bold hover:opacity-90 transition-all cursor-pointer"
            >
              {submitting ? 'Authenticating secure session...' : 'Initiate Secure Sign In'}
              <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        ) : (
          <div className="text-center py-6 space-y-3">
            <div className="mx-auto h-12 w-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600">
              <CheckCircle2 size={20} className="stroke-[3]" />
            </div>
            <h3 className="text-sm font-bold text-text-primary font-mono uppercase">Identity Approved</h3>
            <p className="text-xs text-text-secondary leading-relaxed max-w-xs mx-auto">
              Session authorized securely. Preparing to synchronise environment settings...
            </p>
          </div>
        )}

        <div className="pt-6 mt-6 border-t border-border-primary text-center">
          <p className="text-xs text-text-secondary">
            No account yet?{' '}
            <Link to="/signup" className="text-[#10B981] font-bold font-mono uppercase hover:underline text-[10px]">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
