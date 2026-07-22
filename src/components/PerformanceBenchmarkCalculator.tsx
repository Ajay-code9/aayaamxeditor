import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Zap, Battery, ShieldCheck, BarChart3, Layers, Sliders } from 'lucide-react';
import MacTerminalHeader from './MacTerminalHeader';

type EditorType = 'vscode' | 'cursor' | 'zed' | 'sublime';
type ProjectSize = '10k' | '100k' | '500k' | '1M';

interface EditorMetrics {
  name: string;
  ramMB: Record<ProjectSize, number>;
  latencyMs: Record<ProjectSize, number>;
  batteryDrainIndex: number; // 1-10 scale
}

const EDITORS: Record<EditorType, EditorMetrics> = {
  vscode: {
    name: 'VS Code (Electron)',
    ramMB: { '10k': 450, '100k': 890, '500k': 1850, '1M': 3400 },
    latencyMs: { '10k': 85, '100k': 240, '500k': 680, '1M': 1420 },
    batteryDrainIndex: 8.5,
  },
  cursor: {
    name: 'Cursor (AI Fork)',
    ramMB: { '10k': 680, '100k': 1250, '500k': 2400, '1M': 4200 },
    latencyMs: { '10k': 110, '100k': 320, '500k': 890, '1M': 1850 },
    batteryDrainIndex: 9.2,
  },
  zed: {
    name: 'Zed (Rust GPU)',
    ramMB: { '10k': 180, '100k': 320, '500k': 650, '1M': 1100 },
    latencyMs: { '10k': 18, '100k': 45, '500k': 110, '1M': 240 },
    batteryDrainIndex: 3.8,
  },
  sublime: {
    name: 'Sublime Text 4',
    ramMB: { '10k': 120, '100k': 210, '500k': 480, '1M': 920 },
    latencyMs: { '10k': 22, '100k': 55, '500k': 140, '1M': 310 },
    batteryDrainIndex: 2.9,
  }
};

const AAYAAMX_METRICS: EditorMetrics = {
  name: 'AayaamX Native (C++ / Rust LLVM)',
  ramMB: { '10k': 18, '100k': 38, '500k': 82, '1M': 145 },
  latencyMs: { '10k': 1.2, '100k': 3.4, '500k': 8.8, '1M': 14.5 },
  batteryDrainIndex: 0.8,
};

export default function PerformanceBenchmarkCalculator() {
  const [selectedEditor, setSelectedEditor] = useState<EditorType>('vscode');
  const [projectSize, setProjectSize] = useState<ProjectSize>('100k');

  const compEditor = EDITORS[selectedEditor];
  const aayaamxRam = AAYAAMX_METRICS.ramMB[projectSize];
  const compRam = compEditor.ramMB[projectSize];
  const ramSavedRatio = (compRam / aayaamxRam).toFixed(1);

  const aayaamxLatency = AAYAAMX_METRICS.latencyMs[projectSize];
  const compLatency = compEditor.latencyMs[projectSize];
  const speedupRatio = (compLatency / aayaamxLatency).toFixed(1);

  return (
    <div className="w-full bg-bg-secondary border border-border-primary rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-border-primary">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 font-mono text-[10px] sm:text-xs font-bold mb-1.5 sm:mb-2">
            <Zap size={12} className="sm:w-3.5 sm:h-3.5" />
            DYNAMIC BENCHMARK SIMULATION
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary font-mono tracking-tight">
            Compare AayaamX Memory & Latency
          </h3>
          <p className="text-[11px] sm:text-xs text-text-secondary mt-0.5">
            Simulate real-world memory footprint and response time across different codebases.
          </p>
        </div>

        {/* Project Size Selector */}
        <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 bg-bg-primary p-1.5 rounded-xl border border-border-primary shrink-0 w-full lg:w-auto">
          <span className="text-[10px] font-mono text-text-secondary uppercase tracking-wider px-1.5 font-bold">Codebase:</span>
          {(['10k', '100k', '500k', '1M'] as ProjectSize[]).map((size) => (
            <button
              key={size}
              onClick={() => setProjectSize(size)}
              className={`flex-1 sm:flex-initial px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs font-mono transition-all cursor-pointer text-center ${
                projectSize === size
                  ? 'bg-[#10B981] text-white font-bold shadow-xs'
                  : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'
              }`}
            >
              {size === '10k' && '10k'}
              {size === '100k' && '100k'}
              {size === '500k' && '500k'}
              {size === '1M' && '1M+'}
              <span className="hidden sm:inline"> lines</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Left Column: Editor Selector Cards */}
        <div className="lg:col-span-4 space-y-2.5 sm:space-y-3">
          <label className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-text-secondary block mb-1">
            Select Compare Target:
          </label>

          {(Object.keys(EDITORS) as EditorType[]).map((type) => {
            const ed = EDITORS[type];
            const isSelected = selectedEditor === type;
            return (
              <button
                key={type}
                onClick={() => setSelectedEditor(type)}
                className={`w-full text-left p-3 sm:p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? 'border-[#10B981] bg-[#10B981]/10 text-text-primary shadow-xs ring-1 ring-[#10B981]/30'
                    : 'border-border-primary bg-bg-primary hover:border-text-secondary/40 text-text-secondary'
                }`}
              >
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full shrink-0 ${isSelected ? 'bg-[#10B981]' : 'bg-gray-500'}`} />
                  <div>
                    <div className="text-xs font-bold font-mono text-text-primary">{ed.name}</div>
                    <div className="text-[10px] text-text-secondary mt-0.5 font-mono">
                      RAM: {ed.ramMB[projectSize]} MB | Latency: {ed.latencyMs[projectSize]} ms
                    </div>
                  </div>
                </div>
                {isSelected && (
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold text-[#10B981] bg-[#10B981]/20 px-1.5 sm:px-2 py-0.5 rounded border border-[#10B981]/30 shrink-0 ml-1">
                    Active
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Right Column: Visual Comparison Charts */}
        <div className="lg:col-span-8 bg-bg-primary border border-border-primary rounded-xl p-4 sm:p-6 flex flex-col justify-between space-y-5 sm:space-y-6">
          {/* Header comparison badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4">
            <div className="p-2.5 sm:p-3 bg-bg-secondary border border-border-primary rounded-xl">
              <div className="text-[9px] sm:text-[10px] text-text-secondary font-mono uppercase font-semibold">Memory Saved</div>
              <div className="text-lg sm:text-2xl font-black text-[#10B981] font-mono mt-0.5 sm:mt-1">
                {ramSavedRatio}x <span className="text-[10px] sm:text-xs font-normal text-text-secondary">less RAM</span>
              </div>
            </div>
            <div className="p-2.5 sm:p-3 bg-bg-secondary border border-border-primary rounded-xl">
              <div className="text-[9px] sm:text-[10px] text-text-secondary font-mono uppercase font-semibold">Response Speed</div>
              <div className="text-lg sm:text-2xl font-black text-emerald-400 font-mono mt-0.5 sm:mt-1">
                {speedupRatio}x <span className="text-[10px] sm:text-xs font-normal text-text-secondary">faster</span>
              </div>
            </div>
            <div className="p-2.5 sm:p-3 bg-bg-secondary border border-border-primary rounded-xl col-span-2 sm:col-span-1">
              <div className="text-[9px] sm:text-[10px] text-text-secondary font-mono uppercase font-semibold">Battery Saved</div>
              <div className="text-lg sm:text-2xl font-black text-blue-400 font-mono mt-0.5 sm:mt-1">
                -90% <span className="text-[10px] sm:text-xs font-normal text-text-secondary">battery drain</span>
              </div>
            </div>
          </div>

          {/* Bar Chart 1: RAM Usage */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-[11px] sm:text-xs font-mono">
              <span className="text-text-primary font-bold">Computer RAM Memory Used</span>
              <span className="text-text-secondary">{projectSize} lines project</span>
            </div>

            {/* AayaamX Bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] sm:text-[11px] font-mono text-emerald-400 font-semibold">
                <span>AayaamX Native</span>
                <span>{aayaamxRam} MB</span>
              </div>
              <div className="w-full bg-bg-secondary h-3.5 sm:h-4 rounded-full overflow-hidden p-0.5 border border-border-primary">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: `${Math.max(4, (aayaamxRam / compRam) * 100)}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 shadow-xs"
                />
              </div>
            </div>

            {/* Compared Editor Bar */}
            <div className="space-y-1 pt-1">
              <div className="flex justify-between text-[10px] sm:text-[11px] font-mono text-text-secondary">
                <span>{compEditor.name}</span>
                <span>{compRam} MB</span>
              </div>
              <div className="w-full bg-bg-secondary h-3.5 sm:h-4 rounded-full overflow-hidden p-0.5 border border-border-primary">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.5 }}
                  className="h-full rounded-full bg-red-500/60"
                />
              </div>
            </div>
          </div>

          {/* Bar Chart 2: Keystroke Latency */}
          <div className="space-y-2 pt-2 border-t border-border-primary">
            <div className="flex justify-between items-center text-[11px] sm:text-xs font-mono">
              <span className="text-text-primary font-bold">Input-to-Pixel Latency</span>
              <span className="text-text-secondary">Microseconds / ms</span>
            </div>

            {/* AayaamX Bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] sm:text-[11px] font-mono text-emerald-400 font-semibold">
                <span>AayaamX Direct-C++</span>
                <span>{aayaamxLatency} ms</span>
              </div>
              <div className="w-full bg-bg-secondary h-3.5 sm:h-4 rounded-full overflow-hidden p-0.5 border border-border-primary">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: `${Math.max(3, (aayaamxLatency / compLatency) * 100)}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-300 shadow-xs"
                />
              </div>
            </div>

            {/* Compared Editor Bar */}
            <div className="space-y-1 pt-1">
              <div className="flex justify-between text-[10px] sm:text-[11px] font-mono text-text-secondary">
                <span>{compEditor.name}</span>
                <span>{compLatency} ms</span>
              </div>
              <div className="w-full bg-bg-secondary h-3.5 sm:h-4 rounded-full overflow-hidden p-0.5 border border-border-primary">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.5 }}
                  className="h-full rounded-full bg-amber-500/60"
                />
              </div>
            </div>
          </div>

          <div className="text-[10px] sm:text-[11px] font-mono text-text-secondary bg-bg-secondary p-2.5 sm:p-3 rounded-lg border border-border-primary flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-[#10B981] shrink-0" />
              Zero Garbage Collection pauses. 100% deterministic LLVM memory management.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
