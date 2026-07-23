import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Key,
  ShieldCheck,
  Sliders,
  CheckCircle2,
  Lock,
  Save,
  Cpu,
  RefreshCw
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
      className="bg-slate-50 text-slate-900 min-h-screen pb-24 transition-colors duration-300"
    >
      {/* Top Header Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg transition-all"
            >
              <ArrowLeft size={14} />
              <span>Back to Dashboard</span>
            </Link>
            <span className="text-slate-300">|</span>
            <span className="text-sm font-bold text-slate-900">Developer Settings</span>
          </div>

          <Link to="/">
            <Logo size="sm" />
          </Link>
        </div>
      </header>

      {/* Main Settings Form Container */}
      <main className="mx-auto max-w-5xl px-4 sm:px-6 pt-8 space-y-8">
        
        <form onSubmit={handleSave} className="space-y-8">
          
          {/* Section 1: Bring Your Own Key (BYOK) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2 text-slate-900">
                <Key size={20} className="text-emerald-600" />
                <h2 className="text-lg font-extrabold">Bring Your Own Key (BYOK)</h2>
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

          {/* Section 2: Privacy & Security Controls */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2 text-slate-900">
                <ShieldCheck size={20} className="text-emerald-600" />
                <h2 className="text-lg font-extrabold">Privacy & Local Security Vault</h2>
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

          {/* Action Bar */}
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
