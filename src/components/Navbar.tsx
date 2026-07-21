/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Sun, Moon, Terminal } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Logo from './Logo';
import TerminalModal from './TerminalModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navLinks = [
    { name: 'Features', to: '/features' },
    { name: 'Pricing', to: '/pricing' },
    { name: 'Enterprise', to: '/enterprise' },
    { name: 'Documentation', to: '/documentation' },
    { name: 'Blog', to: '/blog' },
    { name: 'About', to: '/about' },
  ];

  return (
    <header
      id="header-nav"
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-border-primary/60 bg-bg-primary/80 backdrop-blur-md shadow-xs py-0'
          : 'border-b border-transparent bg-transparent py-2 backdrop-blur-none'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <Link to="/" onClick={() => setIsOpen(false)} className="group flex items-center select-none">
              <span className="sm:hidden"><Logo size="sm" /></span>
              <span className="hidden sm:flex"><Logo size="md" /></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) => 
                  `text-xs font-mono uppercase tracking-wider transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#10B981] after:transition-all hover:after:w-full ${
                    isActive 
                      ? 'text-[#10B981] font-bold after:w-full' 
                      : 'text-text-secondary hover:text-text-primary after:w-0'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Action Button & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              onClick={toggleTheme}
              className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border-primary bg-bg-secondary text-text-primary hover:text-[#10B981] hover:border-[#10B981]/30 focus:outline-none shadow-xs cursor-pointer overflow-hidden transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -15, opacity: 0, rotate: -45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 15, opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  className="flex items-center justify-center"
                >
                  {theme === 'light' ? (
                    <Moon size={15} className="stroke-[2.5]" />
                  ) : (
                    <Sun size={15} className="stroke-[2.5] text-amber-500" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            <Link
              to="/signin"
              className="text-xs font-mono uppercase tracking-wider text-text-secondary transition-colors hover:text-text-primary"
            >
              Sign In
            </Link>
            <Link
              to="/download"
              className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#00106B] via-[#0284C7] to-[#10B981] hover:brightness-110 px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-[#00106B]/20 transition-all active:scale-98"
            >
              Download
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Theme Toggle + Menu button */}
          <div className="flex md:hidden items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              onClick={toggleTheme}
              className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border-primary bg-bg-secondary text-text-primary focus:outline-none shadow-xs cursor-pointer overflow-hidden transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -15, opacity: 0, rotate: -45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 15, opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  className="flex items-center justify-center"
                >
                  {theme === 'light' ? (
                    <Moon size={15} className="stroke-[2.5]" />
                  ) : (
                    <Sun size={15} className="stroke-[2.5] text-amber-500" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-text-secondary hover:bg-bg-secondary hover:text-text-primary focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-b border-border-primary bg-bg-primary"
          >
            <div className="space-y-1 px-6 pb-6 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg py-2.5 text-xs font-mono uppercase tracking-wider text-text-secondary hover:bg-bg-secondary hover:text-text-primary px-3 transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 border-t border-border-primary pt-4 flex flex-col gap-3 px-3">
                <Link
                  to="/signin"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center py-2 text-xs font-mono uppercase tracking-wider text-text-secondary hover:text-text-primary transition-all"
                >
                  Sign In
                </Link>
                <Link
                  to="/download"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00106B] via-[#0284C7] to-[#10B981] py-3 text-xs font-semibold text-white shadow-md"
                >
                  Download AayaamX
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </header>
  );
}
