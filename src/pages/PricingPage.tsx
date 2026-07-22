import React from 'react';
import { motion } from 'motion/react';
import HeroBackgroundAnimation from '../components/HeroBackgroundAnimation';
import Pricing from '../components/Pricing';

export default function PricingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-bg-secondary text-text-primary min-h-screen pt-12 sm:pt-16 transition-colors duration-300"
    >
      {/* Shared High-Conversion Pricing Component (4 Tiers, 3-Way Switcher, Matrix & FAQs) */}
      <Pricing />
    </motion.div>
  );
}
