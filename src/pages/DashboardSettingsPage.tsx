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
  ShieldCheck,
  Save,
  ArrowLeft
} from 'lucide-react';
import Logo from '../components/Logo';

export default function DashboardSettingsPage() {
  const [openaiKey, setOpenaiKey] = useState('sk-proj-89f2a9b4c7d1e3f5');
  const [anthropicKey, setAnthropicKey] = useState('sk-ant-a1b2c3d4e5f6');
  const [deepseekKey, setDeepseekKey] = useState('');
  const [ollamaUrl, setOllamaUrl] = useState('http://localhost:11434');

  const [zdrEnabled, setZdrEnabled] = useState(true);
  const [telemetryOptOut, setTelemetryOptOut] = useState(true);
  const [saved, setSaved] = useState(false);

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
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

            <div className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
              <Key size={16} className="text-emerald-600" />
              <span>API Keys & Settings</span>
            </div>

            <Link
              to="/upgrade"
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all"
            >
              <Sparkles size={16} className="text-emerald-600" />
              <span>Upgrade to Pro</span>
            </Link>

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

      {/* 2. MAIN SETTINGS CONTENT AREA */}
      <main className="flex-1 p-6 sm:p-10 space-y-8 max-w-5xl">
        
        <div className="flex items-center justify-between pb-6 border-b border-slate-200">
          <div>
            <h1 className="font-editorial text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight">Developer Settings</h1>
            <p className="text-xs text-slate-600 mt-1">Configure your personal API keys and local privacy vault.</p>
          </div>

          <Link
            to="/dashboard"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 px-3.5 py-2 rounded-xl transition-all"
          >
            <ArrowLeft size={14} />
            <span>Back to Overview</span>
          </Link>
        </div>

        <form onSubmit={handleSave} className="space-y-8">
          
          {/* BYOK Section */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2 text-slate-900">
                <Key size={20} className="text-emerald-600" />
                <h2 className="text-base font-extrabold">Bring Your Own Key (BYOK)</h2>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Configure your personal AI provider keys. Your keys are encrypted locally with hardware-bound AES-256 keys.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-mono">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">OpenAI API Key</label>
                <input
                  type="password"
                  value={openaiKey}
                  onChange={(e) => setOpenaiKey(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-emerald-500 focus:bg-white text-slate-900"
                  placeholder="sk-..."
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Anthropic Claude Key</label>
                <input
                  type="password"
                  value={anthropicKey}
                  onChange={(e) => setAnthropicKey(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-emerald-500 focus:bg-white text-slate-900"
                  placeholder="sk-ant-..."
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">DeepSeek API Key</label>
                <input
                  type="password"
                  value={deepseekKey}
                  onChange={(e) => setDeepseekKey(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-emerald-500 focus:bg-white text-slate-900"
                  placeholder="sk-ds-..."
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Ollama Local Server URL</label>
                <input
                  type="text"
                  value={ollamaUrl}
                  onChange={(e) => setOllamaUrl(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-emerald-500 focus:bg-white text-slate-900"
                  placeholder="http://localhost:11434"
                />
              </div>
            </div>
          </div>

          {/* Privacy Vault Section */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2 text-slate-900">
                <ShieldCheck size={20} className="text-emerald-600" />
                <h2 className="text-base font-extrabold">Privacy & Local Security Vault</h2>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Strict Zero Data Retention controls to guarantee complete source code privacy.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Zero Data Retention (ZDR) Guarantee</h4>
                  <p className="text-[11px] text-slate-600">Model APIs will never cache, log, or train on your repository buffers.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setZdrEnabled(!zdrEnabled)}
                  className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                    zdrEnabled ? 'bg-emerald-500' : 'bg-slate-300'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${
                    zdrEnabled ? 'left-5.5' : 'left-0.5'
                  }`} />
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Opt-Out of Anonymous Usage Telemetry</h4>
                  <p className="text-[11px] text-slate-600">Disable all background diagnostic crash reporting.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setTelemetryOptOut(!telemetryOptOut)}
                  className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                    telemetryOptOut ? 'bg-emerald-500' : 'bg-slate-300'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${
                    telemetryOptOut ? 'left-5.5' : 'left-0.5'
                  }`} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs font-semibold text-emerald-700">
              {saved && '✓ All settings updated and encrypted successfully!'}
            </span>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-emerald-500 text-slate-950 px-8 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm hover:bg-emerald-400 shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
            >
              <Save size={16} />
              <span>Save & Apply Settings</span>
            </button>
          </div>

        </form>

      </main>
    </motion.div>
  );
}
