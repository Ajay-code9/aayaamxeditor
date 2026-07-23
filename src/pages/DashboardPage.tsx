import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Laptop,
  Apple,
  Download,
  Zap,
  ShieldCheck,
  Cpu,
  Github,
  Key,
  Sparkles,
  ArrowUpRight,
  ExternalLink,
  Settings,
  User,
  CheckCircle2,
  FolderGit2,
  Layers,
  ArrowRight
} from 'lucide-react';
import Logo from '../components/Logo';

export default function DashboardPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'workspaces' | 'keys'>('overview');

  const WORKSPACES = [
    { name: 'aayaamx-platform', repo: 'organization/aayaamx-platform', status: 'Indexed 14.2k files', updated: '2 hours ago', language: 'TypeScript / C++' },
    { name: 'compiler-kernel-core', repo: 'organization/kernel-core', status: 'Indexed 8.1k files', updated: 'Yesterday', language: 'Rust / C++' },
    { name: 'cloud-agent-pipeline', repo: 'organization/agent-pipeline', status: 'Indexed 4.5k files', updated: '3 days ago', language: 'Go / Python' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-slate-50 text-slate-900 min-h-screen pb-24 transition-colors duration-300"
    >
      {/* Top Dashboard Navigation Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <Link to="/">
              <Logo size="md" />
            </Link>
            <div className="hidden sm:flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'overview' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('workspaces')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'workspaces' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Workspaces
              </button>
              <Link
                to="/settings"
                className="px-3 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 transition-all"
              >
                Settings & Keys
              </Link>
            </div>
          </div>

          {/* Right User & Plan Actions */}
          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full">
              Plan: Hobby Free
            </span>

            <Link
              to="/upgrade"
              className="inline-flex items-center gap-1.5 bg-emerald-500 text-slate-950 px-4 py-2 rounded-xl text-xs font-extrabold hover:bg-emerald-400 shadow-sm shadow-emerald-500/20 transition-all cursor-pointer"
            >
              <Sparkles size={13} />
              <span>Upgrade to Pro</span>
            </Link>

            <Link
              to="/settings"
              className="p-2 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <Settings size={16} />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Dashboard Container */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        
        {/* User Greeting & Quick Profile Summary Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 text-xl font-extrabold">
              DR
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Welcome back, Developer!</h1>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded-full">
                  Verified Seat
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                dev@codeaayaam.com • Synced with VS Code keybindings & local C++ engine
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/download"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-slate-800 transition-all shadow-sm"
            >
              <Download size={14} />
              <span>Get Desktop App</span>
            </Link>
            <Link
              to="/documentation"
              className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-slate-50 transition-all"
            >
              <span>Docs & APIs</span>
              <ExternalLink size={13} />
            </Link>
          </div>
        </div>

        {/* Desktop Download Highlight Banner */}
        <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-50 to-teal-50/50 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 rounded-full">
              <Laptop size={13} />
              <span>Code Aayaam Desktop Studio</span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
              Sub-15ms Local Intelligence Built for Your Metal.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Native installation available for Windows 11 x64, macOS (Apple Silicon / Intel), and Linux amd64. 100% Zero-Data Retention guaranteed.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/download"
              className="inline-flex items-center gap-2 bg-emerald-500 text-slate-950 px-6 py-3 rounded-xl font-extrabold text-xs sm:text-sm hover:bg-emerald-400 shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
            >
              <Download size={15} />
              <span>Download Windows Build</span>
            </Link>
            <Link
              to="/download"
              className="inline-flex items-center gap-2 bg-white border border-slate-300 text-slate-900 px-4 py-3 rounded-xl font-bold text-xs hover:bg-slate-50 transition-all"
            >
              <Apple size={14} />
              <span>macOS Build</span>
            </Link>
          </div>
        </div>

        {/* 2-Column Metrics & Usage Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* AI Request Usage Progress Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Zap size={14} className="text-emerald-600" /> Fast AI Model Requests
              </span>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                71% Used
              </span>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold text-slate-900">
                <span>142 Requests</span>
                <span className="text-slate-500">200 / month</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                <div className="h-full bg-emerald-500 rounded-full w-[71%]" />
              </div>
            </div>

            <p className="text-[11px] text-slate-500">
              Quota resets in 12 days. Need unlimited reasoning sessions?
            </p>

            <Link
              to="/upgrade"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:underline"
            >
              <span>Upgrade to Unlimited Pro</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* Privacy Vault Security Status */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-600" /> Privacy & Local Vault
              </span>
              <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full">
                Enforced
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-800 font-semibold">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                <span>Zero Data Retention (ZDR) Active</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-800 font-semibold">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                <span>Local C++ AST Indexing Enabled</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-800 font-semibold">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                <span>Telemetry Logging: Opted Out</span>
              </div>
            </div>

            <Link
              to="/settings"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 hover:underline pt-1"
            >
              <span>Configure Security Vault</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* BYOK (Bring Your Own Key) Vault Summary */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Key size={14} className="text-emerald-600" /> Custom API Keys (BYOK)
              </span>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                2 Active
              </span>
            </div>

            <div className="space-y-2 text-xs font-mono">
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center">
                <span className="font-bold text-slate-900">OpenAI GPT-4o</span>
                <span className="text-slate-500">sk-...89f2</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center">
                <span className="font-bold text-slate-900">Anthropic Claude</span>
                <span className="text-slate-500">sk-ant-...a1b2</span>
              </div>
            </div>

            <Link
              to="/settings"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:underline"
            >
              <span>Manage API Keys</span>
              <ArrowRight size={13} />
            </Link>
          </div>

        </div>

        {/* Synced Workspaces & Projects Grid */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Your Indexed Workspaces</h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Repositories mapped locally with full context awareness and vector search.
              </p>
            </div>

            <button className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-slate-800 transition-all cursor-pointer">
              <FolderGit2 size={14} />
              <span>Connect New Repository</span>
            </button>
          </div>

          <div className="divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden">
            {WORKSPACES.map((ws, idx) => (
              <div key={idx} className="p-4 sm:p-5 bg-white hover:bg-slate-50/80 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-extrabold text-slate-900">{ws.name}</span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded-full">
                      {ws.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-500 font-mono">
                    <span>{ws.repo}</span>
                    <span>•</span>
                    <span>{ws.language}</span>
                    <span>•</span>
                    <span>{ws.updated}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    to="/download"
                    className="inline-flex items-center gap-1.5 bg-slate-100 border border-slate-300 text-slate-800 px-3.5 py-1.5 rounded-lg text-xs font-bold hover:bg-slate-200 transition-colors"
                  >
                    <Laptop size={13} />
                    <span>Open Desktop</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </motion.div>
  );
}
