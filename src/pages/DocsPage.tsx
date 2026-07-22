import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import HeroBackgroundAnimation from '../components/HeroBackgroundAnimation';
import { BookOpen, Terminal, Search, Settings, HelpCircle, Code, Copy, Check, ChevronRight, Sliders, Play, Keyboard } from 'lucide-react';

const DOCS_SECTIONS = [
  {
    id: 'quickstart',
    title: 'Quick Start Guide',
    icon: <Play size={13} />,
    category: 'Getting Started',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-extrabold text-text-primary tracking-tight font-mono uppercase">Quick Start Guide</h2>
        <p className="text-sm text-text-secondary leading-relaxed">
          Welcome to AayaamX. Our compiler-first IDE completely integrates model reasoning with the editor’s C++ event stream buffer. This section guides you through compiling your first lines of code natively.
        </p>

        <h3 className="text-sm font-bold text-text-primary font-mono uppercase tracking-wide">1. Core Installation</h3>
        <p className="text-xs text-text-secondary leading-relaxed">
          The easiest way to initialize the compiler environment is via our terminal installer script:
        </p>
        <div className="bg-[#0c0c0c] border border-[#222222] rounded-lg p-4 font-mono text-xs text-white">
          curl -fsSL https://aayaamx.build/install.sh | sh
        </div>

        <h3 className="text-sm font-bold text-text-primary font-mono uppercase tracking-wide">2. Workspace Initialization</h3>
        <p className="text-xs text-text-secondary leading-relaxed">
          Once installed, boot the editor or use our CLI inside your project workspace folder:
        </p>
        <div className="bg-[#0c0c0c] border border-[#222222] rounded-lg p-4 font-mono text-xs text-white space-y-1">
          <div>cd my-typescript-repo</div>
          <div className="text-[#10B981]">aayaamx .</div>
        </div>

        <h3 className="text-sm font-bold text-text-primary font-mono uppercase tracking-wide">3. Triggering the Reasoning Engine</h3>
        <p className="text-xs text-text-secondary leading-relaxed">
          Open any TypeScript, Rust, or Go file. Press <kbd className="bg-bg-primary border border-border-primary px-1.5 py-0.5 rounded text-[10px] font-mono shadow-xs text-text-primary">Ctrl + I</kbd> (or <kbd className="bg-bg-primary border border-border-primary px-1.5 py-0.5 rounded text-[10px] font-mono shadow-xs text-text-primary">Cmd + I</kbd> on macOS) to invoke the inline generator. Ask the model to refactor, write, or document your logic instantly.
        </p>
      </div>
    )
  },
  {
    id: 'cli',
    title: 'Command Line Interface (CLI)',
    icon: <Terminal size={13} />,
    category: 'Reference',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-extrabold text-text-primary tracking-tight font-mono uppercase">CLI Interface (aayaamx)</h2>
        <p className="text-sm text-text-secondary leading-relaxed">
          Manage local index maps, configuration profiles, and environment handshakes directly from your shell terminal.
        </p>

        <div className="border border-border-primary rounded-lg overflow-hidden bg-bg-primary shadow-xs">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="bg-bg-secondary border-b border-border-primary text-text-primary font-bold">
                <th className="p-4">Command</th>
                <th className="p-4">Usage Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-primary text-text-secondary">
              <tr>
                <td className="p-4 font-bold text-text-primary">aayaamx .</td>
                <td className="p-4">Opens the current folder workspace in the editor.</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-text-primary">aayaamx index init</td>
                <td className="p-4">Initializes local vector embeddings index map.</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-text-primary">aayaamx config show</td>
                <td className="p-4">Displays active model connection settings and privacy profiles.</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-text-primary">aayaamx tunnel --port 3000</td>
                <td className="p-4">Establishes secure background workspace links for remote container environments.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    id: 'shortcuts',
    title: 'Keyboard Shortcuts',
    icon: <Keyboard size={13} />,
    category: 'UX & Productivity',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-extrabold text-text-primary tracking-tight font-mono uppercase">Keyboard Shortcuts</h2>
        <p className="text-sm text-text-secondary leading-relaxed">
          Maintain flow and state. AayaamX is designed with a keyboard-centric paradigm so you rarely have to pick up your mouse.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border-primary bg-bg-primary rounded-lg p-5 space-y-3">
            <h4 className="text-xs font-bold text-text-primary font-mono uppercase">Model Navigation</h4>
            <div className="space-y-2 font-mono text-xs">
              <div className="flex justify-between border-b border-border-primary pb-1">
                <span>Invoke inline agent</span>
                <span className="text-[#10B981] font-bold">Ctrl + I</span>
              </div>
              <div className="flex justify-between border-b border-border-primary pb-1">
                <span>Toggle chat sidebar</span>
                <span className="text-[#10B981] font-bold">Ctrl + L</span>
              </div>
              <div className="flex justify-between border-b border-border-primary pb-1">
                <span>Accept inline code diff</span>
                <span className="text-[#10B981] font-bold">Tab</span>
              </div>
              <div className="flex justify-between">
                <span>Reject code diff</span>
                <span className="text-[#10B981] font-bold">Esc</span>
              </div>
            </div>
          </div>

          <div className="border border-border-primary bg-bg-primary rounded-lg p-5 space-y-3">
            <h4 className="text-xs font-bold text-text-primary font-mono uppercase">Editor Commands</h4>
            <div className="space-y-2 font-mono text-xs">
              <div className="flex justify-between border-b border-border-primary pb-1">
                <span>Toggle built-in terminal</span>
                <span className="text-text-primary font-bold">Ctrl + `</span>
              </div>
              <div className="flex justify-between border-b border-border-primary pb-1">
                <span>Command palette menu</span>
                <span className="text-text-primary font-bold">Ctrl + P</span>
              </div>
              <div className="flex justify-between border-b border-border-primary pb-1">
                <span>Go to Symbol reference</span>
                <span className="text-text-primary font-bold">F12</span>
              </div>
              <div className="flex justify-between">
                <span>Show inline compiler logs</span>
                <span className="text-text-primary font-bold">Alt + E</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'config',
    title: 'System Configuration',
    icon: <Settings size={13} />,
    category: 'System Design',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-extrabold text-text-primary tracking-tight font-mono uppercase">System Configuration</h2>
        <p className="text-sm text-text-secondary leading-relaxed">
          Configure active models, keybindings mapping profiles, and local directory security files within your local user configs.
        </p>

        <p className="text-xs text-text-secondary leading-relaxed">
          Create a file named <code className="bg-bg-primary border border-border-primary px-1 py-0.5 rounded font-mono text-text-primary font-bold">aayaamx.config.json</code> in your project’s root folder to configure custom behaviors:
        </p>

        <div className="bg-[#0c0c0c] border border-[#222222] rounded-lg p-5 font-mono text-[11px] text-[#cccccc] space-y-1">
          <div>{"{"}</div>
          <div className="pl-4">{"\"model\": \"gemini-2.5-pro\","}</div>
          <div className="pl-4">{"\"privacy\": {"}</div>
          <div className="pl-8">{"\"localVectorIndexOnly\": true,"}</div>
          <div className="pl-8">{"\"zeroDataRetention\": true"}</div>
          <div className="pl-4">{"},"}</div>
          <div className="pl-4">{"\"compilerPath\": \"/usr/bin/tsc\","}</div>
          <div className="pl-4">{"\"autoFixOnSave\": true"}</div>
          <div>{"}"}</div>
        </div>
      </div>
    )
  }
];

export default function DocsPage() {
  const [activeTab, setActiveTab] = useState('quickstart');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDocs = DOCS_SECTIONS.filter(doc =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-bg-primary text-text-primary min-h-screen pt-28 md:pt-36 pb-20 md:pb-28 transition-colors duration-300 relative overflow-hidden"
    >
      <HeroBackgroundAnimation variant="subtle" />
      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Documentation Indexing Sidebar */}
          <div className="lg:col-span-3 space-y-6 bg-bg-secondary border border-border-primary rounded-xl p-5 shadow-xs">
            
            {/* Search Input */}
            <div className="relative">
              <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary/60" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs bg-bg-primary border border-border-primary rounded-lg pl-9 pr-3.5 py-2.5 focus:outline-none focus:border-text-secondary/40 focus:bg-bg-secondary text-text-primary font-mono"
                placeholder="Search documentation..."
              />
            </div>

            {/* Links Categories navigation */}
            <div className="space-y-6 pt-4 border-t border-border-primary">
              <div>
                <h4 className="text-[9px] font-mono font-bold uppercase tracking-widest text-text-secondary/60 mb-3">SYSTEM GUIDES</h4>
                <div className="space-y-1">
                  {filteredDocs.map((doc) => (
                    <button
                      key={doc.id}
                      onClick={() => setActiveTab(doc.id)}
                      className={`w-full flex items-center justify-between text-left px-3 py-2.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                        activeTab === doc.id 
                          ? 'bg-[#10B981]/5 border border-[#10B981]/10 text-[#10B981] font-bold' 
                          : 'text-text-secondary hover:bg-bg-primary'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {doc.icon}
                        {doc.title}
                      </span>
                      <ChevronRight size={10} className={`opacity-60 transition-transform ${activeTab === doc.id ? 'translate-x-0.5' : ''}`} />
                    </button>
                  ))}
                  {filteredDocs.length === 0 && (
                    <div className="text-[11px] text-text-secondary italic px-3">No documents matched your filter query.</div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Documentation Viewer Panel */}
          <div className="lg:col-span-9 bg-bg-secondary border border-border-primary rounded-xl p-8 md:p-12 shadow-xs">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                {DOCS_SECTIONS.find(doc => doc.id === activeTab)?.content}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
