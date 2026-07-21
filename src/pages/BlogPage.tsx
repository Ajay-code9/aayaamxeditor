import React, { useState } from 'react';
import { motion } from 'motion/react';
import HeroBackgroundAnimation from '../components/HeroBackgroundAnimation';
import { Calendar, User, Clock, ArrowRight, Tag, BookOpen, Search } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 'blog-1',
    title: 'Compilers as the Ultimate AI Context Layer',
    excerpt: 'Standard extension sidebar interfaces are bottlenecked by slow serialization bridges. Learn how hooking the generative model directly into the native AST stream removes latency and resolves type-checks.',
    category: 'Engineering',
    author: 'Elena Rostova',
    date: 'July 14, 2026',
    readTime: '6 min read',
    content: 'Long form content summary...'
  },
  {
    id: 'blog-2',
    title: 'Migrating from Electron to Native C++ and Rust',
    excerpt: 'A comprehensive technical audit on why we chose to rewrite our editor core from web technology to a native multithreaded engine, achieving sub-1.2ms keypress rendering latency.',
    category: 'AI',
    author: 'Marcus Vance',
    date: 'June 29, 2026',
    readTime: '8 min read',
    content: 'Long form content summary...'
  },
  {
    id: 'blog-3',
    title: 'Why local vector models are ready for production',
    excerpt: 'How we leverage compressed local embedding indexes to track full-context structural scopes offline, protecting corporate safety boundaries completely.',
    category: 'Product updates',
    author: 'Sarah Jenkins',
    date: 'June 18, 2026',
    readTime: '5 min read',
    content: 'Long form content summary...'
  },
  {
    id: 'blog-4',
    title: 'AayaamX Stable v1.0 Launch & Public Release',
    excerpt: 'Announcing our first public stable build. Explore our background validation engines, keybinding migrations, and early pricing tiers.',
    category: 'Release notes',
    author: 'AayaamX Core Team',
    date: 'June 12, 2026',
    readTime: '4 min read',
    content: 'Long form content summary...'
  }
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Engineering', 'AI', 'Product updates', 'Release notes'];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-bg-primary text-text-primary min-h-screen transition-colors duration-300"
    >
      {/* Title Hero Section */}
      <section className="min-h-[100dvh] flex flex-col justify-center pt-20 md:pt-28 pb-12 border-b border-border-primary relative overflow-hidden bg-bg-primary transition-colors duration-300">
        <HeroBackgroundAnimation variant="page" />
        <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10 text-center my-auto">
          <div className="text-[#10B981] text-xs font-bold tracking-widest uppercase font-mono mb-4">
            05. Core Chronicles
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary leading-none mb-6">
            The AayaamX Blog
          </h1>
          <p className="text-sm sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Detailed engineering breakdowns, design analyses, and technical release announcements straight from our core compiler group.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10 pt-16 md:pt-20 pb-20">

        {/* Categories and Search Filters */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center pb-8 border-b border-border-primary mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                  selectedCategory === cat 
                    ? 'bg-text-primary text-bg-primary shadow-xs' 
                    : 'bg-bg-secondary text-text-secondary border border-border-primary hover:border-text-secondary/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary/60" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs bg-bg-secondary border border-border-primary rounded-lg pl-9 pr-3.5 py-2.5 focus:outline-none focus:border-text-secondary/40 text-text-primary font-mono"
              placeholder="Search articles..."
            />
          </div>
        </div>

        {/* Featured Card or Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {filteredPosts.map((post) => (
            <div 
              key={post.id}
              className="bg-bg-secondary border border-border-primary rounded-xl p-8 hover:border-text-secondary/30 hover:shadow-xs transition-all flex flex-col justify-between h-full group"
            >
              <div className="space-y-4">
                {/* Meta details */}
                <div className="flex items-center gap-3 text-[10px] font-mono text-text-secondary/70 uppercase">
                  <span className="flex items-center gap-1">
                    <Calendar size={11} /> {post.date}
                  </span>
                  <span className="h-3 w-px bg-border-primary" />
                  <span className="flex items-center gap-1">
                    <Clock size={11} /> {post.readTime}
                  </span>
                </div>

                <span className="inline-block text-[9px] font-mono font-bold uppercase tracking-wider bg-[#10B981]/5 border border-[#10B981]/10 text-[#10B981] px-2.5 py-1 rounded w-fit">
                  {post.category}
                </span>

                <h3 className="text-lg sm:text-xl font-bold text-text-primary tracking-tight leading-tight group-hover:text-[#10B981] transition-colors">
                  {post.title}
                </h3>

                <p className="text-xs text-text-secondary leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center justify-between pt-6 mt-8 border-t border-border-primary">
                <div className="flex items-center gap-2.5 text-xs text-text-primary font-medium">
                  <div className="h-7 w-7 rounded-full bg-text-primary text-bg-primary flex items-center justify-center font-extrabold text-[10px] uppercase">
                    {post.author.charAt(0)}
                  </div>
                  <span>{post.author}</span>
                </div>
                
                <span className="text-xs font-mono font-bold text-[#10B981] flex items-center gap-1 group-hover:underline cursor-pointer">
                  Read article <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          ))}

          {filteredPosts.length === 0 && (
            <div className="col-span-2 py-20 text-center space-y-3 bg-bg-secondary border border-dashed border-border-primary rounded-xl">
              <BookOpen size={24} className="text-text-secondary/40 mx-auto" />
              <h4 className="text-sm font-bold text-text-primary font-mono uppercase">No publications found</h4>
              <p className="text-xs text-text-secondary">Try updating your category tab or checking spelling filters.</p>
            </div>
          )}
        </div>

      </div>
    </motion.div>
  );
}
