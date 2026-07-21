/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Shield, ShieldCheck, Lock, HardDrive, KeyRound } from 'lucide-react';

export default function Security() {
  const safetyFeatures = [
    {
      title: 'Local Vector Store',
      desc: 'All embeddings and semantic indexes are calculated locally using our integrated C++ vector engine, keeping your source tree offline.',
      icon: <HardDrive size={18} className="text-[#10B981]" />
    },
    {
      title: 'Zero Retention API',
      desc: 'Every model request runs through TLS 1.3 tunnels with verified zero-retention guarantees. Your proprietary inputs are never cached or logged.',
      icon: <Lock size={18} className="text-[#10B981]" />
    },
    {
      title: 'Bespoke Private Gateway',
      desc: 'Teams can bypass cloud pipelines completely. Configure AayaamX to connect directly to local Ollama pipelines or self-hosted AWS endpoints.',
      icon: <KeyRound size={18} className="text-[#10B981]" />
    }
  ];

  return (
    <section id="security" className="py-24 md:py-32 bg-bg-primary border-b border-border-primary relative transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Security Information Copy on Left */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-[#10B981] text-xs font-bold tracking-widest uppercase font-mono">
              06. Enterprise Security
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary leading-tight">
              Absolute privacy. <br />No data leakage.
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Software engineering is built on trust. AayaamX respects intellectual property with default boundaries. We never train public networks on your code.
            </p>
            <p className="text-xs sm:text-sm text-text-secondary/70 leading-relaxed">
              Our core architecture separates context collation from model evaluation. This guarantees that your proprietary logic, API secrets, and structural dependencies remain local.
            </p>

            <div className="pt-4 flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#10B981]/5 text-[#10B981]">
                <ShieldCheck size={20} className="stroke-[2.5]" />
              </div>
              <div>
                <div className="text-xs font-bold text-text-primary uppercase tracking-wider font-mono">SOC2 Compliant Architecture</div>
                <div className="text-[10px] text-text-secondary font-mono">Audited data channels and strict workspace compartmentalization</div>
              </div>
            </div>
          </div>

          {/* Feature Grid List on Right */}
          <div className="lg:col-span-7 space-y-6">
            {safetyFeatures.map((feat, idx) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex items-start gap-5 p-6 rounded-xl border border-border-primary bg-bg-secondary hover:border-text-secondary/30 transition-all"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-bg-primary border border-border-primary shadow-xs">
                  {feat.icon}
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-sm font-bold text-text-primary font-mono uppercase tracking-wider">{feat.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed max-w-xl">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
