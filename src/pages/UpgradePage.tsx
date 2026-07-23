import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Check,
  Sparkles,
  ShieldCheck,
  Zap,
  Cpu,
  Layers,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import Logo from '../components/Logo';

export default function UpgradePage() {
  const [upgrading, setUpgrading] = useState(false);
  const [upgraded, setUpgraded] = useState(false);

  function handleUpgrade() {
    setUpgrading(true);
    setTimeout(() => {
      setUpgrading(false);
      setUpgraded(true);
    }, 1200);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-slate-50 text-slate-900 min-h-screen pb-24 transition-colors duration-300"
    >
      {/* Top Navigation */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg transition-all"
            >
              <ArrowLeft size={14} />
              <span>Back to Dashboard</span>
            </Link>
            <span className="text-slate-300">|</span>
            <span className="text-sm font-bold text-slate-900">Account Tier & Billing</span>
          </div>

          <Link to="/">
            <Logo size="sm" />
          </Link>
        </div>
      </header>

      {/* Main Upgrade Content */}
      <main className="mx-auto max-w-6xl px-4 sm:px-6 pt-12 space-y-12">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-100 border border-emerald-300 px-3 py-1 rounded-full inline-block">
            UNLEASH LIMITLESS SPEED
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Upgrade to Code Aayaam Pro
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Get unlimited model reasoning sessions, deep multi-file workspace editing, and priority fast-queue model routing.
          </p>
        </div>

        {/* 3-Tier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Hobby Tier */}
          <div className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col justify-between space-y-6 shadow-xs">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Hobby</h3>
                <p className="text-xs text-slate-500 mt-1">For student developers and individual exploration.</p>
              </div>
              <div className="text-3xl font-extrabold text-slate-900">$0 <span className="text-xs font-normal text-slate-500">/ forever</span></div>
              
              <ul className="space-y-2.5 pt-2">
                <li className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-emerald-600" />
                  <span>200 fast model requests / month</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-emerald-600" />
                  <span>Local repository context indexing</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-emerald-600" />
                  <span>1-click keybindings migration</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <span className="w-full inline-flex justify-center bg-slate-100 text-slate-700 py-2.5 rounded-xl text-xs font-bold">
                Current Active Plan
              </span>
            </div>
          </div>

          {/* Pro Tier (Featured) */}
          <div className="bg-white border-2 border-emerald-500 rounded-2xl p-7 flex flex-col justify-between space-y-6 shadow-xl relative ring-4 ring-emerald-500/10">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-xs">
              MOST POPULAR
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Pro</h3>
                <p className="text-xs text-slate-500 mt-1">Engineered for professional software developers.</p>
              </div>
              <div className="text-3xl font-extrabold text-slate-900">$20 <span className="text-xs font-normal text-slate-500">/ month</span></div>

              <ul className="space-y-2.5 pt-2">
                <li className="flex items-center gap-2 text-xs text-slate-800 font-semibold">
                  <CheckCircle2 size={15} className="text-emerald-600" />
                  <span>Unlimited premium model reasoning</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-800 font-semibold">
                  <CheckCircle2 size={15} className="text-emerald-600" />
                  <span>Multi-file Workspace Agent</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-800 font-semibold">
                  <CheckCircle2 size={15} className="text-emerald-600" />
                  <span>Background compiler error-patching</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-800 font-semibold">
                  <CheckCircle2 size={15} className="text-emerald-600" />
                  <span>Priority fast-queue model routing</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <button
                onClick={handleUpgrade}
                disabled={upgrading || upgraded}
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 text-slate-950 py-3.5 rounded-xl text-xs font-extrabold hover:bg-emerald-400 shadow-md shadow-emerald-500/25 transition-all cursor-pointer"
              >
                {upgrading ? (
                  <span>Processing Checkout...</span>
                ) : upgraded ? (
                  <span className="flex items-center gap-1">
                    <Check size={16} /> Pro Plan Active!
                  </span>
                ) : (
                  <>
                    <span>Upgrade to Pro Now</span>
                    <ArrowRight size={14} />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Enterprise Tier */}
          <div className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col justify-between space-y-6 shadow-xs">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Enterprise</h3>
                <p className="text-xs text-slate-500 mt-1">Bespoke security & self-hosted model capability.</p>
              </div>
              <div className="text-3xl font-extrabold text-slate-900">Custom <span className="text-xs font-normal text-slate-500">/ annual</span></div>

              <ul className="space-y-2.5 pt-2">
                <li className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-emerald-600" />
                  <span>Strict Zero Data Retention (ZDR) SLA</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-emerald-600" />
                  <span>SSO, SAML & central seat controls</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-emerald-600" />
                  <span>Self-hosted models (AWS / GCP)</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Link
                to="/contact"
                className="w-full inline-flex justify-center bg-slate-900 text-white py-3 rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>

        </div>

      </main>
    </motion.div>
  );
}
