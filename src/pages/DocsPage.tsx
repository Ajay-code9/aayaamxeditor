import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Sparkles, 
  ShieldCheck, 
  Keyboard, 
  Settings, 
  Terminal, 
  HelpCircle, 
  Search, 
  ChevronRight, 
  Check, 
  Zap, 
  Lock, 
  FileCode, 
  MessageSquareText, 
  Cpu
} from 'lucide-react';

const DOCS_SECTIONS = [
  {
    id: 'quickstart',
    title: '1. Beginner Quick Start',
    icon: <Play size={14} />,
    category: 'Essentials',
    content: (
      <div className="space-y-6">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md">
            GETTING STARTED IN 2 MINUTES
          </span>
          <h2 className="text-2xl font-extrabold text-text-primary tracking-tight mt-3">
            Welcome to AayaamX Editor
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed mt-2">
            Think of AayaamX as your super-smart AI coding partner. Whether you are an experienced software engineer or completely new to building websites and apps, AayaamX helps you write, edit, and fix code using simple everyday English.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-text-primary space-y-1">
          <p className="font-bold text-emerald-400 flex items-center gap-1.5">
            <Zap size={14} />
            No Complex Setup Required!
          </p>
          <p className="text-text-secondary">
            You don’t need to configure complex AI servers or API keys. AayaamX comes fully ready out of the box.
          </p>
        </div>

        <div className="space-y-4 pt-2">
          <div className="p-4 rounded-xl bg-bg-primary border border-border-primary space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-text-primary">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">1</span>
              <span>Download & Open AayaamX</span>
            </div>
            <p className="text-xs text-text-secondary pl-8 leading-relaxed">
              Launch the application on your Windows, Mac, or Linux computer. You will see a clean, modern workspace.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-bg-primary border border-border-primary space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-text-primary">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">2</span>
              <span>Open Your Project Folder</span>
            </div>
            <p className="text-xs text-text-secondary pl-8 leading-relaxed">
              Click <strong>"Open Folder"</strong> from the top menu or welcome screen to select your project files.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-bg-primary border border-border-primary space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-text-primary">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">3</span>
              <span>Ask AI to Write or Fix Code</span>
            </div>
            <p className="text-xs text-text-secondary pl-8 leading-relaxed">
              Open any file and press <kbd className="bg-bg-secondary border border-border-primary px-1.5 py-0.5 rounded text-[11px] font-mono text-text-primary">Ctrl + I</kbd> (or <kbd className="bg-bg-secondary border border-border-primary px-1.5 py-0.5 rounded text-[11px] font-mono text-text-primary">Cmd + I</kbd> on Mac). Type what you want in plain English like: <em>"Add a dark mode toggle button to my website"</em>.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'ai-features',
    title: '2. How AI Features Work',
    icon: <Sparkles size={14} />,
    category: 'Features',
    content: (
      <div className="space-y-6">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md">
            AI CAPABILITIES MADE SIMPLE
          </span>
          <h2 className="text-2xl font-extrabold text-text-primary tracking-tight mt-3">
            Understanding Your AI Superpowers
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed mt-2">
            AayaamX gives you 4 powerful AI assistants inside your editor, designed to save you hours of manual typing and debugging.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-5 rounded-xl bg-bg-primary border border-border-primary space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <MessageSquareText size={16} />
              <span>1. Inline Smart Assistant (Ctrl + I)</span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              Select any piece of code or place your cursor anywhere. Press <code className="text-text-primary font-bold">Ctrl + I</code> and tell the AI what to create, edit, or clean up. It edits the code directly on your screen.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-bg-primary border border-border-primary space-y-2">
            <div className="flex items-center gap-2 text-teal-400 font-bold text-sm">
              <Sparkles size={16} />
              <span>2. Full Workspace Chat (Ctrl + L)</span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              Have a conversation with AI about your entire project. Ask questions like: <em>"Where are my database files?"</em> or <em>"How does payment processing work here?"</em>.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-bg-primary border border-border-primary space-y-2">
            <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
              <Zap size={16} />
              <span>3. Real-Time Autocomplete</span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              As you type, AayaamX predicts the rest of your line or function in grey text. Simply press <code className="text-text-primary font-bold">Tab</code> to accept the suggested code instantly.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-bg-primary border border-border-primary space-y-2">
            <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
              <Cpu size={16} />
              <span>4. One-Click Bug Fixer</span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              When an error or red underline occurs, hover over it and click <strong>"Fix with AayaamX AI"</strong>. The editor diagnoses the issue and fixes it automatically.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'privacy-security',
    title: '3. Privacy & Security Guide',
    icon: <ShieldCheck size={14} />,
    category: 'Security',
    content: (
      <div className="space-y-6">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md">
            100% PRIVATE & SECURE
          </span>
          <h2 className="text-2xl font-extrabold text-text-primary tracking-tight mt-3">
            Your Code Stays Yours — Guaranteed
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed mt-2">
            We understand that your project files and intellectual property are private. Here is how AayaamX protects your code:
          </p>
        </div>

        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-bg-primary border border-border-primary flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <Lock size={18} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-text-primary">Zero Data Retention (ZDR)</h4>
              <p className="text-xs text-text-secondary leading-relaxed mt-1">
                Your code is processed temporarily to generate answers and is instantly deleted. We never store, sell, or train public AI models on your private code.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-bg-primary border border-border-primary flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <Cpu size={18} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-text-primary">Local Offline Mode Available</h4>
              <p className="text-xs text-text-secondary leading-relaxed mt-1">
                Prefer working without internet? AayaamX includes built-in lightweight local models that run directly on your laptop without sending a single byte to the cloud.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-bg-primary border border-border-primary flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <ShieldCheck size={18} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-text-primary">Enterprise Compliance Ready</h4>
              <p className="text-xs text-text-secondary leading-relaxed mt-1">
                Supports SOC2 Type II compliance standards, encrypted TLS 1.3 data transfer, and custom SAML SSO login for enterprise engineering teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'shortcuts',
    title: '4. Essential Keyboard Shortcuts',
    icon: <Keyboard size={14} />,
    category: 'Productivity',
    content: (
      <div className="space-y-6">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md">
            WORK 3X FASTER
          </span>
          <h2 className="text-2xl font-extrabold text-text-primary tracking-tight mt-3">
            Handy Keyboard Shortcuts
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed mt-2">
            Master these 6 simple keyboard shortcuts to code without constantly reaching for your mouse:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-bg-primary border border-border-primary flex justify-between items-center">
            <div>
              <p className="text-xs font-bold text-text-primary">Open AI Assistant Inline</p>
              <p className="text-[11px] text-text-secondary">Ask AI to write or modify code</p>
            </div>
            <kbd className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
              Ctrl + I
            </kbd>
          </div>

          <div className="p-4 rounded-xl bg-bg-primary border border-border-primary flex justify-between items-center">
            <div>
              <p className="text-xs font-bold text-text-primary">Open Full Project Chat</p>
              <p className="text-[11px] text-text-secondary">Ask questions about your project</p>
            </div>
            <kbd className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
              Ctrl + L
            </kbd>
          </div>

          <div className="p-4 rounded-xl bg-bg-primary border border-border-primary flex justify-between items-center">
            <div>
              <p className="text-xs font-bold text-text-primary">Accept AI Autocomplete</p>
              <p className="text-[11px] text-text-secondary">Accept grey suggested text</p>
            </div>
            <kbd className="px-2.5 py-1 rounded bg-bg-secondary border border-border-primary text-text-primary font-mono text-xs font-bold">
              Tab
            </kbd>
          </div>

          <div className="p-4 rounded-xl bg-bg-primary border border-border-primary flex justify-between items-center">
            <div>
              <p className="text-xs font-bold text-text-primary">Dismiss AI Suggestion</p>
              <p className="text-[11px] text-text-secondary">Cancel current suggestion</p>
            </div>
            <kbd className="px-2.5 py-1 rounded bg-bg-secondary border border-border-primary text-text-primary font-mono text-xs font-bold">
              Esc
            </kbd>
          </div>

          <div className="p-4 rounded-xl bg-bg-primary border border-border-primary flex justify-between items-center">
            <div>
              <p className="text-xs font-bold text-text-primary">Quick File Search</p>
              <p className="text-[11px] text-text-secondary">Jump to any file by name</p>
            </div>
            <kbd className="px-2.5 py-1 rounded bg-bg-secondary border border-border-primary text-text-primary font-mono text-xs font-bold">
              Ctrl + P
            </kbd>
          </div>

          <div className="p-4 rounded-xl bg-bg-primary border border-border-primary flex justify-between items-center">
            <div>
              <p className="text-xs font-bold text-text-primary">Toggle Built-in Terminal</p>
              <p className="text-[11px] text-text-secondary">Open command line shell</p>
            </div>
            <kbd className="px-2.5 py-1 rounded bg-bg-secondary border border-border-primary text-text-primary font-mono text-xs font-bold">
              Ctrl + `
            </kbd>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'config',
    title: '5. Simple Settings & Tweaks',
    icon: <Settings size={14} />,
    category: 'Settings',
    content: (
      <div className="space-y-6">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md">
            CUSTOMIZATION
          </span>
          <h2 className="text-2xl font-extrabold text-text-primary tracking-tight mt-3">
            Personalize Your Workspace
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed mt-2">
            You can easily adjust themes, font sizes, and AI preferences from the Settings menu (<kbd className="bg-bg-primary border border-border-primary px-1.5 py-0.5 rounded text-[11px] font-mono text-text-primary">Ctrl + ,</kbd>).
          </p>
        </div>

        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-bg-primary border border-border-primary">
            <h4 className="text-xs font-bold text-text-primary">🎨 Light & Dark Themes</h4>
            <p className="text-xs text-text-secondary mt-1">
              Switch between eye-relaxing dark mode and crisp off-white light mode with 1 click using the Sun/Moon toggle in the top navigation bar.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-bg-primary border border-border-primary">
            <h4 className="text-xs font-bold text-text-primary">⚡ Preferred AI Model Selection</h4>
            <p className="text-xs text-text-secondary mt-1">
              Choose your favorite AI model in Settings — switch between fast lightweight models for speed, or deep reasoning models for complex logic.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-bg-primary border border-border-primary">
            <h4 className="text-xs font-bold text-text-primary">📁 Custom Rules (`aayaamx.config.json`)</h4>
            <p className="text-xs text-text-secondary mt-1">
              Want the AI to follow your team's specific coding style? Add a simple text file named <code className="text-emerald-400 font-mono">aayaamx.config.json</code> to your project folder to set custom rules.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'cli',
    title: '6. Command Line Helper (CLI)',
    icon: <Terminal size={14} />,
    category: 'Advanced',
    content: (
      <div className="space-y-6">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md">
            FOR TERMINAL USERS
          </span>
          <h2 className="text-2xl font-extrabold text-text-primary tracking-tight mt-3">
            Command Line Interface
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed mt-2">
            If you like working inside your system command prompt or terminal, you can launch AayaamX directly from the command line:
          </p>
        </div>

        <div className="border border-border-primary rounded-xl overflow-hidden bg-bg-primary shadow-xs">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="bg-bg-secondary border-b border-border-primary text-text-primary font-bold">
                <th className="p-4">Command</th>
                <th className="p-4">What It Does</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-primary text-text-secondary">
              <tr>
                <td className="p-4 font-bold text-emerald-400">aayaamx .</td>
                <td className="p-4">Opens your current folder inside AayaamX Editor immediately.</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-emerald-400">aayaamx filename.js</td>
                <td className="p-4">Opens a specific file directly in the editor.</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-emerald-400">aayaamx --version</td>
                <td className="p-4">Displays your installed version of AayaamX Editor.</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-emerald-400">aayaamx config show</td>
                <td className="p-4">Shows your active privacy and model connection settings.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    id: 'faq',
    title: '7. Frequently Asked Questions',
    icon: <HelpCircle size={14} />,
    category: 'Help & FAQ',
    content: (
      <div className="space-y-6">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md">
            COMMON QUESTIONS ANSWERED
          </span>
          <h2 className="text-2xl font-extrabold text-text-primary tracking-tight mt-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed mt-2">
            Everything you need to know about AayaamX in simple, plain English:
          </p>
        </div>

        <div className="space-y-4 pt-2">
          <div className="p-5 rounded-xl bg-bg-primary border border-border-primary space-y-1.5">
            <h4 className="text-xs font-bold text-text-primary">Do I need years of coding experience to use AayaamX?</h4>
            <p className="text-xs text-text-secondary leading-relaxed">
              Not at all! AayaamX is designed for everyone — from complete beginners building their first website to senior software architects. You can type instructions in plain English and watch the AI write the code for you.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-bg-primary border border-border-primary space-y-1.5">
            <h4 className="text-xs font-bold text-text-primary">Is AayaamX free to use?</h4>
            <p className="text-xs text-text-secondary leading-relaxed">
              Yes! We offer a generous Free tier that includes full access to the editor and monthly AI usage. If you need heavier AI credits for massive monorepos, optional paid plans are available starting at just $3/month.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-bg-primary border border-border-primary space-y-1.5">
            <h4 className="text-xs font-bold text-text-primary">What programming languages does AayaamX support?</h4>
            <p className="text-xs text-text-secondary leading-relaxed">
              AayaamX supports over 40+ programming languages including JavaScript, TypeScript, Python, HTML/CSS, React, C++, Rust, Go, Java, PHP, and SQL out of the box.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-bg-primary border border-border-primary space-y-1.5">
            <h4 className="text-xs font-bold text-text-primary">Can I import my existing VS Code extensions and settings?</h4>
            <p className="text-xs text-text-secondary leading-relaxed">
              Yes! AayaamX supports 1-click migration. When you first launch AayaamX, you can import all your VS Code keybindings, themes, and extensions automatically.
            </p>
          </div>
        </div>
      </div>
    )
  }
];

export default function DocsPage() {
  const [activeTab, setActiveTab] = useState('quickstart');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDocs = DOCS_SECTIONS.filter(doc =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-bg-primary text-text-primary min-h-screen transition-colors duration-300 relative overflow-hidden"
    >
      {/* Title Hero Header */}
      <section className="pt-20 sm:pt-24 pb-6 sm:pb-8 border-b border-border-primary bg-bg-primary relative z-10 text-center">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-md inline-block mb-3">
            DOCUMENTATION & GUIDES
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary mb-3">
            AayaamX Documentation Center
          </h1>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about getting started, using AI features, keyboard shortcuts, and customizing your workspace in plain English.
          </p>
        </div>
      </section>

      {/* Main Documentation Viewer Container */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10 pt-8 sm:pt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Documentation Navigation Sidebar */}
          <div className="lg:col-span-4 space-y-4 bg-bg-secondary border border-border-primary rounded-2xl p-5 shadow-xs">
            
            {/* Search Input */}
            <div className="relative">
              <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary/60" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs bg-bg-primary border border-border-primary rounded-xl pl-9 pr-3.5 py-2.5 focus:outline-none focus:border-emerald-500/40 text-text-primary"
                placeholder="Search guides..."
              />
            </div>

            {/* Navigation Category List */}
            <div className="space-y-1 pt-3 border-t border-border-primary">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-secondary/70 px-2 mb-2">
                USER GUIDES & MANUALS
              </h4>
              <div className="space-y-1">
                {filteredDocs.map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => setActiveTab(doc.id)}
                    className={`w-full flex items-center justify-between text-left px-3.5 py-3 rounded-xl text-xs transition-all cursor-pointer ${
                      activeTab === doc.id 
                        ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold shadow-xs' 
                        : 'text-text-secondary hover:bg-bg-primary hover:text-text-primary'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      {doc.icon}
                      <span>{doc.title}</span>
                    </span>
                    <ChevronRight size={12} className={`opacity-60 transition-transform ${activeTab === doc.id ? 'translate-x-0.5 text-emerald-400' : ''}`} />
                  </button>
                ))}
                {filteredDocs.length === 0 && (
                  <div className="text-[11px] text-text-secondary italic px-3 py-2">
                    No documentation guides matched your search query.
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Right Content Viewer Panel */}
          <div className="lg:col-span-8 bg-bg-secondary border border-border-primary rounded-2xl p-6 sm:p-10 shadow-xs min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
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
