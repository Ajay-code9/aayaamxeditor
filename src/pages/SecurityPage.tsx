import React from 'react';
import { motion } from 'motion/react';
import HeroBackgroundAnimation from '../components/HeroBackgroundAnimation';
import { ShieldCheck, EyeOff, Lock, RefreshCw, Key, FileText, Server, AlertTriangle } from 'lucide-react';

const SECURITY_PILLARS = [
  {
    icon: <EyeOff size={18} className="text-[#10B981]" />,
    title: 'Strict zero data retention',
    desc: 'When using premium cloud models, your requests pass through secure, temporary API proxies under a contractually guaranteed Zero Data Retention (ZDR) policy. Code blocks are never cached, logged, or utilized to train future public models.'
  },
  {
    icon: <Lock size={18} className="text-[#10B981]" />,
    title: 'Offline local embeddings',
    desc: 'All vector mappings, file directories, and AST definitions are calculated and indexed strictly on your local hardware. No background directories are uploaded to cloud servers.'
  },
  {
    icon: <ShieldCheck size={18} className="text-[#10B981]" />,
    title: 'Isolated process sandboxing',
    desc: 'The background compilation checking runs entirely inside isolated, non-networked child threads on your OS. It validates code safe execution structures without risking telemetry leaks.'
  },
  {
    icon: <Key size={18} className="text-[#10B981]" />,
    title: 'Custom API Key proxies',
    desc: 'Bring your own corporate API keys. All handshake operations are handled server-side over secure TLS 1.3 tunnels, keeping raw credentials protected from client endpoints.'
  }
];

export default function SecurityPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-bg-primary text-text-primary min-h-screen transition-colors duration-300"
    >
      {/* Title Hero Section */}
      <section className="min-h-[100dvh] flex flex-col justify-center pt-20 md:pt-28 pb-12 border-b border-border-primary relative overflow-hidden bg-bg-primary transition-colors duration-300">
        <HeroBackgroundAnimation variant="page" />
        <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10 text-center my-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-primary leading-tight mb-6">
              Privacy is not a <br />configuration option.
            </h1>
            <p className="text-sm sm:text-lg text-text-secondary leading-relaxed">
              We understand that enterprise codebases contain proprietary IP, customer tokens, and sensitive business logic. AayaamX enforces strict local-first data isolation out of the box.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10 pt-20">

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {SECURITY_PILLARS.map((pil, idx) => (
            <div 
              key={idx}
              className="bg-bg-secondary border border-border-primary rounded-xl p-8 hover:border-text-secondary/30 transition-all space-y-4 shadow-xs"
            >
              <div className="h-10 w-10 rounded-lg bg-bg-primary border border-border-primary flex items-center justify-center">
                {pil.icon}
              </div>
              <h3 className="text-sm font-bold text-text-primary font-mono uppercase tracking-wide">
                {pil.title}
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                {pil.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Security FAQ */}
        <div className="bg-bg-secondary border border-border-primary rounded-xl p-8 md:p-12 shadow-xs space-y-8 max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-text-primary font-mono uppercase tracking-wide border-b border-border-primary pb-4 flex items-center gap-2">
            <Server size={16} className="text-[#10B981]" /> Compliance & Penetration Audits
          </h2>

          <div className="space-y-6 text-xs leading-relaxed text-text-secondary">
            <div className="space-y-2">
              <h4 className="font-bold text-text-primary font-mono uppercase">Has AayaamX undergone an external security audit?</h4>
              <p>
                Yes. AayaamX is audited annually by independent, qualified third-party cyber security firms. We consistently undergo grey-box penetration testing and comprehensive compiler telemetry reviews. Reach out to request our latest report under NDAs.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-bold text-text-primary font-mono uppercase">Does the background compiler require network permissions?</h4>
              <p>
                Absolutely not. The background compiling thread runs 100% disconnected from any external sockets. It relies solely on your local compiler installations (such as <code className="font-bold text-text-primary bg-bg-primary px-1.5 py-0.5 rounded border border-border-primary">tsc</code>, <code className="font-bold text-text-primary bg-bg-primary px-1.5 py-0.5 rounded border border-border-primary">cargo</code>, or <code className="font-bold text-text-primary bg-bg-primary px-1.5 py-0.5 rounded border border-border-primary">go</code>) without initiating network operations.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-text-primary font-mono uppercase">Are vector maps stored on disk encrypted?</h4>
              <p>
                Yes. Your AST vector embeddings map is stored inside a highly optimized SQLite database file locally encrypted with SQLCipher using a key derived from your native hardware credentials.
              </p>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
