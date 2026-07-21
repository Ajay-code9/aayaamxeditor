import React from 'react';
import { motion } from 'motion/react';
import HeroBackgroundAnimation from '../components/HeroBackgroundAnimation';
import { Check, HelpCircle, ArrowRight, Star, Sparkles, Building, Briefcase, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const PRICING_PLANS = [
  {
    name: 'Hobby',
    icon: <Zap size={16} className="text-[#666666]" />,
    price: '$0',
    period: 'forever',
    description: 'Perfect for independent hackers, student developers, and individual exploration of local AI code environments.',
    features: [
      'Local-first repository context indexing',
      '200 premium model requests per month',
      'Sub-character fast code completion engine',
      'Standard multi-language server (LSP) support',
      'One-click keybinding migration from VS Code',
      'Full community support access'
    ],
    cta: 'Download Free',
    ctaLink: '/download',
    popular: false
  },
  {
    name: 'Pro',
    icon: <Star size={16} className="text-[#10B981]" />,
    price: '$20',
    period: 'month',
    description: 'Engineered for professional software developers who require unlimited creative output and workspace-wide context mapping.',
    features: [
      'Unlimited premium model reasoning sessions',
      'Deep multi-file Workspace Agent capabilities',
      'Background compiler validation & auto-patching',
      'Priority fast-queue model request routing',
      'Advanced multi-turn terminal command synthesis',
      'Direct priority developer support',
      'Early access to beta compiler modules'
    ],
    cta: 'Start Pro Trial',
    ctaLink: '/signup',
    popular: true
  },
  {
    name: 'Enterprise',
    icon: <Building size={16} className="text-text-primary" />,
    price: 'Custom',
    period: 'year',
    description: 'Bespoke security architectures, administrative dashboards, and self-hosted model capability for complete privacy.',
    features: [
      'Strict Zero Data Retention (ZDR) guarantee',
      'SSO, SAML authentication and audit log telemetry',
      'Centralized seat license billing & user controls',
      'Self-hosted model deployments (AWS, GCP, Azure)',
      'Dedicated Customer Success & custom fine-tuning',
      'Tailored service-level agreements (SLA)',
      'Custom workspace security profiles'
    ],
    cta: 'Contact Sales',
    ctaLink: '/contact',
    popular: false
  }
];

const MATRIX_FEATURES = [
  { group: 'Core Editor', name: 'Rust/C++ text engine', hobby: true, pro: true, enterprise: true },
  { group: 'Core Editor', name: 'Integrated Terminal Emulator', hobby: true, pro: true, enterprise: true },
  { group: 'Core Editor', name: 'Vim/Emacs emulation layer', hobby: true, pro: true, enterprise: true },
  { group: 'AI Engine', name: 'Predictive inline autocomplete', hobby: 'Standard', pro: 'Ultra-fast', enterprise: 'Ultra-fast' },
  { group: 'AI Engine', name: 'Multi-file refactoring agent', hobby: '1 file at a time', pro: 'Unlimited files', enterprise: 'Unlimited files' },
  { group: 'AI Engine', name: 'Background compiler auto-patching', hobby: false, pro: true, enterprise: true },
  { group: 'AI Engine', name: 'Self-correcting terminal loops', hobby: false, pro: true, enterprise: true },
  { group: 'Security & Compliance', name: 'Local cryptographic vector maps', hobby: true, pro: true, enterprise: true },
  { group: 'Security & Compliance', name: 'Strict Zero Data Retention (ZDR)', hobby: false, pro: 'ZDR opt-in', enterprise: 'Guaranteed contract' },
  { group: 'Security & Compliance', name: 'SSO & Audit Logs', hobby: false, pro: false, enterprise: true },
  { group: 'Support', name: 'Support SLA response times', hobby: 'Best-effort', pro: '< 12 Hours', enterprise: '< 1 Hour' },
];

export default function PricingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-bg-secondary text-text-primary min-h-screen transition-colors duration-300"
    >
      {/* Editorial Title Hero Section */}
      <section className="min-h-[100dvh] flex flex-col justify-center pt-20 md:pt-28 pb-12 border-b border-border-primary relative overflow-hidden bg-bg-primary transition-colors duration-300">
        <HeroBackgroundAnimation variant="page" />
        <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10 text-center my-auto">
          <div className="text-[#10B981] text-xs font-bold tracking-widest uppercase font-mono mb-3">
            02. Direct Pricing
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary mb-6">
            Transparent value. <br />No hidden overhead.
          </h1>
          <p className="text-sm sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Choose the workspace capability that aligns with your engineering speed. Build offline with local capabilities or unlock unlimited contextual model intelligence.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10 pt-16 md:pt-20 pb-20">

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-24">
          {PRICING_PLANS.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl border p-8 flex flex-col justify-between relative transition-all duration-300 h-full ${
                tier.popular
                  ? 'bg-bg-primary border-[#10B981] shadow-lg ring-1 ring-[#10B981]/20 scale-102 lg:scale-105 z-10'
                  : 'bg-bg-primary border-border-primary hover:border-text-secondary/30 shadow-xs'
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-md bg-[#10B981] px-4 py-1 text-[8px] font-bold uppercase tracking-widest text-white flex items-center gap-1.5 shadow-xs">
                  <Sparkles size={9} /> RECOMMENDED FOR PROFESSIONAL FLUIDITY
                </span>
              )}

              <div>
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-lg border ${
                      tier.popular ? 'border-[#10B981]/20 bg-[#10B981]/5' : 'border-border-primary bg-bg-secondary'
                    }`}>
                      {tier.icon}
                    </div>
                    <h3 className="text-lg font-bold text-text-primary font-mono uppercase tracking-wide">
                      {tier.name}
                    </h3>
                  </div>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-1.5 mb-4">
                  <span className="text-5xl font-extrabold text-text-primary tracking-tight">{tier.price}</span>
                  {tier.period && (
                    <span className="text-xs font-semibold text-text-secondary font-mono uppercase">
                      / {tier.period}
                    </span>
                  )}
                </div>

                <p className="text-xs text-text-secondary leading-relaxed mb-8">
                  {tier.description}
                </p>

                <hr className="my-6 border-border-primary" />

                {/* Feature checklist */}
                <ul className="space-y-3.5 mb-8">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-xs text-text-secondary leading-relaxed">
                      <div className="mt-0.5 rounded-full bg-[#10B981]/5 p-0.5 border border-[#10B981]/10 shrink-0">
                        <Check size={11} className="text-[#10B981] stroke-[2.5]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call-to-action button */}
              <Link
                to={tier.ctaLink}
                className={`group inline-flex items-center justify-center gap-1.5 rounded-full px-6 py-4 text-xs font-semibold shadow-xs transition-all w-full text-center ${
                  tier.popular
                    ? 'bg-[#10B981] text-white hover:bg-[#059669]'
                    : 'bg-text-primary text-bg-primary hover:opacity-90'
                }`}
              >
                {tier.cta}
                <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          ))}
        </div>

        {/* Dense Feature Matrix Section */}
        <div className="bg-bg-primary border border-border-primary rounded-xl p-6 md:p-8 mb-24 shadow-xs transition-colors duration-300">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl font-bold text-text-primary tracking-tight">
              Complete Capabilities Matrix
            </h2>
            <p className="text-xs text-text-secondary mt-1.5">
              An exhaustive breakdown of capabilities offered across each tier. All pricing plans operate under secure local encryption.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="border-b border-border-primary text-text-primary font-bold">
                  <th className="py-4 px-2">System Attribute</th>
                  <th className="py-4 px-2 text-center">Hobby</th>
                  <th className="py-4 px-2 text-center text-[#10B981]">Pro</th>
                  <th className="py-4 px-2 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-primary/50 text-text-secondary">
                {MATRIX_FEATURES.map((item, index) => (
                  <tr key={index} className="hover:bg-bg-secondary/40">
                    <td className="py-4 px-2 font-medium text-text-primary">{item.name}</td>
                    <td className="py-4 px-2 text-center">
                      {typeof item.hobby === 'boolean' ? (
                        item.hobby ? <Check size={14} className="text-text-secondary mx-auto" /> : '—'
                      ) : item.hobby}
                    </td>
                    <td className="py-4 px-2 text-center text-[#10B981] font-bold">
                      {typeof item.pro === 'boolean' ? (
                        item.pro ? <Check size={14} className="text-[#10B981] mx-auto" /> : '—'
                      ) : item.pro}
                    </td>
                    <td className="py-4 px-2 text-center">
                      {typeof item.enterprise === 'boolean' ? (
                        item.enterprise ? <Check size={14} className="text-text-primary mx-auto" /> : '—'
                      ) : item.enterprise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing FAQs */}
        <div className="max-w-3xl mx-auto border-t border-border-primary pt-20">
          <h2 className="text-2xl font-extrabold text-text-primary tracking-tight text-center mb-12">
            Frequently Asked Billing Inquiries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-text-primary font-mono uppercase tracking-wide">
                Can I cancel my Pro plan at any point?
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                Yes. Pro contracts are managed on an incremental monthly cycle. Cancel anytime to stop future renewals instantly. No hard locked periods.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-text-primary font-mono uppercase tracking-wide">
                Do you offer educational or OSS discounts?
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                Absolutely. Verified student hackers and active core maintainers of qualified open-source repositories are eligible for free Pro seats. Contact support to set up your keys.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-text-primary font-mono uppercase tracking-wide">
                What does guaranteed local indexing mean?
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                AayaamX builds context indexes entirely on your laptop. Code never leaves your machine unless you run a premium model request, which goes through secure zero-retention servers.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-text-primary font-mono uppercase tracking-wide">
                How does team seat billing operate?
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                Our team license dashboard lets administrative roles allocate, suspend, and migrate seat configurations instantly. Subscriptions scale dynamically with team headcounts.
              </p>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
