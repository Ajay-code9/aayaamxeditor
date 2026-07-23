import React from 'react';

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon';
  theme?: 'dark' | 'light' | 'auto';
}

export default function Logo({ className = '', showSubtitle = true, size = 'md', variant = 'full', theme = 'auto' }: LogoProps) {
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

  const textColorClass = 
    theme === 'light'
      ? 'text-slate-950 font-black'
      : theme === 'dark'
      ? 'text-white'
      : 'text-slate-950 dark:text-white';

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
        {/* CODE AAYAAM Title */}
        <div className={`font-extrabold leading-none ${textColorClass} font-sans flex items-center ${textSizes[size]}`}>
          <span>CODE AAYAAM</span>
        </div>
      </div>
    </div>
  );
}
