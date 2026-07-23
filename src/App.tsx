import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';

// Page Imports
import Home from './pages/Home';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import EnterprisePage from './pages/EnterprisePage';
import DownloadPage from './pages/DownloadPage';
import DocsPage from './pages/DocsPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import SecurityPage from './pages/SecurityPage';
import CustomersPage from './pages/CustomersPage';
import CommunityPage from './pages/CommunityPage';
import ApiPage from './pages/ApiPage';
import OpenSourcePage from './pages/OpenSourcePage';
import ChangelogPage from './pages/ChangelogPage';
import RoadmapPage from './pages/RoadmapPage';
import StatusPage from './pages/StatusPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import OnboardingPage from './pages/OnboardingPage';
import DashboardPage from './pages/DashboardPage';
import DashboardSettingsPage from './pages/DashboardSettingsPage';
import UpgradePage from './pages/UpgradePage';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div id="app-root" className="min-h-screen bg-bg-primary text-text-primary flex flex-col justify-between selection:bg-[#10B981]/10 selection:text-[#10B981]">
          <div>
            <Navbar />
            <main id="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/features" element={<FeaturesPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/enterprise" element={<EnterprisePage />} />
                <Route path="/download" element={<DownloadPage />} />
                <Route path="/documentation" element={<DocsPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/security" element={<SecurityPage />} />
                <Route path="/customers" element={<CustomersPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/api" element={<ApiPage />} />
                <Route path="/opensource" element={<OpenSourcePage />} />
                <Route path="/changelog" element={<ChangelogPage />} />
                <Route path="/roadmap" element={<RoadmapPage />} />
                <Route path="/status" element={<StatusPage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/onboarding" element={<OnboardingPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/settings" element={<DashboardSettingsPage />} />
                <Route path="/upgrade" element={<UpgradePage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}
