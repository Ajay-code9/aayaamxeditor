import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import MacTerminalHeader from './MacTerminalHeader';
import { Terminal, Copy, Check, Sparkles, Zap, RotateCcw, Play } from 'lucide-react';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const logsEndRef = useRef<HTMLDivElement>(null);

  const [history, setHistory] = useState<CommandLog[]>([
    {
      command: 'aayaamx --version',
      output: (
        <div className="text-emerald-400 font-semibold">
          AayaamX Native Compiler Engine v1.0.4 [x86_64-apple-darwin]
          <div className="text-[#888888] font-normal text-[11px] mt-0.5">
            Zero-overhead C++ LLVM integration active. Latency: 12ms.
          </div>
        </div>
      ),
      timestamp: '11:42:01',
    },
    {
      command: 'aayaamx status',
      output: (
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-2 text-white">
            <span className="text-emerald-400 font-bold">●</span> Language Server: <span className="text-emerald-400">ACTIVE</span>
          </div>
          <div className="flex items-center gap-2 text-[#aaa]">
            <span className="text-blue-400 font-bold">●</span> Memory Overhead: <span className="text-white">18.4 MB</span>
          </div>
          <div className="flex items-center gap-2 text-[#aaa]">
            <span className="text-purple-400 font-bold">●</span> Safety Check: <span className="text-emerald-400">100% Passed</span> (0 memory leaks)
          </div>
        </div>
      ),
      timestamp: '11:42:05',
    }
  ]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleRunCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    if (trimmed.toLowerCase() === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let resultNode: React.ReactNode = null;
    const now = new Date().toLocaleTimeString();

    switch (trimmed.toLowerCase()) {
      case 'help':
      case 'aayaamx help':
        resultNode = (
          <div className="space-y-1 text-xs text-[#bbb]">
            <div className="text-emerald-400 font-bold mb-1">Available AayaamX CLI Commands:</div>
            <div><span className="text-white font-semibold">aayaamx compile</span> - Synthesize high-performance C++ backend</div>
            <div><span className="text-white font-semibold">aayaamx benchmark</span> - Run micro-benchmark comparison vs Node/Go</div>
            <div><span className="text-white font-semibold">aayaamx doctor</span> - Check system dependencies & LLVM status</div>
            <div><span className="text-white font-semibold">aayaamx security-scan</span> - Verify memory safety invariants</div>
            <div><span className="text-white font-semibold">clear</span> - Flush terminal screen buffer</div>
          </div>
        );
        break;

      case 'aayaamx compile':
      case 'compile':
        resultNode = (
          <div className="space-y-1 text-xs">
            <div className="text-blue-400">⚡ Starting AayaamX JIT Synthesis...</div>
            <div className="text-[#888]">Parsing AST tree [4,102 symbols]... Done in 1.4ms</div>
            <div className="text-[#888]">Performing memory ownership pass... 0 allocations needed</div>
            <div className="text-emerald-400 font-bold flex items-center gap-1.5 mt-1">
              ✓ Binary compiled successfully to ./dist/aayaamx_daemon (1.2 MB)
            </div>
          </div>
        );
        break;

      case 'aayaamx benchmark':
      case 'benchmark':
        resultNode = (
          <div className="space-y-1.5 text-xs">
            <div className="text-amber-400 font-bold">📊 Microbenchmark Results (100,000 requests/sec):</div>
            <div className="grid grid-cols-3 gap-2 py-1 text-[11px] font-mono border-y border-white/10">
              <div>Runtime</div>
              <div>Latency (p99)</div>
              <div>Memory</div>
              <div className="text-emerald-400 font-bold">AayaamX</div>
              <div className="text-emerald-400 font-bold">0.42 ms</div>
              <div className="text-emerald-400 font-bold">12.1 MB</div>
              <div className="text-gray-400">Go 1.22</div>
              <div className="text-gray-400">3.80 ms</div>
              <div className="text-gray-400">45.0 MB</div>
              <div className="text-gray-400">Node.js v20</div>
              <div className="text-gray-400">14.20 ms</div>
              <div className="text-gray-400">110.0 MB</div>
            </div>
          </div>
        );
        break;

      case 'aayaamx doctor':
      case 'doctor':
        resultNode = (
          <div className="space-y-1 text-xs text-[#ccc]">
            <div className="text-emerald-400 font-bold">🩺 System Diagnostics:</div>
            <div>✓ LLVM Engine v18.1.0: <span className="text-emerald-400 font-bold">Ready</span></div>
            <div>✓ Memory Safety Checker: <span className="text-emerald-400 font-bold">Active</span></div>
            <div>✓ CPU SIMD Vector Extensions: <span className="text-emerald-400 font-bold">AVX-512 Enabled</span></div>
            <div>✓ Hot-Reload IPC Bridge: <span className="text-emerald-400 font-bold">Listening on socket</span></div>
          </div>
        );
        break;

      case 'aayaamx security-scan':
      case 'security-scan':
        resultNode = (
          <div className="space-y-1 text-xs text-emerald-400">
            <div className="font-bold text-white">🔒 Executing Security & Memory Safety Verification...</div>
            <div>[PASS] Buffer Overflow Checks: 0 vulnerabilities</div>
            <div>[PASS] Thread Synchronization: Data-race free</div>
            <div>[PASS] Zero-Data Retention Vault: Enforced</div>
            <div className="text-emerald-300 font-semibold mt-1">Audit Score: 100/100 (A+ Enterprise Grade)</div>
          </div>
        );
        break;

      default:
        resultNode = (
          <div className="text-red-400 text-xs">
            command not found: {trimmed}. Type <span className="text-white underline cursor-pointer" onClick={() => handleRunCommand('help')}>help</span> for available commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: trimmed, output: resultNode, timestamp: now }]);
    setInputVal('');
  };

  const copyAllLogs = () => {
    const text = history.map(h => `$ ${h.command}`).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full bg-[#0b0b0e] border border-white/15 rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col transition-all duration-300 ${
            isMaximized ? 'max-w-6xl h-[85vh]' : 'max-w-3xl h-[520px]'
          }`}
        >
          {/* macOS Title Bar */}
          <MacTerminalHeader
            title="aayaamx-cli — zsh"
            subtitle="Interactive Sandbox"
            className="shrink-0"
          >
            <div className="flex items-center gap-2">
              <button
                onClick={copyAllLogs}
                className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono rounded-md bg-white/5 hover:bg-white/10 text-gray-300 transition-colors cursor-pointer border border-white/10"
                title="Copy Terminal History"
              >
                {copied ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} />}
                <span>{copied ? 'Copied' : 'Copy Log'}</span>
              </button>
              <button
                onClick={() => handleRunCommand('clear')}
                className="flex items-center gap-1.5 px-2 py-1 text-[10px] font-mono rounded-md bg-white/5 hover:bg-white/10 text-gray-300 transition-colors cursor-pointer border border-white/10"
                title="Clear Output"
              >
                <RotateCcw size={11} />
              </button>
            </div>
          </MacTerminalHeader>

          {/* Preset Quick Command Pills */}
          <div className="px-4 py-2 bg-[#121217] border-b border-white/5 flex items-center gap-2 overflow-x-auto text-[11px] font-mono shrink-0 select-none">
            <span className="text-gray-500 text-[10px] uppercase font-bold tracking-wider shrink-0 mr-1">Quick Run:</span>
            {[
              { label: 'aayaamx compile', cmd: 'aayaamx compile' },
              { label: 'aayaamx status', cmd: 'aayaamx status' },
              { label: 'aayaamx benchmark', cmd: 'aayaamx benchmark' },
              { label: 'aayaamx doctor', cmd: 'aayaamx doctor' },
              { label: 'security scan', cmd: 'aayaamx security-scan' },
            ].map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleRunCommand(p.cmd)}
                className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-[#10B981]/20 hover:border-[#10B981]/40 text-gray-300 hover:text-emerald-300 border border-white/10 transition-all cursor-pointer shrink-0 flex items-center gap-1"
              >
                <Play size={9} className="fill-current" />
                {p.label}
              </button>
            ))}
          </div>

          {/* Terminal Logs & Console Buffer */}
          <div
            className="flex-1 p-5 overflow-y-auto font-mono text-xs text-[#e4e4e7] space-y-4 bg-[#08080a] cursor-text"
            onClick={() => inputRef.current?.focus()}
          >
            <div className="text-gray-500 text-[11px] pb-2 border-b border-white/5 flex justify-between items-center">
              <span>AayaamX Interactive macOS Terminal Interface [v1.0.4]</span>
              <span>Press <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-[10px]">Esc</kbd> to close</span>
            </div>

            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-[#a1a1aa]">
                  <span className="text-[#10B981] font-bold">guest@aayaamx</span>
                  <span className="text-gray-500">%</span>
                  <span className="text-white font-semibold">{item.command}</span>
                  <span className="text-[10px] text-gray-600 ml-auto">{item.timestamp}</span>
                </div>
                <div className="pl-4 border-l-2 border-[#10B981]/30 py-1">
                  {item.output}
                </div>
              </div>
            ))}

            {/* Active Input Prompt */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleRunCommand(inputVal);
              }}
              className="flex items-center gap-2 pt-1"
            >
              <span className="text-[#10B981] font-bold">guest@aayaamx</span>
              <span className="text-gray-500">%</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type command ('help', 'compile', 'benchmark')..."
                className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs placeholder:text-gray-600 focus:ring-0 p-0"
              />
            </form>

            <div ref={logsEndRef} />
          </div>

          {/* Footer Bar */}
          <div className="px-4 py-2 bg-[#0d0d10] border-t border-white/10 text-[10px] font-mono text-gray-500 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-400 font-semibold">Live Sandbox Session</span>
            </div>
            <div>
              <span>Shortcut: <kbd className="bg-white/10 px-1 py-0.5 rounded text-gray-300">⌘ + K</kbd></span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TerminalModal;
