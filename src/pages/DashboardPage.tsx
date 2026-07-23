import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Activity,
  User,
  CreditCard,
  Zap,
  Plug,
  Cpu,
  ShieldCheck,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Download,
  Laptop,
  CheckCircle2,
  X,
  Sliders,
  Github,
  Mail,
  ArrowRight,
  TrendingUp,
  Code2,
  Plus,
  Key,
  Database,
  Terminal,
  Lock,
  FileCode,
  ExternalLink,
  Search,
  Command,
  ChevronRight as BreadcrumbArrow,
  Check
} from 'lucide-react';
import Logo from '../components/Logo';

export default function DashboardPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState<
    'activity' | 'account' | 'billing' | 'usage' | 'connectors' | 'mcp' | 'rules'
  >('activity');

  // Interactive Tooltip State for Heatmap
  const [hoveredCell, setHoveredCell] = useState<{
    date: string;
    count: number;
  } | null>(null);

  // Command Palette State
  const [cmdPaletteOpen, setCmdPaletteOpen] = useState(false);

  // Heatmap generation for Tab 1 (Activity & Velocity)
  const MONTHS = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  const heatmapWeeks = Array.from({ length: 48 }, (_, weekIdx) => {
    const monthIndex = Math.floor((weekIdx / 48) * 12);
    const monthName = MONTHS[monthIndex] || 'Jul';

    return Array.from({ length: 7 }, (_, dayIdx) => {
      const isGreen = (weekIdx * 7 + dayIdx) % 17 === 0 || (weekIdx * 7 + dayIdx) % 23 === 0 || weekIdx > 42;
      const level = isGreen ? (weekIdx % 3) + 1 : 0;
      
      const dayNum = Math.min(28, ((weekIdx * 7 + dayIdx) % 28) + 1);
      const dateStr = `${monthName} ${dayNum}`;
      const count = level === 0 ? 0 : level === 1 ? 8 + ((weekIdx + dayIdx) % 5) : level === 2 ? 18 + ((weekIdx * 3) % 8) : 24 + ((weekIdx * 5) % 18);

      return { level, date: dateStr, count };
    });
  });

  // Connectors State
  const [githubConnected, setGithubConnected] = useState(true);
  const [vercelConnected, setVercelConnected] = useState(false);
  const [supabaseConnected, setSupabaseConnected] = useState(false);

  // Tab 6: MCP Servers state
  const [mcpServers, setMcpServers] = useState([
    { name: 'github-mcp-server', version: 'v1.4.0', status: 'Active', description: 'Connects AI agent to GitHub PRs, issues, and repo trees' },
    { name: 'postgres-local-mcp', version: 'v2.1.0', status: 'Active', description: 'Inspects local PostgreSQL schemas and query execution plans' },
    { name: 'desktop-terminal-mcp', version: 'v1.0.2', status: 'Active', description: 'Sub-15ms local shell execution & compiler error parsing daemon' }
  ]);

  // Tab 7: Privacy Toggles
  const [zdrEnabled, setZdrEnabled] = useState(true);
  const [telemetryOptOut, setTelemetryOptOut] = useState(true);

  // Map Tab Names for Breadcrumbs
  const TAB_LABELS: Record<string, string> = {
    activity: 'Activity and Velocity',
    account: 'Account and Identity',
    billing: 'Plan and Billing',
    usage: 'Token and Model Usage',
    connectors: 'Connectors and Repos',
    mcp: 'MCP Extensions',
    rules: 'Privacy and Rules'
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#F8FAFC] text-slate-900 min-h-screen flex font-sans transition-all duration-300 selection:bg-emerald-500/10 selection:text-emerald-700"
    >
      {/* 1. LEFT SIDEBAR NAVIGATION (ENTERPRISE STREAMLINED) */}
      <aside
        className={`bg-white border-r border-slate-200/80 flex flex-col justify-between p-4 shrink-0 min-h-screen sticky top-0 h-screen transition-all duration-300 z-20 shadow-[1px_0_3px_rgba(0,0,0,0.02)] ${
          sidebarCollapsed ? 'w-20 px-2.5' : 'w-64'
        }`}
      >
        <div className="space-y-6">
          {/* Header & Logo */}
          <div className="flex items-center justify-between px-2 pt-1">
            {!sidebarCollapsed ? (
              <div>
                <Logo size="sm" theme="light" />
              </div>
            ) : (
              <div className="mx-auto">
                <Logo variant="icon" size="sm" />
              </div>
            )}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors mx-auto"
              title={sidebarCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
            >
              {sidebarCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-6 text-xs">
            {/* Group 1: Analytics and Metrics */}
            <div className="space-y-1">
              {!sidebarCollapsed && (
                <div className="px-3 pb-1 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                  Analytics and Workspace
                </div>
              )}

              <button
                onClick={() => setActiveTab('activity')}
                title="Activity and Velocity"
                className={`flex items-center transition-all ${
                  sidebarCollapsed
                    ? 'w-11 h-11 mx-auto justify-center rounded-xl'
                    : 'w-full gap-3 px-3 py-2.5 rounded-xl font-semibold'
                } ${
                  activeTab === 'activity'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80'
                }`}
              >
                <Activity size={sidebarCollapsed ? 20 : 16} className={activeTab === 'activity' ? 'text-emerald-400 shrink-0' : 'text-slate-500 shrink-0'} />
                {!sidebarCollapsed && <span>Activity and Velocity</span>}
              </button>

              <button
                onClick={() => setActiveTab('account')}
                title="Account and Identity"
                className={`flex items-center transition-all ${
                  sidebarCollapsed
                    ? 'w-11 h-11 mx-auto justify-center rounded-xl'
                    : 'w-full gap-3 px-3 py-2.5 rounded-xl font-semibold'
                } ${
                  activeTab === 'account'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80'
                }`}
              >
                <User size={sidebarCollapsed ? 20 : 16} className={activeTab === 'account' ? 'text-emerald-400 shrink-0' : 'text-slate-500 shrink-0'} />
                {!sidebarCollapsed && <span>Account and Identity</span>}
              </button>

              <button
                onClick={() => setActiveTab('billing')}
                title="Plan and Billing"
                className={`flex items-center transition-all ${
                  sidebarCollapsed
                    ? 'w-11 h-11 mx-auto justify-center rounded-xl'
                    : 'w-full gap-3 px-3 py-2.5 rounded-xl font-semibold'
                } ${
                  activeTab === 'billing'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80'
                }`}
              >
                <CreditCard size={sidebarCollapsed ? 20 : 16} className={activeTab === 'billing' ? 'text-emerald-400 shrink-0' : 'text-slate-500 shrink-0'} />
                {!sidebarCollapsed && <span>Plan and Billing</span>}
              </button>

              <button
                onClick={() => setActiveTab('usage')}
                title="Token and Model Usage"
                className={`flex items-center transition-all ${
                  sidebarCollapsed
                    ? 'w-11 h-11 mx-auto justify-center rounded-xl'
                    : 'w-full gap-3 px-3 py-2.5 rounded-xl font-semibold'
                } ${
                  activeTab === 'usage'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80'
                }`}
              >
                <Zap size={sidebarCollapsed ? 20 : 16} className={activeTab === 'usage' ? 'text-emerald-400 shrink-0' : 'text-slate-500 shrink-0'} />
                {!sidebarCollapsed && <span>Token and Model Usage</span>}
              </button>
            </div>

            {/* Group 2: Extensions and Security */}
            <div className="space-y-1 pt-1">
              {!sidebarCollapsed && (
                <div className="px-3 pb-1 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                  Extensions and Security
                </div>
              )}

              <button
                onClick={() => setActiveTab('connectors')}
                title="Connectors and Repos"
                className={`flex items-center transition-all ${
                  sidebarCollapsed
                    ? 'w-11 h-11 mx-auto justify-center rounded-xl'
                    : 'w-full gap-3 px-3 py-2.5 rounded-xl font-semibold'
                } ${
                  activeTab === 'connectors'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80'
                }`}
              >
                <Plug size={sidebarCollapsed ? 20 : 16} className={activeTab === 'connectors' ? 'text-emerald-400 shrink-0' : 'text-slate-500 shrink-0'} />
                {!sidebarCollapsed && <span>Connectors and Repos</span>}
              </button>

              <button
                onClick={() => setActiveTab('mcp')}
                title="MCP Extensions"
                className={`flex items-center transition-all ${
                  sidebarCollapsed
                    ? 'w-11 h-11 mx-auto justify-center rounded-xl'
                    : 'w-full gap-3 px-3 py-2.5 rounded-xl font-semibold'
                } ${
                  activeTab === 'mcp'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80'
                }`}
              >
                <Cpu size={sidebarCollapsed ? 20 : 16} className={activeTab === 'mcp' ? 'text-emerald-400 shrink-0' : 'text-slate-500 shrink-0'} />
                {!sidebarCollapsed && <span>MCP Extensions</span>}
              </button>

              <button
                onClick={() => setActiveTab('rules')}
                title="Privacy and Rules"
                className={`flex items-center transition-all ${
                  sidebarCollapsed
                    ? 'w-11 h-11 mx-auto justify-center rounded-xl'
                    : 'w-full gap-3 px-3 py-2.5 rounded-xl font-semibold'
                } ${
                  activeTab === 'rules'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80'
                }`}
              >
                <ShieldCheck size={sidebarCollapsed ? 20 : 16} className={activeTab === 'rules' ? 'text-emerald-400 shrink-0' : 'text-slate-500 shrink-0'} />
                {!sidebarCollapsed && <span>Privacy and Rules</span>}
              </button>
            </div>
          </nav>
        </div>

        {/* Bottom User Profile Widget */}
        <div className="pt-4 border-t border-slate-200/80 space-y-3">
          {!sidebarCollapsed ? (
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-xs font-extrabold text-emerald-700 shrink-0">
                  AD
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-bold text-slate-950 truncate">Ajay Dhiman</p>
                  <p className="text-[10px] text-slate-500 truncate">dev@codeaayaam.com</p>
                </div>
              </div>
              <Link to="/signin" className="text-slate-400 hover:text-slate-900 p-1" title="Sign Out">
                <LogOut size={16} />
              </Link>
            </div>
          ) : (
            <Link
              to="/signin"
              className="w-11 h-11 mx-auto flex items-center justify-center rounded-xl text-slate-500 hover:text-slate-950 hover:bg-slate-100 transition-all"
              title="Sign Out"
            >
              <LogOut size={18} />
            </Link>
          )}
        </div>
      </aside>

      {/* 2. MAIN CONTENT LAYOUT AREA */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* TOP WORKSPACE HEADER BAR */}
        <header className="h-14 bg-white/80 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-10 px-6 flex items-center justify-between shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span className="text-slate-400 font-semibold">Workspace</span>
            <BreadcrumbArrow size={12} className="text-slate-400" />
            <span className="text-slate-400 font-semibold">Ajay Dhiman</span>
            <BreadcrumbArrow size={12} className="text-slate-400" />
            <span className="text-slate-950 font-bold">{TAB_LABELS[activeTab]}</span>
          </div>

          {/* Right Header Controls */}
          <div className="flex items-center gap-4">
            {/* Search Bar / Cmd+K Trigger */}
            <button
              onClick={() => setCmdPaletteOpen(true)}
              className="hidden sm:flex items-center gap-2 bg-slate-100 hover:bg-slate-200/60 border border-slate-200/80 px-3 py-1.5 rounded-lg text-xs text-slate-500 transition-all cursor-pointer"
            >
              <Search size={13} className="text-slate-400" />
              <span>Search workspace...</span>
              <kbd className="bg-white border border-slate-200 px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400 font-bold ml-2">
                ⌘K
              </kbd>
            </button>

            {/* AST Daemon Status Indicator */}
            <div className="hidden md:flex items-center gap-2 bg-slate-50 border border-slate-200/80 px-3 py-1 rounded-lg text-[11px] font-mono text-slate-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>AST Engine: 11.4ms</span>
            </div>

            {/* Upgrade CTA */}
            <Link
              to="/upgrade"
              className="inline-flex items-center gap-1.5 bg-emerald-500 text-slate-950 px-3.5 py-1.5 rounded-lg text-xs font-extrabold hover:bg-emerald-400 shadow-xs transition-all"
            >
              <Sparkles size={13} />
              <span>Pro Plan</span>
            </Link>
          </div>
        </header>

        {/* MAIN BODY CONTAINER */}
        <main className="p-8 sm:p-12 space-y-10 max-w-5xl w-full mx-auto">
          
          {/* TAB 1: ACTIVITY & VELOCITY */}
          {activeTab === 'activity' && (
            <div className="space-y-10">
              <div className="space-y-1.5">
                <h1 className="font-editorial text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight">
                  Hello! Ajay Dhiman
                </h1>
                <p className="text-sm font-normal text-slate-600 leading-relaxed">
                  This is your day <span className="font-bold text-slate-900 font-mono">245</span> of using Code Aayaam IDE.
                </p>
                <div className="pt-2">
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/80 border border-emerald-300/80 px-3 py-0.5 rounded-md inline-block font-mono">
                    # Pro Architect
                  </span>
                </div>
              </div>

              {/* Heatmap Card */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] space-y-6 relative">
                
                {/* Dynamic Floating Hover Tooltip */}
                <AnimatePresence>
                  {hoveredCell && (
                    <motion.div
                      initial={{ opacity: 0, y: 5, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.95 }}
                      transition={{ duration: 0.12 }}
                      className="absolute -top-12 left-1/2 -translate-x-1/2 z-30 bg-white border border-slate-200 shadow-xl rounded-xl px-4 py-2 text-center pointer-events-none"
                    >
                      <div className="text-[11px] font-semibold text-slate-500">{hoveredCell.date}</div>
                      <div className="text-xs font-extrabold text-slate-950">
                        {hoveredCell.count > 0
                          ? `Activated AI capabilities ${hoveredCell.count} times`
                          : 'Activated AI capabilities 0 times'}
                      </div>
                      <div className="w-2.5 h-2.5 bg-white border-r border-b border-slate-200 rotate-45 absolute -bottom-1.5 left-1/2 -translate-x-1/2" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-slate-950 uppercase tracking-wider">
                    IDE Active Days
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">Last 12 Months</span>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-[11px] font-medium text-slate-400 px-6 font-mono">
                    {MONTHS.map((m, idx) => (
                      <span key={idx}>{m}</span>
                    ))}
                  </div>

                  <div className="flex gap-1 overflow-x-auto pb-2 justify-between">
                    <div className="flex flex-col justify-between text-[10px] text-slate-400 font-mono pr-2">
                      <span>M</span>
                      <span>W</span>
                      <span>F</span>
                    </div>

                    <div className="flex gap-1.5 flex-1 justify-between">
                      {heatmapWeeks.map((week, wIdx) => (
                        <div key={wIdx} className="flex flex-col gap-1.5">
                          {week.map((cell, dIdx) => (
                            <div
                              key={dIdx}
                              onMouseEnter={() => setHoveredCell({ date: cell.date, count: cell.count })}
                              onMouseLeave={() => setHoveredCell(null)}
                              className={`w-3 h-3 rounded-xs transition-all cursor-pointer hover:scale-130 hover:z-20 ${
                                cell.level === 0
                                  ? 'bg-slate-100 hover:bg-slate-200'
                                  : cell.level === 1
                                  ? 'bg-emerald-200 hover:bg-emerald-300'
                                  : cell.level === 2
                                  ? 'bg-emerald-400 hover:bg-emerald-500'
                                  : 'bg-emerald-500 hover:bg-emerald-600'
                              }`}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-2 text-[10px] text-slate-400 pt-2 font-mono">
                    <span>Less</span>
                    <div className="w-3 h-3 bg-slate-100 rounded-xs" />
                    <div className="w-3 h-3 bg-emerald-200 rounded-xs" />
                    <div className="w-3 h-3 bg-emerald-400 rounded-xs" />
                    <div className="w-3 h-3 bg-emerald-500 rounded-xs" />
                    <span>More</span>
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white border border-slate-200/80 rounded-2xl p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)] space-y-3">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xs font-bold text-slate-950 uppercase tracking-wider">
                      IDE Code Acceptance Rate
                    </h4>
                    <TrendingUp size={18} className="text-emerald-600" />
                  </div>
                  <div className="text-3xl font-extrabold text-slate-950 font-mono">
                    84.2%
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Calculated across 14,290 inline AI tab completions accepted.
                  </p>
                </div>

                <div className="bg-white border border-slate-200/80 rounded-2xl p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)] space-y-3">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xs font-bold text-slate-950 uppercase tracking-wider">
                      Local AST Index Speed
                    </h4>
                    <Code2 size={18} className="text-emerald-600" />
                  </div>
                  <div className="text-3xl font-extrabold text-slate-950 font-mono">
                    11.4 ms
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Sub-15ms parsing latency powered by local C++ engine.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ACCOUNT & IDENTITY */}
          {activeTab === 'account' && (
            <div className="space-y-8">
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  Account and Developer Identity
                </h1>
                <p className="text-xs sm:text-sm text-slate-600">
                  Manage your seat license, SSH keys, and security profile.
                </p>
              </div>

              <div className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] space-y-6">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-xl font-extrabold text-emerald-700">
                    AD
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-slate-950">Ajay Dhiman</h3>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 rounded-full">
                        Verified Seat
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">dev@codeaayaam.com • Lead Architect</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
                  <div className="space-y-1">
                    <span className="font-bold text-slate-950">Primary Corporate Email</span>
                    <p className="text-slate-600">dev@codeaayaam.com (Verified)</p>
                  </div>
                  <div className="space-y-1">
                    <span className="font-bold text-slate-950">Two-Factor Authentication</span>
                    <p className="text-emerald-700 font-semibold flex items-center gap-1">
                      <CheckCircle2 size={13} /> Enabled via Passkey
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PLAN & BILLING */}
          {activeTab === 'billing' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                    Plan and Subscription Tier
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Manage your active plan limits and billing history.
                  </p>
                </div>

                <Link
                  to="/upgrade"
                  className="bg-emerald-500 text-slate-950 px-5 py-2.5 rounded-xl text-xs font-extrabold hover:bg-emerald-400 shadow-md shadow-emerald-500/20 transition-all"
                >
                  Upgrade to Pro ($20/mo)
                </Link>
              </div>

              <div className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Current Plan</span>
                    <h3 className="text-xl font-bold text-slate-950">Hobby Free Tier</h3>
                    <p className="text-xs text-slate-600">200 fast model requests/month included.</p>
                  </div>
                  <span className="text-2xl font-extrabold text-slate-950 font-mono">$0 <span className="text-xs text-slate-500 font-normal">/ month</span></span>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <h4 className="text-xs font-bold text-slate-950 mb-3 uppercase tracking-wider">Billing History</h4>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-500 flex justify-between">
                    <span>Jul 01, 2026 - Hobby Subscription</span>
                    <span className="font-mono text-slate-950 font-bold">$0.00 (Free)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: TOKEN & MODEL USAGE */}
          {activeTab === 'usage' && (
            <div className="space-y-8">
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  Fast AI Model and Token Quotas
                </h1>
                <p className="text-xs sm:text-sm text-slate-600">
                  Monitor your monthly fast requests and custom provider keys.
                </p>
              </div>

              <div className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                    <Zap size={16} className="text-emerald-600" /> Monthly Fast Model Requests
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-0.5 rounded-full">
                    71% Used
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-950">
                    <span>142 Requests Used</span>
                    <span className="text-slate-500 font-mono">200 / month</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                    <div className="h-full bg-emerald-500 rounded-full w-[71%]" />
                  </div>
                </div>

                <p className="text-xs text-slate-500">
                  Quota resets in 12 days. Need unlimited reasoning sessions?{' '}
                  <Link to="/upgrade" className="text-emerald-700 font-bold hover:underline">
                    Upgrade to Pro
                  </Link>
                </p>
              </div>
            </div>
          )}

          {/* TAB 5: CONNECTORS & REPOS */}
          {activeTab === 'connectors' && (
            <div className="space-y-8">
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  Connector
                </h1>
              </div>

              {/* TRAE-Style Connector Stack Card */}
              <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden divide-y divide-slate-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                
                {/* GitHub Row */}
                <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                      <Github size={20} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-slate-950">GitHub</h3>
                      <p className="text-xs text-slate-500 leading-relaxed max-w-xl">
                        Connect GitHub to enable Code Aayaam access your repositories to read, update, or create pull requests.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setGithubConnected(!githubConnected)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                      githubConnected
                        ? 'bg-emerald-100 text-emerald-700 border border-emerald-300'
                        : 'bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    <span>{githubConnected ? 'Connected' : 'Connect'}</span>
                    <ExternalLink size={13} />
                  </button>
                </div>

                {/* Vercel Row */}
                <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                      <span className="font-extrabold text-sm">▲</span>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-slate-950">Vercel</h3>
                      <p className="text-xs text-slate-500 leading-relaxed max-w-xl">
                        Connect Vercel for seamless deployment and hosting.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setVercelConnected(!vercelConnected)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                      vercelConnected
                        ? 'bg-emerald-100 text-emerald-700 border border-emerald-300'
                        : 'bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    <span>{vercelConnected ? 'Connected' : 'Connect'}</span>
                    <ExternalLink size={13} />
                  </button>
                </div>

                {/* Supabase Row */}
                <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 flex items-center justify-center shrink-0">
                      <Zap size={18} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-slate-950">Supabase</h3>
                      <p className="text-xs text-slate-500 leading-relaxed max-w-xl">
                        Connect Supabase for database and backend services.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setSupabaseConnected(!supabaseConnected)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                      supabaseConnected
                        ? 'bg-emerald-100 text-emerald-700 border border-emerald-300'
                        : 'bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    <span>{supabaseConnected ? 'Connected' : 'Connect'}</span>
                    <ExternalLink size={13} />
                  </button>
                </div>

              </div>
            </div>
          )}

          {/* TAB 6: MCP EXTENSIONS */}
          {activeTab === 'mcp' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                    Model Context Protocol (MCP)
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Connect AI agents to local databases, terminals, and external services.
                  </p>
                </div>

                <button className="bg-slate-950 text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors flex items-center gap-2">
                  <Plus size={15} />
                  <span>Add MCP Server</span>
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {mcpServers.map((server, idx) => (
                  <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <Cpu size={18} className="text-emerald-600" />
                        <h4 className="text-sm font-bold text-slate-950">{server.name}</h4>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                          {server.status} ({server.version})
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 pl-7">{server.description}</p>
                    </div>

                    <span className="text-xs font-mono font-bold text-slate-400 shrink-0">Port 11434</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: PRIVACY & RULES */}
          {activeTab === 'rules' && (
            <div className="space-y-8">
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  Privacy Vault and Zero-Data Rules
                </h1>
                <p className="text-xs sm:text-sm text-slate-600">
                  Guaranteed zero-retention policies and repository context exclusion rules.
                </p>
              </div>

              <div className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] space-y-6">
                <div className="space-y-4">
                  
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-bold text-slate-950">Zero Data Retention (ZDR) SLA</h4>
                      <p className="text-[11px] text-slate-600">Model APIs will never log or train on your repository buffers.</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setZdrEnabled(!zdrEnabled)}
                      className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                        zdrEnabled ? 'bg-emerald-500' : 'bg-slate-300'
                      }`}
                    >
                      <span className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${
                        zdrEnabled ? 'left-5.5' : 'left-0.5'
                      }`} />
                    </button>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-bold text-slate-950">Opt-Out of Anonymous Telemetry</h4>
                      <p className="text-[11px] text-slate-600">Disable background diagnostic crash reports.</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setTelemetryOptOut(!telemetryOptOut)}
                      className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                        telemetryOptOut ? 'bg-emerald-500' : 'bg-slate-300'
                      }`}
                    >
                      <span className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${
                        telemetryOptOut ? 'left-5.5' : 'left-0.5'
                      }`} />
                    </button>
                  </div>

                </div>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* 3. COMMAND PALETTE MODAL (⌘K TRIGGER) */}
      <AnimatePresence>
        {cmdPaletteOpen && (
          <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-start justify-center pt-24 p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border border-slate-200 rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden"
            >
              <div className="p-4 border-b border-slate-200 flex items-center gap-3">
                <Search size={18} className="text-slate-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Type a command or search workspace..."
                  className="w-full text-sm bg-transparent focus:outline-none text-slate-900 placeholder:text-slate-400 font-medium"
                  autoFocus
                />
                <button
                  onClick={() => setCmdPaletteOpen(false)}
                  className="text-xs text-slate-400 hover:text-slate-900 bg-slate-100 px-2 py-1 rounded"
                >
                  ESC
                </button>
              </div>

              <div className="p-3 text-xs space-y-1">
                <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Quick Navigation
                </div>
                <button
                  onClick={() => { setActiveTab('activity'); setCmdPaletteOpen(false); }}
                  className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-100 flex items-center justify-between text-slate-800 font-semibold"
                >
                  <span>Go to Activity & Velocity</span>
                  <kbd className="text-[10px] text-slate-400">Tab 1</kbd>
                </button>
                <button
                  onClick={() => { setActiveTab('connectors'); setCmdPaletteOpen(false); }}
                  className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-100 flex items-center justify-between text-slate-800 font-semibold"
                >
                  <span>Open Connectors (GitHub, Vercel, Supabase)</span>
                  <kbd className="text-[10px] text-slate-400">Tab 5</kbd>
                </button>
                <button
                  onClick={() => { setActiveTab('mcp'); setCmdPaletteOpen(false); }}
                  className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-100 flex items-center justify-between text-slate-800 font-semibold"
                >
                  <span>Manage MCP Servers</span>
                  <kbd className="text-[10px] text-slate-400">Tab 6</kbd>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
