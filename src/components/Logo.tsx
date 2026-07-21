import React from 'react';

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon';
}

export default function Logo({ className = '', showSubtitle = true, size = 'md', variant = 'full' }: LogoProps) {
  // Height sizing
  const heightClasses = {
    sm: 'h-6',
    md: 'h-8 sm:h-9',
    lg: 'h-10 sm:h-12',
    xl: 'h-14 sm:h-16',
  };

  const textSizes = {
    sm: 'text-sm tracking-wider',
    md: 'text-base sm:text-lg tracking-wider',
    lg: 'text-xl sm:text-2xl tracking-widest',
    xl: 'text-3xl sm:text-4xl tracking-widest',
  };

  const subtitleSizes = {
    sm: 'text-[7px] tracking-[0.2em]',
    md: 'text-[8.5px] sm:text-[9.5px] tracking-[0.26em]',
    lg: 'text-[10px] sm:text-[11px] tracking-[0.3em]',
    xl: 'text-[12px] sm:text-[14px] tracking-[0.35em]',
  };

  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <img
          src="/logo-left.svg"
          alt="AayaamX Logo"
          className={`${heightClasses[size]} w-auto shrink-0 object-contain`}
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Brand Icon SVG */}
      <img
        src="/logo-left.svg"
        alt="AayaamX Logo"
        className={`${heightClasses[size]} w-auto shrink-0 object-contain transition-transform duration-300 group-hover:scale-105`}
      />

      {/* Brand Text Block */}
      <div className="flex flex-col justify-center">
        {/* AAYAAMX Title */}
        <div className={`font-extrabold leading-none text-[#00106B] dark:text-white font-sans flex items-center ${textSizes[size]}`}>
          <span>AAYAAMX</span>
        </div>

        {/* Orange Accent Line with Diamond Decoration */}
        <div className="relative w-full h-[2px] bg-gradient-to-r from-[#00106B] via-[#EA580C] to-[#10B981] dark:from-[#38BDF8] dark:via-[#F97316] dark:to-[#34D399] my-0.5 sm:my-1 flex items-center justify-center">
          <div className="absolute flex items-center gap-0.5 px-0.5 bg-bg-primary rounded-full">
            <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 rotate-45 bg-[#EA580C]" />
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rotate-45 bg-[#F97316]" />
            <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 rotate-45 bg-[#EA580C]" />
          </div>
        </div>

        {/* TECHNOLOGIES Subtitle */}
        {showSubtitle && (
          <div className={`font-mono font-bold text-[#16A34A] dark:text-[#34D399] uppercase leading-none ${subtitleSizes[size]}`}>
            TECHNOLOGIES
          </div>
        )}
      </div>
    </div>
  );
}
