import React, { useState } from 'react';
import { motion } from 'motion/react';
import MacTerminalHeader from './MacTerminalHeader';
import { Palette, Check, Download, Sparkles, Copy } from 'lucide-react';

interface ThemePreset {
  id: string;
  name: string;
  bg: string;
  headerBg: string;
  editorBg: string;
  textColor: string;
  keywordColor: string;
  stringColor: string;
  fnColor: string;
  commentColor: string;
  accentBorder: string;
  swatches: string[];
}

const THEMES: ThemePreset[] = [
  {
    id: 'tokyo-night',
    name: 'Tokyo Night',
    bg: '#1a1b26',
    headerBg: '#16161e',
    editorBg: '#1a1b26',
    textColor: '#a9b1d6',
    keywordColor: '#bb9af7',
    stringColor: '#9ece6a',
    fnColor: '#7aa2f7',
    commentColor: '#565f89',
    accentBorder: '#7aa2f7',
    swatches: ['#1a1b26', '#bb9af7', '#7aa2f7', '#9ece6a'],
  },
  {
    id: 'catppuccin-mocha',
    name: 'Catppuccin Mocha',
    bg: '#1e1e2e',
    headerBg: '#181825',
    editorBg: '#1e1e2e',
    textColor: '#cdd6f4',
    keywordColor: '#cba6f7',
    stringColor: '#a6e3a1',
    fnColor: '#89b4fa',
    commentColor: '#6c7086',
    accentBorder: '#cba6f7',
    swatches: ['#1e1e2e', '#cba6f7', '#89b4fa', '#a6e3a1'],
  },
  {
    id: 'one-dark',
    name: 'One Dark Pro',
    bg: '#21252b',
    headerBg: '#1e2227',
    editorBg: '#282c34',
    textColor: '#abb2bf',
    keywordColor: '#c678dd',
    stringColor: '#98c379',
    fnColor: '#61afef',
    commentColor: '#5c6370',
    accentBorder: '#61afef',
    swatches: ['#282c34', '#c678dd', '#61afef', '#98c379'],
  },
  {
    id: 'gruvbox-dark',
    name: 'Gruvbox Dark',
    bg: '#282828',
    headerBg: '#1d2021',
    editorBg: '#282828',
    textColor: '#ebdbb2',
    keywordColor: '#fb4934',
    stringColor: '#b8bb26',
    fnColor: '#fabd2f',
    commentColor: '#928374',
    accentBorder: '#fabd2f',
    swatches: ['#282828', '#fb4934', '#fabd2f', '#b8bb26'],
  },
  {
    id: 'monokai-pro',
    name: 'Monokai Pro',
    bg: '#2d2a2e',
    headerBg: '#221f22',
    editorBg: '#2d2a2e',
    textColor: '#fcfcfa',
    keywordColor: '#ff6188',
    stringColor: '#a9dc76',
    fnColor: '#78dce8',
    commentColor: '#727072',
    accentBorder: '#ff6188',
    swatches: ['#2d2a2e', '#ff6188', '#78dce8', '#a9dc76'],
  },
  {
    id: 'nord',
    name: 'Nord Frost',
    bg: '#2e3440',
    headerBg: '#242933',
    editorBg: '#2e3440',
    textColor: '#d8dee9',
    keywordColor: '#81a1c1',
    stringColor: '#a3be8c',
    fnColor: '#88c0d0',
    commentColor: '#616e88',
    accentBorder: '#88c0d0',
    swatches: ['#2e3440', '#81a1c1', '#88c0d0', '#a3be8c'],
  },
];

export default function ThemeCustomizerPreview() {
  const [activeTheme, setActiveTheme] = useState<ThemePreset>(THEMES[0]);
  const [copiedConfig, setCopiedConfig] = useState(false);

  const handleCopyConfig = () => {
    const json = JSON.stringify({
      name: activeTheme.name,
      id: activeTheme.id,
      colors: {
        background: activeTheme.editorBg,
        foreground: activeTheme.textColor,
        keywords: activeTheme.keywordColor,
        strings: activeTheme.stringColor,
        functions: activeTheme.fnColor,
        comments: activeTheme.commentColor,
      }
    }, null, 2);
    navigator.clipboard.writeText(json);
    setCopiedConfig(true);
    setTimeout(() => setCopiedConfig(false), 2000);
  };

  return (
    <div className="w-full bg-bg-secondary border border-border-primary rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl relative overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6 pb-4 sm:pb-6 border-b border-border-primary">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 font-mono text-[10px] sm:text-xs font-bold mb-1.5 sm:mb-2">
            <Palette size={12} className="sm:w-3.5 sm:h-3.5" />
            INTERACTIVE THEME STUDIO
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary font-mono tracking-tight">
            Live Editor & Terminal Customizer
          </h3>
          <p className="text-[11px] sm:text-xs text-text-secondary mt-0.5">
            Select a theme below to preview changes on the live terminal screen in real time.
          </p>
        </div>

        <button
          onClick={handleCopyConfig}
          className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-bg-primary hover:bg-bg-secondary border border-border-primary text-text-primary text-[11px] sm:text-xs font-mono font-bold transition-all cursor-pointer shadow-2xs shrink-0 self-start sm:self-auto w-full sm:w-auto"
        >
          {copiedConfig ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
          <span>{copiedConfig ? 'Config Copied!' : 'Copy aayaamx.theme.json'}</span>
        </button>
      </div>

      {/* Theme Swatch Selector - Compact & Scrollable on Mobile */}
      <div className="flex overflow-x-auto sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 pb-2 sm:pb-0 mb-5 scrollbar-thin scrollbar-thumb-border-primary">
        {THEMES.map((theme) => {
          const isSelected = activeTheme.id === theme.id;
          return (
            <button
              key={theme.id}
              onClick={() => setActiveTheme(theme)}
              className={`shrink-0 min-w-[125px] sm:min-w-0 p-2.5 sm:p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between h-20 sm:h-24 ${
                isSelected
                  ? 'border-[#10B981] ring-2 ring-[#10B981]/30 bg-bg-primary shadow-md'
                  : 'border-border-primary bg-bg-primary/50 hover:bg-bg-primary hover:border-text-secondary/30'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-[11px] sm:text-xs font-mono font-bold text-text-primary truncate">
                  {theme.name}
                </span>
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shrink-0" />
                )}
              </div>

              {/* Swatch dots */}
              <div className="flex items-center gap-1 sm:gap-1.5 my-1">
                {theme.swatches.map((color, i) => (
                  <span
                    key={i}
                    className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full border border-black/20 shadow-2xs shrink-0"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              <span className={`text-[9px] font-mono font-bold uppercase tracking-wider ${isSelected ? 'text-[#10B981]' : 'text-text-secondary/60'}`}>
                {isSelected ? 'Active' : 'Select'}
              </span>
            </button>
          );
        })}
      </div>

      {/* Live macOS Code Preview Canvas */}
      <div
        className="rounded-xl sm:rounded-2xl border transition-all duration-300 shadow-2xl overflow-hidden font-mono text-[11px] sm:text-xs"
        style={{ borderColor: activeTheme.accentBorder + '40', backgroundColor: activeTheme.bg }}
      >
        <MacTerminalHeader title={`aayaamx — ${activeTheme.name}`}>
          <span className="text-[9px] sm:text-[10px] font-mono text-gray-400 px-1.5 py-0.5 rounded bg-black/30 border border-white/10">
            {activeTheme.id}.json
          </span>
        </MacTerminalHeader>

        <div className="p-3 sm:p-6 overflow-x-auto space-y-1.5 sm:space-y-2 leading-relaxed" style={{ color: activeTheme.textColor, backgroundColor: activeTheme.editorBg }}>
          <div>
            <span style={{ color: activeTheme.commentColor }}>// AayaamX C++ LLVM Core Compiler Binding</span>
          </div>
          <div className="whitespace-nowrap sm:whitespace-normal">
            <span style={{ color: activeTheme.keywordColor }}>export async function</span>{' '}
            <span style={{ color: activeTheme.fnColor }}>synthesizeAST</span>
            <span style={{ color: activeTheme.textColor }}>(</span>
            <span style={{ color: activeTheme.textColor }}>symbols: SymbolGraph</span>
            <span style={{ color: activeTheme.textColor }}>): </span>
            <span style={{ color: activeTheme.keywordColor }}>Promise</span>
            <span style={{ color: activeTheme.textColor }}>&lt;</span>
            <span style={{ color: activeTheme.fnColor }}>BinaryChunk</span>
            <span style={{ color: activeTheme.textColor }}>&gt; &#123;</span>
          </div>
          <div className="pl-2 sm:pl-4 whitespace-nowrap sm:whitespace-normal">
            <span style={{ color: activeTheme.keywordColor }}>const</span>{' '}
            <span style={{ color: activeTheme.textColor }}>core</span> ={' '}
            <span style={{ color: activeTheme.keywordColor }}>await</span>{' '}
            <span style={{ color: activeTheme.fnColor }}>aayaamxNative</span>.
            <span style={{ color: activeTheme.fnColor }}>bootEngine</span>
            <span style={{ color: activeTheme.textColor }}>(</span>
            <span style={{ color: activeTheme.stringColor }}>"{activeTheme.id}"</span>
            <span style={{ color: activeTheme.textColor }}>);</span>
          </div>
          <div className="pl-2 sm:pl-4">
            <span style={{ color: activeTheme.commentColor }}>// Zero garbage collection overhead, pure LLVM pass</span>
          </div>
          <div className="pl-2 sm:pl-4 whitespace-nowrap sm:whitespace-normal">
            <span style={{ color: activeTheme.keywordColor }}>return</span>{' '}
            <span style={{ color: activeTheme.textColor }}>core</span>.
            <span style={{ color: activeTheme.fnColor }}>emitOptimizedBinary</span>
            <span style={{ color: activeTheme.textColor }}>(symbols);</span>
          </div>
          <div>
            <span style={{ color: activeTheme.textColor }}>&#125;</span>
          </div>
        </div>
      </div>
    </div>
  );
}
