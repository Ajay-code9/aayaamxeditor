import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, ShieldCheck, Sparkles, HelpCircle, Plus, Minus, X } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

type BillingMode = 'one-month' | 'monthly' | 'yearly';

interface Tier {
  id: string;
  name: string;
  recommended?: boolean;
  offerBanner?: string;
  price: {
    'one-month': string;
    monthly: string;
    yearly: string;
  };
  originalPrice?: string;
  priceNote: {
    'one-month': string;
    monthly: string;
    yearly: string;
  };
  subtitle?: string;
  usageCredit: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  highlightCta?: boolean;
}

const PRICING_TIERS: Tier[] = [
  {
    id: 'lite',
    name: 'Lite',
    price: {
      'one-month': '$4.5',
      monthly: '$3',
      yearly: '$2.25',
    },
    priceNote: {
      'one-month': 'for one month, billed once',
      monthly: 'per month, billed monthly',
      yearly: 'per month, billed annually',
    },
    usageCredit: '$5 Basic usage + Bonus usage',
    features: [
      'Unlimited Autocomplete',
      'AayaamX Editor - SOLO mode included',
      'Up to 2 concurrent cloud tasks in AayaamX Agent',
      '100% Local-first AST Vector Privacy',
    ],
    ctaText: 'Upgrade plan',
    ctaLink: '/download',
  },
  {
    id: 'pro',
    name: 'Pro',
    recommended: true,
    offerBanner: 'Limited offer: new user 7-day free trial',
    price: {
      'one-month': '$15',
      monthly: '$0',
      yearly: '$7.50',
    },
    originalPrice: '$10',
    priceNote: {
      'one-month': 'for one month, billed once',
      monthly: 'Free for 7 days. Then $10/month. Cancel anytime.',
      yearly: 'per month, billed annually. Cancel anytime.',
    },
    usageCredit: '$20 Basic usage + Bonus usage',
    features: [
      'Unlimited Autocomplete',
      'AayaamX Editor - SOLO mode included',
      'Up to 10 concurrent cloud tasks in AayaamX Agent',
      'Background Compiler Auto-Patching',
      'Priority Fast-Queue Model Routing',
    ],
    ctaText: 'Sign up to start your free trial',
    ctaLink: '/signup',
    highlightCta: true,
  },
  {
    id: 'pro-plus',
    name: 'Pro+',
    price: {
      'one-month': '$45',
      monthly: '$30',
      yearly: '$22.50',
    },
    priceNote: {
      'one-month': 'for one month, billed once',
      monthly: 'per month, billed monthly',
      yearly: 'per month, billed annually',
    },
    subtitle: 'Everything in Pro, plus:',
    usageCredit: '3.5x more usage than Pro',
    features: [
      'Up to 15 concurrent cloud tasks in AayaamX Agent',
      'Priority Model Dispatcher & High-Speed Queue',
      'Multi-turn Workspace Refactoring Agent',
      'Zero-Data Retention (ZDR) Privacy Contract',
    ],
    ctaText: 'Upgrade plan',
    ctaLink: '/download',
  },
  {
    id: 'ultra',
    name: 'Ultra',
    price: {
      'one-month': '$150',
      monthly: '$100',
      yearly: '$75',
    },
    priceNote: {
      'one-month': 'for one month, billed once',
      monthly: 'per month, billed monthly',
      yearly: 'per month, billed annually',
    },
    subtitle: 'Everything in Pro, plus:',
    usageCredit: '20x more usage than Pro',
    features: [
      'Model Early Access (Claude 3.7 & o3-mini Reasoning)',
      'Up to 20 concurrent cloud tasks in AayaamX Agent',
      'Dedicated Priority LLM Router Infrastructure',
      'Custom Team Workspace Security Profiles',
    ],
    ctaText: 'Upgrade plan',
    ctaLink: '/download',
  },
];

const MATRIX_COLUMNS = ['Free', 'Lite', 'Pro', 'Pro+', 'Ultra'];
const MATRIX_ROWS = [
  {
    label: 'Monthly AI Compute Budget',
    values: ['Community Pool', '$5 AI Credits + Bonus', '$20 AI Credits + Bonus', '$90 AI Credits + Bonus', '$400 AI Credits + Bonus'],
  },
  {
    label: 'Model Dispatch Speed',
    tooltip: 'Determines AI request execution speed during high-traffic peak hours',
    values: ['Standard Queue', 'High-Priority Line', 'High-Priority Line', 'Ultra-Fast Dedicated Line', 'Ultra-Fast Dedicated Line'],
    isCheck: [true, true, true, true, true],
  },
  {
    label: 'Inline Code Completion',
    values: ['5,000 / month', 'Unlimited Instant', 'Unlimited Instant', 'Unlimited Instant', 'Unlimited Instant'],
    isCheck: [true, true, true, true, true],
  },
  {
    label: 'Simultaneous Agent Workflows',
    values: ['2 Parallel Tasks', '2 Parallel Tasks', '10 Parallel Tasks', '15 Parallel Tasks', '20 Parallel Tasks'],
    isCheck: [true, true, true, true, true],
  },
  {
    label: 'Solo Agentic IDE Engine',
    values: ['Full Access', 'Full Access', 'Full Access', 'Full Access', 'Full Access'],
    isCheck: [true, true, true, true, true],
  },
  {
    label: 'Early Beta Model Access',
    values: ['Not Included', 'Not Included', 'Not Included', 'Full Access', 'Full Access'],
    isCheck: [false, false, false, true, true],
  },
  {
    label: 'Zero-Data-Retention Privacy',
    values: ['Guaranteed', 'Guaranteed', 'Guaranteed', 'Guaranteed', 'Guaranteed'],
    isCheck: [true, true, true, true, true],
  },
];

const PRICING_FAQS = [
  {
    q: 'How does AI credit billing work in AayaamX?',
    a: 'Every month, your plan gives you a clear dollar credit balance (for example, $20/month on Pro). When you ask the AI to write or edit complex code, small fractions of cents are deducted based on the length of code created. Fast inline autocomplete is 100% free and unlimited!',
  },
  {
    q: 'What is the difference between Monthly Credits and Bonus Credits?',
    a: 'Monthly Credits reset at the start of every billing cycle. Bonus Credits are extra free credits you earn from rewards or referral gifts—they stay in your account forever and never expire.',
  },
  {
    q: 'Do heavy AI reasoning models cost more than light ones?',
    a: 'Yes. Basic code completions and quick edits use lightweight models that cost almost nothing. Deep reasoning tasks using heavy models (like Claude 3.7 or GPT-4o) use slightly more credits per request. You can switch models anytime in your settings.',
  },
  {
    q: 'Can I keep coding if my monthly AI credits finish?',
    a: 'Absolutely! AayaamX never locks you out. If your cloud credits run out, the editor automatically switches to local offline AI models on your laptop. Your typing speed, code editing, and project searching remain 100% free and functional.',
  },
  {
    q: 'How does the 7-day Pro free trial work?',
    a: 'When you create a new account, you get 7 days of full Pro access with $20 of included AI credit completely free. No credit card is required to start your trial, and you will not be charged unless you choose to upgrade.',
  },
  {
    q: 'What happens if an AI request gets cut off or fails?',
    a: 'If an AI model request fails due to a network glitch or system error, zero credits are charged. Our smart billing system automatically checks request health and refunds any interrupted session instantly.',
  },
  {
    q: 'What is your refund policy if I want to cancel?',
    a: 'We offer a simple 14-day money-back guarantee. If you upgrade to any paid tier and decide it is not right for you, send a quick email to support@aayaamx.ai and we will process a full refund right away.',
  },
];

export default function Pricing() {
  const [billingMode, setBillingMode] = useState<BillingMode>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="pricing" className="pt-6 sm:pt-10 pb-16 md:pb-24 bg-bg-primary border-b border-border-primary relative overflow-hidden transition-colors duration-300">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-emerald-500/10 blur-[160px] rounded-full pointer-events-none z-0" />

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary mb-2">
            Pricing
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary">
            Looking for enterprise solutions?{' '}
            <Link to="/enterprise" className="text-text-primary hover:text-emerald-400 font-medium inline-flex items-center gap-1 group">
              Contact us via Enterprise Team <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </p>
        </div>

        {/* 3-Way Billing Switcher Tab */}
        <div className="flex justify-center mb-12 relative z-10">
          <div className="inline-flex items-center p-1 rounded-xl bg-bg-card border border-border-primary shadow-xl">
            <button
              onClick={() => setBillingMode('one-month')}
              className={`px-5 py-2 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${
                billingMode === 'one-month'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/25'
                  : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'
              }`}
            >
              One-Month
            </button>
            <button
              onClick={() => setBillingMode('monthly')}
              className={`px-5 py-2 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${
                billingMode === 'monthly'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/25'
                  : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingMode('yearly')}
              className={`px-5 py-2 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                billingMode === 'yearly'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/25'
                  : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'
              }`}
            >
              <span>Yearly</span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${
                billingMode === 'yearly'
                  ? 'text-slate-950 bg-slate-950/15 border-slate-950/20'
                  : 'text-emerald-500 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
              }`}>
                Save 25%
              </span>
            </button>
          </div>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch mb-24">
          {PRICING_TIERS.map((tier) => {
            const isPro = tier.id === 'pro';

            return (
              <div
                key={tier.id}
                className={`flex flex-col justify-between rounded-2xl transition-all duration-300 relative overflow-hidden ${
                  isPro
                    ? 'border-2 border-emerald-500 bg-bg-card shadow-2xl shadow-emerald-500/10 ring-1 ring-emerald-500/30 z-10'
                    : 'border border-border-primary bg-bg-card/70 hover:border-border-primary/80 shadow-md'
                }`}
              >
                {/* Offer Banner for Pro */}
                {isPro && (
                  <div className="bg-emerald-400 text-slate-950 text-center py-2 px-3 text-xs font-bold font-mono tracking-tight">
                    {tier.offerBanner}
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Tier Name & Recommended Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-extrabold text-text-primary tracking-tight flex items-center gap-2">
                        <span className={isPro ? 'text-emerald-400' : ''}>{tier.name}</span>
                      </h3>
                      {tier.recommended && (
                        <span className="text-[10px] font-mono font-bold text-emerald-400 border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-0.5 rounded">
                          Recommended
                        </span>
                      )}
                    </div>

                    {/* Price Display */}
                    <div className="space-y-1 mb-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl sm:text-5xl font-black text-text-primary font-mono tracking-tight">
                          {tier.price[billingMode]}
                        </span>
                        {isPro && billingMode === 'monthly' && tier.originalPrice && (
                          <span className="text-2xl font-mono text-text-secondary/50 line-through">
                            {tier.originalPrice}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-text-secondary leading-snug">
                        {tier.priceNote[billingMode]}
                      </p>
                    </div>

                    {/* Subtitle / Everything in Pro */}
                    {tier.subtitle && (
                      <p className="text-xs font-bold text-text-primary mb-3">
                        {tier.subtitle}
                      </p>
                    )}

                    {/* Usage Credit Badge */}
                    <div className="mb-6 p-2.5 rounded-lg bg-bg-secondary border border-border-primary/60 text-xs font-mono text-emerald-400 flex items-center gap-2 font-semibold">
                      <Check size={14} className="text-emerald-400 shrink-0" />
                      <span>{tier.usageCredit}</span>
                    </div>

                    {/* Feature List */}
                    <ul className="space-y-3">
                      {tier.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-text-secondary leading-relaxed">
                          <Check size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <Link
                      to={tier.ctaLink}
                      className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all duration-300 text-center cursor-pointer shadow-xs ${
                        tier.highlightCta
                          ? 'bg-emerald-400 text-slate-950 hover:bg-emerald-300 shadow-lg shadow-emerald-500/25'
                          : 'bg-bg-secondary text-text-primary border border-border-primary hover:bg-bg-card hover:border-text-secondary/40'
                      }`}
                    >
                      <span>{tier.ctaText}</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compare Plans Matrix Section */}
        <div className="mb-24">
          <div className="max-w-3xl mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight mb-2">
              Compare Plans
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary">
              Exhaustive comparison of capabilities across all AayaamX developer tiers.
            </p>
          </div>

          <div className="border border-border-primary rounded-2xl overflow-hidden bg-bg-card shadow-xl overflow-x-auto">
            <table className="w-full min-w-[720px] text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-border-primary bg-bg-secondary/60 text-text-primary font-bold">
                  <th className="py-4 px-6 text-sm">Feature Comparison & Plan Specs</th>
                  {MATRIX_COLUMNS.map((col) => (
                    <th key={col} className={`py-4 px-4 text-center ${col === 'Pro' ? 'text-emerald-400 font-extrabold' : ''}`}>
                      <div className="text-sm font-bold">{col}</div>
                      <Link to="/download" className="text-[10px] text-text-secondary hover:text-emerald-400 font-normal inline-flex items-center gap-0.5 mt-1">
                        {col === 'Free' ? 'Download →' : col === 'Pro' ? 'free trial →' : 'Upgrade plan →'}
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border-primary/50 text-text-secondary">
                {MATRIX_ROWS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-bg-secondary/40 transition-colors">
                    <td className="py-4 px-6 font-semibold text-text-primary flex items-center gap-2">
                      <span>{row.label}</span>
                    </td>
                    {row.values.map((val, colIdx) => (
                      <td key={colIdx} className="py-4 px-4 text-center">
                        {val === 'Included' || row.isCheck?.[colIdx] ? (
                          <div className="flex items-center justify-center gap-1.5 text-emerald-400 font-bold">
                            <Check size={14} className="text-emerald-400" />
                            <span>{val !== 'Included' ? val : 'Included'}</span>
                          </div>
                        ) : val === 'Limited' ? (
                          <div className="flex items-center justify-center gap-1.5 text-text-secondary/60">
                            <X size={13} className="text-text-secondary/40" />
                            <span>Limited</span>
                          </div>
                        ) : (
                          <span>{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-4xl mx-auto border-t border-border-primary pt-16">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight text-center mb-10">
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {PRICING_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;

              return (
                <div
                  key={idx}
                  className="rounded-xl border border-border-primary bg-bg-card transition-all overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold text-text-primary">
                      {faq.q}
                    </span>
                    <span className="text-text-secondary">
                      {isOpen ? <X size={15} className="text-emerald-400" /> : <Plus size={15} />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-border-primary/50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Footer contact note */}
          <div className="mt-12 text-center text-xs text-text-secondary">
            Want to know more about Pricing? Contact us by{' '}
            <a href="mailto:support@aayaamx.ai" className="text-emerald-400 font-bold hover:underline">
              support@aayaamx.ai
            </a>
            , read our <Link to="/docs" className="text-emerald-400 font-bold hover:underline">docs</Link>, or view terms of service.
          </div>
        </div>

      </div>
    </section>
  );
}
