import React, { useState } from 'react';
import { motion } from 'motion/react';
import HeroBackgroundAnimation from '../components/HeroBackgroundAnimation';
import { ArrowRight, Mail, Lock, User, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

export default function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !password) return;
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
          <p className="text-xs text-text-secondary mt-3">Initialize your secure license key and unlock limitless context flow.</p>
        </div>

        {!success ? (
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-primary flex items-center gap-1.5">
                <User size={11} className="text-[#10B981]" /> Your Name
              </label>
              <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full text-xs bg-bg-primary border border-border-primary rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-text-secondary/40 focus:bg-bg-primary text-text-primary font-mono"
                placeholder="e.g. Elena Rostova"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-primary flex items-center gap-1.5">
                <Mail size={11} className="text-[#10B981]" /> Email Address
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
              <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-primary flex items-center gap-1.5">
                <Lock size={11} className="text-[#10B981]" /> Password
              </label>
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
              {submitting ? 'Creating developer account...' : 'Create Secure Developer Account'}
              <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        ) : (
          <div className="text-center py-6 space-y-3">
            <div className="mx-auto h-12 w-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600">
              <CheckCircle2 size={20} className="stroke-[3]" />
            </div>
            <h3 className="text-sm font-bold text-text-primary font-mono uppercase">Developer Registered</h3>
            <p className="text-xs text-text-secondary leading-relaxed max-w-xs mx-auto">
              Welcome, <span className="font-bold text-text-primary">{name}</span>! Your personal license key is ready to bind. Setup verification email forwarded to <span className="font-bold text-text-primary">{email}</span>.
            </p>
          </div>
        )}

        <div className="pt-6 mt-6 border-t border-border-primary text-center">
          <p className="text-xs text-text-secondary">
            Already registered?{' '}
            <Link to="/signin" className="text-[#10B981] font-bold font-mono uppercase hover:underline text-[10px]">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
