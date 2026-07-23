import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Home,
  FolderGit2,
  Key,
  Sparkles,
  BookOpen,
  LogOut,
  Check,
  ArrowRight,
  CheckCircle2,
  ArrowLeft
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
      className="bg-slate-50 text-slate-900 min-h-screen flex transition-colors duration-300"
    >
      {/* 1. LEFT SIDEBAR NAVIGATION */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between p-5 shrink-0 min-h-screen sticky top-0 h-screen shadow-xs">
        <div className="space-y-8">
          <div className="px-2">
            <Logo size="md" theme="light" />
          </div>

          <nav className="space-y-1 text-xs font-semibold">
            <Link
              to="/dashboard"
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all"
            >
              <Home size={16} className="text-slate-500" />
              <span>Overview</span>
            </Link>

            <Link
              to="/dashboard"
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all"
            >
              <FolderGit2 size={16} className="text-slate-500" />
              <span>Workspaces</span>
            </Link>

            <Link
              to="/settings"
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all"
            >
              <Key size={16} className="text-slate-500" />
              <span>API Keys & Settings</span>
            </Link>

            <div className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
              <Sparkles size={16} className="text-emerald-600" />
              <span>Upgrade to Pro</span>
            </div>

            <Link
              to="/dashboard"
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all"
            >
              <BookOpen size={16} className="text-slate-500" />
              <span>App Developer Docs</span>
            </Link>
          </nav>
        </div>

        <div className="pt-4 border-t border-slate-200 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-xs font-extrabold text-emerald-700">
                DR
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-bold text-slate-900 truncate">Developer</p>
                <p className="text-[10px] text-slate-500 truncate">dev@codeaayaam.com</p>
              </div>
            </div>
            <span className="text-[9px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
              Hobby
            </span>
          </div>

          <Link
            to="/signin"
            className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-slate-200 bg-slate-50 text-[11px] font-bold text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <LogOut size={13} />
            <span>Sign Out</span>
          </Link>
        </div>
      </aside>

      {/* 2. MAIN UPGRADE CONTENT AREA */}
      <main className="flex-1 p-6 sm:p-10 space-y-8 max-w-5xl">
        
        <div className="flex items-center justify-between pb-6 border-b border-slate-200">
          <div>
            <h1 className="font-editorial text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight">Upgrade Account Tier</h1>
            <p className="text-xs text-slate-600 mt-1">Choose the plan built for your engineering velocity.</p>
          </div>

          <Link
            to="/dashboard"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 px-3.5 py-2 rounded-xl transition-all"
          >
            <ArrowLeft size={14} />
            <span>Back to Overview</span>
          </Link>
        </div>

        {/* 3-Tier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Hobby Tier */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between space-y-6 shadow-xs">
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">Hobby</h3>
                <p className="text-xs text-slate-500 mt-0.5">For student developers and exploration.</p>
              </div>
              <div className="text-2xl font-extrabold text-slate-900">$0 <span className="text-xs font-normal text-slate-500">/ forever</span></div>
              
              <ul className="space-y-2 pt-1">
                <li className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-emerald-600" />
                  <span>200 fast model requests / mo</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-emerald-600" />
                  <span>Local context indexing</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-emerald-600" />
                  <span>1-click keybindings migration</span>
                </li>
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <span className="w-full inline-flex justify-center bg-slate-100 text-slate-700 py-2 rounded-xl text-xs font-bold">
                Current Active Plan
              </span>
            </div>
          </div>

          {/* Pro Tier */}
          <div className="bg-white border-2 border-emerald-500 rounded-2xl p-6 flex flex-col justify-between space-y-6 shadow-lg relative ring-4 ring-emerald-500/10">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 text-[9px] font-extrabold uppercase tracking-widest px-3 py-0.5 rounded-full shadow-xs">
              MOST POPULAR
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">Pro</h3>
                <p className="text-xs text-slate-500 mt-0.5">Engineered for professional developers.</p>
              </div>
              <div className="text-2xl font-extrabold text-slate-900">$20 <span className="text-xs font-normal text-slate-500">/ month</span></div>

              <ul className="space-y-2 pt-1">
                <li className="flex items-center gap-2 text-xs text-slate-800 font-semibold">
                  <CheckCircle2 size={15} className="text-emerald-600" />
                  <span>Unlimited model reasoning</span>
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
                  <span>Priority fast-queue routing</span>
                </li>
              </ul>
            </div>

            <div className="pt-3">
              <button
                onClick={handleUpgrade}
                disabled={upgrading || upgraded}
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 text-slate-950 py-3 rounded-xl text-xs font-extrabold hover:bg-emerald-400 shadow-md shadow-emerald-500/25 transition-all cursor-pointer"
              >
                {upgrading ? (
                  <span>Processing...</span>
                ) : upgraded ? (
                  <span className="flex items-center gap-1">
                    <Check size={15} /> Pro Active!
                  </span>
                ) : (
                  <>
                    <span>Upgrade to Pro</span>
                    <ArrowRight size={14} />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Enterprise Tier */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between space-y-6 shadow-xs">
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">Enterprise</h3>
                <p className="text-xs text-slate-500 mt-0.5">Bespoke security & self-hosted models.</p>
              </div>
              <div className="text-2xl font-extrabold text-slate-900">Custom <span className="text-xs font-normal text-slate-500">/ annual</span></div>

              <ul className="space-y-2 pt-1">
                <li className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-emerald-600" />
                  <span>Strict Zero Data Retention SLA</span>
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

            <div className="pt-3 border-t border-slate-100">
              <Link
                to="/contact"
                className="w-full inline-flex justify-center bg-slate-900 text-white py-2.5 rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors"
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
