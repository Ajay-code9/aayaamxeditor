/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  tag?: string;
  category: 'core' | 'ai' | 'speed' | 'ux';
}

export interface ProblemItem {
  id: string;
  scenario: string;
  symptom: string;
  impact: string;
  editorResponse: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaText: string;
  popular: boolean;
}
