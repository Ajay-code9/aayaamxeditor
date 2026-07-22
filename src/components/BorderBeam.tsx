import React from 'react';

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export default function BorderBeam({
  className = '',
  size = 200,
  duration = 15,
  borderWidth = 1.5,
  colorFrom = '#10B981',
  colorTo = '#38BDF8',
  delay = 0,
}: BorderBeamProps) {
  return (
    <div
      style={
        {
          '--size': size,
          '--duration': duration,
          '--anchor': 90,
          '--border-width': borderWidth,
          '--color-from': colorFrom,
          '--color-to': colorTo,
          '--delay': `-${delay}s`,
        } as React.CSSProperties
      }
      className={`pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] ${className}`}
    >
      <div
        className="absolute aspect-square w-full rounded-full bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent animate-border-beam"
        style={{
          offsetPath: 'rect(0 auto auto 0 round 16px)',
          animationDuration: `${duration}s`,
          animationDelay: `-${delay}s`,
        }}
      />
    </div>
  );
}
