/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FeatureItem, ProblemItem, TestimonialItem, FAQItem, PricingTier } from './types';

export const PROBLEMS: ProblemItem[] = [
  {
    id: 'problem-1',
    scenario: 'Extension bridge latency',
    symptom: 'Wait 1.5 seconds for single-line autocompletes',
    impact: 'Visual micro-stutters and interrupted concentration during deep focus.',
    editorResponse: 'AayaamX integrates the model pipeline directly into the editor’s C++ buffer event loop, delivering context in sub-30ms.'
  },
  {
    id: 'problem-2',
    scenario: 'Blind context fragmentation',
    symptom: 'AI suggests functions that require deprecated dependencies',
    impact: 'Wasted minutes refactoring generated code that doesn’t even compile.',
    editorResponse: 'Our background language server actively compiles changes in memory, ensuring AI edits are statically verified before showing.'
  },
  {
    id: 'problem-3',
    scenario: 'The repetitive copy-paste cycle',
    symptom: 'Manually pasting terminal compiler errors back into a chat panel',
    impact: 'An exhausting dialogue loop that breaks flow state and slows iteration.',
    editorResponse: 'The terminal, text selection, and local compiler share an active multi-agent loop that auto-corrects build breaks instantly.'
  }
];

export const FEATURES: FeatureItem[] = [
  {
    id: 'feat-1',
    title: 'Multi-file Reasoning Canvas',
    description: 'Instruct the editor to add a workspace-wide feature. AayaamX drafts code in memory across endpoints, client states, and configuration files simultaneously.',
    tag: 'Workspace Agent',
    category: 'ai'
  },
  {
    id: 'feat-2',
    title: 'Zero-Latency Core',
    description: 'A lightning-fast native terminal and text editing engine designed in lightweight Rust. Typings render immediately, decoupling UI frame rates from AI backend calls.',
    tag: 'Performance',
    category: 'speed'
  },
  {
    id: 'feat-3',
    title: 'Type-Safe Code Synthesis',
    description: 'Every recommendation is processed through an integrated background compiler. The editor rejects completions that would fail static analysis or trigger TypeScript errors.',
    tag: 'Static Check',
    category: 'core'
  },
  {
    id: 'feat-4',
    title: 'Adaptive Key-Command Focus',
    description: 'A completely keyboard-centric command palette that keeps your fingers off the mouse. Seamlessly toggle agent instructions, file diff views, and compiler diagnostics.',
    tag: 'System Design',
    category: 'ux'
  },
  {
    id: 'feat-5',
    title: 'Local Context Mapping',
    description: 'AayaamX builds a local, encrypted vector map of your entire directory. It tracks package structures, variable scopes, and recent edits without uploading your repository to external servers.',
    tag: 'Privacy',
    category: 'core'
  },
  {
    id: 'feat-6',
    title: 'Sub-character Fast Completions',
    description: 'Predictive multi-token stream guessing. It doesn’t just finish your current word; it maps out the logical structure of your next three lines as you type.',
    tag: 'Intelligence',
    category: 'speed'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'The direct compilation bridge is what set AayaamX apart. I asked it to refactor a complex nested router in our monorepo; it completed the edits across four files in 8 seconds, and it built without a single compiler error on the first run.',
    author: 'Elena Rostova',
    role: 'Principal Engineer',
    company: 'Linear Systems'
  },
  {
    id: 'test-2',
    quote: 'Extension-based copilots feel like a separate layer you talk to. AayaamX is different—the AI feels like the fabric of the cursor itself. It understands the active memory constraints and type declarations better than standard lsp setups.',
    author: 'Marcus Vance',
    role: 'Lead Architect',
    company: 'Stripe Billing'
  },
  {
    id: 'test-3',
    quote: 'We moved our backend engineering group to AayaamX. Zero data retention policies, local-first repository indexing, and immediate speed improvements made it an easy decision for our security auditors.',
    author: 'Sarah Jenkins',
    role: 'VP of Platform',
    company: 'Vercel Labs'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How is AayaamX faster than extension-based AI integrations?',
    answer: 'Standard extensions communicate with the editor over slow JSON-RPC bridges, which must serialize full text documents on every keypress. AayaamX embeds its context engine directly in the native C++ buffer state, avoiding serialization and enabling instant sub-30ms local reasoning loops.'
  },
  {
    id: 'faq-2',
    question: 'Does AayaamX upload my proprietary code to train models?',
    answer: 'Absolutely not. We guarantee enterprise-grade privacy out of the box. All custom vector mapping and symbol indexes are calculated locally on your machine. Our API endpoints operate under a strict zero-retention policy—your code is never saved, cached, or used to train public models.'
  },
  {
    id: 'faq-3',
    question: 'Can I import my existing shortcuts and settings?',
    answer: 'Yes. On your very first launch, AayaamX offers a one-click migration to copy over your keybindings, theme colors, and custom configuration files directly from VS Code, Cursor, or Vim. You won’t have to re-learn standard muscle memory.'
  },
  {
    id: 'faq-4',
    question: 'How does the background compiler validation work?',
    answer: 'While you edit or review AI plans, AayaamX runs an isolated headless build in the background. It analyzes imports, checks typings, and tests dependencies. If an AI draft introduces a reference error or breaks a contract, the editor automatically prompts the LLM to patch the code before presenting it to you.'
  },
  {
    id: 'faq-5',
    question: 'Does it support language servers and remote containers?',
    answer: 'Yes. It features full support for SSH connections, Dev Containers, and native language servers (LSP) across more than 40 programming languages, combining remote flexibility with high-performance local AI indexing.'
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Hobby',
    price: '$0',
    period: 'forever',
    description: 'Perfect for independent hackers, student developers, and individual exploration of AI-assisted code environments.',
    features: [
      'Local-first repository context indexing',
      '200 premium model requests per month',
      'Sub-character fast code completion engine',
      'Standard multi-language server (LSP) support',
      'One-click keybinding migration from VS Code'
    ],
    ctaText: 'Download Free',
    popular: false
  },
  {
    name: 'Pro',
    price: '$20',
    period: 'month',
    description: 'Engineered for professional software developers who require unlimited creative output and context mapping.',
    features: [
      'Unlimited premium model reasoning sessions',
      'Deep multi-file Workspace Agent capabilities',
      'Background compiler validation and error-patching',
      'Priority fast-queue model request routing',
      'Advanced multi-turn terminal command synthesis',
      'Direct priority developer support'
    ],
    ctaText: 'Start Pro Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'year',
    description: 'Bespoke security architectures, administrative dashboards, and self-hosted model capability for complete privacy.',
    features: [
      'Strict Zero Data Retention (ZDR) guarantee',
      'SSO, SAML authentication and audit log telemetry',
      'Centralized seat license billing & user controls',
      'Self-hosted model deployments (AWS, GCP, Azure)',
      'Dedicated Customer Success & custom fine-tuning',
      'Tailored service-level agreements (SLA)'
    ],
    ctaText: 'Contact Sales',
    popular: false
  }
];
