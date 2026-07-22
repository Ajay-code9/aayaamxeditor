import React, { useState } from 'react';
import { motion } from 'motion/react';
import HeroBackgroundAnimation from '../components/HeroBackgroundAnimation';
import HardwareWizard from '../components/HardwareWizard';
import { Apple, Download, Terminal, Check, Info, FileCode, Clock, Star, ArrowDownToLine, Cpu, HardDrive } from 'lucide-react';

const RELEASES = [
  {
    version: 'v1.0.4',
    date: 'July 18, 2026',
    tag: 'Latest',
    notes: [
      'Added support for in-memory AST multi-file index caching.',
      'Reduced initial model connection handshake latency by 40%.',
      'Fixed occasional character clipping with ligatures in custom terminal.'
    ]
  },
  {
    version: 'v1.0.3',
    date: 'July 04, 2026',
    tag: 'Stable',
    notes: [
      'Implemented offline linter verification hooks for Cargo and Gradle.',
      'One-click settings sync from VIM and Cursor config folders.',
      'Fixed background container path lookup failures on macOS Sequoia.'
    ]
  },
  {
    version: 'v1.0.0',
    date: 'June 12, 2026',
    tag: 'Stable',
    notes: [
      'Official public production release of AayaamX Core.',
      'Direct C++ buffer bindings and local vector mapping integrations.'
    ]
  }
];

export default function DownloadPage() {
  const [copied, setCopied] = useState(false);
  const [selectedOS, setSelectedOS] = useState<'mac' | 'win' | 'linux'>('mac');
  const installCmd = 'curl -fsSL https://aayaamx.build/install.sh | sh';

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-bg-primary text-text-primary min-h-screen transition-colors duration-300"
    >
      {/* Title Hero Section */}
      <section className="py-12 sm:py-16 md:min-h-[100dvh] flex flex-col justify-center pt-20 md:pt-28 pb-10 md:pb-12 border-b border-border-primary relative overflow-hidden bg-bg-primary transition-colors duration-300">
        <HeroBackgroundAnimation variant="page" />
        <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10 text-center my-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-primary mb-6 max-w-4xl mx-auto leading-tight">
            Compile instantly on <br />your local machine.
          </h1>
          <p className="text-sm sm:text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
            Download AayaamX’s compiled native binaries. Select your underlying architecture to begin working with offline intelligence in seconds.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10 pt-16 md:pt-20 pb-20">

        {/* Dynamic Installer Blocks / Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Main Download Cards (OS-based Tabs) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex bg-bg-secondary border border-border-primary p-1 sm:p-1.5 rounded-xl gap-1 sm:gap-2 shadow-xs w-full max-w-md">
              <button 
                onClick={() => setSelectedOS('mac')}
                className={`flex-1 flex items-center justify-center gap-1 sm:gap-2 py-2.5 sm:py-3 rounded-lg text-[11px] sm:text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                  selectedOS === 'mac' ? 'bg-text-primary text-bg-primary' : 'text-text-secondary hover:bg-bg-primary'
                }`}
              >
                <Apple size={13} className="sm:w-3.5 sm:h-3.5" /> macOS
              </button>
              <button 
                onClick={() => setSelectedOS('win')}
                className={`flex-1 flex items-center justify-center gap-1 sm:gap-2 py-2.5 sm:py-3 rounded-lg text-[11px] sm:text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                  selectedOS === 'win' ? 'bg-text-primary text-bg-primary' : 'text-text-secondary hover:bg-bg-primary'
                }`}
              >
                <Download size={13} className="sm:w-3.5 sm:h-3.5" /> Windows
              </button>
              <button 
                onClick={() => setSelectedOS('linux')}
                className={`flex-1 flex items-center justify-center gap-1 sm:gap-2 py-2.5 sm:py-3 rounded-lg text-[11px] sm:text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                  selectedOS === 'linux' ? 'bg-text-primary text-bg-primary' : 'text-text-secondary hover:bg-bg-primary'
                }`}
              >
                <Terminal size={13} className="sm:w-3.5 sm:h-3.5" /> Linux
              </button>
            </div>

            {/* Selected Platform Download Panel */}
            <div className="bg-bg-secondary border border-border-primary rounded-xl p-8 shadow-xs space-y-8">
              {selectedOS === 'mac' && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-[#10B981] text-[10px] font-mono font-bold uppercase tracking-wider block">
                      UNIVERSAL BINARY FOR MACOS
                    </span>
                    <h3 className="text-xl font-bold text-text-primary font-mono mt-3">AayaamX for macOS (Apple Silicon / Intel)</h3>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      Optimized natively to use Apple M1/M2/M3 local GPU metal pipelines, enabling local offline model calculations directly inside the text processing buffers.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#" className="flex-1 flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white rounded-lg py-4 text-xs font-bold transition-all text-center">
                      <ArrowDownToLine size={14} /> Download for Apple Silicon (dmg)
                    </a>
                    <a href="#" className="flex-1 flex items-center justify-center gap-2 bg-bg-primary border border-border-primary hover:bg-bg-secondary text-text-primary rounded-lg py-4 text-xs font-bold transition-all text-center">
                      <ArrowDownToLine size={14} /> Download for Intel Architecture (dmg)
                    </a>
                  </div>
                </div>
              )}

              {selectedOS === 'win' && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-[#10B981] text-[10px] font-mono font-bold uppercase tracking-wider block">
                      WINDOWS 11 NATIVE BUILD
                    </span>
                    <h3 className="text-xl font-bold text-text-primary font-mono mt-3">AayaamX for Windows 11 (x64 / ARM)</h3>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      Leverages native DirectML hooks to harness integrated hardware capabilities securely, avoiding telemetry or sandbox context leakage.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#" className="flex-1 flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white rounded-lg py-4 text-xs font-bold transition-all text-center">
                      <ArrowDownToLine size={14} /> Download Installer (.exe)
                    </a>
                    <a href="#" className="flex-1 flex items-center justify-center gap-2 bg-bg-primary border border-border-primary hover:bg-bg-secondary text-text-primary rounded-lg py-4 text-xs font-bold transition-all text-center">
                      <ArrowDownToLine size={14} /> Download Portable ZIP Archive (.zip)
                    </a>
                  </div>
                </div>
              )}

              {selectedOS === 'linux' && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-[#10B981] text-[10px] font-mono font-bold uppercase tracking-wider block">
                      LINUX STANDARD DISTRIBUTIONS
                    </span>
                    <h3 className="text-xl font-bold text-text-primary font-mono mt-3">AayaamX for Linux (amd64 / arm64)</h3>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      Standalone static ELF files and standard Debian/RPM packages built with pure native performance.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <a href="#" className="flex-1 min-w-[150px] flex items-center justify-center gap-2 bg-text-primary hover:opacity-95 text-bg-primary rounded-lg py-3 text-xs font-bold transition-all text-center">
                      Download .deb (Debian/Ubuntu)
                    </a>
                    <a href="#" className="flex-1 min-w-[150px] flex items-center justify-center gap-2 bg-bg-primary border border-border-primary hover:bg-bg-secondary text-text-primary rounded-lg py-3 text-xs font-bold transition-all text-center">
                      Download .rpm (Fedora/RHEL)
                    </a>
                    <a href="#" className="flex-1 min-w-[150px] flex items-center justify-center gap-2 bg-bg-primary border border-border-primary hover:bg-bg-secondary text-text-primary rounded-lg py-3 text-xs font-bold transition-all text-center">
                      Download tarball (.tar.gz)
                    </a>
                  </div>
                </div>
              )}

              {/* Styled Shell Command Section */}
              <div className="pt-6 border-t border-border-primary">
                <h4 className="text-xs font-bold text-text-primary font-mono uppercase tracking-wide mb-3 flex items-center gap-2">
                  <Terminal size={12} className="text-[#10B981]" /> Terminal Quick-Installer script
                </h4>
                <div className="bg-[#070707] border border-[#222222] rounded-lg p-3 sm:p-4 font-mono text-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-[#cccccc]">
                  <div className="flex items-center gap-2 select-all overflow-x-auto whitespace-nowrap text-white w-full sm:w-auto">
                    <span className="text-[#666666] select-none">$</span>
                    <span className="text-[11px] sm:text-xs">{installCmd}</span>
                  </div>
                  <button 
                    onClick={handleCopy}
                    className="w-full sm:w-auto text-xs font-mono font-bold text-gray-400 hover:text-white transition-colors bg-[#111111] border border-[#222222] px-3 py-1.5 rounded cursor-pointer text-center"
                  >
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>

            {/* Checksums verification table */}
            <div className="bg-bg-secondary border border-border-primary rounded-xl p-6 shadow-xs">
              <h4 className="text-xs font-bold text-text-primary font-mono uppercase tracking-wide mb-4 flex items-center gap-2">
                <FileCode size={13} className="text-[#10B981]" /> SHA-256 Release Checksums
              </h4>
              <div className="space-y-3 font-mono text-[10px] text-text-secondary divide-y divide-border-primary">
                <div className="flex flex-col sm:flex-row sm:justify-between py-1.5 gap-1">
                  <span className="font-bold text-text-primary">aayaamx-mac-silicon-1.0.4.dmg</span>
                  <span className="break-all select-all text-text-secondary/60">f5b89ce7d7124f9cb246d87e0766324dbdf7a28e81d79869a8b11c97a89e9f9c</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-1.5 gap-1">
                  <span className="font-bold text-text-primary">aayaamx-win-x64-1.0.4.exe</span>
                  <span className="break-all select-all text-text-secondary/60">4b789ae6d4123f8cb123d87e1723321dbdf7a18e81d69859a8b11c77a89e8f4d</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-1.5 gap-1">
                  <span className="font-bold text-text-primary">aayaamx-linux-amd64-1.0.4.deb</span>
                  <span className="break-all select-all text-text-secondary/60">0a98ef23d456a29ab234c9876efd2345efd9a98ef7639840c8b91c22a76efc23</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - System Requirements */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-bg-secondary border border-border-primary rounded-xl p-6 shadow-xs space-y-6">
              <h3 className="text-sm font-bold text-text-primary font-mono uppercase tracking-wider flex items-center gap-2 pb-3 border-b border-border-primary">
                <Cpu size={14} className="text-[#10B981]" /> System Requirements
              </h3>

              <div className="space-y-4 text-xs">
                <div className="space-y-1">
                  <div className="font-bold text-text-primary">Operating System</div>
                  <div className="text-text-secondary font-mono">macOS 12.0+ / Win 11 x64 / Linux Kernel 5.4+</div>
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-text-primary">Processor Architecture</div>
                  <div className="text-text-secondary font-mono">Apple Silicon M1/M2/M3 (Recommended), Intel Core i7 / AMD Ryzen 5 or better</div>
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-text-primary">Hardware RAM Memory</div>
                  <div className="text-text-secondary font-mono">Minimum 8 GB (16 GB Recommended for large vector layouts)</div>
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-text-primary">Disk Storage Space</div>
                  <div className="text-text-secondary font-mono">150 MB for core installation binaries</div>
                </div>
              </div>
            </div>

            {/* Quick Support block */}
            <div className="bg-bg-secondary border border-border-primary rounded-xl p-6 shadow-xs text-center space-y-4">
              <Info size={20} className="text-[#10B981] mx-auto" />
              <h4 className="text-xs font-bold text-text-primary font-mono uppercase tracking-wide">Migration Help</h4>
              <p className="text-[11px] text-text-secondary leading-relaxed">
                Need to sync configurations or keybindings from another editor setup? Learn about our one-click automated setups.
              </p>
              <a href="#/documentation" className="text-xs font-mono font-bold text-[#10B981] hover:underline block">
                Read migration docs →
              </a>
            </div>
          </div>
        </div>

        {/* Hardware & Local LLM Recommendation Wizard */}
        <div className="mb-24">
          <HardwareWizard />
        </div>

        {/* Release Notes Chronology timeline */}
        <div className="border-t border-border-primary pt-20 max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-text-primary tracking-tight mb-12 flex items-center gap-2">
            <Clock size={20} className="text-[#10B981]" /> Comprehensive Version Logs
          </h2>

          <div className="space-y-12">
            {RELEASES.map((rel, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-6 items-start relative pl-6 before:absolute before:left-1 before:top-2 before:bottom-0 before:w-px before:bg-border-primary last:before:hidden">
                <div className="sm:w-32 shrink-0">
                  <div className="text-xs font-mono font-bold text-[#10B981]">{rel.version}</div>
                  <div className="text-[10px] text-text-secondary/60 font-mono mt-0.5">{rel.date}</div>
                </div>
                <div className="flex-1 space-y-2">
                  <ul className="space-y-2 text-xs text-text-secondary list-disc pl-4">
                    {rel.notes.map((note, noteIdx) => (
                      <li key={noteIdx} className="leading-relaxed">{note}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
