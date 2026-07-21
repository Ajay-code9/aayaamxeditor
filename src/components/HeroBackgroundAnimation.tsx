import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Network, ShieldCheck, Cpu, Database, Activity, Code2, Server } from 'lucide-react';

interface HeroBackgroundAnimationProps {
  className?: string;
  variant?: 'hero' | 'page' | 'subtle';
}

// Distributed Backend Architecture Nodes placed on the right side (away from left text column)
const ZIG_ZAG_NODES = [
  {
    id: 'client',
    label: 'HTTP/2 Client',
    sub: 'Payload Request',
    icon: Terminal,
    pos: 'top-[12%] right-[2%] sm:right-[3%] hidden lg:block',
    floatOffset: [0, -8, 0],
    duration: 7,
    delay: 0,
  },
  {
    id: 'gateway',
    label: 'API Gateway',
    sub: 'TLS 1.3 & Rate Limit',
    icon: Network,
    pos: 'top-[26%] right-[1.5%] sm:right-[2%] hidden sm:block',
    floatOffset: [0, 8, 0],
    duration: 8.5,
    delay: 1,
  },
  {
    id: 'auth',
    label: 'Auth & JWT',
    sub: 'Token Context',
    icon: ShieldCheck,
    pos: 'top-[42%] right-[3%] sm:right-[4%] hidden lg:block',
    floatOffset: [0, -10, 0],
    duration: 9,
    delay: 2,
  },
  {
    id: 'engine',
    label: 'Compiler Engine',
    sub: 'Async Runtime',
    icon: Cpu,
    pos: 'top-[58%] right-[1%] sm:right-[2.5%]',
    floatOffset: [0, 10, 0],
    duration: 7.5,
    delay: 0.5,
  },
  {
    id: 'storage',
    label: 'PostgreSQL / Redis',
    sub: '0.2ms Cache Hit',
    icon: Database,
    pos: 'bottom-[12%] right-[14%] sm:right-[20%]',
    floatOffset: [0, -7, 0],
    duration: 8,
    delay: 1.5,
  },
  {
    id: 'telemetry',
    label: 'Worker Telemetry',
    sub: '200 OK (0.24ms)',
    icon: Activity,
    pos: 'bottom-[8%] right-[1.5%] sm:right-[3%]',
    floatOffset: [0, 7, 0],
    duration: 9.5,
    delay: 2.5,
  },
];

// Floating Code Streams - Positioned safely in right outer gutters
const CODE_STREAMS = [
  { code: 'async function handleReq(req) {', pos: 'top-[16%] right-[8%] sm:right-[12%]', duration: 12, delay: 0 },
  { code: '  const session = await auth.verify();', pos: 'top-[22%] right-[12%] sm:right-[16%]', duration: 14, delay: 1 },
  { code: '  const cache = await redis.get(id);', pos: 'top-[34%] right-[2%] sm:right-[4%]', duration: 13, delay: 2 },
  { code: '  return db.query("SELECT *");', pos: 'top-[48%] right-[4%] sm:right-[6%]', duration: 15, delay: 0.5 },
  { code: '  // JIT compiler verified ok', pos: 'bottom-[22%] right-[10%] sm:right-[14%]', duration: 11, delay: 1.5 },
  { code: '  response.json({ ok: true });', pos: 'bottom-[16%] right-[3%] sm:right-[5%]', duration: 13.5, delay: 2 },
];

export default function HeroBackgroundAnimation({ className = '', variant = 'hero' }: HeroBackgroundAnimationProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}>
      {/* 1. Neutral High-Tech Ambient Soft Lights (Zero Red, Pure Neutral Monochromatic Glow) */}
      <motion.div
        animate={{
          x: ['-8%', '8%', '-5%', '-8%'],
          y: ['-8%', '10%', '4%', '-8%'],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[450px] bg-radial from-text-primary/[0.035] via-text-primary/[0.01] to-transparent blur-3xl opacity-70"
      />

      <motion.div
        animate={{
          x: ['8%', '-10%', '4%', '8%'],
          y: ['4%', '-8%', '10%', '4%'],
          scale: [0.9, 1.15, 1, 0.9],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-radial from-slate-400/5 dark:from-slate-200/5 via-transparent to-transparent blur-3xl opacity-50"
      />

      {/* 2. Structural Minimalist Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 100%)',
        }}
      />

      {/* 3. Sleek Subtle Scanning Beams */}
      <motion.div
        animate={{
          y: ['-100%', '220%'],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-text-primary/[0.025] to-transparent blur-sm opacity-50"
      />

      {/* 4. Zig-Zag Distributed Backend Nodes - Visible on ALL screens (Mobile to Desktop) */}
      {variant !== 'subtle' && (
        <div className="absolute inset-0">
          {ZIG_ZAG_NODES.map((node) => {
            const IconComp = node.icon;
            return (
              <motion.div
                key={node.id}
                animate={{
                  y: node.floatOffset,
                  opacity: [0.18, 0.32, 0.18],
                }}
                transition={{
                  duration: node.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: node.delay,
                }}
                className={`absolute ${node.pos} z-0 max-w-[130px] sm:max-w-[170px] transition-opacity duration-300`}
              >
                <div className="flex items-center gap-1.5 sm:gap-2.5 bg-bg-secondary/40 border border-border-primary/30 backdrop-blur-[2px] px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg shadow-2xs scale-90 sm:scale-100 origin-left">
                  <div className="p-1 rounded bg-bg-primary/80 border border-border-primary/40 text-text-primary/70 shrink-0">
                    <IconComp size={11} className="sm:w-3.5 sm:h-3.5 stroke-[2]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] sm:text-[10.5px] font-mono font-semibold text-text-primary/80 truncate leading-tight">
                      {node.label}
                    </div>
                    <div className="text-[8px] sm:text-[9px] font-mono text-text-secondary/60 truncate leading-none mt-0.5">
                      {node.sub}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* 5. Floating Code Streams in Outer Margins - Subtle and spaced out */}
      {variant === 'hero' && (
        <div className="absolute inset-0">
          {CODE_STREAMS.map((item, idx) => (
            <motion.div
              key={idx}
              animate={{
                opacity: [0.1, 0.22, 0.1],
                y: [0, -10, 0],
              }}
              transition={{
                duration: item.duration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: item.delay,
              }}
              className={`absolute ${item.pos} font-mono text-[8.5px] sm:text-[10px] text-text-primary/30 whitespace-nowrap bg-bg-secondary/20 border border-border-primary/20 px-2 py-0.5 rounded backdrop-blur-[1px] hidden xs:block max-w-[180px] sm:max-w-none overflow-hidden text-ellipsis`}
            >
              <span className="text-text-primary/40 font-bold mr-1">›</span>
              {item.code}
            </motion.div>
          ))}
        </div>
      )}

      {/* 6. Subtle Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-text-primary/20"
            style={{
              left: `${(i * 9.5) + 2}%`,
              top: `${(i * 12 + 8) % 85}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.08, 0.3, 0.08],
            }}
            transition={{
              duration: 6 + (i % 3) * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: (i % 4) * 0.8,
            }}
          />
        ))}
      </div>
    </div>
  );
}
