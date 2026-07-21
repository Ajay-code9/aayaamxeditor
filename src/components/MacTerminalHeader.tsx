import React from 'react';
import { Terminal, X, Minus, Maximize2 } from 'lucide-react';

interface MacTerminalHeaderProps {
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export const MacTerminalHeader: React.FC<MacTerminalHeaderProps> = ({
  title = "aayaamx-workspace",
  subtitle,
  icon,
  children,
  className = "",
}) => {
  return (
    <div className={`group/mac-controls flex items-center justify-between px-3.5 py-2.5 bg-gradient-to-b from-[#2a2a2e] via-[#202024] to-[#18181c] border-b border-[#0a0a0c] select-none shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] ${className}`}>
      {/* Left side: Authentic macOS traffic light buttons */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 mr-2">
          {/* Red Close button */}
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] flex items-center justify-center text-black/70 shadow-xs cursor-pointer hover:brightness-105 active:brightness-90 transition-all">
            <X size={7} className="opacity-0 group-hover/mac-controls:opacity-100 stroke-[3] transition-opacity" />
          </div>
          {/* Yellow Minimize button */}
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] flex items-center justify-center text-black/70 shadow-xs cursor-pointer hover:brightness-105 active:brightness-90 transition-all">
            <Minus size={7} className="opacity-0 group-hover/mac-controls:opacity-100 stroke-[3] transition-opacity" />
          </div>
          {/* Green Maximize button */}
          <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] flex items-center justify-center text-black/70 shadow-xs cursor-pointer hover:brightness-105 active:brightness-90 transition-all">
            <Maximize2 size={6} className="opacity-0 group-hover/mac-controls:opacity-100 stroke-[3] transition-opacity" />
          </div>
        </div>

        {/* Title / Command Path */}
        <div className="flex items-center gap-1.5 font-mono">
          {icon || <Terminal size={11} className="text-[#10B981]" />}
          <span className="font-semibold text-[#e4e4e7] text-[11px] tracking-tight">{title}</span>
          {subtitle && <span className="text-[#71717a] text-[10px] hidden sm:inline">— {subtitle}</span>}
        </div>
      </div>

      {/* Right side custom controls or tabs */}
      {children && (
        <div className="flex items-center gap-2">
          {children}
        </div>
      )}
    </div>
  );
};

export default MacTerminalHeader;
