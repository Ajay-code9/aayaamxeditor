import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, EyeOff, FileText } from 'lucide-react';

export default function PrivacyPage() {
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
            16. Legal Posture
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-text-primary leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-text-secondary">
            Last Updated: July 21, 2026
          </p>
        </div>

        {/* Content body */}
        <div className="bg-bg-secondary border border-border-primary rounded-xl p-8 md:p-12 shadow-xs space-y-8 text-xs leading-relaxed text-text-secondary">
          
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-text-primary font-mono uppercase tracking-wide flex items-center gap-2">
              <EyeOff size={14} className="text-[#10B981]" /> 1. Sovereign Offline Core
            </h3>
            <p>
              AayaamX does not collect or upload your source code, configuration setups, directory structural maps, or terminal logs. Your data remains entirely isolated on your local storage device.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold text-text-primary font-mono uppercase tracking-wide flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#10B981]" /> 2. Model Handshake Isolation
            </h3>
            <p>
              When initiating premium model queries, the code payload is transmitted through secure TLS 1.3 tunnels to our isolated proxies. These proxies operate under strict Zero Data Retention policies—data is completely scrubbed from memory instantly once compiled responses are delivered back to you.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold text-text-primary font-mono uppercase tracking-wide flex items-center gap-2">
              <FileText size={14} className="text-[#10B981]" /> 3. Consent & Administrative controls
            </h3>
            <p>
              Any telemetry parameters (such as editor crash codes or boot durations) are strictly opt-in and can be deactivated permanently inside the system configuration settings at any point.
            </p>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
