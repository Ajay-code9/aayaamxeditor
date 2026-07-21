/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Apple, Download, Terminal, ArrowRight, Check, Copy, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const installCmd = 'curl -fsSL https://aayaamx.build/install.sh | sh';

  function handleCopy() {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const footerLinks = {
    Product: [
      { name: 'Features', to: '/features' },
      { name: 'Pricing Plans', to: '/pricing' },
      { name: 'Enterprise Environments', to: '/enterprise' },
      { name: 'Download Native Build', to: '/download' }
    ],
    Resources: [
      { name: 'Documentation Hub', to: '/documentation' },
      { name: 'Developer APIs', to: '/api' },
      { name: 'Community Forums', to: '/community' },
      { name: 'Roadmap Goals', to: '/roadmap' }
    ],
    Company: [
      { name: 'Security Trust Posture', to: '/security' },
      { name: 'Careers & Hiring', to: '/careers' },
      { name: 'Product Changelog', to: '/changelog' },
      { name: 'Operational Status', to: '/status' }
    ]
  };

  return (
    <footer id="download" className="bg-bg-primary text-text-secondary pt-24 pb-12 border-t border-border-primary relative overflow-hidden transition-colors duration-300">
      {/* Background radial spotlight */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-radial from-[#10B981]/5 to-transparent blur-3xl dark:from-[#10B981]/10" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        
        {/* High-Impact Download / Shell CTA Card */}
        <div className="rounded-2xl border border-border-primary bg-bg-secondary p-8 md:p-12 mb-20 relative overflow-hidden flex flex-col md:flex-row gap-12 items-center justify-between shadow-xs">
          <div className="space-y-4 max-w-md">
            <div className="text-[#10B981] text-xs font-bold tracking-widest uppercase font-mono flex items-center gap-1.5">
              <Terminal size={12} />
              Instant Installation
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight leading-tight">
              Compile your first block of code tonight.
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Available for macOS (Apple Silicon / Intel), Windows 11 x64, and Linux (amd64 / arm64). Migrate settings in seconds.
            </p>

            {/* Quick OS Download buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/download"
                className="group inline-flex items-center gap-2 rounded-lg bg-text-primary px-4 py-2 text-xs font-bold text-bg-primary shadow-sm hover:opacity-90 transition-all"
              >
                <Apple size={13} />
                macOS Silicon
              </Link>
              <Link
                to="/download"
                className="inline-flex items-center gap-2 rounded-lg bg-bg-secondary border border-border-primary px-4 py-2 text-xs font-semibold text-text-primary hover:bg-bg-primary transition-all"
              >
                <Download size={13} />
                Windows 11
              </Link>
            </div>
          </div>

          {/* Styled Shell install block for CLI installation */}
          <div className="w-full max-w-md bg-bg-primary border border-border-primary rounded-xl p-5 font-mono text-xs text-text-primary dark:bg-[#070707]">
            <div className="flex justify-between items-center pb-3 border-b border-border-primary mb-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-border-primary" />
                <span className="w-2.5 h-2.5 rounded-full bg-border-primary" />
                <span className="text-[10px] text-text-secondary">terminal installer</span>
              </div>
              <button
                onClick={handleCopy}
                className="text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1 px-2 py-1 rounded hover:bg-bg-secondary"
              >
                {copied ? <Check size={11} className="text-emerald-500" /> : <Copy size={11} />}
                <span className="text-[10px]">{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <div className="py-2 flex items-center gap-2 select-all overflow-x-auto whitespace-nowrap text-[#10B981] font-bold">
              <span className="text-text-secondary select-none">$</span>
              <span>{installCmd}</span>
            </div>
          </div>
        </div>

        {/* Traditional Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-16 border-b border-border-primary">
          
          {/* Logo & Manifesto column */}
          <div className="col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <Logo size="md" />
            </Link>
            <p className="text-xs text-text-secondary leading-relaxed max-w-sm">
              AayaamX Technologies — The AI-first development suite designed to make programming fluid. Built for high performance, intelligence, and privacy.
            </p>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary font-mono">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      className="text-xs text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom copyright section */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-text-secondary">
          <p>© 2026 AayaamX Technologies Inc. All rights reserved.</p>
          <div className="flex gap-6 font-mono text-[10px]">
            <Link to="/security" className="hover:text-text-primary transition-colors">Security Trust Posture</Link>
            <Link to="/privacy" className="hover:text-text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-text-primary transition-colors">Terms of Service</Link>
            <Link to="/opensource" className="hover:text-text-primary transition-colors">Open Source Core</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
