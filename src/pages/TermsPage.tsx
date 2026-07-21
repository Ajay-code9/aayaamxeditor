import React from 'react';
import { motion } from 'motion/react';
import { FileText, Compass, AlertTriangle } from 'lucide-react';

export default function TermsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-bg-primary text-text-primary min-h-screen py-20 md:py-28 transition-colors duration-300"
    >
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        
        {/* Title */}
        <div className="max-w-3xl mb-12">
          <div className="text-[#10B981] text-xs font-bold tracking-widest uppercase font-mono mb-4">
            17. Legal Posture
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-text-primary leading-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-xs font-mono text-text-secondary">
            Last Updated: July 21, 2026
          </p>
        </div>

        {/* Content body */}
        <div className="bg-bg-secondary border border-border-primary rounded-xl p-8 md:p-12 shadow-xs space-y-8 text-xs leading-relaxed text-text-secondary">
          
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-text-primary font-mono uppercase tracking-wide flex items-center gap-2">
              <Compass size={14} className="text-[#10B981]" /> 1. Operational License
            </h3>
            <p>
              By installing the compiled AayaamX native application or utilizing our local programmatic proxy, you agree to comply with standard individual or seat-allocated corporate license structures.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold text-text-primary font-mono uppercase tracking-wide flex items-center gap-2">
              <AlertTriangle size={14} className="text-[#10B981]" /> 2. Model Limits & Usage Boundaries
            </h3>
            <p>
              Users are strictly prohibited from utilizing generative pipelines for malicious exploits, automated reverse-engineering of secure corporate systems, or high-volume spam logic generation.
            </p>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
