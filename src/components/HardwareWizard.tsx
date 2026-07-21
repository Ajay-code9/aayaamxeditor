import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, HardDrive, Sparkles, Check, Copy, ArrowRight, Zap, Terminal } from 'lucide-react';
import MacTerminalHeader from './MacTerminalHeader';

type ChipChoice = 'm_series_base' | 'm_series_max' | 'rtx_30_40' | 'intel_amd' | 'server';
type RamChoice = '8gb' | '16gb' | '32gb' | '64gb_plus';
type WorkflowChoice = 'autocomplete' | 'in_editor_chat' | 'deep_refactor';

interface ModelRecommendation {
  modelName: string;
  quantization: string;
  speedTokensPerSec: number;
  vramRequiredGB: number;
  cliCommand: string;
  description: string;
  advantages: string[];
}

export default function HardwareWizard() {
  const [chip, setChip] = useState<ChipChoice>('m_series_max');
  const [ram, setRam] = useState<RamChoice>('16gb');
  const [workflow, setWorkflow] = useState<WorkflowChoice>('in_editor_chat');
  const [copied, setCopied] = useState(false);

  const getRecommendation = (): ModelRecommendation => {
    if (ram === '8gb') {
      return {
        modelName: 'Qwen 2.5 Coder 3B',
        quantization: 'Q4_K_M (3.2 GB)',
        speedTokensPerSec: chip === 'm_series_base' || chip === 'm_series_max' ? 110 : 85,
        vramRequiredGB: 3.2,
        cliCommand: 'aayaamx pull qwen2.5-coder:3b && aayaamx serve',
        description: 'Ultra-lightweight local model optimized for low RAM devices and blistering fast sub-10ms inline suggestions.',
        advantages: ['Instant latency (<10ms)', 'Fits easily in 8GB RAM', 'Low battery consumption'],
      };
    }

    if (ram === '16gb') {
      if (workflow === 'autocomplete') {
        return {
          modelName: 'DeepSeek Coder 6.7B',
          quantization: 'Q5_K_M (4.8 GB)',
          speedTokensPerSec: 125,
          vramRequiredGB: 4.8,
          cliCommand: 'aayaamx pull deepseek-coder:6.7b && aayaamx serve',
          description: 'Top-tier code completion model with deep syntax awareness for TypeScript, Rust, and C++.',
          advantages: ['Blazing 125 tok/s speed', 'High context length', 'Zero hallucination on standard APIs'],
        };
      }
      return {
        modelName: 'Qwen 2.5 Coder 7B',
        quantization: 'Q5_K_M (5.4 GB)',
        speedTokensPerSec: 92,
        vramRequiredGB: 5.4,
        cliCommand: 'aayaamx pull qwen2.5-coder:7b-instruct && aayaamx serve',
        description: 'Current gold standard for offline multi-file code editing, unit test synthesis, and refactoring.',
        advantages: ['Benchmark score beats GPT-3.5', 'Supports 32k context', 'Fits alongside heavy IDE tasks'],
      };
    }

    if (ram === '32gb') {
      return {
        modelName: 'DeepSeek Coder 14B / StarCoder2 15B',
        quantization: 'Q5_K_M (9.8 GB)',
        speedTokensPerSec: chip === 'rtx_30_40' ? 140 : 78,
        vramRequiredGB: 9.8,
        cliCommand: 'aayaamx pull deepseek-coder:14b-instruct && aayaamx serve',
        description: 'Enterprise-grade local intelligence capable of full project architecture synthesis and automated PR reviews.',
        advantages: ['State of the art reasoning', 'Understands complex system design', 'Offline security isolation'],
      };
    }

    // 64gb_plus or server
    return {
      modelName: 'Qwen 2.5 Coder 32B / Llama 3.3 70B',
      quantization: 'Q6_K (22.5 GB)',
      speedTokensPerSec: chip === 'server' || chip === 'rtx_30_40' ? 165 : 65,
      vramRequiredGB: 22.5,
      cliCommand: 'aayaamx pull qwen2.5-coder:32b-instruct && aayaamx serve',
      description: 'Maximum power local AI. Near Claude 3.5 Sonnet capability running entirely on your local machine with zero external API calls.',
      advantages: ['Sonnet-class code generation', '128k context window', 'Absolute privacy & zero leakage'],
    };
  };

  const rec = getRecommendation();

  const handleCopy = () => {
    navigator.clipboard.writeText(rec.cliCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-bg-secondary border border-border-primary rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-border-primary">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 font-mono text-[10px] sm:text-xs font-bold mb-1.5 sm:mb-2">
            <Cpu size={12} className="sm:w-3.5 sm:h-3.5" />
            HARDWARE SPEC & LOCAL LLM WIZARD
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary font-mono tracking-tight">
            Local AI Hardware Configurator
          </h3>
          <p className="text-[11px] sm:text-xs text-text-secondary mt-0.5">
            Input your computer specifications to find the exact optimal local AI model and quantization setup.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Left Form Selection Controls */}
        <div className="lg:col-span-6 space-y-5 sm:space-y-6">
          {/* Step 1: Processor */}
          <div>
            <label className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-text-primary flex items-center gap-2 mb-2">
              <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#10B981] text-white flex items-center justify-center text-[9px] sm:text-[10px]">1</span>
              Processor / GPU Architecture
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs">
              {[
                { id: 'm_series_base', label: 'Apple M1/M2/M3 Base' },
                { id: 'm_series_max', label: 'Apple M1/M2/M3 Pro/Max' },
                { id: 'rtx_30_40', label: 'NVIDIA RTX 30/40 Series' },
                { id: 'intel_amd', label: 'Intel / AMD x86' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setChip(item.id as ChipChoice)}
                  className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    chip === item.id
                      ? 'border-[#10B981] bg-[#10B981]/10 text-text-primary font-bold shadow-2xs'
                      : 'border-border-primary bg-bg-primary text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: System RAM */}
          <div>
            <label className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-text-primary flex items-center gap-2 mb-2">
              <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#10B981] text-white flex items-center justify-center text-[9px] sm:text-[10px]">2</span>
              Unified RAM / VRAM Capacity
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
              {[
                { id: '8gb', label: '8 GB' },
                { id: '16gb', label: '16 GB' },
                { id: '32gb', label: '32 GB' },
                { id: '64gb_plus', label: '64+ GB' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setRam(item.id as RamChoice)}
                  className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                    ram === item.id
                      ? 'border-[#10B981] bg-[#10B981]/10 text-text-primary font-bold shadow-2xs'
                      : 'border-border-primary bg-bg-primary text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Workflow */}
          <div>
            <label className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-text-primary flex items-center gap-2 mb-2">
              <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#10B981] text-white flex items-center justify-center text-[9px] sm:text-[10px]">3</span>
              Primary AI Developer Task
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-xs">
              {[
                { id: 'autocomplete', label: 'Inline Speed' },
                { id: 'in_editor_chat', label: 'In-Editor Chat' },
                { id: 'deep_refactor', label: 'Full Refactor' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setWorkflow(item.id as WorkflowChoice)}
                  className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                    workflow === item.id
                      ? 'border-[#10B981] bg-[#10B981]/10 text-text-primary font-bold shadow-2xs'
                      : 'border-border-primary bg-bg-primary text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Output Recommendation */}
        <div className="lg:col-span-6 bg-bg-primary border border-border-primary rounded-2xl p-4 sm:p-6 flex flex-col justify-between space-y-5 sm:space-y-6 shadow-md">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-border-primary mb-3 sm:mb-4">
              <span className="text-[10px] sm:text-xs font-mono text-text-secondary uppercase font-bold">Recommended Model:</span>
              <span className="text-[10px] sm:text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                100% HARDWARE COMPATIBLE
              </span>
            </div>

            <h4 className="text-xl sm:text-2xl font-black text-text-primary font-mono tracking-tight text-[#10B981]">
              {rec.modelName}
            </h4>
            <p className="text-[11px] sm:text-xs text-text-secondary mt-2 leading-relaxed">
              {rec.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 my-4 sm:my-5">
              <div className="bg-bg-secondary p-2.5 sm:p-3 rounded-xl border border-border-primary font-mono">
                <div className="text-[9px] sm:text-[10px] text-text-secondary uppercase">Est. Generation Speed</div>
                <div className="text-base sm:text-lg font-bold text-text-primary mt-0.5">~{rec.speedTokensPerSec} <span className="text-xs font-normal text-text-secondary">tok/sec</span></div>
              </div>
              <div className="bg-bg-secondary p-2.5 sm:p-3 rounded-xl border border-border-primary font-mono">
                <div className="text-[9px] sm:text-[10px] text-text-secondary uppercase">RAM / VRAM Footprint</div>
                <div className="text-base sm:text-lg font-bold text-text-primary mt-0.5">{rec.vramRequiredGB} GB <span className="text-xs font-normal text-text-secondary">({rec.quantization})</span></div>
              </div>
            </div>

            <div className="space-y-1.5 font-mono text-[11px] sm:text-xs">
              {rec.advantages.map((adv, idx) => (
                <div key={idx} className="flex items-center gap-2 text-text-primary">
                  <Check size={13} className="text-[#10B981] shrink-0" />
                  <span>{adv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* One click terminal launch command */}
          <div className="bg-[#0a0a0d] border border-white/10 rounded-xl overflow-hidden">
            <MacTerminalHeader title="aayaamx-cli — setup">
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 px-2 py-0.5 text-[9px] sm:text-[10px] font-mono rounded bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                {copied ? <Check size={10} className="text-emerald-400" /> : <Copy size={10} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </MacTerminalHeader>

            <div className="p-2.5 sm:p-3 font-mono text-[11px] sm:text-xs text-emerald-400 bg-[#08080a] flex items-center justify-between">
              <span className="truncate mr-2">$ {rec.cliCommand}</span>
              <Terminal size={14} className="shrink-0 text-text-secondary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
