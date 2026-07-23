import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  Github,
  Mail,
  Download,
  Terminal,
  Cpu,
  ShieldCheck,
  Sparkles,
  Laptop,
  Apple,
  Sliders,
  Code,
  Check
} from 'lucide-react';
import Logo from '../components/Logo';

export default function OnboardingPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);

  // Step 1 State
  const [accountType, setAccountType] = useState<'github' | 'email'>('github');
  const [connected, setConnected] = useState(false);

  // Step 2 State
  const [selectedEditor, setSelectedEditor] = useState<string>('vscode');
  const [importing, setImporting] = useState(false);
  const [imported, setImported] = useState(false);

  // Step 3 State
  const [selectedModel, setSelectedModel] = useState<string>('claude-sonnet');

  function handleConnectAccount() {
    setConnected(true);
  }

  function handleImportSettings() {
    setImporting(true);
    setTimeout(() => {
      setImporting(false);
      setImported(true);
    }, 1000);
  }

  function handleCompleteOnboarding() {
    navigate('/dashboard');
  }

  const EDITORS = [
    { id: 'vscode', name: 'VS Code', label: 'Keybindings, Themes & Extensions', icon: '⚡' },
    { id: 'cursor', name: 'Cursor AI', label: 'Rules, Prompts & Settings', icon: '🤖' },
    { id: 'vim', name: 'Vim / Neovim', label: 'Vimrc & Modal Muscle Memory', icon: '⌨️' },
    { id: 'jetbrains', name: 'JetBrains', label: 'IntelliJ / WebStorm Shortcuts', icon: '🚀' }
  ];

  const AI_MODELS = [
    { id: 'claude-sonnet', name: 'Claude 3.5 Sonnet', desc: 'Best for complex multi-file architectural refactoring', tag: 'Recommended' },
    { id: 'gpt-4o', name: 'GPT-4o Omnimodal', desc: 'Ultra-fast autocomplete and broad API knowledge', tag: 'Fast' },
    { id: 'deepseek-r1', name: 'DeepSeek R1', desc: 'Deep mathematical logic and open-weights reasoning', tag: 'Open Weights' },
    { id: 'local-vault', name: 'Local Privacy Vault', desc: '100% Offline C++ engine running locally on your hardware', tag: 'Zero Data Retention' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-slate-50 text-slate-900 min-h-screen pt-12 pb-24 px-4 sm:px-6 transition-colors duration-300"
    >
      <div className="max-w-3xl mx-auto">
        
        {/* Top Header Logo */}
        <div className="text-center mb-8 flex flex-col items-center">
          <Logo size="lg" />
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mt-4">
            Welcome to Code Aayaam
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md">
            Let's configure your developer environment in 3 quick steps.
          </p>
        </div>

        {/* Multi-step Progress Bar */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm mb-8">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0" />
            
            {/* Step 1 Indicator */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <button
                onClick={() => setCurrentStep(1)}
                className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  currentStep === 1
                    ? 'bg-emerald-500 text-slate-950 ring-4 ring-emerald-500/20'
                    : currentStep > 1
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-500 border border-slate-300'
                }`}
              >
                {currentStep > 1 ? <Check size={14} /> : '1'}
              </button>
              <span className="text-[11px] font-semibold text-slate-700 hidden sm:block">Connect Account</span>
            </div>

            {/* Step 2 Indicator */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <button
                onClick={() => setCurrentStep(2)}
                className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  currentStep === 2
                    ? 'bg-emerald-500 text-slate-950 ring-4 ring-emerald-500/20'
                    : currentStep > 2
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-500 border border-slate-300'
                }`}
              >
                {currentStep > 2 ? <Check size={14} /> : '2'}
              </button>
              <span className="text-[11px] font-semibold text-slate-700 hidden sm:block">Import Settings</span>
            </div>

            {/* Step 3 Indicator */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <button
                onClick={() => setCurrentStep(3)}
                className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  currentStep === 3
                    ? 'bg-emerald-500 text-slate-950 ring-4 ring-emerald-500/20'
                    : 'bg-slate-100 text-slate-500 border border-slate-300'
                }`}
              >
                3
              </button>
              <span className="text-[11px] font-semibold text-slate-700 hidden sm:block">AI & Download</span>
            </div>
          </div>
        </div>

        {/* STEP 1 CONTENT: CONNECT ACCOUNT */}
        {currentStep === 1 && (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Step 1: Connect your account</h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Link your GitHub or email to synchronize repository vectors and access your developer seat.
              </p>
            </div>

            <div className="space-y-4">
              {/* GitHub Button */}
              <div
                onClick={() => setAccountType('github')}
                className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                  accountType === 'github'
                    ? 'border-emerald-500 bg-emerald-50/50 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-900 text-white">
                    <Github size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Connect with GitHub</h3>
                    <p className="text-xs text-slate-600">Auto-sync public & private repository context</p>
                  </div>
                </div>
                {connected && accountType === 'github' ? (
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-100 border border-emerald-300 px-3 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle2 size={13} /> Connected
                  </span>
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleConnectAccount();
                    }}
                    className="text-xs font-bold bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    Connect
                  </button>
                )}
              </div>

              {/* Email Option */}
              <div
                onClick={() => setAccountType('email')}
                className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                  accountType === 'email'
                    ? 'border-emerald-500 bg-emerald-50/50 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500 text-slate-950">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Continue with Email / License Key</h3>
                    <p className="text-xs text-slate-600">Use email authentication for seat verification</p>
                  </div>
                </div>
                {connected && accountType === 'email' ? (
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-100 border border-emerald-300 px-3 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle2 size={13} /> Verified
                  </span>
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleConnectAccount();
                    }}
                    className="text-xs font-bold bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    Verify Email
                  </button>
                )}
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setCurrentStep(2)}
                className="inline-flex items-center gap-2 bg-emerald-500 text-slate-950 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm hover:bg-emerald-400 shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <span>Continue to Step 2</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 CONTENT: IMPORT SETTINGS & MUSCLE MEMORY */}
        {currentStep === 2 && (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Step 2: Import Keybindings & Settings</h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Preserve your muscle memory. Select your primary editor to 1-click import shortcuts and configuration.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EDITORS.map((editor) => (
                <div
                  key={editor.id}
                  onClick={() => setSelectedEditor(editor.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                    selectedEditor === editor.id
                      ? 'border-emerald-500 bg-emerald-50/50 shadow-sm ring-1 ring-emerald-500'
                      : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{editor.icon}</span>
                    <h3 className="text-sm font-bold text-slate-900">{editor.name}</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{editor.label}</p>
                </div>
              ))}
            </div>

            {/* Import Status Box */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sliders size={16} className="text-emerald-600" />
                <span className="text-xs font-semibold text-slate-800">
                  {imported
                    ? `Successfully imported configuration from ${selectedEditor.toUpperCase()}!`
                    : `Ready to sync settings from ${selectedEditor.toUpperCase()}`}
                </span>
              </div>
              <button
                onClick={handleImportSettings}
                disabled={importing || imported}
                className={`text-xs font-bold px-4 py-2 rounded-lg transition-all ${
                  imported
                    ? 'bg-emerald-100 text-emerald-700 border border-emerald-300'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {importing ? 'Syncing...' : imported ? 'Imported' : '1-Click Import'}
              </button>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                onClick={() => setCurrentStep(1)}
                className="text-xs font-bold text-slate-600 hover:text-slate-900"
              >
                Back
              </button>
              <button
                onClick={() => setCurrentStep(3)}
                className="inline-flex items-center gap-2 bg-emerald-500 text-slate-950 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm hover:bg-emerald-400 shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <span>Continue to Step 3</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 CONTENT: AI MODEL PREFERENCE & DESKTOP DOWNLOAD */}
        {currentStep === 3 && (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Step 3: Select AI Preference & Desktop Editor</h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Choose your default intelligence model engine and download Code Aayaam for your OS.
              </p>
            </div>

            {/* AI Model Grid */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Preferred AI Engine</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {AI_MODELS.map((model) => (
                  <div
                    key={model.id}
                    onClick={() => setSelectedModel(model.id)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                      selectedModel === model.id
                        ? 'border-emerald-500 bg-emerald-50/50 shadow-sm ring-1 ring-emerald-500'
                        : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-xs font-bold text-slate-900">{model.name}</h4>
                      <span className="text-[9px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                        {model.tag}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">{model.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Native Downloads Box */}
            <div className="p-5 rounded-xl bg-slate-900 text-white space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Laptop size={18} className="text-emerald-400" />
                  <span className="text-xs font-bold text-white">Code Aayaam Native Build (v2.4.0)</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 border border-emerald-800 px-2 py-0.5 rounded">
                  Sub-15ms Latency
                </span>
              </div>
              
              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  to="/download"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-xs font-extrabold text-slate-950 hover:bg-emerald-400 transition-all"
                >
                  <Laptop size={14} />
                  <span>Download for Windows 11 x64</span>
                </Link>
                <Link
                  to="/download"
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-800 border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-700 transition-all"
                >
                  <Apple size={14} />
                  <span>macOS Silicon</span>
                </Link>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                onClick={() => setCurrentStep(2)}
                className="text-xs font-bold text-slate-600 hover:text-slate-900"
              >
                Back
              </button>
              <button
                onClick={handleCompleteOnboarding}
                className="inline-flex items-center gap-2 bg-emerald-500 text-slate-950 px-8 py-3.5 rounded-xl font-extrabold text-sm hover:bg-emerald-400 shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
              >
                <span>Launch Developer Dashboard</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

      </div>
    </motion.div>
  );
}
